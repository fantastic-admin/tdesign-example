
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as i,N as f,P as d,n as x,U as _,V as p,j as m,e as a,k as n,w as v,_ as w,o as g,A as N,t as k,u as B,E as y,S as s}from"./index-GgsX_ArO.js";const S={class:"absolute left-[50%] top-[50%] flex flex-col items-center justify-between lg-flex-row -translate-x-50% -translate-y-50% lg-gap-12"},b={class:"flex flex-col gap-4"},h=i({__name:"[...all]",setup(I){const l=f(),r=d(),e=x({inter:Number.NaN,countdown:5});_(()=>{e.value.inter&&window.clearInterval(e.value.inter)}),p(()=>{e.value.inter=window.setInterval(()=>{e.value.countdown--,e.value.countdown===0&&(e.value.inter&&window.clearInterval(e.value.inter),o())},1e3)});function o(){l.push(r.settings.home.fullPath)}return(V,t)=>{const c=y,u=w;return g(),m("div",S,[a(c,{name:"404",class:"text-[300px] lg-text-[400px]"}),n("div",b,[t[0]||(t[0]=n("h1",{class:"m-0 text-6xl font-sans"}," 404 ",-1)),t[1]||(t[1]=n("div",{class:"mx-0 text-xl text-secondary-foreground/50"}," 抱歉，你访问的页面不存在 ",-1)),n("div",null,[a(u,{onClick:o},{default:v(()=>[N(k(B(e).countdown)+" 秒后，返回首页 ",1)]),_:1})])])])}}});typeof s=="function"&&s(h);export{h as default};
