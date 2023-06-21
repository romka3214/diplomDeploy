import{K as x,T as _,a as l,c as n,d as s,b as a,u as e,e as m,w as u,f as v,y as h,h as f,k,j as V,i as b}from"./app-ceda0657.js";import{_ as p,a as g}from"./TextInput-16ce0c89.js";import{_ as y}from"./InputLabel-ab37d094.js";import{P as w}from"./PrimaryButton-69555967.js";import"./_plugin-vue_export-helper-c27b6911.js";const B=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Информация профиля"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Изменение имени и пароля аккаунта. ")],-1),E={key:0},N={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},S={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},$={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},A={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const i=x().props.auth.user,t=_({name:i.name,email:i.email});return(c,r)=>(l(),n("section",null,[B,s("form",{onSubmit:r[2]||(r[2]=V(o=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(y,{for:"name",value:"Имя"}),a(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":r[0]||(r[0]=o=>e(t).name=o),required:"",autofocus:"",autocomplete:"Имя"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(y,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":r[1]||(r[1]=o=>e(t).email=o),required:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(i).email_verified_at===null?(l(),n("div",E,[s("p",N,[m(" Your email address is unverified. "),a(e(b),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:u(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),v(s("div",S," A new verification link has been sent to your email address. ",512),[[h,d.status==="verification-link-sent"]])])):f("",!0),s("div",$,[a(w,{disabled:e(t).processing},{default:u(()=>[m("Сохранить")]),_:1},8,["disabled"]),a(k,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:u(()=>[e(t).recentlySuccessful?(l(),n("p",C,"Успешно.")):f("",!0)]),_:1})])],32)]))}};export{A as default};