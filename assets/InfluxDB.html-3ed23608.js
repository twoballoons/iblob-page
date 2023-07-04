import{_ as d,r,o as t,c as s,a as e,b as i,d as l,e as a}from"./app-f078eaf8.js";const o={},c={class:"custom-container tip"},u=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8h.01"}),e("path",{d:"M11 12h1v4h1"})])],-1),h=e("p",{class:"custom-container-title"},"TIP",-1),v={href:"https://www.bilibili.com/video/BV1gK4y1h7Bt",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.influxdata.com/",target:"_blank",rel:"noopener noreferrer"},m=a(`<h1 id="influxdb" tabindex="-1"><a class="header-anchor" href="#influxdb" aria-hidden="true">#</a> InfluxDB</h1><h1 id="_01-influxdb" tabindex="-1"><a class="header-anchor" href="#_01-influxdb" aria-hidden="true">#</a> 01-InfluxDB</h1><p>InfluxDB是一个用Go语言编写的时间序列数据库，旨在处理高写入和查询负载。它是TICK堆栈的组成部分 。InfluxDB旨在用作涉及大量带时间戳数据的任何用例的后备存储，包括DevOps监控，应用程序指标，物联网传感器数据和实时分析。同时influxdb也是一个开源分布式时序、事件和指标数据库，无需外部依赖。类似的数据库有kdb、Graphite、es等。</p><p>InfluxDB（时序数据库），常用的一种使用场景：监控数据统计。每毫秒记录一下电脑内存的使用情况，然后就可以根据统计的数据，利用图形化界面（InfluxDB V1一般配合Grafana）制作内存使用情况的折线图；</p><p>可以理解为按时间记录一些数据（常用的监控数据、埋点统计数据等），然后制作图表做统计；</p><h2 id="_1、什么是influxdb" tabindex="-1"><a class="header-anchor" href="#_1、什么是influxdb" aria-hidden="true">#</a> 1、什么是InfluxDB</h2><p>从文章开票的介绍里能大概知道它的使用场景，下面介绍来自维基百科：</p><blockquote><p>InfluxDB是一个由InfluxData开发的开源时序型数据。它由Go写成，着力于高性能地查询与存储时序型数据。InfluxDB被广泛应用于存储系统的监控数据，IoT行业的实时数据等场景。</p></blockquote><h2 id="_2、对常见关系型数据库-mysql-的基础概念对比" tabindex="-1"><a class="header-anchor" href="#_2、对常见关系型数据库-mysql-的基础概念对比" aria-hidden="true">#</a> 2、对常见关系型数据库（MySQL）的基础概念对比</h2><table><thead><tr><th>概念</th><th>MySQL</th><th>InfluxDB</th></tr></thead><tbody><tr><td>数据库（同）</td><td>database</td><td>database</td></tr><tr><td>表（不同）</td><td>table</td><td>measurement</td></tr><tr><td>列（不同）</td><td>column</td><td>tag(带索引的，非必须)、field(不带索引)、timestemp(唯一主键)</td></tr></tbody></table><ul><li>tag set：<strong>不同</strong>的每组tag key和tag value的集合；</li><li>field set：每组field key和field value的集合；</li><li>retention policy：数据存储策略（默认策略为autogen）InfluxDB没有删除数据操作，规定数据的保留时间达到清除数据的目的；</li><li>series：共同retention policy，measurement和tag set的集合；</li><li>示例数据如下： 其中census是measurement，butterflies和honeybees是field key，location和scientist是tag key</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>name: census
————————————
time                 butterflies     honeybees     location     scientist
2015-08-18T00:00:00Z      12             23           1         langstroth
2015-08-18T00:00:00Z      1              30           1         perpetua
2015-08-18T00:06:00Z      11             28           1         langstroth
2015-08-18T00:06:00Z      11             28           2         langstroth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例中有三个tag set</p><h2 id="_3、注意点" tabindex="-1"><a class="header-anchor" href="#_3、注意点" aria-hidden="true">#</a> 3、注意点</h2><ul><li>tag 只能为字符串类型</li><li>field 类型无限制</li><li>不支持join</li><li>支持连续查询操作（汇总统计数据）：CONTINUOUS QUERY</li><li>配合Telegraf服务（Telegraf可以监控系统CPU、内存、网络等数据）</li><li>配合Grafana服务（数据展现的图像界面，将influxdb中的数据可视化）</li></ul><h1 id="_02-数据库系统架构" tabindex="-1"><a class="header-anchor" href="#_02-数据库系统架构" aria-hidden="true">#</a> 02-数据库系统架构</h1><p><a href="--e9J1gLQ3AeuzUkSWmCyTqzamm3GIW7YptgGum_KJg.svg">drawio</a></p><ul><li>DataBase：数据库；</li><li>RP：数据保留策略。数据保留策略是数据库级别而不是表级别的属性。每一个数据库有多个保留策略，但是只能有一个默认策略；</li><li>ShardGroup：每个ShardGroup只存储指定时间段的数据，不同的ShardGroup对应的时间段不重合；</li></ul><h1 id="_03-部署influxdb" tabindex="-1"><a class="header-anchor" href="#_03-部署influxdb" aria-hidden="true">#</a> 03-部署InfluxDB</h1><h2 id="一、安装包部署" tabindex="-1"><a class="header-anchor" href="#一、安装包部署" aria-hidden="true">#</a> 一、安装包部署</h2><p>1、准备安装包</p><p>安装包：<code>1.7.8</code></p>`,22),p={href:"https://picgo.xingenhi.cn/influxdb/InfluxDBStudio-0.2.0.zip",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[i("influx安装包中的配置文件在路径"),e("code",null,"etc/influxdb"),i(" 下，influxdb.conf具体内容如下：")],-1),g={href:"https://picgo.xingenhi.cn/influxdb/influxdb.conf",target:"_blank",rel:"noopener noreferrer"},_=a(`<ul><li><code>[meta]</code><ul><li><code>dir</code> 元数据库存储路径</li></ul></li><li><code>[data]</code><ul><li><code>dir</code> 数据库数据存储路径</li><li><code>wal-dir</code> 预写日志存储路径</li><li><code>series-id-set-cache-size</code></li></ul></li><li><code>[coordinator]</code></li><li><code>[retention]</code></li><li><code>[shard-precreation]</code></li><li><code>[monitor]</code></li><li><code>[http]</code></li><li><code>[logging]</code></li><li><code>[subscriber]</code></li><li><code>[[graphite]]</code></li><li><code>[[collectd]]</code></li><li><code>[[opentsdb]]</code></li><li><code>[[udp]]</code></li><li><code>[continuous_queries]</code></li><li><code>[tls]</code></li></ul><p>2、启动</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code># 前台启动
bin/influxd -config ../etc/influxdb/influxdb.conf
# 后台启动
nohup bin/influxd -config ../etc/influxdb/influxdb.conf &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、登录</p><p><code>bin/influx</code></p><h2 id="二、docker部署" tabindex="-1"><a class="header-anchor" href="#二、docker部署" aria-hidden="true">#</a> 二、docker部署</h2><h2 id="三、docker-compose部署" tabindex="-1"><a class="header-anchor" href="#三、docker-compose部署" aria-hidden="true">#</a> 三、docker-compose部署</h2>`,7),x={href:"https://picgo.xingenhi.cn/influxdb/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"},k={href:"https://picgo.xingenhi.cn/influxdb/install.sh",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"四、连接工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四、连接工具","aria-hidden":"true"},"#"),i(" 四、连接工具")],-1),y={href:"https://picgo.xingenhi.cn/influxdb/InfluxDBStudio-0.2.0.zip",target:"_blank",rel:"noopener noreferrer"},I=a(`<h1 id="_04-常用命令" tabindex="-1"><a class="header-anchor" href="#_04-常用命令" aria-hidden="true">#</a> 04-常用命令</h1><h2 id="_1、数据库" tabindex="-1"><a class="header-anchor" href="#_1、数据库" aria-hidden="true">#</a> 1、数据库</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>-- 查看当前数据库
show databases

