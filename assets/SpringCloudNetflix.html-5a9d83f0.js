import{_ as a,r as s,o as r,c as t,a as i,b as l,d,e}from"./app-f078eaf8.js";const c={},v=e('<h1 id="_00-简介" tabindex="-1"><a class="header-anchor" href="#_00-简介" aria-hidden="true">#</a> 00-简介</h1><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',3),u={href:"https://www.bilibili.com/video/av27864513",target:"_blank",rel:"noopener noreferrer"},o=e('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Spring Cloud 是一个相对比较新的微服务框架，2016 才推出 1.0 的 Release 版本. 但是其更新特别快，几乎每 1-2 个月就有一次更新，虽然 Spring Cloud 时间最短, 但是相比 Dubbo 等 RPC 框架, Spring Cloud 提供的全套的分布式系统解决方案。</p><p>Spring Cloud 为开发者提供了在分布式系统（配置管理，服务发现，熔断，路由，微代理，控制总线，一次性 Token，全居琐，Leader 选举，分布式 Session，集群状态）中快速构建的工具，使用 Spring Cloud 的开发者可以快速的启动服务或构建应用、同时能够快速和云平台资源进行对接。</p><h1 id="_01-创建统一的依赖管理" tabindex="-1"><a class="header-anchor" href="#_01-创建统一的依赖管理" aria-hidden="true">#</a> 01-创建统一的依赖管理</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>',5),m={href:"https://www.bilibili.com/video/av27864537",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p>Spring Cloud 项目都是基于 Spring Boot 进行开发，并且都是使用 Maven 做项目管理工具。在实际开发中，我们一般都会创建一个依赖管理项目作为 Maven 的 Parent 项目使用，这样做可以极大的方便我们对 Jar 包版本的统一管理。</p><h2 id="创建依赖管理项目" tabindex="-1"><a class="header-anchor" href="#创建依赖管理项目" aria-hidden="true">#</a> 创建依赖管理项目</h2><p>创建一个工程名为 <code>hello-spring-cloud-dependencies</code> 的项目，<code>pom.xml</code> 配置文件如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.0.2.RELEASE&lt;/version&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;com.funtl&lt;/groupId&gt;
    &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;pom&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-dependencies&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;properties&gt;
        &lt;!-- Environment Settings --&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;

        &lt;!-- Spring Settings --&gt;
        &lt;spring-cloud.version&gt;Finchley.RC1&lt;/spring-cloud.version&gt;
    &lt;/properties&gt;

    &lt;dependencyManagement&gt;
        &lt;dependencies&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;
                &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;
                &lt;type&gt;pom&lt;/type&gt;
                &lt;scope&gt;import&lt;/scope&gt;
            &lt;/dependency&gt;
        &lt;/dependencies&gt;
    &lt;/dependencyManagement&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;!-- Compiler 插件, 设定 JDK 版本 --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;showWarnings&gt;true&lt;/showWarnings&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;

            &lt;!-- 打包 jar 文件时，配置 manifest 文件，加入 lib 包的 jar 依赖 --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;archive&gt;
                        &lt;addMavenDescriptor&gt;false&lt;/addMavenDescriptor&gt;
                    &lt;/archive&gt;
                &lt;/configuration&gt;
                &lt;executions&gt;
                    &lt;execution&gt;
                        &lt;configuration&gt;
                            &lt;archive&gt;
                                &lt;manifest&gt;
                                    &lt;!-- Add directory entries --&gt;
                                    &lt;addDefaultImplementationEntries&gt;true&lt;/addDefaultImplementationEntries&gt;
                                    &lt;addDefaultSpecificationEntries&gt;true&lt;/addDefaultSpecificationEntries&gt;
                                    &lt;addClasspath&gt;true&lt;/addClasspath&gt;
                                &lt;/manifest&gt;
                            &lt;/archive&gt;
                        &lt;/configuration&gt;
                    &lt;/execution&gt;
                &lt;/executions&gt;
            &lt;/plugin&gt;

            &lt;!-- resource --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-resources-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;

            &lt;!-- install --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-install-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;

            &lt;!-- clean --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-clean-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;

            &lt;!-- ant --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-antrun-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;

            &lt;!-- dependency --&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-dependency-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;

        &lt;pluginManagement&gt;
            &lt;plugins&gt;
                &lt;!-- Java Document Generate --&gt;
                &lt;plugin&gt;
                    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                    &lt;artifactId&gt;maven-javadoc-plugin&lt;/artifactId&gt;
                    &lt;executions&gt;
                        &lt;execution&gt;
                            &lt;phase&gt;prepare-package&lt;/phase&gt;
                            &lt;goals&gt;
                                &lt;goal&gt;jar&lt;/goal&gt;
                            &lt;/goals&gt;
                        &lt;/execution&gt;
                    &lt;/executions&gt;
                &lt;/plugin&gt;

                &lt;!-- YUI Compressor (CSS/JS压缩) --&gt;
                &lt;plugin&gt;
                    &lt;groupId&gt;net.alchim31.maven&lt;/groupId&gt;
                    &lt;artifactId&gt;yuicompressor-maven-plugin&lt;/artifactId&gt;
                    &lt;version&gt;1.5.1&lt;/version&gt;
                    &lt;executions&gt;
                        &lt;execution&gt;
                            &lt;phase&gt;prepare-package&lt;/phase&gt;
                            &lt;goals&gt;
                                &lt;goal&gt;compress&lt;/goal&gt;
                            &lt;/goals&gt;
                        &lt;/execution&gt;
                    &lt;/executions&gt;
                    &lt;configuration&gt;
                        &lt;encoding&gt;UTF-8&lt;/encoding&gt;
                        &lt;jswarn&gt;false&lt;/jswarn&gt;
                        &lt;nosuffix&gt;true&lt;/nosuffix&gt;
                        &lt;linebreakpos&gt;30000&lt;/linebreakpos&gt;
                        &lt;force&gt;true&lt;/force&gt;
                        &lt;includes&gt;
                            &lt;include&gt;**/*.js&lt;/include&gt;
                            &lt;include&gt;**/*.css&lt;/include&gt;
                        &lt;/includes&gt;
                        &lt;excludes&gt;
                            &lt;exclude&gt;**/*.min.js&lt;/exclude&gt;
                            &lt;exclude&gt;**/*.min.css&lt;/exclude&gt;
                        &lt;/excludes&gt;
                    &lt;/configuration&gt;
                &lt;/plugin&gt;
            &lt;/plugins&gt;
        &lt;/pluginManagement&gt;

        &lt;!-- 资源文件配置 --&gt;
        &lt;resources&gt;
            &lt;resource&gt;
                &lt;directory&gt;src/main/java&lt;/directory&gt;
                &lt;excludes&gt;
                    &lt;exclude&gt;**/*.java&lt;/exclude&gt;
                &lt;/excludes&gt;
            &lt;/resource&gt;
            &lt;resource&gt;
                &lt;directory&gt;src/main/resources&lt;/directory&gt;
            &lt;/resource&gt;
        &lt;/resources&gt;
    &lt;/build&gt;

    &lt;repositories&gt;
        &lt;repository&gt;
            &lt;id&gt;aliyun-repos&lt;/id&gt;
            &lt;name&gt;Aliyun Repository&lt;/name&gt;
            &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;
            &lt;releases&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/releases&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;

        &lt;repository&gt;
            &lt;id&gt;sonatype-repos&lt;/id&gt;
            &lt;name&gt;Sonatype Repository&lt;/name&gt;
            &lt;url&gt;https://oss.sonatype.org/content/groups/public&lt;/url&gt;
            &lt;releases&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/releases&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;
        &lt;repository&gt;
            &lt;id&gt;sonatype-repos-s&lt;/id&gt;
            &lt;name&gt;Sonatype Repository&lt;/name&gt;
            &lt;url&gt;https://oss.sonatype.org/content/repositories/snapshots&lt;/url&gt;
            &lt;releases&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/releases&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;

        &lt;repository&gt;
            &lt;id&gt;spring-snapshots&lt;/id&gt;
            &lt;name&gt;Spring Snapshots&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/snapshot&lt;/url&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;
        &lt;repository&gt;
            &lt;id&gt;spring-milestones&lt;/id&gt;
            &lt;name&gt;Spring Milestones&lt;/name&gt;
            &lt;url&gt;https://repo.spring.io/milestone&lt;/url&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/repository&gt;
    &lt;/repositories&gt;

    &lt;pluginRepositories&gt;
        &lt;pluginRepository&gt;
            &lt;id&gt;aliyun-repos&lt;/id&gt;
            &lt;name&gt;Aliyun Repository&lt;/name&gt;
            &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;
            &lt;releases&gt;
                &lt;enabled&gt;true&lt;/enabled&gt;
            &lt;/releases&gt;
            &lt;snapshots&gt;
                &lt;enabled&gt;false&lt;/enabled&gt;
            &lt;/snapshots&gt;
        &lt;/pluginRepository&gt;
    &lt;/pluginRepositories&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>parent：继承了 Spring Boot 的 Parent，表示我们是一个 Spring Boot 工程</li><li>package：<code>pom</code>，表示该项目仅当做依赖项目，没有具体的实现代码</li><li><code>spring-cloud-dependencies</code>：在 <code>properties</code> 配置中预定义了版本号为 <code>Finchley.RC1</code> ，表示我们的 Spring Cloud 使用的是 F 版</li><li>build：配置了项目所需的各种插件</li><li>repositories：配置项目下载依赖时的第三方库</li></ul><p>在实际开发中，我们所有的项目都会依赖这个 <code>dependencies</code> 项目，整个项目周期中的所有第三方依赖的版本也都由该项目进行管理。</p><h1 id="_02-服务注册与发现" tabindex="-1"><a class="header-anchor" href="#_02-服务注册与发现" aria-hidden="true">#</a> 02-服务注册与发现</h1><h1 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h1>`,9),b={href:"https://www.bilibili.com/video/av27864563",target:"_blank",rel:"noopener noreferrer"},p=e(`<h2 id="概述-2" tabindex="-1"><a class="header-anchor" href="#概述-2" aria-hidden="true">#</a> 概述</h2><p>在这里，我们需要用的组件是 Spring Cloud Netflix 的 Eureka，Eureka 是一个服务注册和发现模块</p><h2 id="创建服务注册中心" tabindex="-1"><a class="header-anchor" href="#创建服务注册中心" aria-hidden="true">#</a> 创建服务注册中心</h2><p>其 <code>pom.xml</code> 文件配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-eureka&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-eureka&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;dependencies&gt;
        &lt;!-- Spring Boot Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Boot End --&gt;

        &lt;!-- Spring Cloud Begin --&gt;
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
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.eureka.EurekaApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h3><p>启动一个服务注册中心，只需要一个注解 <code>@EnableEurekaServer</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h3><p>Eureka 是一个高可用的组件，它没有后端缓存，每一个实例注册之后需要向注册中心发送心跳（因此可以在内存中完成），在默认情况下 Erureka Server 也是一个 Eureka Client ,必须要指定一个 Server。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-eureka

server:
  port: 8761

eureka:
  instance:
    hostname: localhost
  client:
    registerWithEureka: false
    fetchRegistry: false
    serviceUrl:
      defaultZone: http://\${eureka.instance.hostname}:\${server.port}/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>eureka.client.registerWithEureka:false</code> 和 <code>fetchRegistry:false</code> 来表明自己是一个 Eureka Server.</p><h2 id="操作界面" tabindex="-1"><a class="header-anchor" href="#操作界面" aria-hidden="true">#</a> 操作界面</h2><p>Eureka Server 是有界面的，启动工程，打开浏览器访问：</p><p>http://localhost:8761</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246001.png" alt="image"></p><h1 id="_03-创建服务提供者" tabindex="-1"><a class="header-anchor" href="#_03-创建服务提供者" aria-hidden="true">#</a> 03-创建服务提供者</h1><h2 id="本节视频-3" tabindex="-1"><a class="header-anchor" href="#本节视频-3" aria-hidden="true">#</a> 本节视频</h2>`,18),h={href:"https://www.bilibili.com/video/av27864589",target:"_blank",rel:"noopener noreferrer"},f=e(`<h2 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h2><p>当 Client 向 Server 注册时，它会提供一些元数据，例如主机和端口，URL，主页等。Eureka Server 从每个 Client 实例接收心跳消息。 如果心跳超时，则通常将该实例从注册 Server 中删除。</p><h2 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> POM</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-service-admin&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-service-admin&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;dependencies&gt;
        &lt;!-- Spring Boot Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Boot End --&gt;

        &lt;!-- Spring Cloud Begin --&gt;
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
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.service.admin.ServiceAdminApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-1" tabindex="-1"><a class="header-anchor" href="#application-1" aria-hidden="true">#</a> Application</h2><p>通过注解 <code>@EnableEurekaClient</code> 表明自己是一个 Eureka Client.</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.service.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ServiceAdminApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceAdminApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-1" tabindex="-1"><a class="header-anchor" href="#application-yml-1" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-service-admin

server:
  port: 8762

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 需要指明 <code>spring.application.name</code>，这个很重要，这在以后的服务与服务之间相互调用一般都是根据这个 <code>name</code></p><h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.service.admin.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Value(&quot;\${server.port}&quot;)
    private String port;

    @RequestMapping(value = &quot;hi&quot;, method = RequestMethod.GET)
    public String sayHi(@RequestParam(value = &quot;message&quot;) String message) {
        return String.format(&quot;Hi，your message is : %s i am from port : %s&quot;, message, port);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动工程，打开 http://localhost:8761 ，即 Eureka Server 的网址：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246002.png" alt="image"></p><p>你会发现一个服务已经注册在服务中了，服务名为 <code>HELLO-SPRING-CLOUD-SERVICE-ADMIN</code> ,端口为 <code>8762</code></p><p>这时打开 http://localhost:8762/hi?message=HelloSpring ，你会在浏览器上看到 :</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloSpring&quot; i am from port：8762
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_04-创建服务消费者-ribbon" tabindex="-1"><a class="header-anchor" href="#_04-创建服务消费者-ribbon" aria-hidden="true">#</a> 04-创建服务消费者（Ribbon）</h1><h2 id="本节视频-4" tabindex="-1"><a class="header-anchor" href="#本节视频-4" aria-hidden="true">#</a> 本节视频</h2>`,19),x={href:"https://www.bilibili.com/video/av27864612",target:"_blank",rel:"noopener noreferrer"},w=e(`<h2 id="概述-4" tabindex="-1"><a class="header-anchor" href="#概述-4" aria-hidden="true">#</a> 概述</h2><p>在微服务架构中，业务都会被拆分成一个独立的服务，服务与服务的通讯是基于 http restful 的。Spring cloud 有两种服务调用方式，一种是 ribbon + restTemplate，另一种是 feign。在这一篇文章首先讲解下基于 ribbon + rest。</p><h2 id="ribbon-简介" tabindex="-1"><a class="header-anchor" href="#ribbon-简介" aria-hidden="true">#</a> Ribbon 简介</h2><p>Ribbon 是一个负载均衡客户端，可以很好的控制 <code>http</code> 和 <code>tcp</code> 的一些行为。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><ul><li>启动服务提供者（本教程案例工程为：<code>hello-spring-cloud-service-admin</code>），端口号为：<code>8762</code></li><li>修改配置文件的端口号为：<code>8763</code>，启动后在 Eureka 中会注册两个实例，这相当于一个小集群</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246003.png" alt="image"></p><h2 id="创建服务消费者" tabindex="-1"><a class="header-anchor" href="#创建服务消费者" aria-hidden="true">#</a> 创建服务消费者</h2><p>创建一个工程名为 <code>hello-spring-cloud-web-admin-ribbon</code> 的服务消费者项目，<code>pom.xml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-web-admin-ribbon&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-web-admin-ribbon&lt;/name&gt;
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
            &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;

        &lt;!-- 解决 thymeleaf 模板引擎一定要执行严格的 html5 格式校验问题 --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;net.sourceforge.nekohtml&lt;/groupId&gt;
            &lt;artifactId&gt;nekohtml&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.web.admin.ribbon.WebAdminRibbonApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是增加了 Ribbon 的依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-2" tabindex="-1"><a class="header-anchor" href="#application-2" aria-hidden="true">#</a> Application</h3><p>通过 <code>@EnableDiscoveryClient</code> 注解注册到服务中心</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.ribbon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class WebAdminRibbonApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebAdminRibbonApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-2" tabindex="-1"><a class="header-anchor" href="#application-yml-2" aria-hidden="true">#</a> application.yml</h3><p>设置程序端口号为：<code>8764</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-web-admin-ribbon
  thymeleaf:
    cache: false
    mode: LEGACYHTML5
    encoding: UTF-8
    servlet:
      content-type: text/html

server:
  port: 8764

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>配置注入 <code>RestTemplate</code> 的 Bean，并通过 <code>@LoadBalanced</code> 注解表明开启负载均衡功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.ribbon.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfiguration {

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建测试用的-service" tabindex="-1"><a class="header-anchor" href="#创建测试用的-service" aria-hidden="true">#</a> 创建测试用的 Service</h3><p>在这里我们直接用的程序名替代了具体的 URL 地址，在 Ribbon 中它会根据服务名来选择具体的服务实例，根据服务实例在请求的时候会用具体的 URL 替换掉服务名，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.ribbon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AdminService {

    @Autowired
    private RestTemplate restTemplate;

    public String sayHi(String message) {
        return restTemplate.getForObject(&quot;http://HELLO-SPRING-CLOUD-SERVICE-ADMIN/hi?message=&quot; + message, String.class);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建测试用的-controller" tabindex="-1"><a class="header-anchor" href="#创建测试用的-controller" aria-hidden="true">#</a> 创建测试用的 Controller</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.ribbon.controller;

import com.funtl.hello.spring.cloud.web.admin.ribbon.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = &quot;hi&quot;, method = RequestMethod.GET)
    public String sayHi(@RequestParam String message) {
        return adminService.sayHi(message);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试访问" tabindex="-1"><a class="header-anchor" href="#测试访问" aria-hidden="true">#</a> 测试访问</h3><p>在浏览器上多次访问 http://localhost:8764/hi?message=HelloRibbon</p><p>浏览器交替显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloRibbon&quot; i am from port：8762
Hi，your message is :&quot;HelloRibbon&quot; i am from port：8763

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求成功则表示我们已经成功实现了负载均衡功能来访问不同端口的实例</p><h2 id="此时的架构" tabindex="-1"><a class="header-anchor" href="#此时的架构" aria-hidden="true">#</a> 此时的架构</h2><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246004.png" alt="image"></p><ul><li>一个服务注册中心，Eureka Server，端口号为：<code>8761</code></li><li><code>service-admin</code> 工程运行了两个实例，端口号分别为：<code>8762</code>，<code>8763</code></li><li><code>web-admin-ribbon</code> 工程端口号为：<code>8764</code></li><li><code>web-admin-ribbon</code> 通过 <code>RestTemplate</code> 调用 <code>service-admin</code> 接口时因为启用了负载均衡功能故会轮流调用它的 <code>8762</code> 和 <code>8763</code> 端口</li></ul><h2 id="附" tabindex="-1"><a class="header-anchor" href="#附" aria-hidden="true">#</a> 附</h2><h3 id="在-idea-中配置一个工程启动多个实例" tabindex="-1"><a class="header-anchor" href="#在-idea-中配置一个工程启动多个实例" aria-hidden="true">#</a> 在 IDEA 中配置一个工程启动多个实例</h3><h4 id="步骤一" tabindex="-1"><a class="header-anchor" href="#步骤一" aria-hidden="true">#</a> 步骤一</h4><p>点击 <code>Run -&gt; Edit Configurations...</code></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246005.png" alt="image"></p><h4 id="步骤二" tabindex="-1"><a class="header-anchor" href="#步骤二" aria-hidden="true">#</a> 步骤二</h4><p>选择需要启动多实例的项目并去掉 <code>Single instance only</code> 前面的勾</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246006.png" alt="image"></p><h4 id="步骤三" tabindex="-1"><a class="header-anchor" href="#步骤三" aria-hidden="true">#</a> 步骤三</h4><p>通过修改 <code>application.yml</code> 配置文件的 <code>server.port</code> 的端口，启动多个实例，需要多个端口，分别进行启动即可。</p><h1 id="_05-创建服务消费者-feign" tabindex="-1"><a class="header-anchor" href="#_05-创建服务消费者-feign" aria-hidden="true">#</a> 05-创建服务消费者（Feign）</h1><h2 id="本节视频-5" tabindex="-1"><a class="header-anchor" href="#本节视频-5" aria-hidden="true">#</a> 本节视频</h2>`,46),I={href:"https://www.bilibili.com/video/av27864637",target:"_blank",rel:"noopener noreferrer"},y=e(`<h2 id="概述-5" tabindex="-1"><a class="header-anchor" href="#概述-5" aria-hidden="true">#</a> 概述</h2><p>Feign 是一个声明式的伪 Http 客户端，它使得写 Http 客户端变得更简单。使用 Feign，只需要创建一个接口并注解。它具有可插拔的注解特性，可使用 Feign 注解和 JAX-RS 注解。Feign 支持可插拔的编码器和解码器。Feign 默认集成了 Ribbon，并和 Eureka 结合，默认实现了负载均衡的效果</p><ul><li>Feign 采用的是基于接口的注解</li><li>Feign 整合了 ribbon</li></ul><h2 id="创建服务消费者-1" tabindex="-1"><a class="header-anchor" href="#创建服务消费者-1" aria-hidden="true">#</a> 创建服务消费者</h2><p>创建一个工程名为 <code>hello-spring-cloud-web-admin-feign</code> 的服务消费者项目，<code>pom.xml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-web-admin-feign&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-web-admin-feign&lt;/name&gt;
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
            &lt;artifactId&gt;spring-boot-starter-thymeleaf&lt;/artifactId&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;

        &lt;!-- 解决 thymeleaf 模板引擎一定要执行严格的 html5 格式校验问题 --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;net.sourceforge.nekohtml&lt;/groupId&gt;
            &lt;artifactId&gt;nekohtml&lt;/artifactId&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.web.admin.feign.WebAdminFeignApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是增加了 Feign 的依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-3" tabindex="-1"><a class="header-anchor" href="#application-3" aria-hidden="true">#</a> Application</h3><p>通过 <code>@EnableFeignClients</code> 注解开启 Feign 功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.feign;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class WebAdminFeignApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebAdminFeignApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-3" tabindex="-1"><a class="header-anchor" href="#application-yml-3" aria-hidden="true">#</a> application.yml</h3><p>设置程序端口号为：<code>8765</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-web-admin-feign
  thymeleaf:
    cache: false
    mode: LEGACYHTML5
    encoding: UTF-8
    servlet:
      content-type: text/html

server:
  port: 8765

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-feign-接口" tabindex="-1"><a class="header-anchor" href="#创建-feign-接口" aria-hidden="true">#</a> 创建 Feign 接口</h3><p>通过 <code>@FeignClient(&quot;服务名&quot;)</code> 注解来指定调用哪个服务。代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.feign.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = &quot;hello-spring-cloud-service-admin&quot;)
public interface AdminService {

    @RequestMapping(value = &quot;hi&quot;, method = RequestMethod.GET)
    public String sayHi(@RequestParam(value = &quot;message&quot;) String message);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建测试用的-controller-1" tabindex="-1"><a class="header-anchor" href="#创建测试用的-controller-1" aria-hidden="true">#</a> 创建测试用的 Controller</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.feign.controller;

import com.funtl.hello.spring.cloud.web.admin.feign.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = &quot;hi&quot;, method = RequestMethod.GET)
    public String sayHi(@RequestParam String message) {
        return adminService.sayHi(message);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试访问-1" tabindex="-1"><a class="header-anchor" href="#测试访问-1" aria-hidden="true">#</a> 测试访问</h3><p>在浏览器上多次访问 http://localhost:8765/hi?message=HelloFeign</p><p>浏览器交替显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloFeign&quot; i am from port：8762
Hi，your message is :&quot;HelloFeign&quot; i am from port：8763

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求成功则表示我们已经成功实现了 Feign 功能来访问不同端口的实例</p><h1 id="_06-使用熔断器防止服务雪崩" tabindex="-1"><a class="header-anchor" href="#_06-使用熔断器防止服务雪崩" aria-hidden="true">#</a> 06-使用熔断器防止服务雪崩</h1><h2 id="本节视频-6" tabindex="-1"><a class="header-anchor" href="#本节视频-6" aria-hidden="true">#</a> 本节视频</h2>`,26),k={href:"https://www.bilibili.com/video/av27864664",target:"_blank",rel:"noopener noreferrer"},S=e(`<h2 id="概述-6" tabindex="-1"><a class="header-anchor" href="#概述-6" aria-hidden="true">#</a> 概述</h2><p>在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 <code>RPC</code> 相互调用，在 Spring Cloud 中可以用 <code>RestTemplate + Ribbon</code> 和 <code>Feign</code> 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，<code>Servlet</code> 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 <strong>“雪崩”</strong> 效应。</p><p>为了解决这个问题，业界提出了熔断器模型。</p><p>Netflix 开源了 Hystrix 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246007.png" alt="image"></p><p>较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值（Hystrix 是 <strong>5 秒 20 次</strong>） 熔断器将会被打开。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246008.png" alt="image"></p><p>熔断器打开后，为了避免连锁故障，通过 <code>fallback</code> 方法可以直接返回一个固定值。</p><h2 id="ribbon-中使用熔断器" tabindex="-1"><a class="header-anchor" href="#ribbon-中使用熔断器" aria-hidden="true">#</a> Ribbon 中使用熔断器</h2><h3 id="在-pom-xml-中增加依赖" tabindex="-1"><a class="header-anchor" href="#在-pom-xml-中增加依赖" aria-hidden="true">#</a> 在 <code>pom.xml</code> 中增加依赖</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-application-中增加-enablehystrix-注解" tabindex="-1"><a class="header-anchor" href="#在-application-中增加-enablehystrix-注解" aria-hidden="true">#</a> 在 Application 中增加 <code>@EnableHystrix</code> 注解</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.ribbon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;

@SpringBootApplication
@EnableDiscoveryClient
@EnableHystrix
public class WebAdminRibbonApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebAdminRibbonApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-service-中增加-hystrixcommand-注解" tabindex="-1"><a class="header-anchor" href="#在-service-中增加-hystrixcommand-注解" aria-hidden="true">#</a> 在 Service 中增加 <code>@HystrixCommand</code> 注解</h3><p>在 Ribbon 调用方法上增加 <code>@HystrixCommand</code> 注解并指定 <code>fallbackMethod</code> 熔断方法</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.ribbon.service;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AdminService {

    @Autowired
    private RestTemplate restTemplate;

    @HystrixCommand(fallbackMethod = &quot;hiError&quot;)
    public String sayHi(String message) {
        return restTemplate.getForObject(&quot;http://HELLO-SPRING-CLOUD-SERVICE-ADMIN/hi?message=&quot; + message, String.class);
    }

    public String hiError(String message) {
        return &quot;Hi，your message is :\\&quot;&quot; + message + &quot;\\&quot; but request error.&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试熔断器" tabindex="-1"><a class="header-anchor" href="#测试熔断器" aria-hidden="true">#</a> 测试熔断器</h3><p>此时我们关闭服务提供者，再次请求 http://localhost:8764/hi?message=HelloRibbon 浏览器会显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloRibbon&quot; but request error.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="feign-中使用熔断器" tabindex="-1"><a class="header-anchor" href="#feign-中使用熔断器" aria-hidden="true">#</a> Feign 中使用熔断器</h2><p>Feign 是自带熔断器的，但默认是关闭的。需要在配置文件中配置打开它，在配置文件增加以下代码：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>feign:
  hystrix:
    enabled: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-service-中增加-fallback-指定类" tabindex="-1"><a class="header-anchor" href="#在-service-中增加-fallback-指定类" aria-hidden="true">#</a> 在 Service 中增加 <code>fallback</code> 指定类</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.feign.service;

import com.funtl.hello.spring.cloud.web.admin.feign.service.hystrix.AdminServiceHystrix;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = &quot;hello-spring-cloud-service-admin&quot;, fallback = AdminServiceHystrix.class)
public interface AdminService {

    @RequestMapping(value = &quot;hi&quot;, method = RequestMethod.GET)
    public String sayHi(@RequestParam(value = &quot;message&quot;) String message);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建熔断器类并实现对应的-feign-接口" tabindex="-1"><a class="header-anchor" href="#创建熔断器类并实现对应的-feign-接口" aria-hidden="true">#</a> 创建熔断器类并实现对应的 Feign 接口</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.web.admin.feign.service.hystrix;

import com.funtl.hello.spring.cloud.web.admin.feign.service.AdminService;
import org.springframework.stereotype.Component;

@Component
public class AdminServiceHystrix implements AdminService {

    @Override
    public String sayHi(String message) {
        return &quot;Hi，your message is :\\&quot;&quot; + message + &quot;\\&quot; but request error.&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试熔断器-1" tabindex="-1"><a class="header-anchor" href="#测试熔断器-1" aria-hidden="true">#</a> 测试熔断器</h3><p>此时我们关闭服务提供者，再次请求 http://localhost:8765/hi?message=HelloFeign 浏览器会显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloFeign&quot; but request error.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_08-使用路由网关统一访问接口" tabindex="-1"><a class="header-anchor" href="#_08-使用路由网关统一访问接口" aria-hidden="true">#</a> 08-使用路由网关统一访问接口</h1><h2 id="本节视频-7" tabindex="-1"><a class="header-anchor" href="#本节视频-7" aria-hidden="true">#</a> 本节视频</h2>`,31),q={href:"https://www.bilibili.com/video/av27864709",target:"_blank",rel:"noopener noreferrer"},P=e(`<h2 id="概述-7" tabindex="-1"><a class="header-anchor" href="#概述-7" aria-hidden="true">#</a> 概述</h2><p>在微服务架构中，需要几个基础的服务治理组件，包括服务注册与发现、服务消费、负载均衡、熔断器、智能路由、配置管理等，由这几个基础组件相互协作，共同组建了一个简单的微服务系统。一个简单的微服务系统如下图：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246011.png" alt="image"></p><p>在 Spring Cloud 微服务系统中，一种常见的负载均衡方式是，客户端的请求首先经过负载均衡（Zuul、Ngnix），再到达服务网关（Zuul 集群），然后再到具体的服。服务统一注册到高可用的服务注册中心集群，服务的所有的配置文件由配置服务管理，配置服务的配置文件放在 GIT 仓库，方便开发人员随时改配置。</p><h2 id="zuul-简介" tabindex="-1"><a class="header-anchor" href="#zuul-简介" aria-hidden="true">#</a> Zuul 简介</h2><p>Zuul 的主要功能是路由转发和过滤器。路由功能是微服务的一部分，比如 <code>/api/user</code> 转发到到 User 服务，<code>/api/shop</code> 转发到到 Shop 服务。Zuul 默认和 Ribbon 结合实现了负载均衡的功能。</p><h2 id="创建路由网关" tabindex="-1"><a class="header-anchor" href="#创建路由网关" aria-hidden="true">#</a> 创建路由网关</h2><p><code>pom.xml</code> 文件如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-zuul&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-zuul&lt;/name&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-netflix-zuul&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.zuul.ZuulApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要是增加了 Zuul 的依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-zuul&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-4" tabindex="-1"><a class="header-anchor" href="#application-4" aria-hidden="true">#</a> Application</h3><p>增加 <code>@EnableZuulProxy</code> 注解开启 Zuul 功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.zuul;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
public class ZuulApplication {
    public static void main(String[] args) {
        SpringApplication.run(ZuulApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application-yml-4" tabindex="-1"><a class="header-anchor" href="#application-yml-4" aria-hidden="true">#</a> application.yml</h3><ul><li>设置端口号为：<code>8769</code></li><li>增加 Zuul 配置</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: hello-spring-cloud-zuul

server:
  port: 8769

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

zuul:
  routes:
    api-a:
      path: /api/a/**
      serviceId: hello-spring-cloud-web-admin-ribbon
    api-b:
      path: /api/b/**
      serviceId: hello-spring-cloud-web-admin-feign

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由说明：</p><ul><li>以 <code>/api/a</code> 开头的请求都转发给 <code>hello-spring-cloud-web-admin-ribbon</code> 服务</li><li>以 <code>/api/b</code> 开头的请求都转发给 <code>hello-spring-cloud-web-admin-feign</code> 服务</li></ul><h2 id="测试访问-2" tabindex="-1"><a class="header-anchor" href="#测试访问-2" aria-hidden="true">#</a> 测试访问</h2><p>依次运行 <code>EurekaApplication</code>、<code>ServiceAdminApplication</code>、<code>WebAdminRibbonApplication</code>、<code>WebAdminFeignApplication</code>、<code>ZuulApplication</code></p><p>打开浏览器访问：http://localhost:8769/api/a/hi?message=HelloZuul 浏览器显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloZuul&quot; i am from port：8763

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器访问：http://localhost:8769/api/b/hi?message=HelloZuul 浏览器显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloZuul&quot; i am from port：8763

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>至此说明 Zuul 的路由功能配置成功</p><h2 id="配置网关路由失败时的回调" tabindex="-1"><a class="header-anchor" href="#配置网关路由失败时的回调" aria-hidden="true">#</a> 配置网关路由失败时的回调</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.zuul.fallback;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.cloud.netflix.zuul.filters.route.FallbackProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * 路由 hello-spring-cloud-web-admin-feign 失败时的回调
 * &lt;p&gt;Title: WebAdminFeignFallbackProvider&lt;/p&gt;
 * &lt;p&gt;Description: &lt;/p&gt;
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/7/27 6:55
 */
@Component
public class WebAdminFeignFallbackProvider implements FallbackProvider {

    @Override
    public String getRoute() {
        // ServiceId，如果需要所有调用都支持回退，则 return &quot;*&quot; 或 return null
        return &quot;hello-spring-cloud-web-admin-feign&quot;;
    }

    /**
     * 如果请求服务失败，则返回指定的信息给调用者
     * @param route
     * @param cause
     * @return
     */
    @Override
    public ClientHttpResponse fallbackResponse(String route, Throwable cause) {
        return new ClientHttpResponse() {
            /**
             * 网关向 api 服务请求失败了，但是消费者客户端向网关发起的请求是成功的，
             * 不应该把 api 的 404,500 等问题抛给客户端
             * 网关和 api 服务集群对于客户端来说是黑盒
             * @return
             * @throws IOException
             */
            @Override
            public HttpStatus getStatusCode() throws IOException {
                return HttpStatus.OK;
            }

            @Override
            public int getRawStatusCode() throws IOException {
                return HttpStatus.OK.value();
            }

            @Override
            public String getStatusText() throws IOException {
                return HttpStatus.OK.getReasonPhrase();
            }

            @Override
            public void close() {

            }

            @Override
            public InputStream getBody() throws IOException {
                ObjectMapper objectMapper = new ObjectMapper();
                Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();
                map.put(&quot;status&quot;, 200);
                map.put(&quot;message&quot;, &quot;无法连接，请检查您的网络&quot;);
                return new ByteArrayInputStream(objectMapper.writeValueAsString(map).getBytes(&quot;UTF-8&quot;));
            }

            @Override
            public HttpHeaders getHeaders() {
                HttpHeaders headers = new HttpHeaders();
                // 和 getBody 中的内容编码一致
                headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
                return headers;
            }
        };
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_09-使用路由网关的服务过滤功能" tabindex="-1"><a class="header-anchor" href="#_09-使用路由网关的服务过滤功能" aria-hidden="true">#</a> 09-使用路由网关的服务过滤功能</h1><h2 id="本节视频-8" tabindex="-1"><a class="header-anchor" href="#本节视频-8" aria-hidden="true">#</a> 本节视频</h2>`,30),C={href:"https://www.bilibili.com/video/av27864725",target:"_blank",rel:"noopener noreferrer"},A=e(`<h2 id="概述-8" tabindex="-1"><a class="header-anchor" href="#概述-8" aria-hidden="true">#</a> 概述</h2><p>Zuul 不仅仅只是路由，还有很多强大的功能，本节演示一下它的服务过滤功能，比如用在安全验证方面。</p><h2 id="创建服务过滤器" tabindex="-1"><a class="header-anchor" href="#创建服务过滤器" aria-hidden="true">#</a> 创建服务过滤器</h2><p>继承 <code>ZuulFilter</code> 类并在类上增加 <code>@Component</code> 注解就可以使用服务过滤功能了，非常简单方便</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.zuul.filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * Zuul 的服务过滤演示
 * &lt;p&gt;Title: LoginFilter&lt;/p&gt;
 * &lt;p&gt;Description: &lt;/p&gt;
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/5/29 22:02
 */
@Component
public class LoginFilter extends ZuulFilter {

    private static final Logger logger = LoggerFactory.getLogger(LoginFilter.class);

    /**
     * 配置过滤类型，有四种不同生命周期的过滤器类型
     * 1. pre：路由之前
     * 2. routing：路由之时
     * 3. post：路由之后
     * 4. error：发送错误调用
     * @return
     */
    @Override
    public String filterType() {
        return &quot;pre&quot;;
    }

    /**
     * 配置过滤的顺序
     * @return
     */
    @Override
    public int filterOrder() {
        return 0;
    }

    /**
     * 配置是否需要过滤：true/需要，false/不需要
     * @return
     */
    @Override
    public boolean shouldFilter() {
        return true;
    }

    /**
     * 过滤器的具体业务代码
     * @return
     * @throws ZuulException
     */
    @Override
    public Object run() throws ZuulException {
        RequestContext context = RequestContext.getCurrentContext();
        HttpServletRequest request = context.getRequest();
        logger.info(&quot;{} &gt;&gt;&gt; {}&quot;, request.getMethod(), request.getRequestURL().toString());
        String token = request.getParameter(&quot;token&quot;);
        if (token == null) {
            logger.warn(&quot;Token is empty&quot;);
            context.setSendZuulResponse(false);
            context.setResponseStatusCode(401);
            try {
                context.getResponse().getWriter().write(&quot;Token is empty&quot;);
            } catch (IOException e) {
            }
        } else {
            logger.info(&quot;OK&quot;);
        }
        return null;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filtertype" tabindex="-1"><a class="header-anchor" href="#filtertype" aria-hidden="true">#</a> filterType</h3><p>返回一个字符串代表过滤器的类型，在 Zuul 中定义了四种不同生命周期的过滤器类型</p><ul><li>pre：路由之前</li><li>routing：路由之时</li><li>post： 路由之后</li><li>error：发送错误调用</li></ul><h3 id="filterorder" tabindex="-1"><a class="header-anchor" href="#filterorder" aria-hidden="true">#</a> filterOrder</h3><p>过滤的顺序</p><h3 id="shouldfilter" tabindex="-1"><a class="header-anchor" href="#shouldfilter" aria-hidden="true">#</a> shouldFilter</h3><p>是否需要过滤，这里是 <code>true</code>，需要过滤</p><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h3><p>过滤器的具体业务代码</p><h2 id="测试过滤器" tabindex="-1"><a class="header-anchor" href="#测试过滤器" aria-hidden="true">#</a> 测试过滤器</h2><p>浏览器访问：http://localhost:8769/api/a/hi?message=HelloZuul 网页显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Token is empty

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器访问：http://localhost:8769/api/b/hi?message=HelloZuul&amp;token=123 网页显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hi，your message is :&quot;HelloZuul&quot; i am from port：8763
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function R(E,H){const n=s("ExternalLinkIcon");return r(),t("div",null,[v,i("ul",null,[i("li",null,[i("a",u,[l("【视频】微服务框架-SpringCloud-简介"),d(n)])])]),o,i("ul",null,[i("li",null,[i("a",m,[l("【视频】微服务框架-SpringCloud-创建统一的依赖管理"),d(n)])])]),g,i("ul",null,[i("li",null,[i("a",b,[l("【视频】微服务框架-SpringCloud-服务注册与发现"),d(n)])])]),p,i("ul",null,[i("li",null,[i("a",h,[l("【视频】微服务框架-SpringCloud-创建服务提供者"),d(n)])])]),f,i("ul",null,[i("li",null,[i("a",x,[l("【视频】微服务框架-SpringCloud-创建服务消费者（Ribbon）"),d(n)])])]),w,i("ul",null,[i("li",null,[i("a",I,[l("【视频】微服务框架-SpringCloud-创建服务消费者（Feign）"),d(n)])])]),y,i("ul",null,[i("li",null,[i("a",k,[l("【视频】微服务框架-SpringCloud-使用熔断器防止服务雪崩"),d(n)])])]),S,i("ul",null,[i("li",null,[i("a",q,[l("【视频】微服务框架-SpringCloud-使用路由网关统一访问接口"),d(n)])])]),P,i("ul",null,[i("li",null,[i("a",C,[l("【视频】微服务框架-SpringCloud-使用路由网关的服务过滤功能"),d(n)])])]),A])}const F=a(c,[["render",R],["__file","SpringCloudNetflix.html.vue"]]);export{F as default};
