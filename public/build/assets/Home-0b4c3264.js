import{o as t,f as e,a as o,u as c,w as m,F as l,Z as x,p as n,g,b as s,d,c as i}from"./app-af187275.js";import{_ as h}from"./MainLayout-fd862541.js";import u from"./Card-7074d495.js";import _ from"./Card-5bc43488.js";import"./ApplicationLogo-7b41f5c0.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76b33fd6.js";const f=s("h1",{class:"mt-5 mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"},[d("Отслеживаемые "),s("span",{class:"text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-white"},"заведения")],-1),p={key:0,class:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 dark:text-neutral-400 gap-3"},b={key:1},w=s("h2",{class:"text-4xl font-bold dark:text-white"},"Вы ещё не подписаны ни на одно заведение!",-1),k=[w],v=s("h1",{class:"mt-5 mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"},[d("Ближайшие "),s("span",{class:"text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-white"},"события")],-1),y={key:2,class:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 dark:text-neutral-400 gap-3"},L={__name:"Home",props:{newEstablishments:{required:!0},follows:{required:!1}},setup(a){return(B,E)=>(t(),e(l,null,[o(c(x),{title:"Главная"}),o(h,null,{default:m(()=>[f,a.follows.length!==0?(t(),e("div",p,[(t(!0),e(l,null,n(a.follows,r=>(t(),i(_,{establishment:r},null,8,["establishment"]))),256))])):(t(),e("div",b,k)),v,a.newEstablishments?(t(),e("div",y,[(t(!0),e(l,null,n(a.newEstablishments,r=>(t(),i(u,{event:r},null,8,["event"]))),256))])):g("",!0)]),_:1})],64))}};export{L as default};