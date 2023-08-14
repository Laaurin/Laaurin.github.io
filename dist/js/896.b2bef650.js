"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[896],{5638:function(e,t,l){l.d(t,{Z:function(){return u}});var a=l(3396),s=l(9242);const n={key:0,class:"labelText"};function i(e,t,l,i,r,o){return(0,a.wg)(),(0,a.iD)("div",{class:"labelCard new-label",onClick:t[4]||(t[4]=(...e)=>o.startEditing&&o.startEditing(...e))},[r.editing?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",n,"New Label +")),r.editing?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.label=e),onKeydown:[t[1]||(t[1]=(0,s.D2)(((...e)=>o.saveNewLabel&&o.saveNewLabel(...e)),["enter"])),t[2]||(t[2]=(0,s.D2)(((...e)=>o.cancelEditing&&o.cancelEditing(...e)),["esc"]))],onBlur:t[3]||(t[3]=(...e)=>o.cancelEditing&&o.cancelEditing(...e)),ref:"input"},null,544)),[[s.nr,r.label]]):(0,a.kq)("",!0)])}var r={emits:["new-label"],data(){return{editing:!1,label:""}},methods:{startEditing(){this.editing=!0,this.$nextTick((()=>{this.$refs.input.focus()}))},saveNewLabel(){""!==this.label.trim()&&this.label.trim().length<15&&(this.$emit("new-label",{label:this.label}),this.editing=!1,this.label="")},cancelEditing(){this.editing=!1,this.label=""}}},o=l(89);const c=(0,o.Z)(r,[["render",i],["__scopeId","data-v-2152249d"]]);var u=c},1700:function(e,t,l){l.d(t,{Z:function(){return p}});var a=l(3396),s=l(7139);const n=e=>((0,a.dD)("data-v-f6861b64"),e=e(),(0,a.Cn)(),e),i={class:"labelText"},r=n((()=>(0,a._)("i",{class:"bi bi-x"},null,-1))),o=[r];function c(e,t,l,n,r,c){return(0,a.wg)(),(0,a.iD)("div",{class:(0,s.C_)(["labelCard",{active:r.selected,clickable:l.clickable}]),onClick:t[1]||(t[1]=e=>l.clickable?c.toggleLabel():null)},[(0,a._)("div",i,(0,s.zw)(l.labelObject.label),1),r.selected&&l.clickable?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"removeIcon",onClick:t[0]||(t[0]=(...e)=>c.removeLabel&&c.removeLabel(...e))},o)):(0,a.kq)("",!0)],2)}var u={emits:["toggle-label","remove-label"],props:{labelObject:Object,active:Boolean,clickable:{type:Boolean,default:!1}},data(){return{selected:!1}},methods:{toggleLabel(){this.selected=!this.selected,this.$emit("toggle-label",this.labelObject)},removeLabel(e){e.stopPropagation(),this.$emit("remove-label",this.labelObject)}},created(){this.selected=this.active},name:"QuestionLabel"},d=l(89);const b=(0,d.Z)(u,[["render",c],["__scopeId","data-v-f6861b64"]]);var p=b},5896:function(e,t,l){l.r(t),l.d(t,{default:function(){return Z}});var a=l(3396),s=l(9242);const n=e=>((0,a.dD)("data-v-dc379780"),e=e(),(0,a.Cn)(),e),i={class:"container"},r=n((()=>(0,a._)("h2",null,"Upload new question",-1))),o={class:"mb-3"},c={class:"question-input-wrapper"},u={class:"mb-3"},d={class:"option-input-wrapper"},b=n((()=>(0,a._)("label",{class:"answer-label",for:"answer1"},"Option 1:",-1))),p={class:"mb-3"},w={class:"option-input-wrapper"},v=n((()=>(0,a._)("label",{class:"answer-label",for:"answer2"},"Option 2:",-1))),h={class:"mb-3"},m={class:"option-input-wrapper"},g=n((()=>(0,a._)("label",{class:"answer-label",for:"answer3"},"Option 3:",-1))),_={class:"mb-3"},x={class:"option-input-wrapper"},y=n((()=>(0,a._)("label",{class:"answer-label",for:"answer4"},"Option 4:",-1))),L=n((()=>(0,a._)("label",null,"private Question",-1))),q={key:0},f={class:"label-list"},k={class:"label-wrapper"},Q=n((()=>(0,a._)("button",{class:"my-global-button",type:"submit"},"add question",-1)));function I(e,t,l,n,I,A){const D=(0,a.up)("QuestionLabel"),E=(0,a.up)("new-label");return(0,a.wg)(),(0,a.iD)("div",i,[r,(0,a._)("form",{onSubmit:t[10]||(t[10]=(0,s.iM)(((...e)=>A.submitForm&&A.submitForm(...e)),["prevent"]))},[(0,a._)("div",o,[(0,a._)("div",c,[(0,a.wy)((0,a._)("input",{type:"text",id:"question","onUpdate:modelValue":t[0]||(t[0]=e=>I.question=e),placeholder:"Enter your question here",required:""},null,512),[[s.nr,I.question]])])]),(0,a._)("div",u,[(0,a._)("div",d,[b,(0,a.wy)((0,a._)("input",{type:"text",id:"answer1","onUpdate:modelValue":t[1]||(t[1]=e=>I.answers[0].text=e),required:""},null,512),[[s.nr,I.answers[0].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>I.correctAnswerIndex=e),value:0,required:""},null,512),[[s.G2,I.correctAnswerIndex]])])]),(0,a._)("div",p,[(0,a._)("div",w,[v,(0,a.wy)((0,a._)("input",{type:"text",id:"answer2","onUpdate:modelValue":t[3]||(t[3]=e=>I.answers[1].text=e),required:""},null,512),[[s.nr,I.answers[1].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>I.correctAnswerIndex=e),value:1,required:""},null,512),[[s.G2,I.correctAnswerIndex]])])]),(0,a._)("div",h,[(0,a._)("div",m,[g,(0,a.wy)((0,a._)("input",{type:"text",id:"answer3","onUpdate:modelValue":t[5]||(t[5]=e=>I.answers[2].text=e),required:""},null,512),[[s.nr,I.answers[2].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=e=>I.correctAnswerIndex=e),value:2,required:""},null,512),[[s.G2,I.correctAnswerIndex]])])]),(0,a._)("div",_,[(0,a._)("div",x,[y,(0,a.wy)((0,a._)("input",{type:"text",id:"answer4","onUpdate:modelValue":t[7]||(t[7]=e=>I.answers[3].text=e),required:""},null,512),[[s.nr,I.answers[3].text]]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":t[8]||(t[8]=e=>I.correctAnswerIndex=e),value:3,required:""},null,512),[[s.G2,I.correctAnswerIndex]])])]),(0,a._)("div",null,[L,(0,a.wy)((0,a._)("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>I.privateQuestion=e)},null,512),[[s.e8,I.privateQuestion]]),I.privateQuestion?((0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",f,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.userLabels,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"label-wrapper",key:t},[(0,a.Wm)(D,{"label-object":e,clickable:!0,onToggleLabel:A.toggleLabel},null,8,["label-object","onToggleLabel"])])))),128)),(0,a._)("div",k,[(0,a.Wm)(E,{onNewLabel:A.addLabel},null,8,["onNewLabel"])])])])):(0,a.kq)("",!0)]),Q],32)])}l(7658);var A=l(2392),D=l(4287),E=l(1700),U=l(5638),C={components:{NewLabel:U.Z,QuestionLabel:E.Z},setup(){const e=(0,a.f3)("userLabels");return{userLabels:e}},created(){console.log(this.userLabels[0].label)},data(){return{question:"",answers:[{text:""},{text:""},{text:""},{text:""}],correctAnswerIndex:null,privateQuestion:!1,selectedLabels:[]}},methods:{addLabel(e){this.userLabels.push(e)},async submitForm(){if(null===this.correctAnswerIndex)return void alert("Bitte wählen Sie eine richtige Antwort aus.");const e=this.createQuestion();console.log(e),this.privateQuestion?await this.uploadPrivateQuestion(e):await this.uploadPublicQuestion(e),this.question="",this.answers.forEach((e=>e.text="")),this.correctAnswerIndex=null,this.privateQuestion=!1,this.selectedLabels=[]},createQuestion(){const e={questionText:this.question,answerOptions:this.answers.map(((e,t)=>({text:e.text,isCorrect:t===this.correctAnswerIndex})))};return this.privateQuestion&&(e.questionLabels=this.selectedLabels.map((e=>({label:e.label})))),e},async uploadPrivateQuestion(e){const t=(0,D.hJ)(A.Z,`users/${A.I.currentUser.uid}/questions`),l=await(0,D.ET)(t,e);console.log("Private question created:",l.id)},async uploadPublicQuestion(e){try{const t=(0,D.hJ)(A.Z,"unreviewedQuestions"),l=await(0,D.ET)(t,e);console.log("Public question uploaded:",l.id)}catch(t){console.error("Error uploading public question:",t)}},toggleLabel(e){this.selectedLabels.includes(e)?this.selectedLabels=this.selectedLabels.filter((t=>t!==e)):this.selectedLabels.push(e)}}},V=l(89);const O=(0,V.Z)(C,[["render",I],["__scopeId","data-v-dc379780"]]);var Z=O}}]);
//# sourceMappingURL=896.b2bef650.js.map