import{_ as n,o as s,c as a,e}from"./app-f078eaf8.js";const l={},i=e(`<h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在node.js官网（https://nodejs.org/zh-cn/download/）上选择linux版本，右键复制下载链接</span>
<span class="token builtin class-name">cd</span> /usr/local/bin/
<span class="token function">wget</span> https://nodejs.org/dist/v12.18.3/node-v12.18.3-linux-x64.tar.xz
<span class="token function">tar</span> xvf node-v12.18.3-linux-x64.tar.xz <span class="token parameter variable">-C</span> ./
<span class="token comment"># 配置环境变量</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/profile
------------------------------------------
追加：
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/usr/local/bin/node-v12.18.3-linux-x64
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$NODE_HOME</span>/bin 
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_PATH</span><span class="token operator">=</span><span class="token variable">$NODE_HOME</span>/lib/node_modules
------------------------------------------
<span class="token comment"># 刷新环境变量配置</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># 测试</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[i];function o(c,p){return s(),a("div",null,t)}const r=n(l,[["render",o],["__file","Node.js.html.vue"]]);export{r as default};
