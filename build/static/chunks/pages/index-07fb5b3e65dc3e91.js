(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{29416:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(16835),o=n(4730),i=n(59499),c=n(55113),a=n(86886),l=n(94054),s=n(47312),u=n(40138),d=n(18972),p=n(83321),h=n(59874),f=n(73327),x=n(82175),j=n(11163),y=n(82515),b=n(96126),m=n(67169),g=n(85893),Z=["countries","type"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=(0,h.Z)((function(){return(0,f.Z)({root:{margin:"10px",marginTop:"50px"},paper:{margin:"auto",maxWidth:"500px",padding:"2rem"}})})),C=[0,10,100,500,1e3,5e3,1e4];function I(e){var t=e.productTypesCount,n=e.countriesCount,r=e.singleColumn,o=P(),i=(0,j.useRouter)().query,h=r?12:6,f={type:(0,b.X)(i.type)||"all",country:(0,b.X)(i.country)||"all",minPrice:(0,b.X)(i.minPrice)||"all",maxPrice:(0,b.X)(i.maxPrice)||"all"};return(0,g.jsx)("div",{className:o.root,"data-testid":"searchForm",children:(0,g.jsx)(x.J9,{initialValues:f,onSubmit:function(e){j.default.push({pathname:"/shop",query:O(O({},e),{},{page:1})},void 0,{shallow:!0})},children:function(e){var r=e.values;return(0,g.jsx)(x.l0,{children:(0,g.jsx)(c.Z,{elevation:2,className:o.paper,children:(0,g.jsxs)(a.ZP,{container:!0,spacing:3,children:[(0,g.jsx)(a.ZP,{item:!0,xs:12,sm:h,children:(0,g.jsxs)(l.Z,{fullWidth:!0,variant:"standard",children:[(0,g.jsx)(s.Z,{id:"search-type",children:"\u0422\u0438\u043f \u0442\u043e\u0432\u0430\u0440\u0430"}),(0,g.jsxs)(x.gN,{name:"type",as:u.Z,labelId:"search-type",label:"Type","data-testid":"productFieldSelect",children:[(0,g.jsx)(d.Z,{value:"all",children:(0,g.jsx)("em",{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"})}),t.map((function(e){return(0,g.jsx)(d.Z,{value:e.type,"data-testid":"selectOptionsProductTypes",children:"".concat((0,m.J)(e.type)," (").concat(e.count,")")},e.type)}))]})]})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,sm:h,children:(0,g.jsx)(w,{type:r.type,name:"country",countries:n})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,sm:h,children:(0,g.jsxs)(l.Z,{fullWidth:!0,variant:"standard",children:[(0,g.jsx)(s.Z,{id:"search-min-price",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430"}),(0,g.jsxs)(x.gN,{name:"minPrice",as:u.Z,labelId:"search-min-price",label:"Min price","data-testid":"minPriceFieldSelect",children:[(0,g.jsx)(d.Z,{value:"all",children:(0,g.jsx)("em",{children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})}),C.map((function(e){return(0,g.jsx)(d.Z,{value:e,"data-testid":"selectOptionsMinPrice",children:e},e)}))]})]})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,sm:h,children:(0,g.jsxs)(l.Z,{fullWidth:!0,variant:"standard",children:[(0,g.jsx)(s.Z,{id:"search-max-price",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0446\u0435\u043d\u0430"}),(0,g.jsxs)(x.gN,{name:"maxPrice",as:u.Z,labelId:"search-max-price",label:"Max price","data-testid":"maxPriceFieldSelect",children:[(0,g.jsx)(d.Z,{value:"all",children:(0,g.jsx)("em",{children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"})}),C.map((function(e){return(0,g.jsx)(d.Z,{value:e,"data-testid":"selectOptionsMaxPrice",children:e},e)}))]})]})}),(0,g.jsx)(a.ZP,{item:!0,xs:12,children:(0,g.jsx)(p.Z,{fullWidth:!0,type:"submit",variant:"contained",color:"primary","data-testid":"searchBtn",children:"\u0418\u0441\u043a\u0430\u0442\u044c"})})]})})})}})})}function w(e){var t=e.countries,n=e.type,i=(0,o.Z)(e,Z),c=(0,x.u6)().setFieldValue,a=(0,x.U$)({name:i.name}),p=(0,r.Z)(a,1)[0],h=(0,y.ZP)("/api/getcountry?type="+n,{dedupingInterval:6e4,onSuccess:function(e){e.map((function(e){return e.country})).includes(p.value)||c("country","all")}}).data||t;return(0,g.jsxs)(l.Z,{fullWidth:!0,variant:"standard",children:[(0,g.jsx)(s.Z,{id:"search-country",children:"\u0421\u0442\u0440\u0430\u043d\u0430"}),(0,g.jsxs)(u.Z,O(O(O({labelId:"search-country",label:"Country"},p),i),{},{"data-testid":"countryFieldSelect",children:[(0,g.jsx)(d.Z,{value:"all",children:(0,g.jsx)("em",{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"})}),h.map((function(e){return(0,g.jsx)(d.Z,{value:e.country,"data-testid":"selectOptionsCountry",children:"".concat((0,m.y)(e.country)," (").concat(e.count,")")},e.country)}))]}))]})}},96126:function(e,t,n){"use strict";function r(e){return"undefined"===typeof e?"":Array.isArray(e)?e[0]:e}n.d(t,{X:function(){return r}})},71345:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return _},default:function(){return $}});var r=n(86886),o=n(50029),i=n(87794),c=n.n(i),a=n(42096),l=n(32440),s=n(25068),u=n(38532),d=n(4707),p=n(59874),h=n(73327),f=n(11163),x=n(67169),j=n(59499),y=n(4730),b=n(26452),m=n(15861),g=n(85893),Z=["labelText","labelIcon","labelInfo","color","bgColor"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=(0,p.Z)((function(e){return(0,h.Z)({root:{color:e.palette.text.secondary,"&:hover > $content":{backgroundColor:e.palette.action.hover},"&:focus > $content, &$selected > $content":{backgroundColor:"var(--tree-view-bg-color, ".concat(e.palette.grey[400],")"),color:"var(--tree-view-color)"},"&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":{backgroundColor:"transparent"}},content:{color:e.palette.text.secondary,borderTopRightRadius:e.spacing(2),borderBottomRightRadius:e.spacing(2),paddingRight:e.spacing(1),fontWeight:e.typography.fontWeightMedium,"$expanded > &":{fontWeight:null===e||void 0===e?void 0:e.typography.fontWeightRegular}},group:{marginLeft:0,"& $content":{paddingLeft:e.spacing(2)}},expanded:{},selected:{},label:{fontWeight:"inherit",color:"inherit"},labelRoot:{display:"flex",alignItems:"center",padding:e.spacing(.5,0)},labelIcon:{marginRight:e.spacing(1)},labelText:{fontWeight:"inherit",flexGrow:1}})}));function P(e){var t=O(),n=e.labelText,r=e.labelIcon,o=e.labelInfo,i=e.color,c=e.bgColor,a=(0,y.Z)(e,Z);return(0,g.jsx)(b.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({label:(0,g.jsxs)("div",{className:t.labelRoot,children:[(0,g.jsx)(r,{color:"inherit",className:t.labelIcon}),(0,g.jsx)(m.Z,{variant:"body2",className:t.labelText,children:n}),(0,g.jsx)(m.Z,{variant:"caption",color:"inherit",children:o})]}),style:{"--tree-view-color":i,"--tree-view-bg-color":c},classes:{root:t.root,content:t.content,expanded:t.expanded,selected:t.selected,group:t.group,label:t.label}},a))}var C=(0,p.Z)((function(){return(0,h.Z)({root:{padding:20}})}));function I(e){var t=e.listOfCountries,n=e.listOfCountriesCoins,r=C(),i=function(){var e=(0,o.Z)(c().mark((function e(t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.default.push({pathname:"/shop",query:{type:t,country:n,page:1}},void 0,{shallow:!0});case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{className:r.root,"data-testid":"catalogLeft",children:(0,g.jsx)(d.Z,{defaultExpanded:["1","2"],defaultCollapseIcon:(0,g.jsx)(a.Z,{}),defaultExpandIcon:(0,g.jsx)(l.Z,{}),defaultEndIcon:(0,g.jsx)("div",{style:{width:24}}),children:(0,g.jsxs)(P,{nodeId:"1",labelText:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433",labelIcon:s.Z,children:[(0,g.jsxs)(P,{nodeId:"2",labelText:"\u0411\u0430\u043d\u043a\u043d\u043e\u0442\u044b",labelIcon:u.Z,children:[(0,g.jsx)(P,{nodeId:"8",labelText:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435",labelIcon:l.Z,onClick:function(){return i("Paper Money","all")}}),t.map((function(e,t){return(0,g.jsx)(P,{nodeId:String(t+10),labelIcon:l.Z,labelText:"".concat((0,x.y)(e.country)),labelInfo:e.count.toString(),"data-testid":"test-".concat(e.country),color:"#1a73e8",bgColor:"#e8f0fe",onClick:function(){return i("Paper Money",e.country)}},e.country)}))]}),(0,g.jsxs)(P,{nodeId:"5",labelText:"\u041c\u043e\u043d\u0435\u0442\u044b",labelIcon:u.Z,children:[(0,g.jsx)(P,{nodeId:"9",labelText:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435",labelIcon:l.Z,onClick:function(){return i("Coins","all")}}),n.map((function(e,t){return(0,g.jsx)(P,{nodeId:String(t+100),labelText:"".concat((0,x.y)(e.country)),labelIcon:l.Z,labelInfo:e.count.toString(),color:"#1a73e8",bgColor:"#e8f0fe",onClick:function(){return i("Coins",e.country)}},e.country)}))]})]})})})}var w=n(41664),T=(0,p.Z)((function(){return(0,h.Z)({root:{marginTop:50}})}));function k(){var e=T();return(0,g.jsx)("section",{className:e.root,children:(0,g.jsxs)(m.Z,{variant:"subtitle2",align:"justify","data-testid":"mainTextBlock",children:["\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e \u0412\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0438 \u0438 \u043d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0438. \u0412 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u044b \u0411\u0430\u043d\u043a\u043d\u043e\u0442\u044b \u0438 \u041c\u043e\u043d\u0435\u0442\u044b. \u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f. \u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u0431\u0430\u043d\u043a\u043d\u043e\u0442 \u0438\u043b\u0438 \u043c\u043e\u043d\u0435\u0442 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c (\u041f\u043e\u0447\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438), \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438. ",(0,g.jsx)("p",{children:"\u0423\u0434\u0430\u0447\u043d\u043e\u0439 \u0432\u0430\u043c \u043f\u043e\u043a\u0443\u043f\u043a\u0438!"})," \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u043e\u043f\u043b\u0430\u0442\u044b \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xa0",(0,g.jsx)("strong",{children:(0,g.jsx)(w.default,{href:"/paymentandshipping",children:(0,g.jsx)("a",{"data-testid":"navPaymentLink",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430."})})})]})})}var N=n(29416),S=n(31612),_=!0;function $(e){var t=e.productTypesCount,n=e.listOfCountriesCount,o=e.listOfCountriesCoinsCount;return(0,g.jsxs)(S.Z,{title:"\u041d\u0443\u043c\u0438\u0437\u043c\u0430\u0442\u0438\u043a\u0430 \u0438 \u0431\u043e\u043d\u0438\u0441\u0442\u0438\u043a\u0430 | \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d | \u041f\u0440\u043e\u0434\u0430\u0436\u0430 \u0431\u0430\u043d\u043a\u043d\u043e\u0442 \u0438 \u043c\u043e\u043d\u0435\u0442",children:[(0,g.jsx)(r.ZP,{container:!0,spacing:2,children:(0,g.jsx)(r.ZP,{item:!0,xs:12,children:(0,g.jsx)(k,{})})}),(0,g.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,g.jsx)(r.ZP,{item:!0,xs:12,sm:4,children:(0,g.jsx)(I,{listOfCountries:n,listOfCountriesCoins:o})}),(0,g.jsx)(r.ZP,{item:!0,xs:12,sm:8,children:(0,g.jsx)(N.Z,{productTypesCount:t,countriesCount:[]})})]})]})}},45301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(71345)}])}},function(e){e.O(0,[504,89,138,490,14,474,612,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);