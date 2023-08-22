"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[436],{5398:function(e,t,s){s.d(t,{Z:function(){return d}});var i=s(3396),l=s(9242);const n={key:0,class:"labelText"};function a(e,t,s,a,o,u){return(0,i.wg)(),(0,i.iD)("div",{class:"labelCard new-label",onClick:t[4]||(t[4]=(...e)=>u.startEditing&&u.startEditing(...e))},[o.editing?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",n,"New Label +")),o.editing?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.label=e),onKeydown:[t[1]||(t[1]=(0,l.D2)(((...e)=>u.saveNewLabel&&u.saveNewLabel(...e)),["enter"])),t[2]||(t[2]=(0,l.D2)(((...e)=>u.cancelEditing&&u.cancelEditing(...e)),["esc"]))],onBlur:t[3]||(t[3]=(...e)=>u.cancelEditing&&u.cancelEditing(...e)),ref:"input"},null,544)),[[l.nr,o.label]]):(0,i.kq)("",!0)])}var o={emits:["new-label"],data(){return{editing:!1,label:""}},methods:{startEditing(){this.editing=!0,this.$nextTick((()=>{this.$refs.input.focus()}))},saveNewLabel(){""!==this.label.trim()&&this.label.trim().length<15&&(this.$emit("new-label",{label:this.label}),this.editing=!1,this.label="")},cancelEditing(){this.editing=!1,this.label=""}}},u=s(89);const r=(0,u.Z)(o,[["render",a],["__scopeId","data-v-84612290"]]);var d=r},4140:function(e,t,s){s.d(t,{Z:function(){return p}});var i=s(3396),l=s(7139);const n=e=>((0,i.dD)("data-v-6b5654a9"),e=e(),(0,i.Cn)(),e),a={class:"labelText"},o=n((()=>(0,i._)("i",{class:"bi bi-x"},null,-1))),u=[o];function r(e,t,s,n,o,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(["labelCard",{active:o.selected,clickable:s.clickable}]),onClick:t[1]||(t[1]=e=>s.clickable?r.toggleLabel():null)},[(0,i._)("div",a,(0,l.zw)(s.labelObject.label),1),o.selected&&s.clickable?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"removeIcon",onClick:t[0]||(t[0]=(...e)=>r.removeLabel&&r.removeLabel(...e))},u)):(0,i.kq)("",!0)],2)}var d={emits:["toggle-label","remove-label"],props:{labelObject:Object,active:Boolean,clickable:{type:Boolean,default:!1}},data(){return{selected:!1}},methods:{toggleLabel(){this.selected=!this.selected,this.$emit("toggle-label",this.labelObject)},removeLabel(e){e.stopPropagation(),this.$emit("remove-label",this.labelObject)}},created(){this.selected=this.active},name:"QuestionLabel"},c=s(89);const b=(0,c.Z)(d,[["render",r],["__scopeId","data-v-6b5654a9"]]);var p=b},6436:function(e,t,s){s.r(t),s.d(t,{default:function(){return ke}});var i=s(3396),l=s(7139),n=s(9242);const a={class:"container"},o={class:"container-fluid"},u=(0,i._)("option",{value:""},"All Labels",-1),r=["value"];function d(e,t,s,d,c,b){const p=(0,i.up)("base-button"),w=(0,i.up)("options-button"),h=(0,i.up)("profile-questions");return(0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("div",o,[(0,i.Wm)(p,{"icon-class":"bi bi-filter",label:"Filter"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("select",{id:"filter","onUpdate:modelValue":t[0]||(t[0]=e=>c.selectedLabel=e)},[u,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.userLabels,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.id,value:e.label},(0,l.zw)(e.label),9,r)))),128))],512),[[n.bM,c.selectedLabel]])])),_:1}),(0,i.Wm)(p,{"icon-class":"bi bi-check2-circle",label:"Select"}),(0,i.Wm)(p,{"icon-class":"bi bi-tags",label:"Labels"}),(0,i.Wm)(w)]),(0,i.Wm)(h)])}s(7658);const c=e=>((0,i.dD)("data-v-38645a8a"),e=e(),(0,i.Cn)(),e),b={class:"profile-questions"},p={class:"filter-bar"},w=c((()=>(0,i._)("label",{for:"filter"},"Filter by Label:",-1))),h=c((()=>(0,i._)("option",{value:""},"All Labels",-1))),v=["value"],g={class:"container questions-list"};function m(e,t,s,a,o,u){const r=(0,i.up)("editable-question"),d=(0,i.up)("edit-question-window");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",b,[(0,i._)("div",p,[w,(0,i.wy)((0,i._)("select",{id:"filter","onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedLabel=e)},[h,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.userLabels,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e.id,value:e.label},(0,l.zw)(e.label),9,v)))),128))],512),[[n.bM,o.selectedLabel]])]),(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.filteredQuestions,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Wm)(r,{question:e,onEdit:u.edit,onDelete:u.deleteQuestion},null,8,["question","onEdit","onDelete"])])))),128))])]),o.editQuestion?((0,i.wg)(),(0,i.j4)(d,{key:0,question:o.questionInEdit,onClose:t[1]||(t[1]=e=>o.editQuestion=!1),onSave:u.updateQuestion},null,8,["question","onSave"])):(0,i.kq)("",!0)],64)}const _=e=>((0,i.dD)("data-v-542923a6"),e=e(),(0,i.Cn)(),e),q={class:"row"},L={class:"col"},x={key:0},f={class:"row align-items-center"},y={class:"col"},D={class:"d-flex flex-wrap"},k={class:"col"},Q=_((()=>(0,i._)("i",{class:"bi bi-pencil-square"},null,-1))),C=_((()=>(0,i._)("span",{class:"d-none d-md-inline"},"Edit",-1))),I=[Q,C],E={class:"d-none d-md-inline"},U=_((()=>(0,i._)("hr",null,null,-1)));function O(e,t,s,n,a,o){const u=(0,i.up)("question-label");return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",L,[(0,i._)("div",null,[(0,i._)("div",{class:"text-start",onClick:t[0]||(t[0]=e=>a.extended=!a.extended)},[(0,i.Uk)((0,l.zw)(s.question.questionText)+" ",1),a.extended?((0,i.wg)(),(0,i.iD)("div",x,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.question.answerOptions,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},(0,l.zw)(e.text),1)))),128))])):(0,i.kq)("",!0)]),(0,i._)("div",f,[(0,i._)("div",y,[(0,i._)("div",D,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.question.questionLabels,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i.Wm)(u,{"label-object":e,active:!0},null,8,["label-object"])])))),128))])])])])]),(0,i._)("div",k,[(0,i._)("button",{class:"my-global-button",style:{margin:"5px"},onClick:t[1]||(t[1]=(...e)=>o.editQuestion&&o.editQuestion(...e))},I),(0,i._)("button",{class:"my-global-button",style:{margin:"5px"},onClick:t[3]||(t[3]=(...e)=>o.toggleDelete&&o.toggleDelete(...e))},[(0,i._)("i",{class:(0,l.C_)([{"delete-icon":a.isDeleting,default:!a.isDeleting},"bi bi-trash"]),onAnimationend:t[2]||(t[2]=(...t)=>e.resetDeleteButton&&e.resetDeleteButton(...t))},null,34),(0,i._)("span",E,(0,l.zw)(o.deleteButtonText),1)])]),U])}var T=s(4140),A={components:{QuestionLabel:T.Z},emits:["edit","delete"],props:{question:Object},setup(){const e=(0,i.f3)("userLabels");return{userLabels:e}},data(){return{extended:!1,isDeleting:!1}},computed:{deleteButtonText(){return this.isDeleting?"Confirm ":"Delete"}},methods:{editQuestion(){this.$emit("edit",this.question)},toggleDelete(){this.isDeleting?this.delete():(this.isDeleting=!0,setTimeout((()=>{this.isDeleting=!1}),3e3))},delete(){this.$emit("delete",this.question),this.isDeleting=!1}}},Z=s(89);const $=(0,Z.Z)(A,[["render",O],["__scopeId","data-v-542923a6"]]);var j=$;const V=e=>((0,i.dD)("data-v-6850e50e"),e=e(),(0,i.Cn)(),e),W={class:"pop-up-window"},B={class:"pop-up-inner"},M={class:"mb-3"},N={class:"question-input-wrapper"},P={class:"mb-3"},z={class:"option-input-wrapper"},H=V((()=>(0,i._)("label",{class:"answer-label",for:"answer1"},"Option 1:",-1))),K={class:"mb-3"},Y={class:"option-input-wrapper"},S=V((()=>(0,i._)("label",{class:"answer-label",for:"answer2"},"Option 2:",-1))),G={class:"mb-3"},J={class:"option-input-wrapper"},F=V((()=>(0,i._)("label",{class:"answer-label",for:"answer3"},"Option 3:",-1))),R={class:"mb-3"},X={class:"option-input-wrapper"},ee=V((()=>(0,i._)("label",{class:"answer-label",for:"answer4"},"Option 4:",-1))),te={class:"label-list"},se={class:"label-wrapper"};function ie(e,t,s,l,a,o){const u=(0,i.up)("QuestionLabel"),r=(0,i.up)("new-label");return(0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("div",B,[(0,i._)("div",M,[(0,i._)("div",N,[(0,i.wy)((0,i._)("input",{type:"text",id:"question","onUpdate:modelValue":t[0]||(t[0]=e=>a.questionText=e),placeholder:"Enter your question here",required:""},null,512),[[n.nr,a.questionText]])])]),(0,i._)("div",P,[(0,i._)("div",z,[H,(0,i.wy)((0,i._)("input",{type:"text",id:"answer1","onUpdate:modelValue":t[1]||(t[1]=e=>a.answers[0].text=e),required:""},null,512),[[n.nr,a.answers[0].text]]),(0,i.wy)((0,i._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>a.correctAnswerIndex=e),value:0,required:""},null,512),[[n.G2,a.correctAnswerIndex]])])]),(0,i._)("div",K,[(0,i._)("div",Y,[S,(0,i.wy)((0,i._)("input",{type:"text",id:"answer2","onUpdate:modelValue":t[3]||(t[3]=e=>a.answers[1].text=e),required:""},null,512),[[n.nr,a.answers[1].text]]),(0,i.wy)((0,i._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>a.correctAnswerIndex=e),value:1,required:""},null,512),[[n.G2,a.correctAnswerIndex]])])]),(0,i._)("div",G,[(0,i._)("div",J,[F,(0,i.wy)((0,i._)("input",{type:"text",id:"answer3","onUpdate:modelValue":t[5]||(t[5]=e=>a.answers[2].text=e),required:""},null,512),[[n.nr,a.answers[2].text]]),(0,i.wy)((0,i._)("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=e=>a.correctAnswerIndex=e),value:2,required:""},null,512),[[n.G2,a.correctAnswerIndex]])])]),(0,i._)("div",R,[(0,i._)("div",X,[ee,(0,i.wy)((0,i._)("input",{type:"text",id:"answer4","onUpdate:modelValue":t[7]||(t[7]=e=>a.answers[3].text=e),required:""},null,512),[[n.nr,a.answers[3].text]]),(0,i.wy)((0,i._)("input",{type:"radio","onUpdate:modelValue":t[8]||(t[8]=e=>a.correctAnswerIndex=e),value:3,required:""},null,512),[[n.G2,a.correctAnswerIndex]])])]),(0,i._)("div",te,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.userLabels,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{class:"label-wrapper",key:t},[(0,i.Wm)(u,{"label-object":e,clickable:!0,active:o.isActive(e),onToggleLabel:o.toggleLabel},null,8,["label-object","active","onToggleLabel"])])))),128)),(0,i._)("div",se,[(0,i.Wm)(r,{onNewLabel:o.addLabel},null,8,["onNewLabel"])])]),(0,i._)("button",{class:"my-global-button",onClick:t[9]||(t[9]=(...e)=>o.saveChanges&&o.saveChanges(...e))},"Save"),(0,i._)("button",{class:"my-global-button",onClick:t[10]||(t[10]=(...e)=>o.cancelEditing&&o.cancelEditing(...e))},"Cancel")])])}var le=s(5398),ne={components:{QuestionLabel:T.Z,NewLabel:le.Z},emits:["close","save"],props:{question:Object},setup(){const e=(0,i.f3)("userLabels");return{userLabels:e}},data(){return{questionText:"",answers:[{text:""},{text:""},{text:""},{text:""}],questionLabels:[],addedLabels:[],correctAnswerIndex:null,updatedQuestion:null}},methods:{addLabel(e){this.userLabels.push(e),this.addedLabels.push(e)},cancelEditing(){this.$emit("close")},saveChanges(){let e=this.createPrivateQuestion();this.$emit("save",e,this.addedLabels)},toggleLabel(e){const t=this.questionLabels.some((t=>t.label===e.label));t?this.questionLabels=this.questionLabels.filter((t=>t.label!==e.label)):this.questionLabels.push(e),console.log("after toggle: ",this.questionLabels)},isActive(e){return this.questionLabels.some((t=>t.label===e.label))},createPrivateQuestion(){return{questionText:this.questionText,questionLabels:this.questionLabels.map((e=>({label:e.label}))),answerOptions:this.answers.map(((e,t)=>({text:e.text,isCorrect:t===this.correctAnswerIndex})))}}},created(){this.questionText=this.question.questionText,this.answers=this.question.answerOptions.map((e=>({text:e.text}))),this.questionLabels=this.question.questionLabels.map((e=>({label:e.label}))),this.correctAnswerIndex=this.question.answerOptions.findIndex((e=>e.isCorrect)),console.log("created questionLabels: ",this.questionLabels)}};const ae=(0,Z.Z)(ne,[["render",ie],["__scopeId","data-v-6850e50e"]]);var oe=ae,ue=s(2392),re=s(4287),de={name:"ProfileQuestions",components:{EditQuestionWindow:oe,EditableQuestion:j},setup(){const e=(0,i.f3)("userQuestions"),t=(0,i.f3)("userLabels");return{userQuestions:e,userLabels:t}},data(){return{selectedLabel:"",editQuestion:!1,questionInEdit:null}},computed:{filteredQuestions(){return this.selectedLabel?this.userQuestions.filter((e=>e.questionLabels.some((e=>e.label===this.selectedLabel)))):this.userQuestions}},methods:{async updateQuestion(e,t){this.editQuestion=!1;const s=this.userQuestions.findIndex((e=>e.id===this.questionInEdit.id));-1!==s&&(this.userQuestions[s]=e);const i=ue.I8.currentUser;if(i){const s=(0,re.JU)(ue.ZP,"users",i.uid,"questions",this.questionInEdit.id);await(0,re.pl)(s,e);for(const e of t)await this.addNewLabelToUserLabels(e)}},async deleteQuestion(e){this.userQuestions=this.userQuestions.filter((t=>t.id!==e.id));const t=ue.I8.currentUser;if(t){const s=(0,re.JU)(ue.ZP,"users",t.uid,"questions",e.id);await(0,re.oe)(s)}},async addNewLabelToUserLabels(e){try{const t=ue.I8.currentUser;if(t){const s=(0,re.hJ)(ue.ZP,`users/${t.uid}/labels`),i=(0,re.JU)(s);await(0,re.pl)(i,e)}}catch(t){console.error("Error adding new label to user's labels:",t)}},edit(e){this.questionInEdit=e,this.editQuestion=!0}}};const ce=(0,Z.Z)(de,[["render",m],["__scopeId","data-v-38645a8a"]]);var be=ce;const pe=e=>((0,i.dD)("data-v-ae7e0168"),e=e(),(0,i.Cn)(),e),we=pe((()=>(0,i._)("i",{class:"bi bi-three-dots-vertical"},null,-1))),he={key:0,class:"options-menu"};function ve(e,t,s,l,n,a){return(0,i.wg)(),(0,i.iD)("div",{class:"options-button",onClick:t[2]||(t[2]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},[we,n.showMenu?((0,i.wg)(),(0,i.iD)("div",he,[(0,i._)("div",{class:"menu-item",onClick:t[0]||(t[0]=e=>a.handleOption("edit-labels"))}," Edit Labels "),(0,i._)("div",{class:"menu-item",onClick:t[1]||(t[1]=e=>a.handleOption("edit-questions"))}," Edit Questions ")])):(0,i.kq)("",!0)])}var ge={data(){return{showMenu:!1}},methods:{toggleMenu(){this.showMenu=!this.showMenu},handleOption(e){this.$emit("select-option",e),this.showMenu=!1}}};const me=(0,Z.Z)(ge,[["render",ve],["__scopeId","data-v-ae7e0168"]]);var _e=me;function qe(e,t,s,n,a,o){return(0,i.wg)(),(0,i.iD)("button",{onClick:t[0]||(t[0]=(...e)=>o.handleClick&&o.handleClick(...e)),class:"base-button"},[(0,i._)("i",{class:(0,l.C_)(s.iconClass)},null,2),(0,i._)("span",null,(0,l.zw)(s.label),1),(0,i.WI)(e.$slots,"default")])}var Le={props:{iconClass:String,label:String},methods:{handleClick(){this.$emit("click")}}};const xe=(0,Z.Z)(Le,[["render",qe]]);var fe=xe,ye={components:{BaseButton:fe,ProfileQuestions:be,OptionsButton:_e},setup(){const e=(0,i.f3)("userQuestions"),t=(0,i.f3)("userLabels");return{userQuestions:e,userLabels:t}},data(){return{selectedLabel:""}},methods:{editQuestion(){},deleteQuestion(){},manageLabels(){},toggleQuestion(e){this.isQuestionExpanded(e)?this.expandedQuestions=this.expandedQuestions.filter((t=>t!==e)):this.expandedQuestions.push(e)},isQuestionExpanded(e){return this.expandedQuestions.includes(e)}}};const De=(0,Z.Z)(ye,[["render",d]]);var ke=De}}]);
//# sourceMappingURL=436.a432c290.js.map