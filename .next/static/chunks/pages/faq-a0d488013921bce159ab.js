_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"1iKp":function(e,t,n){"use strict";var a=n("TqRt"),i=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("q1tI")),r=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},"4WDp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("hDC6")}])},JQEk:function(e,t,n){"use strict";var a=n("wx14"),i=n("ODXe"),o=n("Ff2n"),r=n("q1tI"),s=n("iuhU"),d=(n("17x9"),n("dRu9")),c=n("H2TA"),l=n("wpWl"),u=n("4Hym"),p=n("tr08"),b=n("bfFb"),f=r.forwardRef((function(e,t){var n=e.children,c=e.classes,f=e.className,m=e.collapsedHeight,h=e.collapsedSize,x=void 0===h?"0px":h,g=e.component,v=void 0===g?"div":g,j=e.disableStrictModeCompat,O=void 0!==j&&j,E=e.in,y=e.onEnter,w=e.onEntered,R=e.onEntering,C=e.onExit,N=e.onExited,_=e.onExiting,k=e.style,D=e.timeout,T=void 0===D?l.b.standard:D,H=e.TransitionComponent,I=void 0===H?d.a:H,A=Object(o.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),M=Object(p.a)(),q=r.useRef(),B=r.useRef(null),P=r.useRef(),S="number"===typeof(m||x)?"".concat(m||x,"px"):m||x;r.useEffect((function(){return function(){clearTimeout(q.current)}}),[]);var $=M.unstable_strictMode&&!O,V=r.useRef(null),L=Object(b.a)(t,$?V:void 0),K=function(e){return function(t,n){if(e){var a=$?[V.current,t]:[t,n],o=Object(i.a)(a,2),r=o[0],s=o[1];void 0===s?e(r):e(r,s)}}},z=K((function(e,t){e.style.height=S,y&&y(e,t)})),F=K((function(e,t){var n=B.current?B.current.clientHeight:0,a=Object(u.a)({style:k,timeout:T},{mode:"enter"}).duration;if("auto"===T){var i=M.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),P.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),R&&R(e,t)})),J=K((function(e,t){e.style.height="auto",w&&w(e,t)})),U=K((function(e){var t=B.current?B.current.clientHeight:0;e.style.height="".concat(t,"px"),C&&C(e)})),W=K(N),X=K((function(e){var t=B.current?B.current.clientHeight:0,n=Object(u.a)({style:k,timeout:T},{mode:"exit"}).duration;if("auto"===T){var a=M.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),P.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=S,_&&_(e)}));return r.createElement(I,Object(a.a)({in:E,onEnter:z,onEntered:J,onEntering:F,onExit:U,onExited:W,onExiting:X,addEndListener:function(e,t){var n=$?e:t;"auto"===T&&(q.current=setTimeout(n,P.current||0))},nodeRef:$?V:void 0,timeout:"auto"===T?null:T},A),(function(e,t){return r.createElement(v,Object(a.a)({className:Object(s.a)(c.root,c.container,f,{entered:c.entered,exited:!E&&"0px"===S&&c.hidden}[e]),style:Object(a.a)({minHeight:S},k),ref:L},t),r.createElement("div",{className:c.wrapper,ref:B},r.createElement("div",{className:c.wrapperInner},n)))}))}));f.muiSupportAuto=!0,t.a=Object(c.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(f)},hDC6:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return D})),n.d(t,"default",(function(){return T}));var a=n("nKUr"),i=n("wx14"),o=n("DSFK"),r=n("25BE"),s=n("BsWD"),d=n("PYwp");var c=n("ODXe"),l=n("Ff2n"),u=n("q1tI"),p=(n("TOwV"),n("17x9"),n("iuhU")),b=n("JQEk"),f=n("kKAo"),m=n("H2TA");var h=u.createContext({}),x=n("yCxk"),g=u.forwardRef((function(e,t){var n,a=e.children,m=e.classes,g=e.className,v=e.defaultExpanded,j=void 0!==v&&v,O=e.disabled,E=void 0!==O&&O,y=e.expanded,w=e.onChange,R=e.square,C=void 0!==R&&R,N=e.TransitionComponent,_=void 0===N?b.a:N,k=e.TransitionProps,D=Object(l.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=Object(x.a)({controlled:y,default:j,name:"Accordion",state:"expanded"}),H=Object(c.a)(T,2),I=H[0],A=H[1],M=u.useCallback((function(e){A(!I),w&&w(e,!I)}),[I,w,A]),q=u.Children.toArray(a),B=(n=q,Object(o.a)(n)||Object(r.a)(n)||Object(s.a)(n)||Object(d.a)()),P=B[0],S=B.slice(1),$=u.useMemo((function(){return{expanded:I,disabled:E,toggle:M}}),[I,E,M]);return u.createElement(f.a,Object(i.a)({className:Object(p.a)(m.root,g,I&&m.expanded,E&&m.disabled,!C&&m.rounded),ref:t,square:C},D),u.createElement(h.Provider,{value:$},P),u.createElement(_,Object(i.a)({in:I,timeout:"auto"},k),u.createElement("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region"},S)))})),v=Object(m.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(g),j=n("VD++"),O=n("PsDL"),E=u.forwardRef((function(e,t){var n=e.children,a=e.classes,o=e.className,r=e.expandIcon,s=e.focusVisibleClassName,d=e.IconButtonProps,c=void 0===d?{}:d,b=e.onClick,f=Object(l.a)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),m=u.useContext(h),x=m.disabled,g=void 0!==x&&x,v=m.expanded,E=m.toggle;return u.createElement(j.a,Object(i.a)({focusRipple:!1,disableRipple:!0,disabled:g,component:"div","aria-expanded":v,className:Object(p.a)(a.root,o,g&&a.disabled,v&&a.expanded),focusVisibleClassName:Object(p.a)(a.focusVisible,a.focused,s),onClick:function(e){E&&E(e),b&&b(e)},ref:t},f),u.createElement("div",{className:Object(p.a)(a.content,v&&a.expanded)},n),r&&u.createElement(O.a,Object(i.a)({className:Object(p.a)(a.expandIcon,v&&a.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),r))})),y=Object(m.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(E),w=n("ofer"),R=u.forwardRef((function(e,t){var n=e.classes,a=e.className,o=Object(l.a)(e,["classes","className"]);return u.createElement("div",Object(i.a)({className:Object(p.a)(n.root,a),ref:t},o))})),C=Object(m.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(R),N=n("1iKp"),_=n.n(N),k=n("7Ubz"),D=!0;function T(e){var t=e.faq;return Object(a.jsx)(k.a,{title:"\u0412\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0442\u0432\u0435\u0442\u044b",children:Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsxs)(v,{children:[Object(a.jsx)(y,{expandIcon:Object(a.jsx)(_.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(a.jsx)(w.a,{variant:"h6",children:e.question})}),Object(a.jsx)(C,{children:Object(a.jsx)(w.a,{children:e.answer})})]},e.id)}))})})}}},[["4WDp",0,1,2,3,4]]]);