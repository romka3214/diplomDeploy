import{o as l,f as r,a as o,u as a,w as n,F as c,Z as _,b as e,t as s,q as h,c as x}from"./app-ba45fd33.js";import{_ as g}from"./MainLayout-72963eb0.js";import{S as v,a as f}from"./swiper-bundle.min-4e908529.js";import"./ApplicationLogo-92d52849.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-76b33fd6.js";import"./TextInput-c06ac62d.js";import"./Modal-342f5728.js";const p={class:"mt-5 mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"},w={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 dark:text-neutral-400 gap-3"},S={class:"photos"},k={class:"h-[20rem] md:h-[30rem] w-full"},b=["src"],B={class:"text"},C={class:"text-xl"},q={class:"text-xl"},y={class:"text-xl"},z={__name:"Single",props:{event:{required:!0}},setup(t){const d=i=>{console.log(i)},m=()=>{console.log("slide change")};return(i,F)=>(l(),r(c,null,[o(a(_),{title:t.event.name},null,8,["title"]),o(g,null,{default:n(()=>[e("h1",p,"Мероприятие "+s(t.event.name),1),e("div",w,[e("div",S,[o(a(v),{speed:1e3,"slides-per-view":1,onSwiper:d,onSlideChange:m},{default:n(()=>[(l(!0),r(c,null,h(t.event.photos,u=>(l(),x(a(f),null,{default:n(()=>[e("div",k,[e("img",{class:"object-cover h-full w-full",src:"../storage/"+u.url,alt:""},null,8,b)])]),_:2},1024))),256))]),_:1})]),e("div",B,[e("div",C,"Описание: "+s(t.event.description),1),e("div",q,"Начало: "+s(t.event.date_start),1),e("div",y,"Конец: "+s(t.event.date_end),1)])])]),_:1})],64))}};export{z as default};
