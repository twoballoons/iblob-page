import{_ as s,r as d,o as r,c as t,a as i,b as e,d as a,e as l}from"./app-f078eaf8.js";const c={},o={class:"custom-container tip"},u=i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[i("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[i("circle",{cx:"12",cy:"12",r:"9"}),i("path",{d:"M12 8h.01"}),i("path",{d:"M11 12h1v4h1"})])],-1),v=i("p",{class:"custom-container-title"},"TIP",-1),m={href:"https://www.bilibili.com/video/BV1et411T7Rt",target:"_blank",rel:"noopener noreferrer"},p=i("em",null,"P29-P30",-1),h=i("h1",{id:"_01-什么是-git",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#_01-什么是-git","aria-hidden":"true"},"#"),e(" 01-什么是 Git")],-1),g=i("h2",{id:"本节视频",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#本节视频","aria-hidden":"true"},"#"),e(" 本节视频")],-1),b={href:"https://www.bilibili.com/video/av27548316",target:"_blank",rel:"noopener noreferrer"},x=l(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><img src="https://picgo.xingenhi.cn//typoraf7246b600c338744a9591cd7530fd9f9d62aa0f8.png" alt="image"></p><ul><li>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</li><li>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</li><li>Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。</li></ul><h1 id="_02-安装-git" tabindex="-1"><a class="header-anchor" href="#_02-安装-git" aria-hidden="true">#</a> 02-安装 Git</h1><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p>下载地址：https://git-scm.com/downloads</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511792517.png" alt="image"></p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>双击安装文件，然后出现安装向导界面,点击下一步(Next)即可</p><p><img src="https://picgo.xingenhi.cn//typora02_WizardNext.png" alt="image"></p><p>接着出现授权信息界面， Next即可</p><p><img src="https://picgo.xingenhi.cn//typora03_LicenceNext.png" alt="image"></p><p>选择安装路径</p><p><img src="https://picgo.xingenhi.cn//typora04_InstallPath.png" alt="image"></p><p>选择文件关联,如果你不清楚,直接默认,下一步即可</p><p><img src="https://picgo.xingenhi.cn//typora05_Associate.png" alt="image"></p><p>接着出现开始菜单文件夹,默认,下一步即可</p><p><img src="https://picgo.xingenhi.cn//typora06_StartMenu.png" alt="image"></p><p>然后是是否配置Path的配置,选择中间一个,可以通过 Windows命令行(CMD)调用 git 命令。 然后点击下一步</p><p><img src="https://picgo.xingenhi.cn//typora07_GitPath.png" alt="image"></p><p>选择回车换行的格式。默认即可.(检出时转换为Windows风格,提交时转换为Linux风格.)</p><p><img src="https://picgo.xingenhi.cn//typora08_CRLF.png" alt="image"></p><p>然后是安装进度界面</p><p><img src="https://picgo.xingenhi.cn//typora09_Installing.png" alt="image"></p><p>安装完成. 去掉那个查看版本说明的复选框,点击完成(Finish)按钮即可</p><p><img src="https://picgo.xingenhi.cn//typora10_Finish.png" alt="image"></p><p>可以在cmd里面测试是否设置了Path,是否安装成功. 在CMD中输入 git 或者 git --version 试试</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511793614.png" alt="image"></p><h1 id="_03-git-的一般工作流程" tabindex="-1"><a class="header-anchor" href="#_03-git-的一般工作流程" aria-hidden="true">#</a> 03-Git 的一般工作流程</h1><h1 id="git-的一般工作流程" tabindex="-1"><a class="header-anchor" href="#git-的一般工作流程" aria-hidden="true">#</a> Git 的一般工作流程</h1><ul><li>克隆 Git 资源作为工作目录。</li><li>在克隆的资源上添加或修改文件。</li><li>如果其他人修改了，你可以更新资源。</li><li>在提交前查看修改。</li><li>提交修改。</li><li>在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。</li></ul><p><img src="https://picgo.xingenhi.cn//typoragit-process.png" alt="image"></p><h1 id="_04-git-的基本操作" tabindex="-1"><a class="header-anchor" href="#_04-git-的基本操作" aria-hidden="true">#</a> 04-Git 的基本操作</h1><h1 id="获取与创建项目命令" tabindex="-1"><a class="header-anchor" href="#获取与创建项目命令" aria-hidden="true">#</a> 获取与创建项目命令</h1><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3><p>用 git init 在目录中创建新的 Git 仓库。 你可以在任何时候、任何目录中这么做，完全是本地化的。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git init

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><p>使用 git clone 拷贝一个 Git 仓库到本地，让自己能够查看该项目，或者进行修改。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git clone [url]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快照" tabindex="-1"><a class="header-anchor" href="#快照" aria-hidden="true">#</a> 快照</h2><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add</h3><p>git add 命令可将该文件添加到缓存</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git add &lt;filename&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-status" tabindex="-1"><a class="header-anchor" href="#git-status" aria-hidden="true">#</a> git status</h3><p>git status 以查看在你上次提交之后是否有修改。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git status
git status -s

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff" aria-hidden="true">#</a> git diff</h3><p>执行 git diff 来查看执行 git status 的结果的详细信息。</p><p>git diff 命令显示已写入缓存与已修改但尚未写入缓存的改动的区别。git diff 有两个主要的应用场景。</p><ul><li>尚未缓存的改动：git diff</li><li>查看已缓存的改动： git diff --cached</li><li>查看已缓存的与未缓存的所有改动：git diff HEAD</li><li>显示摘要而非整个 diff：git diff --stat</li></ul><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><p>使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中。</p><p>Git 为你的每一个提交都记录你的名字与电子邮箱地址，所以第一步需要配置用户名和邮箱地址。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git config --global user.name &#39;yourname&#39;
git config --global user.email youremail

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将文件写入缓存区并提供提交注释</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git commit -m &#39;update message&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-reset-head" tabindex="-1"><a class="header-anchor" href="#git-reset-head" aria-hidden="true">#</a> git reset HEAD</h3><p>git reset HEAD 命令用于取消已缓存的内容。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git reset HEAD -- &lt;filename&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拉取与推送" tabindex="-1"><a class="header-anchor" href="#拉取与推送" aria-hidden="true">#</a> 拉取与推送</h2><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><p>git pull命令用于从另一个存储库或本地分支获取并集成(整合)。git pull命令的作用是：取回远程主机某个分支的更新，再与本地的指定分支合并，它的完整格式稍稍有点复杂。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将远程存储库中的更改合并到当前分支中。在默认模式下，<code>git pull</code>是<code>git fetch</code>后跟<code>git merge FETCH_HEAD</code>的缩写。更准确地说，<code>git pull</code>使用给定的参数运行<code>git fetch</code>，并调用<code>git merge</code>将检索到的分支头合并到当前分支中。</p><h3 id="git-push" tabindex="-1"><a class="header-anchor" href="#git-push" aria-hidden="true">#</a> git push</h3><p><code>git push</code>命令用于将本地分支的更新，推送到远程主机。它的格式与<code>git pull</code>命令相似。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git push &lt;远程主机名&gt; &lt;本地分支名&gt;:&lt;远程分支名&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h2><h3 id="git-tag" tabindex="-1"><a class="header-anchor" href="#git-tag" aria-hidden="true">#</a> git tag</h3><p>如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 <code>git tag</code> 给它打上标签。</p><p>比如说，我们想为我们的 商城 项目发布一个&quot;1.0.0&quot;版本。 我们可以用 <code>git tag -a v1.0.0</code> 命令给最新一次提交打上（HEAD） &quot;v1.0.0&quot; 的标签。</p><p><code>-a</code> 选项意为&quot;创建一个带注解的标签&quot;。 不用 -a 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我推荐一直创建带注解的标签。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git tag -a v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们要查看所有标签可以使用以下命令：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>git tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_05-tortoisegit-简化-git-操作" tabindex="-1"><a class="header-anchor" href="#_05-tortoisegit-简化-git-操作" aria-hidden="true">#</a> 05-TortoiseGit 简化 Git 操作</h1><p>TortoiseGit, 中文名海龟 Git. 海龟 Git 只支持 Windows 系统, 有一个前辈海龟 SVN, TortoiseSVN 和 TortoiseGit 都是非常优秀的开源的版本库客户端. 分为 32 位版与 64 位版.并且支持各种语言,包括简体中文</p><h2 id="下载-1" tabindex="-1"><a class="header-anchor" href="#下载-1" aria-hidden="true">#</a> 下载</h2><p>下载地址：https://tortoisegit.org/download/</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511792468.png" alt="image"></p><h2 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h2><p>我们需要先安装程序包,然后安装语言包(LanguagePack). 因为TortoiseGit 只是一个程序壳,必须依赖一个 Git Core,也就是上一节我们安装的 Git. 所以安装前请确定已完成上一节的操作. 下面以64位版本为演示(64,32位除文件名不一样,其他的操作都一致)</p><ul><li>双击安装程序</li></ul><p><img src="https://picgo.xingenhi.cn//typora203_tgitWizard.png" alt="image"></p><ul><li>下一步,进入版权信息界面. 直接点击下一步(Next)即可</li></ul><p><img src="https://picgo.xingenhi.cn//typora204_tgit_License.png" alt="image"></p><ul><li>下一步,选择SSH客户端. 可以选择 TortoiseGitPlink(位于TortoiseGit安装目录/bin 下), 也可以选择 Git 默认的SSH客户端,位于 Git安装目录/bin/ssh.exe(如果配置了 Path,那直接是 ssh.exe)</li></ul><p><img src="https://picgo.xingenhi.cn//typora204_2_tgit_Network.png" alt="image"></p><ul><li>接着是选择安装目录,可以保持默认,或者安装到开发环境目录下,安装的程序组件保持默认即可</li></ul><p><img src="https://picgo.xingenhi.cn//typora205_tgit_dir.png" alt="image"></p><ul><li>下一步到确认安装界面,点击 Install按钮安装即可,如下图所示</li></ul><p><img src="https://picgo.xingenhi.cn//typora206_install_tgit.png" alt="image"></p><ul><li>安装完成,点击 Finish 按钮即可</li></ul><p><img src="https://picgo.xingenhi.cn//typora207_tgit_installed.png" alt="image"></p><h2 id="安装语言包" tabindex="-1"><a class="header-anchor" href="#安装语言包" aria-hidden="true">#</a> 安装语言包</h2><p>双击打开语言包安装程序</p><p><img src="https://picgo.xingenhi.cn//typora208_LanguageWizard.png" alt="image"></p><p>点击下一步(Alt+N), 语言包会自动安装完成</p><p><img src="https://picgo.xingenhi.cn//typora209_LangPackFinished.png" alt="image"></p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>在空白处点击鼠标右键, 选择 --&gt; TortoiseGit --&gt; Settings, 然后就可以看到配置界面</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511793790.png" alt="image"></p><p>选中General,在右边的 Language中选择中文. 不勾选自动升级的复选框,可能还需要指定 Git.exe 文件的路径</p><p>再次点击鼠标右键,可以看到弹出菜单中已经变成中文. 原来的 Settings 变成 设置; Clone 变为 克隆</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511793872.png" alt="image"></p><h1 id="_06-什么是-gitlab" tabindex="-1"><a class="header-anchor" href="#_06-什么是-gitlab" aria-hidden="true">#</a> 06-什么是 GitLab</h1><h2 id="本节视频-1" tabindex="-1"><a class="header-anchor" href="#本节视频-1" aria-hidden="true">#</a> 本节视频</h2>`,108),f={href:"https://www.bilibili.com/video/av27548337",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1" aria-hidden="true">#</a> 概述</h2><p>GitLab 是利用 Ruby on Rails 一个开源的版本管理系统，实现一个自托管的 Git 项目仓库，可通过 Web 界面进行访问公开的或者私人项目。它拥有与 Github 类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序 (Wall) 进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用，便于日后有需要的时候进行查找。</p><h1 id="_07-基于-docker-安装-gitlab" tabindex="-1"><a class="header-anchor" href="#_07-基于-docker-安装-gitlab" aria-hidden="true">#</a> 07-基于 Docker 安装 GitLab</h1><p>我们使用 Docker 来安装和运行 GitLab 中文版，由于新版本问题较多，这里我们使用目前相对稳定的 10.5 版本，<code>docker-compose.yml</code> 配置如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3&#39;
services:
    web:
      image: &#39;twang2218/gitlab-ce-zh:10.5&#39;
      restart: always
      hostname: &#39;192.168.75.145&#39;
      environment:
        TZ: &#39;Asia/Shanghai&#39;
        GITLAB_OMNIBUS_CONFIG: |
          external_url &#39;http://192.168.75.145:8080&#39;
          gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222
          unicorn[&#39;port&#39;] = 8888
          nginx[&#39;listen_port&#39;] = 8080
      ports:
        - &#39;8080:8080&#39;
        - &#39;8443:443&#39;
        - &#39;2222:22&#39;
      volumes:
        - /usr/local/docker/gitlab/config:/etc/gitlab
        - /usr/local/docker/gitlab/data:/var/opt/gitlab
        - /usr/local/docker/gitlab/logs:/var/log/gitlab

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装完成后的工作" tabindex="-1"><a class="header-anchor" href="#安装完成后的工作" aria-hidden="true">#</a> 安装完成后的工作</h3><ul><li>访问地址：http://ip:8080</li><li>端口 8080 是因为我在配置中设置的外部访问地址为 8080，默认是 80</li><li>初始化安装完成后效果如下：</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511797825.png" alt="image"></p><ul><li>设置管理员初始密码，这里的密码最好是 字母 + 数字 组合，并且 大于等于 8 位</li><li>配置完成后登录，管理员账号是 root</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511798229.png" alt="image"></p><p><strong>注意：</strong> 如果服务器配置较低，启动运行可能需要较长时间，请耐心等待</p><h1 id="_08-gitlab-的基本设置" tabindex="-1"><a class="header-anchor" href="#_08-gitlab-的基本设置" aria-hidden="true">#</a> 08-GitLab 的基本设置</h1><h2 id="本节视频-2" tabindex="-1"><a class="header-anchor" href="#本节视频-2" aria-hidden="true">#</a> 本节视频</h2>`,13),_={href:"https://www.bilibili.com/video/av27548356",target:"_blank",rel:"noopener noreferrer"},P=l('<h2 id="gitlab-的基本设置" tabindex="-1"><a class="header-anchor" href="#gitlab-的基本设置" aria-hidden="true">#</a> GitLab 的基本设置</h2><p>第一次使用时需要做一些初始化设置，点击“管理区域”--&gt;“设置”</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511798480.png" alt="image"></p><h3 id="账户与限制设置" tabindex="-1"><a class="header-anchor" href="#账户与限制设置" aria-hidden="true">#</a> 账户与限制设置</h3><p>关闭头像功能，由于 Gravatar 头像为网络头像，在网络情况不理想时可能导致访问时卡顿</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511798637.png" alt="image"></p><h2 id="注册限制" tabindex="-1"><a class="header-anchor" href="#注册限制" aria-hidden="true">#</a> 注册限制</h2><p>由于是内部代码托管服务器，可以直接关闭注册功能，由管理员统一创建用户即可</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511798763.png" alt="image"></p><h1 id="_09-gitlab-的账户管理" tabindex="-1"><a class="header-anchor" href="#_09-gitlab-的账户管理" aria-hidden="true">#</a> 09-GitLab 的账户管理</h1><p>使用时请不要直接通过 root 用户操作，需要先创建用户，然后通过创建的用户操作，如果你是管理员还需要为其他开发人员分配账户</p><h2 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h2><p>点击“管理区域”--&gt;“新建用户”</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511799413.png" alt="image"></p><h2 id="设置账户信息" tabindex="-1"><a class="header-anchor" href="#设置账户信息" aria-hidden="true">#</a> 设置账户信息</h2><p>同时你可以将自己设置为管理员</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511799508.png" alt="image"></p><h2 id="修改用户密码" tabindex="-1"><a class="header-anchor" href="#修改用户密码" aria-hidden="true">#</a> 修改用户密码</h2><p>由于我们创建时并没有配置邮箱，所以还需要重新编辑用户信息并手动设置密码</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511799858.png" alt="image"></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511799897.png" alt="image"></p><h2 id="退出并使用新账户登录" tabindex="-1"><a class="header-anchor" href="#退出并使用新账户登录" aria-hidden="true">#</a> 退出并使用新账户登录</h2><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511800022.png" alt="image"></p><blockquote><p>注意：创建完账户，第一次登录时还会提示你修改登录密码</p></blockquote><h1 id="_10-gitlab-创建第一个项目" tabindex="-1"><a class="header-anchor" href="#_10-gitlab-创建第一个项目" aria-hidden="true">#</a> 10-GitLab 创建第一个项目</h1><h2 id="本节视频-3" tabindex="-1"><a class="header-anchor" href="#本节视频-3" aria-hidden="true">#</a> 本节视频</h2>',26),y={href:"https://www.bilibili.com/video/av27548374",target:"_blank",rel:"noopener noreferrer"},w=l(`<h2 id="gitlab-创建第一个项目" tabindex="-1"><a class="header-anchor" href="#gitlab-创建第一个项目" aria-hidden="true">#</a> GitLab 创建第一个项目</h2><p>点击 <code>+</code> 号 --&gt; <code>新建项目</code></p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511800438.png" alt="image"></p><p>输入项目名称及描述信息，设置可见等级为私有，这样别人就看不见你的项目</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511800627.png" alt="image"></p><h2 id="初始化项目" tabindex="-1"><a class="header-anchor" href="#初始化项目" aria-hidden="true">#</a> 初始化项目</h2><p>我们选择通过增加一个 README 的方式来初始化项目</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511800836.png" alt="image"></p><p>直接提交修改即可</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511800904.png" alt="image"></p><h2 id="使用-ssh-的方式拉取和推送项目" tabindex="-1"><a class="header-anchor" href="#使用-ssh-的方式拉取和推送项目" aria-hidden="true">#</a> 使用 SSH 的方式拉取和推送项目</h2><h3 id="生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#生成-ssh-key" aria-hidden="true">#</a> 生成 SSH KEY</h3><p>使用 ssh-keygen 工具生成，位置在 Git 安装目录下，我的是 <code>C:\\Program Files\\Git\\usr\\bin</code></p><p>输入命令：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>ssh-keygen -t rsa -C &quot;your_email@example.com&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行成功后的效果：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Microsoft Windows [版本 10.0.14393]
(c) 2016 Microsoft Corporation。保留所有权利。

C:\\Program Files\\Git\\usr\\bin&gt;ssh-keygen -t rsa -C &quot;topsale@vip.qq.com&quot;
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Lusifer/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/Lusifer/.ssh/id_rsa.
Your public key has been saved in /c/Users/Lusifer/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:cVesJKa5VnQNihQOTotXUAIyphsqjb7Z9lqOji2704E topsale@vip.qq.com
The key&#39;s randomart image is:
+---[RSA 2048]----+
|  + ..=o=.  .+.  |
| o o + B .+.o.o  |
|o   . + +=o+..   |
|.=   .  oo...    |
|= o     So       |
|oE .    o        |
| .. .. .         |
| o*o+            |
| *B*oo           |
+----[SHA256]-----+

C:\\Program Files\\Git\\usr\\bin&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制-ssh-key-信息到-gitlab" tabindex="-1"><a class="header-anchor" href="#复制-ssh-key-信息到-gitlab" aria-hidden="true">#</a> 复制 SSH-KEY 信息到 GitLab</h3><p>秘钥位置在：<code>C:\\Users\\你的用户名\\.ssh</code> 目录下，找到 <code>id_rsa.pub</code> 并使用编辑器打开，如：</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511801618.png" alt="image"></p><p>登录 GitLab，点击“用户头像”--&gt;“设置”--&gt;“SSH 密钥”</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511801730.png" alt="image"></p><p>成功增加密钥后的效果</p><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511801884.png" alt="image"></p><h3 id="使用-tortoisegit-克隆项目" tabindex="-1"><a class="header-anchor" href="#使用-tortoisegit-克隆项目" aria-hidden="true">#</a> 使用 TortoiseGit 克隆项目</h3><ul><li>新建一个存放代码仓库的本地文件夹</li><li>在文件夹空白处按右键</li><li>选择“Git 克隆...”</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511802101.png" alt="image"></p><ul><li>服务项目地址到 URL</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511802242.png" alt="image"></p><ul><li>如果弹出连接信息请选择是</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511802354.png" alt="image"></p><ul><li>成功克隆项目到本地</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511802402.png" alt="image"></p><h3 id="使用-tortoisegit-推送项目-提交代码" tabindex="-1"><a class="header-anchor" href="#使用-tortoisegit-推送项目-提交代码" aria-hidden="true">#</a> 使用 TortoiseGit 推送项目（提交代码）</h3><ul><li>创建或修改文件（这里的文件为所有文件，包括：代码、图片等）</li><li>我们以创建 <code>.gitignore</code> 过滤配置文件为例，该文件的主要作用为过滤不需要上传的文件，比如：IDE 生成的工程文件、编译后的 class 文件等</li><li>在工程目录下，新建 <code>.gitignore</code> 文件，并填入如下配置：</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>.gradle
*.sw?
.*
*
*~
/build
/code
.classpath
.project
.settings
.metadata
.factorypath
.recommenders
bin
build
target
.factorypath
.springBeans
interpolated*.xml
dependency-reduced-pom.xml
build.log
_site/
.*.md.html
manifest.yml
MANIFEST.MF
settings.xml
activemq-data
overridedb.*
*.iml
*.ipr
*.iws
.idea
.DS_Store
.factorypath
dump.rdb
transaction-logs
**/overlays/
**/logs/
**/temp/
**/classes/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>右键呼出菜单，选择“提交 Master...”</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511802947.png" alt="image"></p><ul><li>点击“全部”并填入“日志信息”</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511803046.png" alt="image"></p><ul><li>点击“提交并推送”</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511803174.png" alt="image"></p><ul><li>成功后的效果图</li></ul><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511803209.png" alt="image"></p><h2 id="查看-gitlab-确认提交成功" tabindex="-1"><a class="header-anchor" href="#查看-gitlab-确认提交成功" aria-hidden="true">#</a> 查看 GitLab 确认提交成功</h2><p><img src="https://picgo.xingenhi.cn//typoraLusifer1511803280.png" alt="image"></p><h1 id="_11-gitlab-使用-ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#_11-gitlab-使用-ssh-免密登录" aria-hidden="true">#</a> 11-GitLab 使用 SSH 免密登录</h1><h2 id="本节视频-4" tabindex="-1"><a class="header-anchor" href="#本节视频-4" aria-hidden="true">#</a> 本节视频</h2>`,48),L={href:"https://www.bilibili.com/video/av27548396",target:"_blank",rel:"noopener noreferrer"},q=l(`<hr><hr><h1 id="_00-gitlab-runner部署" tabindex="-1"><a class="header-anchor" href="#_00-gitlab-runner部署" aria-hidden="true">#</a> 00-GitLab Runner部署</h1><p>前置基础：</p><ul><li>java环境</li><li>maven环境</li><li>docker</li><li>docker-compose</li><li>docker-registry</li><li>gitlab</li><li>nexus</li></ul><h2 id="一、gitlab-runner安装运行" tabindex="-1"><a class="header-anchor" href="#一、gitlab-runner安装运行" aria-hidden="true">#</a> 一、GitLab Runner安装运行</h2><h3 id="_1、环境准备" tabindex="-1"><a class="header-anchor" href="#_1、环境准备" aria-hidden="true">#</a> 1、环境准备</h3><ol><li>创建工作目录</li></ol><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>mkdir -p /usr/local/docker/runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建构建目录</li></ol><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>mkdir -p /usr/local/docker/runner/environment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>下载 <code>jdk-8u241-linux-x64.tar.gz和apache-maven-3.5.4-bin.tar.gz</code> 并复制到 <code>/usr/local/docker/runner/environment</code></li></ol><p>JDK</p>`,13),G={href:"https://pan.baidu.com/s/1RZK423GbeDqD7TJJ8M9Wyw",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html",target:"_blank",rel:"noopener noreferrer"},E=i("p",null,"Maven",-1),N={href:"https://pan.baidu.com/s/1Q275RdqNpoRQDvuTioVNRQ",target:"_blank",rel:"noopener noreferrer"},S={href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},j=l(`<h3 id="_2、dockerfile" tabindex="-1"><a class="header-anchor" href="#_2、dockerfile" aria-hidden="true">#</a> 2、Dockerfile</h3><p>在 <code>/usr/local/docker/runner/environment</code> 目录下创建 <code>Dockerfile</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd /usr/local/docker/runner/environment
vim Dockerfile
----------------------------------------------------------
输入：
FROM gitlab/gitlab-runner:v11.0.2
MAINTAINER xingenhi &lt;xingenhi@163.com&gt;

# 更新下载源
RUN echo &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse&#39; &gt; /etc/apt/sources.list &amp;&amp; \\
    echo &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse&#39; &gt;&gt; /etc/apt/sources.list &amp;&amp; \\
    echo &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse&#39; &gt;&gt; /etc/apt/sources.list &amp;&amp; \\
    echo &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse&#39; &gt;&gt; /etc/apt/sources.list &amp;&amp; \\
    apt-get update -y &amp;&amp; \\
    apt-get clean

# 安装 Docker
RUN apt-get -y install apt-transport-https ca-certificates curl software-properties-common &amp;&amp; \\
    curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | apt-key add - &amp;&amp; \\
    add-apt-repository &quot;deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot; &amp;&amp; \\
    apt-get update -y &amp;&amp; \\
    apt-get install -y docker-ce
COPY daemon.json /etc/docker/daemon.json

# 安装 Docker Compose
WORKDIR /usr/local/bin
RUN curl -L https://github.com/docker/compose/releases/download/1.17.1/docker-compose-\`uname -s\`-\`uname -m\` &gt; /usr/local/bin/docker-compose
RUN chmod +x docker-compose

# 安装 Java
RUN mkdir -p /usr/local/java
WORKDIR /usr/local/java
COPY jdk-8u241-linux-x64.tar.gz /usr/local/java
RUN tar -zxvf jdk-8u241-linux-x64.tar.gz &amp;&amp; \\
    rm -fr jdk-8u241-linux-x64.tar.gz

# 安装 Maven
RUN mkdir -p /usr/local/maven
WORKDIR /usr/local/maven
COPY apache-maven-3.5.4-bin.tar.gz /usr/local/maven
RUN tar -zxvf apache-maven-3.5.4-bin.tar.gz &amp;&amp; \\
    rm -fr apache-maven-3.5.4-bin.tar.gz
# COPY settings.xml /usr/local/maven/apache-maven-3.5.4/conf/settings.xml

# 配置环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_241
ENV MAVEN_HOME /usr/local/maven/apache-maven-3.5.4
ENV PATH $PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin

WORKDIR /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、daemon-json" tabindex="-1"><a class="header-anchor" href="#_3、daemon-json" aria-hidden="true">#</a> 3、daemon.json</h3><p>在 <code>/usr/local/docker/runner/environment</code> 目录下创建 <code>daemon.json</code>，用于配置加速器和仓库地址</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd /usr/local/docker/runner/environment
vim daemon.json
-----------------------------------------
输入：
{
  &quot;registry-mirrors&quot;: [
    &quot;https://registry.docker-cn.com&quot;
  ],
  &quot;insecure-registries&quot;: [
    &quot;192.168.42.139:5000&quot;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),D={href:"https://www.yuque.com/xingenhi/doc/nnx7ky#jqAhF",target:"_blank",rel:"noopener noreferrer"},I=l(`<h3 id="_4、docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_4、docker-compose-yml" aria-hidden="true">#</a> 4、docker-compose.yml</h3><p>在 <code>/usr/local/docker/runner</code> 目录下创建 <code>docker-compose.yml</code></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd /usr/local/docker/runner
vim docker-compose.yml
---------------------------------------
输入：
version: &#39;3.1&#39;
services:
  gitlab-runner:
    build: environment
    restart: always
    container_name: gitlab-runner
    privileged: true
    volumes:
      - /usr/local/docker/runner/config:/etc/gitlab-runner
      - /var/run/docker.sock:/var/run/docker.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、刷新配置环境" tabindex="-1"><a class="header-anchor" href="#二、刷新配置环境" aria-hidden="true">#</a> 二、刷新配置环境</h2><p><strong>在宿主机进行操作即可</strong></p><ul><li>刷新docker私有仓库配置</li></ul><p><strong>首先保证本地配置了私有仓库,如果宿主机的本地仓库已经配置，此步骤可以跳过</strong></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>vim /etc/docker/daemon.json
------------------------------------
输入：
{
  &quot;registry-mirrors&quot;: [
    &quot;https://registry.docker-cn.com&quot;
  ],
  &quot;insecure-registries&quot;: [
    &quot;192.168.199.100:5000&quot;
  ]
}
-------------------------------------
# 先刷新配置
systemctl daemon-reload
# 重启docker
systemctl restart docker
# 检验是否配置成功
docker info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>权限修改</li></ul><p>在我测试过程中，如果直接使用，会报如下图的错误，需要我们手动进行赋予权限。</p><p><img src="https://picgo.xingenhi.cn//typoraoHDrIRjrEV6x_BKNl3ahB0btkZ8-AbGQ7H3V48NOZZs.png" alt="image"></p><p><strong>第一种</strong>：只要docker服务重启，就需要重新设置一次。</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd /var/run sudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>chmod 666 docker.sock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二种</strong>：可以持续有效</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>#添加docker用户组
groupadd docker
#将登陆用户加入到docker用户组中
gpasswd -a \${USER} docker
#更新用户组
newgrp docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、项目注册-runner" tabindex="-1"><a class="header-anchor" href="#三、项目注册-runner" aria-hidden="true">#</a> 三、项目注册 Runner</h2><ul><li><p>执行：<code>docker exec -it gitlab-runner gitlab-runner register</code></p></li><li><p># 输入 GitLab 地址</p><pre><code>Please enter the gitlab-ci coordinator URL (e.g. [https://gitlab.com/):](https://gitlab.com/):)
</code></pre></li></ul><hr><p><strong>查找路径：gitlab具体项目--&gt;设置--&gt;CI/CD--&gt;Runner（展开）--&gt;Setup a specific Runner manually里面的内容</strong></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>http://192.168.75.146:8080/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li># 输入 GitLab Token</li></ul><p>Please enter the gitlab-ci token for this runner:</p><hr><p><strong>查找路径：gitlab具体项目--&gt;设置--&gt;CI/CD--&gt;Runner（展开）--&gt;Setup a specific Runner manually里面的内容</strong></p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>1Lxq_f1NRfCfeNbE5WRh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li># 输入 Runner 的说明</li></ul><p>Please enter the gitlab-ci description for this runner:</p><hr><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>可以为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li># 设置 Tag，可以用于指定在构建规定的 tag 时触发 ci</li></ul><p>Please enter the gitlab-ci tags for this runner (comma separated):</p><hr><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>可以为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li># 选择 runner 执行器，这里我们选择的是 shell</li></ul><p>Please enter the executor: docker-ssh, parallels, ssh, virtualbox, docker+machine, docker-ssh+machine, docker, kubernetes, shell:</p><hr><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>整体执行过程如下图：</p><p><img src="https://picgo.xingenhi.cn//typoragh_IImmuRs5MfL68UcXvVdjmdSME6Fjg7GKFrzz9hlE.png" alt="image"></p><p>说明：</p><ul><li>gitlab-ci-multi-runner register：执行注册命令</li><li>Please enter the gitlab-ci coordinator URL：输入 ci 地址</li><li>Please enter the gitlab-ci token for this runner：输入 ci token</li><li>Please enter the gitlab-ci description for this runner：输入 runner 名称</li><li>Please enter the gitlab-ci tags for this runner：设置 tag</li><li>Whether to run untagged builds：这里选择 true ，代码上传后会能够直接执行</li><li>Whether to lock Runner to current project：直接回车，不用输入任何口令</li><li>Please enter the executor：选择 runner 类型，这里我们选择的是 shell</li></ul><h2 id="四、项目持续集成" tabindex="-1"><a class="header-anchor" href="#四、项目持续集成" aria-hidden="true">#</a> 四、项目持续集成</h2><h3 id="_1、部署通用模块项目" tabindex="-1"><a class="header-anchor" href="#_1、部署通用模块项目" aria-hidden="true">#</a> 1、部署通用模块项目</h3><hr><p>先将所有被依赖项目（通用模块项目）部署到 Nexus，为项目创建一个 <code>deploy.bat</code> 文件，示例代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>cd ..
cd dependencies
call mvn deploy

cd ..
cd commons
call mvn deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、持续集成依赖管理项目" tabindex="-1"><a class="header-anchor" href="#_2、持续集成依赖管理项目" aria-hidden="true">#</a> 2、持续集成依赖管理项目</h3><hr><p>由于我们所有项目的父工程都是依赖于 <code>dependencies</code>，所以我们持续集成的第一步是将该项目进行持续集成，在项目目录创建 <code>.gitlab-ci.yml</code> 文件，代码如下：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>stages:
  - deploy

deploy:
  stage: deploy
  script:
    - /usr/local/maven/apache-maven-3.5.4/bin/mvn clean install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、持续集成服务提供者或者消费者" tabindex="-1"><a class="header-anchor" href="#_3、持续集成服务提供者或者消费者" aria-hidden="true">#</a> 3、持续集成服务提供者或者消费者</h3><hr><h4 id="_1-gitlab-ci-yml" tabindex="-1"><a class="header-anchor" href="#_1-gitlab-ci-yml" aria-hidden="true">#</a> （1）.gitlab-ci.yml</h4><p>在项目工程下编写 .gitlab-ci.yml 配置文件：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>stages:
  - build
  - push
  - run
  - clean

build:
  stage: build
  script:
    - /usr/local/maven/apache-maven-3.5.4/bin/mvn clean package
    - cp target/itoken-eureka-1.0.0-SNAPSHOT.jar docker
    - cd docker
    - docker build -t 127.0.0.1:5000/itoken-eureka .

push:
  stage: push
  script:
    - docker push 127.0.0.1:5000/itoken-eureka

run:
  stage: run
  script:
    - cd docker
    - docker-compose down
    - docker-compose up -d

clean:
  stage: clean
  script:
    - docker rmi $(docker images -q -f dangling=true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点说明：</p><ul><li>stages：定义构建阶段，这里只有一个阶段 deploy</li><li>deploy：构建阶段 deploy 的详细配置也就是任务配置</li><li>script：需要执行的 shell 脚本</li><li>only：这里的 master 指在提交到 master 时执行</li><li>tags：与注册 runner 时的 tag 匹配</li></ul><h4 id="_2-dockerfile" tabindex="-1"><a class="header-anchor" href="#_2-dockerfile" aria-hidden="true">#</a> （2）Dockerfile</h4><p>在项目工程下创建<code>docker</code>文件夹，并在<code>docker</code>文件夹下创建<code>Dockerfile</code> 配置文件：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>FROM openjdk:8-jre
MAINTAINER xingenhi &lt;xingenhi@163.com&gt;

ENV APP_VERSION 1.0.0-SNAPSHOT

# dockerize插件，用于当某个项目需要依赖其他项目时等待顺序启动
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\
    &amp;&amp; tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \\
    &amp;&amp; rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir /app
COPY itoken-eureka-$APP_VERSION.jar /app/app.jar

# 【&quot;dockerize&quot;, &quot;-timeout&quot;, &quot;5m&quot;, &quot;-wait&quot;, &quot;http://192.168.92.130:8888&quot;】：等待服务启动后再开始运行
ENTRYPOINT [&quot;dockerize&quot;, &quot;-timeout&quot;, &quot;5m&quot;, &quot;-wait&quot;, &quot;http://192.168.92.130:8888&quot;, &quot;java&quot;, &quot;-Djava.security.egd=file:/dev/./urandom&quot;, &quot;-jar&quot;, &quot;/app/app.jar&quot;, &quot;--spring.profiles.active=prod&quot;]

EXPOSE 8761
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_3-docker-compose-yml" aria-hidden="true">#</a> （3）docker-compose.yml</h4><p>在项目工程下创建<code>docker</code>文件夹，并在<code>docker</code>文件夹下创建<code>docker-compose.yml</code> 配置文件：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>version: &#39;3.1&#39;
services:
  itoken-eureka-1:
    restart: always
    image: 127.0.0.1:5000/itoken-eureka
    container_name: itoken-eureka-1
    ports:
      - 8761:8761
    networks:
      - eureka-network1

  itoken-eureka-2:
    restart: always
    image: 127.0.0.1:5000/itoken-eureka
    container_name: itoken-eureka-2
    ports:
      - 8861:8761
    networks:
      - eureka-network2

  itoken-eureka-3:
    restart: always
    image: 127.0.0.1:5000/itoken-eureka
    container_name: itoken-eureka-3
    ports:
      - 8961:8761
    networks:
      - eureka-network3


networks:
  eureka-network1:
  eureka-network2:
  eureka-network3:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、其它配置" tabindex="-1"><a class="header-anchor" href="#_4、其它配置" aria-hidden="true">#</a> 4、其它配置</h3><p>为保证能够正常集成，我们还需要一些其它配置：</p><ul><li>安装完 GitLab Runner 后系统会增加一个 gitlab-runner 账户，我们将它加进 root 组：</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>gpasswd -a gitlab-runner root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置需要操作目录的权限，比如你的 runner 要在 gaming 目录下操作：</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>chmod 775 gaming
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>由于我们的 shell 脚本中有执行 git pull 的命令，我们直接设置以 ssh 方式拉取代码：</li></ul><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>su gitlab-runner
ssh-keygen -t rsa -C &quot;你在 GitLab 上的邮箱地址&quot;
cd 
cd .ssh
cat id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>复制 id_rsa.pub 中的秘钥到 GitLab：</li></ul><p><img src="https://picgo.xingenhi.cn//typoraycW732lV2MgXvK_DOuLyo50bLgalS0uzRQe0xssbcWU.png" alt="image"></p><ul><li>通过 ssh 的方式将代码拉取到本地</li></ul><h3 id="_5、测试集成效果" tabindex="-1"><a class="header-anchor" href="#_5、测试集成效果" aria-hidden="true">#</a> 5、测试集成效果</h3><p>所有操作完成后 push 代码到服务器，查看是否成功：</p><p><img src="https://picgo.xingenhi.cn//typora-epn6a6x0TeSXavZeKWQFRQ1bbZxLVHZBTDEpfo_y6s.png" alt="image"></p><p>passed 表示执行成功</p><h3 id="_6、其他命令" tabindex="-1"><a class="header-anchor" href="#_6、其他命令" aria-hidden="true">#</a> 6、其他命令</h3><p>删除注册信息：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>gitlab-ci-multi-runner unregister --name &quot;名称&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看注册列表：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>gitlab-ci-multi-runner list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_00-gitlab部署" tabindex="-1"><a class="header-anchor" href="#_00-gitlab部署" aria-hidden="true">#</a> 00-GitLab部署</h1><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>mkdir -vp /usr/local/docker/gitlab
cd /usr/local/docker/gitlab/
vim docker-compose.yml
-----------------------------------
输入：
version: &#39;3.1&#39;
services:
    web:
      image: &#39;twang2218/gitlab-ce-zh:11.1&#39;
      restart: always
      hostname: &#39;192.168.75.145&#39;
      environment:
        TZ: &#39;Asia/Shanghai&#39;
        GITLAB_OMNIBUS_CONFIG: |
          external_url &#39;http://192.168.75.145:8080&#39;
          gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222
          unicorn[&#39;port&#39;] = 8888
          nginx[&#39;listen_port&#39;] = 8080
      ports:
        - &#39;8080:8080&#39;
        - &#39;8443:443&#39;
        - &#39;2222:22&#39;
      volumes:
        - /usr/local/docker/gitlab/config:/etc/gitlab
        - /usr/local/docker/gitlab/data:/var/opt/gitlab
        - /usr/local/docker/gitlab/logs:/var/log/gitlab
-----------------------------------
docker-compose up -d
# 测试访问
访问http://ip:post/8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,86);function O(T,A){const n=d("ExternalLinkIcon");return r(),t("div",null,[i("div",o,[u,v,i("p",null,[i("a",m,[e("课程视频"),a(n)]),e(),p])]),h,g,i("ul",null,[i("li",null,[i("a",b,[e("【视频】平台即服务-GitLab-使用 Git 托管代码"),a(n)])])]),x,i("ul",null,[i("li",null,[i("a",f,[e("【视频】平台即服务-GitLab-简介与安装"),a(n)])])]),k,i("ul",null,[i("li",null,[i("a",_,[e("【视频】平台即服务-GitLab-基本设置"),a(n)])])]),P,i("ul",null,[i("li",null,[i("a",y,[e("【视频】平台即服务-GitLab-第一个托管项目"),a(n)])])]),w,i("ul",null,[i("li",null,[i("a",L,[e("【视频】平台即服务-GitLab-使用 SSH 免密登录"),a(n)])])]),q,i("p",null,[e("百度云下载链接："),i("a",G,[e("https://pan.baidu.com/s/1RZK423GbeDqD7TJJ8M9Wyw"),a(n)]),e(" 提取码：63jj")]),i("p",null,[e("官方下载链接："),i("a",R,[e("https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"),a(n)])]),E,i("p",null,[e("百度云下载链接："),i("a",N,[e("https://pan.baidu.com/s/1Q275RdqNpoRQDvuTioVNRQ"),a(n)]),e(" 提取码：vwea")]),i("p",null,[e("官方下载链接："),i("a",S,[e("http://maven.apache.org/download.cgi"),a(n)])]),j,i("p",null,[e("此处为语雀加密文本卡片，点击链接查看："),i("a",D,[e("https://www.yuque.com/xingenhi/doc/nnx7ky#jqAhF"),a(n)])]),I])}const V=s(c,[["render",O],["__file","GitLab.html.vue"]]);export{V as default};
