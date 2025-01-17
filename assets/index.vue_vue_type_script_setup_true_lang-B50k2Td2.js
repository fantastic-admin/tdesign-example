
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as y,V as C,ae as T,n as c,I as h,af as w,o as r,b as i,e as u,w as d,u as m,C as g,Q as k,s as B,y as x,T as z,ag as E,E as F,_ as M}from"./index-GgsX_ArO.js";const I=y({name:"BackTop",__name:"index",setup(b){const p={enterActiveClass:"ease-out duration-300",enterFromClass:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95",enterToClass:"opacity-100 translate-y-0 lg-scale-100",leaveActiveClass:"ease-in duration-200",leaveFromClass:"opacity-100 translate-y-0 lg-scale-100",leaveToClass:"opacity-0 translate-y-4 lg-translate-y-0 lg-scale-95"};C(()=>{window.addEventListener("scroll",n),n()}),T(()=>{window.removeEventListener("scroll",n)});let e;const a=c(!1),o=c(0);function n(){o.value=document.documentElement.scrollTop}h(o,l=>{l>=200&&(s(),t())});function s(){e==null||e(),setTimeout(()=>{a.value=!0},0)}function t(){({stop:e}=w(()=>{a.value=!1},2e3))}function f(){a.value&&document.documentElement.scrollTo({top:0,behavior:"smooth"})}return(l,V)=>{const _=F,v=M;return r(),i(E,{to:"body"},[u(z,B(x(p)),{default:d(()=>[m(o)>=200?(r(),i(v,{key:0,variant:"outline",size:"icon",class:g(["fixed inset-b-4 z-1000 h-12 w-12 rounded-full transition-all -inset-e-9",{"inset-e-3!":m(a)}]),onMouseenter:s,onMouseleave:t,onClick:f},{default:d(()=>[u(_,{name:"i-icon-park-outline:to-top-one",size:24})]),_:1},8,["class"])):k("",!0)]),_:1},16)])}}});export{I as _};
