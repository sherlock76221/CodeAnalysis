import{_ as d,r as c,o as l,c as s,a as e,b as a,d as o,w as r,f as n}from"./app-e7c417ae.js";const t={},h=n(`<h1 id="docker快速部署-平台体验首推" tabindex="-1"><a class="header-anchor" href="#docker快速部署-平台体验首推" aria-hidden="true">#</a> Docker快速部署（平台体验首推）</h1><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Docker部署会包含Mariadb和Redis，如果需要更大规模使用，可以调整配置文件使用运维规范的 MySQL/Mariadb 和 Redis。</p></div><h4 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h4><ul><li>系统环境 <ul><li>Linux、macOS、Windows</li><li>最低配置：2核4G内存、100G硬盘存储空间</li></ul></li><li>环境准备 <ul><li>Docker</li></ul></li><li>权限准备 <ul><li>需要开放80、8000端口的访问权限(80为TCA平台访问端口，8000为TCA Server访问端口)</li></ul></li></ul><h4 id="部署对象" tabindex="-1"><a class="header-anchor" href="#部署对象" aria-hidden="true">#</a> 部署对象</h4><p>Server、Web 与 Client</p><h4 id="操作说明" tabindex="-1"><a class="header-anchor" href="#操作说明" aria-hidden="true">#</a> 操作说明</h4><h5 id="首次启动操作" tabindex="-1"><a class="header-anchor" href="#首次启动操作" aria-hidden="true">#</a> 首次启动操作</h5><ol><li>进入CodeAnalysis工作目录（例如<code>~/CodeAnalysis</code>)，以下路径均为目录内的相对路径</li><li>执行命令：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><div class="custom-container tip"><p class="custom-container-title">提示</p><ol><li>通过Docker部署默认会从DockerHub上拉取<code>tencenttca/tca:latest</code>镜像</li><li>通过Docker部署默认会在当前根目录下的挂载三个路径： <ul><li><code>.docker_temp/logs</code>：容器内的<code>/var/log/tca/</code>，存放TCA平台的日输出文件；</li><li><code>.docker_temp/data</code>：容器内的<code>/var/opt/tca/</code>， 存放TCA平台的服务数据，主要是Mariadb、Redis；</li><li><code>.docker_temp/configs</code>：容器内的<code>/etc/tca</code>，存放TCA平台的配置文件，主要是<code>config.sh</code></li></ul></li></ol></div><h5 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h5><ol><li>更新代码</li><li>执行以下命令：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>TCA_IMAGE_BUILD=true ./quick_install.sh docker deploy  #重新构建并启动tca容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>TCA_IMAGE_BUILD=true</code>表示从本地构建TCA镜像运行</p></div><h5 id="运行容器" tabindex="-1"><a class="header-anchor" href="#运行容器" aria-hidden="true">#</a> 运行容器</h5><p>如果已经在机器上执行过<code>docker deploy</code>，并保留容器数据的，可以执行以下命令启动容器，继续运行TCA</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> 停止容器</h5><p>如果容器正在运行，希望停止容器，可以运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bash ./quick_install.sh docker stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用tca" tabindex="-1"><a class="header-anchor" href="#使用tca" aria-hidden="true">#</a> 使用TCA</h4>`,21),u=e("code",null,"http://部署机器IP/",-1),p=e("br",null,null,-1),b=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"提示"),e("p",null,"默认平台登录账号/密码：CodeDog/admin"),e("p",null,"如部署过程中，已调整默认账号密码，请按照调整后的账号密码进行登录")],-1);function m(v,_){const i=c("RouterLink");return l(),s("div",null,[h,e("p",null,[a("至此，您已完成第一个TCA平台部署，请在浏览器输入"),u,a("，点击立即体验，完成登录后即可开启您的腾讯云代码分析。"),p,a(" 平台内操作指引请查看："),o(i,{to:"/zh/guide/%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/%E5%BF%AB%E9%80%9F%E5%90%AF%E5%8A%A8%E4%B8%80%E6%AC%A1%E4%BB%A3%E7%A0%81%E5%88%86%E6%9E%90.html"},{default:r(()=>[a("快速启动一次代码分析")]),_:1})]),b])}const A=d(t,[["render",m],["__file","dockerDeploy.html.vue"]]);export{A as default};
