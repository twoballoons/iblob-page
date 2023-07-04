import{_ as d,r as s,o as r,c as t,a as i,b as n,d as l,e as a}from"./app-f078eaf8.js";const c={},o=a('<h1 id="_01-简介" tabindex="-1"><a class="header-anchor" href="#_01-简介" aria-hidden="true">#</a> 01-简介</h1><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',3),v={href:"https://www.bilibili.com/video/av40452294/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.bilibili.com/video/av40452398/",target:"_blank",rel:"noopener noreferrer"},g=i("h2",{id:"视频合辑",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#视频合辑","aria-hidden":"true"},"#"),n(" 视频合辑")],-1),p={href:"https://www.bilibili.com/video/av40924228/",target:"_blank",rel:"noopener noreferrer"},m=i("h2",{id:"概述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),n(" 概述")],-1),b=i("p",null,[i("strong",null,"2018 年 10 月 31 日的凌晨，这个伟大的日子里，Spring Cloud Alibaba 正式入驻了 Spring Cloud 官方孵化器，并在 Maven 中央库发布了第一个版本。")],-1),h={href:"https://spring.io/blog/2018/10/30/spring-cloud-for-alibaba-0-2-0-released",target:"_blank",rel:"noopener noreferrer"},f=i("blockquote",null,[i("p",null,"The Spring Cloud Alibaba project, consisting of Alibaba’s open-source components and several Alibaba Cloud products, aims to implement and expose well known Spring Framework patterns and abstractions to bring the benefits of Spring Boot and Spring Cloud to Java developers using Alibaba products.")],-1),x=i("blockquote",null,[i("p",null,"Spring Cloud for Alibaba，它是由一些阿里巴巴的开源组件和云产品组成的。这个项目的目的是为了让大家所熟知的 Spring 框架，其优秀的设计模式和抽象理念，以给使用阿里巴巴产品的 Java 开发者带来使用 Spring Boot 和 Spring Cloud 的更多便利。")],-1),S=i("p",null,"Spring Cloud Alibaba 致力于提供微服务开发的一站式解决方案。此项目包含开发分布式应用微服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。",-1),w=i("p",null,"依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。",-1),y=i("p",null,[i("strong",null,"注：学习 Spring Cloud Alibaba 之前，先学习一下我之前的 Spring Cloud 课程，效果更佳哦；")],-1),I={href:"https://github.com/spring-cloud-incubator/spring-cloud-alibaba/blob/master/README-zh.md",target:"_blank",rel:"noopener noreferrer"},P=a('<h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><ul><li><strong>服务限流降级</strong>：默认支持 Servlet、Feign、RestTemplate、Dubbo 和 RocketMQ 限流降级功能的接入，可以在运行时通过控制台实时修改限流降级规则，还支持查看限流降级 Metrics 监控。</li><li><strong>服务注册与发现</strong>：适配 Spring Cloud 服务注册与发现标准，默认集成了 Ribbon 的支持。</li><li><strong>分布式配置管理</strong>：支持分布式系统中的外部化配置，配置更改时自动刷新。</li><li><strong>消息驱动能力</strong>：基于 Spring Cloud Stream 为微服务应用构建消息驱动能力。</li><li><strong>阿里云对象存储</strong>：阿里云提供的海量、安全、低成本、高可靠的云存储服务。支持在任何应用、任何时间、任何地点存储和访问任意类型的数据。</li><li><strong>分布式任务调度</strong>：提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。同时提供分布式的任务执行模型，如网格任务。网格任务支持海量子任务均匀分配到所有 Worker（schedulerx-client）上执行。</li></ul><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><ul><li><strong>Sentinel</strong>：把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。</li><li><strong>Nacos</strong>：一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。</li><li><strong>RocketMQ</strong>：一款开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。</li><li><strong>Alibaba Cloud ACM</strong>：一款在分布式架构环境中对应用配置进行集中管理和推送的应用配置中心产品。</li><li><strong>Alibaba Cloud OSS</strong>: 阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。</li><li><strong>Alibaba Cloud SchedulerX</strong>: 阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准、高可靠、高可用的定时（基于 Cron 表达式）任务调度服务。</li></ul><h1 id="_02-创建统一的依赖管理" tabindex="-1"><a class="header-anchor" href="#_02-创建统一的依赖管理" aria-hidden="true">#</a> 02-创建统一的依赖管理</h1><h1 id="创建统一的依赖管理" tabindex="-1"><a class="header-anchor" href="#创建统一的依赖管理" aria-hidden="true">#</a> 创建统一的依赖管理</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>',7),C={href:"https://www.bilibili.com/video/av40469026/",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p>温馨提示</p><p>当前 Spring Cloud Alibaba 的 0.2.1.RELEASE 版本基于 Spring Cloud Finchley（F）开发，故在选择 Spring Boot 版本时不要使用 2.1.0 及以上版本（因为 2.1.x 版本必须使用 Spring Cloud Greenwich，俗称 G 版），请使用官方 Demo 中使用的 2.0.6.RELEASE，以免发生意想不到的问题（比如服务无法注册到服务器）</p><p>Spring Cloud Alibaba 项目都是基于 Spring Cloud，而 Spring Cloud 项目又是基于 Spring Boot 进行开发，并且都是使用 Maven 做项目管理工具。在实际开发中，我们一般都会创建一个依赖管理项目作为 Maven 的 Parent 项目使用，这样做可以极大的方便我们对 Jar 包版本的统一管理。</p><h2 id="创建依赖管理项目" tabindex="-1"><a class="header-anchor" href="#创建依赖管理项目" aria-hidden="true">#</a> 创建依赖管理项目</h2><p>创建一个工程名为 <code>hello-spring-cloud-alibaba-dependencies</code> 的项目，<code>pom.xml</code> 配置文件如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;2.0.6.RELEASE&lt;/version&gt;
    &lt;/parent&gt;

    &lt;groupId&gt;com.funtl&lt;/groupId&gt;
    &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
    &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;pom&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-alibaba-dependencies&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;properties&gt;
        &lt;!-- Environment Settings --&gt;
        &lt;java.version&gt;1.8&lt;/java.version&gt;
        &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
        &lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;

        &lt;!-- Spring Settings --&gt;
        &lt;spring-cloud.version&gt;Finchley.SR2&lt;/spring-cloud.version&gt;
        &lt;spring-cloud-alibaba.version&gt;0.2.1.RELEASE&lt;/spring-cloud-alibaba.version&gt;
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
            &lt;dependency&gt;
                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
                &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
                &lt;version&gt;\${spring-cloud-alibaba.version}&lt;/version&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>parent：继承了 Spring Boot 的 Parent，表示我们是一个 Spring Boot 工程</li><li>package：<code>pom</code>，表示该项目仅当做依赖项目，没有具体的实现代码</li><li><code>spring-cloud-alibaba-dependencies</code>：在 <code>properties</code> 配置中预定义了版本号为 <code>0.2.1.RELEASE</code> ，表示我们的 Spring Cloud Alibaba 对应的是 Spring Cloud Finchley 版本</li><li>build：配置了项目所需的各种插件</li><li>repositories：配置项目下载依赖时的第三方库</li></ul><h2 id="依赖版本说明" tabindex="-1"><a class="header-anchor" href="#依赖版本说明" aria-hidden="true">#</a> 依赖版本说明</h2><p>项目的最新版本是 0.2.1.RELEASE 和 0.1.1.RELEASE，版本 0.2.1.RELEASE 对应的是 Spring Cloud Finchley 版本，版本 0.1.1.RELEASE 对应的是 Spring Cloud Edgware 版本。</p><p>小提示</p><p>截止到博客发表时间 <code>2019 年 01 月 05 日</code>，项目还处在孵化阶段，故所有版本号都以 <code>0</code> 开头；后续肯定会有很多强大的功能帮助我们更好的实现分布式应用的开发；</p><h2 id="与-spring-cloud-netflix-的区别" tabindex="-1"><a class="header-anchor" href="#与-spring-cloud-netflix-的区别" aria-hidden="true">#</a> 与 Spring Cloud Netflix 的区别</h2><p>主要增加了 <code>org.springframework.cloud:spring-cloud-alibaba-dependencies</code></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190113133947.png" alt="image"></p><h1 id="_03-服务注册与发现" tabindex="-1"><a class="header-anchor" href="#_03-服务注册与发现" aria-hidden="true">#</a> 03-服务注册与发现</h1><h1 id="服务注册与发现" tabindex="-1"><a class="header-anchor" href="#服务注册与发现" aria-hidden="true">#</a> 服务注册与发现</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>`,18),_={href:"https://www.bilibili.com/video/av40469471/",target:"_blank",rel:"noopener noreferrer"},q=i("h2",{id:"概述-2",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述-2","aria-hidden":"true"},"#"),n(" 概述")],-1),A=i("p",null,"在 Spring Cloud Netflix 阶段我们采用 Eureka 做作为我们的服务注册与发现服务器，现利用 Spring Cloud Alibaba 提供的 Nacos 组件替代该方案。",-1),E={href:"https://nacos.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"},N=a(`<h2 id="什么是-nacos" tabindex="-1"><a class="header-anchor" href="#什么是-nacos" aria-hidden="true">#</a> 什么是 Nacos</h2><p>Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。</p><p>Nacos 帮助您更敏捷和容易地构建、交付和管理微服务平台。 Nacos 是构建以“服务”为中心的现代应用架构 (例如微服务范式、云原生范式) 的服务基础设施。</p><h2 id="基本架构及概念" tabindex="-1"><a class="header-anchor" href="#基本架构及概念" aria-hidden="true">#</a> 基本架构及概念</h2><p><img src="https://picgo.xingenhi.cn//typoranacos-Arch.jpg" alt="image"></p><h3 id="服务-service" tabindex="-1"><a class="header-anchor" href="#服务-service" aria-hidden="true">#</a> 服务 (Service)</h3><p>服务是指一个或一组软件功能（例如特定信息的检索或一组操作的执行），其目的是不同的客户端可以为不同的目的重用（例如通过跨进程的网络调用）。Nacos 支持主流的服务生态，如 Kubernetes Service、gRPC|Dubbo RPC Service 或者 Spring Cloud RESTful Service.</p><h3 id="服务注册中心-service-registry" tabindex="-1"><a class="header-anchor" href="#服务注册中心-service-registry" aria-hidden="true">#</a> 服务注册中心 (Service Registry)</h3><p>服务注册中心，它是服务，其实例及元数据的数据库。服务实例在启动时注册到服务注册表，并在关闭时注销。服务和路由器的客户端查询服务注册表以查找服务的可用实例。服务注册中心可能会调用服务实例的健康检查 API 来验证它是否能够处理请求。</p><h3 id="服务元数据-service-metadata" tabindex="-1"><a class="header-anchor" href="#服务元数据-service-metadata" aria-hidden="true">#</a> 服务元数据 (Service Metadata)</h3><p>服务元数据是指包括服务端点(endpoints)、服务标签、服务版本号、服务实例权重、路由规则、安全策略等描述服务的数据</p><h3 id="服务提供方-service-provider" tabindex="-1"><a class="header-anchor" href="#服务提供方-service-provider" aria-hidden="true">#</a> 服务提供方 (Service Provider)</h3><p>是指提供可复用和可调用服务的应用方</p><h3 id="服务消费方-service-consumer" tabindex="-1"><a class="header-anchor" href="#服务消费方-service-consumer" aria-hidden="true">#</a> 服务消费方 (Service Consumer)</h3><p>是指会发起对某个服务调用的应用方</p><h3 id="配置-configuration" tabindex="-1"><a class="header-anchor" href="#配置-configuration" aria-hidden="true">#</a> 配置 (Configuration)</h3><p>在系统开发过程中通常会将一些需要变更的参数、变量等从代码中分离出来独立管理，以独立的配置文件的形式存在。目的是让静态的系统工件或者交付物（如 WAR，JAR 包等）更好地和实际的物理运行环境进行适配。配置管理一般包含在系统部署的过程中，由系统管理员或者运维人员完成这个步骤。配置变更是调整系统运行时的行为的有效手段之一。</p><h3 id="配置管理-configuration-management" tabindex="-1"><a class="header-anchor" href="#配置管理-configuration-management" aria-hidden="true">#</a> 配置管理 (Configuration Management)</h3><p>在数据中心中，系统中所有配置的编辑、存储、分发、变更管理、历史版本管理、变更审计等所有与配置相关的活动统称为配置管理。</p><h3 id="名字服务-naming-service" tabindex="-1"><a class="header-anchor" href="#名字服务-naming-service" aria-hidden="true">#</a> 名字服务 (Naming Service)</h3><p>提供分布式系统中所有对象(Object)、实体(Entity)的“名字”到关联的元数据之间的映射管理服务，例如 ServiceName -&gt; Endpoints Info, Distributed Lock Name -&gt; Lock Owner/Status Info, DNS Domain Name -&gt; IP List, 服务发现和 DNS 就是名字服务的2大场景。</p><h3 id="配置服务-configuration-service" tabindex="-1"><a class="header-anchor" href="#配置服务-configuration-service" aria-hidden="true">#</a> 配置服务 (Configuration Service)</h3><p>在服务或者应用运行过程中，提供动态配置或者元数据以及配置管理的服务提供者。</p><h2 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装" aria-hidden="true">#</a> 下载安装</h2><h3 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h3><p>Nacos 依赖 Java 环境来运行。如果您是从代码开始构建并运行 Nacos，还需要为此配置 Maven 环境，请确保是在以下版本环境中安装使用:</p><ul><li>64 bit OS，支持 Linux/Unix/Mac/Windows，推荐选用 Linux/Unix/Mac。</li><li>64 bit JDK 1.8+</li><li>Maven 3.2.x+</li></ul><h3 id="下载并安装" tabindex="-1"><a class="header-anchor" href="#下载并安装" aria-hidden="true">#</a> 下载并安装</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 下载源码
git clone https://github.com/alibaba/nacos.git

# 安装到本地仓库
cd nacos/
mvn -Prelease-nacos clean install -U

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注：下载依赖时间较长，请耐心等待...</strong></p><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd distribution/target/nacos-server-0.7.0/nacos/bin

# Linux
./startup.sh -m standalone

# Windows
startup.cmd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190105020351.png" alt="image"></p><h2 id="访问服务" tabindex="-1"><a class="header-anchor" href="#访问服务" aria-hidden="true">#</a> 访问服务</h2><p>打开浏览器访问：http://localhost:8848/nacos</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190105020523.png" alt="image"></p><p><strong>注：从 0.8.0 版本开始，需要登录才可访问，默认账号密码为 nacos/nacos</strong></p><h1 id="_04-创建服务提供者" tabindex="-1"><a class="header-anchor" href="#_04-创建服务提供者" aria-hidden="true">#</a> 04-创建服务提供者</h1><h1 id="创建服务提供者" tabindex="-1"><a class="header-anchor" href="#创建服务提供者" aria-hidden="true">#</a> 创建服务提供者</h1><h2 id="本节视频-3" tabindex="-1"><a class="header-anchor" href="#本节视频-3" aria-hidden="true">#</a> 本节视频</h2>`,40),F={href:"https://www.bilibili.com/video/av40469872/",target:"_blank",rel:"noopener noreferrer"},M=a(`<h2 id="概述-3" tabindex="-1"><a class="header-anchor" href="#概述-3" aria-hidden="true">#</a> 概述</h2><p>通过一个简单的示例来感受一下如何将服务注册到 Nacos，其实和 Eureka 没有太大差别。</p><h2 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> POM</h2><p>创建一个工程名为 <code>hello-spring-cloud-alibaba-nacos-provider</code> 的服务提供者项目，<code>pom.xml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-alibaba-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-alibaba-nacos-provider&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-alibaba-nacos-provider&lt;/name&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.alibaba.nacos.provider.NacosProviderApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h2><p>通过 <code>@EnableDiscoveryClient</code> 注解表明是一个 Nacos 客户端，该注解是 Spring Cloud 提供的原生注解</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.provider;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
public class NacosProviderApplication {
    public static void main(String[] args) {
        SpringApplication.run(NacosProviderApplication.class, args);
    }

    @RestController
    public class EchoController {
        @GetMapping(value = &quot;/echo/{message}&quot;)
        public String echo(@PathVariable String message) {
            return &quot;Hello Nacos Discovery &quot; + message;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml" tabindex="-1"><a class="header-anchor" href="#application-yml" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: nacos-provider
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848

server:
  port: 8081

management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动工程" tabindex="-1"><a class="header-anchor" href="#启动工程" aria-hidden="true">#</a> 启动工程</h2><p>通过浏览器访问 <code>http://localhost:8848/nacos</code>，即 Nacos Server 网址</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190105063653.png" alt="image"></p><p>你会发现一个服务已经注册在服务中了，服务名为 <code>nacos-provider</code></p><p>这时打开 <code>http://localhost:8081/echo/hi</code> ，你会在浏览器上看到：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery hi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务的端点检查" tabindex="-1"><a class="header-anchor" href="#服务的端点检查" aria-hidden="true">#</a> 服务的端点检查</h2><p>spring-cloud-starter-alibaba-nacos-discovery 在实现的时候提供了一个 EndPoint, EndPoint 的访问地址为 <code>http://ip:port/actuator/nacos-discovery</code>。 EndPoint 的信息主要提供了两类:</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>1、subscribe: 显示了当前有哪些服务订阅者
2、NacosDiscoveryProperties: 显示了当前服务实例关于 Nacos 的基础配置

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过浏览器访问 <code>http://localhost:8081/actuator/nacos-discovery</code> 你会在浏览器上看到：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190105064504.png" alt="image"></p><h2 id="附-nacos-starter-更多配置项信息" tabindex="-1"><a class="header-anchor" href="#附-nacos-starter-更多配置项信息" aria-hidden="true">#</a> 附：Nacos Starter 更多配置项信息</h2><table><thead><tr><th>配置项</th><th>Key</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>服务端地址</td><td>spring.cloud.nacos.discovery.server-addr</td><td>无</td><td>Nacos Server 启动监听的ip地址和端口</td></tr><tr><td>服务名</td><td>spring.cloud.nacos.discovery.service</td><td>\${spring.application.name}</td><td>给当前的服务命名</td></tr><tr><td>权重</td><td>spring.cloud.nacos.discovery.weight</td><td>1</td><td>取值范围 1 到 100，数值越大，权重越大</td></tr><tr><td>网卡名</td><td>spring.cloud.nacos.discovery.network-interface</td><td>无</td><td>当IP未配置时，注册的IP为此网卡所对应的IP地址，如果此项也未配置，则默认取第一块网卡的地址</td></tr><tr><td>注册的IP地址</td><td>spring.cloud.nacos.discovery.ip</td><td>无</td><td>优先级最高</td></tr><tr><td>注册的端口</td><td>spring.cloud.nacos.discovery.port</td><td>-1</td><td>默认情况下不用配置，会自动探测</td></tr><tr><td>命名空间</td><td>spring.cloud.nacos.discovery.namespace</td><td>无</td><td>常用场景之一是不同环境的注册的区分隔离，例如开发测试环境和生产环境的资源（如配置、服务）隔离等。</td></tr><tr><td>AccessKey</td><td>spring.cloud.nacos.discovery.access-key</td><td>无</td><td>当要上阿里云时，阿里云上面的一个云账号名</td></tr><tr><td>SecretKey</td><td>spring.cloud.nacos.discovery.secret-key</td><td>无</td><td>当要上阿里云时，阿里云上面的一个云账号密码</td></tr><tr><td>Metadata</td><td>spring.cloud.nacos.discovery.metadata</td><td>无</td><td>使用 Map 格式配置，用户可以根据自己的需要自定义一些和服务相关的元数据信息</td></tr><tr><td>日志文件名</td><td>spring.cloud.nacos.discovery.log-name</td><td>无</td><td></td></tr><tr><td>接入点</td><td>spring.cloud.nacos.discovery.enpoint</td><td>UTF-8</td><td>地域的某个服务的入口域名，通过此域名可以动态地拿到服务端地址</td></tr><tr><td>是否集成 Ribbon</td><td>ribbon.nacos.enabled</td><td>true</td><td>一般都设置成 true 即可</td></tr></tbody></table><h1 id="_05-创建服务消费者" tabindex="-1"><a class="header-anchor" href="#_05-创建服务消费者" aria-hidden="true">#</a> 05-创建服务消费者</h1><h1 id="创建服务消费者" tabindex="-1"><a class="header-anchor" href="#创建服务消费者" aria-hidden="true">#</a> 创建服务消费者</h1><h2 id="本节视频-4" tabindex="-1"><a class="header-anchor" href="#本节视频-4" aria-hidden="true">#</a> 本节视频</h2>`,26),j={href:"https://www.bilibili.com/video/av40521088/",target:"_blank",rel:"noopener noreferrer"},R=a(`<h2 id="概述-4" tabindex="-1"><a class="header-anchor" href="#概述-4" aria-hidden="true">#</a> 概述</h2><p>服务消费者的创建与服务提供者大同小异，这里采用最原始的一种方式，即显示的使用 LoadBalanceClient 和 RestTemplate 结合的方式来访问。</p><h2 id="pom-1" tabindex="-1"><a class="header-anchor" href="#pom-1" aria-hidden="true">#</a> POM</h2><p>创建一个工程名为 <code>hello-spring-cloud-alibaba-nacos-consumer</code> 的服务消费者项目，<code>pom.xml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-alibaba-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-alibaba-nacos-consumer&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-alibaba-nacos-consumer&lt;/name&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.alibaba.nacos.consumer.NacosConsumerApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-1" tabindex="-1"><a class="header-anchor" href="#application-1" aria-hidden="true">#</a> Application</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class NacosConsumerApplication {
    public static void main(String[] args) {
        SpringApplication.run(NacosConsumerApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>创建一个名为 <code>NacosConsumerConfiguration</code> 的 Java 配置类，主要作用是为了注入 <code>RestTemplate</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class NacosConsumerConfiguration {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h2><p>创建一个名为 <code>NacosConsumerController</code> 测试用的 Controller</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class NacosConsumerController {

    @Autowired
    private LoadBalancerClient loadBalancerClient;

    @Autowired
    private RestTemplate restTemplate;

    @Value(&quot;\${spring.application.name}&quot;)
    private String appName;

    @GetMapping(value = &quot;/echo/app/name&quot;)
    public String echo() {
        //使用 LoadBalanceClient 和 RestTemplate 结合的方式来访问
        ServiceInstance serviceInstance = loadBalancerClient.choose(&quot;nacos-provider&quot;);
        String url = String.format(&quot;http://%s:%s/echo/%s&quot;, serviceInstance.getHost(), serviceInstance.getPort(), appName);
        return restTemplate.getForObject(url, String.class);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-1" tabindex="-1"><a class="header-anchor" href="#application-yml-1" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: nacos-consumer
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848

server:
  port: 9091

management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动工程-1" tabindex="-1"><a class="header-anchor" href="#启动工程-1" aria-hidden="true">#</a> 启动工程</h2><p>通过浏览器访问 <code>http://localhost:8848/nacos</code>，即 Nacos Server 网址</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190105071118.png" alt="image"></p><p>你会发现多了一个名为 <code>nacos-consumer</code> 的服务</p><p>这时打开 <code>http://localhost:9091/echo/app/name</code> ，你会在浏览器上看到：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery nacos-consumer

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务的端点检查-1" tabindex="-1"><a class="header-anchor" href="#服务的端点检查-1" aria-hidden="true">#</a> 服务的端点检查</h2><p>通过浏览器访问 <code>http://localhost:9091/actuator/nacos-discovery</code> 你会在浏览器上看到：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190105071304.png" alt="image"></p><h1 id="_06-创建服务消费者-feign" tabindex="-1"><a class="header-anchor" href="#_06-创建服务消费者-feign" aria-hidden="true">#</a> 06-创建服务消费者（Feign）</h1><h1 id="创建服务消费者-feign" tabindex="-1"><a class="header-anchor" href="#创建服务消费者-feign" aria-hidden="true">#</a> 创建服务消费者（Feign）</h1><h2 id="本节视频-5" tabindex="-1"><a class="header-anchor" href="#本节视频-5" aria-hidden="true">#</a> 本节视频</h2>`,27),D={href:"https://www.bilibili.com/video/av40521126/",target:"_blank",rel:"noopener noreferrer"},B=a(`<h2 id="概述-5" tabindex="-1"><a class="header-anchor" href="#概述-5" aria-hidden="true">#</a> 概述</h2><p>Feign 是一个声明式的伪 Http 客户端，它使得写 Http 客户端变得更简单。使用 Feign，只需要创建一个接口并注解。它具有可插拔的注解特性，可使用 Feign 注解和 JAX-RS 注解。Feign 支持可插拔的编码器和解码器。Feign 默认集成了 Ribbon，Nacos 也很好的兼容了 Feign，默认实现了负载均衡的效果</p><ul><li>Feign 采用的是基于接口的注解</li><li>Feign 整合了 ribbon</li></ul><h2 id="pom-2" tabindex="-1"><a class="header-anchor" href="#pom-2" aria-hidden="true">#</a> POM</h2><p>创建一个工程名为 <code>hello-spring-cloud-alibaba-nacos-consumer-feign</code> 的服务消费者项目，<code>pom.xml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-alibaba-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-alibaba-nacos-consumer-feign&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-alibaba-nacos-consumer-feign&lt;/name&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.NacosConsumerFeignApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了 <code>org.springframework.cloud:spring-cloud-starter-openfeign</code> 依赖</p><h2 id="application-2" tabindex="-1"><a class="header-anchor" href="#application-2" aria-hidden="true">#</a> Application</h2><p>通过 <code>@EnableFeignClients</code> 注解开启 Feign 功能</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class NacosConsumerFeignApplication {
    public static void main(String[] args) {
        SpringApplication.run(NacosConsumerFeignApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建-feign-接口" tabindex="-1"><a class="header-anchor" href="#创建-feign-接口" aria-hidden="true">#</a> 创建 Feign 接口</h2><p>通过 <code>@FeignClient(&quot;服务名&quot;)</code> 注解来指定调用哪个服务。代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = &quot;nacos-provider&quot;)
public interface EchoService {

    @GetMapping(value = &quot;/echo/{message}&quot;)
    String echo(@PathVariable(&quot;message&quot;) String message);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="controller-1" tabindex="-1"><a class="header-anchor" href="#controller-1" aria-hidden="true">#</a> Controller</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.controller;

import com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.service.EchoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NacosConsumerFeignController {

    @Autowired
    private EchoService echoService;

    @GetMapping(value = &quot;/echo/hi&quot;)
    public String echo() {
        return echoService.echo(&quot;Hi Feign&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-2" tabindex="-1"><a class="header-anchor" href="#application-yml-2" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: nacos-consumer-feign
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848

server:
  port: 9092

management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动工程-2" tabindex="-1"><a class="header-anchor" href="#启动工程-2" aria-hidden="true">#</a> 启动工程</h2><p>通过浏览器访问 <code>http://localhost:8848/nacos</code>，即 Nacos Server 网址</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190106143035.png" alt="image"></p><p>你会发现多了一个名为 <code>nacos-consumer-feign</code> 的服务</p><p>这时打开 <code>http://localhost:9092/echo/hi</code> ，你会在浏览器上看到：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery Hi Feign

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试负载均衡" tabindex="-1"><a class="header-anchor" href="#测试负载均衡" aria-hidden="true">#</a> 测试负载均衡</h2><ul><li>启动多个 <code>consumer-provider</code> 实例，效果图如下：</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190106144323.png" alt="image"></p><ul><li>修改 <code>consumer-provider</code> 项目中的 <code>Controller</code> 代码，用于确定负载均衡生效</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.provider;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableDiscoveryClient
public class NacosProviderApplication {
    public static void main(String[] args) {
        SpringApplication.run(NacosProviderApplication.class, args);
    }

    @Value(&quot;\${server.port}&quot;)
    private String port;

    @RestController
    public class EchoController {
        @GetMapping(value = &quot;/echo/{message}&quot;)
        public String echo(@PathVariable String message) {
            return &quot;Hello Nacos Discovery &quot; + message + &quot; i am from port &quot; + port;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在浏览器上多次访问 <code>http://localhost:9092/echo/hi</code> ，浏览器交替显示：</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery Hi Feign i am from port 8081
Hello Nacos Discovery Hi Feign i am from port 8082

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_07-使用熔断器防止服务雪崩" tabindex="-1"><a class="header-anchor" href="#_07-使用熔断器防止服务雪崩" aria-hidden="true">#</a> 07-使用熔断器防止服务雪崩</h1><h1 id="使用熔断器防止服务雪崩" tabindex="-1"><a class="header-anchor" href="#使用熔断器防止服务雪崩" aria-hidden="true">#</a> 使用熔断器防止服务雪崩</h1><h2 id="本节视频-6" tabindex="-1"><a class="header-anchor" href="#本节视频-6" aria-hidden="true">#</a> 本节视频</h2>`,33),L={href:"https://www.bilibili.com/video/av40734071/",target:"_blank",rel:"noopener noreferrer"},G=a(`<h2 id="概述-6" tabindex="-1"><a class="header-anchor" href="#概述-6" aria-hidden="true">#</a> 概述</h2><p>在微服务架构中，根据业务来拆分成一个个的服务，服务与服务之间可以通过 <code>RPC</code> 相互调用，在 Spring Cloud 中可以用 <code>RestTemplate + LoadBalanceClient</code> 和 <code>Feign</code> 来调用。为了保证其高可用，单个服务通常会集群部署。由于网络原因或者自身的原因，服务并不能保证 100% 可用，如果单个服务出现问题，调用这个服务就会出现线程阻塞，此时若有大量的请求涌入，<code>Servlet</code> 容器的线程资源会被消耗完毕，导致服务瘫痪。服务与服务之间的依赖性，故障会传播，会对整个微服务系统造成灾难性的严重后果，这就是服务故障的 <strong>“雪崩”</strong> 效应。</p><p>为了解决这个问题，业界提出了熔断器模型。</p><p>阿里巴巴开源了 Sentinel 组件，实现了熔断器模式，Spring Cloud 对这一组件进行了整合。在微服务架构中，一个请求需要调用多个服务是非常常见的，如下图：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201805292246007.png" alt="image"></p><p>较底层的服务如果出现故障，会导致连锁故障。当对特定的服务的调用的不可用达到一个阀值熔断器将会被打开。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer201901080205008.png" alt="image"></p><p>熔断器打开后，为了避免连锁故障，通过 <code>fallback</code> 方法可以直接返回一个固定值。</p><h2 id="什么是-sentinel" tabindex="-1"><a class="header-anchor" href="#什么是-sentinel" aria-hidden="true">#</a> 什么是 Sentinel</h2><p>随着微服务的流行，服务和服务之间的稳定性变得越来越重要。 Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。</p><h2 id="sentinel-的特征" tabindex="-1"><a class="header-anchor" href="#sentinel-的特征" aria-hidden="true">#</a> Sentinel 的特征</h2><ul><li><strong>丰富的应用场景：</strong> Sentinel 承接了阿里巴巴近 10 年的 <strong>双十一大促流量</strong> 的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、实时熔断下游不可用应用等。</li><li><strong>完备的实时监控：</strong> Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。</li><li><strong>广泛的开源生态：</strong> Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。</li><li><strong>完善的 SPI 扩展点：</strong> Sentinel 提供简单易用、完善的 SPI 扩展点。您可以通过实现扩展点，快速的定制逻辑。例如定制规则管理、适配数据源等。</li></ul><h2 id="feign-中使用-sentinel" tabindex="-1"><a class="header-anchor" href="#feign-中使用-sentinel" aria-hidden="true">#</a> Feign 中使用 Sentinel</h2><p>如果要在您的项目中引入 Sentinel，使用 group ID 为 <code>org.springframework.cloud</code> 和 artifact ID 为 <code>spring-cloud-starter-alibaba-sentinel</code> 的 starter。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-sentinel&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sentinel 适配了 Feign 组件。但默认是关闭的。需要在配置文件中配置打开它，在配置文件增加以下代码：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>feign:
  sentinel:
    enabled: true

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在-service-中增加-fallback-指定类" tabindex="-1"><a class="header-anchor" href="#在-service-中增加-fallback-指定类" aria-hidden="true">#</a> 在 Service 中增加 fallback 指定类</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.service;

import com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.service.fallback.EchoServiceFallback;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = &quot;nacos-provider&quot;, fallback = EchoServiceFallback.class)
public interface EchoService {

    @GetMapping(value = &quot;/echo/{message}&quot;)
    String echo(@PathVariable(&quot;message&quot;) String message);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建熔断器类并实现对应的-feign-接口" tabindex="-1"><a class="header-anchor" href="#创建熔断器类并实现对应的-feign-接口" aria-hidden="true">#</a> 创建熔断器类并实现对应的 Feign 接口</h3><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.service.fallback;

import com.funtl.hello.spring.cloud.alibaba.nacos.consumer.feign.service.EchoService;
import org.springframework.stereotype.Component;

@Component
public class EchoServiceFallback implements EchoService {
    @Override
    public String echo(String message) {
        return &quot;echo fallback&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试熔断器" tabindex="-1"><a class="header-anchor" href="#测试熔断器" aria-hidden="true">#</a> 测试熔断器</h2><p>此时我们关闭服务提供者，再次请求 http://localhost:9092/echo/hi 浏览器会显示：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>echo fallback

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>1</p><h1 id="_08-使用熔断器仪表盘监控" tabindex="-1"><a class="header-anchor" href="#_08-使用熔断器仪表盘监控" aria-hidden="true">#</a> 08-使用熔断器仪表盘监控</h1><h1 id="使用熔断器仪表盘监控" tabindex="-1"><a class="header-anchor" href="#使用熔断器仪表盘监控" aria-hidden="true">#</a> 使用熔断器仪表盘监控</h1><h2 id="本节视频-7" tabindex="-1"><a class="header-anchor" href="#本节视频-7" aria-hidden="true">#</a> 本节视频</h2>`,28),O={href:"https://www.bilibili.com/video/av40734173/",target:"_blank",rel:"noopener noreferrer"},T=a(`<h2 id="sentinel-控制台" tabindex="-1"><a class="header-anchor" href="#sentinel-控制台" aria-hidden="true">#</a> Sentinel 控制台</h2><p>Sentinel 控制台提供一个轻量级的控制台，它提供机器发现、单机资源实时监控、集群资源汇总，以及规则管理的功能。您只需要对应用进行简单的配置，就可以使用这些功能。</p><p><strong>注意:</strong> 集群资源汇总仅支持 500 台以下的应用集群，有大概 1 - 2 秒的延时。</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190108023342.png" alt="image"></p><h2 id="下载并打包" tabindex="-1"><a class="header-anchor" href="#下载并打包" aria-hidden="true">#</a> 下载并打包</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 下载源码
git clone https://github.com/alibaba/Sentinel.git

# 编译打包
mvn clean package

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注：下载依赖时间较长，请耐心等待...</strong></p><h2 id="启动控制台" tabindex="-1"><a class="header-anchor" href="#启动控制台" aria-hidden="true">#</a> 启动控制台</h2><p>Sentinel 控制台是一个标准的 SpringBoot 应用，以 SpringBoot 的方式运行 jar 包即可。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd sentinel-dashboard\\target
java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如若 8080 端口冲突，可使用 <code>-Dserver.port=新端口</code> 进行设置。</p><p>Dcsp.sentinel.dashboard.server指的是心跳地址</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190108024018.png" alt="image"></p><h2 id="访问服务-1" tabindex="-1"><a class="header-anchor" href="#访问服务-1" aria-hidden="true">#</a> 访问服务</h2><p>打开浏览器访问：http://localhost:8080/#/dashboard/home</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190108024151.png" alt="image"></p><h2 id="配置控制台信息" tabindex="-1"><a class="header-anchor" href="#配置控制台信息" aria-hidden="true">#</a> 配置控制台信息</h2><p><code>application.yml</code> 配置文件中增加如下配置：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  cloud:
    sentinel:
      transport:
        port: 8719
        dashboard: localhost:8080

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code>spring.cloud.sentinel.transport.port</code> 端口配置会在应用对应的机器上启动一个 Http Server，该 Server 会与 Sentinel 控制台做交互。比如 Sentinel 控制台添加了 1 个限流规则，会把规则数据 push 给这个 Http Server 接收，Http Server 再将规则注册到 Sentinel 中。</p><h2 id="测试-sentinel" tabindex="-1"><a class="header-anchor" href="#测试-sentinel" aria-hidden="true">#</a> 测试 Sentinel</h2><p>使用之前的 Feign 客户端，<code>application.yml</code> 完整配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    name: nacos-consumer-feign
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
    sentinel:
      transport:
        port: 8720
        dashboard: localhost:8080

server:
  port: 9092

feign:
  sentinel:
    enabled: true

management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注：由于 8719 端口已被 sentinel-dashboard 占用，故这里修改端口号为 8720；不修改也能注册，会自动帮你在端口号上 + 1；</strong></p><p>打开浏览器访问：http://localhost:8080/#/dashboard/home</p><p>此时会多一个名为 <code>nacos-consumer-feign</code> 的服务</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190108025044.png" alt="image"></p><h1 id="_09-使用路由网关统一访问接口" tabindex="-1"><a class="header-anchor" href="#_09-使用路由网关统一访问接口" aria-hidden="true">#</a> 09-使用路由网关统一访问接口</h1><h1 id="使用路由网关统一访问接口" tabindex="-1"><a class="header-anchor" href="#使用路由网关统一访问接口" aria-hidden="true">#</a> 使用路由网关统一访问接口</h1><h2 id="本节视频-8" tabindex="-1"><a class="header-anchor" href="#本节视频-8" aria-hidden="true">#</a> 本节视频</h2>`,30),H={href:"https://www.bilibili.com/video/av40734422/",target:"_blank",rel:"noopener noreferrer"},V=a(`<h2 id="什么是-spring-cloud-gateway" tabindex="-1"><a class="header-anchor" href="#什么是-spring-cloud-gateway" aria-hidden="true">#</a> 什么是 Spring Cloud Gateway</h2><p>Spring Cloud Gateway 是 Spring 官方基于 Spring 5.0，Spring Boot 2.0 和 Project Reactor 等技术开发的网关，Spring Cloud Gateway 旨在为微服务架构提供一种简单而有效的统一的 API 路由管理方式。<strong>Spring Cloud Gateway 作为 Spring Cloud 生态系中的网关，目标是替代 Netflix ZUUL</strong>，其不仅提供统一的路由方式，并且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控/埋点，和限流等。</p><p><img src="https://picgo.xingenhi.cn//typora3f25fcd95769a54eb391931449d5298f.jpg" alt="image"></p><h2 id="spring-cloud-gateway-功能特征" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway-功能特征" aria-hidden="true">#</a> Spring Cloud Gateway 功能特征</h2><ul><li>基于 Spring Framework 5，Project Reactor 和 Spring Boot 2.0</li><li>动态路由</li><li>Predicates 和 Filters 作用于特定路由</li><li>集成 Hystrix 断路器</li><li>集成 Spring Cloud DiscoveryClient</li><li>易于编写的 Predicates 和 Filters</li><li>限流</li><li>路径重写</li></ul><h2 id="spring-cloud-gateway-工程流程" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway-工程流程" aria-hidden="true">#</a> Spring Cloud Gateway 工程流程</h2><p><img src="https://picgo.xingenhi.cn//typora22e4eccf2cbe09332678c04b8de98ebe.jpg" alt="image"></p><p>客户端向 Spring Cloud Gateway 发出请求。然后在 Gateway Handler Mapping 中找到与请求相匹配的路由，将其发送到 Gateway Web Handler。Handler 再通过指定的过滤器链来将请求发送到我们实际的服务执行业务逻辑，然后返回。</p><p>过滤器之间用虚线分开是因为过滤器可能会在发送代理请求之前（<code>pre</code>）或之后（<code>post</code>）执行业务逻辑。</p><h2 id="pom-3" tabindex="-1"><a class="header-anchor" href="#pom-3" aria-hidden="true">#</a> POM</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;

    &lt;parent&gt;
        &lt;groupId&gt;com.funtl&lt;/groupId&gt;
        &lt;artifactId&gt;hello-spring-cloud-alibaba-dependencies&lt;/artifactId&gt;
        &lt;version&gt;1.0.0-SNAPSHOT&lt;/version&gt;
        &lt;relativePath&gt;../hello-spring-cloud-alibaba-dependencies/pom.xml&lt;/relativePath&gt;
    &lt;/parent&gt;

    &lt;artifactId&gt;hello-spring-cloud-gateway&lt;/artifactId&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;

    &lt;name&gt;hello-spring-cloud-gateway&lt;/name&gt;
    &lt;url&gt;http://www.funtl.com&lt;/url&gt;
    &lt;inceptionYear&gt;2018-Now&lt;/inceptionYear&gt;

    &lt;dependencies&gt;
        &lt;!-- Spring Boot Begin --&gt;
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
            &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-discovery&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-alibaba-sentinel&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Spring Cloud End --&gt;

        &lt;!-- Commons Begin --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;javax.servlet&lt;/groupId&gt;
            &lt;artifactId&gt;javax.servlet-api&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- Commons Begin --&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
                &lt;configuration&gt;
                    &lt;mainClass&gt;com.funtl.hello.spring.cloud.gateway.GatewayApplication&lt;/mainClass&gt;
                &lt;/configuration&gt;
            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;
&lt;/project&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了 <code>org.springframework.cloud:spring-cloud-starter-gateway</code> 依赖</p><h3 id="特别注意" tabindex="-1"><a class="header-anchor" href="#特别注意" aria-hidden="true">#</a> 特别注意</h3><ul><li>Spring Cloud Gateway 不使用 Web 作为服务器，而是 <strong>使用 WebFlux 作为服务器</strong>，Gateway 项目已经依赖了 <code>starter-webflux</code>，所以这里 **千万不要依赖 **<strong>starter-web</strong></li><li>由于过滤器等功能依然需要 Servlet 支持，故这里还需要依赖 <code>javax.servlet:javax.servlet-api</code></li></ul><h2 id="application-3" tabindex="-1"><a class="header-anchor" href="#application-3" aria-hidden="true">#</a> Application</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="application-yml-3" tabindex="-1"><a class="header-anchor" href="#application-yml-3" aria-hidden="true">#</a> application.yml</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring:
  application:
    # 应用名称
    name: spring-gateway
  cloud:
    # 使用 Naoos 作为服务注册发现
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
    # 使用 Sentinel 作为熔断器
    sentinel:
      transport:
        port: 8721
        dashboard: localhost:8080
    # 路由网关配置
    gateway:
      # 设置与服务注册发现组件结合，这样可以采用服务名的路由策略
      discovery:
        locator:
          enabled: true
      # 配置路由规则
      routes:
        # 采用自定义路由 ID（有固定用法，不同的 id 有不同的功能，详见：https://cloud.spring.io/spring-cloud-gateway/2.0.x/single/spring-cloud-gateway.html#gateway-route-filters）
        - id: NACOS-CONSUMER
          # 采用 LoadBalanceClient 方式请求，以 lb:// 开头，后面的是注册在 Nacos 上的服务名
          uri: lb://nacos-consumer
          # Predicate 翻译过来是“谓词”的意思，必须，主要作用是匹配用户的请求，有很多种用法
          predicates:
            # Method 方法谓词，这里是匹配 GET 和 POST 请求
            - Method=GET,POST
        - id: NACOS-CONSUMER-FEIGN
          uri: lb://nacos-consumer-feign
          predicates:
            - Method=GET,POST

server:
  port: 9000

# 目前无效
feign:
  sentinel:
    enabled: true

# 目前无效
management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;

# 配置日志级别，方别调试
logging:
  level:
    org.springframework.cloud.gateway: debug

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：请仔细阅读注释</strong></p><h2 id="测试访问" tabindex="-1"><a class="header-anchor" href="#测试访问" aria-hidden="true">#</a> 测试访问</h2><p>依次运行 Nacos 服务、<code>NacosProviderApplication</code>、<code>NacosConsumerApplication</code>、<code>NacosConsumerFeignApplication</code>、<code>GatewayApplication</code></p><p>打开浏览器访问：http://localhost:9000/nacos-consumer/echo/app/name 浏览器显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery nacos-consumer i am from port 8082

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器访问：http://localhost:9000/nacos-consumer-feign/echo/hi 浏览器显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery Hi Feign i am from port 8082

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：请求方式是 **<strong>http://路由网关IP:路由网关Port/服务名/**</strong></p><p>至此说明 Spring Cloud Gateway 的路由功能配置成功</p><h1 id="_10-使用路由网关的全局过滤功能" tabindex="-1"><a class="header-anchor" href="#_10-使用路由网关的全局过滤功能" aria-hidden="true">#</a> 10-使用路由网关的全局过滤功能</h1><h1 id="使用路由网关的全局过滤功能" tabindex="-1"><a class="header-anchor" href="#使用路由网关的全局过滤功能" aria-hidden="true">#</a> 使用路由网关的全局过滤功能</h1><h2 id="本节视频-9" tabindex="-1"><a class="header-anchor" href="#本节视频-9" aria-hidden="true">#</a> 本节视频</h2>`,30),U={href:"https://www.bilibili.com/video/av40734782/",target:"_blank",rel:"noopener noreferrer"},J=a(`<h2 id="概述-7" tabindex="-1"><a class="header-anchor" href="#概述-7" aria-hidden="true">#</a> 概述</h2><p>全局过滤器作用于所有的路由，不需要单独配置，我们可以用它来实现很多统一化处理的业务需求，比如权限认证，IP 访问限制等等。</p><p><strong>注意：截止博客发表时间 2019 年 01 月 10 日，Spring Cloud Gateway 正式版为 2.0.2 其文档并不完善，并且有些地方还要重新设计，这里仅提供一个基本的案例</strong></p><p><strong>详见：****Spring Cloud Gateway Documentation</strong></p><h2 id="声明周期" tabindex="-1"><a class="header-anchor" href="#声明周期" aria-hidden="true">#</a> 声明周期</h2><p><img src="https://picgo.xingenhi.cn//typora006tKfTcly1fr48yqx3ouj31kw17pn81.jpg" alt="image"></p><p>Spring Cloud Gateway 基于 Project Reactor 和 WebFlux，采用响应式编程风格，打开它的 Filter 的接口 GlobalFilter 你会发现它只有一个方法 filter。</p><h2 id="创建全局过滤器" tabindex="-1"><a class="header-anchor" href="#创建全局过滤器" aria-hidden="true">#</a> 创建全局过滤器</h2><p>实现 <code>GlobalFilter</code>, <code>Ordered</code> 接口并在类上增加 <code>@Component</code> 注解就可以使用过滤功能了，非常简单方便</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>package com.funtl.hello.spring.cloud.gateway.filters;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Maps;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Map;

/**
 * 鉴权过滤器
 */
@Component
public class AuthFilter implements GlobalFilter, Ordered {
    @Override
    public Mono&lt;Void&gt; filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getQueryParams().getFirst(&quot;token&quot;);

        if (token == null || token.isEmpty()) {
            ServerHttpResponse response = exchange.getResponse();

            // 封装错误信息
            Map&lt;String, Object&gt; responseData = Maps.newHashMap();
            responseData.put(&quot;code&quot;, 401);
            responseData.put(&quot;message&quot;, &quot;非法请求&quot;);
            responseData.put(&quot;cause&quot;, &quot;Token is empty&quot;);

            try {
                // 将信息转换为 JSON
                ObjectMapper objectMapper = new ObjectMapper();
                byte[] data = objectMapper.writeValueAsBytes(responseData);

                // 输出错误信息到页面
                DataBuffer buffer = response.bufferFactory().wrap(data);
                response.setStatusCode(HttpStatus.UNAUTHORIZED);
                response.getHeaders().add(&quot;Content-Type&quot;, &quot;application/json;charset=UTF-8&quot;);
                return response.writeWith(Mono.just(buffer));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        }

        return chain.filter(exchange);
    }

    /**
    * 设置过滤器的执行顺序
    * @return 
    */
    @Override
    public int getOrder() {
        return Ordered.LOWEST_PRECEDENCE;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试过滤器" tabindex="-1"><a class="header-anchor" href="#测试过滤器" aria-hidden="true">#</a> 测试过滤器</h2><p>浏览器访问：http://localhost:9000/nacos-consumer/echo/app/name 网页显示</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190110001903.png" alt="image"></p><p>浏览器访问：http://localhost:9000/nacos-consumer/echo/app/name?token=123456 网页显示</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Nacos Discovery nacos-consumer i am from port 8082

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附-spring-cloud-gateway-benchmark" tabindex="-1"><a class="header-anchor" href="#附-spring-cloud-gateway-benchmark" aria-hidden="true">#</a> 附：Spring Cloud Gateway Benchmark</h2>`,16),W={href:"https://github.com/spencergibb/spring-cloud-gateway-bench",target:"_blank",rel:"noopener noreferrer"},Y=a('<table><thead><tr><th>Proxy</th><th>Avg Latency</th><th>Avg Req/Sec/Thread</th></tr></thead><tbody><tr><td>gateway</td><td>6.61ms</td><td>3.24k</td></tr><tr><td>linkered</td><td>7.62ms</td><td>2.82k</td></tr><tr><td>zuul</td><td>12.56ms</td><td>2.09k</td></tr><tr><td>none</td><td>2.09ms</td><td>11.77k</td></tr></tbody></table><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><ul><li>这里的 Zuul 为 1.x 版本，是一个基于阻塞 IO 的 API Gateway</li><li>Zuul 已经发布了 Zuul 2.x，基于 Netty，非阻塞的，支持长连接，但 Spring Cloud 暂时还没有整合计划</li><li>Linkerd 基于 Scala 实现的、目前市面上仅有的生产级别的 Service Mesh（其他诸如 <strong>Istio、Conduit 暂时还不能用于生产</strong>）。</li></ul>',3);function K(X,Z){const e=s("ExternalLinkIcon");return r(),t("div",null,[o,i("ul",null,[i("li",null,[i("a",v,[n("Spring Cloud Alibaba-全新生态解决方案"),l(e)])]),i("li",null,[i("a",u,[n("Spring Cloud Alibaba-简介"),l(e)])])]),g,i("ul",null,[i("li",null,[i("a",p,[n("【千锋教育】微服务架构之 Spring Cloud Alibaba"),l(e)])])]),m,b,i("p",null,[i("a",h,[n("Spring Cloud for Alibaba 0.2.0 released"),l(e)])]),f,x,S,w,y,i("p",null,[i("a",I,[n("Spring Cloud Alibaba GitHub"),l(e)])]),P,i("ul",null,[i("li",null,[i("a",C,[n("Spring Cloud Alibaba-创建统一的依赖管理"),l(e)])])]),k,i("ul",null,[i("li",null,[i("a",_,[n("Spring Cloud Alibaba-Nacos-服务注册与发现"),l(e)])])]),q,A,i("p",null,[i("a",E,[n("Nacos 官网"),l(e)])]),N,i("ul",null,[i("li",null,[i("a",F,[n("Spring Cloud Alibaba-Nacos-服务提供者"),l(e)])])]),M,i("ul",null,[i("li",null,[i("a",j,[n("Spring Cloud Alibaba-Nacos-服务消费者(LoadBalance)"),l(e)])])]),R,i("ul",null,[i("li",null,[i("a",D,[n("Spring Cloud Alibaba-Nacos-服务消费者(Feign)"),l(e)])])]),B,i("ul",null,[i("li",null,[i("a",L,[n("【视频】Spring Cloud Alibaba-Sentinel-熔断器防止服务雪崩"),l(e)])])]),G,i("ul",null,[i("li",null,[i("a",O,[n("【视频】Spring Cloud Alibaba-Sentinel-熔断器仪表盘"),l(e)])])]),T,i("ul",null,[i("li",null,[i("a",H,[n("【视频】Spring Cloud Alibaba-Spring Cloud Gateway-API 网关"),l(e)])])]),V,i("ul",null,[i("li",null,[i("a",U,[n("【视频】Spring Cloud Alibaba-Spring Cloud Gateway-全局过滤器"),l(e)])])]),J,i("p",null,[n("Spring 官方人员提供的网关基准测试报告 "),i("a",W,[n("GitHub"),l(e)])]),Y])}const z=d(c,[["render",K],["__file","SpringCloudAlibaba.html.vue"]]);export{z as default};
