import{_ as n,o as a,c as s,e}from"./app-f078eaf8.js";const i={},l=e(`<h1 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h1><p>百度云下载链接</p><p>链接：https://pan.baidu.com/s/19t6Lz7R1GO40AtPl5KtQgg</p><p>提取码：xghi</p><p>复制这段内容后打开百度网盘手机App，操作更方便哦</p><p>官方下载链接</p><p>http://maven.apache.org/download.cgi</p><p>上面提供了两种下载方式，一个是本人的百度云分享，另外一个是提供的官方下载地址。</p><p>本文推荐的maven版本是3.5.x，在目前的使用中出现的版本问题较少。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/bin/
打开xftp，上传文件
<span class="token comment"># 解压文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-maven-3.5.4-bin.tar.gz <span class="token parameter variable">-C</span> ./
<span class="token comment"># 删除原文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> apache-maven-3.5.4-bin.tar.gz
<span class="token comment"># 配置环境变量</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/profile
------------------------------------------
追加：
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span>/usr/local/bin/apache-maven-3.5.4
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$MAVEN_HOME</span>/bin:<span class="token environment constant">$PATH</span>
------------------------------------------
<span class="token comment"># 刷新环境变量配置</span>
<span class="token builtin class-name">source</span> /etc/profile
mvn <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[l];function t(p,r){return a(),s("div",null,c)}const v=n(i,[["render",t],["__file","Maven.html.vue"]]);export{v as default};
