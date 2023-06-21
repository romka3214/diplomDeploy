import{o as s,f as r,b as e,k as C,h as x,K as y,x as A,n as g,g as i,t as h,e as w,a as o,u as $,Z as F,w as a,j as L,d as l,c as f,F as b,q as j,r as M,O as T}from"./app-ba45fd33.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as z,a as _,b as S,c}from"./ResponsiveNavLink-87073f04.js";import N from"./DeleteUserForm-e42d2106.js";import D from"./LogoutOtherBrowserSessionsForm-1c11fc27.js";import{S as k}from"./SectionBorder-d08c799b.js";import O from"./TwoFactorAuthenticationForm-b3bda422.js";import V from"./UpdatePasswordForm-16c48247.js";import q from"./UpdateProfileInformationForm-aa1eadb1.js";import"./DangerButton-beedddc0.js";import"./TextInput-c06ac62d.js";import"./InputLabel-0d12bda0.js";import"./Modal-342f5728.js";import"./DialogModal-75202db0.js";import"./PrimaryButton-121f6bf3.js";const I={},U={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),H=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),K=[E,H];function Z(p,n){return s(),r("svg",U,K)}const G=P(I,[["render",Z]]),J={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Q={class:"flex items-center justify-between flex-wrap"},R={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ne=[ae],ie={__name:"Banner",setup(p){const n=C(!0),d=x(()=>{var t;return((t=y().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),m=x(()=>{var t;return((t=y().props.jetstream.flash)==null?void 0:t.banner)||""});return A(m,async()=>{n.value=!0}),(t,v)=>(s(),r("div",null,[n.value&&m.value?(s(),r("div",{key:0,class:g({"bg-indigo-500":d.value=="success","bg-red-700":d.value=="danger"})},[e("div",J,[e("div",Q,[e("div",R,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":d.value=="success","bg-red-600":d.value=="danger"}])},[d.value=="success"?(s(),r("svg",W,Y)):i("",!0),d.value=="danger"?(s(),r("svg",ee,se)):i("",!0)],2),e("p",oe,h(m.value),1)]),e("div",re,[e("button",{type:"button",class:g(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":d.value=="success","hover:bg-red-600 focus:bg-red-600":d.value=="danger"}]),"aria-label":"Dismiss",onClick:v[0]||(v[0]=w(u=>n.value=!1,["prevent"]))},ne,2)])])])],2)):i("",!0)]))}},le={class:"min-h-screen bg-gray-100"},de={class:"bg-white border-b border-gray-100"},ue={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ce={class:"flex justify-between h-16"},he={class:"flex"},pe={class:"shrink-0 flex items-center"},me={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},_e={class:"hidden sm:flex sm:items-center sm:ml-6"},fe={class:"ml-3 relative"},ge={class:"inline-flex rounded-md"},ve={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},we=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),be={class:"w-60"},ke=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),xe=e("div",{class:"border-t border-gray-200"},null,-1),ye=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),$e=["onSubmit"],je={class:"flex items-center"},Me={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Se=[Te],Ce={class:"ml-3 relative"},Be={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ae=["src","alt"],Fe={key:1,class:"inline-flex rounded-md"},Le={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Pe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),ze=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ne=e("div",{class:"border-t border-gray-200"},null,-1),De=["onSubmit"],Oe={class:"-mr-2 flex items-center sm:hidden"},Ve={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},qe={class:"pt-2 pb-3 space-y-1"},Ie={class:"pt-4 pb-1 border-t border-gray-200"},Ue={class:"flex items-center px-4"},Ee={key:0,class:"shrink-0 mr-3"},He=["src","alt"],Ke={class:"font-medium text-base text-gray-800"},Ze={class:"font-medium text-sm text-gray-500"},Ge={class:"mt-3 space-y-1"},Je=["onSubmit"],Qe=e("div",{class:"border-t border-gray-200"},null,-1),Re=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),We=e("div",{class:"border-t border-gray-200"},null,-1),Xe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Ye=["onSubmit"],et={class:"flex items-center"},tt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},st=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ot=[st],rt={key:0,class:"bg-white shadow"},at={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},nt={__name:"AppLayout",props:{title:String},setup(p){const n=C(!1),d=t=>{T.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},m=()=>{T.post(route("logout"))};return(t,v)=>(s(),r("div",null,[o($(F),{title:p.title},null,8,["title"]),o(ie),e("div",le,[e("nav",de,[e("div",ue,[e("div",ce,[e("div",he,[e("div",pe,[o($(L),{href:t.route("dashboard")},{default:a(()=>[o(G,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",me,[o(z,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[l(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",_e,[e("div",fe,[t.$page.props.jetstream.hasTeamFeatures?(s(),f(S,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",ge,[e("button",ve,[l(h(t.$page.props.auth.user.current_team.name)+" ",1),we])])]),content:a(()=>[e("div",be,[t.$page.props.jetstream.hasTeamFeatures?(s(),r(b,{key:0},[ke,o(_,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[l(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),f(_,{key:0,href:t.route("teams.create")},{default:a(()=>[l(" Create New Team ")]),_:1},8,["href"])):i("",!0),xe,ye,(s(!0),r(b,null,j(t.$page.props.auth.user.all_teams,u=>(s(),r("form",{key:u.id,onSubmit:w(B=>d(u),["prevent"])},[o(_,{as:"button"},{default:a(()=>[e("div",je,[u.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Me,Se)):i("",!0),e("div",null,h(u.name),1)])]),_:2},1024)],40,$e))),128))],64)):i("",!0)])]),_:1})):i("",!0)]),e("div",Ce,[o(S,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",Be,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ae)])):(s(),r("span",Fe,[e("button",Le,[l(h(t.$page.props.auth.user.name)+" ",1),Pe])]))]),content:a(()=>[ze,o(_,{href:t.route("profile.show")},{default:a(()=>[l(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),f(_,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[l(" API Tokens ")]),_:1},8,["href"])):i("",!0),Ne,e("form",{onSubmit:w(m,["prevent"])},[o(_,{as:"button"},{default:a(()=>[l(" Log Out ")]),_:1})],40,De)]),_:1})])]),e("div",Oe,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:v[0]||(v[0]=u=>n.value=!n.value)},[(s(),r("svg",Ve,[e("path",{class:g({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:g({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:g([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",qe,[o(c,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[l(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ie,[e("div",Ue,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",Ee,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,He)])):i("",!0),e("div",null,[e("div",Ke,h(t.$page.props.auth.user.name),1),e("div",Ze,h(t.$page.props.auth.user.email),1)])]),e("div",Ge,[o(c,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[l(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),f(c,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[l(" API Tokens ")]),_:1},8,["href","active"])):i("",!0),e("form",{method:"POST",onSubmit:w(m,["prevent"])},[o(c,{as:"button"},{default:a(()=>[l(" Log Out ")]),_:1})],40,Je),t.$page.props.jetstream.hasTeamFeatures?(s(),r(b,{key:1},[Qe,Re,o(c,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[l(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),f(c,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[l(" Create New Team ")]),_:1},8,["href","active"])):i("",!0),We,Xe,(s(!0),r(b,null,j(t.$page.props.auth.user.all_teams,u=>(s(),r("form",{key:u.id,onSubmit:w(B=>d(u),["prevent"])},[o(c,{as:"button"},{default:a(()=>[e("div",et,[u.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",tt,ot)):i("",!0),e("div",null,h(u.name),1)])]),_:2},1024)],40,Ye))),128))],64)):i("",!0)])])],2)]),t.$slots.header?(s(),r("header",rt,[e("div",at,[M(t.$slots,"header")])])):i("",!0),e("main",null,[M(t.$slots,"default")])])]))}},it=e("h2",{class:"font-semibold text-xl text-neutral-800 leading-tight"}," Profile ",-1),lt={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},dt={key:0},ut={key:1},ct={key:2},Tt={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(p){return(n,d)=>(s(),f(nt,{title:"Profile"},{header:a(()=>[it]),default:a(()=>[e("div",null,[e("div",lt,[n.$page.props.jetstream.canUpdateProfileInformation?(s(),r("div",dt,[o(q,{user:n.$page.props.auth.user},null,8,["user"]),o(k)])):i("",!0),n.$page.props.jetstream.canUpdatePassword?(s(),r("div",ut,[o(V,{class:"mt-10 sm:mt-0"}),o(k)])):i("",!0),n.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),r("div",ct,[o(O,{"requires-confirmation":p.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),o(k)])):i("",!0),o(D,{sessions:p.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),n.$page.props.jetstream.hasAccountDeletionFeatures?(s(),r(b,{key:3},[o(k),o(N,{class:"mt-10 sm:mt-0"})],64)):i("",!0)])])]),_:1}))}};export{Tt as default};
