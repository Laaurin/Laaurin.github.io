"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[302],{7302:function(e,t,s){s.r(t),s.d(t,{default:function(){return H}});var n=s(3396);function i(e,t,s,i,o,r){const u=(0,n.up)("question-selection"),a=(0,n.up)("question-training");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u,{onQuestionsSelected:r.passQuestions},null,8,["onQuestionsSelected"]),o.startTraining?((0,n.wg)(),(0,n.j4)(a,{key:0,"question-set":o.questions},null,8,["question-set"])):(0,n.kq)("",!0)],64)}var o=s(7139);const r=e=>((0,n.dD)("data-v-5425335a"),e=e(),(0,n.Cn)(),e),u=r((()=>(0,n._)("i",{class:"bi bi-people-fill"}," public questions ",-1))),a=[u],c=r((()=>(0,n._)("i",{class:"bi bi-person-fill"}," team questions ",-1))),l=[c],d={class:"bi bi-tag-fill"};function p(e,t,s,i,r,u){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n._)("button",{class:"my-global-button set-selection-button",onClick:t[0]||(t[0]=(...e)=>u.selectPublicQuestions&&u.selectPublicQuestions(...e))},a)]),(0,n._)("div",null,[(0,n._)("button",{class:"my-global-button set-selection-button",onClick:t[1]||(t[1]=(...e)=>u.selectPrivateQuestions&&u.selectPrivateQuestions(...e))},l)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.userLabels,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e.label},[(0,n._)("button",{class:"my-global-button set-selection-button",onClick:t[2]||(t[2]=(...e)=>u.selectQuestionsByLabel&&u.selectQuestionsByLabel(...e))},[(0,n._)("i",d,(0,o.zw)(e.label),1)])])))),128))],64)}s(7658);var h=s(4287),b=s(2392),m={emits:["questionsSelected"],name:"QuestionSelection",setup(){const e=(0,n.f3)("publicQuestions"),t=(0,n.f3)("userQuestions"),s=(0,n.f3)("userLabels");return{publicQuestions:e,userQuestions:t,userLabels:s}},data(){return{questions:[]}},methods:{async selectPublicQuestions(){0===this.publicQuestions.length&&await this.loadPublicQuestions(),this.questions=this.publicQuestions,this.submit()},selectPrivateQuestions(){this.questions=this.userQuestions,this.submit()},selectQuestionsByLabel(){this.questions=this.userQuestions,this.submit(),console.log("funktioniert noch nicht")},submit(){this.$emit("questionsSelected",this.questions)},async loadPublicQuestions(){const e=await(0,h.PL)((0,h.IO)((0,h.hJ)(b.Z,"questions")));e.forEach((e=>{this.publicQuestions.push(e.data())}))}}},w=s(89);const x=(0,w.Z)(m,[["render",p],["__scopeId","data-v-5425335a"]]);var q=x;const C={style:{"margin-top":"5rem"}};function f(e,t,s,i,r,u){const a=(0,n.up)("MultipleChoiceQuestion");return(0,n.wg)(),(0,n.iD)("div",C,[(0,n.Wm)(a,{question:u.currentQuestion,onSubmitted:t[0]||(t[0]=e=>r.submitted=!0)},null,8,["question"]),(0,n._)("button",{class:"my-global-button",style:{"margin-top":"20px"},onClick:t[1]||(t[1]=(...e)=>u.nextQuestion&&u.nextQuestion(...e))},(0,o.zw)(r.submitted?"next":"skip"),1)])}const Q={class:"container d-flex flex-column align-items-center justify-content-center",style:{"margin-top":"10px"}},g={class:"row row-cols-md-2",style:{"margin-top":"20px"}},y=["disabled"];function v(e,t,s,i,r,u){const a=(0,n.up)("question-text"),c=(0,n.up)("answer-option");return(0,n.wg)(),(0,n.iD)("div",Q,[(0,n.Wm)(a,{question:r.data.questionText},null,8,["question"]),(0,n._)("div",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.data.answerOptions,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,o.C_)({"d-flex":!0,"justify-content-lg-end":t%2===0,"justify-content-lg-start":t%2!==0,"justify-content-sm-center":!0})},[(0,n.Wm)(c,{"answer-option":e,index:t,submitted:r.submitted,"selected-answer-index":r.selectedAnswerIndex,onSelected:e=>u.selectAnswer(t)},null,8,["answer-option","index","submitted","selected-answer-index","onSelected"])],2)))),128))]),(0,n._)("button",{class:"my-global-button",onClick:t[0]||(t[0]=(...e)=>u.submit&&u.submit(...e)),disabled:u.enableSubmitButton}," Submit ",8,y)])}var _=s(9242);const E={class:"test"},O={class:"radio-label"};function A(e,t,s,i,r,u){return(0,n.wg)(),(0,n.iD)("label",E,[(0,n.wy)((0,n._)("input",{class:"radio-input",type:"radio",name:"engine",onChange:t[0]||(t[0]=(...e)=>u.selectAnswer&&u.selectAnswer(...e)),"onUpdate:modelValue":t[1]||(t[1]=e=>r.selectedOption=e)},null,544),[[_.G2,r.selectedOption]]),(0,n._)("span",{class:(0,o.C_)(u.radioTileClasses)},[(0,n._)("span",O,(0,o.zw)(s.answerOption.text),1)],2)])}var I={name:"AnswerOption",props:{answerOption:Object,index:Number,selectedAnswerIndex:Number,submitted:Boolean},emits:["selected"],data(){return{selectedOption:!1}},methods:{selectAnswer(){this.submitted||this.$emit("selected",this.index)}},computed:{radioTileClasses(){return{"radio-tile":!0,selected:!this.submitted&&this.index===this.selectedAnswerIndex,correct:this.submitted&&this.answerOption.isCorrect,incorrect:this.submitted&&this.index===this.selectedAnswerIndex&&!this.answerOption.isCorrect}}},watch:{answerOption(){this.selectedOption=!1}}};const k=(0,w.Z)(I,[["render",A],["__scopeId","data-v-311ac0d4"]]);var D=k;const S={class:"info"},P={class:"info__title"};function T(e,t,s,i,r,u){return(0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("div",P,(0,o.zw)(s.question),1)])}var N={name:"QuestionText",props:["question"]};const R=(0,w.Z)(N,[["render",T],["__scopeId","data-v-309ace44"]]);var W=R,L={name:"MultipleChoiceQuestion",components:{QuestionText:W,AnswerOption:D},props:{question:Object},emits:["submitted"],data(){return{data:this.question,selectedAnswerIndex:NaN,submitted:!1,isLargeScreen:window.innerWidth>=992}},methods:{submit(){isNaN(this.selectedAnswerIndex)?console.log("first select an answer!"):(this.submitted=!0,this.$emit("submitted"))},selectAnswer(e){this.selectedAnswerIndex=e}},computed:{enableSubmitButton(){return isNaN(this.selectedAnswerIndex)}},watch:{question(){this.data=this.question,this.selectedAnswerIndex=NaN,this.submitted=!1}}};const j=(0,w.Z)(L,[["render",v]]);var M=j,Z={name:"PracticeView",components:{MultipleChoiceQuestion:M},props:["questionSet"],data(){return{questions:[{answerOptions:[{isCorrect:!1,text:"Drone Eye plc"},{isCorrect:!1,text:"Drone Eye ltd"},{isCorrect:!1,text:"Equatoriana Geoscience plc"},{isCorrect:!0,text:"Equatoriana Geoscience ltd"}],questionText:"What is the Name of the Respondent of the Proceedings?"},{answerOptions:[{isCorrect:!1,text:"Claimant Exhibit C5, p. 16"},{isCorrect:!1,text:"Claimant Exhibit C7, p. 18, para. 11"},{isCorrect:!0,text:"Respondent Exhibit R2, p. 33"},{isCorrect:!1,text:"Respondent Exhibit R4, p. 35?"}],questionText:"Where in the Case-File can we find information, that the public prosecutor in Equatoriana can proof that Mr. Field accepted two undue payments?"}],currentQuestionIndex:0,submitted:!1}},created(){},computed:{currentQuestion(){return this.questions[this.currentQuestionIndex%this.questions.length]||{}}},methods:{nextQuestion(){this.currentQuestionIndex++},shuffleArray(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}}};const B=(0,w.Z)(Z,[["render",f]]);var G=B,z={name:"PracticeView",components:{QuestionSelection:q,QuestionTraining:G},data(){return{questions:[{answerOptions:[{isCorrect:!1,text:"Drone Eye plc"},{isCorrect:!1,text:"Drone Eye ltd"},{isCorrect:!1,text:"Equatoriana Geoscience plc"},{isCorrect:!0,text:"Equatoriana Geoscience ltd"}],questionText:"What is the Name of the Respondent of the Proceedings?"},{answerOptions:[{isCorrect:!1,text:"Claimant Exhibit C5, p. 16"},{isCorrect:!1,text:"Claimant Exhibit C7, p. 18, para. 11"},{isCorrect:!0,text:"Respondent Exhibit R2, p. 33"},{isCorrect:!1,text:"Respondent Exhibit R4, p. 35?"}],questionText:"Where in the Case-File can we find information, that the public prosecutor in Equatoriana can proof that Mr. Field accepted two undue payments?"}],startTraining:!1}},methods:{passQuestions(e){this.questions=e,this.startTraining=!0}}};const F=(0,w.Z)(z,[["render",i]]);var H=F}}]);
//# sourceMappingURL=302.4e70cb70.js.map