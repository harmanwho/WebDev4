(this.webpackJsonpinterapp=this.webpackJsonpinterapp||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(0),a=c.n(s),i=c(11),r=c.n(i),l=c(9);c(30);var j=function(e){var t=e.type,c=e.text,s="primary"===t?"btn btn-outline-primary ml-1":"btn btn-outline-success ml-1";return Object(n.jsx)("button",{class:s,type:"submit",children:c})},b=c(46),u={white:"#fff",black:"#000",catalineblue:"#05386B",lochinvar:"#379683",pastelgreen:"#5CDB95",algaegreen:"#8EE4AF",loafer:"#EDF5E1"};c(31);var o=function(e){var t=e.user,c={color:u.catalineblue};return Object(n.jsxs)("nav",{class:"navbar navbar-light bg-light shadow",children:[Object(n.jsx)("a",{class:"ml-2",href:"/home",style:c,children:Object(n.jsx)("h5",{class:"d-inline",children:"RentHouse"})}),Object(n.jsx)("a",{class:"ml-5",href:"/home",children:Object(n.jsx)(b.a,{color:u.catalineblue,size:40})}),Object(n.jsx)("div",{class:"float-right",children:t?Object(n.jsxs)("div",{children:["Welcome ",t,Object(n.jsx)("a",{href:"/logout",children:Object(n.jsx)(j,{type:"primary",href:"/logout",text:"Logout"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("a",{href:"/signup",children:Object(n.jsx)(j,{type:"success",text:"Signup"})}),Object(n.jsx)("a",{href:"/login",children:Object(n.jsx)(j,{type:"success",href:"/login",text:"Login"})})]})})]})},d=(c(17),c(22),c(35),c(36),c(13));c(37);var h=function(e){var t=e.images;return Object(n.jsx)(d.a,{class:"carousel-custom",children:t.map((function(e){return Object(n.jsxs)(d.a.Item,{children:[Object(n.jsx)("img",{className:"d-block carousel-img",src:e,alt:"First slide"}),Object(n.jsx)(d.a.Caption,{children:Object(n.jsxs)("p",{children:[t.indexOf(e)+1," / ",e.length]})})]})}))})};var x=function(e){var t=e.element;return Object(n.jsxs)("div",{class:"card shadow",children:[Object(n.jsx)("div",{class:"card-header",children:Object(n.jsx)("h4",{class:"m-0",children:"Header for each listing"})}),Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)(h,{images:t.images}),Object(n.jsx)("h5",{class:"card-title pt-3",children:"Special title treatment"}),Object(n.jsx)("p",{class:"card-text",children:"With supporting text below as a natural lead-in to additional content."})]})]})},O=c(12),p=c.n(O);function m(e){var t=e.itemsCount,c=e.pageSize,a=e.onPageChange,i=e.currentPage,r=Math.ceil(t/c),j=Object(s.useState)(p.a.range(1,r+1)),b=Object(l.a)(j,1)[0];return r<=1?null:Object(n.jsx)("nav",{"aria-label":"Page Navigation",expand:"xs",children:Object(n.jsxs)("ul",{class:"pagination",children:[Object(n.jsx)("li",{class:"page-item",children:Object(n.jsxs)("a",{class:"page-link",onClick:function(){a(i-1)},"aria-label":"Previous",children:[Object(n.jsx)("span",{"aria-hidden":"true",children:"\xab"}),Object(n.jsx)("span",{class:"sr-only",children:"Previous"})]})}),b.map((function(e,t){return Object(n.jsx)("li",{class:"page-item",tabIndex:0,children:Object(n.jsx)("a",{class:"page-link",onClick:function(){a(e)},children:e})},e)})),Object(n.jsx)("li",{class:"page-item",children:Object(n.jsxs)("a",{class:"page-link",onClick:function(){a(i-1)},"aria-label":"Next",children:[Object(n.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),Object(n.jsx)("span",{class:"sr-only",children:"Next"})]})})]})})}var g=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=(t[1],Object(s.useState)(4)),i=Object(l.a)(a,1)[0],r=Object(s.useState)(1),j=Object(l.a)(r,2),b=j[0],u=j[1],o=Object(s.useState)(function(e,t,c){var n=(t-1)*c;return p()(e).slice(n).take(c).value()}(c,b,i)),d=Object(l.a)(o,2),h=d[0];return d[1],Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{class:"container listings p-0 mt-4",children:[Object(n.jsx)("h1",{class:"main-heading text-center pb-2",children:"Find Your Perfect Home"}),h.map((function(e){return Object(n.jsx)("div",{class:"col-6 p-2 d-inline-block",children:Object(n.jsx)(x,{element:e})})})),Object(n.jsx)(m,{itemsCount:c.length,pageSize:i,onPageChange:function(e){u(e)},currentPage:b})]})})},f=(c(39),c(40),c(23)),v=c(4);var y=function(){return Object(n.jsxs)("form",{children:[Object(n.jsxs)("label",{children:["Email:",Object(n.jsx)("input",{type:"text",name:"email"})]}),Object(n.jsxs)("label",{children:["Username:",Object(n.jsx)("input",{type:"text",name:"username"})]}),Object(n.jsxs)("label",{children:["Password:",Object(n.jsx)("input",{type:"text",name:"password"})]}),Object(n.jsx)("button",{type:"submit",value:"Submit",children:"Sign Up"})]})};var S=function(){return Object(n.jsxs)("form",{action:"login",method:"POST",children:[Object(n.jsxs)("label",{children:["Username:",Object(n.jsx)("input",{type:"text",name:"username"})]}),Object(n.jsxs)("label",{children:["Password:",Object(n.jsx)("input",{type:"text",name:"password"})]}),Object(n.jsx)("button",{type:"submit",value:"Submit",children:"Log In"})]})};function k(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){fetch("/getUser").then((function(e){return e.json()})).then((function(e){e.username&&a(e.username)}))}),[]),Object(n.jsxs)("div",{className:"mainDiv",children:[Object(n.jsx)(o,{user:c}),Object(n.jsx)(f.a,{children:Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.a,{path:"/signup",children:Object(n.jsx)(y,{})}),Object(n.jsx)(v.a,{path:"/login",children:Object(n.jsx)(S,{})}),Object(n.jsx)(v.a,{path:"/",children:Object(n.jsx)(g,{})})]})})]})}r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.4f58005d.chunk.js.map