import{_ as d,r as l,o as s,c as t,a as e,b as i,d as a,e as r}from"./app-f078eaf8.js";const c={},o=r('<h1 id="_01-消息队列的流派" tabindex="-1"><a class="header-anchor" href="#_01-消息队列的流派" aria-hidden="true">#</a> 01-消息队列的流派</h1><h1 id="消息队列的流派" tabindex="-1"><a class="header-anchor" href="#消息队列的流派" aria-hidden="true">#</a> 消息队列的流派</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',3),v={href:"https://www.bilibili.com/video/av29725868",target:"_blank",rel:"noopener noreferrer"},u=r('<p><strong>注：因为之前录制过相关视频，此处就不再单独录制了</strong></p><h2 id="什么是-mq" tabindex="-1"><a class="header-anchor" href="#什么是-mq" aria-hidden="true">#</a> 什么是 MQ</h2><p>Message Queue（MQ），消息队列中间件。很多人都说：MQ 通过将消息的发送和接收分离来实现应用程序的异步和解偶，这个给人的直觉是——MQ 是异步的，用来解耦的，但是这个只是 MQ 的效果而不是目的。MQ 真正的目的是为了通讯，屏蔽底层复杂的通讯协议，定义了一套应用层的、更加简单的通讯协议。一个分布式系统中两个模块之间通讯要么是 HTTP，要么是自己开发的 TCP，但是这两种协议其实都是原始的协议。HTTP 协议很难实现两端通讯——模块 A 可以调用 B，B 也可以主动调用 A，如果要做到这个两端都要背上 WebServer，而且还不支持长连接（HTTP 2.0 的库根本找不到）。TCP 就更加原始了，粘包、心跳、私有的协议，想一想头皮就发麻。MQ 所要做的就是在这些协议之上构建一个简单的“协议”——生产者/消费者模型。MQ 带给我的“协议”不是具体的通讯协议，而是更高层次通讯模型。它定义了两个对象——发送数据的叫生产者；接收数据的叫消费者， 提供一个 SDK 让我们可以定义自己的生产者和消费者实现消息通讯而无视底层通讯协议</p><h2 id="有-broker-的-mq" tabindex="-1"><a class="header-anchor" href="#有-broker-的-mq" aria-hidden="true">#</a> 有 Broker 的 MQ</h2><p>这个流派通常有一台服务器作为 Broker，所有的消息都通过它中转。生产者把消息发送给它就结束自己的任务了，Broker 则把消息主动推送给消费者（或者消费者主动轮询）</p><h3 id="重-topic" tabindex="-1"><a class="header-anchor" href="#重-topic" aria-hidden="true">#</a> 重 Topic</h3><p>kafka、JMS（ActiveMQ）就属于这个流派，生产者会发送 key 和数据到 Broker，由 Broker 比较 key 之后决定给哪个消费者。这种模式是我们最常见的模式，是我们对 MQ 最多的印象。在这种模式下一个 topic 往往是一个比较大的概念，甚至一个系统中就可能只有一个 topic，topic 某种意义上就是 queue，生产者发送 key 相当于说：“hi，把数据放到 key 的队列中”</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer2018042523390001.png" alt="image"></p><p>如上图所示，Broker 定义了三个队列，key1，key2，key3，生产者发送数据的时候会发送 key1 和 data，Broker 在推送数据的时候则推送 data（也可能把 key 带上）。</p><p>虽然架构一样但是 kafka 的性能要比 jms 的性能不知道高到多少倍，所以基本这种类型的 MQ 只有 kafka 一种备选方案。如果你需要一条暴力的数据流（在乎性能而非灵活性）那么 kafka 是最好的选择</p><h3 id="轻-topic" tabindex="-1"><a class="header-anchor" href="#轻-topic" aria-hidden="true">#</a> 轻 Topic</h3><p>这种的代表是 RabbitMQ（或者说是 AMQP）。生产者发送 key 和数据，消费者定义订阅的队列，Broker 收到数据之后会通过一定的逻辑计算出 key 对应的队列，然后把数据交给队列</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer2018042523390002.png" alt="image"></p><p>这种模式下解耦了 key 和 queue，在这种架构中 queue 是非常轻量级的（在 RabbitMQ 中它的上限取决于你的内存），消费者关心的只是自己的 queue；生产者不必关心数据最终给谁只要指定 key 就行了，中间的那层映射在 AMQP 中叫 exchange（交换机）。</p><p>AMQP 中有四种 exchange</p><ul><li>Direct exchange：key 就等于 queue</li><li>Fanout exchange：无视 key，给所有的 queue 都来一份</li><li>Topic exchange：key 可以用“宽字符”模糊匹配 queue</li><li>Headers exchange：无视 key，通过查看消息的头部元数据来决定发给那个 queue（AMQP 头部元数据非常丰富而且可以自定义）</li></ul><p>这种结构的架构给通讯带来了很大的灵活性，我们能想到的通讯方式都可以用这四种 exchange 表达出来。如果你需要一个企业数据总线（在乎灵活性）那么 RabbitMQ 绝对的值得一用</p><h2 id="无-broker-的-mq" tabindex="-1"><a class="header-anchor" href="#无-broker-的-mq" aria-hidden="true">#</a> 无 Broker 的 MQ</h2><p>无 Broker 的 MQ 的代表是 ZeroMQ。该作者非常睿智，他非常敏锐的意识到——MQ 是更高级的 Socket，它是解决通讯问题的。所以 ZeroMQ 被设计成了一个“库”而不是一个中间件，这种实现也可以达到——没有 Broker 的目的</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer2018042523390003.png" alt="image"></p><p>节点之间通讯的消息都是发送到彼此的队列中，每个节点都既是生产者又是消费者。ZeroMQ 做的事情就是封装出一套类似于 Socket 的 API 可以完成发送数据，读取数据</p><p>ZeroMQ 其实就是一个跨语言的、重量级的 Actor 模型邮箱库。你可以把自己的程序想象成一个 Actor，ZeroMQ 就是提供邮箱功能的库；ZeroMQ 可以实现同一台机器的 RPC 通讯也可以实现不同机器的 TCP、UDP 通讯，如果你需要一个强大的、灵活、野蛮的通讯能力，别犹豫 ZeroMQ</p><h2 id="附-queue-和-topic-的区别" tabindex="-1"><a class="header-anchor" href="#附-queue-和-topic-的区别" aria-hidden="true">#</a> 附：Queue 和 Topic 的区别</h2><ul><li><strong>Queue：</strong> 一个发布者发布消息，下面的接收者按队列顺序接收，比如发布了 10 个消息，两个接收者 A,B 那就是 A,B <strong>总共</strong> 会收到 10 条消息，不重复。</li><li><strong>Topic：</strong> 一个发布者发布消息，有两个接收者 A,B 来订阅，那么发布了 10 条消息，A,B <strong>各收到</strong> 10 条消息。</li></ul><table><thead><tr><th>类型</th><th>Topic</th><th>Queue</th></tr></thead><tbody><tr><td>概要</td><td>Publish Subscribe Messaging 发布订阅消息</td><td>Point-to-Point 点对点</td></tr><tr><td>有无状态</td><td>Topic 数据默认不落地，是无状态的。</td><td>Queue 数据默认会在 MQ 服务器上以文件形式保存，比如 ActiveMQ 一般保存在 <code>$AMQ_HOME\\data\\kr-store\\data</code> 下面。也可以配置成 DB 存储。</td></tr><tr><td>完整性保障</td><td>并不保证 Publisher 发布的每条数据，Subscriber 都能接受到。</td><td>Queue 保证每条数据都能被 Receiver 接收。</td></tr><tr><td>消息是否会丢失</td><td>一般来说 Publisher 发布消息到某一个 Topic 时，只有正在监听该 Topic 地址的 Sub 能够接收到消息；如果没有 Sub 在监听，该 Topic 就丢失了。</td><td>Sender 发送消息到目标 Queue，Receiver 可以异步接收这个 Queue 上的消息。Queue 上的消息如果暂时没有 Receiver 来取，也不会丢失。</td></tr><tr><td>消息发布接收策略</td><td>一对多的消息发布接收策略，监听同一个 Topic 地址的多个 Sub 都能收到 Publisher 发送的消息。Sub 接收完通知 MQ 服务器</td><td>一对一的消息发布接收策略，一个 Sender 发送的消息，只能有一个 Receiver 接收。Receiver 接收完后，通知 MQ 服务器已接收，MQ 服务器对 Queue 里的消息采取删除或其他操作。</td></tr></tbody></table><h1 id="_02-rocketmq-简介" tabindex="-1"><a class="header-anchor" href="#_02-rocketmq-简介" aria-hidden="true">#</a> 02-RocketMQ 简介</h1><h1 id="rocketmq-简介" tabindex="-1"><a class="header-anchor" href="#rocketmq-简介" aria-hidden="true">#</a> RocketMQ 简介</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>消息队列作为高并发系统的核心组件之一，能够帮助业务系统解构提升开发效率和系统稳定性。主要具有以下优势：</p><ul><li><strong>削峰填谷：</strong> 主要解决瞬时写压力大于应用服务能力导致消息丢失、系统奔溃等问题</li><li><strong>系统解耦：</strong> 解决不同重要程度、不同能力级别系统之间依赖导致一死全死</li><li><strong>提升性能：</strong> 当存在一对多调用时，可以发一条消息给消息系统，让消息系统通知相关系统</li><li><strong>蓄流压测：</strong> 线上有些链路不好压测，可以通过堆积一定量消息再放开来压测</li></ul><h2 id="rocketmq" tabindex="-1"><a class="header-anchor" href="#rocketmq" aria-hidden="true">#</a> RocketMQ</h2><p>Apache Alibaba RocketMQ 是一个消息中间件。消息中间件中有两个角色：消息生产者和消息消费者。RocketMQ 里同样有这两个概念，消息生产者负责创建消息并发送到 RocketMQ 服务器，RocketMQ 服务器会将消息持久化到磁盘，消息消费者从 RocketMQ 服务器拉取消息并提交给应用消费。</p><h2 id="rocketmq-特点" tabindex="-1"><a class="header-anchor" href="#rocketmq-特点" aria-hidden="true">#</a> RocketMQ 特点</h2><p>RocketMQ 是一款分布式、队列模型的消息中间件，具有以下特点：</p><ul><li>支持严格的消息顺序</li><li>支持 Topic 与 Queue 两种模式</li><li>亿级消息堆积能力</li><li>比较友好的分布式特性</li><li>同时支持 Push 与 Pull 方式消费消息</li><li><strong>历经多次天猫双十一海量消息考验</strong></li></ul><h2 id="rocketmq-优势" tabindex="-1"><a class="header-anchor" href="#rocketmq-优势" aria-hidden="true">#</a> RocketMQ 优势</h2><p>目前主流的 MQ 主要是 RocketMQ、kafka、RabbitMQ，其主要优势有：</p><ul><li>支持事务型消息（消息发送和 DB 操作保持两方的最终一致性，RabbitMQ 和 Kafka 不支持）</li><li>支持结合 RocketMQ 的多个系统之间数据最终一致性（多方事务，二方事务是前提）</li><li>支持 18 个级别的延迟消息（RabbitMQ 和 Kafka 不支持）</li><li>支持指定次数和时间间隔的失败消息重发（Kafka 不支持，RabbitMQ 需要手动确认）</li><li>支持 Consumer 端 Tag 过滤，减少不必要的网络传输（RabbitMQ 和 Kafka 不支持）</li><li>支持重复消费（RabbitMQ 不支持，Kafka 支持）</li></ul><h2 id="消息队列对比参照表" tabindex="-1"><a class="header-anchor" href="#消息队列对比参照表" aria-hidden="true">#</a> 消息队列对比参照表</h2><p><img src="https://picgo.xingenhi.cn//typora12619159-ebd12b24d5ae33d9_2.png" alt="image"></p><h1 id="_03-基于-docker-安装-rocketmq" tabindex="-1"><a class="header-anchor" href="#_03-基于-docker-安装-rocketmq" aria-hidden="true">#</a> 03-基于 Docker 安装 RocketMQ</h1><h1 id="基于-docker-安装-rocketmq" tabindex="-1"><a class="header-anchor" href="#基于-docker-安装-rocketmq" aria-hidden="true">#</a> 基于 Docker 安装 RocketMQ</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>',43),m={href:"https://www.bilibili.com/video/av40868767/",target:"_blank",rel:"noopener noreferrer"},b=r(`<h2 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h2><p><strong>注意：启动 RocketMQ Server + Broker + Console 至少需要 2G 内存</strong></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.5&#39;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="broker-conf" tabindex="-1"><a class="header-anchor" href="#broker-conf" aria-hidden="true">#</a> broker.conf</h2><p>RocketMQ Broker 需要一个配置文件，按照上面的 Compose 配置，我们需要在 <code>./data/brokerconf/</code> 目录下创建一个名为 <code>broker.conf</code> 的配置文件，内容如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the &quot;License&quot;); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.


# 所属集群名字
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rocketmq-控制台" tabindex="-1"><a class="header-anchor" href="#rocketmq-控制台" aria-hidden="true">#</a> RocketMQ 控制台</h2><p>访问 http://rmqIP:8080 登入控制台</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190115014325.png" alt="image"></p><h1 id="_04-rocketmq-生产者" tabindex="-1"><a class="header-anchor" href="#_04-rocketmq-生产者" aria-hidden="true">#</a> 04-RocketMQ 生产者</h1><h1 id="rocketmq-生产者" tabindex="-1"><a class="header-anchor" href="#rocketmq-生产者" aria-hidden="true">#</a> RocketMQ 生产者</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>`,12),p={href:"https://www.bilibili.com/video/av40868920/",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"概述-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述-1","aria-hidden":"true"},"#"),i(" 概述")],-1),h=e("p",null,"RocketMQ 是一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。",-1),k=e("p",null,"由于本教程整个案例基于 Spring Cloud，故我们采用 Spring Cloud Stream 完成一次发布和订阅",-1),f={href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-examples/rocketmq-example/readme-zh.md",target:"_blank",rel:"noopener noreferrer"},q=r('<h2 id="spring-cloud-stream" tabindex="-1"><a class="header-anchor" href="#spring-cloud-stream" aria-hidden="true">#</a> Spring Cloud Stream</h2><p>Spring Cloud Stream 是一个用于构建基于消息的微服务应用框架。它基于 Spring Boot 来创建具有生产级别的单机 Spring 应用，并且使用 <code>Spring Integration</code> 与 Broker 进行连接。</p><p>Spring Cloud Stream 提供了消息中间件配置的统一抽象，推出了 <code>publish-subscribe</code>、<code>consumer groups</code>、<code>partition</code> 这些统一的概念。</p><p>Spring Cloud Stream 内部有两个概念：</p><ul><li><strong>Binder：</strong> 跟外部消息中间件集成的组件，用来创建 Binding，各消息中间件都有自己的 Binder 实现。</li><li><strong>Binding：</strong> 包括 Input Binding 和 Output Binding。</li></ul><p>Binding 在消息中间件与应用程序提供的 Provider 和 Consumer 之间提供了一个桥梁，实现了开发者只需使用应用程序的 Provider 或 Consumer 生产或消费数据即可，屏蔽了开发者与底层消息中间件的接触。</p><p><img src="https://picgo.xingenhi.cn//typoracf947a91c7d945f1aee08b074dd25312.png" alt="image"></p><h2 id="解决连接超时问题" tabindex="-1"><a class="header-anchor" href="#解决连接超时问题" aria-hidden="true">#</a> 解决连接超时问题</h2>',8),x={href:"https://www.funtl.com/zh/spring-cloud-alibaba/%E5%9F%BA%E4%BA%8E-Docker-%E5%AE%89%E8%A3%85-RocketMQ.html#%E5%9F%BA%E4%BA%8E-docker-%E5%AE%89%E8%A3%85-rocketmq",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"org.apache.rocketmq.remoting.exception.RemotingTooMuchRequestException: sendDefaultImpl call timeout",-1),M=r(`<p>注意下图中的 IP 地址，这个是容器的 IP，开发机与容器不在一个局域网所以无法连接。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190116045601.png" alt="image"></p><p>解决方案是在 <code>broker.conf</code> 配置文件中增加 <code>brokerIP1=宿主机IP</code> 即可</p><h2 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> POM</h2><p>主要增加了 <code>org.springframework.cloud:spring-cloud-starter-stream-rocketmq</code> 依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-alibaba-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-alibaba-rocketmq-provider&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-alibaba-rocketmq-provider&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;dependencies&gt;
        &lt;!-- Spring Boot Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Boot End --&gt;

        &lt;!-- Spring Cloud Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-stream-rocketmq&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.alibaba.rocketmq.provider.RocketMQProviderApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息生产者服务" tabindex="-1"><a class="header-anchor" href="#消息生产者服务" aria-hidden="true">#</a> 消息生产者服务</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.rocketmq.provider.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class ProviderService {
    @Autowired
    private MessageChannel output;

    public void send(String message) {
        output.send(MessageBuilder.withPayload(message).build());
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h2><p>配置 Output(<code>Source.class</code>) 的 Binding 信息并配合 <code>@EnableBinding</code> 注解使其生效</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.rocketmq.provider;

import com.funtl.hello.spring.cloud.alibaba.rocketmq.provider.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.messaging.Source;

@SpringBootApplication
@EnableBinding({Source.class})
public class RocketMQProviderApplication implements CommandLineRunner {

    @Autowired
    private ProviderService providerService;

    public static void main(String[] args) {
        SpringApplication.run(RocketMQProviderApplication.class, args);
    }

    /**
     * 实现了 CommandLineRunner 接口，只是为了 Spring Boot 启动时执行任务，不必特别在意
     * @param args
     * @throws Exception
     */
    @Override
    public void run(String... args) throws Exception {
        providerService.send(&quot;Hello RocketMQ&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: rocketmq-provider
  cloud:
    stream:
      rocketmq:
        binder:
          # RocketMQ 服务器地址
          namesrv-addr: 192.168.10.149:9876
      bindings:
        # 这里是个 Map 类型参数，{} 为 YAML 中 Map 的行内写法
        output: {destination: test-topic, content-type: application/json}

server:
  port: 9093

management:
  endpoints:
    web:
      exposure:
        include: &#39;*&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行成功后即可在 RocketMQ 控制台的 <code>消息</code> 列表中选择 <code>test-topic</code> 主题即可看到发送的消息</p><h1 id="_05-rocketmq-消费者" tabindex="-1"><a class="header-anchor" href="#_05-rocketmq-消费者" aria-hidden="true">#</a> 05-RocketMQ 消费者</h1><h1 id="rocketmq-消费者" tabindex="-1"><a class="header-anchor" href="#rocketmq-消费者" aria-hidden="true">#</a> RocketMQ 消费者</h1><h2 id="本节视频-3" tabindex="-1"><a class="header-anchor" href="#本节视频-3" aria-hidden="true">#</a> 本节视频</h2>`,17),P={href:"https://www.bilibili.com/video/av40868997/",target:"_blank",rel:"noopener noreferrer"},Q=r(`<h2 id="pom-1" tabindex="-1"><a class="header-anchor" href="#pom-1" aria-hidden="true">#</a> POM</h2><p>主要增加了 <code>org.springframework.cloud:spring-cloud-starter-stream-rocketmq</code> 依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-alibaba-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-alibaba-rocketmq-consumer&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-alibaba-rocketmq-consumer&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;dependencies&gt;
        &lt;!-- Spring Boot Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Boot End --&gt;

        &lt;!-- Spring Cloud Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-stream-rocketmq&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.alibaba.rocketmq.consumer.RocketMQConsumerApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息消费者服务" tabindex="-1"><a class="header-anchor" href="#消息消费者服务" aria-hidden="true">#</a> 消息消费者服务</h2><p>主要使用 <code>@StreamListener(&quot;input&quot;)</code> 注解来订阅从名为 <code>input</code> 的 Binding 中接收的消息</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.rocketmq.consumer.receive;

import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerReceive {

    @StreamListener(&quot;input&quot;)
    public void receiveInput(String message) {
        System.out.println(&quot;Receive input: &quot; + message);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-1" tabindex="-1"><a class="header-anchor" href="#application-1" aria-hidden="true">#</a> Application</h2><p>配置 Input(<code>Sink.class</code>) 的 Binding 信息并配合 <code>@EnableBinding</code> 注解使其生效</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.rocketmq.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.messaging.Sink;

@SpringBootApplication
@EnableBinding({Sink.class})
public class RocketMQConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(RocketMQConsumerApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-1" tabindex="-1"><a class="header-anchor" href="#application-yml-1" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: rocketmq-consumer
  cloud:
    stream:
      rocketmq:
        binder:
          namesrv-addr: 192.168.10.149:9876
        bindings:
          input: {consumer.orderly: true}
      bindings:
        input: {destination: test-topic, content-type: text/plain, group: test-group, consumer.maxAttempts: 1}

server:
  port: 9094

management:
  endpoints:
    web:
      exposure:
        include: &#39;*&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行成功后即可在控制台接收到消息：<code>Receive input: Hello RocketMQ</code></p><h1 id="_06-rocketmq-自定义-binding" tabindex="-1"><a class="header-anchor" href="#_06-rocketmq-自定义-binding" aria-hidden="true">#</a> 06-RocketMQ 自定义 Binding</h1><h1 id="rocketmq-自定义-binding" tabindex="-1"><a class="header-anchor" href="#rocketmq-自定义-binding" aria-hidden="true">#</a> RocketMQ 自定义 Binding</h1><h2 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h2><p>在实际生产中，我们需要发布和订阅的消息可能不止一种 Topic ，故此时就需要使用自定义 Binding 来帮我们实现多 Topic 的发布和订阅功能</p><h2 id="生产者" tabindex="-1"><a class="header-anchor" href="#生产者" aria-hidden="true">#</a> 生产者</h2><p>自定义 Output 接口，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>public interface MySource {
    @Output(&quot;output1&quot;)
    MessageChannel output1();

    @Output(&quot;output2&quot;)
    MessageChannel output2();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>发布消息的案例代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>@Autowired
private MySource source;

public void send(String msg) throws Exception {
    source.output1().send(MessageBuilder.withPayload(msg).build());
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消费者" tabindex="-1"><a class="header-anchor" href="#消费者" aria-hidden="true">#</a> 消费者</h2><p>自定义 Input 接口，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>public interface MySink {
    @Input(&quot;input1&quot;)
    SubscribableChannel input1();

    @Input(&quot;input2&quot;)
    SubscribableChannel input2();

    @Input(&quot;input3&quot;)
    SubscribableChannel input3();

    @Input(&quot;input4&quot;)
    SubscribableChannel input4();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收消息的案例代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>@StreamListener(&quot;input1&quot;)
public void receiveInput1(String receiveMsg) {
    System.out.println(&quot;input1 receive: &quot; + receiveMsg);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-2" tabindex="-1"><a class="header-anchor" href="#application-2" aria-hidden="true">#</a> Application</h2><p>配置 Input 和 Output 的 Binding 信息并配合 <code>@EnableBinding</code> 注解使其生效，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>@SpringBootApplication
@EnableBinding({ MySource.class, MySink.class })
public class RocketMQApplication {
    public static void main(String[] args) {
        SpringApplication.run(RocketMQApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-2" tabindex="-1"><a class="header-anchor" href="#application-yml-2" aria-hidden="true">#</a> application.yml</h2><h3 id="生产者-1" tabindex="-1"><a class="header-anchor" href="#生产者-1" aria-hidden="true">#</a> 生产者</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: rocketmq-provider
  cloud:
    stream:
      rocketmq:
        binder:
          namesrv-addr: 192.168.10.149:9876
      bindings:
        output1: {destination: test-topic1, content-type: application/json}
        output2: {destination: test-topic2, content-type: application/json}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消费者-1" tabindex="-1"><a class="header-anchor" href="#消费者-1" aria-hidden="true">#</a> 消费者</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: rocketmq-consumer
  cloud:
    stream:
      rocketmq:
        binder:
          namesrv-addr: 192.168.10.149:9876
        bindings:
          input: {consumer.orderly: true}
      bindings:
        input1: {destination: test-topic1, content-type: text/plain, group: test-group, consumer.maxAttempts: 1}
        input2: {destination: test-topic1, content-type: text/plain, group: test-group, consumer.maxAttempts: 1}
        input3: {destination: test-topic2, content-type: text/plain, group: test-group, consumer.maxAttempts: 1}
        input4: {destination: test-topic2, content-type: text/plain, group: test-group, consumer.maxAttempts: 1}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function I(A,w){const n=l("ExternalLinkIcon");return s(),t("div",null,[o,e("ul",null,[e("li",null,[e("a",v,[i("【视频】项目实战-iToken-消息队列-消息队列的流派"),a(n)])])]),u,e("ul",null,[e("li",null,[e("a",m,[i("【视频】Spring Cloud Alibaba-RocketMQ-基于 Docker 安装"),a(n)])])]),b,e("ul",null,[e("li",null,[e("a",p,[i("【视频】Spring Cloud Alibaba-RocketMQ-生产者"),a(n)])])]),g,h,k,e("p",null,[e("a",f,[i("官方教程"),a(n)])]),q,e("p",null,[i("在之前的 "),e("a",x,[i("基于 Docker 安装 RocketMQ"),a(n)]),i(" 章节中，我们采用 Docker 部署了 RocketMQ 服务，此时 RocketMQ Broker 暴露的地址和端口(10909，10911)是基于容器的，会导致我们开发机无法连接，从而引发 "),S,i(" 异常")]),M,e("ul",null,[e("li",null,[e("a",P,[i("【视频】Spring Cloud Alibaba-RocketMQ-消费者"),a(n)])])]),Q])}const _=d(c,[["render",I],["__file","SpringCloudAlibabayibutongxin.html.vue"]]);export{_ as default};
