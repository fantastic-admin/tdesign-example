
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as m}from"./logo-C5blItxa.js";import{d as u,P as g,n as a,a as h,F as d,o,b as _,w as f,j as r,u as e,Q as i,t as k,C as w}from"./index-GgsX_ArO.js";const b=["src"],x={key:1,class:"block truncate font-bold"},S=u({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(C){const t=g(),s=a("Fantastic-admin 基础版"),l=a(m),c=h(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,L)=>{const p=d("RouterLink");return o(),_(p,{to:e(c),class:w(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(t).settings.home.enable}]),title:e(s)},{default:f(()=>[n.showLogo?(o(),r("img",{key:0,src:e(l),class:"logo h-[30px] w-[30px] object-contain"},null,8,b)):i("",!0),n.showTitle?(o(),r("span",x,k(e(s)),1)):i("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
