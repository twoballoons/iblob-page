import{_ as a,r as d,o as r,c as t,a as e,b as i,d as s,e as l}from"./app-f078eaf8.js";const o={},u=e("h1",{id:"_01-什么是-nexus",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_01-什么是-nexus","aria-hidden":"true"},"#"),i(" 01-什么是 Nexus")],-1),c=e("h2",{id:"本节视频",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本节视频","aria-hidden":"true"},"#"),i(" 本节视频")],-1),v={href:"https://www.bilibili.com/video/av27624502",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Nexus 是一个强大的仓库管理器，极大地简化了内部仓库的维护和外部仓库的访问。</p><p>2016 年 4 月 6 日 Nexus 3.0 版本发布，相较 2.x 版本有了很大的改变：</p><ul><li>对低层代码进行了大规模重构，提升性能，增加可扩展性以及改善用户体验。</li><li>升级界面，极大的简化了用户界面的操作和管理。</li><li>提供新的安装包，让部署更加简单。</li><li>增加对 Docker, NeGet, npm, Bower 的支持。</li><li>提供新的管理接口，以及增强对自动任务的管理。</li></ul><h1 id="_02-基于-docker-安装-nexus" tabindex="-1"><a class="header-anchor" href="#_02-基于-docker-安装-nexus" aria-hidden="true">#</a> 02-基于 Docker 安装 Nexus</h1><p>我们使用 Docker 来安装和运行 Nexus，<code>docker-compose.yml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
  nexus:
    restart: always
    image: sonatype/nexus3
    container_name: nexus
    ports:
      - 8081:8081
    volumes:
      - /usr/local/docker/nexus/data:/nexus-data

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>注：</em> 启动时如果出现权限问题可以使用：<code>chmod 777 /usr/local/docker/nexus/data</code> 赋予数据卷目录可读可写的权限</p><h2 id="登录控制台验证安装" tabindex="-1"><a class="header-anchor" href="#登录控制台验证安装" aria-hidden="true">#</a> 登录控制台验证安装</h2><p>地址：http://ip:port/ 用户名：admin 密码：admin123</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1521047001.png" alt="image"></p><h1 id="_03-maven-仓库介绍" tabindex="-1"><a class="header-anchor" href="#_03-maven-仓库介绍" aria-hidden="true">#</a> 03-Maven 仓库介绍</h1><h2 id="代理仓库-proxy-repository" tabindex="-1"><a class="header-anchor" href="#代理仓库-proxy-repository" aria-hidden="true">#</a> 代理仓库（Proxy Repository）</h2><p>意为第三方仓库，如：</p><ul><li>maven-central</li><li>nuget.org-proxy</li></ul><p>版本策略（Version Policy）：</p><ul><li>Release: 正式版本</li><li>Snapshot: 快照版本</li><li>Mixed: 混合模式</li></ul><p>布局策略（Layout Policy）：</p><ul><li>Strict：严格</li><li>Permissive：宽松</li></ul><h2 id="宿主仓库-hosted-repository" tabindex="-1"><a class="header-anchor" href="#宿主仓库-hosted-repository" aria-hidden="true">#</a> 宿主仓库（Hosted Repository）</h2><p>存储本地上传的组件和资源的，如：</p><ul><li>maven-releases</li><li>maven-snapshots</li><li>nuget-hosted</li></ul><p>部署策略（Deployment Policy）：</p><ul><li>Allow Redeploy：允许重新部署</li><li>Disable Redeploy：禁止重新部署</li><li>Read-Only：只读</li></ul><h2 id="仓库组-repository-group" tabindex="-1"><a class="header-anchor" href="#仓库组-repository-group" aria-hidden="true">#</a> 仓库组（Repository Group）</h2><p>通常包含了多个代理仓库和宿主仓库，在项目中只要引入仓库组就可以下载到代理仓库和宿主仓库中的包，如：</p><ul><li>maven-public</li><li>nuget-group</li></ul><h1 id="_04-在项目中使用-maven-私服" tabindex="-1"><a class="header-anchor" href="#_04-在项目中使用-maven-私服" aria-hidden="true">#</a> 04-在项目中使用 Maven 私服</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>`,29),p={href:"https://www.bilibili.com/video/av27624534",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="配置认证信息" tabindex="-1"><a class="header-anchor" href="#配置认证信息" aria-hidden="true">#</a> 配置认证信息</h2><p>在 Maven <code>settings.xml</code> 中添加 Nexus 认证信息(<code>servers</code> 节点下)：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;server&gt;
  &lt;id&gt;nexus-releases&lt;/id&gt;
  &lt;username&gt;admin&lt;/username&gt;
  &lt;password&gt;admin123&lt;/password&gt;
&lt;/server&gt;

&lt;server&gt;
  &lt;id&gt;nexus-snapshots&lt;/id&gt;
  &lt;username&gt;admin&lt;/username&gt;
  &lt;password&gt;admin123&lt;/password&gt;
&lt;/server&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="snapshots-与-releases-的区别" tabindex="-1"><a class="header-anchor" href="#snapshots-与-releases-的区别" aria-hidden="true">#</a> Snapshots 与 Releases 的区别</h3><ul><li>nexus-releases: 用于发布 Release 版本</li><li>nexus-snapshots: 用于发布 Snapshot 版本（快照版）</li></ul><p>Release 版本与 Snapshot 定义如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Release: 1.0.0/1.0.0-RELEASE
Snapshot: 1.0.0-SNAPSHOT

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在项目 <code>pom.xml</code> 中设置的版本号添加 <code>SNAPSHOT</code> 标识的都会发布为 <code>SNAPSHOT</code> 版本，没有 <code>SNAPSHOT</code> 标识的都会发布为 <code>RELEASE</code> 版本。</li><li><code>SNAPSHOT</code> 版本会自动加一个时间作为标识，如：<code>1.0.0-SNAPSHOT</code> 发布后为变成 <code>1.0.0-SNAPSHOT-20180522.123456-1.jar</code></li></ul><h2 id="配置自动化部署" tabindex="-1"><a class="header-anchor" href="#配置自动化部署" aria-hidden="true">#</a> 配置自动化部署</h2><p>在 <code>pom.xml</code> 中添加如下代码：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;distributionManagement&gt;  
  &lt;repository&gt;  
    &lt;id&gt;nexus-releases&lt;/id&gt;  
    &lt;name&gt;Nexus Release Repository&lt;/name&gt;  
    &lt;url&gt;http://127.0.0.1:8081/repository/maven-releases/&lt;/url&gt;  
  &lt;/repository&gt;  
  &lt;snapshotRepository&gt;  
    &lt;id&gt;nexus-snapshots&lt;/id&gt;  
    &lt;name&gt;Nexus Snapshot Repository&lt;/name&gt;  
    &lt;url&gt;http://127.0.0.1:8081/repository/maven-snapshots/&lt;/url&gt;  
  &lt;/snapshotRepository&gt;  
&lt;/distributionManagement&gt; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><ul><li>ID 名称必须要与 <code>settings.xml</code> 中 Servers 配置的 ID 名称保持一致。</li><li>项目版本号中有 <code>SNAPSHOT</code> 标识的，会发布到 Nexus Snapshots Repository, 否则发布到 Nexus Release Repository，并根据 ID 去匹配授权账号。</li></ul><h2 id="部署到仓库" tabindex="-1"><a class="header-anchor" href="#部署到仓库" aria-hidden="true">#</a> 部署到仓库</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>mvn deploy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传第三方-jar-包" tabindex="-1"><a class="header-anchor" href="#上传第三方-jar-包" aria-hidden="true">#</a> 上传第三方 JAR 包</h2><p>Nexus 3.0 不支持页面上传，可使用 maven 命令：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code> 如第三方JAR包：aliyun-sdk-oss-2.2.3.jar
mvn deploy:deploy-file 
  -DgroupId=com.aliyun.oss 
  -DartifactId=aliyun-sdk-oss 
  -Dversion=2.2.3 
  -Dpackaging=jar 
  -Dfile=D:\\aliyun-sdk-oss-2.2.3.jar 
  -Durl=http://127.0.0.1:8081/repository/maven-3rd/ 
  -DrepositoryId=nexus-releases

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><ul><li>建议在上传第三方 JAR 包时，创建单独的第三方 JAR 包管理仓库，便于管理有维护。（maven-3rd）</li><li><code>-DrepositoryId=nexus-releases</code> 对应的是 <code>settings.xml</code> 中 Servers 配置的 ID 名称。（授权）</li></ul><h2 id="配置代理仓库" tabindex="-1"><a class="header-anchor" href="#配置代理仓库" aria-hidden="true">#</a> 配置代理仓库</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;repositories&gt;
    &lt;repository&gt;
        &lt;id&gt;nexus&lt;/id&gt;
        &lt;name&gt;Nexus Repository&lt;/name&gt;
        &lt;url&gt;http://127.0.0.1:8081/repository/maven-public/&lt;/url&gt;
        &lt;snapshots&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
        &lt;/snapshots&gt;
        &lt;releases&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
        &lt;/releases&gt;
    &lt;/repository&gt;
&lt;/repositories&gt;
&lt;pluginRepositories&gt;
    &lt;pluginRepository&gt;
        &lt;id&gt;nexus&lt;/id&gt;
        &lt;name&gt;Nexus Plugin Repository&lt;/name&gt;
        &lt;url&gt;http://127.0.0.1:8081/repository/maven-public/&lt;/url&gt;
        &lt;snapshots&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
        &lt;/snapshots&gt;
        &lt;releases&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
        &lt;/releases&gt;
    &lt;/pluginRepository&gt;
&lt;/pluginRepositories&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_00-nexus部署" tabindex="-1"><a class="header-anchor" href="#_00-nexus部署" aria-hidden="true">#</a> 00-Nexus部署</h1><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 创建存放路径
mkdir -vp /usr/local/docker/nexus
# 进入刚创建的路径
cd /usr/local/docker/nexus
# 创建并进入docker-compose.yml
vim /usr/local/docker/nexus/docker-compose.yml
------------------------------------------
输入：
version: &#39;3.1&#39;
services:
  nexus:
    restart: always
    image: sonatype/nexus3
    container_name: nexus
    ports:
      - 8081:8081
    volumes:
      - /usr/local/docker/nexus/data:/nexus-data
------------------------------------------
# 启动nexus
docker-compose up -d
# 访问测试
地址：http://ip:port/     用户名：admin     密码：admin123
# 登录报错：Incorrect username or password, or no permission to use the application.则解决办法：
# 进入nexus的data路径
cd /usr/local/docker/nexus/data
# 查看存放密码的文件内容
cat admin.password
复制内容（即密码）去登录，再进行一些设置就可以完美使用了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function h(g,x){const n=d("ExternalLinkIcon");return r(),t("div",null,[u,c,e("ul",null,[e("li",null,[e("a",v,[i("【视频】平台即服务-Nexus-简介与安装"),s(n)])])]),m,e("ul",null,[e("li",null,[e("a",p,[i("【视频】平台即服务-Nexus-在项目中使用 Maven 私服"),s(n)])])]),b])}const _=a(o,[["render",h],["__file","Nexus.html.vue"]]);export{_ as default};
