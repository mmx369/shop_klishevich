(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{44267:function(e,r,n){"use strict";n.d(r,{Z:function(){return f}});var t=n(87462),s=n(63366),a=n(67294),i=(n(45697),n(86010)),o=n(60713),c=n(40549),d=n(61239),l=n(68919);function m(e){return(0,l.Z)("MuiCardContent",e)}(0,n(86288).Z)("MuiCardContent",["root"]);var u=n(85893);const h=["className","component"],x=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var f=a.forwardRef((function(e,r){const n=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:a,component:c="div"}=n,l=(0,s.Z)(n,h),f=(0,t.Z)({},n,{component:c}),Z=(e=>{const{classes:r}=e;return(0,o.Z)({root:["root"]},m,r)})(f);return(0,u.jsx)(x,(0,t.Z)({as:c,className:(0,i.Z)(Z.root,a),ownerState:f,ref:r},l))}))},66242:function(e,r,n){"use strict";n.d(r,{Z:function(){return Z}});var t=n(87462),s=n(63366),a=n(67294),i=(n(45697),n(86010)),o=n(60713),c=n(40549),d=n(61239),l=n(55113),m=n(68919);function u(e){return(0,m.Z)("MuiCard",e)}(0,n(86288).Z)("MuiCard",["root"]);var h=n(85893);const x=["className","raised"],f=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})((()=>({overflow:"hidden"})));var Z=a.forwardRef((function(e,r){const n=(0,d.Z)({props:e,name:"MuiCard"}),{className:a,raised:c=!1}=n,l=(0,s.Z)(n,x),m=(0,t.Z)({},n,{raised:c}),Z=(e=>{const{classes:r}=e;return(0,o.Z)({root:["root"]},u,r)})(m);return(0,h.jsx)(f,(0,t.Z)({className:(0,i.Z)(Z.root,a),elevation:c?8:void 0,ref:r,ownerState:m},l))}))},50103:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return R}});var t=n(16835),s=n(59874),a=n(73327),i=n(48633),o=n(50029),c=n(87794),d=n.n(c),l=n(66242),m=n(44267),u=n(36822),h=n(53457),x=n(61903),f=n(83321),Z=n(9669),j=n.n(Z),p=n(82175),g=n(11163),N=n(67294),v=n(2497),_=n(72132),w=(n(64213),n(74231)),B=n(30557),y=n(91053),b=n(85893);_.Am.configure();var M=(0,s.Z)((function(){return(0,a.Z)({errorMsg:{color:"red",fontStyle:"italic",fontSize:"x-small"},btnWrapper:{display:"flex",justifyContent:"center"}})})),C={firstName:"",secondName:"",fatherName:"",zip:"",country:"\u0420\u043e\u0441\u0441\u0438\u044f",region:"",city:"",address:"",phone:"",comments:""};function P(){var e=(0,g.useRouter)(),r=M(),n=(0,v.I0)(),t=(0,v.v9)(y.nG.currentCart),s=(0,v.v9)(y.bc.shippingPrice);(0,N.useEffect)((function(){n((0,B.i)(+window.localStorage.getItem("shippingPrice")))}),[]);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(l.Z,{"data-testid":"orderForm",children:(0,b.jsx)(m.Z,{children:(0,b.jsx)(p.J9,{initialValues:C,validationSchema:(0,w.Ry)({firstName:(0,w.Z_)().required("\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").min(3,"\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").max(100,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),secondName:(0,w.Z_)().required("\u041f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").max(100,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),fatherName:(0,w.Z_)().max(100,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),zip:(0,w.Z_)().required("\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").max(10),country:(0,w.Z_)().required("\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").max(100),region:(0,w.Z_)().max(100),city:(0,w.Z_)().required("\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").max(100),address:(0,w.Z_)().required("\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").max(100),phone:(0,w.Z_)().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439").required("\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c").min(10,"\u041d\u0435 \u043c\u0435\u043d\u0435\u0435 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(15,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),comments:(0,w.Z_)().max(100,"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}),onSubmit:function(){var r=(0,o.Z)(d().mark((function r(n,a){var i,c;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=a.setStatus,c=function(){var r=(0,o.Z)(d().mark((function r(){var a,o;return d().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a={firstName:n.firstName,secondName:n.secondName,fatherName:n.fatherName,zip:n.zip,country:n.country,region:n.region,city:n.city,address:n.address,phone:n.phone,comments:n.comments,order:t,totalPrice:t.reduce((function(e,r){return e+r.priceOfGoods*r.amountOfGoods}),0),shippingPrice:s},r.next=4,j().post("".concat("http://klishevich.ru","/api/addneworder"),a);case 4:o=r.sent,console.log("!!res",o.data),window.localStorage.removeItem("cart"),window.localStorage.removeItem("shippingPrice"),_.Am.success("\u0417\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d",{position:_.Am.POSITION.TOP_LEFT,autoClose:3e3}),e.push("/orders/".concat(o.data.order._id)),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(0),console.log(r.t0),i({success:!1});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}(),c();case 3:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),children:function(e,n,t,s){return(0,b.jsxs)(p.l0,{children:[(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"secondName",as:x.Z,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),(0,b.jsx)(p.Bc,{name:"secondName",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"firstName",as:x.Z,label:"\u0418\u043c\u044f"}),(0,b.jsx)(p.Bc,{name:"firstName",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"fatherName",as:x.Z,label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e(\u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438)"}),(0,b.jsx)(p.Bc,{name:"fatherName",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"zip",as:x.Z,label:"\u0418\u043d\u0434\u0435\u043a\u0441"}),(0,b.jsx)(p.Bc,{name:"zip",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"country",as:x.Z,label:"\u0421\u0442\u0440\u0430\u043d\u0430"}),(0,b.jsx)(p.Bc,{name:"country",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"region",as:x.Z,label:"\u0420\u0435\u0433\u0438\u043e\u043d(\u041e\u0431\u043b\u0430\u0441\u0442\u044c, \u043a\u0440\u0430\u0439)"}),(0,b.jsx)(p.Bc,{name:"region",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"city",as:x.Z,label:"\u0413\u043e\u0440\u043e\u0434"}),(0,b.jsx)(p.Bc,{name:"city",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"address",as:x.Z,label:"\u0410\u0434\u0440\u0435\u0441(\u0443\u043b\u0438\u0446\u0430, \u0434\u043e\u043c, \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430)"}),(0,b.jsx)(p.Bc,{name:"address",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"phone",as:x.Z,label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,b.jsx)(p.Bc,{name:"phone",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)(u.Z,{marginBottom:2,children:(0,b.jsxs)(h.Z,{children:[(0,b.jsx)(p.gN,{name:"comments",as:x.Z,label:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0437\u0430\u043a\u0430\u0437\u0443"}),(0,b.jsx)(p.Bc,{name:"comments",children:function(e){return(0,b.jsx)("div",{className:r.errorMsg,children:e})}})]})}),(0,b.jsx)("div",{className:r.btnWrapper,children:(0,b.jsx)(f.Z,{variant:"contained",color:"primary",type:"submit","data-testid":"checkoutBtn",disabled:t||s,children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435"})})]})}})})})})}var k=n(31612),S=(0,s.Z)((function(){return(0,a.Z)({root:{marginTop:"50px",maxWidth:"900px",marginLeft:"auto",marginRight:"auto"}})}));function R(){var e=S(),r=(0,i.kP)(),n=(0,t.Z)(r,2),s=n[0];return n[1]?null:s?(0,b.jsx)(k.Z,{title:"\u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430 | \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d | \u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u0431\u0430\u043d\u043a\u043d\u043e\u0442 \u0438 \u043c\u043e\u043d\u0435\u0442",children:(0,b.jsx)("div",{className:e.root,children:(0,b.jsx)(P,{})})}):(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(k.Z,{title:"\u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430 | \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d | \u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u0431\u0430\u043d\u043a\u043d\u043e\u0442 \u0438 \u043c\u043e\u043d\u0435\u0442",children:(0,b.jsx)("div",{className:e.root,"data-testid":"checkoutUnauthorizedPage",children:(0,b.jsx)("h3",{style:{textAlign:"center"},children:"\u0414\u043b\u044f \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f."})})})})}},76377:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return n(50103)}])}},function(e){e.O(0,[504,89,138,490,986,612,774,888,179],(function(){return r=76377,e(e.s=r);var r}));var r=e.O();_N_E=r}]);