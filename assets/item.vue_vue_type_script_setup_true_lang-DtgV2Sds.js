
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,N as c,o as i,j as p,k as s,t as l,r as m,C as u}from"./index-GgsX_ArO.js";const d={class:"breadcrumb-item flex items-center text-foreground"},f={class:"separator mx-2"},k=n({__name:"item",props:{to:{},replace:{type:Boolean},separator:{default:"/"}},setup(a){const e=a,t=c();function r(){e.to&&(e.replace?t.replace(e.to):t.push(e.to))}return(o,_)=>(i(),p("div",d,[s("span",f,l(o.separator),1),s("span",{class:u(["text flex items-center opacity-60",{"is-link cursor-pointer transition-opacity hover-opacity-100":!!e.to}]),onClick:r},[m(o.$slots,"default")],2)]))}});export{k as _};
