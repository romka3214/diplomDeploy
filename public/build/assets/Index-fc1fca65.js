import{_ as h}from"./AdminLayout-042dbb2b.js";import{a as o,c as d,b as s,u as l,w as r,F as p,Z as x,d as e,i as c,e as i,g as _,t as a,h as m}from"./app-00c32152.js";import"./ApplicationLogo-9f0a9dd5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-ec92b5cf.js";const g=e("h2",{class:"font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight"},"Заведения",-1),f={class:"py-12"},y={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg"},k={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},v={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},w=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-neutral-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," ID "),e("th",{scope:"col",class:"px-6 py-3"}," Название "),e("th",{scope:"col",class:"px-6 py-3"}," Описание "),e("th",{scope:"col",class:"px-6 py-3"}," Адрес "),e("th",{scope:"col",class:"px-6 py-3"}," Владелец "),e("th",{scope:"col",class:"px-6 py-3"}," Действия ")])],-1),N={class:"bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600"},V={class:"px-6 py-4"},B={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},I={class:"px-6 py-4"},C={class:"px-6 py-4"},D={class:"px-6 py-4"},F={key:0},q={class:"flex items-center px-6 py-4 space-x-3"},j={__name:"Index",props:{establishments:{required:!0}},setup(u){return(n,E)=>(o(),d(p,null,[s(l(x),{title:"Все заведения"}),s(h,null,{header:r(()=>[g]),default:r(()=>[e("div",f,[e("div",y,[s(l(c),{href:n.route("admin.establishment.createIndex"),class:"inline-flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},{default:r(()=>[i("Создать заведение")]),_:1},8,["href"]),e("div",b,[e("div",k,[e("table",v,[w,e("tbody",null,[(o(!0),d(p,null,_(u.establishments,t=>(o(),d("tr",N,[e("td",V,a(t.id),1),e("th",B,a(t.name),1),e("td",I,a(t.description.substring(0,30))+"... ",1),e("td",C,a(t.address),1),e("td",D,[t.user?(o(),d("div",F,a(t.user.name),1)):m("",!0)]),e("td",q,[s(l(c),{href:n.route("admin.establishment.index",t.id),class:"font-medium text-blue-600 dark:text-blue-500 hover:underline"},{default:r(()=>[i("Изменить")]),_:2},1032,["href"]),s(l(c),{"preserve-scroll":"",method:"delete",href:n.route("admin.establishment.delete",t.id),class:"font-medium text-red-600 dark:text-red-500 hover:underline"},{default:r(()=>[i("Удалить")]),_:2},1032,["href"])])]))),256))])])])])])])]),_:1})],64))}};export{j as default};