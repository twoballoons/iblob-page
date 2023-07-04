import{_ as t,r as p,o as r,c as o,a as n,b as a,d as s,e as i}from"./app-f078eaf8.js";const c={},l={class:"custom-container tip"},d=n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])],-1),u=n("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://www.bilibili.com/video/BV1xE411C7u1",target:"_blank",rel:"noopener noreferrer"},k=i(`<h1 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h1><h1 id="_01【熟悉】zookeeper概述" tabindex="-1"><a class="header-anchor" href="#_01【熟悉】zookeeper概述" aria-hidden="true">#</a> 01【熟悉】Zookeeper概述</h1><h2 id="_1-zookeeper背景" tabindex="-1"><a class="header-anchor" href="#_1-zookeeper背景" aria-hidden="true">#</a> 1，Zookeeper背景</h2><p>随着互联网技术的发展，企业对计算机系统的计算，存储能力要求越来越高，各大IT企业都在追求高并发，海量存储的极致，在这样的背景下，单纯依靠少量高性能单机来完成计算机，云计算的任务已经无法满足需求，企业的IT架构逐渐由集中式往分布式过渡。所谓的分布式是指：把一个计算任务分解成若干个计算单元，并分派到不同的计算机中去执行，最终汇总计算结果的过程。</p><hr><h2 id="_2-zookeeper概述" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper概述" aria-hidden="true">#</a> 2，Zookeeper概述</h2><p>Zookeeper是源代码开放的分布式协调服务，是一个高性能的分布式数据一致性的解决方案，它将那些复杂的，容易出错的分布式一致性服务封装起来。用户可以通过调用Zookeeper提供的接口来解决一些分布式应用中的实际问题。</p><hr><h2 id="_3-zookeeper典型应用场景" tabindex="-1"><a class="header-anchor" href="#_3-zookeeper典型应用场景" aria-hidden="true">#</a> 3，Zookeeper典型应用场景</h2><p>（1）数据发布/订阅</p><p>数据的发布与订阅，顾名思义就是一方把数据发布出来，另一方通过某种手段获取。</p><p>通常数据发布与订阅有两种模式：推模式和拉模式，推模式一般是服务器主动往客户端推送信息，拉模式是客户端主动去服务端请求目标数据（通常采用定时轮询的方式）</p><p>Zookeeper采用两种方式互相结合：发布者将数据发布到Zookeeper集群节点上，订阅者通过一定的方法告诉Zookeeper服务器，自己对哪个节点的数据感兴趣，那么在服务端数据发生变化时，就会通知客户端去获取这些信息。</p><p>（2）负载均衡</p><p>首先在服务端启动的时候，把自己在zookeeper服务器上注册成一个临时节点。zookeeper拥有两种形式的节点，一种是临时节点，一种是永久节点。这两种节点后面的会有较为详细的介绍。注册成临时节点后，再服务端出问题时，节点会自动的从zookeeper上删除，如此zookeeper服务器上的列表就是最新的可用的列表。</p><p>客户端在需要访问服务器的时候首先会去Zookeeper获得所有可用的服务端的连接信息。</p><p>客户端通过一定的策略（如随机）选择一个与之建立连接。</p><p>当客户端发现连接不可用时，会再次从zookeeper上获取可用的服务端连接，并同时删除之前获取的连接列表。</p><p>（3）命名服务</p><p>提供名称的服务。如一般使用较多的有两种id，一种是数据库自增长id，一种是UUID，两种id都有局限，自增长id仅适合在单表单库中使用，uuid适合在分布式系统中使用但由于id没有规律难以理解。而ZK提供了一定的接口可以用来获取一个顺序增长的，可以在集群环境下使用的id。</p><p>（4）分布式协调，通知，心跳服务　在分布式服务系统中，我们常常需要知道哪个服务是可用的，哪个服务是不可用的，传统的方式是通过ping主机来实现的，ping得200的结果说明说明该服务是OK的。</p><p>而在使用 zookeeper时，可以将所有的服务都注册成一个临时节点，我们判断一个服务是否可用，只需要判断这个节点是否在zookeeper集群中存在就可以了，不需要直接去连接和ping服务所在主机，减少系统的复杂度和对服务主机的压力。</p><hr><h2 id="_4-zookeeper优势" tabindex="-1"><a class="header-anchor" href="#_4-zookeeper优势" aria-hidden="true">#</a> 4，Zookeeper优势</h2><p>（1）源代码开放</p><p>（2）高性能，易用稳定，该优势已在众多分布式系统中得到验证</p><p>（3）有着广泛的应用，并且与众多大数据相关技术能实现良好的融合开发。</p><h1 id="_02【掌握】zookeeper的安装及单机版配置" tabindex="-1"><a class="header-anchor" href="#_02【掌握】zookeeper的安装及单机版配置" aria-hidden="true">#</a> 02【掌握】Zookeeper的安装及单机版配置</h1><h2 id="_1-系统要求" tabindex="-1"><a class="header-anchor" href="#_1-系统要求" aria-hidden="true">#</a> 1，系统要求</h2><p>ZooKeeper可以运行在多种系统平台上面，表1展示了zk支持的系统平台，以及在该平台上是否支持开发环境或者生产环境。</p><p>ZooKeeper支持的运行平台</p><p>系统 开发环境 生产环境</p><table><thead><tr><th>系统</th><th>开发环境</th><th>生产环境</th></tr></thead><tbody><tr><td>Linux</td><td>支持</td><td>支持</td></tr><tr><td>Solaris</td><td>支持</td><td>支持</td></tr><tr><td>FreeBSD</td><td>支持</td><td>支持</td></tr><tr><td>Windows</td><td>支持</td><td>不支持</td></tr><tr><td>MacOS</td><td>支持</td><td>不支持</td></tr></tbody></table><p>ZooKeeper是用Java编写的，运行在Java环境上，因此，在部署zk的机器上需要安装Java运行环境。为了正常运行zk，我们需要JRE1.6或者以上的版本。</p><p>对于集群模式下的ZooKeeper部署，3个ZooKeeper服务进程是建议的最小进程数量，而且不同的服务进程建议部署在不同的物理机器上面，以减少机器宕机带来的风险，以实现ZooKeeper集群的高可用。</p><p>ZooKeeper对于机器的硬件配置没有太大的要求。例如，在Yahoo!内部，ZooKeeper部署的机器其配置通常如下：双核处理器，2GB内存，80GB硬盘。</p><hr><h2 id="_2-下载" tabindex="-1"><a class="header-anchor" href="#_2-下载" aria-hidden="true">#</a> 2，下载</h2><p>可以从</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>apache<span class="token punctuation">.</span>org<span class="token operator">/</span>dist<span class="token operator">/</span>zookeeper<span class="token operator">/</span>stable
http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirror<span class="token punctuation">.</span>bit<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>apache<span class="token operator">/</span>zookeeper<span class="token operator">/</span>stable<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下载ZooKeeper，目前最新的稳定版本为 3.5.5 版本【不推荐使用最新版本】推荐使用3.4.14</p><p><img src="https://picgo.xingenhi.cn//typorab1ea01d5-0ddf-4f6f-9c87-e5aea7e7829c.png" alt="image"></p><p>在linux上使用 wget</p>`,43),h={href:"https://picgo.xingenhi.cn/zookeeper/zooInspector-3.4.8.zip",target:"_blank",rel:"noopener noreferrer"},m={href:"https://picgo.xingenhi.cn/zookeeper/ZooInspector.zip",target:"_blank",rel:"noopener noreferrer"},b={href:"http://mirror.bit.edu.cn/apache/zookeeper/zookeeper-3.4.14/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://mirror.bit.edu.cn/apache/zookeeper/zookeeper-3.4.14/zookeeper-3.4.14.tar.gz",target:"_blank",rel:"noopener noreferrer"},z=i(`<p>建议使用镜像</p><p>推荐下载好了再使用xftp传到linux如果使用wget会丢失jar包[亲测过]</p><hr><p>3，配置java环境变量</p><hr><p>如果不会，看我linux的笔记</p><hr><h2 id="_4-解压并修改位置" tabindex="-1"><a class="header-anchor" href="#_4-解压并修改位置" aria-hidden="true">#</a> 4，解压并修改位置</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#解压到/usr/local下面
tar -zxvf zookeeper-3.4.14.tar.gz -C /usr/local
#进入目录
cd /usr/local/
#修改名字
mv zookeeper-3.4.14/ zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_5-修改配置文件" aria-hidden="true">#</a> 5，修改配置文件</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#打开zk的配置文件目录
cd /usr/local/zookeeper/conf
#修改zoo_sample.cfg 为zoo.cfg [一定要改]
mv zoo_sample.cfg  zoo.cfg
#编辑zoo.cfg
vim zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picgo.xingenhi.cn//typora1a8b5058-4f0b-4444-a187-007a6a1c4275.png" alt="image"></p><hr><h2 id="_6-启动关闭连接zk" tabindex="-1"><a class="header-anchor" href="#_6-启动关闭连接zk" aria-hidden="true">#</a> 6，启动关闭连接zk</h2><p>查看zookeeper下面的bin目录</p><p><img src="https://picgo.xingenhi.cn//typora0118b4cc-9c3c-4104-ae0e-694b74dbf061.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typora5b138d37-40b4-4b3e-8968-e6b4502e4492.png" alt="image"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#启动
<span class="token punctuation">.</span>/zkServer<span class="token punctuation">.</span>sh start
#停止
<span class="token punctuation">.</span>/zkServer<span class="token punctuation">.</span>sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看zk的运行状态</p><p><img src="https://picgo.xingenhi.cn//typora158d0ff6-79dd-41b1-a147-613c3bdd0a0b.png" alt="image"></p><p>standalone代表是单机版[一个人自己玩。挂了就结束了，不符合高可用的特点，后面我们一般使用集群]</p><h1 id="_03【掌握】zookeeper文件系统及监听机制" tabindex="-1"><a class="header-anchor" href="#_03【掌握】zookeeper文件系统及监听机制" aria-hidden="true">#</a> 03【掌握】Zookeeper文件系统及监听机制</h1><h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1，概述</h2><p>官方文档上这么解释zookeeper，它是一个分布式服务框架，是Apache Hadoop 的一个子项目，它主要是用来解决分布式应用中经常遇到的一些数据管理问题，如：统一命名服务、状态同步服务、集群管理、分布式应用配置项的管理等。</p><p>简单来说zookeeper=<strong>文件系统+监听通知机制</strong>。</p><h2 id="_2-文件系统" tabindex="-1"><a class="header-anchor" href="#_2-文件系统" aria-hidden="true">#</a> 2，文件系统</h2><h3 id="_2-1-示意图" tabindex="-1"><a class="header-anchor" href="#_2-1-示意图" aria-hidden="true">#</a> 2.1，示意图</h3><p><img src="https://picgo.xingenhi.cn//typora0.6513213812449299.png" alt="image"></p><p>每个子目录项如 NameService 都被称作为 znode(目录节点)，和文件系统一样，我们能够自由的增加、删除znode，在一个znode下增加、删除子znode，唯一的不同在于znode是可以存储数据的。</p><h3 id="_2-2-四种类型的znode" tabindex="-1"><a class="header-anchor" href="#_2-2-四种类型的znode" aria-hidden="true">#</a> 2.2，四种类型的znode：</h3><p><strong>PERSISTENT-持久化目录节点</strong> 客户端与zookeeper断开连接后，该节点依旧存在</p><p><strong>PERSISTENT_SEQUENTIAL-持久化顺序编号目录节点</strong> 客户端与zookeeper断开连接后，该节点依旧存在，只是Zookeeper给该节点名称进行顺序编号</p><p><strong>EPHEMERAL-临时目录节点</strong> 客户端与zookeeper断开连接后，该节点被删除</p><p><strong>EPHEMERAL_SEQUENTIAL-临时顺序编号目录节点</strong> 客户端与zookeeper断开连接后，该节点被删除，只是Zookeeper给该节点名称进行顺序编号</p><hr><h2 id="_3-监听机制" tabindex="-1"><a class="header-anchor" href="#_3-监听机制" aria-hidden="true">#</a> 3，监听机制</h2><p>客户端注册监听它关心的目录节点，当目录节点发生变化（数据改变、被删除、子目录节点增加删除）时，zookeeper会通知客户端。</p><p>zookeeper功能非常强大，可以实现诸如分布式应用配置管理、统一命名服务、状态同步服务、集群管理等功能，我们这里拿比较简单的分布式应用配置管理为例来说明。</p><p>假设我们的程序是分布式部署在多台机器上，如果我们要改变程序的配置文件，需要逐台机器去修改，非常麻烦，现在把这些配置全部放到zookeeper上去，保存在 zookeeper 的某个目录节点中，然后所有相关应用程序对这个目录节点进行监听，一旦配置信息发生变化，每个应用程序就会收到 zookeeper 的通知，然后从 zookeeper 获取新的配置信息应用到系统中。</p><p><img src="https://picgo.xingenhi.cn//typora0.44499657314522434.png" alt="image"></p><h1 id="_04【掌握】zookeeper单机基本使用" tabindex="-1"><a class="header-anchor" href="#_04【掌握】zookeeper单机基本使用" aria-hidden="true">#</a> 04【掌握】Zookeeper单机基本使用</h1><p><strong>通过 ./zkCli.sh 进入客户端后，就可以使用命令来操作zookeeper了。</strong></p><p>quit退出客户端</p><h2 id="_1-创建节点" tabindex="-1"><a class="header-anchor" href="#_1-创建节点" aria-hidden="true">#</a> 1，创建节点</h2><p>使用create命令，可以创建一个zookeeper节点。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//语法</span>
create <span class="token punctuation">[</span><span class="token operator">-</span>s<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>e<span class="token punctuation">]</span> path data acl
<span class="token comment">//其中-s表示顺序节点，-e表示临时节点。默认情况下，创建的是持久节点。</span>
<span class="token comment">//path是节点路径，data是节点数据，acl是用来进行权限控制的。</span>
<span class="token comment">//案例</span>
create <span class="token operator">/</span>sanguo  luoguanzhong  创建一个持久节点目录为<span class="token operator">/</span>sanguo    值为  luoguanzhong
create <span class="token operator">-</span>s <span class="token operator">/</span>shuihu  shinaian  创建一个持久顺序节点目录为<span class="token operator">/</span>shuihu  值为  shinaian
create <span class="token operator">-</span>e <span class="token operator">/</span>xiyou  wuchengren  创建一个临时节点目录为<span class="token operator">/</span>xiyou  值为  wuchengren 
create <span class="token operator">-</span>e <span class="token operator">-</span>s <span class="token operator">/</span>honglou  caoxueqing  创建一个临时顺序节点目录为<span class="token operator">/</span>honglou  值为 caoxueqing   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>2，查看节点内容</p><p>使用get命令，可以获取zookeeper指定节点的内容和属性信息。</p><p>如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span>zk<span class="token operator">:</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token function">2181</span><span class="token punctuation">(</span><span class="token constant">CONNECTED</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> get <span class="token operator">/</span>sanguo
luoguanzhong
cZxid <span class="token operator">=</span> <span class="token number">0xd</span>
ctime <span class="token operator">=</span> <span class="token class-name">Tue</span> <span class="token class-name">Aug</span> <span class="token number">13</span> <span class="token number">20</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">20</span> <span class="token constant">CST</span> <span class="token number">2019</span>  创建时候
mZxid <span class="token operator">=</span> <span class="token number">0xd</span>
mtime <span class="token operator">=</span> <span class="token class-name">Tue</span> <span class="token class-name">Aug</span> <span class="token number">13</span> <span class="token number">20</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">20</span> <span class="token constant">CST</span> <span class="token number">2019</span>  修改时间
pZxid <span class="token operator">=</span> <span class="token number">0xd</span>
cversion <span class="token operator">=</span> <span class="token number">0</span>
dataVersion <span class="token operator">=</span> <span class="token number">0</span>     #没有被修改过，所以版本为<span class="token number">0</span>如果有修改过版本会自增
aclVersion <span class="token operator">=</span> <span class="token number">0</span>
ephemeralOwner <span class="token operator">=</span> <span class="token number">0x0</span>
dataLength <span class="token operator">=</span> <span class="token number">12</span>
numChildren <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-查看子节点" tabindex="-1"><a class="header-anchor" href="#_3-查看子节点" aria-hidden="true">#</a> 3，查看子节点</h2><p>使用ls命令可以查看指定节点下的所有子节点</p><p>以下查看根目录下的所有子节点：</p><p><img src="https://picgo.xingenhi.cn//typora6d60bdae-0ec2-4efa-857c-b861960a55f6.png" alt="image"></p><hr><h2 id="_4-更新节点内容" tabindex="-1"><a class="header-anchor" href="#_4-更新节点内容" aria-hidden="true">#</a> 4，更新节点内容</h2><p>使用set命令，更新节点内容。格式为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#语法
set path data 
其中的data就是要更新的新内容。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码</p><p><img src="https://picgo.xingenhi.cn//typora68505cb9-27db-4e5b-87fc-f2a155c926ae.png" alt="image"></p><hr><p>5，删除节点</p><p><img src="https://picgo.xingenhi.cn//typora00c3cceb-d608-4b14-b652-ab09854b48cc.png" alt="image"></p><p>可以发现，一个节点存在子节点时，无法删除该节点。</p><p>还有一个命令rmr path 删除当前节点及子节点</p><p><strong>6，节点监控</strong></p><p>get path <strong>watch</strong></p><p>再启动一个shell</p><p>使用客户端连接</p><p><img src="https://picgo.xingenhi.cn//typora0e660763-4628-4897-8882-7accb8472ac3.png" alt="image"></p><p>操作步骤</p><p>1，在右边的窗口创建一个节点</p><p><img src="https://picgo.xingenhi.cn//typorae2405c2f-9b60-498b-b9ae-04428d8e4a25.jpg" alt="image"></p><p>2，在左边的窗口连接服务器并监控/sanguo节点</p><p><img src="https://picgo.xingenhi.cn//typora9383513c-7493-44d8-8288-9ecd39a9a8b8.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoraeacba105-a96c-458e-be06-097422f45d14.jpg" alt="image"></p><p>3，修改右边窗口的值，发现左边的发生了变化</p><p><img src="https://picgo.xingenhi.cn//typorab20d6105-cf23-4335-972b-5ce50118af60.png" alt="image"></p><h1 id="_05【掌握】zookeeper集群搭建及使用" tabindex="-1"><a class="header-anchor" href="#_05【掌握】zookeeper集群搭建及使用" aria-hidden="true">#</a> 05【掌握】Zookeeper集群搭建及使用</h1><h2 id="_1-配置参数说明" tabindex="-1"><a class="header-anchor" href="#_1-配置参数说明" aria-hidden="true">#</a> 1，配置参数说明</h2><p>Zookeeper中的配置文件zoo.cfg中参数含义解读如下：</p><p>1．tickTime =2000：通信心跳数，Zookeeper服务器与客户端心跳时间，单位毫秒</p><p>Zookeeper使用的基本时间，服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每个tickTime时间就会发送一个心跳，时间单位为毫秒。</p><p>它用于心跳机制，并且设置最小的session超时时间为两倍心跳时间。(session的最小超时时间是2*tickTime)</p><p>2．initLimit =10：LF初始通信时限</p><p>集群中的Follower跟随者服务器与Leader领导者服务器之间初始连接时能容忍的最多心跳数（tickTime的数量），用它来限定集群中的Zookeeper服务器连接到Leader的时限。</p><p>3．syncLimit =5：LF同步通信时限</p><p>集群中Leader与Follower之间的最大响应时间单位，假如响应超过syncLimit * tickTime，Leader认为Follwer死掉，从服务器列表中删除Follwer。</p><p>4．dataDir：数据文件目录+数据持久化路径</p><p>主要用于保存Zookeeper中的数据。</p><p>5．clientPort =2181：客户端连接端口</p><p>监听客户端连接的端口。</p><hr><h2 id="_2-选举机制" tabindex="-1"><a class="header-anchor" href="#_2-选举机制" aria-hidden="true">#</a> 2，选举机制</h2><p>1）半数机制：集群中半数以上机器存活，集群可用。所以Zookeeper适合安装奇数台服务器。</p><p>2）Zookeeper虽然在配置文件中并没有指定Master和Slave。但是，Zookeeper工作时，是有一个节点为Leader，其他则为Follower，Leader是通过内部的选举机制临时产生的。</p><p>3）以一个简单的例子来说明整个选举的过程。</p><p>假设有五台服务器组成的Zookeeper集群，它们的id从1-5，同时它们都是最新启动的，也就是没有历史数据，在存放数据量这一点上，都是一样的。假设这些服务器依序启动，来看看会发生什么，如图</p><p><img src="https://picgo.xingenhi.cn//typora6fe1076b-ab9d-4cf0-befe-d99059bf8aec.png" alt="image"></p><p>（1）服务器1启动，此时只有它一台服务器启动了，它发出去的报文没有任何响应，所以它的选举状态一直是LOOKING状态。</p><p>（2）服务器2启动，它与最开始启动的服务器1进行通信，互相交换自己的选举结果，由于两者都没有历史数据，所以id值较大的服务器2胜出，但是由于没有达到超过半数以上的服务器都同意选举它(这个例子中的半数以上是3)，所以服务器1、2还是继续保持LOOKING状态。</p><p>（3）服务器3启动，根据前面的理论分析，服务器3成为服务器1、2、3中的老大，而与上面不同的是，此时有三台服务器选举了它，所以它成为了这次选举的Leader。</p><p>（4）服务器4启动，根据前面的分析，理论上服务器4应该是服务器1、2、3、4中最大的，但是由于前面已经有半数以上的服务器选举了服务器3，所以它只能接收当小弟的命了。</p><p>（5）服务器5启动，同4一样当小弟。</p><hr><h2 id="_3-集群搭建" tabindex="-1"><a class="header-anchor" href="#_3-集群搭建" aria-hidden="true">#</a> 3，集群搭建</h2><h3 id="_3-1-集群的规划" tabindex="-1"><a class="header-anchor" href="#_3-1-集群的规划" aria-hidden="true">#</a> 3.1，集群的规划</h3><table><thead><tr><th>机器编号</th><th>Ip 地址</th><th>端口</th></tr></thead><tbody><tr><td>Zk-1</td><td>192.168.120.131</td><td>2181</td></tr><tr><td>Zk-2</td><td>192.168.120.131</td><td>2182</td></tr><tr><td>Zk-3</td><td>192.168.120.131</td><td>2183</td></tr></tbody></table><h3 id="_3-2-新建一个集群的文件夹" tabindex="-1"><a class="header-anchor" href="#_3-2-新建一个集群的文件夹" aria-hidden="true">#</a> 3.2， 新建一个集群的文件夹</h3><p><img src="https://picgo.xingenhi.cn//typora00e814f2-dc37-4dc2-bca3-8f29bc50833c.png" alt="image"></p><h3 id="_3-4-准备三个zookeeper" tabindex="-1"><a class="header-anchor" href="#_3-4-准备三个zookeeper" aria-hidden="true">#</a> 3.4， 准备三个zookeeper</h3><p><img src="https://picgo.xingenhi.cn//typorafe157314-6577-4fc4-8aab-6e9e6ad22583.png" alt="image"></p><h3 id="_3-5-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_3-5-修改配置文件" aria-hidden="true">#</a> 3.5，修改配置文件</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#隔间时间的单位，以后它是配置时间的一个单位
tickTime=2000
# 10 * 2000 = 时间 初始化超时时间，和集群里面的机器交流，最大的间隔时间，若超过该时间，则认为超时
initLimit=10
# 同步数据的超时时间，小弟从大佬里面复制数据，超时的时间为 5 * 2000 
syncLimit=5
# zookeeper 的数据目录，三个zk 的数据目录需要不同才行
dataDir=/tmp/zookeeper
# zookeeper的日志目录
dataLogDir=
# zookeeper 的client的端口号
clientPort=2181
# 集群的配置文件
#第几个服务器（1，2，3来自数据目录的一个myid文件，该文件里面保存着当前集群的标识（1，2，3））
# 后面的ip代表将绑定那个ip地址 第一个端口：代表在集群内部，数据复制的接口 第二个端口代表：选举端口
server.1=192.168.120.131:2888:3888
server.2=192.168.120.131:2889:3889
server.3=192.168.120.131:2887:3887
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-1-zk1" tabindex="-1"><a class="header-anchor" href="#_3-5-1-zk1" aria-hidden="true">#</a> 3.5.1 zk1</h4><p>创建data目录和日志目录log</p><p><img src="https://picgo.xingenhi.cn//typorac1ab060c-5d22-4df1-bc6d-b60f2b294c4f.png" alt="image"></p><p>给数据目录里面新建一个myid文件</p><p><img src="https://picgo.xingenhi.cn//typoraed8cf7b3-ccd3-4b6a-9b78-4d26f91f8cb7.png" alt="image"></p><p>给myid里面加入一个值为 1</p><p>修改zk1/conf/zoo.cfg</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#隔间时间的单位，以后它是配置时间的一个单位
tickTime=2000
# 10 * 2000 = 时间 初始化超时时间，和集群里面的机器交流，最大的间隔时间，若超过该时间，则认为超时
initLimit=10
# 同步数据的超时时间，小弟从大佬里面复制数据，超时的时间为 5 * 2000 
syncLimit=5
# zookeeper 的数据目录，三个zk 的数据目录需要不同才行
dataDir=/usr/local/zk-cluster/zk1/data
# zookeeper的日志目录
dataLogDir=/usr/local/zk-cluster/zk1/log
# zookeeper 的client的端口号
clientPort=2181
# 集群的配置文件
#第几个服务器（1，2，3来自数据目录的一个myid文件，该文件里面保存着当前集群的标识（1，2，3））
# 后面的ip代表将绑定那个ip地址 第一个端口：代表在集群内部，数据复制的接口 第二个端口代表：选举端口
server.1=192.168.120.131:2888:3888
server.2=192.168.120.131:2889:3889
server.3=192.168.120.131:2887:3887
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-zk2" tabindex="-1"><a class="header-anchor" href="#_3-5-2-zk2" aria-hidden="true">#</a> 3.5.2 zk2</h4><p>创建data目录和日志目录log</p><p><img src="https://picgo.xingenhi.cn//typora342d826a-70a7-4dc3-b166-aa5b522a58f1.png" alt="image"></p><p>给数据目录里面新建一个myid文件并给值为2</p><p><img src="https://picgo.xingenhi.cn//typorae1f9a64b-118d-4083-b765-8e069a70cdfc.png" alt="image"></p><p>修改zk2/conf/zoo.cfg</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#隔间时间的单位，以后它是配置时间的一个单位
tickTime=2000
# 10 * 2000 = 时间 初始化超时时间，和集群里面的机器交流，最大的间隔时间，若超过该时间，则认为超时
initLimit=10
# 同步数据的超时时间，小弟从大佬里面复制数据，超时的时间为 5 * 2000 
syncLimit=5
# zookeeper 的数据目录，三个zk 的数据目录需要不同才行
dataDir=/usr/local/zk-cluster/zk2/data
# zookeeper的日志目录
dataLogDir=/usr/local/zk-cluster/zk2/log
# zookeeper 的client的端口号
clientPort=2182
# 集群的配置文件
#第几个服务器（1，2，3来自数据目录的一个myid文件，该文件里面保存着当前集群的标识（1，2，3））
# 后面的ip代表将绑定那个ip地址 第一个端口：代表在集群内部，数据复制的接口 第二个端口代表：选举端口
server.1=192.168.120.131:2888:3888
server.2=192.168.120.131:2889:3889
server.3=192.168.120.131:2887:3887
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-3-zk3" tabindex="-1"><a class="header-anchor" href="#_3-5-3-zk3" aria-hidden="true">#</a> 3.5.3 zk3</h4><p>创建data目录和日志目录log</p><p><img src="https://picgo.xingenhi.cn//typora4dc9d175-8241-480f-99e3-6c833161217c.png" alt="image"></p><p>给数据目录里面新建一个myid文件并给值为3</p><p><img src="https://picgo.xingenhi.cn//typora8e639e28-14d2-4ec1-a8d6-380a2e6c93b1.png" alt="image"></p><p>修改zk3/conf/zoo.cfg</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>#隔间时间的单位，以后它是配置时间的一个单位
tickTime=2000
# 10 * 2000 = 时间 初始化超时时间，和集群里面的机器交流，最大的间隔时间，若超过该时间，则认为超时
initLimit=10
# 同步数据的超时时间，小弟从大佬里面复制数据，超时的时间为 5 * 2000 
syncLimit=5
# zookeeper 的数据目录，三个zk 的数据目录需要不同才行
dataDir=/usr/local/zk-cluster/zk3/data
# zookeeper的日志目录
dataLogDir=/usr/local/zk-cluster/zk3/log
# zookeeper 的client的端口号
clientPort=2183
# 集群的配置文件
#第几个服务器（1，2，3来自数据目录的一个myid文件，该文件里面保存着当前集群的标识（1，2，3））
# 后面的ip代表将绑定那个ip地址 第一个端口：代表在集群内部，数据复制的接口 第二个端口代表：选举端口
server.1=192.168.120.131:2888:3888
server.2=192.168.120.131:2889:3889
server.3=192.168.120.131:2887:3887
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-启动测试" tabindex="-1"><a class="header-anchor" href="#_3-6-启动测试" aria-hidden="true">#</a> 3.6，启动测试</h3><p>同时启动三台zk 测试</p><p><img src="https://picgo.xingenhi.cn//typora8debd5e7-be5f-414e-acc1-95980f7a5792.png" alt="image"></p><p>查看状态</p><p><img src="https://picgo.xingenhi.cn//typora002a2f04-388f-4c0f-900f-83aa90347180.png" alt="image"></p><p>到此我们集群搭建完成</p><p>可以测试一下</p><p>在zk1下面创建一个节点</p><p>看看zk2和zk3下面有没有</p><p><img src="https://picgo.xingenhi.cn//typora1d1df2bc-0f1c-4428-92c2-ed4739d8edab.png" alt="image"></p><h1 id="_06【掌握】zookeeper选举-paxos-帕克索斯-算法" tabindex="-1"><a class="header-anchor" href="#_06【掌握】zookeeper选举-paxos-帕克索斯-算法" aria-hidden="true">#</a> 06【掌握】Zookeeper选举（Paxos[帕克索斯]算法）</h1><h2 id="_1-paxos算法产生的背景" tabindex="-1"><a class="header-anchor" href="#_1-paxos算法产生的背景" aria-hidden="true">#</a> 1，Paxos算法产生的背景</h2><p>Paxos算法是基于消息传递且具有高度容错特性的一致性算法，是目前公认的解决分布式一致性问题最有效的算法之一，其解决的问题就是在分布式系统中如何就某个值（决议）达成一致。</p><p>在常见的分布式系统中，总会发生诸如机器宕机或网络异常（包括消息的延迟、丢失、重复、乱序，还有网络分区）(也就是会发生异常的分布式系统)等情况。Paxos算法需要解决的问题就是如何在一个可能发生上述异常的分布式系统中，快速且正确地在集群内部对某个数据的值达成一致。也可以理解成分布式系统中达成状态的一致性。</p><p>注：这里某个数据的值并不只是狭义上的某个数，它可以是一条日志，也可以是一条命令（command）。。。根据应用场景不同，某个数据的值有不同的含义。</p><h2 id="_2-对paxos保证一致性换一种理解" tabindex="-1"><a class="header-anchor" href="#_2-对paxos保证一致性换一种理解" aria-hidden="true">#</a> 2，对Paxos保证一致性换一种理解：</h2><p>?Paxos 算法是分布式一致性算法用来解决一个分布式系统如何就某个值(决议)达成一致的问题。一个典型的场景是，在一个分布式数据库系统中，如果各节点的初始状态一致，每个节点都执行相同的操作序列，那么他们最后能得到一个一致的状态。为保证每个节点执行相同的命令序列，需要在每一条指令上执行一个”一致性算法”以保证每个节点看到的指令一致。</p><p>分布式系统中一般是通过多副本来保证可靠性，而多个副本之间会存在数据不一致的情况。所以必须有一个一致性算法来保证数据的一致，描述如下：</p><p>??假如在分布式系统中初始是各个节点的数据是一致的，每个节点都顺序执行系列操作，然后每个节点最终的数据还是一致的。</p><p>??Paxos算法就是解决这种分布式场景中的一致性问题。对于一般的开发人员来说，只需要知道paxos是一个分布式选举算法即可。多个节点之间存在两种通讯模型：共享内存（Shared memory）、消息传递（Messages passing），Paxos是基于消息传递的通讯模型的。</p><p><img src="https://picgo.xingenhi.cn//typoracf954c62-7457-463e-8685-d9c27307aad1.jpg" alt="image"></p><hr><h2 id="_3-拜占庭问题" tabindex="-1"><a class="header-anchor" href="#_3-拜占庭问题" aria-hidden="true">#</a> 3，拜占庭问题</h2><p>拜占庭将军问题：是指拜占庭帝国军队的将军们必须全体一致的决定是否攻击某一支敌军。问题是这些将军在地理上是分隔开来的，只能依靠通讯员进行传递命令，但是通讯员中存在叛徒，它们可以篡改消息，叛徒可以欺骗某些将军采取进攻行动；促成一个不是所有将军都同意的决定，如当将军们不希望进攻时促成进攻行动；或者迷惑某些将军，使他们无法做出决定。</p><p>Paxos算法的前提假设是不存在拜占庭将军问题，即：信道是安全的（信道可靠），发出的信号不会被篡改，因为Paxos算法是基于消息传递的。此问题由Lamport提出，它也是 Paxos算法的提出者。</p><p>从理论上来说，在分布式计算领域，试图在异步系统和不可靠信道上来达到一致性状态是不可能的。因此在对一致性的研究过程中，都往往假设信道是可靠的，而事实上，大多数系统都是部署在一个局域网中，因此消息被篡改的情况很罕见；另一方面，由于硬件和网络原因而造成的消息不完整问题，只需要一套简单的校验算法即可。因此，在实际工程中，可以假设所有的消息都是完整的，也就是没有被篡改。</p><hr><h2 id="_4-paxos算法的相关概念" tabindex="-1"><a class="header-anchor" href="#_4-paxos算法的相关概念" aria-hidden="true">#</a> 4，Paxos算法的相关概念</h2><p>在Paxos算法中，有三种角色：、</p><ol><li>Proposer 倡导者 有人提出一个想法</li><li>Acceptor 协定者 很多人给这个想法投票（赞成，不赞成）</li><li>Learners 学习者 达到一致到处理提案结果</li></ol><p>在具体的实现中，一个进程可能同时充当多种角色。比如一个进程可能既是Proposer又是Acceptor又是Learner。Proposer负责提出提案，Acceptor负责对提案作出裁决（accept与否），learner负责学习提案结果。</p><p>还有一个很重要的概念叫提案（Proposal）。最终要达成一致的value就在提案里。只要Proposer发的提案被Acceptor接受（半数以上的Acceptor同意才行），Proposer就认为该提案里的value被选定了。Acceptor告诉Learner哪个value被选定，Learner就认为那个value被选定。只要Acceptor接受了某个提案，Acceptor就任务该提案里的value被选定了。</p><p>为了避免单点故障，会有一个Acceptor集合，Proposer想Acceptor集合发送提案，Acceptor集合中的每个成员都有可能同意该提案且每个Acceptor只能批准一个提案，只有当一半以上的成员同意了一个提案，就认为该提案被选定了。</p><p><img src="https://picgo.xingenhi.cn//typora73fbbd67-dc45-4628-9034-48d32e126698.jpg" alt="image"></p><hr><h2 id="_5-paxos算法的解决的问题描述" tabindex="-1"><a class="header-anchor" href="#_5-paxos算法的解决的问题描述" aria-hidden="true">#</a> 5，Paxos算法的解决的问题描述</h2><p>假设有一组可以提出（propose）value（value在提案Proposal里）的进程集合。一个一致性算法需要保证提出的这么多value中，只有一个value被选定（chosen）。如果没有value被提出，就不应该有value被选定。如果一个value被选定，那么所有进程都应该能学习（learn）到这个被选定的value。对于一致性算法，安全性（safaty）要求如下：</p><p>只有被提出的value才能被选定。</p><p>只有一个value被选定，并且</p><p>如果某个进程认为某个value被选定了，那么这个value必须是真的被选定的那个。</p><p>Paxos的目标：保证最终有一个value会被选定，当value被选定后，进程最终也能获取到被选定的value。</p><hr><h2 id="_6-具体实例理解" tabindex="-1"><a class="header-anchor" href="#_6-具体实例理解" aria-hidden="true">#</a> 6，具体实例理解</h2><p>问题背景：假设我们有下图的系统，想要在server1，server2，server3选一个master。</p><p><img src="https://picgo.xingenhi.cn//typora9a970ee2-f56a-44f3-b5c3-690627b65315.png" alt="image"></p><p>prepare阶段</p><p>??1. 每个server向proposer发送消息，表示自己要当leader，假设proposer收到消息的时间不一样，顺序是： proposer2 -&gt; proposer1 -&gt; proposer3，消息编号依次为1、2、3。</p><p>??紧接着，proposer将消息发给acceptor中超过半数的子成员(这里选择两个)，如图所示，proposer2向acceptor2和acceptor3发送编号为1的消息，proposer1向acceptor1和accepto2发送编号为2的消息，proposer3向acceptor2和acceptor3发送编号为3的消息。</p><pre><code>  2. 假设这时proposer1发送的消息先到达acceptor1和acceptor2，它们都没有接收过请求，所以接收该请求并返回【pok，null，null】给proposer1，同时acceptor1和acceptor2承诺不再接受编号小于2的请求； 
</code></pre><p>??紧接着，proposer2的消息到达acceptor2和acceptor3，acceptor3没有接受过请求，所以返回proposer2 【pok，null，null】，acceptor3并承诺不再接受编号小于1的消息。而acceptor2已经接受proposer1的请求并承诺不再接收编号小于2的请求，所以acceptor2拒绝proposer2的请求；</p><p>??最后，proposer3的消息到达acceptor2和acceptor3，它们都接受过提议，但编号3的消息大于acceptor2已接受的2和acceptor3已接受的1，所以他们都接受该提议，并返回proposer3 【pok，null，null】；</p><p>??此时，proposer2没有收到过半的回复，所以重新取得编号4，并发送给acceptor2和acceptor3，此时编号4大于它们已接受的提案编号3，所以接受该提案，并返回proposer2 【pok，null，null】。</p><p>accept阶段</p><p>1</p><p>??Proposer3收到半数以上（两个）的回复，并且返回的value为null，所以，proposer3提交了【3，server3】的提案。</p><p>??Proposer1也收到过半回复，返回的value为null，所以proposer1提交了【2，server1】的提案。</p><p>??Proposer2也收到过半回复，返回的value为null，所以proposer2提交了【4，server2】的提案。</p><p>（这里要注意，并不是所有的proposer都达到过半了才进行第二阶段，这里只是一种特殊情况）</p><p>2</p><p>??Acceptor1和acceptor2接收到proposer1的提案【2，server1】，acceptor1通过该请求，acceptor2承诺不再接受编号小于4的提案，所以拒绝；</p><p>??Acceptor2和acceptor3接收到proposer2的提案【4，server2】，都通过该提案；</p><p>??Acceptor2和acceptor3接收到proposer3的提案【3，server3】，它们都承诺不再接受编号小于4的提案，所以都拒绝。</p><p>所以proposer1和proposer3会再次进入第一阶段，但这时候 Acceptor2和acceptor3已经通过了提案（AcceptN = 4，AcceptV=server2），并达成了多数，所以proposer会递增提案编号，并最终改变其值为server2。最后所有的proposer都肯定会达成一致，这就迅速的达成了一致。</p><p>??此时，过半的acceptor（acceptor2和acceptor3）都接受了提案【4，server2】，learner感知到提案的通过，learner开始学习提案，所以server2成为最终的leader。</p><hr><h2 id="_7-paxos算法的过半依据" tabindex="-1"><a class="header-anchor" href="#_7-paxos算法的过半依据" aria-hidden="true">#</a> 7，Paxos算法的过半依据</h2><p>在Paxos算法中，采用了“过半”理念，也就是少数服从多数，这使Paxos算法具有很好的容错性。那么为什么采用过半就可以呢？</p><p>Paxos基于的过半数学原理： 我们称大多数（过半）进程组成的集合为法定集合，两个法定（过半）集合必然存在非空交集，即至少有一个公共进程，称为法定集合性质。 例如A,B,C,D,F进程组成的全集，法定集合Q1包括进程A,B,C，Q2包括进程B,C,D，那么Q1和Q2的交集必然不在空，C就是Q1，Q2的公共进程。如果要说Paxos最根本的原理是什么，那么就是这个简单性质。也就是说：两个过半的集合必然存在交集，也就是肯定是相等的，也就是肯定达成了一致。</p><p>Paxos是基于消息传递的具有高度容错性的分布式一致性算法。Paxos算法引入了过半的概念，解决了2PC，3PC的太过保守的缺点，且使算法具有了很好的容错性，另外Paxos算法支持分布式节点角色之间的轮换，这极大避免了分布式单点的出现，因此Paxos算法既解决了无限等待问题，也解决了脑裂问题，是目前来说最优秀的分布式一致性算法。其中，Zookeeper的ZAB算法和Raft一致性算法都是基于Paxos的。07【掌握】应用场景</p><h2 id="_1-概述-1" tabindex="-1"><a class="header-anchor" href="#_1-概述-1" aria-hidden="true">#</a> 1，概述</h2><p>提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下线、软负载均衡等。</p><h2 id="_2-统一命名服务" tabindex="-1"><a class="header-anchor" href="#_2-统一命名服务" aria-hidden="true">#</a> 2，统一命名服务</h2><p><img src="https://picgo.xingenhi.cn//typorab48243cb-fef1-44e6-afe0-b253f892eb38.png" alt="image"></p><h2 id="_3-统一配置管理" tabindex="-1"><a class="header-anchor" href="#_3-统一配置管理" aria-hidden="true">#</a> 3，统一配置管理</h2><p><img src="https://picgo.xingenhi.cn//typora80a26d7b-4a39-4153-a377-ea91292737f0.png" alt="image"></p><p>4，统一集群管理</p><p><img src="https://picgo.xingenhi.cn//typorac4246aad-1587-4ccf-b98a-11e299eef920.png" alt="image"></p><h2 id="_5-服务动态上线服务" tabindex="-1"><a class="header-anchor" href="#_5-服务动态上线服务" aria-hidden="true">#</a> 5，服务动态上线服务</h2><h1 id="_07【掌握】应用场景" tabindex="-1"><a class="header-anchor" href="#_07【掌握】应用场景" aria-hidden="true">#</a> 07【掌握】应用场景</h1><h2 id="_1-概述-2" tabindex="-1"><a class="header-anchor" href="#_1-概述-2" aria-hidden="true">#</a> 1，概述</h2><p>提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下线、软负载均衡等。</p><h2 id="_2-统一命名服务-1" tabindex="-1"><a class="header-anchor" href="#_2-统一命名服务-1" aria-hidden="true">#</a> 2，统一命名服务</h2><p><img src="https://picgo.xingenhi.cn//typorab48243cb-fef1-44e6-afe0-b253f892eb38.png" alt="image"></p><h2 id="_3-统一配置管理-1" tabindex="-1"><a class="header-anchor" href="#_3-统一配置管理-1" aria-hidden="true">#</a> 3，统一配置管理</h2><p><img src="https://picgo.xingenhi.cn//typora80a26d7b-4a39-4153-a377-ea91292737f0.png" alt="image"></p><p>4，统一集群管理</p><p><img src="https://picgo.xingenhi.cn//typorac4246aad-1587-4ccf-b98a-11e299eef920.png" alt="image"></p><h2 id="_5-服务动态上线服务-1" tabindex="-1"><a class="header-anchor" href="#_5-服务动态上线服务-1" aria-hidden="true">#</a> 5，服务动态上线服务</h2><p><img src="https://picgo.xingenhi.cn//typora492cea4e-7735-4c65-ab1f-e70b5ddc235c.png" alt="image"></p><h1 id="_08【掌握】java操作zookeeper" tabindex="-1"><a class="header-anchor" href="#_08【掌握】java操作zookeeper" aria-hidden="true">#</a> 08【掌握】java操作zookeeper</h1><h2 id="_1-创建项目" tabindex="-1"><a class="header-anchor" href="#_1-创建项目" aria-hidden="true">#</a> 1，创建项目</h2><p><img src="https://picgo.xingenhi.cn//typorae9baaf39-4736-4e05-98e7-97b2c9c4b48b.png" alt="image"></p><p>2，添加依赖</p><p><img src="https://picgo.xingenhi.cn//typora09892da6-8573-44e4-9c8d-ae36666ccde4.png" alt="image"></p><hr><h2 id="_3-节点类型说明" tabindex="-1"><a class="header-anchor" href="#_3-节点类型说明" aria-hidden="true">#</a> 3，节点类型说明</h2><p><img src="https://picgo.xingenhi.cn//typoraa97976f4-29c0-40fb-a40e-de788a5aff62.jpg" alt="image"></p><h2 id="_4-集群连接测试-添加节点" tabindex="-1"><a class="header-anchor" href="#_4-集群连接测试-添加节点" aria-hidden="true">#</a> 4，集群连接测试 添加节点</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ZkClient</span> zkClient <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> serverstring <span class="token operator">=</span> <span class="token string">&quot;192.168.120.131:2181,192.168.120.131:2182,192.168.120.131:2183&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">//1 连接zk</span>
        zkClient <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">ZkClient</span><span class="token punctuation">(</span>serverstring<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> create <span class="token operator">=</span> zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;/java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>create<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_5-集群连接测试-节点监听" tabindex="-1"><a class="header-anchor" href="#_5-集群连接测试-节点监听" aria-hidden="true">#</a> 5，集群连接测试 节点监听</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZookeeperWatchTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> serverstring <span class="token operator">=</span> <span class="token string">&quot;192.168.120.131:2181,192.168.120.131:2182,192.168.120.131:2183&quot;</span><span class="token punctuation">;</span>


    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">CountDownLatch</span> connectedSemaphore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ZooKeeper</span> zk <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Stat</span> stat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//zookeeper配置数据存放路径</span>
        <span class="token class-name">String</span> path <span class="token operator">=</span> <span class="token string">&quot;/java&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//连接zookeeper并且注册一个默认的监听器</span>
        zk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>serverstring<span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">//</span>
               <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">WatchedEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">KeeperState<span class="token punctuation">.</span>SyncConnected</span> <span class="token operator">==</span> event<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//zk连接成功通知事件</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">EventType<span class="token punctuation">.</span>None</span> <span class="token operator">==</span> event<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">null</span> <span class="token operator">==</span> event<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                connectedSemaphore<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">EventType<span class="token punctuation">.</span>NodeDataChanged</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//zk目录节点数据变化通知事件</span>
                                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;配置已修改，新值为：&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>zk<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> stat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                <span class="token punctuation">}</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待zk连接成功的通知</span>
        connectedSemaphore<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取path目录节点的配置数据，并注册默认的监听器</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>zk<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> stat<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><hr><h2 id="_5-集群连接测试-节点监听-1" tabindex="-1"><a class="header-anchor" href="#_5-集群连接测试-节点监听-1" aria-hidden="true">#</a> 5，集群连接测试 节点监听</h2><h2 id="创建自定义序列化类" tabindex="-1"><a class="header-anchor" href="#创建自定义序列化类" aria-hidden="true">#</a> 创建自定义序列化类</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>public class CustomSerializer implements ZkSerializer {
    /** default utf 8*/
    private String charset = &quot;UTF-8&quot;;

    public CustomSerializer(){

    }

    public CustomSerializer(String charset){
        this.charset = charset;
    }
    public byte[] serialize(Object data) throws ZkMarshallingError {
        try{
            byte[] bytes = String.valueOf(data).getBytes(charset);
            return bytes;
        }catch (UnsupportedEncodingException e){
            throw new ZkMarshallingError(&quot;Wrong Charset:&quot; + charset);
        }
    }

    public Object deserialize(byte[] bytes) throws ZkMarshallingError {
        String result=null;
        try {
               result = new String(bytes,charset);
        } catch (UnsupportedEncodingException e) {
            throw new ZkMarshallingError(&quot;Wrong Charset:&quot; + charset);
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的自定义序列化：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>package org.example;

import com.alibaba.fastjson.JSON;
import org.I0Itec.zkclient.exception.ZkMarshallingError;
import org.I0Itec.zkclient.serialize.ZkSerializer;

import java.io.UnsupportedEncodingException;

/**
 * @作者：辛根
 * @描述：自定义序列化和反序列化
 * @日期： 2020/4/2
 */
public class UserSerializer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>T</span><span class="token punctuation">&gt;</span></span> implements ZkSerializer {

    /**
     * default utf 8
     */
    private String charset = &quot;UTF-8&quot;;

    public UserSerializer() {

    }

    public UserSerializer(String charset) {
        this.charset = charset;
    }

    public byte[] serialize(Object data) throws ZkMarshallingError {
        String s = JSON.toJSONString(data);
        try {
            byte[] bytes = s.getBytes(charset);
            return bytes;
        } catch (UnsupportedEncodingException e) {
            throw new ZkMarshallingError(&quot;Wrong Charset:&quot; + charset);
        }
    }

    public Object deserialize(byte[] bytes) throws ZkMarshallingError {
        User user = null;
        try {
            String result = new String(bytes, charset);
            user = JSON.parseObject(result, User.class);
        } catch (UnsupportedEncodingException e) {
            throw new ZkMarshallingError(&quot;Wrong Charset:&quot; + charset);
        }
        return user;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>package org.example;

import org.I0Itec.zkclient.IZkChildListener;
import org.I0Itec.zkclient.IZkDataListener;
import org.I0Itec.zkclient.ZkClient;
import org.apache.zookeeper.CreateMode;

import java.io.IOException;
import java.util.List;

/**
 * @作者：辛根
 * @描述：订阅/监控
 * @日期： 2020/4/2
 */
public class TestZKSubData {
    private static final String SERVERSTRING = &quot;192.168.40.139:2181&quot;;
    private static ZkClient zkClient = null;

    static {
        zkClient = new ZkClient(SERVERSTRING, 10000, 10000, new CustomSerializer());
    }

    public static void main(String[] args) throws IOException {
//        String s = zkClient.create(&quot;/javaee&quot;, &quot;javaee&quot;, CreateMode.PERSISTENT);
//        zkClient.create(&quot;/java/java1&quot;, &quot;java1&quot;, CreateMode.PERSISTENT);
//        zkClient.create(&quot;/java/java2&quot;, &quot;java2&quot;, CreateMode.PERSISTENT);
//        zkClient.create(&quot;/java/java3&quot;, &quot;java3&quot;, CreateMode.PERSISTENT);
//        zkClient.create(&quot;/java/java4&quot;, &quot;java4&quot;, CreateMode.PERSISTENT);
//        zkClient.create(&quot;/java/java5&quot;, &quot;java5&quot;, CreateMode.PERSISTENT);

        /**
         * 描述.监听
         * 参数1：监听的节点
         * 参数2：方法回调
         * @Author 辛根 2020/4/2
         **/
//        zkClient.subscribeDataChanges(&quot;/javaee&quot;, new IZkDataListener() {
//
//            @Override
//            public void handleDataChange(String s, Object o) throws Exception {
//                System.out.println(&quot;节点数据变更&quot; + s + &quot; &quot; + o);
//            }
//
//            @Override
//            public void handleDataDeleted(String s) throws Exception {
//                System.out.println(&quot;节点数据删除&quot; + s);
//            }
//        });

        /**
         * 描述.监听子节点的数据添加和删除
         * @Author 辛根 2020/4/2
         **/
        zkClient.subscribeChildChanges(&quot;/java&quot;, new IZkChildListener() {
            @Override
            public void handleChildChange(String s, List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>String</span><span class="token punctuation">&gt;</span></span> list) throws Exception {
                System.out.println(&quot;父节点路径&quot; + s);
                System.out.println(&quot;变更后的子节点信息&quot;);
                for (String s1 : list) {
                    System.out.println(s1);
                }
            }
        });

        // 阻止程序退出
        System.in.read();

        System.out.println(&quot;操作成功&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_09【掌握】java操作zookeeper" tabindex="-1"><a class="header-anchor" href="#_09【掌握】java操作zookeeper" aria-hidden="true">#</a> 09【掌握】java操作zookeeper</h1><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><p><img src="https://picgo.xingenhi.cn//typoraclip_image0027b033b34-a7dc-49ff-8c2b-f3a663f5d128.jpg" alt="image"></p><h3 id="加入依赖" tabindex="-1"><a class="header-anchor" href="#加入依赖" aria-hidden="true">#</a> 加入依赖</h3><p><img src="https://picgo.xingenhi.cn//typoraclip_image004f3240a6b-c94b-4644-b925-dd33e8ba173a.jpg" alt="image"></p><table><thead><tr><th>com.101tec zkclient 0.11</th></tr></thead></table><h2 id="节点的创建修改删除" tabindex="-1"><a class="header-anchor" href="#节点的创建修改删除" aria-hidden="true">#</a> 节点的创建修改删除</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>/** * 测试连接zk
 * 操作zk
 * @author LJH
 * */
public class TestCRUD {
     private static final String SERVERSTRING = &quot;192.168.33.115:2181,192.168.33.115:2182,192.168.33.115:2183&quot;;
     private static ZkClient _zkClient_=null;
     static {
         _zkClient_=new ZkClient(SERVERSTRING,10000,10000);
     }
     public static void main(String[] args) {
         //创建create
         //zkClient.create(&quot;/java&quot;, &quot;java&quot;, CreateMode.PERSISTENT);
         //修改
//       zkClient.writeData(&quot;/java&quot;, &quot;hello&quot;);
         //查询
         Object data = zkClient.readData(&quot;/java&quot;);
         System.out.println(data);
         //删除
         zkClient.delete(&quot;/java&quot;);
         System.out.println(&quot;操作成功zkClient&quot;);
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节点的创建修改删除事件的监听" tabindex="-1"><a class="header-anchor" href="#节点的创建修改删除事件的监听" aria-hidden="true">#</a> 节点的创建修改删除事件的监听</h2><h3 id="创建序列化的类" tabindex="-1"><a class="header-anchor" href="#创建序列化的类" aria-hidden="true">#</a> 创建序列化的类</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>public class CustomerSerializer implements ZkSerializer {
     /** default utf 8 */
     private String charset = &quot;UTF-8&quot;;
     public CustomerSerializer() {
         // TODO Auto-generated constructor stub
     }
     public CustomerSerializer(String charset) {
         this.charset = charset;
     }
     /**      * 序列化
      */
     @Override
     public byte[] serialize(Object data) throws ZkMarshallingError {
         try {
              byte[] bytes = String.valueOf(data).getBytes(charset);
              return bytes;
         } catch (UnsupportedEncodingException e) {
              throw new ZkMarshallingError(&quot;Wrong Charset:&quot; + charset);
         }
     }
     /**      * 反序列化
      */
     @Override
     public Object deserialize(byte[] bytes) throws ZkMarshallingError {
         String result = null;
         try {
              result = new String(bytes, charset);
         } catch (UnsupportedEncodingException e) {
              throw new ZkMarshallingError(&quot;Wrong Charset:&quot; + charset);
         }
         return result;
     }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>/** * 测试连接zk监听
 * @author LJH
 * */
public class TestWatch {
    private static final String SERVERSTRING = &quot;192.168.33.115:2181,192.168.33.115:2182,192.168.33.115:2183&quot;;
    private static ZkClient _zkClient_=null;
    static {
        _zkClient_=new ZkClient(SERVERSTRING,10000,10000,new CustomerSerializer());
    }
    public static void main(String[] args) throws IOException {
        //监听当前节点的改变和删除事件
        zkClient.subscribeDataChanges(&quot;/sanguo&quot;, new IZkDataListener() {
             /**              * 当dataPath被删除时回调用的方法
              */
             @Override
             public void handleDataDeleted(String dataPath) throws Exception {
                 System.out.println(&quot;handleDataDeleted:&quot;+dataPath);
             }
             /**              * 当dataPath这个节点的数据发生改变时回调用
              * data:改变这之后的值
              */
             @Override
             public void handleDataChange(String dataPath, Object data) throws Exception {
                 System.out.println(&quot;handleDataChange:&quot;+dataPath+&quot;  &quot;+data);
             }
        });
        //监听子节的变化
        zkClient.subscribeChildChanges(&quot;/sanguo&quot;, new IZkChildListener() {
             /**              * parentPath父节点路径
              * currentChilds  当前父节点下面的所有子节点
              */
             @Override
             public void handleChildChange(String parentPath, List currentChilds) throws Exception {
             }
        });
        System.out.println(&quot;监听启动成功&quot;);
        System.in.read();//不让程序结束
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_11【掌握】监听器原理" tabindex="-1"><a class="header-anchor" href="#_11【掌握】监听器原理" aria-hidden="true">#</a> 11【掌握】监听器原理</h1><p><img src="https://picgo.xingenhi.cn//typora28011f16-963e-4e5e-9b7b-456706e3cd87.png" alt="image"></p><h1 id="_12【理解】zookeeper和cap理论及一致性原则" tabindex="-1"><a class="header-anchor" href="#_12【理解】zookeeper和cap理论及一致性原则" aria-hidden="true">#</a> 12【理解】ZooKeeper和CAP理论及一致性原则</h1><h2 id="_1、cap理论概述" tabindex="-1"><a class="header-anchor" href="#_1、cap理论概述" aria-hidden="true">#</a> 1、CAP理论概述</h2><p>CAP理论告诉我们，一个分布式系统不可能同时满足以下三种</p><p>一致性（C:Consistency）</p><p>可用性（A:Available）</p><p>分区容错性（P:Partition Tolerance）</p><p>这三个基本需求，最多只能同时满足其中的两项，因为P是必须的,因此往往选择就在CP或者AP中。</p><p><img src="https://picgo.xingenhi.cn//typora0.3545000924966888.png" alt="image"></p><h3 id="一致性-c-consistency" tabindex="-1"><a class="header-anchor" href="#一致性-c-consistency" aria-hidden="true">#</a> 一致性（C:Consistency）</h3><p>在分布式环境中，一致性是指数据在多个副本之间是否能够保持数据一致的特性。在一致性的需求下，当一个系统在数据一致的状态下执行更新操作后，应该保证系统的数据仍然处于一致的状态。例如一个将数据副本分布在不同分布式节点上的系统来说，如果对第一个节点的数据进行了更新操作并且更新成功后，其他节点上的数据也应该得到更新，并且所有用户都可以读取到其最新的值，那么这样的系统就被认为具有强一致性（或严格的一致性，最终一致性）。</p><h3 id="可用性-a-available" tabindex="-1"><a class="header-anchor" href="#可用性-a-available" aria-hidden="true">#</a> 可用性（A:Available）</h3><p>可用性是指系统提供的服务必须一直处于可用的状态，对于用户的每一个操作请求总是能够在有限的时间内返回结果。“有效的时间内”是指，对于用户的一个操作请求，系统必须能够在指定的时间（即响应时间）内返回对应的处理结果，如果超过了这个时间范围，那么系统就被认为是不可用的。</p><p>“返回结果”是可用性的另一个非常重要的指标，它要求系统在完成对用户请求的处理后，返回一个正常的响应结果。正常的响应结果通常能够明确的反映出对请求的处理结果，即成功或失败，而不是一个让用户感到困惑的返回结果。</p><h3 id="分区容错性-p-partition-tolerance" tabindex="-1"><a class="header-anchor" href="#分区容错性-p-partition-tolerance" aria-hidden="true">#</a> 分区容错性（P:Partition Tolerance）</h3><p>分区容错性约束了一个分布式系统需要具有如下特性：分布式系统在遇到任何网络分区故障的时候，仍然需要能够保证对外提供满足一致性和可用性的服务，除非是整个网络环境都发生了故障。</p><p>网络分区是指在分布式系统中，不同的节点分布在不同的子网络（机房或异地网络等）中，由于一些特殊的原因导致这些子网络之间出现网络不连通的状况，但各个子网络的内部网络是正常的，从而导致整个系统的网络环境被切分成了若干个孤立的区域。需要注意的是，组成一个分布式系统的每个节点的加入与退出都可以看作是一个特殊的网络分区。</p><p>由于一个分布式系统无法同时满足上面的三个需求，而只能满足其中的两项，因此在进行对CAP定理的应用的时候，需要根据业务的要求抛弃其中的一项，下表所示是抛弃CAP定理中任意一项特性的场景说明。</p><p>因此，将精力浪费在思考如何设计能满足三者的完美系统上是愚钝的，应该根据应用场景进行适当取舍。</p><hr><h2 id="_2、一致性的分类" tabindex="-1"><a class="header-anchor" href="#_2、一致性的分类" aria-hidden="true">#</a> 2、一致性的分类</h2><p>一致性是指从系统外部读取系统内部的数据时，在一定约束条件下相同，即数据变动在系统内部各节点应该是同步的。根据一致性的强弱程度不同，可以将一致性的分类为如下几种：</p><p><strong>强一致性：（strong consistency）</strong>。任何时刻，任何用户都能读取到最近一次成功更新的数据。</p><p><strong>单调一致性：（monotonic consistency）</strong>。任何时刻，任何用户一旦读到某个数据在某次更新后的值，那么就不会再读到比这个值更旧的值。也就是说，可获取的数据顺序必是单调递增的。</p><p>**会话一致性：（session consistency）。**任何用户在某次会话中，一旦读到某个数据在某次更新后的值，那么在本次会话中就不会再读到比这值更旧的值，会话一致性是在单调一致性的基础上进一步放松约束，只保证单个用户单个会话内的单调性，在不同用户或同一用户不同会话间则没有保障。</p><p><strong>最终一致性：（eventual consistency）</strong>。用户只能读到某次更新后的值，但系统保证数据将最终达到完全一致的状态，只是所需时间不能保障。</p><p><strong>弱一致性：（weak consistency）</strong>。用户无法在确定时间内读到最新更新的值。</p><hr><h2 id="_3、zookeeper提供的一致性服务" tabindex="-1"><a class="header-anchor" href="#_3、zookeeper提供的一致性服务" aria-hidden="true">#</a> 3、ZooKeeper提供的一致性服务</h2><p>ZooKeeper从以下几点保证了数据的一致性</p><p>**顺序一致性：**来自任意特定客户端的更新都会按其发送顺序被提交保持一致。也就是说，如果一个客户端将Znode z的值更新为a，在之后的操作中，它又将z的值更新为b，则没有客户端能够在看到z的值是b之后再看到值a（如果没有其他对z的更新）。</p><p>**原子性：**每个更新要么成功，要么失败。这意味着如果一个更新失败，则不会有客户端会看到这个更新的结果。</p><p>**单一系统映像：**一个客户端无论连接到哪一台服务器，它看到的都是同样的系统视图。这意味着，如果一个客户端在同一个会话中连接到一台新的服务器，它所看到的系统状态不会比 在之前服务器上所看到的更老。当一台服务器出现故障，导致它的一个客户端需要尝试连接集合体中其他的服务器时，所有滞后于故障服务器的服务器都不会接受该 连接请求，除非这些服务器赶上故障服务器。</p><p>**持久性：**一个更新一旦成功，其结果就会持久存在并且不会被撤销。这表明更新不会受到服务器故障的影响。</p><p>**实时性：**在特定的一段时间内，客户端看到的系统需要被保证是实时的（在十几秒的时间里）。在此时间段内，任何系统的改变将被客户端看到，或者被客户端侦测到。</p><hr><h2 id="_4、用cap理论来分析zookeeper" tabindex="-1"><a class="header-anchor" href="#_4、用cap理论来分析zookeeper" aria-hidden="true">#</a> 4、用CAP理论来分析ZooKeeper</h2><p>CAP理论告诉我们，一个分布式系统不可能同时满足以下三种</p><ol><li>一致性（C:Consistency）</li><li>可用性（A:Available）</li><li>分区容错性（P:Partition Tolerance）</li></ol><p>这三个基本需求，最多只能同时满足其中的两项，因为P是必须的,因此往往选择就在CP或者AP中。</p><p>在此ZooKeeper保证的是CP</p><p>分析：可用性（A:Available）</p><p>不能保证每次服务请求的可用性。任何时刻对ZooKeeper的访问请求能得到一致的数据结果，同时系统对网络分割具备容错性；但是它不能保证每次服务请求的可用性（注：也就是在极端环境下，ZooKeeper可能会丢弃一些请求，消费者程序需要重新请求才能获得结果）。所以说，ZooKeeper不能保证服务可用性。</p><p>进行leader选举时集群都是不可用。在使用ZooKeeper获取服务列表时，当master节点因为网络故障与其他节点失去联系时，剩余节点会重新进行leader选举。问题在于，选举leader的时间太长，30 ~ 120s, 且选举期间整个zk集群都是不可用的，这就导致在选举期间注册服务瘫痪，虽然服务能够最终恢复，但是漫长的选举时间导致的注册长期不可用是不能容忍的。所以说，ZooKeeper不能保证服务可用性。</p><h1 id="_13【掌握】zookeer集群的特性-面试" tabindex="-1"><a class="header-anchor" href="#_13【掌握】zookeer集群的特性-面试" aria-hidden="true">#</a> 13【掌握】zookeer集群的特性（面试）</h1><h2 id="_1-请简述zookeeper的选举机制" tabindex="-1"><a class="header-anchor" href="#_1-请简述zookeeper的选举机制" aria-hidden="true">#</a> 1， 请简述ZooKeeper的选举机制</h2><p>06【掌握】Zookeeper选举（Paxos算法）</p><h2 id="_2-zookeeper的监听原理是什么" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper的监听原理是什么" aria-hidden="true">#</a> 2， ZooKeeper的监听原理是什么？</h2><p>09【掌握】监听器原理</p><h2 id="_3-zookeeper的部署方式有哪几种-集群中的角色有哪些-集群最少需要几台机器" tabindex="-1"><a class="header-anchor" href="#_3-zookeeper的部署方式有哪几种-集群中的角色有哪些-集群最少需要几台机器" aria-hidden="true">#</a> 3， ZooKeeper的部署方式有哪几种？集群中的角色有哪些？集群最少需要几台机器？</h2><p>（1）部署方式单机模式、集群模式</p><p>（2）角色：Leader和Follower</p><p>（3）集群最少需要机器数：3</p><h2 id="_4-zookeeper的常用命令" tabindex="-1"><a class="header-anchor" href="#_4-zookeeper的常用命令" aria-hidden="true">#</a> 4， ZooKeeper的常用命令</h2><p>ls create get rmr delete set…</p><h1 id="_14【掌握】全局自增id" tabindex="-1"><a class="header-anchor" href="#_14【掌握】全局自增id" aria-hidden="true">#</a> 14【掌握】全局自增ID</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>example</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span></span><span class="token class-name">I0Itec</span><span class="token punctuation">.</span>zkclient<span class="token punctuation">.</span>ZkClient<span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token class-name">CreateMode</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span>data<span class="token punctuation">.</span></span><span class="token class-name">Stat</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @作者：辛根
 * @描述：
 * @日期： 2020/4/2
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ZkIdGenerator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">SERVERSTRING</span> <span class="token operator">=</span> <span class="token string">&quot;192.168.40.139:2181&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ZkClient</span> zkClient<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        zkClient<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ZkClient</span><span class="token punctuation">(</span><span class="token constant">SERVERSTRING</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 得到下一个版本号
     * <span class="token keyword">@param</span> <span class="token parameter">path</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>zkClient<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            zkClient<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">PERSISTENT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Stat</span> stat <span class="token operator">=</span> zkClient<span class="token punctuation">.</span><span class="token function">writeDataReturnStat</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> version <span class="token operator">=</span> stat<span class="token punctuation">.</span><span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> version<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span><span class="token number">1000</span> <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&quot;/id-gen&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,322);function x(f,y){const e=p("ExternalLinkIcon");return r(),o("div",null,[n("div",l,[d,u,n("p",null,[n("a",v,[a("视频链接"),s(e)])])]),k,n("blockquote",null,[n("p",null,[n("a",h,[a(" zooInspector-3.4.8.zip "),s(e)])]),n("p",null,[n("a",m,[a("ZooInspector.zip"),s(e)])])]),n("p",null,[n("a",b,[a("http://mirror.bit.edu.cn/apache/zookeeper/zookeeper-3.4.14/"),s(e)]),n("a",g,[a("zookeeper-3.4.14.tar.gz"),s(e)]),a(" 来下载")]),z])}const w=t(c,[["render",x],["__file","Zookeeper.html.vue"]]);export{w as default};
