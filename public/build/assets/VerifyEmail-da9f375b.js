import{T as m,s as f,a,q as g,w as s,b as o,u as e,Z as p,c as y,h,d as i,e as r,n as _,i as k,j as x}from"./app-ceda0657.js";import{_ as v}from"./GuestLayout-1d393aee.js";import{P as b}from"./PrimaryButton-69555967.js";import"./ApplicationLogo-7fdf57fa.js";import"./_plugin-vue_export-helper-c27b6911.js";const w=i("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},P={__name:"VerifyEmail",props:{status:{type:String}},setup(n){const d=n,t=m({}),c=()=>{t.post(route("verification.send"))},u=f(()=>d.status==="verification-link-sent");return(l,N)=>(a(),g(v,null,{default:s(()=>[o(e(p),{title:"Email Verification"}),w,u.value?(a(),y("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),i("form",{onSubmit:x(c,["prevent"])},[i("div",E,[o(b,{class:_({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(k),{href:l.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:s(()=>[r("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{P as default};
