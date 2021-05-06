(this["webpackJsonptest-form-react"]=this["webpackJsonptest-form-react"]||[]).push([[0],{10:function(e,t,a){e.exports={LoginForm:"LoginPage_LoginForm__1oZ0J",form:"LoginPage_form__Qcpzd",button:"LoginPage_button__12HH6",link:"LoginPage_link__3iIqY",formMessage:"LoginPage_formMessage__38HUQ",errorMessage:"LoginPage_errorMessage__31cRn"}},12:function(e,t,a){e.exports={label:"CheckBox_label__3LfNI",input:"CheckBox_input__8U4HI",visuallyHidden:"CheckBox_visuallyHidden__2ZPjG"}},16:function(e,t,a){e.exports={App:"App_App__SdNSb","App-header":"App_App-header__3sUPx",wrapper:"App_wrapper__Nlcs6"}},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=(a(22),a(7)),u=a(4),s=a(17),d=a(3),c=a(13),_=a.n(c),p=a(5),b=a.n(p),m=a(6),j=a.n(m),f=a(1),g=Object(n.forwardRef)((function(e,t){var a=e.onChange,r=e.label,o=e.type,l=void 0===o?"text":o,i=e.value,s=e.marginBottom,c=void 0===s?"default":s,p=e.width,m=void 0===p?"auto":p,g=e.name,h=e.isValue,v=e.withDefaultValue,O=e.defaultValue,w=e.autoComplete,x=e.onFilled,B=_.a.uniqueId(),G=Object(n.useState)(!1),I=Object(u.a)(G,2),y=I[0],N=I[1];return Object(f.jsxs)("div",{className:b()(j.a.generalInput,Object(d.a)({},j.a["marginBottom-".concat(c)],c),Object(d.a)({},j.a["width-".concat(m)],m)),children:[Object(f.jsx)("label",{htmlFor:B,className:b()(j.a.label,Object(d.a)({},j.a.labelTop,Boolean(y||i||h||v))),children:r}),Object(f.jsx)("div",{className:j.a.inputWrapper,children:Object(f.jsx)("input",{id:B,type:l,onChange:a,onFocus:function(){N(!0)},onBlur:function(e){!function(e){0===e.target.value.length&&N(!1)}(e)},className:b()(j.a.input),value:i,name:g,ref:t,defaultValue:O,onAnimationStart:function(e){e.animationName===j.a.onAutoFillStart&&(N(!0),x&&x())},autoComplete:w})})]})})),h=a(12),v=a.n(h),O=Object(n.forwardRef)((function(e,t){var a=e.onChange,n=e.label,r=e.value,o=e.readOnly,l=e.name,i=e.defaultValue,u=_.a.uniqueId();return Object(f.jsxs)("div",{className:v.a.inputWrapper,children:[Object(f.jsx)("input",{id:u,type:"checkbox",onChange:a,className:b()(v.a.input,v.a.visuallyHidden),value:r,readOnly:o,name:l,ref:t,defaultValue:i}),Object(f.jsx)("label",{htmlFor:u,className:b()(v.a.label),children:n})]})})),w=a(8),x=a.n(w),B=Object(n.forwardRef)((function(e,t){var a,n=e.onClick,r=e.color,o=void 0===r?"blue":r,l=e.type,i=void 0===l?"button":l,u=e.isDisabled,s=void 0!==u&&u,c=e.variant,_=void 0===c?"contained":c,p=e.children,m=e.className,j=e.icon,g=e.width,h=void 0===g?"full":g;return Object(f.jsx)("button",{onClick:n,disabled:s,className:b()(x.a.generalButton,(a={},Object(d.a)(a,x.a[o],o),Object(d.a)(a,x.a[_],_),Object(d.a)(a,x.a.disabled,s),Object(d.a)(a,x.a.withIcon,j),Object(d.a)(a,x.a["width-".concat(h)],h),a),m),type:i,ref:t,children:p})}));B.displayName="GeneralButton";var G=a(10),I=a.n(G),y=function(){var e,t,a=Object(s.a)({mode:"all"}),r=a.register,o=a.watch,l=a.handleSubmit,d=a.reset,c=a.formState,_=c.dirtyFields,p=c.isDirty,b=c.errors,m=o(),j={required:"\u041b\u043e\u0433\u0438\u043d \u043d\u0443\u0436\u0435\u043d"},h={required:"\u041d\u0443\u0436\u0435\u043d \u043f\u0430\u0440\u043e\u043b\u044c",minLength:{value:8,message:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0435 \u043a\u043e\u0440\u043e\u0447\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}},v={required:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},w=Object(n.useState)(""),x=Object(u.a)(w,2),G=x[0],y=x[1],N=Object(n.useState)(""),C=Object(u.a)(N,2),k=C[0],A=C[1];return Object(f.jsx)("div",{className:I.a.loginForm,children:Object(f.jsxs)("form",{className:I.a.form,onSubmit:function(e){return e.preventDefault()},children:[Object(f.jsx)(g,Object(i.a)(Object(i.a)({label:"\u041b\u043e\u0433\u0438\u043d",type:"text",isError:!!(null===b||void 0===b?void 0:b.username),errorMessage:null===b||void 0===b||null===(e=b.username)||void 0===e?void 0:e.message,isCorrect:!(null===b||void 0===b?void 0:b.username)&&(null===_||void 0===_?void 0:_.username),onClear:function(){d({username:""})},marginBottom:"default",name:"username"},r("username",j)),{},{autoComplete:"username"})),Object(f.jsx)(g,Object(i.a)(Object(i.a)({label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",isError:!!(null===b||void 0===b?void 0:b.password),isCorrect:!(null===b||void 0===b?void 0:b.password)&&_.password,errorMessage:null===b||void 0===b||null===(t=b.password)||void 0===t?void 0:t.message,name:"password"},r("password",h)),{},{autoComplete:"current-password"})),Object(f.jsx)(O,Object(i.a)(Object(i.a)({type:"checkbox",name:"agree"},r("agree",v)),{},{label:"\u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u043e\u0444\u0435\u0440\u0442\u043e\u0439"})),Object(f.jsx)(B,{isDisabled:!(m.username&&m.password&&m.agree),onClick:l((function(e){d(),A(""),y("\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b")}),(function(e){y("");var t=[];for(var a in e)t.push(e[a].message);A(t.map((function(e){return Object(f.jsx)("li",{children:e},e)})))})),className:I.a.button,type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(f.jsxs)("div",{className:I.a.formMessage,children:[!p&&G,Object(f.jsx)("ul",{className:I.a.errorMessage,children:k})]})]})})},N=a(16),C=a.n(N);var k=function(){return Object(f.jsx)("div",{className:C.a.wrapper,children:Object(f.jsx)(y,{})})};l.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={generalInput:"GeneralInput_generalInput__A3Cud","width-full":"GeneralInput_width-full__OZgaz","width-default":"GeneralInput_width-default__22P0M","width-big":"GeneralInput_width-big__3WBy_","marginBottom-none":"GeneralInput_marginBottom-none__u0kNx","marginBottom-default":"GeneralInput_marginBottom-default__1h-0f",inputWrapper:"GeneralInput_inputWrapper__1jXil",input:"GeneralInput_input__3gFzB",readOnly:"GeneralInput_readOnly__3BTdY",inputError:"GeneralInput_inputError__1kDiG",label:"GeneralInput_label__3X8Bu",labelTop:"GeneralInput_labelTop__3wiyp"}},8:function(e,t,a){e.exports={generalButton:"GeneralButton_generalButton__1hBVr","width-auto":"GeneralButton_width-auto__2bdej","width-full":"GeneralButton_width-full__3Y14O","width-default":"GeneralButton_width-default__3CvZ5",icon:"GeneralButton_icon__3J_bV",editIcon:"GeneralButton_editIcon__20FY4",deleteIcon:"GeneralButton_deleteIcon__2nv7z",addIcon:"GeneralButton_addIcon__166xY",contained:"GeneralButton_contained__3WGpE",withIcon:"GeneralButton_withIcon__1DroP",default:"GeneralButton_default__1NEAJ",blue:"GeneralButton_blue__3Hedf",red:"GeneralButton_red__3-bxn",green:"GeneralButton_green__3wlHZ",disabled:"GeneralButton_disabled__3AEr-",outlined:"GeneralButton_outlined__27Hd-",text:"GeneralButton_text__3Did1"}}},[[27,1,2]]]);
//# sourceMappingURL=main.73b46c8a.chunk.js.map