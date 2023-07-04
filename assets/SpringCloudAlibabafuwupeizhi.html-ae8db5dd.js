import{_ as l,r as d,o as s,c as t,a as i,b as a,d as r,e}from"./app-f078eaf8.js";const o={},c=e('<h1 id="_01-nacos-config-服务端初始化" tabindex="-1"><a class="header-anchor" href="#_01-nacos-config-服务端初始化" aria-hidden="true">#</a> 01-Nacos Config 服务端初始化</h1><h1 id="nacos-config-服务端初始化" tabindex="-1"><a class="header-anchor" href="#nacos-config-服务端初始化" aria-hidden="true">#</a> Nacos Config 服务端初始化</h1><h2 id="本节视频" tabindex="-1"><a class="header-anchor" href="#本节视频" aria-hidden="true">#</a> 本节视频</h2>',3),p={href:"https://www.bilibili.com/video/av40734881/",target:"_blank",rel:"noopener noreferrer"},g=e('<h2 id="分布式配置中心" tabindex="-1"><a class="header-anchor" href="#分布式配置中心" aria-hidden="true">#</a> 分布式配置中心</h2><p>在分布式系统中，由于服务数量巨多，为了方便服务配置文件统一管理，实时更新，所以需要分布式配置中心组件。</p><h2 id="nacos-config" tabindex="-1"><a class="header-anchor" href="#nacos-config" aria-hidden="true">#</a> Nacos Config</h2><p>Nacos 提供用于存储配置和其他元数据的 key/value 存储，为分布式系统中的外部化配置提供服务器端和客户端支持。使用 Spring Cloud Alibaba Nacos Config，您可以在 Nacos Server 集中管理你 Spring Cloud 应用的外部属性配置。</p><p>Spring Cloud Alibaba Nacos Config 是 Spring Cloud Config Server 和 Client 的替代方案，客户端和服务器上的概念与 Spring Environment 和 PropertySource 有着一致的抽象，在特殊的 bootstrap 阶段，配置被加载到 Spring 环境中。当应用程序通过部署管道从开发到测试再到生产时，您可以管理这些环境之间的配置，并确保应用程序具有迁移时需要运行的所有内容。</p><h2 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h2><p>需要在 Nacos Server 中创建配置文件，我们依然采用 YAML 的方式部署配置文件，操作流程如下：</p><ul><li>浏览器打开 http://localhost:8848/nacos ，访问 Nacos Server</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111030328.png" alt="image"></p><ul><li>新建配置文件，此处我们以之前创建的 <strong>服务提供者</strong> 项目为例</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111030615.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111030851.png" alt="image"></p><p>注意：Data ID 的默认扩展名为 <strong>.properties</strong> ，希望使用 YAML 配置，此处必须指明是 .yaml</p><ul><li>发布成功后在 “配置列表” 一栏即可看到刚才创建的配置项</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111031454.png" alt="image"></p><h1 id="_02-nacos-config-客户端的使用" tabindex="-1"><a class="header-anchor" href="#_02-nacos-config-客户端的使用" aria-hidden="true">#</a> 02-Nacos Config 客户端的使用</h1><h1 id="nacos-config-客户端的使用" tabindex="-1"><a class="header-anchor" href="#nacos-config-客户端的使用" aria-hidden="true">#</a> Nacos Config 客户端的使用</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>',18),u={href:"https://www.bilibili.com/video/av40734966/",target:"_blank",rel:"noopener noreferrer"},v=e(`<h2 id="pom" tabindex="-1"><a class="header-anchor" href="#pom" aria-hidden="true">#</a> POM</h2><p>此处我们以之前创建的 <strong>服务提供者</strong> 项目为例</p><p>在 <code>pom.xml</code> 中增加 <code>org.springframework.cloud:spring-cloud-starter-alibaba-nacos-config</code> 依赖</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-config&lt;/artifactId&gt;
&lt;/dependency&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的 <code>pom.xml</code> 如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
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
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-alibaba-nacos-config&lt;/artifactId&gt;
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bootstrap-properties" tabindex="-1"><a class="header-anchor" href="#bootstrap-properties" aria-hidden="true">#</a> bootstrap.properties</h2><p>创建名为 <code>bootstrap.properties</code> 的配置文件并删除之前创建的 <code>application.yml</code> 配置文件，由于已经在服务端配置，此处不再赘述</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 这里的应用名对应 Nacos Config 中的 Data ID，实际应用名称以配置中心的配置为准
spring.application.name=nacos-provider-config
# 指定查找名为 nacos-provider-config.yaml 的配置文件
spring.cloud.nacos.config.file-extension=yaml
# Nacos Server 的地址
spring.cloud.nacos.config.server-addr=127.0.0.1:8848

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：在之前的 Spring Cloud Netflix 课程中有提到过 Spring Boot 配置文件的加载顺序，依次为 bootstrap.properties -&gt; bootstrap.yml -&gt; application.properties -&gt; application.yml ，其中 bootstrap.properties 配置为最高优先级</strong></p><h2 id="启动应用程序" tabindex="-1"><a class="header-anchor" href="#启动应用程序" aria-hidden="true">#</a> 启动应用程序</h2><p>启动应用后我们可以通过日志看到，已经成功加载到了配置文件</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111034112.png" alt="image"></p><h2 id="配置的动态更新" tabindex="-1"><a class="header-anchor" href="#配置的动态更新" aria-hidden="true">#</a> 配置的动态更新</h2><p>Nacos Config 也支持配置的动态更新，操作流程如下：</p><ul><li>修改服务端配置，增加一个 <code>user.name</code> 的属性</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111034847.png" alt="image"></p><ul><li>修改 Controller ，增加一个请求方法，测试配置更新效果</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>// 注入配置文件上下文
@Autowired
private ConfigurableApplicationContext applicationContext;

// 从上下文中读取配置
@GetMapping(value = &quot;/hi&quot;)
public String sayHi() {
    return &quot;Hello &quot; + applicationContext.getEnvironment().getProperty(&quot;user.name&quot;);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过浏览器访问该接口，浏览器显示</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello Lusifer

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改服务端配置</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111035618.png" alt="image"></p><p>此时观察控制台日志，你会发现我们已经成功刷新了配置</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111035725.png" alt="image"></p><ul><li>刷新浏览器，浏览器显示</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Hello LusiferLee

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：你可以使用 spring.cloud.nacos.config.refresh.enabled=false 来关闭动态刷新</strong></p><h1 id="_03-nacos-config-多环境的配置" tabindex="-1"><a class="header-anchor" href="#_03-nacos-config-多环境的配置" aria-hidden="true">#</a> 03-Nacos Config 多环境的配置</h1><h1 id="nacos-config-多环境的配置" tabindex="-1"><a class="header-anchor" href="#nacos-config-多环境的配置" aria-hidden="true">#</a> Nacos Config 多环境的配置</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>`,31),m={href:"https://www.bilibili.com/video/av40735056/",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="spring-boot-profile" tabindex="-1"><a class="header-anchor" href="#spring-boot-profile" aria-hidden="true">#</a> Spring Boot Profile</h2><p>我们在做项目开发的时候，生产环境和测试环境的一些配置可能会不一样，有时候一些功能也可能会不一样，所以我们可能会在上线的时候手工修改这些配置信息。但是 Spring 中为我们提供了 Profile 这个功能。我们只需要在启动的时候添加一个虚拟机参数，激活自己环境所要用的 Profile 就可以了。</p><p>操作起来很简单，只需要为不同的环境编写专门的配置文件，如：<code>application-dev.yml</code>、<code>application-prod.yml</code>， 启动项目时只需要增加一个命令参数 <code>--spring.profiles.active=环境配置</code> 即可，启动命令如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>java -jar hello-spring-cloud-alibaba-nacos-provider-1.0.0-SNAPSHOT.jar --spring.profiles.active=prod

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nacos-config-profile" tabindex="-1"><a class="header-anchor" href="#nacos-config-profile" aria-hidden="true">#</a> Nacos Config Profile</h2><p>spring-cloud-starter-alibaba-nacos-config 在加载配置的时候，不仅仅加载了以 dataid 为 <code>\${spring.application.name}.\${file-extension:properties}</code> 为前缀的基础配置，还加载了 dataid 为 <code>\${spring.application.name}-\${profile}.\${file-extension:properties}</code> 的基础配置。在日常开发中如果遇到多套环境下的不同配置，可以通过 Spring 提供的 <code>\${spring.profiles.active}</code> 这个配置项来配置。</p><p>此处我们以之前创建的 <strong>服务提供者</strong> 项目为例</p><h3 id="在-nacos-server-中增加配置" tabindex="-1"><a class="header-anchor" href="#在-nacos-server-中增加配置" aria-hidden="true">#</a> 在 Nacos Server 中增加配置</h3><p>增加一个名为 <code>nacos-provider-config-prod.yaml</code> 的配置</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111041121.png" alt="image"></p><p>**注意：此时，我将配置文件中的端口由 <strong>8081</strong> -&gt; **<strong>8082</strong></p><h3 id="在项目中增加配置" tabindex="-1"><a class="header-anchor" href="#在项目中增加配置" aria-hidden="true">#</a> 在项目中增加配置</h3><p>增加一个名为 <code>bootstrap-prod.properties</code> 的配置文件，内容如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>spring.profiles.active=prod
spring.application.name=nacos-provider-config
spring.cloud.nacos.config.file-extension=yaml
spring.cloud.nacos.config.server-addr=127.0.0.1:8848

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要增加了 <code>spring.profiles.active=prod</code> 配置，用于指定访问 Nacos Server 中的 <code>nacos-provider-config-prod.yaml</code> 配置</p><h2 id="启动应用程序-1" tabindex="-1"><a class="header-anchor" href="#启动应用程序-1" aria-hidden="true">#</a> 启动应用程序</h2><p>此时我们有两个配置文件，分别为 <code>bootstrap.properties</code> 和 <code>bootstrap-prod.properties</code> ，我们需要指定启动时加载哪一个配置文件，操作流程如下：</p><ul><li><code>Run</code> -&gt; <code>Edit Configurations..</code></li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111043201.png" alt="image"></p><ul><li>设置需要激活的配置</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111043322.png" alt="image"></p><ul><li>观察日志，判断是否成功加载配置</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer_20190111043538.png" alt="image"></p>`,23);function h(f,x){const n=d("ExternalLinkIcon");return s(),t("div",null,[c,i("ul",null,[i("li",null,[i("a",p,[a("【视频】Spring Cloud Alibaba-Nacos-分布式配置中心-服务端"),r(n)])])]),g,i("ul",null,[i("li",null,[i("a",u,[a("【视频】Spring Cloud Alibaba-Nacos-分布式配置中心-客户端"),r(n)])])]),v,i("ul",null,[i("li",null,[i("a",m,[a("【视频】Spring Cloud Alibaba-Nacos-分布式配置中心-多环境配置"),r(n)])])]),b])}const y=l(o,[["render",h],["__file","SpringCloudAlibabafuwupeizhi.html.vue"]]);export{y as default};
