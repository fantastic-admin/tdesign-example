
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as b,o as a,j as k,r as v,C as m,R as _,P as y,a as l,n as d,V as S,Z as w,I as x,b as i,w as B,k as C,u as e,Q as u}from"./index-GgsX_ArO.js";import T from"./index-B552s1zd.js";import E from"./index-DOFWZc3O.js";import"./index.vue_vue_type_script_setup_true_lang-6Nx7KXBv.js";import"./index-B1NO2H_f.js";import"./index.vue_vue_type_script_setup_true_lang-BOcZ4Qej.js";import"./eventBus-B6m-TO0x.js";import"./index-C9s8FUZU.js";import"./vee-validate-zod-BiahlfDF.js";import"./useMainPage-CMWijB33.js";import"./leftSide.vue_vue_type_script_setup_true_lang-DVNvhPxK.js";import"./index-ChB6BXxO.js";import"./index-Br3xbZ-r.js";import"./item.vue_vue_type_script_setup_true_lang-DtgV2Sds.js";import"./rightSide.vue_vue_type_script_setup_true_lang-BaTSo740.js";import"./index.vue_vue_type_script_setup_true_lang-uXoRlPpk.js";import"./index.vue_vue_type_script_setup_true_lang-D2wxJt7b.js";import"./index.vue_vue_type_script_setup_true_lang-gCA2fcWq.js";import"./index.vue_vue_type_script_setup_true_lang-iPFP11Su.js";import"./search.vue_vue_type_script_setup_true_lang-BEnM9DG1.js";import"./index-PmQsuq3s.js";const I=b({name:"FaSmartFixedBlock",__name:"index",props:{position:{}},setup(g){return(t,s)=>(a(),k("div",{class:m(["smart-fixed-block",{[`${t.position}`]:t.position}])},[v(t.$slots,"default",{},void 0,!0)],2))}}),V=_(I,[["__scopeId","data-v-87a2789a"]]),F=b({name:"Topbar",__name:"index",setup(g){const t=y(),s=l(()=>!(t.settings.menu.mode==="head"&&(!t.settings.toolbar.breadcrumb||t.settings.app.routeBaseOn==="filesystem"))),n=d(0),p=d(!1),f=l(()=>{const o=t.settings.tabbar.enable?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-tabbar-height")):0,r=s.value?Number.parseInt(getComputedStyle(document.documentElement||document.body).getPropertyValue("--g-toolbar-height")):0;return o+r});S(()=>{window.addEventListener("scroll",c)}),w(()=>{window.removeEventListener("scroll",c)});function c(){n.value=(document.documentElement||document.body).scrollTop}return x(n,(o,r)=>{p.value=t.settings.topbar.mode==="sticky"&&o>r&&o>f.value}),(o,r)=>{const h=V;return a(),i(h,{position:"top",class:m({"absolute!":e(t).settings.topbar.mode==="static"})},{default:B(()=>[C("div",{class:m(["topbar-container transition-[transform,box-shadow]-300",{[`topbar-${e(t).settings.topbar.mode}`]:!0,mask:e(n),hide:e(p)}])},[e(t).settings.tabbar.enable?(a(),i(T,{key:0})):u("",!0),e(s)?(a(),i(E,{key:1})):u("",!0)],2)]),_:1},8,["class"])}}}),Y=_(F,[["__scopeId","data-v-e2bf80c4"]]);export{Y as default};
