package com.dtstack.rdos.engine.execution.sparkyarn;

import com.dtstack.rdos.commom.exception.ExceptionUtil;
import com.dtstack.rdos.commom.exception.RdosException;
import com.dtstack.rdos.engine.execution.base.AbsClient;
import com.dtstack.rdos.engine.execution.base.JobClient;
import com.dtstack.rdos.engine.execution.base.enumeration.RdosTaskStatus;
import com.dtstack.rdos.engine.execution.base.operator.Operator;
import com.dtstack.rdos.engine.execution.base.operator.batch.BatchAddJarOperator;
import com.dtstack.rdos.engine.execution.base.pojo.JobResult;
import com.dtstack.rdos.engine.execution.base.pojo.ParamAction;
import com.google.common.base.Strings;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.yarn.api.records.ApplicationId;
import org.apache.hadoop.yarn.conf.YarnConfiguration;
import org.apache.spark.SparkConf;
import org.apache.spark.deploy.yarn.ClientArguments;
import org.apache.spark.deploy.yarn.Client;
import org.codehaus.jackson.map.ObjectMapper;
import org.datanucleus.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * Created by softfly on 17/8/10.
 */
public class SparkYarnClient extends AbsClient {

    private static final Logger logger = LoggerFactory.getLogger(SparkYarnClient.class);

    private static final ObjectMapper objMapper = new ObjectMapper();

    private SparkYarnConfig sparkYarnConfig;

    private String deployMode = "cluster";
    private Configuration yarnConf = new YarnConfiguration();
    private SparkConf sparkConf = new SparkConf();

    @Override
    public void init(Properties prop) throws Exception {
        sparkYarnConfig = objMapper.readValue(objMapper.writeValueAsBytes(prop), SparkYarnConfig.class);
        if(StringUtils.isEmpty(sparkYarnConfig.getYarnConfDir())){
            logger.error("you need to set yarnConfDir when use sparkyarn engine.");
            throw new RdosException("you need to set yarnConfDir when use sparkyarn engine.");
        }

        if(StringUtils.isEmpty(sparkYarnConfig.getSparkYarnArchive())){
            logger.error("you need to set sparkYarnArchive when used spark engine.");
            throw new RdosException("you need to set sparkYarnArchive when used spark engine.");
        }

        File[] xmlFileList = new File(sparkYarnConfig.getYarnConfDir()).listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                if(name.endsWith(".xml"))
                    return true;
                return false;
            }
        });

        if(xmlFileList != null) {
            for(File xmlFile : xmlFileList) {
                yarnConf.addResource(xmlFile.toURI().toURL());
            }
        }

        System.setProperty("SPARK_YARN_MODE", "true");
        sparkConf.remove("spark.jars");
        sparkConf.remove("spark.files");
        sparkConf.set("spark.master", "yarn");
        sparkConf.set("spark.yarn.archive", sparkYarnConfig.getSparkYarnArchive());
        sparkConf.set("spark.submit.deployMode", "cluster");
    }

    @Override
    public JobResult submitJobWithJar(JobClient jobClient){
        Properties properties = adaptToJarSubmit(jobClient);

        String mainClass = properties.getProperty(JOB_MAIN_CLASS_KEY);
        String jarPath = properties.getProperty(JOB_JAR_PATH_KEY);//只支持hdfs
        String appName = properties.getProperty(JOB_APP_NAME_KEY);
        String exeArgsStr = properties.getProperty(JOB_EXE_ARGS);

        if(!jarPath.startsWith("hdfs://")){
            throw new RdosException("spark jar path protocol must be hdfs://");
        }

        if(Strings.isNullOrEmpty(appName)){
            throw new RdosException("spark jar must set app name!");
        }


        String[] appArgs = new String[]{};
        if(org.apache.commons.lang3.StringUtils.isNotBlank(exeArgsStr)){
            appArgs = exeArgsStr.split("\\s+");
        }

        List<String> argList = new ArrayList<>();
        argList.add("--jar");
        argList.add(jarPath);
        argList.add("--class");
        argList.add(mainClass);

        if(appArgs != null) {
            for(String appArg : appArgs) {
                argList.add("--arg");
                argList.add(appArg);
            }
        }

        ClientArguments clientArguments = new ClientArguments(argList.toArray(new String[argList.size()]));
        sparkConf.setAppName(appName);


        ApplicationId appId = null;

        try {
            appId = new Client(clientArguments, yarnConf, sparkConf).submitApplication();
            return JobResult.createSuccessResult(appId.toString());
        } catch(Exception ex) {
            return JobResult.createErrorResult("submit job get unknown error\n" + ExceptionUtil.getErrorMessage(ex));
        }

    }

    @Override
    public JobResult cancelJob(ParamAction jobId) {
        return null;
    }

    @Override
    public RdosTaskStatus getJobStatus(String jobId) throws IOException {
        return null;
    }

    @Override
    public String getJobDetail(String jobId) {
        return null;
    }

    @Override
    public JobResult immediatelySubmitJob(JobClient jobClient) {
        return null;
    }

    @Override
    public String getJobMaster() {
        return "yarn";
    }

    public Properties adaptToJarSubmit(JobClient jobClient){

        BatchAddJarOperator jarOperator = null;
        for(Operator operator : jobClient.getOperators()){
            if(operator instanceof BatchAddJarOperator){
                jarOperator = (BatchAddJarOperator) operator;
                break;
            }
        }

        if(jarOperator == null){
            throw new RdosException("submit type of MR need to add jar operator.");
        }

        Properties properties = new Properties();
        properties.setProperty(JOB_JAR_PATH_KEY, jarOperator.getJarPath());
        properties.setProperty(JOB_APP_NAME_KEY, jobClient.getJobName());
        properties.setProperty(JOB_MAIN_CLASS_KEY, jarOperator.getMainClass());

        if(jobClient.getClassArgs() != null){
            properties.setProperty(JOB_EXE_ARGS, jobClient.getClassArgs());
        }
        return properties;
    }
}