-- 创建数据库
create database test

-- 使用数据库
use test

-- 删除数据库
drop database test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、数据保留策略" tabindex="-1"><a class="header-anchor" href="#_2、数据保留策略" aria-hidden="true">#</a> 2、数据保留策略</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>-- 创建数据库策略
-- &lt;retention_policy_name&gt;：保留策略名称
-- &lt;database_name&gt;：数据库名称
-- &lt;duration&gt;：数据过期时间
-- replication：副本因子
-- shard duration：分片组的默认时长
-- [default]：是否为默认保存策略
create retention policy &lt;retention_policy_name&gt; on &lt;database_name&gt; duration &lt;duration&gt; replication &lt;n&gt; [shard duration &lt;duration&gt;] [default]
-- 例如：create retention policy &quot;influx_retention&quot; on &quot;test&quot; duration 30d replication 1 default;

-- 查看保留期
show retention policies on &lt;database_name&gt;

-- 修改保留期
alter retention policy &lt;retention_policy_name&gt; on &lt;database_name&gt; duration &lt;duration&gt;

-- 删除保留期
drop retention policy &lt;retention_policy_name&gt; on &lt;database_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、表" tabindex="-1"><a class="header-anchor" href="#_3、表" aria-hidden="true">#</a> 3、表</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>-- 查看表
show measurments

