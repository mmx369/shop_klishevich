"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{42096:function(e,t,n){var r=n(88169),o=n(85893);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown")},32440:function(e,t,n){var r=n(88169),o=n(85893);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"m10 17 5-5-5-5v10z"}),"ArrowRight")},25068:function(e,t,n){var r=n(88169),o=n(85893);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"}),"Label")},38532:function(e,t,n){var r=n(88169),o=n(85893);t.Z=(0,r.Z)([(0,o.jsx)("path",{d:"M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"},"0"),(0,o.jsx)("path",{d:"M2 4v16h20V4H2zm2 14V6h16v12H4z"},"1")],"Money")},26452:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=(n(45697),n(57922)),l=n(40549),c=n(94581),d=n(61239),u=n(51705),p=n(8038),f=n(75368),h=n(36915),m=n(92141);var x=n(85893);const b=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"];var g=i.forwardRef((function(e,t){const{classes:n,className:s,displayIcon:l,expansionIcon:c,icon:d,label:u,nodeId:p,onClick:f,onMouseDown:m}=e,g=(0,r.Z)(e,b),{disabled:Z,expanded:I,selected:y,focused:v,handleExpansion:C,handleSelection:w,preventSelection:E}=function(e){const{focus:t,isExpanded:n,isExpandable:r,isFocused:o,isDisabled:a,isSelected:s,multiSelect:l,selectNode:c,selectRange:d,toggleExpansion:u}=i.useContext(h.Z),p=!!r&&r(e),f=!!n&&n(e),m=!!o&&o(e),x=!!a&&a(e),b=!!s&&s(e);return{disabled:x,expanded:f,selected:b,focused:m,handleExpansion:r=>{if(!x){m||t(r,e);const o=l&&(r.shiftKey||r.ctrlKey||r.metaKey);!p||o&&n(e)||u(r,e)}},handleSelection:n=>{x||(m||t(n,e),l&&(n.shiftKey||n.ctrlKey||n.metaKey)?n.shiftKey?d(n,{end:e}):c(n,e,!0):c(n,e))},preventSelection:e=>{(e.shiftKey||e.ctrlKey||e.metaKey||x)&&e.preventDefault()}}}(p),S=d||c||l;return(0,x.jsxs)("div",(0,o.Z)({className:(0,a.Z)(s,n.root,I&&n.expanded,y&&n.selected,v&&n.focused,Z&&n.disabled),onClick:e=>{C(e),w(e),f&&f(e)},onMouseDown:e=>{E(e),m&&m(e)},ref:t},g,{children:[(0,x.jsx)("div",{className:n.iconContainer,children:S}),(0,x.jsx)("div",{className:n.label,children:u})]}))})),Z=n(64719);function I(e){return(0,Z.Z)("MuiTreeItem",e)}var y=(0,n(72515).Z)("MuiTreeItem",["root","group","content","expanded","selected","focused","disabled","iconContainer","label"]);const v=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],C=(0,l.ZP)("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:(e,t)=>t.root})({listStyle:"none",margin:0,padding:0,outline:0}),w=(0,l.ZP)(g,{name:"MuiTreeItem",slot:"Content",overridesResolver:(e,t)=>[t.content,t.iconContainer&&{[`& .${y.iconContainer}`]:t.iconContainer},t.label&&{[`& .${y.label}`]:t.label}]})((({theme:e})=>({padding:"0 8px",width:"100%",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.disabled}`]:{opacity:e.palette.action.disabledOpacity,backgroundColor:"transparent"},[`&.${y.focused}`]:{backgroundColor:e.palette.action.focus},[`&.${y.selected}`]:{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${y.focused}`]:{backgroundColor:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`& .${y.iconContainer}`]:{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}},[`& .${y.label}`]:(0,o.Z)({width:"100%",minWidth:0,paddingLeft:4,position:"relative"},e.typography.body1)}))),E=(0,l.ZP)(s.Z,{name:"MuiTreeItem",slot:"Group",overridesResolver:(e,t)=>t.group})({margin:0,padding:0,marginLeft:17});var S=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiTreeItem"}),{children:l,className:c,collapseIcon:b,ContentComponent:Z=g,ContentProps:y,endIcon:S,expandIcon:k,disabled:M,icon:N,id:O,label:R,nodeId:T,onClick:D,onMouseDown:j,TransitionComponent:F=s.Z,TransitionProps:P}=n,z=(0,r.Z)(n,v),{icons:K={},focus:$,isExpanded:A,isFocused:L,isSelected:V,isDisabled:H,multiSelect:q,disabledItemsFocusable:W,mapFirstChar:_,unMapFirstChar:B,registerNode:G,unregisterNode:U,treeId:Y}=i.useContext(h.Z);let J=null;null!=O?J=O:Y&&T&&(J=`${Y}-${T}`);const[Q,X]=i.useState(null),ee=i.useRef(null),te=(0,u.Z)(X,t),ne=i.useMemo((()=>({element:Q,id:T})),[T,Q]),{index:re,parentId:oe}=(0,m.Y)(ne),ie=Boolean(Array.isArray(l)?l.length:l),ae=!!A&&A(T),se=!!L&&L(T),le=!!V&&V(T),ce=!!H&&H(T),de=(0,o.Z)({},n,{expanded:ae,focused:se,selected:le,disabled:ce}),ue=(e=>{const{classes:t}=e;return(0,f.Z)({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},I,t)})(de);let pe,fe,he;return ie&&(fe=ae?b||K.defaultCollapseIcon:k||K.defaultExpandIcon),pe=ie?K.defaultParentIcon:S||K.defaultEndIcon,i.useEffect((()=>{if(G&&U&&-1!==re)return G({id:T,idAttribute:J,index:re,parentId:oe,expandable:ie,disabled:M}),()=>{U(T)}}),[G,U,oe,re,T,ie,M,J]),i.useEffect((()=>{if(_&&B&&R)return _(T,ee.current.textContent.substring(0,1).toLowerCase()),()=>{B(T)}}),[_,B,T,R]),q?he=le:le&&(he=!0),(0,x.jsxs)(C,(0,o.Z)({className:(0,a.Z)(ue.root,c),role:"treeitem","aria-expanded":ie?ae:null,"aria-selected":he,"aria-disabled":ce||null,ref:te,id:J,tabIndex:-1},z,{ownerState:de,onFocus:function(e){e.target===e.currentTarget&&(0,p.Z)(e.target).getElementById(Y).focus({preventScroll:!0});const t=!W&&ce;se||e.currentTarget!==e.target||t||$(e,T)},children:[(0,x.jsx)(w,(0,o.Z)({as:Z,ref:ee,classes:{root:ue.content,expanded:ue.expanded,selected:ue.selected,focused:ue.focused,disabled:ue.disabled,iconContainer:ue.iconContainer,label:ue.label},label:R,nodeId:T,onClick:D,onMouseDown:j,icon:N,expansionIcon:fe,displayIcon:pe,ownerState:de},y)),l&&(0,x.jsx)(m.w,{id:T,children:(0,x.jsx)(E,(0,o.Z)({as:F,unmountOnExit:!0,className:ue.group,in:ae,component:"ul",role:"group"},P,{children:l}))})]}))}))},4707:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(87462),o=n(63366),i=n(67294),a=n(86010),s=(n(45697),n(40549)),l=n(61239),c=n(2734),d=n(75368),u=n(27909),p=n(51705),f=n(49299),h=n(8038),m=n(36915),x=n(92141),b=n(64719);function g(e){return(0,b.Z)("MuiTreeView",e)}(0,n(72515).Z)("MuiTreeView",["root"]);var Z=n(85893);const I=["children","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disabledItemsFocusable","disableSelection","expanded","id","multiSelect","onBlur","onFocus","onKeyDown","onNodeFocus","onNodeSelect","onNodeToggle","selected"],y=(0,s.ZP)("ul",{name:"MuiTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0});function v(e,t,n){for(let r=t;r<e.length;r+=1)if(n===e[r])return r;return-1}function C(){return!1}const w=[],E=[];var S=i.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiTreeView"}),{children:s,className:b,defaultCollapseIcon:S,defaultEndIcon:k,defaultExpanded:M=w,defaultExpandIcon:N,defaultParentIcon:O,defaultSelected:R=E,disabledItemsFocusable:T=!1,disableSelection:D=!1,expanded:j,id:F,multiSelect:P=!1,onBlur:z,onFocus:K,onKeyDown:$,onNodeFocus:A,onNodeSelect:L,onNodeToggle:V,selected:H}=n,q=(0,o.Z)(n,I),W="rtl"===(0,c.Z)().direction,_=(0,r.Z)({},n,{defaultExpanded:M,defaultSelected:R,disabledItemsFocusable:T,disableSelection:D,multiSelect:P}),B=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},g,t)})(_),G=(0,u.Z)(F),U=i.useRef(null),Y=(0,p.Z)(U,t),[J,Q]=i.useState(null),X=i.useRef({}),ee=i.useRef({}),[te,ne]=(0,f.Z)({controlled:j,default:M,name:"TreeView",state:"expanded"}),[re,oe]=(0,f.Z)({controlled:H,default:R,name:"TreeView",state:"selected"}),ie=i.useCallback((e=>!!Array.isArray(te)&&-1!==te.indexOf(e)),[te]),ae=i.useCallback((e=>X.current[e]&&X.current[e].expandable),[]),se=i.useCallback((e=>Array.isArray(re)?-1!==re.indexOf(e):re===e),[re]),le=i.useCallback((e=>{let t=X.current[e];if(!t)return!1;if(t.disabled)return!0;for(;null!=t.parentId;)if(t=X.current[t.parentId],t.disabled)return!0;return!1}),[]),ce=e=>Object.keys(X.current).map((e=>X.current[e])).filter((t=>t.parentId===e)).sort(((e,t)=>e.index-t.index)).map((e=>e.id)),de=e=>{let t=ce(e);return T||(t=t.filter((e=>!le(e)))),t},ue=e=>{if(ie(e)&&de(e).length>0)return de(e)[0];let t=X.current[e];for(;null!=t;){const e=de(t.parentId),n=e[e.indexOf(t.id)+1];if(n)return n;t=X.current[t.parentId]}return null},pe=e=>{const t=X.current[e],n=de(t.parentId),r=n.indexOf(e);if(0===r)return t.parentId;let o=n[r-1];for(;ie(o)&&de(o).length>0;)o=de(o).pop();return o},fe=()=>{let e=de(null).pop();for(;ie(e);)e=de(e).pop();return e},he=()=>de(null)[0],me=(e,t)=>{const[n,r]=((e,t)=>{if(e===t)return[e,t];const n=X.current[e],r=X.current[t];if(n.parentId===r.id||r.parentId===n.id)return r.parentId===n.id?[n.id,r.id]:[r.id,n.id];const o=[n.id],i=[r.id];let a=n.parentId,s=r.parentId,l=-1!==i.indexOf(a),c=-1!==o.indexOf(s),d=!0,u=!0;for(;!c&&!l;)d&&(o.push(a),l=-1!==i.indexOf(a),d=null!==a,!l&&d&&(a=X.current[a].parentId)),u&&!l&&(i.push(s),c=-1!==o.indexOf(s),u=null!==s,!c&&u&&(s=X.current[s].parentId));const p=l?a:s,f=ce(p),h=o[o.indexOf(p)-1],m=i[i.indexOf(p)-1];return f.indexOf(h)<f.indexOf(m)?[e,t]:[t,e]})(e,t),o=[n];let i=n;for(;i!==r;)i=ue(i),o.push(i);return o},xe=(e,t)=>{t&&(Q(t),A&&A(e,t))},be=(e,t)=>xe(e,ue(t)),ge=(e,t=J)=>{let n;n=-1!==te.indexOf(t)?te.filter((e=>e!==t)):[t].concat(te),V&&V(e,n),ne(n)},Ze=i.useRef(null),Ie=i.useRef(!1),ye=i.useRef([]),ve=(e,t,n=!1)=>!!t&&(n?((e,t)=>{let n;n=-1!==re.indexOf(t)?re.filter((e=>e!==t)):[t].concat(re),L&&L(e,n),oe(n)})(e,t):((e,t)=>{const n=P?[t]:t;L&&L(e,n),oe(n)})(e,t),Ze.current=t,Ie.current=!1,ye.current=[],!0),Ce=(e,t,n=!1)=>{const{start:r=Ze.current,end:o,current:i}=t;n?((e,t)=>{let n=re.slice();const{start:r,next:o,current:i}=t;o&&i&&(-1===ye.current.indexOf(i)&&(ye.current=[]),Ie.current?-1!==ye.current.indexOf(o)?(n=n.filter((e=>e===r||e!==i)),ye.current=ye.current.filter((e=>e===r||e!==i))):(n.push(o),ye.current.push(o)):(n.push(o),ye.current.push(i,o)),L&&L(e,n),oe(n))})(e,{start:r,next:o,current:i}):null!=r&&null!=o&&((e,t)=>{let n=re.slice();const{start:r,end:o}=t;Ie.current&&(n=n.filter((e=>-1===ye.current.indexOf(e))));let i=me(r,o);i=i.filter((e=>!le(e))),ye.current=i;let a=n.concat(i);a=a.filter(((e,t)=>a.indexOf(e)===t)),L&&L(e,a),oe(a)})(e,{start:r,end:o}),Ie.current=!0},we=i.useCallback((e=>{const{id:t,index:n,parentId:r,expandable:o,idAttribute:i,disabled:a}=e;X.current[t]={id:t,index:n,parentId:r,expandable:o,idAttribute:i,disabled:a}}),[]),Ee=i.useCallback((e=>{const t=(0,r.Z)({},X.current);delete t[e],X.current=t,Q((t=>t===e&&U.current===(0,h.Z)(U.current).activeElement?ce(null)[0]:t))}),[]),Se=i.useCallback(((e,t)=>{ee.current[e]=t}),[]),ke=i.useCallback((e=>{const t=(0,r.Z)({},ee.current);delete t[e],ee.current=t}),[]),Me=e=>(ae(J)&&(ie(J)?be(e,J):le(J)||ge(e)),!0),Ne=e=>{if(ie(J)&&!le(J))return ge(e,J),!0;const t=(n=J,X.current[n].parentId);var n;return!!t&&(xe(e,t),!0)},Oe=X.current[J]?X.current[J].idAttribute:null;return(0,Z.jsx)(m.Z.Provider,{value:{icons:{defaultCollapseIcon:S,defaultExpandIcon:N,defaultParentIcon:O,defaultEndIcon:k},focus:xe,toggleExpansion:ge,isExpanded:ie,isExpandable:ae,isFocused:e=>J===e,isSelected:se,isDisabled:le,selectNode:D?C:ve,selectRange:D?C:Ce,multiSelect:P,disabledItemsFocusable:T,mapFirstChar:Se,unMapFirstChar:ke,registerNode:we,unregisterNode:Ee,treeId:G},children:(0,Z.jsx)(x.w,{children:(0,Z.jsx)(y,(0,r.Z)({role:"tree",id:G,"aria-activedescendant":Oe,"aria-multiselectable":P,className:(0,a.Z)(B.root,b),ref:Y,tabIndex:0,onKeyDown:e=>{let t=!1;const n=e.key;if(e.altKey||e.currentTarget!==e.target||!J)return;const r=e.ctrlKey||e.metaKey;switch(n){case" ":D||le(J)||(P&&e.shiftKey?(Ce(e,{end:J}),t=!0):t=P?ve(e,J,!0):ve(e,J)),e.stopPropagation();break;case"Enter":le(J)||(ae(J)?(ge(e),t=!0):t=P?ve(e,J,!0):ve(e,J)),e.stopPropagation();break;case"ArrowDown":P&&e.shiftKey&&!D&&((e,t)=>{le(ue(t))||Ce(e,{end:ue(t),current:t},!0)})(e,J),be(e,J),t=!0;break;case"ArrowUp":P&&e.shiftKey&&!D&&((e,t)=>{le(pe(t))||Ce(e,{end:pe(t),current:t},!0)})(e,J),((e,t)=>{xe(e,pe(t))})(e,J),t=!0;break;case"ArrowRight":t=W?Ne(e):Me(e);break;case"ArrowLeft":t=W?Me(e):Ne(e);break;case"Home":P&&r&&e.shiftKey&&!D&&!le(J)&&((e,t)=>{Ze.current||(Ze.current=t);const n=Ie.current?Ze.current:t;Ce(e,{start:n,end:he()})})(e,J),(e=>{xe(e,he())})(e),t=!0;break;case"End":P&&r&&e.shiftKey&&!D&&!le(J)&&((e,t)=>{Ze.current||(Ze.current=t);const n=Ie.current?Ze.current:t;Ce(e,{start:n,end:fe()})})(e,J),(e=>{xe(e,fe())})(e),t=!0;break;default:"*"===n?(((e,t)=>{const n=X.current[t],r=ce(n.parentId).filter((e=>ae(e)&&!ie(e))),o=te.concat(r);r.length>0&&(ne(o),V&&V(e,o))})(e,J),t=!0):P&&r&&"a"===n.toLowerCase()&&!D?((e=>{Ce(e,{start:he(),end:fe()})})(e),t=!0):!r&&!e.shiftKey&&((o=n)&&1===o.length&&o.match(/\S/))&&(((e,t,n)=>{let r,o;const i=n.toLowerCase(),a=[],s=[];Object.keys(ee.current).forEach((e=>{const t=ee.current[e],n=X.current[e],r=!n.parentId||ie(n.parentId),o=!T&&le(e);r&&!o&&(a.push(e),s.push(t))})),r=a.indexOf(t)+1,r>=a.length&&(r=0),o=v(s,r,i),-1===o&&(o=v(s,0,i)),o>-1&&xe(e,a[o])})(e,J,n),t=!0)}var o;t&&(e.preventDefault(),e.stopPropagation()),$&&$(e)},onFocus:e=>{if(e.target===e.currentTarget){const t=Array.isArray(re)?re[0]:re;xe(e,t||de(null)[0])}K&&K(e)},onBlur:e=>{Q(null),z&&z(e)},ownerState:_},q,{children:s}))})})}))},36915:function(e,t,n){const r=n(67294).createContext({});t.Z=r},92141:function(e,t,n){n.d(t,{Y:function(){return u},w:function(){return p}});var r=n(63366),o=n(87462),i=n(67294),a=(n(45697),n(58974)),s=n(85893);const l=["element"];const c=i.createContext({});const d=()=>{};function u(e){const[,t]=i.useState(),{registerDescendant:n=d,unregisterDescendant:r=d,descendants:s=[],parentId:l=null}=i.useContext(c),u=function(e,t){for(let n=0;n<e.length;n+=1)if(t(e[n]))return n;return-1}(s,(t=>t.element===e.element)),p=function(e){const t=i.useRef(null);return i.useEffect((()=>{t.current=e}),[e]),t.current}(s),f=s.some(((e,t)=>p&&p[t]&&p[t].element!==e.element));return(0,a.Z)((()=>{if(e.element)return n((0,o.Z)({},e,{index:u})),()=>{r(e.element)};t({})}),[n,r,u,f,e]),{parentId:l,index:u}}function p(e){const{children:t,id:n}=e,[a,d]=i.useState([]),u=i.useCallback((e=>{let{element:t}=e,n=(0,r.Z)(e,l);d((e=>{let r;if(0===e.length)return[(0,o.Z)({},n,{element:t,index:0})];const i=function(e,t){let n=0,r=e.length-1;for(;n<=r;){const o=Math.floor((n+r)/2);if(e[o].element===t)return o;e[o].element.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?r=o-1:n=o+1}return n}(e,t);if(e[i]&&e[i].element===t)r=e;else{const a=(0,o.Z)({},n,{element:t,index:i});r=e.slice(),r.splice(i,0,a)}return r.forEach(((e,t)=>{e.index=t})),r}))}),[]),p=i.useCallback((e=>{d((t=>t.filter((t=>e!==t.element))))}),[]),f=i.useMemo((()=>({descendants:a,registerDescendant:u,unregisterDescendant:p,parentId:n})),[a,u,p,n]);return(0,s.jsx)(c.Provider,{value:f,children:t})}},75368:function(e,t,n){function r(e,t,n){const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>(r&&(n&&n[r]&&e.push(n[r]),e.push(t(r))),e)),[]).join(" ")})),r}n.d(t,{Z:function(){return r}})},64719:function(e,t,n){n.d(t,{Z:function(){return a}});const r=e=>e;var o=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})();const i={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function a(e,t){return i[t]||`${o.generate(e)}-${t}`}},72515:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(64719);function o(e,t){const n={};return t.forEach((t=>{n[t]=(0,r.Z)(e,t)})),n}},57922:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(63366),o=n(87462),i=n(67294),a=n(86010),s=(n(45697),n(98885)),l=n(60713),c=n(40549),d=n(61239),u=n(96067),p=n(30577),f=n(2734),h=n(51705),m=n(68919);function x(e){return(0,m.Z)("MuiCollapse",e)}(0,n(86288).Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var b=n(85893);const g=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Z=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,o.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,o.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),I=(0,c.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,o.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),y=(0,c.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,o.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),v=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiCollapse"}),{addEndListener:c,children:m,className:v,collapsedSize:C="0px",component:w,easing:E,in:S,onEnter:k,onEntered:M,onEntering:N,onExit:O,onExited:R,onExiting:T,orientation:D="vertical",style:j,timeout:F=u.x9.standard,TransitionComponent:P=s.ZP}=n,z=(0,r.Z)(n,g),K=(0,o.Z)({},n,{orientation:D,collapsedSize:C}),$=(e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,l.Z)(r,x,n)})(K),A=(0,f.Z)(),L=i.useRef(),V=i.useRef(null),H=i.useRef(),q="number"===typeof C?`${C}px`:C,W="horizontal"===D,_=W?"width":"height";i.useEffect((()=>()=>{clearTimeout(L.current)}),[]);const B=i.useRef(null),G=(0,h.Z)(t,B),U=e=>t=>{if(e){const n=B.current;void 0===t?e(n):e(n,t)}},Y=()=>V.current?V.current[W?"clientWidth":"clientHeight"]:0,J=U(((e,t)=>{V.current&&W&&(V.current.style.position="absolute"),e.style[_]=q,k&&k(e,t)})),Q=U(((e,t)=>{const n=Y();V.current&&W&&(V.current.style.position="");const{duration:r,easing:o}=(0,p.C)({style:j,timeout:F,easing:E},{mode:"enter"});if("auto"===F){const t=A.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,H.current=t}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[_]=`${n}px`,e.style.transitionTimingFunction=o,N&&N(e,t)})),X=U(((e,t)=>{e.style[_]="auto",M&&M(e,t)})),ee=U((e=>{e.style[_]=`${Y()}px`,O&&O(e)})),te=U(R),ne=U((e=>{const t=Y(),{duration:n,easing:r}=(0,p.C)({style:j,timeout:F,easing:E},{mode:"exit"});if("auto"===F){const n=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,H.current=n}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[_]=q,e.style.transitionTimingFunction=r,T&&T(e)}));return(0,b.jsx)(P,(0,o.Z)({in:S,onEnter:J,onEntered:X,onEntering:Q,onExit:ee,onExited:te,onExiting:ne,addEndListener:e=>{"auto"===F&&(L.current=setTimeout(e,H.current||0)),c&&c(B.current,e)},nodeRef:B,timeout:"auto"===F?null:F},z,{children:(e,t)=>(0,b.jsx)(Z,(0,o.Z)({as:w,className:(0,a.Z)($.root,v,{entered:$.entered,exited:!S&&"0px"===q&&$.hidden}[e]),style:(0,o.Z)({[W?"minWidth":"minHeight"]:q},j),ownerState:(0,o.Z)({},K,{state:e}),ref:G},t,{children:(0,b.jsx)(I,{ownerState:(0,o.Z)({},K,{state:e}),className:$.wrapper,ref:V,children:(0,b.jsx)(y,{ownerState:(0,o.Z)({},K,{state:e}),className:$.wrapperInner,children:m})})}))}))}));v.muiSupportAuto=!0;var C=v}}]);