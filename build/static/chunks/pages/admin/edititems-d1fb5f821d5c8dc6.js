(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{49529:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return U},default:function(){return H}});var r=n(16835),i=n(59874),o=n(73327),a=n(48633),c=n(31612),s=n(59499),l=n(50029),u=n(87794),d=n.n(u),p=n(86886),f=n(94054),h=n(47312),m=n(40138),x=n(18972),j=n(61903),v=n(66242),b=n(78445),O=n(83965),Z=n(44267),g=n(15861),y=n(62023),P=n(83321),k=n(9669),w=n.n(k),_=n(11163),T=n(67294),C=n(72132),S=(n(64213),n(40238)),N=n(46228),A=function(e,t,n,r){var i=function(e,t,n){var r=(0,T.useMemo)((function(){return t?e.filter((function(e){return e.category===t})):e}),[t,e,n]);return(0,T.useMemo)((function(){return n?r.filter((function(e){return e.country===n})):r}),[n,e,t])}(e,t,n);return(0,T.useMemo)((function(){return i.filter((function(e){return e.nameOfGoods.toLowerCase().includes(r.toLowerCase())}))}),[r,i])},I=n(67169),E=n(44684),L=n(84808),G=n(16628),F=n(36822),W=n(90089),z=n(85893),q=(0,i.Z)((function(){return(0,o.Z)({input:{width:42,margin:10}})})),B={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function D(e){var t=e.open,n=e.price,i=e.amount,o=e.id,a=e.handleClose,c=q(),s=T.useState(n>0?n:0),u=(0,r.Z)(s,2),p=u[0],f=u[1],h=function(){var e=(0,l.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={newPrice:p,id:o},e.next=4,w().put("".concat("http://klishevich.ru","/api/updateprice"),t);case 4:200===e.sent.status&&(C.Am.success("\u0426\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430",{position:C.Am.POSITION.TOP_LEFT,autoClose:5e3}),f(0),a(),_.default.replace(_.default.asPath)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),C.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0.response.data.message),{position:C.Am.POSITION.TOP_LEFT,autoClose:5e3}),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,l.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={newAmount:p,id:o},e.next=4,w().put("".concat("http://klishevich.ru","/api/updateamount"),t);case 4:200===e.sent.status&&(C.Am.success("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e",{position:C.Am.POSITION.TOP_LEFT,autoClose:5e3}),f(0),a(),_.default.replace(_.default.asPath)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),C.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0.response.data.message),{position:C.Am.POSITION.TOP_LEFT,autoClose:5e3}),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,z.jsx)("div",{children:(0,z.jsx)(E.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:t,onClose:a,closeAfterTransition:!0,BackdropComponent:L.Z,BackdropProps:{timeout:500},children:(0,z.jsx)(G.Z,{in:t,children:(0,z.jsxs)(F.Z,{sx:B,children:[n&&(0,z.jsx)("h2",{id:"transition-modal-title",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0446\u0435\u043d\u0443"}),n&&(0,z.jsxs)("p",{id:"transition-modal-description",children:["\u0421\u0442\u0430\u0440\u0430\u044f \u0446\u0435\u043d\u0430: ",n," ",S.$y]}),i&&(0,z.jsx)("h2",{id:"transition-modal-title",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),i&&(0,z.jsxs)("p",{id:"transition-modal-description",children:["\u0421\u0442\u0430\u0440\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",i," \u0435\u0434."]}),(0,z.jsx)(W.Z,{className:c.input,value:p,onChange:function(e){f(Number(e.target.value))},onBlur:function(){p<0&&f(0)},inputProps:{step:1,min:0,max:1e5,type:"number","aria-labelledby":"input-slider"}}),(0,z.jsx)(P.Z,{variant:"contained",color:"primary",size:"small",onClick:n?h:m,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})})})}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=(0,i.Z)((function(){return(0,o.Z)({card:{maxWidth:275,height:400},media:{backgroundSize:"contain",paddingTop:"56.25%"}})}));function V(e){var t=e.productList,n=R(),r=(0,_.useRouter)(),i=(0,T.useState)(!1),o=i[0],a=i[1],c=(0,T.useState)(""),s=c[0],u=c[1],k=(0,T.useState)(null),E=k[0],L=k[1],G=(0,T.useState)(null),F=G[0],W=G[1],q=(0,T.useState)({category:"",country:"",query:""}),B=q[0],M=q[1],V=A(t,B.category,B.country,B.query),X=function(e,t,n){a(!0),u(e),L(t),W(n)},$=function(){var e=(0,l.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440?")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,w().delete("".concat("http://klishevich.ru","/api/deleteitem"),{data:t});case 5:C.Am.success("\u041f\u043e\u0437\u0438\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430",{position:C.Am.POSITION.TOP_LEFT,autoClose:5e3}),r.replace(r.asPath),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),C.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.t0.response.data.message),{position:C.Am.POSITION.TOP_LEFT,autoClose:5e3}),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(p.ZP,{container:!0,children:(0,z.jsxs)(p.ZP,{item:!0,sm:12,xs:6,sx:{textAlign:"center",margin:"10px"},children:[(0,z.jsxs)(f.Z,{sx:{minWidth:"20%",marginBottom:"5px"},children:[(0,z.jsx)(h.Z,{id:"filter-label",children:"\u0422\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0430"}),(0,z.jsxs)(m.Z,{labelId:"filter-label",id:"filter-select",value:B.category,label:"\u0422\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0430",defaultValue:"",onChange:function(e){M(J(J({},B),{},{category:e.target.value}))},children:[(0,z.jsx)(x.Z,{value:"",children:(0,z.jsx)("em",{children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})}),S.jr.map((function(e){return(0,z.jsx)(x.Z,{value:e,children:(0,I.J)(e)},e)}))]})]}),(0,z.jsxs)(f.Z,{sx:{minWidth:"20%"},children:[(0,z.jsx)(h.Z,{id:"filter-label",children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),(0,z.jsxs)(m.Z,{labelId:"filter-label",id:"filter-select",value:B.country,label:"\u0422\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0430",defaultValue:"",onChange:function(e){M(J(J({},B),{},{country:e.target.value}))},children:[(0,z.jsx)(x.Z,{value:"",children:(0,z.jsx)("em",{children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})}),Object.keys(N.o).map((function(e){return(0,z.jsx)(x.Z,{value:e,children:(0,I.y)(e)},e)}))]})]}),(0,z.jsx)(f.Z,{sx:{minWidth:"55%"},children:(0,z.jsx)(j.Z,{fullWidth:!0,placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:B.query,onChange:function(e){M(J(J({},B),{},{query:e.currentTarget.value}))}})})]})}),(0,z.jsx)(p.ZP,{container:!0,spacing:2,children:V&&V.map((function(e){return(0,z.jsx)(p.ZP,{item:!0,children:(0,z.jsxs)(v.Z,{elevation:5,className:n.card,children:[(0,z.jsx)(b.Z,{title:"".concat((0,I.J)(e.category)," | ").concat((0,I.y)(e.country)),subheader:e.nameOfGoods}),(0,z.jsx)(O.Z,{className:n.media,image:e.imageUrl[0],title:e.nameOfGoods}),(0,z.jsx)(Z.Z,{children:(0,z.jsxs)(g.Z,{variant:"body2",color:"textSecondary",component:"p",children:["\u0426\u0435\u043d\u0430: ",e.priceOfGoods," ",S.$y,". \u041e\u0441\u0442\u0430\u0442\u043e\u043a:"," ",e.amountOfGoods>0?e.amountOfGoods+" \u0448\u0442.":"\u0422\u043e\u0432\u0430\u0440 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"]})}),(0,z.jsxs)(y.Z,{disableSpacing:!0,children:[(0,z.jsx)(P.Z,{size:"small",color:"primary",onClick:function(){return X(e._id,e.priceOfGoods,null)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0446\u0435\u043d\u0443"}),(0,z.jsx)(P.Z,{size:"small",color:"primary",onClick:function(){return X(e._id,null,e.amountOfGoods)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),(0,z.jsx)(P.Z,{size:"small",color:"primary",onClick:function(){return $(e._id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440"})]})]})},e._id)}))}),(0,z.jsx)(D,{open:o,price:E,amount:F,id:s,handleClose:function(){a(!1)}})]})}var X=n(65472),$=(0,i.Z)((function(){return(0,o.Z)({root:{marginTop:"50px",maxWidth:"900px",marginLeft:"auto",marginRight:"auto"}})})),U=!0;function H(e){var t=e.productList,n=$(),i=(0,a.kP)(),o=(0,r.Z)(i,2),s=o[0];return o[1]?null:s?s.role!==X.S.Admin?(0,z.jsx)(c.Z,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",children:(0,z.jsx)("h1",{children:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c"})}):(0,z.jsx)(c.Z,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 | \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0437\u0430\u043a\u0430\u0437\u0430\u043c\u0438",children:(0,z.jsx)("div",{className:n.root,children:(0,z.jsx)(V,{productList:t})})}):(0,z.jsx)(c.Z,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",children:(0,z.jsx)("h1",{children:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})}},22686:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/edititems",function(){return n(49529)}])}},function(e){e.O(0,[504,89,138,777,612,774,888,179],(function(){return t=22686,e(e.s=t);var t}));var t=e.O();_N_E=t}]);