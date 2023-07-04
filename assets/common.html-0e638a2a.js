import{_ as e,o as n,c as i,e as s}from"./app-f078eaf8.js";const l={},a=s(`<h1 id="部署方案" tabindex="-1"><a class="header-anchor" href="#部署方案" aria-hidden="true">#</a> 部署方案</h1><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySql</h2><blockquote><p>版本：<code>8.0</code></p><p>adminer：可视化界面（可选）</p><p>开放端口：<code>3306</code></p><ul><li><p>默认账号：root</p></li><li><p>默认密码：123456</p></li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
  db:
    image: mysql:8.0
    restart: always
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: 123456
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
    ports:
      - 3306:3306
    volumes:
      - ./data:/var/lib/mysql

  adminer:
    image: adminer
    restart: always
    ports:
      - 3307:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><blockquote><p>版本：<code>4.0</code></p><p>开放端口：<code>6379</code></p><ul><li>默认密码：123456</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
  redis:
    restart: always
    image: redis:4.0
    container_name: redis
    ports:
      - 6379:6379
    command: redis-server --requirepass 123456
    volumes:
      - /usr/local/docker/redis/data:/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群" aria-hidden="true">#</a> Redis集群</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3&quot;

# 定义服务，可以多个
services:
  redis-6371: # 服务名称
    image: redis # 创建容器时所需的镜像
    container_name: redis-6371 # 容器名称
    restart: always # 容器总是重新启动
    volumes: # 数据卷，目录挂载
      - ./redis-6371/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-6371/data:/data
    ports:
      - 6371:6371
      - 16371:16371
    command:
      redis-server /usr/local/etc/redis/redis.conf

  redis-6372:
    image: redis
    container_name: redis-6372
    volumes:
      - ./redis-6372/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-6372/data:/data
    ports:
      - 6372:6372
      - 16372:16372
    command:
      redis-server /usr/local/etc/redis/redis.conf

  redis-6373:
    image: redis
    container_name: redis-6373
    volumes:
      - ./redis-6373/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-6373/data:/data
    ports:
      - 6373:6373
      - 16373:16373
    command:
      redis-server /usr/local/etc/redis/redis.conf
      
  redis-6374:
    image: redis
    container_name: redis-6374
    restart: always
    volumes:
      - ./redis-6374/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-6374/data:/data
    ports:
      - 6374:6374
      - 16374:16374
    command:
      redis-server /usr/local/etc/redis/redis.conf

  redis-6375:
    image: redis
    container_name: redis-6375
    volumes:
      - ./redis-6375/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-6375/data:/data
    ports:
      - 6375:6375
      - 16375:16375
    command:
      redis-server /usr/local/etc/redis/redis.conf

  redis-6376:
    image: redis
    container_name: redis-6376
    volumes:
      - ./redis-6376/conf/redis.conf:/usr/local/etc/redis/redis.conf
      - ./redis-6376/data:/data
    ports:
      - 6376:6376
      - 16376:16376
    command:
      redis-server /usr/local/etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h2><p>一、创建工作目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -vp /usr/local/docker/mongodb/setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>二、创建setup.js（用于初始化MongoDB）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/docker/mongodb/setup
<span class="token function">vim</span> setup.js
---------------------------------------
输入：
db <span class="token operator">=</span> db.getSiblingDB<span class="token punctuation">(</span><span class="token string">&#39;newDB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  // 创建一个名为<span class="token string">&quot;newDB&quot;</span>的DB
db.createUser<span class="token punctuation">(</span>  // 创建一个名为<span class="token string">&quot;shon&quot;</span>的用户，设置密码和权限
    <span class="token punctuation">{</span>
        user: <span class="token string">&quot;shon&quot;</span>,
        pwd: <span class="token string">&quot;shonlovescoding&quot;</span>,
        roles: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> role: <span class="token string">&quot;dbOwner&quot;</span>, db: <span class="token string">&quot;newDB&quot;</span><span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
db.createCollection<span class="token punctuation">(</span><span class="token string">&quot;newCollection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  // 在<span class="token string">&quot;newDB&quot;</span>中创建一个名为<span class="token string">&quot;newCollection&quot;</span>的Collection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、创建docker-compose.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/docker/mongodb/
<span class="token function">vim</span> docker-compose.yml
---------------------------------------
输入：
version: <span class="token string">&#39;3.1&#39;</span>
services:
  mongo:
    build: ./
    restart: always
    ports:
      - <span class="token number">27017</span>:27017
    volumes:
      - ./setup:/docker-entrypoint-initdb.d/
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: <span class="token number">123456</span>
      
  <span class="token comment"># 如果不需要MongoDB的网页端，以下内容可以不加</span>
  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - <span class="token number">8080</span>:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>四、创建Dockerfile</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/docker/mongodb/
<span class="token function">vim</span> Dockerfile
---------------------------------------
输入：
FROM mongo
<span class="token comment"># 将本地的setup.js映射到Docker容器中</span>
COPY ./setup/setup.js /docker-entrypoint-initdb.d/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>五、启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="solr" tabindex="-1"><a class="header-anchor" href="#solr" aria-hidden="true">#</a> Solr</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建存放路径
mkdir -vp /usr/local/docker/solr/ikanalyzer
# 进入刚创建的solr路径
cd /usr/local/docker/solr
# 创建并进入docker-compose.yml
vim /usr/local/docker/solr/docker-compose.yml
------------------------------------------
输入：
version: &#39;3.1&#39;
services:
  solr:
    build: ikanalyzer
    restart: always
    container_name: solr
    ports:
      - 8983:8983
    volumes:
      - /usr/local/docker/solr/data:/opt/solrdata
------------------------------------------
# 进入刚创建的ikanalyzer路径
cd /usr/local/docker/solr/ikanalyzer
# 创建并进入docker-compose.yml
vim /usr/local/docker/solr/ikanalyzer/Dockerfile
------------------------------------------
输入：
FROM solr
MAINTAINER Lusifer &lt;topsale@vip.qq.com&gt;

# 创建 Core
WORKDIR /opt/solr/server/solr
RUN mkdir ik_core
WORKDIR /opt/solr/server/solr/ik_core
RUN echo &#39;name=ik_core&#39; &gt; core.properties
RUN mkdir data
RUN cp -r ../configsets/sample_techproducts_configs/conf/ .

# 安装中文分词
WORKDIR /opt/solr/server/solr-webapp/webapp/WEB-INF/lib
ADD ik-analyzer-solr5-5.x.jar .
ADD solr-analyzer-ik-5.1.0.jar .
WORKDIR /opt/solr/server/solr-webapp/webapp/WEB-INF
ADD ext.dic .
ADD stopword.dic .
ADD IKAnalyzer.cfg.xml .

# 增加分词配置
COPY managed-schema /opt/solr/server/solr/ik_core/conf

WORKDIR /opt/solr
------------------------------------------
# 启动
docker-compose up -d
放行路径服务器：8983
# 测试访问
http://ip:8983/solr/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.3&#39;
services:
  elasticsearch:
    image: wutang/elasticsearch-shanghai-zone:6.3.2
    container_name: elasticsearch
    restart: always
    ports:
      - 9200:9200
      - 9300:9300
    environment:
      cluster.name: elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
  rabbitmq:
    image: rabbitmq:3.8.12-management
    container_name: rabbitmq
    restart: always
    hostname: myRabbitmq
    ports:
      - 15672:15672
      - 5672:5672
    volumes:
      - ./data:/var/lib/rabbitmq
    environment:
      - RABBITMQ_DEFAULT_USER=root
      - RABBITMQ_DEFAULT_PASS=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="activemq" tabindex="-1"><a class="header-anchor" href="#activemq" aria-hidden="true">#</a> ActiveMQ</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.1&#39;
services:
    activemq:
        hostname: activemq
        container_name: activemq
        image: webcenter/activemq
        ports:
          - 61617:61616
          - 8161:8161
        restart: always
        volumes:
          - /usr/local/docker/activemq/data:/data/activemq
          - /usr/local/docker/activemq/log:/var/log/activemq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.5&#39;
services:
  rmqnamesrv:
    image: foxiswho/rocketmq:server
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    volumes:
      - ./data/logs:/opt/logs
      - ./data/store:/opt/store
    networks:
        rmq:
          aliases:
            - rmqnamesrv

  rmqbroker:
    image: foxiswho/rocketmq:broker
    container_name: rmqbroker
    ports:
      - 10909:10909
      - 10911:10911
    volumes:
      - ./data/logs:/opt/logs
      - ./data/store:/opt/store
      - ./data/brokerconf/broker.conf:/etc/rocketmq/broker.conf
    environment:
        NAMESRV_ADDR: &quot;rmqnamesrv:9876&quot;
        JAVA_OPTS: &quot; -Duser.home=/opt&quot;
        JAVA_OPT_EXT: &quot;-server -Xms128m -Xmx128m -Xmn128m&quot;
    command: mqbroker -c /etc/rocketmq/broker.conf
    depends_on:
      - rmqnamesrv
    networks:
      rmq:
        aliases:
          - rmqbroker

  rmqconsole:
    image: styletang/rocketmq-console-ng
    container_name: rmqconsole
    ports:
      - 8080:8080
    environment:
        JAVA_OPTS: &quot;-Drocketmq.namesrv.addr=rmqnamesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false&quot;
    depends_on:
      - rmqnamesrv
    networks:
      rmq:
        aliases:
          - rmqconsole

networks:
  rmq:
    name: rmq
    driver: bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>data/brokerconfbroker.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 所属集群名字
brokerClusterName=DefaultCluster

# broker 名字，注意此处不同的配置文件填写的不一样，如果在 broker-a.properties 使用: broker-a,
# 在 broker-b.properties 使用: broker-b
brokerName=broker-a

# 0 表示 Master，&gt; 0 表示 Slave
brokerId=0

# nameServer地址，分号分割
# namesrvAddr=rocketmq-nameserver1:9876;rocketmq-nameserver2:9876

# 启动IP,如果 docker 报 com.alibaba.rocketmq.remoting.exception.RemotingConnectException: connect to &lt;192.168.0.120:10909&gt; failed
# 解决方式1 加上一句 producer.setVipChannelEnabled(false);，解决方式2 brokerIP1 设置宿主机IP，不要使用docker 内部IP
# brokerIP1=192.168.0.253

# 在发送消息时，自动创建服务器不存在的topic，默认创建的队列数
defaultTopicQueueNums=4

# 是否允许 Broker 自动创建 Topic，建议线下开启，线上关闭 ！！！这里仔细看是 false，false，false
autoCreateTopicEnable=true

# 是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭
autoCreateSubscriptionGroup=true

# Broker 对外服务的监听端口
listenPort=10911

# 删除文件时间点，默认凌晨4点
deleteWhen=04

# 文件保留时间，默认48小时
fileReservedTime=120

# commitLog 每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824

# ConsumeQueue 每个文件默认存 30W 条，根据业务情况调整
mapedFileSizeConsumeQueue=300000

# destroyMapedFileIntervalForcibly=120000
# redeleteHangedFileInterval=120000
# 检测物理文件磁盘空间
diskMaxUsedSpaceRatio=88
# 存储路径
# storePathRootDir=/home/ztztdata/rocketmq-all-4.1.0-incubating/store
# commitLog 存储路径
# storePathCommitLog=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/commitlog
# 消费队列存储
# storePathConsumeQueue=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/consumequeue
# 消息索引存储路径
# storePathIndex=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/index
# checkpoint 文件存储路径
# storeCheckpoint=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/checkpoint
# abort 文件存储路径
# abortFile=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/abort
# 限制的消息大小
maxMessageSize=65536

# flushCommitLogLeastPages=4
# flushConsumeQueueLeastPages=2
# flushCommitLogThoroughInterval=10000
# flushConsumeQueueThoroughInterval=60000

# Broker 的角色
# - ASYNC_MASTER 异步复制Master
# - SYNC_MASTER 同步双写Master
# - SLAVE
brokerRole=ASYNC_MASTER

# 刷盘方式
# - ASYNC_FLUSH 异步刷盘
# - SYNC_FLUSH 同步刷盘
flushDiskType=ASYNC_FLUSH

# 发消息线程池数量
# sendMessageThreadPoolNums=128
# 拉消息线程池数量
# pullMessageThreadPoolNums=128
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job" aria-hidden="true">#</a> XXL-Job</h2><blockquote><p>默认账号：admin</p><p>默认密码：123456</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
  xxl-job:
    image: xuxueli/xxl-job-admin:2.3.0
    container_name: xxl-job
    environment:
      PARAMS: &quot;--spring.datasource.url=jdbc:mysql://{数据库IP}:{数据库端口}/xxl_job?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;serverTimezone=Asia/Shanghai  --spring.datasource.username={用户名}  --spring.datasource.password={密码}&quot;
    ports:
      - 8090:8080
    volumes:
      - /data/logs/:/data/applogs/xxl-job/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apollo" tabindex="-1"><a class="header-anchor" href="#apollo" aria-hidden="true">#</a> Apollo</h2><blockquote><p>apollo-db：配套数据库，可选（即可以使用已有的）</p><p>控制台： http://192.168.10.131:8070/signin</p><ul><li>登录账号：apollo</li><li>登录密码：admin</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;2&#39;
services:
  apollo-quick-start:
    image: nobodyiam/apollo-quick-start
    container_name: apollo-quick-start
    depends_on:
      - apollo-db
    ports:
      - &quot;8080:8080&quot;
      - &quot;8070:8070&quot;
    links:
      - apollo-db
    environment:
      # 解决容器部署本地无法连接的问题
      eureka.instance.homePageUrl: http://192.168.10.146:8080
  apollo-db:
    image: mysql:5.7
    container_name: apollo-db
    environment:
      TZ: Asia/Shanghai
      MYSQL_ALLOW_EMPTY_PASSWORD: &#39;yes&#39;
    depends_on:
      - apollo-dbdata
    ports:
      - &quot;13306:3306&quot;
    volumes:
      - ./sql:/docker-entrypoint-initdb.d
    volumes_from:
      - apollo-dbdata
  apollo-dbdata:
    image: alpine:latest
    container_name: apollo-dbdata
    volumes:
      - /var/lib/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h2><blockquote><p>版本：<code>3.4.14</code></p><p>开放端口：<code>2181</code></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3.0&#39;
services:
  zookeeper:
    image: zookeeper:3.4.14
    container_name: zookeeper
    restart: always
    ports:
      - &quot;2181:2181&quot;
    volumes:
      - ./zk/data:/data
      - ./zk/datalog:/datalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h2><blockquote><p>版本：<code>2.12-2.2.1</code></p><p>依赖：<code>Zookeeper</code></p><p>注意：192.168.3.3需要改成自己本地的IP，不然其他机器无法访问</p><p>控制台：http://127.0.0.1:8048</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.0&quot;
services:
kafka:
    image: wurstmeister/kafka:2.12-2.2.1
    container_name: kafka
    restart: always
    depends_on:
      - zookeeper
    ports:
      - &quot;9092:9092&quot;
      - &quot;9999:9999&quot;
    expose:
      - &quot;9093&quot;
    environment:
      # 参数说明：https://blog.csdn.net/lidelin10/article/details/105316252
      # 注意：我这里举例使用的IP为192.168.3.3，请按照真实IP进行修改，下面有两个地方的IP需要修改
      KAFKA_BROKER_ID: 0
      KAFKA_ADVERTISED_LISTENERS: INSIDE://192.168.3.3:9092 # 将listener发布到Zk中，供client使用
      KAFKA_LISTENERS: INSIDE://0.0.0.0:9092 #
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: INSIDE:PLAINTEXT # 用于listener name与安全协议之间进行映射
      KAFKA_INTER_BROKER_LISTENER_NAME: INSIDE # 设置broker之间进行通信时采用的listener名称
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_JMX_OPTS: &quot;-Dcom.sun.management.jmxremote=true -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Djava.rmi.server.hostname=192.168.3.3 -Dcom.sun.management.jmxremote.rmi.port=9999&quot;
      JMX_PORT: 9999
      KAFKA_CREATE_TOPICS: &quot;input:2:1&quot;
    volumes:
      - ./kafka:/kafka
      - /var/run/docker.sock:/var/run/docker.sock
  kafka-eagle:
    image: gui66497/kafka_eagle
    container_name: ke
    restart: always
    depends_on:
      - kafka
    ports:
      - &quot;8048:8048&quot;
    environment:
      ZKSERVER: &quot;zookeeper:2181&quot;
    volumes:
      - ./system-config.properties:/kafka-eagle/conf/system-config.properties
      - ./eagle/db:/kafka-eagle/db
      - ./eagle/logs:/kafka-eagle/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>system-config.properties</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>######################################
# multi zookeeper&amp;kafka cluster list
######################################
kafka.eagle.zk.cluster.alias=cluster1
cluster1.zk.list=zookeeper:2181

######################################
# zk client thread limit
######################################
kafka.zk.limit.size=25

######################################
# kafka eagle webui port
######################################
kafka.eagle.webui.port=8048

######################################
# kafka offset storage
######################################
cluster1.kafka.eagle.offset.storage=kafka

######################################
# enable kafka metrics
######################################
kafka.eagle.metrics.charts=true
kafka.eagle.sql.fix.error=false

######################################
# kafka sql topic records max
######################################
kafka.eagle.sql.topic.records.max=5000

######################################
# alarm email configure
######################################
kafka.eagle.mail.enable=false
kafka.eagle.mail.sa=alert_sa@163.com
kafka.eagle.mail.username=alert_sa@163.com
kafka.eagle.mail.password=mqslimczkdqabbbh
kafka.eagle.mail.server.host=smtp.163.com
kafka.eagle.mail.server.port=25

######################################
# alarm im configure
######################################
#kafka.eagle.im.dingding.enable=true
#kafka.eagle.im.dingding.url=https://oapi.dingtalk.com/robot/send?access_token=

#kafka.eagle.im.wechat.enable=true
#kafka.eagle.im.wechat.token=https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=xxx&amp;corpsecret=xxx
#kafka.eagle.im.wechat.url=https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=
#kafka.eagle.im.wechat.touser=
#kafka.eagle.im.wechat.toparty=
#kafka.eagle.im.wechat.totag=
#kafka.eagle.im.wechat.agentid=

######################################
# delete kafka topic token
######################################
kafka.eagle.topic.token=keadmin

######################################
# kafka sasl authenticate
######################################
cluster1.kafka.eagle.sasl.enable=false
cluster1.kafka.eagle.sasl.protocol=SASL_PLAINTEXT
cluster1.kafka.eagle.sasl.mechanism=PLAIN
cluster2.kafka.eagle.sasl.enable=false
cluster2.kafka.eagle.sasl.protocol=SASL_PLAINTEXT
cluster2.kafka.eagle.sasl.mechanism=PLAIN

######################################
# kafka jdbc driver address
######################################
kafka.eagle.driver=org.sqlite.JDBC
kafka.eagle.url=jdbc:sqlite:/kafka-eagle/db/ke.db
kafka.eagle.username=root
kafka.eagle.password=root

# (Optional) set mysql address
#efak.driver=com.mysql.jdbc.Driver
#efak.url=jdbc:mysql://127.0.0.1:3306/ke?useUnicode=true&amp;characterEncoding=UTF-8&amp;zeroDateTimeBehavior=convertToNull
#efak.username=root
#efak.password=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flink" tabindex="-1"><a class="header-anchor" href="#flink" aria-hidden="true">#</a> Flink</h2><blockquote><p>版本：<code>1.10.1</code></p><p>控制台：http://127.0.0.1:8081</p></blockquote><ul><li><code>docker-compose.yaml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &quot;3.0&quot;
services:
  jobmanager:
    image: flink:1.10.1-scala_2.12
    container_name: jobmanager
    restart: always
    command: &quot;jobmanager.sh start-foreground&quot;
    ports:
      - 8081:8081
    volumes:
      - ./flink-conf.yaml:/opt/flink/conf/flink-conf.yaml
      - ./jobmanager/jobmanager-log:/opt/flink/log
      - ./jobmanager/flink-checkpoints-directory:/tmp/flink-checkpoints-directory
      - ./jobmanager/flink-savepoints-directory:/tmp/flink-savepoints-directory
    environment:
      - JOB_MANAGER_RPC_ADDRESS=jobmanager
  taskmanager:
    image: flink:1.10.1-scala_2.12
    container_name: taskmanager
    restart: always
    depends_on:
      - jobmanager
    command: &quot;taskmanager.sh start-foreground&quot;
    volumes:
      - ./flink-conf.yaml:/opt/flink/conf/flink-conf.yaml
      - ./taskmanager/taskmanager-log:/opt/flink/log
      - ./taskmanager/flink-checkpoints-directory:/tmp/flink-checkpoints-directory
      - ./taskmanager/flink-savepoints-directory:/tmp/flink-savepoints-directory
    environment:
      - JOB_MANAGER_RPC_ADDRESS=jobmanager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>flink-conf.yaml</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jobmanager.rpc.address: jobmanager
blob.server.port: 6124
query.server.port: 6125

taskmanager.memory.process.size: 1728m
taskmanager.numberOfTaskSlots: 2

state.backend: filesystem
state.checkpoints.dir: file:///tmp/flink-checkpoints-directory
state.savepoints.dir: file:///tmp/flink-savepoints-directory

heartbeat.interval: 1000
heartbeat.timeout: 5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),d=[a];function r(v,c){return n(),i("div",null,d)}const u=e(l,[["render",r],["__file","common.html.vue"]]);export{u as default};
