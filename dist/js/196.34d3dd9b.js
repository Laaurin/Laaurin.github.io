"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[196],{1424:function(e,t,s){s.d(t,{Z:function(){return L}});var n=s(3396);const i={class:"sidebar shadow-lg"};function o(e,t,s,o,l,a){const r=(0,n.up)("profil-icon"),c=(0,n.up)("user-selection");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",i,[(0,n.Wm)(r,{class:"mb-5",style:{position:"relative"},onShowUserSelection:t[0]||(t[0]=e=>l.showUserSelection=!0)}),(0,n.WI)(e.$slots,"default",{},void 0,!0)]),l.showUserSelection?((0,n.wg)(),(0,n.j4)(c,{key:0,onUserSelected:t[1]||(t[1]=e=>l.showUserSelection=!1)})):(0,n.kq)("",!0)],64)}var l=s(7139);const a=e=>((0,n.dD)("data-v-4a1c18e5"),e=e(),(0,n.Cn)(),e),r={class:"profile ms-3"},c=a((()=>(0,n._)("div",{class:"text",style:{"font-weight":"bold"}},"KAZGUU University",-1))),u={class:"text"};function d(e,t,s,i,o,a){return(0,n.wg)(),(0,n.iD)("div",r,[c,(0,n._)("div",u,(0,l.zw)(i.userName||"no user selected"),1),(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>i.buttonClick&&i.buttonClick(...e))},"change user")])}var m=s(65),b={name:"ProfilIcon",emits:["showUserSelection"],setup(e,{emit:t}){const s=(0,m.oR)(),i=(0,n.Fl)((()=>s.getters.userProfileName||"no user selected")),o=()=>{t("showUserSelection")};return{userName:i,buttonClick:o}}},p=s(89);const v=(0,p.Z)(b,[["render",d],["__scopeId","data-v-4a1c18e5"]]);var h=v;const g={class:"pop-up-window"},w={class:"pop-up-inner"},f={class:"d-flex flex-wrap justify-content-center"};function _(e,t,s,i,o,a){const r=(0,n.up)("selectable-user"),c=(0,n.up)("new-user");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",w,[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.userList,(e=>((0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)([{active:e.id===i.selectedProfileId},"selection-option"]),key:e.id},[(0,n.Wm)(r,{"user-name":e.name,onSelect:t=>i.setUser(e)},null,8,["user-name","onSelect"])],2)))),128)),(0,n._)("div",null,[(0,n.Wm)(c)])])])])}const S=e=>((0,n.dD)("data-v-3e97bd08"),e=e(),(0,n.Cn)(),e),q=S((()=>(0,n._)("i",{style:{"font-size":"50px"},class:"bi bi-person"},null,-1)));function y(e,t,s,i,o,a){return(0,n.wg)(),(0,n.iD)("div",{class:"profile",onClick:t[0]||(t[0]=(...e)=>a.select&&a.select(...e))},[q,(0,n._)("p",null,(0,l.zw)(s.userName),1)])}var U={name:"SelectableUser",props:{userName:String},emits:["select"],methods:{select(){this.$emit("select")}}};const x=(0,p.Z)(U,[["render",y],["__scopeId","data-v-3e97bd08"]]);var C=x,Q=s(9242);const k={key:0,class:"profile"},I={key:1},P={class:"input-group mb-3",style:{display:"flex","align-items":"center","justify-content":"center"}};function D(e,t,s,i,o,l){return o.addingUser?((0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("div",P,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.name=e),class:"form-control",placeholder:"Enter user's name",onKeydown:t[2]||(t[2]=(0,Q.D2)(((...e)=>l.saveUser&&l.saveUser(...e)),["enter"]))},null,544),[[Q.nr,o.name]]),(0,n._)("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>l.saveUser&&l.saveUser(...e))},"Save"),(0,n._)("button",{class:"btn btn-secondary",onClick:t[4]||(t[4]=(...e)=>l.cancelUser&&l.cancelUser(...e))},"Cancel")])])):((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("i",{style:{"font-size":"30px",cursor:"pointer",color:"whitesmoke"},class:"bi bi-plus-circle",onClick:t[0]||(t[0]=(...e)=>l.toggleAddingUser&&l.toggleAddingUser(...e))})]))}var A={name:"NewUser",data(){return{addingUser:!1,name:""}},methods:{toggleAddingUser(){this.addingUser=!this.addingUser},saveUser(){this.$store.dispatch("createNewUserProfile",{name:this.name}),this.name="",this.toggleAddingUser()},cancelUser(){this.name="",this.toggleAddingUser()}}};const N=(0,p.Z)(A,[["render",D],["__scopeId","data-v-779b775c"]]);var H=N,T=s(4870),Z={name:"UserSelection",components:{NewUser:H,SelectableUser:C},emits:["userSelected"],setup(e,{emit:t}){const s=(0,m.oR)(),i=(0,T.iH)(s.getters.userProfiles),o=(0,T.iH)(s.getters.userProfileId);(0,n.wF)((async()=>{0===i.value.length&&(await s.dispatch("fetchUserProfiles"),i.value=s.getters.userProfiles)}));const l=async e=>{console.log("setting"+e),await s.dispatch("selectUserProfile",e),await s.dispatch("fetchUserStats"),console.log(s.getters.userStats),t("userSelected")};return{userList:i,selectedProfileId:o,setUser:l}}};const O=(0,p.Z)(Z,[["render",_],["__scopeId","data-v-1053e906"]]);var $=O,F={name:"SideBar",components:{UserSelection:$,ProfilIcon:h},data(){return{showUserSelection:null===this.$store.getters.userProfileId,changeUser:!1}}};const z=(0,p.Z)(F,[["render",o],["__scopeId","data-v-587a3b9b"]]);var L=z},1196:function(e,t,s){s.r(t),s.d(t,{default:function(){return Ce}});var n=s(3396);const i={class:"container-fluid"},o={class:"row no-gutters"},l={class:"col-3"},a={class:"col-9"},r={key:0};function c(e,t,s,c,u,d){const m=(0,n.up)("question-selection"),b=(0,n.up)("side-bar"),p=(0,n.up)("question-training");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",o,[(0,n._)("div",l,[(0,n.Wm)(b,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{onQuestionsSelected:d.passQuestions},null,8,["onQuestionsSelected"])])),_:1})]),(0,n._)("div",a,[c.startTraining?((0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(p,{"question-set":c.questions},null,8,["question-set"])])):(0,n.kq)("",!0)])])])}var u=s(7139);const d=e=>((0,n.dD)("data-v-6aed7e03"),e=e(),(0,n.Cn)(),e),m={class:"button-outer"},b=d((()=>(0,n._)("div",{class:"button-content"},[(0,n._)("div",{class:"button-icon"},[(0,n._)("i",{class:"bi bi-people-fill"})]),(0,n._)("div",{class:"button-text"},"Public Questions")],-1))),p=[b],v={class:"button-outer"},h=d((()=>(0,n._)("div",{class:"button-content"},[(0,n._)("div",{class:"button-icon"},[(0,n._)("i",{class:"bi bi-person-fill"})]),(0,n._)("div",{class:"button-text"},"Team Questions")],-1))),g=[h],w=["onClick"],f={class:"button-content"},_=d((()=>(0,n._)("div",{class:"button-icon"},[(0,n._)("i",{class:"bi bi-tag-fill"})],-1))),S={class:"button-text"};function q(e,t,s,i,o,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",m,[(0,n._)("button",{class:"btn set-selection-button",onClick:t[0]||(t[0]=(...e)=>l.selectPublicQuestions&&l.selectPublicQuestions(...e))},p)]),(0,n._)("div",v,[(0,n._)("button",{class:"btn set-selection-button",onClick:t[1]||(t[1]=(...e)=>l.selectPrivateQuestions&&l.selectPrivateQuestions(...e))},g)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.teamLabelsInUse,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:"button-outer"},[(0,n._)("button",{class:"btn set-selection-button",onClick:t=>l.selectQuestionsByLabel(e)},[(0,n._)("div",f,[_,(0,n._)("div",S,(0,u.zw)(e),1)])],8,w)])))),128))],64)}s(7658);var y=s(4287),U=s(2392),x=s(4870),C=s(65),Q={emits:["questionsSelected"],name:"QuestionSelection",setup(){const e=(0,C.oR)(),t=(0,x.iH)([]),s=(0,n.Fl)((()=>{const e=new Set;return o.value.forEach((t=>{t.questionLabels.forEach((t=>{e.add(t.label)}))})),Array.from(e).sort(((e,t)=>e.localeCompare(t,"en",{sensitivity:"base"})))})),i=(0,n.Fl)((()=>e.getters.getPublicQuestions)),o=(0,n.Fl)((()=>e.getters.getTeamQuestions)),l=(0,n.Fl)((()=>e.getters.getTeamLabels));return{publicQuestions:i,teamLabels:l,teamQuestions:o,questions:t,teamLabelsInUse:s}},methods:{async selectPublicQuestions(){0===this.publicQuestions.length&&await this.loadPublicQuestions(),this.questions=this.publicQuestions,this.submit()},async loadPublicQuestions(){const e=await(0,y.PL)((0,y.IO)((0,y.hJ)(U.ZP,"questions")));e.forEach((e=>{this.publicQuestions.push(e.data())}))},selectPrivateQuestions(){this.questions=this.teamQuestions,this.submit()},selectQuestionsByLabel(e){console.log("selecting data: ",e),this.questions=this.teamQuestions.filter((t=>t.questionLabels.some((t=>t.label===e)))),console.log("after filter: ",this.questions),this.submit()},submit(){console.log("questions:"+this.questions),this.$emit("questionsSelected",this.questions)}}},k=s(89);const I=(0,k.Z)(Q,[["render",q],["__scopeId","data-v-6aed7e03"]]);var P=I;const D={style:{height:"100%"}};function A(e,t,s,i,o,l){return(0,n.wg)(),(0,n.iD)("div",D,[((0,n.wg)(),(0,n.j4)((0,n.LL)(i.currentQuestionType),{key:i.currentQuestionIndex,question:i.currentQuestion,onSubmit:t[0]||(t[0]=e=>i.submitted=!0),onNext:i.nextQuestion},null,40,["question","onNext"]))])}const N={class:"outer"},H={class:"d-flex justify-content-center"},T=["disabled"],Z=["disabled"],O=["disabled"];function $(e,t,s,i,o,l){return(0,n.wg)(),(0,n.iD)("div",N,[(0,n._)("div",H,[(0,n._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[0]||(t[0]=e=>l.submit(0))}," needed improvement ",8,T),(0,n._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[1]||(t[1]=e=>l.submit(.5))}," good ",8,Z),(0,n._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[2]||(t[2]=e=>l.submit(1))}," excellent ",8,O)])])}var F={name:"SelfEvaluation",props:["questionId"],emits:["submit"],data(){return{submitted:!1}},methods:{async submit(e){this.submitted=!0,console.log("flashcard: "+this.$store.getters.userProfileName),await this.$store.dispatch("addUserSubmission",{questionId:this.questionId,value:e}),this.$emit("submit")}}};const z=(0,k.Z)(F,[["render",$],["__scopeId","data-v-b48cdaaa"]]);var L=z;const W={class:"container d-flex flex-column align-items-center justify-content-center"},j={class:"row",style:{width:"100%"}},B={class:"col",style:{width:"100%"}},Y={class:"row"},E=["disabled"];function K(e,t,s,i,o,l){const a=(0,n.up)("question-text"),r=(0,n.up)("answer-option");return(0,n.wg)(),(0,n.iD)("div",W,[(0,n._)("div",j,[(0,n._)("div",B,[(0,n.Wm)(a,{question:o.data.questionText},null,8,["question"])])]),(0,n._)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.data.answerOptions,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"col-md-6",style:{padding:"12px"},key:t},[(0,n.Wm)(r,{"answer-option":e,"is-selected":t===o.selectedAnswerIndex,submitted:o.submitted,onSelected:e=>l.selectAnswer(t)},null,8,["answer-option","is-selected","submitted","onSelected"])])))),128))]),(0,n._)("button",{class:"my-global-button",onClick:t[0]||(t[0]=(...e)=>l.submit&&l.submit(...e)),disabled:l.enableSubmitButton}," Submit ",8,E),(0,n._)("button",{class:"my-global-button",style:{"margin-top":"20px"},onClick:t[1]||(t[1]=e=>this.$emit("next"))},(0,u.zw)(o.submitted?"next":"skip"),1)])}var R=s(9242);const V={class:"test"};function M(e,t,s,i,o,l){return(0,n.wg)(),(0,n.iD)("label",V,[(0,n.wy)((0,n._)("input",{class:"radio-input",type:"radio",name:"engine",onChange:t[0]||(t[0]=(...e)=>i.selectAnswer&&i.selectAnswer(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>i.selectedOption=e)},null,544),[[R.G2,i.selectedOption]]),(0,n._)("div",{class:(0,u.C_)([i.radioTileClasses,"radio-tile"]),ref:"radioTile"},[(0,n._)("span",{class:(0,u.C_)(["radio-label",{"cutoff-text":!s.isSelected}])},(0,u.zw)(s.answerOption.text),3)],2)])}var G={name:"AnswerOption",props:{answerOption:Object,isSelected:Boolean,submitted:Boolean},emits:["selected"],setup(e,{emit:t}){const s=(0,x.iH)(!1),i=()=>{e.submitted||t("selected",s.value)},o=(0,n.Fl)((()=>({"radio-tile":!0,selected:!e.submitted&&e.isSelected,correct:e.submitted&&e.answerOption.isCorrect,incorrect:e.submitted&&e.isSelected&&!e.answerOption.isCorrect})));return(0,n.YP)((()=>e.answerOption),(()=>{s.value=!1})),{selectedOption:s,selectAnswer:i,radioTileClasses:o}}};const J=(0,k.Z)(G,[["render",M],["__scopeId","data-v-5ec4566b"]]);var X=J;const ee=e=>((0,n.dD)("data-v-78c53728"),e=e(),(0,n.Cn)(),e),te={class:"question-wrapper"},se=ee((()=>(0,n._)("hr",null,null,-1)));function ne(e,t,s,i,o,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",te,[(0,n._)("div",{class:"info__title font-size-medium",ref:"questionText"},(0,u.zw)(s.question),513)]),se],64)}var ie={props:{question:String},data(){return{fontSizeClass:"font-size-max"}}};const oe=(0,k.Z)(ie,[["render",ne],["__scopeId","data-v-78c53728"]]);var le=oe,ae={name:"MultipleChoiceQuestion",components:{QuestionText:le,AnswerOption:X},props:{question:Object},emits:["submitted","next"],data(){return{data:this.question,selectedAnswerIndex:NaN,submitted:!1}},methods:{submit(){if(isNaN(this.selectedAnswerIndex))console.log("first select an answer!");else{if(null!==this.$store.getters.userProfileId){const e=this.data.answerOptions[this.selectedAnswerIndex].isCorrect?1:0;console.log("multiple-choice: "+this.$store.getters.userProfileName),this.$store.dispatch("addUserSubmission",{questionId:this.data.id,value:e})}this.submitted=!0,this.$emit("submitted")}},selectAnswer(e){this.selectedAnswerIndex=e}},computed:{enableSubmitButton(){return isNaN(this.selectedAnswerIndex)}},watch:{question(){this.data=this.question,this.selectedAnswerIndex=NaN,this.submitted=!1}}};const re=(0,k.Z)(ae,[["render",K]]);var ce=re;const ue=e=>((0,n.dD)("data-v-5c61ec98"),e=e(),(0,n.Cn)(),e),de={class:"shadow flashcard-outer"},me={class:"text-center"},be={class:"d-flex justify-content-center align-items-center"},pe=ue((()=>(0,n._)("hr",null,null,-1))),ve={class:"mt-3"};function he(e,t,s,i,o,l){const a=(0,n.up)("self-evaluation");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",de,[(0,n._)("div",me,[(0,n._)("p",null,(0,u.zw)(s.question.questionText),1)]),(0,n._)("div",be,[o.isFlipped?((0,n.wg)(),(0,n.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>l.toggleAnswer&&l.toggleAnswer(...e)),class:"text-center"},[pe,(0,n._)("p",null,(0,u.zw)(s.question.solutionText),1)])):((0,n.wg)(),(0,n.iD)("button",{key:1,class:"my-global-button",onClick:t[1]||(t[1]=(...e)=>l.toggleAnswer&&l.toggleAnswer(...e))}," show answer "))])]),(0,n._)("div",ve,[(0,n.Wm)(a,{"question-id":s.question.id,onSubmit:t[2]||(t[2]=e=>this.$emit("next"))},null,8,["question-id"])])],64)}var ge={components:{SelfEvaluation:L},props:["question"],emits:["submitted","next"],data(){return{isFlipped:!1}},methods:{toggleAnswer(){this.isFlipped=!this.isFlipped}}};const we=(0,k.Z)(ge,[["render",he],["__scopeId","data-v-5c61ec98"]]);var fe=we,_e={name:"PracticeView",components:{SelfEvaluation:L,MultipleChoiceQuestion:ce,FlashCard:fe},props:["questionSet"],setup(e){const t=(0,x.iH)([]),s=(0,x.iH)(0),i=(0,x.iH)(!1),o=(0,n.Fl)((()=>t.value[s.value%e.questionSet.length]||{})),l=(0,n.Fl)((()=>"multiple-choice"===o.value.type?"multiple-choice-question":"flash-card"===o.value.type?"flash-card":null)),a=()=>{e.questionSet.length>1&&s.value++,i.value=!1},r=e=>{const t=[...e];function s(){return Math.random()-.5}return t.sort(s),t};return(0,n.m0)((()=>{e.questionSet.length>0&&(t.value=r(e.questionSet))})),{questions:t,currentQuestion:o,currentQuestionType:l,currentQuestionIndex:s,submitted:i,nextQuestion:a}}};const Se=(0,k.Z)(_e,[["render",A]]);var qe=Se,ye=s(1424),Ue={name:"PracticeView",components:{SideBar:ye.Z,QuestionSelection:P,QuestionTraining:qe},setup(){const e=(0,C.oR)(),t=(0,x.iH)([]),s=(0,x.iH)(!1),n=(0,x.iH)(null!==e.getters.userProfileId);return{questions:t,startTraining:s,isProfileSelected:n}},methods:{passQuestions(e){this.questions=e,this.startTraining=!0,this.showOptions=!1}},created(){console.log(this.$store.getters.isProfileSelected)}};const xe=(0,k.Z)(Ue,[["render",c],["__scopeId","data-v-7e4c22df"]]);var Ce=xe}}]);
//# sourceMappingURL=196.34d3dd9b.js.map