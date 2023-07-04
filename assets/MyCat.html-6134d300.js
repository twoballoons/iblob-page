const l=JSON.parse('{"key":"v-76936cc5","path":"/docs/db/MyCat.html","title":"MyCat","lang":"en-US","frontmatter":{"title":"MyCat","date":"2023/6/28"},"headers":[{"level":2,"title":"1，什么是MyCat","slug":"_1-什么是mycat","link":"#_1-什么是mycat","children":[]},{"level":2,"title":"2，为什么使用MyCat","slug":"_2-为什么使用mycat","link":"#_2-为什么使用mycat","children":[]},{"level":2,"title":"3，MyCat解决问题的思路","slug":"_3-mycat解决问题的思路","link":"#_3-mycat解决问题的思路","children":[]},{"level":2,"title":"4，Mycat和MySQL的区别","slug":"_4-mycat和mysql的区别","link":"#_4-mycat和mysql的区别","children":[]},{"level":2,"title":"5，支持的数据库","slug":"_5-支持的数据库","link":"#_5-支持的数据库","children":[]},{"level":2,"title":"6，架构","slug":"_6-架构","link":"#_6-架构","children":[]},{"level":2,"title":"1，概述主从介绍","slug":"_1-概述主从介绍","link":"#_1-概述主从介绍","children":[]},{"level":2,"title":"2，主从作用","slug":"_2-主从作用","link":"#_2-主从作用","children":[]},{"level":2,"title":"3，主从复制原理","slug":"_3-主从复制原理","link":"#_3-主从复制原理","children":[]},{"level":2,"title":"4，主从复制步骤","slug":"_4-主从复制步骤","link":"#_4-主从复制步骤","children":[]},{"level":2,"title":"5，主从复制配置步骤","slug":"_5-主从复制配置步骤","link":"#_5-主从复制配置步骤","children":[]},{"level":2,"title":"6，环境说明【使用docker启动两个】","slug":"_6-环境说明【使用docker启动两个】","link":"#_6-环境说明【使用docker启动两个】","children":[]},{"level":2,"title":"7，修改配置文件","slug":"_7-修改配置文件","link":"#_7-修改配置文件","children":[{"level":3,"title":"7.1，主机的配置m1.cnf","slug":"_7-1-主机的配置m1-cnf","link":"#_7-1-主机的配置m1-cnf","children":[]},{"level":3,"title":"7.2，从机的配置m1s1.cnf","slug":"_7-2-从机的配置m1s1-cnf","link":"#_7-2-从机的配置m1s1-cnf","children":[]},{"level":3,"title":"7.3，配置文件修改后，复制到容器里面","slug":"_7-3-配置文件修改后-复制到容器里面","link":"#_7-3-配置文件修改后-复制到容器里面","children":[]}]},{"level":2,"title":"8，执行sql语句","slug":"_8-执行sql语句","link":"#_8-执行sql语句","children":[{"level":3,"title":"8.1进入主机里面执行相关配置","slug":"_8-1进入主机里面执行相关配置","link":"#_8-1进入主机里面执行相关配置","children":[]},{"level":3,"title":"8.2进入从机里面执行相关配置","slug":"_8-2进入从机里面执行相关配置","link":"#_8-2进入从机里面执行相关配置","children":[]}]},{"level":2,"title":"9，搭建失败的原因","slug":"_9-搭建失败的原因","link":"#_9-搭建失败的原因","children":[{"level":3,"title":"9.1，第一个不是yes,是connecting","slug":"_9-1-第一个不是yes-是connecting","link":"#_9-1-第一个不是yes-是connecting","children":[]},{"level":3,"title":"9.2，第二个不是yes ，是no","slug":"_9-2-第二个不是yes-是no","link":"#_9-2-第二个不是yes-是no","children":[]},{"level":3,"title":"9.3，第一个不是yes，是no","slug":"_9-3-第一个不是yes-是no","link":"#_9-3-第一个不是yes-是no","children":[]},{"level":3,"title":"9.4，mysql主从的操作规范","slug":"_9-4-mysql主从的操作规范","link":"#_9-4-mysql主从的操作规范","children":[]}]},{"level":2,"title":"10，测试","slug":"_10-测试","link":"#_10-测试","children":[]},{"level":2,"title":"1，集群搭建概述","slug":"_1-集群搭建概述","link":"#_1-集群搭建概述","children":[{"level":3,"title":"1.1，是什么","slug":"_1-1-是什么","link":"#_1-1-是什么","children":[]},{"level":3,"title":"1.2，优点","slug":"_1-2-优点","link":"#_1-2-优点","children":[]},{"level":3,"title":"1.3，缺点","slug":"_1-3-缺点","link":"#_1-3-缺点","children":[]}]},{"level":2,"title":"2，搭建思路图","slug":"_2-搭建思路图","link":"#_2-搭建思路图","children":[]},{"level":2,"title":"3，搭建准备工作","slug":"_3-搭建准备工作","link":"#_3-搭建准备工作","children":[{"level":3,"title":"3.1，使用docker启动5台Mysql[至少要5台哦]","slug":"_3-1-使用docker启动5台mysql-至少要5台哦","link":"#_3-1-使用docker启动5台mysql-至少要5台哦","children":[]},{"level":3,"title":"3.2，配置文件的修改","slug":"_3-2-配置文件的修改","link":"#_3-2-配置文件的修改","children":[]},{"level":3,"title":"3.3，重启新建的三个容器","slug":"_3-3-重启新建的三个容器","link":"#_3-3-重启新建的三个容器","children":[]}]},{"level":2,"title":"4，进入容器执行SQL","slug":"_4-进入容器执行sql","link":"#_4-进入容器执行sql","children":[{"level":3,"title":"4.1，M1修改","slug":"_4-1-m1修改","link":"#_4-1-m1修改","children":[]},{"level":3,"title":"4.2，M1S1修改","slug":"_4-2-m1s1修改","link":"#_4-2-m1s1修改","children":[]},{"level":3,"title":"4.3，M1S2修改（从机）","slug":"_4-3-m1s2修改-从机","link":"#_4-3-m1s2修改-从机","children":[]},{"level":3,"title":"4.4，M2修改","slug":"_4-4-m2修改","link":"#_4-4-m2修改","children":[]},{"level":3,"title":"4.5，M2S1修改","slug":"_4-5-m2s1修改","link":"#_4-5-m2s1修改","children":[]}]},{"level":2,"title":"5，验证集群是否成功","slug":"_5-验证集群是否成功","link":"#_5-验证集群是否成功","children":[]},{"level":2,"title":"1，前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2，下载压缩包或者使用wget命令","slug":"_2-下载压缩包或者使用wget命令","link":"#_2-下载压缩包或者使用wget命令","children":[]},{"level":2,"title":"3，上传到Linux并解压压缩包","slug":"_3-上传到linux并解压压缩包","link":"#_3-上传到linux并解压压缩包","children":[]},{"level":2,"title":"4，Mycat的目录结构","slug":"_4-mycat的目录结构","link":"#_4-mycat的目录结构","children":[]},{"level":2,"title":"5，启动Mycat","slug":"_5-启动mycat","link":"#_5-启动mycat","children":[]},{"level":2,"title":"6，连接Mycat","slug":"_6-连接mycat","link":"#_6-连接mycat","children":[{"level":3,"title":"1，逻辑库","slug":"_1-逻辑库","link":"#_1-逻辑库","children":[]}]},{"level":2,"title":"2，逻辑表","slug":"_2-逻辑表","link":"#_2-逻辑表","children":[]},{"level":2,"title":"3，分片表","slug":"_3-分片表","link":"#_3-分片表","children":[]},{"level":2,"title":"4，分片规则","slug":"_4-分片规则","link":"#_4-分片规则","children":[]},{"level":2,"title":"5，全局表","slug":"_5-全局表","link":"#_5-全局表","children":[]},{"level":2,"title":"6，ER表(一对多，多对一)","slug":"_6-er表-一对多-多对一","link":"#_6-er表-一对多-多对一","children":[]},{"level":2,"title":"7，非分片表","slug":"_7-非分片表","link":"#_7-非分片表","children":[]},{"level":2,"title":"8，分片节点","slug":"_8-分片节点","link":"#_8-分片节点","children":[]},{"level":2,"title":"9，节点主机","slug":"_9-节点主机","link":"#_9-节点主机","children":[]},{"level":2,"title":"1，找到conf/server.xml","slug":"_1-找到conf-server-xml","link":"#_1-找到conf-server-xml","children":[]},{"level":2,"title":"2，访问端口的配置","slug":"_2-访问端口的配置","link":"#_2-访问端口的配置","children":[]},{"level":2,"title":"3，黑白名单的配置","slug":"_3-黑白名单的配置","link":"#_3-黑白名单的配置","children":[]},{"level":2,"title":"4，默认账号的配置","slug":"_4-默认账号的配置","link":"#_4-默认账号的配置","children":[]},{"level":2,"title":"5，自定义账号的配置","slug":"_5-自定义账号的配置","link":"#_5-自定义账号的配置","children":[]},{"level":2,"title":"1，找到conf/schema.xml并备份","slug":"_1-找到conf-schema-xml并备份","link":"#_1-找到conf-schema-xml并备份","children":[]},{"level":2,"title":"2，配置虚拟表table[在schema里面]","slug":"_2-配置虚拟表table-在schema里面","link":"#_2-配置虚拟表table-在schema里面","children":[]},{"level":2,"title":"3，配置数据节点dataNode","slug":"_3-配置数据节点datanode","link":"#_3-配置数据节点datanode","children":[]},{"level":2,"title":"4，配置节点主机dataHost","slug":"_4-配置节点主机datahost","link":"#_4-配置节点主机datahost","children":[]},{"level":2,"title":"5，修改conf/partition-hash-int.txt","slug":"_5-修改conf-partition-hash-int-txt","link":"#_5-修改conf-partition-hash-int-txt","children":[]},{"level":2,"title":"6，使用昨天上面配置的1主二从","slug":"_6-使用昨天上面配置的1主二从","link":"#_6-使用昨天上面配置的1主二从","children":[]},{"level":2,"title":"7，在M1上创建三个数据库db1 db2 db3","slug":"_7-在m1上创建三个数据库db1-db2-db3","link":"#_7-在m1上创建三个数据库db1-db2-db3","children":[]},{"level":2,"title":"8，启动mycat","slug":"_8-启动mycat","link":"#_8-启动mycat","children":[]},{"level":2,"title":"9，使用工具连接mycat创建表","slug":"_9-使用工具连接mycat创建表","link":"#_9-使用工具连接mycat创建表","children":[]},{"level":2,"title":"10，查看mysql里面的表已经帮我们创建好了","slug":"_10-查看mysql里面的表已经帮我们创建好了","link":"#_10-查看mysql里面的表已经帮我们创建好了","children":[]},{"level":2,"title":"11，做添加修改删除","slug":"_11-做添加修改删除","link":"#_11-做添加修改删除","children":[]},{"level":2,"title":"12，相关错","slug":"_12-相关错","link":"#_12-相关错","children":[{"level":3,"title":"分片思路","slug":"分片思路","link":"#分片思路","children":[]},{"level":3,"title":"整体逻辑","slug":"整体逻辑","link":"#整体逻辑","children":[]}]},{"level":2,"title":"2，找到conf/rule.xml并备份","slug":"_2-找到conf-rule-xml并备份","link":"#_2-找到conf-rule-xml并备份","children":[]},{"level":2,"title":"3， 枚举路由规则","slug":"_3-枚举路由规则","link":"#_3-枚举路由规则","children":[]},{"level":2,"title":"4，partition-hash-int.txt 配置：","slug":"_4-partition-hash-int-txt-配置","link":"#_4-partition-hash-int-txt-配置","children":[]},{"level":2,"title":"1，找到conf/schema.xml修改","slug":"_1-找到conf-schema-xml修改","link":"#_1-找到conf-schema-xml修改","children":[]},{"level":2,"title":"2，找到conf/rule.xml并备份","slug":"_2-找到conf-rule-xml并备份-1","link":"#_2-找到conf-rule-xml并备份-1","children":[]},{"level":2,"title":"3， 取模的路由规则","slug":"_3-取模的路由规则","link":"#_3-取模的路由规则","children":[]},{"level":2,"title":"4， 测试","slug":"_4-测试","link":"#_4-测试","children":[{"level":3,"title":"创建表","slug":"创建表","link":"#创建表","children":[]},{"level":3,"title":"插入数据测试","slug":"插入数据测试","link":"#插入数据测试","children":[]}]},{"level":2,"title":"1，找到conf/schema.xml并备份","slug":"_1-找到conf-schema-xml并备份-1","link":"#_1-找到conf-schema-xml并备份-1","children":[]},{"level":2,"title":"2，找到conf/rule.xml并备份","slug":"_2-找到conf-rule-xml并备份-2","link":"#_2-找到conf-rule-xml并备份-2","children":[]},{"level":2,"title":"3，auto-sharding-long的分区算法","slug":"_3-auto-sharding-long的分区算法","link":"#_3-auto-sharding-long的分区算法","children":[]},{"level":2,"title":"1，找到conf/schema.xml并备份","slug":"_1-找到conf-schema-xml并备份-2","link":"#_1-找到conf-schema-xml并备份-2","children":[]},{"level":2,"title":"2，找到conf/rule.xml并备份","slug":"_2-找到conf-rule-xml并备份-3","link":"#_2-找到conf-rule-xml并备份-3","children":[]},{"level":2,"title":"2，固定分片hash算法","slug":"_2-固定分片hash算法","link":"#_2-固定分片hash算法","children":[]},{"level":2,"title":"3， 测试","slug":"_3-测试","link":"#_3-测试","children":[{"level":3,"title":"1，找到conf/schema.xml并备份","slug":"_1-找到conf-schema-xml并备份-3","link":"#_1-找到conf-schema-xml并备份-3","children":[]}]},{"level":2,"title":"2，找到conf/rule.xml并备份","slug":"_2-找到conf-rule-xml并备份-4","link":"#_2-找到conf-rule-xml并备份-4","children":[]},{"level":2,"title":"3，字符串的id怎么玩？","slug":"_3-字符串的id怎么玩","link":"#_3-字符串的id怎么玩","children":[]},{"level":2,"title":"4，测试","slug":"_4-测试-1","link":"#_4-测试-1","children":[]},{"level":2,"title":"1，找到conf/rule.xml并备份","slug":"_1-找到conf-rule-xml并备份","link":"#_1-找到conf-rule-xml并备份","children":[]},{"level":2,"title":"2，配置方法","slug":"_2-配置方法","link":"#_2-配置方法","children":[]},{"level":2,"title":"1，全局表概述","slug":"_1-全局表概述","link":"#_1-全局表概述","children":[]},{"level":2,"title":"2，配置方式","slug":"_2-配置方式","link":"#_2-配置方式","children":[{"level":3,"title":"修改schema.xml","slug":"修改schema-xml","link":"#修改schema-xml","children":[]}]},{"level":2,"title":"1，ER表概述(一对多，多对一)","slug":"_1-er表概述-一对多-多对一","link":"#_1-er表概述-一对多-多对一","children":[]},{"level":2,"title":"1，  以上说明","slug":"_1-以上说明","link":"#_1-以上说明","children":[]},{"level":2,"title":"1，面试题引入","slug":"_1-面试题引入","link":"#_1-面试题引入","children":[]},{"level":2,"title":"2，为什么要全局分布式ID","slug":"_2-为什么要全局分布式id","link":"#_2-为什么要全局分布式id","children":[]},{"level":2,"title":"3，ID生成规则部分硬性要求","slug":"_3-id生成规则部分硬性要求","link":"#_3-id生成规则部分硬性要求","children":[{"level":3,"title":"3.1，全局唯一：","slug":"_3-1-全局唯一","link":"#_3-1-全局唯一","children":[]},{"level":3,"title":"3.2，趋势递增：","slug":"_3-2-趋势递增","link":"#_3-2-趋势递增","children":[]},{"level":3,"title":"3.3，单调递增：","slug":"_3-3-单调递增","link":"#_3-3-单调递增","children":[]},{"level":3,"title":"3.4，信息安全：","slug":"_3-4-信息安全","link":"#_3-4-信息安全","children":[]},{"level":3,"title":"3.5，含时间戳：","slug":"_3-5-含时间戳","link":"#_3-5-含时间戳","children":[]}]},{"level":2,"title":"4，ID生成系统的可用性要求","slug":"_4-id生成系统的可用性要求","link":"#_4-id生成系统的可用性要求","children":[]},{"level":2,"title":"5，通用的解决方案","slug":"_5-通用的解决方案","link":"#_5-通用的解决方案","children":[{"level":3,"title":"5.1，自增ID-auto_increment","slug":"_5-1-自增id-auto-increment","link":"#_5-1-自增id-auto-increment","children":[]},{"level":3,"title":"5.2，数据库自增主键-replace into","slug":"_5-2-数据库自增主键-replace-into","link":"#_5-2-数据库自增主键-replace-into","children":[]},{"level":3,"title":"5.3，UUID","slug":"_5-3-uuid","link":"#_5-3-uuid","children":[]},{"level":3,"title":"5.4，基于Redis生成全局主键","slug":"_5-4-基于redis生成全局主键","link":"#_5-4-基于redis生成全局主键","children":[]},{"level":3,"title":"5.5，基于zookeeper生成全局主键","slug":"_5-5-基于zookeeper生成全局主键","link":"#_5-5-基于zookeeper生成全局主键","children":[]}]},{"level":2,"title":"1， Mycat全局主键方式","slug":"_1-mycat全局主键方式","link":"#_1-mycat全局主键方式","children":[]},{"level":2,"title":"2，本地文件方式","slug":"_2-本地文件方式","link":"#_2-本地文件方式","children":[{"level":3,"title":"修改conf/server.xml","slug":"修改conf-server-xml","link":"#修改conf-server-xml","children":[]},{"level":3,"title":"修改conf/schema.xml","slug":"修改conf-schema-xml","link":"#修改conf-schema-xml","children":[]},{"level":3,"title":"修改sequence_conf.properties注意名字","slug":"修改sequence-conf-properties注意名字","link":"#修改sequence-conf-properties注意名字","children":[]},{"level":3,"title":"配置覆盖重启创建表插入测试","slug":"配置覆盖重启创建表插入测试","link":"#配置覆盖重启创建表插入测试","children":[]}]},{"level":2,"title":"3，本地时间戳方式[还行]","slug":"_3-本地时间戳方式-还行","link":"#_3-本地时间戳方式-还行","children":[{"level":3,"title":"修改conf/server.xml","slug":"修改conf-server-xml-1","link":"#修改conf-server-xml-1","children":[]},{"level":3,"title":"修改conf/schema.xml","slug":"修改conf-schema-xml-1","link":"#修改conf-schema-xml-1","children":[]},{"level":3,"title":"修改conf/sequence_time_conf.properties","slug":"修改conf-sequence-time-conf-properties","link":"#修改conf-sequence-time-conf-properties","children":[]},{"level":3,"title":"配置覆盖重启创建表插入测试","slug":"配置覆盖重启创建表插入测试-1","link":"#配置覆盖重启创建表插入测试-1","children":[]},{"level":3,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]}]},{"level":2,"title":"4，zookeeper方式","slug":"_4-zookeeper方式","link":"#_4-zookeeper方式","children":[{"level":3,"title":"修改conf/server.xml","slug":"修改conf-server-xml-2","link":"#修改conf-server-xml-2","children":[]},{"level":3,"title":"修改conf/schema.xml","slug":"修改conf-schema-xml-2","link":"#修改conf-schema-xml-2","children":[]},{"level":3,"title":"启动zookeeper","slug":"启动zookeeper","link":"#启动zookeeper","children":[]},{"level":3,"title":"修改conf/myid.properties","slug":"修改conf-myid-properties","link":"#修改conf-myid-properties","children":[]},{"level":3,"title":"修改conf/ sequence_distributed_conf.properties","slug":"修改conf-sequence-distributed-conf-properties","link":"#修改conf-sequence-distributed-conf-properties","children":[]},{"level":3,"title":"配置需要使用自增ID的sequence，修改sequence_conf.properties文件","slug":"配置需要使用自增id的sequence-修改sequence-conf-properties文件","link":"#配置需要使用自增id的sequence-修改sequence-conf-properties文件","children":[]},{"level":3,"title":"配置覆盖重启","slug":"配置覆盖重启","link":"#配置覆盖重启","children":[]},{"level":3,"title":"创建表插入测试","slug":"创建表插入测试","link":"#创建表插入测试","children":[]}]},{"level":2,"title":"1，snowflake算法【雪花算法】概述","slug":"_1-snowflake算法【雪花算法】概述","link":"#_1-snowflake算法【雪花算法】概述","children":[]},{"level":2,"title":"2，算法原理","slug":"_2-算法原理","link":"#_2-算法原理","children":[]},{"level":2,"title":"3，源码","slug":"_3-源码","link":"#_3-源码","children":[]},{"level":2,"title":"4，使用Hutool封装","slug":"_4-使用hutool封装","link":"#_4-使用hutool封装","children":[{"level":3,"title":"4.1，引入pom.xml","slug":"_4-1-引入pom-xml","link":"#_4-1-引入pom-xml","children":[]},{"level":3,"title":"4.2，创建封装类","slug":"_4-2-创建封装类","link":"#_4-2-创建封装类","children":[]}]},{"level":2,"title":"如何使用java连接","slug":"如何使用java连接","link":"#如何使用java连接","children":[]},{"level":2,"title":"为什么还要使用mysql集群和主从","slug":"为什么还要使用mysql集群和主从","link":"#为什么还要使用mysql集群和主从","children":[]}],"git":{"createdTime":1688020466000,"updatedTime":1688436100000,"contributors":[{"name":"xingenhi","email":"xingenhi@163.com","commits":2}]},"filePathRelative":"docs/db/MyCat.md"}');export{l as data};