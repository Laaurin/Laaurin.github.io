"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[441],{7441:function(e,s,r){r.r(s),r.d(s,{default:function(){return y}});var t=r(3396);function o(e,s,r,o,n,i){const a=(0,t.up)("signup-form");return(0,t.wg)(),(0,t.j4)(a)}var n=r(9242);const i=e=>((0,t.dD)("data-v-0ae1c390"),e=e(),(0,t.Cn)(),e),a=i((()=>(0,t._)("h1",null,"Registrierung",-1))),l=i((()=>(0,t._)("label",{for:"email"},"E-Mail:",-1))),u=i((()=>(0,t._)("label",{for:"password"},"Passwort:",-1))),d=i((()=>(0,t._)("button",{class:"my-global-button",type:"submit"},"Registrieren",-1)));function c(e,s,r,o,i,c){return(0,t.wg)(),(0,t.iD)("div",null,[a,(0,t._)("form",{onSubmit:s[2]||(s[2]=(0,n.iM)(((...e)=>c.registerUser&&c.registerUser(...e)),["prevent"]))},[(0,t._)("div",null,[l,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.email=e),type:"email",id:"email",required:""},null,512),[[n.nr,i.email]])]),(0,t._)("div",null,[u,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>i.password=e),type:"password",id:"password",required:""},null,512),[[n.nr,i.password]])]),d],32)])}r(7658);var p=r(3866),m=r(2392),g=r(4287),w={data(){return{email:"",password:""}},methods:{registerUser(){(0,p.Xb)(m.I8,this.email,this.password).then((async e=>{console.log(e.user);const s=(0,g.hJ)(m.ZP,`users/${e.user.uid}/questions`),r=(0,g.JU)(s),t={questionText:"What is your favorite color?",answerOptions:[{text:"Red",isCorrect:!0},{text:"Blue",isCorrect:!1},{text:"Green",isCorrect:!1},{text:"Yellow",isCorrect:!1}]};await(0,g.pl)(r,t);const o=(0,g.hJ)(m.ZP,`users/${e.user.uid}/labels`),n=(0,g.JU)(o),i={label:"facts"};await(0,g.pl)(n,i),console.log("User registered, personal collections for questions and labels created, and question added"),this.$root.loggedIn=!0,this.$router.push("/")})).catch((e=>{console.log(e.message)}))}}},h=r(89);const f=(0,h.Z)(w,[["render",c],["__scopeId","data-v-0ae1c390"]]);var b=f,_={components:{SignupForm:b},name:"SignupView"};const v=(0,h.Z)(_,[["render",o]]);var y=v}}]);
//# sourceMappingURL=441.4757af03.js.map