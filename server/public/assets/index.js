var sP=Object.defineProperty;var oP=(t,e,n)=>e in t?sP(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var gr=(t,e,n)=>(oP(t,typeof e!="symbol"?e+"":e,n),n);function aP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var l9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var RI={exports:{}},md={},bI={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc=Symbol.for("react.element"),lP=Symbol.for("react.portal"),cP=Symbol.for("react.fragment"),uP=Symbol.for("react.strict_mode"),hP=Symbol.for("react.profiler"),dP=Symbol.for("react.provider"),fP=Symbol.for("react.context"),pP=Symbol.for("react.forward_ref"),mP=Symbol.for("react.suspense"),gP=Symbol.for("react.memo"),yP=Symbol.for("react.lazy"),n0=Symbol.iterator;function _P(t){return t===null||typeof t!="object"?null:(t=n0&&t[n0]||t["@@iterator"],typeof t=="function"?t:null)}var PI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},CI=Object.assign,NI={};function ca(t,e,n){this.props=t,this.context=e,this.refs=NI,this.updater=n||PI}ca.prototype.isReactComponent={};ca.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ca.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function DI(){}DI.prototype=ca.prototype;function Lg(t,e,n){this.props=t,this.context=e,this.refs=NI,this.updater=n||PI}var Mg=Lg.prototype=new DI;Mg.constructor=Lg;CI(Mg,ca.prototype);Mg.isPureReactComponent=!0;var r0=Array.isArray,OI=Object.prototype.hasOwnProperty,jg={current:null},VI={key:!0,ref:!0,__self:!0,__source:!0};function LI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)OI.call(e,r)&&!VI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xc,type:t,key:s,ref:o,props:i,_owner:jg.current}}function vP(t,e){return{$$typeof:xc,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fg(t){return typeof t=="object"&&t!==null&&t.$$typeof===xc}function wP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var i0=/\/+/g;function zf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wP(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xc:case lP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zf(o,0):r,r0(i)?(n="",t!=null&&(n=t.replace(i0,"$&/")+"/"),Du(i,e,n,"",function(u){return u})):i!=null&&(Fg(i)&&(i=vP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(i0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",r0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zf(s,a);o+=Du(s,e,n,l,i)}else if(l=_P(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zf(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ru(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function EP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Gt={current:null},Ou={transition:null},TP={ReactCurrentDispatcher:Gt,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:jg};function MI(){throw Error("act(...) is not supported in production builds of React.")}fe.Children={map:ru,forEach:function(t,e,n){ru(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ru(t,function(){e++}),e},toArray:function(t){return ru(t,function(e){return e})||[]},only:function(t){if(!Fg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};fe.Component=ca;fe.Fragment=cP;fe.Profiler=hP;fe.PureComponent=Lg;fe.StrictMode=uP;fe.Suspense=mP;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TP;fe.act=MI;fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=CI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)OI.call(e,l)&&!VI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xc,type:t.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(t){return t={$$typeof:fP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dP,_context:t},t.Consumer=t};fe.createElement=LI;fe.createFactory=function(t){var e=LI.bind(null,t);return e.type=t,e};fe.createRef=function(){return{current:null}};fe.forwardRef=function(t){return{$$typeof:pP,render:t}};fe.isValidElement=Fg;fe.lazy=function(t){return{$$typeof:yP,_payload:{_status:-1,_result:t},_init:EP}};fe.memo=function(t,e){return{$$typeof:gP,type:t,compare:e===void 0?null:e}};fe.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};fe.unstable_act=MI;fe.useCallback=function(t,e){return Gt.current.useCallback(t,e)};fe.useContext=function(t){return Gt.current.useContext(t)};fe.useDebugValue=function(){};fe.useDeferredValue=function(t){return Gt.current.useDeferredValue(t)};fe.useEffect=function(t,e){return Gt.current.useEffect(t,e)};fe.useId=function(){return Gt.current.useId()};fe.useImperativeHandle=function(t,e,n){return Gt.current.useImperativeHandle(t,e,n)};fe.useInsertionEffect=function(t,e){return Gt.current.useInsertionEffect(t,e)};fe.useLayoutEffect=function(t,e){return Gt.current.useLayoutEffect(t,e)};fe.useMemo=function(t,e){return Gt.current.useMemo(t,e)};fe.useReducer=function(t,e,n){return Gt.current.useReducer(t,e,n)};fe.useRef=function(t){return Gt.current.useRef(t)};fe.useState=function(t){return Gt.current.useState(t)};fe.useSyncExternalStore=function(t,e,n){return Gt.current.useSyncExternalStore(t,e,n)};fe.useTransition=function(){return Gt.current.useTransition()};fe.version="18.3.1";bI.exports=fe;var V=bI.exports;const Q=pd(V),IP=aP({__proto__:null,default:Q},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SP=V,AP=Symbol.for("react.element"),xP=Symbol.for("react.fragment"),kP=Object.prototype.hasOwnProperty,RP=SP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bP={key:!0,ref:!0,__self:!0,__source:!0};function jI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kP.call(e,r)&&!bP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AP,type:t,key:s,ref:o,props:i,_owner:RP.current}}md.Fragment=xP;md.jsx=jI;md.jsxs=jI;RI.exports=md;var g=RI.exports,Gp={},FI={exports:{}},gn={},UI={exports:{}},BI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ne){var oe=q.length;q.push(ne);e:for(;0<oe;){var Ae=oe-1>>>1,H=q[Ae];if(0<i(H,ne))q[Ae]=ne,q[oe]=H,oe=Ae;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ne=q[0],oe=q.pop();if(oe!==ne){q[0]=oe;e:for(var Ae=0,H=q.length,ee=H>>>1;Ae<ee;){var le=2*(Ae+1)-1,je=q[le],De=le+1,Lt=q[De];if(0>i(je,oe))De<H&&0>i(Lt,je)?(q[Ae]=Lt,q[De]=oe,Ae=De):(q[Ae]=je,q[le]=oe,Ae=le);else if(De<H&&0>i(Lt,oe))q[Ae]=Lt,q[De]=oe,Ae=De;else break e}}return ne}function i(q,ne){var oe=q.sortIndex-ne.sortIndex;return oe!==0?oe:q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,m=3,w=!1,R=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(q){for(var ne=n(u);ne!==null;){if(ne.callback===null)r(u);else if(ne.startTime<=q)r(u),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(u)}}function N(q){if(A=!1,E(q),!R)if(n(l)!==null)R=!0,ce(j);else{var ne=n(u);ne!==null&&Ne(N,ne.startTime-q)}}function j(q,ne){R=!1,A&&(A=!1,T(_),_=-1),w=!0;var oe=m;try{for(E(ne),f=n(l);f!==null&&(!(f.expirationTime>ne)||q&&!P());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,m=f.priorityLevel;var H=Ae(f.expirationTime<=ne);ne=t.unstable_now(),typeof H=="function"?f.callback=H:f===n(l)&&r(l),E(ne)}else r(l);f=n(l)}if(f!==null)var ee=!0;else{var le=n(u);le!==null&&Ne(N,le.startTime-ne),ee=!1}return ee}finally{f=null,m=oe,w=!1}}var F=!1,I=null,_=-1,S=5,k=-1;function P(){return!(t.unstable_now()-k<S)}function C(){if(I!==null){var q=t.unstable_now();k=q;var ne=!0;try{ne=I(!0,q)}finally{ne?x():(F=!1,I=null)}}else F=!1}var x;if(typeof v=="function")x=function(){v(C)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,G=ye.port2;ye.port1.onmessage=C,x=function(){G.postMessage(null)}}else x=function(){b(C,0)};function ce(q){I=q,F||(F=!0,x())}function Ne(q,ne){_=b(function(){q(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){R||w||(R=!0,ce(j))},t.unstable_forceFrameRate=function(q){0>q||125<q||(S=0<q?Math.floor(1e3/q):5)},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var ne=3;break;default:ne=m}var oe=m;m=ne;try{return q()}finally{m=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ne){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var oe=m;m=q;try{return ne()}finally{m=oe}},t.unstable_scheduleCallback=function(q,ne,oe){var Ae=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Ae+oe:Ae):oe=Ae,q){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=oe+H,q={id:h++,callback:ne,priorityLevel:q,startTime:oe,expirationTime:H,sortIndex:-1},oe>Ae?(q.sortIndex=oe,e(u,q),n(l)===null&&q===n(u)&&(A?(T(_),_=-1):A=!0,Ne(N,oe-Ae))):(q.sortIndex=H,e(l,q),R||w||(R=!0,ce(j))),q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(q){var ne=m;return function(){var oe=m;m=ne;try{return q.apply(this,arguments)}finally{m=oe}}}})(BI);UI.exports=BI;var PP=UI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CP=V,pn=PP;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $I=new Set,$l={};function $s(t,e){$o(t,e),$o(t+"Capture",e)}function $o(t,e){for($l[t]=e,t=0;t<e.length;t++)$I.add(e[t])}var Pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qp=Object.prototype.hasOwnProperty,NP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,s0={},o0={};function DP(t){return Qp.call(o0,t)?!0:Qp.call(s0,t)?!1:NP.test(t)?o0[t]=!0:(s0[t]=!0,!1)}function OP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function VP(t,e,n,r){if(e===null||typeof e>"u"||OP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ug=/[\-:]([a-z])/g;function Bg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ug,Bg);At[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ug,Bg);At[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ug,Bg);At[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $g(t,e,n,r){var i=At.hasOwnProperty(e)?At[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(VP(e,n,i,r)&&(n=null),r||i===null?DP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ur=CP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,iu=Symbol.for("react.element"),mo=Symbol.for("react.portal"),go=Symbol.for("react.fragment"),zg=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),zI=Symbol.for("react.provider"),qI=Symbol.for("react.context"),qg=Symbol.for("react.forward_ref"),Jp=Symbol.for("react.suspense"),Xp=Symbol.for("react.suspense_list"),Hg=Symbol.for("react.memo"),ni=Symbol.for("react.lazy"),HI=Symbol.for("react.offscreen"),a0=Symbol.iterator;function $a(t){return t===null||typeof t!="object"?null:(t=a0&&t[a0]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,qf;function ll(t){if(qf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);qf=e&&e[1]||""}return`
`+qf+t}var Hf=!1;function Wf(t,e){if(!t||Hf)return"";Hf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ll(t):""}function LP(t){switch(t.tag){case 5:return ll(t.type);case 16:return ll("Lazy");case 13:return ll("Suspense");case 19:return ll("SuspenseList");case 0:case 2:case 15:return t=Wf(t.type,!1),t;case 11:return t=Wf(t.type.render,!1),t;case 1:return t=Wf(t.type,!0),t;default:return""}}function Zp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case go:return"Fragment";case mo:return"Portal";case Yp:return"Profiler";case zg:return"StrictMode";case Jp:return"Suspense";case Xp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qI:return(t.displayName||"Context")+".Consumer";case zI:return(t._context.displayName||"Context")+".Provider";case qg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hg:return e=t.displayName||null,e!==null?e:Zp(t.type)||"Memo";case ni:e=t._payload,t=t._init;try{return Zp(t(e))}catch{}}return null}function MP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zp(e);case 8:return e===zg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function WI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jP(t){var e=WI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function su(t){t._valueTracker||(t._valueTracker=jP(t))}function KI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=WI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function em(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function l0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function GI(t,e){e=e.checked,e!=null&&$g(t,"checked",e,!1)}function tm(t,e){GI(t,e);var n=Ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nm(t,e.type,n):e.hasOwnProperty("defaultValue")&&nm(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function c0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nm(t,e,n){(e!=="number"||mh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var cl=Array.isArray;function ko(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function rm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function u0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(cl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function QI(t,e){var n=Ci(e.value),r=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function h0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function YI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function im(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?YI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ou,JI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ou=ou||document.createElement("div"),ou.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ou.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FP=["Webkit","ms","Moz","O"];Object.keys(wl).forEach(function(t){FP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wl[e]=wl[t]})});function XI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wl.hasOwnProperty(t)&&wl[t]?(""+e).trim():e+"px"}function ZI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=XI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UP=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sm(t,e){if(e){if(UP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function om(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var am=null;function Wg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lm=null,Ro=null,bo=null;function d0(t){if(t=bc(t)){if(typeof lm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=wd(e),lm(t.stateNode,t.type,e))}}function e1(t){Ro?bo?bo.push(t):bo=[t]:Ro=t}function t1(){if(Ro){var t=Ro,e=bo;if(bo=Ro=null,d0(t),e)for(t=0;t<e.length;t++)d0(e[t])}}function n1(t,e){return t(e)}function r1(){}var Kf=!1;function i1(t,e,n){if(Kf)return t(e,n);Kf=!0;try{return n1(t,e,n)}finally{Kf=!1,(Ro!==null||bo!==null)&&(r1(),t1())}}function ql(t,e){var n=t.stateNode;if(n===null)return null;var r=wd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var cm=!1;if(Pr)try{var za={};Object.defineProperty(za,"passive",{get:function(){cm=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{cm=!1}function BP(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var El=!1,gh=null,yh=!1,um=null,$P={onError:function(t){El=!0,gh=t}};function zP(t,e,n,r,i,s,o,a,l){El=!1,gh=null,BP.apply($P,arguments)}function qP(t,e,n,r,i,s,o,a,l){if(zP.apply(this,arguments),El){if(El){var u=gh;El=!1,gh=null}else throw Error(B(198));yh||(yh=!0,um=u)}}function zs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function f0(t){if(zs(t)!==t)throw Error(B(188))}function HP(t){var e=t.alternate;if(!e){if(e=zs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return f0(i),t;if(s===r)return f0(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function o1(t){return t=HP(t),t!==null?a1(t):null}function a1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a1(t);if(e!==null)return e;t=t.sibling}return null}var l1=pn.unstable_scheduleCallback,p0=pn.unstable_cancelCallback,WP=pn.unstable_shouldYield,KP=pn.unstable_requestPaint,Ze=pn.unstable_now,GP=pn.unstable_getCurrentPriorityLevel,Kg=pn.unstable_ImmediatePriority,c1=pn.unstable_UserBlockingPriority,_h=pn.unstable_NormalPriority,QP=pn.unstable_LowPriority,u1=pn.unstable_IdlePriority,gd=null,lr=null;function YP(t){if(lr&&typeof lr.onCommitFiberRoot=="function")try{lr.onCommitFiberRoot(gd,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:ZP,JP=Math.log,XP=Math.LN2;function ZP(t){return t>>>=0,t===0?32:31-(JP(t)/XP|0)|0}var au=64,lu=4194304;function ul(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ul(a):(s&=o,s!==0&&(r=ul(s)))}else o=n&~i,o!==0?r=ul(o):s!==0&&(r=ul(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$n(e),i=1<<n,r|=t[n],e&=~i;return r}function eC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=eC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function hm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h1(){var t=au;return au<<=1,!(au&4194240)&&(au=64),t}function Gf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function kc(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function nC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function d1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f1,Qg,p1,m1,g1,dm=!1,cu=[],yi=null,_i=null,vi=null,Hl=new Map,Wl=new Map,ii=[],rC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function m0(t,e){switch(t){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Hl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(e.pointerId)}}function qa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=bc(e),e!==null&&Qg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iC(t,e,n,r,i){switch(e){case"focusin":return yi=qa(yi,t,e,n,r,i),!0;case"dragenter":return _i=qa(_i,t,e,n,r,i),!0;case"mouseover":return vi=qa(vi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hl.set(s,qa(Hl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wl.set(s,qa(Wl.get(s)||null,t,e,n,r,i)),!0}return!1}function y1(t){var e=cs(t.target);if(e!==null){var n=zs(e);if(n!==null){if(e=n.tag,e===13){if(e=s1(n),e!==null){t.blockedOn=e,g1(t.priority,function(){p1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);am=r,n.target.dispatchEvent(r),am=null}else return e=bc(n),e!==null&&Qg(e),t.blockedOn=n,!1;e.shift()}return!0}function g0(t,e,n){Vu(t)&&n.delete(e)}function sC(){dm=!1,yi!==null&&Vu(yi)&&(yi=null),_i!==null&&Vu(_i)&&(_i=null),vi!==null&&Vu(vi)&&(vi=null),Hl.forEach(g0),Wl.forEach(g0)}function Ha(t,e){t.blockedOn===e&&(t.blockedOn=null,dm||(dm=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,sC)))}function Kl(t){function e(i){return Ha(i,t)}if(0<cu.length){Ha(cu[0],t);for(var n=1;n<cu.length;n++){var r=cu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yi!==null&&Ha(yi,t),_i!==null&&Ha(_i,t),vi!==null&&Ha(vi,t),Hl.forEach(e),Wl.forEach(e),n=0;n<ii.length;n++)r=ii[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ii.length&&(n=ii[0],n.blockedOn===null);)y1(n),n.blockedOn===null&&ii.shift()}var Po=Ur.ReactCurrentBatchConfig,wh=!0;function oC(t,e,n,r){var i=Ie,s=Po.transition;Po.transition=null;try{Ie=1,Yg(t,e,n,r)}finally{Ie=i,Po.transition=s}}function aC(t,e,n,r){var i=Ie,s=Po.transition;Po.transition=null;try{Ie=4,Yg(t,e,n,r)}finally{Ie=i,Po.transition=s}}function Yg(t,e,n,r){if(wh){var i=fm(t,e,n,r);if(i===null)ip(t,e,r,Eh,n),m0(t,r);else if(iC(i,t,e,n,r))r.stopPropagation();else if(m0(t,r),e&4&&-1<rC.indexOf(t)){for(;i!==null;){var s=bc(i);if(s!==null&&f1(s),s=fm(t,e,n,r),s===null&&ip(t,e,r,Eh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ip(t,e,r,null,n)}}var Eh=null;function fm(t,e,n,r){if(Eh=null,t=Wg(r),t=cs(t),t!==null)if(e=zs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eh=t,null}function _1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(GP()){case Kg:return 1;case c1:return 4;case _h:case QP:return 16;case u1:return 536870912;default:return 16}default:return 16}}var di=null,Jg=null,Lu=null;function v1(){if(Lu)return Lu;var t,e=Jg,n=e.length,r,i="value"in di?di.value:di.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lu=i.slice(t,1<r?1-r:void 0)}function Mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uu(){return!0}function y0(){return!1}function yn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uu:y0,this.isPropagationStopped=y0,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),e}var ua={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xg=yn(ua),Rc=ze({},ua,{view:0,detail:0}),lC=yn(Rc),Qf,Yf,Wa,yd=ze({},Rc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wa&&(Wa&&t.type==="mousemove"?(Qf=t.screenX-Wa.screenX,Yf=t.screenY-Wa.screenY):Yf=Qf=0,Wa=t),Qf)},movementY:function(t){return"movementY"in t?t.movementY:Yf}}),_0=yn(yd),cC=ze({},yd,{dataTransfer:0}),uC=yn(cC),hC=ze({},Rc,{relatedTarget:0}),Jf=yn(hC),dC=ze({},ua,{animationName:0,elapsedTime:0,pseudoElement:0}),fC=yn(dC),pC=ze({},ua,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mC=yn(pC),gC=ze({},ua,{data:0}),v0=yn(gC),yC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vC[t])?!!e[t]:!1}function Zg(){return wC}var EC=ze({},Rc,{key:function(t){if(t.key){var e=yC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_C[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zg,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TC=yn(EC),IC=ze({},yd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w0=yn(IC),SC=ze({},Rc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zg}),AC=yn(SC),xC=ze({},ua,{propertyName:0,elapsedTime:0,pseudoElement:0}),kC=yn(xC),RC=ze({},yd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bC=yn(RC),PC=[9,13,27,32],ey=Pr&&"CompositionEvent"in window,Tl=null;Pr&&"documentMode"in document&&(Tl=document.documentMode);var CC=Pr&&"TextEvent"in window&&!Tl,w1=Pr&&(!ey||Tl&&8<Tl&&11>=Tl),E0=String.fromCharCode(32),T0=!1;function E1(t,e){switch(t){case"keyup":return PC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yo=!1;function NC(t,e){switch(t){case"compositionend":return T1(e);case"keypress":return e.which!==32?null:(T0=!0,E0);case"textInput":return t=e.data,t===E0&&T0?null:t;default:return null}}function DC(t,e){if(yo)return t==="compositionend"||!ey&&E1(t,e)?(t=v1(),Lu=Jg=di=null,yo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w1&&e.locale!=="ko"?null:e.data;default:return null}}var OC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OC[t.type]:e==="textarea"}function I1(t,e,n,r){e1(r),e=Th(e,"onChange"),0<e.length&&(n=new Xg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Il=null,Gl=null;function VC(t){O1(t,0)}function _d(t){var e=wo(t);if(KI(e))return t}function LC(t,e){if(t==="change")return e}var S1=!1;if(Pr){var Xf;if(Pr){var Zf="oninput"in document;if(!Zf){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),Zf=typeof S0.oninput=="function"}Xf=Zf}else Xf=!1;S1=Xf&&(!document.documentMode||9<document.documentMode)}function A0(){Il&&(Il.detachEvent("onpropertychange",A1),Gl=Il=null)}function A1(t){if(t.propertyName==="value"&&_d(Gl)){var e=[];I1(e,Gl,t,Wg(t)),i1(VC,e)}}function MC(t,e,n){t==="focusin"?(A0(),Il=e,Gl=n,Il.attachEvent("onpropertychange",A1)):t==="focusout"&&A0()}function jC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _d(Gl)}function FC(t,e){if(t==="click")return _d(e)}function UC(t,e){if(t==="input"||t==="change")return _d(e)}function BC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:BC;function Ql(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Qp.call(e,i)||!Hn(t[i],e[i]))return!1}return!0}function x0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k0(t,e){var n=x0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=x0(n)}}function x1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k1(){for(var t=window,e=mh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mh(t.document)}return e}function ty(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $C(t){var e=k1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x1(n.ownerDocument.documentElement,n)){if(r!==null&&ty(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=k0(n,s);var o=k0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zC=Pr&&"documentMode"in document&&11>=document.documentMode,_o=null,pm=null,Sl=null,mm=!1;function R0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mm||_o==null||_o!==mh(r)||(r=_o,"selectionStart"in r&&ty(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sl&&Ql(Sl,r)||(Sl=r,r=Th(pm,"onSelect"),0<r.length&&(e=new Xg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_o)))}function hu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vo={animationend:hu("Animation","AnimationEnd"),animationiteration:hu("Animation","AnimationIteration"),animationstart:hu("Animation","AnimationStart"),transitionend:hu("Transition","TransitionEnd")},ep={},R1={};Pr&&(R1=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function vd(t){if(ep[t])return ep[t];if(!vo[t])return t;var e=vo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in R1)return ep[t]=e[n];return t}var b1=vd("animationend"),P1=vd("animationiteration"),C1=vd("animationstart"),N1=vd("transitionend"),D1=new Map,b0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fi(t,e){D1.set(t,e),$s(e,[t])}for(var tp=0;tp<b0.length;tp++){var np=b0[tp],qC=np.toLowerCase(),HC=np[0].toUpperCase()+np.slice(1);Fi(qC,"on"+HC)}Fi(b1,"onAnimationEnd");Fi(P1,"onAnimationIteration");Fi(C1,"onAnimationStart");Fi("dblclick","onDoubleClick");Fi("focusin","onFocus");Fi("focusout","onBlur");Fi(N1,"onTransitionEnd");$o("onMouseEnter",["mouseout","mouseover"]);$o("onMouseLeave",["mouseout","mouseover"]);$o("onPointerEnter",["pointerout","pointerover"]);$o("onPointerLeave",["pointerout","pointerover"]);$s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$s("onBeforeInput",["compositionend","keypress","textInput","paste"]);$s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WC=new Set("cancel close invalid load scroll toggle".split(" ").concat(hl));function P0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qP(r,e,void 0,t),t.currentTarget=null}function O1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;P0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;P0(i,a,u),s=l}}}if(yh)throw t=um,yh=!1,um=null,t}function be(t,e){var n=e[wm];n===void 0&&(n=e[wm]=new Set);var r=t+"__bubble";n.has(r)||(V1(e,t,2,!1),n.add(r))}function rp(t,e,n){var r=0;e&&(r|=4),V1(n,t,r,e)}var du="_reactListening"+Math.random().toString(36).slice(2);function Yl(t){if(!t[du]){t[du]=!0,$I.forEach(function(n){n!=="selectionchange"&&(WC.has(n)||rp(n,!1,t),rp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[du]||(e[du]=!0,rp("selectionchange",!1,e))}}function V1(t,e,n,r){switch(_1(e)){case 1:var i=oC;break;case 4:i=aC;break;default:i=Yg}n=i.bind(null,e,n,t),i=void 0,!cm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ip(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=cs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i1(function(){var u=s,h=Wg(n),f=[];e:{var m=D1.get(t);if(m!==void 0){var w=Xg,R=t;switch(t){case"keypress":if(Mu(n)===0)break e;case"keydown":case"keyup":w=TC;break;case"focusin":R="focus",w=Jf;break;case"focusout":R="blur",w=Jf;break;case"beforeblur":case"afterblur":w=Jf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=_0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=uC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=AC;break;case b1:case P1:case C1:w=fC;break;case N1:w=kC;break;case"scroll":w=lC;break;case"wheel":w=bC;break;case"copy":case"cut":case"paste":w=mC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=w0}var A=(e&4)!==0,b=!A&&t==="scroll",T=A?m!==null?m+"Capture":null:m;A=[];for(var v=u,E;v!==null;){E=v;var N=E.stateNode;if(E.tag===5&&N!==null&&(E=N,T!==null&&(N=ql(v,T),N!=null&&A.push(Jl(v,N,E)))),b)break;v=v.return}0<A.length&&(m=new w(m,R,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==am&&(R=n.relatedTarget||n.fromElement)&&(cs(R)||R[Cr]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(R=n.relatedTarget||n.toElement,w=u,R=R?cs(R):null,R!==null&&(b=zs(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(w=null,R=u),w!==R)){if(A=_0,N="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(A=w0,N="onPointerLeave",T="onPointerEnter",v="pointer"),b=w==null?m:wo(w),E=R==null?m:wo(R),m=new A(N,v+"leave",w,n,h),m.target=b,m.relatedTarget=E,N=null,cs(h)===u&&(A=new A(T,v+"enter",R,n,h),A.target=E,A.relatedTarget=b,N=A),b=N,w&&R)t:{for(A=w,T=R,v=0,E=A;E;E=eo(E))v++;for(E=0,N=T;N;N=eo(N))E++;for(;0<v-E;)A=eo(A),v--;for(;0<E-v;)T=eo(T),E--;for(;v--;){if(A===T||T!==null&&A===T.alternate)break t;A=eo(A),T=eo(T)}A=null}else A=null;w!==null&&C0(f,m,w,A,!1),R!==null&&b!==null&&C0(f,b,R,A,!0)}}e:{if(m=u?wo(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=LC;else if(I0(m))if(S1)j=UC;else{j=jC;var F=MC}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=FC);if(j&&(j=j(t,u))){I1(f,j,n,h);break e}F&&F(t,m,u),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&nm(m,"number",m.value)}switch(F=u?wo(u):window,t){case"focusin":(I0(F)||F.contentEditable==="true")&&(_o=F,pm=u,Sl=null);break;case"focusout":Sl=pm=_o=null;break;case"mousedown":mm=!0;break;case"contextmenu":case"mouseup":case"dragend":mm=!1,R0(f,n,h);break;case"selectionchange":if(zC)break;case"keydown":case"keyup":R0(f,n,h)}var I;if(ey)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else yo?E1(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(w1&&n.locale!=="ko"&&(yo||_!=="onCompositionStart"?_==="onCompositionEnd"&&yo&&(I=v1()):(di=h,Jg="value"in di?di.value:di.textContent,yo=!0)),F=Th(u,_),0<F.length&&(_=new v0(_,t,null,n,h),f.push({event:_,listeners:F}),I?_.data=I:(I=T1(n),I!==null&&(_.data=I)))),(I=CC?NC(t,n):DC(t,n))&&(u=Th(u,"onBeforeInput"),0<u.length&&(h=new v0("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=I))}O1(f,e)})}function Jl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Th(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ql(t,n),s!=null&&r.unshift(Jl(t,s,i)),s=ql(t,e),s!=null&&r.push(Jl(t,s,i))),t=t.return}return r}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ql(n,s),l!=null&&o.unshift(Jl(n,l,a))):i||(l=ql(n,s),l!=null&&o.push(Jl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var KC=/\r\n?/g,GC=/\u0000|\uFFFD/g;function N0(t){return(typeof t=="string"?t:""+t).replace(KC,`
`).replace(GC,"")}function fu(t,e,n){if(e=N0(e),N0(t)!==e&&n)throw Error(B(425))}function Ih(){}var gm=null,ym=null;function _m(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vm=typeof setTimeout=="function"?setTimeout:void 0,QC=typeof clearTimeout=="function"?clearTimeout:void 0,D0=typeof Promise=="function"?Promise:void 0,YC=typeof queueMicrotask=="function"?queueMicrotask:typeof D0<"u"?function(t){return D0.resolve(null).then(t).catch(JC)}:vm;function JC(t){setTimeout(function(){throw t})}function sp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Kl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kl(e)}function wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function O0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),nr="__reactFiber$"+ha,Xl="__reactProps$"+ha,Cr="__reactContainer$"+ha,wm="__reactEvents$"+ha,XC="__reactListeners$"+ha,ZC="__reactHandles$"+ha;function cs(t){var e=t[nr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cr]||n[nr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=O0(t);t!==null;){if(n=t[nr])return n;t=O0(t)}return e}t=n,n=t.parentNode}return null}function bc(t){return t=t[nr]||t[Cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function wd(t){return t[Xl]||null}var Em=[],Eo=-1;function Ui(t){return{current:t}}function Pe(t){0>Eo||(t.current=Em[Eo],Em[Eo]=null,Eo--)}function ke(t,e){Eo++,Em[Eo]=t.current,t.current=e}var Ni={},Vt=Ui(Ni),Zt=Ui(!1),Is=Ni;function zo(t,e){var n=t.type.contextTypes;if(!n)return Ni;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function en(t){return t=t.childContextTypes,t!=null}function Sh(){Pe(Zt),Pe(Vt)}function V0(t,e,n){if(Vt.current!==Ni)throw Error(B(168));ke(Vt,e),ke(Zt,n)}function L1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,MP(t)||"Unknown",i));return ze({},n,r)}function Ah(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ni,Is=Vt.current,ke(Vt,t),ke(Zt,Zt.current),!0}function L0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=L1(t,e,Is),r.__reactInternalMemoizedMergedChildContext=t,Pe(Zt),Pe(Vt),ke(Vt,t)):Pe(Zt),ke(Zt,n)}var wr=null,Ed=!1,op=!1;function M1(t){wr===null?wr=[t]:wr.push(t)}function eN(t){Ed=!0,M1(t)}function Bi(){if(!op&&wr!==null){op=!0;var t=0,e=Ie;try{var n=wr;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wr=null,Ed=!1}catch(i){throw wr!==null&&(wr=wr.slice(t+1)),l1(Kg,Bi),i}finally{Ie=e,op=!1}}return null}var To=[],Io=0,xh=null,kh=0,wn=[],En=0,Ss=null,Tr=1,Ir="";function Zi(t,e){To[Io++]=kh,To[Io++]=xh,xh=t,kh=e}function j1(t,e,n){wn[En++]=Tr,wn[En++]=Ir,wn[En++]=Ss,Ss=t;var r=Tr;t=Ir;var i=32-$n(r)-1;r&=~(1<<i),n+=1;var s=32-$n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tr=1<<32-$n(e)+i|n<<i|r,Ir=s+t}else Tr=1<<s|n<<i|r,Ir=t}function ny(t){t.return!==null&&(Zi(t,1),j1(t,1,0))}function ry(t){for(;t===xh;)xh=To[--Io],To[Io]=null,kh=To[--Io],To[Io]=null;for(;t===Ss;)Ss=wn[--En],wn[En]=null,Ir=wn[--En],wn[En]=null,Tr=wn[--En],wn[En]=null}var fn=null,un=null,Le=!1,Fn=null;function F1(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function M0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,un=wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ss!==null?{id:Tr,overflow:Ir}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,un=null,!0):!1;default:return!1}}function Tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Im(t){if(Le){var e=un;if(e){var n=e;if(!M0(t,e)){if(Tm(t))throw Error(B(418));e=wi(n.nextSibling);var r=fn;e&&M0(t,e)?F1(r,n):(t.flags=t.flags&-4097|2,Le=!1,fn=t)}}else{if(Tm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Le=!1,fn=t}}}function j0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function pu(t){if(t!==fn)return!1;if(!Le)return j0(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_m(t.type,t.memoizedProps)),e&&(e=un)){if(Tm(t))throw U1(),Error(B(418));for(;e;)F1(t,e),e=wi(e.nextSibling)}if(j0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=fn?wi(t.stateNode.nextSibling):null;return!0}function U1(){for(var t=un;t;)t=wi(t.nextSibling)}function qo(){un=fn=null,Le=!1}function iy(t){Fn===null?Fn=[t]:Fn.push(t)}var tN=Ur.ReactCurrentBatchConfig;function Ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function mu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function F0(t){var e=t._init;return e(t._payload)}function B1(t){function e(T,v){if(t){var E=T.deletions;E===null?(T.deletions=[v],T.flags|=16):E.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=Si(T,v),T.index=0,T.sibling=null,T}function s(T,v,E){return T.index=E,t?(E=T.alternate,E!==null?(E=E.index,E<v?(T.flags|=2,v):E):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,v,E,N){return v===null||v.tag!==6?(v=fp(E,T.mode,N),v.return=T,v):(v=i(v,E),v.return=T,v)}function l(T,v,E,N){var j=E.type;return j===go?h(T,v,E.props.children,N,E.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ni&&F0(j)===v.type)?(N=i(v,E.props),N.ref=Ka(T,v,E),N.return=T,N):(N=qu(E.type,E.key,E.props,null,T.mode,N),N.ref=Ka(T,v,E),N.return=T,N)}function u(T,v,E,N){return v===null||v.tag!==4||v.stateNode.containerInfo!==E.containerInfo||v.stateNode.implementation!==E.implementation?(v=pp(E,T.mode,N),v.return=T,v):(v=i(v,E.children||[]),v.return=T,v)}function h(T,v,E,N,j){return v===null||v.tag!==7?(v=ms(E,T.mode,N,j),v.return=T,v):(v=i(v,E),v.return=T,v)}function f(T,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fp(""+v,T.mode,E),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case iu:return E=qu(v.type,v.key,v.props,null,T.mode,E),E.ref=Ka(T,null,v),E.return=T,E;case mo:return v=pp(v,T.mode,E),v.return=T,v;case ni:var N=v._init;return f(T,N(v._payload),E)}if(cl(v)||$a(v))return v=ms(v,T.mode,E,null),v.return=T,v;mu(T,v)}return null}function m(T,v,E,N){var j=v!==null?v.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return j!==null?null:a(T,v,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case iu:return E.key===j?l(T,v,E,N):null;case mo:return E.key===j?u(T,v,E,N):null;case ni:return j=E._init,m(T,v,j(E._payload),N)}if(cl(E)||$a(E))return j!==null?null:h(T,v,E,N,null);mu(T,E)}return null}function w(T,v,E,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return T=T.get(E)||null,a(v,T,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case iu:return T=T.get(N.key===null?E:N.key)||null,l(v,T,N,j);case mo:return T=T.get(N.key===null?E:N.key)||null,u(v,T,N,j);case ni:var F=N._init;return w(T,v,E,F(N._payload),j)}if(cl(N)||$a(N))return T=T.get(E)||null,h(v,T,N,j,null);mu(v,N)}return null}function R(T,v,E,N){for(var j=null,F=null,I=v,_=v=0,S=null;I!==null&&_<E.length;_++){I.index>_?(S=I,I=null):S=I.sibling;var k=m(T,I,E[_],N);if(k===null){I===null&&(I=S);break}t&&I&&k.alternate===null&&e(T,I),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k,I=S}if(_===E.length)return n(T,I),Le&&Zi(T,_),j;if(I===null){for(;_<E.length;_++)I=f(T,E[_],N),I!==null&&(v=s(I,v,_),F===null?j=I:F.sibling=I,F=I);return Le&&Zi(T,_),j}for(I=r(T,I);_<E.length;_++)S=w(I,T,_,E[_],N),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?_:S.key),v=s(S,v,_),F===null?j=S:F.sibling=S,F=S);return t&&I.forEach(function(P){return e(T,P)}),Le&&Zi(T,_),j}function A(T,v,E,N){var j=$a(E);if(typeof j!="function")throw Error(B(150));if(E=j.call(E),E==null)throw Error(B(151));for(var F=j=null,I=v,_=v=0,S=null,k=E.next();I!==null&&!k.done;_++,k=E.next()){I.index>_?(S=I,I=null):S=I.sibling;var P=m(T,I,k.value,N);if(P===null){I===null&&(I=S);break}t&&I&&P.alternate===null&&e(T,I),v=s(P,v,_),F===null?j=P:F.sibling=P,F=P,I=S}if(k.done)return n(T,I),Le&&Zi(T,_),j;if(I===null){for(;!k.done;_++,k=E.next())k=f(T,k.value,N),k!==null&&(v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return Le&&Zi(T,_),j}for(I=r(T,I);!k.done;_++,k=E.next())k=w(I,T,_,k.value,N),k!==null&&(t&&k.alternate!==null&&I.delete(k.key===null?_:k.key),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return t&&I.forEach(function(C){return e(T,C)}),Le&&Zi(T,_),j}function b(T,v,E,N){if(typeof E=="object"&&E!==null&&E.type===go&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case iu:e:{for(var j=E.key,F=v;F!==null;){if(F.key===j){if(j=E.type,j===go){if(F.tag===7){n(T,F.sibling),v=i(F,E.props.children),v.return=T,T=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ni&&F0(j)===F.type){n(T,F.sibling),v=i(F,E.props),v.ref=Ka(T,F,E),v.return=T,T=v;break e}n(T,F);break}else e(T,F);F=F.sibling}E.type===go?(v=ms(E.props.children,T.mode,N,E.key),v.return=T,T=v):(N=qu(E.type,E.key,E.props,null,T.mode,N),N.ref=Ka(T,v,E),N.return=T,T=N)}return o(T);case mo:e:{for(F=E.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===E.containerInfo&&v.stateNode.implementation===E.implementation){n(T,v.sibling),v=i(v,E.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=pp(E,T.mode,N),v.return=T,T=v}return o(T);case ni:return F=E._init,b(T,v,F(E._payload),N)}if(cl(E))return R(T,v,E,N);if($a(E))return A(T,v,E,N);mu(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,E),v.return=T,T=v):(n(T,v),v=fp(E,T.mode,N),v.return=T,T=v),o(T)):n(T,v)}return b}var Ho=B1(!0),$1=B1(!1),Rh=Ui(null),bh=null,So=null,sy=null;function oy(){sy=So=bh=null}function ay(t){var e=Rh.current;Pe(Rh),t._currentValue=e}function Sm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Co(t,e){bh=t,sy=So=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(sy!==t)if(t={context:t,memoizedValue:e,next:null},So===null){if(bh===null)throw Error(B(308));So=t,bh.dependencies={lanes:0,firstContext:t}}else So=So.next=t;return e}var us=null;function ly(t){us===null?us=[t]:us.push(t)}function z1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ly(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nr(t,r)}function Nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ri=!1;function cy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nr(t,n)}return i=r.interleaved,i===null?(e.next=e,ly(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nr(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gg(t,n)}}function U0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ph(t,e,n,r){var i=t.updateQueue;ri=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,a=s;do{var m=a.lane,w=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,A=a;switch(m=e,w=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){f=R.call(w,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,m=typeof R=="function"?R.call(w,f,m):R,m==null)break e;f=ze({},f,m);break e;case 2:ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else w={eventTime:w,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=w,l=f):h=h.next=w,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=f}}function B0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Pc={},cr=Ui(Pc),Zl=Ui(Pc),ec=Ui(Pc);function hs(t){if(t===Pc)throw Error(B(174));return t}function uy(t,e){switch(ke(ec,e),ke(Zl,t),ke(cr,Pc),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:im(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=im(e,t)}Pe(cr),ke(cr,e)}function Wo(){Pe(cr),Pe(Zl),Pe(ec)}function H1(t){hs(ec.current);var e=hs(cr.current),n=im(e,t.type);e!==n&&(ke(Zl,t),ke(cr,n))}function hy(t){Zl.current===t&&(Pe(cr),Pe(Zl))}var Ue=Ui(0);function Ch(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ap=[];function dy(){for(var t=0;t<ap.length;t++)ap[t]._workInProgressVersionPrimary=null;ap.length=0}var Fu=Ur.ReactCurrentDispatcher,lp=Ur.ReactCurrentBatchConfig,As=0,$e=null,ct=null,yt=null,Nh=!1,Al=!1,tc=0,nN=0;function xt(){throw Error(B(321))}function fy(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function py(t,e,n,r,i,s){if(As=s,$e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fu.current=t===null||t.memoizedState===null?oN:aN,t=n(r,i),Al){s=0;do{if(Al=!1,tc=0,25<=s)throw Error(B(301));s+=1,yt=ct=null,e.updateQueue=null,Fu.current=lN,t=n(r,i)}while(Al)}if(Fu.current=Dh,e=ct!==null&&ct.next!==null,As=0,yt=ct=$e=null,Nh=!1,e)throw Error(B(300));return t}function my(){var t=tc!==0;return tc=0,t}function er(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?$e.memoizedState=yt=t:yt=yt.next=t,yt}function bn(){if(ct===null){var t=$e.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=yt===null?$e.memoizedState:yt.next;if(e!==null)yt=e,ct=t;else{if(t===null)throw Error(B(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?$e.memoizedState=yt=t:yt=yt.next=t}return yt}function nc(t,e){return typeof e=="function"?e(t):e}function cp(t){var e=bn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=ct,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((As&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,$e.lanes|=h,xs|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Hn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,$e.lanes|=s,xs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function up(t){var e=bn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Hn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W1(){}function K1(t,e){var n=$e,r=bn(),i=e(),s=!Hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,gy(Y1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,rc(9,Q1.bind(null,n,r,i,e),void 0,null),_t===null)throw Error(B(349));As&30||G1(n,e,i)}return i}function G1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q1(t,e,n,r){e.value=n,e.getSnapshot=r,J1(e)&&X1(t)}function Y1(t,e,n){return n(function(){J1(e)&&X1(t)})}function J1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function X1(t){var e=Nr(t,1);e!==null&&zn(e,t,1,-1)}function $0(t){var e=er();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nc,lastRenderedState:t},e.queue=t,t=t.dispatch=sN.bind(null,$e,t),[e.memoizedState,t]}function rc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=$e.updateQueue,e===null?(e={lastEffect:null,stores:null},$e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z1(){return bn().memoizedState}function Uu(t,e,n,r){var i=er();$e.flags|=t,i.memoizedState=rc(1|e,n,void 0,r===void 0?null:r)}function Td(t,e,n,r){var i=bn();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&fy(r,o.deps)){i.memoizedState=rc(e,n,s,r);return}}$e.flags|=t,i.memoizedState=rc(1|e,n,s,r)}function z0(t,e){return Uu(8390656,8,t,e)}function gy(t,e){return Td(2048,8,t,e)}function eS(t,e){return Td(4,2,t,e)}function tS(t,e){return Td(4,4,t,e)}function nS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rS(t,e,n){return n=n!=null?n.concat([t]):null,Td(4,4,nS.bind(null,e,t),n)}function yy(){}function iS(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fy(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sS(t,e){var n=bn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fy(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oS(t,e,n){return As&21?(Hn(n,e)||(n=h1(),$e.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function rN(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=lp.transition;lp.transition={};try{t(!1),e()}finally{Ie=n,lp.transition=r}}function aS(){return bn().memoizedState}function iN(t,e,n){var r=Ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lS(t))cS(e,n);else if(n=z1(t,e,n,r),n!==null){var i=zt();zn(n,t,r,i),uS(n,e,r)}}function sN(t,e,n){var r=Ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lS(t))cS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(i.next=i,ly(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=z1(t,e,i,r),n!==null&&(i=zt(),zn(n,t,r,i),uS(n,e,r))}}function lS(t){var e=t.alternate;return t===$e||e!==null&&e===$e}function cS(t,e){Al=Nh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gg(t,n)}}var Dh={readContext:Rn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},oN={readContext:Rn,useCallback:function(t,e){return er().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:z0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,nS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=er();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=er();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iN.bind(null,$e,t),[r.memoizedState,t]},useRef:function(t){var e=er();return t={current:t},e.memoizedState=t},useState:$0,useDebugValue:yy,useDeferredValue:function(t){return er().memoizedState=t},useTransition:function(){var t=$0(!1),e=t[0];return t=rN.bind(null,t[1]),er().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=$e,i=er();if(Le){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),_t===null)throw Error(B(349));As&30||G1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,z0(Y1.bind(null,r,s,t),[t]),r.flags|=2048,rc(9,Q1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=er(),e=_t.identifierPrefix;if(Le){var n=Ir,r=Tr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tc++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aN={readContext:Rn,useCallback:iS,useContext:Rn,useEffect:gy,useImperativeHandle:rS,useInsertionEffect:eS,useLayoutEffect:tS,useMemo:sS,useReducer:cp,useRef:Z1,useState:function(){return cp(nc)},useDebugValue:yy,useDeferredValue:function(t){var e=bn();return oS(e,ct.memoizedState,t)},useTransition:function(){var t=cp(nc)[0],e=bn().memoizedState;return[t,e]},useMutableSource:W1,useSyncExternalStore:K1,useId:aS,unstable_isNewReconciler:!1},lN={readContext:Rn,useCallback:iS,useContext:Rn,useEffect:gy,useImperativeHandle:rS,useInsertionEffect:eS,useLayoutEffect:tS,useMemo:sS,useReducer:up,useRef:Z1,useState:function(){return up(nc)},useDebugValue:yy,useDeferredValue:function(t){var e=bn();return ct===null?e.memoizedState=t:oS(e,ct.memoizedState,t)},useTransition:function(){var t=up(nc)[0],e=bn().memoizedState;return[t,e]},useMutableSource:W1,useSyncExternalStore:K1,useId:aS,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Am(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Id={isMounted:function(t){return(t=t._reactInternals)?zs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Ii(t),s=kr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,i),e!==null&&(zn(e,t,i,r),ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Ii(t),s=kr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ei(t,s,i),e!==null&&(zn(e,t,i,r),ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=Ii(t),i=kr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ei(t,i,r),e!==null&&(zn(e,t,r,n),ju(e,t,r))}};function q0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ql(n,r)||!Ql(i,s):!0}function hS(t,e,n){var r=!1,i=Ni,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(i=en(e)?Is:Vt.current,r=e.contextTypes,s=(r=r!=null)?zo(t,i):Ni),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Id,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function H0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Id.enqueueReplaceState(e,e.state,null)}function xm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},cy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Rn(s):(s=en(e)?Is:Vt.current,i.context=zo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Am(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Id.enqueueReplaceState(i,i.state,null),Ph(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e){try{var n="",r=e;do n+=LP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function hp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function km(t,e){try{}catch(n){setTimeout(function(){throw n})}}var cN=typeof WeakMap=="function"?WeakMap:Map;function dS(t,e,n){n=kr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vh||(Vh=!0,Mm=r),km(t,e)},n}function fS(t,e,n){n=kr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){km(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){km(t,e),typeof r!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function W0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IN.bind(null,t,e,n),e.then(t,t))}function K0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function G0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kr(-1,1),e.tag=2,Ei(n,e,1))),n.lanes|=1),t)}var uN=Ur.ReactCurrentOwner,Jt=!1;function Bt(t,e,n,r){e.child=t===null?$1(e,null,n,r):Ho(e,t.child,n,r)}function Q0(t,e,n,r,i){n=n.render;var s=e.ref;return Co(e,i),r=py(t,e,n,r,s,i),n=my(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(Le&&n&&ny(e),e.flags|=1,Bt(t,e,r,i),e.child)}function Y0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ay(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pS(t,e,s,r,i)):(t=qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ql,n(o,r)&&t.ref===e.ref)return Dr(t,e,i)}return e.flags|=1,t=Si(s,r),t.ref=e.ref,t.return=e,e.child=t}function pS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ql(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Dr(t,e,i)}return Rm(t,e,n,r,i)}function mS(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(xo,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(xo,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ke(xo,ln),ln|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ke(xo,ln),ln|=r;return Bt(t,e,i,n),e.child}function gS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rm(t,e,n,r,i){var s=en(n)?Is:Vt.current;return s=zo(e,s),Co(e,i),n=py(t,e,n,r,s,i),r=my(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dr(t,e,i)):(Le&&r&&ny(e),e.flags|=1,Bt(t,e,n,i),e.child)}function J0(t,e,n,r,i){if(en(n)){var s=!0;Ah(e)}else s=!1;if(Co(e,i),e.stateNode===null)Bu(t,e),hS(e,n,r),xm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rn(u):(u=en(n)?Is:Vt.current,u=zo(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&H0(e,o,r,u),ri=!1;var m=e.memoizedState;o.state=m,Ph(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Zt.current||ri?(typeof h=="function"&&(Am(e,n,h,r),l=e.memoizedState),(a=ri||q0(e,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ln(e.type,a),o.props=u,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=en(n)?Is:Vt.current,l=zo(e,l));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&H0(e,o,r,l),ri=!1,m=e.memoizedState,o.state=m,Ph(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||Zt.current||ri?(typeof w=="function"&&(Am(e,n,w,r),R=e.memoizedState),(u=ri||q0(e,n,u,r,m,R,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return bm(t,e,n,r,s,i)}function bm(t,e,n,r,i,s){gS(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&L0(e,n,!1),Dr(t,e,s);r=e.stateNode,uN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ho(e,t.child,null,s),e.child=Ho(e,null,a,s)):Bt(t,e,a,s),e.memoizedState=r.state,i&&L0(e,n,!0),e.child}function yS(t){var e=t.stateNode;e.pendingContext?V0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&V0(t,e.context,!1),uy(t,e.containerInfo)}function X0(t,e,n,r,i){return qo(),iy(i),e.flags|=256,Bt(t,e,n,r),e.child}var Pm={dehydrated:null,treeContext:null,retryLane:0};function Cm(t){return{baseLanes:t,cachePool:null,transitions:null}}function _S(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ke(Ue,i&1),t===null)return Im(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xd(o,r,0,null),t=ms(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cm(n),e.memoizedState=Pm,t):_y(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Si(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Si(a,s):(s=ms(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pm,r}return s=t.child,t=s.sibling,r=Si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _y(t,e){return e=xd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gu(t,e,n,r){return r!==null&&iy(r),Ho(e,t.child,null,n),t=_y(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=hp(Error(B(422))),gu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xd({mode:"visible",children:r.children},i,0,null),s=ms(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ho(e,t.child,null,o),e.child.memoizedState=Cm(o),e.memoizedState=Pm,s);if(!(e.mode&1))return gu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=hp(s,r,void 0),gu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=_t,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nr(t,i),zn(r,t,i,-1))}return Sy(),r=hp(Error(B(421))),gu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,un=wi(i.nextSibling),fn=e,Le=!0,Fn=null,t!==null&&(wn[En++]=Tr,wn[En++]=Ir,wn[En++]=Ss,Tr=t.id,Ir=t.overflow,Ss=e),e=_y(e,r.children),e.flags|=4096,e)}function Z0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sm(t.return,e,n)}function dp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Bt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Z0(t,n,e);else if(t.tag===19)Z0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ch(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ch(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dp(e,!0,n,null,s);break;case"together":dp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dN(t,e,n){switch(e.tag){case 3:yS(e),qo();break;case 5:H1(e);break;case 1:en(e.type)&&Ah(e);break;case 4:uy(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ke(Rh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?_S(t,e,n):(ke(Ue,Ue.current&1),t=Dr(t,e,n),t!==null?t.sibling:null);ke(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ke(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,mS(t,e,n)}return Dr(t,e,n)}var wS,Nm,ES,TS;wS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nm=function(){};ES=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hs(cr.current);var s=null;switch(n){case"input":i=em(t,i),r=em(t,r),s=[];break;case"select":i=ze({},i,{value:void 0}),r=ze({},r,{value:void 0}),s=[];break;case"textarea":i=rm(t,i),r=rm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ih)}sm(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($l.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($l.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&be("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};TS=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ga(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fN(t,e,n){var r=e.pendingProps;switch(ry(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return en(e.type)&&Sh(),kt(e),null;case 3:return r=e.stateNode,Wo(),Pe(Zt),Pe(Vt),dy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Um(Fn),Fn=null))),Nm(t,e),kt(e),null;case 5:hy(e);var i=hs(ec.current);if(n=e.type,t!==null&&e.stateNode!=null)ES(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return kt(e),null}if(t=hs(cr.current),pu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nr]=e,r[Xl]=s,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<hl.length;i++)be(hl[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":l0(r,s),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},be("invalid",r);break;case"textarea":u0(r,s),be("invalid",r)}sm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,t),i=["children",""+a]):$l.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&be("scroll",r)}switch(n){case"input":su(r),c0(r,s,!0);break;case"textarea":su(r),h0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ih)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=YI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nr]=e,t[Xl]=r,wS(t,e,!1,!1),e.stateNode=t;e:{switch(o=om(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<hl.length;i++)be(hl[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":l0(t,r),i=em(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ze({},r,{value:void 0}),be("invalid",t);break;case"textarea":u0(t,r),i=rm(t,r),be("invalid",t);break;default:i=r}sm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ZI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&JI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zl(t,l):typeof l=="number"&&zl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($l.hasOwnProperty(s)?l!=null&&s==="onScroll"&&be("scroll",t):l!=null&&$g(t,s,l,o))}switch(n){case"input":su(t),c0(t,r,!1);break;case"textarea":su(t),h0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ko(t,!!r.multiple,s,!1):r.defaultValue!=null&&ko(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ih)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)TS(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=hs(ec.current),hs(cr.current),pu(e)){if(r=e.stateNode,n=e.memoizedProps,r[nr]=e,(s=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:fu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nr]=e,e.stateNode=r}return kt(e),null;case 13:if(Pe(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&un!==null&&e.mode&1&&!(e.flags&128))U1(),qo(),e.flags|=98560,s=!1;else if(s=pu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[nr]=e}else qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Fn!==null&&(Um(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?ut===0&&(ut=3):Sy())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Wo(),Nm(t,e),t===null&&Yl(e.stateNode.containerInfo),kt(e),null;case 10:return ay(e.type._context),kt(e),null;case 17:return en(e.type)&&Sh(),kt(e),null;case 19:if(Pe(Ue),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ga(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ch(t),o!==null){for(e.flags|=128,Ga(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>Go&&(e.flags|=128,r=!0,Ga(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ch(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Le)return kt(e),null}else 2*Ze()-s.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,r=!0,Ga(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=Ue.current,ke(Ue,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Iy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function pN(t,e){switch(ry(e),e.tag){case 1:return en(e.type)&&Sh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),Pe(Zt),Pe(Vt),dy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hy(e),null;case 13:if(Pe(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Ue),null;case 4:return Wo(),null;case 10:return ay(e.type._context),null;case 22:case 23:return Iy(),null;case 24:return null;default:return null}}var yu=!1,Pt=!1,mN=typeof WeakSet=="function"?WeakSet:Set,Y=null;function Ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function Dm(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var ew=!1;function gN(t,e){if(gm=wh,t=k1(),ty(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=o),m===s&&++h===r&&(l=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ym={focusedElem:t,selectionRange:n},wh=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,b=R.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Ln(e.type,A),b);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(N){Ke(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return R=ew,ew=!1,R}function xl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Dm(e,n,s)}i=i.next}while(i!==r)}}function Sd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Om(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function IS(t){var e=t.alternate;e!==null&&(t.alternate=null,IS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nr],delete e[Xl],delete e[wm],delete e[XC],delete e[ZC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function SS(t){return t.tag===5||t.tag===3||t.tag===4}function tw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||SS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ih));else if(r!==4&&(t=t.child,t!==null))for(Vm(t,e,n),t=t.sibling;t!==null;)Vm(t,e,n),t=t.sibling}function Lm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lm(t,e,n),t=t.sibling;t!==null;)Lm(t,e,n),t=t.sibling}var Et=null,Mn=!1;function Jr(t,e,n){for(n=n.child;n!==null;)AS(t,e,n),n=n.sibling}function AS(t,e,n){if(lr&&typeof lr.onCommitFiberUnmount=="function")try{lr.onCommitFiberUnmount(gd,n)}catch{}switch(n.tag){case 5:Pt||Ao(n,e);case 6:var r=Et,i=Mn;Et=null,Jr(t,e,n),Et=r,Mn=i,Et!==null&&(Mn?(t=Et,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Et.removeChild(n.stateNode));break;case 18:Et!==null&&(Mn?(t=Et,n=n.stateNode,t.nodeType===8?sp(t.parentNode,n):t.nodeType===1&&sp(t,n),Kl(t)):sp(Et,n.stateNode));break;case 4:r=Et,i=Mn,Et=n.stateNode.containerInfo,Mn=!0,Jr(t,e,n),Et=r,Mn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dm(n,e,o),i=i.next}while(i!==r)}Jr(t,e,n);break;case 1:if(!Pt&&(Ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}Jr(t,e,n);break;case 21:Jr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Jr(t,e,n),Pt=r):Jr(t,e,n);break;default:Jr(t,e,n)}}function nw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mN),e.forEach(function(r){var i=AN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Et=a.stateNode,Mn=!1;break e;case 3:Et=a.stateNode.containerInfo,Mn=!0;break e;case 4:Et=a.stateNode.containerInfo,Mn=!0;break e}a=a.return}if(Et===null)throw Error(B(160));AS(s,o,i),Et=null,Mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xS(e,t),e=e.sibling}function xS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Xn(t),r&4){try{xl(3,t,t.return),Sd(3,t)}catch(A){Ke(t,t.return,A)}try{xl(5,t,t.return)}catch(A){Ke(t,t.return,A)}}break;case 1:On(e,t),Xn(t),r&512&&n!==null&&Ao(n,n.return);break;case 5:if(On(e,t),Xn(t),r&512&&n!==null&&Ao(n,n.return),t.flags&32){var i=t.stateNode;try{zl(i,"")}catch(A){Ke(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&GI(i,s),om(a,o);var u=om(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?ZI(i,f):h==="dangerouslySetInnerHTML"?JI(i,f):h==="children"?zl(i,f):$g(i,h,f,u)}switch(a){case"input":tm(i,s);break;case"textarea":QI(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ko(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ko(i,!!s.multiple,s.defaultValue,!0):ko(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xl]=s}catch(A){Ke(t,t.return,A)}}break;case 6:if(On(e,t),Xn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){Ke(t,t.return,A)}}break;case 3:if(On(e,t),Xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kl(e.containerInfo)}catch(A){Ke(t,t.return,A)}break;case 4:On(e,t),Xn(t);break;case 13:On(e,t),Xn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ey=Ze())),r&4&&nw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(u=Pt)||h,On(e,t),Pt=u):On(e,t),Xn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Y=t,h=t.child;h!==null;){for(f=Y=h;Y!==null;){switch(m=Y,w=m.child,m.tag){case 0:case 11:case 14:case 15:xl(4,m,m.return);break;case 1:Ao(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(A){Ke(r,n,A)}}break;case 5:Ao(m,m.return);break;case 22:if(m.memoizedState!==null){iw(f);continue}}w!==null?(w.return=m,Y=w):iw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=XI("display",o))}catch(A){Ke(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(A){Ke(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Xn(t),r&4&&nw(t);break;case 21:break;default:On(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(SS(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zl(i,""),r.flags&=-33);var s=tw(t);Lm(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=tw(t);Vm(t,a,o);break;default:throw Error(B(161))}}catch(l){Ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yN(t,e,n){Y=t,kS(t)}function kS(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||yu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pt;a=yu;var u=Pt;if(yu=o,(Pt=l)&&!u)for(Y=i;Y!==null;)o=Y,l=o.child,o.tag===22&&o.memoizedState!==null?sw(i):l!==null?(l.return=o,Y=l):sw(i);for(;s!==null;)Y=s,kS(s),s=s.sibling;Y=i,yu=a,Pt=u}rw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):rw(t)}}function rw(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||Sd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&B0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}B0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Kl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Pt||e.flags&512&&Om(e)}catch(m){Ke(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function iw(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function sw(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sd(4,e)}catch(l){Ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ke(e,i,l)}}var s=e.return;try{Om(e)}catch(l){Ke(e,s,l)}break;case 5:var o=e.return;try{Om(e)}catch(l){Ke(e,o,l)}}}catch(l){Ke(e,e.return,l)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var _N=Math.ceil,Oh=Ur.ReactCurrentDispatcher,vy=Ur.ReactCurrentOwner,xn=Ur.ReactCurrentBatchConfig,_e=0,_t=null,rt=null,St=0,ln=0,xo=Ui(0),ut=0,ic=null,xs=0,Ad=0,wy=0,kl=null,Yt=null,Ey=0,Go=1/0,_r=null,Vh=!1,Mm=null,Ti=null,_u=!1,fi=null,Lh=0,Rl=0,jm=null,$u=-1,zu=0;function zt(){return _e&6?Ze():$u!==-1?$u:$u=Ze()}function Ii(t){return t.mode&1?_e&2&&St!==0?St&-St:tN.transition!==null?(zu===0&&(zu=h1()),zu):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:_1(t.type)),t):1}function zn(t,e,n,r){if(50<Rl)throw Rl=0,jm=null,Error(B(185));kc(t,n,r),(!(_e&2)||t!==_t)&&(t===_t&&(!(_e&2)&&(Ad|=n),ut===4&&si(t,St)),tn(t,r),n===1&&_e===0&&!(e.mode&1)&&(Go=Ze()+500,Ed&&Bi()))}function tn(t,e){var n=t.callbackNode;tC(t,e);var r=vh(t,t===_t?St:0);if(r===0)n!==null&&p0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&p0(n),e===1)t.tag===0?eN(ow.bind(null,t)):M1(ow.bind(null,t)),YC(function(){!(_e&6)&&Bi()}),n=null;else{switch(d1(r)){case 1:n=Kg;break;case 4:n=c1;break;case 16:n=_h;break;case 536870912:n=u1;break;default:n=_h}n=VS(n,RS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function RS(t,e){if($u=-1,zu=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(No()&&t.callbackNode!==n)return null;var r=vh(t,t===_t?St:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Mh(t,r);else{e=r;var i=_e;_e|=2;var s=PS();(_t!==t||St!==e)&&(_r=null,Go=Ze()+500,ps(t,e));do try{EN();break}catch(a){bS(t,a)}while(1);oy(),Oh.current=s,_e=i,rt!==null?e=0:(_t=null,St=0,e=ut)}if(e!==0){if(e===2&&(i=hm(t),i!==0&&(r=i,e=Fm(t,i))),e===1)throw n=ic,ps(t,0),si(t,r),tn(t,Ze()),n;if(e===6)si(t,r);else{if(i=t.current.alternate,!(r&30)&&!vN(i)&&(e=Mh(t,r),e===2&&(s=hm(t),s!==0&&(r=s,e=Fm(t,s))),e===1))throw n=ic,ps(t,0),si(t,r),tn(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:es(t,Yt,_r);break;case 3:if(si(t,r),(r&130023424)===r&&(e=Ey+500-Ze(),10<e)){if(vh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vm(es.bind(null,t,Yt,_r),e);break}es(t,Yt,_r);break;case 4:if(si(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_N(r/1960))-r,10<r){t.timeoutHandle=vm(es.bind(null,t,Yt,_r),r);break}es(t,Yt,_r);break;case 5:es(t,Yt,_r);break;default:throw Error(B(329))}}}return tn(t,Ze()),t.callbackNode===n?RS.bind(null,t):null}function Fm(t,e){var n=kl;return t.current.memoizedState.isDehydrated&&(ps(t,e).flags|=256),t=Mh(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&Um(e)),t}function Um(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function vN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function si(t,e){for(e&=~wy,e&=~Ad,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),r=1<<n;t[n]=-1,e&=~r}}function ow(t){if(_e&6)throw Error(B(327));No();var e=vh(t,0);if(!(e&1))return tn(t,Ze()),null;var n=Mh(t,e);if(t.tag!==0&&n===2){var r=hm(t);r!==0&&(e=r,n=Fm(t,r))}if(n===1)throw n=ic,ps(t,0),si(t,e),tn(t,Ze()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Yt,_r),tn(t,Ze()),null}function Ty(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(Go=Ze()+500,Ed&&Bi())}}function ks(t){fi!==null&&fi.tag===0&&!(_e&6)&&No();var e=_e;_e|=1;var n=xn.transition,r=Ie;try{if(xn.transition=null,Ie=1,t)return t()}finally{Ie=r,xn.transition=n,_e=e,!(_e&6)&&Bi()}}function Iy(){ln=xo.current,Pe(xo)}function ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QC(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(ry(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sh();break;case 3:Wo(),Pe(Zt),Pe(Vt),dy();break;case 5:hy(r);break;case 4:Wo();break;case 13:Pe(Ue);break;case 19:Pe(Ue);break;case 10:ay(r.type._context);break;case 22:case 23:Iy()}n=n.return}if(_t=t,rt=t=Si(t.current,null),St=ln=e,ut=0,ic=null,wy=Ad=xs=0,Yt=kl=null,us!==null){for(e=0;e<us.length;e++)if(n=us[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}us=null}return t}function bS(t,e){do{var n=rt;try{if(oy(),Fu.current=Dh,Nh){for(var r=$e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Nh=!1}if(As=0,yt=ct=$e=null,Al=!1,tc=0,vy.current=null,n===null||n.return===null){ut=1,ic=e,rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=St,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=K0(o);if(w!==null){w.flags&=-257,G0(w,o,a,s,e),w.mode&1&&W0(s,u,e),e=w,l=u;var R=e.updateQueue;if(R===null){var A=new Set;A.add(l),e.updateQueue=A}else R.add(l);break e}else{if(!(e&1)){W0(s,u,e),Sy();break e}l=Error(B(426))}}else if(Le&&a.mode&1){var b=K0(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),G0(b,o,a,s,e),iy(Ko(l,a));break e}}s=l=Ko(l,a),ut!==4&&(ut=2),kl===null?kl=[s]:kl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=dS(s,l,e);U0(s,T);break e;case 1:a=l;var v=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Ti===null||!Ti.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var N=fS(s,a,e);U0(s,N);break e}}s=s.return}while(s!==null)}NS(n)}catch(j){e=j,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function PS(){var t=Oh.current;return Oh.current=Dh,t===null?Dh:t}function Sy(){(ut===0||ut===3||ut===2)&&(ut=4),_t===null||!(xs&268435455)&&!(Ad&268435455)||si(_t,St)}function Mh(t,e){var n=_e;_e|=2;var r=PS();(_t!==t||St!==e)&&(_r=null,ps(t,e));do try{wN();break}catch(i){bS(t,i)}while(1);if(oy(),_e=n,Oh.current=r,rt!==null)throw Error(B(261));return _t=null,St=0,ut}function wN(){for(;rt!==null;)CS(rt)}function EN(){for(;rt!==null&&!WP();)CS(rt)}function CS(t){var e=OS(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?NS(t):rt=e,vy.current=null}function NS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pN(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,rt=null;return}}else if(n=fN(n,e,ln),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);ut===0&&(ut=5)}function es(t,e,n){var r=Ie,i=xn.transition;try{xn.transition=null,Ie=1,TN(t,e,n,r)}finally{xn.transition=i,Ie=r}return null}function TN(t,e,n,r){do No();while(fi!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nC(t,s),t===_t&&(rt=_t=null,St=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_u||(_u=!0,VS(_h,function(){return No(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xn.transition,xn.transition=null;var o=Ie;Ie=1;var a=_e;_e|=4,vy.current=null,gN(t,n),xS(n,t),$C(ym),wh=!!gm,ym=gm=null,t.current=n,yN(n),KP(),_e=a,Ie=o,xn.transition=s}else t.current=n;if(_u&&(_u=!1,fi=t,Lh=i),s=t.pendingLanes,s===0&&(Ti=null),YP(n.stateNode),tn(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vh)throw Vh=!1,t=Mm,Mm=null,t;return Lh&1&&t.tag!==0&&No(),s=t.pendingLanes,s&1?t===jm?Rl++:(Rl=0,jm=t):Rl=0,Bi(),null}function No(){if(fi!==null){var t=d1(Lh),e=xn.transition,n=Ie;try{if(xn.transition=null,Ie=16>t?16:t,fi===null)var r=!1;else{if(t=fi,fi=null,Lh=0,_e&6)throw Error(B(331));var i=_e;for(_e|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Y=u;Y!==null;){var h=Y;switch(h.tag){case 0:case 11:case 15:xl(8,h,s)}var f=h.child;if(f!==null)f.return=h,Y=f;else for(;Y!==null;){h=Y;var m=h.sibling,w=h.return;if(IS(h),h===u){Y=null;break}if(m!==null){m.return=w,Y=m;break}Y=w}}}var R=s.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xl(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,Y=T;break e}Y=s.return}}var v=t.current;for(Y=v;Y!==null;){o=Y;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,Y=E;else e:for(o=v;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sd(9,a)}}catch(j){Ke(a,a.return,j)}if(a===o){Y=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,Y=N;break e}Y=a.return}}if(_e=i,Bi(),lr&&typeof lr.onPostCommitFiberRoot=="function")try{lr.onPostCommitFiberRoot(gd,t)}catch{}r=!0}return r}finally{Ie=n,xn.transition=e}}return!1}function aw(t,e,n){e=Ko(n,e),e=dS(t,e,1),t=Ei(t,e,1),e=zt(),t!==null&&(kc(t,1,e),tn(t,e))}function Ke(t,e,n){if(t.tag===3)aw(t,t,n);else for(;e!==null;){if(e.tag===3){aw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ti===null||!Ti.has(r))){t=Ko(n,t),t=fS(e,t,1),e=Ei(e,t,1),t=zt(),e!==null&&(kc(e,1,t),tn(e,t));break}}e=e.return}}function IN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(St&n)===n&&(ut===4||ut===3&&(St&130023424)===St&&500>Ze()-Ey?ps(t,0):wy|=n),tn(t,e)}function DS(t,e){e===0&&(t.mode&1?(e=lu,lu<<=1,!(lu&130023424)&&(lu=4194304)):e=1);var n=zt();t=Nr(t,e),t!==null&&(kc(t,e,n),tn(t,n))}function SN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),DS(t,n)}function AN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),DS(t,n)}var OS;OS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,dN(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Le&&e.flags&1048576&&j1(e,kh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bu(t,e),t=e.pendingProps;var i=zo(e,Vt.current);Co(e,n),i=py(null,e,r,t,i,n);var s=my();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(r)?(s=!0,Ah(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,cy(e),i.updater=Id,e.stateNode=i,i._reactInternals=e,xm(e,r,t,n),e=bm(null,e,r,!0,s,n)):(e.tag=0,Le&&s&&ny(e),Bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kN(r),t=Ln(r,t),i){case 0:e=Rm(null,e,r,t,n);break e;case 1:e=J0(null,e,r,t,n);break e;case 11:e=Q0(null,e,r,t,n);break e;case 14:e=Y0(null,e,r,Ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Rm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),J0(t,e,r,i,n);case 3:e:{if(yS(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q1(t,e),Ph(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ko(Error(B(423)),e),e=X0(t,e,r,n,i);break e}else if(r!==i){i=Ko(Error(B(424)),e),e=X0(t,e,r,n,i);break e}else for(un=wi(e.stateNode.containerInfo.firstChild),fn=e,Le=!0,Fn=null,n=$1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qo(),r===i){e=Dr(t,e,n);break e}Bt(t,e,r,n)}e=e.child}return e;case 5:return H1(e),t===null&&Im(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,_m(r,i)?o=null:s!==null&&_m(r,s)&&(e.flags|=32),gS(t,e),Bt(t,e,o,n),e.child;case 6:return t===null&&Im(e),null;case 13:return _S(t,e,n);case 4:return uy(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ho(e,null,r,n):Bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Q0(t,e,r,i,n);case 7:return Bt(t,e,e.pendingProps,n),e.child;case 8:return Bt(t,e,e.pendingProps.children,n),e.child;case 12:return Bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ke(Rh,r._currentValue),r._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===i.children&&!Zt.current){e=Dr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Co(e,n),i=Rn(i),r=r(i),e.flags|=1,Bt(t,e,r,n),e.child;case 14:return r=e.type,i=Ln(r,e.pendingProps),i=Ln(r.type,i),Y0(t,e,r,i,n);case 15:return pS(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ln(r,i),Bu(t,e),e.tag=1,en(r)?(t=!0,Ah(e)):t=!1,Co(e,n),hS(e,r,i),xm(e,r,i,n),bm(null,e,r,!0,t,n);case 19:return vS(t,e,n);case 22:return mS(t,e,n)}throw Error(B(156,e.tag))};function VS(t,e){return l1(t,e)}function xN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,r){return new xN(t,e,n,r)}function Ay(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kN(t){if(typeof t=="function")return Ay(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qg)return 11;if(t===Hg)return 14}return 2}function Si(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ay(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case go:return ms(n.children,i,s,e);case zg:o=8,i|=8;break;case Yp:return t=In(12,n,e,i|2),t.elementType=Yp,t.lanes=s,t;case Jp:return t=In(13,n,e,i),t.elementType=Jp,t.lanes=s,t;case Xp:return t=In(19,n,e,i),t.elementType=Xp,t.lanes=s,t;case HI:return xd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zI:o=10;break e;case qI:o=9;break e;case qg:o=11;break e;case Hg:o=14;break e;case ni:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=In(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ms(t,e,n,r){return t=In(7,t,r,e),t.lanes=n,t}function xd(t,e,n,r){return t=In(22,t,r,e),t.elementType=HI,t.lanes=n,t.stateNode={isHidden:!1},t}function fp(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function pp(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gf(0),this.expirationTimes=Gf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xy(t,e,n,r,i,s,o,a,l){return t=new RN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cy(s),t}function bN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LS(t){if(!t)return Ni;t=t._reactInternals;e:{if(zs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(en(n))return L1(t,n,e)}return e}function MS(t,e,n,r,i,s,o,a,l){return t=xy(n,r,!0,t,i,s,o,a,l),t.context=LS(null),n=t.current,r=zt(),i=Ii(n),s=kr(r,i),s.callback=e??null,Ei(n,s,i),t.current.lanes=i,kc(t,i,r),tn(t,r),t}function kd(t,e,n,r){var i=e.current,s=zt(),o=Ii(i);return n=LS(n),e.context===null?e.context=n:e.pendingContext=n,e=kr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ei(i,e,o),t!==null&&(zn(t,i,o,s),ju(t,i,o)),o}function jh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ky(t,e){lw(t,e),(t=t.alternate)&&lw(t,e)}function PN(){return null}var jS=typeof reportError=="function"?reportError:function(t){};function Ry(t){this._internalRoot=t}Rd.prototype.render=Ry.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));kd(t,e,null,null)};Rd.prototype.unmount=Ry.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ks(function(){kd(null,t,null,null)}),e[Cr]=null}};function Rd(t){this._internalRoot=t}Rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=m1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ii.length&&e!==0&&e<ii[n].priority;n++);ii.splice(n,0,t),n===0&&y1(t)}};function by(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cw(){}function CN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=jh(o);s.call(u)}}var o=MS(e,r,t,0,null,!1,!1,"",cw);return t._reactRootContainer=o,t[Cr]=o.current,Yl(t.nodeType===8?t.parentNode:t),ks(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=jh(l);a.call(u)}}var l=xy(t,0,!1,null,null,!1,!1,"",cw);return t._reactRootContainer=l,t[Cr]=l.current,Yl(t.nodeType===8?t.parentNode:t),ks(function(){kd(e,l,n,r)}),l}function Pd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=jh(o);a.call(l)}}kd(e,o,t,i)}else o=CN(n,e,t,i,r);return jh(o)}f1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ul(e.pendingLanes);n!==0&&(Gg(e,n|1),tn(e,Ze()),!(_e&6)&&(Go=Ze()+500,Bi()))}break;case 13:ks(function(){var r=Nr(t,1);if(r!==null){var i=zt();zn(r,t,1,i)}}),ky(t,1)}};Qg=function(t){if(t.tag===13){var e=Nr(t,134217728);if(e!==null){var n=zt();zn(e,t,134217728,n)}ky(t,134217728)}};p1=function(t){if(t.tag===13){var e=Ii(t),n=Nr(t,e);if(n!==null){var r=zt();zn(n,t,e,r)}ky(t,e)}};m1=function(){return Ie};g1=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};lm=function(t,e,n){switch(e){case"input":if(tm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wd(r);if(!i)throw Error(B(90));KI(r),tm(r,i)}}}break;case"textarea":QI(t,n);break;case"select":e=n.value,e!=null&&ko(t,!!n.multiple,e,!1)}};n1=Ty;r1=ks;var NN={usingClientEntryPoint:!1,Events:[bc,wo,wd,e1,t1,Ty]},Qa={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DN={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||PN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{gd=vu.inject(DN),lr=vu}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NN;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!by(e))throw Error(B(200));return bN(t,e,null,n)};gn.createRoot=function(t,e){if(!by(t))throw Error(B(299));var n=!1,r="",i=jS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xy(t,1,!1,null,null,n,!1,r,i),t[Cr]=e.current,Yl(t.nodeType===8?t.parentNode:t),new Ry(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=o1(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return ks(t)};gn.hydrate=function(t,e,n){if(!bd(e))throw Error(B(200));return Pd(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!by(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=MS(e,null,t,1,n??null,i,!1,s,o),t[Cr]=e.current,Yl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rd(e)};gn.render=function(t,e,n){if(!bd(e))throw Error(B(200));return Pd(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!bd(t))throw Error(B(40));return t._reactRootContainer?(ks(function(){Pd(null,null,t,!1,function(){t._reactRootContainer=null,t[Cr]=null})}),!0):!1};gn.unstable_batchedUpdates=Ty;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Pd(t,e,n,!1,r)};gn.version="18.3.1-next-f1338f8080-20240426";function FS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FS)}catch{}}FS(),FI.exports=gn;var ON=FI.exports,uw=ON;Gp.createRoot=uw.createRoot,Gp.hydrateRoot=uw.hydrateRoot;const VN="modulepreload",LN=function(t){return"/"+t},hw={},re=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=LN(s),s in hw)return;hw[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const f=i[h];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":VN,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sc(){return sc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sc.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const dw="popstate";function MN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Bm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Fh(i)}return FN(e,n,null,t)}function et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Py(t,e){if(!t)try{throw new Error(e)}catch{}}function jN(){return Math.random().toString(36).substr(2,8)}function fw(t,e){return{usr:t.state,key:t.key,idx:e}}function Bm(t,e,n,r){return n===void 0&&(n=null),sc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?da(e):e,{state:n,key:e&&e.key||r||jN()})}function Fh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function da(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function FN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pi.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(sc({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=pi.Pop;let b=h(),T=b==null?null:b-u;u=b,l&&l({action:a,location:A.location,delta:T})}function m(b,T){a=pi.Push;let v=Bm(A.location,b,T);n&&n(v,b),u=h()+1;let E=fw(v,u),N=A.createHref(v);try{o.pushState(E,"",N)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(N)}s&&l&&l({action:a,location:A.location,delta:1})}function w(b,T){a=pi.Replace;let v=Bm(A.location,b,T);n&&n(v,b),u=h();let E=fw(v,u),N=A.createHref(v);o.replaceState(E,"",N),s&&l&&l({action:a,location:A.location,delta:0})}function R(b){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:Fh(b);return v=v.replace(/ $/,"%20"),et(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let A={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dw,f),l=b,()=>{i.removeEventListener(dw,f),l=null}},createHref(b){return e(i,b)},createURL:R,encodeLocation(b){let T=R(b);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:w,go(b){return o.go(b)}};return A}var pw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pw||(pw={}));function UN(t,e,n){return n===void 0&&(n="/"),BN(t,e,n,!1)}function BN(t,e,n,r){let i=typeof e=="string"?da(e):e,s=Cy(i.pathname||"/",n);if(s==null)return null;let o=US(t);$N(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=ZN(s);a=JN(o[l],u,r)}return a}function US(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(et(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ai([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),US(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:QN(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of BS(s.path))i(s,o,l)}),e}function BS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=BS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function $N(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zN=/^:[\w-]+$/,qN=3,HN=2,WN=1,KN=10,GN=-2,mw=t=>t==="*";function QN(t,e){let n=t.split("/"),r=n.length;return n.some(mw)&&(r+=GN),e&&(r+=HN),n.filter(i=>!mw(i)).reduce((i,s)=>i+(zN.test(s)?qN:s===""?WN:KN),r)}function YN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JN(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=gw({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),m=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=gw({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ai([s,f.pathname]),pathnameBase:iD(Ai([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ai([s,f.pathnameBase]))}return o}function gw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:m,isOptional:w}=h;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const R=a[f];return w&&!R?u[m]=void 0:u[m]=(R||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function XN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Py(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZN(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Py(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cy(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const eD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tD=t=>eD.test(t);function nD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?da(t):t,s;if(n)if(tD(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Py(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=yw(n.substring(1),"/"):s=yw(n,e)}else s=e;return{pathname:s,search:sD(r),hash:oD(i)}}function yw(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function mp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ny(t,e){let n=rD(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=da(t):(i=sc({},t),et(!i.pathname||!i.pathname.includes("?"),mp("?","pathname","search",i)),et(!i.pathname||!i.pathname.includes("#"),mp("#","pathname","hash",i)),et(!i.search||!i.search.includes("#"),mp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=nD(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Ai=t=>t.join("/").replace(/\/\/+/g,"/"),iD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),sD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,oD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $S=["post","put","patch","delete"];new Set($S);const lD=["get",...$S];new Set(lD);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oc(){return oc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oc.apply(this,arguments)}const Oy=V.createContext(null),cD=V.createContext(null),$i=V.createContext(null),Cd=V.createContext(null),mr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),zS=V.createContext(null);function uD(t,e){let{relative:n}=e===void 0?{}:e;fa()||et(!1);let{basename:r,navigator:i}=V.useContext($i),{hash:s,pathname:o,search:a}=HS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ai([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fa(){return V.useContext(Cd)!=null}function pa(){return fa()||et(!1),V.useContext(Cd).location}function qS(t){V.useContext($i).static||V.useLayoutEffect(t)}function Vy(){let{isDataRoute:t}=V.useContext(mr);return t?AD():hD()}function hD(){fa()||et(!1);let t=V.useContext(Oy),{basename:e,future:n,navigator:r}=V.useContext($i),{matches:i}=V.useContext(mr),{pathname:s}=pa(),o=JSON.stringify(Ny(i,n.v7_relativeSplatPath)),a=V.useRef(!1);return qS(()=>{a.current=!0}),V.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Dy(u,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ai([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const dD=V.createContext(null);function fD(t){let e=V.useContext(mr).outlet;return e&&V.createElement(dD.Provider,{value:t},e)}function c9(){let{matches:t}=V.useContext(mr),e=t[t.length-1];return e?e.params:{}}function HS(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext($i),{matches:i}=V.useContext(mr),{pathname:s}=pa(),o=JSON.stringify(Ny(i,r.v7_relativeSplatPath));return V.useMemo(()=>Dy(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function pD(t,e){return mD(t,e)}function mD(t,e,n,r){fa()||et(!1);let{navigator:i}=V.useContext($i),{matches:s}=V.useContext(mr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=pa(),h;if(e){var f;let b=typeof e=="string"?da(e):e;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||et(!1),h=b}else h=u;let m=h.pathname||"/",w=m;if(l!=="/"){let b=l.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let R=UN(t,{pathname:w}),A=wD(R&&R.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:Ai([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:Ai([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&A?V.createElement(Cd.Provider,{value:{location:oc({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:pi.Pop}},A):A}function gD(){let t=SD(),e=aD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,s)}const yD=V.createElement(gD,null);class _D extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){}render(){return this.state.error!==void 0?V.createElement(mr.Provider,{value:this.props.routeContext},V.createElement(zS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vD(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(Oy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(mr.Provider,{value:e},r)}function wD(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||et(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:m,errors:w}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||R){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let w,R=!1,A=null,b=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||yD,l&&(u<0&&m===0?(xD("route-fallback",!1),R=!0,b=null):u===m&&(R=!0,b=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let E;return w?E=A:R?E=b:f.route.Component?E=V.createElement(f.route.Component,null):f.route.element?E=f.route.element:E=h,V.createElement(vD,{match:f,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:E})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?V.createElement(_D,{location:n.location,revalidation:n.revalidation,component:A,error:w,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var WS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(WS||{}),Uh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uh||{});function ED(t){let e=V.useContext(Oy);return e||et(!1),e}function TD(t){let e=V.useContext(cD);return e||et(!1),e}function ID(t){let e=V.useContext(mr);return e||et(!1),e}function KS(t){let e=ID(),n=e.matches[e.matches.length-1];return n.route.id||et(!1),n.route.id}function SD(){var t;let e=V.useContext(zS),n=TD(Uh.UseRouteError),r=KS(Uh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function AD(){let{router:t}=ED(WS.UseNavigateStable),e=KS(Uh.UseNavigateStable),n=V.useRef(!1);return qS(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,oc({fromRouteId:e},s)))},[t,e])}const _w={};function xD(t,e,n){!e&&!_w[t]&&(_w[t]=!0)}function kD(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Bh(t){let{to:e,replace:n,state:r,relative:i}=t;fa()||et(!1);let{future:s,static:o}=V.useContext($i),{matches:a}=V.useContext(mr),{pathname:l}=pa(),u=Vy(),h=Dy(e,Ny(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return V.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Ly(t){return fD(t.context)}function X(t){et(!1)}function RD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pi.Pop,navigator:s,static:o=!1,future:a}=t;fa()&&et(!1);let l=e.replace(/^\/*/,"/"),u=V.useMemo(()=>({basename:l,navigator:s,static:o,future:oc({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=da(r));let{pathname:h="/",search:f="",hash:m="",state:w=null,key:R="default"}=r,A=V.useMemo(()=>{let b=Cy(h,l);return b==null?null:{location:{pathname:b,search:f,hash:m,state:w,key:R},navigationType:i}},[l,h,f,m,w,R,i]);return A==null?null:V.createElement($i.Provider,{value:u},V.createElement(Cd.Provider,{children:n,value:A}))}function bD(t){let{children:e,location:n}=t;return pD($m(e),n)}new Promise(()=>{});function $m(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,$m(r.props.children,s));return}r.type!==X&&et(!1),!r.props.index||!r.props.children||et(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$m(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zm(){return zm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zm.apply(this,arguments)}function PD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function CD(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ND(t,e){return t.button===0&&(!e||e==="_self")&&!CD(t)}const DD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],OD="6";try{window.__reactRouterVersion=OD}catch{}const VD="startTransition",vw=IP[VD];function LD(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=MN({window:i,v5Compat:!0}));let o=s.current,[a,l]=V.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=V.useCallback(f=>{u&&vw?vw(()=>l(f)):l(f)},[l,u]);return V.useLayoutEffect(()=>o.listen(h),[o,h]),V.useEffect(()=>kD(r),[r]),V.createElement(RD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const MD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:f}=e,m=PD(e,DD),{basename:w}=V.useContext($i),R,A=!1;if(typeof u=="string"&&jD.test(u)&&(R=u,MD))try{let E=new URL(window.location.href),N=u.startsWith("//")?new URL(E.protocol+u):new URL(u),j=Cy(N.pathname,w);N.origin===E.origin&&j!=null?u=j+N.search+N.hash:A=!0}catch{}let b=uD(u,{relative:i}),T=FD(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function v(E){r&&r(E),E.defaultPrevented||T(E)}return V.createElement("a",zm({},m,{href:R||b,onClick:A||s?r:v,ref:n,target:l}))});var ww;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ww||(ww={}));var Ew;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ew||(Ew={}));function FD(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Vy(),u=pa(),h=HS(t,{relative:o});return V.useCallback(f=>{if(ND(f,n)){f.preventDefault();let m=r!==void 0?r:Fh(u)===Fh(h);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,h,r,i,n,t,s,o,a])}let UD={data:""},BD=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||UD},$D=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,zD=/\/\*[^]*?\*\/|  +/g,Tw=/\n+/g,oi=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?oi(o,s):s+"{"+oi(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=oi(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=oi.p?oi.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},yr={},GS=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+GS(t[n]);return e}return t},qD=(t,e,n,r,i)=>{let s=GS(t),o=yr[s]||(yr[s]=(l=>{let u=0,h=11;for(;u<l.length;)h=101*h+l.charCodeAt(u++)>>>0;return"go"+h})(s));if(!yr[o]){let l=s!==t?t:(u=>{let h,f,m=[{}];for(;h=$D.exec(u.replace(zD,""));)h[4]?m.shift():h[3]?(f=h[3].replace(Tw," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(Tw," ").trim();return m[0]})(t);yr[o]=oi(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&yr.g?yr.g:null;return n&&(yr.g=yr[o]),((l,u,h,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=h?l+u.data:u.data+l)})(yr[o],e,r,a),o},HD=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":oi(a,""):a===!1?"":a}return r+i+(o??"")},"");function Nd(t){let e=this||{},n=t.call?t(e.p):t;return qD(n.unshift?n.raw?HD(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,BD(e.target),e.g,e.o,e.k)}let QS,qm,Hm;Nd.bind({g:1});let Or=Nd.bind({k:1});function WD(t,e,n,r){oi.p=e,QS=t,qm=n,Hm=r}function zi(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:qm&&qm()},a),n.o=/ *go\d+/.test(l),a.className=Nd.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),Hm&&u[0]&&Hm(a),QS(u,a)}return e?e(i):i}}var KD=t=>typeof t=="function",ac=(t,e)=>KD(t)?t(e):t,GD=(()=>{let t=0;return()=>(++t).toString()})(),YS=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),QD=20,My="default",JS=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return JS(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Hu=[],XS={toasts:[],pausedAt:void 0,settings:{toastLimit:QD}},ir={},ZS=(t,e=My)=>{ir[e]=JS(ir[e]||XS,t),Hu.forEach(([n,r])=>{n===e&&r(ir[e])})},eA=t=>Object.keys(ir).forEach(e=>ZS(t,e)),YD=t=>Object.keys(ir).find(e=>ir[e].toasts.some(n=>n.id===t)),Dd=(t=My)=>e=>{ZS(e,t)},JD={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},tA=(t={},e=My)=>{let[n,r]=V.useState(ir[e]||XS),i=V.useRef(ir[e]);V.useEffect(()=>(i.current!==ir[e]&&r(ir[e]),Hu.push([e,r]),()=>{let o=Hu.findIndex(([a])=>a===e);o>-1&&Hu.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||JD[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},XD=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||GD()}),Cc=t=>(e,n)=>{let r=XD(e,t,n);return Dd(r.toasterId||YD(r.id))({type:2,toast:r}),r.id},de=(t,e)=>Cc("blank")(t,e);de.error=Cc("error");de.success=Cc("success");de.loading=Cc("loading");de.custom=Cc("custom");de.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Dd(e)(n):eA(n)};de.dismissAll=t=>de.dismiss(void 0,t);de.remove=(t,e)=>{let n={type:4,toastId:t};e?Dd(e)(n):eA(n)};de.removeAll=t=>de.remove(void 0,t);de.promise=(t,e,n)=>{let r=de.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?ac(e.success,i):void 0;return s?de.success(s,{id:r,...n,...n==null?void 0:n.success}):de.dismiss(r),i}).catch(i=>{let s=e.error?ac(e.error,i):void 0;s?de.error(s,{id:r,...n,...n==null?void 0:n.error}):de.dismiss(r)}),t};var ZD=1e3,nA=(t,e="default")=>{let{toasts:n,pausedAt:r}=tA(t,e),i=V.useRef(new Map).current,s=V.useCallback((f,m=ZD)=>{if(i.has(f))return;let w=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,w)},[]);V.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(w=>{if(w.duration===1/0)return;let R=(w.duration||0)+w.pauseDuration-(f-w.createdAt);if(R<0){w.visible&&de.dismiss(w.id);return}return setTimeout(()=>de.dismiss(w.id,e),R)});return()=>{m.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=V.useCallback(Dd(e),[e]),a=V.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=V.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=V.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=V.useCallback((f,m)=>{let{reverseOrder:w=!1,gutter:R=8,defaultPosition:A}=m||{},b=n.filter(E=>(E.position||A)===(f.position||A)&&E.height),T=b.findIndex(E=>E.id===f.id),v=b.filter((E,N)=>N<T&&E.visible).length;return b.filter(E=>E.visible).slice(...w?[v+1]:[0,v]).reduce((E,N)=>E+(N.height||0)+R,0)},[n]);return V.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:h}}},eO=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,tO=Or`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nO=Or`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,rA=zi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${eO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${nO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,rO=Or`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,iA=zi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${rO} 1s linear infinite;
`,iO=Or`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,sO=Or`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,sA=zi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${iO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${sO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,oO=zi("div")`
  position: absolute;
`,aO=zi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,lO=Or`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,cO=zi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,oA=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?V.createElement(cO,null,e):e:n==="blank"?null:V.createElement(aO,null,V.createElement(iA,{...r}),n!=="loading"&&V.createElement(oO,null,n==="error"?V.createElement(rA,{...r}):V.createElement(sA,{...r})))},uO=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,hO=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,dO="0%{opacity:0;} 100%{opacity:1;}",fO="0%{opacity:1;} 100%{opacity:0;}",pO=zi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,mO=zi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,gO=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=YS()?[dO,fO]:[uO(n),hO(n)];return{animation:e?`${Or(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Or(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},aA=V.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?gO(t.position||e||"top-center",t.visible):{opacity:0},s=V.createElement(oA,{toast:t}),o=V.createElement(mO,{...t.ariaProps},ac(t.message,t));return V.createElement(pO,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):V.createElement(V.Fragment,null,s,o))});WD(V.createElement);var yO=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=V.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return V.createElement("div",{ref:s,className:e,style:n},i)},_O=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:YS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},vO=Nd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,wu=16,lA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=nA(n,s);return V.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:wu,left:wu,right:wu,bottom:wu,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(h=>{let f=h.position||e,m=u.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),w=_O(f,m);return V.createElement(yO,{id:h.id,key:h.id,onHeightUpdate:u.updateHeight,className:h.visible?vO:"",style:w},h.type==="custom"?ac(h.message,h):i?i(h):V.createElement(aA,{toast:h,position:f}))}))},Wu=de;const wO=Object.freeze(Object.defineProperty({__proto__:null,CheckmarkIcon:sA,ErrorIcon:rA,LoaderIcon:iA,ToastBar:aA,ToastIcon:oA,Toaster:lA,default:Wu,resolveValue:ac,toast:de,useToaster:nA,useToasterStore:tA},Symbol.toStringTag,{value:"Module"}));var EO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const TO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ce=(t,e)=>{const n=V.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:a,...l},u)=>V.createElement("svg",{ref:u,...EO,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${TO(t)}`,...l},[...e.map(([h,f])=>V.createElement(h,f)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${t}`,n},IO=Ce("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),SO=Ce("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Iw=Ce("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Sw=Ce("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Aw=Ce("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),xw=Ce("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),AO=Ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),xO=Ce("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),kO=Ce("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),RO=Ce("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),bO=Ce("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),PO=Ce("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]),CO=Ce("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),kw=Ce("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),NO=Ce("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),DO=Ce("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]),Rw=Ce("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Wm=Ce("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),cA=Ce("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),bw=Ce("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Pw=Ce("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),OO=Ce("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),VO=Ce("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),LO=Ce("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),MO=Ce("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),jO=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,w=u&63;l||(w=64,o||(m=64)),r.push(n[h],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new UO;const m=s<<2|a>>4;if(r.push(m),u!==64){const w=a<<4&240|u>>2;if(r.push(w),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BO=function(t){const e=uA(t);return hA.encodeByteArray(e,!0)},$h=function(t){return BO(t).replace(/\./g,"")},dA=function(t){try{return hA.decodeString(t,!0)}catch{}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=()=>fA().__FIREBASE_DEFAULTS__,zO=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dA(t[1]);return e&&JSON.parse(e)},Od=()=>{try{return jO()||$O()||zO()||qO()}catch{return}},pA=t=>{var e,n;return(n=(e=Od())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},mA=t=>{const e=pA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gA=()=>{var t;return(t=Od())==null?void 0:t.config},yA=t=>{var e;return(e=Od())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[$h(JSON.stringify(n)),$h(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function vA(){var e;const t=(e=Od())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YO(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wA(){return!vA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EA(){return!vA()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function jy(){try{return typeof indexedDB=="object"}catch{return!1}}function TA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function JO(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XO,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Kn(i,a,r)}}function ZO(t,e){return t.replace(e2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const e2=/\{\$([^}]+)}/g;function t2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Di(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cw(s)&&Cw(o)){if(!Di(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function fl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function n2(t,e){const n=new r2(t,e);return n.subscribe.bind(n)}class r2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");i2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gp),i.error===void 0&&(i.error=gp),i.complete===void 0&&(i.complete=gp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch{}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function i2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fy(t){return(await fetch(t,{credentials:"include"})).ok}class Pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a2(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o2(t){return t===ts?void 0:t}function a2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const c2={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},u2=pe.INFO,h2={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},d2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=h2[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uy{constructor(e){this.name=e,this._logLevel=u2,this._logHandler=d2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const f2=(t,e)=>e.some(n=>t instanceof n);let Nw,Dw;function p2(){return Nw||(Nw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m2(){return Dw||(Dw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IA=new WeakMap,Km=new WeakMap,SA=new WeakMap,yp=new WeakMap,By=new WeakMap;function g2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&IA.set(n,t)}).catch(()=>{}),By.set(e,t),e}function y2(t){if(Km.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Km.set(t,e)}let Gm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Km.get(t);if(e==="objectStoreNames")return t.objectStoreNames||SA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _2(t){Gm=t(Gm)}function v2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_p(this),e,...n);return SA.set(r,e.sort?e.sort():[e]),Rr(r)}:m2().includes(t)?function(...e){return t.apply(_p(this),e),Rr(IA.get(this))}:function(...e){return Rr(t.apply(_p(this),e))}}function w2(t){return typeof t=="function"?v2(t):(t instanceof IDBTransaction&&y2(t),f2(t,p2())?new Proxy(t,Gm):t)}function Rr(t){if(t instanceof IDBRequest)return g2(t);if(yp.has(t))return yp.get(t);const e=w2(t);return e!==t&&(yp.set(t,e),By.set(e,t)),e}const _p=t=>By.get(t);function Vd(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function vp(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Rr(n).then(()=>{})}const E2=["get","getKey","getAll","getAllKeys","count"],T2=["put","add","delete","clear"],wp=new Map;function Ow(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wp.get(e))return wp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=T2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E2.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return wp.set(e,s),s}_2(t=>({...t,get:(e,n,r)=>Ow(e,n)||t.get(e,n,r),has:(e,n)=>!!Ow(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qm="@firebase/app",Vw="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new Uy("@firebase/app"),A2="@firebase/app-compat",x2="@firebase/analytics-compat",k2="@firebase/analytics",R2="@firebase/app-check-compat",b2="@firebase/app-check",P2="@firebase/auth",C2="@firebase/auth-compat",N2="@firebase/database",D2="@firebase/data-connect",O2="@firebase/database-compat",V2="@firebase/functions",L2="@firebase/functions-compat",M2="@firebase/installations",j2="@firebase/installations-compat",F2="@firebase/messaging",U2="@firebase/messaging-compat",B2="@firebase/performance",$2="@firebase/performance-compat",z2="@firebase/remote-config",q2="@firebase/remote-config-compat",H2="@firebase/storage",W2="@firebase/storage-compat",K2="@firebase/firestore",G2="@firebase/ai",Q2="@firebase/firestore-compat",Y2="firebase",J2="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="[DEFAULT]",X2={[Qm]:"fire-core",[A2]:"fire-core-compat",[k2]:"fire-analytics",[x2]:"fire-analytics-compat",[b2]:"fire-app-check",[R2]:"fire-app-check-compat",[P2]:"fire-auth",[C2]:"fire-auth-compat",[N2]:"fire-rtdb",[D2]:"fire-data-connect",[O2]:"fire-rtdb-compat",[V2]:"fire-fn",[L2]:"fire-fn-compat",[M2]:"fire-iid",[j2]:"fire-iid-compat",[F2]:"fire-fcm",[U2]:"fire-fcm-compat",[B2]:"fire-perf",[$2]:"fire-perf-compat",[z2]:"fire-rc",[q2]:"fire-rc-compat",[H2]:"fire-gcs",[W2]:"fire-gcs-compat",[K2]:"fire-fst",[Q2]:"fire-fst-compat",[G2]:"fire-vertex","fire-js":"fire-js",[Y2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Map,Z2=new Map,Jm=new Map;function Lw(t,e){try{t.container.addComponent(e)}catch(n){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(Jm.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;Jm.set(e,t);for(const n of zh.values())Lw(n,t);for(const n of Z2.values())Lw(n,t);return!0}function Ws(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function it(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xi=new qs("app","Firebase",eV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=J2;function AA(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ym,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw xi.create("bad-app-name",{appName:String(i)});if(n||(n=gA()),!n)throw xi.create("no-options");const s=zh.get(i);if(s){if(Di(n,s.options)&&Di(r,s.config))return s;throw xi.create("duplicate-app",{appName:i})}const o=new l2(i);for(const l of Jm.values())o.addComponent(l);const a=new tV(n,r,o);return zh.set(i,a),a}function Ld(t=Ym){const e=zh.get(t);if(!e&&t===Ym&&gA())return AA();if(!e)throw xi.create("no-app",{appName:t});return e}function nn(t,e,n){let r=X2[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(o.join(" "));return}Wn(new Pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nV="firebase-heartbeat-database",rV=1,lc="firebase-heartbeat-store";let Ep=null;function xA(){return Ep||(Ep=Vd(nV,rV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lc)}catch{}}}}).catch(t=>{throw xi.create("idb-open",{originalErrorMessage:t.message})})),Ep}async function iV(t){try{const n=(await xA()).transaction(lc),r=await n.objectStore(lc).get(kA(t));return await n.done,r}catch(e){if(e instanceof Kn)Vr.warn(e.message);else{const n=xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(n.message)}}}async function Mw(t,e){try{const r=(await xA()).transaction(lc,"readwrite");await r.objectStore(lc).put(e,kA(t)),await r.done}catch(n){if(n instanceof Kn)Vr.warn(n.message);else{const r=xi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vr.warn(r.message)}}}function kA(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV=1024,oV=30;class aV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=jw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>oV){const o=uV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jw(),{heartbeatsToSend:r,unsentEntries:i}=lV(this._heartbeatsCache.heartbeats),s=$h(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vr.warn(n),""}}}function jw(){return new Date().toISOString().substring(0,10)}function lV(t,e=sV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jy()?TA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Mw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fw(t){return $h(JSON.stringify({version:2,heartbeats:t})).length}function uV(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t){Wn(new Pn("platform-logger",e=>new I2(e),"PRIVATE")),Wn(new Pn("heartbeat",e=>new aV(e),"PRIVATE")),nn(Qm,Vw,t),nn(Qm,Vw,"esm2020"),nn("fire-js","")}hV("");function RA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dV=RA,bA=new qs("auth","Firebase",RA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Uy("@firebase/auth");function fV(t,...e){qh.logLevel<=pe.WARN&&qh.warn(`Auth (${Ks}): ${t}`,...e)}function Ku(t,...e){qh.logLevel<=pe.ERROR&&qh.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw zy(t,...e)}function rn(t,...e){return zy(t,...e)}function $y(t,e,n){const r={...dV(),[e]:n};return new qs("auth","Firebase",r).create(e,{appName:t.name})}function qt(t){return $y(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Md(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Cn(t,"argument-error"),$y(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bA.create(t,...e)}function W(t,e,...n){if(!t)throw zy(e,...n)}function Sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ku(e),new Error(e)}function Lr(t,e){t||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qy(){return Uw()==="http:"||Uw()==="https:"}function Uw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qy()||GO()||"connection"in navigator)?navigator.onLine:!0}function mV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Lr(n>e,"Short delay should be less than long delay!"),this.isMobile=WO()||QO()}get(){return pV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){Lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_V=new Nc(3e4,6e4);function dt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ft(t,e,n,r,i={}){return CA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ma({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...s};return KO()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(u.credentials="include"),PA.fetch()(await NA(t,t.config.apiHost,n,a),u)})}async function CA(t,e,n){t._canInitEmulator=!1;const r={...gV,...e};try{const i=new wV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $y(t,h,u);Cn(t,h)}}catch(i){if(i instanceof Kn)throw i;Cn(t,"network-request-failed",{message:String(i)})}}async function Br(t,e,n,r,i={}){const s=await ft(t,e,n,r,i);return"mfaPendingCredential"in s&&Cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function NA(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Hy(t.config,i):`${t.config.apiScheme}://${i}`;return yV.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function vV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),_V.get())})}}function pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){return t!==void 0&&t.getResponse!==void 0}function $w(t){return t!==void 0&&t.enterprise!==void 0}class DA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EV(t){return(await ft(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function OA(t,e){return ft(t,"GET","/v2/recaptchaConfig",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TV(t,e){return ft(t,"POST","/v1/accounts:delete",e)}async function IV(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function Hh(t,e){return ft(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SV(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=jd(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bl(Tp(i.auth_time)),issuedAtTime:bl(Tp(i.iat)),expirationTime:bl(Tp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Tp(t){return Number(t)*1e3}function jd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ku("JWT malformed, contained fewer than 3 sections"),null;try{const i=dA(n);return i?JSON.parse(i):(Ku("Failed to decode base64 JWT payload"),null)}catch(i){return Ku("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zw(t){const e=jd(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&AV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bl(this.lastLoginAt),this.creationTime=bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Rs(t,Hh(e,{idToken:n}));W(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?VA(i.providerUserInfo):[],o=RV(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Xm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function kV(t){const e=ae(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function VA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bV(t,e){const n=await CA(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await NA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Hs(t.emulatorConfig.host)&&(l.credentials="include"),PA.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PV(t,e){return ft(t,"POST","/v2/accounts:revokeToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=zw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Do;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Do,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new xV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Xm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Rs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SV(this,e)}reload(){return kV(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(qt(this.auth));const e=await this.getIdToken();return await Rs(this,TV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:w,providerData:R,stsTokenManager:A}=n;W(f&&A,e,"internal-error");const b=Do.fromJSON(this.name,A);W(typeof f=="string",e,"internal-error"),Xr(r,e.name),Xr(i,e.name),W(typeof m=="boolean",e,"internal-error"),W(typeof w=="boolean",e,"internal-error"),Xr(s,e.name),Xr(o,e.name),Xr(a,e.name),Xr(l,e.name),Xr(u,e.name),Xr(h,e.name);const T=new Un({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:b,createdAt:u,lastLoginAt:h});return R&&Array.isArray(R)&&(T.providerData=R.map(v=>({...v}))),l&&(T._redirectEventId=l),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Do;i.updateFromServerResponse(n);const s=new Un({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?VA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Do;a.updateFromIdToken(r);const l=new Un({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Xm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new Map;function Ar(t){Lr(t instanceof Function,"Expected a class definition");let e=qw.get(t);return e?(Lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LA.type="NONE";const Hw=LA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t,e,n){return`firebase:${t}:${e}:${n}`}class Oo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hh(this.auth,{idToken:e}).catch(()=>{});return n?Un._fromGetAccountInfoResponse(this.auth,n,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oo(Ar(Hw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ar(Hw);const o=Gu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const m=await Hh(e,{idToken:h}).catch(()=>{});if(!m)break;f=await Un._fromGetAccountInfoResponse(e,m,h)}else f=Un._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Oo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Oo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(UA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(MA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($A(e))return"Blackberry";if(zA(e))return"Webos";if(jA(e))return"Safari";if((e.includes("chrome/")||FA(e))&&!e.includes("edge/"))return"Chrome";if(BA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function MA(t=ht()){return/firefox\//i.test(t)}function jA(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FA(t=ht()){return/crios\//i.test(t)}function UA(t=ht()){return/iemobile/i.test(t)}function BA(t=ht()){return/android/i.test(t)}function $A(t=ht()){return/blackberry/i.test(t)}function zA(t=ht()){return/webos/i.test(t)}function Wy(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CV(t=ht()){var e;return Wy(t)&&!!((e=window.navigator)!=null&&e.standalone)}function NV(){return YO()&&document.documentMode===10}function qA(t=ht()){return Wy(t)||BA(t)||zA(t)||$A(t)||/windows phone/i.test(t)||UA(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t,e=[]){let n;switch(t){case"Browser":n=Ww(ht());break;case"Worker":n=`${Ww(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OV(t,e={}){return ft(t,"GET","/v2/passwordPolicy",dt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VV=6;class LV{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??VV,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kw(this),this.idTokenSubscription=new Kw(this),this.beforeStateQueue=new DV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ar(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hh(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch{await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(it(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(qt(this));const n=e?ae(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(qt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(qt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OV(this),n=new LV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ar(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[Ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&fV(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function vt(t){return ae(t)}class Kw{constructor(e){this.auth=e,this.observer=null,this.addObserver=n2(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jV(t){Dc=t}function Ky(t){return Dc.loadJS(t)}function FV(){return Dc.recaptchaV2Script}function UV(){return Dc.recaptchaEnterpriseScript}function BV(){return Dc.gapiScript}function WA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $V=500,zV=6e4,Eu=1e12;class qV{constructor(e){this.auth=e,this.counter=Eu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new KV(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Eu;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Eu;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Eu;return(r=this._widgets.get(n))==null||r.execute(),""}}class HV{constructor(){this.enterprise=new WV}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class WV{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KV{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;W(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=GV(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},zV)},$V))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function GV(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const QV="recaptcha-enterprise",Pl="NO_RECAPTCHA";class KA{constructor(e){this.type=QV,this.auth=vt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{OA(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DA(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$w(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Pl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HV().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$w(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=UV();l.length!==0&&(l+=a),Ky(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ya(t,e,n,r=!1,i=!1){const s=new KA(t);let o;if(i)o=Pl;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ki(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ya(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){const l=await Ya(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await Ya(t,e,n);return r(t,a).catch(async l=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(l.code==="auth/missing-recaptcha-token"||l.code==="auth/invalid-app-credential")){const h=await Ya(t,e,n,!1,!0);return r(t,h)}return Promise.reject(l)})}else{const a=await Ya(t,e,n,!1,!0);return r(t,a)}else return Promise.reject(i+" provider is not supported.")}async function YV(t){const e=vt(t),n=await OA(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new DA(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new KA(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JV(t,e){const n=Ws(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Di(s,e??{}))return i;Cn(i,"already-initialized")}return n.initialize({options:e})}function XV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ar);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZV(t,e,n){const r=vt(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=GA(e),{host:o,port:a}=eL(e),l=a===null?"":`:${a}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Di(u,r.config.emulator)&&Di(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Hs(o)?Fy(`${s}//${o}${l}`):i||tL()}function GA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eL(t){const e=GA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gw(o)}}}function Gw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,n){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t,e){return ft(t,"POST","/v1/accounts:resetPassword",dt(t,e))}async function rL(t,e){return ft(t,"POST","/v1/accounts:update",e)}async function iL(t,e){return ft(t,"POST","/v1/accounts:signUp",e)}async function sL(t,e){return ft(t,"POST","/v1/accounts:update",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oL(t,e){return Br(t,"POST","/v1/accounts:signInWithPassword",dt(t,e))}async function Ud(t,e){return ft(t,"POST","/v1/accounts:sendOobCode",dt(t,e))}async function aL(t,e){return Ud(t,e)}async function lL(t,e){return Ud(t,e)}async function cL(t,e){return Ud(t,e)}async function uL(t,e){return Ud(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hL(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}async function dL(t,e){return Br(t,"POST","/v1/accounts:signInWithEmailLink",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Fd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ki(e,n,"signInWithPassword",oL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hL(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ki(e,r,"signUpPassword",iL,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dL(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e){return Br(t,"POST","/v1/accounts:signInWithIdp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL="http://localhost";class Mr extends Fd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Mr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vo(e,n)}buildRequest(){const e={requestUri:fL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e){return ft(t,"POST","/v1/accounts:sendVerificationCode",dt(t,e))}async function pL(t,e){return Br(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e))}async function mL(t,e){const n=await Br(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,e));if(n.temporaryProof)throw pl(t,"account-exists-with-different-credential",n);return n}const gL={USER_NOT_FOUND:"user-not-found"};async function yL(t,e){const n={...e,operation:"REAUTH"};return Br(t,"POST","/v1/accounts:signInWithPhoneNumber",dt(t,n),gL)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Fd{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Cl({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Cl({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return pL(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return mL(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return yL(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Cl({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vL(t){const e=dl(fl(t)).link,n=e?dl(fl(e)).deep_link_id:null,r=dl(fl(t)).deep_link_id;return(r?dl(fl(r)).link:null)||r||n||e||t}class Bd{constructor(e){const n=dl(fl(e)),r=n.apiKey??null,i=n.oobCode??null,s=_L(n.mode??null);W(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vL(e);try{return new Bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.providerId=Gs.PROVIDER_ID}static credential(e,n){return hc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bd.parseLink(n);return W(r,"argument-error"),hc._fromEmailAndCode(e,r.code,r.tenantId)}}Gs.PROVIDER_ID="password";Gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends ga{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qu extends ya{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),Mr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),Mr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Qu.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Qu.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Qu(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends ya{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends ya{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.GITHUB_SIGN_IN_METHOD="github.com";li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends ya{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ci.credential(n,r)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){return Br(t,"POST","/v1/accounts:signUp",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Un._fromIdTokenResponse(e,r,i),o=Yw(r);return new dr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Yw(r);return new dr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Yw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u9(t){var i;if(it(t.app))return Promise.reject(qt(t));const e=vt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new dr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await QA(e,{returnSecureToken:!0}),r=await dr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh extends Kn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wh(e,n,r,i)}}function YA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h9(t,e){const n=ae(t);await $d(!0,n,e);const{providerUserInfo:r}=await IV(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=JA(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function XA(t,e,n=!1){const r=await Rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}async function $d(t,e,n){await uc(e);const r=JA(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";W(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wL(t,e,n=!1){const{auth:r}=t;if(it(r.app))return Promise.reject(qt(r));const i="reauthenticate";try{const s=await Rs(t,YA(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=jd(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),dr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e,n=!1){if(it(t.app))return Promise.reject(qt(t));const r="signIn",i=await YA(t,r,e),s=await dr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zd(t,e){return ZA(vt(t),e)}async function EL(t,e){const n=ae(t);return await $d(!1,n,e.providerId),XA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TL(t,e){return Br(t,"POST","/v1/accounts:signInWithCustomToken",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d9(t,e){if(it(t.app))return Promise.reject(qt(t));const n=vt(t),r=await TL(n,{token:e,returnSecureToken:!0}),i=await dr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e,n){var r;W(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),W(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(t){const e=vt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f9(t,e,n){const r=vt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&qd(r,i,n),await ki(r,i,"getOobCode",lL,"EMAIL_PASSWORD_PROVIDER")}async function p9(t,e,n){await nL(ae(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gy(t),r})}async function m9(t,e){await sL(ae(t),{oobCode:e})}async function IL(t,e,n){if(it(t.app))return Promise.reject(qt(t));const r=vt(t),o=await ki(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QA,"EMAIL_PASSWORD_PROVIDER").catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Gy(t),l}),a=await dr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function SL(t,e,n){return it(t.app)?Promise.reject(qt(t)):zd(ae(t),Gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Gy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g9(t,e,n){const r=vt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){W(a.handleCodeInApp,r,"argument-error"),a&&qd(r,o,a)}s(i,n),await ki(r,i,"getOobCode",cL,"EMAIL_PASSWORD_PROVIDER")}function y9(t,e){const n=Bd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function _9(t,e,n){if(it(t.app))return Promise.reject(qt(t));const r=ae(t),i=Gs.credentialWithLink(e,n||cc());return W(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),zd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t,e){return ft(t,"POST","/v1/accounts:createAuthUri",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v9(t,e){const n=qy()?cc():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await AL(ae(t),r);return i||[]}async function w9(t,e){const n=ae(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&qd(n.auth,i,e);const{email:s}=await aL(n.auth,i);s!==t.email&&await t.reload()}async function E9(t,e,n){const r=ae(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&qd(r.auth,s,n);const{email:o}=await uL(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xL(t,e){return ft(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T9(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Rs(r,xL(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function I9(t,e){const n=ae(t);return it(n.auth.app)?Promise.reject(qt(n.auth)):ex(n,e,null)}function S9(t,e){return ex(ae(t),null,e)}async function ex(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Rs(t,rL(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=jd(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Lo(r,a)}}if(!e)return null;switch(e){case"facebook.com":return new RL(r,n);case"github.com":return new bL(r,n);case"google.com":return new PL(r,n);case"twitter.com":return new CL(r,n,t.screenName||null);case"custom":case"anonymous":return new Lo(r,null);default:return new Lo(r,e,n)}}class Lo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class tx extends Lo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class RL extends Lo{constructor(e,n){super(e,"facebook.com",n)}}class bL extends tx{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class PL extends Lo{constructor(e,n){super(e,"google.com",n)}}class CL extends tx{constructor(e,n,r){super(e,"twitter.com",n,r)}}function A9(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:kL(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(t,e){return ae(t).setPersistence(e)}function DL(t,e,n,r){return ae(t).onIdTokenChanged(e,n,r)}function OL(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function VL(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}function LL(t){return ae(t).signOut()}function x9(t,e){return vt(t).revokeAccessToken(e)}async function k9(t){return ae(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e){return ft(t,"POST","/v2/accounts/mfaEnrollment:start",dt(t,e))}const Kh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kh,"1"),this.storage.removeItem(Kh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=1e3,jL=10;class rx extends nx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ML)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rx.type="LOCAL";const ix=rx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx extends nx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sx.type="SESSION";const ox=sx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Hd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await FL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wd("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function BL(t){nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function $L(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qL(){return Qy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="firebaseLocalStorageDb",HL=1,Gh="firebaseLocalStorage",lx="fbase_key";class Oc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kd(t,e){return t.transaction([Gh],e?"readwrite":"readonly").objectStore(Gh)}function WL(){const t=indexedDB.deleteDatabase(ax);return new Oc(t).toPromise()}function Zm(){const t=indexedDB.open(ax,HL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gh,{keyPath:lx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gh)?e(r):(r.close(),await WL(),e(await Zm()))})})}async function Xw(t,e,n){const r=Kd(t,!0).put({[lx]:e,value:n});return new Oc(r).toPromise()}async function KL(t,e){const n=Kd(t,!1).get(e),r=await new Oc(n).toPromise();return r===void 0?null:r.value}function Zw(t,e){const n=Kd(t,!0).delete(e);return new Oc(n).toPromise()}const GL=800,QL=3;class cx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hd._getInstance(qL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $L(),!this.activeServiceWorker)return;this.sender=new UL(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zm();return await Xw(e,Kh,"1"),await Zw(e,Kh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kd(i,!1).getAll();return new Oc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cx.type="LOCAL";const YL=cx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e){return ft(t,"POST","/v2/accounts/mfaSignIn:start",dt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=WA("rcb"),JL=new Nc(3e4,6e4);class XL{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=nt().grecaptcha)!=null&&e.render)}load(e,n=""){return W(ZL(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Bw(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((r,i)=>{const s=nt().setTimeout(()=>{i(rn(e,"network-request-failed"))},JL.get());nt()[Ip]=()=>{nt().clearTimeout(s),delete nt()[Ip];const a=nt().grecaptcha;if(!a||!Bw(a)){i(rn(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const f=l(u,h);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${FV()}?${ma({onload:Ip,render:"explicit",hl:n})}`;Ky(o).catch(()=>{clearTimeout(s),i(rn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=nt().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ZL(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class eM{async load(e){return new qV(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="recaptcha",tM={theme:"light",type:"image"};class nM{constructor(e,n,r={...tM}){this.parameters=r,this.type=Nl,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=vt(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;W(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eM:new XL,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=nt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(qy()&&!Qy(),this.auth,"internal-error"),await rM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await EV(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function rM(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Cl._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function iM(t,e,n){if(it(t.app))return Promise.reject(qt(t));const r=vt(t),i=await hx(r,e,ae(n));return new ux(i,s=>zd(r,s))}async function R9(t,e,n){const r=ae(t);await $d(!1,r,"phone");const i=await hx(r.auth,e,ae(n));return new ux(i,s=>EL(r,s))}async function hx(t,e,n){var r;if(!t._getRecaptchaConfig())try{await YV(t)}catch{}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){W(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await ki(t,o,"mfaSmsEnrollment",async(h,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===Pl){W((n==null?void 0:n.type)===Nl,h,"argument-error");const m=await Sp(h,f,n);return Jw(h,m)}return Jw(h,f)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).phoneSessionInfo.sessionInfo}else{W(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;W(o,t,"missing-multi-factor-info");const a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await ki(t,a,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===Pl){W((n==null?void 0:n.type)===Nl,f,"argument-error");const w=await Sp(f,m,n);return eE(f,w)}return eE(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await ki(t,s,"sendVerificationCode",async(u,h)=>{if(h.captchaResponse===Pl){W((n==null?void 0:n.type)===Nl,u,"argument-error");const f=await Sp(u,h,n);return Qw(u,f)}return Qw(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function Sp(t,e,n){W(n.type===Nl,t,"argument-error");const r=await n.verify();W(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,l=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:l}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e){return e?Ar(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy extends Fd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sM(t){return ZA(t.auth,new Yy(t),t.bypassAuthState)}function oM(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),wL(n,new Yy(t),t.bypassAuthState)}async function aM(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),XA(n,new Yy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sM;case"linkViaPopup":case"linkViaRedirect":return aM;case"reauthViaPopup":case"reauthViaRedirect":return oM;default:Cn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=new Nc(2e3,1e4);async function tE(t,e,n){if(it(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const r=vt(t);Md(t,e,ga);const i=Vc(r,n);return new mi(r,"signInViaPopup",e,i).executeNotNull()}async function b9(t,e,n){const r=ae(t);Md(r.auth,e,ga);const i=Vc(r.auth,n);return new mi(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class mi extends dx{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Wd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lM.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM="pendingRedirect",Yu=new Map;class uM extends dx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yu.get(this.auth._key());if(!e){try{const r=await hM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yu.set(this.auth._key(),e)}return this.bypassAuthState||Yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hM(t,e){const n=mx(e),r=px(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function fx(t,e){return px(t)._set(mx(e),"true")}function dM(t,e){Yu.set(t._key(),e)}function px(t){return Ar(t._redirectPersistence)}function mx(t){return Gu(cM,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,e,n){return fM(t,e,n)}async function fM(t,e,n){if(it(t.app))return Promise.reject(qt(t));const r=vt(t);Md(t,e,ga),await r._initializationPromise;const i=Vc(r,n);return await fx(i,r),i._openRedirect(r,e,"signInViaRedirect")}function P9(t,e,n){return pM(t,e,n)}async function pM(t,e,n){const r=ae(t);Md(r.auth,e,ga),await r.auth._initializationPromise;const i=Vc(r.auth,n);await $d(!1,r,e.providerId),await fx(i,r.auth);const s=await gM(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function mM(t,e){return await vt(t)._initializationPromise,gx(t,e,!1)}async function gx(t,e,n=!1){if(it(t.app))return Promise.reject(qt(t));const r=vt(t),i=Vc(r,e),o=await new uM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function gM(t){const e=Wd(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM=10*60*1e3;class _M{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yx(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yM&&this.cachedEventUids.clear(),this.cachedEventUids.has(rE(e))}saveEventToCache(e){this.cachedEventUids.add(rE(e)),this.lastProcessedEventTime=Date.now()}}function rE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yx(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e={}){return ft(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TM=/^https?/;async function IM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wM(t);for(const n of e)try{if(SM(n))return}catch{}Cn(t,"unauthorized-domain")}function SM(t){const e=cc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TM.test(n))return!1;if(EM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=new Nc(3e4,6e4);function iE(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xM(t){return new Promise((e,n)=>{var i,s,o;function r(){iE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iE(),n(rn(t,"network-request-failed"))},timeout:AM.get()})}if((s=(i=nt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=nt().gapi)!=null&&o.load)r();else{const a=WA("iframefcb");return nt()[a]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},Ky(`${BV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function kM(t){return Ju=Ju||xM(t),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=new Nc(5e3,15e3),bM="__/auth/iframe",PM="emulator/auth/iframe",CM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DM(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hy(e,PM):`https://${t.config.authDomain}/${bM}`,r={apiKey:e.apiKey,appName:t.name,v:Ks},i=NM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function OM(t){const e=await kM(t),n=nt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:DM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),a=nt().setTimeout(()=>{s(o)},RM.get());function l(){nt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LM=500,MM=600,jM="_blank",FM="http://localhost";class sE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UM(t,e,n,r=LM,i=MM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...VM,width:r.toString(),height:i.toString(),top:s,left:o},u=ht().toLowerCase();n&&(a=FA(u)?jM:n),MA(u)&&(e=e||FM,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[w,R])=>`${m}${w}=${R},`,"");if(CV(u)&&a!=="_self")return BM(e||"",a),new sE(null);const f=window.open(e||"",a,h);W(f,t,"popup-blocked");try{f.focus()}catch{}return new sE(f)}function BM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M="__/auth/handler",zM="emulator/auth/handler",qM=encodeURIComponent("fac");async function oE(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ks,eventId:i};if(e instanceof ga){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",t2(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof ya){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${qM}=${encodeURIComponent(l)}`:"";return`${HM(t)}?${ma(a).slice(1)}${u}`}function HM({config:t}){return t.emulator?Hy(t,zM):`https://${t.authDomain}/${$M}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="webStorageSupport";class WM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ox,this._completeRedirectFn=gx,this._overrideRedirectResult=dM}async _openPopup(e,n,r,i){var o;Lr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await oE(e,n,r,cc(),i);return UM(e,s,Wd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await oE(e,n,r,cc(),i);return BL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OM(e),r=new _M(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ap,{type:Ap},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Ap];s!==void 0&&n(!!s),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qA()||jA()||Wy()}}const KM=WM;var aE="@firebase/auth",lE="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YM(t){Wn(new Pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HA(t)},u=new MV(r,i,s,l);return XV(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new Pn("auth-internal",e=>{const n=vt(e.getProvider("auth").getImmediate());return(r=>new GM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(aE,lE,QM(t)),nn(aE,lE,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=5*60,XM=yA("authIdTokenMaxAge")||JM;let cE=null;const ZM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XM)return;const i=n==null?void 0:n.token;cE!==i&&(cE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ej(t=Ld()){const e=Ws(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JV(t,{popupRedirectResolver:KM,persistence:[YL,ix,ox]}),r=yA("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ZM(s.toString());OL(n,o,()=>o(n.currentUser)),DL(n,a=>o(a))}}const i=pA("auth");return i&&ZV(n,`http://${i}`),n}function tj(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}jV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YM("Browser");var nj="firebase",rj="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(nj,rj,"app");var uE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,_x;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function S(){}S.prototype=_.prototype,I.F=_.prototype,I.prototype=new S,I.prototype.constructor=I,I.D=function(k,P,C){for(var x=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)x[ye-2]=arguments[ye];return _.prototype[P].apply(k,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,S){S||(S=0);const k=Array(16);if(typeof _=="string")for(var P=0;P<16;++P)k[P]=_.charCodeAt(S++)|_.charCodeAt(S++)<<8|_.charCodeAt(S++)<<16|_.charCodeAt(S++)<<24;else for(P=0;P<16;++P)k[P]=_[S++]|_[S++]<<8|_[S++]<<16|_[S++]<<24;_=I.g[0],S=I.g[1],P=I.g[2];let C=I.g[3],x;x=_+(C^S&(P^C))+k[0]+3614090360&4294967295,_=S+(x<<7&4294967295|x>>>25),x=C+(P^_&(S^P))+k[1]+3905402710&4294967295,C=_+(x<<12&4294967295|x>>>20),x=P+(S^C&(_^S))+k[2]+606105819&4294967295,P=C+(x<<17&4294967295|x>>>15),x=S+(_^P&(C^_))+k[3]+3250441966&4294967295,S=P+(x<<22&4294967295|x>>>10),x=_+(C^S&(P^C))+k[4]+4118548399&4294967295,_=S+(x<<7&4294967295|x>>>25),x=C+(P^_&(S^P))+k[5]+1200080426&4294967295,C=_+(x<<12&4294967295|x>>>20),x=P+(S^C&(_^S))+k[6]+2821735955&4294967295,P=C+(x<<17&4294967295|x>>>15),x=S+(_^P&(C^_))+k[7]+4249261313&4294967295,S=P+(x<<22&4294967295|x>>>10),x=_+(C^S&(P^C))+k[8]+1770035416&4294967295,_=S+(x<<7&4294967295|x>>>25),x=C+(P^_&(S^P))+k[9]+2336552879&4294967295,C=_+(x<<12&4294967295|x>>>20),x=P+(S^C&(_^S))+k[10]+4294925233&4294967295,P=C+(x<<17&4294967295|x>>>15),x=S+(_^P&(C^_))+k[11]+2304563134&4294967295,S=P+(x<<22&4294967295|x>>>10),x=_+(C^S&(P^C))+k[12]+1804603682&4294967295,_=S+(x<<7&4294967295|x>>>25),x=C+(P^_&(S^P))+k[13]+4254626195&4294967295,C=_+(x<<12&4294967295|x>>>20),x=P+(S^C&(_^S))+k[14]+2792965006&4294967295,P=C+(x<<17&4294967295|x>>>15),x=S+(_^P&(C^_))+k[15]+1236535329&4294967295,S=P+(x<<22&4294967295|x>>>10),x=_+(P^C&(S^P))+k[1]+4129170786&4294967295,_=S+(x<<5&4294967295|x>>>27),x=C+(S^P&(_^S))+k[6]+3225465664&4294967295,C=_+(x<<9&4294967295|x>>>23),x=P+(_^S&(C^_))+k[11]+643717713&4294967295,P=C+(x<<14&4294967295|x>>>18),x=S+(C^_&(P^C))+k[0]+3921069994&4294967295,S=P+(x<<20&4294967295|x>>>12),x=_+(P^C&(S^P))+k[5]+3593408605&4294967295,_=S+(x<<5&4294967295|x>>>27),x=C+(S^P&(_^S))+k[10]+38016083&4294967295,C=_+(x<<9&4294967295|x>>>23),x=P+(_^S&(C^_))+k[15]+3634488961&4294967295,P=C+(x<<14&4294967295|x>>>18),x=S+(C^_&(P^C))+k[4]+3889429448&4294967295,S=P+(x<<20&4294967295|x>>>12),x=_+(P^C&(S^P))+k[9]+568446438&4294967295,_=S+(x<<5&4294967295|x>>>27),x=C+(S^P&(_^S))+k[14]+3275163606&4294967295,C=_+(x<<9&4294967295|x>>>23),x=P+(_^S&(C^_))+k[3]+4107603335&4294967295,P=C+(x<<14&4294967295|x>>>18),x=S+(C^_&(P^C))+k[8]+1163531501&4294967295,S=P+(x<<20&4294967295|x>>>12),x=_+(P^C&(S^P))+k[13]+2850285829&4294967295,_=S+(x<<5&4294967295|x>>>27),x=C+(S^P&(_^S))+k[2]+4243563512&4294967295,C=_+(x<<9&4294967295|x>>>23),x=P+(_^S&(C^_))+k[7]+1735328473&4294967295,P=C+(x<<14&4294967295|x>>>18),x=S+(C^_&(P^C))+k[12]+2368359562&4294967295,S=P+(x<<20&4294967295|x>>>12),x=_+(S^P^C)+k[5]+4294588738&4294967295,_=S+(x<<4&4294967295|x>>>28),x=C+(_^S^P)+k[8]+2272392833&4294967295,C=_+(x<<11&4294967295|x>>>21),x=P+(C^_^S)+k[11]+1839030562&4294967295,P=C+(x<<16&4294967295|x>>>16),x=S+(P^C^_)+k[14]+4259657740&4294967295,S=P+(x<<23&4294967295|x>>>9),x=_+(S^P^C)+k[1]+2763975236&4294967295,_=S+(x<<4&4294967295|x>>>28),x=C+(_^S^P)+k[4]+1272893353&4294967295,C=_+(x<<11&4294967295|x>>>21),x=P+(C^_^S)+k[7]+4139469664&4294967295,P=C+(x<<16&4294967295|x>>>16),x=S+(P^C^_)+k[10]+3200236656&4294967295,S=P+(x<<23&4294967295|x>>>9),x=_+(S^P^C)+k[13]+681279174&4294967295,_=S+(x<<4&4294967295|x>>>28),x=C+(_^S^P)+k[0]+3936430074&4294967295,C=_+(x<<11&4294967295|x>>>21),x=P+(C^_^S)+k[3]+3572445317&4294967295,P=C+(x<<16&4294967295|x>>>16),x=S+(P^C^_)+k[6]+76029189&4294967295,S=P+(x<<23&4294967295|x>>>9),x=_+(S^P^C)+k[9]+3654602809&4294967295,_=S+(x<<4&4294967295|x>>>28),x=C+(_^S^P)+k[12]+3873151461&4294967295,C=_+(x<<11&4294967295|x>>>21),x=P+(C^_^S)+k[15]+530742520&4294967295,P=C+(x<<16&4294967295|x>>>16),x=S+(P^C^_)+k[2]+3299628645&4294967295,S=P+(x<<23&4294967295|x>>>9),x=_+(P^(S|~C))+k[0]+4096336452&4294967295,_=S+(x<<6&4294967295|x>>>26),x=C+(S^(_|~P))+k[7]+1126891415&4294967295,C=_+(x<<10&4294967295|x>>>22),x=P+(_^(C|~S))+k[14]+2878612391&4294967295,P=C+(x<<15&4294967295|x>>>17),x=S+(C^(P|~_))+k[5]+4237533241&4294967295,S=P+(x<<21&4294967295|x>>>11),x=_+(P^(S|~C))+k[12]+1700485571&4294967295,_=S+(x<<6&4294967295|x>>>26),x=C+(S^(_|~P))+k[3]+2399980690&4294967295,C=_+(x<<10&4294967295|x>>>22),x=P+(_^(C|~S))+k[10]+4293915773&4294967295,P=C+(x<<15&4294967295|x>>>17),x=S+(C^(P|~_))+k[1]+2240044497&4294967295,S=P+(x<<21&4294967295|x>>>11),x=_+(P^(S|~C))+k[8]+1873313359&4294967295,_=S+(x<<6&4294967295|x>>>26),x=C+(S^(_|~P))+k[15]+4264355552&4294967295,C=_+(x<<10&4294967295|x>>>22),x=P+(_^(C|~S))+k[6]+2734768916&4294967295,P=C+(x<<15&4294967295|x>>>17),x=S+(C^(P|~_))+k[13]+1309151649&4294967295,S=P+(x<<21&4294967295|x>>>11),x=_+(P^(S|~C))+k[4]+4149444226&4294967295,_=S+(x<<6&4294967295|x>>>26),x=C+(S^(_|~P))+k[11]+3174756917&4294967295,C=_+(x<<10&4294967295|x>>>22),x=P+(_^(C|~S))+k[2]+718787259&4294967295,P=C+(x<<15&4294967295|x>>>17),x=S+(C^(P|~_))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,I.g[2]=I.g[2]+P&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const S=_-this.blockSize,k=this.C;let P=this.h,C=0;for(;C<_;){if(P==0)for(;C<=S;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<_;)if(k[P++]=I.charCodeAt(C++),P==this.blockSize){i(this,k),P=0;break}}else for(;C<_;)if(k[P++]=I[C++],P==this.blockSize){i(this,k),P=0;break}}this.h=P,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var S=I.length-8;S<I.length;++S)I[S]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,S=0;S<4;++S)for(let k=0;k<32;k+=8)I[_++]=this.g[S]>>>k&255;return I};function s(I,_){var S=a;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=_(I)}function o(I,_){this.h=_;const S=[];let k=!0;for(let P=I.length-1;P>=0;P--){const C=I[P]|0;k&&C==_||(S[P]=C,k=!1)}this.g=S}var a={};function l(I){return-128<=I&&I<128?s(I,function(_){return new o([_|0],_<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return b(u(-I));const _=[];let S=1;for(let k=0;I>=S;k++)_[k]=I/S|0,S*=4294967296;return new o(_,0)}function h(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return b(h(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(_,8));let k=f;for(let C=0;C<I.length;C+=8){var P=Math.min(8,I.length-C);const x=parseInt(I.substring(C,C+P),_);P<8?(P=u(Math.pow(_,P)),k=k.j(P).add(u(x))):(k=k.j(S),k=k.add(u(x)))}return k}var f=l(0),m=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-b(this).m();let I=0,_=1;for(let S=0;S<this.g.length;S++){const k=this.i(S);I+=(k>=0?k:4294967296+k)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(A(this))return"-"+b(this).toString(I);const _=u(Math.pow(I,6));var S=this;let k="";for(;;){const P=N(S,_).g;S=T(S,P.j(_));let C=((S.g.length>0?S.g[0]:S.h)>>>0).toString(I);if(S=P,R(S))return C+k;for(;C.length<6;)C="0"+C;k=C+k}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function A(I){return I.h==-1}t.l=function(I){return I=T(this,I),A(I)?-1:R(I)?0:1};function b(I){const _=I.g.length,S=[];for(let k=0;k<_;k++)S[k]=~I.g[k];return new o(S,~I.h).add(m)}t.abs=function(){return A(this)?b(this):this},t.add=function(I){const _=Math.max(this.g.length,I.g.length),S=[];let k=0;for(let P=0;P<=_;P++){let C=k+(this.i(P)&65535)+(I.i(P)&65535),x=(C>>>16)+(this.i(P)>>>16)+(I.i(P)>>>16);k=x>>>16,C&=65535,x&=65535,S[P]=x<<16|C}return new o(S,S[S.length-1]&-2147483648?-1:0)};function T(I,_){return I.add(b(_))}t.j=function(I){if(R(this)||R(I))return f;if(A(this))return A(I)?b(this).j(b(I)):b(b(this).j(I));if(A(I))return b(this.j(b(I)));if(this.l(w)<0&&I.l(w)<0)return u(this.m()*I.m());const _=this.g.length+I.g.length,S=[];for(var k=0;k<2*_;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(let P=0;P<I.g.length;P++){const C=this.i(k)>>>16,x=this.i(k)&65535,ye=I.i(P)>>>16,G=I.i(P)&65535;S[2*k+2*P]+=x*G,v(S,2*k+2*P),S[2*k+2*P+1]+=C*G,v(S,2*k+2*P+1),S[2*k+2*P+1]+=x*ye,v(S,2*k+2*P+1),S[2*k+2*P+2]+=C*ye,v(S,2*k+2*P+2)}for(I=0;I<_;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=_;I<2*_;I++)S[I]=0;return new o(S,0)};function v(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function E(I,_){this.g=I,this.h=_}function N(I,_){if(R(_))throw Error("division by zero");if(R(I))return new E(f,f);if(A(I))return _=N(b(I),_),new E(b(_.g),b(_.h));if(A(_))return _=N(I,b(_)),new E(b(_.g),_.h);if(I.g.length>30){if(A(I)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var S=m,k=_;k.l(I)<=0;)S=j(S),k=j(k);var P=F(S,1),C=F(k,1);for(k=F(k,2),S=F(S,2);!R(k);){var x=C.add(k);x.l(I)<=0&&(P=P.add(S),C=x),k=F(k,1),S=F(S,1)}return _=T(I,P.j(_)),new E(P,_)}for(P=f;I.l(_)>=0;){for(S=Math.max(1,Math.floor(I.m()/_.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),C=u(S),x=C.j(_);A(x)||x.l(I)>0;)S-=k,C=u(S),x=C.j(_);R(C)&&(C=m),P=P.add(C),I=T(I,x)}return new E(P,I)}t.B=function(I){return N(this,I).h},t.and=function(I){const _=Math.max(this.g.length,I.g.length),S=[];for(let k=0;k<_;k++)S[k]=this.i(k)&I.i(k);return new o(S,this.h&I.h)},t.or=function(I){const _=Math.max(this.g.length,I.g.length),S=[];for(let k=0;k<_;k++)S[k]=this.i(k)|I.i(k);return new o(S,this.h|I.h)},t.xor=function(I){const _=Math.max(this.g.length,I.g.length),S=[];for(let k=0;k<_;k++)S[k]=this.i(k)^I.i(k);return new o(S,this.h^I.h)};function j(I){const _=I.g.length+1,S=[];for(let k=0;k<_;k++)S[k]=I.i(k)<<1|I.i(k-1)>>>31;return new o(S,I.h)}function F(I,_){const S=_>>5;_%=32;const k=I.g.length-S,P=[];for(let C=0;C<k;C++)P[C]=_>0?I.i(C+S)>>>_|I.i(C+S+1)<<32-_:I.i(C+S);return new o(P,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_x=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ri=o}).apply(typeof uE<"u"?uE:typeof self<"u"?self:typeof window<"u"?window:{});var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vx,ml,wx,Xu,eg,Ex,Tx,Ix;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tu=="object"&&Tu];for(var d=0;d<c.length;++d){var p=c[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(c,d){if(d)e:{var p=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var D=c[y];if(!(D in p))break e;p=p[D]}c=c[c.length-1],y=p[c],d=d(y),d!=y&&d!=null&&e(p,c,{configurable:!0,writable:!0,value:d})}}i("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(c){return c||function(d){var p=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&p.push([y,d[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function a(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function l(c,d,p){return c.call.apply(c.bind,arguments)}function u(c,d,p){return u=l,u.apply(null,arguments)}function h(c,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function f(c,d){function p(){}p.prototype=d.prototype,c.Z=d.prototype,c.prototype=new p,c.prototype.constructor=c,c.Ob=function(y,D,L){for(var z=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)z[ue-2]=arguments[ue];return d.prototype[D].apply(y,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function w(c){const d=c.length;if(d>0){const p=Array(d);for(let y=0;y<d;y++)p[y]=c[y];return p}return[]}function R(c,d){for(let y=1;y<arguments.length;y++){const D=arguments[y];var p=typeof D;if(p=p!="object"?p:D?Array.isArray(D)?"array":p:"null",p=="array"||p=="object"&&typeof D.length=="number"){p=c.length||0;const L=D.length||0;c.length=p+L;for(let z=0;z<L;z++)c[p+z]=D[z]}else c.push(D)}}class A{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function b(c){o.setTimeout(()=>{throw c},0)}function T(){var c=I;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class v{constructor(){this.h=this.g=null}add(d,p){const y=E.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var E=new A(()=>new N,c=>c.reset());class N{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,I=new v,_=()=>{const c=Promise.resolve(void 0);j=()=>{c.then(S)}};function S(){for(var c;c=T();){try{c.h.call(c.g)}catch(p){b(p)}var d=E;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}F=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return c}();function x(c){return/^[\s\xa0]*$/.test(c)}function ye(c,d){P.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}f(ye,P),ye.prototype.init=function(c,d){const p=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(p=="mouseover"?d=c.fromElement:p=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var G="closure_listenable_"+(Math.random()*1e6|0),ce=0;function Ne(c,d,p,y,D){this.listener=c,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=D,this.key=++ce,this.da=this.fa=!1}function q(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ne(c,d,p){for(const y in c)d.call(p,c[y],y,c)}function oe(c,d){for(const p in c)d.call(void 0,c[p],p,c)}function Ae(c){const d={};for(const p in c)d[p]=c[p];return d}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ee(c,d){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)c[p]=y[p];for(let L=0;L<H.length;L++)p=H[L],Object.prototype.hasOwnProperty.call(y,p)&&(c[p]=y[p])}}function le(c){this.src=c,this.g={},this.h=0}le.prototype.add=function(c,d,p,y,D){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const z=De(c,d,y,D);return z>-1?(d=c[z],p||(d.fa=!1)):(d=new Ne(d,this.src,L,!!y,D),d.fa=p,c.push(d)),d};function je(c,d){const p=d.type;if(p in c.g){var y=c.g[p],D=Array.prototype.indexOf.call(y,d,void 0),L;(L=D>=0)&&Array.prototype.splice.call(y,D,1),L&&(q(d),c.g[p].length==0&&(delete c.g[p],c.h--))}}function De(c,d,p,y){for(let D=0;D<c.length;++D){const L=c[D];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==y)return D}return-1}var Lt="closure_lm_"+(Math.random()*1e6|0),Oe={};function Xe(c,d,p,y,D){if(y&&y.once)return _n(c,d,p,y,D);if(Array.isArray(d)){for(let L=0;L<d.length;L++)Xe(c,d[L],p,y,D);return null}return p=Aa(p),c&&c[G]?c.J(d,p,a(y)?!!y.capture:!!y,D):Gn(c,d,p,!1,y,D)}function Gn(c,d,p,y,D,L){if(!d)throw Error("Invalid event type");const z=a(D)?!!D.capture:!!D;let ue=sn(c);if(ue||(c[Lt]=ue=new le(c)),p=ue.add(d,p,y,z,L),p.proxy)return p;if(y=Mt(),p.proxy=y,y.src=c,y.listener=p,c.addEventListener)C||(D=z),D===void 0&&(D=!1),c.addEventListener(d.toString(),y,D);else if(c.attachEvent)c.attachEvent(at(d.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Mt(){function c(p){return d.call(c.src,c.listener,p)}const d=Dn;return c}function _n(c,d,p,y,D){if(Array.isArray(d)){for(let L=0;L<d.length;L++)_n(c,d[L],p,y,D);return null}return p=Aa(p),c&&c[G]?c.K(d,p,a(y)?!!y.capture:!!y,D):Gn(c,d,p,!0,y,D)}function wt(c,d,p,y,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)wt(c,d[L],p,y,D);else y=a(y)?!!y.capture:!!y,p=Aa(p),c&&c[G]?(c=c.i,L=String(d).toString(),L in c.g&&(d=c.g[L],p=De(d,p,y,D),p>-1&&(q(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete c.g[L],c.h--)))):c&&(c=sn(c))&&(d=c.g[d.toString()],c=-1,d&&(c=De(d,p,y,D)),(p=c>-1?d[c]:null)&&Fe(p))}function Fe(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[G])je(d.i,c);else{var p=c.type,y=c.proxy;d.removeEventListener?d.removeEventListener(p,y,c.capture):d.detachEvent?d.detachEvent(at(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=sn(d))?(je(p,c),p.h==0&&(p.src=null,d[Lt]=null)):q(c)}}}function at(c){return c in Oe?Oe[c]:Oe[c]="on"+c}function Dn(c,d){if(c.da)c=!0;else{d=new ye(d,this);const p=c.listener,y=c.ha||c.src;c.fa&&Fe(c),c=p.call(y,d)}return c}function sn(c){return c=c[Lt],c instanceof le?c:null}var Qn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Aa(c){return typeof c=="function"?c:(c[Qn]||(c[Qn]=function(d){return c.handleEvent(d)}),c[Qn])}function qe(){k.call(this),this.i=new le(this),this.M=this,this.G=null}f(qe,k),qe.prototype[G]=!0,qe.prototype.removeEventListener=function(c,d,p,y){wt(this,c,d,p,y)};function jt(c,d){var p,y=c.G;if(y)for(p=[];y;y=y.G)p.push(y);if(c=c.M,y=d.type||d,typeof d=="string")d=new P(d,c);else if(d instanceof P)d.target=d.target||c;else{var D=d;d=new P(y,c),ee(d,D)}D=!0;let L,z;if(p)for(z=p.length-1;z>=0;z--)L=d.g=p[z],D=Hc(L,y,!0,d)&&D;if(L=d.g=c,D=Hc(L,y,!0,d)&&D,D=Hc(L,y,!1,d)&&D,p)for(z=0;z<p.length;z++)L=d.g=p[z],D=Hc(L,y,!1,d)&&D}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const p=c.g[d];for(let y=0;y<p.length;y++)q(p[y]);delete c.g[d],c.h--}}this.G=null},qe.prototype.J=function(c,d,p,y){return this.i.add(String(c),d,!1,p,y)},qe.prototype.K=function(c,d,p,y){return this.i.add(String(c),d,!0,p,y)};function Hc(c,d,p,y){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let L=0;L<d.length;++L){const z=d[L];if(z&&!z.da&&z.capture==p){const ue=z.listener,lt=z.ha||z.src;z.fa&&je(c.i,z),D=ue.call(lt,y)!==!1&&D}}return D&&!y.defaultPrevented}function Db(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(c,d||0)}function lv(c){c.g=Db(()=>{c.g=null,c.i&&(c.i=!1,lv(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class Ob extends k{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:lv(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xa(c){k.call(this),this.h=c,this.g={}}f(xa,k);var cv=[];function uv(c){ne(c.g,function(d,p){this.g.hasOwnProperty(p)&&Fe(d)},c),c.g={}}xa.prototype.N=function(){xa.Z.N.call(this),uv(this)},xa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xf=o.JSON.stringify,Vb=o.JSON.parse,Lb=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function hv(){}function dv(){}var ka={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function kf(){P.call(this,"d")}f(kf,P);function Rf(){P.call(this,"c")}f(Rf,P);var Wi={},fv=null;function Wc(){return fv=fv||new qe}Wi.Ia="serverreachability";function pv(c){P.call(this,Wi.Ia,c)}f(pv,P);function Ra(c){const d=Wc();jt(d,new pv(d))}Wi.STAT_EVENT="statevent";function mv(c,d){P.call(this,Wi.STAT_EVENT,c),this.stat=d}f(mv,P);function Ft(c){const d=Wc();jt(d,new mv(d,c))}Wi.Ja="timingevent";function gv(c,d){P.call(this,Wi.Ja,c),this.size=d}f(gv,P);function ba(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},d)}function Pa(){this.g=!0}Pa.prototype.ua=function(){this.g=!1};function Mb(c,d,p,y,D,L){c.info(function(){if(c.g)if(L){var z="",ue=L.split("&");for(let xe=0;xe<ue.length;xe++){var lt=ue[xe].split("=");if(lt.length>1){const mt=lt[0];lt=lt[1];const Jn=mt.split("_");z=Jn.length>=2&&Jn[1]=="type"?z+(mt+"="+lt+"&"):z+(mt+"=redacted&")}}}else z=null;else z=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+p+`
`+z})}function jb(c,d,p,y,D,L,z){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+p+`
`+L+" "+z})}function Js(c,d,p,y){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ub(c,p)+(y?" "+y:"")})}function Fb(c,d){c.info(function(){return"TIMEOUT: "+d})}Pa.prototype.info=function(){};function Ub(c,d){if(!c.g)return d;if(!d)return null;try{const L=JSON.parse(d);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var p=L[c];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var D=y[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<y.length;z++)y[z]=""}}}}return xf(L)}catch{return d}}var Kc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},yv={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},_v;function bf(){}f(bf,hv),bf.prototype.g=function(){return new XMLHttpRequest},_v=new bf;function Ca(c){return encodeURIComponent(String(c))}function Bb(c){var d=1;c=c.split(":");const p=[];for(;d>0&&c.length;)p.push(c.shift()),d--;return c.length&&p.push(c.join(":")),p}function Hr(c,d,p,y){this.j=c,this.i=d,this.l=p,this.S=y||1,this.V=new xa(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new vv}function vv(){this.i=null,this.g="",this.h=!1}var wv={},Pf={};function Cf(c,d,p){c.M=1,c.A=Qc(Yn(d)),c.u=p,c.R=!0,Ev(c,null)}function Ev(c,d){c.F=Date.now(),Gc(c),c.B=Yn(c.A);var p=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),Ov(p.i,"t",y),c.C=0,p=c.j.L,c.h=new vv,c.g=Xv(c.j,p?d:null,!c.u),c.P>0&&(c.O=new Ob(u(c.Y,c,c.g),c.P)),d=c.V,p=c.g,y=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(cv[0]=D.toString()),D=cv);for(let L=0;L<D.length;L++){const z=Xe(p,D[L],y||d.handleEvent,!1,d.h||d);if(!z)break;d.g[z.key]=z}d=c.J?Ae(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),Ra(),Mb(c.i,c.v,c.B,c.l,c.S,c.u)}Hr.prototype.ba=function(c){c=c.target;const d=this.O;d&&Gr(c)==3?d.j():this.Y(c)},Hr.prototype.Y=function(c){try{if(c==this.g)e:{const ue=Gr(this.g),lt=this.g.ya(),xe=this.g.ca();if(!(ue<3)&&(ue!=3||this.g&&(this.h.h||this.g.la()||Bv(this.g)))){this.K||ue!=4||lt==7||(lt==8||xe<=0?Ra(3):Ra(2)),Nf(this);var d=this.g.ca();this.X=d;var p=$b(this);if(this.o=d==200,jb(this.i,this.v,this.B,this.l,this.S,ue,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,D=this.g;if((y=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(y)){var L=y;break t}}L=null}if(c=L)Js(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Df(this,c);else{this.o=!1,this.m=3,Ft(12),Ki(this),Na(this);break e}}if(this.R){c=!0;let mt;for(;!this.K&&this.C<p.length;)if(mt=zb(this,p),mt==Pf){ue==4&&(this.m=4,Ft(14),c=!1),Js(this.i,this.l,null,"[Incomplete Response]");break}else if(mt==wv){this.m=4,Ft(15),Js(this.i,this.l,p,"[Invalid Chunk]"),c=!1;break}else Js(this.i,this.l,mt,null),Df(this,mt);if(Tv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ue!=4||p.length!=0||this.h.h||(this.m=1,Ft(16),c=!1),this.o=this.o&&c,!c)Js(this.i,this.l,p,"[Invalid Chunked Response]"),Ki(this),Na(this);else if(p.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Bf(z),z.P=!0,Ft(11))}}else Js(this.i,this.l,p,null),Df(this,p);ue==4&&Ki(this),this.o&&!this.K&&(ue==4?Gv(this.j,this):(this.o=!1,Gc(this)))}else rP(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ft(12)):(this.m=0,Ft(13)),Ki(this),Na(this)}}}catch{}finally{}};function $b(c){if(!Tv(c))return c.g.la();const d=Bv(c.g);if(d==="")return"";let p="";const y=d.length,D=Gr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Ki(c),Na(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<y;L++)c.h.h=!0,p+=c.h.i.decode(d[L],{stream:!(D&&L==y-1)});return d.length=0,c.h.g+=p,c.C=0,c.h.g}function Tv(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function zb(c,d){var p=c.C,y=d.indexOf(`
`,p);return y==-1?Pf:(p=Number(d.substring(p,y)),isNaN(p)?wv:(y+=1,y+p>d.length?Pf:(d=d.slice(y,y+p),c.C=y+p,d)))}Hr.prototype.cancel=function(){this.K=!0,Ki(this)};function Gc(c){c.T=Date.now()+c.H,Iv(c,c.H)}function Iv(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ba(u(c.aa,c),d)}function Nf(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Hr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Fb(this.i,this.B),this.M!=2&&(Ra(),Ft(17)),Ki(this),this.m=2,Na(this)):Iv(this,this.T-c)};function Na(c){c.j.I==0||c.K||Gv(c.j,c)}function Ki(c){Nf(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,uv(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function Df(c,d){try{var p=c.j;if(p.I!=0&&(p.g==c||Of(p.h,c))){if(!c.L&&Of(p.h,c)&&p.I==3){try{var y=p.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<c.F)eu(p),Xc(p);else break e;Uf(p),Ft(18)}}else p.xa=D[1],0<p.xa-p.K&&D[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ba(u(p.Va,p),6e3));xv(p.h)<=1&&p.ta&&(p.ta=void 0)}else Qi(p,11)}else if((c.L||p.g==c)&&eu(p),!x(d))for(D=p.Ba.g.parse(d),d=0;d<D.length;d++){let xe=D[d];const mt=xe[0];if(!(mt<=p.K))if(p.K=mt,xe=xe[1],p.I==2)if(xe[0]=="c"){p.M=xe[1],p.ba=xe[2];const Jn=xe[3];Jn!=null&&(p.ka=Jn,p.j.info("VER="+p.ka));const Yi=xe[4];Yi!=null&&(p.za=Yi,p.j.info("SVER="+p.za));const Qr=xe[5];Qr!=null&&typeof Qr=="number"&&Qr>0&&(y=1.5*Qr,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Yr=c.g;if(Yr){const nu=Yr.g?Yr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nu){var L=y.h;L.g||nu.indexOf("spdy")==-1&&nu.indexOf("quic")==-1&&nu.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Vf(L,L.h),L.h=null))}if(y.G){const $f=Yr.g?Yr.g.getResponseHeader("X-HTTP-Session-Id"):null;$f&&(y.wa=$f,Re(y.J,y.G,$f))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-c.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var z=c;if(y.na=Jv(y,y.L?y.ba:null,y.W),z.L){kv(y.h,z);var ue=z,lt=y.O;lt&&(ue.H=lt),ue.D&&(Nf(ue),Gc(ue)),y.g=z}else Wv(y);p.i.length>0&&Zc(p)}else xe[0]!="stop"&&xe[0]!="close"||Qi(p,7);else p.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Qi(p,7):Ff(p):xe[0]!="noop"&&p.l&&p.l.qa(xe),p.A=0)}}Ra(4)}catch{}}var qb=class{constructor(c,d){this.g=c,this.map=d}};function Sv(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Av(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function xv(c){return c.h?1:c.g?c.g.size:0}function Of(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Vf(c,d){c.g?c.g.add(d):c.h=d}function kv(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Sv.prototype.cancel=function(){if(this.i=Rv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Rv(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const p of c.g.values())d=d.concat(p.G);return d}return w(c.i)}var bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hb(c,d){if(c){c=c.split("&");for(let p=0;p<c.length;p++){const y=c[p].indexOf("=");let D,L=null;y>=0?(D=c[p].substring(0,y),L=c[p].substring(y+1)):D=c[p],d(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Wr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof Wr?(this.l=c.l,Da(this,c.j),this.o=c.o,this.g=c.g,Oa(this,c.u),this.h=c.h,Lf(this,Vv(c.i)),this.m=c.m):c&&(d=String(c).match(bv))?(this.l=!1,Da(this,d[1]||"",!0),this.o=Va(d[2]||""),this.g=Va(d[3]||"",!0),Oa(this,d[4]),this.h=Va(d[5]||"",!0),Lf(this,d[6]||"",!0),this.m=Va(d[7]||"")):(this.l=!1,this.i=new Ma(null,this.l))}Wr.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(La(d,Pv,!0),":");var p=this.g;return(p||d=="file")&&(c.push("//"),(d=this.o)&&c.push(La(d,Pv,!0),"@"),c.push(Ca(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&c.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(La(p,p.charAt(0)=="/"?Gb:Kb,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",La(p,Yb)),c.join("")},Wr.prototype.resolve=function(c){const d=Yn(this);let p=!!c.j;p?Da(d,c.j):p=!!c.o,p?d.o=c.o:p=!!c.g,p?d.g=c.g:p=c.u!=null;var y=c.h;if(p)Oa(d,c.u);else if(p=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var D=d.h.lastIndexOf("/");D!=-1&&(y=d.h.slice(0,D+1)+y)}if(D=y,D==".."||D==".")y="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){y=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let z=0;z<D.length;){const ue=D[z++];ue=="."?y&&z==D.length&&L.push(""):ue==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&z==D.length&&L.push("")):(L.push(ue),y=!0)}y=L.join("/")}else y=D}return p?d.h=y:p=c.i.toString()!=="",p?Lf(d,Vv(c.i)):p=!!c.m,p&&(d.m=c.m),d};function Yn(c){return new Wr(c)}function Da(c,d,p){c.j=p?Va(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Oa(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function Lf(c,d,p){d instanceof Ma?(c.i=d,Jb(c.i,c.l)):(p||(d=La(d,Qb)),c.i=new Ma(d,c.l))}function Re(c,d,p){c.i.set(d,p)}function Qc(c){return Re(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Va(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function La(c,d,p){return typeof c=="string"?(c=encodeURI(c).replace(d,Wb),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Wb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Pv=/[#\/\?@]/g,Kb=/[#\?:]/g,Gb=/[#\?]/g,Qb=/[#\?@]/g,Yb=/#/g;function Ma(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Gi(c){c.g||(c.g=new Map,c.h=0,c.i&&Hb(c.i,function(d,p){c.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ma.prototype,t.add=function(c,d){Gi(this),this.i=null,c=Xs(this,c);let p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(d),this.h+=1,this};function Cv(c,d){Gi(c),d=Xs(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Nv(c,d){return Gi(c),d=Xs(c,d),c.g.has(d)}t.forEach=function(c,d){Gi(this),this.g.forEach(function(p,y){p.forEach(function(D){c.call(d,D,y,this)},this)},this)};function Dv(c,d){Gi(c);let p=[];if(typeof d=="string")Nv(c,d)&&(p=p.concat(c.g.get(Xs(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)p=p.concat(c[d]);return p}t.set=function(c,d){return Gi(this),this.i=null,c=Xs(this,c),Nv(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=Dv(this,c),c.length>0?String(c[0]):d):d};function Ov(c,d,p){Cv(c,d),p.length>0&&(c.i=null,c.g.set(Xs(c,d),w(p)),c.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var p=d[y];const D=Ca(p);p=Dv(this,p);for(let L=0;L<p.length;L++){let z=D;p[L]!==""&&(z+="="+Ca(p[L])),c.push(z)}}return this.i=c.join("&")};function Vv(c){const d=new Ma;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function Xs(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function Jb(c,d){d&&!c.j&&(Gi(c),c.i=null,c.g.forEach(function(p,y){const D=y.toLowerCase();y!=D&&(Cv(this,y),Ov(this,D,p))},c)),c.j=d}function Xb(c,d){const p=new Pa;if(o.Image){const y=new Image;y.onload=h(Kr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=h(Kr,p,"TestLoadImage: error",!1,d,y),y.onabort=h(Kr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=h(Kr,p,"TestLoadImage: timeout",!1,d,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else d(!1)}function Zb(c,d){const p=new Pa,y=new AbortController,D=setTimeout(()=>{y.abort(),Kr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?Kr(p,"TestPingServer: ok",!0,d):Kr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Kr(p,"TestPingServer: error",!1,d)})}function Kr(c,d,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function eP(){this.g=new Lb}function Mf(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Mf,hv),Mf.prototype.g=function(){return new Yc(this.i,this.h)};function Yc(c,d){qe.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Yc,qe),t=Yc.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,Fa(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ja(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Fa(this)),this.g&&(this.readyState=3,Fa(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Lv(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Lv(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?ja(this):Fa(this),this.readyState==3&&Lv(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,ja(this))},t.Na=function(c){this.g&&(this.response=c,ja(this))},t.ga=function(){this.g&&ja(this)};function ja(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Fa(c)}t.setRequestHeader=function(c,d){this.A.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=d.next();return c.join(`\r
`)};function Fa(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Yc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Mv(c){let d="";return ne(c,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function jf(c,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Mv(p),typeof c=="string"?p!=null&&Ca(p):Re(c,d,p))}function He(c){qe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(He,qe);var tP=/^https?$/i,nP=["POST","PUT"];t=He.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():_v.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(L){jv(this,L);return}if(c=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(nP,d,void 0)>=0)||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of p)this.g.setRequestHeader(L,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){jv(this,L)}};function jv(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,Fv(c),Jc(c)}function Fv(c){c.A||(c.A=!0,jt(c,"complete"),jt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,jt(this,"complete"),jt(this,"abort"),Jc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Jc(this,!0)),He.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Uv(this):this.Xa())},t.Xa=function(){Uv(this)};function Uv(c){if(c.h&&typeof s<"u"){if(c.v&&Gr(c)==4)setTimeout(c.Ca.bind(c),0);else if(jt(c,"readystatechange"),Gr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=L===0){let z=String(c.D).match(bv)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),y=!tP.test(z?z.toLowerCase():"")}p=y}if(p)jt(c,"complete"),jt(c,"success");else{c.o=6;try{var D=Gr(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Fv(c)}}finally{Jc(c)}}}}function Jc(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const p=c.g;c.g=null,d||jt(c,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Gr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Gr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Vb(d)}};function Bv(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function rP(c){const d={};c=(c.g&&Gr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(x(c[y]))continue;var p=Bb(c[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[D]||[];d[D]=L,L.push(p)}oe(d,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ua(c,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||d}function $v(c){this.za=0,this.i=[],this.j=new Pa,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ua("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ua("baseRetryDelayMs",5e3,c),this.Za=Ua("retryDelaySeedMs",1e4,c),this.Ta=Ua("forwardChannelMaxRetries",2,c),this.va=Ua("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Sv(c&&c.concurrentRequestLimit),this.Ba=new eP,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$v.prototype,t.ka=8,t.I=1,t.connect=function(c,d,p,y){Ft(0),this.W=c,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Jv(this,null,this.W),Zc(this)};function Ff(c){if(zv(c),c.I==3){var d=c.V++,p=Yn(c.J);if(Re(p,"SID",c.M),Re(p,"RID",d),Re(p,"TYPE","terminate"),Ba(c,p),d=new Hr(c,c.j,d),d.M=2,d.A=Qc(Yn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Xv(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Gc(d)}Yv(c)}function Xc(c){c.g&&(Bf(c),c.g.cancel(),c.g=null)}function zv(c){Xc(c),c.v&&(o.clearTimeout(c.v),c.v=null),eu(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Zc(c){if(!Av(c.h)&&!c.m){c.m=!0;var d=c.Ea;j||_(),F||(j(),F=!0),I.add(d,c),c.D=0}}function iP(c,d){return xv(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ba(u(c.Ea,c,d),Qv(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Hr(this,this.j,c);let L=this.o;if(this.U&&(L?(L=Ae(L),ee(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Hv(this,D,d),p=Yn(this.J),Re(p,"RID",c),Re(p,"CVER",22),this.G&&Re(p,"X-HTTP-Session-Id",this.G),Ba(this,p),L&&(this.R?d="headers="+Ca(Mv(L))+"&"+d:this.u&&jf(p,this.u,L)),Vf(this.h,D),this.Ra&&Re(p,"TYPE","init"),this.S?(Re(p,"$req",d),Re(p,"SID","null"),D.U=!0,Cf(D,p,null)):Cf(D,p,d),this.I=2}}else this.I==3&&(c?qv(this,c):this.i.length==0||Av(this.h)||qv(this))};function qv(c,d){var p;d?p=d.l:p=c.V++;const y=Yn(c.J);Re(y,"SID",c.M),Re(y,"RID",p),Re(y,"AID",c.K),Ba(c,y),c.u&&c.o&&jf(y,c.u,c.o),p=new Hr(c,c.j,p,c.D+1),c.u===null&&(p.J=c.o),d&&(c.i=d.G.concat(c.i)),d=Hv(c,p,1e3),p.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Vf(c.h,p),Cf(p,y,d)}function Ba(c,d){c.H&&ne(c.H,function(p,y){Re(d,y,p)}),c.l&&ne({},function(p,y){Re(d,y,p)})}function Hv(c,d,p){p=Math.min(c.i.length,p);const y=c.l?u(c.l.Ka,c.l,c):null;e:{var D=c.i;let ue=-1;for(;;){const lt=["count="+p];ue==-1?p>0?(ue=D[0].g,lt.push("ofs="+ue)):ue=0:lt.push("ofs="+ue);let xe=!0;for(let mt=0;mt<p;mt++){var L=D[mt].g;const Jn=D[mt].map;if(L-=ue,L<0)ue=Math.max(0,D[mt].g-100),xe=!1;else try{L="req"+L+"_"||"";try{var z=Jn instanceof Map?Jn:Object.entries(Jn);for(const[Yi,Qr]of z){let Yr=Qr;a(Qr)&&(Yr=xf(Qr)),lt.push(L+Yi+"="+encodeURIComponent(Yr))}}catch(Yi){throw lt.push(L+"type="+encodeURIComponent("_badmap")),Yi}}catch{y&&y(Jn)}}if(xe){z=lt.join("&");break e}}z=void 0}return c=c.i.splice(0,p),d.G=c,z}function Wv(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;j||_(),F||(j(),F=!0),I.add(d,c),c.A=0}}function Uf(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ba(u(c.Da,c),Qv(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Kv(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ba(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ft(10),Xc(this),Kv(this))};function Bf(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Kv(c){c.g=new Hr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=Yn(c.na);Re(d,"RID","rpc"),Re(d,"SID",c.M),Re(d,"AID",c.K),Re(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&Re(d,"TO",c.ia),Re(d,"TYPE","xmlhttp"),Ba(c,d),c.u&&c.o&&jf(d,c.u,c.o),c.O&&(c.g.H=c.O);var p=c.g;c=c.ba,p.M=1,p.A=Qc(Yn(d)),p.u=null,p.R=!0,Ev(p,c)}t.Va=function(){this.C!=null&&(this.C=null,Xc(this),Uf(this),Ft(19))};function eu(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Gv(c,d){var p=null;if(c.g==d){eu(c),Bf(c),c.g=null;var y=2}else if(Of(c.h,d))p=d.G,kv(c.h,d),y=1;else return;if(c.I!=0){if(d.o)if(y==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var D=c.D;y=Wc(),jt(y,new gv(y,p)),Zc(c)}else Wv(c);else if(D=d.m,D==3||D==0&&d.X>0||!(y==1&&iP(c,d)||y==2&&Uf(c)))switch(p&&p.length>0&&(d=c.h,d.i=d.i.concat(p)),D){case 1:Qi(c,5);break;case 4:Qi(c,10);break;case 3:Qi(c,6);break;default:Qi(c,2)}}}function Qv(c,d){let p=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(p*=2),p*d}function Qi(c,d){if(c.j.info("Error code "+d),d==2){var p=u(c.bb,c),y=c.Ua;const D=!y;y=new Wr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Da(y,"https"),Qc(y),D?Xb(y.toString(),p):Zb(y.toString(),p)}else Ft(2);c.I=0,c.l&&c.l.pa(d),Yv(c),zv(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function Yv(c){if(c.I=0,c.ja=[],c.l){const d=Rv(c.h);(d.length!=0||c.i.length!=0)&&(R(c.ja,d),R(c.ja,c.i),c.h.i.length=0,w(c.i),c.i.length=0),c.l.oa()}}function Jv(c,d,p){var y=p instanceof Wr?Yn(p):new Wr(p);if(y.g!="")d&&(y.g=d+"."+y.g),Oa(y,y.u);else{var D=o.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const L=new Wr(null);y&&Da(L,y),d&&(L.g=d),D&&Oa(L,D),p&&(L.h=p),y=L}return p=c.G,d=c.wa,p&&d&&Re(y,p,d),Re(y,"VER",c.ka),Ba(c,y),y}function Xv(c,d,p){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new He(new Mf({ab:p})):new He(c.ma),d.Fa(c.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zv(){}t=Zv.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function tu(){}tu.prototype.g=function(c,d){return new on(c,d)};function on(c,d){qe.call(this),this.g=new $v(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!x(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!x(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Zs(this)}f(on,qe),on.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Ff(this.g)},on.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.v&&(p={},p.__data__=xf(c),c=p);d.i.push(new qb(d.Ya++,c)),d.I==3&&Zc(d)},on.prototype.N=function(){this.g.l=null,delete this.j,Ff(this.g),delete this.g,on.Z.N.call(this)};function e0(c){kf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const p in d){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}f(e0,kf);function t0(){Rf.call(this),this.status=1}f(t0,Rf);function Zs(c){this.g=c}f(Zs,Zv),Zs.prototype.ra=function(){jt(this.g,"a")},Zs.prototype.qa=function(c){jt(this.g,new e0(c))},Zs.prototype.pa=function(c){jt(this.g,new t0)},Zs.prototype.oa=function(){jt(this.g,"b")},tu.prototype.createWebChannel=tu.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,Ix=function(){return new tu},Tx=function(){return Wc()},Ex=Wi,eg={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Kc.NO_ERROR=0,Kc.TIMEOUT=8,Kc.HTTP_ERROR=6,Xu=Kc,yv.COMPLETE="complete",wx=yv,dv.EventType=ka,ka.OPEN="a",ka.CLOSE="b",ka.ERROR="c",ka.MESSAGE="d",qe.prototype.listen=qe.prototype.J,ml=dv,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,vx=He}).apply(typeof Tu<"u"?Tu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a="12.11.0";function ij(t){_a=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Uy("@firebase/firestore");function co(){return bs.logLevel}function U(t,...e){if(bs.logLevel<=pe.DEBUG){const n=e.map(Jy);bs.debug(`Firestore (${_a}): ${t}`,...n)}}function $t(t,...e){if(bs.logLevel<=pe.ERROR){const n=e.map(Jy);bs.error(`Firestore (${_a}): ${t}`,...n)}}function Oi(t,...e){if(bs.logLevel<=pe.WARN){const n=e.map(Jy);bs.warn(`Firestore (${_a}): ${t}`,...n)}}function Jy(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Sx(t,r,n)}function Sx(t,e,n){let r=`FIRESTORE (${_a}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $t(r),new Error(r)}function Z(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Sx(e,i,r)}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class oj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aj{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Z(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string",31837,{l:r}),new Ax(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class lj{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class cj{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lj(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uj{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,it(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Z(this.o===void 0,3512);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new hE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new hE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hj(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function tg(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return xp(i)===xp(s)?ie(i,s):xp(i)?1:-1}return ie(t.length,e.length)}const dj=55296,fj=57343;function xp(t){const e=t.charCodeAt(0);return e>=dj&&e<=fj}function Qo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function xx(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="__name__";class tr{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=tr.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=tr.isNumericId(e),i=tr.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?tr.extractNumericId(e).compare(tr.extractNumericId(n)):tg(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class ve extends tr{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const pj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends tr{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return pj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dE}static keyField(){return new Be([dE])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ve.fromString(e))}static fromName(e){return new K(ve.fromString(e).popFirst(5))}static empty(){return new K(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t,e,n){if(!n)throw new $(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mj(t,e,n,r){if(e===!0&&r===!0)throw new $(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fE(t){if(!K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pE(t){if(K.isDocumentKey(t))throw new $(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rx(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Gd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gd(t);throw new $(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function gj(t,e){if(e<=0)throw new $(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lc(t,e){if(!Rx(t))throw new $(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new $(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=-62135596800,gE=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*gE);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<mE)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gE}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lc(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-mE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:st("string",Ee._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ee(0,0))}static max(){return new te(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=-1;class Qh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function ng(t){return t.fields.find(e=>e.kind===2)}function ns(t){return t.fields.filter(e=>e.kind!==2)}Qh.UNKNOWN_ID=-1;class Zu{constructor(e,n){this.fieldPath=e,this.kind=n}}class fc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new fc(0,mn.min())}}function yj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new mn(i,K.empty(),e)}function bx(t){return new mn(t.readTime,t.key,dc)}class mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mn(te.min(),K.empty(),dc)}static max(){return new mn(te.max(),K.empty(),dc)}}function Zy(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==Px)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="SimpleDb";class Qd{static open(e,n,r,i){try{return new Qd(n,e.transaction(i,r))}catch(s){throw new Dl(n,s)}}constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.S=new ur,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{n.error?this.S.reject(new Dl(e,n.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=e_(r.target.error);this.S.reject(new Dl(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(U(cn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new vj(n)}}class bi{static delete(e){return U(cn,"Removing database:",e),is(fA().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!jy())return!1;if(bi.F())return!0;const e=ht(),n=bi.M(e),r=0<n&&n<10,i=Nx(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,n){return e.store(n)}static M(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,n,r){this.name=e,this.version=n,this.N=r,this.B=null,bi.M(ht())===12.2&&$t("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(U(cn,"Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Dl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new $(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new $(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Dl(e,o))},i.onupgradeneeded=s=>{U(cn,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next(()=>{U(cn,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=n=>this.q(n)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const a=Qd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.C(),u)).catch(u=>(a.abort(u),O.reject(u))).toPromise();return l.catch(()=>{}),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(U(cn,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Nx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class _j{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return is(this.U.delete())}}class Dl extends ${constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function qi(t){return t.name==="IndexedDbTransactionError"}class vj{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U(cn,"PUT",this.store.name,e,n),r=this.store.put(n,e)):(U(cn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),is(r)}add(e){return U(cn,"ADD",this.store.name,e,e),is(this.store.add(e))}get(e){return is(this.store.get(e)).next(n=>(n===void 0&&(n=null),U(cn,"GET",this.store.name,e,n),n))}delete(e){return U(cn,"DELETE",this.store.name,e),is(this.store.delete(e))}count(){return U(cn,"COUNT",this.store.name),is(this.store.count())}J(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.H(s,(a,l)=>{o.push(l)}).next(()=>o)}}Z(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}X(e,n){U(cn,"DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}ee(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}te(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=e_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new _j(a),u=n(a.primaryKey,a.value,l);if(u instanceof O){const h=u.catch(f=>(l.done(),O.reject(f)));r.push(h)}l.isDone?i():l.G===null?a.continue():a.continue(l.G)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function is(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=e_(r.target.error);n(i)}})}let yE=!1;function e_(t){const e=bi.M(ht());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new $("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return yE||(yE=!0,setTimeout(()=>{throw r},0)),r}}return t}const Ol="IndexBackfiller";class wj{constructor(e,n){this.asyncQueue=e,this.ne=n,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){U(Ol,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const n=await this.ne.ie();U(Ol,`Documents written: ${n}`)}catch(n){qi(n)?U(Ol,"Ignoring IndexedDB error during index backfill: ",n):await Qs(n)}await this.re(6e4)})}}class Ej{constructor(e,n){this.localStore=e,this.persistence=n}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.se(n,e))}se(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U(Ol,`Processing collection: ${o}`),this.oe(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}oe(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this._e(i,s)).next(a=>(U(Ol,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}_e(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=bx(s);Zy(o,r)>0&&(r=o)}),new mn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Sn.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=-1;function Yd(t){return t==null}function pc(t){return t===0&&1/t==-1/0}function Tj(t){return typeof t=="number"&&Number.isInteger(t)&&!pc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="";function Ot(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_E(e)),e=Ij(t.get(n),e);return _E(e)}function Ij(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Yh:n+="";break;default:n+=s}}return n}function _E(t){return t+Yh+""}function sr(t){const e=t.length;if(Z(e>=2,64408,{path:t}),e===2)return Z(t.charAt(0)===Yh&&t.charAt(1)==="",56145,{path:t}),ve.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf(Yh,s);switch((o<0||o>n)&&J(50515,{path:t}),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:J(61167,{path:t})}s=o+2}return new ve(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs="remoteDocuments",Mc="owner",to="owner",mc="mutationQueues",Sj="userId",jn="mutations",vE="batchId",ds="userMutationsIndex",wE=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e){return[t,Ot(e)]}function Dx(t,e,n){return[t,Ot(e),n]}const Aj={},Yo="documentMutations",Jh="remoteDocumentsV14",xj=["prefixPath","collectionGroup","readTime","documentId"],th="documentKeyIndex",kj=["prefixPath","collectionGroup","documentId"],Ox="collectionGroupIndex",Rj=["collectionGroup","readTime","prefixPath","documentId"],gc="remoteDocumentGlobal",rg="remoteDocumentGlobalKey",Jo="targets",Vx="queryTargetsIndex",bj=["canonicalId","targetId"],Xo="targetDocuments",Pj=["targetId","path"],t_="documentTargetsIndex",Cj=["path","targetId"],Xh="targetGlobalKey",ys="targetGlobal",yc="collectionParents",Nj=["collectionId","parent"],Zo="clientMetadata",Dj="clientId",Jd="bundles",Oj="bundleId",Xd="namedQueries",Vj="name",n_="indexConfiguration",Lj="indexId",ig="collectionGroupIndex",Mj="collectionGroup",Vl="indexState",jj=["indexId","uid"],Lx="sequenceNumberIndex",Fj=["uid","sequenceNumber"],Ll="indexEntries",Uj=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Mx="documentKeyIndex",Bj=["indexId","uid","orderedDocumentKey"],Zd="documentOverlays",$j=["userId","collectionPath","documentId"],sg="collectionPathOverlayIndex",zj=["userId","collectionPath","largestBatchId"],jx="collectionGroupOverlayIndex",qj=["userId","collectionGroup","largestBatchId"],r_="globals",Hj="name",Fx=[mc,jn,Yo,rs,Jo,Mc,ys,Xo,Zo,gc,yc,Jd,Xd],Wj=[...Fx,Zd],Ux=[mc,jn,Yo,Jh,Jo,Mc,ys,Xo,Zo,gc,yc,Jd,Xd,Zd],Bx=Ux,i_=[...Bx,n_,Vl,Ll],Kj=i_,$x=[...i_,r_],Gj=$x;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends Cx{constructor(e,n){super(),this.le=e,this.currentSequenceNumber=n}}function pt(t,e){const n=se(t);return bi.O(n.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Iu(this.root,e,this.comparator,!0)}}class Iu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??It.RED,this.left=i??It.EMPTY,this.right=s??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new It(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new It(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new TE(this.data.getIterator())}getIteratorFrom(e){return new TE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class TE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function no(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new Se(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qx("Invalid base64 string: "+s):s}}(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Qj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jr(t){if(Z(!!t,39018),typeof t=="string"){let e=0;const n=Qj.exec(t);if(Z(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx="server_timestamp",Wx="__type__",Kx="__previous_value__",Gx="__local_write_time__";function s_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Wx])==null?void 0:r.stringValue)===Hx}function ef(t){const e=t.mapValue.fields[Kx];return s_(e)?ef(e):e}function _c(t){const e=jr(t.mapValue.fields[Gx].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(e,n,r,i,s,o,a,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const Zh="(default)";class Ps{constructor(e,n){this.projectId=e,this.database=n||Zh}static empty(){return new Ps("","")}get isDefaultDatabase(){return this.database===Zh}isEqual(e){return e instanceof Ps&&e.projectId===this.projectId&&e.database===this.database}}function Jj(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="__type__",Qx="__max__",gi={mapValue:{fields:{__type__:{stringValue:Qx}}}},a_="__vector__",ea="value",nh={nullValue:"NULL_VALUE"};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?s_(t)?4:Yx(t)?9007199254740991:tf(t)?10:11:J(28295,{value:t})}function fr(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _c(t).isEqual(_c(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jr(i.timestampValue),a=jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ve(i.doubleValue),a=Ve(s.doubleValue);return o===a?pc(o)===pc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qo(t.arrayValue.values||[],e.arrayValue.values||[],fr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(EE(o)!==EE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!fr(o[l],a[l])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function vc(t,e){return(t.values||[]).find(n=>fr(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ve(s.integerValue||s.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return IE(t.timestampValue,e.timestampValue);case 4:return IE(_c(t),_c(e));case 5:return tg(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fr(s),l=Fr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ie(a[u],l[u]);if(h!==0)return h}return ie(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ie(Ve(s.latitude),Ve(o.latitude));return a!==0?a:ie(Ve(s.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return SE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,w,R,A;const a=s.fields||{},l=o.fields||{},u=(m=a[ea])==null?void 0:m.arrayValue,h=(w=l[ea])==null?void 0:w.arrayValue,f=ie(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((A=h==null?void 0:h.values)==null?void 0:A.length)||0);return f!==0?f:SE(u,h)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===gi.mapValue&&o===gi.mapValue)return 0;if(s===gi.mapValue)return 1;if(o===gi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=tg(l[f],h[f]);if(m!==0)return m;const w=Li(a[l[f]],u[h[f]]);if(w!==0)return w}return ie(l.length,h.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function IE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=jr(t),r=jr(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function SE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Li(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function ta(t){return ag(t)}function ag(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=jr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ag(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ag(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function rh(t){switch(Vi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ef(t);return e?16+rh(e):16;case 5:return 2*t.stringValue.length;case 6:return Fr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+rh(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Hi(r.fields,(s,o)=>{i+=s.length+rh(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function wc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function lg(t){return!!t&&"integerValue"in t}function Ec(t){return!!t&&"arrayValue"in t}function AE(t){return!!t&&"nullValue"in t}function xE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ih(t){return!!t&&"mapValue"in t}function tf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[o_])==null?void 0:r.stringValue)===a_}function Ml(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ml(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ml(t.arrayValue.values[n]);return e}return{...t}}function Yx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Qx}const Jx={mapValue:{fields:{[o_]:{stringValue:a_},[ea]:{arrayValue:{}}}}};function Xj(t){return"nullValue"in t?nh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?wc(Ps.empty(),K.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?tf(t)?Jx:{mapValue:{}}:J(35942,{value:t})}function Zj(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?wc(Ps.empty(),K.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?Jx:"mapValue"in t?tf(t)?{mapValue:{}}:gi:J(61959,{value:t})}function kE(t,e){const n=Li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function RE(t,e){const n=Li(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ih(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ml(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ml(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ih(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ih(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Ml(this.value))}}function Xx(t){const e=[];return Hi(t.fields,(n,r)=>{const i=new Be([n]);if(ih(r)){const s=Xx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,te.min(),te.min(),te.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ge(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new Ge(e,2,n,te.min(),te.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,te.min(),te.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.position=e,this.inclusive=n}}function bE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function PE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function e4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{}class me extends Zx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new t4(e,n,r):n==="array-contains"?new i4(e,r):n==="in"?new sk(e,r):n==="not-in"?new s4(e,r):n==="array-contains-any"?new o4(e,r):new me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new n4(e,r):new r4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Li(n,this.value)):n!==null&&Vi(this.value)===Vi(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Te extends Zx{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Te(e,n)}matches(e){return ra(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ra(t){return t.op==="and"}function cg(t){return t.op==="or"}function l_(t){return ek(t)&&ra(t)}function ek(t){for(const e of t.filters)if(e instanceof Te)return!1;return!0}function ug(t){if(t instanceof me)return t.field.canonicalString()+t.op.toString()+ta(t.value);if(l_(t))return t.filters.map(e=>ug(e)).join(",");{const e=t.filters.map(n=>ug(n)).join(",");return`${t.op}(${e})`}}function tk(t,e){return t instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.field.isEqual(i.field)&&fr(r.value,i.value)}(t,e):t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tk(o,i.filters[a]),!0):!1}(t,e):void J(19439)}function nk(t,e){const n=t.filters.concat(e);return Te.create(n,t.op)}function rk(t){return t instanceof me?function(n){return`${n.field.canonicalString()} ${n.op} ${ta(n.value)}`}(t):t instanceof Te?function(n){return n.op.toString()+" {"+n.getFilters().map(rk).join(" ,")+"}"}(t):"Filter"}class t4 extends me{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class n4 extends me{constructor(e,n){super(e,"in",n),this.keys=ik("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class r4 extends me{constructor(e,n){super(e,"not-in",n),this.keys=ik("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ik(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class i4 extends me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ec(n)&&vc(n.arrayValue,this.value)}}class sk extends me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vc(this.value.arrayValue,n)}}class s4 extends me{constructor(e,n){super(e,"not-in",n)}matches(e){if(vc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vc(this.value.arrayValue,n)}}class o4 extends me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ec(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function hg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new a4(t,e,n,r,i,s,o)}function Cs(t){const e=se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ug(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ta(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ta(r)).join(",")),e.Te=n}return e.Te}function jc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!e4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!PE(t.startAt,e.startAt)&&PE(t.endAt,e.endAt)}function ed(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function td(t,e){return t.filters.filter(n=>n instanceof me&&n.field.isEqual(e))}function CE(t,e,n){let r=nh,i=!0;for(const s of td(t,e)){let o=nh,a=!0;switch(s.op){case"<":case"<=":o=Xj(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=nh}kE({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];kE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function NE(t,e,n){let r=gi,i=!0;for(const s of td(t,e)){let o=gi,a=!0;switch(s.op){case">=":case">":o=Zj(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=gi}RE({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];RE({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function l4(t,e,n,r,i,s,o,a){return new va(t,e,n,r,i,s,o,a)}function Fc(t){return new va(t)}function DE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function c4(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ok(t){return t.collectionGroup!==null}function jl(t){const e=se(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Se(Be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Tc(s,r))}),n.has(Be.keyField().canonicalString())||e.Ee.push(new Tc(Be.keyField(),r))}return e.Ee}function kn(t){const e=se(t);return e.Ie||(e.Ie=u4(e,jl(t))),e.Ie}function u4(t,e){if(t.limitType==="F")return hg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Tc(i.field,s)});const n=t.endAt?new na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new na(t.startAt.position,t.startAt.inclusive):null;return hg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dg(t,e){const n=t.filters.concat([e]);return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function h4(t,e){const n=t.explicitOrderBy.concat([e]);return new va(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function nd(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nf(t,e){return jc(kn(t),kn(e))&&t.limitType===e.limitType}function ak(t){return`${Cs(kn(t))}|lt:${t.limitType}`}function uo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rk(i)).join(", ")}]`),Yd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ta(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ta(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function Uc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of jl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=bE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,jl(r),i)||r.endAt&&!function(o,a,l){const u=bE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,jl(r),i))}(t,e)}function d4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lk(t){return(e,n)=>{let r=!1;for(const i of jl(t)){const s=f4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function f4(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Li(l,u):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zx(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=new Me(K.comparator);function hn(){return p4}const ck=new Me(K.comparator);function gl(...t){let e=ck;for(const n of t)e=e.insert(n.key,n);return e}function uk(t){let e=ck;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return Fl()}function hk(){return Fl()}function Fl(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const m4=new Me(K.comparator),g4=new Se(K.comparator);function he(...t){let e=g4;for(const n of t)e=e.add(n);return e}const y4=new Se(ie);function _4(){return y4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function dk(t){return{integerValue:""+t}}function fk(t,e){return Tj(e)?dk(e):c_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this._=void 0}}function v4(t,e,n){return t instanceof ia?function(i,s){const o={fields:{[Wx]:{stringValue:Hx},[Gx]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&s_(s)&&(s=ef(s)),s&&(o.fields[Kx]=s),{mapValue:o}}(n,e):t instanceof Ns?mk(t,e):t instanceof sa?gk(t,e):function(i,s){const o=pk(i,s),a=OE(o)+OE(i.Ae);return lg(o)&&lg(i.Ae)?dk(a):c_(i.serializer,a)}(t,e)}function w4(t,e,n){return t instanceof Ns?mk(t,e):t instanceof sa?gk(t,e):n}function pk(t,e){return t instanceof oa?function(r){return lg(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ia extends rf{}class Ns extends rf{constructor(e){super(),this.elements=e}}function mk(t,e){const n=yk(e);for(const r of t.elements)n.some(i=>fr(i,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends rf{constructor(e){super(),this.elements=e}}function gk(t,e){let n=yk(e);for(const r of t.elements)n=n.filter(i=>!fr(i,r));return{arrayValue:{values:n}}}class oa extends rf{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function OE(t){return Ve(t.integerValue||t.doubleValue)}function yk(t){return Ec(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n){this.field=e,this.transform=n}}function E4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ns&&i instanceof Ns||r instanceof sa&&i instanceof sa?Qo(r.elements,i.elements,fr):r instanceof oa&&i instanceof oa?fr(r.Ae,i.Ae):r instanceof ia&&i instanceof ia}(t.transform,e.transform)}class T4{constructor(e,n){this.version=e,this.transformResults=n}}class Dt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class of{}function _k(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new af(t.key,Dt.none()):new wa(t.key,t.data,Dt.none());{const n=t.data,r=Nt.empty();let i=new Se(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Xt(i.toArray()),Dt.none())}}function I4(t,e,n){t instanceof wa?function(i,s,o){const a=i.value.clone(),l=LE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!sh(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=LE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(vk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ul(t,e,n,r){return t instanceof wa?function(s,o,a,l){if(!sh(s.precondition,o))return a;const u=s.value.clone(),h=ME(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,a,l){if(!sh(s.precondition,o))return a;const u=ME(s.fieldTransforms,l,o),h=o.data;return h.setAll(vk(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return sh(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function S4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=pk(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function VE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qo(r,i,(s,o)=>E4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends of{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends of{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function LE(t,e,n){const r=new Map;Z(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,w4(o,a,n[i]))}return r}function ME(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v4(s,o,e))}return r}class af extends of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wk extends of{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&I4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ul(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ul(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=_k(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(n,r)=>VE(n,r))&&Qo(this.baseMutations,e.baseMutations,(n,r)=>VE(n,r))}}class h_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Z(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return m4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new h_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,ge;function x4(t){switch(t){case M.OK:return J(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function Ek(t){if(t===void 0)return $t("GRPC error has no .code"),M.UNKNOWN;switch(t){case tt.OK:return M.OK;case tt.CANCELLED:return M.CANCELLED;case tt.UNKNOWN:return M.UNKNOWN;case tt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case tt.INTERNAL:return M.INTERNAL;case tt.UNAVAILABLE:return M.UNAVAILABLE;case tt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case tt.NOT_FOUND:return M.NOT_FOUND;case tt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case tt.ABORTED:return M.ABORTED;case tt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case tt.DATA_LOSS:return M.DATA_LOSS;default:return J(39323,{code:t})}}(ge=tt||(tt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4=new Ri([4294967295,4294967295],0);function jE(t){const e=k4().encode(t),n=new _x;return n.update(e),new Uint8Array(n.digest())}function FE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ri([n,r],0),new Ri([i,s],0)]}class f_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yl(`Invalid padding: ${n}`);if(r<0)throw new yl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ri.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ri.fromNumber(r)));return i.compare(R4)===1&&(i=new Ri([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=jE(e),[r,i]=FE(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new f_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=jE(e),[r,i]=FE(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Bc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new lf(te.min(),i,new Me(ie),hn(),he())}}class Bc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Bc(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Tk{constructor(e,n){this.targetId=e,this.Ce=n}}class Ik{constructor(e,n,r=ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class UE{constructor(){this.ve=0,this.Fe=BE(),this.Me=ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new Bc(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=BE()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Z(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class b4{constructor(e){this.Ge=e,this.ze=new Map,this.je=hn(),this.Je=Su(),this.He=Su(),this.Ze=new Me(ie)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ed(s))if(r===0){const o=new K(s.path);this.et(n,o,Ge.newNoDocument(o,te.min()))}else Z(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fr(r).toUint8Array()}catch(l){if(l instanceof qx)return Oi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new f_(o,i,s)}catch(l){return Oi(l instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const a=this.ot(o);if(a){if(s.current&&ed(a.target)){const l=new K(a.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,Ge.newNoDocument(l,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=he();this.He.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new lf(e,n,this.Ze,this.je,r);return this.je=hn(),this.Je=Su(),this.He=Su(),this.Ze=new Me(ie),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new UE,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Se(ie),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Se(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new UE),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Su(){return new Me(K.comparator)}function BE(){return new Me(K.comparator)}const P4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),C4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),N4=(()=>({and:"AND",or:"OR"}))();class D4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fg(t,e){return t.useProto3Json||Yd(e)?e:{value:e}}function aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function O4(t,e){return aa(t,e.toTimestamp())}function Wt(t){return Z(!!t,49232),te.fromTimestamp(function(n){const r=jr(n);return new Ee(r.seconds,r.nanos)}(t))}function p_(t,e){return pg(t,e).canonicalString()}function pg(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ak(t){const e=ve.fromString(t);return Z(Ok(e),10190,{key:e.toString()}),e}function rd(t,e){return p_(t.databaseId,e.path)}function _s(t,e){const n=Ak(e);if(n.get(1)!==t.databaseId.projectId)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Rk(n))}function xk(t,e){return p_(t.databaseId,e)}function kk(t){const e=Ak(t);return e.length===4?ve.emptyPath():Rk(e)}function mg(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rk(t){return Z(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $E(t,e,n){return{name:rd(t,e),fields:n.value.mapValue.fields}}function V4(t,e,n){const r=_s(t,e.name),i=Wt(e.updateTime),s=e.createTime?Wt(e.createTime):te.min(),o=new Nt({mapValue:{fields:e.fields}}),a=Ge.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function L4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(Z(h===void 0||typeof h=="string",58123),ot.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ot.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?M.UNKNOWN:Ek(u.code);return new $(h,u.message||"")}(o);n=new Ik(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_s(t,r.document.name),s=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):te.min(),a=new Nt({mapValue:{fields:r.document.fields}}),l=Ge.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new oh(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_s(t,r.document),s=r.readTime?Wt(r.readTime):te.min(),o=Ge.newNoDocument(i,s),a=r.removedTargetIds||[];n=new oh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_s(t,r.document),s=r.removedTargetIds||[];n=new oh([],s,i,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new A4(i,s),a=r.targetId;n=new Tk(a,o)}}return n}function id(t,e){let n;if(e instanceof wa)n={update:$E(t,e.key,e.value)};else if(e instanceof af)n={delete:rd(t,e.key)};else if(e instanceof zr)n={update:$E(t,e.key,e.data),updateMask:$4(e.fieldMask)};else{if(!(e instanceof wk))return J(16599,{dt:e.type});n={verify:rd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oa)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:O4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function gg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Dt.updateTime(Wt(s.updateTime)):s.exists!==void 0?Dt.exists(s.exists):Dt.none()}(e.currentDocument):Dt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Z(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new ia;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Ns(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new sa(h)}else"increment"in a?l=new oa(o,a.increment):J(16584,{proto:a});const u=Be.fromServerFormat(a.fieldPath);return new sf(u,l)}(t,i)):[];if(e.update){e.update.name;const i=_s(t,e.update.name),s=new Nt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Xt(u.map(h=>Be.fromServerFormat(h)))}(e.updateMask);return new zr(i,s,o,n,r)}return new wa(i,s,n,r)}if(e.delete){const i=_s(t,e.delete);return new af(i,n)}if(e.verify){const i=_s(t,e.verify);return new wk(i,n)}return J(1463,{proto:e})}function M4(t,e){return t&&t.length>0?(Z(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Wt(i.updateTime):Wt(s);return o.isEqual(te.min())&&(o=Wt(s)),new T4(o,i.transformResults||[])}(n,e))):[]}function bk(t,e){return{documents:[xk(t,e.path)]}}function Pk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=xk(t,i);const s=function(u){if(u.length!==0)return Dk(Te.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:ho(m.field),direction:F4(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=fg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function Ck(t){let e=kk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Z(r===1,65062);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=Nk(f);return m instanceof Te&&l_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new Tc(fo(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Yd(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,w=f.values||[];return new na(w,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,w=f.values||[];return new na(w,m)}(n.endAt)),l4(e,i,o,s,a,"F",l,u)}function j4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Nk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fo(n.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fo(n.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fo(n.unaryFilter.field);return me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fo(n.unaryFilter.field);return me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return me.create(fo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Te.create(n.compositeFilter.filters.map(r=>Nk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function F4(t){return P4[t]}function U4(t){return C4[t]}function B4(t){return N4[t]}function ho(t){return{fieldPath:t.canonicalString()}}function fo(t){return Be.fromServerFormat(t.fieldPath)}function Dk(t){return t instanceof me?function(n){if(n.op==="=="){if(xE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NAN"}};if(AE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NAN"}};if(AE(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(n.field),op:U4(n.op),value:n.value}}}(t):t instanceof Te?function(n){const r=n.getFilters().map(i=>Dk(i));return r.length===1?r[0]:{compositeFilter:{op:B4(n.op),filters:r}}}(t):J(54877,{filter:t})}function $4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ok(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Vk(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.yt=e}}function z4(t,e){let n;if(e.document)n=V4(t.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=K.fromSegments(e.noDocument.path),i=Os(e.noDocument.readTime);n=Ge.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return J(56709);{const r=K.fromSegments(e.unknownDocument.path),i=Os(e.unknownDocument.version);n=Ge.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ee(i[0],i[1]);return te.fromTimestamp(s)}(e.readTime)),n}function zE(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:sd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:rd(s,o.key),fields:o.data.value.mapValue.fields,updateTime:aa(s,o.version.toTimestamp()),createTime:aa(s,o.createTime.toTimestamp())}}(t.yt,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Ds(e.version)};else{if(!e.isUnknownDocument())return J(57904,{document:e});r.unknownDocument={path:n.path.toArray(),version:Ds(e.version)}}return r}function sd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Ds(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Os(t){const e=new Ee(t.seconds,t.nanoseconds);return te.fromTimestamp(e)}function ss(t,e){const n=(e.baseMutations||[]).map(s=>gg(t.yt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>gg(t.yt,s)),i=Ee.fromMillis(e.localWriteTimeMs);return new u_(e.batchId,i,n,r)}function _l(t){const e=Os(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Os(t.lastLimboFreeSnapshotVersion):te.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){const o=s.documents.length;return Z(o===1,1966,{count:o}),kn(Fc(kk(s.documents[0])))}(t.query):function(s){return kn(Ck(s))}(t.query),new xr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ot.fromBase64String(t.resumeToken))}function Mk(t,e){const n=Ds(e.snapshotVersion),r=Ds(e.lastLimboFreeSnapshotVersion);let i;i=ed(e.target)?bk(t.yt,e.target):Pk(t.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Cs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function jk(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nd(e,e.limit,"L"):e}function kp(t,e){return new d_(e.largestBatchId,gg(t.yt,e.overlayMutation))}function qE(t,e){const n=e.path.lastSegment();return[t,Ot(e.path.popLast()),n]}function HE(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Ds(r.readTime),documentKey:Ot(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{getBundleMetadata(e,n){return WE(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Os(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return WE(e).put(function(i){return{bundleId:i.id,createTime:Ds(Wt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return KE(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:jk(s.bundledQuery),readTime:Os(s.readTime)}}(r)})}saveNamedQuery(e,n){return KE(e).put(function(i){return{name:i.name,readTime:Ds(Wt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function WE(t){return pt(t,Jd)}function KE(t){return pt(t,Xd)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.serializer=e,this.userId=n}static wt(e,n){const r=n.uid||"";return new cf(e,r)}getOverlay(e,n){return Ja(e).get(qE(this.userId,n)).next(r=>r?kp(this.serializer,r):null)}getOverlays(e,n){const r=or();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new d_(n,o);i.push(this.St(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Ot(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ja(e).X(sg,a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=or(),s=Ot(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ja(e).J(sg,o).next(a=>{for(const l of a){const u=kp(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=or();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ja(e).ee({index:jx,range:a},(l,u,h)=>{const f=kp(this.serializer,u);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}St(e,n){return Ja(e).put(function(i,s,o){const[a,l,u]=qE(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:id(i.yt,o.mutation)}}(this.serializer,this.userId,n))}}function Ja(t){return pt(t,Zd)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{bt(e){return pt(e,r_)}getSessionToken(e){return this.bt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?ot.fromUint8Array(r):ot.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.bt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){}Dt(e,n){this.Ct(e,n),n.vt()}Ct(e,n){if("nullValue"in e)this.Ft(n,5);else if("booleanValue"in e)this.Ft(n,10),n.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(n,15),n.Mt(Ve(e.integerValue));else if("doubleValue"in e){const r=Ve(e.doubleValue);isNaN(r)?this.Ft(n,13):(this.Ft(n,15),pc(r)?n.Mt(0):n.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(n,20),typeof r=="string"&&(r=jr(r)),n.xt(`${r.seconds||""}`),n.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,n),this.Nt(n);else if("bytesValue"in e)this.Ft(n,30),n.Bt(Fr(e.bytesValue)),this.Nt(n);else if("referenceValue"in e)this.Lt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(n,45),n.Mt(r.latitude||0),n.Mt(r.longitude||0)}else"mapValue"in e?Yx(e)?this.Ft(n,Number.MAX_SAFE_INTEGER):tf(e)?this.kt(e.mapValue,n):(this.qt(e.mapValue,n),this.Nt(n)):"arrayValue"in e?(this.Kt(e.arrayValue,n),this.Nt(n)):J(19022,{Ut:e})}Ot(e,n){this.Ft(n,25),this.$t(e,n)}$t(e,n){n.xt(e)}qt(e,n){const r=e.fields||{};this.Ft(n,55);for(const i of Object.keys(r))this.Ot(i,n),this.Ct(r[i],n)}kt(e,n){var o,a;const r=e.fields||{};this.Ft(n,53);const i=ea,s=((a=(o=r[i].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.Ft(n,15),n.Mt(Ve(s)),this.Ot(i,n),this.Ct(r[i],n)}Kt(e,n){const r=e.values||[];this.Ft(n,50);for(const i of r)this.Ct(i,n)}Lt(e,n){this.Ft(n,37),K.fromName(e).path.forEach(r=>{this.Ft(n,60),this.$t(r,n)})}Ft(e,n){e.Mt(n)}Nt(e){e.Mt(2)}}os.Wt=new os;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=255;function W4(t){if(t===0)return 8;let e=0;return t>>4||(e+=4,t<<=4),t>>6||(e+=2,t<<=2),t>>7||(e+=1),e}function GE(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=W4(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class K4{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Gt(r.value),r=n.next();this.zt()}jt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Jt(r.value),r=n.next();this.Ht()}Zt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=n.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=n.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Yt(e){const n=this.en(e),r=GE(n);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}nn(e){const n=this.en(e),r=GE(n);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}rn(){this.sn(ro),this.sn(255)}_n(){this.an(ro),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&n[0]);n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Gt(e){const n=255&e;n===0?(this.sn(0),this.sn(255)):n===ro?(this.sn(ro),this.sn(0)):this.sn(n)}Jt(e){const n=255&e;n===0?(this.an(0),this.an(255)):n===ro?(this.an(ro),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class G4{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class Q4{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Xa{constructor(){this.cn=new K4,this.ascending=new G4(this.cn),this.descending=new Q4(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,r,i){this.hn=e,this.Pn=n,this.Tn=r,this.En=i}In(){const e=this.En.length,n=e===0||this.En[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.En,0),n!==e?r.set([0],this.En.length):++r[r.length-1],new as(this.hn,this.Pn,this.Tn,r)}Rn(e,n,r){return{indexId:this.hn,uid:e,arrayValue:ah(this.Tn),directionalValue:ah(this.En),orderedDocumentKey:ah(n),documentKey:r.path.toArray()}}An(e,n,r){const i=this.Rn(e,n,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Zr(t,e){let n=t.hn-e.hn;return n!==0?n:(n=QE(t.Tn,e.Tn),n!==0?n:(n=QE(t.En,e.En),n!==0?n:K.comparator(t.Pn,e.Pn)))}function QE(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}function ah(t){return EA()?function(n){let r="";for(let i=0;i<n.length;i++)r+=String.fromCharCode(n[i]);return r}(t):t}function YE(t){return typeof t!="string"?t:function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(t)}class JE{constructor(e){this.Vn=new Se((n,r)=>Be.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(Z(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const n=ng(e);if(n!==void 0&&!this.pn(n))return!1;const r=ns(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.pn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.yn(a,l)||!this.wn(this.dn[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.dn.length||!this.wn(this.dn[o++],a))return!1}return!0}Sn(){if(this.fn)return null;let e=new Se(Be.comparator);const n=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Zu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Zu(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Zu(r.field,r.dir==="asc"?0:1)));return new Qh(Qh.UNKNOWN_ID,this.collectionId,n,fc.empty())}pn(e){for(const n of this.mn)if(this.yn(n,e))return!0;return!1}yn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}wn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t){var n,r;if(Z(t instanceof me||t instanceof Te,20012),t instanceof me){if(t instanceof sk){const i=((r=(n=t.value.arrayValue)==null?void 0:n.values)==null?void 0:r.map(s=>me.create(t.field,"==",s)))||[];return Te.create(i,"or")}return t}const e=t.filters.map(i=>Fk(i));return Te.create(e,t.op)}function Y4(t){if(t.getFilters().length===0)return[];const e=vg(Fk(t));return Z(Uk(e),7391),yg(e)||_g(e)?[e]:e.getFilters()}function yg(t){return t instanceof me}function _g(t){return t instanceof Te&&l_(t)}function Uk(t){return yg(t)||_g(t)||function(n){if(n instanceof Te&&cg(n)){for(const r of n.getFilters())if(!yg(r)&&!_g(r))return!1;return!0}return!1}(t)}function vg(t){if(Z(t instanceof me||t instanceof Te,34018),t instanceof me)return t;if(t.filters.length===1)return vg(t.filters[0]);const e=t.filters.map(r=>vg(r));let n=Te.create(e,t.op);return n=od(n),Uk(n)?n:(Z(n instanceof Te,64498),Z(ra(n),40251),Z(n.filters.length>1,57927),n.filters.reduce((r,i)=>m_(r,i)))}function m_(t,e){let n;return Z(t instanceof me||t instanceof Te,38388),Z(e instanceof me||e instanceof Te,25473),n=t instanceof me?e instanceof me?function(i,s){return Te.create([i,s],"and")}(t,e):XE(t,e):e instanceof me?XE(e,t):function(i,s){if(Z(i.filters.length>0&&s.filters.length>0,48005),ra(i)&&ra(s))return nk(i,s.getFilters());const o=cg(i)?i:s,a=cg(i)?s:i,l=o.filters.map(u=>m_(u,a));return Te.create(l,"or")}(t,e),od(n)}function XE(t,e){if(ra(e))return nk(e,t.getFilters());{const n=e.filters.map(r=>m_(t,r));return Te.create(n,"or")}}function od(t){if(Z(t instanceof me||t instanceof Te,11850),t instanceof me)return t;const e=t.getFilters();if(e.length===1)return od(e[0]);if(ek(t))return t;const n=e.map(i=>od(i)),r=[];return n.forEach(i=>{i instanceof me?r.push(i):i instanceof Te&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Te.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(){this.bn=new g_}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(mn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class g_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="IndexedDbIndexManager",Au=new Uint8Array(0);class X4{constructor(e,n){this.databaseId=n,this.Dn=new g_,this.Cn=new $r(r=>Cs(r),(r,i)=>jc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Dn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Dn.add(n)});const s={collectionId:r,parent:Ot(i)};return eT(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[xx(n),""],!1,!0);return eT(e).J(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(sr(o.parent))}return r})}addFieldIndex(e,n){const r=Za(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=so(e);return s.next(a=>{o.put(HE(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Za(e),i=so(e),s=io(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Za(e),r=io(e),i=so(e);return n.X().next(()=>r.X()).next(()=>i.X())}createTargetIndexes(e,n){return O.forEach(this.vn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new JE(r).Sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=io(e);let i=!0;const s=new Map;return O.forEach(this.vn(n),o=>this.Fn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=he();const a=[];return O.forEach(s,(l,u)=>{U(ZE,`Using index ${function(E){return`id=${E.indexId}|cg=${E.collectionGroup}|f=${E.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`}(l)} to execute ${Cs(n)}`);const h=function(E,N){const j=ng(N);if(j===void 0)return null;for(const F of td(E,j.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(u,l),f=function(E,N){const j=new Map;for(const F of ns(N))for(const I of td(E,F.fieldPath))switch(I.op){case"==":case"in":j.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return j.set(F.fieldPath.canonicalString(),I.value),Array.from(j.values())}return null}(u,l),m=function(E,N){const j=[];let F=!0;for(const I of ns(N)){const _=I.kind===0?CE(E,I.fieldPath,E.startAt):NE(E,I.fieldPath,E.startAt);j.push(_.value),F&&(F=_.inclusive)}return new na(j,F)}(u,l),w=function(E,N){const j=[];let F=!0;for(const I of ns(N)){const _=I.kind===0?NE(E,I.fieldPath,E.endAt):CE(E,I.fieldPath,E.endAt);j.push(_.value),F&&(F=_.inclusive)}return new na(j,F)}(u,l),R=this.Mn(l,u,m),A=this.Mn(l,u,w),b=this.xn(l,u,f),T=this.On(l.indexId,h,R,m.inclusive,A,w.inclusive,b);return O.forEach(T,v=>r.Z(v,n.limit).next(E=>{E.forEach(N=>{const j=K.fromSegments(N.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return O.resolve(null)})}vn(e){let n=this.Cn.get(e);return n||(e.filters.length===0?n=[e]:n=Y4(Te.create(e.filters,"and")).map(r=>hg(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,n),n)}On(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const m=n?this.Nn(n[f/u]):Au,w=this.Bn(e,m,r[f%u],i),R=this.Ln(e,m,s[f%u],o),A=a.map(b=>this.Bn(e,m,b,!0));h.push(...this.createRange(w,R,A))}return h}Bn(e,n,r,i){const s=new as(e,K.empty(),n,r);return i?s:s.In()}Ln(e,n,r,i){const s=new as(e,K.empty(),n,r);return i?s.In():s}Fn(e,n){const r=new JE(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.gn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.vn(n);return O.forEach(i,s=>this.Fn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new Se(Be.comparator),h=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:u=u.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(u=u.add(f.field));return u.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}kn(e,n){const r=new Xa;for(const i of ns(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.ln(i.kind);os.Wt.Dt(s,o)}return r.un()}Nn(e){const n=new Xa;return os.Wt.Dt(e,n.ln(0)),n.un()}qn(e,n){const r=new Xa;return os.Wt.Dt(wc(this.databaseId,n),r.ln(function(s){const o=ns(s);return o.length===0?0:o[o.length-1].kind}(e))),r.un()}xn(e,n,r){if(r===null)return[];let i=[];i.push(new Xa);let s=0;for(const o of ns(e)){const a=r[s++];for(const l of i)if(this.Kn(n,o.fieldPath)&&Ec(a))i=this.Un(i,o,a);else{const u=l.ln(o.kind);os.Wt.Dt(a,u)}}return this.$n(i)}Mn(e,n,r){return this.xn(e,n,r.position)}$n(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].un();return n}Un(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Xa;l.seed(a.un()),os.Wt.Dt(o,l.ln(n.kind)),s.push(l)}return s}Kn(e,n){return!!e.filters.find(r=>r instanceof me&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Za(e),i=so(e);return(n?r.J(ig,IDBKeyRange.bound(n,n)):r.J()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const m=f?new fc(f.sequenceNumber,new mn(Os(f.readTime),new K(sr(f.documentKey)),f.largestBatchId)):fc.empty(),w=h.fields.map(([R,A])=>new Zu(Be.fromServerFormat(R),A));return new Qh(h.indexId,h.collectionGroup,w,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ie(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Za(e),s=so(e);return this.Wn(e).next(o=>i.J(ig,IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(HE(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.Qn(e,i,l).next(u=>{const h=this.Gn(s,l);return u.isEqual(h)?O.resolve():this.zn(e,s,l,u,h)}))))})}jn(e,n,r,i){return io(e).put(i.Rn(this.uid,this.qn(r,n.key),n.key))}Jn(e,n,r,i){return io(e).delete(i.An(this.uid,this.qn(r,n.key),n.key))}Qn(e,n,r){const i=io(e);let s=new Se(Zr);return i.ee({index:Mx,range:IDBKeyRange.only([r.indexId,this.uid,ah(this.qn(r,n))])},(o,a)=>{s=s.add(new as(r.indexId,n,YE(a.arrayValue),YE(a.directionalValue)))}).next(()=>s)}Gn(e,n){let r=new Se(Zr);const i=this.kn(n,e);if(i==null)return r;const s=ng(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ec(o))for(const a of o.arrayValue.values||[])r=r.add(new as(n.indexId,e.key,this.Nn(a),i))}else r=r.add(new as(n.indexId,e.key,Au,i));return r}zn(e,n,r,i,s){U(ZE,"Updating index entries for document '%s'",n.key);const o=[];return function(l,u,h,f,m){const w=l.getIterator(),R=u.getIterator();let A=no(w),b=no(R);for(;A||b;){let T=!1,v=!1;if(A&&b){const E=h(A,b);E<0?v=!0:E>0&&(T=!0)}else A!=null?v=!0:T=!0;T?(f(b),b=no(R)):v?(m(A),A=no(w)):(A=no(w),b=no(R))}}(i,s,Zr,a=>{o.push(this.jn(e,n,r,a))},a=>{o.push(this.Jn(e,n,r,a))}),O.waitFor(o)}Wn(e){let n=1;return so(e).ee({index:Lx,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Zr(o,a)).filter((o,a,l)=>!a||Zr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Zr(o,e),l=Zr(o,n);if(a===0)i[0]=e.In();else if(a>0&&l<0)i.push(o),i.push(o.In());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Hn(i[o],i[o+1]))return[];const a=i[o].An(this.uid,Au,K.empty()),l=i[o+1].An(this.uid,Au,K.empty());s.push(IDBKeyRange.bound(a,l))}return s}Hn(e,n){return Zr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(tT)}getMinOffset(e,n){return O.mapArray(this.vn(n),r=>this.Fn(e,r).next(i=>i||J(44426))).next(tT)}}function eT(t){return pt(t,yc)}function io(t){return pt(t,Ll)}function Za(t){return pt(t,n_)}function so(t){return pt(t,Vl)}function tT(t){Z(t.length!==0,28825);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Zy(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new mn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bk=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e,n){const r=t.store(jn),i=t.store(Yo),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.ee({range:o},(h,f,m)=>(a++,m.delete()));s.push(l.next(()=>{Z(a===1,47070,{batchId:n.batchId})}));const u=[];for(const h of n.mutations){const f=Dx(e,h.key.path,n.batchId);s.push(i.delete(f)),u.push(h.key)}return O.waitFor(s).next(()=>u)}function ad(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw J(14731);e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Bk,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);class uf{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static wt(e,n,r,i){Z(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new uf(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ei(e).ee({index:ds,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=po(e),o=ei(e);return o.add({}).next(a=>{Z(typeof a=="number",49019);const l=new u_(a,n,r,i),u=function(w,R,A){const b=A.baseMutations.map(v=>id(w.yt,v)),T=A.mutations.map(v=>id(w.yt,v));return{userId:R,batchId:A.batchId,localWriteTimeMs:A.localWriteTime.toMillis(),baseMutations:b,mutations:T}}(this.serializer,this.userId,l),h=[];let f=new Se((m,w)=>ie(m.canonicalString(),w.canonicalString()));for(const m of i){const w=Dx(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(u)),h.push(s.put(w,Aj))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Zn[a]=l.keys()}),O.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return ei(e).get(n).next(r=>r?(Z(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:n}),ss(this.serializer,r)):null)}Xn(e,n){return this.Zn[n]?O.resolve(this.Zn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Zn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return ei(e).ee({index:ds,range:i},(o,a,l)=>{a.userId===this.userId&&(Z(a.batchId>=r,47524,{Yn:r}),s=ss(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=gs;return ei(e).ee({index:ds,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,gs],[this.userId,Number.POSITIVE_INFINITY]);return ei(e).J(ds,n).next(r=>r.map(i=>ss(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=eh(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return po(e).ee({range:i},(o,a,l)=>{const[u,h,f]=o,m=sr(h);if(u===this.userId&&n.path.isEqual(m))return ei(e).get(f).next(w=>{if(!w)throw J(61480,{er:o,batchId:f});Z(w.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:w.userId,batchId:f}),s.push(ss(this.serializer,w))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(ie);const i=[];return n.forEach(s=>{const o=eh(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=po(e).ee({range:a},(u,h,f)=>{const[m,w,R]=u,A=sr(w);m===this.userId&&s.path.isEqual(A)?r=r.add(R):f.done()});i.push(l)}),O.waitFor(i).next(()=>this.tr(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=eh(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Se(ie);return po(e).ee({range:o},(l,u,h)=>{const[f,m,w]=l,R=sr(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(w)):h.done()}).next(()=>this.tr(e,a))}tr(e,n){const r=[],i=[];return n.forEach(s=>{i.push(ei(e).get(s).next(o=>{if(o===null)throw J(35274,{batchId:s});Z(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(ss(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return $k(e.le,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.nr(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return po(e).ee({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=sr(s[1]);i.push(l)}else a.done()}).next(()=>{Z(i.length===0,56720,{rr:i.map(s=>s.canonicalString())})})})}containsKey(e,n){return zk(e,this.userId,n)}ir(e){return qk(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:gs,lastStreamToken:""})}}function zk(t,e,n){const r=eh(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return po(t).ee({range:s,Y:!0},(a,l,u)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),u.done()}).next(()=>o)}function ei(t){return pt(t,jn)}function po(t){return pt(t,Yo)}function qk(t){return pt(t,mc)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Vs(0)}static ar(){return new Vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.ur(e).next(n=>{const r=new Vs(n.highestTargetId);return n.highestTargetId=r.next(),this.cr(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ur(e).next(n=>te.fromTimestamp(new Ee(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ur(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.ur(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.cr(e,i)))}addTargetData(e,n){return this.lr(e,n).next(()=>this.ur(e).next(r=>(r.targetCount+=1,this.hr(n,r),this.cr(e,r))))}updateTargetData(e,n){return this.lr(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>oo(e).delete(n.targetId)).next(()=>this.ur(e)).next(r=>(Z(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return oo(e).ee((o,a)=>{const l=_l(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return oo(e).ee((r,i)=>{const s=_l(i);n(s)})}ur(e){return rT(e).get(Xh).next(n=>(Z(n!==null,2888),n))}cr(e,n){return rT(e).put(Xh,n)}lr(e,n){return oo(e).put(Mk(this.serializer,n))}hr(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Cs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return oo(e).ee({range:i,index:Vx},(o,a,l)=>{const u=_l(a);jc(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=ui(e);return n.forEach(o=>{const a=Ot(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=ui(e);return O.forEach(n,s=>{const o=Ot(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=ui(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=ui(e);let s=he();return i.ee({range:r,Y:!0},(o,a,l)=>{const u=sr(o[1]),h=new K(u);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Ot(n.path),i=IDBKeyRange.bound([r],[xx(r)],!1,!0);let s=0;return ui(e).ee({index:t_,Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}At(e,n){return oo(e).get(n).next(r=>r?_l(r):null)}}function oo(t){return pt(t,Jo)}function rT(t){return pt(t,ys)}function ui(t){return pt(t,Xo)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="LruGarbageCollector",eF=1048576;function sT([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class tF{constructor(e){this.Pr=e,this.buffer=new Se(sT),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Hk{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){U(iT,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qi(n)?U(iT,"Ignoring IndexedDB error during garbage collection: ",n):await Qs(n)}await this.Ar(3e5)})}}class nF{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Sn.ce);const r=new tF(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(nT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nT):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),co()<=pe.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function Wk(t,e){return new nF(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n){this.db=e,this.garbageCollector=Wk(this,n)}dr(e){const n=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}mr(e,n){return this.yr(e,(r,i)=>n(i))}addReference(e,n,r){return xu(e,r)}removeReference(e,n,r){return xu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return xu(e,n)}wr(e,n){return function(i,s){let o=!1;return qk(i).te(a=>zk(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.yr(e,(o,a)=>{if(a<=n){const l=this.wr(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,te.min()),ui(e).delete(function(f){return[0,Ot(f.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return xu(e,n)}yr(e,n){const r=ui(e);let i,s=Sn.ce;return r.ee({index:t_},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Sn.ce&&n(new K(sr(i)),s),s=u,i=l):s=Sn.ce}).next(()=>{s!==Sn.ce&&n(new K(sr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xu(t,e){return ui(t).put(function(r,i){return{targetId:0,path:Ot(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Ji(e).put(r)}removeEntry(e,n,r){return Ji(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],sd(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Sr(e,r)))}getEntry(e,n){let r=Ge.newInvalidDocument(n);return Ji(e).ee({index:th,range:IDBKeyRange.only(el(n))},(i,s)=>{r=this.br(n,s)}).next(()=>r)}Dr(e,n){let r={size:0,document:Ge.newInvalidDocument(n)};return Ji(e).ee({index:th,range:IDBKeyRange.only(el(n))},(i,s)=>{r={document:this.br(n,s),size:ad(s)}}).next(()=>r)}getEntries(e,n){let r=hn();return this.Cr(e,n,(i,s)=>{const o=this.br(i,s);r=r.insert(i,o)}).next(()=>r)}vr(e,n){let r=hn(),i=new Me(K.comparator);return this.Cr(e,n,(s,o)=>{const a=this.br(s,o);r=r.insert(s,a),i=i.insert(s,ad(o))}).next(()=>({documents:r,Fr:i}))}Cr(e,n,r){if(n.isEmpty())return O.resolve();let i=new Se(lT);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(el(i.first()),el(i.last())),o=i.getIterator();let a=o.getNext();return Ji(e).ee({index:th,range:s},(l,u,h)=>{const f=K.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&lT(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.j(el(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),sd(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ji(e).J(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let h=hn();for(const f of u){const m=this.br(K.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(Uc(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=hn();const o=aT(n,r),a=aT(n,mn.max());return Ji(e).ee({index:Ox,range:IDBKeyRange.bound(o,a,!0)},(l,u,h)=>{const f=this.br(K.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new sF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return oT(e).get(rg).next(n=>(Z(!!n,20021),n))}Sr(e,n){return oT(e).put(rg,n)}br(e,n){if(n){const r=z4(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(te.min())))return r}return Ge.newInvalidDocument(e)}}function Gk(t){return new iF(t)}class sF extends Kk{constructor(e,n){super(),this.Mr=e,this.trackRemovals=n,this.Or=new $r(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Se((s,o)=>ie(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Or.get(s);if(n.push(this.Mr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=zE(this.Mr.serializer,o);i=i.add(s.path.popLast());const u=ad(l);r+=u-a.size,n.push(this.Mr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=zE(this.Mr.serializer,o.convertToNoDocument(te.min()));n.push(this.Mr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.Mr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Mr.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.Mr.Dr(e,n).next(r=>(this.Or.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Mr.vr(e,n).next(({documents:r,Fr:i})=>(i.forEach((s,o)=>{this.Or.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function oT(t){return pt(t,gc)}function Ji(t){return pt(t,Jh)}function el(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function aT(t,e){const n=e.documentKey.path.toArray();return[t,sd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function lT(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ie(n[s],r[s]),i)return i;return i=ie(n.length,r.length),i||(i=ie(n[n.length-2],r[r.length-2]),i||ie(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ul(r.mutation,i,Xt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=gl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hn();const o=Fl(),a=function(){return Fl()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof zr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ul(h.mutation,u,h.mutation.getFieldMask(),Ee.now())):o.set(u.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>a.set(u,new oF(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Fl();let i=new Me((o,a)=>o-a),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Xt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(i.get(a.batchId)||he()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=hk();h.forEach(m=>{if(!s.has(m)){const w=_k(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return c4(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ok(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(or());let a=dc,l=s;return o.next(u=>O.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,he())).next(h=>({batchId:a,changes:uk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=gl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=gl();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const u=function(f,m){return new va(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ge.newInvalidDocument(h)))});let a=gl();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&Ul(h.mutation,u,Xt.empty(),Ee.now()),Uc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wt(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:jk(i.bundledQuery),readTime:Wt(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(){this.overlays=new Me(K.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=or(),s=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=or(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return O.resolve(a)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new d_(n,r));let s=this.Lr.get(n);s===void 0&&(s=he(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.kr=new Se(gt.qr),this.Kr=new Se(gt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new gt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new gt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new ve([])),r=new gt(n,e),i=new gt(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new K(new ve([])),r=new gt(n,e),i=new gt(n,e+1);let s=he();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new gt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return K.comparator(e.key,n.key)||ie(e.Jr,n.Jr)}static Ur(e,n){return ie(e.Jr,n.Jr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Se(gt.qr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new u_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Hr=this.Hr.add(new gt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?gs:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new gt(n,0),i=new gt(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const a=this.Zr(o.Jr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(ie);return n.forEach(i=>{const s=new gt(i,0),o=new gt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],a=>{r=r.add(a.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new gt(new K(s),0);let a=new Se(ie);return this.Hr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.Jr)),!0)},o),O.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Z(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,i=>{const s=new gt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new gt(n,0),i=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.ti=e,this.docs=function(){return new Me(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ge.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=hn();const o=n.path,a=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Zy(bx(h),r)<=0||(i.has(h.key)||Uc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new dF(this)}getSize(e){return O.resolve(this.size)}}class dF extends Kk{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e){this.persistence=e,this.ri=new $r(n=>Cs(n),jc),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new y_,this.targetCount=0,this.oi=Vs._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this._i={},this.overlays={},this.ai=new Sn(0),this.ui=!1,this.ui=!0,this.ci=new cF,this.referenceDelegate=e(this),this.li=new fF(this),this.indexManager=new J4,this.remoteDocumentCache=function(i){return new hF(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Lk(n),this.Pi=new aF(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new uF(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new pF(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class pF extends Cx{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Ri=new y_,this.Ai=null}static Vi(e){return new hf(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const i=K.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class ld{constructor(e,n){this.persistence=e,this.fi=new $r(r=>Ot(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Wk(this,n)}static Vi(e,n){return new ld(e,n)}Ti(){}Ei(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rh(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e){this.serializer=e}k(e,n,r,i){const s=new Qd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore(Mc)}(e),function(l){l.createObjectStore(mc,{keyPath:Sj}),l.createObjectStore(jn,{keyPath:vE,autoIncrement:!0}).createIndex(ds,wE,{unique:!0}),l.createObjectStore(Yo)}(e),cT(e),function(l){l.createObjectStore(rs)}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore(Xo),l.deleteObjectStore(Jo),l.deleteObjectStore(ys)}(e),cT(e)),o=o.next(()=>function(l){const u=l.store(ys),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:te.min().toTimestamp(),targetCount:0};return u.put(Xh,h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store(jn).J().next(f=>{l.deleteObjectStore(jn),l.createObjectStore(jn,{keyPath:vE,autoIncrement:!0}).createIndex(ds,wE,{unique:!0});const m=u.store(jn),w=f.map(R=>m.put(R));return O.waitFor(w)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore(Zo,{keyPath:Dj})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.gi(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore(gc)}(e),this.pi(s)))),r<7&&i>=7&&(o=o.next(()=>this.yi(s))),r<8&&i>=8&&(o=o.next(()=>this.wi(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.Si(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Jd,{keyPath:Oj})})(e),function(l){l.createObjectStore(Xd,{keyPath:Vj})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore(Zd,{keyPath:$j});u.createIndex(sg,zj,{unique:!1}),u.createIndex(jx,qj,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore(Jh,{keyPath:xj});u.createIndex(th,kj),u.createIndex(Ox,Rj)}(e)).next(()=>this.bi(e,s)).next(()=>e.deleteObjectStore(rs))),r<14&&i>=14&&(o=o.next(()=>this.Di(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore(n_,{keyPath:Lj,autoIncrement:!0}).createIndex(ig,Mj,{unique:!1}),l.createObjectStore(Vl,{keyPath:jj}).createIndex(Lx,Fj,{unique:!1}),l.createObjectStore(Ll,{keyPath:Uj}).createIndex(Mx,Bj,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore(Vl).clear()}).next(()=>{n.objectStore(Ll).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(r_,{keyPath:Hj})})(e)})),r<18&&i>=18&&EA()&&(o=o.next(()=>{n.objectStore(Vl).clear()}).next(()=>{n.objectStore(Ll).clear()})),o}pi(e){let n=0;return e.store(rs).ee((r,i)=>{n+=ad(i)}).next(()=>{const r={byteSize:n};return e.store(gc).put(rg,r)})}gi(e){const n=e.store(mc),r=e.store(jn);return n.J().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,gs],[s.userId,s.lastAcknowledgedBatchId]);return r.J(ds,o).next(a=>O.forEach(a,l=>{Z(l.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=ss(this.serializer,l);return $k(e,s.userId,u).next(()=>{})}))}))}yi(e){const n=e.store(Xo),r=e.store(rs);return e.store(ys).get(Xh).next(i=>{const s=[];return r.ee((o,a)=>{const l=new ve(o),u=function(f){return[0,Ot(f)]}(l);s.push(n.get(u).next(h=>h?O.resolve():(f=>n.put({targetId:0,path:Ot(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}wi(e,n){e.createObjectStore(yc,{keyPath:Nj});const r=n.store(yc),i=new g_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Ot(l)})}};return n.store(rs).ee({Y:!0},(o,a)=>{const l=new ve(o);return s(l.popLast())}).next(()=>n.store(Yo).ee({Y:!0},([o,a,l],u)=>{const h=sr(a);return s(h.popLast())}))}Si(e){const n=e.store(Jo);return n.ee((r,i)=>{const s=_l(i),o=Mk(this.serializer,s);return n.put(o)})}bi(e,n){const r=n.store(rs),i=[];return r.ee((s,o)=>{const a=n.store(Jh),l=function(f){return f.document?new K(ve.fromString(f.document.name).popFirst(5)):f.noDocument?K.fromSegments(f.noDocument.path):f.unknownDocument?K.fromSegments(f.unknownDocument.path):J(36783)}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>O.waitFor(i))}Di(e,n){const r=n.store(jn),i=Gk(this.serializer),s=new __(hf.Vi,this.serializer.yt);return r.J().next(o=>{const a=new Map;return o.forEach(l=>{let u=a.get(l.userId)??he();ss(this.serializer,l).keys().forEach(h=>u=u.add(h)),a.set(l.userId,u)}),O.forEach(a,(l,u)=>{const h=new Tt(u),f=cf.wt(this.serializer,h),m=s.getIndexManager(h),w=uf.wt(h,this.serializer,m,s.referenceDelegate);return new Qk(i,w,f,m).recalculateAndSaveOverlaysForDocumentKeys(new og(n,Sn.ce),l).next()})})}}function cT(t){t.createObjectStore(Xo,{keyPath:Pj}).createIndex(t_,Cj,{unique:!0}),t.createObjectStore(Jo,{keyPath:"targetId"}).createIndex(Vx,bj,{unique:!0}),t.createObjectStore(ys)}const ti="IndexedDbPersistence",Rp=18e5,bp=5e3,Pp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",gF="main";class v_{constructor(e,n,r,i,s,o,a,l,u,h,f=18){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Ci=s,this.window=o,this.document=a,this.Fi=u,this.Mi=h,this.xi=f,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=m=>Promise.resolve(),!v_.v())throw new $(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new rF(this,i),this.qi=n+gF,this.serializer=new Lk(l),this.Ki=new bi(this.qi,this.xi,new mF(this.serializer)),this.ci=new H4,this.li=new Z4(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Gk(this.serializer),this.Pi=new q4,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,h===!1&&$t(ti,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new $(M.FAILED_PRECONDITION,Pp);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.li.getHighestSequenceNumber(e))}).then(e=>{this.ai=new Sn(e,this.Fi)}).then(()=>{this.ui=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}zi(e){return this.ki=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.K(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget(async()=>{this.started&&await this.$i()}))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ku(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.ji(e).next(n=>{n||(this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)))})}).next(()=>this.Ji(e)).next(n=>this.isPrimary&&!n?this.Hi(e).next(()=>!1):!!n&&this.Zi(e).next(()=>!0))).catch(e=>{if(qi(e))return U(ti,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(ti,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable(()=>this.ki(e)),this.isPrimary=e})}ji(e){return tl(e).get(to).next(n=>O.resolve(this.Xi(n)))}Yi(e){return ku(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Rp)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=pt(n,Zo);return r.J().next(i=>{const s=this.ns(i,Rp),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const n of e)this.Ui.removeItem(this.rs(n.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.$i().then(()=>this.es()).then(()=>this.Gi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?O.resolve(!0):tl(e).get(to).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,bp)&&!this.ss(n.ownerId)){if(this.Xi(n)&&this.networkEnabled)return!0;if(!this.Xi(n)){if(!n.allowTabSynchronization)throw new $(M.FAILED_PRECONDITION,Pp);return!1}}return!(!this.networkEnabled||!this.inForeground)||ku(e).J().next(r=>this.ns(r,bp).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U(ti,`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.Ki.runTransaction("shutdown","readwrite",[Mc,Zo],e=>{const n=new og(e,Sn.ce);return this.Hi(n).next(()=>this.Yi(n))}),this.Ki.close(),this.ls()}ns(e,n){return e.filter(r=>this.ts(r.updateTimeMs,n)&&!this.ss(r.clientId))}hs(){return this.runTransaction("getActiveClients","readonly",e=>ku(e).J().next(n=>this.ns(n,Rp).map(r=>r.clientId)))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,n){return uf.wt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new X4(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return cf.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,n,r){U(ti,"Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===18?Gj:l===17?$x:l===16?Kj:l===15?i_:l===14?Bx:l===13?Ux:l===12?Wj:l===11?Fx:void J(60245)}(this.xi);let o;return this.Ki.runTransaction(e,i,s,a=>(o=new og(a,this.ai?this.ai.next():Sn.ce),n==="readwrite-primary"?this.ji(o).next(l=>!!l||this.Ji(o)).next(l=>{if(!l)throw $t(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable(()=>this.ki(!1)),new $(M.FAILED_PRECONDITION,Px);return r(o)}).next(l=>this.Zi(o).next(()=>l)):this.Ps(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ps(e){return tl(e).get(to).next(n=>{if(n!==null&&this.ts(n.leaseTimestampMs,bp)&&!this.ss(n.ownerId)&&!this.Xi(n)&&!(this.Mi||this.allowTabSynchronization&&n.allowTabSynchronization))throw new $(M.FAILED_PRECONDITION,Pp)})}Zi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tl(e).put(to,n)}static v(){return bi.v()}Hi(e){const n=tl(e);return n.get(to).next(r=>this.Xi(r)?(U(ti,"Releasing primary lease."),n.delete(to)):O.resolve())}ts(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||($t(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.$i()))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Oi=()=>{this._s();const n=/(?:Version|Mobile)\/1[456]/;wA()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){var n;try{const r=((n=this.Ui)==null?void 0:n.getItem(this.rs(e)))!==null;return U(ti,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return $t(ti,"Failed to get zombied client id.",r),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){$t("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function tl(t){return pt(t,Mc)}function ku(t){return pt(t,Zo)}function yF(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new w_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return wA()?8:Nx(ht())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new _F;return this.ys(e,n,o).next(a=>{if(s.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(co()<=pe.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",uo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(co()<=pe.DEBUG&&U("QueryEngine","Query:",uo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(co()<=pe.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",uo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):O.resolve())}gs(e,n){if(DE(n))return O.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nd(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ss(n,a);return this.bs(n,u,o,l.readTime)?this.gs(e,nd(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,i){return DE(n)||i.isEqual(te.min())?O.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?O.resolve(null):(co()<=pe.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),uo(n)),this.Ds(e,o,n,yj(i,dc)).next(a=>a))})}Ss(e,n){let r=new Se(lk(e));return n.forEach((i,s)=>{Uc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return co()<=pe.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",uo(n)),this.fs.getDocumentsMatchingQuery(e,n,mn.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="LocalStore",vF=3e8;class wF{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Me(ie),this.Fs=new $r(s=>Cs(s),jc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qk(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function Jk(t,e,n,r){return new wF(t,e,n,r)}async function Xk(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=he();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function EF(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,m=f.keys();let w=O.resolve();return m.forEach(R=>{w=w.next(()=>h.getEntry(l,R)).next(A=>{const b=u.docVersions.get(R);Z(b!==null,48541),A.version.compareTo(b)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=he();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Zk(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function TF(t,e){const n=se(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,h.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(ot.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),i=i.insert(f,w),function(A,b,T){return A.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=vF?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,w,h)&&a.push(n.li.updateTargetData(s,w))});let l=hn(),u=he();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(IF(s,o,e.documentUpdates).next(h=>{l=h.Bs,u=h.Ls})),!r.isEqual(te.min())){const h=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.vs=i,s))}function IF(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U(E_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:i}})}function SF(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=gs),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AF(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function wg(t,e,n){const r=se(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!qi(o))throw o;U(E_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function uT(t,e,n){const r=se(t);let i=te.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=se(l),m=f.Fs.get(h);return m!==void 0?O.resolve(f.vs.get(m)):f.li.getTargetData(u,h)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:he())).next(a=>(xF(r,d4(e),a),{documents:a,ks:s})))}function xF(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class hT{constructor(){this.activeTargetIds=_4()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eR{constructor(){this.vo=new hT,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new hT,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="ConnectivityMonitor";class fT{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(dT,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){U(dT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru=null;function Eg(){return Ru===null?Ru=function(){return 268435456+Math.round(2147483648*Math.random())}():Ru++,"0x"+Ru.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="RestConnection",RF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class bF{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Zh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Eg(),a=this.Qo(e,n.toUriEncodedString());U(Cp,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:u}=new URL(a),h=Hs(u);return this.zo(e,a,l,r,h).then(f=>(U(Cp,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Oi(Cp,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_a}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=RF[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection",nl=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Mo extends bF{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Mo.c_){const e=Tx();nl(e,Ex.STAT_EVENT,n=>{n.stat===eg.PROXY?U(Rt,"STAT_EVENT: detected buffering proxy"):n.stat===eg.NOPROXY&&U(Rt,"STAT_EVENT: detected no buffering proxy")}),Mo.c_=!0}}zo(e,n,r,i,s){const o=Eg();return new Promise((a,l)=>{const u=new vx;u.setWithCredentials(!0),u.listenOnce(wx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Xu.NO_ERROR:const f=u.getResponseJson();U(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Xu.TIMEOUT:U(Rt,`RPC '${e}' ${o} timed out`),l(new $(M.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const m=u.getStatus();if(U(Rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const A=function(T){const v=T.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(R.status);l(new $(A,R.message))}else l(new $(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(M.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{U(Rt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(i);U(Rt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",h,r,15)})}T_(e,n,r){const i=Eg(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=s.join("");U(Rt,`Creating RPC '${e}' stream ${i}: ${u}`,a);const h=o.createWebChannel(u,a);this.E_(h);let f=!1,m=!1;const w=new PF({Jo:R=>{m?U(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(f||(U(Rt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),U(Rt,`RPC '${e}' stream ${i} sending:`,R),h.send(R))},Ho:()=>h.close()});return nl(h,ml.EventType.OPEN,()=>{m||(U(Rt,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),nl(h,ml.EventType.CLOSE,()=>{m||(m=!0,U(Rt,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(h))}),nl(h,ml.EventType.ERROR,R=>{m||(m=!0,Oi(Rt,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),w.o_(new $(M.UNAVAILABLE,"The operation could not be completed")))}),nl(h,ml.EventType.MESSAGE,R=>{var A;if(!m){const b=R.data[0];Z(!!b,16349);const T=b,v=(T==null?void 0:T.error)||((A=T[0])==null?void 0:A.error);if(v){U(Rt,`RPC '${e}' stream ${i} received error:`,v);const E=v.status;let N=function(I){const _=tt[I];if(_!==void 0)return Ek(_)}(E),j=v.message;E==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&Oi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=M.INTERNAL,j="Unknown error status: "+E+" with message "+v.message),m=!0,w.o_(new $(N,j)),h.close()}else U(Rt,`RPC '${e}' stream ${i} received:`,b),w.__(b)}}),Mo.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ix()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CF(t){return new Mo(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NF(){return typeof window<"u"?window:null}function lh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){return new D4(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mo.c_=!1;class tR{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="PersistentStream";class nR{constructor(e,n,r,i,s,o,a,l){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tR(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?($t(n.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new $(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(pT,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(U(pT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class DF extends nR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=L4(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Wt(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=mg(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=ed(l)?{documents:bk(s,l)}:{query:Pk(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Sk(s,o.resumeToken);const u=fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=aa(s,o.snapshotVersion.toTimestamp());const u=fg(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=j4(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=mg(this.serializer),n.removeTarget=e,this.q_(n)}}class OF extends nR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=M4(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=mg(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>id(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{}class LF extends VF{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,pg(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(M.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,pg(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function MF(t,e,n,r){return new LF(t,e,n,r)}class jF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($t(n),this.aa=!1):U("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="RemoteStore";class FF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ys(this)&&(U(Ls,"Restarting streams for network reachability change."),await async function(l){const u=se(l);u.Ia.add(4),await $c(u),u.Va.set("Unknown"),u.Ia.delete(4),await ff(u)}(this))})}),this.Va=new jF(r,i)}}async function ff(t){if(Ys(t))for(const e of t.Ra)await e(!0)}async function $c(t){for(const e of t.Ra)await e(!1)}function rR(t,e){const n=se(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),A_(n)?S_(n):Ea(n).O_()&&I_(n,e))}function T_(t,e){const n=se(t),r=Ea(n);n.Ea.delete(e),r.O_()&&iR(n,e),n.Ea.size===0&&(r.O_()?r.L_():Ys(n)&&n.Va.set("Unknown"))}function I_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ea(t).Z_(e)}function iR(t,e){t.da.$e(e),Ea(t).X_(e)}function S_(t){t.da=new b4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ea(t).start(),t.Va.ua()}function A_(t){return Ys(t)&&!Ea(t).x_()&&t.Ea.size>0}function Ys(t){return se(t).Ia.size===0}function sR(t){t.da=void 0}async function UF(t){t.Va.set("Online")}async function BF(t){t.Ea.forEach((e,n)=>{I_(t,e)})}async function $F(t,e){sR(t),A_(t)?(t.Va.ha(e),S_(t)):t.Va.set("Unknown")}async function zF(t,e,n){if(t.Va.set("Online"),e instanceof Ik&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ea.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ea.delete(a),i.da.removeTarget(a))}(t,e)}catch(r){U(Ls,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cd(t,r)}else if(e instanceof oh?t.da.Xe(e):e instanceof Tk?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await Zk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ea.get(u);h&&s.Ea.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.Ea.get(l);if(!h)return;s.Ea.set(l,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),iR(s,l);const f=new xr(h.target,l,u,h.sequenceNumber);I_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U(Ls,"Failed to raise snapshot:",r),await cd(t,r)}}async function cd(t,e,n){if(!qi(e))throw e;t.Ia.add(1),await $c(t),t.Va.set("Offline"),n||(n=()=>Zk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U(Ls,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ff(t)})}function oR(t,e){return e().catch(n=>cd(t,n,e))}async function zc(t){const e=se(t),n=Mi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:gs;for(;qF(e);)try{const i=await SF(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,HF(e,i)}catch(i){await cd(e,i)}aR(e)&&lR(e)}function qF(t){return Ys(t)&&t.Ta.length<10}function HF(t,e){t.Ta.push(e);const n=Mi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function aR(t){return Ys(t)&&!Mi(t).x_()&&t.Ta.length>0}function lR(t){Mi(t).start()}async function WF(t){Mi(t).ra()}async function KF(t){const e=Mi(t);for(const n of t.Ta)e.ea(n.mutations)}async function GF(t,e,n){const r=t.Ta.shift(),i=h_.from(r,e,n);await oR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zc(t)}async function QF(t,e){e&&Mi(t).Y_&&await async function(r,i){if(function(o){return x4(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();Mi(r).B_(),await oR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zc(r)}}(t,e),aR(t)&&lR(t)}async function mT(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),U(Ls,"RemoteStore received new credentials");const r=Ys(n);n.Ia.add(3),await $c(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ff(n)}async function YF(t,e){const n=se(t);e?(n.Ia.delete(2),await ff(n)):e||(n.Ia.add(2),await $c(n),n.Va.set("Unknown"))}function Ea(t){return t.ma||(t.ma=function(n,r,i){const s=se(n);return s.sa(),new DF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:UF.bind(null,t),Yo:BF.bind(null,t),t_:$F.bind(null,t),H_:zF.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),A_(t)?S_(t):t.Va.set("Unknown")):(await t.ma.stop(),sR(t))})),t.ma}function Mi(t){return t.fa||(t.fa=function(n,r,i){const s=se(n);return s.sa(),new OF(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:WF.bind(null,t),t_:QF.bind(null,t),ta:KF.bind(null,t),na:GF.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await zc(t)):(await t.fa.stop(),t.Ta.length>0&&(U(Ls,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new x_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function k_(t,e){if($t("AsyncQueue",`${e}: ${t}`),qi(t))return new $(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static emptySet(e){return new jo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=gl(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new jo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(){this.ga=new Me(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class la{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new la(e,n,jo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class XF{constructor(){this.queries=yT(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=se(n),s=i.queries;i.queries=yT(),s.forEach((o,a)=>{for(const l of a.Sa)l.onError(r)})})(this,new $(M.ABORTED,"Firestore shutting down"))}}function yT(){return new $r(t=>ak(t),nf)}async function R_(t,e){const n=se(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new JF,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=k_(o,`Initialization of query '${uo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&P_(n)}async function b_(t,e){const n=se(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZF(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Sa)a.Fa(i)&&(r=!0);o.wa=i}}r&&P_(n)}function eU(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function P_(t){t.Ca.forEach(e=>{e.next()})}var Tg,_T;(_T=Tg||(Tg={})).Ma="default",_T.Cache="cache";class C_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new la(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=la.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Tg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.key=e}}class uR{constructor(e){this.key=e}}class tU{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=lk(e),this.tu=new jo(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new gT,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),w=Uc(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),A=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;m&&w?m.data.isEqual(w.data)?R!==A&&(r.track({type:3,doc:w}),b=!0):this.su(m,w)||(r.track({type:2,doc:w}),b=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(a=!0)):!m&&w?(r.track({type:0,doc:w}),b=!0):m&&!w&&(r.track({type:1,doc:m}),b=!0,(l||u)&&(a=!0)),b&&(w?(o=o.add(w),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,bs:a,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(w,R){const A=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:b})}};return A(w)-A(R)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),i=i??!1;const a=n&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new la(this.query,e.tu,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gT,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new uR(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new cR(r))}),n}cu(e){this.Za=e.ks,this.Ya=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return la.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const N_="SyncEngine";class nU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class rU{constructor(e){this.key=e,this.hu=!1}}class iU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new $r(a=>ak(a),nf),this.Eu=new Map,this.Iu=new Set,this.Ru=new Me(K.comparator),this.Au=new Map,this.Vu=new y_,this.du={},this.mu=new Map,this.fu=Vs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sU(t,e,n=!0){const r=gR(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await hR(r,e,n,!0),i}async function oU(t,e){const n=gR(t);await hR(n,e,!0,!1)}async function hR(t,e,n,r){const i=await AF(t.localStore,kn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await aU(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&rR(t.remoteStore,i),a}async function aU(t,e,n,r,i){t.pu=(f,m,w)=>async function(A,b,T,v){let E=b.view.ru(T);E.bs&&(E=await uT(A.localStore,b.query,!1).then(({documents:I})=>b.view.ru(I,E)));const N=v&&v.targetChanges.get(b.targetId),j=v&&v.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(E,A.isPrimaryClient,N,j);return wT(A,b.targetId,F.au),F.snapshot}(t,f,m,w);const s=await uT(t.localStore,e,!0),o=new tU(e,s.ks),a=o.ru(s.documents),l=Bc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);wT(t,n,u.au);const h=new nU(e,n,o);return t.Tu.set(e,h),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function lU(t,e,n){const r=se(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!nf(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&T_(r.remoteStore,i.targetId),Ig(r,i.targetId)}).catch(Qs)):(Ig(r,i.targetId),await wg(r.localStore,i.targetId,!0))}async function cU(t,e){const n=se(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),T_(n.remoteStore,r.targetId))}async function uU(t,e,n){const r=yR(t);try{const i=await function(o,a){const l=se(o),u=Ee.now(),h=a.reduce((w,R)=>w.add(R.key),he());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let R=hn(),A=he();return l.xs.getEntries(w,h).next(b=>{R=b,R.forEach((T,v)=>{v.isValidDocument()||(A=A.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,R)).next(b=>{f=b;const T=[];for(const v of a){const E=S4(v,f.get(v.key).overlayedDocument);E!=null&&T.push(new zr(v.key,E,Xx(E.value.mapValue),Dt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,T,a)}).next(b=>{m=b;const T=b.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(w,b.batchId,T)})}).then(()=>({batchId:m.batchId,changes:uk(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new Me(ie)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u}(r,i.batchId,n),await qc(r,i.changes),await zc(r.remoteStore)}catch(i){const s=k_(i,"Failed to persist write");n.reject(s)}}async function dR(t,e){const n=se(t);try{const r=await TF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(Z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Z(o.hu,14607):i.removedDocuments.size>0&&(Z(o.hu,42227),o.hu=!1))}),await qc(n,r,e)}catch(r){await Qs(r)}}function vT(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const m of f.Sa)m.va(a)&&(u=!0)}),u&&P_(l)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hU(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Me(K.comparator);o=o.insert(s,Ge.newNoDocument(s,te.min()));const a=he().add(s),l=new lf(te.min(),new Map,new Me(ie),o,a);await dR(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),D_(r)}else await wg(r.localStore,e,!1).then(()=>Ig(r,e,n)).catch(Qs)}async function dU(t,e){const n=se(t),r=e.batch.batchId;try{const i=await EF(n.localStore,e);pR(n,r,null),fR(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qc(n,i)}catch(i){await Qs(i)}}async function fU(t,e,n){const r=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(Z(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);pR(r,e,n),fR(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qc(r,i)}catch(i){await Qs(i)}}function fR(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function pR(t,e,n){const r=se(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Ig(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||mR(t,r)})}function mR(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(T_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),D_(t))}function wT(t,e,n){for(const r of n)r instanceof cR?(t.Vu.addReference(r.key,e),pU(t,r)):r instanceof uR?(U(N_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||mR(t,r.key)):J(19791,{wu:r})}function pU(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(U(N_,"New document in limbo: "+n),t.Iu.add(r),D_(t))}function D_(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new K(ve.fromString(e)),r=t.fu.next();t.Au.set(r,new rU(n)),t.Ru=t.Ru.insert(n,r),rR(t.remoteStore,new xr(kn(Fc(n.path)),r,"TargetPurposeLimboResolution",Sn.ce))}}async function qc(t,e,n){const r=se(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=w_.Is(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(l,u){const h=se(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(u,m=>O.forEach(m.Ts,w=>h.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>O.forEach(m.Es,w=>h.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!qi(f))throw f;U(E_,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const w=h.vs.get(m),R=w.snapshotVersion,A=w.withLastLimboFreeSnapshotVersion(R);h.vs=h.vs.insert(m,A)}}}(r.localStore,s))}async function mU(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){U(N_,"User change. New user:",e.toKey());const r=await Xk(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(a=>{a.forEach(l=>{l.reject(new $(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qc(n,r.Ns)}}function gU(t,e){const n=se(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let i=he();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const a=n.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function gR(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=dR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hU.bind(null,e),e.Pu.H_=ZF.bind(null,e.eventManager),e.Pu.yu=eU.bind(null,e.eventManager),e}function yR(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fU.bind(null,e),e}class Ic{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=df(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return Jk(this.persistence,new Yk,e.initialUser,this.serializer)}Cu(e){return new __(hf.Vi,this.serializer)}Du(e){return new eR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ic.provider={build:()=>new Ic};class yU extends Ic{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Z(this.persistence.referenceDelegate instanceof ld,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Hk(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new __(r=>ld.Vi(r,n),this.serializer)}}class _U extends Ic{constructor(e,n,r){super(),this.xu=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xu.initialize(this,e),await yR(this.xu.syncEngine),await zc(this.xu.remoteStore),await this.persistence.zi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Jk(this.persistence,new Yk,e.initialUser,this.serializer)}Fu(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new Hk(r,e.asyncQueue,n)}Mu(e,n){const r=new Ej(n,this.persistence);return new wj(e.asyncQueue,r)}Cu(e){const n=yF(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new v_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,NF(),lh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new eR}}class ud{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mU.bind(null,this.syncEngine),await YF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XF}()}createDatastore(e){const n=df(e.databaseInfo.databaseId),r=CF(e.databaseInfo);return MF(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new FF(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>vT(this.syncEngine,n,0),function(){return fT.v()?new fT:new kF}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const f=new iU(i,s,o,a,l,u);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=se(i);U(Ls,"RemoteStore shutting down."),s.Ia.add(5),await $c(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ud.provider={build:()=>new ud};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="FirestoreClient";class vU{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=Xy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U(ji,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(ji,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=k_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Np(t,e){t.asyncQueue.verifyOperationInProgress(),U(ji,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Xk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ET(t,e){t.asyncQueue.verifyOperationInProgress();const n=await wU(t);U(ji,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mT(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>mT(e.remoteStore,i)),t._onlineComponents=e}async function wU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U(ji,"Using user provided OfflineComponentProvider");try{await Np(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Oi("Error using user provided cache. Falling back to memory cache: "+n),await Np(t,new Ic)}}else U(ji,"Using default OfflineComponentProvider"),await Np(t,new yU(void 0));return t._offlineComponents}async function _R(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U(ji,"Using user provided OnlineComponentProvider"),await ET(t,t._uninitializedComponentsProvider._online)):(U(ji,"Using default OnlineComponentProvider"),await ET(t,new ud))),t._onlineComponents}function EU(t){return _R(t).then(e=>e.syncEngine)}async function hd(t){const e=await _R(t),n=e.eventManager;return n.onListen=sU.bind(null,e.syncEngine),n.onUnlisten=lU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=oU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cU.bind(null,e.syncEngine),n}function TU(t,e,n,r){const i=new O_(r),s=new C_(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>R_(await hd(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>b_(await hd(t),s))}}function IU(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new O_({next:m=>{h.Nu(),o.enqueueAndForget(()=>b_(s,f));const w=m.docs.has(a);!w&&m.fromCache?u.reject(new $(M.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?u.reject(new $(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new C_(Fc(a.path),h,{includeMetadataChanges:!0,qa:!0});return R_(s,f)}(await hd(t),t.asyncQueue,e,n,r)),r.promise}function SU(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new O_({next:m=>{h.Nu(),o.enqueueAndForget(()=>b_(s,f)),m.fromCache&&l.source==="server"?u.reject(new $(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new C_(a,h,{includeMetadataChanges:!0,qa:!0});return R_(s,f)}(await hd(t),t.asyncQueue,e,n,r)),r.promise}function AU(t,e){const n=new ur;return t.asyncQueue.enqueueAndForget(async()=>uU(await EU(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xU="ComponentProvider",TT=new Map;function kU(t,e,n,r,i){return new Yj(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,vR(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firestore.googleapis.com",IT=!0;class ST{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wR,this.ssl=IT}else this.host=e.host,this.ssl=e.ssl??IT;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bk;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eF)throw new $(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vR(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ST({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ST(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sj;switch(r.type){case"firstParty":return new cj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=TT.get(n);r&&(U(xU,"Removing Datastore"),TT.delete(n),r.terminate())}(this),Promise.resolve()}}function RU(t,e,n,r={}){var u;t=Ht(t,pf);const i=Hs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&Fy(`https://${a}`),s.host!==wR&&s.host!==a&&Oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!Di(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Tt.MOCK_USER;else{h=_A(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Tt(m)}t._authCredentials=new oj(new Ax(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Lc(n,Qe._jsonSchema))return new Qe(e,r||null,new K(ve.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:st("string",Qe._jsonSchemaVersion),referencePath:st("string")};class Pi extends qr{constructor(e,n,r){super(e,n,Fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new K(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function ls(t,e,...n){if(t=ae(t),kx("collection","path",e),t instanceof pf){const r=ve.fromString(e,...n);return pE(r),new Pi(t,null,r)}{if(!(t instanceof Qe||t instanceof Pi))throw new $(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return pE(r),new Pi(t.firestore,null,r)}}function br(t,e,...n){if(t=ae(t),arguments.length===1&&(e=Xy.newId()),kx("doc","path",e),t instanceof pf){const r=ve.fromString(e,...n);return fE(r),new Qe(t,null,new K(r))}{if(!(t instanceof Qe||t instanceof Pi))throw new $(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return fE(r),new Qe(t.firestore,t instanceof Pi?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="AsyncQueue";class xT{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tR(this,"async_queue_retry"),this._c=()=>{const r=lh();r&&U(AT,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ur;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!qi(e))throw e;U(AT,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,$t("INTERNAL UNHANDLED ERROR: ",kT(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=x_.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&J(47125,{Pc:kT(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function kT(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pr extends pf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new xT,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xT(e),this._firestoreClient=void 0,await e}}}function bU(t,e){const n=typeof t=="object"?t:Ld(),r=typeof t=="string"?t:e||Zh,i=Ws(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=mA("firestore");s&&RU(i,...s)}return i}function mf(t){if(t._terminated)throw new $(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ER(t),t._firestoreClient}function ER(t){var r,i,s,o;const e=t._freezeSettings(),n=kU(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new vU(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}function PU(t,e){Oi("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return CU(t,ud.provider,{build:r=>new _U(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function CU(t,e,n){if((t=Ht(t,pr))._firestoreClient||t._terminated)throw new $(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new $(M.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},ER(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(ot.fromBase64String(e))}catch(n){throw new $(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Tn(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lc(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:st("string",Tn._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hr._jsonSchemaVersion}}static fromJSON(e){if(Lc(e,hr._jsonSchema))return new hr(e.latitude,e.longitude)}}hr._jsonSchemaVersion="firestore/geoPoint/1.0",hr._jsonSchema={type:st("string",hr._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:qn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lc(e,qn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new qn(e.vectorValues);throw new $(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qn._jsonSchemaVersion="firestore/vectorValue/1.0",qn._jsonSchema={type:st("string",qn._jsonSchemaVersion),vectorValues:st("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NU=/^__.*__$/;class DU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class TR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function IR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class gf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new gf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return dd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(IR(this.dataSource)&&NU.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class OU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||df(e)}A(e,n,r,i=!1){return new gf({dataSource:e,methodName:n,targetDoc:r,path:Be.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yf(t){const e=t._freezeSettings(),n=df(t._databaseId);return new OU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function SR(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);F_("Data must be an object, but it was:",o,r);const a=AR(r,o);let l,u;if(s.merge)l=new Xt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Ms(e,f,n);if(!o.contains(m))throw new $(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RR(h,m)||h.push(m)}l=new Xt(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new DU(new Nt(a),l,u)}class _f extends Ta{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof _f}}function VU(t,e,n){return new gf({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class L_ extends Ta{_toFieldTransform(e){return new sf(e.path,new ia)}isEqual(e){return e instanceof L_}}class M_ extends Ta{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=VU(this,e,!0),r=this.Sc.map(s=>Ia(s,n)),i=new Ns(r);return new sf(e.path,i)}isEqual(e){return e instanceof M_&&Di(this.Sc,e.Sc)}}class j_ extends Ta{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new oa(e.serializer,fk(e.serializer,this.bc));return new sf(e.path,n)}isEqual(e){return e instanceof j_&&this.bc===e.bc}}function LU(t,e,n,r){const i=t.A(1,e,n);F_("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Hi(r,(l,u)=>{const h=kR(e,l,n);u=ae(u);const f=i.fc(h);if(u instanceof _f)s.push(h);else{const m=Ia(u,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Xt(s);return new TR(o,a,i.fieldTransforms)}function MU(t,e,n,r,i,s){const o=t.A(1,e,n),a=[Ms(e,r,n)],l=[i];if(s.length%2!=0)throw new $(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Ms(e,s[m])),l.push(s[m+1]);const u=[],h=Nt.empty();for(let m=a.length-1;m>=0;--m)if(!RR(u,a[m])){const w=a[m];let R=l[m];R=ae(R);const A=o.fc(w);if(R instanceof _f)u.push(w);else{const b=Ia(R,A);b!=null&&(u.push(w),h.set(w,b))}}const f=new Xt(u);return new TR(h,f,o.fieldTransforms)}function jU(t,e,n,r=!1){return Ia(n,t.A(r?4:3,e))}function Ia(t,e){if(xR(t=ae(t)))return F_("Unsupported field value:",e,t),AR(t,e);if(t instanceof Ta)return function(r,i){if(!IR(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ia(a,i.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ee.fromDate(r);return{timestampValue:aa(i.serializer,s)}}if(r instanceof Ee){const s=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:aa(i.serializer,s)}}if(r instanceof hr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tn)return{bytesValue:Sk(i.serializer,r._byteString)};if(r instanceof Qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:p_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof qn)return function(o,a){const l=o instanceof qn?o.toArray():o;return{mapValue:{fields:{[o_]:{stringValue:a_},[ea]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.yc("VectorValues must only contain numeric values.");return c_(a.serializer,h)})}}}}}}(r,i);if(Vk(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Gd(r)}`)}(t,e)}function AR(t,e){const n={};return zx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(t,(r,i)=>{const s=Ia(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof hr||t instanceof Tn||t instanceof Qe||t instanceof Ta||t instanceof qn||Vk(t))}function F_(t,e,n){if(!xR(n)||!Rx(n)){const r=Gd(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Ms(t,e,n){if((e=ae(e))instanceof V_)return e._internalPath;if(typeof e=="string")return kR(t,e);throw dd("Field path arguments must be of type string or ",t,!1,void 0,n)}const FU=new RegExp("[~\\*/\\[\\]]");function kR(t,e,n){if(e.search(FU)>=0)throw dd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new V_(...e.split("."))._internalPath}catch{throw dd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(M.INVALID_ARGUMENT,a+t+l)}function RR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{convertValue(e,n="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[ea].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ve(o.doubleValue));return new qn(n)}convertGeoPoint(e){return new hr(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ef(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_c(e));default:return null}}convertTimestamp(e){const n=jr(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);Z(Ok(r),9688,{name:e});const i=new Ps(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||$t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends UU{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function RT(){return new L_("serverTimestamp")}function N9(...t){return new M_("arrayUnion",t)}function D9(t){return new j_("increment",t)}const bT="@firebase/firestore",PT="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CT(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ms("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BU extends bR{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B_{}class $_ extends B_{}function rl(t,e,...n){let r=[];e instanceof B_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof z_).length,a=s.filter(l=>l instanceof vf).length;if(o>1||o>0&&a>0)throw new $(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class vf extends $_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vf(e,n,r)}_apply(e){const n=this._parse(e);return CR(e._query,n),new qr(e.firestore,e.converter,dg(e._query,n))}_parse(e){const n=yf(e.firestore);return function(s,o,a,l,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){DT(f,h);const R=[];for(const A of f)R.push(NT(l,s,A));m={arrayValue:{values:R}}}else m=NT(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||DT(f,h),m=jU(a,o,f,h==="in"||h==="not-in");return me.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Vn(t,e,n){const r=e,i=Ms("where",t);return vf._create(i,r,n)}class z_ extends B_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new z_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Te.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)CR(o,l),o=dg(o,l)}(e._query,n),new qr(e.firestore,e.converter,dg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class q_ extends $_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new q_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tc(s,o)}(e._query,this._field,this._direction);return new qr(e.firestore,e.converter,h4(e._query,n))}}function O9(t,e="asc"){const n=e,r=Ms("orderBy",t);return q_._create(r,n)}class H_ extends $_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new H_(e,n,r)}_apply(e){return new qr(e.firestore,e.converter,nd(e._query,this._limit,this._limitType))}}function V9(t){return gj("limit",t),H_._create("limit",t,"F")}function NT(t,e,n){if(typeof(n=ae(n))=="string"){if(n==="")throw new $(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ok(e)&&n.indexOf("/")!==-1)throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!K.isDocumentKey(r))throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wc(t,new K(r))}if(n instanceof Qe)return wc(t,n._key);throw new $(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gd(n)}.`)}function DT(t,e){if(!Array.isArray(t)||t.length===0)throw new $(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function CR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function NR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends bR{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ms("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=vs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:st("string",vs._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class ch extends vs{data(e={}){return super.data(e)}}class ws{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new vl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ch(this._firestore,this._userDataWriter,r.key,r,new vl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ch(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ch(i._firestore,i._userDataWriter,a.doc.key,a.doc,new vl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:$U(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xy.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $U(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ws._jsonSchemaVersion="firestore/querySnapshot/1.0",ws._jsonSchema={type:st("string",ws._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){t=Ht(t,Qe);const e=Ht(t.firestore,pr),n=mf(e);return IU(n,t._key).then(r=>OR(e,t,r))}function bu(t){t=Ht(t,qr);const e=Ht(t.firestore,pr),n=mf(e),r=new U_(e);return PR(t._query),SU(n,t._query).then(i=>new ws(e,r,t,i))}function OT(t,e,n){t=Ht(t,Qe);const r=Ht(t.firestore,pr),i=NR(t.converter,e,n),s=yf(r);return wf(r,[SR(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Dt.none())])}function Es(t,e,n,...r){t=Ht(t,Qe);const i=Ht(t.firestore,pr),s=yf(i);let o;return o=typeof(e=ae(e))=="string"||e instanceof V_?MU(s,"updateDoc",t._key,e,n,r):LU(s,"updateDoc",t._key,e),wf(i,[o.toMutation(t._key,Dt.exists(!0))])}function L9(t){return wf(Ht(t.firestore,pr),[new af(t._key,Dt.none())])}function DR(t,e){const n=Ht(t.firestore,pr),r=br(t),i=NR(t.converter,e),s=yf(t.firestore);return wf(n,[SR(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then(()=>r)}function zU(t,...e){var u,h,f;t=ae(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||CT(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(CT(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,a;if(t instanceof Qe)o=Ht(t.firestore,pr),a=Fc(t._key.path),s={next:m=>{e[r]&&e[r](OR(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Ht(t,qr);o=Ht(m.firestore,pr),a=m._query;const w=new U_(o);s={next:R=>{e[r]&&e[r](new ws(o,w,m,R))},error:e[r+1],complete:e[r+2]},PR(t._query)}const l=mf(o);return TU(l,a,i,s)}function wf(t,e){const n=mf(t);return AU(n,e)}function OR(t,e,n){const r=n.docs.get(e._key),i=new U_(t);return new vs(t,i,e._key,r,new vl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){ij(Ks),Wn(new Pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new pr(new aj(r.getProvider("auth-internal")),new uj(o,r.getProvider("app-check-internal")),Jj(o,i),o);return s={useFetchStreams:n,...s},a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nn(bT,PT,e),nn(bT,PT,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="firebasestorage.googleapis.com",LR="storageBucket",qU=2*60*1e3,HU=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Kn{constructor(e,n,r=0){super(Dp(e),`Firebase Storage: ${n} (${Dp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Dp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ye||(Ye={}));function Dp(t){return"storage/"+t}function K_(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Ye.UNKNOWN,t)}function WU(t){return new Je(Ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function KU(t){return new Je(Ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GU(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Ye.UNAUTHENTICATED,t)}function QU(){return new Je(Ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YU(t){return new Je(Ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function JU(){return new Je(Ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XU(){return new Je(Ye.CANCELED,"User canceled the upload/download.")}function ZU(t){return new Je(Ye.INVALID_URL,"Invalid URL '"+t+"'.")}function e6(t){return new Je(Ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function t6(){return new Je(Ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LR+"' property when initializing the app?")}function n6(){return new Je(Ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function r6(){return new Je(Ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function i6(t){return new Je(Ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sg(t){return new Je(Ye.INVALID_ARGUMENT,t)}function MR(){return new Je(Ye.APP_DELETED,"The Firebase app was deleted.")}function s6(t){return new Je(Ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bl(t,e){return new Je(Ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function il(t){throw new Je(Ye.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=dn.makeFromUrl(e,n)}catch{return new dn(e,"")}if(r.path==="")return r;throw e6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},A=n===VR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",T=new RegExp(`^https?://${A}/${i}/${b}`,"i"),E=[{regex:a,indices:l,postModify:s},{regex:w,indices:R,postModify:u},{regex:T,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<E.length;N++){const j=E[N],F=j.regex.exec(e);if(F){const I=F[j.indices.bucket];let _=F[j.indices.path];_||(_=""),r=new dn(I,_),j.postModify(r);break}}if(r==null)throw ZU(e);return r}}class o6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...b){u||(u=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(w,l())},b)}function m(){s&&clearTimeout(s)}function w(b,...T){if(u){m();return}if(b){m(),h.call(null,b,...T);return}if(l()||o){m(),h.call(null,b,...T);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,f(E)}let R=!1;function A(b){R||(R=!0,m(),!u&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function l6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c6(t){return t!==void 0}function u6(t){return typeof t=="object"&&!Array.isArray(t)}function G_(t){return typeof t=="string"||t instanceof String}function VT(t){return Q_()&&t instanceof Blob}function Q_(){return typeof Blob<"u"}function LT(t,e,n,r){if(r<e)throw Sg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Sg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d6{constructor(e,n,r,i,s,o,a,l,u,h,f,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,A)=>{this.resolve_=R,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Pu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ts.NO_ERROR,l=s.getStatus();if(!a||h6(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ts.ABORT;r(!1,new Pu(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Pu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());c6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=K_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?MR():XU();o(l)}else{const l=JU();o(l)}};this.canceled_?n(!1,new Pu(!1,null,!0)):this.backoffId_=a6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&l6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function f6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function p6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function m6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function g6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function y6(t,e,n,r,i,s,o=!0,a=!1){const l=jR(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return m6(h,e),f6(h,n),p6(h,s),g6(h,r),new d6(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function v6(...t){const e=_6();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Q_())return new Blob(t);throw new Je(Ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function w6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E6(t){if(typeof atob>"u")throw i6("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Op{constructor(e,n){this.data=e,this.contentType=n||null}}function T6(t,e){switch(t){case ar.RAW:return new Op(FR(e));case ar.BASE64:case ar.BASE64URL:return new Op(UR(t,e));case ar.DATA_URL:return new Op(S6(e),A6(e))}throw K_()}function FR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function I6(t){let e;try{e=decodeURIComponent(t)}catch{throw Bl(ar.DATA_URL,"Malformed data URL.")}return FR(e)}function UR(t,e){switch(t){case ar.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Bl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ar.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Bl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=E6(e)}catch(i){throw i.message.includes("polyfill")?i:Bl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bl(ar.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=x6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function S6(t){const e=new BR(t);return e.base64?UR(ar.BASE64,e.rest):I6(e.rest)}function A6(t){return new BR(t).contentType}function x6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){let r=0,i="";VT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(VT(this.data_)){const r=this.data_,i=w6(r,e,n);return i===null?null:new hi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hi(r,!0)}}static getBlob(...e){if(Q_()){const n=e.map(r=>r instanceof hi?r.data_:r);return new hi(v6.apply(null,n))}else{const n=e.map(o=>G_(o)?T6(ar.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new hi(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(t){let e;try{e=JSON.parse(t)}catch{return null}return u6(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function R6(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(t,e){return e}class Ut{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||b6}}let Cu=null;function P6(t){return!G_(t)||t.length<2?t:zR(t)}function qR(){if(Cu)return Cu;const t=[];t.push(new Ut("bucket")),t.push(new Ut("generation")),t.push(new Ut("metageneration")),t.push(new Ut("name","fullPath",!0));function e(s,o){return P6(o)}const n=new Ut("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ut("size");return i.xform=r,t.push(i),t.push(new Ut("timeCreated")),t.push(new Ut("updated")),t.push(new Ut("md5Hash",null,!0)),t.push(new Ut("cacheControl",null,!0)),t.push(new Ut("contentDisposition",null,!0)),t.push(new Ut("contentEncoding",null,!0)),t.push(new Ut("contentLanguage",null,!0)),t.push(new Ut("contentType",null,!0)),t.push(new Ut("metadata","customMetadata",!0)),Cu=t,Cu}function C6(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new dn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function N6(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return C6(r,t),r}function HR(t,e,n){const r=$R(e);return r===null?null:N6(t,r,n)}function D6(t,e,n,r){const i=$R(e);if(i===null||!G_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),w=Y_(m,n,r),R=jR({alt:"media",token:u});return w+R})[0]}function O6(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class WR{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){if(!t)throw K_()}function V6(t,e){function n(r,i){const s=HR(t,i,e);return KR(s!==null),s}return n}function L6(t,e){function n(r,i){const s=HR(t,i,e);return KR(s!==null),D6(s,i,t.host,t._protocol)}return n}function GR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=QU():i=GU():n.getStatus()===402?i=KU(t.bucket):n.getStatus()===403?i=YU(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function M6(t){const e=GR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=WU(t.path)),s.serverResponse=i.serverResponse,s}return n}function j6(t,e,n){const r=e.fullServerUrl(),i=Y_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new WR(i,s,L6(t,n),o);return a.errorHandler=M6(e),a}function F6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function U6(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=F6(null,e)),r}function B6(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let N=0;N<2;N++)E=E+Math.random().toString().slice(2);return E}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=U6(e,r,i),h=O6(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",w=hi.getBlob(f,r,m);if(w===null)throw n6();const R={name:u.fullPath},A=Y_(s,t.host,t._protocol),b="POST",T=t.maxUploadRetryTime,v=new WR(A,b,V6(t,n),T);return v.urlParams=R,v.headers=o,v.body=w.uploadData(),v.errorHandler=GR(e),v}class $6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw il("cannot .send() more than once");if(Hs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw il("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw il("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw il("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw il("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class z6 extends $6{initXhr(){this.xhr_.responseType="text"}}function QR(){return new z6}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this._service=e,n instanceof dn?this._location=n:this._location=dn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new js(e,n)}get root(){const e=new dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zR(this._location.path)}get storage(){return this._service}get parent(){const e=k6(this._location.path);if(e===null)return null;const n=new dn(this._location.bucket,e);return new js(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw s6(e)}}function q6(t,e,n){t._throwIfRoot("uploadBytes");const r=B6(t.storage,t._location,qR(),new hi(e,!0),n);return t.storage.makeRequestWithTokens(r,QR).then(i=>({metadata:i,ref:t}))}function H6(t){t._throwIfRoot("getDownloadURL");const e=j6(t.storage,t._location,qR());return t.storage.makeRequestWithTokens(e,QR).then(n=>{if(n===null)throw r6();return n})}function W6(t,e){const n=R6(t._location.path,e),r=new dn(t._location.bucket,n);return new js(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K6(t){return/^[A-Za-z]+:\/\//.test(t)}function G6(t,e){return new js(t,e)}function YR(t,e){if(t instanceof J_){const n=t;if(n._bucket==null)throw t6();const r=new js(n,n._bucket);return e!=null?YR(r,e):r}else return e!==void 0?W6(t,e):t}function Q6(t,e){if(e&&K6(e)){if(t instanceof J_)return G6(t,e);throw Sg("To use ref(service, url), the first argument must be a Storage instance.")}else return YR(t,e)}function MT(t,e){const n=e==null?void 0:e[LR];return n==null?null:dn.makeFromBucketSpec(n,t)}function Y6(t,e,n,r={}){t.host=`${e}:${n}`;const i=Hs(e);i&&Fy(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:_A(s,t.app.options.projectId))}class J_{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=VR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qU,this._maxUploadRetryTime=HU,this._requests=new Set,i!=null?this._bucket=dn.makeFromBucketSpec(i,this._host):this._bucket=MT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dn.makeFromBucketSpec(this._url,e):this._bucket=MT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){LT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){LT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(it(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new o6(MR());{const o=y6(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const jT="@firebase/storage",FT="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="storage";function M9(t,e,n){return t=ae(t),q6(t,e,n)}function j9(t){return t=ae(t),H6(t)}function F9(t,e){return t=ae(t),Q6(t,e)}function J6(t=Ld(),e){t=ae(t);const r=Ws(t,JR).getImmediate({identifier:e}),i=mA("storage");return i&&X6(r,...i),r}function X6(t,e,n,r={}){Y6(t,e,n,r)}function Z6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J_(n,r,i,e,Ks)}function e5(){Wn(new Pn(JR,Z6,"PUBLIC").setMultipleInstances(!0)),nn(jT,FT,""),nn(jT,FT,"esm2020")}e5();const XR="@firebase/installations",X_="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=1e4,eb=`w:${X_}`,tb="FIS_v2",t5="https://firebaseinstallations.googleapis.com/v1",n5=60*60*1e3,r5="installations",i5="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fs=new qs(r5,i5,s5);function nb(t){return t instanceof Kn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb({projectId:t}){return`${t5}/projects/${t}/installations`}function ib(t){return{token:t.token,requestStatus:2,expiresIn:a5(t.expiresIn),creationTime:Date.now()}}async function sb(t,e){const r=(await e.json()).error;return Fs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ob({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function o5(t,{refreshToken:e}){const n=ob(t);return n.append("Authorization",l5(e)),n}async function ab(t){const e=await t();return e.status>=500&&e.status<600?t():e}function a5(t){return Number(t.replace("s","000"))}function l5(t){return`${tb} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=rb(t),i=ob(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:tb,appId:t.appId,sdkVersion:eb},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ab(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ib(u.authToken)}}else throw await sb("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h5=/^[cdef][\w-]{21}$/,Ag="";function d5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=f5(t);return h5.test(n)?n:Ag}catch{return Ag}}function f5(t){return u5(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=new Map;function ub(t,e){const n=Ef(t);hb(n,e),p5(n,e)}function hb(t,e){const n=cb.get(t);if(n)for(const r of n)r(e)}function p5(t,e){const n=m5();n&&n.postMessage({key:t,fid:e}),g5()}let fs=null;function m5(){return!fs&&"BroadcastChannel"in self&&(fs=new BroadcastChannel("[Firebase] FID Change"),fs.onmessage=t=>{hb(t.data.key,t.data.fid)}),fs}function g5(){cb.size===0&&fs&&(fs.close(),fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y5="firebase-installations-database",_5=1,Us="firebase-installations-store";let Vp=null;function Z_(){return Vp||(Vp=Vd(y5,_5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Us)}}})),Vp}async function fd(t,e){const n=Ef(t),i=(await Z_()).transaction(Us,"readwrite"),s=i.objectStore(Us),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ub(t,e.fid),e}async function db(t){const e=Ef(t),r=(await Z_()).transaction(Us,"readwrite");await r.objectStore(Us).delete(e),await r.done}async function Tf(t,e){const n=Ef(t),i=(await Z_()).transaction(Us,"readwrite"),s=i.objectStore(Us),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ub(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ev(t){let e;const n=await Tf(t.appConfig,r=>{const i=v5(r),s=w5(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ag?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function v5(t){const e=t||{fid:d5(),registrationStatus:0};return fb(e)}function w5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Fs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=E5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:T5(t)}:{installationEntry:e}}async function E5(t,e){try{const n=await c5(t,e);return fd(t.appConfig,n)}catch(n){throw nb(n)&&n.customData.serverCode===409?await db(t.appConfig):await fd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function T5(t){let e=await UT(t.appConfig);for(;e.registrationStatus===1;)await lb(100),e=await UT(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ev(t);return r||n}return e}function UT(t){return Tf(t,e=>{if(!e)throw Fs.create("installation-not-found");return fb(e)})}function fb(t){return I5(t)?{fid:t.fid,registrationStatus:0}:t}function I5(t){return t.registrationStatus===1&&t.registrationTime+ZR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S5({appConfig:t,heartbeatServiceProvider:e},n){const r=A5(t,n),i=o5(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:eb,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await ab(()=>fetch(r,a));if(l.ok){const u=await l.json();return ib(u)}else throw await sb("Generate Auth Token",l)}function A5(t,{fid:e}){return`${rb(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e=!1){let n;const r=await Tf(t.appConfig,s=>{if(!pb(s))throw Fs.create("not-registered");const o=s.authToken;if(!e&&R5(o))return s;if(o.requestStatus===1)return n=x5(t,e),s;{if(!navigator.onLine)throw Fs.create("app-offline");const a=P5(s);return n=k5(t,a),a}});return n?await n:r.authToken}async function x5(t,e){let n=await BT(t.appConfig);for(;n.authToken.requestStatus===1;)await lb(100),n=await BT(t.appConfig);const r=n.authToken;return r.requestStatus===0?tv(t,e):r}function BT(t){return Tf(t,e=>{if(!pb(e))throw Fs.create("not-registered");const n=e.authToken;return C5(n)?{...e,authToken:{requestStatus:0}}:e})}async function k5(t,e){try{const n=await S5(t,e),r={...e,authToken:n};return await fd(t.appConfig,r),n}catch(n){if(nb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await db(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await fd(t.appConfig,r)}throw n}}function pb(t){return t!==void 0&&t.registrationStatus===2}function R5(t){return t.requestStatus===2&&!b5(t)}function b5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+n5}function P5(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function C5(t){return t.requestStatus===1&&t.requestTime+ZR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N5(t){const e=t,{installationEntry:n,registrationPromise:r}=await ev(e);return r?r.catch(console.error):tv(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D5(t,e=!1){const n=t;return await O5(n),(await tv(n,e)).token}async function O5(t){const{registrationPromise:e}=await ev(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V5(t){if(!t||!t.options)throw Lp("App Configuration");if(!t.name)throw Lp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lp(t){return Fs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="installations",L5="installations-internal",M5=t=>{const e=t.getProvider("app").getImmediate(),n=V5(e),r=Ws(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},j5=t=>{const e=t.getProvider("app").getImmediate(),n=Ws(e,mb).getImmediate();return{getId:()=>N5(n),getToken:i=>D5(n,i)}};function F5(){Wn(new Pn(mb,M5,"PUBLIC")),Wn(new Pn(L5,j5,"PRIVATE"))}F5();nn(XR,X_);nn(XR,X_,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5="/firebase-messaging-sw.js",B5="/firebase-cloud-messaging-push-scope",gb="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",$5="https://fcmregistrations.googleapis.com/v1",yb="google.c.a.c_id",z5="google.c.a.c_l",q5="google.c.a.ts",H5="google.c.a.e",$T=1e4;var zT;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(zT||(zT={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Sc;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Sc||(Sc={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function W5(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="fcm_token_details_db",K5=5,qT="fcm_token_object_Store";async function G5(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Mp))return null;let e=null;return(await Vd(Mp,K5,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(qT))return;const a=o.objectStore(qT),l=await a.index("fcmSenderId").get(t);if(await a.clear(),!!l){if(i===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:u.createTime??Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:vr(u.vapidKey)}}}else if(i===3){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:vr(u.auth),p256dh:vr(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:vr(u.vapidKey)}}}else if(i===4){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:vr(u.auth),p256dh:vr(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:vr(u.vapidKey)}}}}}})).close(),await vp(Mp),await vp("fcm_vapid_details_db"),await vp("undefined"),Q5(e)?e:null}function Q5(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y5="firebase-messaging-database",J5=1,Ac="firebase-messaging-store";let jp=null;function _b(){return jp||(jp=Vd(Y5,J5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ac)}}})),jp}async function X5(t){const e=vb(t),r=await(await _b()).transaction(Ac).objectStore(Ac).get(e);if(r)return r;{const i=await G5(t.appConfig.senderId);if(i)return await nv(t,i),i}}async function nv(t,e){const n=vb(t),i=(await _b()).transaction(Ac,"readwrite");return await i.objectStore(Ac).put(e,n),await i.done,e}function vb({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Kt=new qs("messaging","Messaging",Z5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e3(t,e){const n=await iv(t),r=wb(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(rv(t.appConfig),i)).json()}catch(o){throw Kt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Kt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Kt.create("token-subscribe-no-token");return s.token}async function t3(t,e){const n=await iv(t),r=wb(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${rv(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Kt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Kt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Kt.create("token-update-no-token");return s.token}async function n3(t,e){const r={method:"DELETE",headers:await iv(t)};try{const s=await(await fetch(`${rv(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Kt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Kt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function rv({projectId:t}){return`${$5}/projects/${t}/registrations`}async function iv({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function wb({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==gb&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=7*24*60*60*1e3;async function i3(t){const e=await o3(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:vr(e.getKey("auth")),p256dh:vr(e.getKey("p256dh"))},r=await X5(t.firebaseDependencies);if(r){if(a3(r.subscriptionOptions,n))return Date.now()>=r.createTime+r3?s3(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await n3(t.firebaseDependencies,r.token)}catch{}return HT(t.firebaseDependencies,n)}else return HT(t.firebaseDependencies,n)}async function s3(t,e){try{const n=await t3(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await nv(t.firebaseDependencies,r),n}catch(n){throw n}}async function HT(t,e){const r={token:await e3(t,e),createTime:Date.now(),subscriptionOptions:e};return await nv(t,r),r.token}async function o3(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:W5(e)})}function a3(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return l3(e,t),c3(e,t),u3(e,t),e}function l3(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function c3(t,e){e.data&&(t.data=e.data)}function u3(t,e){var i,s,o,a;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(a=e.fcmOptions)==null?void 0:a.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h3(t){return typeof t=="object"&&!!t&&yb in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */d3("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function d3(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f3(t){if(!t||!t.options)throw Fp("App Configuration Object");if(!t.name)throw Fp("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Fp(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Fp(t){return Kt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=f3(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m3(t){try{t.swRegistration=await navigator.serviceWorker.register(U5,{scope:B5}),t.swRegistration.update().catch(()=>{}),await g3(t.swRegistration)}catch(e){throw Kt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function g3(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${$T} ms`)),$T),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y3(t,e){if(!e&&!t.swRegistration&&await m3(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Kt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _3(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=gb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(t,e){if(!navigator)throw Kt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Kt.create("permission-blocked");return await _3(t,e==null?void 0:e.vapidKey),await y3(t,e==null?void 0:e.serviceWorkerRegistration),i3(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v3(t,e,n){const r=w3(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[yb],message_name:n[z5],message_time:n[q5],message_device_time:Math.floor(Date.now()/1e3)})}function w3(t){switch(t){case Sc.NOTIFICATION_CLICKED:return"notification_open";case Sc.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Sc.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(WT(n)):t.onMessageHandler.next(WT(n)));const r=n.data;h3(r)&&r[H5]==="1"&&await v3(t,n.messageType,r)}const KT="@firebase/messaging",GT="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=t=>{const e=new p3(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>E3(e,n)),e},I3=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Eb(e,r)}};function S3(){Wn(new Pn("messaging",T3,"PUBLIC")),Wn(new Pn("messaging-internal",I3,"PRIVATE")),nn(KT,GT),nn(KT,GT,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(){try{await TA()}catch{return!1}return typeof window<"u"&&jy()&&JO()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(t=Ld()){return Tb().then(e=>{if(!e)throw Kt.create("unsupported-browser")},e=>{throw Kt.create("indexed-db-unsupported")}),Ws(ae(t),"messaging").getImmediate()}async function x3(t,e){return t=ae(t),Eb(t,e)}S3();const k3={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},If=AA(k3),an=ej(If);NL(an,ix);const Ct=bU(If),U9=J6(If),Er=new rr;Er.addScope("profile");Er.addScope("email");Er.setCustomParameters({prompt:"select_account"});PU(Ct).catch(t=>{t.code==="failed-precondition"||t.code});let xg=null;const R3="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";Tb().then(t=>{t&&(xg=A3(If))}).catch(t=>{});/*! Capacitor: https://capacitorjs.com/ - MIT License */var Bs;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Bs||(Bs={}));class uh extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const b3=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},P3=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:b3(t),s=()=>i()!=="web",o=f=>{const m=u.get(f);return!!(m!=null&&m.platforms.has(i())||a(f))},a=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(w=>w.name===f)},l=f=>t.console.error(f),u=new Map,h=(f,m={})=>{const w=u.get(f);if(w)return w.proxy;const R=i(),A=a(f);let b;const T=async()=>(!b&&R in m?b=typeof m[R]=="function"?b=await m[R]():b=m[R]:e!==null&&!b&&"web"in m&&(b=typeof m.web=="function"?b=await m.web():b=m.web),b),v=(_,S)=>{var k,P;if(A){const C=A==null?void 0:A.methods.find(x=>S===x.name);if(C)return C.rtype==="promise"?x=>n.nativePromise(f,S.toString(),x):(x,ye)=>n.nativeCallback(f,S.toString(),x,ye);if(_)return(k=_[S])===null||k===void 0?void 0:k.bind(_)}else{if(_)return(P=_[S])===null||P===void 0?void 0:P.bind(_);throw new uh(`"${f}" plugin is not implemented on ${R}`,Bs.Unimplemented)}},E=_=>{let S;const k=(...P)=>{const C=T().then(x=>{const ye=v(x,_);if(ye){const G=ye(...P);return S=G==null?void 0:G.remove,G}else throw new uh(`"${f}.${_}()" is not implemented on ${R}`,Bs.Unimplemented)});return _==="addListener"&&(C.remove=async()=>S()),C};return k.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:_,writable:!1,configurable:!1}),k},N=E("addListener"),j=E("removeListener"),F=(_,S)=>{const k=N({eventName:_},S),P=async()=>{const x=await k;j({eventName:_,callbackId:x},S)},C=new Promise(x=>k.then(()=>x({remove:P})));return C.remove=async()=>{await P()},C},I=new Proxy({},{get(_,S){switch(S){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return A?F:N;case"removeListener":return j;default:return E(S)}}});return r[f]=I,u.set(f,{name:f,proxy:I,platforms:new Set([...Object.keys(m),...A?[R]:[]])}),I};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=l,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=h,n.Exception=uh,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},C3=t=>t.Capacitor=P3(t),An=C3(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Nn=An.registerPlugin;class Sf{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new An.Exception(e,Bs.Unimplemented)}unavailable(e="not available"){return new An.Exception(e,Bs.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const N3=Nn("WebView"),QT=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),YT=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class D3 extends Sf{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=YT(i).trim(),s=YT(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=QT(e.key),r=QT(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const O3=Nn("CapacitorCookies",{web:()=>new D3}),V3=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),L3=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},M3=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let a,l;return Array.isArray(o)?(l="",o.forEach(u=>{a=e?encodeURIComponent(u):u,l+=`${s}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${s}=${a}`),`${r}&${l}`},"").substr(1):null,Ib=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=L3(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,a]of Object.entries(t.data||{}))s.set(o,a);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((a,l)=>{s.append(l,a)});else for(const a of Object.keys(t.data))s.append(a,t.data[a]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class j3 extends Sf{async request(e){const n=Ib(e,e.webFetchExtra),r=M3(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:a="text"}=s.ok?e:{};o.includes("application/json")&&(a="json");let l,u;switch(a){case"arraybuffer":case"blob":u=await s.blob(),l=await V3(u);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const h={};return s.headers.forEach((f,m)=>{h[m]=f}),{data:l,headers:h,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const F3=Nn("CapacitorHttp",{web:()=>new j3});var kg;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(kg||(kg={}));var Rg;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(Rg||(Rg={}));class U3 extends Sf{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const B3=Nn("SystemBars",{web:()=>new U3}),B9=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:An,CapacitorCookies:O3,CapacitorException:uh,CapacitorHttp:F3,get ExceptionCode(){return Bs},get SystemBarType(){return Rg},SystemBars:B3,get SystemBarsStyle(){return kg},WebPlugin:Sf,WebView:N3,buildRequestInit:Ib,registerPlugin:Nn},Symbol.toStringTag,{value:"Module"}));var JT;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(JT||(JT={}));var XT;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(XT||(XT={}));const $3=Nn("FirebaseAuthentication",{web:()=>re(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),Sb=V.createContext();function Sa(){return V.useContext(Sb)}const ao="acb_user_cache";function z3({children:t}){const[e,n]=V.useState(null),[r,i]=V.useState(!0),s=V.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},a=async A=>{if(!A){n(null);return}if(!s.current){s.current=!0;try{const b=localStorage.getItem(ao);if(b){const T=JSON.parse(b);T.uid===A.uid&&n({...A,...T})}}catch{}try{const b=br(Ct,"users",A.uid),T=await W_(b),v=A.email==="prince8694@gmail.com"||A.email==="prince86944@gmail.com";if(T.exists()){const E=T.data();let N;v&&E.role!==o.SUPER_ADMIN?(await Es(b,{role:o.SUPER_ADMIN}),N={...A,...E,role:o.SUPER_ADMIN}):N={...A,...E},n(N),localStorage.setItem(ao,JSON.stringify({...E,uid:A.uid}))}else{const E={uid:A.uid,name:A.displayName||"Scholar",email:A.email,phone:A.phoneNumber||"",createdAt:RT(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await OT(b,E);const N={...A,...E};n(N),localStorage.setItem(ao,JSON.stringify({...E,uid:A.uid}))}}catch{const T=localStorage.getItem(ao);if(!(T&&JSON.parse(T).uid===A.uid)){const E=A.email==="prince8694@gmail.com"||A.email==="prince86944@gmail.com";n({uid:A.uid,email:A.email,name:A.displayName||"Scholar",role:E?o.SUPER_ADMIN:o.STUDENT})}}finally{s.current=!1}}};async function l(A,b,T,v){const E=await IL(an,A,b),N={uid:E.user.uid,name:T,email:A,phone:v,createdAt:RT(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await OT(br(Ct,"users",E.user.uid),N),E.user}async function u(A,b){return SL(an,A,b)}async function h(){var b;if(An.isNativePlatform())try{const T=await $3.signInWithGoogle();if((b=T==null?void 0:T.credential)!=null&&b.idToken){const v=rr.credential(T.credential.idToken),E=await zd(an,v);return await a(E.user),E.user}throw new Error("Native Google Login failed — no idToken")}catch{try{const v=await tE(an,Er);return await a(v.user),v.user}catch{return i(!0),Er.setCustomParameters({prompt:"select_account"}),await nE(an,Er)}}try{const T=await tE(an,Er);return await a(T.user),T.user}catch(T){if(T.code==="auth/popup-blocked"||T.code==="auth/popup-closed-by-user")return i(!0),Er.setCustomParameters({prompt:"select_account"}),await nE(an,Er);throw T}}function f(A){return window.recaptchaVerifier||(window.recaptchaVerifier=new nM(an,"recaptcha-container",{size:"invisible"})),iM(an,A,window.recaptchaVerifier)}async function m(A){e&&(await Es(br(Ct,"users",e.uid),A),n(b=>({...b,...A})))}function w(){return localStorage.removeItem(ao),LL(an)}V.useEffect(()=>VL(an,async b=>{e||i(!0);try{b?await a(b):(localStorage.removeItem(ao),n(null))}catch{}finally{i(!1)}}),[]),V.useEffect(()=>{(async()=>{try{i(!0);const b=await mM(an);if(b!=null&&b.user){await a(b.user);const T=localStorage.getItem("lastPath");T&&(localStorage.removeItem("lastPath"),window.location.replace(T))}}catch{}finally{i(!1)}})()},[]);const R={user:e,ROLES:o,login:u,signup:l,logout:w,googleLogin:h,setupRecaptcha:f,updateProfileData:m,loading:r};return g.jsx(Sb.Provider,{value:R,children:t})}var ZT;(function(t){t.General="General",t.ParentalGuidance="ParentalGuidance",t.Teen="Teen",t.MatureAudience="MatureAudience"})(ZT||(ZT={}));var eI;(function(t){t.SizeChanged="bannerAdSizeChanged",t.Loaded="bannerAdLoaded",t.FailedToLoad="bannerAdFailedToLoad",t.Opened="bannerAdOpened",t.Closed="bannerAdClosed",t.AdImpression="bannerAdImpression"})(eI||(eI={}));var bg;(function(t){t.TOP_CENTER="TOP_CENTER",t.CENTER="CENTER",t.BOTTOM_CENTER="BOTTOM_CENTER"})(bg||(bg={}));var Pg;(function(t){t.BANNER="BANNER",t.FULL_BANNER="FULL_BANNER",t.LARGE_BANNER="LARGE_BANNER",t.MEDIUM_RECTANGLE="MEDIUM_RECTANGLE",t.LEADERBOARD="LEADERBOARD",t.ADAPTIVE_BANNER="ADAPTIVE_BANNER",t.SMART_BANNER="SMART_BANNER"})(Pg||(Pg={}));var tI;(function(t){t.Loaded="interstitialAdLoaded",t.FailedToLoad="interstitialAdFailedToLoad",t.Showed="interstitialAdShowed",t.FailedToShow="interstitialAdFailedToShow",t.Dismissed="interstitialAdDismissed"})(tI||(tI={}));var nI;(function(t){t.Loaded="onRewardedInterstitialAdLoaded",t.FailedToLoad="onRewardedInterstitialAdFailedToLoad",t.Showed="onRewardedInterstitialAdShowed",t.FailedToShow="onRewardedInterstitialAdFailedToShow",t.Dismissed="onRewardedInterstitialAdDismissed",t.Rewarded="onRewardedInterstitialAdReward"})(nI||(nI={}));var rI;(function(t){t.Loaded="onRewardedVideoAdLoaded",t.FailedToLoad="onRewardedVideoAdFailedToLoad",t.Showed="onRewardedVideoAdShowed",t.FailedToShow="onRewardedVideoAdFailedToShow",t.Dismissed="onRewardedVideoAdDismissed",t.Rewarded="onRewardedVideoAdReward"})(rI||(rI={}));var iI;(function(t){t.NOT_REQUIRED="NOT_REQUIRED",t.OBTAINED="OBTAINED",t.REQUIRED="REQUIRED",t.UNKNOWN="UNKNOWN"})(iI||(iI={}));var sI;(function(t){t[t.DISABLED=0]="DISABLED",t[t.EEA=1]="EEA",t[t.NOT_EEA=2]="NOT_EEA",t[t.US=3]="US",t[t.OTHER=4]="OTHER"})(sI||(sI={}));const hh=Nn("AdMob",{web:()=>re(()=>import("./web2.js"),[]).then(t=>new t.AdMobWeb)}),Zn=Nn("Preferences",{web:()=>re(()=>import("./web3.js"),[]).then(t=>new t.PreferencesWeb)}),sv="acb_offline_sessions";function oI(t){try{const e=ov();e.push({...t,_queuedAt:Date.now(),_synced:!1}),localStorage.setItem(sv,JSON.stringify(e))}catch{}}function ov(){try{const t=localStorage.getItem(sv);return t?JSON.parse(t):[]}catch{return[]}}function aI(){return ov().length}async function lI(t,e){const n=ov();if(!n.length)return 0;const r=[],i=[];for(const s of n)try{const{_queuedAt:o,_synced:a,...l}=s;await DR(ls(t,"StudySessions"),l);try{const u=br(t,"users",e),h=await W_(u);if(h.exists()){const f=h.data(),m=l.date,R=f.lastStudyDate!==m?l.duration:(f.todayStudyTime||0)+l.duration;await Es(u,{totalStudyTime:(f.totalStudyTime||0)+l.duration,todayStudyTime:R,lastStudyDate:m,isStudying:!1})}}catch{}r.push(s)}catch{i.push(s)}return localStorage.setItem(sv,JSON.stringify(i)),r.length}const we=Nn("AppBlocker"),Ab=V.createContext(null);function cI(){return V.useContext(Ab)}function q3({children:t}){const{user:e}=Sa(),n=(H,ee)=>{try{const le=localStorage.getItem(H);return le!==null?JSON.parse(le):ee}catch{return ee}},[r,i]=V.useState(!1),[s,o]=V.useState(0),[a,l]=V.useState("OTHERS"),[u,h]=V.useState(0),[f,m]=V.useState(0),[w,R]=V.useState(0),[A,b]=V.useState("COUNTDOWN"),[T,v]=V.useState(!1),[E,N]=V.useState(!1),[j,F]=V.useState(()=>n("allowedPackages","")),[I,_]=V.useState(()=>n("lockMode","NORMAL")),[S,k]=V.useState([]),[P,C]=V.useState(""),x=V.useRef(null),ye=()=>{var H,ee,le,je,De;return An.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((ee=(H=window.Capacitor).isNativePlatform)==null?void 0:ee.call(H))||((je=(le=window.Capacitor).isPluginAvailable)==null?void 0:je.call(le,"AppBlocker")))||((De=An.isPluginAvailable)==null?void 0:De.call(An,"AppBlocker"))},G=async()=>{if(ye())try{if(we&&we.getInstalledApps){const{apps:H}=await we.getInstalledApps();k(H.sort((ee,le)=>ee.name.localeCompare(le.name)))}}catch{}};V.useEffect(()=>{(async()=>{if(ye()){await G();try{const ee=await Zn.get({key:"countdownEndTime"}),le=Number(ee.value||0);if(le>Date.now()){const je=Math.ceil((le-Date.now())/1e3);o(je),i(!0),b("COUNTDOWN");const De=await Zn.get({key:"allowedPackages"});De.value&&F(De.value)}else we&&we.stopBlocker&&await we.stopBlocker(),await Zn.set({key:"isBlockerActive",value:"false"}),await Zn.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch{}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const ce=H=>{if(F(H),localStorage.setItem("allowedPackages",JSON.stringify(H)),ye()){Zn.set({key:"allowedPackages",value:H});try{const ee=(H||"").split(",").filter(Boolean);ee.includes("com.apnacollegebihar.online")||ee.push("com.apnacollegebihar.online"),we&&we.setAllowedPackages&&we.setAllowedPackages({packages:ee})}catch{}}},Ne=H=>{_(H),localStorage.setItem("lockMode",JSON.stringify(H)),ye()&&Zn.set({key:"lockMode",value:H})},q=H=>{if(H||v(!1),i(H),localStorage.setItem("timerActive",JSON.stringify(H)),ye())try{if(H){if(we&&we.setBlockerActive&&we.setBlockerActive({active:!0}),A==="COUNTDOWN"){we&&we.startCountdown&&we.startCountdown({minutes:Math.ceil(s/60)});const le=Date.now()+s*1e3;Zn.set({key:"countdownEndTime",value:String(le)})}const ee=(j||"").split(",").filter(Boolean);ee.includes("com.apnacollegebihar.online")||ee.push("com.apnacollegebihar.online"),we&&we.setAllowedPackages&&we.setAllowedPackages({packages:ee}),Zn.set({key:"isBlockerActive",value:"true"})}else we&&we.stopBlocker&&we.stopBlocker(),Zn.set({key:"isBlockerActive",value:"false"}),Zn.set({key:"countdownEndTime",value:"0"})}catch{}},ne=H=>{N(H),localStorage.setItem("focusBroken",JSON.stringify(H))};V.useEffect(()=>{const H=ee=>{ee.key==="timerActive"&&i(JSON.parse(ee.newValue)),ee.key==="focusBroken"&&N(JSON.parse(ee.newValue)),ee.key==="lockMode"&&_(JSON.parse(ee.newValue))};return window.addEventListener("storage",H),()=>window.removeEventListener("storage",H)},[]),V.useEffect(()=>{r||o(A==="COUNTDOWN"?u*3600+f*60+w:0)},[A,u,f,w,r]);const oe=async(H=null)=>{if(!e)return;const ee=H||(T?u*3600+f*60+w+s:A==="STOPWATCH"?s:u*3600+f*60-s);if(ee<5){v(!1),q(!1);return}const le=new Date().toLocaleDateString("en-CA"),je={userId:e.uid,userName:e.name||"Scholar",subject:a,duration:ee,date:le,createdAt:new Date().toISOString()};if(!navigator.onLine){oI(je),de("💾 Session saved locally. Will sync when online!",{duration:4e3,style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),v(!1),q(!1);return}try{aI()>0&&lI(Ct,e.uid).then(Xe=>{Xe>0&&de.success(`${Xe} offline session(s) synced!`,{duration:3e3})}).catch(()=>{}),await DR(ls(Ct,"StudySessions"),je);const Lt=br(Ct,"users",e.uid),Oe=await W_(Lt);if(Oe.exists()){const Xe=Oe.data(),Mt=Xe.lastStudyDate!==le?ee:(Xe.todayStudyTime||0)+ee,_n=new Date;_n.setDate(_n.getDate()-1);const wt=_n.toLocaleDateString("en-CA");let Fe=Xe.streak||0,at=Xe.streakDate||"";at!==le&&at!==wt&&(Fe=0),Mt>=7200&&at!==le&&(at===wt?Fe+=1:Fe=1,at=le),await Es(Lt,{totalStudyTime:(Xe.totalStudyTime||0)+ee,todayStudyTime:Mt,lastStudyDate:le,streak:Fe,streakDate:at,isStudying:!1})}P&&(await Es(br(Ct,"Tasks",P),{done:!0}),C("")),v(!1),q(!1)}catch{v(!1),oI(je),de("📱 Network error. Session saved locally.",{duration:4e3,style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}})}};V.useEffect(()=>{e&&Es(br(Ct,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),V.useEffect(()=>{if(!e)return;const H=async()=>{if(aI()!==0)try{const le=await lI(Ct,e.uid);le>0&&de.success(`✅ ${le} offline session(s) synced to cloud!`,{duration:4e3})}catch{}};return window.addEventListener("online",H),()=>window.removeEventListener("online",H)},[e]),V.useEffect(()=>{const H=ee=>{r&&(ee.preventDefault(),ee.returnValue="")};return window.addEventListener("beforeunload",H),()=>{window.removeEventListener("beforeunload",H)}},[r]),V.useEffect(()=>(r?x.current=setInterval(()=>{o(A==="COUNTDOWN"?H=>H<=1?(b("STOPWATCH"),v(!0),0):H-1:H=>H+1)},1e3):clearInterval(x.current),()=>clearInterval(x.current)),[r,A,e,u,f,w,P]);const Ae={timerActive:r,setTimerActive:q,timerTime:s,setTimerTime:o,timerSubject:a,setTimerSubject:l,customHours:u,setCustomHours:h,customMinutes:f,setCustomMinutes:m,customSeconds:w,setCustomSeconds:R,timerMode:A,setTimerMode:b,overtimeActive:T,setOvertimeActive:v,saveGlobalSession:oe,focusBroken:E,setFocusBroken:ne,allowedPackages:j,setAllowedPackages:ce,lockMode:I,setLockMode:Ne,installedApps:S,fetchApps:G,selectedTaskId:P,setSelectedTaskId:C,launchApp:async H=>{if(ye())try{we&&we.unlockApp&&await we.unlockApp(),we&&we.launchApp&&await we.launchApp({packageName:H})}catch{}},openUsageAccessSettings:async()=>{if(ye())try{we&&we.requestUsageStatsPermission&&await we.requestUsageStatsPermission()}catch{}}};return g.jsx(Ab.Provider,{value:Ae,children:t})}const H3=Nn("App",{web:()=>re(()=>import("./web4.js"),[]).then(t=>new t.AppWeb)});var uI;(function(t){t[t.Sunday=1]="Sunday",t[t.Monday=2]="Monday",t[t.Tuesday=3]="Tuesday",t[t.Wednesday=4]="Wednesday",t[t.Thursday=5]="Thursday",t[t.Friday=6]="Friday",t[t.Saturday=7]="Saturday"})(uI||(uI={}));const sl=Nn("LocalNotifications",{web:()=>re(()=>import("./web5.js"),[]).then(t=>new t.LocalNotificationsWeb)});var W3=typeof Element<"u",K3=typeof Map=="function",G3=typeof Set=="function",Q3=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function dh(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!dh(t[r],e[r]))return!1;return!0}var s;if(K3&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!dh(r.value[1],e.get(r.value[0])))return!1;return!0}if(G3&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Q3&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(W3&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!dh(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var Y3=function(e,n){try{return dh(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return!1;throw r}};const J3=pd(Y3);var X3=function(t,e,n,r,i,s,o,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,a],h=0;l=new Error(e.replace(/%s/g,function(){return u[h++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},Z3=X3;const hI=pd(Z3);var eB=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var h=o[u];if(!l(h))return!1;var f=e[h],m=n[h];if(s=r?r.call(i,f,m,h):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const tB=pd(eB);var xb=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(xb||{}),Up={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},dI=Object.values(xb),Af={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},kb=Object.entries(Af).reduce((t,[e,n])=>(t[n]=e,t),{}),Bn="data-rh",Fo={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Uo=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},nB=t=>{let e=Uo(t,"title");const n=Uo(t,Fo.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Uo(t,Fo.DEFAULT_TITLE);return e||r||void 0},rB=t=>Uo(t,Fo.ON_CHANGE_CLIENT_STATE)||(()=>{}),Bp=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),iB=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const a=i[s].toLowerCase();if(t.indexOf(a)!==-1&&r[a])return n.concat(r)}}return n},[]),sB=t=>console&&typeof console.warn=="function"&&void 0,ol=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&sB(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(l=>{let u;const h=Object.keys(l);for(let m=0;m<h.length;m+=1){const w=h[m],R=w.toLowerCase();e.indexOf(R)!==-1&&!(u==="rel"&&l[u].toLowerCase()==="canonical")&&!(R==="rel"&&l[R].toLowerCase()==="stylesheet")&&(u=R),e.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(u=w)}if(!u||!l[u])return!1;const f=l[u].toLowerCase();return r[u]||(r[u]={}),o[u]||(o[u]={}),r[u][f]?!1:(o[u][f]=!0,!0)}).reverse().forEach(l=>i.push(l));const a=Object.keys(o);for(let l=0;l<a.length;l+=1){const u=a[l],h={...r[u],...o[u]};r[u]=h}return i},[]).reverse()},oB=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},aB=t=>({baseTag:iB(["href"],t),bodyAttributes:Bp("bodyAttributes",t),defer:Uo(t,Fo.DEFER),encode:Uo(t,Fo.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Bp("htmlAttributes",t),linkTags:ol("link",["rel","href"],t),metaTags:ol("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:ol("noscript",["innerHTML"],t),onChangeClientState:rB(t),scriptTags:ol("script",["src","innerHTML"],t),styleTags:ol("style",["cssText"],t),title:nB(t),titleAttributes:Bp("titleAttributes",t),prioritizeSeoTags:oB(t,Fo.PRIORITIZE_SEO_TAGS)}),Rb=t=>Array.isArray(t)?t.join(""):t,lB=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},$p=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(lB(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},fI=(t,e)=>({...t,[e]:void 0}),cB=["noscript","script","style"],Cg=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),bb=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),uB=(t,e,n,r)=>{const i=bb(n),s=Rb(e);return i?`<${t} ${Bn}="true" ${i}>${Cg(s,r)}</${t}>`:`<${t} ${Bn}="true">${Cg(s,r)}</${t}>`},hB=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,h)=>{const f=typeof s[h]>"u"?h:`${h}="${Cg(s[h],n)}"`;return u?`${u} ${f}`:f},""),a=s.innerHTML||s.cssText||"",l=cB.indexOf(t)===-1;return`${r}<${t} ${Bn}="true" ${o}${l?"/>":`>${a}</${t}>`}`},""),Pb=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Af[r];return n[i||r]=t[r],n},e),dB=(t,e,n)=>{const r={key:e,[Bn]:!0},i=Pb(n,r);return[Q.createElement("title",i,e)]},fh=(t,e)=>e.map((n,r)=>{const i={key:r,[Bn]:!0};return Object.keys(n).forEach(s=>{const a=Af[s]||s;if(a==="innerHTML"||a==="cssText"){const l=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:l}}else i[a]=n[s]}),Q.createElement(t,i)}),vn=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>dB(t,e.title,e.titleAttributes),toString:()=>uB(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Pb(e),toString:()=>bb(e)};default:return{toComponent:()=>fh(t,e),toString:()=>hB(t,e,n)}}},fB=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=$p(t,Up.meta),s=$p(e,Up.link),o=$p(n,Up.script);return{priorityMethods:{toComponent:()=>[...fh("meta",i.priority),...fh("link",s.priority),...fh("script",o.priority)],toString:()=>`${vn("meta",i.priority,r)} ${vn("link",s.priority,r)} ${vn("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},pB=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:a="",titleAttributes:l,prioritizeSeoTags:u}=t;let{linkTags:h,metaTags:f,scriptTags:m}=t,w={toComponent:()=>[],toString:()=>""};return u&&({priorityMethods:w,linkTags:h,metaTags:f,scriptTags:m}=fB(t)),{priority:w,base:vn("base",e,r),bodyAttributes:vn("bodyAttributes",n,r),htmlAttributes:vn("htmlAttributes",i,r),link:vn("link",h,r),meta:vn("meta",f,r),noscript:vn("noscript",s,r),script:vn("script",m,r),style:vn("style",o,r),title:vn("title",{title:a,titleAttributes:l},r)}},Ng=pB,Nu=[],av=!!(typeof window<"u"&&window.document&&window.document.createElement),Dg=class{constructor(t,e){gr(this,"instances",[]);gr(this,"canUseDOM",av);gr(this,"context");gr(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Nu:this.instances,add:t=>{(this.canUseDOM?Nu:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Nu:this.instances).indexOf(t);(this.canUseDOM?Nu:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Ng({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},mB=parseInt(Q.version.split(".")[0],10),Og=mB>=19,gB={},Cb=Q.createContext(gB),Bo,Nb=(Bo=class extends V.Component{constructor(n){super(n);gr(this,"helmetData");Og?this.helmetData=null:this.helmetData=new Dg(this.props.context||{},Bo.canUseDOM)}render(){return Og?Q.createElement(Q.Fragment,null,this.props.children):Q.createElement(Cb.Provider,{value:this.helmetData.value},this.props.children)}},gr(Bo,"canUseDOM",av),Bo),lo=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Bn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(a=>{const l=document.createElement(t);for(const u in a)if(Object.prototype.hasOwnProperty.call(a,u))if(u==="innerHTML")l.innerHTML=a.innerHTML;else if(u==="cssText"){const h=a.cssText;l.appendChild(document.createTextNode(h))}else{const h=u,f=typeof a[h]>"u"?"":a[h];l.setAttribute(u,f)}l.setAttribute(Bn,"true"),i.some((u,h)=>(o=h,l.isEqualNode(u)))?i.splice(o,1):s.push(l)}),i.forEach(a=>{var l;return(l=a.parentNode)==null?void 0:l.removeChild(a)}),s.forEach(a=>n.appendChild(a)),{oldTags:i,newTags:s}},Vg=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Bn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const a of o){const l=e[a]||"";n.getAttribute(a)!==l&&n.setAttribute(a,l),i.indexOf(a)===-1&&i.push(a);const u=s.indexOf(a);u!==-1&&s.splice(u,1)}for(let a=s.length-1;a>=0;a-=1)n.removeAttribute(s[a]);i.length===s.length?n.removeAttribute(Bn):n.getAttribute(Bn)!==o.join(",")&&n.setAttribute(Bn,o.join(","))},yB=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=Rb(t)),Vg("title",e)},pI=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:a,onChangeClientState:l,scriptTags:u,styleTags:h,title:f,titleAttributes:m}=t;Vg("body",r),Vg("html",i),yB(f,m);const w={baseTag:lo("base",n),linkTags:lo("link",s),metaTags:lo("meta",o),noscriptTags:lo("noscript",a),scriptTags:lo("script",u),styleTags:lo("style",h)},R={},A={};Object.keys(w).forEach(b=>{const{newTags:T,oldTags:v}=w[b];T.length&&(R[b]=T),v.length&&(A[b]=w[b].oldTags)}),e&&e(),l(t,R,A)},al=null,_B=t=>{al&&cancelAnimationFrame(al),t.defer?al=requestAnimationFrame(()=>{pI(t,()=>{al=null})}):(pI(t),al=null)},vB=_B,mI=class extends V.Component{constructor(){super(...arguments);gr(this,"rendered",!1)}shouldComponentUpdate(e){return!tB(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=aB(e.get().map(s=>{const{context:o,...a}=s.props;return a}));Nb.canUseDOM?vB(i):Ng&&(r=Ng(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},ph=[],gI=t=>{const e={};for(const n of Object.keys(t))e[kb[n]||n]=t[n];return e},Xi=t=>{const e={};for(const n of Object.keys(t)){const r=Af[n];e[r||n]=t[n]}return e},yI=(t,e)=>{if(!av)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const a of s)o.includes(a)||n.removeAttribute(a);for(const a of o){const l=e[a];l==null||l===!1?n.removeAttribute(a):l===!0?n.setAttribute(a,""):n.setAttribute(a,String(l))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},zp=()=>{const t={},e={};for(const n of ph){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,gI(r)),i&&Object.assign(e,gI(i))}yI("html",t),yI("body",e)},wB=class extends V.Component{componentDidMount(){ph.push(this),zp()}componentDidUpdate(){zp()}componentWillUnmount(){const t=ph.indexOf(this);t!==-1&&ph.splice(t,1),zp()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return Q.createElement("title",Xi(e),t)}renderBase(){const{base:t}=this.props;return t?Q.createElement("base",Xi(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Q.createElement("meta",{key:n,...Xi(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Q.createElement("link",{key:n,...Xi(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Xi(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Xi(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Xi(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("noscript",{key:n,...s})})}render(){return Q.createElement(Q.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Kp,EB=(Kp=class extends V.Component{shouldComponentUpdate(t){return!J3(fI(this.props,"helmetData"),fI(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return hI(dI.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${dI.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),hI(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return Q.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((l,u)=>(l[kb[u]||u]=s[u],l),{});let{type:a}=r;switch(typeof a=="symbol"?a=a.toString():this.warnOnInvalidChildren(r,i),a){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Dg)){const i=r;r=new Dg(i.context,!0),delete n.helmetData}return Og?Q.createElement(wB,{...n}):r?Q.createElement(mI,{...n,context:r.value}):Q.createElement(Cb.Consumer,null,i=>Q.createElement(mI,{...n,context:i}))}},gr(Kp,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Kp);function TB({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return Q.useEffect(()=>{document.title=o;const a=document.querySelector('meta[name="description"]');a&&a.setAttribute("content",e);const l=document.querySelector('meta[property="og:title"]');l&&l.setAttribute("content",o);const u=document.querySelector('meta[property="og:description"]');u&&u.setAttribute("content",e)},[o,e]),g.jsxs(EB,{children:[g.jsx("title",{children:o}),g.jsx("meta",{name:"description",content:e}),g.jsx("meta",{name:"keywords",content:n}),g.jsx("link",{rel:"canonical",href:r}),g.jsx("meta",{property:"og:type",content:"website"}),g.jsx("meta",{property:"og:url",content:r}),g.jsx("meta",{property:"og:title",content:o}),g.jsx("meta",{property:"og:description",content:e}),g.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),g.jsx("meta",{property:"og:image",content:i}),g.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),g.jsx("meta",{name:"twitter:title",content:o}),g.jsx("meta",{name:"twitter:description",content:e}),g.jsx("meta",{name:"twitter:image",content:i}),s&&g.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}function IB(){return An.isNativePlatform()?g.jsxs("footer",{className:"shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full",children:[g.jsxs("div",{className:"flex flex-wrap justify-center gap-4 px-4 mb-6",children:[g.jsx(We,{to:"/contact",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Contact"}),g.jsx(We,{to:"/privacy-policy",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Privacy"}),g.jsx(We,{to:"/terms",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Terms"}),g.jsx(We,{to:"/dmca",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"DMCA"}),g.jsx(We,{to:"/disclaimer",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Disclaimer"})]}),g.jsxs("div",{className:"text-center flex flex-col items-center justify-center gap-2",children:[g.jsxs("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:["© ",new Date().getFullYear()," Apna College Bihar."]}),g.jsxs("p",{className:"text-[10px] font-bold text-slate-500 tracking-wider",children:["Made with ",g.jsx("span",{className:"text-red-500",children:"❤️"})," for BEU STUDENTS"]})]})]}):g.jsxs("footer",{className:"relative bg-white pt-20 pb-8 px-6 md:px-16 mt-auto",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"}),g.jsxs("div",{className:"container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8",children:[g.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Apna College Bihar Logo",className:"w-12 h-12 rounded-xl shadow-sm"}),g.jsxs("div",{children:[g.jsx("span",{className:"text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none",children:"APNA COLLEGE BIHAR"}),g.jsx("span",{className:"text-[8px] text-blue-600 font-bold uppercase tracking-[0.4em] mt-1.5 block",children:"Official Study Engine"})]})]}),g.jsx("p",{className:"text-slate-500 font-medium text-sm leading-relaxed max-w-sm",children:"The largest academic platform dedicated to Bihar engineering students. Free notes, PYQs, syllabus, and counselling tools."}),g.jsxs("div",{className:"flex gap-3 pt-2",children:[g.jsx("a",{href:"https://whatsapp.com/channel/0029VbC6FsH3wtb5UEDvrW0a",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:g.jsx(DO,{size:20,className:"group-hover:scale-110 transition-transform"})}),g.jsx("a",{href:"https://t.me/apnacollegebihar",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0088cc] hover:bg-[#0088cc] hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:g.jsx(Wm,{size:20,className:"group-hover:scale-110 transition-transform"})}),g.jsx("a",{href:"https://youtube.com/@apnacollegebihar",target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white hover:-translate-y-1 border border-slate-200 transition-all shadow-sm hover:shadow-lg group",children:g.jsx(MO,{size:20,className:"group-hover:scale-110 transition-transform"})})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Resources"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx(We,{to:"/notes",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"B.Tech Notes"}),g.jsx(We,{to:"/pyq",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"PYQ Papers"}),g.jsx(We,{to:"/syllabus",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"BEU Syllabus"}),g.jsx(We,{to:"/cgpa",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"CGPA Calculator"})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Company"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx(We,{to:"/contact",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Contact Us"}),g.jsx(We,{to:"/directory",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Sitemap"})]})]}),g.jsxs("div",{className:"space-y-6",children:[g.jsx("h4",{className:"text-[11px] font-black uppercase tracking-[0.3em] text-slate-900",children:"Legal"}),g.jsxs("div",{className:"flex flex-col gap-4",children:[g.jsx(We,{to:"/privacy-policy",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Privacy Policy"}),g.jsx(We,{to:"/terms",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Terms & Conditions"}),g.jsx(We,{to:"/dmca",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"DMCA Policy"}),g.jsx(We,{to:"/disclaimer",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Disclaimer"}),g.jsx(We,{to:"/delete-account",className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors",children:"Delete Account"})]})]})]}),g.jsxs("div",{className:"container mx-auto mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4",children:[g.jsxs("p",{className:"text-[11px] font-black text-slate-400 uppercase tracking-widest",children:["© ",new Date().getFullYear()," APNA COLLEGE BIHAR. ALL RIGHTS RESERVED."]}),g.jsxs("p",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1",children:["Made with ",g.jsx(bO,{size:12,className:"text-rose-500 fill-rose-500"})," in Bihar"]})]})]})}const qp=Nn("AppBlocker");function _I(){var ye;const t=An.isNativePlatform(),e=pa(),n=Vy(),{user:r,updateProfileData:i,logout:s,loading:o}=Sa(),[a,l]=V.useState(""),[u,h]=V.useState(!1),[f,m]=V.useState(!1),[w,R]=V.useState(navigator.onLine),{timerActive:A,lockMode:b}=cI(),[T,v]=V.useState(!1),[E,N]=V.useState(null),[j,F]=V.useState(!1);V.useEffect(()=>{if(t)return(async()=>{try{await hh.initialize(),await hh.showBanner({adId:"ca-app-pub-3940256099942544/6300978111",adSize:Pg.BANNER,position:bg.BOTTOM_CENTER,margin:0,isTesting:!0})}catch(ce){re(()=>import("./index2.js"),[]).then(({Toast:Ne})=>{Ne.show({text:`Ad Error: ${ce.message||"Unknown"}`})})}})(),()=>{hh.hideBanner().catch(console.error)}},[t]);const I=[{title:"BEU Tools",items:[{name:"BEU Result",path:"/beu-result",icon:g.jsx(kO,{size:16})},{name:"Attendance",path:"/attendance",icon:g.jsx(OO,{size:16})},{name:"Timetable",path:"/timetable",icon:g.jsx(Aw,{size:16})},{name:"Notes",path:"/notes",icon:g.jsx(Iw,{size:16})},{name:"PYQ Papers",path:"/pyq",icon:g.jsx(xO,{size:16})},{name:"SGPA / CGPA",path:"/cgpa",icon:g.jsx(RO,{size:16})},{name:"Syllabus",path:"/syllabus",icon:g.jsx(PO,{size:16})}]},{title:"Study Tools",items:[{name:"Study Timer",path:"/study",icon:g.jsx(Pw,{size:16})},{name:"Scientific Calc",path:"/calculator",icon:g.jsx(Sw,{size:16})},{name:"Study Resources",path:"/study-resources",icon:g.jsx(CO,{size:16})},{name:"Personal Manager",path:"/extras",icon:g.jsx(VO,{size:16})},{name:"Achievements",path:"/achievements",icon:g.jsx(SO,{size:16})}]},{title:"Counselling",items:[{name:"College Predictor",path:"/ugeac-predictor?tab=finder",icon:g.jsx(Wm,{size:16})},{name:"Rank Predictor",path:"/ugeac-predictor?tab=predictor",icon:g.jsx(Sw,{size:16})},{name:"Counselling Guide",path:"/ugeac-predictor?tab=guide",icon:g.jsx(Iw,{size:16})}]}];V.useEffect(()=>{const G=()=>R(!0),ce=()=>R(!1);return window.addEventListener("online",G),window.addEventListener("offline",ce),()=>{window.removeEventListener("online",G),window.removeEventListener("offline",ce)}},[]),V.useEffect(()=>{h(!1),(async()=>{if(!(!r||!w)&&!t&&xg)try{if(await Notification.requestPermission()==="granted"){const Ne=await x3(xg,{vapidKey:R3});Ne&&await Es(br(Ct,"users",r.uid),{fcmToken:Ne})}}catch{}})()},[r,w,t]),V.useEffect(()=>{if(!r||!r.uid||!w)return;const G=new Date,ce=rl(ls(Ct,"nudges"),Vn("toUserId","==",r.uid),Vn("timestamp",">=",G)),Ne=zU(ce,H=>{H.docChanges().forEach(ee=>{if(ee.type==="added"){const je=`📚 ${ee.doc.data().fromUserName||"Scholar"} says: padh lo padh lo kam dega!`;de(je,{duration:6e3,icon:"💡",style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Study Nudge 📚",{body:je,icon:"/logo-acb.png"})}})});if(!t)return()=>Ne();(async()=>{var Lt;const H=new Date().toLocaleDateString("en-CA"),ee=new Date().getHours();if(ee>=5){const Oe=`morning_greeting_${H}`;if(!localStorage.getItem(Oe)){const Xe=rl(ls(Ct,"StudySessions"),Vn("userId","==",r.uid),Vn("date","==",H)),Mt=!(await bu(Xe)).empty||A||ee>=8,_n=r.name||"Bihari Babu";let wt="",Fe="";Mt?(wt="Good Morning Biru 🌞",Fe=`Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄

Aaj ka mission simple hai:

Bakchodi limited 😜
Mehnat unlimited 💪
Tension zero 😌

Aur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅

Din mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`):(wt=`Good Morning Bhai ${_n} ☀️`,Fe=`Uth ja bidu 😄, kitna soyega?

Naya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.

Chai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.

Aur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏

Chal bhai, aaj ka din phod dete hain. 💪🔥
Good Morning, have a great day! 🌞✨`),de.custom(at=>g.jsxs("div",{className:`${at.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`,children:[g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-xl",children:"🌅"}),g.jsx("h4",{className:"text-xs font-black uppercase tracking-wider text-amber-400",children:wt})]}),g.jsx("button",{onClick:()=>de.dismiss(at.id),className:"text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg",children:"Close"})]}),g.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300",children:Fe})]}),{duration:15e3}),"Notification"in window&&Notification.permission==="granted"&&new Notification(wt,{body:Fe.replace(/\n\n/g," "),icon:"/logo-acb.png"}),localStorage.setItem(Oe,"true")}}let le=!1;if(ee>=8){const Oe=`timetable_alert_${H}`;if(!localStorage.getItem(Oe)){const Gn=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],_n=(((Lt=r.timetableV3)==null?void 0:Lt[Gn])||[]).filter(wt=>wt.subject&&wt.subject.trim()!=="");if(_n.length>0){const Fe=`🗓️ Aaj ki Classes:
${_n.map(at=>`• ${at.startTime||""}: ${at.subject}`).join(`
`)}
Time par pahunch jana biru, padhai shuru karo! 😉`;de(Fe,{duration:8e3,icon:"🗓️",style:{background:"#f8fafc",color:"#0f172a",fontWeight:"800",fontSize:"11px",border:"1px solid #e2e8f0"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Timetable Classes Alert",{body:Fe,icon:"/logo-acb.png"})}localStorage.setItem(Oe,"true"),le=!0}}const je=()=>{var Oe;if(ee>=6){const Xe=`attendance_alert_${H}`;if(!localStorage.getItem(Xe)){const Mt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],wt=(((Oe=r.timetableV3)==null?void 0:Oe[Mt])||[]).filter(Fe=>Fe.subject&&Fe.subject.trim()!=="").map(Fe=>Fe.subject.trim().toLowerCase());if(wt.length>0){const Fe=r.attendance||[],at=[];wt.forEach(Dn=>{const sn=Fe.find(Qn=>Qn.name.trim().toLowerCase()===Dn);if(sn){const Qn=sn.total>0?Number((sn.present/sn.total*100).toFixed(1)):0,Aa=qe=>qe<75?0:qe<=80?1:qe<=85?2:qe<=90?3:qe<=95?4:5;Qn<75?at.push({type:"danger",text:`🚨 Critical Attendance Alert: ${sn.name} me attendance sirf ${Qn}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`}):at.push({type:"success",text:`🔥 Gazab Bhai! ${sn.name} me attendance ${Qn}% hai. Sessional me +${Aa(Qn)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`})}}),at.forEach((Dn,sn)=>{setTimeout(()=>{t?sl.schedule({notifications:[{title:"Attendance Alert",body:Dn.text,id:new Date().getTime()%1e5+sn}]}):(de(Dn.text,{duration:8e3,icon:Dn.type==="danger"?"🚨":"🔥",style:{background:Dn.type==="danger"?"#fecaca":"#d1fae5",color:Dn.type==="danger"?"#991b1b":"#065f46",fontWeight:"800",fontSize:"11px",border:`1px solid ${Dn.type==="danger"?"#fca5a5":"#6ee7b7"}`}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Attendance Alert",{body:Dn.text,icon:"/logo-acb.png"}))},sn*1e3)})}localStorage.setItem(Xe,"true")}}};le?setTimeout(je,2e3):je();const De=async()=>{const Oe=`target_check_${H}`;if(!localStorage.getItem(Oe)){const Xe=rl(ls(Ct,"Tasks"),Vn("userId","==",r.uid),Vn("date","==",H)),Gn=await bu(Xe);if(Gn.empty){const Mt="🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥";t?sl.schedule({notifications:[{title:"Target Alert",body:Mt,id:new Date().getTime()%1e5}]}):de(Mt,{duration:8e3,icon:"🎯",style:{background:"#fffbeb",color:"#b45309",fontWeight:"800",fontSize:"11px",border:"1px solid #fde68a"}})}else{const Mt=`🎯 Targets Setup: Aaj ke ${Gn.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`;t?sl.schedule({notifications:[{title:"Targets Setup",body:Mt,id:new Date().getTime()%1e5}]}):de(Mt,{duration:8e3,icon:"✅",style:{background:"#f0fdf4",color:"#166534",fontWeight:"800",fontSize:"11px",border:"1px solid #bbf7d0"}})}localStorage.setItem(Oe,"true")}};le?setTimeout(De,4e3):setTimeout(De,1500)})();const ne=async()=>{if(A)return;const H=new Date().toLocaleDateString("en-CA"),ee=rl(ls(Ct,"StudySessions"),Vn("userId","==",r.uid),Vn("date","==",H));if((await bu(ee)).docs.reduce((Oe,Xe)=>Oe+(Number(Xe.data().duration)||0),0)>=10800)return;const De=rl(ls(Ct,"Tasks"),Vn("userId","==",r.uid),Vn("date","==",H),Vn("done","==",!1));if(!(await bu(De)).empty){const Oe="📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";t?sl.schedule({notifications:[{title:"Padhai Remainder! 📚",body:Oe,id:new Date().getTime()%1e5}]}):(de(Oe,{duration:9e3,icon:"✍️",style:{background:"#fff1f2",color:"#be123c",fontWeight:"900",fontSize:"11px",border:"1px solid #fecdd3"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Padhai Remainder! 📚",{body:Oe,icon:"/logo-acb.png"}))}},oe=setTimeout(ne,12e4),Ae=setInterval(ne,9e5);return()=>{Ne(),clearTimeout(oe),clearInterval(Ae)}},[r,A,w,b]);const _=async G=>{if(G.preventDefault(),!(a.length<10)){m(!0);try{await i({phone:a}),h(!1)}catch{}finally{m(!1)}}};V.useEffect(()=>{if(t){A?qp.lockApp().catch(console.error):qp.unlockApp().catch(console.error);const G=H3.addListener("appStateChange",({isActive:ce})=>{ce&&A&&qp.lockApp().catch(console.error)});return()=>{G.then(ce=>ce.remove())}}},[A,b,t]),V.useEffect(()=>{t&&sl.requestPermissions().catch(console.error)},[t]);const S=(ye=r==null?void 0:r.metadata)!=null&&ye.creationTime?new Date(r.metadata.creationTime).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recently",k=()=>{const{timerActive:G,timerTime:ce}=cI();if(!G||e.pathname==="/study")return null;const Ne=Math.floor(ce%3600/60),q=ce%60;return g.jsxs("div",{onClick:()=>n("/study"),className:"flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse",children:[g.jsx(Pw,{size:14,className:"text-blue-500 group-hover:text-white transition-colors"}),g.jsxs("span",{className:"text-[10px] md:text-xs font-black text-white tabular-nums tracking-tighter",children:[Ne.toString().padStart(2,"0"),":",q.toString().padStart(2,"0")]})]})},C=(G=>G==="/"?"Home":G.includes("/study-resources")?"Study Resources":G.includes("/study")?"Study Zone":G.includes("/notes")?"B.Tech Notes":G.includes("/pyq")?"PYQ Papers":G.includes("/syllabus")?"BEU Syllabus":G.includes("/cgpa")?"CGPA Calculator":G.includes("/ugeac-predictor")?"UGEAC Predictor":G.includes("/calculator")?"Calculator":G.includes("/achievements")?"Achievements":G.includes("/groups")?"Study Groups":G.includes("/timetable")?"BEU Timetable":G.includes("/attendance")?"BEU Attendance Tracker":G.includes("/extras")?"Personal Manager":G.includes("/calendar")?"Calendar":G.includes("/beu-result")?"BEU Result":G.includes("/admin")?"Admin Panel":"ACB Hub")(e.pathname),x=({to:G,icon:ce,label:Ne})=>{const q=e.pathname===G||G!=="/"&&e.pathname.startsWith(G);return g.jsxs(We,{to:G,onClick:()=>v(!1),className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${q?"bg-blue-600 text-white shadow-md shadow-blue-600/20":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[g.jsx("div",{className:`${q?"text-white":"text-slate-400"}`,children:typeof ce=="function"?g.jsx(ce,{size:18}):ce}),g.jsx("span",{className:"text-[12px] uppercase tracking-wider font-black",children:Ne})]})};return g.jsxs("div",{className:"flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative",children:[g.jsx(TB,{title:C}),t&&g.jsxs("header",{className:"bg-white border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0 px-4 py-3 flex items-center justify-between",children:[g.jsx("button",{onClick:()=>n(-1),className:"p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors active:scale-95 flex items-center justify-center",children:g.jsx(AO,{size:20,strokeWidth:3})}),g.jsx("div",{className:"flex items-center justify-center",children:g.jsx("span",{className:"text-[12px] font-black tracking-widest uppercase text-slate-900 truncate px-2",children:C})}),g.jsx("div",{className:"flex items-center gap-2",children:g.jsx(k,{})})]}),!t&&g.jsx("header",{className:"bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0",children:g.jsxs("div",{className:"max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3 group cursor-pointer",onClick:()=>n("/"),children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"}),g.jsxs("div",{className:"block min-w-0",children:[g.jsx("span",{className:"text-[11px] sm:text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none truncate",children:"Apna College Bihar"}),g.jsx("span",{className:"text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block",children:"Official App"})]})]}),g.jsxs("nav",{className:"hidden lg:flex items-center gap-6",children:[g.jsx(We,{to:"/",className:"text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:"Home"}),I.map((G,ce)=>g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>N(E===ce?null:ce),className:"flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:[G.title,g.jsx(xw,{size:12,className:`transition-transform duration-200 ${E===ce?"rotate-180":""}`})]}),E===ce&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>N(null)}),g.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top",children:G.items.map(Ne=>g.jsxs(We,{to:Ne.path,className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold",onClick:()=>N(null),children:[g.jsx("span",{className:"w-4 h-4 text-slate-500",children:Ne.icon}),g.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest",children:Ne.name})]},Ne.name))})]})]},G.title))]}),g.jsxs("div",{className:"flex items-center gap-3",children:[o?g.jsx("div",{className:"w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}):r?g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(k,{}),g.jsxs("div",{className:`relative ${t?"hidden":"hidden lg:block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_v20.apk",download:"ApnaCollegeBihar_v20.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>F(!j),className:"flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group",children:[g.jsx("div",{className:"w-5 h-5 rounded-lg overflow-hidden bg-slate-100",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Profile",className:"w-full h-full object-cover"})}),g.jsx("span",{className:"hidden md:inline",children:"My Profile"}),g.jsx(xw,{size:12,className:`transition-transform duration-300 ${j?"rotate-180":""}`})]}),j&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>F(!1)}),g.jsxs("div",{className:"absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right",children:[g.jsxs("div",{className:"px-5 py-5 border-b border-slate-100 mb-2 text-center",children:[g.jsx("div",{className:"w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"ACB",className:"w-full h-full object-cover"})}),g.jsx("p",{className:"text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1",children:"ACB Official Account"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-900 truncate",children:r.email}),g.jsxs("div",{className:"flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold",children:[g.jsx(Aw,{size:10,className:"text-blue-500"}),g.jsxs("span",{children:["Joined: ",g.jsx("strong",{className:"text-slate-900",children:S})]})]})]}),g.jsxs("div",{className:"space-y-1",children:[((r==null?void 0:r.email)==="prince8694@gmail.com"||(r==null?void 0:r.email)==="prince86944@gmail.com"||(r==null?void 0:r.role)==="SUPER_ADMIN")&&g.jsxs(We,{to:"/dashboard/admin",className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-blue-600 rounded-2xl transition-all group",children:[g.jsx("div",{className:"p-2 bg-blue-50 group-hover:bg-blue-100 rounded-xl transition-colors",children:g.jsx(bw,{size:14})}),g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Admin Panel"})]}),g.jsxs("button",{onClick:async()=>{F(!1);const G={title:"Apna College Bihar App - No More Distractions!",text:`📱 Padhai ke waqt Instagram/Reels se distract hote ho? Apna College Bihar App try karo! Isme "Strict Study Blocker" hai!

Steps:
1. App Download karke Dashboard me jao.
2. Niche "Focus Mode" on karo.
3. Timer set karo aur padhai shuru! (Baki saare apps block ho jayenge)

Saare Notes aur PYQs bhi yahi milenge!
Download now: `,url:"https://apnacollegebihar.online/apna-college-bihar-v20.apk"};try{navigator.share?await navigator.share(G):(await navigator.clipboard.writeText(G.text+" "+G.url),re(()=>Promise.resolve().then(()=>wO),void 0).then(ce=>ce.toast.success("App link copied to clipboard!")))}catch{}},className:"flex items-center gap-3 w-full p-3 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 rounded-2xl transition-all group",children:[g.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-emerald-600/10 rounded-xl transition-colors",children:g.jsx(Wm,{size:14})}),g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Share App Link"})]}),g.jsxs("button",{onClick:()=>s(),className:"flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group",children:[g.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors",children:g.jsx(kw,{size:14})}),g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Logout Session"})]})]})]})]})]})]}):g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(k,{}),g.jsxs("div",{className:`relative ${t?"hidden":"hidden lg:block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_v20.apk",download:"ApnaCollegeBihar_v20.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsx(We,{to:"/login",className:"hidden md:block px-4 py-2.5 md:px-5 md:py-3 text-slate-600 hover:text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-colors",children:"Login"}),g.jsx(We,{to:"/signup",className:"px-3 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 active:scale-95 shrink-0",children:"Sign Up"})]}),g.jsx("button",{onClick:()=>v(!0),className:"flex lg:hidden items-center justify-center p-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors ml-1 shrink-0",children:g.jsx(NO,{size:24})})]})]})}),g.jsxs("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col",children:[g.jsx("div",{className:`w-full grow shrink-0 pb-24 lg:pb-8 min-h-[80vh] ${e.pathname==="/"?"":"p-4 md:p-6 lg:p-8 max-w-7xl mx-auto"}`,children:g.jsx(Ly,{})}),g.jsx(IB,{})]}),T&&g.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden",onClick:()=>v(!1)}),g.jsxs("aside",{className:`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${T?"translate-x-0":"translate-x-full"}`,children:[g.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50",children:[g.jsx("span",{className:"text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none",children:"Navigation Menu"}),g.jsx("button",{onClick:()=>v(!1),className:"text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200",children:g.jsx(LO,{size:16,strokeWidth:3})})]}),g.jsx("div",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar",children:I.map(G=>g.jsxs("div",{children:[g.jsxs("p",{className:"px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[g.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," ",G.title]}),g.jsx("div",{className:"space-y-1",children:G.items.map(ce=>g.jsx(x,{to:ce.path,icon:()=>ce.icon,label:ce.name},ce.name))})]},G.title))}),g.jsx("div",{className:"p-4 border-t border-slate-100 bg-slate-50",children:g.jsxs("button",{onClick:()=>s(),className:"w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200",children:[g.jsx(kw,{size:16,strokeWidth:2.5})," Logout Session"]})})]}),u&&w&&g.jsx("div",{className:"fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:g.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:g.jsx(bw,{size:32})}),g.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),g.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:_,className:"space-y-6",children:[g.jsxs("div",{className:"flex gap-2",children:[g.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),g.jsx("input",{type:"tel",maxLength:10,value:a,onChange:G=>l(G.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),g.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})})]})}const SB=()=>{var h;const{user:t,loading:e,updateProfileData:n,logout:r}=Sa(),[i,s]=V.useState(""),[o,a]=V.useState(!1);if(e)return g.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),g.jsx(Bh,{to:"/login",replace:!0});const l=!(t!=null&&t.phone)||((h=t==null?void 0:t.phone)==null?void 0:h.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",u=async f=>{if(f.preventDefault(),i.length<10)return Wu.error("Enter a valid 10-digit number!");a(!0);try{await n({phone:i}),Wu.success("Mobile number linked securely!")}catch{Wu.error("Failed to save. Try again.")}finally{a(!1)}};return l?g.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(cA,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[g.jsxs("div",{className:"relative group",children:[g.jsx(Rw,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),g.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),g.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),g.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[g.jsx(Rw,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),g.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):g.jsx(Ly,{})},AB=()=>{const{user:t,loading:e,ROLES:n}=Sa();return e?g.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?g.jsx(Ly,{}):g.jsx(Bh,{to:"/",replace:!0})},xB=Q.lazy(()=>re(()=>import("./Home.js"),["assets/Home.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/map-pin.js","assets/briefcase.js","assets/check-circle.js","assets/download.js","assets/arrow-right.js","assets/chevron-right.js","assets/arrow-up-right.js","assets/layers.js","assets/database.js","assets/target.js","assets/zap.js","assets/plus.js","assets/minus.js"]));Q.lazy(()=>re(()=>import("./HomeOverview.js"),["assets/HomeOverview.js","assets/sparkles.js","assets/users.js","assets/flame.js","assets/check-circle.js","assets/zap.js","assets/arrow-right.js"]));const kB=Q.lazy(()=>re(()=>import("./Author.js"),["assets/Author.js","assets/target.js","assets/check-circle.js","assets/mail.js"])),vI=Q.lazy(()=>re(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/arrow-right.js","assets/users.js","assets/briefcase.js","assets/external-link.js"])),RB=Q.lazy(()=>re(()=>import("./Notifications.js"),["assets/Notifications.js","assets/search.js","assets/arrow-up-right.js"])),bB=Q.lazy(()=>re(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js"])),PB=Q.lazy(()=>re(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js"])),CB=Q.lazy(()=>re(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/pdfHelper.js","assets/check-circle-2.js","assets/zap.js","assets/layers.js","assets/download.js","assets/info.js","assets/building-2.js","assets/chevron-up.js","assets/trash-2.js","assets/plus.js","assets/wifi.js","assets/search.js","assets/map-pin.js","assets/external-link.js","assets/UgeacPredictor.css"])),Hp=Q.lazy(()=>re(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),Wp=Q.lazy(()=>re(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),wI=Q.lazy(()=>re(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),NB=Q.lazy(()=>re(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/check-circle.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/bar-chart-3.js"])),DB=Q.lazy(()=>re(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js"])),OB=Q.lazy(()=>re(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/external-link.js"])),VB=Q.lazy(()=>re(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),LB=Q.lazy(()=>re(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/bar-chart-3.js","assets/search.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),MB=Q.lazy(()=>re(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js"])),jB=Q.lazy(()=>re(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),FB=Q.lazy(()=>re(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/chevron-right.js"])),UB=Q.lazy(()=>re(()=>import("./Timetable.js"),["assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/info.js","assets/plus.js"])),BB=Q.lazy(()=>re(()=>import("./Attendance.js"),["assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/minus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),$B=Q.lazy(()=>re(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/external-link.js","assets/info.js"])),zB=Q.lazy(()=>re(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js"])),qB=Q.lazy(()=>re(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),HB=Q.lazy(()=>re(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/database.js","assets/eye.js"])),WB=Q.lazy(()=>re(()=>import("./Terms.js"),["assets/Terms.js","assets/check-circle-2.js"])),KB=Q.lazy(()=>re(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/trash-2.js","assets/log-in.js"])),GB=Q.lazy(()=>re(()=>import("./About.js"),["assets/About.js","assets/sparkles.js","assets/users.js"])),QB=Q.lazy(()=>re(()=>import("./Contact.js"),["assets/Contact.js","assets/check-circle-2.js","assets/help-circle.js"])),YB=Q.lazy(()=>re(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js","assets/arrow-right.js"])),JB=Q.lazy(()=>re(()=>import("./DMCAPolicy.js"),["assets/DMCAPolicy.js","assets/arrow-left.js","assets/mail.js"])),XB=Q.lazy(()=>re(()=>import("./Disclaimer.js"),["assets/Disclaimer.js","assets/arrow-left.js","assets/alert-circle.js"])),EI=Q.lazy(()=>re(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/minus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/BeuCgpa.js","assets/check-circle.js","assets/chevron-up.js","assets/bar-chart-3.js","assets/BeuResult.js"])),TI=Q.lazy(()=>re(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/arrow-left.js","assets/save.js"])),II=Q.lazy(()=>re(()=>import("./CollegeProfile.js"),["assets/CollegeProfile.js","assets/collegeData.js","assets/building-2.js","assets/arrow-right.js","assets/chevron-right.js","assets/check-circle.js","assets/map-pin.js","assets/download.js","assets/layers.js","assets/users.js","assets/target.js","assets/wifi.js","assets/clock.js"])),SI=Q.lazy(()=>re(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/cpu.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),ZB=Q.lazy(()=>re(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/check-circle-2.js"])),AI=Q.lazy(()=>re(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),e9=Q.lazy(()=>re(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/check-circle-2.js","assets/users.js"])),t9=Q.lazy(()=>re(()=>import("./SitemapDirectory.js"),["assets/SitemapDirectory.js","assets/UgeacData.js","assets/building-2.js","assets/cpu.js","assets/arrow-right.js"])),n9=Q.lazy(()=>re(()=>import("./CollegeDirectory.js"),["assets/CollegeDirectory.js","assets/collegeData.js","assets/building-2.js","assets/search.js","assets/target.js","assets/map-pin.js","assets/layers.js","assets/check-circle.js","assets/chevron-right.js"])),xI=Q.lazy(()=>re(()=>import("./CompareColleges.js"),["assets/CompareColleges.js","assets/UgeacData.js","assets/layers.js","assets/arrow-right.js"])),r9=Q.lazy(()=>re(()=>import("./PercentilePredictor.js"),[]));function i9(){return g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function s9(){var A,b,T,v;const{user:t,updateProfileData:e,logout:n}=Sa(),[r,i]=V.useState(""),[s,o]=V.useState(""),[a,l]=V.useState(""),[u,h]=V.useState(""),[f,m]=V.useState(!1);if(V.useEffect(()=>{t&&(i(t.name&&t.name!=="Scholar"?t.name:""),o(t.collegeName||""),l(t.district||""),h(t.phone&&t.phone!=="NOT LINKED"?t.phone:""))},[t]),!(t&&(!(t!=null&&t.phone)||((A=t==null?void 0:t.phone)==null?void 0:A.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED"||!(t!=null&&t.name)||((b=t==null?void 0:t.name)==null?void 0:b.trim())===""||(t==null?void 0:t.name)==="Scholar"||!(t!=null&&t.collegeName)||((T=t==null?void 0:t.collegeName)==null?void 0:T.trim())===""||!(t!=null&&t.district)||((v=t==null?void 0:t.district)==null?void 0:v.trim())==="")))return null;const R=async E=>{if(E.preventDefault(),!r.trim())return de.error("Please enter your name!");if(!s.trim())return de.error("Please enter your college name!");if(!a.trim())return de.error("Please enter your district name!");if(u.length<10)return de.error("Enter a valid 10-digit mobile number!");m(!0);try{await e({name:r.trim(),collegeName:s.trim(),district:a.trim(),phone:u}),de.success("Profile setup completed successfully!")}catch{de.error("Failed to save. Try again.")}finally{m(!1)}};return g.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(cA,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Profile Setup"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-6",children:"Please complete your details to unlock and secure your college portal access."}),g.jsxs("form",{onSubmit:R,className:"w-full space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Full Name"}),g.jsx("input",{type:"text",value:r,onChange:E=>i(E.target.value),placeholder:"YOUR FULL NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"College Name"}),g.jsx("input",{type:"text",value:s,onChange:E=>o(E.target.value),placeholder:"YOUR COLLEGE NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"District"}),g.jsx("input",{type:"text",value:a,onChange:E=>l(E.target.value),placeholder:"YOUR DISTRICT NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Mobile Number"}),g.jsx("input",{type:"tel",value:u,onChange:E=>h(E.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsx("button",{type:"submit",disabled:f,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:f?"Saving details...":"Save & Continue"})]}),g.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function o9(){const{user:t,loading:e}=Sa(),[n,r]=V.useState(!0),[i,s]=V.useState(window.innerWidth<768),o=An.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const l=o||sessionStorage.getItem("standalone")==="true";if(V.useEffect(()=>{const u=()=>s(window.innerWidth<768);return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),V.useEffect(()=>{o&&hh.initialize().catch(console.error)},[o]),V.useEffect(()=>{const u=setTimeout(()=>{r(!1)},1500);return e||(r(!1),clearTimeout(u)),()=>clearTimeout(u)},[e]),n)return g.jsxs("div",{className:"min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return g.jsxs(g.Fragment,{children:[g.jsx(lA,{position:"top-right"}),g.jsx(s9,{}),g.jsx(Q.Suspense,{fallback:g.jsx(i9,{}),children:g.jsxs(bD,{children:[g.jsx(X,{path:"/hub",element:g.jsx(vI,{})}),g.jsx(X,{path:"/login",element:g.jsx(bB,{})}),g.jsx(X,{path:"/signup",element:g.jsx(PB,{})}),g.jsx(X,{path:"/privacy-policy",element:g.jsx(HB,{})}),g.jsx(X,{path:"/terms",element:g.jsx(WB,{})}),g.jsx(X,{path:"/delete-account",element:g.jsx(KB,{})}),g.jsx(X,{path:"/about",element:g.jsx(GB,{})}),g.jsx(X,{path:"/author",element:g.jsx(kB,{})}),g.jsx(X,{path:"/contact",element:g.jsx(QB,{})}),g.jsx(X,{path:"/dmca",element:g.jsx(JB,{})}),g.jsx(X,{path:"/disclaimer",element:g.jsx(XB,{})}),g.jsx(X,{path:"/directory",element:l?g.jsx(Bh,{to:"/",replace:!0}):g.jsx(t9,{})}),o&&g.jsx(X,{path:"/",element:g.jsx(vI,{})}),g.jsxs(X,{element:g.jsx(_I,{}),children:[!o&&g.jsx(X,{path:"/",element:g.jsx(xB,{})}),g.jsx(X,{path:"/notifications",element:g.jsx(RB,{})}),g.jsx(X,{path:"/search/:keyword",element:g.jsx(YB,{})}),g.jsx(X,{path:"/notes",element:g.jsx(Hp,{})}),g.jsx(X,{path:"/notes/:branchId/:semesterId",element:g.jsx(Hp,{})}),g.jsx(X,{path:"/notes/:branchId",element:g.jsx(Hp,{})}),g.jsx(X,{path:"/pyq",element:g.jsx(Wp,{})}),g.jsx(X,{path:"/pyq/:branchId/:semesterId",element:g.jsx(Wp,{})}),g.jsx(X,{path:"/pyq/:branchId",element:g.jsx(Wp,{})}),g.jsx(X,{path:"/attendance",element:g.jsx(BB,{})}),g.jsx(X,{path:"/timetable",element:g.jsx(UB,{})}),g.jsx(X,{path:"/study",element:g.jsx(DB,{})}),g.jsx(X,{path:"/study-resources",element:g.jsx(OB,{})}),g.jsx(X,{path:"/calculator",element:g.jsx(VB,{})}),g.jsx(X,{path:"/groups",element:g.jsx(jB,{})}),g.jsx(X,{path:"/groups/:groupId",element:g.jsx(FB,{})}),g.jsx(X,{path:"/achievements",element:g.jsx(MB,{})}),g.jsx(X,{path:"/extras",element:g.jsx(zB,{})}),g.jsx(X,{path:"/calendar",element:g.jsx(qB,{})}),g.jsx(X,{path:"/cgpa",element:g.jsx(NB,{})}),g.jsx(X,{path:"/ugeac-predictor",element:g.jsx(CB,{})}),g.jsx(X,{path:"/beu-result",element:g.jsx($B,{})}),g.jsx(X,{path:"/syllabus",element:g.jsx(wI,{})}),g.jsx(X,{path:"/syllabus/:branchId",element:g.jsx(wI,{})}),g.jsx(X,{path:"/colleges",element:g.jsx(n9,{})}),g.jsx(X,{path:"/college/:collegeSlug",element:g.jsx(II,{})}),g.jsx(X,{path:"/college/:collegeSlug/:section",element:g.jsx(II,{})}),g.jsx(X,{path:"/branch/:branchId",element:g.jsx(SI,{})}),g.jsx(X,{path:"/branch/:branchId/:section",element:g.jsx(SI,{})}),g.jsx(X,{path:"/ugeac/:page",element:g.jsx(ZB,{})}),g.jsx(X,{path:"/subject/:subjectSlug",element:g.jsx(AI,{})}),g.jsx(X,{path:"/subject/:subjectSlug/:section",element:g.jsx(AI,{})}),g.jsx(X,{path:"/hackathons",element:g.jsx(e9,{})}),g.jsx(X,{path:"/compare",element:g.jsx(xI,{})}),g.jsx(X,{path:"/compare/:college1VsCollege2",element:g.jsx(xI,{})}),g.jsx(X,{path:"/percentile-predictor",element:g.jsx(r9,{})}),g.jsx(X,{path:"/beu/:tool",element:g.jsx(EI,{})}),g.jsx(X,{path:"/beu/:tool/:keyword",element:g.jsx(EI,{})}),g.jsx(X,{path:"/feature/:feature",element:g.jsx(TI,{})}),g.jsx(X,{path:"/feature/:feature/:keyword",element:g.jsx(TI,{})})]}),g.jsx(X,{element:g.jsx(SB,{}),children:g.jsx(X,{element:g.jsx(_I,{}),children:g.jsx(X,{element:g.jsx(AB,{}),children:g.jsx(X,{path:"/dashboard/admin",element:g.jsx(LB,{})})})})}),g.jsx(X,{path:"*",element:g.jsx(Bh,{to:"/",replace:!0})})]})})]})}catch{return g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:g.jsx(IO,{size:32})}),g.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),g.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}const kI=document.getElementById("root");if(kI)try{Gp.createRoot(kI).render(g.jsx(Q.StrictMode,{children:g.jsx(Nb,{children:g.jsx(z3,{children:g.jsx(q3,{children:g.jsx(LD,{children:g.jsx(o9,{})})})})})}))}catch{}export{W_ as $,SO as A,Iw as B,Aw as C,xw as D,Vn as E,xO as F,RO as G,l9 as H,pd as I,Es as J,br as K,We as L,DO as M,L9 as N,DR as O,RT as P,F9 as Q,Q as R,TB as S,Pw as T,VO as U,U9 as V,M9 as W,LO as X,MO as Y,j9 as Z,re as _,Sa as a,cI as a0,IO as a1,ej as a2,k9 as a3,bO as a4,An as a5,Nn as a6,N9 as a7,D9 as a8,Wu as a9,SL as aA,_9 as aB,iM as aC,h9 as aD,I9 as aE,S9 as aF,T9 as aG,ZV as aH,E9 as aI,nE as aJ,tE as aK,P9 as aL,b9 as aM,EL as aN,Mr as aO,A9 as aP,Hw as aQ,YL as aR,ox as aS,ix as aT,wO as aU,B9 as aV,Sf as aa,iI as ab,m9 as ac,IL as ad,p9 as ae,v9 as af,mM as ag,Qu as ah,y9 as ai,XT as aj,Gs as ak,ai as al,li as am,rr as an,nM as ao,R9 as ap,ci as aq,kV as ar,x9 as as,w9 as at,f9 as au,g9 as av,JT as aw,NL as ax,u9 as ay,d9 as az,O9 as b,ls as c,Ct as d,PO as e,Sw as f,bu as g,Wm as h,AO as i,g as j,bw as k,V9 as l,Ce as m,cA as n,zU as o,kw as p,rl as q,V as r,IB as s,kO as t,Vy as u,OO as v,CO as w,de as x,c9 as y,pa as z};
