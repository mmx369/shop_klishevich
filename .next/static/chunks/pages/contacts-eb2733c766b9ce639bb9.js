(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{7316:function(e){e.exports=function(e,i){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],i.indexOf(n)>=0||(r[n]=e[n]);return r}},6013:function(e,i,n){"use strict";n.d(i,{Z:function(){return L}});var t=n(5893),r=n(7757),a=n.n(r),o=n(2137),l=n(7294),c=n(9008),s=n(1120),d=n(7623),u=n(5258),h=n(8358),f=n(2318),m=n(2613),x=n(7812),p=n(5629),v=n(5988),g=n(8633),j=n(282),b=function(e){var i=e.isSignedIn;return(0,t.jsxs)("div",{className:"jsx-103564394",children:[!i&&(0,t.jsx)(j.Z,{color:"primary",variant:"contained",disableElevation:!0,onClick:function(){(0,g.zB)()},children:"\u0412\u043e\u0439\u0442\u0438"}),i&&(0,t.jsx)(j.Z,{color:"primary",variant:"contained",disableElevation:!0,onClick:function(){(0,g.w7)()},children:"\u0412\u044b\u0439\u0442\u0438"}),(0,t.jsx)(v.default,{id:"103564394",children:["div.jsx-103564394{margin:5px;}"]})]})},y=n(2669),w=n(1163),k=(0,s.Z)((function(){return(0,d.Z)({root:{flexGrow:1},link:{color:"white",textDecoration:"none"}})}));function z(e){e.currentUser;var i=e.currentEmail,n=(e.currentId,e.currentRole,e.isLoggedIn),r=e.isCartEmpty,a=k(),o=(0,w.useRouter)();return(0,t.jsx)(u.Z,{position:"static",children:(0,t.jsxs)(h.Z,{variant:"dense",className:a.root,children:[(0,t.jsx)(f.Z,{variant:"subtitle2",className:a.root,children:"\u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430"}),(0,t.jsx)(m.Z,{xsDown:!0,children:n===p.Y.True&&(0,t.jsxs)("div",{children:["\u0412\u044b \u0432\u043e\u0448\u043b\u0438 \u043a\u0430\u043a ",i]})}),!!r.length&&(0,t.jsx)("div",{children:(0,t.jsx)(x.Z,{color:"inherit",onClick:function(e){e.preventDefault(),o.push("/cart")},children:(0,t.jsx)(y.Z,{})})}),n!==p.Y.Unknown&&(0,t.jsx)(b,{isSignedIn:n===p.Y.True})]})})}var A=n(770),Z=n(1664),E=n(9226),S=n(3023),N=n(2244),_=n(456),I=(0,s.Z)((function(e){return(0,d.Z)({text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},link:{textDecoration:"none"}})}));function D(){var e=I();return(0,t.jsx)(l.Fragment,{children:(0,t.jsx)(u.Z,{position:"fixed",color:"primary",className:e.appBar,children:(0,t.jsxs)(h.Z,{variant:"dense",children:[(0,t.jsx)(m.Z,{xsDown:!0,children:(0,t.jsx)(Z.default,{href:"/",children:(0,t.jsx)("a",{className:e.link,children:(0,t.jsx)(j.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})})}),(0,t.jsx)(Z.default,{href:"/paymentandshipping",children:(0,t.jsx)("a",{className:e.link,children:(0,t.jsx)(j.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})})}),(0,t.jsx)(Z.default,{href:"/faq",children:(0,t.jsx)("a",{className:e.link,children:(0,t.jsx)(j.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b"})})}),(0,t.jsx)(Z.default,{href:"/contacts",children:(0,t.jsx)("a",{className:e.link,children:(0,t.jsx)(j.Z,{color:"primary",variant:"contained",size:"small",disableElevation:!0,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})})]})})})}var B=(0,s.Z)((function(){return(0,d.Z)({main:{margin:"15px"},footer:{margin:"15px",textAlign:"center"},link:{textDecoration:"none"},bread:{marginTop:"10px",marginLeft:"15px"}})}));function L(e){var i=e.children,n=e.title,r=B(),s=(0,E.I0)(),d=(0,E.v9)((function(e){return e.app.currentUser})),u=(0,E.v9)((function(e){return e.app.currentEmail})),h=(0,E.v9)((function(e){return e.app.currentId})),m=(0,E.v9)((function(e){return e.app.currentRole})),x=(0,E.v9)((function(e){return e.app.isLoggedIn}));l.useEffect((function(){x===p.Y.Unknown&&(0,o.Z)(a().mark((function e(){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Gg)();case 2:(i=e.sent)?(s((0,S.lL)(p.Y.True)),s((0,S.bM)(i.user.name,i.user.email,i.databaseId,i.role))):(s((0,S.lL)(p.Y.False)),s((0,S.bM)(void 0,void 0,void 0,void 0)));case 4:case"end":return e.stop()}}),e)})))()}),[]),l.useEffect((function(){s((0,_.D3)())}),[s]);var v=(0,E.v9)((function(e){return e.cart}))||[];return(0,t.jsxs)("div",{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:n}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,t.jsxs)("header",{children:[(0,t.jsx)(z,{currentUser:d,currentEmail:u,currentId:h,currentRole:m,isLoggedIn:x,isCartEmpty:v}),(0,t.jsxs)(A.Z,{"aria-label":"breadcrumb",className:r.bread,children:[(0,t.jsx)(Z.default,{href:"/",children:(0,t.jsx)("a",{className:r.link,children:(0,t.jsx)(f.Z,{color:"primary",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})})}),(0,t.jsx)(Z.default,{href:"/paymentandshipping",children:(0,t.jsx)("a",{className:r.link,children:(0,t.jsx)(f.Z,{color:"primary",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})})}),(0,t.jsx)(Z.default,{href:"/faq",children:(0,t.jsx)("a",{className:r.link,children:(0,t.jsx)(f.Z,{color:"primary",children:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b"})})}),(0,t.jsx)(Z.default,{href:"/contacts",children:(0,t.jsx)("a",{className:r.link,children:(0,t.jsx)(f.Z,{color:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})}),m===N.S.Admin&&(0,t.jsx)(Z.default,{href:"/admin",children:(0,t.jsx)("a",{className:r.link,children:(0,t.jsx)(f.Z,{color:"inherit",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})})})]})]}),(0,t.jsx)("main",{className:r.main,children:(0,t.jsx)("div",{style:{flexGrow:1},children:i})}),(0,t.jsxs)("footer",{className:r.footer,children:[(0,t.jsx)(D,{}),(0,t.jsx)(Z.default,{href:"/",children:(0,t.jsx)("a",{className:r.link,children:(0,t.jsx)("b",{children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d. \u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430"})})})]})]})}},6255:function(e,i,n){"use strict";var t=n(3038),r=n(319),a=n(5318);i.default=function(e){var i=e.src,n=e.sizes,r=e.unoptimized,a=void 0!==r&&r,u=e.priority,f=void 0!==u&&u,m=e.loading,x=e.className,p=e.quality,v=e.width,g=e.height,b=e.objectFit,z=e.objectPosition,A=e.loader,Z=void 0===A?k:A,E=e.placeholder,S=void 0===E?"empty":E,N=e.blurDataURL,_=(0,o.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),I=n?"responsive":"intrinsic",D=!1;"unsized"in _?(D=Boolean(_.unsized),delete _.unsized):"layout"in _&&(_.layout&&(I=_.layout),delete _.layout);j||(S="empty");0;var B=!f&&("lazy"===m||"undefined"===typeof m);i&&i.startsWith("data:")&&(a=!0,B=!1);var L,q,C,R=(0,h.useIntersection)({rootMargin:"200px",disabled:!B}),O=t(R,2),P=O[0],U=O[1],M=!B||U,T=w(v),F=w(g),W=w(p),Y=T&&F&&T*F<5e3,G="blur"===S&&!Y,H=(0,l.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:b,objectPosition:z},G?{backgroundSize:"cover",backgroundImage:'url("'.concat(N,'")')}:void 0);if("undefined"!==typeof T&&"undefined"!==typeof F&&"fill"!==I){var V=F/T,X=isNaN(V)?"100%":"".concat(100*V,"%");"responsive"===I?(L={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={display:"block",boxSizing:"border-box",paddingTop:X}):"intrinsic"===I?(L={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},q={boxSizing:"border-box",display:"block",maxWidth:"100%"},C='<svg width="'.concat(T,'" height="').concat(F,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===I&&(L={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:T,height:F})}else"undefined"===typeof T&&"undefined"===typeof F&&"fill"===I&&(L={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var Q={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};M&&(Q=y({src:i,unoptimized:a,layout:I,width:T,quality:W,sizes:n,loader:Z}));D&&(L=void 0,q=void 0,H=void 0);return c.default.createElement("div",{style:L},q?c.default.createElement("div",{style:q},C?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(C))}):null):null,!M&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},_,y({src:i,unoptimized:a,layout:I,width:T,quality:W,sizes:n,loader:Z}),{src:i,decoding:"async",sizes:n,style:H,className:x}))),c.default.createElement("img",Object.assign({},_,Q,{decoding:"async",className:x,ref:function(e){P(e),function(e,i){"blur"===i&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,S)},style:H})),f?c.default.createElement(s.default,null,c.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imagesrcset:Q.srcSet,imagesizes:Q.sizes})):null)};var o=a(n(7316)),l=a(n(7154)),c=a(n(7294)),s=a(n(7947)),d=n(7239),u=n(5174),h=n(5749);var f=new Map([["imgix",function(e){var i=e.root,n=e.src,t=e.width,r=e.quality,a=["auto=format","fit=max","w="+t],o="";r&&a.push("q="+r);a.length&&(o="?"+a.join("&"));return"".concat(i).concat(z(n)).concat(o)}],["cloudinary",function(e){var i=e.root,n=e.src,t=e.width,r=e.quality,a=["f_auto","c_limit","w_"+t,"q_"+(r||"auto")].join(",")+"/";return"".concat(i).concat(a).concat(z(n))}],["akamai",function(e){var i=e.root,n=e.src,t=e.width;return"".concat(i).concat(z(n),"?imwidth=").concat(t)}],["default",function(e){var i=e.root,n=e.src,t=e.width,r=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(n),"&w=").concat(t,"&q=").concat(r||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",enableBlurryPlaceholder:!1}||u.imageConfigDefault,x=m.deviceSizes,p=m.imageSizes,v=m.loader,g=m.path,j=(m.domains,m.enableBlurryPlaceholder),b=[].concat(r(x),r(p));function y(e){var i=e.src,n=e.unoptimized,t=e.layout,a=e.width,o=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var s=function(e,i,n){if(n&&("fill"===i||"responsive"===i)){for(var t,a=/(^|\s)(1?\d?\d)vw/g,o=[];t=a.exec(n);t)o.push(parseInt(t[2]));if(o.length){var l=.01*Math.min.apply(Math,o);return{widths:b.filter((function(e){return e>=x[0]*l})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===i||"responsive"===i?{widths:x,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return b.find((function(i){return i>=e}))||b[b.length-1]})))),kind:"x"}}(a,t,l),d=s.widths,u=s.kind,h=d.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:d.map((function(e,n){return"".concat(c({src:i,quality:o,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:c({src:i,quality:o,width:d[h]})}}function w(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var i=f.get(v);if(i)return i((0,l.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(v))}function z(e){return"/"===e[0]?e.slice(1):e}x.sort((function(e,i){return e-i})),b.sort((function(e,i){return e-i}))},7239:function(e,i){"use strict";i.__esModule=!0,i.toBase64=function(e){return window.btoa(e)}},7957:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return l}});var t=n(5893),r=n(2318),a=(n(7294),n(5675)),o=n(6013);function l(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.Z,{title:"\u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430 | \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d | \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",children:[(0,t.jsx)(r.Z,{variant:"h5",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,t.jsx)(r.Z,{variant:"subtitle1",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: +7-926-333-33-33"}),(0,t.jsxs)(r.Z,{variant:"subtitle1",children:["\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:"," ",(0,t.jsx)("a",{href:"mailto:info@klishevich.com",children:"info@klishevich.com"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c \u041a\u043b\u0438\u0448\u0435\u0432\u0438\u0447 \u041c\u0430\u043a\u0441\u0438\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"}),(0,t.jsx)("li",{children:"\u0418\u041d\u041d 246305425708"}),(0,t.jsx)("li",{children:"\u041e\u0413\u0420\u041d\u0418\u041f 317774600133510"}),(0,t.jsx)("li",{children:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0430\u043d\u043a\u0430 \u041f\u0410\u041e \u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"}),(0,t.jsx)("li",{children:"\u043a\u043e\u0440\u0440\u0435\u0441\u043f\u043e\u043d\u0434\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0447\u0435\u0442 30101810400000000225"}),(0,t.jsx)("li",{children:"\u0411\u0418\u041a 044525225"}),(0,t.jsx)("li",{children:"\u0440\u0430\u0441\u0447\u0435\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442 40802810838000054879"})]}),(0,t.jsx)(r.Z,{children:"\u041e\u0431\u0440\u0430\u0449\u0430\u0435\u043c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u044b \u043d\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u043e\u043f\u043b\u0430\u0442\u044b \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),(0,t.jsx)(a.default,{width:100,height:50,src:"/../public/IBNSlogo.jpeg",alt:"IBNS Logo"}),(0,t.jsx)(r.Z,{variant:"subtitle2",children:"\u0427\u043b\u0435\u043d \u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0433\u043e \u0441\u043e\u044e\u0437\u0430 \u0431\u043e\u043d\u0438\u0441\u0442\u043e\u0432"})]})})}},2244:function(e,i,n){"use strict";var t;n.d(i,{S:function(){return t}}),function(e){e.Admin="admin",e.Client="client"}(t||(t={}))},8964:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(7957)}])},5174:function(e,i){"use strict";i.__esModule=!0,i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,i,n){e.exports=n(6255)}},function(e){e.O(0,[65,619,774,888,179],(function(){return i=8964,e(e.s=i);var i}));var i=e.O();_N_E=i}]);