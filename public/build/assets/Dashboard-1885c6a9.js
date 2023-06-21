import{k as S,T as v,m as I,o as s,f as o,a as n,u as r,w as u,F as m,Z as $,b as e,j,d as b,t as c,i as M,p as N,q as _,g as w,e as Z,s as q,n as D,O as k,v as O}from"./app-ba45fd33.js";import{_ as U}from"./AuthenticatedLayout-f7e034df.js";import{i as A}from"./index-76b33fd6.js";import{_ as E,a as H}from"./TextInput-c06ac62d.js";import{_ as G,a as J}from"./Modal-342f5728.js";import"./ApplicationLogo-92d52849.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-87073f04.js";const K=e("h2",{class:"font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight"},"Управление заведением",-1),Q={class:"py-12"},R={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},W={class:"bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg p-6"},X={class:"text-neutral-900 dark:text-neutral-100 mt-9 mb-1"},Y={class:"text-neutral-900 dark:text-neutral-100 mb-1"},ee={class:"text-neutral-900 dark:text-neutral-100 mb-1"},te=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Добавление тегов",-1),re=e("button",{id:"dropdownSearchButton","data-dropdown-toggle":"dropdownSearch",class:"mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-neutral-600 dark:hover:bg-neutral-700",type:"button"},[b("Добавить"),e("svg",{class:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})])],-1),se={id:"dropdownSearch",class:"hidden z-10 bg-white rounded-lg shadow w-60 dark:bg-neutral-700"},oe={class:"p-3"},ae=e("label",{for:"input-group-search",class:"sr-only"},"Поиск",-1),ne={class:"relative"},le=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{class:"w-5 h-5 text-gray-500 dark:text-gray-400","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),de={class:"h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdownSearchButton"},ie={class:"flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"},ue=["id","value"],ce=["for"],ge=e("div",{class:"text-2xl text-neutral-900 dark:text-neutral-100 mt-3 mb-3"}," Теги заведения: ",-1),he={key:0},me={class:"flex flex-wrap gap-2"},be={class:"inline-flex items-center rounded-md gap-2 px-2 py-1 text-lg font-medium text-white bg-neutral-700 ring-1 ring-inset ring-neutral-100/10"},fe=["onClick"],xe=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),pe=[xe],ve={key:1},_e=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"тегов нет",-1),we=[_e],ke=e("div",{class:"text-2xl text-neutral-900 dark:text-neutral-100 mt-3 mb-3"}," Фото заведения ",-1),ye={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"},Ce={class:"relative"},Se=["src"],Me=["onClick"],Te=e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Be=[Te],Le={class:"relative"},Pe=e("label",{for:"file_input",class:"cursor-pointer h-full w-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center flex justify-center items-center mr-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500"},[e("svg",{"aria-hidden":"true",class:"w-10 h-10",fill:"currentColor",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M12 4.5v15m7.5-7.5h-15","stroke-linecap":"round","stroke-linejoin":"round"})]),e("span",{class:"sr-only"},"Icon description")],-1),ze={key:0,class:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert"},Ve=e("svg",{"aria-hidden":"true",class:"flex-shrink-0 inline w-5 h-5 mr-3",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clip-rule":"evenodd"})],-1),Fe=e("span",{class:"sr-only"},"Info",-1),Ie={key:1,role:"status"},$e=e("svg",{"aria-hidden":"true",class:"inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),je=e("span",{class:"sr-only"},"Loading...",-1),Ne=[$e,je],Ze={class:"p-6"},qe=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Создание нового тега ",-1),De=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Название тега должно быть уникальным ",-1),Oe=["onSubmit"],Ue={class:"mt-6"},Ae={key:0,class:"text-sm text-green-600 dark:text-green-400"},Ee={class:"mt-6 flex justify-end"},He=["disabled"],et={__name:"Dashboard",props:{establishment:{required:!0},tags:{required:!0}},setup(a){const y=a,f=S(!1),l=v({name:""}),T=()=>{l.post(route("dashboard.createTag"),{preserveState:!0,preserveScroll:!0})},B=()=>{f.value=!0},C=()=>{f.value=!1};I(()=>{A()});const g=v({newPhoto:null});function L(d){g.newPhoto=d.target.files[0],g.post(route("dashboard.establishment.addPhoto"),{preserveState:!0,preserveScroll:!0})}function P(d){k.delete(route("dashboard.establishment.deletePhoto",d),{preserveState:!0,preserveScroll:!0})}const x=v({searchTags:""}),h=S([]),z=d=>{k.delete(route("dashboard.establishment.deleteTag",{estId:y.establishment.id,tagId:d}),{preserveState:!0,preserveScroll:!0})},V=()=>{k.post(route("dashboard.establishment.addTags"),{ids:h.value,estId:y.establishment.id},{preserveState:!0,preserveScroll:!0,onSuccess:()=>{h.value=[]}})},F=()=>{x.get(route("dashboard"),{preserveState:!0,preserveScroll:!0})};return(d,i)=>(s(),o(m,null,[n(r($),{title:"Панель управления"}),n(U,null,{header:u(()=>[K]),default:u(()=>[e("div",Q,[e("div",R,[e("div",W,[n(r(j),{href:d.route("dashboard.establishment.editIndex"),class:"focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},{default:u(()=>[b(" Изменить информацию о заведении ")]),_:1},8,["href"]),e("div",X," Название: "+c(a.establishment.name),1),e("div",Y," Описание: "+c(a.establishment.description),1),e("div",ee," Адресс: "+c(a.establishment.address),1),te,re,e("button",{onClick:B,type:"button",class:"text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 ml-2 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700 dark:border-gray-700"},"Создать новый тег"),e("div",se,[e("div",oe,[ae,e("div",ne,[le,M(e("input",{onInput:F,"onUpdate:modelValue":i[0]||(i[0]=t=>r(x).searchTags=t),type:"text",id:"input-group-search",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-neutral-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Поиск тегов"},null,544),[[N,r(x).searchTags]])])]),e("ul",de,[(s(!0),o(m,null,_(a.tags,t=>(s(),o("li",null,[e("div",ie,[M(e("input",{id:"checkbox-item-"+t.id,type:"checkbox",value:t.id,"onUpdate:modelValue":i[1]||(i[1]=p=>h.value=p),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"},null,8,ue),[[O,h.value]]),e("label",{for:"checkbox-item-"+t.id,class:"w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"},c(t.name),9,ce)])]))),256))]),e("a",{onClick:V,class:"flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-gray-600 dark:text-red-100 hover:underline"}," Добавить ")]),ge,a.establishment.tags.length!==0?(s(),o("div",he,[e("div",me,[(s(!0),o(m,null,_(a.establishment.tags,t=>(s(),o("span",be,[b(c(t.name)+" ",1),e("button",{onClick:p=>z(t.id),type:"button",class:"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"},pe,8,fe)]))),256))])])):(s(),o("div",ve,we)),ke,e("div",ye,[(s(!0),o(m,null,_(a.establishment.photos,t=>(s(),o("div",Ce,[e("img",{class:"object-cover h-64 w-full rounded-lg",src:"../storage/"+t.url,alt:""},null,8,Se),e("button",{onClick:p=>P(t.id),type:"button",class:"absolute top-1 end-1 text-white bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-transparent dark:hover:text-red-800","data-modal-hide":"defaultModal"},Be,8,Me)]))),256)),e("div",Le,[Pe,e("input",{ref:"newPhotoFile",onChange:L,hidden:"",id:"file_input",type:"file"},null,544)]),r(g).errors.newPhoto?(s(),o("div",ze,[Ve,Fe,e("div",null,c(r(g).errors.newPhoto),1)])):w("",!0),r(g).progress?(s(),o("div",Ie,Ne)):w("",!0)])])])]),n(G,{show:f.value,onClose:C},{default:u(()=>[e("div",Ze,[qe,De,e("form",{onSubmit:Z(T,["prevent"])},[e("div",Ue,[n(E,{modelValue:r(l).name,"onUpdate:modelValue":i[2]||(i[2]=t=>r(l).name=t),type:"text",class:"mt-1 block w-3/4",placeholder:"Название"},null,8,["modelValue"]),n(H,{message:r(l).errors.name,class:"mt-2"},null,8,["message"])]),n(q,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:u(()=>[r(l).recentlySuccessful?(s(),o("p",Ae,"Успешно создано")):w("",!0)]),_:1}),e("div",Ee,[n(J,{onClick:C},{default:u(()=>[b(" Отмена ")]),_:1}),e("button",{class:D(["ml-3 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 transition ease-in-out duration-150",{"opacity-25":r(l).processing}]),disabled:r(l).processing,type:"submit"}," Создать ",10,He)])],40,Oe)])]),_:1},8,["show"])]),_:1})],64))}};export{et as default};
