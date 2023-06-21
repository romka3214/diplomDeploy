import{s as b,f as x,l as y,a as d,c as _,T as w,q as m,w as u,b as a,u as s,Z as v,t as V,h as c,d as r,i as B,e as f,n as C,j as $}from"./app-b2c061b3.js";import{_ as q}from"./GuestLayout-bd44bc5d.js";import{_ as p,a as g}from"./TextInput-ecd6abec.js";import{_ as k}from"./InputLabel-f1bd1f84.js";import{P as N}from"./PrimaryButton-bb4089c8.js";import"./ApplicationLogo-af70e648.js";import"./_plugin-vue_export-helper-c27b6911.js";const P=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=b({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>x((d(),_("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h),class:"rounded dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-neutral-800"},null,8,P)),[[y,n.value]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},j=["onSubmit"],D={class:"mt-4"},E={class:"block mt-4"},M={class:"flex items-center"},R=r("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Запомнить меня",-1),T={class:"flex items-center justify-end mt-4"},I={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=w({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,t)=>(d(),m(q,null,{default:u(()=>[a(s(v),{title:"Вход"}),l.status?(d(),_("div",U,V(l.status),1)):c("",!0),r("form",{onSubmit:$(i,["prevent"])},[r("div",null,[a(k,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",D,[a(k,{for:"password",value:"Пароль"}),a(p,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(g,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",E,[r("label",M,[a(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),R])]),r("div",T,[l.canResetPassword?(d(),m(s(B),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:u(()=>[f(" Забыли пароль? ")]),_:1},8,["href"])):c("",!0),a(N,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:u(()=>[f(" Войти ")]),_:1},8,["class","disabled"])])],40,j)]),_:1}))}};export{I as default};