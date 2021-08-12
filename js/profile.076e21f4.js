"use strict";(self["webpackChunkadmin_one_vue_tailwind"]=self["webpackChunkadmin_one_vue_tailwind"]||[]).push([[845],{3879:function(e,o,l){l.r(o),l.d(o,{default:function(){return P}});var a=l(6252),r=l(9963);const t=(0,a.Uk)("Profile");function i(e,o,l,i,m,n){const u=(0,a.up)("title-bar"),s=(0,a.up)("hero-bar"),d=(0,a.up)("file-picker"),p=(0,a.up)("field"),c=(0,a.up)("control"),w=(0,a.up)("divider"),f=(0,a.up)("jb-button"),b=(0,a.up)("jb-buttons"),W=(0,a.up)("card-component"),_=(0,a.up)("main-section"),F=(0,a.up)("bottom-other-pages-section");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u,{"title-stack":i.titleStack},null,8,["title-stack"]),(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[t])),_:1}),(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W,{title:"Edit Profile",class:"lg:w-8/12 lg:mx-auto",icon:i.mdiAccountCircle,onSubmit:(0,r.iM)(i.submitProfile,["prevent"]),form:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{label:"Avatar",help:"Max 500kb"},{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1}),(0,a.Wm)(p,{label:"Name",help:"Required. Your name"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:i.mdiAccount,modelValue:i.profileForm.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.profileForm.name=e),name:"username",required:"",autocomplete:"username"},null,8,["icon","modelValue"])])),_:1}),(0,a.Wm)(p,{label:"E-mail",help:"Required. Your e-mail"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:i.mdiMail,type:"email",name:"email",modelValue:i.profileForm.email,"onUpdate:modelValue":o[1]||(o[1]=e=>i.profileForm.email=e),required:"",autocomplete:"email"},null,8,["icon","modelValue"])])),_:1}),(0,a.Wm)(w),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{color:"info",type:"submit",label:"Submit"}),(0,a.Wm)(f,{color:"info",label:"Options",outline:""})])),_:1})])),_:1},8,["icon","onSubmit"]),(0,a.Wm)(W,{title:"Change Password",class:"lg:w-8/12 lg:mx-auto",icon:i.mdiLock,onSubmit:(0,r.iM)(i.submitPass,["prevent"]),form:""},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{label:"Current password",help:"Required. Your current password"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:i.mdiAsterisk,modelValue:i.passwordForm.password_current,"onUpdate:modelValue":o[2]||(o[2]=e=>i.passwordForm.password_current=e),name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["icon","modelValue"])])),_:1}),(0,a.Wm)(w),(0,a.Wm)(p,{label:"New password",help:"Required. New password"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:i.mdiFormTextboxPassword,modelValue:i.passwordForm.password,"onUpdate:modelValue":o[3]||(o[3]=e=>i.passwordForm.password=e),name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["icon","modelValue"])])),_:1}),(0,a.Wm)(p,{label:"Confirm password",help:"Required. New password one more time"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{icon:i.mdiFormTextboxPassword,modelValue:i.passwordForm.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=e=>i.passwordForm.password_confirmation=e),name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["icon","modelValue"])])),_:1}),(0,a.Wm)(w),(0,a.Wm)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{type:"submit",color:"info",label:"Submit"}),(0,a.Wm)(f,{color:"info",label:"Options",outline:""})])),_:1})])),_:1},8,["icon","onSubmit"])])),_:1}),(0,a.Wm)(F)],64)}var m=l(2262),n=l(4709),u=l(5317),s=l(5156),d=l(4776),p=l(9751),c=l(1692),w=l(2793),f=l(8630),b=l(9164),W=l(688),_=l(1801),F=l(5916),k=l(1703),V={name:"Profile",components:{JbButtons:k.Z,MainSection:s.Z,HeroBar:c.Z,TitleBar:p.Z,CardComponent:d.Z,Divider:w.Z,Field:f.Z,Control:b.Z,FilePicker:W.Z,JbButton:_.Z,BottomOtherPagesSection:F.Z},setup(){const e=(0,n.oR)(),o=(0,m.iH)(["Admin","Profile"]),l=(0,m.qj)({name:e.state.userName,email:e.state.userEmail}),a=(0,m.qj)({password_current:"",password:"",password_confirmation:""}),r=()=>{e.commit("user",l)},t=()=>{};return{titleStack:o,profileForm:l,passwordForm:a,submitProfile:r,submitPass:t,mdiAccount:u.rI3,mdiAccountCircle:u.wJe,mdiLock:u.d5D,mdiMail:u.xaU,mdiAsterisk:u.AD$,mdiFormTextboxPassword:u.$_S}}};V.render=i;var P=V}}]);
//# sourceMappingURL=profile.076e21f4.js.map