(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{6545:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return C},default:function(){return R}});var r=n(5893),o=n(1749),a=n(7294),s=n(3941),i=n(1163),c=n(7673),u=n(5723),l=n(4063),d=n.n(l),f=n(2949),p=n(6156),g=n(6594),h=n(1505),m=n(8380),j=n(1664);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=e.totalPages,n=(0,i.useRouter)().query;return(0,r.jsx)(h.Z,{page:parseInt((0,g.X)(n.page)||"1"),count:t,renderItem:function(e){return(0,r.jsx)(m.Z,y({component:v,query:n,item:e},e))}})}var v=(0,a.forwardRef)((function(e,t){var n=e.item,o=e.query,a=(0,f.Z)(e,["item","query"]);return(0,r.jsx)(j.default,{href:{pathname:"/shop",query:y(y({},o),{},{page:n.page})},shallow:!0,children:(0,r.jsx)("a",y(y({},a),{},{ref:t}))})})),Z=n(1120),P=n(7623),b=n(8463),_=n(4697),w=n(951),N=n(9912),E=n(2318),S=n(907),k=n(2738),q=n(4053),D=(0,Z.Z)((function(e){return(0,P.Z)({media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:S.Z[500]},achorTag:{textDecoration:"none"}})}));function G(e){var t=e.item,n=D();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(j.default,{href:"/goods/[type]/[country]/[id]",as:"/goods/".concat(t.category,"/").concat(t.country,"/").concat(t._id),children:(0,r.jsx)("a",{className:n.achorTag,children:(0,r.jsxs)(b.Z,{elevation:5,children:[(0,r.jsx)(_.Z,{title:"".concat((0,k.J)(t.category)," | ").concat((0,q.y)(t.country)),subheader:t.nameOfGoods}),(0,r.jsx)(w.Z,{className:n.media,image:t.imageUrl[0],title:t.nameOfGoods}),(0,r.jsx)(N.Z,{children:(0,r.jsxs)(E.Z,{variant:"body2",color:"textSecondary",component:"p",children:["\u0426\u0435\u043d\u0430: ",t.priceOfGoods," \u0440\u0443\u0431\u043b\u0435\u0439. \u041e\u0441\u0442\u0430\u0442\u043e\u043a:"," ",t.amountOfGoods>0?t.amountOfGoods+" \u0448\u0442.":"\u0422\u043e\u0432\u0430\u0440 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442"]})})]})})})})}var T=n(6013),C=!0;function R(e){var t=e.types,n=e.countries,l=e.goods,f=e.totalPages,p=(0,i.useRouter)().query,g=(0,a.useState)(p)[0],h=(0,u.ZP)("/api/shop?"+(0,c.stringify)(p),{initialData:d()(p,g)?{goods:l,totalPages:f}:void 0}).data;return(0,r.jsx)(T.Z,{title:"Shop Page",children:(0,r.jsxs)(o.Z,{container:!0,spacing:2,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,sm:5,md:3,lg:2,children:(0,r.jsx)(s.Z,{singleColumn:!0,types:t,countries:n})}),(0,r.jsxs)(o.Z,{container:!0,item:!0,xs:12,sm:7,md:9,lg:10,spacing:2,children:[(0,r.jsx)(o.Z,{item:!0,xs:12,children:(0,r.jsx)(O,{totalPages:null===h||void 0===h?void 0:h.totalPages})}),((null===h||void 0===h?void 0:h.goods)||[]).map((function(e){return(0,r.jsx)(o.Z,{item:!0,xs:12,sm:6,children:(0,r.jsx)(G,{item:e})},e._id)})),(0,r.jsx)(o.Z,{item:!0,xs:12,children:(0,r.jsx)(O,{totalPages:null===h||void 0===h?void 0:h.totalPages})})]})]})})}},1444:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop",function(){return n(6545)}])}},function(e){e.O(0,[65,619,799,537,436,188,513,256,568,836,286,774,888,179],(function(){return t=1444,e(e.s=t);var t}));var t=e.O();_N_E=t}]);