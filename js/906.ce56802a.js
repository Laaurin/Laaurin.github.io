"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[906],{8209:function(e,t,s){s.r(t),s.d(t,{default:function(){return Fe}});var i=s(3396),n=s(7139);const o=e=>((0,i.dD)("data-v-082e2c84"),e=e(),(0,i.Cn)(),e),l={key:1,class:"hintergrund d-flex justify-content-center align-items-center"},a=o((()=>(0,i._)("h2",{style:{color:"var(--primary)"}},"public questions",-1))),u=o((()=>(0,i._)("p",null,"train questions submitted by participants from all around the globe",-1))),r=o((()=>(0,i._)("h2",null,"team questions",-1))),c=o((()=>(0,i._)("p",null,"repeat all of your internal facts",-1))),d=o((()=>(0,i._)("h2",{style:{color:"var(--primary)"}},"specified units",-1))),b=o((()=>(0,i._)("p",null,"individualize your repetition to improve your question handling in particular fields",-1))),m=o((()=>(0,i._)("h2",null,"evaluate your performance",-1))),p=o((()=>(0,i._)("p",null,[(0,i.Uk)("monitor your progress per question in your profile"),(0,i._)("br"),(0,i._)("span",{style:{color:"var(--need-improvement)"}},"needs improvement"),(0,i.Uk)(" - "),(0,i._)("span",{style:{color:"var(--okay)"}},"okay"),(0,i.Uk)(" - "),(0,i._)("span",{style:{color:"var(--good)"}},"good"),(0,i.Uk)(" - "),(0,i._)("span",{style:{color:"var(--very-good)"}},"very good"),(0,i.Uk)(" - "),(0,i._)("span",{style:{color:"var(--excellent)"}},"excellent")],-1)));function v(e,t,s,o,v,h){const g=(0,i.up)("question-selection"),w=(0,i.up)("the-side-bar"),_=(0,i.up)("question-training"),f=(0,i.up)("blur-box");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[(0,i._)("div",null,[(0,i.Wm)(w,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{style:{"margin-left":"1rem"},onQuestionsSelected:h.passQuestions},null,8,["onQuestionsSelected"])])),_:1})]),(0,i._)("div",null,[o.startTraining?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,n.j5)({"margin-left":o.sidebarWidth})},[(0,i.Wm)(_,{"question-set":o.questions},null,8,["question-set"])],4)):((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[a,u,r,c,d,b,m,p])),_:1})]))])])])}const h=e=>((0,i.dD)("data-v-5326c299"),e=e(),(0,i.Cn)(),e),g=(0,i.uE)('<div class="button-outer" data-v-5326c299><button class="btn set-selection-button" disabled data-v-5326c299><hr data-v-5326c299><div class="button-content" data-v-5326c299><div class="button-icon" data-v-5326c299><i class="bi bi-people-fill" data-v-5326c299></i></div><div class="button-text-disabled" data-v-5326c299>Public Questions (coming soon)</div></div></button></div>',1),w={class:"button-outer"},_=h((()=>(0,i._)("hr",null,null,-1))),f=h((()=>(0,i._)("div",{class:"button-content"},[(0,i._)("div",{class:"button-icon"},[(0,i._)("i",{class:"bi bi-person-fill"})]),(0,i._)("div",{class:"button-text"},"Team Questions")],-1))),y=[_,f],q=["onClick"],x=h((()=>(0,i._)("hr",null,null,-1))),Q={class:"button-content"},S=h((()=>(0,i._)("div",{class:"button-icon"},[(0,i._)("i",{class:"bi bi-tag-fill"})],-1))),k={class:"button-text"};function C(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[g,(0,i._)("div",w,[(0,i._)("button",{class:"btn set-selection-button",onClick:t[0]||(t[0]=(...e)=>a.selectPrivateQuestions&&a.selectPrivateQuestions(...e))},y)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.teamLabelsInUse,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"button-outer"},[(0,i._)("button",{class:"btn set-selection-button",onClick:t=>a.selectQuestionsByLabel(e)},[x,(0,i._)("div",Q,[S,(0,i._)("div",k,(0,n.zw)(e),1)])],8,q)])))),128))],64)}s(7658);var I=s(4287),A=s(2392),D=s(4870),P=s(65),T={emits:["questionsSelected"],name:"QuestionSelection",setup(){const e=(0,P.oR)(),t=(0,D.iH)([]),s=(0,i.Fl)((()=>{const e=new Set;return o.value.forEach((t=>{t.questionLabels.forEach((t=>{e.add(t.label)}))})),Array.from(e).sort(((e,t)=>e.localeCompare(t,"en",{sensitivity:"base"})))})),n=(0,i.Fl)((()=>e.getters.getPublicQuestions)),o=(0,i.Fl)((()=>e.getters.getTeamQuestions)),l=(0,i.Fl)((()=>e.getters.getTeamLabels));return{publicQuestions:n,teamLabels:l,teamQuestions:o,questions:t,teamLabelsInUse:s}},methods:{async selectPublicQuestions(){0===this.publicQuestions.length&&await this.loadPublicQuestions(),this.questions=this.publicQuestions,this.submit()},async loadPublicQuestions(){const e=await(0,I.PL)((0,I.IO)((0,I.hJ)(A.ZP,"questions")));e.forEach((e=>{this.publicQuestions.push(e.data())}))},selectPrivateQuestions(){this.questions=this.teamQuestions,this.submit()},selectQuestionsByLabel(e){console.log("selecting data: ",e),this.questions=this.teamQuestions.filter((t=>t.questionLabels.some((t=>t.label===e)))),console.log("after filter: ",this.questions),this.submit()},submit(){console.log("questions:"+this.questions),this.$emit("questionsSelected",this.questions)}}},O=s(89);const F=(0,O.Z)(T,[["render",C],["__scopeId","data-v-5326c299"]]);var H=F;const N={style:{height:"100%"}};function Z(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)("div",N,[((0,i.wg)(),(0,i.j4)((0,i.LL)(n.currentQuestionType),{key:n.currentQuestionIndex,question:n.currentQuestion,onSubmit:t[0]||(t[0]=e=>n.submitted=!0),onNext:n.nextQuestion},null,40,["question","onNext"]))])}const L={class:"outer"},$={class:"d-flex justify-content-center"},z=["disabled"],B=["disabled"],U=["disabled"];function W(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("div",$,[(0,i._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[0]||(t[0]=e=>l.submit(0))}," needed improvement ",8,z),(0,i._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[1]||(t[1]=e=>l.submit(.5))}," good ",8,B),(0,i._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[2]||(t[2]=e=>l.submit(1))}," excellent ",8,U)])])}var j={name:"SelfEvaluation",props:["questionId"],emits:["submit"],data(){return{submitted:!1}},methods:{async submit(e){this.submitted=!0,console.log("flashcard: "+this.$store.getters.userProfileName),await this.$store.dispatch("addUserSubmission",{questionId:this.questionId,value:e}),this.$emit("submit")}}};const E=(0,O.Z)(j,[["render",W],["__scopeId","data-v-b48cdaaa"]]);var Y=E;const M={class:"container d-flex flex-column align-items-center justify-content-center"},V={class:"row",style:{width:"100%"}},K={class:"col",style:{width:"100%"}},R={class:"row"},G=["disabled"];function J(e,t,s,o,l,a){const u=(0,i.up)("question-text"),r=(0,i.up)("answer-option");return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("div",V,[(0,i._)("div",K,[(0,i.Wm)(u,{question:l.data.questionText},null,8,["question"])])]),(0,i._)("div",R,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.data.answerOptions,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-md-6",style:{padding:"12px"},key:t},[(0,i.Wm)(r,{"answer-option":e,"is-selected":t===l.selectedAnswerIndex,submitted:l.submitted,onSelected:e=>a.selectAnswer(t)},null,8,["answer-option","is-selected","submitted","onSelected"])])))),128))]),(0,i._)("button",{class:"submitbutton",onClick:t[0]||(t[0]=(...e)=>a.submit&&a.submit(...e)),disabled:a.enableSubmitButton}," Submit ",8,G),(0,i._)("button",{class:"my-global-button",style:{"margin-top":"20px"},onClick:t[1]||(t[1]=e=>this.$emit("next"))},(0,n.zw)(l.submitted?"next":"skip"),1)])}var X=s(9242);const ee={class:"test"};function te(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)("label",ee,[(0,i.wy)((0,i._)("input",{class:"radio-input",type:"radio",name:"engine",onChange:t[0]||(t[0]=(...e)=>o.selectAnswer&&o.selectAnswer(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>o.selectedOption=e)},null,544),[[X.G2,o.selectedOption]]),(0,i._)("div",{class:(0,n.C_)([o.radioTileClasses,"radio-tile"]),ref:"radioTile"},[(0,i._)("span",{class:(0,n.C_)(["radio-label",{"cutoff-text":!s.isSelected}])},(0,n.zw)(s.answerOption.text),3)],2)])}var se={name:"AnswerOption",props:{answerOption:Object,isSelected:Boolean,submitted:Boolean},emits:["selected"],setup(e,{emit:t}){const s=(0,D.iH)(!1),n=()=>{e.submitted||t("selected",s.value)},o=(0,i.Fl)((()=>({"radio-tile":!0,selected:!e.submitted&&e.isSelected,correct:e.submitted&&e.answerOption.isCorrect,incorrect:e.submitted&&e.isSelected&&!e.answerOption.isCorrect})));return(0,i.YP)((()=>e.answerOption),(()=>{s.value=!1})),{selectedOption:s,selectAnswer:n,radioTileClasses:o}}};const ie=(0,O.Z)(se,[["render",te],["__scopeId","data-v-ea4c00ac"]]);var ne=ie;const oe=e=>((0,i.dD)("data-v-48314735"),e=e(),(0,i.Cn)(),e),le={class:"question-wrapper"},ae=oe((()=>(0,i._)("hr",null,null,-1)));function ue(e,t,s,o,l,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",le,[(0,i._)("div",{class:"info__title font-size-medium",ref:"questionText"},(0,n.zw)(s.question),513)]),ae],64)}var re={props:{question:String},data(){return{fontSizeClass:"font-size-max"}}};const ce=(0,O.Z)(re,[["render",ue],["__scopeId","data-v-48314735"]]);var de=ce,be={name:"MultipleChoiceQuestion",components:{QuestionText:de,AnswerOption:ne},props:{question:Object},emits:["submitted","next"],data(){return{data:this.question,selectedAnswerIndex:NaN,submitted:!1}},methods:{submit(){if(isNaN(this.selectedAnswerIndex))console.log("first select an answer!");else{if(null!==this.$store.getters.userProfileId){const e=this.data.answerOptions[this.selectedAnswerIndex].isCorrect?1:0;console.log("multiple-choice: "+this.$store.getters.userProfileName),this.$store.dispatch("addUserSubmission",{questionId:this.data.id,value:e})}this.submitted=!0,this.$emit("submitted")}},selectAnswer(e){this.selectedAnswerIndex=e}},computed:{enableSubmitButton(){return isNaN(this.selectedAnswerIndex)}},watch:{question(){this.data=this.question,this.selectedAnswerIndex=NaN,this.submitted=!1}}};const me=(0,O.Z)(be,[["render",J],["__scopeId","data-v-657c1611"]]);var pe=me;const ve=e=>((0,i.dD)("data-v-28f30eaa"),e=e(),(0,i.Cn)(),e),he={class:"shadow flashcard-outer d-flex align-items-center justify-content-center"},ge={class:""},we={class:"text-center",style:{width:"100%"}},_e={class:"d-flex justify-content-center align-items-center"},fe=ve((()=>(0,i._)("hr",null,null,-1))),ye={class:"mt-3"};function qe(e,t,s,o,l,a){const u=(0,i.up)("self-evaluation");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",he,[(0,i._)("div",ge,[(0,i._)("div",we,[(0,i._)("p",null,(0,n.zw)(s.question.questionText),1)]),(0,i._)("div",_e,[l.isFlipped?((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>a.toggleAnswer&&a.toggleAnswer(...e)),class:"text-center"},[fe,(0,i._)("p",null,(0,n.zw)(s.question.solutionText),1)])):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"my-global-button",onClick:t[1]||(t[1]=(...e)=>a.toggleAnswer&&a.toggleAnswer(...e))}," show answer "))])])]),(0,i._)("div",ye,[(0,i.Wm)(u,{"question-id":s.question.id,onSubmit:t[2]||(t[2]=e=>this.$emit("next"))},null,8,["question-id"])])],64)}var xe={components:{SelfEvaluation:Y},props:["question"],emits:["submitted","next"],data(){return{isFlipped:!1}},methods:{toggleAnswer(){this.isFlipped=!this.isFlipped}}};const Qe=(0,O.Z)(xe,[["render",qe],["__scopeId","data-v-28f30eaa"]]);var Se=Qe,ke={name:"PracticeView",components:{SelfEvaluation:Y,MultipleChoiceQuestion:pe,FlashCard:Se},props:["questionSet"],setup(e){const t=(0,D.iH)([]),s=(0,D.iH)(0),n=(0,D.iH)(!1),o=(0,i.Fl)((()=>t.value[s.value%e.questionSet.length]||{})),l=(0,i.Fl)((()=>"multiple-choice"===o.value.type?"multiple-choice-question":"flash-card"===o.value.type?"flash-card":null)),a=()=>{e.questionSet.length>1&&s.value++,n.value=!1},u=e=>{const t=[...e];function s(){return Math.random()-.5}return t.sort(s),t};return(0,i.m0)((()=>{e.questionSet.length>0&&(t.value=u(e.questionSet))})),{questions:t,currentQuestion:o,currentQuestionType:l,currentQuestionIndex:s,submitted:n,nextQuestion:a}}};const Ce=(0,O.Z)(ke,[["render",Z]]);var Ie=Ce,Ae=s(729),De=s(4993),Pe=s(4363),Te={name:"PracticeView",components:{TheSideBar:Pe.Z,BlurBox:De.Z,SideBar:Ae.Z,QuestionSelection:H,QuestionTraining:Ie},setup(){const e=(0,P.oR)(),t=(0,D.iH)([]),s=(0,D.iH)(!1),n=(0,D.iH)(null!==e.getters.userProfileId),o=(0,i.Fl)((()=>e.getters.getSidebarWidth));return{questions:t,startTraining:s,isProfileSelected:n,sidebarWidth:o}},methods:{passQuestions(e){this.questions=e,this.startTraining=!0,this.showOptions=!1}},created(){console.log(this.$store.getters.isProfileSelected)}};const Oe=(0,O.Z)(Te,[["render",v],["__scopeId","data-v-082e2c84"]]);var Fe=Oe}}]);
//# sourceMappingURL=906.ce56802a.js.map