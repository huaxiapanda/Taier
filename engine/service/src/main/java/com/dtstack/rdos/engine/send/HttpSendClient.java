package com.dtstack.rdos.engine.send;

import com.dtstack.rdos.common.http.PoolHttpClient;
import com.dtstack.rdos.common.util.MathUtil;
import com.dtstack.rdos.common.util.PublicUtil;
import com.dtstack.rdos.common.util.UrlUtil;
import com.dtstack.rdos.engine.execution.base.pojo.ParamAction;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import com.dtstack.rdos.engine.entrance.zk.ZkDistributed;

/**
 * Created by sishu.yss on 2017/3/14.
 */
public class HttpSendClient {

    private static ZkDistributed zkDistributed = ZkDistributed.getZkDistributed();

    public static void actionStart(String address, ParamAction paramAction) throws Exception{
        PoolHttpClient.post(UrlUtil.getHttpUrl(address, Urls.START), PublicUtil.ObjectToMap(paramAction));
    }

    /**
     * 返回数据格式{"send":true}
     * @param address
     * @param paramAction
     * @return
     * @throws IOException
     */
    public static boolean actionSubmit(String address, ParamAction paramAction) throws IOException {
        String dataJson = PoolHttpClient.post(UrlUtil.getHttpUrl(address, Urls.START), PublicUtil.ObjectToMap(paramAction));
        Map<String, Object> resultMap = PublicUtil.jsonStrToObject(dataJson, Map.class);
        if(!resultMap.containsKey("send")){
            return false;
        }

        return MathUtil.getBoolean(resultMap.get("send"));
    }

	public static void migration(final String node,String target)throws Exception{
        Map<String,Object> params = new HashMap<String,Object>(){
            {
                put("node",node);
            }
        };
        PoolHttpClient.post(UrlUtil.getHttpUrl(target,Urls.MIGRATE),params);
    }
}
