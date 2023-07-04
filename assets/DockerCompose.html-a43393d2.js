import{_ as s,r as l,o as c,c as o,a as e,b as d,d as n,e as a}from"./app-f078eaf8.js";const r={},u={class:"custom-container tip"},v=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),m=e("p",{class:"custom-container-title"},"TIP",-1),t={href:"https://www.bilibili.com/video/BV1et411T7Rt",target:"_blank",rel:"noopener noreferrer"},p=e("em",null,"P26-P34",-1),b=a('<h1 id="_00-docker-compose安装" tabindex="-1"><a class="header-anchor" href="#_00-docker-compose安装" aria-hidden="true">#</a> 00-Docker Compose安装</h1><p>前提条件：<a href="#%E5%9F%BA%E7%A1%80%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7">#基础常用工具</a> <a href="#%E9%98%B2%E7%81%AB%E5%A2%99%E5%85%B3%E9%97%AD">#防火墙关闭</a> <a href="#Jdk">#Jdk</a></p><p><code>Docker Compose</code> 是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用。</p><hr><h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述" aria-hidden="true">#</a> 一、概述</h2><p><code>Compose</code> 项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟 <code>OpenStack</code> 中的 <code>Heat</code> 十分类似。</p>',6),h={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},g=a(`<p><code>Compose</code> 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。</p><p>通过第一部分中的介绍，我们知道使用一个 <code>Dockerfile</code> 模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。</p><p><code>Compose</code> 恰好满足了这样的需求。它允许用户通过一个单独的 <code>docker-compose.yml</code> 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。</p><p><code>Compose</code> 中有两个重要的概念：</p><ul><li>服务 (<code>service</code>)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。</li><li>项目 (<code>project</code>)：由一组关联的应用容器组成的一个完整业务单元，在 <code>docker-compose.yml</code> 文件中定义。</li></ul><p><code>Compose</code> 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。</p><p><code>Compose</code> 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用 <code>Compose</code> 来进行编排管理。</p><hr><h2 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 下载docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.0/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose
# 修改下载包的权限
sudo chmod +x /usr/local/bin/docker-compose
# 查看docker-compose的版本
docker-compose --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="三、docker-compose-常用命令" tabindex="-1"><a class="header-anchor" href="#三、docker-compose-常用命令" aria-hidden="true">#</a> 三、Docker Compose 常用命令</h2><h3 id="_1、运行" tabindex="-1"><a class="header-anchor" href="#_1、运行" aria-hidden="true">#</a> 1、运行</h3><h4 id="_1-前台运行" tabindex="-1"><a class="header-anchor" href="#_1-前台运行" aria-hidden="true">#</a> （1）前台运行</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker-compose up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-后台运行" tabindex="-1"><a class="header-anchor" href="#_2-后台运行" aria-hidden="true">#</a> （2）后台运行</h4><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、启动" tabindex="-1"><a class="header-anchor" href="#_2、启动" aria-hidden="true">#</a> 2、启动</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker-compose start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、停止" tabindex="-1"><a class="header-anchor" href="#_3、停止" aria-hidden="true">#</a> 3、停止</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker-compose stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、停止并移除容器" tabindex="-1"><a class="header-anchor" href="#_4、停止并移除容器" aria-hidden="true">#</a> 4、停止并移除容器</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker-compose down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、启动报错解决方案" tabindex="-1"><a class="header-anchor" href="#四、启动报错解决方案" aria-hidden="true">#</a> 四、启动报错解决方案</h2><h3 id="_1、权限不足" tabindex="-1"><a class="header-anchor" href="#_1、权限不足" aria-hidden="true">#</a> 1、权限不足</h3><p>赋予数据文件夹权限。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>chmod 777 /usr/local/docker/mysql/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、关闭selinux" tabindex="-1"><a class="header-anchor" href="#_2、关闭selinux" aria-hidden="true">#</a> 2、关闭selinux</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>关闭selinux==&gt;
临时关闭
[root@localhost ~]# getenforce
Enforcing
[root@localhost ~]# setenforce 0
[root@localhost ~]# getenforce
Permissive
永久关闭：
[root@localhost ~]# vim /etc/sysconfig/selinux
SELINUX=enforcing 改为 SELINUX=disabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_01-什么是-docker-compose" tabindex="-1"><a class="header-anchor" href="#_01-什么是-docker-compose" aria-hidden="true">#</a> 01-什么是 Docker Compose</h1><h1 id="什么是-docker-compose" tabindex="-1"><a class="header-anchor" href="#什么是-docker-compose" aria-hidden="true">#</a> 什么是 Docker Compose</h1><p><code>Docker Compose</code>是 Docker 官方编排（Orchestration）项目之一，负责快速的部署分布式应用。</p><h1 id="_02-docker-compose-简介" tabindex="-1"><a class="header-anchor" href="#_02-docker-compose-简介" aria-hidden="true">#</a> 02-Docker Compose 简介</h1><h1 id="docker-compose-简介" tabindex="-1"><a class="header-anchor" href="#docker-compose-简介" aria-hidden="true">#</a> Docker Compose 简介</h1><p><code>Compose</code>项目是 Docker 官方的开源项目，负责实现对 Docker 容器集群的快速编排。从功能上看，跟<code>OpenStack</code>中的<code>Heat</code>十分类似。</p>`,35),P={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},k=a(`<p><code>Compose</code>定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目 Fig。</p><p>通过第一部分中的介绍，我们知道使用一个<code>Dockerfile</code>模板文件，可以让用户很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器，甚至还包括负载均衡容器等。</p><p><code>Compose</code>恰好满足了这样的需求。它允许用户通过一个单独的<code>docker-compose.yml</code>模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。</p><p><code>Compose</code>中有两个重要的概念：</p><ul><li>服务 (<code>service</code>)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。</li><li>项目 (<code>project</code>)：由一组关联的应用容器组成的一个完整业务单元，在<code>docker-compose.yml</code>文件中定义。</li></ul><p><code>Compose</code>的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。</p><p><code>Compose</code>项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。因此，只要所操作的平台支持 Docker API，就可以在其上利用<code>Compose</code>来进行编排管理。</p><h1 id="_03-docker-compose-安装与卸载" tabindex="-1"><a class="header-anchor" href="#_03-docker-compose-安装与卸载" aria-hidden="true">#</a> 03-Docker Compose 安装与卸载</h1><h1 id="docker-compose-安装与卸载" tabindex="-1"><a class="header-anchor" href="#docker-compose-安装与卸载" aria-hidden="true">#</a> Docker Compose 安装与卸载</h1><p><code>Compose</code>支持 Linux、macOS、Windows 10 三大平台。</p><p><code>Compose</code>可以通过 Python 的包管理工具<code>pip</code>进行安装，也可以直接下载编译好的二进制文件使用，甚至能够直接在 Docker 容器中运行。</p><p>前两种方式是传统方式，适合本地环境下安装使用；最后一种方式则不破坏系统环境，更适合云计算场景。</p><p><code>Docker for Mac</code>、<code>Docker for Windows</code>自带<code>docker-compose</code>二进制文件，安装 Docker 之后可以直接使用。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose --version

docker-compose version 1.17.1, build 6d101fb

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Linux 系统请使用以下介绍的方法安装。</p><h2 id="二进制包" tabindex="-1"><a class="header-anchor" href="#二进制包" aria-hidden="true">#</a> 二进制包</h2>`,16),_={href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"},x=a(`<p>例如，在 Linux 64 位系统上直接下载对应的二进制包。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ sudo curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pip-安装" tabindex="-1"><a class="header-anchor" href="#pip-安装" aria-hidden="true">#</a> PIP 安装</h2><p><em>注：</em><code>x86_64</code>架构的 Linux 建议按照上边的方法下载二进制包进行安装，如果您计算机的架构是<code>ARM</code>(例如，树莓派)，再使用<code>pip</code>安装。</p><p>这种方式是将 Compose 当作一个 Python 应用来从 pip 源中安装。</p><p>执行安装命令：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ sudo pip install -U docker-compose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到类似如下输出，说明安装成功。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Collecting docker-compose
  Downloading docker-compose-1.17.1.tar.gz (149kB): 149kB downloaded
...
Successfully installed docker-compose cached-property requests texttable websocket-client docker-py dockerpty six enum34 backports.ssl-match-hostname ipaddress

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bash-补全命令" tabindex="-1"><a class="header-anchor" href="#bash-补全命令" aria-hidden="true">#</a> bash 补全命令</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ curl -L https://raw.githubusercontent.com/docker/compose/1.8.0/contrib/completion/bash/docker-compose &gt; /etc/bash_completion.d/docker-compose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="容器中执行" tabindex="-1"><a class="header-anchor" href="#容器中执行" aria-hidden="true">#</a> 容器中执行</h2><p>Compose 既然是一个 Python 应用，自然也可以直接用容器来执行它。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ curl -L https://github.com/docker/compose/releases/download/1.8.0/run.sh &gt; /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，查看下载的<code>run.sh</code>脚本内容，如下</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>set -e

VERSION=&quot;1.8.0&quot;
IMAGE=&quot;docker/compose:$VERSION&quot;


 Setup options for connecting to docker host
if [ -z &quot;$DOCKER_HOST&quot; ]; then
    DOCKER_HOST=&quot;/var/run/docker.sock&quot;
fi
if [ -S &quot;$DOCKER_HOST&quot; ]; then
    DOCKER_ADDR=&quot;-v $DOCKER_HOST:$DOCKER_HOST -e DOCKER_HOST&quot;
else
    DOCKER_ADDR=&quot;-e DOCKER_HOST -e DOCKER_TLS_VERIFY -e DOCKER_CERT_PATH&quot;
fi


 Setup volume mounts for compose config and context
if [ &quot;$(pwd)&quot; != &#39;/&#39; ]; then
    VOLUMES=&quot;-v $(pwd):$(pwd)&quot;
fi
if [ -n &quot;$COMPOSE_FILE&quot; ]; then
    compose_dir=$(dirname $COMPOSE_FILE)
fi
 TODO: also check --file argument
if [ -n &quot;$compose_dir&quot; ]; then
    VOLUMES=&quot;$VOLUMES -v $compose_dir:$compose_dir&quot;
fi
if [ -n &quot;$HOME&quot; ]; then
    VOLUMES=&quot;$VOLUMES -v $HOME:$HOME -v $HOME:/root&quot;  mount $HOME in /root to share docker.config
fi

 Only allocate tty if we detect one
if [ -t 1 ]; then
    DOCKER_RUN_OPTIONS=&quot;-t&quot;
fi
if [ -t 0 ]; then
    DOCKER_RUN_OPTIONS=&quot;$DOCKER_RUN_OPTIONS -i&quot;
fi

exec docker run --rm $DOCKER_RUN_OPTIONS $DOCKER_ADDR $COMPOSE_OPTIONS $VOLUMES -w &quot;$(pwd)&quot; $IMAGE &quot;$@&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，它其实是下载了<code>docker/compose</code>镜像并运行。</p><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><p>如果是二进制包方式安装的，删除二进制文件即可。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ sudo rm /usr/local/bin/docker-compose

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是通过<code>pip</code>安装的，则执行如下命令即可删除。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ sudo pip uninstall docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_04-docker-compose-使用" tabindex="-1"><a class="header-anchor" href="#_04-docker-compose-使用" aria-hidden="true">#</a> 04-Docker Compose 使用</h1><h2 id="术语" tabindex="-1"><a class="header-anchor" href="#术语" aria-hidden="true">#</a> 术语</h2><p>首先介绍几个术语。</p><ul><li>服务 (<code>service</code>)：一个应用容器，实际上可以运行多个相同镜像的实例。</li><li>项目 (<code>project</code>)：由一组关联的应用容器组成的一个完整业务单元。</li></ul><p>可见，一个项目可以由多个服务（容器）关联而成，<code>Compose</code>面向项目进行管理。</p><h2 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h2><p>最常见的项目是 web 网站，该项目应该包含 web 应用和缓存。</p><p>下面我们用<code>Python</code>来建立一个能够记录页面访问次数的 web 网站。</p><h3 id="web-应用" tabindex="-1"><a class="header-anchor" href="#web-应用" aria-hidden="true">#</a> web 应用</h3><p>新建文件夹，在该目录中编写<code>app.py</code>文件</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host=&#39;redis&#39;, port=6379)

@app.route(&#39;/&#39;)
def hello():
    count = redis.incr(&#39;hits&#39;)
    return &#39;Hello World! 该页面已被访问 {} 次。\\n&#39;.format(count)

if __name__ == &quot;__main__&quot;:
    app.run(host=&quot;0.0.0.0&quot;, debug=True)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h3><p>编写<code>Dockerfile</code>文件，内容为</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>FROM python:3.6-alpine
ADD . /code
WORKDIR /code
RUN pip install redis flask
CMD [&quot;python&quot;, &quot;app.py&quot;]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml" aria-hidden="true">#</a> docker-compose.yml</h3><p>编写<code>docker-compose.yml</code>文件，这个是 Compose 使用的主模板文件。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3&#39;
services:

  web:
    build: .
    ports:
     - &quot;5000:5000&quot;

  redis:
    image: &quot;redis:alpine&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行-compose-项目" tabindex="-1"><a class="header-anchor" href="#运行-compose-项目" aria-hidden="true">#</a> 运行 compose 项目</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose up

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时访问本地<code>5000</code>端口，每次刷新页面，计数就会加 1。</p><h1 id="_05-docker-compose-命令说明" tabindex="-1"><a class="header-anchor" href="#_05-docker-compose-命令说明" aria-hidden="true">#</a> 05-Docker Compose 命令说明</h1><h2 id="命令对象与格式" tabindex="-1"><a class="header-anchor" href="#命令对象与格式" aria-hidden="true">#</a> 命令对象与格式</h2><p>对于 Compose 来说，大部分命令的对象既可以是项目本身，也可以指定为项目中的服务或者容器。如果没有特别的说明，命令对象将是项目，这意味着项目中所有的服务都会受到命令影响。</p><p>执行<code>docker-compose [COMMAND] --help</code>或者<code>docker-compose help [COMMAND]</code>可以查看具体某个命令的使用格式。</p><p><code>docker-compose</code>命令的基本的使用格式是</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker-compose [-f=&lt;arg&gt;...] [options] [COMMAND] [ARGS...]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令选项" tabindex="-1"><a class="header-anchor" href="#命令选项" aria-hidden="true">#</a> 命令选项</h2><ul><li><code>-f, --file FILE</code>指定使用的 Compose 模板文件，默认为<code>docker-compose.yml</code>，可以多次指定。</li><li><code>-p, --project-name NAME</code>指定项目名称，默认将使用所在目录名称作为项目名。</li><li><code>--x-networking</code>使用 Docker 的可拔插网络后端特性</li><li><code>--x-network-driver DRIVER</code>指定网络后端的驱动，默认为<code>bridge</code></li><li><code>--verbose</code>输出更多调试信息。</li><li><code>-v, --version</code>打印版本并退出。</li></ul><h2 id="命令使用说明" tabindex="-1"><a class="header-anchor" href="#命令使用说明" aria-hidden="true">#</a> 命令使用说明</h2><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> <code>build</code></h3><p>格式为<code>docker-compose build [options] [SERVICE...]</code>。</p><p>构建（重新构建）项目中的服务容器。</p><p>服务容器一旦构建后，将会带上一个标记名，例如对于 web 项目中的一个 db 容器，可能是 web_db。</p><p>可以随时在项目目录下运行<code>docker-compose build</code>来重新构建服务。</p><p>选项包括：</p><ul><li><code>--force-rm</code>删除构建过程中的临时容器。</li><li><code>--no-cache</code>构建镜像过程中不使用 cache（这将加长构建过程）。</li><li><code>--pull</code>始终尝试通过 pull 来获取更新版本的镜像。</li></ul><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> <code>config</code></h3><p>验证 Compose 文件格式是否正确，若正确则显示配置，若格式错误显示错误原因。</p><h3 id="down" tabindex="-1"><a class="header-anchor" href="#down" aria-hidden="true">#</a> <code>down</code></h3><p>此命令将会停止<code>up</code>命令所启动的容器，并移除网络</p><h3 id="exec" tabindex="-1"><a class="header-anchor" href="#exec" aria-hidden="true">#</a> <code>exec</code></h3><p>进入指定的容器。</p><h3 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> <code>help</code></h3><p>获得一个命令的帮助。</p><h3 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> <code>images</code></h3><p>列出 Compose 文件中包含的镜像。</p><h3 id="kill" tabindex="-1"><a class="header-anchor" href="#kill" aria-hidden="true">#</a> <code>kill</code></h3><p>格式为<code>docker-compose kill [options] [SERVICE...]</code>。</p><p>通过发送<code>SIGKILL</code>信号来强制停止服务容器。</p><p>支持通过<code>-s</code>参数来指定发送的信号，例如通过如下指令发送<code>SIGINT</code>信号。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose kill -s SIGINT

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logs" tabindex="-1"><a class="header-anchor" href="#logs" aria-hidden="true">#</a> <code>logs</code></h3><p>格式为<code>docker-compose logs [options] [SERVICE...]</code>。</p><p>查看服务容器的输出。默认情况下，docker-compose 将对不同的服务输出使用不同的颜色来区分。可以通过<code>--no-color</code>来关闭颜色。</p><p>该命令在调试问题的时候十分有用。</p><h3 id="pause" tabindex="-1"><a class="header-anchor" href="#pause" aria-hidden="true">#</a> <code>pause</code></h3><p>格式为<code>docker-compose pause [SERVICE...]</code>。</p><p>暂停一个服务容器。</p><h3 id="port" tabindex="-1"><a class="header-anchor" href="#port" aria-hidden="true">#</a> <code>port</code></h3><p>格式为<code>docker-compose port [options] SERVICE PRIVATE_PORT</code>。</p><p>打印某个容器端口所映射的公共端口。</p><p>选项：</p><ul><li><code>--protocol=proto</code>指定端口协议，tcp（默认值）或者 udp。</li><li><code>--index=index</code>如果同一服务存在多个容器，指定命令对象容器的序号（默认为 1）。</li></ul><h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> <code>ps</code></h3><p>格式为<code>docker-compose ps [options] [SERVICE...]</code>。</p><p>列出项目中目前的所有容器。</p><p>选项：</p><ul><li><code>-q</code>只打印容器的 ID 信息。</li></ul><h3 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> <code>pull</code></h3><p>格式为<code>docker-compose pull [options] [SERVICE...]</code>。</p><p>拉取服务依赖的镜像。</p><p>选项：</p><ul><li><code>--ignore-pull-failures</code>忽略拉取镜像过程中的错误。</li></ul><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> <code>push</code></h3><p>推送服务依赖的镜像到 Docker 镜像仓库。</p><h3 id="restart" tabindex="-1"><a class="header-anchor" href="#restart" aria-hidden="true">#</a> <code>restart</code></h3><p>格式为<code>docker-compose restart [options] [SERVICE...]</code>。</p><p>重启项目中的服务。</p><p>选项：</p><ul><li><code>-t, --timeout TIMEOUT</code>指定重启前停止容器的超时（默认为 10 秒）。</li></ul><h3 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> <code>rm</code></h3><p>格式为<code>docker-compose rm [options] [SERVICE...]</code>。</p><p>删除所有（停止状态的）服务容器。推荐先执行<code>docker-compose stop</code>命令来停止容器。</p><p>选项：</p><ul><li><code>-f, --force</code>强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。</li><li><code>-v</code>删除容器所挂载的数据卷。</li></ul><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> <code>run</code></h3><p>格式为<code>docker-compose run [options] [-p PORT...] [-e KEY=VAL...] SERVICE [COMMAND] [ARGS...]</code>。</p><p>在指定服务上执行一个命令。</p><p>例如：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose run ubuntu ping docker.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将会启动一个 ubuntu 服务容器，并执行<code>ping docker.com</code>命令。</p><p>默认情况下，如果存在关联，则所有关联的服务将会自动被启动，除非这些服务已经在运行中。</p><p>该命令类似启动容器后运行指定的命令，相关卷、链接等等都将会按照配置自动创建。</p><p>两个不同点：</p><ul><li>给定命令将会覆盖原有的自动运行命令；</li><li>不会自动创建端口，以避免冲突。</li></ul><p>如果不希望自动启动关联的容器，可以使用<code>--no-deps</code>选项，例如</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose run --no-deps web python manage.py shell

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将不会启动 web 容器所关联的其它容器。</p><p>选项：</p><ul><li><code>-d</code>后台运行容器。</li><li><code>--name NAME</code>为容器指定一个名字。</li><li><code>--entrypoint CMD</code>覆盖默认的容器启动指令。</li><li><code>-e KEY=VAL</code>设置环境变量值，可多次使用选项来设置多个环境变量。</li><li><code>-u, --user=&quot;&quot;</code>指定运行容器的用户名或者 uid。</li><li><code>--no-deps</code>不自动启动关联的服务容器。</li><li><code>--rm</code>运行命令后自动删除容器，<code>d</code>模式下将忽略。</li><li><code>-p, --publish=[]</code>映射容器端口到本地主机。</li><li><code>--service-ports</code>配置服务端口并映射到本地主机。</li><li><code>-T</code>不分配伪 tty，意味着依赖 tty 的指令将无法运行。</li></ul><h3 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> <code>scale</code></h3><p>格式为<code>docker-compose scale [options] [SERVICE=NUM...]</code>。</p><p>设置指定服务运行的容器个数。</p><p>通过<code>service=num</code>的参数来设置数量。例如：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose scale web=3 db=2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将启动 3 个容器运行 web 服务，2 个容器运行 db 服务。</p><p>一般的，当指定数目多于该服务当前实际运行容器，将新创建并启动容器；反之，将停止容器。</p><p>选项：</p><ul><li><code>-t, --timeout TIMEOUT</code>停止容器时候的超时（默认为 10 秒）。</li></ul><h3 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> <code>start</code></h3><p>格式为<code>docker-compose start [SERVICE...]</code>。</p><p>启动已经存在的服务容器。</p><h3 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> <code>stop</code></h3><p>格式为<code>docker-compose stop [options] [SERVICE...]</code>。</p><p>停止已经处于运行状态的容器，但不删除它。通过<code>docker-compose start</code>可以再次启动这些容器。</p><p>选项：</p><ul><li><code>-t, --timeout TIMEOUT</code>停止容器时候的超时（默认为 10 秒）。</li></ul><h3 id="top" tabindex="-1"><a class="header-anchor" href="#top" aria-hidden="true">#</a> <code>top</code></h3><p>查看各个服务容器内运行的进程。</p><h3 id="unpause" tabindex="-1"><a class="header-anchor" href="#unpause" aria-hidden="true">#</a> <code>unpause</code></h3><p>格式为<code>docker-compose unpause [SERVICE...]</code>。</p><p>恢复处于暂停状态中的服务。</p><h3 id="up" tabindex="-1"><a class="header-anchor" href="#up" aria-hidden="true">#</a> <code>up</code></h3><p>格式为<code>docker-compose up [options] [SERVICE...]</code>。</p><p>该命令十分强大，它将尝试自动完成包括构建镜像，（重新）创建服务，启动服务，并关联服务相关容器的一系列操作。</p><p>链接的服务都将会被自动启动，除非已经处于运行状态。</p><p>可以说，大部分时候都可以直接通过该命令来启动一个项目。</p><p>默认情况，<code>docker-compose up</code>启动的容器都在前台，控制台将会同时打印所有容器的输出信息，可以很方便进行调试。</p><p>当通过<code>Ctrl-C</code>停止命令时，所有容器将会停止。</p><p>如果使用<code>docker-compose up -d</code>，将会在后台启动并运行所有的容器。一般推荐生产环境下使用该选项。</p><p>默认情况，如果服务容器已经存在，<code>docker-compose up</code>将会尝试停止容器，然后重新创建（保持使用<code>volumes-from</code>挂载的卷），以保证新启动的服务匹配<code>docker-compose.yml</code>文件的最新内容。如果用户不希望容器被停止并重新创建，可以使用<code>docker-compose up --no-recreate</code>。这样将只会启动处于停止状态的容器，而忽略已经运行的服务。如果用户只想重新部署某个服务，可以使用<code>docker-compose up --no-deps -d &lt;SERVICE_NAME&gt;</code>来重新创建服务并后台停止旧服务，启动新服务，并不会影响到其所依赖的服务。</p><p>选项：</p><ul><li><code>-d</code>在后台运行服务容器。</li><li><code>--no-color</code>不使用颜色来区分不同的服务的控制台输出。</li><li><code>--no-deps</code>不启动服务所链接的容器。</li><li><code>--force-recreate</code>强制重新创建容器，不能与<code>--no-recreate</code>同时使用。</li><li><code>--no-recreate</code>如果容器已经存在了，则不重新创建，不能与<code>--force-recreate</code>同时使用。</li><li><code>--no-build</code>不自动构建缺失的服务镜像。</li><li><code>-t, --timeout TIMEOUT</code>停止容器时候的超时（默认为 10 秒）。</li></ul><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> <code>version</code></h3><p>格式为<code>docker-compose version</code>。</p><p>打印版本信息。</p><h1 id="_06-docker-compose-模板文件" tabindex="-1"><a class="header-anchor" href="#_06-docker-compose-模板文件" aria-hidden="true">#</a> 06-Docker Compose 模板文件</h1><p>模板文件是使用<code>Compose</code>的核心，涉及到的指令关键字也比较多。但大家不用担心，这里面大部分指令跟<code>docker run</code>相关参数的含义都是类似的。</p><p>默认的模板文件名称为<code>docker-compose.yml</code>，格式为 YAML 格式。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3&quot;

services:
  webapp:
    image: examples/web
    ports:
      - &quot;80:80&quot;
    volumes:
      - &quot;/data&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意每个服务都必须通过<code>image</code>指令指定镜像或<code>build</code>指令（需要 Dockerfile）等来自动构建生成镜像。</p><p>如果使用<code>build</code>指令，在<code>Dockerfile</code>中设置的选项(例如：<code>CMD</code>,<code>EXPOSE</code>,<code>VOLUME</code>,<code>ENV</code>等) 将会自动被获取，无需在<code>docker-compose.yml</code>中再次设置。</p><p>下面分别介绍各个指令的用法。</p><h2 id="build-1" tabindex="-1"><a class="header-anchor" href="#build-1" aria-hidden="true">#</a> <code>build</code></h2><p>指定<code>Dockerfile</code>所在文件夹的路径（可以是绝对路径，或者相对 docker-compose.yml 文件的路径）。<code>Compose</code>将会利用它自动构建这个镜像，然后使用这个镜像。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3&#39;
services:

  webapp:
    build: ./dir

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以使用<code>context</code>指令指定<code>Dockerfile</code>所在文件夹的路径。</p><p>使用<code>dockerfile</code>指令指定<code>Dockerfile</code>文件名。</p><p>使用<code>arg</code>指令指定构建镜像时的变量。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3&#39;
services:

  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>cache_from</code>指定构建镜像的缓存</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>build:
  context: .
  cache_from:
    - alpine:latest
    - corp/web_app:3.14

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cap-add-cap-drop" tabindex="-1"><a class="header-anchor" href="#cap-add-cap-drop" aria-hidden="true">#</a> <code>cap_add, cap_drop</code></h2><p>指定容器的内核能力（capacity）分配。</p><p>例如，让容器拥有所有能力可以指定为：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cap_add:
  - ALL

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去掉 NET_ADMIN 能力可以指定为：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cap_drop:
  - NET_ADMIN

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> <code>command</code></h2><p>覆盖容器启动后默认执行的命令。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>command: echo &quot;hello world&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configs" tabindex="-1"><a class="header-anchor" href="#configs" aria-hidden="true">#</a> <code>configs</code></h2><p>仅用于<code>Swarm mode</code></p><h2 id="cgroup-parent" tabindex="-1"><a class="header-anchor" href="#cgroup-parent" aria-hidden="true">#</a> <code>cgroup_parent</code></h2><p>指定父<code>cgroup</code>组，意味着将继承该组的资源限制。</p><p>例如，创建了一个 cgroup 组名称为<code>cgroups_1</code>。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cgroup_parent: cgroups_1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="container-name" tabindex="-1"><a class="header-anchor" href="#container-name" aria-hidden="true">#</a> <code>container_name</code></h2><p>指定容器名称。默认将会使用<code>项目名称_服务名称_序号</code>这样的格式。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>container_name: docker-web-container

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意: 指定容器名称后，该服务将无法进行扩展（scale），因为 Docker 不允许多个容器具有相同的名称。</p></blockquote><h2 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> <code>deploy</code></h2><p>仅用于<code>Swarm mode</code></p><h2 id="devices" tabindex="-1"><a class="header-anchor" href="#devices" aria-hidden="true">#</a> <code>devices</code></h2><p>指定设备映射关系。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>devices:
  - &quot;/dev/ttyUSB1:/dev/ttyUSB0&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="depends-on" tabindex="-1"><a class="header-anchor" href="#depends-on" aria-hidden="true">#</a> <code>depends_on</code></h2><p>解决容器的依赖、启动先后的问题。以下例子中会先启动<code>redis\`\`db</code>再启动<code>web</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3&#39;

services:
  web:
    build: .
    depends_on:
      - db
      - redis

  redis:
    image: redis

  db:
    image: postgres

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：<code>web</code>服务不会等待<code>redis\`\`db</code>「完全启动」之后才启动。</p></blockquote><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> <code>dns</code></h2><p>自定义<code>DNS</code>服务器。可以是一个值，也可以是一个列表。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>dns: 8.8.8.8

dns:
  - 8.8.8.8
  - 114.114.114.114

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns-search" tabindex="-1"><a class="header-anchor" href="#dns-search" aria-hidden="true">#</a> <code>dns_search</code></h2><p>配置<code>DNS</code>搜索域。可以是一个值，也可以是一个列表。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>dns_search: example.com

dns_search:
  - domain1.example.com
  - domain2.example.com

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tmpfs" tabindex="-1"><a class="header-anchor" href="#tmpfs" aria-hidden="true">#</a> <code>tmpfs</code></h2><p>挂载一个 tmpfs 文件系统到容器。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tmpfs: /run
tmpfs:
  - /run
  - /tmp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="env-file" tabindex="-1"><a class="header-anchor" href="#env-file" aria-hidden="true">#</a> <code>env_file</code></h2><p>从文件中获取环境变量，可以为单独的文件路径或列表。</p><p>如果通过<code>docker-compose -f FILE</code>方式来指定 Compose 模板文件，则<code>env_file</code>中变量的路径会基于模板文件路径。</p><p>如果有变量名称与<code>environment</code>指令冲突，则按照惯例，以后者为准。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>env_file: .env

env_file:
  - ./common.env
  - ./apps/web.env
  - /opt/secrets.env

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>环境变量文件中每一行必须符合格式，支持 开头的注释行。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code> common.env: Set development environment
PROG_ENV=development

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> <code>environment</code></h2><p>设置环境变量。你可以使用数组或字典两种格式。</p><p>只给定名称的变量会自动获取运行 Compose 主机上对应变量的值，可以用来防止泄露不必要的数据。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>environment:
  RACK_ENV: development
  SESSION_SECRET:

environment:
  - RACK_ENV=development
  - SESSION_SECRET

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,222),f=e("code",null,"true|false，yes|no",-1),q={href:"http://yaml.org/type/bool.html",target:"_blank",rel:"noopener noreferrer"},E=a(`<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>y|Y|yes|Yes|YES|n|N|no|No|NO|true|True|TRUE|false|False|FALSE|on|On|ON|off|Off|OFF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> <code>expose</code></h2><p>暴露端口，但不映射到宿主机，只被连接的服务访问。</p><p>仅可以指定内部端口为参数</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>expose:
 - &quot;3000&quot;
 - &quot;8000&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="external-links" tabindex="-1"><a class="header-anchor" href="#external-links" aria-hidden="true">#</a> <code>external_links</code></h2><blockquote><p>注意：不建议使用该指令。</p></blockquote><p>链接到<code>docker-compose.yml</code>外部的容器，甚至并非<code>Compose</code>管理的外部容器。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>external_links:
 - redis_1
 - project_db_1:mysql
 - project_db_1:postgresql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extra-hosts" tabindex="-1"><a class="header-anchor" href="#extra-hosts" aria-hidden="true">#</a> <code>extra_hosts</code></h2><p>类似 Docker 中的<code>--add-host</code>参数，指定额外的 host 名称映射信息。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>extra_hosts:
 - &quot;googledns:8.8.8.8&quot;
 - &quot;dockerhub:52.1.157.61&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会在启动后的服务容器中<code>/etc/hosts</code>文件中添加如下两条条目。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>8.8.8.8 googledns
52.1.157.61 dockerhub

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="healthcheck" tabindex="-1"><a class="header-anchor" href="#healthcheck" aria-hidden="true">#</a> <code>healthcheck</code></h2><p>通过命令检查容器是否健康运行。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>healthcheck:
  test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;]
  interval: 1m30s
  timeout: 10s
  retries: 3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> <code>image</code></h2><p>指定为镜像名称或镜像 ID。如果镜像在本地不存在，<code>Compose</code>将会尝试拉取这个镜像。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>image: ubuntu
image: orchardup/postgresql
image: a4bc65fd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="labels" tabindex="-1"><a class="header-anchor" href="#labels" aria-hidden="true">#</a> <code>labels</code></h2><p>为容器添加 Docker 元数据（metadata）信息。例如可以为容器添加辅助说明信息。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>labels:
  com.startupteam.description: &quot;webapp for a startup team&quot;
  com.startupteam.department: &quot;devops department&quot;
  com.startupteam.release: &quot;rc3 for v1.0&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="links" tabindex="-1"><a class="header-anchor" href="#links" aria-hidden="true">#</a> <code>links</code></h2><blockquote><p>注意：不推荐使用该指令。</p></blockquote><h2 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> <code>logging</code></h2><p>配置日志选项。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>logging:
  driver: syslog
  options:
    syslog-address: &quot;tcp://192.168.0.42:123&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前支持三种日志驱动类型。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>driver: &quot;json-file&quot;
driver: &quot;syslog&quot;
driver: &quot;none&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>options</code>配置日志驱动的相关参数。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>options:
  max-size: &quot;200k&quot;
  max-file: &quot;10&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="network-mode" tabindex="-1"><a class="header-anchor" href="#network-mode" aria-hidden="true">#</a> <code>network_mode</code></h2><p>设置网络模式。使用和<code>docker run</code>的<code>--network</code>参数一样的值。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>network_mode: &quot;bridge&quot;
network_mode: &quot;host&quot;
network_mode: &quot;none&quot;
network_mode: &quot;service:[service name]&quot;
network_mode: &quot;container:[container name/id]&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="networks" tabindex="-1"><a class="header-anchor" href="#networks" aria-hidden="true">#</a> <code>networks</code></h2><p>配置容器连接的网络。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3&quot;
services:

  some-service:
    networks:
     - some-network
     - other-network

networks:
  some-network:
  other-network:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pid" tabindex="-1"><a class="header-anchor" href="#pid" aria-hidden="true">#</a> <code>pid</code></h2><p>跟主机系统共享进程命名空间。打开该选项的容器之间，以及容器和宿主机系统之间可以通过进程 ID 来相互访问和操作。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>pid: &quot;host&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ports" tabindex="-1"><a class="header-anchor" href="#ports" aria-hidden="true">#</a> <code>ports</code></h2><p>暴露端口信息。</p><p>使用宿主端口：容器端口<code>(HOST:CONTAINER)</code>格式，或者仅仅指定容器的端口（宿主将会随机选择端口）都可以。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>ports:
 - &quot;3000&quot;
 - &quot;8000:8000&quot;
 - &quot;49100:22&quot;
 - &quot;127.0.0.1:8001:8001&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注意：当使用</em><em><strong>HOST:CONTAINER</strong></em><em>格式来映射端口时，如果你使用的容器端口小于 60 并且没放到引号里，可能会得到错误结果，因为</em><em><strong>YAML</strong></em><em>会自动解析</em><em><strong>xx:yy</strong></em><em>这种数字格式为 60 进制。为避免出现这种问题，建议数字串都采用引号包括起来的字符串格式。</em></p><h2 id="secrets" tabindex="-1"><a class="header-anchor" href="#secrets" aria-hidden="true">#</a> <code>secrets</code></h2><p>存储敏感数据，例如<code>mysql</code>服务密码。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3.1&quot;
services:

mysql:
  image: mysql
  environment:
    MYSQL_ROOT_PASSWORD_FILE: /run/secrets/db_root_password
  secrets:
    - db_root_password
    - my_other_secret

secrets:
  my_secret:
    file: ./my_secret.txt
  my_other_secret:
    external: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="security-opt" tabindex="-1"><a class="header-anchor" href="#security-opt" aria-hidden="true">#</a> <code>security_opt</code></h2><p>指定容器模板标签（label）机制的默认属性（用户、角色、类型、级别等）。例如配置标签的用户名和角色名。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>security_opt:
    - label:user:USER
    - label:role:ROLE

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stop-signal" tabindex="-1"><a class="header-anchor" href="#stop-signal" aria-hidden="true">#</a> <code>stop_signal</code></h2><p>设置另一个信号来停止容器。在默认情况下使用的是 SIGTERM 停止容器。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>stop_signal: SIGUSR1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sysctls" tabindex="-1"><a class="header-anchor" href="#sysctls" aria-hidden="true">#</a> <code>sysctls</code></h2><p>配置容器内核参数。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>sysctls:
  net.core.somaxconn: 1024
  net.ipv4.tcp_syncookies: 0

sysctls:
  - net.core.somaxconn=1024
  - net.ipv4.tcp_syncookies=0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ulimits" tabindex="-1"><a class="header-anchor" href="#ulimits" aria-hidden="true">#</a> <code>ulimits</code></h2><p>指定容器的 ulimits 限制值。</p><p>例如，指定最大进程数为 65535，指定文件句柄数为 20000（软限制，应用可以随时修改，不能超过硬限制） 和 40000（系统硬限制，只能 root 用户提高）。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>  ulimits:
    nproc: 65535
    nofile:
      soft: 20000
      hard: 40000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> <code>volumes</code></h2><p>数据卷所挂载路径设置。可以设置宿主机路径 （<code>HOST:CONTAINER</code>） 或加上访问模式 （<code>HOST:CONTAINER:ro</code>）。</p><p>该指令中路径支持相对路径。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>volumes:
 - /var/lib/mysql
 - cache/:/tmp/cache
 - ~/configs:/etc/configs/:ro

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它指令" tabindex="-1"><a class="header-anchor" href="#其它指令" aria-hidden="true">#</a> 其它指令</h2><p>此外，还有包括<code>domainname, entrypoint, hostname, ipc, mac_address, privileged, read_only, shm_size, restart, stdin_open, tty, user, working_dir</code>等指令，基本跟<code>docker run</code>中对应参数的功能一致。</p><p>指定服务容器启动后执行的入口文件。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>entrypoint: /code/entrypoint.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>指定容器中运行应用的用户名。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>user: nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>指定容器中工作目录。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>working_dir: /code

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>指定容器中搜索域名、主机名、mac 地址等。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>domainname: your_website.com
hostname: test
mac_address: 08-00-27-00-0C-0A

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>允许容器中运行一些特权命令。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>privileged: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>指定容器退出后的重启策略为始终重启。该命令对保持服务始终运行十分有效，在生产环境中推荐配置为<code>always</code>或者<code>unless-stopped</code>。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>restart: always

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以只读模式挂载容器的 root 文件系统，意味着不能对容器内容进行修改。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>read_only: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开标准输入，可以接受外部输入。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>stdin_open: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>模拟一个伪终端。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>tty: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="读取变量" tabindex="-1"><a class="header-anchor" href="#读取变量" aria-hidden="true">#</a> 读取变量</h2><p>Compose 模板文件支持动态读取主机的系统环境变量和当前目录下的<code>.env</code>文件中的变量。</p><p>例如，下面的 Compose 文件将从运行它的环境中读取变量<code>\${MONGO_VERSION}</code>的值，并写入执行的指令中。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3&quot;
services:

db:
  image: &quot;mongo:\${MONGO_VERSION}&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果执行<code>MONGO_VERSION=3.2 docker-compose up</code>则会启动一个<code>mongo:3.2</code>镜像的容器；如果执行<code>MONGO_VERSION=2.8 docker-compose up</code>则会启动一个<code>mongo:2.8</code>镜像的容器。</p><p>若当前目录存在<code>.env</code>文件，执行<code>docker-compose</code>命令时将从该文件中读取变量。</p><p>在当前目录新建<code>.env</code>文件并写入以下内容。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code> 支持  号注释
MONGO_VERSION=3.6

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>docker-compose up</code>则会启动一个<code>mongo:3.6</code>镜像的容器。</p><h1 id="_07-docker-compose-实战-django" tabindex="-1"><a class="header-anchor" href="#_07-docker-compose-实战-django" aria-hidden="true">#</a> 07-Docker Compose 实战 Django</h1><p>本小节内容适合<code>Python</code>开发人员阅读。</p><p>我们现在将使用<code>Docker Compose</code>配置并运行一个<code>Django/PostgreSQL</code>应用。</p><p>在一切工作开始前，需要先编辑好三个必要的文件。</p><p>第一步，因为应用将要运行在一个满足所有环境依赖的 Docker 容器里面，那么我们可以通过编辑<code>Dockerfile</code>文件来指定 Docker 容器要安装内容。内容如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),D=e("code",null,"Dockerfile",-1),w={href:"https://www.funtl.com/zh/dockerfile/",target:"_blank",rel:"noopener noreferrer"},y=a(`<p>第二步，在<code>requirements.txt</code>文件里面写明需要安装的具体依赖包名。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Django&gt;=1.8,&lt;2.0
psycopg2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步，<code>docker-compose.yml</code>文件将把所有的东西关联起来。它描述了应用的构成（一个 web 服务和一个数据库）、使用的 Docker 镜像、镜像之间的连接、挂载到容器的卷，以及服务开放的端口。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3&quot;
services:

  db:
    image: postgres

  web:
    build: .
    command: python3 manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - &quot;8000:8000&quot;
    links:
      - db

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们就可以使用<code>docker-compose run</code>命令启动一个<code>Django</code>应用了。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose run web django-admin.py startproject django_example .

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Compose 会先使用<code>Dockerfile</code>为 web 服务创建一个镜像，接着使用这个镜像在容器里运行<code>django-admin.py startproject composeexample</code>指令。</p><p>这将在当前目录生成一个<code>Django</code>应用。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ ls
Dockerfile       docker-compose.yml          django_example       manage.py       requirements.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的系统是 Linux,记得更改文件权限。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>sudo chown -R $USER:$USER .

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先，我们要为应用设置好数据库的连接信息。用以下内容替换<code>django_example/settings.py</code>文件中<code>DATABASES = ...</code>定义的节点内容。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>DATABASES = {
    &#39;default&#39;: {
        &#39;ENGINE&#39;: &#39;django.db.backends.postgresql&#39;,
        &#39;NAME&#39;: &#39;postgres&#39;,
        &#39;USER&#39;: &#39;postgres&#39;,
        &#39;HOST&#39;: &#39;db&#39;,
        &#39;PORT&#39;: 5432,
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),O={href:"https://store.docker.com/images/postgres/",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"docker-compose up",-1),C=a(`<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose up

django_db_1 is up-to-date
Creating django_web_1 ...
Creating django_web_1 ... done
Attaching to django_db_1, django_web_1
db_1   | The files belonging to this database system will be owned by user &quot;postgres&quot;.
db_1   | This user must also own the server process.
db_1   |
db_1   | The database cluster will be initialized with locale &quot;en_US.utf8&quot;.
db_1   | The default database encoding has accordingly been set to &quot;UTF8&quot;.
db_1   | The default text search configuration will be set to &quot;english&quot;.

web_1  | Performing system checks...
web_1  |
web_1  | System check identified no issues (0 silenced).
web_1  |
web_1  | November 23, 2017 - 06:21:19
web_1  | Django version 1.11.7, using settings &#39;django_example.settings&#39;
web_1  | Starting development server at http://0.0.0.0:8000/
web_1  | Quit the server with CONTROL-C.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个<code>Django</code>应用已经开始在你的 Docker 守护进程里监听着<code>8000</code>端口了。打开<code>127.0.0.1:8000</code>即可看到<code>Django</code>欢迎页面。</p><p>你还可以在 Docker 上运行其它的管理命令，例如对于同步数据库结构这种事，在运行完<code>docker-compose up</code>后，在另外一个终端进入文件夹运行以下命令即可：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose run web python manage.py syncdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_08-docker-compose-实战-rails" tabindex="-1"><a class="header-anchor" href="#_08-docker-compose-实战-rails" aria-hidden="true">#</a> 08-Docker Compose 实战 Rails</h1><p>本小节内容适合<code>Ruby</code>开发人员阅读。</p><p>我们现在将使用<code>Compose</code>配置并运行一个<code>Rails/PostgreSQL</code>应用。</p><p>在一切工作开始前，需要先设置好三个必要的文件。</p><p>首先，因为应用将要运行在一个满足所有环境依赖的 Docker 容器里面，那么我们可以通过编辑<code>Dockerfile</code>文件来指定 Docker 容器要安装内容。内容如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>FROM ruby
RUN apt-get update -qq &amp;&amp; apt-get install -y build-essential libpq-dev
RUN mkdir /myapp
WORKDIR /myapp
ADD Gemfile /myapp/Gemfile
RUN bundle install
ADD . /myapp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上内容指定应用将使用安装了 Ruby、Bundler 以及其依赖件的镜像。 下一步，我们需要一个引导加载 Rails 的文件<code>Gemfile</code>。 等一会儿它还会被<code>rails new</code>命令覆盖重写。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>source &#39;https://rubygems.org&#39;
gem &#39;rails&#39;, &#39;4.0.2&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，<code>docker-compose.yml</code>文件才是最神奇的地方。<code>docker-compose.yml</code>文件将把所有的东西关联起来。它描述了应用的构成（一个 web 服务和一个数据库）、每个镜像的来源（数据库运行在使用预定义的 PostgreSQL 镜像，web 应用侧将从本地目录创建）、镜像之间的连接，以及服务开放的端口。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3&quot;
services:

  db:
    image: postgres
    ports:
      - &quot;5432&quot;

  web:
    build: .
    command: bundle exec rackup -p 3000
    volumes:
      - .:/myapp
    ports:
      - &quot;3000:3000&quot;
    links:
      - db

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有文件就绪后，我们就可以通过使用<code>docker-compose run</code>命令生成应用的骨架了。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose run web rails new . --force --database=postgresql --skip-bundle

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Compose</code>会先使用<code>Dockerfile</code>为 web 服务创建一个镜像，接着使用这个镜像在容器里运行<code>rails new</code>和它之后的命令。一旦这个命令运行完后，应该就可以看一个崭新的应用已经生成了。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ ls
Dockerfile   app          docker-compose.yml      tmp
Gemfile      bin          lib          vendor
Gemfile.lock condocker-compose       log
README.rdoc  condocker-compose.ru    public
Rakefile     db           test

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在新的<code>Gemfile</code>文件去掉加载<code>therubyracer</code>的行的注释，这样我们便可以使用 Javascript 运行环境：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>gem &#39;therubyracer&#39;, platforms: :ruby

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们已经有一个新的<code>Gemfile</code>文件，需要再重新创建镜像。（这个会步骤会改变 Dockerfile 文件本身，所以需要重建一次）。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose build

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应用现在就可以启动了，但配置还未完成。Rails 默认读取的数据库目标是<code>localhost</code>，我们需要手动指定容器的<code>db</code>。同样的，还需要把用户名修改成和 postgres 镜像预定的一致。 打开最新生成的<code>database.yml</code>文件。用以下内容替换：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>development: &amp;default
  adapter: postgresql
  encoding: unicode
  database: postgres
  pool: 5
  username: postgres
  password:
  host: db

test:
  &lt;&lt;: *default
  database: myapp_test

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在就可以启动应用了。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose up

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一切正常，你应该可以看到 PostgreSQL 的输出，几秒后可以看到这样的重复信息：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>myapp_web_1 | [2014-01-17 17:16:29] INFO  WEBrick 1.3.1
myapp_web_1 | [2014-01-17 17:16:29] INFO  ruby 2.0.0 (2013-11-22) [x86_64-linux-gnu]
myapp_web_1 | [2014-01-17 17:16:29] INFO  WEBrick::HTTPServer#start: pid=1 port=3000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后， 我们需要做的是创建数据库，打开另一个终端，运行：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ docker-compose run web rake db:create

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 web 应用已经开始在你的 docker 守护进程里面监听着 3000 端口了。</p><h1 id="_09-docker-compose-实战-wordpress" tabindex="-1"><a class="header-anchor" href="#_09-docker-compose-实战-wordpress" aria-hidden="true">#</a> 09-Docker Compose 实战 WordPress</h1><p>本小节内容适合<code>PHP</code>开发人员阅读。</p><p><code>Compose</code>可以很便捷的让<code>Wordpress</code>运行在一个独立的环境中。</p><h2 id="创建空文件夹" tabindex="-1"><a class="header-anchor" href="#创建空文件夹" aria-hidden="true">#</a> 创建空文件夹</h2><p>假设新建一个名为<code>wordpress</code>的文件夹，然后进入这个文件夹。</p><h2 id="创建-docker-compose-yml-文件" tabindex="-1"><a class="header-anchor" href="#创建-docker-compose-yml-文件" aria-hidden="true">#</a> 创建 <code>docker-compose.yml</code> 文件</h2><p><code>docker-compose.yml</code>文件将开启一个<code>wordpress</code>服务和一个独立的<code>MySQL</code>实例：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &quot;3&quot;
services:

   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     image: wordpress:latest
     ports:
       - &quot;8000:80&quot;
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
volumes:
    db_data:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建并运行项目" tabindex="-1"><a class="header-anchor" href="#构建并运行项目" aria-hidden="true">#</a> 构建并运行项目</h2><p>运行<code>docker-compose up -d</code>Compose 就会拉取镜像再创建我们所需要的镜像，然后启动<code>wordpress</code>和数据库容器。 接着浏览器访问<code>127.0.0.1:8000</code>端口就能看到<code>WordPress</code>安装界面了。</p>`,41);function R(I,N){const i=l("ExternalLinkIcon");return c(),o("div",null,[e("div",u,[v,m,e("p",null,[e("a",t,[d("课程视频"),n(i)]),d(),p])]),b,e("p",null,[d("其代码目前在 "),e("a",h,[d("https://github.com/docker/compose"),n(i)]),d(" 上开源。")]),g,e("p",null,[d("其代码目前在"),e("a",P,[d("https://github.com/docker/compose"),n(i)]),d("上开源。")]),k,e("p",null,[d("在 Linux 上的也安装十分简单，从"),e("a",_,[d("官方 GitHub Release"),n(i)]),d("处直接下载编译好的二进制文件即可。")]),x,e("p",null,[d("如果变量名称或者值中用到"),f,d("等表达"),e("a",q,[d("布尔"),n(i)]),d("含义的词汇，最好放到引号里，避免 YAML 自动解析某些内容为对应的布尔语义。这些特定词汇，包括")]),E,e("p",null,[d("以上内容指定应用将使用安装了 Python 以及必要依赖包的镜像。更多关于如何编写"),D,d("文件的信息可以查看 [镜像创建](../image/create.md#利用 Dockerfile 来创建镜像) 和"),e("a",w,[d("Dockerfile 使用"),n(i)]),d("。")]),y,e("p",null,[d("这些信息是在"),e("a",O,[d("postgres"),n(i)]),d("镜像固定设置好的。然后，运行"),S,d("：")]),C])}const T=s(r,[["render",R],["__file","DockerCompose.html.vue"]]);export{T as default};
