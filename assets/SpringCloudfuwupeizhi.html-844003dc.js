import{_ as t,r,o as a,c as s,a as i,b as l,d,e as n}from"./app-f078eaf8.js";const c={},o=n('<h1 id="_00-分布式配置中心" tabindex="-1"><a class="header-anchor" href="#_00-分布式配置中心" aria-hidden="true">#</a> 00-分布式配置中心</h1><p>在分布式系统中，由于服务数量巨多，为了方便服务配置文件统一管理，实时更新，所以需要分布式配置中心组件。在 Spring Cloud 中，有分布式配置中心组件 Spring Cloud Config ，它支持配置服务放在配置服务的内存中（即本地），也支持放在远程 Git 仓库中。在 Spring Cloud Config 组件中，分两个角色，一是 Config Server，二是 Config Client。</p><h1 id="_01-分布式配置中心服务端" tabindex="-1"><a class="header-anchor" href="#_01-分布式配置中心服务端" aria-hidden="true">#</a> 01-分布式配置中心服务端</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',4),v={href:"https://www.bilibili.com/video/av28096048/",target:"_blank",rel:"noopener noreferrer"},u=n(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>创建一个工程名为 <code>hello-spring-cloud-config</code> 的项目，<code>pom.xml</code> 配置文件如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-config&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-config&lt;/name&gt;
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
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-config-server&lt;/artifactId&gt;
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
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.config.ConfigApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了 <code>spring-cloud-config-server</code> 依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-config-server&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h2><p>通过 <code>@EnableConfigServer</code> 注解，开启配置服务器功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableConfigServer
@EnableEurekaClient
public class ConfigApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h2><p>增加 Config 相关配置，并设置端口号为：<code>8888</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-config
  cloud:
    config:
      label: master
      server:
        git:
          uri: https://github.com/topsale/spring-cloud-config
          search-paths: respo
          username:
          password:

server:
  port: 8888

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关配置说明，如下：</p><ul><li><code>spring.cloud.config.label</code>：配置仓库的分支</li><li><code>spring.cloud.config.server.git.uri</code>：配置 Git 仓库地址（GitHub、GitLab、码云 ...）</li><li><code>spring.cloud.config.server.git.search-paths</code>：配置仓库路径（存放配置文件的目录）</li><li><code>spring.cloud.config.server.git.username</code>：访问 Git 仓库的账号</li><li><code>spring.cloud.config.server.git.password</code>：访问 Git 仓库的密码</li></ul><p>注意事项：</p><ul><li>如果使用 GitLab 作为仓库的话，<code>git.uri</code> 需要在结尾加上 <code>.git</code>，GitHub 则不用</li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>浏览器端访问：http://localhost:8888/config-client/dev/master 显示如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;Environment&gt; 
  &lt;name&gt;config-client&lt;/name&gt;  
  &lt;profiles&gt; 
    &lt;profiles&gt;dev&lt;/profiles&gt; 
  &lt;/profiles&gt;  
  &lt;label&gt;master&lt;/label&gt;  
  &lt;version&gt;9646007f931753d7e96a6dcc9ae34838897a91df&lt;/version&gt;  
  &lt;state/&gt;  
  &lt;propertySources&gt; 
    &lt;propertySources&gt; 
      &lt;name&gt;https://github.com/topsale/spring-cloud-config/respo/config-client-dev.yml&lt;/name&gt;  
      &lt;source&gt; 
        &lt;foo&gt;foo version 1&lt;/foo&gt;  
        &lt;demo.message&gt;Hello Spring Config&lt;/demo.message&gt; 
      &lt;/source&gt; 
    &lt;/propertySources&gt; 
  &lt;/propertySources&gt; 
&lt;/Environment&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>证明配置服务中心可以从远程程序获取配置信息</p><h2 id="附-http-请求地址和资源文件映射" tabindex="-1"><a class="header-anchor" href="#附-http-请求地址和资源文件映射" aria-hidden="true">#</a> 附：HTTP 请求地址和资源文件映射</h2><ul><li>http://ip:port/{application}/{profile}[/{label}]</li><li>http://ip:port/{application}-{profile}.yml</li><li>http://ip:port/{label}/{application}-{profile}.yml</li><li>http://ip:port/{application}-{profile}.properties</li><li>http://ip:port/{label}/{application}-{profile}.properties</li></ul><h1 id="_02-分布式配置中心客户端" tabindex="-1"><a class="header-anchor" href="#_02-分布式配置中心客户端" aria-hidden="true">#</a> 02-分布式配置中心客户端</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>`,23),g={href:"https://www.bilibili.com/video/av28096072",target:"_blank",rel:"noopener noreferrer"},p=n(`<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p>创建一个工程名为 <code>hello-spring-cloud-config-client</code> 的项目，<code>pom.xml</code> 文件配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-config-client&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-config-client&lt;/name&gt;
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
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-config&lt;/artifactId&gt;
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
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.config.client.ConfigClientApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了 <code>spring-cloud-starter-config</code> 依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-config&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-1" tabindex="-1"><a class="header-anchor" href="#application-1" aria-hidden="true">#</a> Application</h2><p>入口类没有需要特殊处理的地方，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.config.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ConfigClientApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigClientApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-1" tabindex="-1"><a class="header-anchor" href="#application-yml-1" aria-hidden="true">#</a> application.yml</h2><p>增加 Config Client 相关配置，并设置端口号为：<code>8889</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-config-client
  cloud:
    config:
      uri: http://localhost:8888
      name: config-client
      label: master
      profile: dev

server:
  port: 8889

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关配置说明，如下：</p><ul><li><code>spring.cloud.config.uri</code>：配置服务中心的网址</li><li><code>spring.cloud.config.name</code>：配置文件名称的前缀</li><li><code>spring.cloud.config.label</code>：配置仓库的分支</li><li><code>spring.cloud.config.profile</code>：配置文件的环境标识</li><li>dev：表示开发环境</li><li>test：表示测试环境</li><li>prod：表示生产环境</li></ul><p>注意事项：</p><ul><li>配置服务器的默认端口为 <code>8888</code>，如果修改了默认端口，则客户端项目就不能在 <code>application.yml</code> 或 <code>application.properties</code> 中配置 <code>spring.cloud.config.uri</code>，必须在 <code>bootstrap.yml</code> 或是 <code>bootstrap.properties</code> 中配置，原因是 <code>bootstrap</code> 开头的配置文件会被优先加载和配置，切记。</li></ul><h2 id="创建测试用-controller" tabindex="-1"><a class="header-anchor" href="#创建测试用-controller" aria-hidden="true">#</a> 创建测试用 Controller</h2><p>我们创建一个 Controller 来测试一下通过远程仓库的配置文件注入 <code>foo</code> 属性</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.config.client.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestConfigController {

    @Value(&quot;\${foo}&quot;)
    private String foo;

    @RequestMapping(value = &quot;/hi&quot;, method = RequestMethod.GET)
    public String hi() {
        return foo;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，能够正常启动服务就说明注入是成功的。</p><h2 id="测试访问" tabindex="-1"><a class="header-anchor" href="#测试访问" aria-hidden="true">#</a> 测试访问</h2><p>浏览器端访问：http://localhost:8889/hi 显示如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>foo version 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附-开启-spring-boot-profile" tabindex="-1"><a class="header-anchor" href="#附-开启-spring-boot-profile" aria-hidden="true">#</a> 附：开启 Spring Boot Profile</h2><p>我们在做项目开发的时候，生产环境和测试环境的一些配置可能会不一样，有时候一些功能也可能会不一样，所以我们可能会在上线的时候手工修改这些配置信息。但是 Spring 中为我们提供了 Profile 这个功能。我们只需要在启动的时候添加一个虚拟机参数，激活自己环境所要用的 Profile 就可以了。</p><p>操作起来很简单，只需要为不同的环境编写专门的配置文件，如：<code>application-dev.yml</code>、<code>application-prod.yml</code>， 启动项目时只需要增加一个命令参数 <code>--spring.profiles.active=环境配置</code> 即可，启动命令如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>java -jar hello-spring-cloud-web-admin-feign-1.0.0-SNAPSHOT.jar --spring.profiles.active=prod

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function m(b,f){const e=r("ExternalLinkIcon");return a(),s("div",null,[o,i("ul",null,[i("li",null,[i("a",v,[l("【视频】微服务框架-SpringCloud-分布式配置中心-服务端"),d(e)])])]),u,i("ul",null,[i("li",null,[i("a",g,[l("【视频】微服务框架-SpringCloud-分布式配置中心-客户端"),d(e)])])]),p])}const I=t(c,[["render",m],["__file","SpringCloudfuwupeizhi.html.vue"]]);export{I as default};
