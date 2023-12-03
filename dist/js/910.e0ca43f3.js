"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[910],{8999:function(e,t,s){s.r(t),s.d(t,{default:function(){return de}});var l=s(3396);const i={class:"container-fluid"},n={class:"row"},o={class:"col-3 sidebar"},a={class:"col"};function u(e,t,s,u,r,c){const d=(0,l.up)("question-filter"),b=(0,l.up)("side-bar"),v=(0,l.up)("profile-questions");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",n,[(0,l._)("div",o,[(0,l.Wm)(b,{show:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{onQuestionsFiltered:u.updateQuestions},null,8,["onQuestionsFiltered"])])),_:1})]),(0,l._)("div",a,[(0,l.Wm)(v,{questions:u.filteredQuestions},null,8,["questions"])])])])}var r=s(4870);const c=e=>((0,l.dD)("data-v-11609652"),e=e(),(0,l.Cn)(),e),d={class:"profile-questions"},b={class:"questions-list"},v={key:0},p=c((()=>(0,l._)("hr",null,null,-1)));function g(e,t,s,i,n,o){const a=(0,l.up)("editable-question"),u=(0,l.up)("edit-question-window");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",d,[(0,l._)("div",b,[i.filteredQuestions.length>0?((0,l.wg)(),(0,l.iD)("hr",v)):(0,l.kq)("",!0),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filteredQuestions,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l.Wm)(a,{question:e,onEdit:t=>i.editQuestionHandler(e),onDelete:t=>i.deleteQuestionHandler(e.id)},null,8,["question","onEdit","onDelete"]),p])))),128))])]),i.editQuestion?((0,l.wg)(),(0,l.j4)(u,{key:0,question:i.questionInEdit,onClose:t[0]||(t[0]=e=>i.editQuestion=!1)},null,8,["question"])):(0,l.kq)("",!0)],64)}var m=s(7139);const q=e=>((0,l.dD)("data-v-4408d958"),e=e(),(0,l.Cn)(),e),f={class:"row question-wrapper"},w={class:"col-1 ps-3"},h={class:"col"},L={key:0},Q={class:"col"},_={class:"d-flex flex-wrap"},y={class:"col-3 d-flex justify-content-end"},T=q((()=>(0,l._)("div",{class:"vertical-line"},null,-1))),D=q((()=>(0,l._)("i",{class:"bi bi-pencil-square"},null,-1))),x=[D];function C(e,t,s,i,n,o){const a=(0,l.up)("status-bar"),u=(0,l.up)("question-label");return(0,l.wg)(),(0,l.iD)("div",f,[(0,l._)("div",w,[0!==i.stats.totalSubmissions?((0,l.wg)(),(0,l.j4)(a,{key:0,"correct-count":i.stats.totalScore,"total-count":i.stats.totalSubmissions},null,8,["correct-count","total-count"])):(0,l.kq)("",!0)]),(0,l._)("div",h,[(0,l._)("div",null,[(0,l._)("div",{class:"text-start overflow-hidden",onClick:t[0]||(t[0]=e=>i.extended=!i.extended)},[(0,l.Uk)((0,m.zw)(s.question.questionText)+" ",1),i.extended?((0,l.wg)(),(0,l.iD)("div",L,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.question.answerOptions,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{key:t},(0,m.zw)(e.text),1)))),128))])):(0,l.kq)("",!0)]),(0,l._)("div",Q,[(0,l._)("div",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.question.questionLabels,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id,class:"overflow-hidden"},[(0,l.Wm)(u,{"label-object":e,active:!0},null,8,["label-object"])])))),128))])])])]),(0,l._)("div",y,[T,(0,l._)("button",{class:"my-global-button",style:{margin:"5px"},onClick:t[1]||(t[1]=(...e)=>i.editQuestion&&i.editQuestion(...e))},x),(0,l._)("button",{class:"my-global-button",style:{margin:"5px"},onClick:t[2]||(t[2]=(...e)=>i.toggleDelete&&i.toggleDelete(...e))},[(0,l._)("i",{class:(0,m.C_)([{"delete-icon":i.isDeleting,default:!i.isDeleting},"bi bi-trash"])},null,2)])])])}var F=s(65),k=s(757);const H={class:"status-bar"};function S(e,t,s,i,n,o){return(0,l.wg)(),(0,l.iD)("div",H,[(0,l._)("div",{class:"status-bar-inner",style:(0,m.j5)({backgroundColor:i.barColor})},null,4)])}var j={props:{questionId:Number,correctCount:Number,totalCount:Number},setup(e){const t=(0,l.Fl)((()=>{const t={totalSubmissions:e.totalCount,totalScore:e.correctCount};return t??{totalSubmissions:0,totalScore:0}})),s=(0,l.Fl)((()=>{const e=t.value.totalSubmissions,s=t.value.totalScore;if(0===e)return"#808080";const l=s/e;switch(!0){case l>=0&&l<.6:return"#7c3232";case l>=.6&&l<.7:return"#ff6363";case l>=.7&&l<.8:return"#e08f43";case l>=.8&&l<.9:return"#60a660";case l>=.9&&l<=1:return"#3b7c3b";default:return"#808080"}}));return{barColor:s}}},I=s(89);const Z=(0,I.Z)(j,[["render",S],["__scopeId","data-v-5b86f7be"]]);var Y=Z,E={components:{StatusBar:Y,QuestionLabel:k.Z},props:{question:Object},setup(e,{emit:t}){const s=(0,F.oR)(),i=(0,l.Fl)((()=>s.getters.getTeamLabels)),n=(0,l.Fl)((()=>{const t=s.getters.userStats.find((t=>t.id===e.question.id));return t??{totalSubmissions:0,totalScore:0}})),o=(0,l.Fl)((()=>0===e.question.questionLabels.length)),a=(0,r.iH)(!1),u=(0,r.iH)(!1),c=(0,l.Fl)((()=>u.value?"Confirm":"Delete")),d=()=>{t("edit",e.question)},b=()=>{u.value?v():(u.value=!0,setTimeout((()=>{u.value=!1}),3e3))},v=()=>{t("delete",e.question),u.value=!1};return{teamLabels:i,stats:n,showLabels:o,extended:a,isDeleting:u,deleteButtonText:c,editQuestion:d,toggleDelete:b}}};const W=(0,I.Z)(E,[["render",C],["__scopeId","data-v-4408d958"]]);var B=W;const A={class:"pop-up-window"},N={class:"pop-up-inner"};function R(e,t,s,i,n,o){return(0,l.wg)(),(0,l.iD)("div",A,[(0,l._)("div",N,[((0,l.wg)(),(0,l.j4)((0,l.LL)(i.currentQuestionType),{inputQuestion:i.currentQuestion,onCancel:o.cancelEditing,onReturnQuestion:o.saveChanges},null,40,["inputQuestion","onCancel","onReturnQuestion"]))])])}s(7658);var K=s(4853),P=s(5284),O=s(6022),z={components:{FlashCardBuilder:O.Z,MultipleChoiceQuestionBuilder:P.Z,QuestionLabel:k.Z,NewLabel:K.Z},emits:["close"],props:{question:Object},setup(e){const t=(0,F.oR)(),s=(0,l.Fl)((()=>t.getters.getTeamLabels)),i=(0,r.iH)([]),n=(0,l.Fl)((()=>s.value.concat(i.value))),o=(0,r.iH)({...e.question}),a=(0,l.Fl)((()=>"multiple-choice"===e.question.type?"multiple-choice-question-builder":"flash-card"===e.question.type?(console.log("flashcard"),"flash-card-builder"):null));return{teamLabels:s,addedLabels:i,displayedLabels:n,currentQuestion:o,currentQuestionType:a}},data(){return{questionText:"",answers:[{text:""},{text:""},{text:""},{text:""}],questionLabels:[],questionId:"",correctAnswerIndex:null,updatedQuestion:null}},methods:{...(0,F.nv)(["updateTeamQuestion","addNewLabelToTeamLabels"]),async saveChanges(e,t){await this.updateTeamLabels(t),console.log(e),await this.updateTeamQuestion(e),this.$emit("close")},cancelEditing(){this.$emit("close")},async updateTeamLabels(e){for(const t of e)t.id=await this.addNewLabelToTeamLabels(t.label),console.log(t);console.log("added Labels: ",e)},addLabel(e){this.addedLabels.push(e)},toggleLabel(e){const t=this.questionLabels.some((t=>t.id===e.id));t?this.questionLabels=this.questionLabels.filter((t=>t.id!==e.id)):this.questionLabels.push(e)},isActive(e){return this.questionLabels.some((t=>t.label===e.label))},createPrivateQuestion(){return{id:this.questionId,questionText:this.questionText,questionLabels:this.questionLabels.map((e=>({label:e.label,id:e.id}))),answerOptions:this.answers.map(((e,t)=>({text:e.text,isCorrect:t===this.correctAnswerIndex})))}}}};const $=(0,I.Z)(z,[["render",R],["__scopeId","data-v-71e2d606"]]);var M=$,U={name:"ProfileQuestions",components:{EditQuestionWindow:M,EditableQuestion:B},props:["questions"],setup(e){const t=(0,F.oR)(),s=(0,r.iH)(""),i=(0,r.iH)(!1),n=(0,r.iH)(null),o=(0,l.Fl)((()=>t.getters.getTeamLabels)),a=(0,l.Fl)((()=>e.questions)),u=(0,l.Fl)((()=>t.getters.userStats));(0,l.YP)(u,(()=>{console.log("stats updated")}));const c=e=>{a.value=a.value.filter((t=>t.id!==e)),t.dispatch("deleteQuestion",e)},d=e=>{n.value=e,i.value=!0},b=e=>{c(e)};return{teamLabels:o,filteredQuestions:a,editQuestion:i,questionInEdit:n,selectedLabel:s,editQuestionHandler:d,deleteQuestionHandler:b}}};const G=(0,I.Z)(U,[["render",g],["__scopeId","data-v-11609652"]]);var J=G,V=s(5760);const X=e=>((0,l.dD)("data-v-cc48b8c0"),e=e(),(0,l.Cn)(),e),ee=X((()=>(0,l._)("p",{class:"filter-title text-center"},"Filter By Label",-1))),te={class:"label-container mb-3"},se=X((()=>(0,l._)("hr",{style:{color:"whitesmoke"}},null,-1))),le=X((()=>(0,l._)("p",{class:"filter-title text-center"},"Filter By Type",-1))),ie={class:"label-container"};function ne(e,t,s,i,n,o){const a=(0,l.up)("question-label");return(0,l.wg)(),(0,l.iD)(l.HY,null,[ee,(0,l._)("div",te,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.teamLabels,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.id},[(0,l.Wm)(a,{"label-object":e,active:i.isActive(e),clickable:!0,deletable:!1,onToggleLabel:t=>i.toggleLabel(e)},null,8,["label-object","active","onToggleLabel"])])))),128))]),se,le,(0,l._)("div",ie,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.questionTypes,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l.Wm)(a,{"label-object":{label:e,id:e},active:i.isActive(e),clickable:!0,deletable:!1,onToggleLabel:t=>i.toggleType(e)},null,8,["label-object","active","onToggleLabel"])])))),128))])],64)}var oe={name:"QuestionFilter",emits:["questionsFiltered"],components:{QuestionLabel:k.Z},setup(e,{emit:t}){const s=(0,F.oR)(),i=(0,l.Fl)((()=>s.getters.getTeamLabels)),n=(0,l.Fl)((()=>s.getters.getTeamQuestions));(0,l.YP)(n,(e=>{console.log("change"),t("questionsFiltered",e)})),(0,l.bv)((()=>{t("questionsFiltered",n.value)}));const o=(0,r.iH)(["multiple-choice","flash-card"]),a=(0,r.iH)([]),u=(0,r.iH)([]),c=(0,r.iH)(s.getters.getTeamQuestions),d=e=>{c.value=e.filter((e=>a.value.every((t=>e.questionLabels.some((e=>e.id===t.id)))))),console.log(c),t("questionsFiltered",c.value)},b=e=>{c.value=e.filter((e=>u.value.every((t=>e.type===t)))),t("questionsFiltered",c.value)},v=e=>a.value.some((t=>t.id===e.id)),p=(e,t)=>{const s=t.some((t=>t.id===e.id));return s?t=t.filter((t=>t.id!==e.id)):t.push(e),t},g=e=>{const t=u.value.some((t=>t===e));t?(u.value=u.value.filter((t=>t!==e)),b(n.value),d(c.value)):(u.value.push(e),b(c.value))},m=e=>{const t=a.value.some((t=>t.id===e.id));t?(a.value=a.value.filter((t=>t.id!==e.id)),d(n.value),b(c.value)):(a.value.push(e),d(c.value))};return{teamLabels:i,teamQuestions:n,questionTypes:o,selectedLabels:a,selectedTypes:u,isActive:v,toggle:p,toggleLabel:m,toggleType:g}}};const ae=(0,I.Z)(oe,[["render",ne],["__scopeId","data-v-cc48b8c0"]]);var ue=ae,re={components:{QuestionFilter:ue,SideBar:V.Z,ProfileQuestions:J},setup(){const e=(0,r.iH)([]),t=t=>{console.log("Called"),e.value=t};return{filteredQuestions:e,updateQuestions:t}}};const ce=(0,I.Z)(re,[["render",u],["__scopeId","data-v-1abe3c6b"]]);var de=ce}}]);
//# sourceMappingURL=910.e0ca43f3.js.map