package com.dtstack.rdos.engine.service.zk.cache;

import com.dtstack.rdos.commom.exception.RdosException;
import com.dtstack.rdos.common.config.ConfigParse;
import com.dtstack.rdos.engine.execution.base.JobClient;
import com.dtstack.rdos.engine.execution.base.queue.ClusterQueueInfo;
import com.dtstack.rdos.engine.execution.base.queue.GroupInfo;
import com.dtstack.rdos.engine.execution.base.queue.OrderLinkedBlockingQueue;
import com.dtstack.rdos.engine.service.node.GroupPriorityQueue;
import com.dtstack.rdos.engine.service.node.WorkNode;
import com.dtstack.rdos.engine.service.zk.ShardConsistentHash;
import com.dtstack.rdos.engine.service.zk.ZkDistributed;
import com.dtstack.rdos.engine.service.zk.ZkShardManager;
import com.dtstack.rdos.engine.service.zk.data.BrokerDataNode;
import com.dtstack.rdos.engine.service.zk.data.BrokerDataShard;
import com.google.common.collect.Maps;

import java.io.Closeable;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.ReentrantLock;

/**
 * company: www.dtstack.com
 * author: toutian
 * create: 2018/9/6
 */
public class ZkLocalCache implements CopyOnWriteCache<String, BrokerDataNode>,Closeable {

    private volatile Map<String, BrokerDataNode> core;
    private volatile Map<String, BrokerDataNode> view;

    private volatile BrokerDataNode localDataCache;
    private volatile AtomicBoolean requiresCopyOnWrite;
    private String localAddress;
    private int distributeZkWeight;
    private int distributeQueueWeight;
    private int distributeDeviation;
    private int perShardSize;
    private AtomicInteger incrementSize;
    private static ZkLocalCache zkLocalCache = new ZkLocalCache();
    public static ZkLocalCache getInstance() {
        return zkLocalCache;
    }
    private final ReentrantLock lock = new ReentrantLock();

    private ZkDistributed zkDistributed = ZkDistributed.getZkDistributed();
    private WorkNode workNode = WorkNode.getInstance();
    private ClusterQueueInfo clusterQueueInfo = ClusterQueueInfo.getInstance();
    private ShardConsistentHash shardsCsist = ShardConsistentHash.getInstance();
    private ZkShardManager zkShardManager = ZkShardManager.getInstance();
    private LocalCacheSyncZkListener localCacheSyncZkListener;

    private ZkLocalCache() {
        this.requiresCopyOnWrite = new AtomicBoolean(false);
    }

    public void init() {
        core = zkDistributed.initMemTaskStatus();
        localAddress = zkDistributed.getLocalAddress();
        localDataCache = core.get(localAddress);
        distributeZkWeight = ConfigParse.getTaskDistributeQueueWeight();
        distributeQueueWeight = ConfigParse.getTaskDistributeZkWeight();
        distributeDeviation = ConfigParse.getTaskDistributeDeviation();
        perShardSize = ConfigParse.getShardSize();
        zkShardManager.init();
        int initIncrementSize = localDataCache.getDataSize()/perShardSize;
        incrementSize = new AtomicInteger(initIncrementSize);
    }

    public void updateLocalMemTaskStatus(String zkTaskId, Integer status) {
        if (zkTaskId == null || status == null) {
            throw new UnsupportedOperationException();
        }
        copy();
        String shard = shardsCsist.get(zkTaskId);
        localDataCache.getShards().get(shard).put(zkTaskId, status.byteValue());
    }

    public Map<String, BrokerDataNode> getLocalCache() {
        return getView();
    }

    public BrokerDataNode getBrokerData() {
        return getView().get(localAddress);
    }


    public String getJobLocationAddr(String zkTaskId) {
        //todo 先查缓存，没有再查zk
        String shard = shardsCsist.get(zkTaskId);
        for (Map.Entry<String, BrokerDataNode> entry : core.entrySet()) {
            String addr = entry.getKey();
            Map<String, BrokerDataShard> shardMap = entry.getValue().getShards();
            if (shardMap.containsKey(shard)) {
                if (shardMap.get(shard).containsKey(zkTaskId)) {
                    return addr;
                }
            }
        }
        return null;
    }

