package com.dtstack.rdos.engine.service.zk;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Collection;
import java.util.SortedMap;
import java.util.concurrent.ConcurrentSkipListMap;


/**
 * 切忌要保证线程安全
 * <p>
 * company: www.dtstack.com
 * author: toutian
 * create: 2018/9/1
 */
public class ShardConsistentHash {

    /**
     * 节点的复制因子,实际节点个数 * numberOfReplicas = 虚拟节点个数
     */
    private static final int NUMBER_OF_REPLICAS = 5;
    /**
     * 存储虚拟节点的hash值到真实节点的映射
     */
    private final SortedMap<Long, String> circle = new ConcurrentSkipListMap<>();

    private ShardConsistentHash() {
    }

    /**
     * 仅用于节点宕机后数据迁移，计算其他机器节点任务分配的分片.
     * 其他情况下请使用单例引用对象
     */
    public ShardConsistentHash(Collection<String> shards) {
        if (shards != null && !shards.isEmpty()) {
            for (String shard : shards) {
                add(shard);
            }
        }
    }

    public void add(String shard) {
        for (int i = 0; i < NUMBER_OF_REPLICAS; i++) {
            circle.put(getHash(shard + i), shard);
        }
    }

    public void remove(String shard) {
        for (int i = 0; i < NUMBER_OF_REPLICAS; i++) {
            circle.remove(getHash(shard + i));
        }
    }

    public String get(String key) {
        if (circle.isEmpty()) {
            return null;
        }
        // shard 用String来表示,获得shard在哈希环中的hashCode
        long hash = getHash(key);
        //数据映射在虚拟节点所在环之间,就需要按顺时针方向寻找机器
        if (!circle.containsKey(hash)) {
            SortedMap<Long, String> tailMap = circle.tailMap(hash);
            hash = tailMap.isEmpty() ? circle.firstKey() : tailMap.firstKey();
        }
        return circle.get(hash);
    }

    public long getSize() {
        return circle.size();
    }

    private long getHash(String key) {
        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            md5.update(key.getBytes());
            byte[] bKey = md5.digest();
            //具体的哈希函数实现细节--每个字节 & 0xFF 再移位
            long result = ((long) (bKey[3] & 0xFF) << 24)
                    | ((long) (bKey[2] & 0xFF) << 16
                    | ((long) (bKey[1] & 0xFF) << 8) | (long) (bKey[0] & 0xFF));
            return result & 0xffffffffL;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return 0L;
    }

}
