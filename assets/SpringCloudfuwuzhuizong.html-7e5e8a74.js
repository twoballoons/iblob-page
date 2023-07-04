import{_ as l,r as d,o as a,c as t,a as i,b as n,d as r,e as s}from"./app-f078eaf8.js";const c={},v=i("h1",{id:"_01-服务链路追踪",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_01-服务链路追踪","aria-hidden":"true"},"#"),n(" 01-服务链路追踪")],-1),o=i("h2",{id:"本节视频",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#本节视频","aria-hidden":"true"},"#"),n(" 本节视频")],-1),p={href:"https://www.bilibili.com/video/av28096085/",target:"_blank",rel:"noopener noreferrer"},g=s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>这篇文章主要讲解服务追踪组件 ZipKin。</p><h2 id="zipkin-简介" tabindex="-1"><a class="header-anchor" href="#zipkin-简介" aria-hidden="true">#</a> ZipKin 简介</h2><p>ZipKin 是一个开放源代码的分布式跟踪系统，由 Twitter 公司开源，它致力于收集服务的定时数据，以解决微服务架构中的延迟问题，包括数据的收集、存储、查找和展现。它的理论模型来自于 Google Dapper 论文。</p><p>每个服务向 ZipKin 报告计时数据，ZipKin 会根据调用关系通过 ZipKin UI 生成依赖关系图，显示了多少跟踪请求通过每个服务，该系统让开发者可通过一个 Web 前端轻松的收集和分析数据，例如用户每次请求服务的处理时间等，可方便的监测系统中存在的瓶颈。</p><h2 id="服务追踪说明" tabindex="-1"><a class="header-anchor" href="#服务追踪说明" aria-hidden="true">#</a> 服务追踪说明</h2><p>微服务架构是通过业务来划分服务的，使用 REST 调用。对外暴露的一个接口，可能需要很多个服务协同才能完成这个接口功能，如果链路上任何一个服务出现问题或者网络超时，都会形成导致接口调用失败。随着业务的不断扩张，服务之间互相调用会越来越复杂。</p><p><img src="https://picgo.xingenhi.cn//typora2279594-dd72907e82f89fd6.png" alt="image"></p><p>随着服务的越来越多，对调用链的分析会越来越复杂。它们之间的调用关系也许如下：</p><p><img src="https://picgo.xingenhi.cn//typora2279594-4b7d1b6abe595390.png" alt="image"></p><h2 id="术语解释" tabindex="-1"><a class="header-anchor" href="#术语解释" aria-hidden="true">#</a> 术语解释</h2><ul><li>Span：基本工作单元，例如，在一个新建的 Span 中发送一个 RPC 等同于发送一个回应请求给 RPC，Span 通过一个 64 位 ID 唯一标识，Trace 以另一个 64 位 ID 表示。</li><li>Trace：一系列 Spans 组成的一个树状结构，例如，如果你正在运行一个分布式大数据工程，你可能需要创建一个 Trace。</li><li>Annotation：用来即使记录一个事件的存在，一些核心 Annotations 用来定义一个请求的开始和结束</li><li>cs：Client Sent，客户端发起一个请求，这个 Annotation 描述了这个 Span 的开始</li><li>sr：Server Received，服务端获得请求并准备开始处理它，<strong>如果将其 sr 减去 cs 时间戳便可得到网络延迟</strong></li><li>ss：Server Sent 表明请求处理的完成(当请求返回客户端)，<strong>如果 ss 减去 sr 时间戳便可得到服务端需要的处理请求时间</strong></li><li>cr：Client Received 表明 Span 的结束，客户端成功接收到服务端的回复，<strong>如果 cr 减去 cs 时间戳便可得到客户端从服务端获取回复的所有所需时间</strong></li></ul><p>将 Span 和 Trace 在一个系统中使用 Zipkin 注解的过程图形化：</p><p><img src="https://picgo.xingenhi.cn//typora2279594-4b865f2a2c271def.png" alt="image"></p><h2 id="创建-zipkin-服务端" tabindex="-1"><a class="header-anchor" href="#创建-zipkin-服务端" aria-hidden="true">#</a> 创建 ZipKin 服务端</h2><p>创建一个工程名为 <code>hello-spring-cloud-zipkin</code> 的项目，<code>pom.xml</code> 文件如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-zipkin&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-zipkin&lt;/name&gt;
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
            &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;
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
            &lt;groupId&gt;io.zipkin.java&lt;/groupId&gt;
            &lt;artifactId&gt;zipkin&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;io.zipkin.java&lt;/groupId&gt;
            &lt;artifactId&gt;zipkin-server&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;io.zipkin.java&lt;/groupId&gt;
            &lt;artifactId&gt;zipkin-autoconfigure-ui&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.zipkin.ZipKinApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了 3 个依赖，<code>io.zipkin.java:zipkin</code>、<code>io.zipkin.java:zipkin-server</code>、<code>io.zipkin.java:zipkin-autoconfigure-ui</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.zipkin.java&lt;/groupId&gt;
    &lt;artifactId&gt;zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.zipkin.java&lt;/groupId&gt;
    &lt;artifactId&gt;zipkin-server&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;io.zipkin.java&lt;/groupId&gt;
    &lt;artifactId&gt;zipkin-autoconfigure-ui&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意版本号为：<code>2.10.1</code>，这里没写版本号是因为我已将版本号托管到 <code>dependencies</code> 项目中</p><h2 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h2><p>通过 <code>@EnableZipkinServer</code> 注解开启 Zipkin Server 功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.zipkin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import zipkin.server.internal.EnableZipkinServer;

@SpringBootApplication
@EnableEurekaClient
@EnableZipkinServer
public class ZipKinApplication {
    public static void main(String[] args) {
        SpringApplication.run(ZipKinApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h2><p>设置端口号为：<code>9411</code>，该端口号为 Zipkin Server 的默认端口号</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-zipkin

server:
  port: 9411

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

management:
  metrics:
    web:
      server:
        auto-time-requests: false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="追踪服务" tabindex="-1"><a class="header-anchor" href="#追踪服务" aria-hidden="true">#</a> 追踪服务</h2><p>在 <strong>所有需要被追踪的项目（就当前教程而言，除了 dependencies 项目外都需要被追踪，包括 Eureka Server）</strong> 中增加 <code>spring-cloud-starter-zipkin</code> 依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-zipkin&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这些项目的 <code>application.yml</code> 配置文件中增加 Zipkin Server 的地址即可</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  zipkin:
    base-url: http://localhost:9411

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试追踪" tabindex="-1"><a class="header-anchor" href="#测试追踪" aria-hidden="true">#</a> 测试追踪</h2><p>启动全部项目，打开浏览器访问：http://localhost:9411/ 会出现以下界面：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer2018060105410001.png" alt="image"></p><p><strong>刷新之前项目中的全部测试接口（刷多几次）</strong></p><p>点击 <code>Find a trace</code>，可以看到具体服务相互调用的数据</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer2018060105410002.png" alt="image"></p><p>点击 <code>Dependencies</code>，可以发现服务的依赖关系</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer2018060105410003.png" alt="image"></p><p>至此就代表 ZipKin 配置成功</p>`,40);function u(m,b){const e=d("ExternalLinkIcon");return a(),t("div",null,[v,o,i("ul",null,[i("li",null,[i("a",p,[n("【视频】微服务框架-SpringCloud-服务链路追踪"),r(e)])])]),g])}const f=l(c,[["render",u],["__file","SpringCloudfuwuzhuizong.html.vue"]]);export{f as default};
