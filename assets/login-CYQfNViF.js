import{d as P,r as c,a as i,o as k,c as R,w as s,b as o,u as e,e as m,f as u,M as z,_ as L,g as A,i as E,h as F,F as U,t as G,j as B,k as H,T as X,l as J,p as K,m as Q,n as W,q}from"./index-BMVjX0Wa.js";import{_ as Y}from"./HTabList.vue_vue_type_script_setup_true_lang-xIeCVZPX.js";import{_ as ee}from"./logo-CnmYMRkt.js";import oe from"./index-Z8TMsNFF.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./use-resolve-button-type-p7PtS_a4.js";const ne=u("h3",{class:"mb-8 text-xl color-[var(--el-text-color-primary)] font-bold"}," 忘记密码了? 🔒 ",-1),se={class:"mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]"},ae=P({name:"ResetPasswordForm",__name:"index",props:{account:{}},emits:["onLogin","onResetPassword"],setup(b,{emit:h}){const T=b,_=h,y=c(!1),x=c(),a=c({account:T.account??localStorage.login_account??"",captcha:"",newPassword:""}),p=c({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function w(){var r;z.info("重置密码仅提供界面演示，无实际功能，需开发者自行扩展"),(r=x.value)==null||r.validate().then(t=>{t===!0&&_("onResetPassword",a.value.account)})}return(r,t)=>{const f=L,g=i("TInput"),d=i("TFormItem"),n=i("TButton"),I=i("TLink"),V=i("TForm");return k(),R(V,{ref_key:"formRef",ref:x,data:e(a),rules:e(p),"label-align":"top","required-mark":!1,class:"min-h-500px w-full flex-col-stretch-center p-12"},{default:s(()=>[ne,o(d,{name:"account"},{default:s(()=>[o(g,{modelValue:e(a).account,"onUpdate:modelValue":t[0]||(t[0]=l=>e(a).account=l),size:"large",placeholder:"用户名",tabindex:"1"},{prefix:s(()=>[o(f,{name:"ri:user-3-fill"})]),_:1},8,["modelValue"])]),_:1}),o(d,{name:"captcha"},{default:s(()=>[o(g,{modelValue:e(a).captcha,"onUpdate:modelValue":t[1]||(t[1]=l=>e(a).captcha=l),size:"large",placeholder:"验证码",tabindex:"2"},{prefix:s(()=>[o(f,{name:"ic:baseline-verified-user"})]),suffix:s(()=>[o(n,{theme:"default",size:"small"},{default:s(()=>[m(" 发送验证码 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{name:"newPassword"},{default:s(()=>[o(g,{modelValue:e(a).newPassword,"onUpdate:modelValue":t[2]||(t[2]=l=>e(a).newPassword=l),type:"password",size:"large",placeholder:"新密码",tabindex:"3"},{prefix:s(()=>[o(f,{name:"ri:lock-2-fill"})]),_:1},8,["modelValue"])]),_:1}),o(n,{loading:e(y),size:"large",style:{width:"100%","margin-top":"20px"},onClick:w},{default:s(()=>[m(" 确认 ")]),_:1},8,["loading"]),u("div",se,[o(I,{theme:"primary",onClick:t[3]||(t[3]=l=>_("onLogin",e(a).account))},{default:s(()=>[m(" 去登录 ")]),_:1})])]),_:1},8,["data","rules"])}}}),re=u("h3",{class:"mb-8 text-xl color-[var(--el-text-color-primary)] font-bold"}," 探索从这里开始! 🚀 ",-1),le={class:"mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]"},ie=P({name:"RegisterForm",__name:"index",props:{account:{}},emits:["onLogin","onRegister"],setup(b,{emit:h}){const T=b,_=h,y=c(!1),x=c(),a=c({account:T.account??"",captcha:"",password:"",checkPassword:""}),p=c({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkPassword:[{required:!0,trigger:"blur",message:"请再次输入密码"},{validator:r=>r===a.value.password,message:"两次输入的密码不一致"}]});function w(){var r;z.info("注册模块仅提供界面演示，无实际功能，需开发者自行扩展"),(r=x.value)==null||r.validate().then(t=>{t===!0&&_("onRegister",a.value.account)})}return(r,t)=>{const f=L,g=i("TInput"),d=i("TFormItem"),n=i("TButton"),I=i("TLink"),V=i("TForm");return k(),R(V,{ref_key:"formRef",ref:x,data:e(a),rules:e(p),"label-align":"top","required-mark":!1,class:"min-h-500px w-full flex-col-stretch-center p-12"},{default:s(()=>[re,o(d,{name:"account"},{default:s(()=>[o(g,{modelValue:e(a).account,"onUpdate:modelValue":t[0]||(t[0]=l=>e(a).account=l),size:"large",placeholder:"用户名",tabindex:"1"},{prefix:s(()=>[o(f,{name:"ri:user-3-fill"})]),_:1},8,["modelValue"])]),_:1}),o(d,{name:"captcha"},{default:s(()=>[o(g,{modelValue:e(a).captcha,"onUpdate:modelValue":t[1]||(t[1]=l=>e(a).captcha=l),size:"large",placeholder:"验证码",tabindex:"2"},{prefix:s(()=>[o(f,{name:"ic:baseline-verified-user"})]),suffix:s(()=>[o(n,{theme:"default",size:"small"},{default:s(()=>[m(" 发送验证码 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{name:"password"},{default:s(()=>[o(g,{modelValue:e(a).password,"onUpdate:modelValue":t[2]||(t[2]=l=>e(a).password=l),type:"password",size:"large",placeholder:"密码",tabindex:"3"},{prefix:s(()=>[o(f,{name:"ri:lock-2-fill"})]),_:1},8,["modelValue"])]),_:1}),o(d,{name:"checkPassword"},{default:s(()=>[o(g,{modelValue:e(a).checkPassword,"onUpdate:modelValue":t[3]||(t[3]=l=>e(a).checkPassword=l),type:"password",size:"large",placeholder:"确认密码",tabindex:"4"},{prefix:s(()=>[o(f,{name:"ri:lock-2-fill"})]),_:1},8,["modelValue"])]),_:1}),o(n,{loading:e(y),size:"large",style:{width:"100%","margin-top":"20px"},onClick:w},{default:s(()=>[m(" 注册 ")]),_:1},8,["loading"]),u("div",le,[m(" 已经有帐号? "),o(I,{theme:"primary",onClick:t[4]||(t[4]=l=>_("onLogin",e(a).account))},{default:s(()=>[m(" 去登录 ")]),_:1})])]),_:1},8,["data","rules"])}}}),ce={class:"mb-6"},ue={class:"mb-8 text-xl color-[var(--el-text-color-primary)] font-bold"},de={class:"mb-4 flex-center-between"},me={class:"mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]"},pe={key:1,class:"flex-col-center"},fe=u("img",{src:"https://s2.loli.net/2024/04/26/GsahtuIZ9XOg5jr.png",class:"h-[250px] w-[250px]"},null,-1),ge=u("div",{class:"mt-2 op-50"}," 请使用微信扫码登录 ",-1),_e=[fe,ge],xe={class:"mt-4 text-center -mb-4"},ve=P({name:"LoginForm",__name:"index",props:{account:{}},emits:["onLogin","onRegister","onResetPassword"],setup(b,{emit:h}){const T=b,_=h,y=A(),x="Fantastic-admin 基础版",a=c(!1),p=c("default"),w=c(),r=c({account:T.account??localStorage.login_account??"",password:"",remember:!!localStorage.login_account}),t=c({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function f(){var d;(d=w.value)==null||d.validate().then(n=>{n===!0&&(a.value=!0,y.login(r.value).then(()=>{a.value=!1,r.value.remember?localStorage.setItem("login_account",r.value.account):localStorage.removeItem("login_account"),_("onLogin",r.value.account)}).finally(()=>{a.value=!1}))})}function g(d){r.value.account=d,r.value.password="123456",f()}return(d,n)=>{const I=Y,V=L,l=i("TInput"),S=i("TFormItem"),D=i("TCheckbox"),C=i("TLink"),$=i("TButton"),M=i("TDivider"),Z=i("TSpace"),j=i("TForm");return k(),R(j,{ref_key:"formRef",ref:w,data:e(r),rules:e(t),"label-align":"top","required-mark":!1,class:"min-h-500px w-full flex-col-stretch-center p-12"},{default:s(()=>[u("div",ce,[o(I,{modelValue:e(p),"onUpdate:modelValue":n[0]||(n[0]=v=>E(p)?p.value=v:null),options:[{label:"账号密码登录",value:"default"},{label:"扫码登录",value:"qrcode"}]},null,8,["modelValue"])]),e(p)==="default"?(k(),F(U,{key:0},[u("h3",ue," 欢迎使用 "+G(e(x))+" ! 👋🏻 ",1),o(S,{name:"account"},{default:s(()=>[o(l,{modelValue:e(r).account,"onUpdate:modelValue":n[1]||(n[1]=v=>e(r).account=v),size:"large",placeholder:"用户名",tabindex:"1"},{prefix:s(()=>[o(V,{name:"ri:user-3-fill"})]),_:1},8,["modelValue"])]),_:1}),o(S,{name:"password"},{default:s(()=>[o(l,{modelValue:e(r).password,"onUpdate:modelValue":n[2]||(n[2]=v=>e(r).password=v),type:"password",size:"large",placeholder:"密码",tabindex:"2"},{prefix:s(()=>[o(V,{name:"ri:lock-2-fill"})]),_:1},8,["modelValue"])]),_:1}),u("div",de,[o(D,{checked:e(r).remember,"onUpdate:checked":n[3]||(n[3]=v=>e(r).remember=v)},{default:s(()=>[m(" 记住我 ")]),_:1},8,["checked"]),o(C,{theme:"primary",onClick:n[4]||(n[4]=v=>_("onResetPassword",e(r).account))},{default:s(()=>[m(" 忘记密码了? ")]),_:1})]),o($,{loading:e(a),size:"large",style:{width:"100%"},onClick:f},{default:s(()=>[m(" 登录 ")]),_:1},8,["loading"]),u("div",me,[m(" 还没有帐号? "),o(C,{theme:"primary",onClick:n[5]||(n[5]=v=>_("onRegister",e(r).account))},{default:s(()=>[m(" 创建新帐号 ")]),_:1})])],64)):e(p)==="qrcode"?(k(),F("div",pe,_e)):B("",!0),u("div",xe,[o(M,null,{default:s(()=>[m("演示账号一键登录")]),_:1}),o(Z,null,{default:s(()=>[o($,{size:"small",onClick:n[6]||(n[6]=v=>g("admin"))},{default:s(()=>[m(" admin ")]),_:1}),o($,{theme:"default",size:"small",onClick:n[7]||(n[7]=v=>g("test"))},{default:s(()=>[m(" test ")]),_:1})]),_:1})])]),_:1},8,["data","rules"])}}}),be=""+new URL("login-banner-ZfMZACb6.png",import.meta.url).href,O=b=>(K("data-v-920cc7d6"),b=b(),Q(),b),we=O(()=>u("div",{class:"bg-banner"},null,-1)),ke={class:"login-box"},he=O(()=>u("div",{class:"login-banner"},[u("img",{src:ee,class:"absolute left-4 top-4 h-30px rounded ring ring-stone-2 dark-ring-stone-8"}),u("img",{src:be,class:"banner"})],-1)),Te={class:"login-form flex-col-center"},N=P({name:"Login",__name:"login",setup(b){var w;const h=J(),T=W(),_=H(),y=c(((w=h.query.redirect)==null?void 0:w.toString())??_.settings.home.fullPath),x=c(),a=c("login"),p=c();return(r,t)=>{const f=ve,g=ie,d=ae;return k(),F(U,null,[we,u("div",ke,[he,u("div",Te,[o(X,{name:"fade",mode:"out-in"},{default:s(()=>[e(a)==="login"?(k(),R(f,{key:0,ref_key:"formRef",ref:p,account:e(x),onOnLogin:t[0]||(t[0]=n=>e(T).push(e(y))),onOnRegister:t[1]||(t[1]=n=>{a.value="register",n=n}),onOnResetPassword:t[2]||(t[2]=n=>{a.value="resetPassword",n=n})},null,8,["account"])):e(a)==="register"?(k(),R(g,{key:1,ref_key:"formRef",ref:p,account:e(x),onOnRegister:t[3]||(t[3]=n=>{a.value="login",n=n}),onOnLogin:t[4]||(t[4]=n=>a.value="login")},null,8,["account"])):e(a)==="resetPassword"?(k(),R(d,{key:2,ref_key:"formRef",ref:p,account:e(x),onOnResetPassword:t[5]||(t[5]=n=>{a.value="login",n=n}),onOnLogin:t[6]||(t[6]=n=>a.value="login")},null,8,["account"])):B("",!0)]),_:1})])]),o(oe)],64)}}});typeof q=="function"&&q(N);const Fe=te(N,[["__scopeId","data-v-920cc7d6"]]);export{Fe as default};