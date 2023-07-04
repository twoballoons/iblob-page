import{_ as d,r as s,o as l,c,a as e,b as i,d as r,e as a}from"./app-f078eaf8.js";const t={},o={class:"custom-container tip"},u=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),v=e("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://space.bilibili.com/31137138",target:"_blank",rel:"noopener noreferrer"},m=e("h1",{id:"_01-安装-docker-registry-私服",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_01-安装-docker-registry-私服","aria-hidden":"true"},"#"),i(" 01-安装 Docker Registry 私服")],-1),g=e("h2",{id:"本节视频",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本节视频","aria-hidden":"true"},"#"),i(" 本节视频")],-1),b={href:"https://www.bilibili.com/video/av27624569",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),i(" 概述")],-1),_=e("p",null,"官方的 Docker Hub 是一个用于管理公共镜像的地方，我们可以在上面找到我们想要的镜像，也可以把我们自己的镜像推送上去。但是，有时候我们的服务器无法访问互联网，或者你不希望将自己的镜像放到公网当中，那么你就需要 Docker Registry，它可以用来存储和管理自己的镜像。",-1),k=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),i(" 安装")],-1),f={href:"https://www.funtl.com/2018/05/13/docker/Docker-%E7%A7%81%E6%9C%89%E4%BB%93%E5%BA%93/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"docker-compose",-1),y=a(`<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
  registry:
    image: registry
    restart: always
    container_name: registry
    ports:
      - 5000:5000
    volumes:
      - /usr/local/docker/registry/data:/var/lib/registry

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>启动成功后需要测试服务端是否能够正常提供服务，有两种方式：</p><ul><li>浏览器端访问</li></ul><p>http://ip:5000/v2/</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1520955730_2.png" alt="image"></p><ul><li>终端访问</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>curl http://ip:5000/v2/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picgo.xingenhi.cn//typoraLusifer1520955773_2.png" alt="image"></p><h1 id="_02-配置-docker-registry-客户端" tabindex="-1"><a class="header-anchor" href="#_02-配置-docker-registry-客户端" aria-hidden="true">#</a> 02-配置 Docker Registry 客户端</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>`,11),P={href:"https://www.bilibili.com/video/av27624593",target:"_blank",rel:"noopener noreferrer"},w=a(`<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p>我们的教学案例使用的是 Ubuntu Server 16.04 LTS 版本，属于 <code>systemd</code> 系统，需要在 <code>/etc/docker/daemon.json</code> 中增加如下内容（如果文件不存在请新建该文件）</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>{
  &quot;registry-mirrors&quot;: [
    &quot;https://registry.docker-cn.com&quot;
  ],
  &quot;insecure-registries&quot;: [
    &quot;ip:5000&quot;
  ]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：该文件必须符合 json 规范，否则 Docker 将不能启动。</p></blockquote><p>之后重新启动服务。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>$ sudo systemctl daemon-reload
$ sudo systemctl restart docker

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查客户端配置是否生效" tabindex="-1"><a class="header-anchor" href="#检查客户端配置是否生效" aria-hidden="true">#</a> 检查客户端配置是否生效</h2><p>使用 <code>docker info</code> 命令手动检查，如果从配置中看到如下内容，说明配置成功（192.168.75.133 为教学案例 IP）</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Insecure Registries:
 192.168.75.133:5000
 127.0.0.0/8

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试镜像上传" tabindex="-1"><a class="header-anchor" href="#测试镜像上传" aria-hidden="true">#</a> 测试镜像上传</h2><p>我们以 Nginx 为例测试镜像上传功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code> 拉取一个镜像
docker pull nginx

 查看全部镜像
docker images

 标记本地镜像并指向目标仓库（ip:port/image_name:tag，该格式为标记版本号）
docker tag nginx 192.168.75.133:5000/nginx

 提交镜像到仓库
docker push 192.168.75.133:5000/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看全部镜像" tabindex="-1"><a class="header-anchor" href="#查看全部镜像" aria-hidden="true">#</a> 查看全部镜像</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>curl -XGET http://192.168.75.133:5000/v2/_catalog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="查看指定镜像" tabindex="-1"><a class="header-anchor" href="#查看指定镜像" aria-hidden="true">#</a> 查看指定镜像</h2><p>以 Nginx 为例，查看已提交的列表</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>curl -XGET http://192.168.75.133:5000/v2/nginx/tags/list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试拉取镜像" tabindex="-1"><a class="header-anchor" href="#测试拉取镜像" aria-hidden="true">#</a> 测试拉取镜像</h2><ul><li>先删除镜像</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker rmi nginx
docker rmi 192.168.75.133:5000/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再拉取镜像</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>docker pull 192.168.75.133:5000/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_03-部署-docker-registry-webui" tabindex="-1"><a class="header-anchor" href="#_03-部署-docker-registry-webui" aria-hidden="true">#</a> 03-部署 Docker Registry WebUI</h1><p>私服安装成功后就可以使用 docker 命令行工具对 registry 做各种操作了。然而不太方便的地方是不能直观的查看 registry 中的资源情况。如果可以使用 UI 工具管理镜像就更好了。这里介绍两个 Docker Registry WebUI 工具</p>`,24),R={href:"https://github.com/kwk/docker-registry-frontend",target:"_blank",rel:"noopener noreferrer"},E={href:"https://hub.docker.com/r/hyper/docker-registry-web/",target:"_blank",rel:"noopener noreferrer"},D=a(`<p>两个工具的功能和界面都差不多，我们以 <code>docker-registry-fontend</code> 为例讲解</p><h2 id="docker-registry-frontend" tabindex="-1"><a class="header-anchor" href="#docker-registry-frontend" aria-hidden="true">#</a> docker-registry-frontend</h2><p>我们使用 docker-compose 来安装和运行，<code>docker-compose.yml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
  frontend:
    image: konradkleine/docker-registry-frontend:v2
    ports:
      - 8080:80
    volumes:
      - ./certs/frontend.crt:/etc/apache2/server.crt:ro
      - ./certs/frontend.key:/etc/apache2/server.key:ro
    environment:
      - ENV_DOCKER_REGISTRY_HOST=192.168.75.133
      - ENV_DOCKER_REGISTRY_PORT=5000

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：请将配置文件中的主机和端口换成自己仓库的地址</p></blockquote><p>运行成功后在浏览器访问：http://192.168.75.133:5000</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1527005202.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1527005783.png" alt="image"></p><h1 id="_04-真正实现-一次构建-到处运行" tabindex="-1"><a class="header-anchor" href="#_04-真正实现-一次构建-到处运行" aria-hidden="true">#</a> 04-真正实现：一次构建，到处运行</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>`,10),q={href:"https://www.bilibili.com/video/av27624619",target:"_blank",rel:"noopener noreferrer"};function I(T,N){const n=s("ExternalLinkIcon");return l(),c("div",null,[e("div",o,[u,v,e("p",null,[e("a",h,[i("课程视频"),r(n)])])]),m,g,e("ul",null,[e("li",null,[e("a",b,[i("【视频】平台即服务-Registry-简介与安装"),r(n)])])]),p,_,k,e("p",null,[i("在之前的 "),e("a",f,[i("Docker 私有仓库"),r(n)]),i(" 章节中已经提到过如何配置和使用容器运行私有仓库，这里我们使用 "),x,i(" 来安装，配置如下：")]),y,e("ul",null,[e("li",null,[e("a",P,[i("【视频】平台即服务-Registry-配置 WebUI 与客户端"),r(n)])])]),w,e("ul",null,[e("li",null,[e("a",R,[i("docker-registry-frontend"),r(n)])]),e("li",null,[e("a",E,[i("docker-registry-web"),r(n)])])]),D,e("ul",null,[e("li",null,[e("a",q,[i("【视频】Docker-真正实现：一次构建，到处运行"),r(n)])])])])}const L=d(t,[["render",I],["__file","DockerRegistry.html.vue"]]);export{L as default};
