import{s as p,m as w,x as h,h as v,o as m,c as x,a as l,w as n,i as r,y as c,b as a,z as i,n as b,r as f,g,C as k,f as _}from"./app-af187275.js";const B={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},C=a("div",{class:"absolute inset-0 bg-neutral-500 dark:bg-neutral-900 opacity-75"},null,-1),E=[C],N={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:s}){const t=e;p(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const d=()=>{t.closeable&&s("close")},u=o=>{o.key==="Escape"&&t.show&&d()};w(()=>document.addEventListener("keydown",u)),h(()=>{document.removeEventListener("keydown",u),document.body.style.overflow=null});const y=v(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(o,$)=>(m(),x(k,{to:"body"},[l(i,{"leave-active-class":"duration-200"},{default:n(()=>[r(a("div",B,[l(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[r(a("div",{class:"fixed inset-0 transform transition-all",onClick:d},E,512),[[c,e.show]])]),_:1}),l(i,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[r(a("div",{class:b(["mb-6 bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",y.value])},[e.show?f(o.$slots,"default",{key:0}):g("",!0)],2),[[c,e.show]])]),_:3})],512),[[c,e.show]])]),_:3})]))}},S=["type"],V={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(e){return(s,t)=>(m(),_("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-500 rounded-md font-semibold text-xs text-neutral-700 dark:text-neutral-300 uppercase tracking-widest shadow-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 disabled:opacity-25 transition ease-in-out duration-150"},[f(s.$slots,"default")],8,S))}};export{V as _,N as a};