import{_ as N}from"./sub.vue_vue_type_script_setup_true_lang-Dt4aIR5h.js";import{r as P,_ as S}from"./item.vue_vue_type_script_setup_true_lang-BKYajRXm.js";import{d as b,r as f,A as x,B as m,ac as I,ad as w,o as i,h as d,F as y,Y as J,E as q,u as z,c as C,j as A,ab as j}from"./index-BMVjX0Wa.js";const T=b({name:"MainMenu",__name:"index",props:{menu:{},value:{},accordion:{type:Boolean,default:!0},defaultOpeneds:{default:()=>[]},mode:{default:"vertical"},collapse:{type:Boolean,default:!1},showCollapseName:{type:Boolean,default:!1}},setup(O){const n=O,s=f(n.value),c=f({}),t=f({}),o=f(n.defaultOpeneds.slice(0)),B=f([]),k=x(()=>n.mode==="horizontal"||n.mode==="vertical"&&n.collapse);function M(e,l=[]){e.forEach(a=>{const u=a.path??JSON.stringify(a);if(a.children){const r=[...l,u];t.value[u]={index:u,indexPath:r,active:!1},M(a.children,r)}else c.value[u]={index:u,indexPath:l}})}const p=(e,l)=>{o.value.includes(e)||(n.accordion&&(o.value=o.value.filter(a=>l.includes(a))),o.value.push(e))},v=e=>{if(Array.isArray(e)){j(()=>{v(e.at(-1)),e.length>1&&v(e.slice(0,-1))});return}Object.keys(t.value).forEach(l=>{t.value[l].indexPath.includes(e)&&(o.value=o.value.filter(a=>a!==e))})};function _(e){var l,a;for(const u in t.value)t.value[u].active=!1;(l=t.value[e])==null||l.indexPath.forEach(u=>{t.value[u].active=!0}),(a=c.value[e])==null||a.indexPath.forEach(u=>{t.value[u].active=!0})}const g=e=>{(n.mode==="horizontal"||n.collapse)&&(o.value=[]),_(e)},E=(e,l)=>{o.value.includes(e)?v(e):p(e,l)};function h(){const e=s.value&&c.value[s.value];_(s.value),!(!e||n.collapse)&&e.indexPath.forEach(l=>{const a=t.value[l];a&&p(l,a.indexPath)})}return m(()=>n.menu,e=>{M(e),h()},{deep:!0,immediate:!0}),m(()=>n.value,e=>{c.value[e]||(s.value="");const l=c.value[e]||s.value&&c.value[s.value]||c.value[n.value];l?s.value=l.index:s.value=e,h()}),m(()=>n.collapse,e=>{e&&(o.value=[]),h()}),I(P,w({props:n,items:c,subMenus:t,activeIndex:s,openedMenus:o,mouseInMenu:B,isMenuPopup:k,openMenu:p,closeMenu:v,handleMenuItemClick:g,handleSubMenuClick:E})),(e,l)=>(i(),d("div",{class:q(["h-full w-full flex flex-col of-hidden transition-all",{"flex-row! w-auto!":z(k)&&n.mode==="horizontal","py-1":n.mode==="vertical"}])},[(i(!0),d(y,null,J(e.menu,a=>{var u,r;return i(),d(y,{key:a.path??JSON.stringify(a)},[((u=a.meta)==null?void 0:u.menu)!==!1?(i(),d(y,{key:0},[(r=a.children)!=null&&r.length?(i(),C(N,{key:0,menu:a,"unique-key":[a.path??JSON.stringify(a)]},null,8,["menu","unique-key"])):(i(),C(S,{key:1,item:a,"unique-key":[a.path??JSON.stringify(a)],onClick:$=>g(a.path??JSON.stringify(a))},null,8,["item","unique-key","onClick"]))],64)):A("",!0)],64)}),128))],2))}});export{T as _};