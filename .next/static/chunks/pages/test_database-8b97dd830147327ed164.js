(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{7540:function(e,n,r){"use strict";r.d(n,{d:function(){return g}});var i=r(5893),t=r(7757),a=r.n(t),l=r(2137),s=r(7294),c=r(9669),o=r.n(c),d=r(1749),u=r(8286),h=r(6445),x=r(6394),j=r(8436),m=r(6479),f=r(282),p=r(9226),v=r(1163),Z=r(2132);r(6406);Z.Am.configure();var g=function(){var e=(0,v.useRouter)(),n=((0,p.I0)(),(0,s.useState)("")),r=n[0],t=n[1],c=(0,s.useState)(""),g=c[0],b=c[1],k=(0,s.useState)(""),N=k[0],w=k[1],E=function(){var n=(0,l.Z)(a().mark((function n(){var i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i={name:r,email:g,role:N},n.next=4,o().post("".concat("https://shop.klishevich.ru","/api/addnewuser"),i);case 4:Z.Am.success("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ".concat(r," \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),{position:Z.Am.POSITION.TOP_LEFT,autoClose:5e3}),t(""),b(""),w(""),e.replace(e.asPath),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),Z.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(n.t0.response.data.message),{position:Z.Am.POSITION.TOP_LEFT,autoClose:5e3}),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return(0,i.jsx)(s.Fragment,{children:(0,i.jsx)("div",{children:(0,i.jsxs)(d.Z,{container:!0,direction:"column",children:[(0,i.jsx)(d.Z,{item:!0,children:(0,i.jsx)("div",{children:(0,i.jsx)("h3",{children:"\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{item:!0,children:(0,i.jsx)(u.Z,{onChange:function(e){t(e.target.value)},margin:"normal",name:"name",value:r,type:"text",label:"\u0418\u043c\u044f",fullWidth:!0})})}),(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{item:!0,children:(0,i.jsx)(u.Z,{onChange:function(e){b(e.target.value)},margin:"normal",name:"email",value:g,type:"text",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",fullWidth:!0})})}),(0,i.jsx)(d.Z,{item:!0,children:(0,i.jsx)("div",{children:(0,i.jsxs)(h.Z,{fullWidth:!0,children:[(0,i.jsx)(x.Z,{id:"select-label",children:"role"}),(0,i.jsxs)(j.Z,{labelId:"select-label",value:N,onChange:function(e){w(e.target.value)},children:[(0,i.jsx)(m.Z,{value:"",children:(0,i.jsx)("em",{children:"None"})}),(0,i.jsx)(m.Z,{value:"admin",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"}),(0,i.jsx)(m.Z,{value:"client",children:"\u041a\u043b\u0438\u0435\u043d\u0442"})]})]})})}),(0,i.jsx)(d.Z,{item:!0,children:(0,i.jsx)(f.Z,{variant:"outlined",color:"secondary",onClick:E,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})})})}},6013:function(e,n,r){"use strict";r.d(n,{Z:function(){return O}});var i=r(5893),t=r(7757),a=r.n(t),l=r(2137),s=r(7294),c=r(9008),o=r(1120),d=r(7623),u=r(5258),h=r(8358),x=r(2318),j=r(2613),m=r(7812),f=r(5629),p=r(5988),v=r(8633),Z=r(282),g=function(e){var n=e.isSignedIn;return(0,i.jsxs)("div",{className:"jsx-103564394",children:[!n&&(0,i.jsx)(Z.Z,{color:"primary",variant:"contained",disableElevation:!0,onClick:function(){(0,v.zB)()},children:"\u0412\u043e\u0439\u0442\u0438"}),n&&(0,i.jsx)(Z.Z,{color:"primary",variant:"contained",disableElevation:!0,onClick:function(){(0,v.w7)()},children:"\u0412\u044b\u0439\u0442\u0438"}),(0,i.jsx)(p.default,{id:"103564394",children:["div.jsx-103564394{margin:5px;}"]})]})},b=r(2669),k=r(1163),N=(0,o.Z)((function(){return(0,d.Z)({root:{flexGrow:1},link:{color:"white",textDecoration:"none"}})}));function w(e){e.currentUser;var n=e.currentEmail,r=(e.currentId,e.currentRole,e.isLoggedIn),t=e.isCartEmpty,a=N(),l=(0,k.useRouter)();return(0,i.jsx)(u.Z,{position:"static",children:(0,i.jsxs)(h.Z,{variant:"dense",className:a.root,children:[(0,i.jsx)(x.Z,{variant:"subtitle2",className:a.root,children:"\u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,i.jsx)(j.Z,{xsDown:!0,children:r===f.Y.True&&(0,i.jsxs)("div",{children:["\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u043a\u0430\u043a ",n]})}),!!t.length&&(0,i.jsx)("div",{children:(0,i.jsx)(m.Z,{color:"inherit",onClick:function(e){e.preventDefault(),l.push("/cart")},children:(0,i.jsx)(b.Z,{})})}),r!==f.Y.Unknown&&(0,i.jsx)(g,{isSignedIn:r===f.Y.True})]})})}var E=r(770),y=r(1664),_=r(9226),I=r(3023),C=r(2244),S=r(456),T=(0,o.Z)((function(e){return(0,d.Z)({text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},link:{textDecoration:"none"}})}));function A(){var e=T();return(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(u.Z,{position:"fixed",color:"primary",className:e.appBar,children:(0,i.jsxs)(h.Z,{variant:"dense",children:[(0,i.jsx)(j.Z,{xsDown:!0,children:(0,i.jsx)(y.default,{href:"/",children:(0,i.jsx)("a",{className:e.link,children:(0,i.jsx)(Z.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})})}),(0,i.jsx)(y.default,{href:"/paymentandshipping",children:(0,i.jsx)("a",{className:e.link,children:(0,i.jsx)(Z.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})})}),(0,i.jsx)(y.default,{href:"/faq",children:(0,i.jsx)("a",{className:e.link,children:(0,i.jsx)(Z.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b"})})}),(0,i.jsx)(y.default,{href:"/contacts",children:(0,i.jsx)("a",{className:e.link,children:(0,i.jsx)(Z.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})})]})})})}var D=(0,o.Z)((function(){return(0,d.Z)({main:{margin:"15px"},footer:{margin:"15px",textAlign:"center"},link:{textDecoration:"none"},bread:{marginTop:"10px",marginLeft:"15px"}})}));function O(e){var n=e.children,r=e.title,t=D(),o=(0,_.I0)(),d=(0,_.v9)((function(e){return e.app.currentUser})),u=(0,_.v9)((function(e){return e.app.currentEmail})),h=(0,_.v9)((function(e){return e.app.currentId})),j=(0,_.v9)((function(e){return e.app.currentRole})),m=(0,_.v9)((function(e){return e.app.isLoggedIn}));s.useEffect((function(){m===f.Y.Unknown&&(0,l.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Gg)();case 2:(n=e.sent)?(o((0,I.lL)(f.Y.True)),o((0,I.bM)(n.user.name,n.user.email,n.databaseId,n.role))):(o((0,I.lL)(f.Y.False)),o((0,I.bM)(void 0,void 0,void 0,void 0)));case 4:case"end":return e.stop()}}),e)})))()}),[]),s.useEffect((function(){o((0,S.D3)())}),[o]);var p=(0,_.v9)((function(e){return e.cart}))||[];return(0,i.jsxs)("div",{children:[(0,i.jsxs)(c.default,{children:[(0,i.jsx)("title",{children:r}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,i.jsxs)("header",{children:[(0,i.jsx)(w,{currentUser:d,currentEmail:u,currentId:h,currentRole:j,isLoggedIn:m,isCartEmpty:p}),(0,i.jsxs)(E.Z,{"aria-label":"breadcrumb",className:t.bread,children:[(0,i.jsx)(y.default,{href:"/",children:(0,i.jsx)("a",{className:t.link,children:(0,i.jsx)(x.Z,{color:"primary",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})}),(0,i.jsx)(y.default,{href:"/paymentandshipping",children:(0,i.jsx)("a",{className:t.link,children:(0,i.jsx)(x.Z,{color:"primary",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})})}),(0,i.jsx)(y.default,{href:"/faq",children:(0,i.jsx)("a",{className:t.link,children:(0,i.jsx)(x.Z,{color:"primary",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"})})}),(0,i.jsx)(y.default,{href:"/contacts",children:(0,i.jsx)("a",{className:t.link,children:(0,i.jsx)(x.Z,{color:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})}),j===C.S.Admin&&(0,i.jsx)(y.default,{href:"/admin",children:(0,i.jsx)("a",{className:t.link,children:(0,i.jsx)(x.Z,{color:"inherit",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})})})]})]}),(0,i.jsx)("main",{className:t.main,children:(0,i.jsx)("div",{style:{flexGrow:1},children:n})}),(0,i.jsxs)("footer",{className:t.footer,children:[(0,i.jsx)(A,{}),(0,i.jsx)(y.default,{href:"/",children:(0,i.jsx)("a",{className:t.link,children:(0,i.jsx)("b",{children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d. \u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430"})})})]})]})}},2959:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return f},default:function(){return p}});var i=r(5893),t=r(8481),a=r(2302),l=r(9613),s=r(8222),c=r(6847),o=r(3750),d=r(7394),u=r(9895),h=r(6013),x=r(7540),j=r(8633),m=r(2244),f=!0;function p(e){var n=e.res,r=(0,j.kP)(),f=(0,t.Z)(r,2),p=f[0];if(f[1])return null;if(!p)return(0,i.jsxs)(h.Z,{title:"Admin profile",children:[(0,i.jsx)("h1",{children:"You must sign in"}),";"]});if(p.role!==m.S.Admin)return(0,i.jsxs)(h.Z,{title:"Admin profile",children:[(0,i.jsx)("h1",{children:"You must be an admin to see this page"}),";"]});var v=JSON.parse(n);return(0,i.jsxs)(h.Z,{title:"Test Database",children:[(0,i.jsx)(x.d,{}),(0,i.jsx)(c.Z,{component:u.Z,children:(0,i.jsxs)(a.Z,{"aria-label":"simple table",children:[(0,i.jsx)(o.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(s.Z,{children:"Id"}),(0,i.jsx)(s.Z,{align:"right",children:"Role"}),(0,i.jsx)(s.Z,{align:"right",children:"Name"}),(0,i.jsx)(s.Z,{align:"right",children:"E-mail"}),(0,i.jsx)(s.Z,{align:"right",children:"Registration date"})]})}),(0,i.jsx)(l.Z,{children:v.map((function(e){return(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(s.Z,{component:"th",scope:"row",children:e._id}),(0,i.jsx)(s.Z,{align:"right",children:e.role}),(0,i.jsx)(s.Z,{align:"right",children:e.name}),(0,i.jsx)(s.Z,{align:"right",children:e.email}),(0,i.jsx)(s.Z,{align:"right",children:new Date(e.date).toDateString()})]},e._id)}))})]})})]})}},2244:function(e,n,r){"use strict";var i;r.d(n,{S:function(){return i}}),function(e){e.Admin="admin",e.Client="client"}(i||(i={}))},452:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test_database",function(){return r(2959)}])}},function(e){e.O(0,[65,619,799,537,436,188,569,534,774,888,179],(function(){return n=452,e(e.s=n);var n}));var n=e.O();_N_E=n}]);