-- 插入数据（自动创建表）
use &lt;database_name&gt;
insert &lt;表名&gt;,[tags] [fileds]
-- 例如：
insert weather,altitude=1000,area=北 temperature=11,humidity=-4
insert weather,altitude=500,area=北 temperature=18,humidity=5
insert weather,altitude=1000,area=南 temperature=12,humidity=-5
insert weather,altitude=500,area=南 temperature=25,humidity=7

-- 简单查询数据
select * from &lt;表名&gt;

-- 修改时间的显示格式
precision rfc3339

-- 删除表
drop measurment &lt;表名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、用户" tabindex="-1"><a class="header-anchor" href="#_4、用户" aria-hidden="true">#</a> 4、用户</h2><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>-- 显示用户
show users

-- 创建用户
-- 普通用户
create user &lt;user_name&gt; with password &#39;password&#39;
-- 管理员用户
create user &lt;user_name&gt; with password &#39;password&#39; with all privileges

-- 修改用户密码
set password for &lt;user_name&gt; = &#39;password&#39;

-- 删除用户
drop user &lt;user_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、数据库访问权限" tabindex="-1"><a class="header-anchor" href="#_5、数据库访问权限" aria-hidden="true">#</a> 5、数据库访问权限</h2><ul><li>用户授权 <ul><li>授权用户数据库操作权限</li></ul></li></ul><p><code>grant all privileges on &lt;database_name&gt; to &lt;user_name&gt;</code></p><ul><li>授权用户管理员权限 <code>grant all privileges to &lt;user_name&gt;</code> 备注：只能使用admin权限才可以操作数据库。</li><li>撤销授权 <ul><li>撤销用户数据库操作权限</li></ul></li></ul><p><code>revoke all privileges on &lt;database_name&gt; from &lt;user_name&gt;</code></p><ul><li>撤销用户管理员权限</li></ul><p><code>revoke all privileges from &lt;user_name&gt;</code></p><h2 id="_6、开启用户登录认证" tabindex="-1"><a class="header-anchor" href="#_6、开启用户登录认证" aria-hidden="true">#</a> 6、开启用户登录认证</h2><ul><li>开启登录认证</li></ul><p>在influxdb配置文件infuxdb.conf中，开启用户登录认证，添加如下内容：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>[http]
auth-enabled = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启认证后无密码登录 <code>bin/influx</code></li><li>开启认证后有密码登录 <code>bin/influx -username [username] -password &lt;password&gt;</code></li></ul>`,21);function B(P,D){const n=r("ExternalLinkIcon");return t(),s("div",null,[e("div",c,[u,h,e("p",null,[e("a",v,[i("视频链接"),l(n)]),e("a",b,[i("官方网站"),l(n)])])]),m,e("blockquote",null,[e("p",null,[e("a",p,[i("下载链接"),l(n)])])]),f,e("blockquote",null,[e("p",null,[e("a",g,[i("influxdb.conf"),l(n)])])]),_,e("blockquote",null,[e("p",null,[e("a",x,[i("docker-compose.yml"),l(n)])]),e("p",null,[e("a",k,[i("install.sh"),l(n)])])]),w,e("blockquote",null,[e("p",null,[e("a",y,[i("InfluxDBStudio-0.2.0.zip"),l(n)])])]),I])}const T=d(o,[["render",B],["__file","InfluxDB.html.vue"]]);export{T as default};
