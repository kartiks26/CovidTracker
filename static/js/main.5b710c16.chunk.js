(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),c=a(28),n=a.n(c),o=(a(73),a(3)),r=(a(74),a(68)),j=a(0);var l=function(e){var t=e.ActiveCases,a=e.Deaths,i=e.Confirmed,s={labels:["Active Cases","Confirmed","Deaths"],datasets:[{label:e.state,data:[t,i,a]}],borderWidth:1};return Object(j.jsx)(r.a,{id:"myChart",data:s,options:{responsive:!0,maintainAspectRatio:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(0,255,0,0.1)","rgba(0, 0, 0, 1)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(0,0,0, 1)"],borderWidth:1}})},b=a(185),d=a(187),h=a(188);function O(e){var t=e.Lat,a=e.Lan;return e.ready?Object(j.jsxs)(b.a,{center:[t,a],zoom:4,children:[Object(j.jsx)(d.a,{center:[t,a],color:"red",fillColor:"red",radius:1e5}),Object(j.jsx)(h.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]}):Object(j.jsx)("h2",{className:"leaflet-container",children:"Loading..."})}var p=[{image:"https://i.ibb.co/TMMsgdW/1.png",title:"Covid 19"},{image:"https://i.ibb.co/27bCjb4/2.png",title:"Remember These"},{image:"https://i.ibb.co/z7xN84S/3.png",title:"Preventive Measures To Practice "},{image:"https://i.ibb.co/XjDdhJd/4.png",title:"How To Properly Disinfect Surface"},{image:"https://i.ibb.co/7yxr5Q7/5.png",title:"Disinfection Methods"},{image:"https://i.ibb.co/XLVDwNG/6.png",title:"Initial Symptoms"},{image:"https://i.ibb.co/Yk4Wy0K/7.png",title:"Testing Methods"},{image:"https://i.ibb.co/6Y3SFWp/8.png",title:"Testing FAQs"},{image:"https://i.ibb.co/Kbb28CY/9.png",title:"Next Steps"},{image:"https://i.ibb.co/XzM1FM2/10.png",title:"Seeking Medical Attention"},{image:"https://i.ibb.co/87RyZ8q/11.png",title:"Contact Us"}],u=(a(182),a.p+"static/media/noun_Arrow_1807380.18be108e.svg"),x=a.p+"static/media/noun_Arrow_704402.ad61073b.svg";var v=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],c=p.length;if(!Array.isArray(p)||c<=0)return null;var n=function(){s(a===c-1?0:a+1)},r=function(){s(0===a?c-1:a-1)};return Object(j.jsx)("section",{className:"slider",children:p.map((function(e,t){return Object(j.jsx)("div",{className:t===a?"slide active":"slide",children:t===a&&Object(j.jsxs)("div",{className:"slide-content",children:[Object(j.jsx)("img",{src:x,className:"right-arrow",alt:"left",onClick:r}),Object(j.jsx)("img",{src:e.image,alt:"Images",className:"Image"}),Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)("img",{alt:"right",src:u,className:"left-arrow",onClick:n})]})},t)}))})},m=a.p+"static/media/CovidTrackerLogo.fc3010c4.svg";var g=function(){var e=Object(i.useState)("2021-06-25"),t=Object(o.a)(e,2),a=t[0],s=t[1];console.log(a);var c=Object(i.useState)([]),n=Object(o.a)(c,2),r=n[0],b=n[1],d=Object(i.useState)("Maharashtra"),h=Object(o.a)(d,2),p=h[0],u=h[1],x=Object(i.useState)({}),g=Object(o.a)(x,2),f=g[0],C=g[1],N=Object(i.useState)(!1),k=Object(o.a)(N,2),A=k[0],y=k[1];return Object(i.useEffect)((function(){fetch("https://api.covid19api.com/live/country/india").then((function(e){return e.json()})).then((function(e){b(e)})),function(){var e=new Date,t=e.getUTCDate(),a=e.getUTCMonth()+1,i=e.getUTCFullYear();t<10&&(t="0"+t),a<10&&(a="0"+a),s(i+"-"+a+"-"+t)}()}),[]),console.log(r),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"mainPage",children:[Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("img",{src:m,alt:"logo"}),Object(j.jsx)("h1",{children:"Covid Tracker"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:" Home "}),Object(j.jsx)("li",{children:" Help "}),Object(j.jsx)("li",{children:" About "})]})]}),Object(j.jsxs)("div",{className:"SearchBar",children:[Object(j.jsx)("input",{list:"states",type:"text",placeholder:p,onChange:function(e){u(e.target.value)}}),Object(j.jsxs)("datalist",{id:"states",className:"dropdown",children:[Object(j.jsx)("option",{value:"Maharashtra"}),Object(j.jsx)("option",{value:"Delhi"}),Object(j.jsx)("option",{value:"Karnataka"}),Object(j.jsx)("option",{value:"Tamil Nadu"}),Object(j.jsx)("option",{value:"Gujarat"}),Object(j.jsx)("option",{value:"Madhya Pradesh"}),Object(j.jsx)("option",{value:"Rajasthan"}),Object(j.jsx)("option",{value:"Uttar Pradesh"}),Object(j.jsx)("option",{value:"West Bengal"}),Object(j.jsx)("option",{value:"Bihar"}),Object(j.jsx)("option",{value:"Odisha"}),Object(j.jsx)("option",{value:"Jharkhand"}),Object(j.jsx)("option",{value:"Andhra Pradesh"}),Object(j.jsx)("option",{value:"Telangana"}),Object(j.jsx)("option",{value:"Kerala"}),Object(j.jsx)("option",{value:"Assam"}),Object(j.jsx)("option",{value:"Jammu and Kashmir"}),Object(j.jsx)("option",{value:"Chandigarh"}),Object(j.jsx)("option",{value:"Punjab"}),Object(j.jsx)("option",{value:"Haryana"}),Object(j.jsx)("option",{value:"Uttarakhand"}),Object(j.jsx)("option",{value:"Himachal Pradesh"}),Object(j.jsx)("option",{value:"Goa"}),Object(j.jsx)("option",{value:"Manipur"}),Object(j.jsx)("option",{value:"Tripura"}),Object(j.jsx)("option",{value:"Meghalaya"}),Object(j.jsx)("option",{value:"Nagaland"}),Object(j.jsx)("option",{value:"Arunachal Pradesh"}),Object(j.jsx)("option",{value:"Mizoram"}),Object(j.jsx)("option",{value:"Sikkim"}),Object(j.jsx)("option",{value:"Chhattisgarh"}),Object(j.jsx)("option",{value:"Andaman and Nicobar Islands"}),Object(j.jsx)("option",{value:"Dadra and Nagar Haveli"}),Object(j.jsx)("option",{value:"Daman and Diu"}),Object(j.jsx)("option",{value:"Lakshadweep"}),Object(j.jsx)("option",{value:"Puducherry"})]}),Object(j.jsx)("button",{onClick:function(){console.log("clicked",p),function(){for(var e=2800;e<r.length;e++)if(r[e].Province===p&&r[e].Date.includes(a)){C(r[e]),y(!0);break}console.log(f)}()},children:"GET"})]}),Object(j.jsxs)("div",{className:"indicators",children:[Object(j.jsxs)("div",{className:"indicator",children:[Object(j.jsx)("h6",{children:"State"}),Object(j.jsx)("h6",{children:p})]}),Object(j.jsxs)("div",{className:"indicator",children:[Object(j.jsx)("h6",{children:"Active Cases"}),Object(j.jsx)("h6",{children:f.Active})]}),Object(j.jsxs)("div",{className:"indicator",children:[Object(j.jsx)("h6",{children:"Deaths"}),Object(j.jsx)("h6",{children:f.Deaths})]}),Object(j.jsxs)("div",{className:"indicator",children:[Object(j.jsx)("h6",{children:"Confirmed"}),Object(j.jsx)("h6",{children:f.Confirmed})]})]})]}),Object(j.jsxs)("div",{classname:"chartAndGraph",children:[Object(j.jsx)("div",{className:"okk",children:Object(j.jsxs)("div",{className:"PieChart",children:[Object(j.jsx)("h1",{children:"Graphical Representation"}),Object(j.jsx)(l,{ActiveCases:f.Active,Deaths:f.Deaths,Confirmed:f.Confirmed,state:p})]})}),Object(j.jsx)("div",{className:"okk2",children:Object(j.jsxs)("div",{className:"mapContainer",children:[Object(j.jsx)("h1",{children:"Map Representation"}),Object(j.jsx)(O,{Lat:f.Lat,Lan:f.Lon,ready:A})]})})]}),Object(j.jsx)("div",{className:"Carousel",children:Object(j.jsx)(v,{})})]})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},73:function(e,t,a){},74:function(e,t,a){}},[[183,1,2]]]);
//# sourceMappingURL=main.5b710c16.chunk.js.map