    /**
     * 选择节点间（队列负载+已提交任务 加权值）+ 误差 符合要求的node，做任务分发
     */
    public String getDistributeNode(String engineType, String groupName, List<String> excludeNodes) {
        if(clusterQueueInfo.isEmpty()){
            return localAddress;
        }

        ClusterQueueInfo.EngineTypeQueueInfo engineTypeQueueInfo = clusterQueueInfo.getEngineTypeQueueInfo(engineType);
        if(engineTypeQueueInfo == null){
            return localAddress;
        }

        GroupPriorityQueue groupPriorityQueue = workNode.getEngineTypeQueue(engineType);
        if(groupPriorityQueue == null){
            throw new RdosException("not support engineType:" + engineType);
        }
        Map<String, OrderLinkedBlockingQueue<JobClient>> groupQueues = groupPriorityQueue.getGroupPriorityQueueMap();
        OrderLinkedBlockingQueue queue = groupQueues.get(groupName);
        int localQueueSize = queue == null ? 0 : queue.size();
        Map<String, Integer> otherQueueInfoMap = Maps.newHashMap();
        for (Map.Entry<String, ClusterQueueInfo.GroupQueueInfo> zkInfoEntry : engineTypeQueueInfo.getGroupQueueInfoMap().entrySet()) {
            ClusterQueueInfo.GroupQueueInfo groupQueueZkInfo = zkInfoEntry.getValue();
            Map<String, GroupInfo> remoteQueueInfo = groupQueueZkInfo.getGroupInfo();
            GroupInfo groupInfo = remoteQueueInfo.getOrDefault(groupName, new GroupInfo());
            otherQueueInfoMap.put(zkInfoEntry.getKey(),groupInfo.getSize());
        }

        int localZkSize = localDataCache.getDataSize();
        Map<String, Integer> otherZkInfoMap = Maps.newHashMap();
        for (Map.Entry<String, BrokerDataNode> entry : core.entrySet()) {
            if (localAddress.contains(entry.getKey())){
                continue;
            }
            int zkSize = entry.getValue().getDataSize();
            otherZkInfoMap.put(entry.getKey(),zkSize);
        }

        String node = null;
        int minWeight = Integer.MAX_VALUE;
        for (Map.Entry<String, Integer> nodeEntry:otherZkInfoMap.entrySet()){
            int zkSize = nodeEntry.getValue();
            int queueSize = otherQueueInfoMap.getOrDefault(nodeEntry.getKey(),0);
            int weight = zkSize * distributeZkWeight + queueSize * distributeQueueWeight;
            if (minWeight>weight){
                minWeight = weight;
                node=nodeEntry.getKey();
            }
        }
        int localWeight = localZkSize * distributeZkWeight + localQueueSize * distributeQueueWeight;
        if (localWeight-minWeight<=distributeDeviation){
            return localAddress;
        }
        return node;
    }

    @Override
    public Map<String, BrokerDataNode> cloneData() {
        try {
            return new ConcurrentHashMap<String, BrokerDataNode>(core);
        } finally {
            requiresCopyOnWrite.set(true);
        }
    }

    private void copy() {
        if (requiresCopyOnWrite.compareAndSet(true, false)) {
            core = new ConcurrentHashMap<>(core);
            localDataCache = core.get(localAddress);
            view = null;
        }
    }

    public void cover(Map<String, BrokerDataNode> otherNode) {
        Map<String, BrokerDataNode> coverCore = new ConcurrentHashMap<>(core);
        coverCore.remove(localAddress);
        coverCore.putAll(otherNode);
        core = coverCore;
    }

    private Map<String, BrokerDataNode> getView() {
        if (view == null) {
            view = Collections.unmodifiableMap(core);
        }
        return view;
    }

    public void checkShard() {
        final ReentrantLock createShardLock = this.lock;
        createShardLock.lock();
        try {
            if (incrementSize.getAndIncrement()%perShardSize==0){
                int avg = localDataCache.getDataSize()/localDataCache.getShards().size();
                if (avg>perShardSize){
                    zkShardManager.createShardNode(1);
                    incrementSize.set(0);
                }
            }
        } finally {
            createShardLock.unlock();
        }
    }

    @Override
    public void close() throws IOException {
        if (localCacheSyncZkListener!=null){
            localCacheSyncZkListener.run();
        }
    }

    public void setLocalCacheSyncZkListener(LocalCacheSyncZkListener localCacheSyncZkListener) {
        this.localCacheSyncZkListener = localCacheSyncZkListener;
    }
}
