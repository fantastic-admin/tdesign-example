
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,P as l,o as d,b as h,w as p,e as _,u as w,E as x,_ as f}from"./index-GgsX_ArO.js";function g(i){function e(){if(!document.startViewTransition||window.matchMedia("(prefers-reduced-motion: reduce)").matches){i();return}return document.startViewTransition(async()=>{await Promise.resolve(i())})}return{startViewTransition:e}}const C=u({name:"ColorScheme",__name:"index",setup(i){const e=l();function c(r){var n;const{startViewTransition:a}=g(()=>{e.currentColorScheme&&e.setColorScheme(e.currentColorScheme==="dark"?"light":"dark")});(n=a())==null||n.ready.then(()=>{const t=r.clientX,o=r.clientY,m=Math.hypot(Math.max(t,innerWidth-t),Math.max(o,innerHeight-o)),s=[`circle(0px at ${t}px ${o}px)`,`circle(${m}px at ${t}px ${o}px)`];document.documentElement.animate({clipPath:e.settings.app.colorScheme!=="dark"?s:s.reverse()},{duration:300,easing:"ease-out",pseudoElement:e.settings.app.colorScheme!=="dark"?"::view-transition-new(root)":"::view-transition-old(root)"})})}return(r,a)=>{const n=x,t=f;return d(),h(t,{variant:"ghost",size:"icon",onClick:c},{default:p(()=>[_(n,{name:{light:"i-ri:sun-line",dark:"i-ri:moon-line"}[w(e).currentColorScheme],size:16},null,8,["name"])]),_:1})}}});export{C as _};
