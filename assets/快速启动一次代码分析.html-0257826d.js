import{_ as l,a as r,b as n,c as d}from"./start_scan_01-c88b8a36.js";import{_ as h}from"./start_scan_02-3fe00a0e.js";import{_ as c,a as _,b as u}from"./start_scan_04-65ab4d48.js";import{_ as E,r as p,o as m,c as A,a as e,b as t,d as i,w as s,f as o}from"./app-e7c417ae.js";const f={},B=e("h1",{id:"快速启动一次代码分析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速启动一次代码分析","aria-hidden":"true"},"#"),t(" 快速启动一次代码分析")],-1),g=e("h2",{id:"创建团队及项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建团队及项目","aria-hidden":"true"},"#"),t(" 创建团队及项目")],-1),x=e("strong",null,"创建团队",-1),b=e("br",null,null,-1),C=e("p",null,[e("img",{src:l,alt:"创建团队"})],-1),v=e("li",null,[e("p",null,[e("strong",null,"为团队创建一个项目，或选择一个已有项目，并进入项目内")]),e("p",null,[e("img",{src:r,alt:"创建项目"})])],-1),F=o('<h2 id="登记代码库" tabindex="-1"><a class="header-anchor" href="#登记代码库" aria-hidden="true">#</a> 登记代码库</h2><ul><li><p><strong>完成代码库登记，并点击进入代码分析</strong></p><p><img src="'+n+'" alt="代码库登记"></p><p><img src="'+d+'" alt="进入代码分析"></p></li></ul><h2 id="启动代码分析" tabindex="-1"><a class="header-anchor" href="#启动代码分析" aria-hidden="true">#</a> 启动代码分析</h2><h3 id="执行初始化创建" tabindex="-1"><a class="header-anchor" href="#执行初始化创建" aria-hidden="true">#</a> 执行初始化创建</h3><p><img src="'+h+'" alt="开始分析"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><ol><li>首次开启代码分析，用户可选择使用已有的分析方案模板，或创建分析方案的。</li><li>点击确认时，平台会首先创建该代码库的分析方案，然后根据代码库分支、当前分析方案创建分析项目，供用户启动代码分析。</li></ol></div><h3 id="执行代码分析" tabindex="-1"><a class="header-anchor" href="#执行代码分析" aria-hidden="true">#</a> 执行代码分析</h3><p>初始化创建项目后，可通过 <code>在线分析</code> 或 <code>客户端分析</code> 来启动代码分析。</p><p><img src="'+c+'" alt="代码分析"></p><h4 id="在线分析" tabindex="-1"><a class="header-anchor" href="#在线分析" aria-hidden="true">#</a> 在线分析</h4><p>在线分析即是通过Server端将分析任务注册到执行队列中，并将任务分配到平台配置的常驻分析节点上进行，分析完毕后将分析结果上报入库。</p>',11),k={class:"custom-container tip"},z=e("p",{class:"custom-container-title"},"提示",-1),N=e("p",null,"使用在线分析要求平台具有常驻分析节点：",-1),V=e("p",null,[e("strong",null,"如无分析节点，在线分析任务将无法完成分配，未分配任务将于超时后自动注销"),t("。")],-1),w=e("h4",{id:"客户端分析",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#客户端分析","aria-hidden":"true"},"#"),t(" 客户端分析")],-1),D=e("code",null,"codedog.ini",-1),L=o('<h2 id="查看分析历史" tabindex="-1"><a class="header-anchor" href="#查看分析历史" aria-hidden="true">#</a> 查看分析历史</h2><p>分析结束后，数据会上报到服务端。可进入分析历史页面查看分析记录以及分析结果。</p><p><img src="'+_+'" alt="分析历史"></p><h2 id="查看分析概览" tabindex="-1"><a class="header-anchor" href="#查看分析概览" aria-hidden="true">#</a> 查看分析概览</h2>',4),R=e("p",null,[e("img",{src:u,alt:"分支概览"})],-1);function S(T,j){const a=p("RouterLink");return m(),A("div",null,[B,g,e("ul",null,[e("li",null,[e("p",null,[x,b,t(" 点击了解"),i(a,{to:"/zh/guide/%E5%9B%A2%E9%98%9F%E7%AE%A1%E7%90%86/%E5%9B%A2%E9%98%9F%E7%AE%A1%E7%90%86.html"},{default:s(()=>[t("团队管理")]),_:1})]),C]),v]),F,e("div",k,[z,N,e("ul",null,[e("li",null,[e("p",null,[t("如您的TCA平台是使用官方一键部署脚本完成的环境部署（Docker部署、Docker-Compose部署、源码部署三种），默认已启动一个分析节点（即客户端），可直接用于在线分析。可查看"),i(a,{to:"/zh/guide/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86/%E8%8A%82%E7%82%B9%E7%AE%A1%E7%90%86.html"},{default:s(()=>[t("管理入口-节点管理")]),_:1}),t("确认该节点状态。")])]),e("li",null,[e("p",null,[t("您也可自行接入更多分析节点实现并行执行代码分析，接入节点操作请查阅"),i(a,{to:"/zh/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.html"},{default:s(()=>[t("常驻节点分析")]),_:1})])])]),V]),w,e("p",null,[t("客户端分析即是本地分析，需要在本地有客户端，并配置好客户端配置文件 "),D,t("，详细操作参考："),i(a,{to:"/zh/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E6%9C%AC%E5%9C%B0%E5%88%86%E6%9E%90.html"},{default:s(()=>[t("启动客户端分析")]),_:1}),t("。分析完毕后会将数据上报入库。")]),L,e("p",null,[t("分析结束后，进入分支概览可以查看该分支指定分析方案的概览数据以及 "),i(a,{to:"/zh/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%88%86%E6%9E%90%E7%BB%93%E6%9E%9C%E6%9F%A5%E7%9C%8B.html"},{default:s(()=>[t("问题列表")]),_:1}),t("等。")]),R])}const I=E(f,[["render",S],["__file","快速启动一次代码分析.html.vue"]]);export{I as default};
