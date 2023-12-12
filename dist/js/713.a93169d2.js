"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[713],{4853:function(e,t,l){l.d(t,{Z:function(){return c}});var a=l(3396),n=l(9242);const i={key:0,class:"labelText"};function s(e,t,l,s,o,u){return(0,a.wg)(),(0,a.iD)("div",{class:"labelCard new-label",onClick:t[4]||(t[4]=(...e)=>u.startEditing&&u.startEditing(...e))},[o.editing?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",i,"New Label +")),o.editing?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.label=e),onKeydown:[t[1]||(t[1]=(0,n.D2)(((...e)=>u.saveNewLabel&&u.saveNewLabel(...e)),["enter"])),t[2]||(t[2]=(0,n.D2)(((...e)=>u.cancelEditing&&u.cancelEditing(...e)),["esc"]))],onBlur:t[3]||(t[3]=(...e)=>u.cancelEditing&&u.cancelEditing(...e)),ref:"input"},null,544)),[[n.nr,o.label]]):(0,a.kq)("",!0)])}var o={emits:["new-label"],data(){return{editing:!1,label:""}},methods:{startEditing(){this.editing=!0,this.$nextTick((()=>{this.$refs.input.focus()}))},saveNewLabel(){""!==this.label.trim()&&this.label.trim().length<15&&(this.$emit("new-label",{label:this.label,id:(new Date).getTime().toString()}),this.editing=!1,this.label="")},cancelEditing(){this.editing=!1,this.label=""}}},u=l(89);const r=(0,u.Z)(o,[["render",s],["__scopeId","data-v-2421300e"]]);var c=r},757:function(e,t,l){l.d(t,{Z:function(){return w}});var a=l(3396),n=l(7139);const i=e=>((0,a.dD)("data-v-77df560e"),e=e(),(0,a.Cn)(),e),s={class:"labelText"},o=i((()=>(0,a._)("i",{class:"bi bi-x"},null,-1))),u=[o];function r(e,t,l,i,o,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["labelCard",{active:i.selected,clickable:l.clickable}]),onClick:t[1]||(t[1]=e=>l.clickable?i.toggleLabel():null)},[(0,a._)("div",s,(0,n.zw)(l.labelObject.label),1),l.deletable&&i.selected&&l.clickable?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"removeIcon",onClick:t[0]||(t[0]=t=>e.deleteLabel(l.labelObject.id))},u)):(0,a.kq)("",!0)],2)}var c=l(65),d=l(4870),b={emits:["toggle-label"],props:{labelObject:Object,active:Boolean,clickable:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0}},setup(e,{emit:t}){const l=(0,d.iH)(e.active),a=()=>{l.value=!l.value,t("toggle-label",e.labelObject)};return{selected:l,toggleLabel:a}},methods:{...(0,c.nv)(["deleteLabel"])},name:"QuestionLabel"},p=l(89);const v=(0,p.Z)(b,[["render",r],["__scopeId","data-v-77df560e"]]);var w=v},6022:function(e,t,l){l.d(t,{Z:function(){return h}});var a=l(3396),n=l(7139),i=l(9242);const s={class:"container shadow-lg"},o={class:"text-center"},u={class:"flashcard"},r={class:"flashcard-content"},c={class:"flashcard"},d={class:"flashcard-content"},b={class:"label-list"},p={class:"label-wrapper"};function v(e,t,l,v,w,g){const m=(0,a.up)("QuestionLabel"),x=(0,a.up)("new-label");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a._)("h2",null,(0,n.zw)(l.uploading?"Upload Flashcard":"Edit Flashcard"),1)]),(0,a._)("form",null,[(0,a._)("div",u,[(0,a._)("div",r,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>v.question.questionText=e),placeholder:"Enter Question..."},null,512),[[i.nr,v.question.questionText]])])]),(0,a._)("div",c,[(0,a._)("div",d,[(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>v.question.solutionText=e),placeholder:"Enter Solution..."},null,512),[[i.nr,v.question.solutionText]])])]),(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.teamLabels.concat(v.addedLabels),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"label-wrapper",key:t},[(0,a.Wm)(m,{active:v.isActive(e),"label-object":e,clickable:!0,onToggleLabel:v.toggleLabel},null,8,["active","label-object","onToggleLabel"])])))),128)),(0,a._)("div",p,[(0,a.Wm)(x,{onNewLabel:v.addLabel},null,8,["onNewLabel"])])]),(0,a._)("button",{class:"my-global-button",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>v.submit&&v.submit(...e)),["prevent"]))},(0,n.zw)(l.uploading?"Upload Question":"Save"),1),l.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"my-global-button",onClick:t[3]||(t[3]=(0,i.iM)((e=>this.$emit("cancel")),["prevent"]))}," Cancel "))])])}l(7658);var w=l(4870),g=l(757),m=l(4853),x=l(65),q={components:{NewLabel:m.Z,QuestionLabel:g.Z},emits:["returnQuestion","cancel"],props:{inputQuestion:Object,uploading:Boolean},setup(e,{emit:t}){const l=(0,x.oR)(),n=(0,a.Fl)((()=>l.getters.getTeamLabels)),i=(0,w.iH)([]),s=e.inputQuestion?(0,w.iH)({...e.inputQuestion}):(0,w.iH)({id:"",questionText:"",solutionText:"",questionLabels:[],type:"flash-card"}),o=()=>{""!==s.value.questionText&&""!==s.value.solutionText?(t("returnQuestion",s.value,i.value),s.value={id:"",questionText:"",solutionText:"",questionLabels:[],type:"flash-card"},i.value=[]):alert("sooo nicht")},u=e=>s.value.questionLabels.some((t=>t.label===e.label)),r=e=>{const t=s.value.questionLabels.some((t=>t.id===e.id));t?s.value.questionLabels=s.value.questionLabels.filter((t=>t.id!==e.id)):s.value.questionLabels.push(e)},c=e=>{i.value.push(e)};return{question:s,teamLabels:n,addedLabels:i,submit:o,isActive:u,toggleLabel:r,addLabel:c}}},L=l(89);const _=(0,L.Z)(q,[["render",v],["__scopeId","data-v-1ca7eb02"]]);var h=_},5284:function(e,t,l){l.d(t,{Z:function(){return j}});var a=l(3396),n=l(7139),i=l(9242);const s=e=>((0,a.dD)("data-v-e7222fa4"),e=e(),(0,a.Cn)(),e),o={class:"container shadow-lg"},u={class:"mb-3"},r={class:"question-input-wrapper"},c={class:"mb-3"},d={class:"option-input-wrapper"},b=s((()=>(0,a._)("label",{class:"answer-label",for:"answer1"},"Option 1:",-1))),p={class:"mb-3"},v={class:"option-input-wrapper"},w=s((()=>(0,a._)("label",{class:"answer-label",for:"answer2"},"Option 2:",-1))),g={class:"mb-3"},m={class:"option-input-wrapper"},x=s((()=>(0,a._)("label",{class:"answer-label",for:"answer3"},"Option 3:",-1))),q={class:"mb-3"},L={class:"option-input-wrapper"},_=s((()=>(0,a._)("label",{class:"answer-label",for:"answer4"},"Option 4:",-1))),h={key:0,class:"d-flex justify-content-center align-items-center"},y=s((()=>(0,a._)("label",null,"private Question",-1))),f={class:"private-question-wrapper"},k={key:0},C={class:"label-list"},Q={class:"label-wrapper"};function O(e,t,l,s,O,T){const D=(0,a.up)("QuestionLabel"),U=(0,a.up)("new-label");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("h2",null,(0,n.zw)(l.uploading?"Upload Question":"Edit Question"),1),(0,a._)("form",null,[(0,a._)("div",u,[(0,a._)("div",r,[(0,a.wy)((0,a._)("input",{type:"text",id:"question","onUpdate:modelValue":t[0]||(t[0]=e=>s.question.questionText=e),placeholder:"Enter your question here",required:""},null,512),[[i.nr,s.question.questionText]])])]),(0,a._)("div",c,[(0,a._)("div",d,[b,(0,a.wy)((0,a._)("input",{type:"text",id:"answer1","onUpdate:modelValue":t[1]||(t[1]=e=>s.question.answerOptions[0].text=e),required:""},null,512),[[i.nr,s.question.answerOptions[0].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>s.correctAnswerIndex=e),value:0,required:""},null,512),[[i.G2,s.correctAnswerIndex]])])]),(0,a._)("div",p,[(0,a._)("div",v,[w,(0,a.wy)((0,a._)("input",{type:"text",id:"answer2","onUpdate:modelValue":t[3]||(t[3]=e=>s.question.answerOptions[1].text=e),required:""},null,512),[[i.nr,s.question.answerOptions[1].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>s.correctAnswerIndex=e),value:1,required:""},null,512),[[i.G2,s.correctAnswerIndex]])])]),(0,a._)("div",g,[(0,a._)("div",m,[x,(0,a.wy)((0,a._)("input",{type:"text",id:"answer3","onUpdate:modelValue":t[5]||(t[5]=e=>s.question.answerOptions[2].text=e),required:""},null,512),[[i.nr,s.question.answerOptions[2].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=e=>s.correctAnswerIndex=e),value:2,required:""},null,512),[[i.G2,s.correctAnswerIndex]])])]),(0,a._)("div",q,[(0,a._)("div",L,[_,(0,a.wy)((0,a._)("input",{type:"text",id:"answer4","onUpdate:modelValue":t[7]||(t[7]=e=>s.question.answerOptions[3].text=e),required:""},null,512),[[i.nr,s.question.answerOptions[3].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[8]||(t[8]=e=>s.correctAnswerIndex=e),value:3,required:""},null,512),[[i.G2,s.correctAnswerIndex]])])]),l.uploading?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.wy)((0,a._)("input",{type:"checkbox",disabled:"","onUpdate:modelValue":t[9]||(t[9]=e=>s.isPrivateQuestion=e),style:{"margin-right":"10px"}},null,512),[[i.e8,s.isPrivateQuestion]]),y])):(0,a.kq)("",!0),(0,a._)("div",f,[s.isPrivateQuestion||!l.uploading?((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.teamLabels.concat(s.addedLabels),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"label-wrapper",key:t},[(0,a.Wm)(D,{"label-object":e,clickable:!0,active:s.isActive(e),onToggleLabel:s.toggleLabel},null,8,["label-object","active","onToggleLabel"])])))),128)),(0,a._)("div",Q,[(0,a.Wm)(U,{onNewLabel:s.addLabel},null,8,["onNewLabel"])])])])):(0,a.kq)("",!0)])]),(0,a._)("button",{class:"my-global-button",onClick:t[10]||(t[10]=(...e)=>s.submit&&s.submit(...e))},(0,n.zw)(l.uploading?"Upload Question":"Save"),1),l.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"my-global-button",onClick:t[11]||(t[11]=(0,i.iM)((e=>this.$emit("cancel")),["prevent"]))}," Cancel "))])}l(7658);var T=l(65),D=l(4870),U=l(4853),I=l(757),A={components:{QuestionLabel:I.Z,NewLabel:U.Z},props:{inputQuestion:Object,uploading:Boolean},setup(e,{emit:t}){const l=(0,T.oR)(),n=(0,a.Fl)((()=>l.getters.getTeamLabels)),i=(0,D.iH)([]),s=(0,D.iH)(!0),o=(0,D.iH)(e.inputQuestion?{...e.inputQuestion}:{id:"",questionText:"",answerOptions:[{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1}],questionLabels:[],type:"multiple-choice"}),u=(0,D.iH)(null),r=async()=>{if(null!==u.value){if(e.uploading&&!s.value)return await l.dispatch("uploadPublicQuestion",o.value),o.value={id:"",questionText:"",answerOptions:[{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1}],questionLabels:[]},void(u.value=null);o.value.answerOptions=o.value.answerOptions.map(((e,t)=>({text:e.text,isCorrect:t===u.value}))),t("returnQuestion",o.value,i.value),o.value={id:"",questionText:"",answerOptions:[{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1}],questionLabels:[],type:"multiple-choice"},i.value=[],u.value=null,s.value=!0}else alert("Bitte wählen Sie eine richtige Antwort aus.")},c=e=>o.value.questionLabels.some((t=>t.label===e.label)),d=e=>{const t=o.value.questionLabels.some((t=>t.id===e.id));t?o.value.questionLabels=o.value.questionLabels.filter((t=>t.id!==e.id)):o.value.questionLabels.push(e)},b=e=>{i.value.push(e)};return(0,a.bv)((()=>{e.inputQuestion&&(u.value=o.value.answerOptions.findIndex((e=>e.isCorrect)))})),{teamLabels:n,addedLabels:i,question:o,correctAnswerIndex:u,isPrivateQuestion:s,submit:r,isActive:c,toggleLabel:d,addLabel:b}}},E=l(89);const V=(0,E.Z)(A,[["render",O],["__scopeId","data-v-e7222fa4"]]);var j=V}}]);
//# sourceMappingURL=713.a93169d2.js.map