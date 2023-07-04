import{_ as n,o as s,c as a,e}from"./app-f078eaf8.js";const l={},i=e(`<h1 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h1><p>百度云下载链接</p><p>链接：https://pan.baidu.com/s/1bu81MKLPdDSFJtU49PCWlQ</p><p>提取码：xghi</p><p>复制这段内容后打开百度网盘手机App，操作更方便哦</p><p>官方下载链接</p><p>https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html</p><p>上面提供了两种下载方式，一个是本人的百度云分享，另外一个是提供的官方下载地址。</p><p>本文推荐的jdk版本是1.8.x，在目前的使用中出现的版本问题较少。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/bin/
打开xftp，上传文件
<span class="token comment"># 解压包</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u241-linux-x64.tar.gz <span class="token parameter variable">-C</span> ./
<span class="token comment"># 删除上传的压缩包</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> jdk-8u241-linux-x64.tar
<span class="token comment"># 配置环境变量</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/profile
------------------------------------------
追加：
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/bin/jdk1.8.0_241
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
<span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar
<span class="token builtin class-name">export</span> JAVA_HOME
<span class="token builtin class-name">export</span> <span class="token environment constant">PATH</span>
<span class="token builtin class-name">export</span> CLASSPATH
------------------------------------------
<span class="token comment"># 刷新环境变量配置</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[i];function c(p,o){return s(),a("div",null,t)}const d=n(l,[["render",c],["__file","Java.html.vue"]]);export{d as default};
