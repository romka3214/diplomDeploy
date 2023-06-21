import{k as v,T as y,m as _,o as i,f as m,b as e,a as t,w as s,u as r,j as d,d as n,g,r as w,e as V,n as $,F as C}from"./app-ba45fd33.js";import{A as p}from"./ApplicationLogo-92d52849.js";import{i as M}from"./index-76b33fd6.js";import{_ as f,a as b}from"./TextInput-c06ac62d.js";import{a as j,_ as z}from"./Modal-342f5728.js";const S={class:"sticky top-0 z-30 bg-neutral-900 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90"},U={class:"container flex flex-wrap items-center justify-between mx-auto p-4 md:p-2"},B=e("button",{"data-collapse-toggle":"navbar-default",type:"button",class:"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-default","aria-expanded":"false"},[e("span",{class:"sr-only"},"Open main menu"),e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})])],-1),F={class:"hidden w-full md:block md:w-auto",id:"navbar-default"},N={class:"font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-transparent dark:border-neutral-700"},H={key:0},L={key:1},q={key:2},A={class:"relative sm:flex sm:justify-center min-h-screen bg-white dark:bg-neutral-800 bg-center selection:bg-red-500 selection:text-white"},D={class:"container p-4"},E={class:"p-4 bg-white md:p-8 lg:p-10 dark:bg-neutral-900"},R={class:"mx-auto max-w-screen-xl text-center"},T=e("p",{class:"my-6 text-gray-500 dark:text-gray-400"},"Все события и заведения Уфы как на ладони",-1),K={class:"block text-sm text-gray-500 sm:text-center dark:text-gray-400"},O={class:"p-6"},G=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Для добавления своего заведения на сайт заполните форму ",-1),I=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Ваша заявка будет рассмотрена администрацией сайта ",-1),J=["onSubmit"],P={class:"mt-6"},Q={class:"mt-6"},W={class:"mt-6 flex justify-end"},X=["disabled"],oe={__name:"MainLayout",setup(Y){const c=v(!1),o=y({name:"",text:""}),x=()=>{c.value=!0},k=()=>{o.post(route("profile.createRequest"),{preserveScroll:!0,onSuccess:()=>u(),onFinish:()=>o.reset()})},u=()=>{c.value=!1,o.reset()};return _(()=>{M()}),(a,l)=>(i(),m(C,null,[e("nav",S,[e("div",U,[t(r(d),{href:a.route("home"),class:"flex items-center"},{default:s(()=>[t(p,{class:"fill-current h-10 md:h-14 mr-3 text-black-500 dark:fill-white"})]),_:1},8,["href"]),B,e("div",F,[e("ul",N,[e("li",null,[t(r(d),{href:a.route("establishments"),class:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:s(()=>[n("Заведения")]),_:1},8,["href"])]),e("li",null,[t(r(d),{href:a.route("recommendations"),class:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:s(()=>[n("Рекомендации")]),_:1},8,["href"])]),a.$page.props.auth.user.role===2?(i(),m("li",H,[t(r(d),{href:a.route("dashboard"),class:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:s(()=>[n("Панель управления")]),_:1},8,["href"])])):g("",!0),a.$page.props.auth.user.role===0?(i(),m("li",L,[t(r(d),{href:a.route("profileLK.show"),class:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:s(()=>[n("Профиль")]),_:1},8,["href"])])):g("",!0),a.$page.props.auth.user.role===1?(i(),m("li",q,[t(r(d),{href:a.route("dashboard"),class:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"},{default:s(()=>[n("Управление заведением")]),_:1},8,["href"])])):g("",!0)])])])]),e("div",A,[e("div",D,[w(a.$slots,"default")])]),e("footer",E,[e("div",R,[t(r(d),{href:a.route("home"),class:"flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"},{default:s(()=>[t(p,{class:"fill-current h-10 md:h-14 mr-3 text-black-500 dark:fill-white"})]),_:1},8,["href"]),T,e("button",{onClick:x,type:"button",class:"mb-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-neutral-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"},"Добавить заведение"),e("span",K,[n("2023 "),t(r(d),{href:a.route("home"),class:"hover:underline"},{default:s(()=>[n("Enter.Ufa")]),_:1},8,["href"])])])]),t(z,{show:c.value,onClose:u},{default:s(()=>[e("div",O,[G,I,e("form",{onSubmit:V(k,["prevent"])},[e("div",P,[t(f,{modelValue:r(o).name,"onUpdate:modelValue":l[0]||(l[0]=h=>r(o).name=h),type:"text",class:"mt-1 block w-3/4",placeholder:"Название заведения"},null,8,["modelValue"]),t(b,{message:r(o).errors.name,class:"mt-2"},null,8,["message"])]),e("div",Q,[t(f,{modelValue:r(o).text,"onUpdate:modelValue":l[1]||(l[1]=h=>r(o).text=h),type:"text",class:"mt-1 block w-3/4",placeholder:"Текст заявки"},null,8,["modelValue"]),t(b,{message:r(o).errors.text,class:"mt-2"},null,8,["message"])]),e("div",W,[t(j,{onClick:u},{default:s(()=>[n(" Отмена ")]),_:1}),e("button",{class:$(["ml-3 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 transition ease-in-out duration-150",{"opacity-25":r(o).processing}]),disabled:r(o).processing,type:"submit"}," Отправить ",10,X)])],40,J)])]),_:1},8,["show"])],64))}};export{oe as _};
