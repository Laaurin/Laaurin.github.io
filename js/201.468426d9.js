"use strict";(self["webpackChunkmultiple_choice"]=self["webpackChunkmultiple_choice"]||[]).push([[201],{2758:function(e,t,l){l.d(t,{Z:function(){return H}});var n=l(3396);const s={class:"sidebar shadow-lg"};function i(e,t,l,i,a,o){const r=(0,n.up)("profil-icon"),u=(0,n.up)("user-selection");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n.Wm)(r,{class:"mb-5",style:{position:"relative"},onShowUserSelection:t[0]||(t[0]=e=>a.showUserSelection=!0)}),(0,n.WI)(e.$slots,"default",{},void 0,!0)]),a.showUserSelection?((0,n.wg)(),(0,n.j4)(u,{key:0,onUserSelected:t[1]||(t[1]=e=>a.showUserSelection=!1)})):(0,n.kq)("",!0)],64)}var a=l(7139);const o={class:"profile ms-3"},r={class:"text",style:{"font-weight":"bold"}},u={class:"text"};function c(e,t,l,s,i,c){return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,(0,a.zw)(s.uniName),1),(0,n._)("div",u,(0,a.zw)(s.userName||"no user selected"),1),(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>s.buttonClick&&s.buttonClick(...e))},"change user")])}var d=l(65),p={name:"ProfilIcon",emits:["showUserSelection"],setup(e,{emit:t}){const l=(0,d.oR)(),s=(0,n.Fl)((()=>l.getters.userProfileName||"no user selected")),i=(0,n.Fl)((()=>l.getters.userUni||"no uni found")),a=()=>{t("showUserSelection")};return{userName:s,uniName:i,buttonClick:a}}},b=l(89);const v=(0,b.Z)(p,[["render",c],["__scopeId","data-v-41172726"]]);var w=v;const g={class:"pop-up-window"},m={class:"pop-up-inner"},h={class:"d-flex flex-wrap justify-content-center"};function _(e,t,l,s,i,o){const r=(0,n.up)("selectable-user"),u=(0,n.up)("new-user");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",m,[(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.userList,(e=>((0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)([{active:e.id===s.selectedProfileId},"selection-option"]),key:e.id},[(0,n.Wm)(r,{"user-name":e.name,onSelect:t=>s.setUser(e)},null,8,["user-name","onSelect"])],2)))),128)),(0,n._)("div",null,[(0,n.Wm)(u)])])])])}const f=e=>((0,n.dD)("data-v-736e0b99"),e=e(),(0,n.Cn)(),e),x=f((()=>(0,n._)("i",{style:{"font-size":"50px"},class:"bi bi-person"},null,-1)));function y(e,t,l,s,i,o){return(0,n.wg)(),(0,n.iD)("div",{class:"profile",onClick:t[0]||(t[0]=(...e)=>o.select&&o.select(...e))},[x,(0,n._)("p",null,(0,a.zw)(l.userName),1)])}var q={name:"SelectableUser",props:{userName:String},emits:["select"],methods:{select(){this.$emit("select")}}};const L=(0,b.Z)(q,[["render",y],["__scopeId","data-v-736e0b99"]]);var U=L,k=l(9242);const C={key:0,class:"profile"},D={key:1},I={class:"input-group mb-3",style:{display:"flex","align-items":"center","justify-content":"center"}};function S(e,t,l,s,i,a){return i.addingUser?((0,n.wg)(),(0,n.iD)("div",D,[(0,n._)("div",I,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>i.name=e),class:"form-control",placeholder:"Enter user's name",onKeydown:t[2]||(t[2]=(0,k.D2)(((...e)=>a.saveUser&&a.saveUser(...e)),["enter"]))},null,544),[[k.nr,i.name]]),(0,n._)("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=(...e)=>a.saveUser&&a.saveUser(...e))},"Save"),(0,n._)("button",{class:"btn btn-secondary",onClick:t[4]||(t[4]=(...e)=>a.cancelUser&&a.cancelUser(...e))},"Cancel")])])):((0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("i",{style:{"font-size":"30px",cursor:"pointer",color:"whitesmoke"},class:"bi bi-plus-circle",onClick:t[0]||(t[0]=(...e)=>a.toggleAddingUser&&a.toggleAddingUser(...e))})]))}var Q={name:"NewUser",data(){return{addingUser:!1,name:""}},methods:{toggleAddingUser(){this.addingUser=!this.addingUser},saveUser(){this.$store.dispatch("createNewUserProfile",{name:this.name}),this.name="",this.toggleAddingUser()},cancelUser(){this.name="",this.toggleAddingUser()}}};const O=(0,b.Z)(Q,[["render",S],["__scopeId","data-v-779b775c"]]);var T=O,N=l(4870),A={name:"UserSelection",components:{NewUser:T,SelectableUser:U},emits:["userSelected"],setup(e,{emit:t}){const l=(0,d.oR)(),s=(0,N.iH)(l.getters.userProfiles),i=(0,N.iH)(l.getters.userProfileId);(0,n.wF)((async()=>{0===s.value.length&&(await l.dispatch("fetchUserProfiles"),s.value=l.getters.userProfiles)}));const a=async e=>{console.log("setting"+e),await l.dispatch("selectUserProfile",e),await l.dispatch("fetchUserStats"),console.log(l.getters.userStats),t("userSelected")};return{userList:s,selectedProfileId:i,setUser:a}}};const Z=(0,b.Z)(A,[["render",_],["__scopeId","data-v-d5e07034"]]);var P=Z,j={name:"SideBar",components:{UserSelection:P,ProfilIcon:w},data(){return{showUserSelection:null===this.$store.getters.userProfileId,changeUser:!1}}};const E=(0,b.Z)(j,[["render",i],["__scopeId","data-v-587a3b9b"]]);var H=E},4853:function(e,t,l){l.d(t,{Z:function(){return c}});var n=l(3396),s=l(9242);const i={key:0,class:"labelText"};function a(e,t,l,a,o,r){return(0,n.wg)(),(0,n.iD)("div",{class:"labelCard new-label",onClick:t[4]||(t[4]=(...e)=>r.startEditing&&r.startEditing(...e))},[o.editing?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",i,"New Label +")),o.editing?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:1,type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.label=e),onKeydown:[t[1]||(t[1]=(0,s.D2)(((...e)=>r.saveNewLabel&&r.saveNewLabel(...e)),["enter"])),t[2]||(t[2]=(0,s.D2)(((...e)=>r.cancelEditing&&r.cancelEditing(...e)),["esc"]))],onBlur:t[3]||(t[3]=(...e)=>r.cancelEditing&&r.cancelEditing(...e)),ref:"input"},null,544)),[[s.nr,o.label]]):(0,n.kq)("",!0)])}var o={emits:["new-label"],data(){return{editing:!1,label:""}},methods:{startEditing(){this.editing=!0,this.$nextTick((()=>{this.$refs.input.focus()}))},saveNewLabel(){""!==this.label.trim()&&this.label.trim().length<15&&(this.$emit("new-label",{label:this.label,id:(new Date).getTime().toString()}),this.editing=!1,this.label="")},cancelEditing(){this.editing=!1,this.label=""}}},r=l(89);const u=(0,r.Z)(o,[["render",a],["__scopeId","data-v-2421300e"]]);var c=u},1034:function(e,t,l){l.d(t,{Z:function(){return w}});var n=l(3396),s=l(7139);const i=e=>((0,n.dD)("data-v-61c73462"),e=e(),(0,n.Cn)(),e),a={class:"labelText"},o=i((()=>(0,n._)("i",{class:"bi bi-x"},null,-1))),r=[o];function u(e,t,l,i,o,u){return(0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(["labelCard",{active:i.selected,clickable:l.clickable}]),onClick:t[1]||(t[1]=e=>l.clickable?i.toggleLabel():null)},[(0,n._)("div",a,(0,s.zw)(l.labelObject.label),1),l.deletable&&i.selected&&l.clickable?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"removeIcon",onClick:t[0]||(t[0]=t=>e.deleteLabel(l.labelObject.id))},r)):(0,n.kq)("",!0)],2)}var c=l(65),d=l(4870),p={emits:["toggle-label"],props:{labelObject:Object,active:Boolean,clickable:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0}},setup(e,{emit:t}){const l=(0,d.iH)(e.active),n=()=>{l.value=!l.value,t("toggle-label",e.labelObject)};return{selected:l,toggleLabel:n}},methods:{...(0,c.nv)(["deleteLabel"])},name:"QuestionLabel"},b=l(89);const v=(0,b.Z)(p,[["render",u],["__scopeId","data-v-61c73462"]]);var w=v},6022:function(e,t,l){l.d(t,{Z:function(){return y}});var n=l(3396),s=l(7139),i=l(9242);const a={class:"container shadow-lg"},o={class:"text-center"},r={class:"flashcard"},u={class:"flashcard-content"},c={class:"flashcard"},d={class:"flashcard-content"},p={class:"label-list"},b={class:"label-wrapper"};function v(e,t,l,v,w,g){const m=(0,n.up)("QuestionLabel"),h=(0,n.up)("new-label");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",o,[(0,n._)("h2",null,(0,s.zw)(l.uploading?"Upload Flashcard":"Edit Flashcard"),1)]),(0,n._)("form",null,[(0,n._)("div",r,[(0,n._)("div",u,[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>v.question.questionText=e),placeholder:"Enter Question..."},null,512),[[i.nr,v.question.questionText]])])]),(0,n._)("div",c,[(0,n._)("div",d,[(0,n.wy)((0,n._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>v.question.solutionText=e),placeholder:"Enter Solution..."},null,512),[[i.nr,v.question.solutionText]])])]),(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(v.teamLabels.concat(v.addedLabels),((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"label-wrapper",key:t},[(0,n.Wm)(m,{active:v.isActive(e),"label-object":e,clickable:!0,onToggleLabel:v.toggleLabel},null,8,["active","label-object","onToggleLabel"])])))),128)),(0,n._)("div",b,[(0,n.Wm)(h,{onNewLabel:v.addLabel},null,8,["onNewLabel"])])]),(0,n._)("button",{class:"my-global-button",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>v.submit&&v.submit(...e)),["prevent"]))},(0,s.zw)(l.uploading?"Upload Question":"Save"),1),l.uploading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:0,class:"my-global-button",onClick:t[3]||(t[3]=(0,i.iM)((e=>this.$emit("cancel")),["prevent"]))}," Cancel "))])])}l(7658);var w=l(4870),g=l(1034),m=l(4853),h=l(65),_={components:{NewLabel:m.Z,QuestionLabel:g.Z},emits:["returnQuestion","cancel"],props:{inputQuestion:Object,uploading:Boolean},setup(e,{emit:t}){const l=(0,h.oR)(),s=(0,n.Fl)((()=>l.getters.getTeamLabels)),i=(0,w.iH)([]),a=e.inputQuestion?(0,w.iH)({...e.inputQuestion}):(0,w.iH)({id:"",questionText:"",solutionText:"",questionLabels:[],type:"flash-card"}),o=()=>{""!==a.value.questionText&&""!==a.value.solutionText?(t("returnQuestion",a.value,i.value),a.value={id:"",questionText:"",solutionText:"",questionLabels:[],type:"flash-card"},i.value=[]):alert("sooo nicht")},r=e=>a.value.questionLabels.some((t=>t.label===e.label)),u=e=>{const t=a.value.questionLabels.some((t=>t.id===e.id));t?a.value.questionLabels=a.value.questionLabels.filter((t=>t.id!==e.id)):a.value.questionLabels.push(e)},c=e=>{i.value.push(e)};return{question:a,teamLabels:s,addedLabels:i,submit:o,isActive:r,toggleLabel:u,addLabel:c}}},f=l(89);const x=(0,f.Z)(_,[["render",v],["__scopeId","data-v-1ca7eb02"]]);var y=x},2925:function(e,t,l){l.d(t,{Z:function(){return Z}});var n=l(3396),s=l(7139),i=l(9242);const a=e=>((0,n.dD)("data-v-40d1387a"),e=e(),(0,n.Cn)(),e),o={class:"container shadow-lg"},r={class:"mb-3"},u={class:"question-input-wrapper"},c={class:"mb-3"},d={class:"option-input-wrapper"},p=a((()=>(0,n._)("label",{class:"answer-label",for:"answer1"},"Option 1:",-1))),b={class:"mb-3"},v={class:"option-input-wrapper"},w=a((()=>(0,n._)("label",{class:"answer-label",for:"answer2"},"Option 2:",-1))),g={class:"mb-3"},m={class:"option-input-wrapper"},h=a((()=>(0,n._)("label",{class:"answer-label",for:"answer3"},"Option 3:",-1))),_={class:"mb-3"},f={class:"option-input-wrapper"},x=a((()=>(0,n._)("label",{class:"answer-label",for:"answer4"},"Option 4:",-1))),y={key:0,class:"d-flex justify-content-center align-items-center"},q=a((()=>(0,n._)("label",null,"private Question",-1))),L={class:"private-question-wrapper"},U={key:0},k={class:"label-list"},C={class:"label-wrapper"};function D(e,t,l,a,D,I){const S=(0,n.up)("QuestionLabel"),Q=(0,n.up)("new-label");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("h2",null,(0,s.zw)(l.uploading?"Upload Question":"Edit Question"),1),(0,n._)("form",null,[(0,n._)("div",r,[(0,n._)("div",u,[(0,n.wy)((0,n._)("input",{type:"text",id:"question","onUpdate:modelValue":t[0]||(t[0]=e=>a.question.questionText=e),placeholder:"Enter your question here",required:""},null,512),[[i.nr,a.question.questionText]])])]),(0,n._)("div",c,[(0,n._)("div",d,[p,(0,n.wy)((0,n._)("input",{type:"text",id:"answer1","onUpdate:modelValue":t[1]||(t[1]=e=>a.question.answerOptions[0].text=e),required:""},null,512),[[i.nr,a.question.answerOptions[0].text]]),(0,n.wy)((0,n._)("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>a.correctAnswerIndex=e),value:0,required:""},null,512),[[i.G2,a.correctAnswerIndex]])])]),(0,n._)("div",b,[(0,n._)("div",v,[w,(0,n.wy)((0,n._)("input",{type:"text",id:"answer2","onUpdate:modelValue":t[3]||(t[3]=e=>a.question.answerOptions[1].text=e),required:""},null,512),[[i.nr,a.question.answerOptions[1].text]]),(0,n.wy)((0,n._)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>a.correctAnswerIndex=e),value:1,required:""},null,512),[[i.G2,a.correctAnswerIndex]])])]),(0,n._)("div",g,[(0,n._)("div",m,[h,(0,n.wy)((0,n._)("input",{type:"text",id:"answer3","onUpdate:modelValue":t[5]||(t[5]=e=>a.question.answerOptions[2].text=e),required:""},null,512),[[i.nr,a.question.answerOptions[2].text]]),(0,n.wy)((0,n._)("input",{type:"radio","onUpdate:modelValue":t[6]||(t[6]=e=>a.correctAnswerIndex=e),value:2,required:""},null,512),[[i.G2,a.correctAnswerIndex]])])]),(0,n._)("div",_,[(0,n._)("div",f,[x,(0,n.wy)((0,n._)("input",{type:"text",id:"answer4","onUpdate:modelValue":t[7]||(t[7]=e=>a.question.answerOptions[3].text=e),required:""},null,512),[[i.nr,a.question.answerOptions[3].text]]),(0,n.wy)((0,n._)("input",{type:"radio","onUpdate:modelValue":t[8]||(t[8]=e=>a.correctAnswerIndex=e),value:3,required:""},null,512),[[i.G2,a.correctAnswerIndex]])])]),l.uploading?((0,n.wg)(),(0,n.iD)("div",y,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>a.isPrivateQuestion=e),style:{"margin-right":"10px"}},null,512),[[i.e8,a.isPrivateQuestion]]),q])):(0,n.kq)("",!0),(0,n._)("div",L,[a.isPrivateQuestion||!l.uploading?((0,n.wg)(),(0,n.iD)("div",U,[(0,n._)("div",k,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.teamLabels.concat(a.addedLabels),((e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"label-wrapper",key:t},[(0,n.Wm)(S,{"label-object":e,clickable:!0,active:a.isActive(e),onToggleLabel:a.toggleLabel},null,8,["label-object","active","onToggleLabel"])])))),128)),(0,n._)("div",C,[(0,n.Wm)(Q,{onNewLabel:a.addLabel},null,8,["onNewLabel"])])])])):(0,n.kq)("",!0)])]),(0,n._)("button",{class:"my-global-button",onClick:t[10]||(t[10]=(...e)=>a.submit&&a.submit(...e))},(0,s.zw)(l.uploading?"Upload Question":"Save"),1),l.uploading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:0,class:"my-global-button",onClick:t[11]||(t[11]=(0,i.iM)((e=>this.$emit("cancel")),["prevent"]))}," Cancel "))])}l(7658);var I=l(65),S=l(4870),Q=l(4853),O=l(1034),T={components:{QuestionLabel:O.Z,NewLabel:Q.Z},props:{inputQuestion:Object,uploading:Boolean},setup(e,{emit:t}){const l=(0,I.oR)(),s=(0,n.Fl)((()=>l.getters.getTeamLabels)),i=(0,S.iH)([]),a=(0,S.iH)(!1),o=(0,S.iH)(e.inputQuestion?{...e.inputQuestion}:{id:"",questionText:"",answerOptions:[{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1}],questionLabels:[],type:"multiple-choice"}),r=(0,S.iH)(null),u=async()=>{if(null!==r.value){if(e.uploading&&!a.value)return await l.dispatch("uploadPublicQuestion",o.value),o.value={id:"",questionText:"",answerOptions:[{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1}],questionLabels:[]},void(r.value=null);o.value.answerOptions=o.value.answerOptions.map(((e,t)=>({text:e.text,isCorrect:t===r.value}))),t("returnQuestion",o.value,i.value),o.value={id:"",questionText:"",answerOptions:[{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1},{text:"",isCorrect:!1}],questionLabels:[],type:"multiple-choice"},i.value=[],r.value=null,a.value=!1}else alert("Bitte wählen Sie eine richtige Antwort aus.")},c=e=>o.value.questionLabels.some((t=>t.label===e.label)),d=e=>{const t=o.value.questionLabels.some((t=>t.id===e.id));t?o.value.questionLabels=o.value.questionLabels.filter((t=>t.id!==e.id)):o.value.questionLabels.push(e)},p=e=>{i.value.push(e)};return(0,n.bv)((()=>{e.inputQuestion&&(r.value=o.value.answerOptions.findIndex((e=>e.isCorrect)))})),{teamLabels:s,addedLabels:i,question:o,correctAnswerIndex:r,isPrivateQuestion:a,submit:u,isActive:c,toggleLabel:d,addLabel:p}}},N=l(89);const A=(0,N.Z)(T,[["render",D],["__scopeId","data-v-40d1387a"]]);var Z=A}}]);
//# sourceMappingURL=201.468426d9.js.map