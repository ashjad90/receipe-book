"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[707],{707:(e,i,n)=>{n.r(i),n.d(i,{default:()=>a});var s=n(43),r=n(216),c=n(579);const l=function(e){var i,n,s;const l=(0,r.Zp)();return(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"thumbnail",children:(0,c.jsx)("img",{alt:"receipe",src:e.url})}),(0,c.jsx)("div",{children:(0,c.jsx)("strong",{children:e.name})}),(0,c.jsx)("button",{onClick:()=>l("/receipe-form/".concat(e.id)),children:"View"}),(0,c.jsxs)("div",{children:["Prep time: ",null!==(i=e.prepTime)&&void 0!==i?i:0," min"]}),(0,c.jsxs)("div",{children:["Cook time: ",null!==(n=e.cookTime)&&void 0!==n?n:0," min"]}),(0,c.jsxs)("div",{children:["Serves: ",null!==(s=e.serves)&&void 0!==s?s:0]})]})};var d=n(154),t=n(102);const a=function(e){let{searchValue:i,currentCategory:n={id:null,name:"All"}}=e;const[r,a]=(0,s.useState)(t),o=n.name;return(0,s.useEffect)((()=>{(async()=>{try{var e;const i=await d.A.get("/receipes/"+(null!==(e=n.id)&&void 0!==e?e:""));a(i.data)}catch(i){console.error("Error occured",i),a(t.filter((e=>!n.receipes||n.receipes.includes(e.id))))}})()}),[n.id]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{children:o}),(0,c.jsx)("div",{className:"content",children:r.map((e=>!i||e.id.includes(i)||e.name.includes(i)?(0,c.jsx)(l,{...e},e.id):null))})]})}}}]);
//# sourceMappingURL=707.8d3055fe.chunk.js.map