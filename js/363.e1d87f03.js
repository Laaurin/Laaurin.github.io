"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[363],{1769:function(e,s,t){t.d(s,{Z:function(){return v}});var i=t(3396),n=t(7139);const o={class:"profile ms-3"},r={class:"text",style:{"font-weight":"bold"}},l={class:"text"};function a(e,s,t,a,c,d){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,(0,n.zw)(a.uniName),1),(0,i._)("div",l,(0,n.zw)(a.userName||"no user selected"),1),t.show?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:s[0]||(s[0]=(...e)=>a.buttonClick&&a.buttonClick(...e))},"change user")):(0,i.kq)("",!0)])}var c=t(65),d={name:"ProfilIcon",props:{show:Boolean},emits:["showUserSelection"],setup(e,{emit:s}){const t=(0,c.oR)(),n=(0,i.Fl)((()=>t.getters.userProfileName||"no user selected")),o=(0,i.Fl)((()=>t.getters.userUni||"no uni found")),r=()=>{s("showUserSelection")};return{userName:n,uniName:o,buttonClick:r}}},u=t(89);const g=(0,u.Z)(d,[["render",a],["__scopeId","data-v-93d24f68"]]);var v=g},729:function(e,s,t){t.d(s,{Z:function(){return F}});var i=t(3396);const n={class:"sidebar shadow-lg"};function o(e,s,t,o,r,l){const a=(0,i.up)("profil-icon"),c=(0,i.up)("user-selection");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",n,[(0,i.Wm)(a,{show:t.show,class:"mb-5",style:{position:"relative"},onShowUserSelection:s[0]||(s[0]=e=>r.showUserSelection=!0)},null,8,["show"]),(0,i.WI)(e.$slots,"default",{},void 0,!0)]),r.showUserSelection?((0,i.wg)(),(0,i.j4)(c,{key:0,onUserSelected:s[1]||(s[1]=e=>r.showUserSelection=!1)})):(0,i.kq)("",!0)],64)}var r=t(1769),l=t(7139);const a={class:"pop-up-window"},c={class:"pop-up-inner"},d={class:"d-flex flex-wrap justify-content-center"},u={class:"d-flex align-items-center"},g={class:"d-flex align-items-center"};function v(e,s,t,n,o,r){const v=(0,i.up)("selectable-user"),p=(0,i.up)("new-user");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",c,[(0,i._)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.userList,(e=>((0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)([{active:e.id===n.selectedProfileId},"selection-option"]),key:e.id},[(0,i.Wm)(v,{"user-name":e.name,removing:n.removing,onSelect:s=>n.handleClick(e)},null,8,["user-name","removing","onSelect"])],2)))),128)),(0,i._)("div",u,[(0,i.Wm)(p)]),(0,i._)("div",g,[(0,i._)("i",{onClick:s[0]||(s[0]=(...e)=>n.toggleRemove&&n.toggleRemove(...e)),class:(0,l.C_)(["bi bi-dash-circle",{"delete-button-active":n.removing,"delete-button":!n.removing}]),style:{"font-size":"30px"}},null,2)])])])])}const p=e=>((0,i.dD)("data-v-349948e5"),e=e(),(0,i.Cn)(),e),m={key:0,class:"removeIcon"},w=p((()=>(0,i._)("i",{class:"bi bi-trash"},null,-1))),b=[w],f={key:1},h=p((()=>(0,i._)("i",{style:{"font-size":"50px"},class:"bi bi-person"},null,-1))),k=[h];function U(e,s,t,n,o,r){return(0,i.wg)(),(0,i.iD)("div",{class:"profile",onClick:s[0]||(s[0]=(...e)=>n.select&&n.select(...e))},[n.deletable?((0,i.wg)(),(0,i.iD)("div",m,b)):((0,i.wg)(),(0,i.iD)("div",f,k)),(0,i._)("p",null,(0,l.zw)(t.userName),1)])}var _=t(4870),y={name:"SelectableUser",props:{userName:String,removing:Boolean},emits:["select","delete"],setup(e,{emit:s}){const t=(0,_.iH)(e.removing),n=()=>{s("select")};return(0,i.YP)((()=>e.removing),(e=>{t.value=e})),{select:n,deletable:t}}},S=t(89);const D=(0,S.Z)(y,[["render",U],["__scopeId","data-v-349948e5"]]);var I=D,C=t(9242);const W={key:0,class:"profile"},P={key:1},x={class:"input-group mb-3",style:{display:"flex","align-items":"center","justify-content":"center"}};function Z(e,s,t,n,o,r){return o.addingUser?((0,i.wg)(),(0,i.iD)("div",P,[(0,i._)("div",x,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>o.name=e),class:"form-control",placeholder:"Enter user's name",onKeydown:s[2]||(s[2]=(0,C.D2)(((...e)=>r.saveUser&&r.saveUser(...e)),["enter"]))},null,544),[[C.nr,o.name]]),(0,i._)("button",{class:"btn btn-primary",style:{"background-color":"var(--primary)","border-color":"var(--primary)"},onClick:s[3]||(s[3]=(...e)=>r.saveUser&&r.saveUser(...e))},"Save"),(0,i._)("button",{class:"btn btn-secondary",onClick:s[4]||(s[4]=(...e)=>r.cancelUser&&r.cancelUser(...e))},"Cancel")])])):((0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("i",{style:{"font-size":"30px",cursor:"pointer",color:"whitesmoke"},class:"bi bi-plus-circle",onClick:s[0]||(s[0]=(...e)=>r.toggleAddingUser&&r.toggleAddingUser(...e))})]))}var N={name:"NewUser",data(){return{addingUser:!1,name:""}},methods:{toggleAddingUser(){this.addingUser=!this.addingUser},saveUser(){this.$store.dispatch("createNewUserProfile",{name:this.name}),this.name="",this.toggleAddingUser()},cancelUser(){this.name="",this.toggleAddingUser()}}};const H=(0,S.Z)(N,[["render",Z],["__scopeId","data-v-7f1de32e"]]);var $=H,B=t(65),R={name:"UserSelection",components:{NewUser:$,SelectableUser:I},emits:["userSelected"],setup(e,{emit:s}){const t=(0,B.oR)(),n=(0,_.iH)(t.getters.userProfiles),o=(0,_.iH)(t.getters.userProfileId);(0,i.YP)((()=>t.getters.userProfiles),(e=>{n.value=e}));const r=(0,_.iH)(!1);(0,i.wF)((async()=>{0===n.value.length&&(await t.dispatch("fetchUserProfiles"),n.value=t.getters.userProfiles)}));const l=async e=>{r.value?await a(e.id):await c(e)},a=async e=>{await t.dispatch("deleteProfile",e)},c=async e=>{console.log("setting"+e),await t.dispatch("selectUserProfile",e),await t.dispatch("fetchUserStats"),console.log(t.getters.userStats),s("userSelected")},d=()=>{r.value=!r.value};return{userList:n,selectedProfileId:o,removing:r,setUser:c,toggleRemove:d,deleteUser:a,handleClick:l}}};const j=(0,S.Z)(R,[["render",v],["__scopeId","data-v-6a2bda80"]]);var z=j,q={name:"SideBar",components:{UserSelection:z,ProfilIcon:r.Z},props:["show"],data(){return{showUserSelection:null===this.$store.getters.userProfileId,changeUser:!1}}};const A=(0,S.Z)(q,[["render",o],["__scopeId","data-v-2cc77998"]]);var F=A},4363:function(e,s,t){t.d(s,{Z:function(){return I}});var i=t(3396);const n={class:"d-sm-none"},o={class:"d-none d-sm-block"};function r(e,s,t,r,l,a){const c=(0,i.up)("mobile-side-bar"),d=(0,i.up)("desktop-side-bar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",n,[(0,i.Wm)(c,null,{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})]),(0,i._)("div",o,[(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})])],64)}var l=t(7139);const a={key:0,class:"bi bi-arrow-bar-right"},c={key:1,class:"bi bi-arrow-bar-left"};function d(e,s,t,n,o,r){return(0,i.wg)(),(0,i.iD)("div",{class:"sidebar",style:(0,l.j5)({width:n.sidebarWidth})},[(0,i._)("div",{onClick:s[0]||(s[0]=(...e)=>n.toggle&&n.toggle(...e))},[n.collapsed?((0,i.wg)(),(0,i.iD)("i",a)):((0,i.wg)(),(0,i.iD)("i",c))]),n.collapsed?(0,i.kq)("",!0):(0,i.WI)(e.$slots,"default",{key:0},void 0,!0)],4)}var u=t(4870),g=t(65),v={name:"MobileSideBar",setup(){const e=(0,g.oR)(),s=(0,u.iH)(!1),t=100,n=10,o=(0,i.Fl)((()=>`${s.value?n:t}%`)),r=()=>{s.value=!s.value;const t=o.value;console.log(t),e.dispatch("setSidebarWidth",{sidebarWidth:t})};return{collapsed:s,sidebarWidth:o,toggle:r}}},p=t(89);const m=(0,p.Z)(v,[["render",d],["__scopeId","data-v-7818801f"]]);var w=m;const b={key:0,class:"bi bi-arrow-bar-right"},f={key:1,class:"bi bi-arrow-bar-left"};function h(e,s,t,n,o,r){const a=(0,i.up)("profil-icon");return(0,i.wg)(),(0,i.iD)("div",{class:"sidebar",style:(0,l.j5)([{"max-width":"100%"},{width:n.sidebarWidth}])},[(0,i._)("div",{onClick:s[0]||(s[0]=(...e)=>n.toggle&&n.toggle(...e))},[n.collapsed?((0,i.wg)(),(0,i.iD)("i",b)):((0,i.wg)(),(0,i.iD)("i",f))]),n.collapsed?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(a,{key:0})),n.collapsed?(0,i.kq)("",!0):(0,i.WI)(e.$slots,"default",{key:1},void 0,!0)],4)}var k=t(1769),U={name:"DesktopSideBar",components:{ProfilIcon:k.Z},setup(){const e=(0,g.oR)(),s=(0,u.iH)(e.getters.isSidebarExtended),t=300,n=38,o=(0,i.Fl)((()=>`${s.value?n:t}px`)),r=()=>{e.dispatch("toggleSidebar"),s.value=!s.value;const t=o.value;console.log(t),e.dispatch("setSidebarWidth",{sidebarWidth:t})};return{collapsed:s,sidebarWidth:o,toggle:r}}};const _=(0,p.Z)(U,[["render",h],["__scopeId","data-v-551d6ec2"]]);var y=_,S={name:"TheSideBar",components:{DesktopSideBar:y,MobileSideBar:w}};const D=(0,p.Z)(S,[["render",r]]);var I=D}}]);
//# sourceMappingURL=363.e1d87f03.js.map