"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[188],{7702:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var i=s(3396);const n={class:"container-fluid"},o={class:"row"},l={class:"col-3"},a={class:"button-outer"},u={class:"button-outer"},c={class:"col-9"};function r(e,t,s,r,d,h){const b=(0,i.up)("side-bar"),p=(0,i.up)("multiple-choice-question-builder"),m=(0,i.up)("flash-card-builder");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",o,[(0,i._)("div",l,[(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i._)("div",a,[(0,i._)("button",{class:"btn my-button button-text",onClick:t[0]||(t[0]=e=>r.selectedComponent="multiple-choice")}," Multiple Choice ")]),(0,i._)("div",u,[(0,i._)("button",{class:"btn my-button button-text",onClick:t[1]||(t[1]=e=>r.selectedComponent="flash-card")}," Flashcard ")])])),_:1})]),(0,i._)("div",c,["multiple-choice"===r.selectedComponent?((0,i.wg)(),(0,i.j4)(p,{key:0,uploading:!0,onReturnQuestion:h.submitQuestion},null,8,["onReturnQuestion"])):"flash-card"===r.selectedComponent?((0,i.wg)(),(0,i.j4)(m,{key:1,uploading:!0,onReturnQuestion:h.submitQuestion},null,8,["onReturnQuestion"])):(0,i.kq)("",!0)])])])}s(7658);var d=s(4870),h=s(65),b=s(3320),p=s(4612),m=s(2626),w={components:{SideBar:m.Z,FlashCardBuilder:p.Z,MultipleChoiceQuestionBuilder:b.Z},setup(){const e=(0,d.iH)("multiple-choice"),t=(0,d.iH)(""),s=(0,d.iH)([{text:""},{text:""},{text:""},{text:""}]),n=(0,d.iH)(null),o=(0,d.iH)(!1),l=(0,d.iH)([]),a=(0,d.iH)([]),u=(0,h.oR)(),c=(0,i.Fl)((()=>u.getters.isLoggedIn)),r=(0,i.Fl)((()=>u.getters.getTeamLabels)),b=(0,i.Fl)((()=>r.value.concat(a.value)));return{selectedComponent:e,isLoggedIn:c,teamLabels:r,questionText:t,answerOptions:s,questionLabels:l,correctAnswerIndex:n,isPrivateQuestion:o,addedLabels:a,displayLabels:b}},methods:{async submitQuestion(e,t){delete e.id,e.questionLabels=await this.saveNewLabelsToTeam(t,e.questionLabels),console.log(e),await this.$store.dispatch("uploadPrivateQuestion",e)},addLabel(e){this.addedLabels.push(e)},async submitForm(){if(null!==this.correctAnswerIndex){if(this.isPrivateQuestion){await this.saveNewLabelsToTeam();const e=this.createQuestion();console.log(e),await this.$store.dispatch("uploadPrivateQuestion",e)}else{const e=this.createQuestion();console.log(e),await this.$store.dispatch("uploadPublicQuestion",e)}this.questionText="",this.answerOptions.forEach((e=>e.text="")),this.correctAnswerIndex=null,this.isPrivateQuestion=!1,this.questionLabels=[],this.addedLabels=[]}else alert("Bitte wählen Sie eine richtige Antwort aus.")},createQuestion(){const e={questionText:this.questionText,answerOptions:this.answerOptions.map(((e,t)=>({text:e.text,isCorrect:t===this.correctAnswerIndex})))};return this.isPrivateQuestion&&(e.questionLabels=this.questionLabels.map((e=>({label:e.label,id:e.id})))),e},async saveNewLabelsToTeam(e,t){console.log("adding labels...");for(const s of e){const e=await this.$store.dispatch("addNewLabelToTeamLabels",s.label),i=t.findIndex((e=>e.label===s.label));-1!==i&&(t[i].id=e)}return t},toggleLabel(e){this.questionLabels.includes(e)?this.questionLabels=this.questionLabels.filter((t=>t!==e)):this.questionLabels.push(e)}}},L=s(89);const v=(0,L.Z)(w,[["render",r],["__scopeId","data-v-2b8bf281"]]);var g=v}}]);
//# sourceMappingURL=188.5c58124a.js.map