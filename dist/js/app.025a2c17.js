(function(){"use strict";var e={2392:function(e,t,n){n.d(t,{I:function(){return u}});var o=n(7795),r=n(4287),a=n(3866);const i={apiKey:"AIzaSyAyBluwo4o8Ib_NR90uQULu-J1Yq3LuAN8",authDomain:"vismoottrainingquestions.firebaseapp.com",projectId:"vismoottrainingquestions",storageBucket:"vismoottrainingquestions.appspot.com",messagingSenderId:"433861093276",appId:"1:433861093276:web:ed946a20b96e7f00788a59"};(0,o.ZF)(i);const s=(0,r.ad)();t.Z=s;const u=(0,a.v0)()},9135:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t,n,o,a,i){const s=(0,r.up)("the-header"),u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s,{onSignOut:o.signOutUser},null,8,["onSignOut"]),(0,r.Wm)(u)],64)}n(7658);var i=n(3866),s=n(4870),u=n(2392),l=n(4287);const c=e=>((0,r.dD)("data-v-5e331980"),e=e(),(0,r.Cn)(),e),d={class:"navbar navbar-expand-lg bg-body-tertiary"},f={class:"container-fluid"},p=c((()=>(0,r._)("a",{class:"navbar-brand",href:"#"},"Willem C. Vis Moot - Training",-1))),m=c((()=>(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1))),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},g={class:"navbar-nav"},b={class:"navbar-nav justify-content-end"};function h(e,t,n,o,a,i){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",d,[(0,r._)("div",f,[p,m,(0,r._)("div",v,[(0,r._)("div",g,[(0,r.Wm)(s,{to:"/",class:"nav-item nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(s,{to:"/editor",class:"nav-item nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Upload Question")])),_:1}),(0,r.Wm)(s,{to:"/practice",class:"nav-item nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Practice")])),_:1}),(0,r.Wm)(s,{to:"/profile",class:"nav-item nav-link"},{default:(0,r.w5)((()=>[(0,r.Uk)("Profile")])),_:1})]),(0,r._)("div",b,[this.$root.loggedIn?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"sign-out-button",onClick:t[0]||(t[0]=(...e)=>i.logOut&&i.logOut(...e))}," Sign Out ")):(0,r.kq)("",!0)])])])])}var y={name:"TheHeader",emits:["sign-out"],methods:{logOut(){this.$emit("sign-out")}}},w=n(89);const _=(0,w.Z)(y,[["render",h],["__scopeId","data-v-5e331980"]]);var k=_,O=n(2483);const A=e=>((0,r.dD)("data-v-07d1ec09"),e=e(),(0,r.Cn)(),e),q=A((()=>(0,r._)("h1",{style:{"margin-top":"5rem"},class:"landing-title"},"Welcome to Vis Quiz",-1))),U={class:"landing-page"},C={key:0},I={key:1},S={class:"landing-buttons"};function j(e,t,n,o,a,i){const s=(0,r.up)("login-form"),u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[q,(0,r._)("div",U,[this.$root.loggedIn?((0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("div",S,[(0,r.Wm)(u,{to:"/editor",class:"landing-button"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Upload Question ")])),_:1}),(0,r.Wm)(u,{to:"/practice",class:"landing-button"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Practice ")])),_:1})])])):((0,r.wg)(),(0,r.iD)("div",C,[(0,r._)("main",null,[(0,r.Wm)(s)])]))])],64)}const E={class:"container mt-5"},L={class:"row justify-content-center"},P={class:"col"},T={class:"card"},N={class:"card-body"},D=(0,r._)("h2",{class:"mb-4"},"Login",-1),W={class:"form-group"},x=(0,r._)("label",{for:"email",class:"form-label label-sm"}," Email address ",-1),H={class:"form-group"},J=(0,r._)("label",{for:"password",class:"form-label label-sm"},"Password",-1),M=(0,r._)("button",{type:"submit",class:"my-global-button"},"Login",-1),Z={class:"mt-3"};function B(e,t,n,a,i,s){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("div",L,[(0,r._)("div",P,[(0,r._)("div",T,[(0,r._)("div",N,[D,(0,r._)("form",{onSubmit:t[2]||(t[2]=(0,o.iM)(((...e)=>s.login&&s.login(...e)),["prevent"]))},[(0,r._)("div",W,[x,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control form-control-sm",id:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),placeholder:"Enter email",required:""},null,512),[[o.nr,i.email]])]),(0,r._)("div",H,[J,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control form-control-sm",id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),placeholder:"Enter password",required:""},null,512),[[o.nr,i.password]])]),M],32)])]),(0,r._)("p",Z,[(0,r.Uk)(" Don't have an account? "),(0,r.Wm)(u,{to:"/signup"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Up")])),_:1})])])])])}var F={data(){return{email:"",password:""}},methods:{login(){(0,i.e5)(u.I,this.email,this.password).then((()=>{this.$root.loggedIn=!0,console.log("Email:",this.email),console.log("Password:",this.password)}))}}};const Q=(0,w.Z)(F,[["render",B]]);var $=Q,V={name:"LandingPage",components:{LoginForm:$}};const z=(0,w.Z)(V,[["render",j],["__scopeId","data-v-07d1ec09"]]);var Y=z;const K=[{path:"/",name:"home",component:Y,meta:{requiresAuth:!1}},{path:"/editor",name:"editor",component:()=>n.e(896).then(n.bind(n,5896)),meta:{requiresAuth:!0}},{path:"/practice",name:"practice",component:()=>n.e(302).then(n.bind(n,7302)),meta:{requiresAuth:!0}},{path:"/signup",name:"signup",component:()=>n.e(483).then(n.bind(n,1473)),meta:{requiresAuth:!1}},{path:"/profile",name:"profile",component:()=>n.e(723).then(n.bind(n,2723)),meta:{requiresAuth:!0}}],R=(0,O.p7)({history:(0,O.PO)("/"),routes:K});R.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.requiresAuth)),r=u.I.currentUser;o&&!r?n("/"):n()}));var G=R,X={components:{TheHeader:k},setup(){const e=(0,s.iH)(!1),t=(0,s.iH)([]),n=(0,s.iH)([]),o=(0,s.iH)([]);(0,r.JJ)("userQuestions",t),(0,r.JJ)("userLabels",n),(0,r.JJ)("publicQuestions",o);const a=()=>{(0,i.w7)(u.I),G.push("/")},c=async e=>{try{const o=(0,l.hJ)(u.Z,`users/${e.uid}/labels`),r=await(0,l.PL)(o);n.value=r.docs.map((e=>e.data()));const a=(0,l.hJ)(u.Z,`users/${e.uid}/questions`),i=await(0,l.PL)(a);t.value=i.docs.map((e=>{const t=e.data();return{id:e.id,questionText:t.questionText,answerOptions:t.answerOptions,questionLabels:t.questionLabels||[]}}))}catch(o){console.error("Fehler beim Abrufen der Benutzerdaten:",o.message)}console.log("labels in app.vue ",n.value)};return(0,r.bv)((()=>{(0,i.Aj)(u.I,(async t=>{console.log("called called called"),t?(e.value=!0,await c(t)):e.value=!1}))})),{loggedIn:e,signOutUser:a}}};const ee=(0,w.Z)(X,[["render",a]]);var te=ee;n(5654),n(7130);(0,o.ri)(te).use(G).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{302:"4e70cb70",483:"11c7c5e3",723:"9bb8d77a",896:"b2bef650"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{302:"c1db84f1",483:"13120c31",723:"c85b1aa1",896:"64ed11dc"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="multiple-choice:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return r();e(o,s,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={302:1,483:1,723:1,896:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],s=o[1],u=o[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var c=u(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9135)}));o=n.O(o)})();
//# sourceMappingURL=app.025a2c17.js.map