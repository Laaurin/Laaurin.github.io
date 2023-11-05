"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[164],{9387:function(e,t,s){s.r(t),s.d(t,{default:function(){return Ie}});var i=s(3396);const n={class:"container-fluid"},o={class:"row no-gutters"},l={class:"col-3"},u={class:"col-9"},a={class:"hintergrund"},c={key:0};function r(e,t,s,r,d,b){const m=(0,i.up)("question-selection"),p=(0,i.up)("side-bar"),h=(0,i.up)("question-training");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",o,[(0,i._)("div",l,[(0,i.Wm)(p,{show:!0},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{onQuestionsSelected:b.passQuestions},null,8,["onQuestionsSelected"])])),_:1})]),(0,i._)("div",u,[(0,i._)("div",a,[r.startTraining?((0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(h,{"question-set":r.questions},null,8,["question-set"])])):(0,i.kq)("",!0)])])])])}var d=s(7139);const b=e=>((0,i.dD)("data-v-74a0c015"),e=e(),(0,i.Cn)(),e),m={class:"button-outer"},p=b((()=>(0,i._)("div",{class:"button-content"},[(0,i._)("div",{class:"button-icon"},[(0,i._)("i",{class:"bi bi-people-fill"})]),(0,i._)("div",{class:"button-text"},"Public Questions")],-1))),h=[p],v={class:"button-outer"},w=b((()=>(0,i._)("div",{class:"button-content"},[(0,i._)("div",{class:"button-icon"},[(0,i._)("i",{class:"bi bi-person-fill"})]),(0,i._)("div",{class:"button-text"},"Team Questions")],-1))),g=[w],_=["onClick"],f={class:"button-content"},q=b((()=>(0,i._)("div",{class:"button-icon"},[(0,i._)("i",{class:"bi bi-tag-fill"})],-1))),x={class:"button-text"};function Q(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",m,[(0,i._)("button",{class:"btn set-selection-button",onClick:t[0]||(t[0]=(...e)=>l.selectPublicQuestions&&l.selectPublicQuestions(...e))},h)]),(0,i._)("div",v,[(0,i._)("button",{class:"btn set-selection-button",onClick:t[1]||(t[1]=(...e)=>l.selectPrivateQuestions&&l.selectPrivateQuestions(...e))},g)]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.teamLabelsInUse,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"button-outer"},[(0,i._)("button",{class:"btn set-selection-button",onClick:t=>l.selectQuestionsByLabel(e)},[(0,i._)("div",f,[q,(0,i._)("div",x,(0,d.zw)(e),1)])],8,_)])))),128))],64)}s(7658);var y=s(4287),S=s(2392),C=s(4870),I=s(65),k={emits:["questionsSelected"],name:"QuestionSelection",setup(){const e=(0,I.oR)(),t=(0,C.iH)([]),s=(0,i.Fl)((()=>{const e=new Set;return o.value.forEach((t=>{t.questionLabels.forEach((t=>{e.add(t.label)}))})),Array.from(e).sort(((e,t)=>e.localeCompare(t,"en",{sensitivity:"base"})))})),n=(0,i.Fl)((()=>e.getters.getPublicQuestions)),o=(0,i.Fl)((()=>e.getters.getTeamQuestions)),l=(0,i.Fl)((()=>e.getters.getTeamLabels));return{publicQuestions:n,teamLabels:l,teamQuestions:o,questions:t,teamLabelsInUse:s}},methods:{async selectPublicQuestions(){0===this.publicQuestions.length&&await this.loadPublicQuestions(),this.questions=this.publicQuestions,this.submit()},async loadPublicQuestions(){const e=await(0,y.PL)((0,y.IO)((0,y.hJ)(S.ZP,"questions")));e.forEach((e=>{this.publicQuestions.push(e.data())}))},selectPrivateQuestions(){this.questions=this.teamQuestions,this.submit()},selectQuestionsByLabel(e){console.log("selecting data: ",e),this.questions=this.teamQuestions.filter((t=>t.questionLabels.some((t=>t.label===e)))),console.log("after filter: ",this.questions),this.submit()},submit(){console.log("questions:"+this.questions),this.$emit("questionsSelected",this.questions)}}},P=s(89);const A=(0,P.Z)(k,[["render",Q],["__scopeId","data-v-74a0c015"]]);var D=A;const T={style:{height:"100%"}};function O(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)("div",T,[((0,i.wg)(),(0,i.j4)((0,i.LL)(n.currentQuestionType),{key:n.currentQuestionIndex,question:n.currentQuestion,onSubmit:t[0]||(t[0]=e=>n.submitted=!0),onNext:n.nextQuestion},null,40,["question","onNext"]))])}const H={class:"outer"},F={class:"d-flex justify-content-center"},N=["disabled"],L=["disabled"],$=["disabled"];function Z(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",F,[(0,i._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[0]||(t[0]=e=>l.submit(0))}," needed improvement ",8,N),(0,i._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[1]||(t[1]=e=>l.submit(.5))}," good ",8,L),(0,i._)("button",{class:"item my-global-button",disabled:o.submitted,onClick:t[2]||(t[2]=e=>l.submit(1))}," excellent ",8,$)])])}var z={name:"SelfEvaluation",props:["questionId"],emits:["submit"],data(){return{submitted:!1}},methods:{async submit(e){this.submitted=!0,console.log("flashcard: "+this.$store.getters.userProfileName),await this.$store.dispatch("addUserSubmission",{questionId:this.questionId,value:e}),this.$emit("submit")}}};const B=(0,P.Z)(z,[["render",Z],["__scopeId","data-v-b48cdaaa"]]);var j=B;const E={class:"container d-flex flex-column align-items-center justify-content-center"},W={class:"row",style:{width:"100%"}},Y={class:"col",style:{width:"100%"}},U={class:"row"},M=["disabled"];function V(e,t,s,n,o,l){const u=(0,i.up)("question-text"),a=(0,i.up)("answer-option");return(0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("div",W,[(0,i._)("div",Y,[(0,i.Wm)(u,{question:o.data.questionText},null,8,["question"])])]),(0,i._)("div",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.data.answerOptions,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"col-md-6",style:{padding:"12px"},key:t},[(0,i.Wm)(a,{"answer-option":e,"is-selected":t===o.selectedAnswerIndex,submitted:o.submitted,onSelected:e=>l.selectAnswer(t)},null,8,["answer-option","is-selected","submitted","onSelected"])])))),128))]),(0,i._)("button",{class:"my-global-button submitbutton",onClick:t[0]||(t[0]=(...e)=>l.submit&&l.submit(...e)),disabled:l.enableSubmitButton}," Submit ",8,M),(0,i._)("button",{class:"my-global-button",style:{"margin-top":"20px"},onClick:t[1]||(t[1]=e=>this.$emit("next"))},(0,d.zw)(o.submitted?"next":"skip"),1)])}var K=s(9242);const R={class:"test"};function G(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)("label",R,[(0,i.wy)((0,i._)("input",{class:"radio-input",type:"radio",name:"engine",onChange:t[0]||(t[0]=(...e)=>n.selectAnswer&&n.selectAnswer(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>n.selectedOption=e)},null,544),[[K.G2,n.selectedOption]]),(0,i._)("div",{class:(0,d.C_)([n.radioTileClasses,"radio-tile"]),ref:"radioTile"},[(0,i._)("span",{class:(0,d.C_)(["radio-label",{"cutoff-text":!s.isSelected}])},(0,d.zw)(s.answerOption.text),3)],2)])}var J={name:"AnswerOption",props:{answerOption:Object,isSelected:Boolean,submitted:Boolean},emits:["selected"],setup(e,{emit:t}){const s=(0,C.iH)(!1),n=()=>{e.submitted||t("selected",s.value)},o=(0,i.Fl)((()=>({"radio-tile":!0,selected:!e.submitted&&e.isSelected,correct:e.submitted&&e.answerOption.isCorrect,incorrect:e.submitted&&e.isSelected&&!e.answerOption.isCorrect})));return(0,i.YP)((()=>e.answerOption),(()=>{s.value=!1})),{selectedOption:s,selectAnswer:n,radioTileClasses:o}}};const X=(0,P.Z)(J,[["render",G],["__scopeId","data-v-ea4c00ac"]]);var ee=X;const te=e=>((0,i.dD)("data-v-48314735"),e=e(),(0,i.Cn)(),e),se={class:"question-wrapper"},ie=te((()=>(0,i._)("hr",null,null,-1)));function ne(e,t,s,n,o,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",se,[(0,i._)("div",{class:"info__title font-size-medium",ref:"questionText"},(0,d.zw)(s.question),513)]),ie],64)}var oe={props:{question:String},data(){return{fontSizeClass:"font-size-max"}}};const le=(0,P.Z)(oe,[["render",ne],["__scopeId","data-v-48314735"]]);var ue=le,ae={name:"MultipleChoiceQuestion",components:{QuestionText:ue,AnswerOption:ee},props:{question:Object},emits:["submitted","next"],data(){return{data:this.question,selectedAnswerIndex:NaN,submitted:!1}},methods:{submit(){if(isNaN(this.selectedAnswerIndex))console.log("first select an answer!");else{if(null!==this.$store.getters.userProfileId){const e=this.data.answerOptions[this.selectedAnswerIndex].isCorrect?1:0;console.log("multiple-choice: "+this.$store.getters.userProfileName),this.$store.dispatch("addUserSubmission",{questionId:this.data.id,value:e})}this.submitted=!0,this.$emit("submitted")}},selectAnswer(e){this.selectedAnswerIndex=e}},computed:{enableSubmitButton(){return isNaN(this.selectedAnswerIndex)}},watch:{question(){this.data=this.question,this.selectedAnswerIndex=NaN,this.submitted=!1}}};const ce=(0,P.Z)(ae,[["render",V],["__scopeId","data-v-32abdca9"]]);var re=ce;const de=e=>((0,i.dD)("data-v-5c61ec98"),e=e(),(0,i.Cn)(),e),be={class:"shadow flashcard-outer"},me={class:"text-center"},pe={class:"d-flex justify-content-center align-items-center"},he=de((()=>(0,i._)("hr",null,null,-1))),ve={class:"mt-3"};function we(e,t,s,n,o,l){const u=(0,i.up)("self-evaluation");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",be,[(0,i._)("div",me,[(0,i._)("p",null,(0,d.zw)(s.question.questionText),1)]),(0,i._)("div",pe,[o.isFlipped?((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:t[0]||(t[0]=(...e)=>l.toggleAnswer&&l.toggleAnswer(...e)),class:"text-center"},[he,(0,i._)("p",null,(0,d.zw)(s.question.solutionText),1)])):((0,i.wg)(),(0,i.iD)("button",{key:1,class:"my-global-button",onClick:t[1]||(t[1]=(...e)=>l.toggleAnswer&&l.toggleAnswer(...e))}," show answer "))])]),(0,i._)("div",ve,[(0,i.Wm)(u,{"question-id":s.question.id,onSubmit:t[2]||(t[2]=e=>this.$emit("next"))},null,8,["question-id"])])],64)}var ge={components:{SelfEvaluation:j},props:["question"],emits:["submitted","next"],data(){return{isFlipped:!1}},methods:{toggleAnswer(){this.isFlipped=!this.isFlipped}}};const _e=(0,P.Z)(ge,[["render",we],["__scopeId","data-v-5c61ec98"]]);var fe=_e,qe={name:"PracticeView",components:{SelfEvaluation:j,MultipleChoiceQuestion:re,FlashCard:fe},props:["questionSet"],setup(e){const t=(0,C.iH)([]),s=(0,C.iH)(0),n=(0,C.iH)(!1),o=(0,i.Fl)((()=>t.value[s.value%e.questionSet.length]||{})),l=(0,i.Fl)((()=>"multiple-choice"===o.value.type?"multiple-choice-question":"flash-card"===o.value.type?"flash-card":null)),u=()=>{e.questionSet.length>1&&s.value++,n.value=!1},a=e=>{const t=[...e];function s(){return Math.random()-.5}return t.sort(s),t};return(0,i.m0)((()=>{e.questionSet.length>0&&(t.value=a(e.questionSet))})),{questions:t,currentQuestion:o,currentQuestionType:l,currentQuestionIndex:s,submitted:n,nextQuestion:u}}};const xe=(0,P.Z)(qe,[["render",O]]);var Qe=xe,ye=s(3306),Se={name:"PracticeView",components:{SideBar:ye.Z,QuestionSelection:D,QuestionTraining:Qe},setup(){const e=(0,I.oR)(),t=(0,C.iH)([]),s=(0,C.iH)(!1),i=(0,C.iH)(null!==e.getters.userProfileId);return{questions:t,startTraining:s,isProfileSelected:i}},methods:{passQuestions(e){this.questions=e,this.startTraining=!0,this.showOptions=!1}},created(){console.log(this.$store.getters.isProfileSelected)}};const Ce=(0,P.Z)(Se,[["render",r],["__scopeId","data-v-45f83e3b"]]);var Ie=Ce}}]);
//# sourceMappingURL=164.41027891.js.map