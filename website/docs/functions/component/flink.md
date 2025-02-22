---
title: Flink
sidebar_label: Flink
---

## 配置Flink
已配置前置组件
- [x] SFTP
- [x] YARN
- [x] HDFS

配置Flink的前提是YARN、HDFS组件正常配置并保存

:::tip
部署模式分为 `perjob`、`session` 两种模式
:::

### 参数说明

#### perjob、session公共参数

| 参数项                    | 默认值                                   | 说明                                                  | 是否必填 |
| ------------------------- | ---------------------------------------- | ----------------------------------------------------- | -------- |
| clusterMode               | perjob、session                          | 任务执行模式：perjob, session                         | 是       |
| flinkJarPath              | /data/insight_plugin/flink110_lib        | flink lib path(taier本地目录）                                   | 是       |
| remoteFlinkJarPath        | /data/insight_plugin/flink110_lib        | flink lib 远程路径                                     | 是       |
| flinkPluginRoot           | /data/insight_plugin                     | flinkx plugins父级本地目录(taier本地目录）           | 是       |
| remotePluginRootDir       | /data/insight_plugin                     | flinkx plugins父级远程目录            | 是       |
| pluginLoadMode            | shipfile                                 | 插件加载类型                                          | 否       |
| monitorAcceptedApp        | false                                    | 是否监控yarn accepted状态任务                         | 否       |
| yarnAccepterTaskNumber    | 3                                        | 允许yarn accepter任务数量，达到这个值后不允许任务提交 | 否       |
| prometheusHost            |                                          | prometheus地址，获取数据同步指标使用                           | 是       |
| prometheusPort            | 9090                                     | prometheus，获取数据同步指标使用                                | 是       |
| classloader.dtstack-cache | true                                     | 是否缓存classloader                                   | 否       |

#### session特定参数

| 参数项                      | 默认值        | 说明                                    | 是否必填 |
| --------------------------- | ------------- | --------------------------------------- | -------- |
| checkSubmitJobGraphInterval | 60            | session check间隔（60 * 10s）           | 是       |
| flinkSessionSlotCount       | 10            | flink session允许的最大slot数           | 是       |
| sessionRetryNum             | 5             | session重试次数，达到后会放缓重试的频率 | 是       |
| sessionStartAuto            | true          | 是否允许Taier启动拉起flink session         | 是       |
| flinkSessionName           | flink_session  | flink session任务名                     | 是       |
| jobmanager.heap.mb          | 2048          | jobmanager内存大小                      | 是       |
| taskmanager.heap.mb         | 1024          | taskmanager内存大小                     | 是       |

#### Flink 原生参数

| 参数项                                              | 默认值                                                       | 说明                         | 是否必填 |
| --------------------------------------------------- | ------------------------------------------------------------ | ---------------------------- | -------- |
| env.java.opts                                       | -XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+CMSIncrementalMode -XX:+CMSIncrementalPacing -XX:MaxMetaspaceSize=300m -Dfile.encoding=UTF-8 | jvm参数                      | 否       |
| classloader.resolve-order                           | perjob默认为child-first，session默认为parent-first           | 类加载模式                   | 否       |
| high-availability                                   | ZOOKEEPER                                                    | flink ha类型                 | 是       |
| high-availability.zookeeper.quorum                  | zookeeper地址，当ha选择是zookeeper时必填                     | 是                           |          |
| high-availability.zookeeper.path.root               | /flink110                                                    | ha节点路径                   | 是       |
| high-availability.storageDir                        | hdfs://ns1/dtInsight/flink110/ha                             | ha元数据存储路径             | 是       |
| jobmanager.archive.fs.dir                           | hdfs://ns1/dtInsight/flink110/completed-jobs	任务结束后任务信息存储路径	是 |                              |          |
| metrics.reporter.promgateway.class                  | org.apache.flink.metrics.prometheus.PrometheusPushGatewayReporter | 用来推送指标类               | 是       |
| metrics.reporter.promgateway.host                   | promgateway地址                                              | 是                           |          |
| metrics.reporter.promgateway.port                   | 9091                                                         | promgateway端口              | 是       |
| metrics.reporter.promgateway.deleteOnShutdown       | true                                                         | 任务结束后是否删除指标	是 |          |
| metrics.reporter.promgateway.jobName                | 110job	指标任务名                                         | 否                           |          |
| metrics.reporter.promgateway.randomJobNameSuffix    | true                                                         | 是否在任务名上添加随机值     | 是       |
| state.backend                                       | RocksDB                                                      | 状态后端                     | 是       |
| state.backend.incremental                           | true                                                         | 是否开启增量                 | 否       |
| state.checkpoints.dir                               | hdfs://ns1/dtInsight/flink110/checkpoints                    | checkpoint路径地址           | 是       |
| state.checkpoints.num-retained                      | 11                                                           | checkpoint保存个数           | 否       |
| state.savepoints.dir                                | hdfs://ns1/dtInsight/flink110/savepoints                     | savepoint路径                | 是       |
| yarn.application-attempts                           | 3                                                            | 重试次数                     | 否       |
| yarn.application-attempt-failures-validity-interval | 3600000                                                      | 重试窗口时间大小             | 否       |
| akka.ask.timeout                                    | 60 s                                                         |                              | 否       |
| akka.tcp.timeout                                    | 60 s                                                         |                              | 否       |

更多 Flink 参数项详见[官方文档](https://ci.apache.org/projects/flink/flink-docs-release-1.12/ops/config.html)

:::tip
Flink在自定义参数中添加Flink官方参数来调整任务提交参数信息
:::


### 文件结构
:::tip
FlinkJarPath为Flink jar 需要配置`taier部署机器`上的centos路径
:::

如 flinkJarPath 配置为/opt/dtstack/flink110_lib  
/opt/dtstack/flink110_lib 目录包含文件为:
```shell
├── flink-dist_2.11-1.10.0.jar
├── flink-metrics-prometheus-1.10.0.jar
├── flink-shaded-hadoop-2-uber-2.7.5-10.0.jar
├── flink-streaming-java_2.11-1.10.0.jar
├── flink-table_2.11-1.10.0.jar
├── flink-table-blink_2.11-1.10.0.jar
└── log4j-1.2.17.jar
```

:::tip 
FlinkPluginRoot配置的是chunjun的插件包目录 需要配置`taier部署机器`上的centos路径
:::   

如 flinkPluginRoot 配置为 /data/insight_plugin1.12/chunjun-dist   
/data/insight_plugin1.12/chunjun-dist 目录包含文件为:

```shell
/data/insight_plugin1.12/chunjun-dist
├── chunjun-core-master.jar
├── connector
│   ├── binlog
│   │   └── chunjun-connector-binlog-master.jar
│   ├── cassandra
│   │   └── chunjun-connector-cassandra-master.jar
│   ├── clickhouse
│   │   └── chunjun-connector-clickhouse-master.jar
│   ├── db2
│   │   └── chunjun-connector-db2-master.jar
│   ├── dm
│   │   └── chunjun-connector-dm-master.jar
│   ├── doris
│   │   └── chunjun-connector-doris-master.jar
│   ├── elasticsearch7
│   │   └── chunjun-connector-elasticsearch7-master.jar
│   ├── emqx
│   │   └── chunjun-connector-emqx-master.jar
│   ├── file
│   │   └── chunjun-connector-file-master.jar
│   ├── filesystem
│   │   └── chunjun-connector-filesystem-master.jar
│   ├── ftp
│   │   └── chunjun-connector-ftp-master.jar
│   ├── gbase
│   │   └── chunjun-connector-gbase-master.jar
│   ├── greenplum
│   │   └── chunjun-connector-greenplum-master.jar
│   ├── hbase14
│   │   └── chunjun-connector-hbase-1.4-master.jar
│   ├── hdfs
│   │   └── chunjun-connector-hdfs-master.jar
│   ├── hive
│   │   └── chunjun-connector-hive-master.jar
│   ├── http
│   │   └── chunjun-connector-http-master.jar
│   ├── influxdb
│   │   └── chunjun-connector-influxdb-master.jar
│   ├── kingbase
│   │   └── chunjun-connector-kingbase-master.jar
│   ├── kudu
│   │   └── chunjun-connector-kudu-master.jar
│   ├── mongodb
│   │   └── chunjun-connector-mongodb-master.jar
│   ├── mysql
│   │   └── chunjun-connector-mysql-master.jar
│   ├── mysqld
│   │   └── chunjun-connector-mysqld-master.jar
│   ├── oceanbase
│   │   └── chunjun-connector-oceanbase-master.jar
│   ├── oracle
│   │   └── chunjun-connector-oracle-master.jar
│   ├── oraclelogminer
│   │   └── chunjun-connector-oraclelogminer-master.jar
│   ├── pgwal
│   │   └── chunjun-connector-pgwal-master.jar
│   ├── postgresql
│   │   └── chunjun-connector-postgresql-master.jar
│   ├── redis
│   │   └── chunjun-connector-redis-master.jar
│   ├── saphana
│   │   └── chunjun-connector-saphana-master.jar
│   ├── socket
│   │   └── chunjun-connector-socket-master.jar
│   ├── solr
│   │   └── chunjun-connector-solr-master.jar
│   ├── sqlserver
│   │   └── chunjun-connector-sqlserver-master.jar
│   ├── sqlservercdc
│   │   └── chunjun-connector-sqlservercdc-master.jar
│   ├── starrocks
│   │   └── chunjun-connector-starrocks-master.jar
│   └── stream
│       └── chunjun-connector-stream-master.jar
├── ddl
│   └── mysql
│       └── chunjun-ddl-mysql-master.jar
├── dirty-data-collector
│   ├── log
│   │   └── chunjun-dirty-log-master.jar
│   └── mysql
│       └── chunjun-dirty-mysql-master.jar
├── formats
│   └── pbformat
│       └── flinkx-protobuf-master.jar
├── metrics
│   ├── mysql
│   │   └── chunjun-metrics-mysql-master.jar
│   └── prometheus
│       └── chunjun-metrics-prometheus-master.jar
└── restore-plugins
    └── mysql
        └── chunjun-restore-mysql-master.jar
```

![Flink 配置](/img/readme/flink.png)

:::caution
配置好数据同步任务之后运行，如果一直提示等待运行，可以去`monitor.log`查看相应日志，确认是否有部分参数配置错误
:::