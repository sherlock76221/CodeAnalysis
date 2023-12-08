import{_ as o,r,o as s,c as i,a as t,b as e,d as l,w as c,f as a}from"./app-e7c417ae.js";const d={},h=a('<h1 id="工具管理说明" tabindex="-1"><a class="header-anchor" href="#工具管理说明" aria-hidden="true">#</a> 工具管理说明</h1><p>腾讯云代码分析平台目前已集成众多自研、知名开源工具，并采用分层分离的架构，可以快速对接企业内部团队研发的工具，并将其集成到平台内供企业内部团队使用，满足快速自助的管理工具。</p><ul><li><p>按工具来源划分，工具包含<strong>平台提供</strong>的工具，以及<strong>团队接入</strong>的工具。</p><p><strong>平台提供工具</strong>：由腾讯云代码分析平台提供的一系列自研、知名开源工具，此类工具都为公开工具，任何团队都可以使用此工具及工具规则进行代码分析。</p><p><strong>团队接入</strong>：由团队自行接入的工具，默认该工具仅能在团队内使用，如需跨团队使用或任何团队都可以使用需联系平台管理员进行配置。</p></li><li><p>按工具使用划分，工具包含<strong>可自定义规则工具</strong>、<strong>可使用工具</strong>两种。</p><p><strong>可自定义规则工具</strong>：该工具任何团队都可以使用，且该工具可以支持添加团队所需的自定义规则。如<code>RegexScan</code>工具，各个团队都可以使用该工具提供的规则，也可以自定义规则，此自定义规则团队隔离。</p><p><strong>可使用工具</strong>：该工具团队内可使用，但不能添加自定义规则</p></li></ul>',3),p={class:"custom-container tip"},_=t("p",{class:"custom-container-title"},"TIP",-1),u=t("code",null,"RegexFileScan",-1),g=t("code",null,"RegexScan",-1),A=t("p",null,[e("需平台管理员在"),t("strong",null,"后台管理"),e("-"),t("strong",null,"工具管理"),e("中找到对应工具，并将其权限状态调整为"),t("strong",null,"支持自定义规则"),e("。")],-1),f=a('<h2 id="自定义工具" tabindex="-1"><a class="header-anchor" href="#自定义工具" aria-hidden="true">#</a> 自定义工具</h2><h3 id="工具白名单" tabindex="-1"><a class="header-anchor" href="#工具白名单" aria-hidden="true">#</a> 工具白名单</h3><p>默认自定义工具只能当前团队内使用，添加 <code>工具白名单</code> 后可以让其他团队使用。</p><h2 id="使用场景说明" tabindex="-1"><a class="header-anchor" href="#使用场景说明" aria-hidden="true">#</a> 使用场景说明</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>添加工具、添加工具规则、添加自定义规则等均需团队内管理员可操作。分析。</p></div><hr><p>【用户 A1】【用户 A2】为【团队 O1】的管理员，【用户 A3】为【团队 O2】的普通成员。</p><p>【用户 B1】【用户 B2】为【团队 O2】的管理员，【用户 A3】为【团队 O2】的普通成员。</p><h3 id="场景-1" tabindex="-1"><a class="header-anchor" href="#场景-1" aria-hidden="true">#</a> 场景 1</h3><ul><li><p>【用户 A1】在工具管理页面添加了【工具 T1】，该工具为团队内工具； -【用户 A1】【用户 A2】均可操作该工具，如修改工具信息、添加工具规则等，【用户 A3】仅可以使用该工具，如在规则配置页面添加该工具规则；</p></li><li><p>由于【工具 T1】目前仅【团队 O1】可用，【团队 O2】中无法看到此工具，即【团队 O2】内的成员无法使用该工具。</p></li><li><p>如需【工具 T1】也让【团队 O2】使用有两种解决方法：1. 【工具 T1】将【团队 O2】加入使用白名单；2. 向平台发起申请，由平台管理员将【工具 T1】调整为全部团队都可使用。</p></li></ul><h3 id="场景-2" tabindex="-1"><a class="header-anchor" href="#场景-2" aria-hidden="true">#</a> 场景 2</h3><ul><li>【用户 A3】在工具管理页面发现了可自定义规则的工具，如<code>正则工具 RegexScan</code>，进入工具-自定义规则栏，发现没有添加规则的入口；</li><li>由于【用户 A3】仅为普通成员权限，因此无法添加规则，此时需要【团队 O1】的管理员才能操作；</li><li>添加【自定义规则 R1】完成后，团队内全部成员均可使用该自定义规则，如在规则配置页面添加该自定义规则；</li><li>由于【自定义规则 R1】是团队隔离的，即【团队 O1】创建的自定义规则，在【团队 O2】中并看不到，且无法使用该规则；</li><li>如需【自定义规则 R1】也让【团队 O2】使用，则仅能向工具方发起申请，由工具方将该自定义规则调整为工具规则。</li></ul>',12);function m(x,O){const n=r("RouterLink");return s(),i("div",null,[h,t("div",p,[_,t("p",null,[e("目前开源版仅**"),u,e("、"),g,e("、"),l(n,{to:"/en/guide/%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5/%E5%B7%A5%E5%85%B7/TCA-Armory-R.html"},{default:c(()=>[e("TCA-Armory-R")]),_:1}),e("**等三款工具支持用户自定义规则")]),A]),f])}const T=o(d,[["render",m],["__file","工具管理说明.html.vue"]]);export{T as default};
