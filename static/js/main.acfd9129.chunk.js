(this["webpackJsonpsmartcanteen-admin"]=this["webpackJsonpsmartcanteen-admin"]||[]).push([[0],{478:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),s=n.n(c),i=n(27),o=n(539),l=n(481),j=n(54),d=n(506),u=n(39),b=n(35),x=n(7),h=n.n(x),p=n(18),O=n(23),m=n(15),f=n(3),v=n(542),g=n(545),w=n(507),y=n(508),k=n(546),C=n(547),S=n(509),N=localStorage.getItem("token_admin")?localStorage.getItem("token_admin"):"",_=""!==N,W=localStorage.getItem("detail_admin")?JSON.parse(localStorage.getItem("detail_admin")):null,z=Object(i.b)({key:"authState",default:{token:N,isAuthenticated:_}}),D=Object(i.b)({key:"authProfileData",default:W}),F=(Object(i.c)({key:"handleLogin",get:function(){return console.log("object")},set:function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(function(e){e.set;console.log("payload",t)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),n(265)),H=n.n(F),I={"Content-Type":"application/x-www-form-urlencoded","Access-Control-Allow-Origin":"".concat('"https://smartcanteen.aliven.my.id/api"')},A=H.a.create({baseURL:'"https://smartcanteen.aliven.my.id/api"',headers:I}),R=function(){var e=Object(p.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URLSearchParams).append("email",t.email),n.append("password",t.password),e.prev=3,e.next=6,A.post("/admin/login",n).then((function(e){var t;return localStorage.setItem("token_admin",null===(t=e.data)||void 0===t?void 0:t.data.token),e})).catch((function(e){return e.response}));case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return","Failed");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token_admin");case 2:return e.next=4,localStorage.removeItem("detail_admin");case 4:return e.abrupt("return",{success:!0,message:"Berhasil Logout"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/admin",{headers:{Authorization:t}}).then((function(e){return localStorage.setItem("detail_admin",JSON.stringify(e.data.data)),e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/penjual/all",{headers:{Authorization:t}}).then((function(e){return e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/penjual/"+n,{headers:{Authorization:t}}).then((function(e){return e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(h.a.mark((function e(t,n){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("payload",n),(a=new URLSearchParams).append("first_name",n.firstName),a.append("last_name",n.lastName),a.append("email",n.email),a.append("password",n.password),a.append("no_telp",n.phoneNumber),e.prev=7,e.next=10,A({headers:{Authorization:t},method:"post",url:"/penjual/register",data:a});case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(7),e.abrupt("return","Failed");case 16:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/makanan?id_warung="+t,{}).then((function(e){return e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/warung/all",{}).then((function(e){return e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/warung/"+t,{}).then((function(e){return e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.get("/order/statistikAdmin").then((function(e){return e})).catch((function(e){return e.response}));case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return","Failed");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),G=n.p+"static/media/SmartCanteenLogo.656e3a43.svg",X=n(1),q="25%",Q="80%",V=function(){var e=Object(v.a)(),t=Object(b.g)(),n=Object(i.e)(z).isAuthenticated;Object(a.useEffect)((function(){n&&t.push("/")}),[]);var r=Object(a.useState)({email:"",password:""}),c=Object(f.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(!1),j=Object(f.a)(l,2),u=j[0],x=j[1],N=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(O.a)({},n,a))}))},_=Object(i.d)(function(){var n=Object(p.a)(h.a.mark((function n(a){var r,c,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.set,x(!0),n.next=4,R(s);case 4:c=n.sent,i=c.data,console.log("data",i),i.success?(r(z,Object(m.a)(Object(m.a)({},z),{},{token:null===i||void 0===i?void 0:i.data.token,isAuthenticated:!0})),t.push("/")):e({title:i.message,status:"error",duration:9e3,isClosable:!0}),x(!1);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return Object(X.jsxs)(d.a,{className:"login-page-wrapper",d:"flex",flexDir:"column",minW:"100%",minH:"100vh",justifyContent:"center",alignItems:"center",children:[Object(X.jsxs)(d.a,{className:"login-box",p:8,mb:3,bg:"white",minW:[Q,Q,q],maxW:q,border:"1px solid",borderColor:"borderColor.500",borderTop:"5px solid",borderTopColor:"primary.500",children:[Object(X.jsx)(d.a,{mb:10,d:"flex",justifyContent:"center",alignItems:"center",children:Object(X.jsx)(g.a,{src:G,boxSize:"50%"})}),Object(X.jsxs)(d.a,{mb:4,children:[Object(X.jsx)(w.a,{for:"email",children:"Email Address"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"text",name:"email",borderRadius:"0",onChange:N})})]}),Object(X.jsxs)(d.a,{mb:8,children:[Object(X.jsx)(w.a,{for:"password",children:"Password"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"password",name:"password",borderRadius:"0",onChange:N})})]}),Object(X.jsx)(d.a,{mb:1,children:Object(X.jsx)(C.a,{bgColor:"primary.500",color:"white",borderRadius:"0",w:"100%",onClick:_,isLoading:u,children:"Login"})})]}),Object(X.jsxs)(d.a,{className:"login-box",p:4,bg:"white",minW:[Q,Q,q],maxW:q,border:"1px solid",borderColor:"borderColor.500",textAlign:"center",children:["Forgot Password? ",Object(X.jsx)(S.a,{as:"u",children:Object(X.jsx)("a",{href:"#",children:"Contact Developer"})})]})]})},Y=n(175),Z=function(e){var t=e.component,n=Object(Y.a)(e,["component"]),a=Object(i.e)(z);return Object(X.jsx)(b.b,Object(m.a)(Object(m.a)({},n),{},{render:function(e){return(null===a||void 0===a?void 0:a.isAuthenticated)?Object(X.jsx)(t,Object(m.a)({},e)):Object(X.jsx)(b.a,{to:"/login"})}}))},$=n(549),ee=n(76),te=[{label:"home",uri:"/"},{label:"seller",uri:"/seller"},{label:"tenant",uri:"/tenant"}],ne=function(){var e=Object(b.h)().pathname;return Object(X.jsx)($.a,{variant:"alwaysOpen",isOpen:!0,placement:"left",motionPreset:"none",autoFocus:!1,blockScrollOnMount:!1,closeOnOverlayClick:!1,trapFocus:!1,useInert:!1,children:Object(X.jsxs)($.b,{children:[Object(X.jsx)(ee.e,{mb:12,children:Object(X.jsx)(d.a,{d:"flex",justifyContent:"center",alignItems:"center",children:Object(X.jsx)(g.a,{src:G,boxSize:"85%"})})}),Object(X.jsxs)(ee.b,{children:[Object(X.jsx)(u.b,{to:"/profile",children:Object(X.jsx)(d.a,{mb:5,children:Object(X.jsx)(ce,{})})}),te.map((function(t,n){return Object(X.jsx)(u.b,{to:t.uri,children:Object(X.jsx)(C.a,{colorScheme:"primary",mb:5,variant:e===t.uri?"solid":"ghost",width:"100%",children:Object(X.jsx)(S.a,{w:"100%",textAlign:"left",textTransform:"capitalize",children:t.label})})},n)}))]}),Object(X.jsx)(ee.d,{children:Object(X.jsx)(d.a,{children:Object(X.jsx)(S.a,{fontSize:"sm",children:"\xa9 SmartCanteen 2021 - All Rights Reserved."})})})]})})},ae=function(e){var t=e.children;return Object(X.jsx)(d.a,{marginLeft:"320px",p:5,px:8,children:t})},re=n.p+"static/media/ProfileAvatar.b38ffd49.svg",ce=function(){var e=Object(a.useState)({firstName:"",email:""}),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(i.e)(z).token,s=Object(i.e)(D);return Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(c);case 2:t=e.sent,r(Object(m.a)(Object(m.a)({},n),{},{firstName:null===t||void 0===t?void 0:t.data.data.first_name,email:null===t||void 0===t?void 0:t.data.data.email}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("lastProfileData",s),r(Object(m.a)(Object(m.a)({},n),{},{firstName:null===s||void 0===s?void 0:s.first_name,email:null===s||void 0===s?void 0:s.email}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null===s?e():t()}),[]),Object(X.jsxs)(d.a,{p:4,bgColor:"primary.500",borderRadius:8,d:"inline-flex",children:[Object(X.jsx)(g.a,{src:re,boxSize:"25%",mr:3}),Object(X.jsxs)(d.a,{py:1,color:"white",children:[Object(X.jsxs)(d.a,{d:"inline-flex",alignItems:"center",children:[Object(X.jsx)(S.a,{mr:1,children:"Hi,"}),Object(X.jsx)(S.a,{fontSize:"xl",as:"b",textTransform:"capitalize",children:n.firstName})]}),Object(X.jsx)(S.a,{fontSize:"sm",children:n.email})]})]})},se=n(512),ie=function(e){var t=e.breadcrumbData;return Object(X.jsx)(se.a,{children:null===t||void 0===t?void 0:t.map((function(e,n){return Object(X.jsx)(se.b,{children:Object(X.jsx)(u.b,{to:e.uri,children:Object(X.jsx)(S.a,{textTransform:"capitalize",fontWeight:n===t.length-1?"bold":"normal",children:e.label})})},n)}))})},oe=n(541),le=n(201),je=n(514),de=n(515),ue=function(){var e=Object(b.g)(),t=Object(v.a)(),n=Object(i.d)(function(){var n=Object(p.a)(h.a.mark((function n(a){var r,c,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.set,n.next=3,T();case 3:c=n.sent,s=c.message,c.success&&(t({title:s,status:"success",duration:9e3,isClosable:!0}),r(z,Object(m.a)(Object(m.a)({},z),{},{token:"",isAuthenticated:!1})),e.push("/login"));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return Object(X.jsxs)(oe.a,{children:[Object(X.jsx)(oe.b,{as:C.a,rightIcon:Object(X.jsx)(je.a,{}),bgColor:"transparent",children:Object(X.jsxs)(d.a,{d:"flex",alignItems:"center",justifyContent:"center",children:[Object(X.jsx)(le.a,{as:de.a,mr:1}),Object(X.jsx)(S.a,{children:"Settings"})]})}),Object(X.jsx)(oe.d,{children:Object(X.jsx)(oe.c,{children:Object(X.jsx)(C.a,{isFullWidth:!0,variant:"ghost",onClick:n,children:"Logout"})})})]})},be=n(516),xe=n(548),he=function(e){e.background;var t=e.description,n=e.value,a=e.loading;return Object(X.jsxs)(d.a,Object(m.a)(Object(m.a)({},e),{},{className:"stats-card",minW:"20%",minH:"120px",display:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",p:4,borderRadius:8,color:"white",children:[!a&&Object(X.jsx)(be.a,{mb:"2",size:"2xl",children:n}),a&&Object(X.jsx)(xe.a,{}),Object(X.jsx)(S.a,{textTransform:"capitalize",children:t})]}))},pe=n(550),Oe=function(e){var t=e.children;return Object(X.jsx)(r.a.Fragment,{children:Object(X.jsx)(pe.a,{columns:{sm:1,md:2,lg:4},spacing:5,children:t})})},me=n.p+"static/media/morning-bg.ef808022.svg",fe=n.p+"static/media/night-bg.d394270a.svg",ve=function(){var e=new Date,t=Object(i.e)(D),n=function(e){return e.getHours()<12?"morning":e.getHours()<18?"afternoon":"night"},r=Object(a.useState)({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}),c=Object(f.a)(r,2),s=c[0],o=c[1];Object(a.useEffect)((function(){setInterval((function(){var e=new Date;o(Object(m.a)(Object(m.a)({},s),{},{hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}))}),1e3),console.log("kboom")}),[]);var l="",j="",u=null;switch(n(e)){case"night":"#F39C12",l="#FFF",j="Have a Nice Dream",u=fe;break;case"morning":case"afternoon":"#182C61",l="#222445",j="Have a Nice Day",u=me;break;default:"#000",l="#000"}if(t)return Object(X.jsxs)(d.a,{d:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",p:4,borderRadius:8,bgImage:"url(".concat(u,")"),bgSize:"cover",minH:"250px",bgPos:"bottom",bgRepeat:"no-repeat",children:[Object(X.jsx)(d.a,{mb:"-3px",children:Object(X.jsxs)(be.a,{fontSize:"100px",textColor:"night"===n(e)?"#F39C12":"#182C61",children:[(s.hours<10?"0":"")+s.hours,":",(s.minutes<10?"0":"")+s.minutes]})}),Object(X.jsxs)(d.a,{textAlign:"center",children:[Object(X.jsxs)(S.a,{fontSize:"40px",fontWeight:"bold",textColor:l,textTransform:"capitalize",children:["Good ",n(e),", ",(null===t||void 0===t?void 0:t.first_name)+" "+(null===t||void 0===t?void 0:t.last_name)]}),Object(X.jsx)(S.a,{fontSize:"20px",textColor:l,textTransform:"capitalize",children:j})]})]})},ge=function(e){var t=e.children;return Object(X.jsx)(d.a,{className:"top-navigation-wrapper",bgColor:"white",shadow:"sm",children:Object(X.jsx)(ae,{children:Object(X.jsxs)(d.a,{d:"flex",alignItems:"center",justifyContent:"space-between",children:[t,Object(X.jsx)(ue,{})]})})})},we=n(517),ye=n(518),ke=n.p+"static/media/SellerAvatar.c7610993.svg",Ce="100%",Se="300px",Ne=function(e){var t=e.sellerName,n=e.sellerId,a=e.sellerPhone,r=e.sellerTenant,c="/seller/detail/"+n;return Object(X.jsx)(d.a,{minH:Se,maxH:Se,borderRadius:12,minW:Ce,maxW:Ce,pb:0,pt:5,shadow:"md",bgColor:"white",d:"inline-flex",children:Object(X.jsxs)(d.a,{d:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",children:[Object(X.jsx)(g.a,{src:ke,boxSize:"30%",mt:3,mb:4}),Object(X.jsxs)(d.a,{textAlign:"center",px:4,children:[Object(X.jsxs)(d.a,{my:2,children:[Object(X.jsx)(be.a,{fontSize:"lg",mb:2,children:t}),Object(X.jsx)(S.a,{children:r})]}),Object(X.jsx)(we.a,{}),Object(X.jsxs)(d.a,{my:4,d:"inline-flex",alignItems:"center",className:"phone-number",children:[Object(X.jsx)(ye.a,{color:"blackAlpha.700",mr:1}),Object(X.jsx)("a",{href:"https://api.whatsapp.com/send?phone=".concat(a),isExternal:!0,children:a})]})]}),Object(X.jsx)(d.a,{minW:"100%",children:Object(X.jsx)(u.b,{to:c,children:Object(X.jsx)(C.a,{borderRadius:"0",bgColor:"primary.500",color:"white",isFullWidth:!0,minH:"55px",borderBottomRadius:12,children:"Details"})})})]})})},_e=function(e){var t=Object(i.e)(z).token,n=Object(a.useState)(),c=Object(f.a)(n,2),s=c[0],o=c[1];return Object(a.useEffect)((function(){(function(){var n=Object(p.a)(h.a.mark((function n(){var a,r,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B(t);case 2:if(a=n.sent,console.log("responsesadsad",a),r=null===a||void 0===a?void 0:a.data,c=r.data,!a.data.success){n.next=9;break}return n.next=8,o(c);case 8:e.updateTotalSeller(c.length);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),console.log("sellerData",s),void 0===s?Object(X.jsx)(r.a.Fragment,{children:Object(X.jsx)(xe.a,{})}):Object(X.jsxs)(r.a.Fragment,{children:[Object(X.jsx)(be.a,{fontSize:"xx-large",mb:3,children:"Seller Lists"}),Object(X.jsx)(pe.a,{columns:{sm:2,md:3,lg:4},spacing:5,children:null===s||void 0===s?void 0:s.map((function(e,t){return e.tenant||(e.tenant={nama_warung:"Belum ada"}),Object(X.jsx)(Ne,{sellerName:e.first_name,sellerId:e.id_penjual,sellerPhone:e.no_telp,sellerTenant:e.tenant.nama_warung},t)}))})]})},We=function(e){var t=Object(a.useState)(),n=Object(f.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){(function(){var t=Object(p.a)(h.a.mark((function t(){var n,a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:if(n=t.sent,console.log("responsesadsad",n),a=null===n||void 0===n?void 0:n.data,r=a.data,!n.data.success){t.next=9;break}return t.next=8,s(r);case 8:e.updateTotalTenant(r.length);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),console.log("tenantData",c),void 0===c?Object(X.jsx)(r.a.Fragment,{children:Object(X.jsx)(xe.a,{})}):Object(X.jsxs)(r.a.Fragment,{children:[Object(X.jsx)(be.a,{fontSize:"xx-large",mb:3,children:"Tenant Lists"}),Object(X.jsx)(pe.a,{columns:{sm:2,md:3,lg:4},spacing:5,children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(X.jsx)(Fe,{tenantName:e.nama_warung,tenantId:e.id_warung,tenantDesc:e.deskripsi},t)}))})]})},ze="100%",De="300px",Fe=function(e){var t=e.tenantName,n=e.tenantId,a=e.tenantDesc,r="/tenant/detail/"+n;return Object(X.jsx)(d.a,{minH:De,maxH:De,borderRadius:12,minW:ze,maxW:ze,pb:0,pt:5,shadow:"md",bgColor:"white",d:"inline-flex",children:Object(X.jsxs)(d.a,{d:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",children:[Object(X.jsx)(g.a,{src:ke,boxSize:"30%",mt:3,mb:4}),Object(X.jsxs)(d.a,{textAlign:"center",px:4,children:[Object(X.jsxs)(d.a,{my:2,children:[Object(X.jsx)(be.a,{fontSize:"lg",mb:2,children:t}),Object(X.jsx)(S.a,{children:a})]}),Object(X.jsx)(we.a,{}),Object(X.jsx)(d.a,{my:4,d:"inline-flex",alignItems:"center",className:"phone-number",children:Object(X.jsx)(S.a,{color:"blackAlpha.700",children:""})})]}),Object(X.jsx)(d.a,{minW:"100%",children:Object(X.jsx)(u.b,{to:r,children:Object(X.jsx)(C.a,{borderRadius:"0",bgColor:"primary.500",color:"white",isFullWidth:!0,minH:"55px",borderBottomRadius:12,children:"Details"})})})]})})},He=n(519),Ie="100%",Ae="300px",Re=function(e){e.id_makanan;var t=e.nama,n=e.harga,a=e.kategori,r=e.sold;return Object(X.jsx)(d.a,{minH:Ae,maxH:Ae,borderRadius:12,minW:Ie,maxW:Ie,pb:0,pt:5,shadow:"md",bgColor:"white",d:"inline-flex",children:Object(X.jsxs)(d.a,{d:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",children:[Object(X.jsx)(g.a,{src:ke,boxSize:"30%",mt:3,mb:4}),Object(X.jsx)(d.a,{textAlign:"center",px:4,children:Object(X.jsxs)(d.a,{paddingX:1,width:"100%",children:[Object(X.jsx)(He.a,{variant:"subtitle1",children:t}),Object(X.jsxs)(d.a,{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"8vh",children:[Object(X.jsxs)(He.a,{variant:"body2",children:[n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),",-"]}),r&&Object(X.jsx)(He.a,{variant:"caption",children:"Terjual: "+r}),Object(X.jsx)(He.a,{variant:"caption",gutterBottom:!0,children:a})]})]})})]})})},Te=n(521),Pe=n(522),Be=n(291),Ee=n(292),Le=n(145),Je=n(526),Me=n(296),Ue=[{name:"Januari",pv:0},{name:"Februari",pv:0},{name:"Maret",pv:0},{name:"April",pv:0},{name:"Mei",pv:0},{name:"Juni",pv:8},{name:"Juli",pv:0}],Ke=function(){return Object(X.jsx)(d.a,{elevation:0,bgColor:"white",borderRadius:8,children:Object(X.jsx)("div",{style:{width:"100%",height:250},children:Object(X.jsx)(Te.a,{children:Object(X.jsxs)(Pe.a,{data:Ue,margin:{top:20,right:20,left:-12,bottom:4},maxBarSize:12,children:[Object(X.jsx)(Be.a,{dataKey:"name",tick:{fontSize:12},interval:0}),Object(X.jsx)(Ee.a,{}),Object(X.jsx)(Le.a,{cursor:{fill:"rgb(239 239 239)"}}),Object(X.jsx)(Je.a,{strokeDasharray:"3 3"}),Object(X.jsx)(Me.a,{dataKey:"pv",fill:"#3F51B5",radius:2})]})})})})},Ge=[{label:"home",uri:"/"}],Xe=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:if(t=e.sent,n=null===t||void 0===t?void 0:t.data,a=n.data,console.log("Stat",t),!t.data.success){e.next=8;break}return e.next=8,r(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n?Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:Ge})}),Object(X.jsxs)(ae,{children:[Object(X.jsx)(d.a,{mb:5,children:Object(X.jsx)(ve,{})}),Object(X.jsxs)(d.a,{className:"stats-wrapper",d:"flex",w:"100%",mb:5,justifyContent:"space-between",children:[Object(X.jsx)(he,{bgColor:"primary.500",value:n.penjualan,description:"Penjualan"}),Object(X.jsx)(he,{bgColor:"primary.500",value:n.keuntungan.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),description:"Keuntungan"}),Object(X.jsx)(he,{bgColor:"primary.500",value:n.transaksi,description:"Transaksi"}),Object(X.jsx)(he,{bgColor:"primary.500",value:n.pembelian,description:"Pembelian"})]}),Object(X.jsx)(d.a,{children:Object(X.jsx)(Ke,{})})]})]}):Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:Ge})}),Object(X.jsxs)(ae,{children:[Object(X.jsx)(d.a,{mb:5,children:Object(X.jsx)(ve,{})}),Object(X.jsxs)(d.a,{className:"stats-wrapper",d:"flex",w:"100%",mb:5,justifyContent:"space-between",children:[Object(X.jsx)(he,{bgColor:"primary.500",loading:!0,description:"Penjualan"}),Object(X.jsx)(he,{bgColor:"primary.500",loading:!0,description:"Keuntungan"}),Object(X.jsx)(he,{bgColor:"primary.500",loading:!0,description:"Transaksi"}),Object(X.jsx)(he,{bgColor:"primary.500",loading:!0,description:"Pembelian"})]}),Object(X.jsx)(d.a,{children:Object(X.jsx)(Ke,{})})]})]})},qe=function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)(ne,{}),"ini profile"]})},Qe=n(527),Ve=[{label:"seller",uri:"/seller"}],Ye=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:Ve})}),Object(X.jsxs)(ae,{minH:"100vh",children:[Object(X.jsxs)(Qe.a,{className:"seller-profile-box-container",maxW:"100%",mb:8,children:[Object(X.jsx)(Oe,{children:Object(X.jsx)(he,{background:"primary.900",value:n,description:"Total All Sellers"})}),Object(X.jsx)(u.b,{to:"/seller-add",children:" +"})]}),Object(X.jsx)(Qe.a,{className:"seller-profile-box-container",maxW:"100%",children:Object(X.jsx)(_e,{updateTotalSeller:r})})]})]})},Ze=[{label:"seller",uri:"/seller"},{label:"add seller",uri:"/seller-add"}],$e=function(e){var t=e.history,n=Object(i.e)(z).token,r=Object(a.useState)({firstName:"",lastName:"",email:"",password:"",phoneNumber:""}),c=Object(f.a)(r,2),s=c[0],o=c[1],l=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(O.a)({},n,a))}))},j=Object(i.d)(function(){var e=Object(p.a)(h.a.mark((function e(a){var r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.set,e.next=3,L(n,s);case 3:r=e.sent,(c=r.data).success&&(console.log(c),t.goBack());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:Ze})}),Object(X.jsx)(ae,{minH:"100vh",children:Object(X.jsxs)(Qe.a,{className:"seller-add-box-container",maxW:"100%",mb:8,children:[Object(X.jsx)(be.a,{children:"Add Seller"}),Object(X.jsxs)(d.a,{bgColor:"#FFF",my:5,p:8,maxWidth:"50%",children:[Object(X.jsxs)(d.a,{mb:4,children:[Object(X.jsx)(w.a,{for:"firstName",children:"First Name"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"text",name:"firstName",borderRadius:"0",onChange:l})})]}),Object(X.jsxs)(d.a,{mb:4,children:[Object(X.jsx)(w.a,{for:"lastName",children:"Last Name"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"text",name:"lastName",borderRadius:"0",onChange:l})})]}),Object(X.jsxs)(d.a,{mb:4,children:[Object(X.jsx)(w.a,{for:"email",children:"Email"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"text",name:"email",borderRadius:"0",onChange:l})})]}),Object(X.jsxs)(d.a,{mb:4,children:[Object(X.jsx)(w.a,{for:"password",children:"Password"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"password",name:"password",borderRadius:"0",onChange:l})})]}),Object(X.jsxs)(d.a,{mb:4,children:[Object(X.jsx)(w.a,{for:"phoneNumber",children:"Phone Number"}),Object(X.jsx)(y.a,{children:Object(X.jsx)(k.a,{type:"text",name:"phoneNumber",borderRadius:"0",onChange:l})})]}),Object(X.jsx)(C.a,{bgColor:"primary.500",color:"white",borderRadius:"0",onClick:j,children:"Register"})]})]})})]})},et=n(529),tt=n(530),nt=n(528),at=n(553),rt=n(533),ct=n(534),st=n(535),it=n(536),ot=n(537),lt=n(531),jt=n(532),dt=function(e){var t=Object(i.e)(z).token,n=e.match.params.uuid,r=Object(a.useState)(),c=Object(f.a)(r,2),s=c[0],o=c[1],l=Object(a.useState)(),j=Object(f.a)(l,2),u=j[0],b=j[1];Object(a.useEffect)((function(){var e=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t);case 2:if(n=e.sent,a=null===n||void 0===n?void 0:n.data,r=a.data,!n.data.success){e.next=7;break}return e.next=7,b(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var a=Object(p.a)(h.a.mark((function a(){var r,c,s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E(t,n);case 2:if(r=a.sent,console.log("sellerbyadmin",r),c=null===r||void 0===r?void 0:r.data,s=c.data,!r.data.success){a.next=9;break}return a.next=8,o(s);case 8:(null===s||void 0===s?void 0:s.tenant)&&e(null===s||void 0===s?void 0:s.tenant.id_warung);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]);var x=[{label:"seller",uri:"/seller"},{label:"Detail",uri:"/seller/detail/"+(null===s||void 0===s?void 0:s.id_penjual)}];Object(nt.a)({root:{minWidth:275,margin:2},pos:{marginBottom:12}});return Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:x})}),Object(X.jsx)(ae,{minH:"100vh",children:Object(X.jsxs)(Qe.a,{className:"booth-add-box-container",maxW:"100%",mb:8,children:[Object(X.jsx)(d.a,{p:4,bgColor:"primary.500",maxW:"100%",children:Object(X.jsxs)(et.a,{children:[Object(X.jsx)(g.a,{src:re,boxSize:"7%",mr:8}),Object(X.jsx)(tt.a,{children:Object(X.jsxs)(d.a,{color:"white",justifyContent:"center",py:1,children:[Object(X.jsx)(be.a,{children:(null===s||void 0===s?void 0:s.first_name)+" "+(null===s||void 0===s?void 0:s.last_name)}),Object(X.jsx)(S.a,{style:{fontSize:"24px"},children:(null===s||void 0===s?void 0:s.tenant)?null===s||void 0===s?void 0:s.tenant.nama_warung:"Belum ada"})]})}),Object(X.jsx)(lt.a,{style:{color:"white"}}),Object(X.jsx)(jt.a,{style:{color:"white"}})]})}),Object(X.jsx)(at.a,{children:Object(X.jsx)(rt.a,{children:Object(X.jsx)(ct.a,{children:Object(X.jsxs)(st.a,{children:[Object(X.jsxs)(it.a,{children:[Object(X.jsx)(ot.a,{children:Object(X.jsx)(S.a,{children:Object(X.jsx)("span",{style:{fontWeight:"bold"},children:"Id Penjual"})})}),Object(X.jsx)(ot.a,{children:":"}),Object(X.jsx)(ot.a,{children:n})]}),Object(X.jsxs)(it.a,{children:[Object(X.jsx)(ot.a,{children:Object(X.jsx)(S.a,{children:Object(X.jsx)("span",{style:{fontWeight:"bold"},children:"Email"})})}),Object(X.jsx)(ot.a,{children:":"}),Object(X.jsx)(ot.a,{children:null===s||void 0===s?void 0:s.email})]}),Object(X.jsxs)(it.a,{children:[Object(X.jsx)(ot.a,{children:Object(X.jsx)(S.a,{children:Object(X.jsx)("span",{style:{fontWeight:"bold"},children:"No. Telepon"})})}),Object(X.jsx)(ot.a,{children:":"}),Object(X.jsx)(ot.a,{children:null===s||void 0===s?void 0:s.no_telp})]}),Object(X.jsxs)(it.a,{children:[Object(X.jsx)(ot.a,{children:Object(X.jsx)(S.a,{children:Object(X.jsx)("span",{style:{fontWeight:"bold"},children:"Tenant"})})}),Object(X.jsx)(ot.a,{children:":"}),Object(X.jsx)(ot.a,{children:(null===s||void 0===s?void 0:s.tenant)?null===s||void 0===s?void 0:s.tenant.nama_warung:"Belum ada"})]})]})})})}),Object(X.jsx)(d.a,{p:2,children:u&&(null===u||void 0===u?void 0:u.map((function(e,t){return Object(X.jsx)(Re,{id_makanan:e.id_makanan,nama:e.nama,harga:e.harga,kategori:e.kategori},t)})))})]})})]})},ut=[{label:"tenant",uri:"/tenant"}],bt=function(){var e=Object(a.useState)(),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:ut})}),Object(X.jsxs)(ae,{minH:"100vh",children:[Object(X.jsx)(Qe.a,{className:"seller-profile-box-container",maxW:"100%",mb:8,children:Object(X.jsx)(Oe,{children:Object(X.jsx)(he,{background:"primary.900",value:n,description:"Total All Tenants"})})}),Object(X.jsx)(Qe.a,{className:"seller-profile-box-container",maxW:"100%",children:Object(X.jsx)(We,{updateTotalTenant:r})})]})]})},xt=n(551),ht=function(e){Object(i.e)(z).token;var t=e.match.params.uuid;console.log("UUID",t);var n=Object(a.useState)(),r=Object(f.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(),l=Object(f.a)(o,2),j=l[0],u=l[1];Object(a.useEffect)((function(){(function(){var e=Object(p.a)(h.a.mark((function e(){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t);case 2:if(n=e.sent,console.log("tenantBySeller",n),a=null===n||void 0===n?void 0:n.data,r=a.data,!n.data.success){e.next=10;break}return e.next=8,s(r);case 8:return e.next=10,u(r.food);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=[{label:"tenant",uri:"/tenant"},{label:"Detail",uri:"/tenant/detail/"+(null===c||void 0===c?void 0:c.id_warung)}];Object(nt.a)({root:{minWidth:275,margin:2},pos:{marginBottom:12}});return c&&j?Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:b})}),Object(X.jsx)(ae,{minH:"100vh",children:Object(X.jsxs)(Qe.a,{className:"booth-add-box-container",maxW:"100%",mb:8,children:[Object(X.jsx)(d.a,{p:4,bgColor:"primary.500",maxW:"100%",children:Object(X.jsxs)(et.a,{children:[Object(X.jsx)(g.a,{src:re,boxSize:"7%",mr:8}),Object(X.jsx)(tt.a,{children:Object(X.jsxs)(d.a,{color:"white",justifyContent:"center",py:1,children:[Object(X.jsx)(be.a,{children:c.nama_warung}),Object(X.jsx)(S.a,{style:{fontSize:"16px"},children:null===c||void 0===c?void 0:c.deskripsi})]})}),Object(X.jsx)(lt.a,{style:{color:"white"}}),Object(X.jsx)(jt.a,{style:{color:"white"}})]})}),Object(X.jsx)(d.a,{p:2,children:null===j||void 0===j?void 0:j.map((function(e,t){return Object(X.jsx)(Re,{id_makanan:e.id_makanan,nama:e.nama,harga:e.harga,kategori:e.kategori},t)}))})]})})]}):Object(X.jsxs)(d.a,{minH:"100vh",children:[Object(X.jsx)(ne,{}),Object(X.jsx)(ge,{children:Object(X.jsx)(ie,{breadcrumbData:b})}),Object(X.jsx)(ae,{minH:"100vh",children:Object(X.jsx)(Qe.a,{className:"booth-add-box-container",maxW:"100%",mb:8,children:Object(X.jsxs)(xt.e,{align:"end",variant:"enclosed",children:[Object(X.jsxs)(xt.b,{children:[Object(X.jsx)(xt.a,{children:"One"}),Object(X.jsx)(xt.a,{children:"Two"})]}),Object(X.jsxs)(xt.d,{children:[Object(X.jsx)(xt.c,{children:Object(X.jsx)("p",{children:"one!"})}),Object(X.jsx)(xt.c,{children:Object(X.jsx)("p",{children:"two!"})})]})]})})})]})},pt=(Object(j.a)(),function(){return Object(X.jsx)(d.a,{className:"App",bgColor:"bgcolor.500",children:Object(X.jsx)(u.a,{history:!0,children:Object(X.jsxs)(b.d,{children:[Object(X.jsx)(b.b,{path:"/login",component:V,exact:!0}),Object(X.jsx)(Z,{path:"/",component:Xe,exact:!0}),Object(X.jsx)(Z,{path:"/profile",component:qe,exact:!0}),Object(X.jsx)(Z,{path:"/seller",component:Ye,exact:!0}),Object(X.jsx)(Z,{path:"/seller-add",component:$e,exact:!0}),Object(X.jsx)(Z,{path:"/seller/detail/:uuid",component:dt,exact:!0}),Object(X.jsx)(Z,{path:"/tenant",component:bt,exact:!0}),Object(X.jsx)(Z,{path:"/tenant/detail/:uuid",component:ht,exact:!0})]})})})}),Ot=n(538),mt=Object(Ot.a)({colors:{primary:{500:"#3F51B5",900:"#303F9F"},bgcolor:{500:"#f1f1f1"},borderColor:{500:"#ccd0d4"}},components:{Drawer:{variants:{alwaysOpen:{parts:["dialog, dialogContainer"],dialog:{pointerEvents:"auto"},dialogContainer:{pointerEvents:"none"}}}}}});s.a.render(Object(X.jsx)(o.a,{theme:mt,children:Object(X.jsxs)(r.a.StrictMode,{children:[Object(X.jsx)(l.a,{}),Object(X.jsx)(i.a,{children:Object(X.jsx)(pt,{})})]})}),document.getElementById("root"))}},[[478,1,2]]]);
//# sourceMappingURL=main.acfd9129.chunk.js.map