import{a as o,q as c,w as l,u as n,d as e,t as s,i as r}from"./app-00c32152.js";const d={class:"w-100"},i=["src"],h={class:"p-2"},u={class:"text-xl"},v={class:"text-lg"},_={class:"text-lg"},m={__name:"Card",props:{event:{required:!0,type:Object}},setup(t){return(a,f)=>(o(),c(n(r),{href:a.route("events.show",t.event.id),class:"flex flex-col w-100 hover:bg-neutral-700 rounded-xl"},{default:l(()=>[e("div",d,[e("img",{class:"object-cover md:h-64 h-48 w-full rounded-xl",src:"../storage/"+t.event.photos[0].url,alt:""},null,8,i)]),e("div",h,[e("h1",u,s(t.event.name),1),e("h1",v,"Начало "+s(t.event.date_start),1),e("h1",_,s(t.event.price),1)])]),_:1},8,["href"]))}};export{m as default};