"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[8],{5008:function(e,s,n){n.r(s),n.d(s,{default:function(){return A}});var r=n(3396);const t={class:"container"},a={class:"row"},i={class:"col selection-option"};function c(e,s,n,c,l,o){const d=(0,r.up)("selectable-user"),u=(0,r.up)("new-user");return(0,r.wg)(),(0,r.iD)("div",t,[(0,r._)("div",a,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.userList,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"col selection-option",key:e},[(0,r.Wm)(d)])))),128)),(0,r._)("div",i,[(0,r.Wm)(u)])])])}const l=e=>((0,r.dD)("data-v-a5fb2288"),e=e(),(0,r.Cn)(),e),o={class:"profile"},d=l((()=>(0,r._)("i",{style:{"font-size":"50px"},class:"bi bi-person"},null,-1))),u=l((()=>(0,r._)("p",null,"vorname nachname",-1))),U=[d,u];function g(e,s,n,t,a,i){return(0,r.wg)(),(0,r.iD)("div",o,U)}var v={name:"SelectableUser"},p=n(89);const w=(0,p.Z)(v,[["render",g],["__scopeId","data-v-a5fb2288"]]);var m=w,h=n(9242);const _={key:0},b={key:1};function f(e,s,n,t,a,i){return a.addingUser?((0,r.wg)(),(0,r.iD)("div",b,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>a.newUserName=e),placeholder:"Enter user's name",onKeydown:s[2]||(s[2]=(0,h.D2)(((...e)=>i.saveUser&&i.saveUser(...e)),["enter"]))},null,544),[[h.nr,a.newUserName]]),(0,r._)("button",{onClick:s[3]||(s[3]=(...e)=>i.saveUser&&i.saveUser(...e))},"Save"),(0,r._)("button",{onClick:s[4]||(s[4]=(...e)=>i.cancelUser&&i.cancelUser(...e))},"Cancel")])):((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("i",{style:{"font-size":"30px",cursor:"pointer"},class:"bi bi-plus-circle",onClick:s[0]||(s[0]=(...e)=>i.toggleAddingUser&&i.toggleAddingUser(...e))})]))}var k={name:"NewUser",data(){return{addingUser:!1,newUserName:""}},methods:{toggleAddingUser(){this.addingUser=!this.addingUser},saveUser(){this.toggleAddingUser(),this.newUserName=""},cancelUser(){this.newUserName="",this.toggleAddingUser()}}};const D=(0,p.Z)(k,[["render",f]]);var y=D,C={name:"UserSelection",components:{NewUser:y,SelectableUser:m},data(){return{userList:[1,2,3,4,5]}}};const N=(0,p.Z)(C,[["render",c],["__scopeId","data-v-d473268c"]]);var A=N}}]);
//# sourceMappingURL=8.9e242593.js.map