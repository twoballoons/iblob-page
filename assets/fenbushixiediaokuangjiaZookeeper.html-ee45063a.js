import{_ as r,r as l,o as s,c as o,a as e,b as n,d as a,e as d}from"./app-f078eaf8.js";const c={},t=d('<h1 id="_01-微服务架构需要解决的问题" tabindex="-1"><a class="header-anchor" href="#_01-微服务架构需要解决的问题" aria-hidden="true">#</a> 01-微服务架构需要解决的问题</h1><h1 id="微服务架构需要解决的问题" tabindex="-1"><a class="header-anchor" href="#微服务架构需要解决的问题" aria-hidden="true">#</a> 微服务架构需要解决的问题</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',3),v={href:"https://www.bilibili.com/video/av34115541/",target:"_blank",rel:"noopener noreferrer"},u=d('<h1 id="_02-什么是分布式协调技术" tabindex="-1"><a class="header-anchor" href="#_02-什么是分布式协调技术" aria-hidden="true">#</a> 02-什么是分布式协调技术</h1><h1 id="什么是分布式协调技术" tabindex="-1"><a class="header-anchor" href="#什么是分布式协调技术" aria-hidden="true">#</a> 什么是分布式协调技术</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>',3),h={href:"https://www.bilibili.com/video/av34115651/",target:"_blank",rel:"noopener noreferrer"},p=d('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>分布式协调技术主要用来解决分布式环境当中多个进程之间的同步控制，让他们有序的去访问某种临界资源，防止造成&quot;脏数据&quot;的后果。</p><p><img src="https://picgo.xingenhi.cn//typoraimport7841-1.png" alt="image"></p><p>在这图中有三台机器，每台机器各跑一个应用程序。然后我们将这三台机器通过网络将其连接起来，构成一个系统来为用户提供服务，对用户来说这个系统的架构是透明的，他感觉不到我这个系统是一个什么样的架构。那么我们就可以把这种系统称作一个<strong>分布式系统</strong>。</p><p>在这个分布式系统中如何对进程进行调度，我假设在第一台机器上挂载了一个资源，然后这三个物理分布的进程都要竞争这个资源，但我们又不希望他们同时进行访问，这时候我们就需要一个<strong>协调器</strong>，来让他们有序的来访问这个资源。这个协调器就是我们经常提到的那个<strong>锁</strong>，比如说&quot;进程-1&quot;在使用该资源的时候，会先去获得锁，&quot;进程1&quot;获得锁以后会对该资源保持<strong>独占</strong>，这样其他进程就无法访问该资源，&quot;进程1&quot;用完该资源以后就将锁释放掉，让其他进程来获得锁，那么通过这个锁机制，我们就能保证了分布式系统中多个进程能够有序的访问该临界资源。那么我们把这个分布式环境下的这个锁叫作<strong>分布式锁</strong>。这个分布式锁也就是我们<strong>分布式协调技术</strong>实现的核心内容。</p><h1 id="_03-什么是分布式锁" tabindex="-1"><a class="header-anchor" href="#_03-什么是分布式锁" aria-hidden="true">#</a> 03-什么是分布式锁</h1><h1 id="什么是分布式锁" tabindex="-1"><a class="header-anchor" href="#什么是分布式锁" aria-hidden="true">#</a> 什么是分布式锁</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>',8),m={href:"https://www.bilibili.com/video/av34115846/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.bilibili.com/video/av34115984/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.bilibili.com/video/av34116094/",target:"_blank",rel:"noopener noreferrer"},k=d(`<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p>为了防止分布式系统中的多个进程之间相互干扰，我们需要一种分布式协调技术来对这些进程进行调度。而这个分布式协调技术的核心就是来实现这个<strong>分布式锁</strong>。</p><h2 id="为什么要使用分布式锁" tabindex="-1"><a class="header-anchor" href="#为什么要使用分布式锁" aria-hidden="true">#</a> 为什么要使用分布式锁</h2><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170001.png" alt="image"></p><ul><li>成员变量 A 存在 JVM1、JVM2、JVM3 三个 JVM 内存中</li><li>成员变量 A 同时都会在 JVM 分配一块内存，三个请求发过来同时对这个变量操作，显然结果是不对的</li><li>不是同时发过来，三个请求分别操作三个不同 JVM 内存区域的数据，变量 A 之间不存在共享，也不具有可见性，处理的结果也是不对的 注：该成员变量 A 是一个有状态的对象</li></ul><p>如果我们业务中确实存在这个场景的话，我们就需要一种方法解决这个问题，<strong>这就是分布式锁要解决的问题</strong></p><h2 id="分布式锁应该具备哪些条件" tabindex="-1"><a class="header-anchor" href="#分布式锁应该具备哪些条件" aria-hidden="true">#</a> 分布式锁应该具备哪些条件</h2><ul><li>在分布式系统环境下，一个方法在同一时间只能被一个机器的一个线程执行</li><li>高可用的获取锁与释放锁</li><li>高性能的获取锁与释放锁</li><li>具备可重入特性（可理解为重新进入，由多于一个任务并发使用，而不必担心数据错误）</li><li>具备锁失效机制，防止死锁</li><li>具备非阻塞锁特性，即没有获取到锁将直接返回获取锁失败</li></ul><h2 id="分布式锁的实现有哪些" tabindex="-1"><a class="header-anchor" href="#分布式锁的实现有哪些" aria-hidden="true">#</a> 分布式锁的实现有哪些</h2><ul><li>Memcached：利用 Memcached 的 <code>add</code> 命令。此命令是原子性操作，只有在 <code>key</code> 不存在的情况下，才能 <code>add</code> 成功，也就意味着线程得到了锁。</li><li>Redis：和 Memcached 的方式类似，利用 Redis 的 <code>setnx</code> 命令。此命令同样是原子性操作，只有在 <code>key</code> 不存在的情况下，才能 <code>set</code> 成功。</li><li><strong>Zookeeper</strong>：利用 Zookeeper 的顺序临时节点，来实现分布式锁和等待队列。Zookeeper 设计的初衷，就是为了实现分布式锁服务的。</li><li>Chubby：Google 公司实现的粗粒度分布式锁服务，底层利用了 Paxos 一致性算法。</li></ul><h2 id="通过-redis-分布式锁的实现理解基本概念" tabindex="-1"><a class="header-anchor" href="#通过-redis-分布式锁的实现理解基本概念" aria-hidden="true">#</a> 通过 Redis 分布式锁的实现理解基本概念</h2><p>分布式锁实现的三个核心要素：</p><h3 id="加锁" tabindex="-1"><a class="header-anchor" href="#加锁" aria-hidden="true">#</a> 加锁</h3><p>最简单的方法是使用 <code>setnx</code> 命令。<code>key</code> 是锁的唯一标识，按业务来决定命名。比如想要给一种商品的秒杀活动加锁，可以给 <code>key</code> 命名为 “lock_sale_商品ID” 。而 <code>value</code> 设置成什么呢？我们可以姑且设置成 <code>1</code>。加锁的伪代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>setnx（lock_sale_商品ID，1）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个线程执行 <code>setnx</code> 返回 <code>1</code>，说明 <code>key</code> 原本不存在，该线程成功得到了锁；当一个线程执行 <code>setnx</code> 返回 <code>0</code>，说明 <code>key</code> 已经存在，该线程抢锁失败。</p><h3 id="解锁" tabindex="-1"><a class="header-anchor" href="#解锁" aria-hidden="true">#</a> 解锁</h3><p>有加锁就得有解锁。当得到锁的线程执行完任务，需要释放锁，以便其他线程可以进入。释放锁的最简单方式是执行 <code>del</code> 指令，伪代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>del（lock_sale_商品ID）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>释放锁之后，其他线程就可以继续执行 <code>setnx</code> 命令来获得锁。</p><h3 id="锁超时" tabindex="-1"><a class="header-anchor" href="#锁超时" aria-hidden="true">#</a> 锁超时</h3><p>锁超时是什么意思呢？如果一个得到锁的线程在执行任务的过程中挂掉，来不及显式地释放锁，这块资源将会永远被锁住（<strong>死锁</strong>），别的线程再也别想进来。所以，<code>setnx</code> 的 <code>key</code> 必须设置一个超时时间，以保证即使没有被显式释放，这把锁也要在一定时间后自动释放。<code>setnx</code> 不支持超时参数，所以需要额外的指令，伪代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>expire（lock_sale_商品ID， 30）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>综合伪代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>if（setnx（lock_sale_商品ID，1） == 1）{
    expire（lock_sale_商品ID，30）
    try {
        do something ......
    } finally {
        del（lock_sale_商品ID）
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存在什么问题" tabindex="-1"><a class="header-anchor" href="#存在什么问题" aria-hidden="true">#</a> 存在什么问题</h3><p>以上伪代码中存在三个致命问题</p><h4 id="setnx-和-expire-的非原子性" tabindex="-1"><a class="header-anchor" href="#setnx-和-expire-的非原子性" aria-hidden="true">#</a> <code>setnx</code> 和 <code>expire</code> 的非原子性</h4><p>设想一个极端场景，当某线程执行 <code>setnx</code>，成功得到了锁：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170002.png" alt="image"></p><p><code>setnx</code> 刚执行成功，还未来得及执行 <code>expire</code> 指令，节点 1 挂掉了。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170003.png" alt="image"></p><p>这样一来，这把锁就没有设置过期时间，变成<strong>死锁</strong>，别的线程再也无法获得锁了。</p><p>怎么解决呢？<code>setnx</code> 指令本身是不支持传入超时时间的，<code>set</code> 指令增加了可选参数，伪代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>set（lock_sale_商品ID，1，30，NX）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以取代 <code>setnx</code> 指令。</p><h4 id="del-导致误删" tabindex="-1"><a class="header-anchor" href="#del-导致误删" aria-hidden="true">#</a> <code>del</code> 导致误删</h4><p>又是一个极端场景，假如某线程成功得到了锁，并且设置的超时时间是 30 秒。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170004.png" alt="image"></p><p>如果某些原因导致线程 A 执行的很慢很慢，过了 30 秒都没执行完，这时候锁过期自动释放，线程 B 得到了锁。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170005.png" alt="image"></p><p>随后，线程 A 执行完了任务，线程 A 接着执行 <code>del</code> 指令来释放锁。但这时候线程 B 还没执行完，线程A实际上 <code>删除的是线程 B 加的锁</code>。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170006.png" alt="image"></p><p>怎么避免这种情况呢？可以在 <code>del</code> 释放锁之前做一个判断，验证当前的锁是不是自己加的锁。至于具体的实现，可以在加锁的时候把当前的线程 ID 当做 <code>value</code>，并在删除之前验证 <code>key</code> 对应的 <code>value</code> 是不是自己线程的 ID。</p><p>加锁：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>String threadId = Thread.currentThread().getId()
set（key，threadId ，30，NX）

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解锁：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>if（threadId .equals(redisClient.get(key))）{
    del(key)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这样做又隐含了一个新的问题，判断和释放锁是两个独立操作，不是原子性。</p><h4 id="出现并发的可能性" tabindex="-1"><a class="header-anchor" href="#出现并发的可能性" aria-hidden="true">#</a> 出现并发的可能性</h4><p>还是刚才第二点所描述的场景，虽然我们避免了线程 A 误删掉 <code>key</code> 的情况，但是同一时间有 A，B 两个线程在访问代码块，仍然是不完美的。怎么办呢？我们可以让获得锁的线程开启一个<strong>守护线程</strong>，用来给快要过期的锁“续航”。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170004.png" alt="image"></p><p>当过去了 29 秒，线程 A 还没执行完，这时候守护线程会执行 <code>expire</code> 指令，为这把锁“续命”20 秒。守护线程从第 29 秒开始执行，每 20 秒执行一次。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170007.png" alt="image"></p><p>当线程 A 执行完任务，会显式关掉守护线程。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170008.png" alt="image"></p><p>另一种情况，如果节点 1 忽然断电，由于线程 A 和守护线程在同一个进程，守护线程也会停下。这把锁到了超时的时候，没人给它续命，也就自动释放了。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170009.png" alt="image"></p><h1 id="_04-什么是-zookeeper" tabindex="-1"><a class="header-anchor" href="#_04-什么是-zookeeper" aria-hidden="true">#</a> 04-什么是 Zookeeper</h1><h1 id="什么是-zookeeper" tabindex="-1"><a class="header-anchor" href="#什么是-zookeeper" aria-hidden="true">#</a> 什么是 Zookeeper</h1><h2 id="本节视频-3" tabindex="-1"><a class="header-anchor" href="#本节视频-3" aria-hidden="true">#</a> 本节视频</h2>`,61),x={href:"https://www.bilibili.com/video/av34116270/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.bilibili.com/video/av34116367/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.bilibili.com/video/av34116506/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.bilibili.com/video/av34116572/",target:"_blank",rel:"noopener noreferrer"},Z=d(`<h2 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h2><p>ZooKeeper 是一种分布式协调服务，用于管理大型主机。在分布式环境中协调和管理服务是一个复杂的过程。ZooKeeper 通过其简单的架构和 API 解决了这个问题。ZooKeeper 允许开发人员专注于核心应用程序逻辑，而不必担心应用程序的分布式特性。</p><p>以下为 Zookeeper 的基本概念</p><h2 id="zookeeper-的数据模型" tabindex="-1"><a class="header-anchor" href="#zookeeper-的数据模型" aria-hidden="true">#</a> Zookeeper 的数据模型</h2><p>Zookeeper 的数据模型是什么样子呢？它很像数据结构当中的树，也很像文件系统的目录。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170010.png" alt="image"></p><p>树是由节点所组成，Zookeeper 的数据存储也同样是基于节点，这种节点叫做 <strong>Znode</strong></p><p>但是，不同于树的节点，Znode 的引用方式是路径引用，类似于文件路径：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>/动物/猫
/汽车/宝马

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的层级结构，让每一个 Znode 节点拥有唯一的路径，就像命名空间一样对不同信息作出清晰的隔离。</p><h3 id="znode-包含哪些元素" tabindex="-1"><a class="header-anchor" href="#znode-包含哪些元素" aria-hidden="true">#</a> Znode 包含哪些元素</h3><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170011.png" alt="image"></p><ul><li>data：Znode 存储的数据信息。</li><li>ACL：记录 Znode 的访问权限，即哪些人或哪些 IP 可以访问本节点。</li><li>stat：包含 Znode 的各种元数据，比如事务 ID、版本号、时间戳、大小等等。</li><li>child：当前节点的子节点引用</li></ul><p>这里需要注意一点，Zookeeper 是为读多写少的场景所设计。Znode 并不是用来存储大规模业务数据，而是用于存储少量的状态和配置信息，<code>每个节点的数据最大不能超过 1MB</code>。</p><h2 id="zookeeper-的基本操作" tabindex="-1"><a class="header-anchor" href="#zookeeper-的基本操作" aria-hidden="true">#</a> Zookeeper 的基本操作</h2><p>创建节点</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>create
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除节点</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>delete

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>判断节点是否存在</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>exists

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获得一个节点的数据</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>getData

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置一个节点的数据</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>setData

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取节点下的所有子节点</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>getChildren

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这其中，<code>exists</code>，<code>getData</code>，<code>getChildren</code> 属于读操作。Zookeeper 客户端在请求读操作的时候，可以选择是否设置 <strong>Watch</strong></p><h2 id="zookeeper-的事件通知" tabindex="-1"><a class="header-anchor" href="#zookeeper-的事件通知" aria-hidden="true">#</a> Zookeeper 的事件通知</h2><p>我们可以把 <strong>Watch</strong> 理解成是注册在特定 Znode 上的触发器。当这个 Znode 发生改变，也就是调用了 <code>create</code>，<code>delete</code>，<code>setData</code> 方法的时候，将会触发 Znode 上注册的对应事件，请求 Watch 的客户端会接收到异步通知。</p><p>具体交互过程如下：</p><ul><li>客户端调用 <code>getData</code> 方法，<code>watch</code> 参数是 <code>true</code>。服务端接到请求，返回节点数据，并且在对应的哈希表里插入被 Watch 的 Znode 路径，以及 Watcher 列表。</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170012.png" alt="image"></p><ul><li>当被 Watch 的 Znode 已删除，服务端会查找哈希表，找到该 Znode 对应的所有 Watcher，异步通知客户端，并且删除哈希表中对应的 Key-Value。</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170013.png" alt="image"></p><h2 id="zookeeper-的一致性" tabindex="-1"><a class="header-anchor" href="#zookeeper-的一致性" aria-hidden="true">#</a> Zookeeper 的一致性</h2><p>Zookeeper 身为分布式系统协调服务，如果自身挂了如何处理呢？为了防止单机挂掉的情况，Zookeeper 维护了一个集群。如下图：</p><p><img src="https://picgo.xingenhi.cn//typorada638c6a36e6f1b5b2b87af21e253377.jpg" alt="image"></p><p>Zookeeper Service 集群是一主多从结构。</p><p>在更新数据时，首先更新到主节点（这里的节点是指服务器，不是 Znode），再同步到从节点。</p><p>在读取数据时，直接读取任意从节点。</p><p>为了保证主从节点的数据一致性，Zookeeper 采用了 <strong>ZAB 协议</strong>，这种协议非常类似于一致性算法 <strong>Paxos</strong> 和 <strong>Raft</strong>。</p><h3 id="什么是-zab" tabindex="-1"><a class="header-anchor" href="#什么是-zab" aria-hidden="true">#</a> 什么是 ZAB</h3><p>Zookeeper Atomic Broadcast，有效解决了 Zookeeper 集群崩溃恢复，以及主从同步数据的问题。</p><h4 id="zab-协议定义的三种节点状态" tabindex="-1"><a class="header-anchor" href="#zab-协议定义的三种节点状态" aria-hidden="true">#</a> ZAB 协议定义的三种节点状态</h4><ul><li>Looking ：选举状态。</li><li>Following ：Follower 节点（从节点）所处的状态。</li><li>Leading ：Leader 节点（主节点）所处状态。</li></ul><h4 id="最大-zxid" tabindex="-1"><a class="header-anchor" href="#最大-zxid" aria-hidden="true">#</a> 最大 ZXID</h4><p>最大 ZXID 也就是节点本地的最新事务编号，包含 epoch 和计数两部分。epoch 是纪元的意思，相当于 Raft 算法选主时候的 term。</p><h4 id="zab-的崩溃恢复" tabindex="-1"><a class="header-anchor" href="#zab-的崩溃恢复" aria-hidden="true">#</a> ZAB 的崩溃恢复</h4><p>假如 Zookeeper 当前的主节点挂掉了，集群会进行崩溃恢复。ZAB 的崩溃恢复分成三个阶段：</p><p><strong>Leader election</strong></p><p>选举阶段，此时集群中的节点处于 Looking 状态。它们会各自向其他节点发起投票，投票当中包含自己的服务器 ID 和最新事务 ID（ZXID）。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170014.png" alt="image"></p><p>接下来，节点会用自身的 ZXID 和从其他节点接收到的 ZXID 做比较，如果发现别人家的 ZXID 比自己大，也就是数据比自己新，那么就重新发起投票，投票给目前已知最大的 ZXID 所属节点。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170015.png" alt="image"></p><p>每次投票后，服务器都会统计投票数量，判断是否有某个节点得到半数以上的投票。如果存在这样的节点，该节点将会成为准 Leader，状态变为 Leading。其他节点的状态变为 Following。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170016.png" alt="image"></p><p><strong>Discovery</strong></p><p>发现阶段，用于在从节点中发现最新的 ZXID 和事务日志。或许有人会问：既然 Leader 被选为主节点，已经是集群里数据最新的了，为什么还要从节点中寻找最新事务呢？</p><p>这是为了防止某些意外情况，比如因网络原因在上一阶段产生多个 Leader 的情况。</p><p>所以这一阶段，Leader 集思广益，接收所有 Follower 发来各自的最新 epoch 值。Leader 从中选出最大的 epoch，基于此值加 1，生成新的 epoch 分发给各个 Follower。</p><p>各个 Follower 收到全新的 epoch 后，返回 ACK 给 Leader，带上各自最大的 ZXID 和历史事务日志。Leader 选出最大的 ZXID，并更新自身历史日志。</p><p><strong>Synchronization</strong></p><p>同步阶段，把 Leader 刚才收集得到的最新历史事务日志，同步给集群中所有的 Follower。只有当半数 Follower 同步成功，这个准 Leader 才能成为正式的 Leader。</p><p>自此，故障恢复正式完成。</p><h4 id="zab-的数据写入" tabindex="-1"><a class="header-anchor" href="#zab-的数据写入" aria-hidden="true">#</a> ZAB 的数据写入</h4><p><strong>Broadcast</strong></p><p>ZAB 的数据写入涉及到 Broadcast 阶段，简单来说，就是 Zookeeper 常规情况下更新数据的时候，由 Leader 广播到所有的 Follower。其过程如下：</p><ul><li>客户端发出写入数据请求给任意 Follower。</li><li>Follower 把写入数据请求转发给 Leader。</li><li>Leader 采用二阶段提交方式，先发送 Propose 广播给 Follower。</li><li>Follower 接到 Propose 消息，写入日志成功后，返回 ACK 消息给 Leader。</li><li>Leader 接到半数以上ACK消息，返回成功给客户端，并且广播 Commit 请求给 Follower</li></ul><p><img src="https://picgo.xingenhi.cn//typora2723bf0baf05e0e4a8487d59db2b30e4.jpg" alt="image"></p><p>ZAB 协议既不是强一致性，也不是弱一致性，而是处于两者之间的<strong>单调一致性（顺序一致性）</strong>。它依靠事务 ID 和版本号，保证了数据的更新和读取是有序的。</p><h2 id="zookeeper-的应用场景" tabindex="-1"><a class="header-anchor" href="#zookeeper-的应用场景" aria-hidden="true">#</a> Zookeeper 的应用场景</h2><h3 id="分布式锁" tabindex="-1"><a class="header-anchor" href="#分布式锁" aria-hidden="true">#</a> 分布式锁</h3><p>这是雅虎研究员设计 Zookeeper 的初衷。利用 Zookeeper 的临时顺序节点，可以轻松实现分布式锁。</p><h3 id="服务注册和发现" tabindex="-1"><a class="header-anchor" href="#服务注册和发现" aria-hidden="true">#</a> 服务注册和发现</h3><p>利用 Znode 和 Watcher，可以实现分布式服务的注册和发现。最著名的应用就是阿里的分布式 RPC 框架 Dubbo。</p><h3 id="共享配置和状态信息" tabindex="-1"><a class="header-anchor" href="#共享配置和状态信息" aria-hidden="true">#</a> 共享配置和状态信息</h3><p>Redis 的分布式解决方案 Codis，就利用了 Zookeeper 来存放数据路由表和 codis-proxy 节点的元信息。同时 codis-config 发起的命令都会通过 ZooKeeper 同步到各个存活的 codis-proxy。</p><p>此外，Kafka、HBase、Hadoop，也都依靠Zookeeper同步节点信息，实现高可用。</p><h1 id="_05-zookeeper-如何实现分布式锁" tabindex="-1"><a class="header-anchor" href="#_05-zookeeper-如何实现分布式锁" aria-hidden="true">#</a> 05-Zookeeper 如何实现分布式锁</h1><h1 id="zookeeper-如何实现分布式锁" tabindex="-1"><a class="header-anchor" href="#zookeeper-如何实现分布式锁" aria-hidden="true">#</a> Zookeeper 如何实现分布式锁</h1><h2 id="本节视频-4" tabindex="-1"><a class="header-anchor" href="#本节视频-4" aria-hidden="true">#</a> 本节视频</h2>`,82),_={href:"https://www.bilibili.com/video/av34137962/",target:"_blank",rel:"noopener noreferrer"},y=d('<h2 id="什么是临时顺序节点" tabindex="-1"><a class="header-anchor" href="#什么是临时顺序节点" aria-hidden="true">#</a> 什么是临时顺序节点？</h2><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810170010_2.png" alt="image"></p><p>Zookeeper 的数据存储结构就像一棵树，这棵树由节点组成，这种节点叫做 Znode。</p><p>Znode 分为四种类型：</p><h3 id="持久节点-persistent" tabindex="-1"><a class="header-anchor" href="#持久节点-persistent" aria-hidden="true">#</a> 持久节点（PERSISTENT）</h3><p>默认的节点类型。创建节点的客户端与 Zookeeper 断开连接后，该节点依旧存在。</p><h3 id="持久节点顺序节点-persistent-sequential" tabindex="-1"><a class="header-anchor" href="#持久节点顺序节点-persistent-sequential" aria-hidden="true">#</a> 持久节点顺序节点（PERSISTENT_SEQUENTIAL）</h3><p>所谓顺序节点，就是在创建节点时，Zookeeper 根据创建的时间顺序给该节点名称进行编号：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190001.png" alt="image"></p><h3 id="临时节点-ephemeral" tabindex="-1"><a class="header-anchor" href="#临时节点-ephemeral" aria-hidden="true">#</a> 临时节点（EPHEMERAL）</h3><p>和持久节点相反，当创建节点的客户端与 Zookeeper 断开连接后，临时节点会被删除：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190002.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190003.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190004.png" alt="image"></p><h3 id="临时顺序节点-ephemeral-sequential" tabindex="-1"><a class="header-anchor" href="#临时顺序节点-ephemeral-sequential" aria-hidden="true">#</a> 临时顺序节点（EPHEMERAL_SEQUENTIAL）</h3><p>顾名思义，临时顺序节点结合和临时节点和顺序节点的特点：在创建节点时，Zookeeper 根据创建的时间顺序给该节点名称进行编号；当创建节点的客户端与 Zookeeper 断开连接后，临时节点会被删除。</p><h2 id="zookeeper-分布式锁的原理" tabindex="-1"><a class="header-anchor" href="#zookeeper-分布式锁的原理" aria-hidden="true">#</a> Zookeeper 分布式锁的原理</h2><p>Zookeeper 分布式锁恰恰应用了临时顺序节点。具体如何实现呢？让我们来看一看详细步骤：</p><h3 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁" aria-hidden="true">#</a> 获取锁</h3><p>首先，在 Zookeeper 当中创建一个持久节点 ParentLock。当第一个客户端想要获得锁时，需要在 ParentLock 这个节点下面创建一个<strong>临时顺序节点</strong> Lock1。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190005.png" alt="image"></p><p>之后，Client1 查找 ParentLock 下面所有的临时顺序节点并排序，判断自己所创建的节点 Lock1 是不是顺序最靠前的一个。如果是第一个节点，则成功获得锁。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190006.png" alt="image"></p><p>这时候，如果再有一个客户端 Client2 前来获取锁，则在 ParentLock 下载再创建一个临时顺序节点 Lock2。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190007.png" alt="image"></p><p>Client2 查找 ParentLock 下面所有的临时顺序节点并排序，判断自己所创建的节点 Lock2 是不是顺序最靠前的一个，结果发现节点 Lock2 并不是最小的。</p><p>于是，Client2 向排序仅比它靠前的节点 Lock1 注册 Watcher，用于监听 Lock1 节点是否存在。这意味着 Client2 抢锁失败，进入了等待状态。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190008.png" alt="image"></p><p>这时候，如果又有一个客户端 Client3 前来获取锁，则在 ParentLock 下载再创建一个临时顺序节点 Lock3。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190009.png" alt="image"></p><p>Client3 查找 ParentLock 下面所有的临时顺序节点并排序，判断自己所创建的节点 Lock3 是不是顺序最靠前的一个，结果同样发现节点 Lock3 并不是最小的。</p><p>于是，Client3 向排序仅比它靠前的节点 Lock2 注册 Watcher，用于监听 Lock2 节点是否存在。这意味着 Client3 同样抢锁失败，进入了等待状态。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190010.png" alt="image"></p><p>这样一来，Client1 得到了锁，Client2 监听了 Lock1，Client3 监听了 Lock2。这恰恰形成了一个等待队列，</p><h3 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁" aria-hidden="true">#</a> 释放锁</h3><p>释放锁分为两种情况：</p><h4 id="任务完成-客户端显示释放" tabindex="-1"><a class="header-anchor" href="#任务完成-客户端显示释放" aria-hidden="true">#</a> 任务完成，客户端显示释放</h4><p>当任务完成时，Client1 会显示调用删除节点 Lock1 的指令。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190011.png" alt="image"></p><h4 id="任务执行过程中-客户端崩溃" tabindex="-1"><a class="header-anchor" href="#任务执行过程中-客户端崩溃" aria-hidden="true">#</a> 任务执行过程中，客户端崩溃</h4><p>获得锁的 Client1 在任务执行过程中，如果崩溃，则会断开与 Zookeeper 服务端的链接。根据临时节点的特性，相关联的节点 Lock1 会随之自动删除。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190012.png" alt="image"></p><p>由于 Client2 一直监听着 Lock1 的存在状态，当 Lock1 节点被删除，Client2 会立刻收到通知。这时候 Client2 会再次查询 ParentLock 下面的所有节点，确认自己创建的节点 Lock2 是不是目前最小的节点。如果是最小，则 Client2 顺理成章获得了锁。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190013.png" alt="image"></p><p>同理，如果 Client2 也因为任务完成或者节点崩溃而删除了节点 Lock2，那么 Client3 就会接到通知。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190014.png" alt="image"></p><p>最终，Client3 成功得到了锁。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201810190015.png" alt="image"></p><h2 id="zookeeper-和-redis-分布式锁的比较" tabindex="-1"><a class="header-anchor" href="#zookeeper-和-redis-分布式锁的比较" aria-hidden="true">#</a> Zookeeper 和 Redis 分布式锁的比较</h2><p><img src="https://picgo.xingenhi.cn//typoraaf70e5430a925dfd6880f2ff1378edfb.jpg" alt="image"></p><h1 id="_06-基于-docker-安装-zookeeper" tabindex="-1"><a class="header-anchor" href="#_06-基于-docker-安装-zookeeper" aria-hidden="true">#</a> 06-基于 Docker 安装 Zookeeper</h1><h1 id="基于-docker-安装-zookeeper" tabindex="-1"><a class="header-anchor" href="#基于-docker-安装-zookeeper" aria-hidden="true">#</a> 基于 Docker 安装 Zookeeper</h1><h2 id="本节视频-5" tabindex="-1"><a class="header-anchor" href="#本节视频-5" aria-hidden="true">#</a> 本节视频</h2>',53),L={href:"https://www.bilibili.com/video/av34187136/",target:"_blank",rel:"noopener noreferrer"},w=d(`<h2 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h2><p>Zookeeper 部署有三种方式，单机模式、集群模式、伪集群模式，以下采用 Docker 的方式部署</p><p><strong>注意：</strong> 集群为大于等于3个奇数，如 3、5、7,不宜太多，集群机器多了选举和数据同步耗时长，不稳定。</p><h2 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式" aria-hidden="true">#</a> 单机模式</h2><h3 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;

services:
    zoo1:
        image: zookeeper
        restart: always
        hostname: zoo1
        ports:
            - 2181:2181
        environment:
            ZOO_MY_ID: 1
            ZOO_SERVERS: server.1=zoo1:2888:3888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证是否安装成功" tabindex="-1"><a class="header-anchor" href="#验证是否安装成功" aria-hidden="true">#</a> 验证是否安装成功</h3><ul><li>以交互的方式进入容器</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker exec -it zookeeper_zoo1_1 /bin/bash

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用客户端连接到服务端</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>bash-4.3# ./bin/zkCli.sh -server 192.168.75.130:2181
Connecting to 192.168.75.130:2181
2017-11-09 07:45:58,365 [myid:] - INFO  [main:Environment@100] - Client environment:zookeeper.version=3.4.10-39d3a4f269333c922ed3db283be479f9deacaa0f, built on 03/23/2017 10:13 GMT
2017-11-09 07:45:58,374 [myid:] - INFO  [main:Environment@100] - Client environment:host.name=zoo1
2017-11-09 07:45:58,374 [myid:] - INFO  [main:Environment@100] - Client environment:java.version=1.8.0_131
2017-11-09 07:45:58,380 [myid:] - INFO  [main:Environment@100] - Client environment:java.vendor=Oracle Corporation
2017-11-09 07:45:58,381 [myid:] - INFO  [main:Environment@100] - Client environment:java.home=/usr/lib/jvm/java-1.8-openjdk/jre
2017-11-09 07:45:58,381 [myid:] - INFO  [main:Environment@100] - Client environment:java.class.path=/zookeeper-3.4.10/bin/../build/classes:/zookeeper-3.4.10/bin/../build/lib/*.jar:/zookeeper-3.4.10/bin/../lib/slf4j-log4j12-1.6.1.jar:/zookeeper-3.4.10/bin/../lib/slf4j-api-1.6.1.jar:/zookeeper-3.4.10/bin/../lib/netty-3.10.5.Final.jar:/zookeeper-3.4.10/bin/../lib/log4j-1.2.16.jar:/zookeeper-3.4.10/bin/../lib/jline-0.9.94.jar:/zookeeper-3.4.10/bin/../zookeeper-3.4.10.jar:/zookeeper-3.4.10/bin/../src/java/lib/*.jar:/conf:
2017-11-09 07:45:58,381 [myid:] - INFO  [main:Environment@100] - Client environment:java.library.path=/usr/lib/jvm/java-1.8-openjdk/jre/lib/amd64/server:/usr/lib/jvm/java-1.8-openjdk/jre/lib/amd64:/usr/lib/jvm/java-1.8-openjdk/jre/../lib/amd64:/usr/java/packages/lib/amd64:/usr/lib64:/lib64:/lib:/usr/lib
2017-11-09 07:45:58,381 [myid:] - INFO  [main:Environment@100] - Client environment:java.io.tmpdir=/tmp
2017-11-09 07:45:58,381 [myid:] - INFO  [main:Environment@100] - Client environment:java.compiler=&lt;NA&gt;
2017-11-09 07:45:58,381 [myid:] - INFO  [main:Environment@100] - Client environment:os.name=Linux
2017-11-09 07:45:58,382 [myid:] - INFO  [main:Environment@100] - Client environment:os.arch=amd64
2017-11-09 07:45:58,382 [myid:] - INFO  [main:Environment@100] - Client environment:os.version=4.4.0-98-generic
2017-11-09 07:45:58,386 [myid:] - INFO  [main:Environment@100] - Client environment:user.name=root
2017-11-09 07:45:58,386 [myid:] - INFO  [main:Environment@100] - Client environment:user.home=/root
2017-11-09 07:45:58,386 [myid:] - INFO  [main:Environment@100] - Client environment:user.dir=/zookeeper-3.4.10
2017-11-09 07:45:58,389 [myid:] - INFO  [main:ZooKeeper@438] - Initiating client connection, connectString=192.168.75.130:2181 sessionTimeout=30000 watcher=org.apache.zookeeper.ZooKeeperMain$MyWatcher@3eb07fd3
2017-11-09 07:45:58,428 [myid:] - INFO  [main-SendThread(192.168.75.130:2181):ClientCnxn$SendThread@1032] - Opening socket connection to server 192.168.75.130/192.168.75.130:2181. Will not attempt to authenticate using SASL (unknown error)
Welcome to ZooKeeper!
JLine support is enabled
2017-11-09 07:45:58,529 [myid:] - INFO  [main-SendThread(192.168.75.130:2181):ClientCnxn$SendThread@876] - Socket connection established to 192.168.75.130/192.168.75.130:2181, initiating session
[zk: 192.168.75.130:2181(CONNECTING) 0] 2017-11-09 07:45:58,573 [myid:] - INFO  [main-SendThread(192.168.75.130:2181):ClientCnxn$SendThread@1299] - Session establishment complete on server 192.168.75.130/192.168.75.130:2181, sessionid = 0x15f9fbc12ec0000, negotiated timeout = 30000

WATCHER::

WatchedEvent state:SyncConnected type:None path:null

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用服务端工具检查服务器状态</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: standalone

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群模式" tabindex="-1"><a class="header-anchor" href="#集群模式" aria-hidden="true">#</a> 集群模式</h2><p>准备 3 台 Ubuntu Server 系统，并分别配置 Zookeeper</p><h3 id="第一台主机" tabindex="-1"><a class="header-anchor" href="#第一台主机" aria-hidden="true">#</a> 第一台主机</h3><h4 id="docker-compose-yml-1" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-1" aria-hidden="true">#</a> docker-compose.yml</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
    zoo1:
        image: zookeeper
        restart: always
        environment:
            ZOO_MY_ID: 1
            ZOO_SERVERS: server.1=192.168.75.130:2888:3888 server.2=192.168.75.134:2888:3888 server.3=192.168.75.135:2888:3888
        network_mode: host

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证测试" tabindex="-1"><a class="header-anchor" href="#验证测试" aria-hidden="true">#</a> 验证测试</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>root@UbuntuBase:/usr/local/docker/zookeeper# docker exec -it zookeeper_zoo1_1 /bin/bash
bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: leader

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二台主机" tabindex="-1"><a class="header-anchor" href="#第二台主机" aria-hidden="true">#</a> 第二台主机</h3><h4 id="docker-compose-yml-2" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-2" aria-hidden="true">#</a> docker-compose.yml</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
    zoo2:
        image: zookeeper
        restart: always
        environment:
            ZOO_MY_ID: 2
            ZOO_SERVERS: server.1=192.168.75.130:2888:3888 server.2=192.168.75.134:2888:3888 server.3=192.168.75.135:2888:3888
        network_mode: host

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证测试-1" tabindex="-1"><a class="header-anchor" href="#验证测试-1" aria-hidden="true">#</a> 验证测试</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>root@UbuntuBase:/usr/local/docker/zookeeper# docker exec -it zookeeper_zoo2_1 /bin/bash
bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: follower

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三台主机" tabindex="-1"><a class="header-anchor" href="#第三台主机" aria-hidden="true">#</a> 第三台主机</h3><h4 id="docker-compose-yml-3" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-3" aria-hidden="true">#</a> docker-compose.yml</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
    zoo3:
        image: zookeeper
        restart: always
        environment:
            ZOO_MY_ID: 3
            ZOO_SERVERS: server.1=192.168.75.130:2888:3888 server.2=192.168.75.134:2888:3888 server.3=192.168.75.135:2888:3888
        network_mode: host

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>root@UbuntuBase:/usr/local/docker/zookeeper# docker exec -it zookeeper_zoo3_1 /bin/bash
bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: follower

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪集群模式" tabindex="-1"><a class="header-anchor" href="#伪集群模式" aria-hidden="true">#</a> 伪集群模式</h2><h3 id="docker-compose-yml-4" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-4" aria-hidden="true">#</a> docker-compose.yml</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
    zoo1:
        image: zookeeper
        restart: always
        hostname: zoo1
        ports:
            - 2181:2181
        environment:
            ZOO_MY_ID: 1
            ZOO_SERVERS: server.1=zoo1:2888:3888 server.2=zoo2:2888:3888 server.3=zoo3:2888:3888

    zoo2:
        image: zookeeper
        restart: always
        hostname: zoo2
        ports:
            - 2182:2181
        environment:
            ZOO_MY_ID: 2
            ZOO_SERVERS: server.1=zoo1:2888:3888 server.2=zoo2:2888:3888 server.3=zoo3:2888:3888

    zoo3:
        image: zookeeper
        restart: always
        hostname: zoo3
        ports:
            - 2183:2181
        environment:
            ZOO_MY_ID: 3
            ZOO_SERVERS: server.1=zoo1:2888:3888 server.2=zoo2:2888:3888 server.3=zoo3:2888:3888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证是否安装成功-1" tabindex="-1"><a class="header-anchor" href="#验证是否安装成功-1" aria-hidden="true">#</a> 验证是否安装成功</h3><ul><li>分别以交互方式进入容器查看</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker exec -it zookeeper_zoo1_1 /bin/bash

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker exec -it zookeeper_zoo2_1 /bin/bash

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker exec -it zookeeper_zoo3_1 /bin/bash

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用服务端工具检查服务器状态</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>root@UbuntuBase:/usr/local/docker/zookeeper# docker exec -it zookeeper_zoo1_1 /bin/bash
bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: follower

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>root@UbuntuBase:/usr/local/docker/zookeeper# docker exec -it zookeeper_zoo2_1 /bin/bash
bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: follower

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>root@UbuntuBase:/usr/local/docker/zookeeper# docker exec -it zookeeper_zoo3_1 /bin/bash
bash-4.3# ./bin/zkServer.sh status
ZooKeeper JMX enabled by default
Using config: /conf/zoo.cfg
Mode: leader

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的验证结果可以看出：zoo1 为跟随者，zoo2 为跟随者，zoo3 为领导者</p><h1 id="_07-附-linux-下手动安装-zookeeper" tabindex="-1"><a class="header-anchor" href="#_07-附-linux-下手动安装-zookeeper" aria-hidden="true">#</a> 07-附：Linux 下手动安装 Zookeeper</h1><h1 id="附-linux-下手动安装-zookeeper" tabindex="-1"><a class="header-anchor" href="#附-linux-下手动安装-zookeeper" aria-hidden="true">#</a> 附：Linux 下手动安装 Zookeeper</h1><p>Zookeeper 部署有三种方式，单机模式、集群模式、伪集群模式，以下采用手动安装的方式部署</p><p><strong>注意：</strong> 集群为大于等于3个奇数，如 3、5、7,不宜太多，集群机器多了选举和数据同步耗时长，不稳定。</p><h2 id="单机模式-1" tabindex="-1"><a class="header-anchor" href="#单机模式-1" aria-hidden="true">#</a> 单机模式</h2><h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h3><p>进入要下载的版本的目录，选择 <code>.tar.gz</code> 文件下载，下载链接：http://archive.apache.org/dist/zookeeper/</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p><strong>注意：</strong> 需要先安装 <code>Java</code></p><p>使用 <code>tar</code> 解压要安装的目录即可，以 <code>3.4.13</code> 版本为例，解压到 <code>/usr/local/zookeeper-3.4.13</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tar -zxvf zookeeper-3.4.13.tar.gz -C /usr/local

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><p>在根目录下创建 <code>data</code> 和 <code>logs</code> 两个目录用于存储数据和日志</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd /usr/local/zookeeper-3.4.13
mkdir data
mkdir logs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>conf</code> 目录下新建 <code>zoo.cfg</code> 文件，写入以下内容保存</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tickTime=2000
dataDir=/usr/local/zookeeper-3.4.13/data
dataLogDir=/usr/local/zookeeper-3.4.13/logs
clientPort=2181

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动和停止" tabindex="-1"><a class="header-anchor" href="#启动和停止" aria-hidden="true">#</a> <a href="#%E5%90%AF%E5%8A%A8%E5%92%8C%E5%81%9C%E6%AD%A2">#</a>启动和停止</h3><p>进入 <code>bin</code> 目录，启动、停止、重启和查看当前节点状态</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkServer.sh start
./zkServer.sh stop
./zkServer.sh restart
./zkServer.sh status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪集群模式-1" tabindex="-1"><a class="header-anchor" href="#伪集群模式-1" aria-hidden="true">#</a> 伪集群模式</h2><p>伪集群模式就是在同一主机启动多个 zookeeper 并组成集群，下边以在 192.168.10.134 主机上创 3 个 zookeeper 组集群为例。</p><p>将通过单机模式安装的 zookeeper，复制成 zookeeper1/zookeeper2/zookeeper3 三份</p><h3 id="zookeeper1" tabindex="-1"><a class="header-anchor" href="#zookeeper1" aria-hidden="true">#</a> zookeeper1</h3><ul><li>修改配置文件</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tickTime=2000
dataDir=/usr/local/zookeeper1/data
dataLogDir=/usr/local/zookeeper1/logs
clientPort=2181
initLimit=5
syncLimit=2
server.1=192.168.10.134:2888:3888
server.2=192.168.10.134:4888:5888
server.3=192.168.10.134:6888:7888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置服务器 ID</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>echo &#39;1&#39; &gt; data/myid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1</p><h3 id="zookeeper2" tabindex="-1"><a class="header-anchor" href="#zookeeper2" aria-hidden="true">#</a> zookeeper2</h3><ul><li>修改配置文件</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tickTime=2000
dataDir=/usr/local/zookeeper2/data
dataLogDir=/usr/local/zookeeper2/logs
clientPort=2181
initLimit=5
syncLimit=2
server.1=192.168.10.134:2888:3888
server.2=192.168.10.134:4888:5888
server.3=192.168.10.134:6888:7888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置服务器 ID</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>echo &#39;2&#39; &gt; data/myid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zookeeper3" tabindex="-1"><a class="header-anchor" href="#zookeeper3" aria-hidden="true">#</a> zookeeper3</h3><ul><li>修改配置文件</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tickTime=2000
dataDir=/usr/local/zookeeper3/data
dataLogDir=/usr/local/zookeeper3/logs
clientPort=2181
initLimit=5
syncLimit=2
server.1=192.168.10.134:2888:3888
server.2=192.168.10.134:4888:5888
server.3=192.168.10.134:6888:7888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置服务器 ID</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>echo &#39;3&#39; &gt; data/myid

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动和停止-1" tabindex="-1"><a class="header-anchor" href="#启动和停止-1" aria-hidden="true">#</a> 启动和停止</h3><p>分别启动服务器，顺序无所谓</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkServer.sh start
./zkServer.sh stop
./zkServer.sh restart
./zkServer.sh status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集群模式-1" tabindex="-1"><a class="header-anchor" href="#集群模式-1" aria-hidden="true">#</a> 集群模式</h2><p>集群模式就是在不同主机上安装 zookeeper 然后组成集群的模式，操作步骤同上，此处不再赘述。</p><h1 id="_08-zookeeper-配置说明" tabindex="-1"><a class="header-anchor" href="#_08-zookeeper-配置说明" aria-hidden="true">#</a> 08-Zookeeper 配置说明</h1><h1 id="zookeeper-配置说明" tabindex="-1"><a class="header-anchor" href="#zookeeper-配置说明" aria-hidden="true">#</a> Zookeeper 配置说明</h1><h2 id="本节视频-6" tabindex="-1"><a class="header-anchor" href="#本节视频-6" aria-hidden="true">#</a> 本节视频</h2>`,89),D={href:"https://www.bilibili.com/video/av34187179/",target:"_blank",rel:"noopener noreferrer"},C=d(`<h2 id="zookeeper-的三种工作模式" tabindex="-1"><a class="header-anchor" href="#zookeeper-的三种工作模式" aria-hidden="true">#</a> Zookeeper 的三种工作模式</h2><ul><li>单机模式：存在单点故障</li><li>集群模式：在多台机器上部署 Zookeeper 集群，适合线上环境使用。</li><li>伪集群模式：在一台机器同时运行多个 Zookeeper 实例，仍然有单点故障问题，当然，其中配置的端口号要错开的，适合实验环境模拟集群使用。</li></ul><h2 id="zookeeper-的三种端口号" tabindex="-1"><a class="header-anchor" href="#zookeeper-的三种端口号" aria-hidden="true">#</a> Zookeeper 的三种端口号</h2><ul><li>2181：客户端连接 Zookeeper 集群使用的监听端口号</li><li>3888：选举 leader 使用</li><li>2888：集群内机器通讯使用（Leader 和 Follower 之间数据同步使用的端口号，Leader 监听此端口）</li></ul><h2 id="zookeeper-单机模式配置文件" tabindex="-1"><a class="header-anchor" href="#zookeeper-单机模式配置文件" aria-hidden="true">#</a> Zookeeper 单机模式配置文件</h2><p>配置文件路径：<code>/conf/zoo.cfg</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>clientPort=2181
dataDir=/data
dataLogDir=/datalog
tickTime=2000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>clientPort：这个端口就是客户端连接 Zookeeper 服务器的端口，Zookeeper 会监听这个端口，接受客户端的访问请求。</li><li>dataDir：Zookeeper 保存数据的目录。</li><li>dataLogDir：Zookeeper 保存日志的目录。</li><li>tickTime：这个时间是作为 Zookeeper 服务器之间或客户端与服务器之间维持心跳的时间间隔，也就是每隔 tickTime 时间就会发送一个心跳。</li></ul><h2 id="zookeeper-集群模式配置文件" tabindex="-1"><a class="header-anchor" href="#zookeeper-集群模式配置文件" aria-hidden="true">#</a> Zookeeper 集群模式配置文件</h2><p>配置文件路径：<code>/conf/zoo.cfg</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>clientPort=2181
dataDir=/data
dataLogDir=/datalog
tickTime=2000
initLimit=5
syncLimit=2
autopurge.snapRetainCount=3
autopurge.purgeInterval=0
maxClientCnxns=60
server.1=192.168.0.1:2888:3888
server.2=192.168.0.2:2888:3888
server.3=192.168.0.3:2888:3888

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>initLimit：配置 Zookeeper 接受客户端（这里所说的客户端不是用户连接 Zookeeper 服务器的客户端，而是 Zookeeper 服务器集群中连接到 Leader 的 Follower 服务器）初始化连接时最长能忍受多少个心跳时间间隔数。当已经超过 initLimit（默认为 10） 个心跳的时间（也就是 tickTime）长度后 Zookeeper 服务器还没有收到客户端的返回信息，那么表明这个客户端连接失败。总的时间长度就是 <code>5 * 2000 = 10</code> 秒</li><li>syncLimit：配置 Leader 与 Follower 之间发送消息，请求和应答时间长度，最长不能超过多少个 tickTime 的时间长度，总的时间长度就是 <code>2 * 2000 = 4</code> 秒</li><li>定时清理（Zookeeper 从 3.4.0 开始提供了自动清理快照和事务日志的功能）以下两个参数配合使用：</li><li>autopurge.purgeInterval：指定了清理频率，单位是小时，需要填写一个 1 或更大的整数，默认是 0，表示不开启自己清理功能。</li><li>autopurge.snapRetainCount：指定了需要保留的文件数目。默认是保留 3 个。* maxClientCnxns：限制连接到 Zookeeper 的客户端的数量，限制并发连接的数量，它通过 IP 来区分不同的客户端。此配置选项可以用来阻止某些类别的 Dos 攻击。将它设置为 0 或者忽略而不进行设置将会取消对并发连接的限制。</li><li>server.A=B：C：D：其中 A 是一个数字，表示这个是第几号服务器。B 是这个服务器的 IP 地址。C 表示的是这个服务器与集群中的 Leader 服务器交换信息的端口(<code>2888</code>)；D 表示的是万一集群中的 Leader 服务器挂了，需要一个端口来重新进行选举，选出一个新的 Leader，而这个端口就是用来执行选举时服务器相互通信的端口(<code>3888</code>)。如果是伪集群的配置方式，由于 B 都是一样，所以不同的 Zookeeper 实例通信端口号不能一样，所以要给它们分配不同的端口号。</li></ul><p><strong>注意：</strong> <code>server.A</code> 中的 A 是在 <code>dataDir</code> 配置的目录中创建一个名为 <code>myid</code> 的文件里的值（如：1）</p><h2 id="zookeeper-常用命令" tabindex="-1"><a class="header-anchor" href="#zookeeper-常用命令" aria-hidden="true">#</a> Zookeeper 常用命令</h2><h3 id="zkserver" tabindex="-1"><a class="header-anchor" href="#zkserver" aria-hidden="true">#</a> zkServer</h3><ul><li>启动服务</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkServer.sh start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>停止服务</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkServer.sh stop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启服务</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkServer.sh restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行状态</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkServer.sh status

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zkclient" tabindex="-1"><a class="header-anchor" href="#zkclient" aria-hidden="true">#</a> zkClient</h3><ul><li>客户端连接服务器并进入 Bash 模式</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>./zkCli.sh -server &lt;ip&gt;:&lt;port&gt;

# 命令参数
ZooKeeper -server host:port cmd args
    stat path [watch]
    set path data [version]
    ls path [watch]
    delquota [-n|-b] path
    ls2 path [watch]
    setAcl path acl
    setquota -n|-b val path
    history 
    redo cmdno
    printwatches on|off
    delete path [version]
    sync path
    listquota path
    rmr path
    get path [watch]
    create [-s] [-e] path data acl
    addauth scheme auth
    quit 
    getAcl path
    close 
    connect host:port

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建节点（Bash 模式）</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>create /test &quot;hello zookeeper&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询节点（Bash 模式）</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>get /test

# 输出如下
Hello Zookeeper
cZxid = 0x100000004
ctime = Fri Oct 19 05:11:47 GMT 2018
mZxid = 0x100000004
mtime = Fri Oct 19 05:11:47 GMT 2018
pZxid = 0x100000004
cversion = 0
dataVersion = 0
aclVersion = 0
ephemeralOwner = 0x0
dataLength = 15
numChildren = 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除节点（Bash 模式）</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>delete /test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,32);function I(S,E){const i=l("ExternalLinkIcon");return s(),o("div",null,[t,e("ul",null,[e("li",null,[e("a",v,[n("【视频】Dubbo 实现微服务架构-课程回顾-微服务架构需要解决的问题"),a(i)])])]),u,e("ul",null,[e("li",null,[e("a",h,[n("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式协调服务"),a(i)])])]),p,e("ul",null,[e("li",null,[e("a",m,[n("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式锁1"),a(i)])]),e("li",null,[e("a",b,[n("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式锁2"),a(i)])]),e("li",null,[e("a",g,[n("【视频】Dubbo 实现微服务架构-Zookeeper-什么是分布式锁3"),a(i)])])]),k,e("ul",null,[e("li",null,[e("a",x,[n("【视频】Dubbo 实现微服务架构-Zookeeper-服务注册与发现"),a(i)])]),e("li",null,[e("a",f,[n("【视频】Dubbo 实现微服务架构-Zookeeper-集群崩溃恢复1"),a(i)])]),e("li",null,[e("a",z,[n("【视频】Dubbo 实现微服务架构-Zookeeper-集群崩溃恢复2"),a(i)])]),e("li",null,[e("a",P,[n("【视频】Dubbo 实现微服务架构-Zookeeper-集群数据同步"),a(i)])])]),Z,e("ul",null,[e("li",null,[e("a",_,[n("【视频】Dubbo 实现微服务架构-Zookeeper-如何实现分布式锁"),a(i)])])]),y,e("ul",null,[e("li",null,[e("a",L,[n("【视频】Dubbo 实现微服务架构-Zookeeper-基于 Docker 安装"),a(i)])])]),w,e("ul",null,[e("li",null,[e("a",D,[n("【视频】Dubbo 实现微服务架构-Zookeeper-配置说明"),a(i)])])]),C])}const A=r(c,[["render",I],["__file","fenbushixiediaokuangjiaZookeeper.html.vue"]]);export{A as default};
