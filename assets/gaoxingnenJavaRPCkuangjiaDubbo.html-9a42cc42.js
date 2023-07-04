import{_ as r,r as l,o as s,c as t,a as e,b as n,d as a,e as d}from"./app-f078eaf8.js";const o={},c=d('<h1 id="_01-什么是-dubbo" tabindex="-1"><a class="header-anchor" href="#_01-什么是-dubbo" aria-hidden="true">#</a> 01-什么是 Dubbo</h1><h1 id="什么是-dubbo" tabindex="-1"><a class="header-anchor" href="#什么是-dubbo" aria-hidden="true">#</a> 什么是 Dubbo</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',3),u={href:"https://www.bilibili.com/video/av34187218/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bilibili.com/video/av34187257/",target:"_blank",rel:"noopener noreferrer"},b=d('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Apache Dubbo (incubating) |ˈdʌbəʊ| 是一款高性能、轻量级的开源 Java RPC 分布式服务框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。她最大的特点是按照分层的方式来架构，使用这种方式可以使各个层之间解耦合（或者最大限度地松耦合）。从服务模型的角度来看，Dubbo 采用的是一种非常简单的模型，要么是提供方提供服务，要么是消费方消费服务，所以基于这一点可以抽象出服务提供方（Provider）和服务消费方（Consumer）两个角色。</p><ul><li>官网：http://dubbo.apache.org/zh-cn</li><li>GitHub：https://github.com/apache/incubator-dubbo</li></ul><h1 id="_02-dubbo-的服务治理" tabindex="-1"><a class="header-anchor" href="#_02-dubbo-的服务治理" aria-hidden="true">#</a> 02-Dubbo 的服务治理</h1><h1 id="dubbo-的服务治理" tabindex="-1"><a class="header-anchor" href="#dubbo-的服务治理" aria-hidden="true">#</a> Dubbo 的服务治理</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>',6),m={href:"https://www.bilibili.com/video/av34187294/",target:"_blank",rel:"noopener noreferrer"},h=d('<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p><img src="https://picgo.xingenhi.cn//typora2062729-5f97eab81f9d55cb.png" alt="image"></p><table><thead><tr><th>特性</th><th>描述</th></tr></thead><tbody><tr><td>透明远程调用</td><td>就像调用本地方法一样调用远程方法；只需简单配置，没有任何 API 侵入</td></tr><tr><td>负载均衡机制</td><td>Client 端 LB，可在内网替代 F5 等硬件负载均衡器</td></tr><tr><td>容错重试机制</td><td>服务 Mock 数据，重试次数、超时机制等</td></tr><tr><td>自动注册发现</td><td>注册中心基于接口名查询服务提 供者的 IP 地址，并且能够平滑添加或删除服务提供者</td></tr><tr><td>性能日志监控</td><td>Monitor 统计服务的调用次调和调用时间的监控中心</td></tr><tr><td>服务治理中心</td><td>路由规则，动态配置，服务降级，访问控制，权重调整，负载均衡，等手动配置</td></tr><tr><td>自动治理中心</td><td>无，比如：熔断限流机制、自动权重调整等</td></tr></tbody></table><h1 id="_03-dubbo-的核心功能" tabindex="-1"><a class="header-anchor" href="#_03-dubbo-的核心功能" aria-hidden="true">#</a> 03-Dubbo 的核心功能</h1><h1 id="dubbo-的核心功能" tabindex="-1"><a class="header-anchor" href="#dubbo-的核心功能" aria-hidden="true">#</a> Dubbo 的核心功能</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>',6),p={href:"https://www.bilibili.com/video/av34187440/",target:"_blank",rel:"noopener noreferrer"},g=d('<h2 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h2><ul><li>Remoting：远程通讯，提供对多种 NIO 框架抽象封装，包括“同步转异步”和“请求-响应”模式的信息交换方式。</li><li>Cluster：服务框架，提供基于接口方法的透明远程过程调用，包括多协议支持，以及软负载均衡，失败容错，地址路由，动态配置等集群支持。</li><li>Registry：服务注册中心，服务自动发现: 基于注册中心目录服务，使服务消费方能动态的查找服务提供方，使地址透明，使服务提供方可以平滑增加或减少机器。</li></ul><h1 id="_04-dubbo-的组件角色" tabindex="-1"><a class="header-anchor" href="#_04-dubbo-的组件角色" aria-hidden="true">#</a> 04-Dubbo 的组件角色</h1><h1 id="dubbo-的组件角色" tabindex="-1"><a class="header-anchor" href="#dubbo-的组件角色" aria-hidden="true">#</a> Dubbo 的组件角色</h1><h2 id="本节视频-3" tabindex="-1"><a class="header-anchor" href="#本节视频-3" aria-hidden="true">#</a> 本节视频</h2>',5),f={href:"https://www.bilibili.com/video/av34187440/",target:"_blank",rel:"noopener noreferrer"},x=d('<h2 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h2><p><img src="https://picgo.xingenhi.cn//typora0419a8ea9f02f10b2433bbb3b96c9148.png" alt="image"></p><table><thead><tr><th>组件角色</th><th>说明</th></tr></thead><tbody><tr><td>Provider</td><td>暴露服务的服务提供方</td></tr><tr><td>Consumer</td><td>调用远程服务的服务消费方</td></tr><tr><td>Registry</td><td>服务注册与发现的注册中心</td></tr><tr><td>Monitor</td><td>统计服务的调用次调和调用时间的监控中心</td></tr><tr><td>Container</td><td>服务运行容器</td></tr></tbody></table><p><strong>调用关系说明：</strong></p><ul><li>服务容器 <code>Container</code> 负责启动，加载，运行服务提供者。</li><li>服务提供者 <code>Provider</code> 在启动时，向注册中心注册自己提供的服务。</li><li>服务消费者 <code>Consumer</code> 在启动时，向注册中心订阅自己所需的服务。</li><li>注册中心 <code>Registry</code> 返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。</li><li>服务消费者 <code>Consumer</code>，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。</li><li>服务消费者 <code>Consumer</code> 和提供者 <code>Provider</code>，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心 <code>Monitor</code>。</li></ul><h1 id="_05-dubbo-admin-管理控制台" tabindex="-1"><a class="header-anchor" href="#_05-dubbo-admin-管理控制台" aria-hidden="true">#</a> 05-Dubbo Admin 管理控制台</h1><h2 id="本节视频-4" tabindex="-1"><a class="header-anchor" href="#本节视频-4" aria-hidden="true">#</a> 本节视频</h2>',7),y={href:"https://www.bilibili.com/video/av34187485/",target:"_blank",rel:"noopener noreferrer"},S=d(`<h2 id="概述-4" tabindex="-1"><a class="header-anchor" href="#概述-4" aria-hidden="true">#</a> 概述</h2><p>管理控制台为内部裁剪版本，开源部分主要包含：路由规则，动态配置，服务降级，访问控制，权重调整，负载均衡，等管理功能。</p><p>GitHub：https://github.com/apache/incubator-dubbo-ops</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181019141753.png" alt="image"></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 打包
mvn clean package

# 运行
mvn --projects dubbo-admin-backend spring-boot:run

# 浏览
http://localhost:8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="遇到的问题处理" tabindex="-1"><a class="header-anchor" href="#遇到的问题处理" aria-hidden="true">#</a> 遇到的问题处理</h2><h3 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> NodeJS</h3><ul><li>现象：使用 <code>mvn clean package</code> 构建 DubboAdmin 控制台时会出现 <code>npm install</code> 操作</li><li>解决：新版控制台已改为前后分离模式，前端采用 Vue.js 开发，故需要 NodeJS 支持，请自行安装（运行到此处时会自动下载安装）。官网地址：http://nodejs.cn/</li><li>其他：配置淘宝镜像加速。官网地址：http://npm.taobao.org/</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 安装 cnpm 命令行工具
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装模块
cnpm install [name]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="will-not-attempt-to-authenticate-using-sasl-unknown-error" tabindex="-1"><a class="header-anchor" href="#will-not-attempt-to-authenticate-using-sasl-unknown-error" aria-hidden="true">#</a> Will not attempt to authenticate using SASL (unknown error)</h3><ul><li>现象：使用 <code>mvn --projects dubbo-admin-backend spring-boot:run</code> 启动 DubboAdmin 控制台时，控制台日志中出现 <code>Will not attempt to authenticate using SASL (unknown error)</code> 提示</li><li>解决：修改 <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code> 文件，增加 <code>192.168.10.131 ubuntu16</code> 即可解决</li></ul><p><strong>注意：</strong> 此处的 <code>192.168.10.131</code> 为 Zookeeper 地址</p><h3 id="两处-npm-warn" tabindex="-1"><a class="header-anchor" href="#两处-npm-warn" aria-hidden="true">#</a> 两处 npm WARN</h3><ul><li>现象：使用 <code>mvn clean package</code> 构建 DubboAdmin 控制台时会出现 <code>npm install</code> 操作，此时还会出现两处警告，分别为</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\\fsevents)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {&quot;os&quot;:&quot;darwin&quot;,&quot;arch&quot;:&quot;any&quot;} (current: {&quot;os&quot;:&quot;win32&quot;,&quot;arch&quot;:&quot;x64&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>解决：从警告说明中可以看出，<code>fsevents</code> 模块用于 <code>{&quot;os&quot;:&quot;darwin&quot;,&quot;arch&quot;:&quot;any&quot;}</code> Mac 系统，当前系统为 <code>(current: {&quot;os&quot;:&quot;win32&quot;,&quot;arch&quot;:&quot;x64&quot;})</code> Windows 系统，不予理会即可</li></ul><h1 id="_06-第一个-dubbo-应用程序" tabindex="-1"><a class="header-anchor" href="#_06-第一个-dubbo-应用程序" aria-hidden="true">#</a> 06-第一个 Dubbo 应用程序</h1><h1 id="第一个-dubbo-应用程序" tabindex="-1"><a class="header-anchor" href="#第一个-dubbo-应用程序" aria-hidden="true">#</a> 第一个 Dubbo 应用程序</h1><h2 id="本节视频-5" tabindex="-1"><a class="header-anchor" href="#本节视频-5" aria-hidden="true">#</a> 本节视频</h2>`,20),P={href:"https://www.bilibili.com/video/av34406501/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.bilibili.com/video/av34406576/",target:"_blank",rel:"noopener noreferrer"},q=d(`<h2 id="概述-5" tabindex="-1"><a class="header-anchor" href="#概述-5" aria-hidden="true">#</a> 概述</h2><p><img src="https://picgo.xingenhi.cn//typora0419a8ea9f02f10b2433bbb3b96c9148_2.png" alt="image"></p><h2 id="创建服务接口项目" tabindex="-1"><a class="header-anchor" href="#创建服务接口项目" aria-hidden="true">#</a> 创建服务接口项目</h2><p>创建一个名为 <code>hello-dubbo-service-user-api</code> 的项目，该项目只负责<strong>定义接口</strong></p><h3 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> POM</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot;
         xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.funtl&lt;/groupId&gt;
    &lt;artifactId&gt;hello-dubbo-service-user-api&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;/properties&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义服务接口" tabindex="-1"><a class="header-anchor" href="#定义服务接口" aria-hidden="true">#</a> 定义服务接口</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.api;

public interface UserService {
    String sayHi();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建服务提供者项目" tabindex="-1"><a class="header-anchor" href="#创建服务提供者项目" aria-hidden="true">#</a> 创建服务提供者项目</h2><p>创建一个名为 <code>hello-dubbo-service-user-provider</code> 的项目，该项目主要用于实现接口</p><h3 id="pom-1" tabindex="-1"><a class="header-anchor" href="#pom-1" aria-hidden="true">#</a> POM</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.funtl&lt;/groupId&gt;
    &lt;artifactId&gt;hello-dubbo-service-user-provider&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-dubbo-service-user-provider&lt;/name&gt;
    &lt;description&gt;Demo project for Spring Boot&lt;/description&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.0.6.RELEASE&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;

    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;
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

        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.boot&lt;/groupId&gt;
            &lt;artifactId&gt;dubbo-spring-boot-starter&lt;/artifactId&gt;
            &lt;version&gt;0.2.0&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.boot&lt;/groupId&gt;
            &lt;artifactId&gt;dubbo-spring-boot-actuator&lt;/artifactId&gt;
            &lt;version&gt;0.2.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.funtl&lt;/groupId&gt;
            &lt;artifactId&gt;hello-dubbo-service-user-api&lt;/artifactId&gt;
            &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.dubbo.service.user.provider.HelloDubboServiceUserProviderApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了以下依赖：</p><ul><li><code>com.alibaba.boot:dubbo-spring-boot-starter:0.2.0</code>：Dubbo Starter，0.2.0 版本支持 Spring Boot 2.x，是一个长期维护的版本。注：0.1.0 版本已经不推荐使用了，是个短期维护的版本，如果你还在用旧版，请大家尽快升级。</li><li><code>com.alibaba.boot:dubbo-spring-boot-actuator:0.2.0</code>：Dubbo 的服务状态检查</li><li><code>com.funtl:hello-dubbo-service-user-api:1.0.0-SNAPSHOT</code>：刚才创建的接口项目，如果无法依赖别忘记先 <code>mvn clean install</code> 到本地仓库。</li></ul><h3 id="通过-service-注解实现服务提供方" tabindex="-1"><a class="header-anchor" href="#通过-service-注解实现服务提供方" aria-hidden="true">#</a> 通过 <code>@Service</code> 注解实现服务提供方</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.provider.api.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.funtl.hello.dubbo.service.user.api.UserService;

@Service(version = &quot;\${user.service.version}&quot;)
public class UserServiceImpl implements UserService {
    @Override
    public String sayHi() {
        return &quot;Hello Dubbo&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.provider;

import com.alibaba.dubbo.container.Main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloDubboServiceUserProviderApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloDubboServiceUserProviderApplication.class, args);
        // 启动 Provider 容器，注意这里的 Main 是 com.alibaba.dubbo.container 包下的
        Main.main(args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># Spring boot application
spring:
  application:
    name: hello-dubbo-service-user-provider

# UserService service version
user:
  service:
    version: 1.0.0

# Dubbo Config properties
dubbo:
  ## Base packages to scan Dubbo Component：@com.alibaba.dubbo.config.annotation.Service
  scan:
    basePackages: com.funtl.hello.dubbo.service.user.provider.api
  ## ApplicationConfig Bean
  application:
    id: hello-dubbo-service-user-provider
    name: hello-dubbo-service-user-provider
    qos-port: 22222
    qos-enable: true
  ## ProtocolConfig Bean
  protocol:
    id: dubbo
    name: dubbo
    port: 12345
    status: server
  ## RegistryConfig Bean
  registry:
    id: zookeeper
    address: zookeeper://192.168.10.131:2181?backup=192.168.10.131:2182,192.168.10.131:2183

# Enables Dubbo All Endpoints
management:
  endpoint:
    dubbo:
      enabled: true
    dubbo-shutdown:
      enabled: true
    dubbo-configs:
      enabled: true
    dubbo-services:
      enabled: true
    dubbo-references:
      enabled: true
    dubbo-properties:
      enabled: true
  # Dubbo Health
  health:
    dubbo:
      status:
        ## StatusChecker Name defaults (default : &quot;memory&quot;, &quot;load&quot; )
        defaults: memory
        ## StatusChecker Name extras (default : empty )
        extras: load,threadpool

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建服务消费者项目" tabindex="-1"><a class="header-anchor" href="#创建服务消费者项目" aria-hidden="true">#</a> 创建服务消费者项目</h2><p>创建一个名为 <code>hello-dubbo-service-user-consumer</code> 的项目，该项目用于消费接口（调用接口）</p><h3 id="pom-2" tabindex="-1"><a class="header-anchor" href="#pom-2" aria-hidden="true">#</a> POM</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;groupId&gt;com.funtl&lt;/groupId&gt;
    &lt;artifactId&gt;hello-dubbo-service-user-consumer&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-dubbo-service-user-consumer&lt;/name&gt;
    &lt;description&gt;Demo project for Spring Boot&lt;/description&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.0.6.RELEASE&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;

    &lt;properties&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
    &lt;/properties&gt;

    &lt;dependencies&gt;
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

        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.boot&lt;/groupId&gt;
            &lt;artifactId&gt;dubbo-spring-boot-starter&lt;/artifactId&gt;
            &lt;version&gt;0.2.0&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;com.alibaba.boot&lt;/groupId&gt;
            &lt;artifactId&gt;dubbo-spring-boot-actuator&lt;/artifactId&gt;
            &lt;version&gt;0.2.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;com.funtl&lt;/groupId&gt;
            &lt;artifactId&gt;hello-dubbo-service-user-api&lt;/artifactId&gt;
            &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.dubbo.service.user.consumer.HelloDubboServiceUserConsumerApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过-reference-注入-userservice" tabindex="-1"><a class="header-anchor" href="#通过-reference-注入-userservice" aria-hidden="true">#</a> 通过 <code>@Reference</code> 注入 <code>UserService</code></h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.consumer.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.funtl.hello.dubbo.service.user.api.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Reference(version = &quot;\${user.service.version}&quot;)
    private UserService userService;

    @RequestMapping(value = &quot;hi&quot;)
    public String sayHi() {
        return userService.sayHi();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-1" tabindex="-1"><a class="header-anchor" href="#application-1" aria-hidden="true">#</a> Application</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloDubboServiceUserConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloDubboServiceUserConsumerApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-1" tabindex="-1"><a class="header-anchor" href="#application-yml-1" aria-hidden="true">#</a> application.yml</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># Spring boot application
spring:
  application:
    name: hello-dubbo-service-user-consumer
server:
  port: 9090

# UserService service version
user:
  service:
    version: 1.0.0

# Dubbo Config properties
dubbo:
  scan:
    basePackages: com.funtl.hello.dubbo.service.user.consumer.controller
  ## ApplicationConfig Bean
  application:
    id: hello-dubbo-service-user-consumer
    name: hello-dubbo-service-user-consumer
  ## RegistryConfig Bean
  registry:
    id: zookeeper
    address: zookeeper://192.168.10.131:2181?backup=192.168.10.131:2182,192.168.10.131:2183

# Dubbo Endpoint (default status is disable)
endpoints:
  dubbo:
    enabled: true

management:
  server:
    port: 9091
  # Dubbo Health
  health:
    dubbo:
      status:
        ## StatusChecker Name defaults (default : &quot;memory&quot;, &quot;load&quot; )
        defaults: memory
  # Enables Dubbo All Endpoints
  endpoint:
    dubbo:
      enabled: true
    dubbo-shutdown:
      enabled: true
    dubbo-configs:
      enabled: true
    dubbo-services:
      enabled: true
    dubbo-references:
      enabled: true
    dubbo-properties:
      enabled: true
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-dubbo-admin-控制台" tabindex="-1"><a class="header-anchor" href="#启动-dubbo-admin-控制台" aria-hidden="true">#</a> 启动 Dubbo Admin 控制台</h2><p>查看是否成功注册服务，效果图如下：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181022010246.png" alt="image"></p><h1 id="_07-dubbo-的负载均衡" tabindex="-1"><a class="header-anchor" href="#_07-dubbo-的负载均衡" aria-hidden="true">#</a> 07-Dubbo 的负载均衡</h1><h1 id="dubbo-的负载均衡" tabindex="-1"><a class="header-anchor" href="#dubbo-的负载均衡" aria-hidden="true">#</a> Dubbo 的负载均衡</h1><h2 id="本节视频-6" tabindex="-1"><a class="header-anchor" href="#本节视频-6" aria-hidden="true">#</a> 本节视频</h2>`,36),I={href:"https://www.bilibili.com/video/av34406643/",target:"_blank",rel:"noopener noreferrer"},w=d(`<h2 id="概述-6" tabindex="-1"><a class="header-anchor" href="#概述-6" aria-hidden="true">#</a> 概述</h2><p>在集群负载均衡时，Dubbo 提供了多种均衡策略，缺省为 <code>random</code> 随机调用。</p><h2 id="负载均衡策略" tabindex="-1"><a class="header-anchor" href="#负载均衡策略" aria-hidden="true">#</a> 负载均衡策略</h2><h3 id="random-loadbalance" tabindex="-1"><a class="header-anchor" href="#random-loadbalance" aria-hidden="true">#</a> Random LoadBalance</h3><ul><li><strong>随机</strong>，按权重设置随机概率。</li><li>在一个截面上碰撞的概率高，但调用量越大分布越均匀，而且按概率使用权重后也比较均匀，有利于动态调整提供者权重。</li></ul><h3 id="roundrobin-loadbalance" tabindex="-1"><a class="header-anchor" href="#roundrobin-loadbalance" aria-hidden="true">#</a> RoundRobin LoadBalance</h3><ul><li><strong>轮询</strong>，按公约后的权重设置轮询比率。</li><li>存在慢的提供者累积请求的问题，比如：第二台机器很慢，但没挂，当请求调到第二台时就卡在那，久而久之，所有请求都卡在调到第二台上。</li></ul><h3 id="leastactive-loadbalance" tabindex="-1"><a class="header-anchor" href="#leastactive-loadbalance" aria-hidden="true">#</a> LeastActive LoadBalance</h3><ul><li><strong>最少活跃调用数</strong>，相同活跃数的随机，活跃数指调用前后计数差。</li><li>使慢的提供者收到更少请求，因为越慢的提供者的调用前后计数差会越大。</li></ul><h3 id="consistenthash-loadbalance" tabindex="-1"><a class="header-anchor" href="#consistenthash-loadbalance" aria-hidden="true">#</a> ConsistentHash LoadBalance</h3><ul><li><strong>一致性 Hash</strong>，相同参数的请求总是发到同一提供者。</li><li>当某一台提供者挂时，原本发往该提供者的请求，基于虚拟节点，平摊到其它提供者，不会引起剧烈变动。</li><li>算法参见：http://en.wikipedia.org/wiki/Consistent_hashing</li><li>缺省只对第一个参数 Hash，如果要修改，请配置 <code>&lt;dubbo:parameter key=&quot;hash.arguments&quot; value=&quot;0,1&quot; /&gt;</code></li><li>缺省用 160 份虚拟节点，如果要修改，请配置 <code>&lt;dubbo:parameter key=&quot;hash.nodes&quot; value=&quot;320&quot; /&gt;</code></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="服务端服务级别" tabindex="-1"><a class="header-anchor" href="#服务端服务级别" aria-hidden="true">#</a> 服务端服务级别</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>dubbo:
  provider:
    loadbalance: leastactive

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端服务级别" tabindex="-1"><a class="header-anchor" href="#客户端服务级别" aria-hidden="true">#</a> 客户端服务级别</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>dubbo:
  consumer:
    loadbalance: leastactive

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试负载均衡" tabindex="-1"><a class="header-anchor" href="#测试负载均衡" aria-hidden="true">#</a> 测试负载均衡</h2><h3 id="修改-userserviceimpl-代码为" tabindex="-1"><a class="header-anchor" href="#修改-userserviceimpl-代码为" aria-hidden="true">#</a> 修改 <code>UserServiceImpl</code> 代码为</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.provider.api.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.funtl.hello.dubbo.service.user.api.UserService;
import org.springframework.beans.factory.annotation.Value;

@Service(version = &quot;\${user.service.version}&quot;)
public class UserServiceImpl implements UserService {

    @Value(&quot;\${dubbo.protocol.port}&quot;)
    private String port;

    @Override
    public String sayHi() {
        return &quot;Hello Dubbo , i am from port:&quot; + port;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入了端口属性，当消费者访问时可以看出是从哪个端口请求的数据。</p><h3 id="修改负载均衡策略为轮询" tabindex="-1"><a class="header-anchor" href="#修改负载均衡策略为轮询" aria-hidden="true">#</a> 修改负载均衡策略为轮询</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>dubbo:
  provider:
    loadbalance: roundrobin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试访问" tabindex="-1"><a class="header-anchor" href="#测试访问" aria-hidden="true">#</a> 测试访问</h3><p>修改端口号并分别启动服务提供者，此时访问服务消费者：http://localhost:9090/hi</p><p>浏览器会交替显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Dubbo , i am from port:12345
Hello Dubbo , i am from port:12346

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附-在-idea-中配置一个工程启动多个实例" tabindex="-1"><a class="header-anchor" href="#附-在-idea-中配置一个工程启动多个实例" aria-hidden="true">#</a> 附：在 IDEA 中配置一个工程启动多个实例</h2><h3 id="步骤一" tabindex="-1"><a class="header-anchor" href="#步骤一" aria-hidden="true">#</a> 步骤一</h3><p>点击 <code>Run -&gt; Edit Configurations...</code></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181022015716.png" alt="image"></p><h3 id="步骤二" tabindex="-1"><a class="header-anchor" href="#步骤二" aria-hidden="true">#</a> 步骤二</h3><p>选择需要启动多实例的项目并去掉 <code>Single instance only</code> 前面的勾</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181022015801.png" alt="image"></p><h3 id="步骤三" tabindex="-1"><a class="header-anchor" href="#步骤三" aria-hidden="true">#</a> 步骤三</h3><p>通过修改 <code>application.yml</code> 配置文件的 <code>dubbo.protocol.port</code> 的端口，启动多个实例，需要多个端口，分别进行启动即可。</p><h1 id="_08-dubbo-kryo-实现高速序列化" tabindex="-1"><a class="header-anchor" href="#_08-dubbo-kryo-实现高速序列化" aria-hidden="true">#</a> 08-Dubbo + Kryo 实现高速序列化</h1><h2 id="本节视频-7" tabindex="-1"><a class="header-anchor" href="#本节视频-7" aria-hidden="true">#</a> 本节视频</h2>`,37),D={href:"https://www.bilibili.com/video/av34446331/",target:"_blank",rel:"noopener noreferrer"},_=d(`<h2 id="dubbo-中的序列化" tabindex="-1"><a class="header-anchor" href="#dubbo-中的序列化" aria-hidden="true">#</a> Dubbo 中的序列化</h2><p>Dubbo RPC 是 Dubbo 体系中最核心的一种高性能、高吞吐量的远程调用方式，可以称之为多路复用的 TCP 长连接调用：</p><ul><li>长连接：避免了每次调用新建 TCP 连接，提高了调用的响应速度</li><li>多路复用：单个 TCP 连接可交替传输多个请求和响应的消息，降低了连接的等待闲置时间，从而减少了同样并发数下的网络连接数，提高了系统吞吐量</li></ul><p>Dubbo RPC 主要用于两个 Dubbo 系统之间的远程调用，特别适合高并发、小数据的互联网场景。而序列化对于远程调用的响应速度、吞吐量、网络带宽消耗等同样也起着至关重要的作用，是我们提升分布式系统性能的最关键因素之一。</p><p>Dubbo 中支持的序列化方式：</p><ul><li>dubbo 序列化：阿里尚未开发成熟的高效 java 序列化实现，阿里不建议在生产环境使用它</li><li>hessian2 序列化：hessian 是一种跨语言的高效二进制序列化方式。但这里实际不是原生的 hessian2 序列化，而是阿里修改过的 hessian lite，它是 dubbo RPC 默认启用的序列化方式</li><li>json 序列化：目前有两种实现，一种是采用的阿里的 fastjson 库，另一种是采用 dubbo 中自己实现的简单 json 库，但其实现都不是特别成熟，而且 json 这种文本序列化性能一般不如上面两种二进制序列化。</li><li>java 序列化：主要是采用 JDK 自带的 Java 序列化实现，性能很不理想。</li></ul><p>在通常情况下，这四种主要序列化方式的性能从上到下依次递减。对于 dubbo RPC 这种追求高性能的远程调用方式来说，实际上只有 1、2 两种高效序列化方式比较般配，而第 1 个 dubbo 序列化由于还不成熟，所以实际只剩下 2 可用，所以 dubbo RPC 默认采用 hessian2 序列化。</p><p>但 hessian 是一个比较老的序列化实现了，而且它是跨语言的，所以不是单独针对 Java 进行优化的。而 dubbo RPC 实际上完全是一种 Java to Java 的远程调用，其实没有必要采用跨语言的序列化方式（当然肯定也不排斥跨语言的序列化）。</p><p>最近几年，各种新的高效序列化方式层出不穷，不断刷新序列化性能的上限，最典型的包括：</p><ul><li>专门针对 Java 语言的：Kryo，FST 等等</li><li>跨语言的：Protostuff，ProtoBuf，Thrift，Avro，MsgPack 等等</li></ul><p>这些序列化方式的性能多数都显著优于 hessian2（甚至包括尚未成熟的 dubbo 序列化）</p><p>有鉴于此，我们为 dubbo 引入 Kryo 和 FST 这两种高效 Java 序列化实现，来逐步取代 hessian2。</p><p>其中，Kryo 是一种非常成熟的序列化实现，已经在 Twitter、Groupon、Yahoo 以及多个著名开源项目（如 Hive、Storm）中广泛的使用。而 FST 是一种较新的序列化实现，目前还缺乏足够多的成熟使用案例。</p><p><strong>在面向生产环境的应用中，目前更优先选择 Kryo。</strong></p><h2 id="启用-kryo" tabindex="-1"><a class="header-anchor" href="#启用-kryo" aria-hidden="true">#</a> 启用 Kryo</h2><p>在 Provider 和 Consumer 项目启用 Kryo 高速序列化功能，两个项目的配置方式相同</p><h3 id="增加-kryo-依赖" tabindex="-1"><a class="header-anchor" href="#增加-kryo-依赖" aria-hidden="true">#</a> 增加 Kryo 依赖</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;de.javakaffee&lt;/groupId&gt;
    &lt;artifactId&gt;kryo-serializers&lt;/artifactId&gt;
    &lt;version&gt;0.42&lt;/version&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="增加配置" tabindex="-1"><a class="header-anchor" href="#增加配置" aria-hidden="true">#</a> 增加配置</h3><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181023080758.png" alt="image"></p><h3 id="注册被序列化类" tabindex="-1"><a class="header-anchor" href="#注册被序列化类" aria-hidden="true">#</a> 注册被序列化类</h3><p>要让 Kryo 和 FST 完全发挥出高性能，最好将那些需要被序列化的类注册到 dubbo 系统中，例如，我们可以实现如下回调接口：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>public class SerializationOptimizerImpl implements SerializationOptimizer {
    public Collection&lt;Class&gt; getSerializableClasses() {
        List&lt;Class&gt; classes = new LinkedList&lt;Class&gt;();
        classes.add(BidRequest.class);
        classes.add(BidResponse.class);
        classes.add(Device.class);
        classes.add(Geo.class);
        classes.add(Impression.class);
        classes.add(SeatBid.class);
        return classes;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在注册这些类后，序列化的性能可能被大大提升，特别针对小数量的嵌套对象的时候。</p><p>当然，在对一个类做序列化的时候，可能还级联引用到很多类，比如 Java 集合类。针对这种情况，我们已经自动将 JDK 中的常用类进行了注册，所以你不需要重复注册它们（当然你重复注册了也没有任何影响），包括：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>GregorianCalendar
InvocationHandler
BigDecimal
BigInteger
Pattern
BitSet
URI
UUID
HashMap
ArrayList
LinkedList
HashSet
TreeSet
Hashtable
Date
Calendar
ConcurrentHashMap
SimpleDateFormat
Vector
BitSet
StringBuffer
StringBuilder
Object
Object[]
String[]
byte[]
char[]
int[]
float[]
double[]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于注册被序列化的类仅仅是出于性能优化的目的，所以即使你忘记注册某些类也没有关系。事实上，即使不注册任何类，Kryo 和 FST 的性能依然普遍优于 hessian 和 dubbo 序列化。</p><h2 id="为什么需要手动注册" tabindex="-1"><a class="header-anchor" href="#为什么需要手动注册" aria-hidden="true">#</a> 为什么需要手动注册</h2><p>当然，有人可能会问为什么不用配置文件来注册这些类？这是因为要注册的类往往数量较多，导致配置文件冗长；而且在没有好的 IDE 支持的情况下，配置文件的编写和重构都比 Java 类麻烦得多；最后，这些注册的类一般是不需要在项目编译打包后还需要做动态修改的。</p><p>另外，有人也会觉得手工注册被序列化的类是一种相对繁琐的工作，是不是可以用 annotation 来标注，然后系统来自动发现并注册。但这里 annotation 的局限是，它只能用来标注你可以修改的类，而很多序列化中引用的类很可能是你没法做修改的（比如第三方库或者 JDK 系统类或者其他项目的类）。另外，添加 annotation 毕竟稍微的“污染”了一下代码，使应用代码对框架增加了一点点的依赖性。</p><p>除了 annotation，我们还可以考虑用其它方式来自动注册被序列化的类，例如扫描类路径，自动发现实现 Serializable 接口（甚至包括 Externalizable）的类并将它们注册。当然，我们知道类路径上能找到 Serializable 类可能是非常多的，所以也可以考虑用 package 前缀之类来一定程度限定扫描范围。</p><p>当然，在自动注册机制中，特别需要考虑如何保证服务提供端和消费端都以同样的顺序（或者 ID）来注册类，避免错位，毕竟两端可被发现然后注册的类的数量可能都是不一样的。</p><h2 id="无参构造函数和-serializable-接口" tabindex="-1"><a class="header-anchor" href="#无参构造函数和-serializable-接口" aria-hidden="true">#</a> 无参构造函数和 Serializable 接口</h2><p>如果被序列化的类中 <code>不包含无参的构造函数，则在 Kryo 的序列化中，性能将会大打折扣</code>，因为此时我们在底层将用 Java 的序列化来透明的取代 Kryo 序列化。所以，<code>尽可能为每一个被序列化的类添加无参构造函数是一种最佳实践</code>（当然一个 Java 类如果不自定义构造函数，默认就有无参构造函数）。</p><p>另外，Kryo 和 FST 都不需要被序列化类实现 Serializable 接口，但我们还是<code>建议每个被序列化类都去实现 Serializable 接口，因为这样可以保持和 Java 序列化以及 dubbo 序列化的兼容性</code>，另外也使我们未来采用上述某些自动注册机制带来可能。</p><h2 id="附-序列化性能分析与测试" tabindex="-1"><a class="header-anchor" href="#附-序列化性能分析与测试" aria-hidden="true">#</a> 附：序列化性能分析与测试</h2><h3 id="测试环境" tabindex="-1"><a class="header-anchor" href="#测试环境" aria-hidden="true">#</a> 测试环境</h3><ul><li>两台独立服务器</li><li>4 核 Intel(R) Xeon(R) CPU E5-2603 0 @ 1.80GHz</li><li>8G 内存</li><li>虚拟机之间网络通过百兆交换机</li><li>CentOS 5</li><li>JDK 7</li><li>Tomcat 7</li><li>JVM 参数 <code>-server -Xms1g -Xmx1g -XX:PermSize=64M -XX:+UseConcMarkSweepGC</code></li></ul><p><strong>注意：</strong> 当然这个测试环境较有局限，故当前测试结果未必有非常权威的代表性</p><h3 id="测试脚本" tabindex="-1"><a class="header-anchor" href="#测试脚本" aria-hidden="true">#</a> 测试脚本</h3><p>和 dubbo 自身的基准测试保持接近，10 个并发客户端持续不断发出请求：</p><ul><li>传入嵌套复杂对象（但单个数据量很小），不做任何处理，原样返回</li><li>传入 50K 字符串，不做任何处理，原样返回（TODO：结果尚未列出）</li></ul><p>进行 5 分钟性能测试。（引用 dubbo 自身测试的考虑：“主要考察序列化和网络 IO 的性能，因此服务端无任何业务逻辑。<strong>取 10 并发是考虑到 http 协议在高并发下对 CPU 的使用率较高可能会先达到瓶颈。</strong>”）</p><h3 id="dubbo-rpc-中不同序列化生成字节大小比较" tabindex="-1"><a class="header-anchor" href="#dubbo-rpc-中不同序列化生成字节大小比较" aria-hidden="true">#</a> Dubbo RPC 中不同序列化生成字节大小比较</h3><p>序列化生成字节码的大小是一个比较有确定性的指标，它决定了远程调用的网络传输时间和带宽占用。</p><p><strong>针对复杂对象的结果如下（数值越小越好）：</strong></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181023082512.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typorabytes.png" alt="image"></p><h3 id="dubbo-rpc-中不同序列化响应时间和吞吐量对比" tabindex="-1"><a class="header-anchor" href="#dubbo-rpc-中不同序列化响应时间和吞吐量对比" aria-hidden="true">#</a> Dubbo RPC 中不同序列化响应时间和吞吐量对比</h3><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181023082647.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typorart.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoratps.png" alt="image"></p><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h3><p>就目前结果而言，我们可以看到不管从生成字节的大小，还是平均响应时间和平均 TPS，Kryo 和 FST 相比 Dubbo RPC 中原有的序列化方式都有非常显著的改进。</p><h1 id="_09-dubbo-hystrix-实现服务熔断" tabindex="-1"><a class="header-anchor" href="#_09-dubbo-hystrix-实现服务熔断" aria-hidden="true">#</a> 09-Dubbo + Hystrix 实现服务熔断</h1><h2 id="本节视频-8" tabindex="-1"><a class="header-anchor" href="#本节视频-8" aria-hidden="true">#</a> 本节视频</h2>`,56),C={href:"https://www.bilibili.com/video/av34446940/",target:"_blank",rel:"noopener noreferrer"},H=d(`<h2 id="熔断器简介" tabindex="-1"><a class="header-anchor" href="#熔断器简介" aria-hidden="true">#</a> 熔断器简介</h2><p>在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 <code>RPC</code> 相互调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，<code>Servlet</code> 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 <strong>“雪崩”</strong> 效应。</p><p>为了解决这个问题，业界提出了熔断器模型。</p><p>Netflix 开源了 Hystrix 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246007_2.png" alt="image"></p><p>较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值（Hystrix 是 <strong>5 秒 20 次</strong>） 熔断器将会被打开。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246008.png" alt="image"></p><p>熔断器打开后，为了避免连锁故障，通过 <code>fallback</code> 方法可以直接返回一个固定值。</p><h2 id="dubbo-provider-中使用熔断器" tabindex="-1"><a class="header-anchor" href="#dubbo-provider-中使用熔断器" aria-hidden="true">#</a> Dubbo Provider 中使用熔断器</h2><h3 id="在-pom-xml-中增加依赖" tabindex="-1"><a class="header-anchor" href="#在-pom-xml-中增加依赖" aria-hidden="true">#</a> 在 <code>pom.xml</code> 中增加依赖</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
    &lt;version&gt;2.0.1.RELEASE&lt;/version&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-application-中增加-enablehystrix-注解" tabindex="-1"><a class="header-anchor" href="#在-application-中增加-enablehystrix-注解" aria-hidden="true">#</a> 在 Application 中增加 <code>@EnableHystrix</code> 注解</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.provider;

import com.alibaba.dubbo.container.Main;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

@EnableHystrix
@SpringBootApplication
public class HelloDubboServiceUserProviderApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloDubboServiceUserProviderApplication.class, args);
        Main.main(args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-service-中增加-hystrixcommand-注解" tabindex="-1"><a class="header-anchor" href="#在-service-中增加-hystrixcommand-注解" aria-hidden="true">#</a> 在 Service 中增加 <code>@HystrixCommand</code> 注解</h3><p>在调用方法上增加 <code>@HystrixCommand</code> 配置，此时调用会经过 Hystrix 代理</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.provider.api.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.funtl.hello.dubbo.service.user.api.UserService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import org.springframework.beans.factory.annotation.Value;

@Service(version = &quot;\${user.service.version}&quot;)
public class UserServiceImpl implements UserService {

    @Value(&quot;\${dubbo.protocol.port}&quot;)
    private String port;

    @HystrixCommand(commandProperties = {
            @HystrixProperty(name = &quot;circuitBreaker.requestVolumeThreshold&quot;, value = &quot;10&quot;),
            @HystrixProperty(name = &quot;execution.isolation.thread.timeoutInMilliseconds&quot;, value = &quot;2000&quot;)
    })
    @Override
    public String sayHi() {
//        return &quot;Hello Dubbo, i am from port:&quot; + port;
        throw new RuntimeException(&quot;Exception to show hystrix enabled.&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试熔断器" tabindex="-1"><a class="header-anchor" href="#测试熔断器" aria-hidden="true">#</a> 测试熔断器</h3><p>此时我们再次请求服务提供者，浏览器会报 500 异常</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Exception to show hystrix enabled.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dubbo-consumer-中使用熔断器" tabindex="-1"><a class="header-anchor" href="#dubbo-consumer-中使用熔断器" aria-hidden="true">#</a> Dubbo Consumer 中使用熔断器</h2><h3 id="在-pom-xml-中增加依赖-1" tabindex="-1"><a class="header-anchor" href="#在-pom-xml-中增加依赖-1" aria-hidden="true">#</a> 在 <code>pom.xml</code> 中增加依赖</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
    &lt;version&gt;2.0.1.RELEASE&lt;/version&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-application-中增加-enablehystrix-注解-1" tabindex="-1"><a class="header-anchor" href="#在-application-中增加-enablehystrix-注解-1" aria-hidden="true">#</a> 在 Application 中增加 <code>@EnableHystrix</code> 注解</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

@EnableHystrix
@SpringBootApplication
public class HelloDubboServiceUserConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloDubboServiceUserConsumerApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在调用方法上增加-hystrixcommand-注解-并指定-fallbackmethod-方法" tabindex="-1"><a class="header-anchor" href="#在调用方法上增加-hystrixcommand-注解-并指定-fallbackmethod-方法" aria-hidden="true">#</a> 在调用方法上增加 <code>@HystrixCommand</code> 注解，并指定 <code>fallbackMethod</code> 方法</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.consumer.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.funtl.hello.dubbo.service.user.api.UserService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Reference(version = &quot;\${user.service.version}&quot;)
    private UserService userService;

    @HystrixCommand(fallbackMethod = &quot;hiError&quot;)
    @RequestMapping(value = &quot;hi&quot;)
    public String sayHi() {
        return userService.sayHi();
    }

    public String hiError() {
        return &quot;Hystrix fallback&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试熔断器-1" tabindex="-1"><a class="header-anchor" href="#测试熔断器-1" aria-hidden="true">#</a> 测试熔断器</h3><p>此时我们再次请求服务提供者，浏览器会显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hystrix fallback

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，Dubbo + Hystrix 配置完成</p><h1 id="_10-dubbo-hystrix-熔断器仪表盘" tabindex="-1"><a class="header-anchor" href="#_10-dubbo-hystrix-熔断器仪表盘" aria-hidden="true">#</a> 10-Dubbo + Hystrix 熔断器仪表盘</h1><h1 id="dubbo-hystrix-熔断器仪表盘" tabindex="-1"><a class="header-anchor" href="#dubbo-hystrix-熔断器仪表盘" aria-hidden="true">#</a> Dubbo + Hystrix 熔断器仪表盘</h1><h2 id="本节视频-9" tabindex="-1"><a class="header-anchor" href="#本节视频-9" aria-hidden="true">#</a> 本节视频</h2>`,33),E={href:"https://www.bilibili.com/video/av34453138/",target:"_blank",rel:"noopener noreferrer"},A=d(`<h2 id="使用熔断器仪表盘监控" tabindex="-1"><a class="header-anchor" href="#使用熔断器仪表盘监控" aria-hidden="true">#</a> 使用熔断器仪表盘监控</h2><p>在 Provider 和 Consumer 项目增加 Hystrix 仪表盘功能，两个项目的改造方式相同</p><h2 id="在-pom-xml-中增加依赖-2" tabindex="-1"><a class="header-anchor" href="#在-pom-xml-中增加依赖-2" aria-hidden="true">#</a> 在 <code>pom.xml</code> 中增加依赖</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix-dashboard&lt;/artifactId&gt;
    &lt;version&gt;2.0.1.RELEASE&lt;/version&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在-application-中增加-enablehystrixdashboard-注解" tabindex="-1"><a class="header-anchor" href="#在-application-中增加-enablehystrixdashboard-注解" aria-hidden="true">#</a> 在 Application 中增加 <code>@EnableHystrixDashboard</code> 注解</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;

@EnableHystrix
@EnableHystrixDashboard
@SpringBootApplication
public class HelloDubboServiceUserConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloDubboServiceUserConsumerApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-hystrix-stream-的-servlet-配置" tabindex="-1"><a class="header-anchor" href="#创建-hystrix-stream-的-servlet-配置" aria-hidden="true">#</a> 创建 <code>hystrix.stream</code> 的 Servlet 配置</h2><p>Spring Boot 2.x 版本开启 Hystrix Dashboard 与 Spring Boot 1.x 的方式略有不同，需要增加一个 <code>HystrixMetricsStreamServlet</code> 的配置，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.dubbo.service.user.consumer.config;

import com.netflix.hystrix.contrib.metrics.eventstream.HystrixMetricsStreamServlet;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HystrixDashboardConfiguration {
    @Bean
    public ServletRegistrationBean getServlet() {
        HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
        registrationBean.setLoadOnStartup(1);
        registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
        registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
        return registrationBean;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试-hystrix-dashboard" tabindex="-1"><a class="header-anchor" href="#测试-hystrix-dashboard" aria-hidden="true">#</a> 测试 Hystrix Dashboard</h2><p>浏览器端访问 http://localhost:9090/hystrix 界面如下：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181023054017.png" alt="image"></p><p>点击 Monitor Stream，进入下一个界面，访问 http://localhost:9090/hi 触发熔断后，监控界面显示效果如下：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20181023054151.png" alt="image"></p><h2 id="附-hystrix-说明" tabindex="-1"><a class="header-anchor" href="#附-hystrix-说明" aria-hidden="true">#</a> 附：Hystrix 说明</h2><h3 id="什么情况下会触发-fallback-方法" tabindex="-1"><a class="header-anchor" href="#什么情况下会触发-fallback-方法" aria-hidden="true">#</a> 什么情况下会触发 <code>fallback</code> 方法</h3><table><thead><tr><th>名字</th><th>描述</th><th>触发fallback</th></tr></thead><tbody><tr><td>EMIT</td><td>值传递</td><td>NO</td></tr><tr><td>SUCCESS</td><td>执行完成，没有错误</td><td>NO</td></tr><tr><td>FAILURE</td><td>执行抛出异常</td><td>YES</td></tr><tr><td>TIMEOUT</td><td>执行开始，但没有在允许的时间内完成</td><td>YES</td></tr><tr><td>BAD_REQUEST</td><td>执行抛出HystrixBadRequestException</td><td>NO</td></tr><tr><td>SHORT_CIRCUITED</td><td>断路器打开，不尝试执行</td><td>YES</td></tr><tr><td>THREAD_POOL_REJECTED</td><td>线程池拒绝，不尝试执行</td><td>YES</td></tr><tr><td>SEMAPHORE_REJECTED</td><td>信号量拒绝，不尝试执行</td><td>YES</td></tr></tbody></table><h3 id="fallback-方法在什么情况下会抛出异常" tabindex="-1"><a class="header-anchor" href="#fallback-方法在什么情况下会抛出异常" aria-hidden="true">#</a> <code>fallback</code> 方法在什么情况下会抛出异常</h3><table><thead><tr><th>名字</th><th>描述</th><th>抛异常</th></tr></thead><tbody><tr><td>FALLBACK_EMIT</td><td>Fallback值传递</td><td>NO</td></tr><tr><td>FALLBACK_SUCCESS</td><td>Fallback执行完成，没有错误</td><td>NO</td></tr><tr><td>FALLBACK_FAILURE</td><td>Fallback执行抛出出错</td><td>YES</td></tr><tr><td>FALLBACK_REJECTED</td><td>Fallback信号量拒绝，不尝试执行</td><td>YES</td></tr><tr><td>FALLBACK_MISSING</td><td>没有Fallback实例</td><td>YES</td></tr></tbody></table><h3 id="hystrix-dashboard-界面监控参数" tabindex="-1"><a class="header-anchor" href="#hystrix-dashboard-界面监控参数" aria-hidden="true">#</a> Hystrix Dashboard 界面监控参数</h3><p><img src="https://picgo.xingenhi.cn//typora20171123110838020.png" alt="image"></p><h3 id="hystrix-常用配置信息" tabindex="-1"><a class="header-anchor" href="#hystrix-常用配置信息" aria-hidden="true">#</a> Hystrix 常用配置信息</h3><h4 id="超时时间-默认1000ms-单位-ms" tabindex="-1"><a class="header-anchor" href="#超时时间-默认1000ms-单位-ms" aria-hidden="true">#</a> 超时时间（默认1000ms，单位：ms）</h4><ul><li><code>hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds</code>：在调用方配置，被该调用方的所有方法的超时时间都是该值，优先级低于下边的指定配置</li><li><code>hystrix.command.HystrixCommandKey.execution.isolation.thread.timeoutInMilliseconds</code>：在调用方配置，被该调用方的指定方法（HystrixCommandKey 方法名）的超时时间是该值</li></ul><h4 id="线程池核心线程数" tabindex="-1"><a class="header-anchor" href="#线程池核心线程数" aria-hidden="true">#</a> 线程池核心线程数</h4><ul><li><code>hystrix.threadpool.default.coreSize</code>：默认为 10</li></ul><h4 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h4><ul><li><code>hystrix.threadpool.default.maxQueueSize</code>：最大排队长度。默认 -1，使用 <code>SynchronousQueue</code>。其他值则使用 <code>LinkedBlockingQueue</code>。如果要从 -1 换成其他值则需重启，即该值不能动态调整，若要动态调整，需要使用到下边这个配置</li><li><code>hystrix.threadpool.default.queueSizeRejectionThreshold</code>：排队线程数量阈值，默认为 5，达到时拒绝，如果配置了该选项，队列的大小是该队列</li></ul><p><strong>注意：</strong> 如果 <code>maxQueueSize=-1</code> 的话，则该选项不起作用</p><h4 id="断路器" tabindex="-1"><a class="header-anchor" href="#断路器" aria-hidden="true">#</a> 断路器</h4><ul><li><code>hystrix.command.default.circuitBreaker.requestVolumeThreshold</code>：当在配置时间窗口内达到此数量的失败后，进行短路。默认 20 个（10s 内请求失败数量达到 20 个，断路器开）</li><li><code>hystrix.command.default.circuitBreaker.sleepWindowInMilliseconds</code>：短路多久以后开始尝试是否恢复，默认 5s</li><li><code>hystrix.command.default.circuitBreaker.errorThresholdPercentage</code>：出错百分比阈值，当达到此阈值后，开始短路。默认 50%</li></ul><h4 id="fallback" tabindex="-1"><a class="header-anchor" href="#fallback" aria-hidden="true">#</a> fallback</h4><ul><li><code>hystrix.command.default.fallback.isolation.semaphore.maxConcurrentRequests</code>：调用线程允许请求 <code>HystrixCommand.GetFallback()</code> 的最大数量，默认 10。超出时将会有异常抛出，注意：该项配置对于 THREAD 隔离模式也起作用</li></ul><h4 id="属性配置参数" tabindex="-1"><a class="header-anchor" href="#属性配置参数" aria-hidden="true">#</a> 属性配置参数</h4><ul><li>参数说明：https://github.com/Netflix/Hystrix/wiki/Configuration</li><li>HystrixProperty 参考代码：http://www.programcreek.com/java-api-examples/index.php?source_dir=Hystrix-master/hystrix-contrib/hystrix-javanica/src/test/java/com/netflix/hystrix/contrib/javanica/test/common/configuration/command/BasicCommandPropertiesTest.java</li></ul>`,35);function R(B,U){const i=l("ExternalLinkIcon");return s(),t("div",null,[c,e("ul",null,[e("li",null,[e("a",u,[n("【视频】Dubbo 实现微服务架构-Dubbo-简介1"),a(i)])]),e("li",null,[e("a",v,[n("【视频】Dubbo 实现微服务架构-Dubbo-简介2"),a(i)])])]),b,e("ul",null,[e("li",null,[e("a",m,[n("【视频】Dubbo 实现微服务架构-Dubbo-服务治理"),a(i)])])]),h,e("ul",null,[e("li",null,[e("a",p,[n("【视频】Dubbo 实现微服务架构-Dubbo-核心功能与组件角色"),a(i)])])]),g,e("ul",null,[e("li",null,[e("a",f,[n("【视频】Dubbo 实现微服务架构-Dubbo-核心功能与组件角色"),a(i)])])]),x,e("ul",null,[e("li",null,[e("a",y,[n("【视频】Dubbo 实现微服务架构-Dubbo-管理控制台"),a(i)])])]),S,e("ul",null,[e("li",null,[e("a",P,[n("【视频】Dubbo 实现微服务架构-Dubbo-服务提供者"),a(i)])]),e("li",null,[e("a",k,[n("【视频】Dubbo 实现微服务架构-Dubbo-服务消费者"),a(i)])])]),q,e("ul",null,[e("li",null,[e("a",I,[n("【视频】Dubbo 实现微服务架构-Dubbo-负载均衡"),a(i)])])]),w,e("ul",null,[e("li",null,[e("a",D,[n("【视频】Dubbo 实现微服务架构-Dubbo-使用 Kryo 实现高速序列化"),a(i)])])]),_,e("ul",null,[e("li",null,[e("a",C,[n("【视频】Dubbo 实现微服务架构-Dubbo-使用 Hystrix 实现服务熔断"),a(i)])])]),H,e("ul",null,[e("li",null,[e("a",E,[n("【视频】Dubbo 实现微服务架构-Dubbo-使用 Hystrix 熔断器仪表盘"),a(i)])])]),A])}const L=r(o,[["render",R],["__file","gaoxingnenJavaRPCkuangjiaDubbo.html.vue"]]);export{L as default};
