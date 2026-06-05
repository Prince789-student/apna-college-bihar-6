var fR=Object.defineProperty;var pR=(t,e,n)=>e in t?fR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fn=(t,e,n)=>(pR(t,typeof e!="symbol"?e+"":e,n),n);function mR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Bj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var PE={exports:{}},Ac={},CE={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=Symbol.for("react.element"),gR=Symbol.for("react.portal"),yR=Symbol.for("react.fragment"),_R=Symbol.for("react.strict_mode"),vR=Symbol.for("react.profiler"),wR=Symbol.for("react.provider"),ER=Symbol.for("react.context"),TR=Symbol.for("react.forward_ref"),IR=Symbol.for("react.suspense"),SR=Symbol.for("react.memo"),AR=Symbol.for("react.lazy"),Hy=Symbol.iterator;function RR(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var bE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xE=Object.assign,NE={};function no(t,e,n){this.props=t,this.context=e,this.refs=NE,this.updater=n||bE}no.prototype.isReactComponent={};no.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};no.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function OE(){}OE.prototype=no.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=NE,this.updater=n||bE}var Dp=Op.prototype=new OE;Dp.constructor=Op;xE(Dp,no.prototype);Dp.isPureReactComponent=!0;var Wy=Array.isArray,DE=Object.prototype.hasOwnProperty,Lp={current:null},LE={key:!0,ref:!0,__self:!0,__source:!0};function VE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)DE.call(e,r)&&!LE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:il,type:t,key:s,ref:o,props:i,_owner:Lp.current}}function kR(t,e){return{$$typeof:il,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===il}function PR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qy=/\/+/g;function Yh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PR(""+t.key):e.toString(36)}function iu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case il:case gR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yh(o,0):r,Wy(i)?(n="",t!=null&&(n=t.replace(qy,"$&/")+"/"),iu(i,e,n,"",function(c){return c})):i!=null&&(Vp(i)&&(i=kR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Yh(s,l);o+=iu(s,e,n,u,i)}else if(u=RR(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Yh(s,l++),o+=iu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var r=[],i=0;return iu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},su={transition:null},bR={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:su,ReactCurrentOwner:Lp};function ME(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!Vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=no;se.Fragment=yR;se.Profiler=vR;se.PureComponent=Op;se.StrictMode=_R;se.Suspense=IR;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bR;se.act=ME;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)DE.call(e,u)&&!LE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:il,type:t.type,key:i,ref:s,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:ER,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wR,_context:t},t.Consumer=t};se.createElement=VE;se.createFactory=function(t){var e=VE.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:TR,render:t}};se.isValidElement=Vp;se.lazy=function(t){return{$$typeof:AR,_payload:{_status:-1,_result:t},_init:CR}};se.memo=function(t,e){return{$$typeof:SR,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=su.transition;su.transition={};try{t()}finally{su.transition=e}};se.unstable_act=ME;se.useCallback=function(t,e){return At.current.useCallback(t,e)};se.useContext=function(t){return At.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return At.current.useDeferredValue(t)};se.useEffect=function(t,e){return At.current.useEffect(t,e)};se.useId=function(){return At.current.useId()};se.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return At.current.useMemo(t,e)};se.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};se.useRef=function(t){return At.current.useRef(t)};se.useState=function(t){return At.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return At.current.useTransition()};se.version="18.3.1";CE.exports=se;var O=CE.exports;const Q=Sc(O),xR=mR({__proto__:null,default:Q},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NR=O,OR=Symbol.for("react.element"),DR=Symbol.for("react.fragment"),LR=Object.prototype.hasOwnProperty,VR=NR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MR={key:!0,ref:!0,__self:!0,__source:!0};function UE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LR.call(e,r)&&!MR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OR,type:t,key:s,ref:o,props:i,_owner:VR.current}}Ac.Fragment=DR;Ac.jsx=UE;Ac.jsxs=UE;PE.exports=Ac;var A=PE.exports,ef={},FE={exports:{}},Wt={},jE={exports:{}},$E={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,j){var z=q.length;q.push(j);e:for(;0<z;){var Z=z-1>>>1,he=q[Z];if(0<i(he,j))q[Z]=j,q[z]=he,z=Z;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var j=q[0],z=q.pop();if(z!==j){q[0]=z;e:for(var Z=0,he=q.length,lt=he>>>1;Z<lt;){var Ye=2*(Z+1)-1,dr=q[Ye],kt=Ye+1,Kt=q[kt];if(0>i(dr,z))kt<he&&0>i(Kt,dr)?(q[Z]=Kt,q[kt]=z,Z=kt):(q[Z]=dr,q[Ye]=z,Z=Ye);else if(kt<he&&0>i(Kt,z))q[Z]=Kt,q[kt]=z,Z=kt;else break e}}return j}function i(q,j){var z=q.sortIndex-j.sortIndex;return z!==0?z:q.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,w=!1,b=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(q){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=q)r(c),j.sortIndex=j.expirationTime,e(u,j);else break;j=n(c)}}function D(q){if(k=!1,T(q),!b)if(n(u)!==null)b=!0,fi(U);else{var j=n(c);j!==null&&pi(D,j.startTime-q)}}function U(q,j){b=!1,k&&(k=!1,v(y),y=-1),w=!0;var z=m;try{for(T(j),f=n(u);f!==null&&(!(f.expirationTime>j)||q&&!C());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,m=f.priorityLevel;var he=Z(f.expirationTime<=j);j=t.unstable_now(),typeof he=="function"?f.callback=he:f===n(u)&&r(u),T(j)}else r(u);f=n(u)}if(f!==null)var lt=!0;else{var Ye=n(c);Ye!==null&&pi(D,Ye.startTime-j),lt=!1}return lt}finally{f=null,m=z,w=!1}}var $=!1,I=null,y=-1,E=5,R=-1;function C(){return!(t.unstable_now()-R<E)}function x(){if(I!==null){var q=t.unstable_now();R=q;var j=!0;try{j=I(!0,q)}finally{j?S():($=!1,I=null)}}else $=!1}var S;if(typeof _=="function")S=function(){_(x)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,ze=Te.port2;Te.port1.onmessage=x,S=function(){ze.postMessage(null)}}else S=function(){P(x,0)};function fi(q){I=q,$||($=!0,S())}function pi(q,j){y=P(function(){q(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){b||w||(b=!0,fi(U))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var z=m;m=j;try{return q()}finally{m=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,j){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var z=m;m=q;try{return j()}finally{m=z}},t.unstable_scheduleCallback=function(q,j,z){var Z=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,q){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=z+he,q={id:d++,callback:j,priorityLevel:q,startTime:z,expirationTime:he,sortIndex:-1},z>Z?(q.sortIndex=z,e(c,q),n(u)===null&&q===n(c)&&(k?(v(y),y=-1):k=!0,pi(D,z-Z))):(q.sortIndex=he,e(u,q),b||w||(b=!0,fi(U))),q},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(q){var j=m;return function(){var z=m;m=j;try{return q.apply(this,arguments)}finally{m=z}}}})($E);jE.exports=$E;var UR=jE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FR=O,Ht=UR;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BE=new Set,Aa={};function Qi(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Aa[t]=e,t=0;t<e.length;t++)BE.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,jR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ky={},Gy={};function $R(t){return tf.call(Gy,t)?!0:tf.call(Ky,t)?!1:jR.test(t)?Gy[t]=!0:(Ky[t]=!0,!1)}function BR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zR(t,e,n,r){if(e===null||typeof e>"u"||BR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mp=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mp,Up);ot[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mp,Up);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mp,Up);ot[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zR(e,n,i,r)&&(n=null),r||i===null?$R(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ur=FR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),zE=Symbol.for("react.provider"),HE=Symbol.for("react.context"),$p=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),Bp=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),WE=Symbol.for("react.offscreen"),Qy=Symbol.iterator;function Vo(t){return t===null||typeof t!="object"?null:(t=Qy&&t[Qy]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Jh;function Qo(t){if(Jh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jh=e&&e[1]||""}return`
`+Jh+t}var Xh=!1;function Zh(t,e){if(!t||Xh)return"";Xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function HR(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Zh(t.type,!1),t;case 11:return t=Zh(t.type.render,!1),t;case 1:return t=Zh(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case nf:return"Profiler";case jp:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case HE:return(t.displayName||"Context")+".Consumer";case zE:return(t._context.displayName||"Context")+".Provider";case $p:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bp:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function WR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===jp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qR(t){var e=qE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=qR(t))}function KE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Nu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function GE(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function lf(t,e){GE(t,e);var n=Yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Nu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function ks(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Yo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function QE(t,e){var n=Yr(e.value),r=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function YE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?YE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dl,JE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ra(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KR=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){KR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function XE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function ZE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=XE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var GR=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(t,e){if(e){if(GR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function zp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,Ps=null,Cs=null;function e_(t){if(t=al(t)){if(typeof mf!="function")throw Error(F(280));var e=t.stateNode;e&&(e=bc(e),mf(t.stateNode,t.type,e))}}function e0(t){Ps?Cs?Cs.push(t):Cs=[t]:Ps=t}function t0(){if(Ps){var t=Ps,e=Cs;if(Cs=Ps=null,e_(t),e)for(t=0;t<e.length;t++)e_(e[t])}}function n0(t,e){return t(e)}function r0(){}var ed=!1;function i0(t,e,n){if(ed)return t(e,n);ed=!0;try{return n0(t,e,n)}finally{ed=!1,(Ps!==null||Cs!==null)&&(r0(),t0())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var r=bc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var gf=!1;if(Xn)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){gf=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{gf=!1}function QR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var aa=!1,Ou=null,Du=!1,yf=null,YR={onError:function(t){aa=!0,Ou=t}};function JR(t,e,n,r,i,s,o,l,u){aa=!1,Ou=null,QR.apply(YR,arguments)}function XR(t,e,n,r,i,s,o,l,u){if(JR.apply(this,arguments),aa){if(aa){var c=Ou;aa=!1,Ou=null}else throw Error(F(198));Du||(Du=!0,yf=c)}}function Yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function t_(t){if(Yi(t)!==t)throw Error(F(188))}function ZR(t){var e=t.alternate;if(!e){if(e=Yi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return t_(i),t;if(s===r)return t_(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function o0(t){return t=ZR(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=Ht.unstable_scheduleCallback,n_=Ht.unstable_cancelCallback,ek=Ht.unstable_shouldYield,tk=Ht.unstable_requestPaint,Le=Ht.unstable_now,nk=Ht.unstable_getCurrentPriorityLevel,Hp=Ht.unstable_ImmediatePriority,u0=Ht.unstable_UserBlockingPriority,Lu=Ht.unstable_NormalPriority,rk=Ht.unstable_LowPriority,c0=Ht.unstable_IdlePriority,Rc=null,bn=null;function ik(t){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Rc,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:ak,sk=Math.log,ok=Math.LN2;function ak(t){return t>>>=0,t===0?32:31-(sk(t)/ok|0)|0}var Ll=64,Vl=4194304;function Jo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Jo(l):(s&=o,s!==0&&(r=Jo(s)))}else o=n&~i,o!==0?r=Jo(o):s!==0&&(r=Jo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function lk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=lk(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=Ll;return Ll<<=1,!(Ll&4194240)&&(Ll=64),t}function td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function ck(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Wp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var fe=0;function d0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f0,qp,p0,m0,g0,vf=!1,Ml=[],Vr=null,Mr=null,Ur=null,Pa=new Map,Ca=new Map,Ir=[],hk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r_(t,e){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=al(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dk(t,e,n,r,i){switch(e){case"focusin":return Vr=Uo(Vr,t,e,n,r,i),!0;case"dragenter":return Mr=Uo(Mr,t,e,n,r,i),!0;case"mouseover":return Ur=Uo(Ur,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pa.set(s,Uo(Pa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ca.set(s,Uo(Ca.get(s)||null,t,e,n,r,i)),!0}return!1}function y0(t){var e=Ai(t.target);if(e!==null){var n=Yi(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pf=r,n.target.dispatchEvent(r),pf=null}else return e=al(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function i_(t,e,n){ou(t)&&n.delete(e)}function fk(){vf=!1,Vr!==null&&ou(Vr)&&(Vr=null),Mr!==null&&ou(Mr)&&(Mr=null),Ur!==null&&ou(Ur)&&(Ur=null),Pa.forEach(i_),Ca.forEach(i_)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,fk)))}function ba(t){function e(i){return Fo(i,t)}if(0<Ml.length){Fo(Ml[0],t);for(var n=1;n<Ml.length;n++){var r=Ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Vr!==null&&Fo(Vr,t),Mr!==null&&Fo(Mr,t),Ur!==null&&Fo(Ur,t),Pa.forEach(e),Ca.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&Ir.shift()}var bs=ur.ReactCurrentBatchConfig,Mu=!0;function pk(t,e,n,r){var i=fe,s=bs.transition;bs.transition=null;try{fe=1,Kp(t,e,n,r)}finally{fe=i,bs.transition=s}}function mk(t,e,n,r){var i=fe,s=bs.transition;bs.transition=null;try{fe=4,Kp(t,e,n,r)}finally{fe=i,bs.transition=s}}function Kp(t,e,n,r){if(Mu){var i=wf(t,e,n,r);if(i===null)hd(t,e,r,Uu,n),r_(t,r);else if(dk(i,t,e,n,r))r.stopPropagation();else if(r_(t,r),e&4&&-1<hk.indexOf(t)){for(;i!==null;){var s=al(i);if(s!==null&&f0(s),s=wf(t,e,n,r),s===null&&hd(t,e,r,Uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hd(t,e,r,null,n)}}var Uu=null;function wf(t,e,n,r){if(Uu=null,t=zp(r),t=Ai(t),t!==null)if(e=Yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function _0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nk()){case Hp:return 1;case u0:return 4;case Lu:case rk:return 16;case c0:return 536870912;default:return 16}default:return 16}}var br=null,Gp=null,au=null;function v0(){if(au)return au;var t,e=Gp,n=e.length,r,i="value"in br?br.value:br.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return au=i.slice(t,1<r?1-r:void 0)}function lu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function s_(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:s_,this.isPropagationStopped=s_,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qp=qt(ro),ol=Re({},ro,{view:0,detail:0}),gk=qt(ol),nd,rd,jo,kc=Re({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(nd=t.screenX-jo.screenX,rd=t.screenY-jo.screenY):rd=nd=0,jo=t),nd)},movementY:function(t){return"movementY"in t?t.movementY:rd}}),o_=qt(kc),yk=Re({},kc,{dataTransfer:0}),_k=qt(yk),vk=Re({},ol,{relatedTarget:0}),id=qt(vk),wk=Re({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),Ek=qt(wk),Tk=Re({},ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ik=qt(Tk),Sk=Re({},ro,{data:0}),a_=qt(Sk),Ak={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kk[t])?!!e[t]:!1}function Yp(){return Pk}var Ck=Re({},ol,{key:function(t){if(t.key){var e=Ak[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=lu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yp,charCode:function(t){return t.type==="keypress"?lu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bk=qt(Ck),xk=Re({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l_=qt(xk),Nk=Re({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yp}),Ok=qt(Nk),Dk=Re({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lk=qt(Dk),Vk=Re({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mk=qt(Vk),Uk=[9,13,27,32],Jp=Xn&&"CompositionEvent"in window,la=null;Xn&&"documentMode"in document&&(la=document.documentMode);var Fk=Xn&&"TextEvent"in window&&!la,w0=Xn&&(!Jp||la&&8<la&&11>=la),u_=String.fromCharCode(32),c_=!1;function E0(t,e){switch(t){case"keyup":return Uk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function jk(t,e){switch(t){case"compositionend":return T0(e);case"keypress":return e.which!==32?null:(c_=!0,u_);case"textInput":return t=e.data,t===u_&&c_?null:t;default:return null}}function $k(t,e){if(ys)return t==="compositionend"||!Jp&&E0(t,e)?(t=v0(),au=Gp=br=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var Bk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bk[t.type]:e==="textarea"}function I0(t,e,n,r){e0(r),e=Fu(e,"onChange"),0<e.length&&(n=new Qp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ua=null,xa=null;function zk(t){D0(t,0)}function Pc(t){var e=ws(t);if(KE(e))return t}function Hk(t,e){if(t==="change")return e}var S0=!1;if(Xn){var sd;if(Xn){var od="oninput"in document;if(!od){var d_=document.createElement("div");d_.setAttribute("oninput","return;"),od=typeof d_.oninput=="function"}sd=od}else sd=!1;S0=sd&&(!document.documentMode||9<document.documentMode)}function f_(){ua&&(ua.detachEvent("onpropertychange",A0),xa=ua=null)}function A0(t){if(t.propertyName==="value"&&Pc(xa)){var e=[];I0(e,xa,t,zp(t)),i0(zk,e)}}function Wk(t,e,n){t==="focusin"?(f_(),ua=e,xa=n,ua.attachEvent("onpropertychange",A0)):t==="focusout"&&f_()}function qk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pc(xa)}function Kk(t,e){if(t==="click")return Pc(e)}function Gk(t,e){if(t==="input"||t==="change")return Pc(e)}function Qk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:Qk;function Na(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tf.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function p_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m_(t,e){var n=p_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=p_(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k0(){for(var t=window,e=Nu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nu(t.document)}return e}function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yk(t){var e=k0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&Xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=m_(n,s);var o=m_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jk=Xn&&"documentMode"in document&&11>=document.documentMode,_s=null,Ef=null,ca=null,Tf=!1;function g_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||_s==null||_s!==Nu(r)||(r=_s,"selectionStart"in r&&Xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ca&&Na(ca,r)||(ca=r,r=Fu(Ef,"onSelect"),0<r.length&&(e=new Qp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function Fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},ad={},P0={};Xn&&(P0=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Cc(t){if(ad[t])return ad[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P0)return ad[t]=e[n];return t}var C0=Cc("animationend"),b0=Cc("animationiteration"),x0=Cc("animationstart"),N0=Cc("transitionend"),O0=new Map,y_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(t,e){O0.set(t,e),Qi(e,[t])}for(var ld=0;ld<y_.length;ld++){var ud=y_[ld],Xk=ud.toLowerCase(),Zk=ud[0].toUpperCase()+ud.slice(1);si(Xk,"on"+Zk)}si(C0,"onAnimationEnd");si(b0,"onAnimationIteration");si(x0,"onAnimationStart");si("dblclick","onDoubleClick");si("focusin","onFocus");si("focusout","onBlur");si(N0,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function __(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XR(r,e,void 0,t),t.currentTarget=null}function D0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;__(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;__(i,l,c),s=u}}}if(Du)throw t=yf,Du=!1,yf=null,t}function ve(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var r=t+"__bubble";n.has(r)||(L0(e,t,2,!1),n.add(r))}function cd(t,e,n){var r=0;e&&(r|=4),L0(n,t,r,e)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Oa(t){if(!t[jl]){t[jl]=!0,BE.forEach(function(n){n!=="selectionchange"&&(eP.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jl]||(e[jl]=!0,cd("selectionchange",!1,e))}}function L0(t,e,n,r){switch(_0(e)){case 1:var i=pk;break;case 4:i=mk;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ai(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}i0(function(){var c=s,d=zp(n),f=[];e:{var m=O0.get(t);if(m!==void 0){var w=Qp,b=t;switch(t){case"keypress":if(lu(n)===0)break e;case"keydown":case"keyup":w=bk;break;case"focusin":b="focus",w=id;break;case"focusout":b="blur",w=id;break;case"beforeblur":case"afterblur":w=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=o_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_k;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ok;break;case C0:case b0:case x0:w=Ek;break;case N0:w=Lk;break;case"scroll":w=gk;break;case"wheel":w=Mk;break;case"copy":case"cut":case"paste":w=Ik;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=l_}var k=(e&4)!==0,P=!k&&t==="scroll",v=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,T;_!==null;){T=_;var D=T.stateNode;if(T.tag===5&&D!==null&&(T=D,v!==null&&(D=ka(_,v),D!=null&&k.push(Da(_,D,T)))),P)break;_=_.return}0<k.length&&(m=new w(m,b,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==pf&&(b=n.relatedTarget||n.fromElement)&&(Ai(b)||b[Zn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(b=n.relatedTarget||n.toElement,w=c,b=b?Ai(b):null,b!==null&&(P=Yi(b),b!==P||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=c),w!==b)){if(k=o_,D="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=l_,D="onPointerLeave",v="onPointerEnter",_="pointer"),P=w==null?m:ws(w),T=b==null?m:ws(b),m=new k(D,_+"leave",w,n,d),m.target=P,m.relatedTarget=T,D=null,Ai(d)===c&&(k=new k(v,_+"enter",b,n,d),k.target=T,k.relatedTarget=P,D=k),P=D,w&&b)t:{for(k=w,v=b,_=0,T=k;T;T=us(T))_++;for(T=0,D=v;D;D=us(D))T++;for(;0<_-T;)k=us(k),_--;for(;0<T-_;)v=us(v),T--;for(;_--;){if(k===v||v!==null&&k===v.alternate)break t;k=us(k),v=us(v)}k=null}else k=null;w!==null&&v_(f,m,w,k,!1),b!==null&&P!==null&&v_(f,P,b,k,!0)}}e:{if(m=c?ws(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var U=Hk;else if(h_(m))if(S0)U=Gk;else{U=qk;var $=Wk}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=Kk);if(U&&(U=U(t,c))){I0(f,U,n,d);break e}$&&$(t,m,c),t==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&uf(m,"number",m.value)}switch($=c?ws(c):window,t){case"focusin":(h_($)||$.contentEditable==="true")&&(_s=$,Ef=c,ca=null);break;case"focusout":ca=Ef=_s=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,g_(f,n,d);break;case"selectionchange":if(Jk)break;case"keydown":case"keyup":g_(f,n,d)}var I;if(Jp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ys?E0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(w0&&n.locale!=="ko"&&(ys||y!=="onCompositionStart"?y==="onCompositionEnd"&&ys&&(I=v0()):(br=d,Gp="value"in br?br.value:br.textContent,ys=!0)),$=Fu(c,y),0<$.length&&(y=new a_(y,t,null,n,d),f.push({event:y,listeners:$}),I?y.data=I:(I=T0(n),I!==null&&(y.data=I)))),(I=Fk?jk(t,n):$k(t,n))&&(c=Fu(c,"onBeforeInput"),0<c.length&&(d=new a_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}D0(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ka(t,n),s!=null&&r.unshift(Da(t,s,i)),s=ka(t,e),s!=null&&r.push(Da(t,s,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function v_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ka(n,s),u!=null&&o.unshift(Da(n,u,l))):i||(u=ka(n,s),u!=null&&o.push(Da(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tP=/\r\n?/g,nP=/\u0000|\uFFFD/g;function w_(t){return(typeof t=="string"?t:""+t).replace(tP,`
`).replace(nP,"")}function $l(t,e,n){if(e=w_(e),w_(t)!==e&&n)throw Error(F(425))}function ju(){}var If=null,Sf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,rP=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,iP=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(sP)}:Rf;function sP(t){setTimeout(function(){throw t})}function dd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ba(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ba(e)}function Fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function T_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var io=Math.random().toString(36).slice(2),Rn="__reactFiber$"+io,La="__reactProps$"+io,Zn="__reactContainer$"+io,kf="__reactEvents$"+io,oP="__reactListeners$"+io,aP="__reactHandles$"+io;function Ai(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T_(t);t!==null;){if(n=t[Rn])return n;t=T_(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[Rn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function bc(t){return t[La]||null}var Pf=[],Es=-1;function oi(t){return{current:t}}function Ee(t){0>Es||(t.current=Pf[Es],Pf[Es]=null,Es--)}function ye(t,e){Es++,Pf[Es]=t.current,t.current=e}var Jr={},gt=oi(Jr),Nt=oi(!1),Li=Jr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return Jr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function $u(){Ee(Nt),Ee(gt)}function I_(t,e,n){if(gt.current!==Jr)throw Error(F(168));ye(gt,e),ye(Nt,n)}function V0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,WR(t)||"Unknown",i));return Re({},n,r)}function Bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Li=gt.current,ye(gt,t),ye(Nt,Nt.current),!0}function S_(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=V0(t,e,Li),r.__reactInternalMemoizedMergedChildContext=t,Ee(Nt),Ee(gt),ye(gt,t)):Ee(Nt),ye(Nt,n)}var Hn=null,xc=!1,fd=!1;function M0(t){Hn===null?Hn=[t]:Hn.push(t)}function lP(t){xc=!0,M0(t)}function ai(){if(!fd&&Hn!==null){fd=!0;var t=0,e=fe;try{var n=Hn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,xc=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(t+1)),l0(Hp,ai),i}finally{fe=e,fd=!1}}return null}var Ts=[],Is=0,zu=null,Hu=0,Yt=[],Jt=0,Vi=null,Wn=1,qn="";function Ti(t,e){Ts[Is++]=Hu,Ts[Is++]=zu,zu=t,Hu=e}function U0(t,e,n){Yt[Jt++]=Wn,Yt[Jt++]=qn,Yt[Jt++]=Vi,Vi=t;var r=Wn;t=qn;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wn=1<<32-pn(e)+i|n<<i|r,qn=s+t}else Wn=1<<s|n<<i|r,qn=t}function Zp(t){t.return!==null&&(Ti(t,1),U0(t,1,0))}function em(t){for(;t===zu;)zu=Ts[--Is],Ts[Is]=null,Hu=Ts[--Is],Ts[Is]=null;for(;t===Vi;)Vi=Yt[--Jt],Yt[Jt]=null,qn=Yt[--Jt],Yt[Jt]=null,Wn=Yt[--Jt],Yt[Jt]=null}var zt=null,jt=null,Ie=!1,cn=null;function F0(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function A_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,jt=Fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vi!==null?{id:Wn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,jt=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bf(t){if(Ie){var e=jt;if(e){var n=e;if(!A_(t,e)){if(Cf(t))throw Error(F(418));e=Fr(n.nextSibling);var r=zt;e&&A_(t,e)?F0(r,n):(t.flags=t.flags&-4097|2,Ie=!1,zt=t)}}else{if(Cf(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,zt=t}}}function R_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function Bl(t){if(t!==zt)return!1;if(!Ie)return R_(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=jt)){if(Cf(t))throw j0(),Error(F(418));for(;e;)F0(t,e),e=Fr(e.nextSibling)}if(R_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=Fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=zt?Fr(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=jt;t;)t=Fr(t.nextSibling)}function Ws(){jt=zt=null,Ie=!1}function tm(t){cn===null?cn=[t]:cn.push(t)}var uP=ur.ReactCurrentBatchConfig;function $o(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function zl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function k_(t){var e=t._init;return e(t._payload)}function $0(t){function e(v,_){if(t){var T=v.deletions;T===null?(v.deletions=[_],v.flags|=16):T.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=zr(v,_),v.index=0,v.sibling=null,v}function s(v,_,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<_?(v.flags|=2,_):T):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,_,T,D){return _===null||_.tag!==6?(_=wd(T,v.mode,D),_.return=v,_):(_=i(_,T),_.return=v,_)}function u(v,_,T,D){var U=T.type;return U===gs?d(v,_,T.props.children,D,T.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Er&&k_(U)===_.type)?(D=i(_,T.props),D.ref=$o(v,_,T),D.return=v,D):(D=mu(T.type,T.key,T.props,null,v.mode,D),D.ref=$o(v,_,T),D.return=v,D)}function c(v,_,T,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Ed(T,v.mode,D),_.return=v,_):(_=i(_,T.children||[]),_.return=v,_)}function d(v,_,T,D,U){return _===null||_.tag!==7?(_=xi(T,v.mode,D,U),_.return=v,_):(_=i(_,T),_.return=v,_)}function f(v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=wd(""+_,v.mode,T),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:return T=mu(_.type,_.key,_.props,null,v.mode,T),T.ref=$o(v,null,_),T.return=v,T;case ms:return _=Ed(_,v.mode,T),_.return=v,_;case Er:var D=_._init;return f(v,D(_._payload),T)}if(Yo(_)||Vo(_))return _=xi(_,v.mode,T,null),_.return=v,_;zl(v,_)}return null}function m(v,_,T,D){var U=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:l(v,_,""+T,D);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Nl:return T.key===U?u(v,_,T,D):null;case ms:return T.key===U?c(v,_,T,D):null;case Er:return U=T._init,m(v,_,U(T._payload),D)}if(Yo(T)||Vo(T))return U!==null?null:d(v,_,T,D,null);zl(v,T)}return null}function w(v,_,T,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(T)||null,l(_,v,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Nl:return v=v.get(D.key===null?T:D.key)||null,u(_,v,D,U);case ms:return v=v.get(D.key===null?T:D.key)||null,c(_,v,D,U);case Er:var $=D._init;return w(v,_,T,$(D._payload),U)}if(Yo(D)||Vo(D))return v=v.get(T)||null,d(_,v,D,U,null);zl(_,D)}return null}function b(v,_,T,D){for(var U=null,$=null,I=_,y=_=0,E=null;I!==null&&y<T.length;y++){I.index>y?(E=I,I=null):E=I.sibling;var R=m(v,I,T[y],D);if(R===null){I===null&&(I=E);break}t&&I&&R.alternate===null&&e(v,I),_=s(R,_,y),$===null?U=R:$.sibling=R,$=R,I=E}if(y===T.length)return n(v,I),Ie&&Ti(v,y),U;if(I===null){for(;y<T.length;y++)I=f(v,T[y],D),I!==null&&(_=s(I,_,y),$===null?U=I:$.sibling=I,$=I);return Ie&&Ti(v,y),U}for(I=r(v,I);y<T.length;y++)E=w(I,v,y,T[y],D),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?y:E.key),_=s(E,_,y),$===null?U=E:$.sibling=E,$=E);return t&&I.forEach(function(C){return e(v,C)}),Ie&&Ti(v,y),U}function k(v,_,T,D){var U=Vo(T);if(typeof U!="function")throw Error(F(150));if(T=U.call(T),T==null)throw Error(F(151));for(var $=U=null,I=_,y=_=0,E=null,R=T.next();I!==null&&!R.done;y++,R=T.next()){I.index>y?(E=I,I=null):E=I.sibling;var C=m(v,I,R.value,D);if(C===null){I===null&&(I=E);break}t&&I&&C.alternate===null&&e(v,I),_=s(C,_,y),$===null?U=C:$.sibling=C,$=C,I=E}if(R.done)return n(v,I),Ie&&Ti(v,y),U;if(I===null){for(;!R.done;y++,R=T.next())R=f(v,R.value,D),R!==null&&(_=s(R,_,y),$===null?U=R:$.sibling=R,$=R);return Ie&&Ti(v,y),U}for(I=r(v,I);!R.done;y++,R=T.next())R=w(I,v,y,R.value,D),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?y:R.key),_=s(R,_,y),$===null?U=R:$.sibling=R,$=R);return t&&I.forEach(function(x){return e(v,x)}),Ie&&Ti(v,y),U}function P(v,_,T,D){if(typeof T=="object"&&T!==null&&T.type===gs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Nl:e:{for(var U=T.key,$=_;$!==null;){if($.key===U){if(U=T.type,U===gs){if($.tag===7){n(v,$.sibling),_=i($,T.props.children),_.return=v,v=_;break e}}else if($.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Er&&k_(U)===$.type){n(v,$.sibling),_=i($,T.props),_.ref=$o(v,$,T),_.return=v,v=_;break e}n(v,$);break}else e(v,$);$=$.sibling}T.type===gs?(_=xi(T.props.children,v.mode,D,T.key),_.return=v,v=_):(D=mu(T.type,T.key,T.props,null,v.mode,D),D.ref=$o(v,_,T),D.return=v,v=D)}return o(v);case ms:e:{for($=T.key;_!==null;){if(_.key===$)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(v,_.sibling),_=i(_,T.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=Ed(T,v.mode,D),_.return=v,v=_}return o(v);case Er:return $=T._init,P(v,_,$(T._payload),D)}if(Yo(T))return b(v,_,T,D);if(Vo(T))return k(v,_,T,D);zl(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,T),_.return=v,v=_):(n(v,_),_=wd(T,v.mode,D),_.return=v,v=_),o(v)):n(v,_)}return P}var qs=$0(!0),B0=$0(!1),Wu=oi(null),qu=null,Ss=null,nm=null;function rm(){nm=Ss=qu=null}function im(t){var e=Wu.current;Ee(Wu),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){qu=t,nm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(nm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(qu===null)throw Error(F(308));Ss=t,qu.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Ri=null;function sm(t){Ri===null?Ri=[t]:Ri.push(t)}function z0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,sm(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,sm(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}function P_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ku(t,e,n,r){var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,k=l;switch(m=e,w=n,k.tag){case 1:if(b=k.payload,typeof b=="function"){f=b.call(w,f,m);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=k.payload,m=typeof b=="function"?b.call(w,f,m):b,m==null)break e;f=Re({},f,m);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=f):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ui|=o,t.lanes=o,t.memoizedState=f}}function C_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var ll={},xn=oi(ll),Va=oi(ll),Ma=oi(ll);function ki(t){if(t===ll)throw Error(F(174));return t}function am(t,e){switch(ye(Ma,e),ye(Va,t),ye(xn,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}Ee(xn),ye(xn,e)}function Ks(){Ee(xn),Ee(Va),Ee(Ma)}function W0(t){ki(Ma.current);var e=ki(xn.current),n=hf(e,t.type);e!==n&&(ye(Va,t),ye(xn,n))}function lm(t){Va.current===t&&(Ee(xn),Ee(Va))}var Se=oi(0);function Gu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pd=[];function um(){for(var t=0;t<pd.length;t++)pd[t]._workInProgressVersionPrimary=null;pd.length=0}var cu=ur.ReactCurrentDispatcher,md=ur.ReactCurrentBatchConfig,Mi=0,Ae=null,We=null,Ze=null,Qu=!1,ha=!1,Ua=0,cP=0;function ct(){throw Error(F(321))}function cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function hm(t,e,n,r,i,s){if(Mi=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cu.current=t===null||t.memoizedState===null?pP:mP,t=n(r,i),ha){s=0;do{if(ha=!1,Ua=0,25<=s)throw Error(F(301));s+=1,Ze=We=null,e.updateQueue=null,cu.current=gP,t=n(r,i)}while(ha)}if(cu.current=Yu,e=We!==null&&We.next!==null,Mi=0,Ze=We=Ae=null,Qu=!1,e)throw Error(F(300));return t}function dm(){var t=Ua!==0;return Ua=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Ae.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function rn(){if(We===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Ze===null?Ae.memoizedState:Ze.next;if(e!==null)Ze=e,We=t;else{if(t===null)throw Error(F(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ze===null?Ae.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Fa(t,e){return typeof e=="function"?e(t):e}function gd(t){var e=rn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Mi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ae.lanes|=d,Ui|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,yn(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,Ui|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yd(t){var e=rn(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q0(){}function K0(t,e){var n=Ae,r=rn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,fm(Y0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,ja(9,Q0.bind(null,n,r,i,e),void 0,null),et===null)throw Error(F(349));Mi&30||G0(n,e,i)}return i}function G0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q0(t,e,n,r){e.value=n,e.getSnapshot=r,J0(e)&&X0(t)}function Y0(t,e,n){return n(function(){J0(e)&&X0(t)})}function J0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function X0(t){var e=er(t,1);e!==null&&mn(e,t,1,-1)}function b_(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=fP.bind(null,Ae,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z0(){return rn().memoizedState}function hu(t,e,n,r){var i=Sn();Ae.flags|=t,i.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function Nc(t,e,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&cm(r,o.deps)){i.memoizedState=ja(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=ja(1|e,n,s,r)}function x_(t,e){return hu(8390656,8,t,e)}function fm(t,e){return Nc(2048,8,t,e)}function eT(t,e){return Nc(4,2,t,e)}function tT(t,e){return Nc(4,4,t,e)}function nT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rT(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,nT.bind(null,e,t),n)}function pm(){}function iT(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sT(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function oT(t,e,n){return Mi&21?(yn(n,e)||(n=h0(),Ae.lanes|=n,Ui|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function hP(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=md.transition;md.transition={};try{t(!1),e()}finally{fe=n,md.transition=r}}function aT(){return rn().memoizedState}function dP(t,e,n){var r=Br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lT(t))uT(e,n);else if(n=z0(t,e,n,r),n!==null){var i=Tt();mn(n,t,r,i),cT(n,e,r)}}function fP(t,e,n){var r=Br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lT(t))uT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,yn(l,o)){var u=e.interleaved;u===null?(i.next=i,sm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=z0(t,e,i,r),n!==null&&(i=Tt(),mn(n,t,r,i),cT(n,e,r))}}function lT(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function uT(t,e){ha=Qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wp(t,n)}}var Yu={readContext:nn,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},pP={readContext:nn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:x_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hu(4194308,4,nT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hu(4194308,4,t,e)},useInsertionEffect:function(t,e){return hu(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dP.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:b_,useDebugValue:pm,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=b_(!1),e=t[0];return t=hP.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=Sn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));Mi&30||G0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,x_(Y0.bind(null,r,s,t),[t]),r.flags|=2048,ja(9,Q0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Sn(),e=et.identifierPrefix;if(Ie){var n=qn,r=Wn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mP={readContext:nn,useCallback:iT,useContext:nn,useEffect:fm,useImperativeHandle:rT,useInsertionEffect:eT,useLayoutEffect:tT,useMemo:sT,useReducer:gd,useRef:Z0,useState:function(){return gd(Fa)},useDebugValue:pm,useDeferredValue:function(t){var e=rn();return oT(e,We.memoizedState,t)},useTransition:function(){var t=gd(Fa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:K0,useId:aT,unstable_isNewReconciler:!1},gP={readContext:nn,useCallback:iT,useContext:nn,useEffect:fm,useImperativeHandle:rT,useInsertionEffect:eT,useLayoutEffect:tT,useMemo:sT,useReducer:yd,useRef:Z0,useState:function(){return yd(Fa)},useDebugValue:pm,useDeferredValue:function(t){var e=rn();return We===null?e.memoizedState=t:oT(e,We.memoizedState,t)},useTransition:function(){var t=yd(Fa)[0],e=rn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:K0,useId:aT,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?Yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Br(t),s=Qn(r,i);s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(mn(e,t,i,r),uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Tt(),i=Br(t),s=Qn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=jr(t,s,i),e!==null&&(mn(e,t,i,r),uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Tt(),r=Br(t),i=Qn(n,r);i.tag=2,e!=null&&(i.callback=e),e=jr(t,i,r),e!==null&&(mn(e,t,r,n),uu(e,t,r))}};function N_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Na(n,r)||!Na(i,s):!0}function hT(t,e,n){var r=!1,i=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Ot(e)?Li:gt.current,r=e.contextTypes,s=(r=r!=null)?Hs(t,i):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function O_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},om(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Ot(e)?Li:gt.current,i.context=Hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Oc.enqueueReplaceState(i,i.state,null),Ku(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",r=e;do n+=HR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Df(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yP=typeof WeakMap=="function"?WeakMap:Map;function dT(t,e,n){n=Qn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xu||(Xu=!0,Hf=r),Df(t,e)},n}function fT(t,e,n){n=Qn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Df(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Df(t,e),typeof r!="function"&&($r===null?$r=new Set([this]):$r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function D_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xP.bind(null,t,e,n),e.then(t,t))}function L_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function V_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qn(-1,1),e.tag=2,jr(n,e,1))),n.lanes|=1),t)}var _P=ur.ReactCurrentOwner,xt=!1;function Et(t,e,n,r){e.child=t===null?B0(e,null,n,r):qs(e,t.child,n,r)}function M_(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=hm(t,e,n,r,s,i),n=dm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Ie&&n&&Zp(e),e.flags|=1,Et(t,e,r,i),e.child)}function U_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Tm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pT(t,e,s,r,i)):(t=mu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Na,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function pT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Na(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return Lf(t,e,n,r,i)}function mT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Rs,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Rs,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Rs,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Rs,Ft),Ft|=r;return Et(t,e,i,n),e.child}function gT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,r,i){var s=Ot(n)?Li:gt.current;return s=Hs(e,s),xs(e,i),n=hm(t,e,n,r,s,i),r=dm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(Ie&&r&&Zp(e),e.flags|=1,Et(t,e,n,i),e.child)}function F_(t,e,n,r,i){if(Ot(n)){var s=!0;Bu(e)}else s=!1;if(xs(e,i),e.stateNode===null)du(t,e),hT(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nn(c):(c=Ot(n)?Li:gt.current,c=Hs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&O_(e,o,r,c),Tr=!1;var m=e.memoizedState;o.state=m,Ku(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Nt.current||Tr?(typeof d=="function"&&(Nf(e,n,d,r),u=e.memoizedState),(l=Tr||N_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:ln(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Ot(n)?Li:gt.current,u=Hs(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&O_(e,o,r,u),Tr=!1,m=e.memoizedState,o.state=m,Ku(e,r,o,i);var b=e.memoizedState;l!==f||m!==b||Nt.current||Tr?(typeof w=="function"&&(Nf(e,n,w,r),b=e.memoizedState),(c=Tr||N_(e,n,c,r,m,b,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Vf(t,e,n,r,s,i)}function Vf(t,e,n,r,i,s){gT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&S_(e,n,!1),tr(t,e,s);r=e.stateNode,_P.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,l,s)):Et(t,e,l,s),e.memoizedState=r.state,i&&S_(e,n,!0),e.child}function yT(t){var e=t.stateNode;e.pendingContext?I_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I_(t,e.context,!1),am(t,e.containerInfo)}function j_(t,e,n,r,i){return Ws(),tm(i),e.flags|=256,Et(t,e,n,r),e.child}var Mf={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function _T(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Se,i&1),t===null)return bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vc(o,r,0,null),t=xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=Mf,t):mm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return vP(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=zr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=zr(l,s):(s=xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Mf,r}return s=t.child,t=s.sibling,r=zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mm(t,e){return e=Vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hl(t,e,n,r){return r!==null&&tm(r),qs(e,t.child,null,n),t=mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_d(Error(F(422))),Hl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Vc({mode:"visible",children:r.children},i,0,null),s=xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&qs(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=Mf,s);if(!(e.mode&1))return Hl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=_d(s,r,void 0),Hl(t,e,o,r)}if(l=(o&t.childLanes)!==0,xt||l){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),mn(r,t,i,-1))}return Em(),r=_d(Error(F(421))),Hl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=NP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=Fr(i.nextSibling),zt=e,Ie=!0,cn=null,t!==null&&(Yt[Jt++]=Wn,Yt[Jt++]=qn,Yt[Jt++]=Vi,Wn=t.id,qn=t.overflow,Vi=e),e=mm(e,r.children),e.flags|=4096,e)}function $_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xf(t.return,e,n)}function vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function vT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Et(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$_(t,n,e);else if(t.tag===19)$_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vd(e,!0,n,null,s);break;case"together":vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function du(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ui|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wP(t,e,n){switch(e.tag){case 3:yT(e),Ws();break;case 5:W0(e);break;case 1:Ot(e.type)&&Bu(e);break;case 4:am(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?_T(t,e,n):(ye(Se,Se.current&1),t=tr(t,e,n),t!==null?t.sibling:null);ye(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,mT(t,e,n)}return tr(t,e,n)}var wT,Ff,ET,TT;wT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};ET=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ki(xn.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=cf(t,i),r=cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ju)}df(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Aa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};TT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function EP(t,e,n){var r=e.pendingProps;switch(em(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(e),null;case 1:return Ot(e.type)&&$u(),ht(e),null;case 3:return r=e.stateNode,Ks(),Ee(Nt),Ee(gt),um(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(Kf(cn),cn=null))),Ff(t,e),ht(e),null;case 5:lm(e);var i=ki(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)ET(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ht(e),null}if(t=ki(xn.current),Bl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[La]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Xo.length;i++)ve(Xo[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Yy(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Xy(r,s),ve("invalid",r)}df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&$l(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&$l(r.textContent,l,t),i=["children",""+l]):Aa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ol(r),Jy(r,s,!0);break;case"textarea":Ol(r),Zy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ju)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=YE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[La]=r,wT(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)ve(Xo[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Yy(t,r),i=af(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Xy(t,r),i=cf(t,r),ve("invalid",t);break;default:i=r}df(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?ZE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&JE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ra(t,u):typeof u=="number"&&Ra(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Aa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&Fp(t,s,u,o))}switch(n){case"input":Ol(t),Jy(t,r,!1);break;case"textarea":Ol(t),Zy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ks(t,!!r.multiple,s,!1):r.defaultValue!=null&&ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ju)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ht(e),null;case 6:if(t&&e.stateNode!=null)TT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ki(Ma.current),ki(xn.current),Bl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:$l(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$l(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return ht(e),null;case 13:if(Ee(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&jt!==null&&e.mode&1&&!(e.flags&128))j0(),Ws(),e.flags|=98560,s=!1;else if(s=Bl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Rn]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ht(e),s=!1}else cn!==null&&(Kf(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?qe===0&&(qe=3):Em())),e.updateQueue!==null&&(e.flags|=4),ht(e),null);case 4:return Ks(),Ff(t,e),t===null&&Oa(e.stateNode.containerInfo),ht(e),null;case 10:return im(e.type._context),ht(e),null;case 17:return Ot(e.type)&&$u(),ht(e),null;case 19:if(Ee(Se),s=e.memoizedState,s===null)return ht(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bo(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gu(t),o!==null){for(e.flags|=128,Bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Qs&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ht(e),null}else 2*Le()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Se.current,ye(Se,r?n&1|2:n&1),e):(ht(e),null);case 22:case 23:return wm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(ht(e),e.subtreeFlags&6&&(e.flags|=8192)):ht(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function TP(t,e){switch(em(e),e.tag){case 1:return Ot(e.type)&&$u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Ee(Nt),Ee(gt),um(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lm(e),null;case 13:if(Ee(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Se),null;case 4:return Ks(),null;case 10:return im(e.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var Wl=!1,pt=!1,IP=typeof WeakSet=="function"?WeakSet:Set,G=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function jf(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var B_=!1;function SP(t,e){if(If=Mu,t=k0(),Xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Mu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var k=b.memoizedProps,P=b.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?k:ln(e.type,k),P);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ce(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return b=B_,B_=!1,b}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jf(e,n,s)}i=i.next}while(i!==r)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function IT(t){var e=t.alternate;e!==null&&(t.alternate=null,IT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[La],delete e[kf],delete e[oP],delete e[aP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ST(t){return t.tag===5||t.tag===3||t.tag===4}function z_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ST(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ju));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}var nt=null,un=!1;function vr(t,e,n){for(n=n.child;n!==null;)AT(t,e,n),n=n.sibling}function AT(t,e,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Rc,n)}catch{}switch(n.tag){case 5:pt||As(n,e);case 6:var r=nt,i=un;nt=null,vr(t,e,n),nt=r,un=i,nt!==null&&(un?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(un?(t=nt,n=n.stateNode,t.nodeType===8?dd(t.parentNode,n):t.nodeType===1&&dd(t,n),ba(t)):dd(nt,n.stateNode));break;case 4:r=nt,i=un,nt=n.stateNode.containerInfo,un=!0,vr(t,e,n),nt=r,un=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),i=i.next}while(i!==r)}vr(t,e,n);break;case 1:if(!pt&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,vr(t,e,n),pt=r):vr(t,e,n);break;default:vr(t,e,n)}}function H_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new IP),e.forEach(function(r){var i=OP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,un=!1;break e;case 3:nt=l.stateNode.containerInfo,un=!0;break e;case 4:nt=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(nt===null)throw Error(F(160));AT(s,o,i),nt=null,un=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)RT(e,t),e=e.sibling}function RT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),In(t),r&4){try{da(3,t,t.return),Dc(3,t)}catch(k){Ce(t,t.return,k)}try{da(5,t,t.return)}catch(k){Ce(t,t.return,k)}}break;case 1:an(e,t),In(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(an(e,t),In(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var i=t.stateNode;try{Ra(i,"")}catch(k){Ce(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&GE(i,s),ff(l,o);var c=ff(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?ZE(i,f):d==="dangerouslySetInnerHTML"?JE(i,f):d==="children"?Ra(i,f):Fp(i,d,f,c)}switch(l){case"input":lf(i,s);break;case"textarea":QE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ks(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ks(i,!!s.multiple,s.defaultValue,!0):ks(i,!!s.multiple,s.multiple?[]:"",!1))}i[La]=s}catch(k){Ce(t,t.return,k)}}break;case 6:if(an(e,t),In(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ce(t,t.return,k)}}break;case 3:if(an(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(k){Ce(t,t.return,k)}break;case 4:an(e,t),In(t);break;case 13:an(e,t),In(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_m=Le())),r&4&&H_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(c=pt)||d,an(e,t),pt=c):an(e,t),In(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(f=G=d;G!==null;){switch(m=G,w=m.child,m.tag){case 0:case 11:case 14:case 15:da(4,m,m.return);break;case 1:As(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(k){Ce(r,n,k)}}break;case 5:As(m,m.return);break;case 22:if(m.memoizedState!==null){q_(f);continue}}w!==null?(w.return=m,G=w):q_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=XE("display",o))}catch(k){Ce(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Ce(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),In(t),r&4&&H_(t);break;case 21:break;default:an(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ST(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ra(i,""),r.flags&=-33);var s=z_(t);zf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=z_(t);Bf(t,l,o);break;default:throw Error(F(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AP(t,e,n){G=t,kT(t)}function kT(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pt;l=Wl;var c=pt;if(Wl=o,(pt=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?K_(i):u!==null?(u.return=o,G=u):K_(i);for(;s!==null;)G=s,kT(s),s=s.sibling;G=i,Wl=l,pt=c}W_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):W_(t)}}function W_(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||Dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&C_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}C_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}pt||e.flags&512&&$f(e)}catch(m){Ce(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function q_(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function K_(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{$f(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{$f(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var RP=Math.ceil,Ju=ur.ReactCurrentDispatcher,gm=ur.ReactCurrentOwner,en=ur.ReactCurrentBatchConfig,ce=0,et=null,Fe=null,st=0,Ft=0,Rs=oi(0),qe=0,$a=null,Ui=0,Lc=0,ym=0,fa=null,Ct=null,_m=0,Qs=1/0,Bn=null,Xu=!1,Hf=null,$r=null,ql=!1,xr=null,Zu=0,pa=0,Wf=null,fu=-1,pu=0;function Tt(){return ce&6?Le():fu!==-1?fu:fu=Le()}function Br(t){return t.mode&1?ce&2&&st!==0?st&-st:uP.transition!==null?(pu===0&&(pu=h0()),pu):(t=fe,t!==0||(t=window.event,t=t===void 0?16:_0(t.type)),t):1}function mn(t,e,n,r){if(50<pa)throw pa=0,Wf=null,Error(F(185));sl(t,n,r),(!(ce&2)||t!==et)&&(t===et&&(!(ce&2)&&(Lc|=n),qe===4&&Sr(t,st)),Dt(t,r),n===1&&ce===0&&!(e.mode&1)&&(Qs=Le()+500,xc&&ai()))}function Dt(t,e){var n=t.callbackNode;uk(t,e);var r=Vu(t,t===et?st:0);if(r===0)n!==null&&n_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&n_(n),e===1)t.tag===0?lP(G_.bind(null,t)):M0(G_.bind(null,t)),iP(function(){!(ce&6)&&ai()}),n=null;else{switch(d0(r)){case 1:n=Hp;break;case 4:n=u0;break;case 16:n=Lu;break;case 536870912:n=c0;break;default:n=Lu}n=LT(n,PT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function PT(t,e){if(fu=-1,pu=0,ce&6)throw Error(F(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var r=Vu(t,t===et?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var i=ce;ce|=2;var s=bT();(et!==t||st!==e)&&(Bn=null,Qs=Le()+500,bi(t,e));do try{CP();break}catch(l){CT(t,l)}while(1);rm(),Ju.current=s,ce=i,Fe!==null?e=0:(et=null,st=0,e=qe)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=qf(t,i))),e===1)throw n=$a,bi(t,0),Sr(t,r),Dt(t,Le()),n;if(e===6)Sr(t,r);else{if(i=t.current.alternate,!(r&30)&&!kP(i)&&(e=ec(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=qf(t,s))),e===1))throw n=$a,bi(t,0),Sr(t,r),Dt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Ii(t,Ct,Bn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=_m+500-Le(),10<e)){if(Vu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Tt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rf(Ii.bind(null,t,Ct,Bn),e);break}Ii(t,Ct,Bn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RP(r/1960))-r,10<r){t.timeoutHandle=Rf(Ii.bind(null,t,Ct,Bn),r);break}Ii(t,Ct,Bn);break;case 5:Ii(t,Ct,Bn);break;default:throw Error(F(329))}}}return Dt(t,Le()),t.callbackNode===n?PT.bind(null,t):null}function qf(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(bi(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&Kf(e)),t}function Kf(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function kP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~ym,e&=~Lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function G_(t){if(ce&6)throw Error(F(327));Ns();var e=Vu(t,0);if(!(e&1))return Dt(t,Le()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=qf(t,r))}if(n===1)throw n=$a,bi(t,0),Sr(t,e),Dt(t,Le()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ii(t,Ct,Bn),Dt(t,Le()),null}function vm(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(Qs=Le()+500,xc&&ai())}}function Fi(t){xr!==null&&xr.tag===0&&!(ce&6)&&Ns();var e=ce;ce|=1;var n=en.transition,r=fe;try{if(en.transition=null,fe=1,t)return t()}finally{fe=r,en.transition=n,ce=e,!(ce&6)&&ai()}}function wm(){Ft=Rs.current,Ee(Rs)}function bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rP(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(em(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$u();break;case 3:Ks(),Ee(Nt),Ee(gt),um();break;case 5:lm(r);break;case 4:Ks();break;case 13:Ee(Se);break;case 19:Ee(Se);break;case 10:im(r.type._context);break;case 22:case 23:wm()}n=n.return}if(et=t,Fe=t=zr(t.current,null),st=Ft=e,qe=0,$a=null,ym=Lc=Ui=0,Ct=fa=null,Ri!==null){for(e=0;e<Ri.length;e++)if(n=Ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return t}function CT(t,e){do{var n=Fe;try{if(rm(),cu.current=Yu,Qu){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qu=!1}if(Mi=0,Ze=We=Ae=null,ha=!1,Ua=0,gm.current=null,n===null||n.return===null){qe=1,$a=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=L_(o);if(w!==null){w.flags&=-257,V_(w,o,l,s,e),w.mode&1&&D_(s,c,e),e=w,u=c;var b=e.updateQueue;if(b===null){var k=new Set;k.add(u),e.updateQueue=k}else b.add(u);break e}else{if(!(e&1)){D_(s,c,e),Em();break e}u=Error(F(426))}}else if(Ie&&l.mode&1){var P=L_(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),V_(P,o,l,s,e),tm(Gs(u,l));break e}}s=u=Gs(u,l),qe!==4&&(qe=2),fa===null?fa=[s]:fa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=dT(s,u,e);P_(s,v);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&($r===null||!$r.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=fT(s,l,e);P_(s,D);break e}}s=s.return}while(s!==null)}NT(n)}catch(U){e=U,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function bT(){var t=Ju.current;return Ju.current=Yu,t===null?Yu:t}function Em(){(qe===0||qe===3||qe===2)&&(qe=4),et===null||!(Ui&268435455)&&!(Lc&268435455)||Sr(et,st)}function ec(t,e){var n=ce;ce|=2;var r=bT();(et!==t||st!==e)&&(Bn=null,bi(t,e));do try{PP();break}catch(i){CT(t,i)}while(1);if(rm(),ce=n,Ju.current=r,Fe!==null)throw Error(F(261));return et=null,st=0,qe}function PP(){for(;Fe!==null;)xT(Fe)}function CP(){for(;Fe!==null&&!ek();)xT(Fe)}function xT(t){var e=DT(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?NT(t):Fe=e,gm.current=null}function NT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TP(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Fe=null;return}}else if(n=EP(n,e,Ft),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);qe===0&&(qe=5)}function Ii(t,e,n){var r=fe,i=en.transition;try{en.transition=null,fe=1,bP(t,e,n,r)}finally{en.transition=i,fe=r}return null}function bP(t,e,n,r){do Ns();while(xr!==null);if(ce&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ck(t,s),t===et&&(Fe=et=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,LT(Lu,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=fe;fe=1;var l=ce;ce|=4,gm.current=null,SP(t,n),RT(n,t),Yk(Sf),Mu=!!If,Sf=If=null,t.current=n,AP(n),tk(),ce=l,fe=o,en.transition=s}else t.current=n;if(ql&&(ql=!1,xr=t,Zu=i),s=t.pendingLanes,s===0&&($r=null),ik(n.stateNode),Dt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xu)throw Xu=!1,t=Hf,Hf=null,t;return Zu&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Wf?pa++:(pa=0,Wf=t):pa=0,ai(),null}function Ns(){if(xr!==null){var t=d0(Zu),e=en.transition,n=fe;try{if(en.transition=null,fe=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Zu=0,ce&6)throw Error(F(331));var i=ce;for(ce|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:da(8,d,s)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var m=d.sibling,w=d.return;if(IT(d),d===c){G=null;break}if(m!==null){m.return=w,G=m;break}G=w}}}var b=s.alternate;if(b!==null){var k=b.child;if(k!==null){b.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,G=v;break e}G=s.return}}var _=t.current;for(G=_;G!==null;){o=G;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,G=T;else e:for(o=_;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Dc(9,l)}}catch(U){Ce(l,l.return,U)}if(l===o){G=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,G=D;break e}G=l.return}}if(ce=i,ai(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Rc,t)}catch{}r=!0}return r}finally{fe=n,en.transition=e}}return!1}function Q_(t,e,n){e=Gs(n,e),e=dT(t,e,1),t=jr(t,e,1),e=Tt(),t!==null&&(sl(t,1,e),Dt(t,e))}function Ce(t,e,n){if(t.tag===3)Q_(t,t,n);else for(;e!==null;){if(e.tag===3){Q_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($r===null||!$r.has(r))){t=Gs(n,t),t=fT(e,t,1),e=jr(e,t,1),t=Tt(),e!==null&&(sl(e,1,t),Dt(e,t));break}}e=e.return}}function xP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Tt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(st&n)===n&&(qe===4||qe===3&&(st&130023424)===st&&500>Le()-_m?bi(t,0):ym|=n),Dt(t,e)}function OT(t,e){e===0&&(t.mode&1?(e=Vl,Vl<<=1,!(Vl&130023424)&&(Vl=4194304)):e=1);var n=Tt();t=er(t,e),t!==null&&(sl(t,e,n),Dt(t,n))}function NP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),OT(t,n)}function OP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),OT(t,n)}var DT;DT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,wP(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ie&&e.flags&1048576&&U0(e,Hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;du(t,e),t=e.pendingProps;var i=Hs(e,gt.current);xs(e,n),i=hm(null,e,r,t,i,n);var s=dm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,Bu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,om(e),i.updater=Oc,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=Vf(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Zp(e),Et(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(du(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=LP(r),t=ln(r,t),i){case 0:e=Lf(null,e,r,t,n);break e;case 1:e=F_(null,e,r,t,n);break e;case 11:e=M_(null,e,r,t,n);break e;case 14:e=U_(null,e,r,ln(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),Lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),F_(t,e,r,i,n);case 3:e:{if(yT(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H0(t,e),Ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gs(Error(F(423)),e),e=j_(t,e,r,n,i);break e}else if(r!==i){i=Gs(Error(F(424)),e),e=j_(t,e,r,n,i);break e}else for(jt=Fr(e.stateNode.containerInfo.firstChild),zt=e,Ie=!0,cn=null,n=B0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),r===i){e=tr(t,e,n);break e}Et(t,e,r,n)}e=e.child}return e;case 5:return W0(e),t===null&&bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),gT(t,e),Et(t,e,o,n),e.child;case 6:return t===null&&bf(e),null;case 13:return _T(t,e,n);case 4:return am(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=qs(e,null,r,n):Et(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),M_(t,e,r,i,n);case 7:return Et(t,e,e.pendingProps,n),e.child;case 8:return Et(t,e,e.pendingProps.children,n),e.child;case 12:return Et(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Wu,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!Nt.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Qn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Et(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=nn(i),r=r(i),e.flags|=1,Et(t,e,r,n),e.child;case 14:return r=e.type,i=ln(r,e.pendingProps),i=ln(r.type,i),U_(t,e,r,i,n);case 15:return pT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ln(r,i),du(t,e),e.tag=1,Ot(r)?(t=!0,Bu(e)):t=!1,xs(e,n),hT(e,r,i),Of(e,r,i,n),Vf(null,e,r,!0,t,n);case 19:return vT(t,e,n);case 22:return mT(t,e,n)}throw Error(F(156,e.tag))};function LT(t,e){return l0(t,e)}function DP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new DP(t,e,n,r)}function Tm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function LP(t){if(typeof t=="function")return Tm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$p)return 11;if(t===Bp)return 14}return 2}function zr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function mu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Tm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return xi(n.children,i,s,e);case jp:o=8,i|=8;break;case nf:return t=Zt(12,n,e,i|2),t.elementType=nf,t.lanes=s,t;case rf:return t=Zt(13,n,e,i),t.elementType=rf,t.lanes=s,t;case sf:return t=Zt(19,n,e,i),t.elementType=sf,t.lanes=s,t;case WE:return Vc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zE:o=10;break e;case HE:o=9;break e;case $p:o=11;break e;case Bp:o=14;break e;case Er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xi(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Vc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=WE,t.lanes=n,t.stateNode={isHidden:!1},t}function wd(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Ed(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=td(0),this.expirationTimes=td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=td(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Im(t,e,n,r,i,s,o,l,u){return t=new VP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(s),t}function MP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function VT(t){if(!t)return Jr;t=t._reactInternals;e:{if(Yi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Ot(n))return V0(t,n,e)}return e}function MT(t,e,n,r,i,s,o,l,u){return t=Im(n,r,!0,t,i,s,o,l,u),t.context=VT(null),n=t.current,r=Tt(),i=Br(n),s=Qn(r,i),s.callback=e??null,jr(n,s,i),t.current.lanes=i,sl(t,i,r),Dt(t,r),t}function Mc(t,e,n,r){var i=e.current,s=Tt(),o=Br(i);return n=VT(n),e.context===null?e.context=n:e.pendingContext=n,e=Qn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jr(i,e,o),t!==null&&(mn(t,i,o,s),uu(t,i,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sm(t,e){Y_(t,e),(t=t.alternate)&&Y_(t,e)}function UP(){return null}var UT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Am(t){this._internalRoot=t}Uc.prototype.render=Am.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Mc(t,e,null,null)};Uc.prototype.unmount=Am.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fi(function(){Mc(null,t,null,null)}),e[Zn]=null}};function Uc(t){this._internalRoot=t}Uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&y0(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function J_(){}function FP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=tc(o);s.call(c)}}var o=MT(e,r,t,0,null,!1,!1,"",J_);return t._reactRootContainer=o,t[Zn]=o.current,Oa(t.nodeType===8?t.parentNode:t),Fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=tc(u);l.call(c)}}var u=Im(t,0,!1,null,null,!1,!1,"",J_);return t._reactRootContainer=u,t[Zn]=u.current,Oa(t.nodeType===8?t.parentNode:t),Fi(function(){Mc(e,u,n,r)}),u}function jc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=tc(o);l.call(u)}}Mc(e,o,t,i)}else o=FP(n,e,t,i,r);return tc(o)}f0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Jo(e.pendingLanes);n!==0&&(Wp(e,n|1),Dt(e,Le()),!(ce&6)&&(Qs=Le()+500,ai()))}break;case 13:Fi(function(){var r=er(t,1);if(r!==null){var i=Tt();mn(r,t,1,i)}}),Sm(t,1)}};qp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Tt();mn(e,t,134217728,n)}Sm(t,134217728)}};p0=function(t){if(t.tag===13){var e=Br(t),n=er(t,e);if(n!==null){var r=Tt();mn(n,t,e,r)}Sm(t,e)}};m0=function(){return fe};g0=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bc(r);if(!i)throw Error(F(90));KE(r),lf(r,i)}}}break;case"textarea":QE(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};n0=vm;r0=Fi;var jP={usingClientEntryPoint:!1,Events:[al,ws,bc,e0,t0,vm]},zo={findFiberByHostInstance:Ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$P={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ur.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||UP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Rc=Kl.inject($P),bn=Kl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jP;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error(F(200));return MP(t,e,null,n)};Wt.createRoot=function(t,e){if(!Rm(t))throw Error(F(299));var n=!1,r="",i=UT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Im(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,Oa(t.nodeType===8?t.parentNode:t),new Am(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return Fi(t)};Wt.hydrate=function(t,e,n){if(!Fc(e))throw Error(F(200));return jc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=MT(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,Oa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uc(e)};Wt.render=function(t,e,n){if(!Fc(e))throw Error(F(200));return jc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(F(40));return t._reactRootContainer?(Fi(function(){jc(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};Wt.unstable_batchedUpdates=vm;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return jc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function FT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FT)}catch(t){console.error(t)}}FT(),FE.exports=Wt;var BP=FE.exports,X_=BP;ef.createRoot=X_.createRoot,ef.hydrateRoot=X_.hydrateRoot;const zP="modulepreload",HP=function(t){return"/"+t},Z_={},ie=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=HP(s),s in Z_)return;Z_[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":zP,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const ev="popstate";function WP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Gf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nc(i)}return KP(e,n,null,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function km(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qP(){return Math.random().toString(36).substr(2,8)}function tv(t,e){return{usr:t.state,key:t.key,idx:e}}function Gf(t,e,n,r){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?so(e):e,{state:n,key:e&&e.key||r||qP()})}function nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function so(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Nr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Ba({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Nr.Pop;let P=d(),v=P==null?null:P-c;c=P,u&&u({action:l,location:k.location,delta:v})}function m(P,v){l=Nr.Push;let _=Gf(k.location,P,v);n&&n(_,P),c=d()+1;let T=tv(_,c),D=k.createHref(_);try{o.pushState(T,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function w(P,v){l=Nr.Replace;let _=Gf(k.location,P,v);n&&n(_,P),c=d();let T=tv(_,c),D=k.createHref(_);o.replaceState(T,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function b(P){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:nc(P);return _=_.replace(/ $/,"%20"),Ve(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let k={get action(){return l},get location(){return t(i,o)},listen(P){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ev,f),u=P,()=>{i.removeEventListener(ev,f),u=null}},createHref(P){return e(i,P)},createURL:b,encodeLocation(P){let v=b(P);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:w,go(P){return o.go(P)}};return k}var nv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nv||(nv={}));function GP(t,e,n){return n===void 0&&(n="/"),QP(t,e,n,!1)}function QP(t,e,n,r){let i=typeof e=="string"?so(e):e,s=Pm(i.pathname||"/",n);if(s==null)return null;let o=jT(t);YP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=aC(s);l=sC(o[u],c,r)}return l}function jT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ve(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Hr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),jT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:rC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of $T(s.path))i(s,o,u)}),e}function $T(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$T(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function YP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JP=/^:[\w-]+$/,XP=3,ZP=2,eC=1,tC=10,nC=-2,rv=t=>t==="*";function rC(t,e){let n=t.split("/"),r=n.length;return n.some(rv)&&(r+=nC),e&&(r+=ZP),n.filter(i=>!rv(i)).reduce((i,s)=>i+(JP.test(s)?XP:s===""?eC:tC),r)}function iC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sC(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=iv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=iv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Hr([s,f.pathname]),pathnameBase:dC(Hr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Hr([s,f.pathnameBase]))}return o}function iv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=oC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let k=l[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const b=l[f];return w&&!b?c[m]=void 0:c[m]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function oC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),km(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function aC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return km(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const lC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uC=t=>lC.test(t);function cC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?so(t):t,s;if(n)if(uC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),km(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=sv(n.substring(1),"/"):s=sv(n,e)}else s=e;return{pathname:s,search:fC(r),hash:pC(i)}}function sv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Td(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Cm(t,e){let n=hC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=so(t):(i=Ba({},t),Ve(!i.pathname||!i.pathname.includes("?"),Td("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Td("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Td("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=cC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Hr=t=>t.join("/").replace(/\/\/+/g,"/"),dC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const BT=["post","put","patch","delete"];new Set(BT);const gC=["get",...BT];new Set(gC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},za.apply(this,arguments)}const xm=O.createContext(null),yC=O.createContext(null),li=O.createContext(null),$c=O.createContext(null),Mn=O.createContext({outlet:null,matches:[],isDataRoute:!1}),zT=O.createContext(null);function _C(t,e){let{relative:n}=e===void 0?{}:e;oo()||Ve(!1);let{basename:r,navigator:i}=O.useContext(li),{hash:s,pathname:o,search:l}=WT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function oo(){return O.useContext($c)!=null}function ao(){return oo()||Ve(!1),O.useContext($c).location}function HT(t){O.useContext(li).static||O.useLayoutEffect(t)}function Nm(){let{isDataRoute:t}=O.useContext(Mn);return t?OC():vC()}function vC(){oo()||Ve(!1);let t=O.useContext(xm),{basename:e,future:n,navigator:r}=O.useContext(li),{matches:i}=O.useContext(Mn),{pathname:s}=ao(),o=JSON.stringify(Cm(i,n.v7_relativeSplatPath)),l=O.useRef(!1);return HT(()=>{l.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=bm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Hr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const wC=O.createContext(null);function EC(t){let e=O.useContext(Mn).outlet;return e&&O.createElement(wC.Provider,{value:t},e)}function zj(){let{matches:t}=O.useContext(Mn),e=t[t.length-1];return e?e.params:{}}function WT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(li),{matches:i}=O.useContext(Mn),{pathname:s}=ao(),o=JSON.stringify(Cm(i,r.v7_relativeSplatPath));return O.useMemo(()=>bm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function TC(t,e){return IC(t,e)}function IC(t,e,n,r){oo()||Ve(!1);let{navigator:i}=O.useContext(li),{matches:s}=O.useContext(Mn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ao(),d;if(e){var f;let P=typeof e=="string"?so(e):e;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||Ve(!1),d=P}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let P=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let b=GP(t,{pathname:w}),k=PC(b&&b.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Hr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Hr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&k?O.createElement($c.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Nr.Pop}},k):k}function SC(){let t=NC(),e=mC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,s)}const AC=O.createElement(SC,null);class RC extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Mn.Provider,{value:this.props.routeContext},O.createElement(zT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kC(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(xm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Mn.Provider,{value:e},r)}function PC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:w}=n,b=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||b){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let w,b=!1,k=null,P=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,k=f.route.errorElement||AC,u&&(c<0&&m===0?(DC("route-fallback",!1),b=!0,P=null):c===m&&(b=!0,P=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),_=()=>{let T;return w?T=k:b?T=P:f.route.Component?T=O.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=d,O.createElement(kC,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(RC,{location:n.location,revalidation:n.revalidation,component:k,error:w,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var qT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qT||{}),rc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rc||{});function CC(t){let e=O.useContext(xm);return e||Ve(!1),e}function bC(t){let e=O.useContext(yC);return e||Ve(!1),e}function xC(t){let e=O.useContext(Mn);return e||Ve(!1),e}function KT(t){let e=xC(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function NC(){var t;let e=O.useContext(zT),n=bC(rc.UseRouteError),r=KT(rc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function OC(){let{router:t}=CC(qT.UseNavigateStable),e=KT(rc.UseNavigateStable),n=O.useRef(!1);return HT(()=>{n.current=!0}),O.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,za({fromRouteId:e},s)))},[t,e])}const ov={};function DC(t,e,n){!e&&!ov[t]&&(ov[t]=!0)}function LC(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function ma(t){let{to:e,replace:n,state:r,relative:i}=t;oo()||Ve(!1);let{future:s,static:o}=O.useContext(li),{matches:l}=O.useContext(Mn),{pathname:u}=ao(),c=Nm(),d=bm(e,Cm(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Om(t){return EC(t.context)}function Y(t){Ve(!1)}function VC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nr.Pop,navigator:s,static:o=!1,future:l}=t;oo()&&Ve(!1);let u=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:u,navigator:s,static:o,future:za({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=so(r));let{pathname:d="/",search:f="",hash:m="",state:w=null,key:b="default"}=r,k=O.useMemo(()=>{let P=Pm(d,u);return P==null?null:{location:{pathname:P,search:f,hash:m,state:w,key:b},navigationType:i}},[u,d,f,m,w,b,i]);return k==null?null:O.createElement(li.Provider,{value:c},O.createElement($c.Provider,{children:n,value:k}))}function MC(t){let{children:e,location:n}=t;return TC(Qf(e),n)}new Promise(()=>{});function Qf(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let s=[...e,i];if(r.type===O.Fragment){n.push.apply(n,Qf(r.props.children,s));return}r.type!==Y&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yf(){return Yf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yf.apply(this,arguments)}function UC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function FC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function jC(t,e){return t.button===0&&(!e||e==="_self")&&!FC(t)}const $C=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],BC="6";try{window.__reactRouterVersion=BC}catch{}const zC="startTransition",av=xR[zC];function HC(t){let{basename:e,children:n,future:r,window:i}=t,s=O.useRef();s.current==null&&(s.current=WP({window:i,v5Compat:!0}));let o=s.current,[l,u]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=O.useCallback(f=>{c&&av?av(()=>u(f)):u(f)},[u,c]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>LC(r),[r]),O.createElement(VC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const WC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hj=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=UC(e,$C),{basename:w}=O.useContext(li),b,k=!1;if(typeof c=="string"&&qC.test(c)&&(b=c,WC))try{let T=new URL(window.location.href),D=c.startsWith("//")?new URL(T.protocol+c):new URL(c),U=Pm(D.pathname,w);D.origin===T.origin&&U!=null?c=U+D.search+D.hash:k=!0}catch{}let P=_C(c,{relative:i}),v=KC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function _(T){r&&r(T),T.defaultPrevented||v(T)}return O.createElement("a",Yf({},m,{href:b||P,onClick:k||s?r:_,ref:n,target:u}))});var lv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(lv||(lv={}));var uv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(uv||(uv={}));function KC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Nm(),c=ao(),d=WT(t,{relative:o});return O.useCallback(f=>{if(jC(f,n)){f.preventDefault();let m=r!==void 0?r:nc(c)===nc(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let GC={data:""},QC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||GC},YC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,JC=/\/\*[^]*?\*\/|  +/g,cv=/\n+/g,Ar=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Ar(o,s):s+"{"+Ar(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Ar(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Ar.p?Ar.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},jn={},GT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+GT(t[n]);return e}return t},XC=(t,e,n,r,i)=>{let s=GT(t),o=jn[s]||(jn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!jn[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=YC.exec(c.replace(JC,""));)d[4]?m.shift():d[3]?(f=d[3].replace(cv," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(cv," ").trim();return m[0]})(t);jn[o]=Ar(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&jn.g?jn.g:null;return n&&(jn.g=jn[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(jn[o],e,r,l),o},ZC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Ar(l,""):l===!1?"":l}return r+i+(o??"")},"");function Bc(t){let e=this||{},n=t.call?t(e.p):t;return XC(n.unshift?n.raw?ZC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,QC(e.target),e.g,e.o,e.k)}let QT,Jf,Xf;Bc.bind({g:1});let nr=Bc.bind({k:1});function eb(t,e,n,r){Ar.p=e,QT=t,Jf=n,Xf=r}function ui(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:Jf&&Jf()},l),n.o=/ *go\d+/.test(u),l.className=Bc.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),Xf&&c[0]&&Xf(l),QT(c,l)}return e?e(i):i}}var tb=t=>typeof t=="function",ic=(t,e)=>tb(t)?t(e):t,nb=(()=>{let t=0;return()=>(++t).toString()})(),YT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),rb=20,Dm="default",JT=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return JT(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},gu=[],XT={toasts:[],pausedAt:void 0,settings:{toastLimit:rb}},Pn={},ZT=(t,e=Dm)=>{Pn[e]=JT(Pn[e]||XT,t),gu.forEach(([n,r])=>{n===e&&r(Pn[e])})},eI=t=>Object.keys(Pn).forEach(e=>ZT(t,e)),ib=t=>Object.keys(Pn).find(e=>Pn[e].toasts.some(n=>n.id===t)),zc=(t=Dm)=>e=>{ZT(e,t)},sb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ob=(t={},e=Dm)=>{let[n,r]=O.useState(Pn[e]||XT),i=O.useRef(Pn[e]);O.useEffect(()=>(i.current!==Pn[e]&&r(Pn[e]),gu.push([e,r]),()=>{let o=gu.findIndex(([l])=>l===e);o>-1&&gu.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||sb[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},ab=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||nb()}),ul=t=>(e,n)=>{let r=ab(e,t,n);return zc(r.toasterId||ib(r.id))({type:2,toast:r}),r.id},be=(t,e)=>ul("blank")(t,e);be.error=ul("error");be.success=ul("success");be.loading=ul("loading");be.custom=ul("custom");be.dismiss=(t,e)=>{let n={type:3,toastId:t};e?zc(e)(n):eI(n)};be.dismissAll=t=>be.dismiss(void 0,t);be.remove=(t,e)=>{let n={type:4,toastId:t};e?zc(e)(n):eI(n)};be.removeAll=t=>be.remove(void 0,t);be.promise=(t,e,n)=>{let r=be.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?ic(e.success,i):void 0;return s?be.success(s,{id:r,...n,...n==null?void 0:n.success}):be.dismiss(r),i}).catch(i=>{let s=e.error?ic(e.error,i):void 0;s?be.error(s,{id:r,...n,...n==null?void 0:n.error}):be.dismiss(r)}),t};var lb=1e3,ub=(t,e="default")=>{let{toasts:n,pausedAt:r}=ob(t,e),i=O.useRef(new Map).current,s=O.useCallback((f,m=lb)=>{if(i.has(f))return;let w=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,w)},[]);O.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(w=>{if(w.duration===1/0)return;let b=(w.duration||0)+w.pauseDuration-(f-w.createdAt);if(b<0){w.visible&&be.dismiss(w.id);return}return setTimeout(()=>be.dismiss(w.id,e),b)});return()=>{m.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=O.useCallback(zc(e),[e]),l=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=O.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=O.useCallback((f,m)=>{let{reverseOrder:w=!1,gutter:b=8,defaultPosition:k}=m||{},P=n.filter(T=>(T.position||k)===(f.position||k)&&T.height),v=P.findIndex(T=>T.id===f.id),_=P.filter((T,D)=>D<v&&T.visible).length;return P.filter(T=>T.visible).slice(...w?[_+1]:[0,_]).reduce((T,D)=>T+(D.height||0)+b,0)},[n]);return O.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},cb=nr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,hb=nr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,db=nr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,fb=ui("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${cb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${hb} 0.15s ease-out forwards;
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
    animation: ${db} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pb=nr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,mb=ui("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${pb} 1s linear infinite;
`,gb=nr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,yb=nr`
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
}`,_b=ui("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${gb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${yb} 0.2s ease-out forwards;
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
`,vb=ui("div")`
  position: absolute;
`,wb=ui("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Eb=nr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Tb=ui("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Eb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ib=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(Tb,null,e):e:n==="blank"?null:O.createElement(wb,null,O.createElement(mb,{...r}),n!=="loading"&&O.createElement(vb,null,n==="error"?O.createElement(fb,{...r}):O.createElement(_b,{...r})))},Sb=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ab=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Rb="0%{opacity:0;} 100%{opacity:1;}",kb="0%{opacity:1;} 100%{opacity:0;}",Pb=ui("div")`
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
`,Cb=ui("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,bb=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=YT()?[Rb,kb]:[Sb(n),Ab(n)];return{animation:e?`${nr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${nr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},xb=O.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?bb(t.position||e||"top-center",t.visible):{opacity:0},s=O.createElement(Ib,{toast:t}),o=O.createElement(Cb,{...t.ariaProps},ic(t.message,t));return O.createElement(Pb,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):O.createElement(O.Fragment,null,s,o))});eb(O.createElement);var Nb=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=O.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:s,className:e,style:n},i)},Ob=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:YT()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Db=Bc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Gl=16,Lb=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=ub(n,s);return O.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Gl,left:Gl,right:Gl,bottom:Gl,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=Ob(f,m);return O.createElement(Nb,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Db:"",style:w},d.type==="custom"?ic(d.message,d):i?i(d):O.createElement(xb,{toast:d,position:f}))}))},Id=be,Vb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Mb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ji=(t,e)=>{const n=O.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>O.createElement("svg",{ref:c,...Vb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${Mb(t)}`,...u},[...e.map(([d,f])=>O.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},Ub=Ji("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),hv=Ji("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),Zf=Ji("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),tI=Ji("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Fb=Ji("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),jb=Ji("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),$b=Ji("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Bb=()=>{};/**
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
 */const nI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},rI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new Hb;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),f!==64){const b=c<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wb=function(t){const e=nI(t);return rI.encodeByteArray(e,!0)},sc=function(t){return Wb(t).replace(/\./g,"")},iI=function(t){try{return rI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kb=()=>qb().__FIREBASE_DEFAULTS__,Gb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&iI(t[1]);return e&&JSON.parse(e)},Hc=()=>{try{return Bb()||Kb()||Gb()||Qb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sI=t=>{var e,n;return(n=(e=Hc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},oI=t=>{const e=sI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aI=()=>{var t;return(t=Hc())==null?void 0:t.config},lI=t=>{var e;return(e=Hc())==null?void 0:e[`_${t}`]};/**
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
 */class Yb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[sc(JSON.stringify(n)),sc(JSON.stringify(o)),l].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function Xb(){var e;const t=(e=Hc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ex(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nx(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rx(){return!Xb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cI(){try{return typeof indexedDB=="object"}catch{return!1}}function hI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function ix(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const sx="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sx,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ox(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new wn(i,l,r)}}function ox(t,e){return t.replace(ax,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ax=/\{\$([^}]+)}/g;function lx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dv(s)&&dv(o)){if(!Xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dv(t){return t!==null&&typeof t=="object"}/**
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
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ux(t,e){const n=new cx(t,e);return n.subscribe.bind(n)}class cx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");hx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Zi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lm(t){return(await fetch(t,{credentials:"include"})).ok}class sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Si="[DEFAULT]";/**
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
 */class dx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(px(e))try{this.getOrInitializeService({instanceIdentifier:Si})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Si){return this.instances.has(e)}getOptions(e=Si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Si){return this.component?this.component.multipleInstances?e:Si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fx(t){return t===Si?void 0:t}function px(t){return t.instantiationMode==="EAGER"}/**
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
 */class mx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const gx={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},yx=oe.INFO,_x={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},vx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_x[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vm{constructor(e){this.name=e,this._logLevel=yx,this._logHandler=vx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const wx=(t,e)=>e.some(n=>t instanceof n);let fv,pv;function Ex(){return fv||(fv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tx(){return pv||(pv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dI=new WeakMap,ep=new WeakMap,fI=new WeakMap,Ad=new WeakMap,Mm=new WeakMap;function Ix(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dI.set(n,t)}).catch(()=>{}),Mm.set(e,t),e}function Sx(t){if(ep.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ep.set(t,e)}let tp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ep.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ax(t){tp=t(tp)}function Rx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rd(this),e,...n);return fI.set(r,e.sort?e.sort():[e]),Yn(r)}:Tx().includes(t)?function(...e){return t.apply(Rd(this),e),Yn(dI.get(this))}:function(...e){return Yn(t.apply(Rd(this),e))}}function kx(t){return typeof t=="function"?Rx(t):(t instanceof IDBTransaction&&Sx(t),wx(t,Ex())?new Proxy(t,tp):t)}function Yn(t){if(t instanceof IDBRequest)return Ix(t);if(Ad.has(t))return Ad.get(t);const e=kx(t);return e!==t&&(Ad.set(t,e),Mm.set(e,t)),e}const Rd=t=>Mm.get(t);function Wc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Yn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Yn(o.result),u.oldVersion,u.newVersion,Yn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function kd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Yn(n).then(()=>{})}const Px=["get","getKey","getAll","getAllKeys","count"],Cx=["put","add","delete","clear"],Pd=new Map;function mv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Cx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Px.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Pd.set(e,s),s}Ax(t=>({...t,get:(e,n,r)=>mv(e,n)||t.get(e,n,r),has:(e,n)=>!!mv(e,n)||t.has(e,n)}));/**
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
 */class bx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const np="@firebase/app",gv="0.14.10";/**
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
 */const rr=new Vm("@firebase/app"),Nx="@firebase/app-compat",Ox="@firebase/analytics-compat",Dx="@firebase/analytics",Lx="@firebase/app-check-compat",Vx="@firebase/app-check",Mx="@firebase/auth",Ux="@firebase/auth-compat",Fx="@firebase/database",jx="@firebase/data-connect",$x="@firebase/database-compat",Bx="@firebase/functions",zx="@firebase/functions-compat",Hx="@firebase/installations",Wx="@firebase/installations-compat",qx="@firebase/messaging",Kx="@firebase/messaging-compat",Gx="@firebase/performance",Qx="@firebase/performance-compat",Yx="@firebase/remote-config",Jx="@firebase/remote-config-compat",Xx="@firebase/storage",Zx="@firebase/storage-compat",eN="@firebase/firestore",tN="@firebase/ai",nN="@firebase/firestore-compat",rN="firebase",iN="12.11.0";/**
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
 */const rp="[DEFAULT]",sN={[np]:"fire-core",[Nx]:"fire-core-compat",[Dx]:"fire-analytics",[Ox]:"fire-analytics-compat",[Vx]:"fire-app-check",[Lx]:"fire-app-check-compat",[Mx]:"fire-auth",[Ux]:"fire-auth-compat",[Fx]:"fire-rtdb",[jx]:"fire-data-connect",[$x]:"fire-rtdb-compat",[Bx]:"fire-fn",[zx]:"fire-fn-compat",[Hx]:"fire-iid",[Wx]:"fire-iid-compat",[qx]:"fire-fcm",[Kx]:"fire-fcm-compat",[Gx]:"fire-perf",[Qx]:"fire-perf-compat",[Yx]:"fire-rc",[Jx]:"fire-rc-compat",[Xx]:"fire-gcs",[Zx]:"fire-gcs-compat",[eN]:"fire-fst",[nN]:"fire-fst-compat",[tN]:"fire-vertex","fire-js":"fire-js",[rN]:"fire-js-all"};/**
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
 */const oc=new Map,oN=new Map,ip=new Map;function yv(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(ip.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;ip.set(e,t);for(const n of oc.values())yv(n,t);for(const n of oN.values())yv(n,t);return!0}function es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function je(t){return t==null?!1:t.settings!==void 0}/**
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
 */const aN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new Xi("app","Firebase",aN);/**
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
 */class lN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=iN;function pI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:rp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Wr.create("bad-app-name",{appName:String(i)});if(n||(n=aI()),!n)throw Wr.create("no-options");const s=oc.get(i);if(s){if(Xr(n,s.options)&&Xr(r,s.config))return s;throw Wr.create("duplicate-app",{appName:i})}const o=new mx(i);for(const u of ip.values())o.addComponent(u);const l=new lN(n,r,o);return oc.set(i,l),l}function qc(t=rp){const e=oc.get(t);if(!e&&t===rp&&aI())return pI();if(!e)throw Wr.create("no-app",{appName:t});return e}function Lt(t,e,n){let r=sN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(o.join(" "));return}_n(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const uN="firebase-heartbeat-database",cN=1,Ha="firebase-heartbeat-store";let Cd=null;function mI(){return Cd||(Cd=Wc(uN,cN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ha)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Cd}async function hN(t){try{const n=(await mI()).transaction(Ha),r=await n.objectStore(Ha).get(gI(t));return await n.done,r}catch(e){if(e instanceof wn)rr.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function _v(t,e){try{const r=(await mI()).transaction(Ha,"readwrite");await r.objectStore(Ha).put(e,gI(t)),await r.done}catch(n){if(n instanceof wn)rr.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function gI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dN=1024,fN=30;class pN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>fN){const o=yN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vv(),{heartbeatsToSend:r,unsentEntries:i}=mN(this._heartbeatsCache.heartbeats),s=sc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function vv(){return new Date().toISOString().substring(0,10)}function mN(t,e=dN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cI()?hI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _v(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _v(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wv(t){return sc(JSON.stringify({version:2,heartbeats:t})).length}function yN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function _N(t){_n(new sn("platform-logger",e=>new bx(e),"PRIVATE")),_n(new sn("heartbeat",e=>new pN(e),"PRIVATE")),Lt(np,gv,t),Lt(np,gv,"esm2020"),Lt("fire-js","")}_N("");function yI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vN=yI,_I=new Xi("auth","Firebase",yI());/**
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
 */const ac=new Vm("@firebase/auth");function wN(t,...e){ac.logLevel<=oe.WARN&&ac.warn(`Auth (${ts}): ${t}`,...e)}function yu(t,...e){ac.logLevel<=oe.ERROR&&ac.error(`Auth (${ts}): ${t}`,...e)}/**
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
 */function on(t,...e){throw Fm(t,...e)}function Vt(t,...e){return Fm(t,...e)}function Um(t,e,n){const r={...vN(),[e]:n};return new Xi("auth","Firebase",r).create(e,{appName:t.name})}function It(t){return Um(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),Um(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _I.create(t,...e)}function H(t,e,...n){if(!t)throw Fm(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yu(e),new Error(e)}function ir(t,e){t||Kn(e)}/**
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
 */function Wa(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function jm(){return Ev()==="http:"||Ev()==="https:"}function Ev(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function EN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jm()||ex()||"connection"in navigator)?navigator.onLine:!0}function TN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Jb()||tx()}get(){return EN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $m(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AN=new cl(3e4,6e4);function Ge(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qe(t,e,n,r,i={}){return wI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=lo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return Zb()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Zi(t.emulatorConfig.host)&&(c.credentials="include"),vI.fetch()(await EI(t,t.config.apiHost,n,l),c)})}async function wI(t,e,n){t._canInitEmulator=!1;const r={...IN,...e};try{const i=new kN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ta(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Um(t,d,c);on(t,d)}}catch(i){if(i instanceof wn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function cr(t,e,n,r,i={}){const s=await Qe(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function EI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?$m(t.config,i):`${t.config.apiScheme}://${i}`;return SN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function RN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),AN.get())})}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Vt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Tv(t){return t!==void 0&&t.getResponse!==void 0}function Iv(t){return t!==void 0&&t.enterprise!==void 0}class TI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function PN(t){return(await Qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function II(t,e){return Qe(t,"GET","/v2/recaptchaConfig",Ge(t,e))}/**
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
 */async function CN(t,e){return Qe(t,"POST","/v1/accounts:delete",e)}async function bN(t,e){return Qe(t,"POST","/v1/accounts:update",e)}async function lc(t,e){return Qe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xN(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=Gc(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ga(bd(i.auth_time)),issuedAtTime:ga(bd(i.iat)),expirationTime:ga(bd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bd(t){return Number(t)*1e3}function Gc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yu("JWT malformed, contained fewer than 3 sections"),null;try{const i=iI(n);return i?JSON.parse(i):(yu("Failed to decode base64 JWT payload"),null)}catch(i){return yu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sv(t){const e=Gc(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ji(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&NN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ON{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qa(t){var f;const e=t.auth,n=await t.getIdToken(),r=await ji(t,lc(e,{idToken:n}));H(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?SI(i.providerUserInfo):[],o=LN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new sp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function DN(t){const e=ne(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function VN(t,e){const n=await wI(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await EI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Zi(t.emulatorConfig.host)&&(u.credentials="include"),vI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MN(t,e){return Qe(t,"POST","/v2/accounts:revokeToken",Ge(t,e))}/**
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
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Sv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Os;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
 */function wr(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ON(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ji(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xN(this,e)}reload(){return DN(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await ji(this,CN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:w,providerData:b,stsTokenManager:k}=n;H(f&&k,e,"internal-error");const P=Os.fromJSON(this.name,k);H(typeof f=="string",e,"internal-error"),wr(r,e.name),wr(i,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof w=="boolean",e,"internal-error"),wr(s,e.name),wr(o,e.name),wr(l,e.name),wr(u,e.name),wr(c,e.name),wr(d,e.name);const v=new hn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:c,lastLoginAt:d});return b&&Array.isArray(b)&&(v.providerData=b.map(_=>({..._}))),u&&(v._redirectEventId=u),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Os;i.updateFromServerResponse(n);const s=new hn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Os;l.updateFromIdToken(r);const u=new hn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Av=new Map;function Gn(t){ir(t instanceof Function,"Expected a class definition");let e=Av.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Av.set(t,e),e)}/**
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
 */class AI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AI.type="NONE";const Rv=AI;/**
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
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lc(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(Gn(Rv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gn(Rv);const o=_u(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await lc(e,{idToken:d}).catch(()=>{});if(!m)break;f=await hn._fromGetAccountInfoResponse(e,m,d)}else f=hn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ds(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ds(s,e,r))}}/**
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
 */function kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xI(e))return"Blackberry";if(NI(e))return"Webos";if(kI(e))return"Safari";if((e.includes("chrome/")||PI(e))&&!e.includes("edge/"))return"Chrome";if(bI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RI(t=yt()){return/firefox\//i.test(t)}function kI(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function PI(t=yt()){return/crios\//i.test(t)}function CI(t=yt()){return/iemobile/i.test(t)}function bI(t=yt()){return/android/i.test(t)}function xI(t=yt()){return/blackberry/i.test(t)}function NI(t=yt()){return/webos/i.test(t)}function Bm(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UN(t=yt()){var e;return Bm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function FN(){return nx()&&document.documentMode===10}function OI(t=yt()){return Bm(t)||bI(t)||NI(t)||xI(t)||/windows phone/i.test(t)||CI(t)}/**
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
 */function DI(t,e=[]){let n;switch(t){case"Browser":n=kv(yt());break;case"Worker":n=`${kv(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
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
 */class jN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $N(t,e={}){return Qe(t,"GET","/v2/passwordPolicy",Ge(t,e))}/**
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
 */const BN=6;class zN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??BN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class HN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pv(this),this.idTokenSubscription=new Pv(this),this.beforeStateQueue=new jN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_I,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lc(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(It(this));const n=e?ne(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $N(this),n=new zN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&wN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tt(t){return ne(t)}class Pv{constructor(e){this.auth=e,this.observer=null,this.addObserver=ux(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WN(t){hl=t}function zm(t){return hl.loadJS(t)}function qN(){return hl.recaptchaV2Script}function KN(){return hl.recaptchaEnterpriseScript}function GN(){return hl.gapiScript}function LI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const QN=500,YN=6e4,Ql=1e12;class JN{constructor(e){this.auth=e,this.counter=Ql,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new eO(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Ql;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Ql;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Ql;return(r=this._widgets.get(n))==null||r.execute(),""}}class XN{constructor(){this.enterprise=new ZN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class eO{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;H(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=tO(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},YN)},QN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function tO(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const nO="recaptcha-enterprise",ya="NO_RECAPTCHA";class VI{constructor(e){this.type=nO,this.auth=tt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{II(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new TI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Iv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ya)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Iv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=KN();u.length!==0&&(u+=l),zm(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ho(t,e,n,r=!1,i=!1){const s=new VI(t);let o;if(i)o=ya;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function qr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Ho(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Ho(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await Ho(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await Ho(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await Ho(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function rO(t){const e=tt(t),n=await II(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new TI(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new VI(e).verify()}/**
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
 */function iO(t,e){const n=es(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xr(s,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function sO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oO(t,e,n){const r=tt(t);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=MI(e),{host:o,port:l}=aO(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(Xr(c,r.config.emulator)&&Xr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Zi(o)?Lm(`${s}//${o}${u}`):i||lO()}function MI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aO(t){const e=MI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cv(o)}}}function Cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}/**
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
 */async function uO(t,e){return Qe(t,"POST","/v1/accounts:resetPassword",Ge(t,e))}async function cO(t,e){return Qe(t,"POST","/v1/accounts:update",e)}async function hO(t,e){return Qe(t,"POST","/v1/accounts:signUp",e)}async function dO(t,e){return Qe(t,"POST","/v1/accounts:update",Ge(t,e))}/**
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
 */async function fO(t,e){return cr(t,"POST","/v1/accounts:signInWithPassword",Ge(t,e))}async function Yc(t,e){return Qe(t,"POST","/v1/accounts:sendOobCode",Ge(t,e))}async function pO(t,e){return Yc(t,e)}async function mO(t,e){return Yc(t,e)}async function gO(t,e){return Yc(t,e)}async function yO(t,e){return Yc(t,e)}/**
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
 */async function _O(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",Ge(t,e))}async function vO(t,e){return cr(t,"POST","/v1/accounts:signInWithEmailLink",Ge(t,e))}/**
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
 */class Ka extends Qc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qr(e,n,"signInWithPassword",fO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _O(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qr(e,r,"signUpPassword",hO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return vO(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return cr(t,"POST","/v1/accounts:signInWithIdp",Ge(t,e))}/**
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
 */const wO="http://localhost";class sr extends Qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:wO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
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
 */async function bv(t,e){return Qe(t,"POST","/v1/accounts:sendVerificationCode",Ge(t,e))}async function EO(t,e){return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ge(t,e))}async function TO(t,e){const n=await cr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ge(t,e));if(n.temporaryProof)throw ta(t,"account-exists-with-different-credential",n);return n}const IO={USER_NOT_FOUND:"user-not-found"};async function SO(t,e){const n={...e,operation:"REAUTH"};return cr(t,"POST","/v1/accounts:signInWithPhoneNumber",Ge(t,n),IO)}/**
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
 */class _a extends Qc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new _a({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new _a({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return EO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return TO(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return SO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new _a({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function AO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RO(t){const e=Zo(ea(t)).link,n=e?Zo(ea(e)).deep_link_id:null,r=Zo(ea(t)).deep_link_id;return(r?Zo(ea(r)).link:null)||r||n||e||t}class Jc{constructor(e){const n=Zo(ea(e)),r=n.apiKey??null,i=n.oobCode??null,s=AO(n.mode??null);H(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=RO(e);try{return new Jc(n)}catch{return null}}}/**
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
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,n){return Ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Jc.parseLink(n);return H(r,"argument-error"),Ka._fromEmailAndCode(e,r.code,r.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends uo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vu extends co{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return H("providerId"in n&&"signInMethod"in n,"argument-error"),sr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return H(e.idToken||e.accessToken,"argument-error"),sr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return vu.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vu.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new vu(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Rr extends co{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rr.PROVIDER_ID="facebook.com";/**
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
 */class kn extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
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
 */class kr extends co{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
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
 */class Pr extends co{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
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
 */async function UI(t,e){return cr(t,"POST","/v1/accounts:signUp",Ge(t,e))}/**
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
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await hn._fromIdTokenResponse(e,r,i),o=xv(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xv(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Wj(t){var i;if(je(t.app))return Promise.reject(It(t));const e=tt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Ln({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await UI(e,{returnSecureToken:!0}),r=await Ln._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class uc extends wn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uc(e,n,r,i)}}function FI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function jI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function qj(t,e){const n=ne(t);await Xc(!0,n,e);const{providerUserInfo:r}=await bN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=jI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function $I(t,e,n=!1){const r=await ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}async function Xc(t,e,n){await qa(e);const r=jI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";H(r.has(n)===t,e.auth,i)}/**
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
 */async function kO(t,e,n=!1){const{auth:r}=t;if(je(r.app))return Promise.reject(It(r));const i="reauthenticate";try{const s=await ji(t,FI(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Gc(s.idToken);H(o,r,"internal-error");const{sub:l}=o;return H(t.uid===l,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
 */async function BI(t,e,n=!1){if(je(t.app))return Promise.reject(It(t));const r="signIn",i=await FI(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Zc(t,e){return BI(tt(t),e)}async function PO(t,e){const n=ne(t);return await Xc(!1,n,e.providerId),$I(n,e)}/**
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
 */async function CO(t,e){return cr(t,"POST","/v1/accounts:signInWithCustomToken",Ge(t,e))}/**
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
 */async function Kj(t,e){if(je(t.app))return Promise.reject(It(t));const n=tt(t),r=await CO(n,{token:e,returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */function eh(t,e,n){var r;H(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),H(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Hm(t){const e=tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gj(t,e,n){const r=tt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&eh(r,i,n),await qr(r,i,"getOobCode",mO,"EMAIL_PASSWORD_PROVIDER")}async function Qj(t,e,n){await uO(ne(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hm(t),r})}async function Yj(t,e){await dO(ne(t),{oobCode:e})}async function bO(t,e,n){if(je(t.app))return Promise.reject(It(t));const r=tt(t),o=await qr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UI,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Hm(t),u}),l=await Ln._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function xO(t,e,n){return je(t.app)?Promise.reject(It(t)):Zc(ne(t),ns.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hm(t),r})}/**
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
 */async function Jj(t,e,n){const r=tt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){H(l.handleCodeInApp,r,"argument-error"),l&&eh(r,o,l)}s(i,n),await qr(r,i,"getOobCode",gO,"EMAIL_PASSWORD_PROVIDER")}function Xj(t,e){const n=Jc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Zj(t,e,n){if(je(t.app))return Promise.reject(It(t));const r=ne(t),i=ns.credentialWithLink(e,n||Wa());return H(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Zc(r,i)}/**
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
 */async function NO(t,e){return Qe(t,"POST","/v1/accounts:createAuthUri",Ge(t,e))}/**
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
 */async function e6(t,e){const n=jm()?Wa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await NO(ne(t),r);return i||[]}async function t6(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&eh(n.auth,i,e);const{email:s}=await pO(n.auth,i);s!==t.email&&await t.reload()}async function n6(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&eh(r.auth,s,n);const{email:o}=await yO(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function OO(t,e){return Qe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function r6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ji(r,OO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function i6(t,e){const n=ne(t);return je(n.auth.app)?Promise.reject(It(n.auth)):zI(n,e,null)}function s6(t,e){return zI(ne(t),null,e)}async function zI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await ji(t,cO(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function DO(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=Gc(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Vs(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new LO(r,n);case"github.com":return new VO(r,n);case"google.com":return new MO(r,n);case"twitter.com":return new UO(r,n,t.screenName||null);case"custom":case"anonymous":return new Vs(r,null);default:return new Vs(r,e,n)}}class Vs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class HI extends Vs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class LO extends Vs{constructor(e,n){super(e,"facebook.com",n)}}class VO extends HI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class MO extends Vs{constructor(e,n){super(e,"google.com",n)}}class UO extends HI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function o6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:DO(n)}/**
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
 */function FO(t,e){return ne(t).setPersistence(e)}function jO(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function $O(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function BO(t,e,n,r){return ne(t).onAuthStateChanged(e,n,r)}function zO(t){return ne(t).signOut()}function a6(t,e){return tt(t).revokeAccessToken(e)}async function l6(t){return ne(t).delete()}/**
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
 */function Nv(t,e){return Qe(t,"POST","/v2/accounts/mfaEnrollment:start",Ge(t,e))}const cc="__sak";/**
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
 */class WI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cc,"1"),this.storage.removeItem(cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HO=1e3,WO=10;class qI extends WI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},HO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qI.type="LOCAL";const KI=qI;/**
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
 */class GI extends WI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GI.type="SESSION";const QI=GI;/**
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
 */function qO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new th(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await qO(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}th.receivers=[];/**
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
 */function nh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=nh("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ue(){return window}function GO(t){Ue().location.href=t}/**
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
 */function Wm(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function QO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function JO(){return Wm()?self:null}/**
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
 */const YI="firebaseLocalStorageDb",XO=1,hc="firebaseLocalStorage",JI="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rh(t,e){return t.transaction([hc],e?"readwrite":"readonly").objectStore(hc)}function ZO(){const t=indexedDB.deleteDatabase(YI);return new dl(t).toPromise()}function op(){const t=indexedDB.open(YI,XO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hc,{keyPath:JI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hc)?e(r):(r.close(),await ZO(),e(await op()))})})}async function Ov(t,e,n){const r=rh(t,!0).put({[JI]:e,value:n});return new dl(r).toPromise()}async function eD(t,e){const n=rh(t,!1).get(e),r=await new dl(n).toPromise();return r===void 0?null:r.value}function Dv(t,e){const n=rh(t,!0).delete(e);return new dl(n).toPromise()}const tD=800,nD=3;class XI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await op(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=th._getInstance(JO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await QO(),!this.activeServiceWorker)return;this.sender=new KO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await op();return await Ov(e,cc,"1"),await Dv(e,cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rh(i,!1).getAll();return new dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XI.type="LOCAL";const rD=XI;/**
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
 */function Lv(t,e){return Qe(t,"POST","/v2/accounts/mfaSignIn:start",Ge(t,e))}/**
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
 */const xd=LI("rcb"),iD=new cl(3e4,6e4);class sD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Ue().grecaptcha)!=null&&e.render)}load(e,n=""){return H(oD(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Tv(Ue().grecaptcha)?Promise.resolve(Ue().grecaptcha):new Promise((r,i)=>{const s=Ue().setTimeout(()=>{i(Vt(e,"network-request-failed"))},iD.get());Ue()[xd]=()=>{Ue().clearTimeout(s),delete Ue()[xd];const l=Ue().grecaptcha;if(!l||!Tv(l)){i(Vt(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${qN()}?${lo({onload:xd,render:"explicit",hl:n})}`;zm(o).catch(()=>{clearTimeout(s),i(Vt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Ue().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function oD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class aD{async load(e){return new JN(e)}clearedOneInstance(){}}/**
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
 */const va="recaptcha",lD={theme:"light",type:"image"};class uD{constructor(e,n,r={...lD}){this.parameters=r,this.type=va,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=tt(e),this.isInvisible=this.parameters.size==="invisible",H(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;H(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new aD:new sD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){H(!this.parameters.sitekey,this.auth,"argument-error"),H(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),H(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ue()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){H(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){H(jm()&&!Wm(),this.auth,"internal-error"),await cD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await PN(this.auth);H(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return H(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function cD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class ZI{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=_a._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function hD(t,e,n){if(je(t.app))return Promise.reject(It(t));const r=tt(t),i=await eS(r,e,ne(n));return new ZI(i,s=>Zc(r,s))}async function u6(t,e,n){const r=ne(t);await Xc(!1,r,"phone");const i=await eS(r.auth,e,ne(n));return new ZI(i,s=>PO(r,s))}async function eS(t,e,n){var r;if(!t._getRecaptchaConfig())try{await rO(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){H(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await qr(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===ya){H((n==null?void 0:n.type)===va,d,"argument-error");const m=await Nd(d,f,n);return Nv(d,m)}return Nv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{H(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;H(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await qr(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===ya){H((n==null?void 0:n.type)===va,f,"argument-error");const w=await Nd(f,m,n);return Lv(f,w)}return Lv(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await qr(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===ya){H((n==null?void 0:n.type)===va,c,"argument-error");const f=await Nd(c,d,n);return bv(c,f)}return bv(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Nd(t,e,n){H(n.type===va,t,"argument-error");const r=await n.verify();H(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function fl(t,e){return e?Gn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qm extends Qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dD(t){return BI(t.auth,new qm(t),t.bypassAuthState)}function fD(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),kO(n,new qm(t),t.bypassAuthState)}async function pD(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),$I(n,new qm(t),t.bypassAuthState)}/**
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
 */class tS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dD;case"linkViaPopup":case"linkViaRedirect":return pD;case"reauthViaPopup":case"reauthViaRedirect":return fD;default:on(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mD=new cl(2e3,1e4);async function Vv(t,e,n){if(je(t.app))return Promise.reject(Vt(t,"operation-not-supported-in-this-environment"));const r=tt(t);Kc(t,e,uo);const i=fl(r,n);return new Or(r,"signInViaPopup",e,i).executeNotNull()}async function c6(t,e,n){const r=ne(t);Kc(r.auth,e,uo);const i=fl(r.auth,n);return new Or(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Or extends tS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=nh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mD.get())};e()}}Or.currentPopupAction=null;/**
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
 */const gD="pendingRedirect",wu=new Map;class yD extends tS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await _D(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _D(t,e){const n=iS(e),r=rS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function nS(t,e){return rS(t)._set(iS(e),"true")}function vD(t,e){wu.set(t._key(),e)}function rS(t){return Gn(t._redirectPersistence)}function iS(t){return _u(gD,t.config.apiKey,t.name)}/**
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
 */function wD(t,e,n){return ED(t,e,n)}async function ED(t,e,n){if(je(t.app))return Promise.reject(It(t));const r=tt(t);Kc(t,e,uo),await r._initializationPromise;const i=fl(r,n);return await nS(i,r),i._openRedirect(r,e,"signInViaRedirect")}function h6(t,e,n){return TD(t,e,n)}async function TD(t,e,n){const r=ne(t);Kc(r.auth,e,uo),await r.auth._initializationPromise;const i=fl(r.auth,n);await Xc(!1,r,e.providerId),await nS(i,r.auth);const s=await SD(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function ID(t,e){return await tt(t)._initializationPromise,sS(t,e,!1)}async function sS(t,e,n=!1){if(je(t.app))return Promise.reject(It(t));const r=tt(t),i=fl(r,e),o=await new yD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function SD(t){const e=nh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const AD=10*60*1e3;class RD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oS(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mv(e))}saveEventToCache(e){this.cachedEventUids.add(Mv(e)),this.lastProcessedEventTime=Date.now()}}function Mv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oS(t);default:return!1}}/**
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
 */async function PD(t,e={}){return Qe(t,"GET","/v1/projects",e)}/**
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
 */const CD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bD=/^https?/;async function xD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PD(t);for(const n of e)try{if(ND(n))return}catch{}on(t,"unauthorized-domain")}function ND(t){const e=Wa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bD.test(n))return!1;if(CD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const OD=new cl(3e4,6e4);function Uv(){const t=Ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DD(t){return new Promise((e,n)=>{var i,s,o;function r(){Uv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uv(),n(Vt(t,"network-request-failed"))},timeout:OD.get()})}if((s=(i=Ue().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ue().gapi)!=null&&o.load)r();else{const l=LI("iframefcb");return Ue()[l]=()=>{gapi.load?r():n(Vt(t,"network-request-failed"))},zm(`${GN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function LD(t){return Eu=Eu||DD(t),Eu}/**
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
 */const VD=new cl(5e3,15e3),MD="__/auth/iframe",UD="emulator/auth/iframe",FD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $D(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$m(e,UD):`https://${t.config.authDomain}/${MD}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=jD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function BD(t){const e=await LD(t),n=Ue().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:$D(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),l=Ue().setTimeout(()=>{s(o)},VD.get());function u(){Ue().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const zD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HD=500,WD=600,qD="_blank",KD="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GD(t,e,n,r=HD,i=WD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...zD,width:r.toString(),height:i.toString(),top:s,left:o},c=yt().toLowerCase();n&&(l=PI(c)?qD:n),RI(c)&&(e=e||KD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,b])=>`${m}${w}=${b},`,"");if(UN(c)&&l!=="_self")return QD(e||"",l),new Fv(null);const f=window.open(e||"",l,d);H(f,t,"popup-blocked");try{f.focus()}catch{}return new Fv(f)}function QD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YD="__/auth/handler",JD="emulator/auth/handler",XD=encodeURIComponent("fac");async function jv(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof uo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",lx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof co){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${XD}=${encodeURIComponent(u)}`:"";return`${ZD(t)}?${lo(l).slice(1)}${c}`}function ZD({config:t}){return t.emulator?$m(t,JD):`https://${t.authDomain}/${YD}`}/**
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
 */const Od="webStorageSupport";class eL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QI,this._completeRedirectFn=sS,this._overrideRedirectResult=vD}async _openPopup(e,n,r,i){var o;ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await jv(e,n,r,Wa(),i);return GD(e,s,nh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jv(e,n,r,Wa(),i);return GO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ir(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BD(e),r=new RD(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Od,{type:Od},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Od];s!==void 0&&n(!!s),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OI()||kI()||Bm()}}const tL=eL;var $v="@firebase/auth",Bv="1.12.2";/**
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
 */class nL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iL(t){_n(new sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DI(t)},c=new HN(r,i,s,u);return sO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new sn("auth-internal",e=>{const n=tt(e.getProvider("auth").getImmediate());return(r=>new nL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt($v,Bv,rL(t)),Lt($v,Bv,"esm2020")}/**
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
 */const sL=5*60,oL=lI("authIdTokenMaxAge")||sL;let zv=null;const aL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oL)return;const i=n==null?void 0:n.token;zv!==i&&(zv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lL(t=qc()){const e=es(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iO(t,{popupRedirectResolver:tL,persistence:[rD,KI,QI]}),r=lI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aL(s.toString());$O(n,o,()=>o(n.currentUser)),jO(n,l=>o(l))}}const i=sI("auth");return i&&oO(n,`http://${i}`),n}function uL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}WN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Vt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iL("Browser");var cL="firebase",hL="12.11.0";/**
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
 */Lt(cL,hL,"app");var Hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,aS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function E(){}E.prototype=y.prototype,I.F=y.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(R,C,x){for(var S=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)S[Te-2]=arguments[Te];return y.prototype[C].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,E){E||(E=0);const R=Array(16);if(typeof y=="string")for(var C=0;C<16;++C)R[C]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(C=0;C<16;++C)R[C]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=I.g[0],E=I.g[1],C=I.g[2];let x=I.g[3],S;S=y+(x^E&(C^x))+R[0]+3614090360&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+R[1]+3905402710&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+R[2]+606105819&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+R[3]+3250441966&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(x^E&(C^x))+R[4]+4118548399&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+R[5]+1200080426&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+R[6]+2821735955&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+R[7]+4249261313&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(x^E&(C^x))+R[8]+1770035416&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+R[9]+2336552879&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+R[10]+4294925233&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+R[11]+2304563134&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(x^E&(C^x))+R[12]+1804603682&4294967295,y=E+(S<<7&4294967295|S>>>25),S=x+(C^y&(E^C))+R[13]+4254626195&4294967295,x=y+(S<<12&4294967295|S>>>20),S=C+(E^x&(y^E))+R[14]+2792965006&4294967295,C=x+(S<<17&4294967295|S>>>15),S=E+(y^C&(x^y))+R[15]+1236535329&4294967295,E=C+(S<<22&4294967295|S>>>10),S=y+(C^x&(E^C))+R[1]+4129170786&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+R[6]+3225465664&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+R[11]+643717713&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+R[0]+3921069994&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(E^C))+R[5]+3593408605&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+R[10]+38016083&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+R[15]+3634488961&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+R[4]+3889429448&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(E^C))+R[9]+568446438&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+R[14]+3275163606&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+R[3]+4107603335&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+R[8]+1163531501&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(C^x&(E^C))+R[13]+2850285829&4294967295,y=E+(S<<5&4294967295|S>>>27),S=x+(E^C&(y^E))+R[2]+4243563512&4294967295,x=y+(S<<9&4294967295|S>>>23),S=C+(y^E&(x^y))+R[7]+1735328473&4294967295,C=x+(S<<14&4294967295|S>>>18),S=E+(x^y&(C^x))+R[12]+2368359562&4294967295,E=C+(S<<20&4294967295|S>>>12),S=y+(E^C^x)+R[5]+4294588738&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+R[8]+2272392833&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+R[11]+1839030562&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+R[14]+4259657740&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^x)+R[1]+2763975236&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+R[4]+1272893353&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+R[7]+4139469664&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+R[10]+3200236656&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^x)+R[13]+681279174&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+R[0]+3936430074&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+R[3]+3572445317&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+R[6]+76029189&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(E^C^x)+R[9]+3654602809&4294967295,y=E+(S<<4&4294967295|S>>>28),S=x+(y^E^C)+R[12]+3873151461&4294967295,x=y+(S<<11&4294967295|S>>>21),S=C+(x^y^E)+R[15]+530742520&4294967295,C=x+(S<<16&4294967295|S>>>16),S=E+(C^x^y)+R[2]+3299628645&4294967295,E=C+(S<<23&4294967295|S>>>9),S=y+(C^(E|~x))+R[0]+4096336452&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+R[7]+1126891415&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+R[14]+2878612391&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+R[5]+4237533241&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~x))+R[12]+1700485571&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+R[3]+2399980690&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+R[10]+4293915773&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+R[1]+2240044497&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~x))+R[8]+1873313359&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+R[15]+4264355552&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+R[6]+2734768916&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+R[13]+1309151649&4294967295,E=C+(S<<21&4294967295|S>>>11),S=y+(C^(E|~x))+R[4]+4149444226&4294967295,y=E+(S<<6&4294967295|S>>>26),S=x+(E^(y|~C))+R[11]+3174756917&4294967295,x=y+(S<<10&4294967295|S>>>22),S=C+(y^(x|~E))+R[2]+718787259&4294967295,C=x+(S<<15&4294967295|S>>>17),S=E+(x^(C|~y))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const E=y-this.blockSize,R=this.C;let C=this.h,x=0;for(;x<y;){if(C==0)for(;x<=E;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(R[C++]=I.charCodeAt(x++),C==this.blockSize){i(this,R),C=0;break}}else for(;x<y;)if(R[C++]=I[x++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,E=0;E<4;++E)for(let R=0;R<32;R+=8)I[y++]=this.g[E]>>>R&255;return I};function s(I,y){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=y(I)}function o(I,y){this.h=y;const E=[];let R=!0;for(let C=I.length-1;C>=0;C--){const x=I[C]|0;R&&x==y||(E[C]=x,R=!1)}this.g=E}var l={};function u(I){return-128<=I&&I<128?s(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return P(c(-I));const y=[];let E=1;for(let R=0;I>=E;R++)y[R]=I/E|0,E*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return P(d(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let R=f;for(let x=0;x<I.length;x+=8){var C=Math.min(8,I.length-x);const S=parseInt(I.substring(x,x+C),y);C<8?(C=c(Math.pow(y,C)),R=R.j(C).add(c(S))):(R=R.j(E),R=R.add(c(S)))}return R}var f=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-P(this).m();let I=0,y=1;for(let E=0;E<this.g.length;E++){const R=this.i(E);I+=(R>=0?R:4294967296+R)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(k(this))return"-"+P(this).toString(I);const y=c(Math.pow(I,6));var E=this;let R="";for(;;){const C=D(E,y).g;E=v(E,C.j(y));let x=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=C,b(E))return x+R;for(;x.length<6;)x="0"+x;R=x+R}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=v(this,I),k(I)?-1:b(I)?0:1};function P(I){const y=I.g.length,E=[];for(let R=0;R<y;R++)E[R]=~I.g[R];return new o(E,~I.h).add(m)}t.abs=function(){return k(this)?P(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),E=[];let R=0;for(let C=0;C<=y;C++){let x=R+(this.i(C)&65535)+(I.i(C)&65535),S=(x>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);R=S>>>16,x&=65535,S&=65535,E[C]=S<<16|x}return new o(E,E[E.length-1]&-2147483648?-1:0)};function v(I,y){return I.add(P(y))}t.j=function(I){if(b(this)||b(I))return f;if(k(this))return k(I)?P(this).j(P(I)):P(P(this).j(I));if(k(I))return P(this.j(P(I)));if(this.l(w)<0&&I.l(w)<0)return c(this.m()*I.m());const y=this.g.length+I.g.length,E=[];for(var R=0;R<2*y;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(let C=0;C<I.g.length;C++){const x=this.i(R)>>>16,S=this.i(R)&65535,Te=I.i(C)>>>16,ze=I.i(C)&65535;E[2*R+2*C]+=S*ze,_(E,2*R+2*C),E[2*R+2*C+1]+=x*ze,_(E,2*R+2*C+1),E[2*R+2*C+1]+=S*Te,_(E,2*R+2*C+1),E[2*R+2*C+2]+=x*Te,_(E,2*R+2*C+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function T(I,y){this.g=I,this.h=y}function D(I,y){if(b(y))throw Error("division by zero");if(b(I))return new T(f,f);if(k(I))return y=D(P(I),y),new T(P(y.g),P(y.h));if(k(y))return y=D(I,P(y)),new T(P(y.g),y.h);if(I.g.length>30){if(k(I)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=y;R.l(I)<=0;)E=U(E),R=U(R);var C=$(E,1),x=$(R,1);for(R=$(R,2),E=$(E,2);!b(R);){var S=x.add(R);S.l(I)<=0&&(C=C.add(E),x=S),R=$(R,1),E=$(E,1)}return y=v(I,C.j(y)),new T(C,y)}for(C=f;I.l(y)>=0;){for(E=Math.max(1,Math.floor(I.m()/y.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),x=c(E),S=x.j(y);k(S)||S.l(I)>0;)E-=R,x=c(E),S=x.j(y);b(x)&&(x=m),C=C.add(x),I=v(I,S)}return new T(C,I)}t.B=function(I){return D(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)&I.i(R);return new o(E,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)|I.i(R);return new o(E,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),E=[];for(let R=0;R<y;R++)E[R]=this.i(R)^I.i(R);return new o(E,this.h^I.h)};function U(I){const y=I.g.length+1,E=[];for(let R=0;R<y;R++)E[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(E,I.h)}function $(I,y){const E=y>>5;y%=32;const R=I.g.length-E,C=[];for(let x=0;x<R;x++)C[x]=y>0?I.i(x+E)>>>y|I.i(x+E+1)<<32-y:I.i(x+E);return new o(C,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,aS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Kr=o}).apply(typeof Hv<"u"?Hv:typeof self<"u"?self:typeof window<"u"?window:{});var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lS,na,uS,Tu,ap,cS,hS,dS;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yl=="object"&&Yl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in p))break e;p=p[N]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,N,L){for(var B=Array(arguments.length-2),re=2;re<arguments.length;re++)B[re-2]=arguments[re];return h.prototype[N].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function b(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const L=N.length||0;a.length=p+L;for(let B=0;B<L;B++)a[p+B]=N[B]}else a.push(N)}}class k{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){o.setTimeout(()=>{throw a},0)}function v(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,p){const g=T.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new k(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,$=!1,I=new _,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(E)}};function E(){for(var a;a=v();){try{a.h.call(a.g)}catch(p){P(p)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}$=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function Te(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(Te,C),Te.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ze="closure_listenable_"+(Math.random()*1e6|0),fi=0;function pi(a,h,p,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=N,this.key=++fi,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function j(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function Z(a){const h={};for(const p in a)h[p]=a[p];return h}const he="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lt(a,h){let p,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(p in g)a[p]=g[p];for(let L=0;L<he.length;L++)p=he[L],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function Ye(a){this.src=a,this.g={},this.h=0}Ye.prototype.add=function(a,h,p,g,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const B=kt(a,h,g,N);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new pi(h,this.src,L,!!g,N),h.fa=p,a.push(h)),h};function dr(a,h){const p=h.type;if(p in a.g){var g=a.g[p],N=Array.prototype.indexOf.call(g,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(g,N,1),L&&(q(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function kt(a,h,p,g){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==g)return N}return-1}var Kt="closure_lm_"+(Math.random()*1e6|0),ss={};function mi(a,h,p,g,N){if(g&&g.once)return Kg(a,h,p,g,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)mi(a,h[L],p,g,N);return null}return p=Nh(p),a&&a[ze]?a.J(h,p,l(g)?!!g.capture:!!g,N):Un(a,h,p,!1,g,N)}function Un(a,h,p,g,N,L){if(!h)throw Error("Invalid event type");const B=l(N)?!!N.capture:!!N;let re=bh(a);if(re||(a[Kt]=re=new Ye(a)),p=re.add(h,p,g,B,L),p.proxy)return p;if(g=F1(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)x||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Qg(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function F1(){function a(p){return h.call(a.src,a.listener,p)}const h=j1;return a}function Kg(a,h,p,g,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Kg(a,h[L],p,g,N);return null}return p=Nh(p),a&&a[ze]?a.K(h,p,l(g)?!!g.capture:!!g,N):Un(a,h,p,!0,g,N)}function Gg(a,h,p,g,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)Gg(a,h[L],p,g,N);else g=l(g)?!!g.capture:!!g,p=Nh(p),a&&a[ze]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=kt(h,p,g,N),p>-1&&(q(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=bh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=kt(h,p,g,N)),(p=a>-1?h[a]:null)&&Ch(p))}function Ch(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ze])dr(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(Qg(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=bh(h))?(dr(p,a),p.h==0&&(p.src=null,h[Kt]=null)):q(a)}}}function Qg(a){return a in ss?ss[a]:ss[a]="on"+a}function j1(a,h){if(a.da)a=!0;else{h=new Te(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&Ch(a),a=p.call(g,h)}return a}function bh(a){return a=a[Kt],a instanceof Ye?a:null}var xh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Nh(a){return typeof a=="function"?a:(a[xh]||(a[xh]=function(h){return a.handleEvent(h)}),a[xh])}function ut(){R.call(this),this.i=new Ye(this),this.M=this,this.G=null}f(ut,R),ut.prototype[ze]=!0,ut.prototype.removeEventListener=function(a,h,p,g){Gg(this,a,h,p,g)};function _t(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var N=h;h=new C(g,a),lt(h,N)}N=!0;let L,B;if(p)for(B=p.length-1;B>=0;B--)L=h.g=p[B],N=vl(L,g,!0,h)&&N;if(L=h.g=a,N=vl(L,g,!0,h)&&N,N=vl(L,g,!1,h)&&N,p)for(B=0;B<p.length;B++)L=h.g=p[B],N=vl(L,g,!1,h)&&N}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)q(p[g]);delete a.g[h],a.h--}}this.G=null},ut.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},ut.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function vl(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const B=h[L];if(B&&!B.da&&B.capture==p){const re=B.listener,He=B.ha||B.src;B.fa&&dr(a.i,B),N=re.call(He,g)!==!1&&N}}return N&&!g.defaultPrevented}function $1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Yg(a){a.g=$1(()=>{a.g=null,a.i&&(a.i=!1,Yg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class B1 extends R{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Yg(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(a){R.call(this),this.h=a,this.g={}}f(wo,R);var Jg=[];function Xg(a){j(a.g,function(h,p){this.g.hasOwnProperty(p)&&Ch(h)},a),a.g={}}wo.prototype.N=function(){wo.Z.N.call(this),Xg(this)},wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oh=o.JSON.stringify,z1=o.JSON.parse,H1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Zg(){}function ey(){}var Eo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dh(){C.call(this,"d")}f(Dh,C);function Lh(){C.call(this,"c")}f(Lh,C);var gi={},ty=null;function wl(){return ty=ty||new ut}gi.Ia="serverreachability";function ny(a){C.call(this,gi.Ia,a)}f(ny,C);function To(a){const h=wl();_t(h,new ny(h))}gi.STAT_EVENT="statevent";function ry(a,h){C.call(this,gi.STAT_EVENT,a),this.stat=h}f(ry,C);function vt(a){const h=wl();_t(h,new ry(h,a))}gi.Ja="timingevent";function iy(a,h){C.call(this,gi.Ja,a),this.size=h}f(iy,C);function Io(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function So(){this.g=!0}So.prototype.ua=function(){this.g=!1};function W1(a,h,p,g,N,L){a.info(function(){if(a.g)if(L){var B="",re=L.split("&");for(let pe=0;pe<re.length;pe++){var He=re[pe].split("=");if(He.length>1){const Je=He[0];He=He[1];const Tn=Je.split("_");B=Tn.length>=2&&Tn[1]=="type"?B+(Je+"="+He+"&"):B+(Je+"=redacted&")}}}else B=null;else B=L;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+p+`
`+B})}function q1(a,h,p,g,N,L,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+B})}function os(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+G1(a,p)+(g?" "+g:"")})}function K1(a,h){a.info(function(){return"TIMEOUT: "+h})}So.prototype.info=function(){};function G1(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return Oh(L)}catch{return h}}var El={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},oy;function Vh(){}f(Vh,Zg),Vh.prototype.g=function(){return new XMLHttpRequest},oy=new Vh;function Ao(a){return encodeURIComponent(String(a))}function Q1(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function fr(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new wo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ay}function ay(){this.i=null,this.g="",this.h=!1}var ly={},Mh={};function Uh(a,h,p){a.M=1,a.A=Il(En(h)),a.u=p,a.R=!0,uy(a,null)}function uy(a,h){a.F=Date.now(),Tl(a),a.B=En(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ty(p.i,"t",g),a.C=0,p=a.j.L,a.h=new ay,a.g=jy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new B1(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Jg[0]=N.toString()),N=Jg);for(let L=0;L<N.length;L++){const B=mi(p,N[L],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?Z(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),To(),W1(a.i,a.v,a.B,a.l,a.S,a.u)}fr.prototype.ba=function(a){a=a.target;const h=this.O;h&&gr(a)==3?h.j():this.Y(a)},fr.prototype.Y=function(a){try{if(a==this.g)e:{const re=gr(this.g),He=this.g.ya(),pe=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||Cy(this.g)))){this.K||re!=4||He==7||(He==8||pe<=0?To(3):To(2)),Fh(this);var h=this.g.ca();this.X=h;var p=Y1(this);if(this.o=h==200,q1(this.i,this.v,this.B,this.l,this.S,re,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var L=g;break t}}L=null}if(a=L)os(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,jh(this,a);else{this.o=!1,this.m=3,vt(12),yi(this),Ro(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<p.length;)if(Je=J1(this,p),Je==Mh){re==4&&(this.m=4,vt(14),a=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==ly){this.m=4,vt(15),os(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else os(this.i,this.l,Je,null),jh(this,Je);if(cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||p.length!=0||this.h.h||(this.m=1,vt(16),a=!1),this.o=this.o&&a,!a)os(this.i,this.l,p,"[Invalid Chunked Response]"),yi(this),Ro(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Gh(B),B.P=!0,vt(11))}}else os(this.i,this.l,p,null),jh(this,p);re==4&&yi(this),this.o&&!this.K&&(re==4?Vy(this.j,this):(this.o=!1,Tl(this)))}else hR(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),yi(this),Ro(this)}}}catch{}finally{}};function Y1(a){if(!cy(a))return a.g.la();const h=Cy(a.g);if(h==="")return"";let p="";const g=h.length,N=gr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return yi(a),Ro(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<g;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(N&&L==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function cy(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function J1(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?Mh:(p=Number(h.substring(p,g)),isNaN(p)?ly:(g+=1,g+p>h.length?Mh:(h=h.slice(g,g+p),a.C=g+p,h)))}fr.prototype.cancel=function(){this.K=!0,yi(this)};function Tl(a){a.T=Date.now()+a.H,hy(a,a.H)}function hy(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Io(c(a.aa,a),h)}function Fh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}fr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(K1(this.i,this.B),this.M!=2&&(To(),vt(17)),yi(this),this.m=2,Ro(this)):hy(this,this.T-a)};function Ro(a){a.j.I==0||a.K||Vy(a.j,a)}function yi(a){Fh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Xg(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function jh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||$h(p.h,a))){if(!a.L&&$h(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Pl(p),Rl(p);else break e;Kh(p),vt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Io(c(p.Va,p),6e3));py(p.h)<=1&&p.ta&&(p.ta=void 0)}else vi(p,11)}else if((a.L||p.g==a)&&Pl(p),!S(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let pe=N[h];const Je=pe[0];if(!(Je<=p.K))if(p.K=Je,pe=pe[1],p.I==2)if(pe[0]=="c"){p.M=pe[1],p.ba=pe[2];const Tn=pe[3];Tn!=null&&(p.ka=Tn,p.j.info("VER="+p.ka));const wi=pe[4];wi!=null&&(p.za=wi,p.j.info("SVER="+p.za));const yr=pe[5];yr!=null&&typeof yr=="number"&&yr>0&&(g=1.5*yr,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const _r=a.g;if(_r){const bl=_r.g?_r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bl){var L=g.h;L.g||bl.indexOf("spdy")==-1&&bl.indexOf("quic")==-1&&bl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Bh(L,L.h),L.h=null))}if(g.G){const Qh=_r.g?_r.g.getResponseHeader("X-HTTP-Session-Id"):null;Qh&&(g.wa=Qh,_e(g.J,g.G,Qh))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var B=a;if(g.na=Fy(g,g.L?g.ba:null,g.W),B.L){my(g.h,B);var re=B,He=g.O;He&&(re.H=He),re.D&&(Fh(re),Tl(re)),g.g=B}else Dy(g);p.i.length>0&&kl(p)}else pe[0]!="stop"&&pe[0]!="close"||vi(p,7);else p.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?vi(p,7):qh(p):pe[0]!="noop"&&p.l&&p.l.qa(pe),p.A=0)}}To(4)}catch{}}var X1=class{constructor(a,h){this.g=a,this.map=h}};function dy(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fy(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function py(a){return a.h?1:a.g?a.g.size:0}function $h(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Bh(a,h){a.g?a.g.add(h):a.h=h}function my(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}dy.prototype.cancel=function(){if(this.i=gy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gy(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return w(a.i)}var yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z1(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let N,L=null;g>=0?(N=a[p].substring(0,g),L=a[p].substring(g+1)):N=a[p],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function pr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof pr?(this.l=a.l,ko(this,a.j),this.o=a.o,this.g=a.g,Po(this,a.u),this.h=a.h,zh(this,Iy(a.i)),this.m=a.m):a&&(h=String(a).match(yy))?(this.l=!1,ko(this,h[1]||"",!0),this.o=Co(h[2]||""),this.g=Co(h[3]||"",!0),Po(this,h[4]),this.h=Co(h[5]||"",!0),zh(this,h[6]||"",!0),this.m=Co(h[7]||"")):(this.l=!1,this.i=new xo(null,this.l))}pr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(bo(h,_y,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(bo(h,_y,!0),"@"),a.push(Ao(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(bo(p,p.charAt(0)=="/"?nR:tR,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",bo(p,iR)),a.join("")},pr.prototype.resolve=function(a){const h=En(this);let p=!!a.j;p?ko(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)Po(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let B=0;B<N.length;){const re=N[B++];re=="."?g&&B==N.length&&L.push(""):re==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),g&&B==N.length&&L.push("")):(L.push(re),g=!0)}g=L.join("/")}else g=N}return p?h.h=g:p=a.i.toString()!=="",p?zh(h,Iy(a.i)):p=!!a.m,p&&(h.m=a.m),h};function En(a){return new pr(a)}function ko(a,h,p){a.j=p?Co(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Po(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function zh(a,h,p){h instanceof xo?(a.i=h,sR(a.i,a.l)):(p||(h=bo(h,rR)),a.i=new xo(h,a.l))}function _e(a,h,p){a.i.set(h,p)}function Il(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Co(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,eR),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function eR(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _y=/[#\/\?@]/g,tR=/[#\?:]/g,nR=/[#\?]/g,rR=/[#\?@]/g,iR=/#/g;function xo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function _i(a){a.g||(a.g=new Map,a.h=0,a.i&&Z1(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=xo.prototype,t.add=function(a,h){_i(this),this.i=null,a=as(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function vy(a,h){_i(a),h=as(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function wy(a,h){return _i(a),h=as(a,h),a.g.has(h)}t.forEach=function(a,h){_i(this),this.g.forEach(function(p,g){p.forEach(function(N){a.call(h,N,g,this)},this)},this)};function Ey(a,h){_i(a);let p=[];if(typeof h=="string")wy(a,h)&&(p=p.concat(a.g.get(as(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return _i(this),this.i=null,a=as(this,a),wy(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ey(this,a),a.length>0?String(a[0]):h):h};function Ty(a,h,p){vy(a,h),p.length>0&&(a.i=null,a.g.set(as(a,h),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const N=Ao(p);p=Ey(this,p);for(let L=0;L<p.length;L++){let B=N;p[L]!==""&&(B+="="+Ao(p[L])),a.push(B)}}return this.i=a.join("&")};function Iy(a){const h=new xo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function as(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function sR(a,h){h&&!a.j&&(_i(a),a.i=null,a.g.forEach(function(p,g){const N=g.toLowerCase();g!=N&&(vy(this,g),Ty(this,N,p))},a)),a.j=h}function oR(a,h){const p=new So;if(o.Image){const g=new Image;g.onload=d(mr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=d(mr,p,"TestLoadImage: error",!1,h,g),g.onabort=d(mr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(mr,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function aR(a,h){const p=new So,g=new AbortController,N=setTimeout(()=>{g.abort(),mr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(N),L.ok?mr(p,"TestPingServer: ok",!0,h):mr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),mr(p,"TestPingServer: error",!1,h)})}function mr(a,h,p,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(p)}catch{}}function lR(){this.g=new H1}function Hh(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Hh,Zg),Hh.prototype.g=function(){return new Sl(this.i,this.h)};function Sl(a,h){ut.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Sl,ut),t=Sl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Oo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,No(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Oo(this)),this.g&&(this.readyState=3,Oo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sy(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sy(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?No(this):Oo(this),this.readyState==3&&Sy(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,No(this))},t.Na=function(a){this.g&&(this.response=a,No(this))},t.ga=function(){this.g&&No(this)};function No(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Oo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Oo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Sl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ay(a){let h="";return j(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Wh(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Ay(p),typeof a=="string"?p!=null&&Ao(p):_e(a,h,p))}function Pe(a){ut.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Pe,ut);var uR=/^https?$/i,cR=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():oy.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Ry(this,L);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)p.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())p.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(cR,h,void 0)>=0)||g||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of p)this.g.setRequestHeader(L,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Ry(this,L)}};function Ry(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ky(a),Al(a)}function ky(a){a.A||(a.A=!0,_t(a,"complete"),_t(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,_t(this,"complete"),_t(this,"abort"),Al(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Al(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Py(this):this.Xa())},t.Xa=function(){Py(this)};function Py(a){if(a.h&&typeof s<"u"){if(a.v&&gr(a)==4)setTimeout(a.Ca.bind(a),0);else if(_t(a,"readystatechange"),gr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=L===0){let B=String(a.D).match(yy)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!uR.test(B?B.toLowerCase():"")}p=g}if(p)_t(a,"complete"),_t(a,"success");else{a.o=6;try{var N=gr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",ky(a)}}finally{Al(a)}}}}function Al(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||_t(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function gr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return gr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),z1(h)}};function Cy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hR(a){const h={};a=(a.g&&gr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var p=Q1(a[g]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}z(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Do(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function by(a){this.za=0,this.i=[],this.j=new So,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Do("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Do("baseRetryDelayMs",5e3,a),this.Za=Do("retryDelaySeedMs",1e4,a),this.Ta=Do("forwardChannelMaxRetries",2,a),this.va=Do("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new dy(a&&a.concurrentRequestLimit),this.Ba=new lR,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=by.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){vt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=Fy(this,null,this.W),kl(this)};function qh(a){if(xy(a),a.I==3){var h=a.V++,p=En(a.J);if(_e(p,"SID",a.M),_e(p,"RID",h),_e(p,"TYPE","terminate"),Lo(a,p),h=new fr(a,a.j,h),h.M=2,h.A=Il(En(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=jy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Tl(h)}Uy(a)}function Rl(a){a.g&&(Gh(a),a.g.cancel(),a.g=null)}function xy(a){Rl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Pl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function kl(a){if(!fy(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),$||(U(),$=!0),I.add(h,a),a.D=0}}function dR(a,h){return py(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Io(c(a.Ea,a,h),My(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new fr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=Z(L),lt(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Oy(this,N,h),p=En(this.J),_e(p,"RID",a),_e(p,"CVER",22),this.G&&_e(p,"X-HTTP-Session-Id",this.G),Lo(this,p),L&&(this.R?h="headers="+Ao(Ay(L))+"&"+h:this.u&&Wh(p,this.u,L)),Bh(this.h,N),this.Ra&&_e(p,"TYPE","init"),this.S?(_e(p,"$req",h),_e(p,"SID","null"),N.U=!0,Uh(N,p,null)):Uh(N,p,h),this.I=2}}else this.I==3&&(a?Ny(this,a):this.i.length==0||fy(this.h)||Ny(this))};function Ny(a,h){var p;h?p=h.l:p=a.V++;const g=En(a.J);_e(g,"SID",a.M),_e(g,"RID",p),_e(g,"AID",a.K),Lo(a,g),a.u&&a.o&&Wh(g,a.u,a.o),p=new fr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Oy(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Bh(a.h,p),Uh(p,g,h)}function Lo(a,h){a.H&&j(a.H,function(p,g){_e(h,g,p)}),a.l&&j({},function(p,g){_e(h,g,p)})}function Oy(a,h,p){p=Math.min(a.i.length,p);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let re=-1;for(;;){const He=["count="+p];re==-1?p>0?(re=N[0].g,He.push("ofs="+re)):re=0:He.push("ofs="+re);let pe=!0;for(let Je=0;Je<p;Je++){var L=N[Je].g;const Tn=N[Je].map;if(L-=re,L<0)re=Math.max(0,N[Je].g-100),pe=!1;else try{L="req"+L+"_"||"";try{var B=Tn instanceof Map?Tn:Object.entries(Tn);for(const[wi,yr]of B){let _r=yr;l(yr)&&(_r=Oh(yr)),He.push(L+wi+"="+encodeURIComponent(_r))}}catch(wi){throw He.push(L+"type="+encodeURIComponent("_badmap")),wi}}catch{g&&g(Tn)}}if(pe){B=He.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function Dy(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),$||(U(),$=!0),I.add(h,a),a.A=0}}function Kh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Io(c(a.Da,a),My(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ly(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Io(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Rl(this),Ly(this))};function Gh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ly(a){a.g=new fr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=En(a.na);_e(h,"RID","rpc"),_e(h,"SID",a.M),_e(h,"AID",a.K),_e(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(h,"TO",a.ia),_e(h,"TYPE","xmlhttp"),Lo(a,h),a.u&&a.o&&Wh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Il(En(h)),p.u=null,p.R=!0,uy(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Rl(this),Kh(this),vt(19))};function Pl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Vy(a,h){var p=null;if(a.g==h){Pl(a),Gh(a),a.g=null;var g=2}else if($h(a.h,h))p=h.G,my(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=wl(),_t(g,new iy(g,p)),kl(a)}else Dy(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&dR(a,h)||g==2&&Kh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:vi(a,5);break;case 4:vi(a,10);break;case 3:vi(a,6);break;default:vi(a,2)}}}function My(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function vi(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),g=a.Ua;const N=!g;g=new pr(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ko(g,"https"),Il(g),N?oR(g.toString(),p):aR(g.toString(),p)}else vt(2);a.I=0,a.l&&a.l.pa(h),Uy(a),xy(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Uy(a){if(a.I=0,a.ja=[],a.l){const h=gy(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ja,h),b(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Fy(a,h,p){var g=p instanceof pr?En(p):new pr(p);if(g.g!="")h&&(g.g=h+"."+g.g),Po(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new pr(null);g&&ko(L,g),h&&(L.g=h),N&&Po(L,N),p&&(L.h=p),g=L}return p=a.G,h=a.wa,p&&h&&_e(g,p,h),_e(g,"VER",a.ka),Lo(a,g),g}function jy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Pe(new Hh({ab:p})):new Pe(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $y(){}t=$y.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Cl(){}Cl.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){ut.call(this),this.g=new by(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ls(this)}f(Ut,ut),Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){qh(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Oh(a),a=p);h.i.push(new X1(h.Ya++,a)),h.I==3&&kl(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,qh(this.g),delete this.g,Ut.Z.N.call(this)};function By(a){Dh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(By,Dh);function zy(){Lh.call(this),this.status=1}f(zy,Lh);function ls(a){this.g=a}f(ls,$y),ls.prototype.ra=function(){_t(this.g,"a")},ls.prototype.qa=function(a){_t(this.g,new By(a))},ls.prototype.pa=function(a){_t(this.g,new zy)},ls.prototype.oa=function(){_t(this.g,"b")},Cl.prototype.createWebChannel=Cl.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,dS=function(){return new Cl},hS=function(){return wl()},cS=gi,ap={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},El.NO_ERROR=0,El.TIMEOUT=8,El.HTTP_ERROR=6,Tu=El,sy.COMPLETE="complete",uS=sy,ey.EventType=Eo,Eo.OPEN="a",Eo.CLOSE="b",Eo.ERROR="c",Eo.MESSAGE="d",ut.prototype.listen=ut.prototype.J,na=ey,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,lS=Pe}).apply(typeof Yl<"u"?Yl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
 */let ho="12.11.0";function dL(t){ho=t}/**
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
 */const $i=new Vm("@firebase/firestore");function hs(){return $i.logLevel}function K(t,...e){if($i.logLevel<=oe.DEBUG){const n=e.map(Km);$i.debug(`Firestore (${ho}): ${t}`,...n)}}function or(t,...e){if($i.logLevel<=oe.ERROR){const n=e.map(Km);$i.error(`Firestore (${ho}): ${t}`,...n)}}function Bi(t,...e){if($i.logLevel<=oe.WARN){const n=e.map(Km);$i.warn(`Firestore (${ho}): ${t}`,...n)}}function Km(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function X(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,fS(t,r,n)}function fS(t,e,n){let r=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw or(r),new Error(r)}function de(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||fS(e,i,r)}function te(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class pL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mL{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new pS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class gL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class yL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new gL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _L{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function vL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Gm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function lp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Dd(i)===Dd(s)?ae(i,s):Dd(i)?1:-1}return ae(t.length,e.length)}const wL=55296,EL=57343;function Dd(t){const e=t.charCodeAt(0);return e>=wL&&e<=EL}function Ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const qv="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&X(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=An.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ae(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),i=An.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?An.extractNumericId(e).compare(An.extractNumericId(n)):lp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kr.fromString(e.substring(4,e.length-2))}}class ge extends An{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const TL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends An{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return TL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qv}static keyField(){return new it([qv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ge.fromString(e))}static fromName(e){return new J(ge.fromString(e).popFirst(5))}static empty(){return new J(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ge(e.slice()))}}/**
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
 */function mS(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function IL(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kv(t){if(!J.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gv(t){if(J.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ih(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ih(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function SL(t,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Be(t,e){const n={typeString:t};return e&&(n.value=e),n}function pl(t,e){if(!gS(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const Qv=-62135596800,Yv=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Yv);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Qv)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yv}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(pl(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Be("string",we._jsonSchemaVersion),seconds:Be("number"),nanoseconds:Be("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new we(0,0))}static max(){return new ee(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ga=-1;function AL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Zr(i,J.empty(),e)}function RL(t){return new Zr(t.readTime,t.key,Ga)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(ee.min(),J.empty(),Ga)}static max(){return new Zr(ee.max(),J.empty(),Ga)}}function kL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const PL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function fo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==PL)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function po(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sh.ce=-1;/**
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
 */const Qm=-1;function oh(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function xL(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const yS="";function NL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jv(e)),e=OL(t.get(n),e);return Jv(e)}function OL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case yS:n+="";break;default:n+=s}}return n}function Jv(t){return t+yS+""}/**
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
 */function Xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}}class Jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zv(this.data.getIterator())}getIteratorFrom(e){return new Zv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Zv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Ke(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class vS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vS("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const DL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ei(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=DL.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ti(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */const wS="server_timestamp",ES="__type__",TS="__previous_value__",IS="__local_write_time__";function Ym(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ES])==null?void 0:r.stringValue)===wS}function ah(t){const e=t.mapValue.fields[TS];return Ym(e)?ah(e):e}function Qa(t){const e=ei(t.mapValue.fields[IS].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class LL{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const fc="(default)";class Ya{constructor(e,n){this.projectId=e,this.database=n||fc}static empty(){return new Ya("","")}get isDefaultDatabase(){return this.database===fc}isEqual(e){return e instanceof Ya&&e.projectId===this.projectId&&e.database===this.database}}function VL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ya(t.options.projectId,e)}/**
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
 */const SS="__type__",AS="__max__",Xl={mapValue:{fields:{__type__:{stringValue:AS}}}},RS="__vector__",pc="value";function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ym(t)?4:UL(t)?9007199254740991:ML(t)?10:11:X(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qa(t).isEqual(Qa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ei(i.timestampValue),l=ei(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ti(i.bytesValue).isEqual(ti(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return De(i.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(i.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return De(i.integerValue)===De(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=De(i.doubleValue),l=De(s.doubleValue);return o===l?dc(o)===dc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Xv(o)!==Xv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return X(52216,{left:t})}}function Ja(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=ni(t),r=ni(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=De(s.integerValue||s.doubleValue),u=De(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ew(t.timestampValue,e.timestampValue);case 4:return ew(Qa(t),Qa(e));case 5:return lp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ti(s),u=ti(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ae(l[c],u[c]);if(d!==0)return d}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(De(s.latitude),De(o.latitude));return l!==0?l:ae(De(s.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,w,b,k;const l=s.fields||{},u=o.fields||{},c=(m=l[pc])==null?void 0:m.arrayValue,d=(w=u[pc])==null?void 0:w.arrayValue,f=ae(((b=c==null?void 0:c.values)==null?void 0:b.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return f!==0?f:tw(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Xl.mapValue&&o===Xl.mapValue)return 0;if(s===Xl.mapValue)return 1;if(o===Xl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=lp(u[f],d[f]);if(m!==0)return m;const w=Js(l[u[f]],c[d[f]]);if(w!==0)return w}return ae(u.length,d.length)}(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function ew(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=ei(t),r=ei(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function tw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Js(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Xs(t){return up(t)}function up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ei(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ti(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=up(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${up(n.fields[o])}`;return i+"}"}(t.mapValue):X(61005,{value:t})}function Iu(t){switch(ni(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ah(t);return e?16+Iu(e):16;case 5:return 2*t.stringValue.length;case 6:return ti(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Iu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ci(r.fields,(s,o)=>{i+=s.length+Iu(o)}),i}(t.mapValue);default:throw X(13486,{value:t})}}function nw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cp(t){return!!t&&"integerValue"in t}function Jm(t){return!!t&&"arrayValue"in t}function rw(t){return!!t&&"nullValue"in t}function iw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function ML(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[SS])==null?void 0:r.stringValue)===RS}function wa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wa(t.arrayValue.values[n]);return e}return{...t}}function UL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===AS}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wa(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=wa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new bt(wa(this.value))}}function kS(t){const e=[];return ci(t.fields,(n,r)=>{const i=new it([n]);if(Su(r)){const s=kS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
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
 */class mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,ee.min(),ee.min(),ee.min(),bt.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,ee.min(),ee.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ee.min(),ee.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function sw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ow(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function FL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class PS{}class $e extends PS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $L(e,n,r):n==="array-contains"?new HL(e,r):n==="in"?new WL(e,r):n==="not-in"?new qL(e,r):n==="array-contains-any"?new KL(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BL(e,r):new zL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Js(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends PS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return CS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function CS(t){return t.op==="and"}function bS(t){return jL(t)&&CS(t)}function jL(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function hp(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(bS(t))return t.filters.map(e=>hp(e)).join(",");{const e=t.filters.map(n=>hp(n)).join(",");return`${t.op}(${e})`}}function xS(t,e){return t instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof vn?function(r,i){return i instanceof vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&xS(o,i.filters[l]),!0):!1}(t,e):void X(19439)}function NS(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${Xs(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(NS).join(" ,")+"}"}(t):"Filter"}class $L extends $e{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class BL extends $e{constructor(e,n){super(e,"in",n),this.keys=OS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zL extends $e{constructor(e,n){super(e,"not-in",n),this.keys=OS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class HL extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jm(n)&&Ja(n.arrayValue,this.value)}}class WL extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ja(this.value.arrayValue,n)}}class qL extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ja(this.value.arrayValue,n)}}class KL extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ja(this.value.arrayValue,r))}}/**
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
 */class GL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function aw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new GL(t,e,n,r,i,s,o)}function Xm(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xs(r)).join(",")),e.Te=n}return e.Te}function Zm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ow(t.startAt,e.startAt)&&ow(t.endAt,e.endAt)}function dp(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function QL(t,e,n,r,i,s,o,l){return new mo(t,e,n,r,i,s,o,l)}function lh(t){return new mo(t)}function lw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YL(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function DS(t){return t.collectionGroup!==null}function Ea(t){const e=te(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new Xa(s,r))}),n.has(it.keyField().canonicalString())||e.Ee.push(new Xa(it.keyField(),r))}return e.Ee}function Nn(t){const e=te(t);return e.Ie||(e.Ie=JL(e,Ea(t))),e.Ie}function JL(t,e){if(t.limitType==="F")return aw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xa(i.field,s)});const n=t.endAt?new mc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mc(t.startAt.position,t.startAt.inclusive):null;return aw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fp(t,e){const n=t.filters.concat([e]);return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function XL(t,e){const n=t.explicitOrderBy.concat([e]);return new mo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function gc(t,e,n){return new mo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function uh(t,e){return Zm(Nn(t),Nn(e))&&t.limitType===e.limitType}function LS(t){return`${Xm(Nn(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>NS(i)).join(", ")}]`),oh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xs(i)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function ch(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ea(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=sw(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ea(r),i)||r.endAt&&!function(o,l,u){const c=sw(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ea(r),i))}(t,e)}function ZL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VS(t){return(e,n)=>{let r=!1;for(const i of Ea(t)){const s=e2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function e2(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Js(u,c):X(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:t.dir})}}/**
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
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return _S(this.inner)}size(){return this.innerSize}}/**
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
 */const t2=new ke(J.comparator);function ar(){return t2}const MS=new ke(J.comparator);function ra(...t){let e=MS;for(const n of t)e=e.insert(n.key,n);return e}function US(t){let e=MS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pi(){return Ta()}function FS(){return Ta()}function Ta(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const n2=new ke(J.comparator),r2=new Ke(J.comparator);function le(...t){let e=r2;for(const n of t)e=e.add(n);return e}const i2=new Ke(ae);function s2(){return i2}/**
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
 */function eg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function jS(t){return{integerValue:""+t}}function $S(t,e){return xL(e)?jS(e):eg(t,e)}/**
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
 */class hh{constructor(){this._=void 0}}function o2(t,e,n){return t instanceof Za?function(i,s){const o={fields:{[ES]:{stringValue:wS},[IS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ym(s)&&(s=ah(s)),s&&(o.fields[TS]=s),{mapValue:o}}(n,e):t instanceof Zs?zS(t,e):t instanceof el?HS(t,e):function(i,s){const o=BS(i,s),l=uw(o)+uw(i.Ae);return cp(o)&&cp(i.Ae)?jS(l):eg(i.serializer,l)}(t,e)}function a2(t,e,n){return t instanceof Zs?zS(t,e):t instanceof el?HS(t,e):n}function BS(t,e){return t instanceof tl?function(r){return cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Za extends hh{}class Zs extends hh{constructor(e){super(),this.elements=e}}function zS(t,e){const n=WS(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class el extends hh{constructor(e){super(),this.elements=e}}function HS(t,e){let n=WS(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class tl extends hh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function uw(t){return De(t.integerValue||t.doubleValue)}function WS(t){return Jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tg{constructor(e,n){this.field=e,this.transform=n}}function l2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zs&&i instanceof Zs||r instanceof el&&i instanceof el?Ys(r.elements,i.elements,Vn):r instanceof tl&&i instanceof tl?Vn(r.Ae,i.Ae):r instanceof Za&&i instanceof Za}(t.transform,e.transform)}class u2{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dh{}function qS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ng(t.key,tn.none()):new ml(t.key,t.data,tn.none());{const n=t.data,r=bt.empty();let i=new Ke(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hi(t.key,r,new $t(i.toArray()),tn.none())}}function c2(t,e,n){t instanceof ml?function(i,s,o){const l=i.value.clone(),u=hw(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof hi?function(i,s,o){if(!Au(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=hw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(KS(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ia(t,e,n,r){return t instanceof ml?function(s,o,l,u){if(!Au(s.precondition,o))return l;const c=s.value.clone(),d=dw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof hi?function(s,o,l,u){if(!Au(s.precondition,o))return l;const c=dw(s.fieldTransforms,u,o),d=o.data;return d.setAll(KS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Au(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function h2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BS(r.transform,i||null);s!=null&&(n===null&&(n=bt.empty()),n.set(r.field,s))}return n||null}function cw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ys(r,i,(s,o)=>l2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ml extends dh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hi extends dh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hw(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,a2(o,l,n[i]))}return r}function dw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,o2(s,o,e))}return r}class ng extends dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d2 extends dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class f2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&c2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ia(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=qS(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,(n,r)=>cw(n,r))&&Ys(this.baseMutations,e.baseMutations,(n,r)=>cw(n,r))}}class rg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return n2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new rg(e,n,r,i)}}/**
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
 */class p2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class m2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ue;function g2(t){switch(t){case V.OK:return X(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return X(15467,{code:t})}}function GS(t){if(t===void 0)return or("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return X(39323,{code:t})}}(ue=Me||(Me={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function y2(){return new TextEncoder}/**
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
 */const _2=new Kr([4294967295,4294967295],0);function fw(t){const e=y2().encode(t),n=new aS;return n.update(e),new Uint8Array(n.digest())}function pw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Kr([n,r],0),new Kr([i,s],0)]}class ig{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Kr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Kr.fromNumber(r)));return i.compare(_2)===1&&(i=new Kr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fw(e),[r,i]=pw(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ig(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=fw(e),[r,i]=pw(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fh(ee.min(),i,new ke(ae),ar(),le())}}class gl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gl(r,n,le(),le(),le())}}/**
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
 */class Ru{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class QS{constructor(e,n){this.targetId=e,this.Ce=n}}class YS{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mw{constructor(){this.ve=0,this.Fe=gw(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X(38017,{changeType:s})}}),new gl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=gw()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class v2{constructor(e){this.Ge=e,this.ze=new Map,this.je=ar(),this.Je=Zl(),this.He=Zl(),this.Ze=new ke(ae)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:X(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(dp(s))if(r===0){const o=new J(s.path);this.et(n,o,mt.newNoDocument(o,ee.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ti(r).toUint8Array()}catch(u){if(u instanceof vS)return Bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ig(o,i,s)}catch(u){return Bi(u instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&dp(l.target)){const u=new J(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,mt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=le();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new fh(e,n,this.Ze,this.je,r);return this.je=ar(),this.Je=Zl(),this.He=Zl(),this.Ze=new ke(ae),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new mw,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ke(ae),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ke(ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Zl(){return new ke(J.comparator)}function gw(){return new ke(J.comparator)}const w2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),E2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),T2=(()=>({and:"AND",or:"OR"}))();class I2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pp(t,e){return t.useProto3Json||oh(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function S2(t,e){return yc(t,e.toTimestamp())}function On(t){return de(!!t,49232),ee.fromTimestamp(function(n){const r=ei(n);return new we(r.seconds,r.nanos)}(t))}function sg(t,e){return mp(t,e).canonicalString()}function mp(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function XS(t){const e=ge.fromString(t);return de(rA(e),10190,{key:e.toString()}),e}function gp(t,e){return sg(t.databaseId,e.path)}function Ld(t,e){const n=XS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(eA(n))}function ZS(t,e){return sg(t.databaseId,e)}function A2(t){const e=XS(t);return e.length===4?ge.emptyPath():eA(e)}function yp(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eA(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yw(t,e,n){return{name:gp(t,e),fields:n.value.mapValue.fields}}function R2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string",58123),at.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),at.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:GS(c.code);return new W(d,c.message||"")}(o);n=new YS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ld(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):ee.min(),l=new bt({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ru(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ld(t,r.document),s=r.readTime?On(r.readTime):ee.min(),o=mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ru([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ld(t,r.document),s=r.removedTargetIds||[];n=new Ru([],s,i,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new m2(i,s),l=r.targetId;n=new QS(l,o)}}return n}function k2(t,e){let n;if(e instanceof ml)n={update:yw(t,e.key,e.value)};else if(e instanceof ng)n={delete:gp(t,e.key)};else if(e instanceof hi)n={update:yw(t,e.key,e.data),updateMask:V2(e.fieldMask)};else{if(!(e instanceof d2))return X(16599,{dt:e.type});n={verify:gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof el)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:S2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X(27497)}(t,e.precondition)),n}function P2(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(ee.min())&&(o=On(s)),new u2(o,i.transformResults||[])}(n,e))):[]}function C2(t,e){return{documents:[ZS(t,e.path)]}}function b2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ZS(t,i);const s=function(c){if(c.length!==0)return nA(vn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:fs(m.field),direction:O2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function x2(t){let e=A2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=tA(f);return m instanceof vn&&bS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(b){return new Xa(ps(b.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,oh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new mc(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,w=f.values||[];return new mc(w,m)}(n.endAt)),QL(e,i,o,s,l,"F",u,c)}function N2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ps(n.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ps(n.unaryFilter.field);return $e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(ps(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>tA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(n.compositeFilter.op))}(t):X(30097,{filter:t})}function O2(t){return w2[t]}function D2(t){return E2[t]}function L2(t){return T2[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return it.fromServerFormat(t.fieldPath)}function nA(t){return t instanceof $e?function(n){if(n.op==="=="){if(iw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(rw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(iw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(rw(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:D2(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(i=>nA(i));return r.length===1?r[0]:{compositeFilter:{op:L2(n.op),filters:r}}}(t):X(54877,{filter:t})}function V2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function iA(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Dr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class M2{constructor(e){this.yt=e}}function U2(t){const e=x2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gc(e,e.limit,"L"):e}/**
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
 */class F2{constructor(){this.bn=new j2}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Zr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class j2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ge.comparator)).toArray()}}/**
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
 */const _w={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sA=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(sA,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */class eo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new eo(0)}static ar(){return new eo(-1)}}/**
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
 */const vw="LruGarbageCollector",$2=1048576;function ww([t,e],[n,r]){const i=ae(t,n);return i===0?ae(e,r):i}class B2{constructor(e){this.Pr=e,this.buffer=new Ke(ww),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ww(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class z2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(vw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){po(n)?K(vw,"Ignoring IndexedDB error during garbage collection: ",n):await fo(n)}await this.Ar(3e5)})}}class H2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(sh.ce);const r=new B2(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(_w)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_w):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),hs()<=oe.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function W2(t,e){return new H2(t,e)}/**
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
 */class q2{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class K2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class G2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ia(r.mutation,i,$t.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ra();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ar();const o=Ta(),l=function(){return Ta()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof hi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ia(d.mutation,c,d.mutation.getFieldMask(),we.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new K2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ta();let i=new ke((o,l)=>o-l),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||$t.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||le()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=FS();d.forEach(m=>{if(!s.has(m)){const w=qS(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return YL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Pi());let l=Ga,u=s;return o.next(c=>M.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,le())).next(d=>({batchId:l,changes:US(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ra();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(f,m){return new mo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let l=ra();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ia(d.mutation,c,$t.empty(),we.now()),ch(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Q2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:U2(i.bundledQuery),readTime:On(i.readTime)}}(n)),M.resolve()}}/**
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
 */class Y2{constructor(){this.overlays=new ke(J.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Pi(),s=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Pi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Pi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new p2(n,r));let s=this.Lr.get(n);s===void 0&&(s=le(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class J2{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class og{constructor(){this.kr=new Ke(Xe.qr),this.Kr=new Ke(Xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new J(new ge([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new J(new ge([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=le();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return J.comparator(e.key,n.key)||ae(e.Jr,n.Jr)}static Ur(e,n){return ae(e.Jr,n.Jr)||J.comparator(e.key,n.key)}}/**
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
 */class X2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ke(Xe.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new f2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Qm:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ae);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new J(s),0);let l=new Ke(ae);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Xe(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Z2{constructor(e){this.ti=e,this.docs=function(){return new ke(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ar();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kL(RL(d),r)<=0||(i.has(d.key)||ch(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){X(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eV(this)}getSize(e){return M.resolve(this.size)}}class eV extends q2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class tV{constructor(e){this.persistence=e,this.ri=new rs(n=>Xm(n),Zm),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new og,this.targetCount=0,this.oi=eo._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new eo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class oA{constructor(e,n){this._i={},this.overlays={},this.ai=new sh(0),this.ui=!1,this.ui=!0,this.ci=new J2,this.referenceDelegate=e(this),this.li=new tV(this),this.indexManager=new F2,this.remoteDocumentCache=function(i){return new Z2(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new M2(n),this.Pi=new Q2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new X2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new nV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class nV extends CL{constructor(e){super(),this.currentSequenceNumber=e}}class ag{constructor(e){this.persistence=e,this.Ri=new og,this.Ai=null}static Vi(e){return new ag(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=J.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class _c{constructor(e,n){this.persistence=e,this.fi=new rs(r=>NL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=W2(this,n)}static Vi(e,n){return new _c(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Iu(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lg(e,n.fromCache,r,i)}}/**
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
 */class rV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return rx()?8:bL(yt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(hs()<=oe.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(hs()<=oe.DEBUG&&K("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(hs()<=oe.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):M.resolve())}gs(e,n){if(lw(n))return M.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gc(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,gc(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return lw(n)||i.isEqual(ee.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(hs()<=oe.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ds(n)),this.Ds(e,o,n,AL(i,Ga)).next(l=>l))})}Ss(e,n){let r=new Ke(VS(e));return n.forEach((i,s)=>{ch(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return hs()<=oe.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ds(n)),this.fs.getDocumentsMatchingQuery(e,n,Zr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const ug="LocalStore",sV=3e8;class oV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ke(ae),this.Fs=new rs(s=>Xm(s),Zm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function aV(t,e,n,r){return new oV(t,e,n,r)}async function aA(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=le();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function lV(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let w=M.resolve();return m.forEach(b=>{w=w.next(()=>d.getEntry(u,b)).next(k=>{const P=c.docVersions.get(b);de(P!==null,48541),k.version.compareTo(P)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lA(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function uV(t,e){const n=te(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(at.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(k,P,v){return k.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=sV?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,w,d)&&l.push(n.li.updateTargetData(s,w))});let u=ar(),c=le();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(cV(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(ee.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function cV(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ar();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(ug,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function hV(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dV(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function _p(t,e,n){const r=te(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!po(o))throw o;K(ug,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ew(t,e,n){const r=te(t);let i=ee.min(),s=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=te(u),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:le())).next(l=>(fV(r,ZL(e),l),{documents:l,ks:s})))}function fV(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class Tw{constructor(){this.activeTargetIds=s2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pV{constructor(){this.vo=new Tw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Tw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mV{Mo(e){}shutdown(){}}/**
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
 */const Iw="ConnectivityMonitor";class Sw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(Iw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(Iw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eu=null;function vp(){return eu===null?eu=function(){return 268435456+Math.round(2147483648*Math.random())}():eu++,"0x"+eu.toString(16)}/**
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
 */const Vd="RestConnection",gV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class yV{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===fc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=vp(),l=this.Qo(e,n.toUriEncodedString());K(Vd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=Zi(c);return this.zo(e,l,u,r,d).then(f=>(K(Vd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Bi(Vd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=gV[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class _V{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const dt="WebChannelConnection",Wo=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ms extends yV{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ms.c_){const e=hS();Wo(e,cS.STAT_EVENT,n=>{n.stat===ap.PROXY?K(dt,"STAT_EVENT: detected buffering proxy"):n.stat===ap.NOPROXY&&K(dt,"STAT_EVENT: detected no buffering proxy")}),Ms.c_=!0}}zo(e,n,r,i,s){const o=vp();return new Promise((l,u)=>{const c=new lS;c.setWithCredentials(!0),c.listenOnce(uS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Tu.NO_ERROR:const f=c.getResponseJson();K(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Tu.TIMEOUT:K(dt,`RPC '${e}' ${o} timed out`),u(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Tu.HTTP_ERROR:const m=c.getStatus();if(K(dt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w==null?void 0:w.error;if(b&&b.status&&b.message){const k=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(b.status);u(new W(k,b.message))}else u(new W(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new W(V.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(dt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);K(dt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=vp(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");K(dt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let f=!1,m=!1;const w=new _V({Jo:b=>{m?K(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(f||(K(dt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),K(dt,`RPC '${e}' stream ${i} sending:`,b),d.send(b))},Ho:()=>d.close()});return Wo(d,na.EventType.OPEN,()=>{m||(K(dt,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),Wo(d,na.EventType.CLOSE,()=>{m||(m=!0,K(dt,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(d))}),Wo(d,na.EventType.ERROR,b=>{m||(m=!0,Bi(dt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),w.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),Wo(d,na.EventType.MESSAGE,b=>{var k;if(!m){const P=b.data[0];de(!!P,16349);const v=P,_=(v==null?void 0:v.error)||((k=v[0])==null?void 0:k.error);if(_){K(dt,`RPC '${e}' stream ${i} received error:`,_);const T=_.status;let D=function(I){const y=Me[I];if(y!==void 0)return GS(y)}(T),U=_.message;T==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&Bi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,U="Unknown error status: "+T+" with message "+_.message),m=!0,w.o_(new W(D,U)),d.close()}else K(dt,`RPC '${e}' stream ${i} received:`,P),w.__(P)}}),Ms.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return dS()}}/**
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
 */function vV(t){return new Ms(t)}function Md(){return typeof document<"u"?document:null}/**
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
 */function ph(t){return new I2(t,!0)}/**
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
 */Ms.c_=!1;class uA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Aw="PersistentStream";class cA{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uA(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(Aw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(Aw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wV extends cA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=R2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?On(o.readTime):ee.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=yp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=dp(u)?{documents:C2(s,u)}:{query:b2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=JS(s,o.resumeToken);const c=pp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=yc(s,o.snapshotVersion.toTimestamp());const c=pp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=N2(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.q_(n)}}class EV extends cA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=P2(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>k2(this.serializer,r))};this.q_(n)}}/**
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
 */class TV{}class IV extends TV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,mp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,mp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function SV(t,e,n,r){return new IV(t,e,n,r)}class AV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const zi="RemoteStore";class RV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{is(this)&&(K(zi,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ia.add(4),await yl(c),c.Va.set("Unknown"),c.Ia.delete(4),await mh(c)}(this))})}),this.Va=new AV(r,i)}}async function mh(t){if(is(t))for(const e of t.Ra)await e(!0)}async function yl(t){for(const e of t.Ra)await e(!1)}function hA(t,e){const n=te(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),fg(n)?dg(n):go(n).O_()&&hg(n,e))}function cg(t,e){const n=te(t),r=go(n);n.Ea.delete(e),r.O_()&&dA(n,e),n.Ea.size===0&&(r.O_()?r.L_():is(n)&&n.Va.set("Unknown"))}function hg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}go(t).Z_(e)}function dA(t,e){t.da.$e(e),go(t).X_(e)}function dg(t){t.da=new v2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),go(t).start(),t.Va.ua()}function fg(t){return is(t)&&!go(t).x_()&&t.Ea.size>0}function is(t){return te(t).Ia.size===0}function fA(t){t.da=void 0}async function kV(t){t.Va.set("Online")}async function PV(t){t.Ea.forEach((e,n)=>{hg(t,e)})}async function CV(t,e){fA(t),fg(t)?(t.Va.ha(e),dg(t)):t.Va.set("Unknown")}async function bV(t,e,n){if(t.Va.set("Online"),e instanceof YS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){K(zi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vc(t,r)}else if(e instanceof Ru?t.da.Xe(e):e instanceof QS?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await lA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(at.EMPTY_BYTE_STRING,d.snapshotVersion)),dA(s,u);const f=new Dr(d.target,u,c,d.sequenceNumber);hg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K(zi,"Failed to raise snapshot:",r),await vc(t,r)}}async function vc(t,e,n){if(!po(e))throw e;t.Ia.add(1),await yl(t),t.Va.set("Offline"),n||(n=()=>lA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(zi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await mh(t)})}function pA(t,e){return e().catch(n=>vc(t,n,e))}async function gh(t){const e=te(t),n=ri(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qm;for(;xV(e);)try{const i=await hV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,NV(e,i)}catch(i){await vc(e,i)}mA(e)&&gA(e)}function xV(t){return is(t)&&t.Ta.length<10}function NV(t,e){t.Ta.push(e);const n=ri(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function mA(t){return is(t)&&!ri(t).x_()&&t.Ta.length>0}function gA(t){ri(t).start()}async function OV(t){ri(t).ra()}async function DV(t){const e=ri(t);for(const n of t.Ta)e.ea(n.mutations)}async function LV(t,e,n){const r=t.Ta.shift(),i=rg.from(r,e,n);await pA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gh(t)}async function VV(t,e){e&&ri(t).Y_&&await async function(r,i){if(function(o){return g2(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();ri(r).B_(),await pA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gh(r)}}(t,e),mA(t)&&gA(t)}async function Rw(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),K(zi,"RemoteStore received new credentials");const r=is(n);n.Ia.add(3),await yl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await mh(n)}async function MV(t,e){const n=te(t);e?(n.Ia.delete(2),await mh(n)):e||(n.Ia.add(2),await yl(n),n.Va.set("Unknown"))}function go(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.sa(),new wV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:kV.bind(null,t),Yo:PV.bind(null,t),t_:CV.bind(null,t),H_:bV.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),fg(t)?dg(t):t.Va.set("Unknown")):(await t.ma.stop(),fA(t))})),t.ma}function ri(t){return t.fa||(t.fa=function(n,r,i){const s=te(n);return s.sa(),new EV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:OV.bind(null,t),t_:VV.bind(null,t),ta:DV.bind(null,t),na:LV.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await gh(t)):(await t.fa.stop(),t.Ta.length>0&&(K(zi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class pg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new pg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mg(t,e){if(or("AsyncQueue",`${e}: ${t}`),po(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ra(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kw{constructor(){this.ga=new ke(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class to{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new to(e,n,Us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class UV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class FV{constructor(){this.queries=Pw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Pw(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Pw(){return new rs(t=>LS(t),uh)}async function gg(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new UV,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=mg(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&_g(n)}async function yg(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jV(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&_g(n)}function $V(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function _g(t){t.Ca.forEach(e=>{e.next()})}var wp,Cw;(Cw=wp||(wp={})).Ma="default",Cw.Cache="cache";class vg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new to(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=to.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wp.Cache}}/**
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
 */class yA{constructor(e){this.key=e}}class _A{constructor(e){this.key=e}}class BV{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=le(),this.mutatedKeys=le(),this.eu=VS(e),this.tu=new Us(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new kw,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),w=ch(this.query,f)?f:null,b=!!m&&this.mutatedKeys.has(m.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;m&&w?m.data.isEqual(w.data)?b!==k&&(r.track({type:3,doc:w}),P=!0):this.su(m,w)||(r.track({type:2,doc:w}),P=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),P=!0):m&&!w&&(r.track({type:1,doc:m}),P=!0,(u||c)&&(l=!0)),P&&(w?(o=o.add(w),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(w,b){const k=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:P})}};return k(w)-k(b)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new to(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new kw,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new _A(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new yA(r))}),n}cu(e){this.Za=e.ks,this.Ya=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return to.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const wg="SyncEngine";class zV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HV{constructor(e){this.key=e,this.hu=!1}}class WV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new rs(l=>LS(l),uh),this.Eu=new Map,this.Iu=new Set,this.Ru=new ke(J.comparator),this.Au=new Map,this.Vu=new og,this.du={},this.mu=new Map,this.fu=eo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qV(t,e,n=!0){const r=SA(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await vA(r,e,n,!0),i}async function KV(t,e){const n=SA(t);await vA(n,e,!0,!1)}async function vA(t,e,n,r){const i=await dV(t.localStore,Nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await GV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&hA(t.remoteStore,i),l}async function GV(t,e,n,r,i){t.pu=(f,m,w)=>async function(k,P,v,_){let T=P.view.ru(v);T.bs&&(T=await Ew(k.localStore,P.query,!1).then(({documents:I})=>P.view.ru(I,T)));const D=_&&_.targetChanges.get(P.targetId),U=_&&_.targetMismatches.get(P.targetId)!=null,$=P.view.applyChanges(T,k.isPrimaryClient,D,U);return xw(k,P.targetId,$.au),$.snapshot}(t,f,m,w);const s=await Ew(t.localStore,e,!0),o=new BV(e,s.ks),l=o.ru(s.documents),u=gl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);xw(t,n,c.au);const d=new zV(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function QV(t,e,n){const r=te(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!uh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _p(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&cg(r.remoteStore,i.targetId),Ep(r,i.targetId)}).catch(fo)):(Ep(r,i.targetId),await _p(r.localStore,i.targetId,!0))}async function YV(t,e){const n=te(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cg(n.remoteStore,r.targetId))}async function JV(t,e,n){const r=iM(t);try{const i=await function(o,l){const u=te(o),c=we.now(),d=l.reduce((w,b)=>w.add(b.key),le());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let b=ar(),k=le();return u.xs.getEntries(w,d).next(P=>{b=P,b.forEach((v,_)=>{_.isValidDocument()||(k=k.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,b)).next(P=>{f=P;const v=[];for(const _ of l){const T=h2(_,f.get(_.key).overlayedDocument);T!=null&&v.push(new hi(_.key,T,kS(T.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,v,l)}).next(P=>{m=P;const v=P.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(w,P.batchId,v)})}).then(()=>({batchId:m.batchId,changes:US(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new ke(ae)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await _l(r,i.changes),await gh(r.remoteStore)}catch(i){const s=mg(i,"Failed to persist write");n.reject(s)}}async function wA(t,e){const n=te(t);try{const r=await uV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?de(o.hu,14607):i.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))}),await _l(n,r,e)}catch(r){await fo(r)}}function bw(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&_g(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XV(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new ke(J.comparator);o=o.insert(s,mt.newNoDocument(s,ee.min()));const l=le().add(s),u=new fh(ee.min(),new Map,new ke(ae),o,l);await wA(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Eg(r)}else await _p(r.localStore,e,!1).then(()=>Ep(r,e,n)).catch(fo)}async function ZV(t,e){const n=te(t),r=e.batch.batchId;try{const i=await lV(n.localStore,e);TA(n,r,null),EA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,i)}catch(i){await fo(i)}}async function eM(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(de(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);TA(r,e,n),EA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,i)}catch(i){await fo(i)}}function EA(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function TA(t,e,n){const r=te(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Ep(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||IA(t,r)})}function IA(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(cg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Eg(t))}function xw(t,e,n){for(const r of n)r instanceof yA?(t.Vu.addReference(r.key,e),tM(t,r)):r instanceof _A?(K(wg,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||IA(t,r.key)):X(19791,{wu:r})}function tM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(wg,"New document in limbo: "+n),t.Iu.add(r),Eg(t))}function Eg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new J(ge.fromString(e)),r=t.fu.next();t.Au.set(r,new HV(n)),t.Ru=t.Ru.insert(n,r),hA(t.remoteStore,new Dr(Nn(lh(n.path)),r,"TargetPurposeLimboResolution",sh.ce))}}async function _l(t,e,n){const r=te(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=lg.Is(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Ts,w=>d.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>M.forEach(m.Es,w=>d.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!po(f))throw f;K(ug,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const w=d.vs.get(m),b=w.snapshotVersion,k=w.withLastLimboFreeSnapshotVersion(b);d.vs=d.vs.insert(m,k)}}}(r.localStore,s))}async function nM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){K(wg,"User change. New user:",e.toKey());const r=await aA(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.Ns)}}function rM(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let i=le();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function SA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XV.bind(null,e),e.Pu.H_=jV.bind(null,e.eventManager),e.Pu.yu=$V.bind(null,e.eventManager),e}function iM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eM.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ph(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return aV(this.persistence,new iV,e.initialUser,this.serializer)}Cu(e){return new oA(ag.Vi,this.serializer)}Du(e){return new pV}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class sM extends wc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof _c,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new z2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new oA(r=>_c.Vi(r,n),this.serializer)}}class Tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nM.bind(null,this.syncEngine),await MV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FV}()}createDatastore(e){const n=ph(e.databaseInfo.databaseId),r=vV(e.databaseInfo);return SV(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new RV(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>bw(this.syncEngine,n,0),function(){return Sw.v()?new Sw:new mV}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new WV(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);K(zi,"RemoteStore shutting down."),s.Ia.add(5),await yl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Tp.provider={build:()=>new Tp};/**
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
 */class Tg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ii="FirestoreClient";class oM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Gm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(ii,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(ii,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ud(t,e){t.asyncQueue.verifyOperationInProgress(),K(ii,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aM(t);K(ii,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Rw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Rw(e.remoteStore,i)),t._onlineComponents=e}async function aM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(ii,"Using user provided OfflineComponentProvider");try{await Ud(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await Ud(t,new wc)}}else K(ii,"Using default OfflineComponentProvider"),await Ud(t,new sM(void 0));return t._offlineComponents}async function AA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(ii,"Using user provided OnlineComponentProvider"),await Nw(t,t._uninitializedComponentsProvider._online)):(K(ii,"Using default OnlineComponentProvider"),await Nw(t,new Tp))),t._onlineComponents}function lM(t){return AA(t).then(e=>e.syncEngine)}async function Ec(t){const e=await AA(t),n=e.eventManager;return n.onListen=qV.bind(null,e.syncEngine),n.onUnlisten=QV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YV.bind(null,e.syncEngine),n}function uM(t,e,n,r){const i=new Tg(r),s=new vg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>gg(await Ec(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>yg(await Ec(t),s))}}function cM(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Tg({next:m=>{d.Nu(),o.enqueueAndForget(()=>yg(s,f));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new vg(lh(l.path),d,{includeMetadataChanges:!0,qa:!0});return gg(s,f)}(await Ec(t),t.asyncQueue,e,n,r)),r.promise}function hM(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Tg({next:m=>{d.Nu(),o.enqueueAndForget(()=>yg(s,f)),m.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new vg(l,d,{includeMetadataChanges:!0,qa:!0});return gg(s,f)}(await Ec(t),t.asyncQueue,e,n,r)),r.promise}function dM(t,e){const n=new Jn;return t.asyncQueue.enqueueAndForget(async()=>JV(await lM(t),e,n)),n.promise}/**
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
 */function RA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fM="ComponentProvider",Ow=new Map;function pM(t,e,n,r,i){return new LL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,RA(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const kA="firestore.googleapis.com",Dw=!0;class Lw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kA,this.ssl=Dw}else this.host=e.host,this.ssl=e.ssl??Dw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$2)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}IL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RA(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fL;switch(r.type){case"firstParty":return new yL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ow.get(n);r&&(K(fM,"Removing Datastore"),Ow.delete(n),r.terminate())}(this),Promise.resolve()}}function mM(t,e,n,r={}){var c;t=Mt(t,yh);const i=Zi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Lm(`https://${l}`),s.host!==kA&&s.host!==l&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Xr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=ft.MOCK_USER;else{d=uI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ft(m)}t._authCredentials=new pL(new pS(d,f))}}/**
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
 */class hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new hr(this.firestore,e,this._query)}}class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(pl(n,xe._jsonSchema))return new xe(e,r||null,new J(ge.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Be("string",xe._jsonSchemaVersion),referencePath:Be("string")};class Gr extends hr{constructor(e,n,r){super(e,n,lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new J(e))}withConverter(e){return new Gr(this.firestore,e,this._path)}}function gM(t,e,...n){if(t=ne(t),mS("collection","path",e),t instanceof yh){const r=ge.fromString(e,...n);return Gv(r),new Gr(t,null,r)}{if(!(t instanceof xe||t instanceof Gr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Gv(r),new Gr(t.firestore,null,r)}}function Qr(t,e,...n){if(t=ne(t),arguments.length===1&&(e=Gm.newId()),mS("doc","path",e),t instanceof yh){const r=ge.fromString(e,...n);return Kv(r),new xe(t,null,new J(r))}{if(!(t instanceof xe||t instanceof Gr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Kv(r),new xe(t.firestore,t instanceof Gr?t.converter:null,new J(r))}}/**
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
 */const Vw="AsyncQueue";class Mw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uA(this,"async_queue_retry"),this._c=()=>{const r=Md();r&&K(Vw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Md();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Jn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!po(e))throw e;K(Vw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",Uw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=pg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&X(47125,{Pc:Uw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Uw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class lr extends yh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Mw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mw(e),this._firestoreClient=void 0,await e}}}function yM(t,e){const n=typeof t=="object"?t:qc(),r=typeof t=="string"?t:e||fc,i=es(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=oI("firestore");s&&mM(i,...s)}return i}function _h(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_M(t),t._firestoreClient}function _M(t){var r,i,s,o;const e=t._freezeSettings(),n=pM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(at.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(pl(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Be("string",Xt._jsonSchemaVersion),bytes:Be("string")};/**
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
 */class Ig{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yo{constructor(e){this._methodName=e}}/**
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
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(pl(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:Be("string",Dn._jsonSchemaVersion),latitude:Be("number"),longitude:Be("number")};/**
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
 */class gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(pl(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new gn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Be("string",gn._jsonSchemaVersion),vectorValues:Be("object")};/**
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
 */const vM=/^__.*__$/;class wM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ml(e,this.data,n,this.fieldTransforms)}}class PA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:t})}}class vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new vh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Tc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(CA(this.dataSource)&&vM.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class EM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ph(e)}A(e,n,r,i=!1){return new vh({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wh(t){const e=t._freezeSettings(),n=ph(t._databaseId);return new EM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function bA(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);kg("Data must be an object, but it was:",o,r);const l=xA(r,o);let u,c;if(s.merge)u=new $t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Hi(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);DA(d,m)||d.push(m)}u=new $t(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new wM(new bt(l),u,c)}class Eh extends yo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eh}}function TM(t,e,n){return new vh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Sg extends yo{_toFieldTransform(e){return new tg(e.path,new Za)}isEqual(e){return e instanceof Sg}}class Ag extends yo{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=TM(this,e,!0),r=this.Sc.map(s=>_o(s,n)),i=new Zs(r);return new tg(e.path,i)}isEqual(e){return e instanceof Ag&&Xr(this.Sc,e.Sc)}}class Rg extends yo{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new tl(e.serializer,$S(e.serializer,this.bc));return new tg(e.path,n)}isEqual(e){return e instanceof Rg&&this.bc===e.bc}}function IM(t,e,n,r){const i=t.A(1,e,n);kg("Data must be an object, but it was:",i,r);const s=[],o=bt.empty();ci(r,(u,c)=>{const d=OA(e,u,n);c=ne(c);const f=i.fc(d);if(c instanceof Eh)s.push(d);else{const m=_o(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new $t(s);return new PA(o,l,i.fieldTransforms)}function SM(t,e,n,r,i,s){const o=t.A(1,e,n),l=[Hi(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Hi(e,s[m])),u.push(s[m+1]);const c=[],d=bt.empty();for(let m=l.length-1;m>=0;--m)if(!DA(c,l[m])){const w=l[m];let b=u[m];b=ne(b);const k=o.fc(w);if(b instanceof Eh)c.push(w);else{const P=_o(b,k);P!=null&&(c.push(w),d.set(w,P))}}const f=new $t(c);return new PA(d,f,o.fieldTransforms)}function AM(t,e,n,r=!1){return _o(n,t.A(r?4:3,e))}function _o(t,e){if(NA(t=ne(t)))return kg("Unsupported field value:",e,t),xA(t,e);if(t instanceof yo)return function(r,i){if(!CA(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_o(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $S(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=we.fromDate(r);return{timestampValue:yc(i.serializer,s)}}if(r instanceof we){const s=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yc(i.serializer,s)}}if(r instanceof Dn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:JS(i.serializer,r._byteString)};if(r instanceof xe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof gn)return function(o,l){const u=o instanceof gn?o.toArray():o;return{mapValue:{fields:{[SS]:{stringValue:RS},[pc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return eg(l.serializer,d)})}}}}}}(r,i);if(iA(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${ih(r)}`)}(t,e)}function xA(t,e){const n={};return _S(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(r,i)=>{const s=_o(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function NA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Dn||t instanceof Xt||t instanceof xe||t instanceof yo||t instanceof gn||iA(t))}function kg(t,e,n){if(!NA(n)||!gS(n)){const r=ih(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Hi(t,e,n){if((e=ne(e))instanceof Ig)return e._internalPath;if(typeof e=="string")return OA(t,e);throw Tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const RM=new RegExp("[~\\*/\\[\\]]");function OA(t,e,n){if(e.search(RM)>=0)throw Tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ig(...e.split("."))._internalPath}catch{throw Tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function DA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kM{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ti(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ci(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[pc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>De(o.doubleValue));return new gn(n)}convertGeoPoint(e){return new Dn(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ah(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qa(e));default:return null}}convertTimestamp(e){const n=ei(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);de(rA(r),9688,{name:e});const i=new Ya(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||or(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Pg extends kM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function Fw(){return new Sg("serverTimestamp")}function f6(...t){return new Ag("arrayUnion",t)}function p6(t){return new Rg("increment",t)}const jw="@firebase/firestore",$w="4.13.0";/**
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
 */function Bw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class LA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Hi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PM extends LA{data(){return super.data()}}/**
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
 */function VA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Cg{}class bg extends Cg{}function m6(t,e,...n){let r=[];e instanceof Cg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof xg).length,l=s.filter(u=>u instanceof Th).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Th extends bg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Th(e,n,r)}_apply(e){const n=this._parse(e);return MA(e._query,n),new hr(e.firestore,e.converter,fp(e._query,n))}_parse(e){const n=wh(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Hw(f,d);const b=[];for(const k of f)b.push(zw(u,s,k));m={arrayValue:{values:b}}}else m=zw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Hw(f,d),m=AM(l,o,f,d==="in"||d==="not-in");return $e.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function g6(t,e,n){const r=e,i=Hi("where",t);return Th._create(i,r,n)}class xg extends Cg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)MA(o,u),o=fp(o,u)}(e._query,n),new hr(e.firestore,e.converter,fp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ng extends bg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ng(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xa(s,o)}(e._query,this._field,this._direction);return new hr(e.firestore,e.converter,XL(e._query,n))}}function y6(t,e="asc"){const n=e,r=Hi("orderBy",t);return Ng._create(r,n)}class Og extends bg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Og(e,n,r)}_apply(e){return new hr(e.firestore,e.converter,gc(e._query,this._limit,this._limitType))}}function _6(t){return SL("limit",t),Og._create("limit",t,"F")}function zw(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DS(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!J.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nw(t,new J(r))}if(n instanceof xe)return nw(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ih(n)}.`)}function Hw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MA(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function UA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ni extends LA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ni._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ni._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ni._jsonSchema={type:Be("string",Ni._jsonSchemaVersion),bundleSource:Be("string","DocumentSnapshot"),bundleName:Be("string"),bundle:Be("string")};class ku extends Ni{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ku(this._firestore,this._userDataWriter,r.key,r,new sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ku(i._firestore,i._userDataWriter,l.doc.key,l.doc,new sa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ku(i._firestore,i._userDataWriter,l.doc.key,l.doc,new sa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:CM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function CM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:Be("string",Oi._jsonSchemaVersion),bundleSource:Be("string","QuerySnapshot"),bundleName:Be("string"),bundle:Be("string")};/**
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
 */function FA(t){t=Mt(t,xe);const e=Mt(t.firestore,lr),n=_h(e);return cM(n,t._key).then(r=>jA(e,t,r))}function v6(t){t=Mt(t,hr);const e=Mt(t.firestore,lr),n=_h(e),r=new Pg(e);return VA(t._query),hM(n,t._query).then(i=>new Oi(e,r,t,i))}function Ww(t,e,n){t=Mt(t,xe);const r=Mt(t.firestore,lr),i=UA(t.converter,e,n),s=wh(r);return Ih(r,[bA(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function Fs(t,e,n,...r){t=Mt(t,xe);const i=Mt(t.firestore,lr),s=wh(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof Ig?SM(s,"updateDoc",t._key,e,n,r):IM(s,"updateDoc",t._key,e),Ih(i,[o.toMutation(t._key,tn.exists(!0))])}function w6(t){return Ih(Mt(t.firestore,lr),[new ng(t._key,tn.none())])}function bM(t,e){const n=Mt(t.firestore,lr),r=Qr(t),i=UA(t.converter,e),s=wh(t.firestore);return Ih(n,[bA(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function E6(t,...e){var c,d,f;t=ne(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Bw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Bw(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof xe)o=Mt(t.firestore,lr),l=lh(t._key.path),s={next:m=>{e[r]&&e[r](jA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Mt(t,hr);o=Mt(m.firestore,lr),l=m._query;const w=new Pg(o);s={next:b=>{e[r]&&e[r](new Oi(o,w,m,b))},error:e[r+1],complete:e[r+2]},VA(t._query)}const u=_h(o);return uM(u,l,i,s)}function Ih(t,e){const n=_h(t);return dM(n,e)}function jA(t,e,n){const r=n.docs.get(e._key),i=new Pg(t);return new Ni(t,i,e._key,r,new sa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){dL(ts),_n(new sn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new lr(new mL(r.getProvider("auth-internal")),new _L(o,r.getProvider("app-check-internal")),VL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Lt(jw,$w,e),Lt(jw,$w,"esm2020")})();/**
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
 */const $A="firebasestorage.googleapis.com",BA="storageBucket",xM=2*60*1e3,NM=10*60*1e3;/**
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
 */class Oe extends wn{constructor(e,n,r=0){super(Fd(e),`Firebase Storage: ${n} (${Fd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function Fd(t){return"storage/"+t}function Dg(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Ne.UNKNOWN,t)}function OM(t){return new Oe(Ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function DM(t){return new Oe(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Ne.UNAUTHENTICATED,t)}function VM(){return new Oe(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MM(t){return new Oe(Ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UM(){return new Oe(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FM(){return new Oe(Ne.CANCELED,"User canceled the upload/download.")}function jM(t){return new Oe(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function $M(t){return new Oe(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function BM(){return new Oe(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+BA+"' property when initializing the app?")}function zM(){return new Oe(Ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HM(){return new Oe(Ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WM(t){return new Oe(Ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ip(t){return new Oe(Ne.INVALID_ARGUMENT,t)}function zA(){return new Oe(Ne.APP_DELETED,"The Firebase app was deleted.")}function qM(t){return new Oe(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Sa(t,e){return new Oe(Ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qo(t){throw new Oe(Ne.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw $M(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),b={bucket:1,path:3},k=n===$A?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",v=new RegExp(`^https?://${k}/${i}/${P}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:w,indices:b,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<T.length;D++){const U=T[D],$=U.regex.exec(e);if($){const I=$[U.indices.bucket];let y=$[U.indices.path];y||(y=""),r=new Bt(I,y),U.postModify(r);break}}if(r==null)throw jM(e);return r}}class KM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function GM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...P){c||(c=!0,e.apply(null,P))}function f(P){i=setTimeout(()=>{i=null,t(w,u())},P)}function m(){s&&clearTimeout(s)}function w(P,...v){if(c){m();return}if(P){m(),d.call(null,P,...v);return}if(u()||o){m(),d.call(null,P,...v);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,f(T)}let b=!1;function k(P){b||(b=!0,m(),!c&&(i!==null?(P||(l=2),clearTimeout(i),f(0)):P||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function QM(t){t(!1)}/**
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
 */function YM(t){return t!==void 0}function JM(t){return typeof t=="object"&&!Array.isArray(t)}function Lg(t){return typeof t=="string"||t instanceof String}function qw(t){return Vg()&&t instanceof Blob}function Vg(){return typeof Blob<"u"}function Kw(t,e,n,r){if(r<e)throw Ip(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ip(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Mg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function HA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Di;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Di||(Di={}));/**
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
 */function XM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class ZM{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,k)=>{this.resolve_=b,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Di.NO_ERROR,u=s.getStatus();if(!l||XM(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Di.ABORT;r(!1,new tu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new tu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());YM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Dg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?zA():FM();o(u)}else{const u=UM();o(u)}};this.canceled_?n(!1,new tu(!1,null,!0)):this.backoffId_=GM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iU(t,e,n,r,i,s,o=!0,l=!1){const u=HA(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return nU(d,e),eU(d,n),tU(d,s),rU(d,r),new ZM(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function sU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function oU(...t){const e=sU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vg())return new Blob(t);throw new Oe(Ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function lU(t){if(typeof atob>"u")throw WM("base-64");return atob(t)}/**
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
 */const Cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class jd{constructor(e,n){this.data=e,this.contentType=n||null}}function uU(t,e){switch(t){case Cn.RAW:return new jd(WA(e));case Cn.BASE64:case Cn.BASE64URL:return new jd(qA(t,e));case Cn.DATA_URL:return new jd(hU(e),dU(e))}throw Dg()}function WA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cU(t){let e;try{e=decodeURIComponent(t)}catch{throw Sa(Cn.DATA_URL,"Malformed data URL.")}return WA(e)}function qA(t,e){switch(t){case Cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Sa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=lU(e)}catch(i){throw i.message.includes("polyfill")?i:Sa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class KA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Sa(Cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=fU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hU(t){const e=new KA(t);return e.base64?qA(Cn.BASE64,e.rest):cU(e.rest)}function dU(t){return new KA(t).contentType}function fU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cr{constructor(e,n){let r=0,i="";qw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(qw(this.data_)){const r=this.data_,i=aU(r,e,n);return i===null?null:new Cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(Vg()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(oU.apply(null,n))}else{const n=e.map(o=>Lg(o)?uU(Cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Cr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function GA(t){let e;try{e=JSON.parse(t)}catch{return null}return JM(e)?e:null}/**
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
 */function pU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function QA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function gU(t,e){return e}class wt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||gU}}let nu=null;function yU(t){return!Lg(t)||t.length<2?t:QA(t)}function YA(){if(nu)return nu;const t=[];t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));function e(s,o){return yU(o)}const n=new wt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new wt("size");return i.xform=r,t.push(i),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),nu=t,nu}function _U(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _U(r,t),r}function JA(t,e,n){const r=GA(e);return r===null?null:vU(t,r,n)}function wU(t,e,n,r){const i=GA(e);if(i===null||!Lg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),w=Mg(m,n,r),b=HA({alt:"media",token:c});return w+b})[0]}function EU(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class XA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ZA(t){if(!t)throw Dg()}function TU(t,e){function n(r,i){const s=JA(t,i,e);return ZA(s!==null),s}return n}function IU(t,e){function n(r,i){const s=JA(t,i,e);return ZA(s!==null),wU(s,i,t.host,t._protocol)}return n}function e1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=VM():i=LM():n.getStatus()===402?i=DM(t.bucket):n.getStatus()===403?i=MM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function SU(t){const e=e1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=OM(t.path)),s.serverResponse=i.serverResponse,s}return n}function AU(t,e,n){const r=e.fullServerUrl(),i=Mg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new XA(i,s,IU(t,n),o);return l.errorHandler=SU(e),l}function RU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RU(null,e)),r}function PU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let D=0;D<2;D++)T=T+Math.random().toString().slice(2);return T}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=kU(e,r,i),d=EU(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=Cr.getBlob(f,r,m);if(w===null)throw zM();const b={name:c.fullPath},k=Mg(s,t.host,t._protocol),P="POST",v=t.maxUploadRetryTime,_=new XA(k,P,TU(t,n),v);return _.urlParams=b,_.headers=o,_.body=w.uploadData(),_.errorHandler=e1(e),_}class CU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Di.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Di.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Di.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw qo("cannot .send() more than once");if(Zi(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bU extends CU{initXhr(){this.xhr_.responseType="text"}}function t1(){return new bU}/**
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
 */class Wi{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wi(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QA(this._location.path)}get storage(){return this._service}get parent(){const e=pU(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Wi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qM(e)}}function xU(t,e,n){t._throwIfRoot("uploadBytes");const r=PU(t.storage,t._location,YA(),new Cr(e,!0),n);return t.storage.makeRequestWithTokens(r,t1).then(i=>({metadata:i,ref:t}))}function NU(t){t._throwIfRoot("getDownloadURL");const e=AU(t.storage,t._location,YA());return t.storage.makeRequestWithTokens(e,t1).then(n=>{if(n===null)throw HM();return n})}function OU(t,e){const n=mU(t._location.path,e),r=new Bt(t._location.bucket,n);return new Wi(t.storage,r)}/**
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
 */function DU(t){return/^[A-Za-z]+:\/\//.test(t)}function LU(t,e){return new Wi(t,e)}function n1(t,e){if(t instanceof Ug){const n=t;if(n._bucket==null)throw BM();const r=new Wi(n,n._bucket);return e!=null?n1(r,e):r}else return e!==void 0?OU(t,e):t}function VU(t,e){if(e&&DU(e)){if(t instanceof Ug)return LU(t,e);throw Ip("To use ref(service, url), the first argument must be a Storage instance.")}else return n1(t,e)}function Gw(t,e){const n=e==null?void 0:e[BA];return n==null?null:Bt.makeFromBucketSpec(n,t)}function MU(t,e,n,r={}){t.host=`${e}:${n}`;const i=Zi(e);i&&Lm(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:uI(s,t.app.options.projectId))}class Ug{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=$A,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xM,this._maxUploadRetryTime=NM,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=Gw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=Gw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Kw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Kw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new KM(zA());{const o=iU(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Qw="@firebase/storage",Yw="0.14.2";/**
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
 */const r1="storage";function T6(t,e,n){return t=ne(t),xU(t,e,n)}function I6(t){return t=ne(t),NU(t)}function S6(t,e){return t=ne(t),VU(t,e)}function UU(t=qc(),e){t=ne(t);const r=es(t,r1).getImmediate({identifier:e}),i=oI("storage");return i&&FU(r,...i),r}function FU(t,e,n,r={}){MU(t,e,n,r)}function jU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ug(n,r,i,e,ts)}function $U(){_n(new sn(r1,jU,"PUBLIC").setMultipleInstances(!0)),Lt(Qw,Yw,""),Lt(Qw,Yw,"esm2020")}$U();const i1="@firebase/installations",Fg="0.6.21";/**
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
 */const s1=1e4,o1=`w:${Fg}`,a1="FIS_v2",BU="https://firebaseinstallations.googleapis.com/v1",zU=60*60*1e3,HU="installations",WU="Installations";/**
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
 */const qU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qi=new Xi(HU,WU,qU);function l1(t){return t instanceof wn&&t.code.includes("request-failed")}/**
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
 */function u1({projectId:t}){return`${BU}/projects/${t}/installations`}function c1(t){return{token:t.token,requestStatus:2,expiresIn:GU(t.expiresIn),creationTime:Date.now()}}async function h1(t,e){const r=(await e.json()).error;return qi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function d1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function KU(t,{refreshToken:e}){const n=d1(t);return n.append("Authorization",QU(e)),n}async function f1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GU(t){return Number(t.replace("s","000"))}function QU(t){return`${a1} ${t}`}/**
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
 */async function YU({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=u1(t),i=d1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:a1,appId:t.appId,sdkVersion:o1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await f1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:c1(c.authToken)}}else throw await h1("Create Installation",u)}/**
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
 */function p1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function JU(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const XU=/^[cdef][\w-]{21}$/,Sp="";function ZU(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=e4(t);return XU.test(n)?n:Sp}catch{return Sp}}function e4(t){return JU(t).substr(0,22)}/**
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
 */function Sh(t){return`${t.appName}!${t.appId}`}/**
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
 */const m1=new Map;function g1(t,e){const n=Sh(t);y1(n,e),t4(n,e)}function y1(t,e){const n=m1.get(t);if(n)for(const r of n)r(e)}function t4(t,e){const n=n4();n&&n.postMessage({key:t,fid:e}),r4()}let Ci=null;function n4(){return!Ci&&"BroadcastChannel"in self&&(Ci=new BroadcastChannel("[Firebase] FID Change"),Ci.onmessage=t=>{y1(t.data.key,t.data.fid)}),Ci}function r4(){m1.size===0&&Ci&&(Ci.close(),Ci=null)}/**
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
 */const i4="firebase-installations-database",s4=1,Ki="firebase-installations-store";let $d=null;function jg(){return $d||($d=Wc(i4,s4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}})),$d}async function Ic(t,e){const n=Sh(t),i=(await jg()).transaction(Ki,"readwrite"),s=i.objectStore(Ki),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&g1(t,e.fid),e}async function _1(t){const e=Sh(t),r=(await jg()).transaction(Ki,"readwrite");await r.objectStore(Ki).delete(e),await r.done}async function Ah(t,e){const n=Sh(t),i=(await jg()).transaction(Ki,"readwrite"),s=i.objectStore(Ki),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&g1(t,l.fid),l}/**
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
 */async function $g(t){let e;const n=await Ah(t.appConfig,r=>{const i=o4(r),s=a4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Sp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function o4(t){const e=t||{fid:ZU(),registrationStatus:0};return v1(e)}function a4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=l4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:u4(t)}:{installationEntry:e}}async function l4(t,e){try{const n=await YU(t,e);return Ic(t.appConfig,n)}catch(n){throw l1(n)&&n.customData.serverCode===409?await _1(t.appConfig):await Ic(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function u4(t){let e=await Jw(t.appConfig);for(;e.registrationStatus===1;)await p1(100),e=await Jw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $g(t);return r||n}return e}function Jw(t){return Ah(t,e=>{if(!e)throw qi.create("installation-not-found");return v1(e)})}function v1(t){return c4(t)?{fid:t.fid,registrationStatus:0}:t}function c4(t){return t.registrationStatus===1&&t.registrationTime+s1<Date.now()}/**
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
 */async function h4({appConfig:t,heartbeatServiceProvider:e},n){const r=d4(t,n),i=KU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:o1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await f1(()=>fetch(r,l));if(u.ok){const c=await u.json();return c1(c)}else throw await h1("Generate Auth Token",u)}function d4(t,{fid:e}){return`${u1(t)}/${e}/authTokens:generate`}/**
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
 */async function Bg(t,e=!1){let n;const r=await Ah(t.appConfig,s=>{if(!w1(s))throw qi.create("not-registered");const o=s.authToken;if(!e&&m4(o))return s;if(o.requestStatus===1)return n=f4(t,e),s;{if(!navigator.onLine)throw qi.create("app-offline");const l=y4(s);return n=p4(t,l),l}});return n?await n:r.authToken}async function f4(t,e){let n=await Xw(t.appConfig);for(;n.authToken.requestStatus===1;)await p1(100),n=await Xw(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bg(t,e):r}function Xw(t){return Ah(t,e=>{if(!w1(e))throw qi.create("not-registered");const n=e.authToken;return _4(n)?{...e,authToken:{requestStatus:0}}:e})}async function p4(t,e){try{const n=await h4(t,e),r={...e,authToken:n};return await Ic(t.appConfig,r),n}catch(n){if(l1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ic(t.appConfig,r)}throw n}}function w1(t){return t!==void 0&&t.registrationStatus===2}function m4(t){return t.requestStatus===2&&!g4(t)}function g4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zU}function y4(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function _4(t){return t.requestStatus===1&&t.requestTime+s1<Date.now()}/**
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
 */async function v4(t){const e=t,{installationEntry:n,registrationPromise:r}=await $g(e);return r?r.catch(console.error):Bg(e).catch(console.error),n.fid}/**
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
 */async function w4(t,e=!1){const n=t;return await E4(n),(await Bg(n,e)).token}async function E4(t){const{registrationPromise:e}=await $g(t);e&&await e}/**
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
 */function T4(t){if(!t||!t.options)throw Bd("App Configuration");if(!t.name)throw Bd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bd(t){return qi.create("missing-app-config-values",{valueName:t})}/**
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
 */const E1="installations",I4="installations-internal",S4=t=>{const e=t.getProvider("app").getImmediate(),n=T4(e),r=es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},A4=t=>{const e=t.getProvider("app").getImmediate(),n=es(e,E1).getImmediate();return{getId:()=>v4(n),getToken:i=>w4(n,i)}};function R4(){_n(new sn(E1,S4,"PUBLIC")),_n(new sn(I4,A4,"PRIVATE"))}R4();Lt(i1,Fg);Lt(i1,Fg,"esm2020");/**
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
 */const k4="/firebase-messaging-sw.js",P4="/firebase-cloud-messaging-push-scope",T1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",C4="https://fcmregistrations.googleapis.com/v1",I1="google.c.a.c_id",b4="google.c.a.c_l",x4="google.c.a.ts",N4="google.c.a.e",Zw=1e4;var eE;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(eE||(eE={}));/**
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
 */var nl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(nl||(nl={}));/**
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
 */function zn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function O4(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const zd="fcm_token_details_db",D4=5,tE="fcm_token_object_Store";async function L4(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(zd))return null;let e=null;return(await Wc(zd,D4,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(tE))return;const l=o.objectStore(tE),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:zn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:zn(c.auth),p256dh:zn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:zn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:zn(c.auth),p256dh:zn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:zn(c.vapidKey)}}}}}})).close(),await kd(zd),await kd("fcm_vapid_details_db"),await kd("undefined"),V4(e)?e:null}function V4(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const M4="firebase-messaging-database",U4=1,rl="firebase-messaging-store";let Hd=null;function S1(){return Hd||(Hd=Wc(M4,U4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rl)}}})),Hd}async function F4(t){const e=A1(t),r=await(await S1()).transaction(rl).objectStore(rl).get(e);if(r)return r;{const i=await L4(t.appConfig.senderId);if(i)return await zg(t,i),i}}async function zg(t,e){const n=A1(t),i=(await S1()).transaction(rl,"readwrite");return await i.objectStore(rl).put(e,n),await i.done,e}function A1({appConfig:t}){return t.appId}/**
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
 */const j4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},St=new Xi("messaging","Messaging",j4);/**
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
 */async function $4(t,e){const n=await Wg(t),r=R1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Hg(t.appConfig),i)).json()}catch(o){throw St.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw St.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw St.create("token-subscribe-no-token");return s.token}async function B4(t,e){const n=await Wg(t),r=R1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Hg(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw St.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw St.create("token-update-failed",{errorInfo:o})}if(!s.token)throw St.create("token-update-no-token");return s.token}async function z4(t,e){const r={method:"DELETE",headers:await Wg(t)};try{const s=await(await fetch(`${Hg(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw St.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw St.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Hg({projectId:t}){return`${C4}/projects/${t}/registrations`}async function Wg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function R1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==T1&&(i.web.applicationPubKey=r),i}/**
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
 */const H4=7*24*60*60*1e3;async function W4(t){const e=await K4(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:zn(e.getKey("auth")),p256dh:zn(e.getKey("p256dh"))},r=await F4(t.firebaseDependencies);if(r){if(G4(r.subscriptionOptions,n))return Date.now()>=r.createTime+H4?q4(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await z4(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return nE(t.firebaseDependencies,n)}else return nE(t.firebaseDependencies,n)}async function q4(t,e){try{const n=await B4(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await zg(t.firebaseDependencies,r),n}catch(n){throw n}}async function nE(t,e){const r={token:await $4(t,e),createTime:Date.now(),subscriptionOptions:e};return await zg(t,r),r.token}async function K4(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:O4(e)})}function G4(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function rE(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Q4(e,t),Y4(e,t),J4(e,t),e}function Q4(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function Y4(t,e){e.data&&(t.data=e.data)}function J4(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function X4(t){return typeof t=="object"&&!!t&&I1 in t}/**
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
 */Z4("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Z4(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function eF(t){if(!t||!t.options)throw Wd("App Configuration Object");if(!t.name)throw Wd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Wd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Wd(t){return St.create("missing-app-config-values",{valueName:t})}/**
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
 */class tF{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=eF(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function nF(t){try{t.swRegistration=await navigator.serviceWorker.register(k4,{scope:P4}),t.swRegistration.update().catch(()=>{}),await rF(t.swRegistration)}catch(e){throw St.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function rF(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${Zw} ms`)),Zw),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function iF(t,e){if(!e&&!t.swRegistration&&await nF(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw St.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function sF(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=T1)}/**
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
 */async function k1(t,e){if(!navigator)throw St.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw St.create("permission-blocked");return await sF(t,e==null?void 0:e.vapidKey),await iF(t,e==null?void 0:e.serviceWorkerRegistration),W4(t)}/**
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
 */async function oF(t,e,n){const r=aF(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[I1],message_name:n[b4],message_time:n[x4],message_device_time:Math.floor(Date.now()/1e3)})}function aF(t){switch(t){case nl.NOTIFICATION_CLICKED:return"notification_open";case nl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function lF(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===nl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(rE(n)):t.onMessageHandler.next(rE(n)));const r=n.data;X4(r)&&r[N4]==="1"&&await oF(t,n.messageType,r)}const iE="@firebase/messaging",sE="0.12.25";/**
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
 */const uF=t=>{const e=new tF(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>lF(e,n)),e},cF=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>k1(e,r)}};function hF(){_n(new sn("messaging",uF,"PUBLIC")),_n(new sn("messaging-internal",cF,"PRIVATE")),Lt(iE,sE),Lt(iE,sE,"esm2020")}/**
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
 */async function P1(){try{await hI()}catch{return!1}return typeof window<"u"&&cI()&&ix()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function dF(t=qc()){return P1().then(e=>{if(!e)throw St.create("unsupported-browser")},e=>{throw St.create("indexed-db-unsupported")}),es(ne(t),"messaging").getImmediate()}async function fF(t,e){return t=ne(t),k1(t,e)}hF();const pF={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},Rh=pI(pF),Gt=lL(Rh);FO(Gt,KI);const Lr=yM(Rh),A6=UU(Rh),qd=new kn;let Ap=null;const mF="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";P1().then(t=>{t&&(Ap=dF(Rh))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var Gi;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Gi||(Gi={}));class Pu extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const gF=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},yF=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:gF(t),s=()=>i()!=="web",o=f=>{const m=c.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(w=>w.name===f)},u=f=>t.console.error(f),c=new Map,d=(f,m={})=>{const w=c.get(f);if(w)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),w.proxy;const b=i(),k=l(f);let P;const v=async()=>(!P&&b in m?P=typeof m[b]=="function"?P=await m[b]():P=m[b]:e!==null&&!P&&"web"in m&&(P=typeof m.web=="function"?P=await m.web():P=m.web),P),_=(y,E)=>{var R,C;if(k){const x=k==null?void 0:k.methods.find(S=>E===S.name);if(x)return x.rtype==="promise"?S=>n.nativePromise(f,E.toString(),S):(S,Te)=>n.nativeCallback(f,E.toString(),S,Te);if(y)return(R=y[E])===null||R===void 0?void 0:R.bind(y)}else{if(y)return(C=y[E])===null||C===void 0?void 0:C.bind(y);throw new Pu(`"${f}" plugin is not implemented on ${b}`,Gi.Unimplemented)}},T=y=>{let E;const R=(...C)=>{const x=v().then(S=>{const Te=_(S,y);if(Te){const ze=Te(...C);return E=ze==null?void 0:ze.remove,ze}else throw new Pu(`"${f}.${y}()" is not implemented on ${b}`,Gi.Unimplemented)});return y==="addListener"&&(x.remove=async()=>E()),x};return R.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(R,"name",{value:y,writable:!1,configurable:!1}),R},D=T("addListener"),U=T("removeListener"),$=(y,E)=>{const R=D({eventName:y},E),C=async()=>{const S=await R;U({eventName:y,callbackId:S},E)},x=new Promise(S=>R.then(()=>S({remove:C})));return x.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await C()},x},I=new Proxy({},{get(y,E){switch(E){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return k?$:D;case"removeListener":return U;default:return T(E)}}});return r[f]=I,c.set(f,{name:f,proxy:I,platforms:new Set([...Object.keys(m),...k?[b]:[]])}),I};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=u,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Pu,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},_F=t=>t.Capacitor=yF(t),dn=_F(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),di=dn.registerPlugin;class kh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new dn.Exception(e,Gi.Unimplemented)}unavailable(e="not available"){return new dn.Exception(e,Gi.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const vF=di("WebView"),oE=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),aE=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class wF extends kh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=aE(i).trim(),s=aE(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=oE(e.key),r=oE(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const EF=di("CapacitorCookies",{web:()=>new wF}),TF=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),IF=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},SF=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,u;return Array.isArray(o)?(u="",o.forEach(c=>{l=e?encodeURIComponent(c):c,u+=`${s}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${s}=${l}`),`${r}&${u}`},"").substr(1):null,C1=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=IF(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{s.append(u,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class AF extends kh{async request(e){const n=C1(e,e.webFetchExtra),r=SF(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let u,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),u=await TF(c);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:u,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const RF=di("CapacitorHttp",{web:()=>new AF});var Rp;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Rp||(Rp={}));var kp;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(kp||(kp={}));class kF extends kh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const PF=di("SystemBars",{web:()=>new kF}),R6=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:dn,CapacitorCookies:EF,CapacitorException:Pu,CapacitorHttp:RF,get ExceptionCode(){return Gi},get SystemBarType(){return kp},SystemBars:PF,get SystemBarsStyle(){return Rp},WebPlugin:kh,WebView:vF,buildRequestInit:C1,registerPlugin:di},Symbol.toStringTag,{value:"Module"}));var lE;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(lE||(lE={}));var uE;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(uE||(uE={}));const CF=di("FirebaseAuthentication",{web:()=>ie(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),b1=O.createContext();function vo(){return O.useContext(b1)}function bF({children:t}){const[e,n]=O.useState(null),[r,i]=O.useState(!0),s=O.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async k=>{if(!k){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",k.email);try{const P=Qr(Lr,"users",k.uid),v=await FA(P),_=k.email==="prince86944@gmail.com";if(v.exists()){const T=v.data();console.log("[AUTH] Existing user data found:",T.role),_&&T.role!==o.SUPER_ADMIN?(await Fs(P,{role:o.SUPER_ADMIN}),n({...k,...T,role:o.SUPER_ADMIN})):n({...k,...T})}else{console.log("[AUTH] No existing profile. Creating new entry...");const T={uid:k.uid,name:k.displayName||"Scholar",email:k.email,phone:k.phoneNumber||"",createdAt:Fw(),role:_?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await Ww(P,T),n({...k,...T})}}catch(P){console.error("[AUTH] Profile sync critical failure:",P),n({uid:k.uid,email:k.email,name:k.displayName||"Scholar",role:k.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function u(k,P,v,_){const T=await bO(Gt,k,P),D={uid:T.user.uid,name:v,email:k,phone:_,createdAt:Fw(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await Ww(Qr(Lr,"users",T.user.uid),D),T.user}async function c(k,P){return xO(Gt,k,P)}async function d(){var P;if(dn.isNativePlatform())try{const v=await CF.signInWithGoogle();if((P=v==null?void 0:v.credential)!=null&&P.idToken){const _=kn.credential(v.credential.idToken),T=await Zc(Gt,_);return await l(T.user),T.user}throw new Error("Native Google Login failed")}catch(v){console.error("Native Google Login Error:",v);const _=await Vv(Gt,qd);return await l(_.user),_.user}else try{const v=await Vv(Gt,qd);return await l(v.user),v.user}catch(v){return console.warn("Popup failed or blocked, falling back to Redirect...",v),await wD(Gt,qd)}}function f(k){return window.recaptchaVerifier||(window.recaptchaVerifier=new uD(Gt,"recaptcha-container",{size:"invisible"})),hD(Gt,k,window.recaptchaVerifier)}async function m(k){e&&(await Fs(Qr(Lr,"users",e.uid),k),n(P=>({...P,...k})))}function w(){return zO(Gt)}O.useEffect(()=>BO(Gt,async P=>{e||i(!0);try{P?await l(P):n(null)}catch(v){console.error("Auth sync error:",v)}finally{i(!1)}}),[]),O.useEffect(()=>{ID(Gt).then(async k=>{k!=null&&k.user&&(console.log("[AUTH] Redirect result success:",k.user.email),await l(k.user))}).catch(k=>{console.error("[AUTH] Redirect result error:",k)})},[]);const b={user:e,ROLES:o,login:c,signup:u,logout:w,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return A.jsx(b1.Provider,{value:b,children:t})}const $n=di("Preferences",{web:()=>ie(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),me=di("AppBlocker"),x1=O.createContext(null);function cE(){return O.useContext(x1)}function xF({children:t}){const{user:e}=vo(),n=(j,z)=>{try{const Z=localStorage.getItem(j);return Z!==null?JSON.parse(Z):z}catch{return z}},[r,i]=O.useState(!1),[s,o]=O.useState(0),[l,u]=O.useState("OTHERS"),[c,d]=O.useState(0),[f,m]=O.useState(0),[w,b]=O.useState(0),[k,P]=O.useState("COUNTDOWN"),[v,_]=O.useState(!1),[T,D]=O.useState(!1),[U,$]=O.useState(()=>n("allowedPackages","")),[I,y]=O.useState([]),[E,R]=O.useState(""),C=O.useRef(null),x=()=>{var j,z,Z,he,lt;return dn.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((z=(j=window.Capacitor).isNativePlatform)==null?void 0:z.call(j))||((he=(Z=window.Capacitor).isPluginAvailable)==null?void 0:he.call(Z,"AppBlocker")))||((lt=dn.isPluginAvailable)==null?void 0:lt.call(dn,"AppBlocker"))},S=async()=>{if(x())try{if(me&&me.getInstalledApps){const{apps:j}=await me.getInstalledApps();y(j.sort((z,Z)=>z.name.localeCompare(Z.name)))}}catch(j){console.error("Fetch Apps Error:",j)}};O.useEffect(()=>{(async()=>{if(x()){await S();try{const z=await $n.get({key:"countdownEndTime"}),Z=Number(z.value||0);if(Z>Date.now()){const he=Math.ceil((Z-Date.now())/1e3);o(he),i(!0),P("COUNTDOWN");const lt=await $n.get({key:"allowedPackages"});lt.value&&$(lt.value),console.log("Restored active focus session on initialization:",he,"seconds remaining")}else me&&me.stopBlocker&&await me.stopBlocker(),await $n.set({key:"isBlockerActive",value:"false"}),await $n.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(z){console.error("Error restoring blocker state:",z)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const Te=j=>{if($(j),localStorage.setItem("allowedPackages",JSON.stringify(j)),x()){$n.set({key:"allowedPackages",value:j});try{const z=(j||"").split(",").filter(Boolean);z.includes("com.apnacollegebihar.online")||z.push("com.apnacollegebihar.online"),me&&me.setAllowedPackages&&me.setAllowedPackages({packages:z})}catch{}}},ze=j=>{if(j||_(!1),i(j),localStorage.setItem("timerActive",JSON.stringify(j)),x())try{if(j){if(me&&me.setBlockerActive&&me.setBlockerActive({active:!0}),k==="COUNTDOWN"){me&&me.startCountdown&&me.startCountdown({minutes:Math.ceil(s/60)});const Z=Date.now()+s*1e3;$n.set({key:"countdownEndTime",value:String(Z)})}const z=(U||"").split(",").filter(Boolean);z.includes("com.apnacollegebihar.online")||z.push("com.apnacollegebihar.online"),me&&me.setAllowedPackages&&me.setAllowedPackages({packages:z}),$n.set({key:"isBlockerActive",value:"true"})}else me&&me.stopBlocker&&me.stopBlocker(),$n.set({key:"isBlockerActive",value:"false"}),$n.set({key:"countdownEndTime",value:"0"})}catch(z){console.error("Native Blocker Error:",z)}},fi=j=>{D(j),localStorage.setItem("focusBroken",JSON.stringify(j))};O.useEffect(()=>{const j=z=>{z.key==="timerActive"&&i(JSON.parse(z.newValue)),z.key==="focusBroken"&&D(JSON.parse(z.newValue))};return window.addEventListener("storage",j),()=>window.removeEventListener("storage",j)},[]),O.useEffect(()=>{r||o(k==="COUNTDOWN"?c*3600+f*60+w:0)},[k,c,f,w,r]);const pi=async(j=null)=>{if(!e)return;const z=j||(v?c*3600+f*60+w+s:k==="STOPWATCH"?s:c*3600+f*60-s);if(z<5){_(!1),ze(!1);return}try{const Z=new Date().toLocaleDateString("en-CA");await bM(gM(Lr,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:z,date:Z,createdAt:new Date().toISOString()});const he=Qr(Lr,"users",e.uid),lt=await FA(he);if(lt.exists()){const Ye=lt.data(),kt=Ye.lastStudyDate!==Z?z:(Ye.todayStudyTime||0)+z,Kt=new Date;Kt.setDate(Kt.getDate()-1);const ss=Kt.toLocaleDateString("en-CA");let mi=Ye.streak||0,Un=Ye.streakDate||"";Un!==Z&&Un!==ss&&(mi=0),kt>=7200&&Un!==Z&&(Un===ss?mi+=1:mi=1,Un=Z),await Fs(he,{totalStudyTime:(Ye.totalStudyTime||0)+z,todayStudyTime:kt,lastStudyDate:Z,streak:mi,streakDate:Un,isStudying:!1})}E&&(await Fs(Qr(Lr,"Tasks",E),{done:!0}),R("")),_(!1),ze(!1)}catch(Z){_(!1),console.error("Global Save Error:",Z)}};O.useEffect(()=>{e&&Fs(Qr(Lr,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),O.useEffect(()=>{const j=z=>{r&&(z.preventDefault(),z.returnValue="")};return window.addEventListener("beforeunload",j),()=>{window.removeEventListener("beforeunload",j)}},[r]),O.useEffect(()=>(r?C.current=setInterval(()=>{o(k==="COUNTDOWN"?j=>j<=1?(P("STOPWATCH"),_(!0),0):j-1:j=>j+1)},1e3):clearInterval(C.current),()=>clearInterval(C.current)),[r,k,e,c,f,w,E]);const q={timerActive:r,setTimerActive:ze,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:u,customHours:c,setCustomHours:d,customMinutes:f,setCustomMinutes:m,customSeconds:w,setCustomSeconds:b,timerMode:k,setTimerMode:P,overtimeActive:v,setOvertimeActive:_,saveGlobalSession:pi,focusBroken:T,setFocusBroken:fi,allowedPackages:U,setAllowedPackages:Te,installedApps:I,fetchApps:S,selectedTaskId:E,setSelectedTaskId:R,launchApp:async j=>{if(x())try{me&&me.launchApp&&await me.launchApp({packageName:j})}catch(z){console.error(z)}},openAccessibilitySettings:async()=>{if(x())try{me&&me.openAccessibilitySettings&&await me.openAccessibilitySettings()}catch(j){console.error(j)}}};return A.jsx(x1.Provider,{value:q,children:t})}var NF=typeof Element<"u",OF=typeof Map=="function",DF=typeof Set=="function",LF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Cu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Cu(t[r],e[r]))return!1;return!0}var s;if(OF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Cu(r.value[1],e.get(r.value[0])))return!1;return!0}if(DF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(LF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(NF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Cu(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var VF=function(e,n){try{return Cu(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const MF=Sc(VF);var UF=function(t,e,n,r,i,s,o,l){if(!t){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,l],d=0;u=new Error(e.replace(/%s/g,function(){return c[d++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},FF=UF;const hE=Sc(FF);var jF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var d=o[c];if(!u(d))return!1;var f=e[d],m=n[d];if(s=r?r.call(i,f,m,d):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const $F=Sc(jF);var N1=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(N1||{}),Kd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},dE=Object.values(N1),Ph={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},O1=Object.entries(Ph).reduce((t,[e,n])=>(t[n]=e,t),{}),fn="data-rh",js={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},$s=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},BF=t=>{let e=$s(t,"title");const n=$s(t,js.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=$s(t,js.DEFAULT_TITLE);return e||r||void 0},zF=t=>$s(t,js.ON_CHANGE_CLIENT_STATE)||(()=>{}),Gd=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),HF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),WF=t=>console&&typeof console.warn=="function"&&console.warn(t),Ko=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&WF(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(u=>{let c;const d=Object.keys(u);for(let m=0;m<d.length;m+=1){const w=d[m],b=w.toLowerCase();e.indexOf(b)!==-1&&!(c==="rel"&&u[c].toLowerCase()==="canonical")&&!(b==="rel"&&u[b].toLowerCase()==="stylesheet")&&(c=b),e.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(c=w)}if(!c||!u[c])return!1;const f=u[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][f]?!1:(o[c][f]=!0,!0)}).reverse().forEach(u=>i.push(u));const l=Object.keys(o);for(let u=0;u<l.length;u+=1){const c=l[u],d={...r[c],...o[c]};r[c]=d}return i},[]).reverse()},qF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},KF=t=>({baseTag:HF(["href"],t),bodyAttributes:Gd("bodyAttributes",t),defer:$s(t,js.DEFER),encode:$s(t,js.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Gd("htmlAttributes",t),linkTags:Ko("link",["rel","href"],t),metaTags:Ko("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Ko("noscript",["innerHTML"],t),onChangeClientState:zF(t),scriptTags:Ko("script",["src","innerHTML"],t),styleTags:Ko("style",["cssText"],t),title:BF(t),titleAttributes:Gd("titleAttributes",t),prioritizeSeoTags:qF(t,js.PRIORITIZE_SEO_TAGS)}),D1=t=>Array.isArray(t)?t.join(""):t,GF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Qd=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(GF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},fE=(t,e)=>({...t,[e]:void 0}),QF=["noscript","script","style"],Pp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),L1=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),YF=(t,e,n,r)=>{const i=L1(n),s=D1(e);return i?`<${t} ${fn}="true" ${i}>${Pp(s,r)}</${t}>`:`<${t} ${fn}="true">${Pp(s,r)}</${t}>`},JF=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const f=typeof s[d]>"u"?d:`${d}="${Pp(s[d],n)}"`;return c?`${c} ${f}`:f},""),l=s.innerHTML||s.cssText||"",u=QF.indexOf(t)===-1;return`${r}<${t} ${fn}="true" ${o}${u?"/>":`>${l}</${t}>`}`},""),V1=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Ph[r];return n[i||r]=t[r],n},e),XF=(t,e,n)=>{const r={key:e,[fn]:!0},i=V1(n,r);return[Q.createElement("title",i,e)]},bu=(t,e)=>e.map((n,r)=>{const i={key:r,[fn]:!0};return Object.keys(n).forEach(s=>{const l=Ph[s]||s;if(l==="innerHTML"||l==="cssText"){const u=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:u}}else i[l]=n[s]}),Q.createElement(t,i)}),Qt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>XF(t,e.title,e.titleAttributes),toString:()=>YF(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>V1(e),toString:()=>L1(e)};default:return{toComponent:()=>bu(t,e),toString:()=>JF(t,e,n)}}},ZF=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=Qd(t,Kd.meta),s=Qd(e,Kd.link),o=Qd(n,Kd.script);return{priorityMethods:{toComponent:()=>[...bu("meta",i.priority),...bu("link",s.priority),...bu("script",o.priority)],toString:()=>`${Qt("meta",i.priority,r)} ${Qt("link",s.priority,r)} ${Qt("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},ej=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:u,prioritizeSeoTags:c}=t;let{linkTags:d,metaTags:f,scriptTags:m}=t,w={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:w,linkTags:d,metaTags:f,scriptTags:m}=ZF(t)),{priority:w,base:Qt("base",e,r),bodyAttributes:Qt("bodyAttributes",n,r),htmlAttributes:Qt("htmlAttributes",i,r),link:Qt("link",d,r),meta:Qt("meta",f,r),noscript:Qt("noscript",s,r),script:Qt("script",m,r),style:Qt("style",o,r),title:Qt("title",{title:l,titleAttributes:u},r)}},Cp=ej,ru=[],qg=!!(typeof window<"u"&&window.document&&window.document.createElement),bp=class{constructor(t,e){Fn(this,"instances",[]);Fn(this,"canUseDOM",qg);Fn(this,"context");Fn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?ru:this.instances,add:t=>{(this.canUseDOM?ru:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?ru:this.instances).indexOf(t);(this.canUseDOM?ru:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Cp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},tj=parseInt(Q.version.split(".")[0],10),xp=tj>=19,nj={},M1=Q.createContext(nj),Bs,U1=(Bs=class extends O.Component{constructor(n){super(n);Fn(this,"helmetData");xp?this.helmetData=null:this.helmetData=new bp(this.props.context||{},Bs.canUseDOM)}render(){return xp?Q.createElement(Q.Fragment,null,this.props.children):Q.createElement(M1.Provider,{value:this.helmetData.value},this.props.children)}},Fn(Bs,"canUseDOM",qg),Bs),cs=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${fn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const u=document.createElement(t);for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c))if(c==="innerHTML")u.innerHTML=l.innerHTML;else if(c==="cssText"){const d=l.cssText;u.appendChild(document.createTextNode(d))}else{const d=c,f=typeof l[d]>"u"?"":l[d];u.setAttribute(c,f)}u.setAttribute(fn,"true"),i.some((c,d)=>(o=d,u.isEqualNode(c)))?i.splice(o,1):s.push(u)}),i.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},Np=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(fn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);const c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(fn):n.getAttribute(fn)!==o.join(",")&&n.setAttribute(fn,o.join(","))},rj=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=D1(t)),Np("title",e)},pE=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:u,scriptTags:c,styleTags:d,title:f,titleAttributes:m}=t;Np("body",r),Np("html",i),rj(f,m);const w={baseTag:cs("base",n),linkTags:cs("link",s),metaTags:cs("meta",o),noscriptTags:cs("noscript",l),scriptTags:cs("script",c),styleTags:cs("style",d)},b={},k={};Object.keys(w).forEach(P=>{const{newTags:v,oldTags:_}=w[P];v.length&&(b[P]=v),_.length&&(k[P]=w[P].oldTags)}),e&&e(),u(t,b,k)},Go=null,ij=t=>{Go&&cancelAnimationFrame(Go),t.defer?Go=requestAnimationFrame(()=>{pE(t,()=>{Go=null})}):(pE(t),Go=null)},sj=ij,mE=class extends O.Component{constructor(){super(...arguments);Fn(this,"rendered",!1)}shouldComponentUpdate(e){return!$F(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=KF(e.get().map(s=>{const{context:o,...l}=s.props;return l}));U1.canUseDOM?sj(i):Cp&&(r=Cp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},xu=[],gE=t=>{const e={};for(const n of Object.keys(t))e[O1[n]||n]=t[n];return e},Ei=t=>{const e={};for(const n of Object.keys(t)){const r=Ph[n];e[r||n]=t[n]}return e},yE=(t,e)=>{if(!qg)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const u=e[l];u==null||u===!1?n.removeAttribute(l):u===!0?n.setAttribute(l,""):n.setAttribute(l,String(u))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},Yd=()=>{const t={},e={};for(const n of xu){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,gE(r)),i&&Object.assign(e,gE(i))}yE("html",t),yE("body",e)},oj=class extends O.Component{componentDidMount(){xu.push(this),Yd()}componentDidUpdate(){Yd()}componentWillUnmount(){const t=xu.indexOf(this);t!==-1&&xu.splice(t,1),Yd()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return Q.createElement("title",Ei(e),t)}renderBase(){const{base:t}=this.props;return t?Q.createElement("base",Ei(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Q.createElement("meta",{key:n,...Ei(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Q.createElement("link",{key:n,...Ei(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Ei(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Ei(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Ei(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("noscript",{key:n,...s})})}render(){return Q.createElement(Q.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},Zd,aj=(Zd=class extends O.Component{shouldComponentUpdate(t){return!MF(fE(this.props,"helmetData"),fE(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return hE(dE.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${dE.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),hE(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return Q.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((u,c)=>(u[O1[c]||c]=s[c],u),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof bp)){const i=r;r=new bp(i.context,!0),delete n.helmetData}return xp?Q.createElement(oj,{...n}):r?Q.createElement(mE,{...n,context:r.value}):Q.createElement(M1.Consumer,null,i=>Q.createElement(mE,{...n,context:i}))}},Fn(Zd,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Zd);function lj({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return Q.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const u=document.querySelector('meta[property="og:title"]');u&&u.setAttribute("content",o);const c=document.querySelector('meta[property="og:description"]');c&&c.setAttribute("content",e)},[o,e]),A.jsxs(aj,{children:[A.jsx("title",{children:o}),A.jsx("meta",{name:"description",content:e}),A.jsx("meta",{name:"keywords",content:n}),A.jsx("link",{rel:"canonical",href:r}),A.jsx("meta",{property:"og:type",content:"website"}),A.jsx("meta",{property:"og:url",content:r}),A.jsx("meta",{property:"og:title",content:o}),A.jsx("meta",{property:"og:description",content:e}),A.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),A.jsx("meta",{property:"og:image",content:i}),A.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),A.jsx("meta",{name:"twitter:title",content:o}),A.jsx("meta",{name:"twitter:description",content:e}),A.jsx("meta",{name:"twitter:image",content:i}),s&&A.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}function _E(){dn.isNativePlatform();const t=ao(),e=Nm(),{user:n,updateProfileData:r}=vo(),[i,s]=O.useState(""),[o,l]=O.useState(!1),[u,c]=O.useState(!1),[d,f]=O.useState(navigator.onLine);cE(),O.useEffect(()=>{const P=()=>f(!0),v=()=>f(!1);return window.addEventListener("online",P),window.addEventListener("offline",v),()=>{window.removeEventListener("online",P),window.removeEventListener("offline",v)}},[]),O.useEffect(()=>{d&&n&&n.uid&&!n.phone?l(!0):l(!1),(async()=>{if(!(!n||!Ap||!d))try{if(await Notification.requestPermission()==="granted"){const _=await fF(Ap,{vapidKey:mF});_&&await Fs(Qr(Lr,"users",n.uid),{fcmToken:_})}}catch(v){console.error("Push notification setup failed:",v)}})()},[n,d]);const m=async P=>{if(P.preventDefault(),!(i.length<10)){c(!0);try{await r({phone:i}),l(!1)}catch(v){console.error(v)}finally{c(!1)}}},w=()=>{const{timerActive:P,timerTime:v}=cE(),[_,T]=O.useState(!1);if(!P||t.pathname==="/study")return null;const D=Math.floor(v%3600/60),U=v%60;return A.jsx("div",{className:`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${_?"translate-x-[70%]":""}`,children:A.jsxs("div",{className:"bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group",children:[A.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse",children:A.jsx(jb,{size:20,className:"text-white"})}),A.jsxs("div",{className:`flex items-center gap-4 pr-6 ${_?"opacity-0 w-0 overflow-hidden":"opacity-100"}`,children:[A.jsxs("div",{children:[A.jsx("p",{className:"text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1",children:"Live Focus"}),A.jsxs("p",{className:"text-xl font-black text-white tabular-nums tracking-tighter",children:[D.toString().padStart(2,"0"),":",U.toString().padStart(2,"0")]})]}),A.jsx("button",{onClick:()=>e("/study"),className:"px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest",children:"Resume"})]}),A.jsx("button",{onClick:()=>T(!_),className:"p-2 text-slate-500 hover:text-white",children:_?A.jsx(hv,{size:16}):A.jsx($b,{size:16})})]})})},k=(P=>P.includes("/study-resources")?"Study Resources":P.includes("/study")?"Study Zone":P.includes("/notes")?"B.Tech Notes":P.includes("/pyq")?"PYQ Papers":P.includes("/syllabus")?"BEU Syllabus":P.includes("/cgpa")?"CGPA Calculator":P.includes("/ugeac-predictor")?"UGEAC Predictor":P.includes("/calculator")?"Calculator":P.includes("/achievements")?"Achievements":P.includes("/groups")?"Study Groups":P.includes("/timetable")?"BEU Timetable":P.includes("/attendance")?"BEU Attendance Tracker":P.includes("/extras")?"Personal Manager":P.includes("/calendar")?"Calendar":P.includes("/beu-result")?"BEU Result":P.includes("/admin")?"Admin Panel":"ACB Hub")(t.pathname);return A.jsxs("div",{className:"flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30",children:[A.jsx(lj,{title:k}),A.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]",children:[A.jsxs("button",{onClick:()=>{var P;((P=t.state)==null?void 0:P.from)==="study-network"?e("/study?standalone=true",{state:{tab:"network"}}):e(-1)},className:"flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group",children:[A.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all",children:A.jsx(hv,{size:20})}),A.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Back"})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg object-cover shadow-sm"}),A.jsx("span",{className:"text-[10px] font-[1000] tracking-tighter uppercase text-slate-900",children:k})]})]}),A.jsx("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32",children:A.jsx("div",{className:"max-w-7xl mx-auto min-h-[80vh]",children:A.jsx(Om,{})})}),o&&d&&A.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:A.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[A.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:A.jsx(Fb,{size:32})}),A.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),A.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),A.jsxs("form",{onSubmit:m,className:"space-y-6",children:[A.jsxs("div",{className:"flex gap-2",children:[A.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),A.jsx("input",{type:"tel",maxLength:10,value:i,onChange:P=>s(P.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),A.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})}),A.jsx(w,{})]})}const uj=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=vo(),[i,s]=O.useState(""),[o,l]=O.useState(!1);if(e)return A.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:A.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),A.jsx(ma,{to:"/login",replace:!0});const u=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",c=async f=>{if(f.preventDefault(),i.length<10)return Id.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Id.success("Mobile number linked securely!")}catch{Id.error("Failed to save. Try again.")}finally{l(!1)}};return u?A.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:A.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[A.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),A.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[A.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:A.jsx(tI,{className:"text-blue-500 w-10 h-10"})}),A.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),A.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),A.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[A.jsxs("div",{className:"relative group",children:[A.jsx(Zf,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),A.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),A.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),A.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[A.jsx(Zf,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),A.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):A.jsx(Om,{})},cj=()=>{const{user:t,loading:e,ROLES:n}=vo();return e?A.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:A.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?A.jsx(Om,{}):A.jsx(ma,{to:"/",replace:!0})},hj=Q.lazy(()=>ie(()=>import("./Home.js"),["assets/Home.js","assets/chevron-down.js","assets/calendar2.js","assets/log-out.js","assets/zap.js","assets/arrow-right.js","assets/download.js","assets/graduation-cap.js","assets/check-circle.js","assets/sparkles.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/library.js","assets/users.js","assets/calculator.js","assets/link-2.js","assets/send.js","assets/briefcase.js","assets/award.js","assets/external-link.js","assets/message-circle.js","assets/youtube.js"])),vE=Q.lazy(()=>ie(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/user.js","assets/calendar2.js","assets/trash-2.js","assets/log-out.js","assets/message-circle.js","assets/youtube.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/graduation-cap.js","assets/library.js","assets/users.js","assets/calculator.js","assets/link-2.js","assets/send.js","assets/award.js","assets/briefcase.js","assets/external-link.js"])),dj=Q.lazy(()=>ie(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),fj=Q.lazy(()=>ie(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),pj=Q.lazy(()=>ie(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/graduation-cap.js","assets/check-circle-2.js","assets/zap.js","assets/layers.js","assets/send.js","assets/calculator.js","assets/download.js","assets/building-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/trash-2.js","assets/plus.js","assets/wifi.js","assets/search.js","assets/info.js","assets/external-link.js","assets/UgeacPredictor.css"])),Jd=Q.lazy(()=>ie(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),Xd=Q.lazy(()=>ie(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),wE=Q.lazy(()=>ie(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/book-open.js","assets/chevron-down.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),mj=Q.lazy(()=>ie(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/award.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js"])),gj=Q.lazy(()=>ie(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/book-open.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js"])),yj=Q.lazy(()=>ie(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/link-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/book-open.js","assets/globe.js","assets/external-link.js"])),_j=Q.lazy(()=>ie(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),vj=Q.lazy(()=>ie(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/book-open.js","assets/file-text.js","assets/bar-chart-3.js","assets/search.js","assets/user-check.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),wj=Q.lazy(()=>ie(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js","assets/award.js"])),Ej=Q.lazy(()=>ie(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),Tj=Q.lazy(()=>ie(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/calendar2.js","assets/link-2.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/chevron-right.js"])),Ij=Q.lazy(()=>ie(()=>import("./Timetable.js"),["assets/Timetable.js","assets/user-check.js","assets/arrow-right.js","assets/save.js","assets/info.js","assets/plus.js"])),Sj=Q.lazy(()=>ie(()=>import("./Attendance.js"),["assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),Aj=Q.lazy(()=>ie(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/globe.js","assets/external-link.js","assets/info.js"])),Rj=Q.lazy(()=>ie(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js","assets/file-text.js"])),kj=Q.lazy(()=>ie(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),Pj=Q.lazy(()=>ie(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/eye.js","assets/file-text.js"])),Cj=Q.lazy(()=>ie(()=>import("./Terms.js"),["assets/Terms.js","assets/file-text.js","assets/check-circle-2.js"])),bj=Q.lazy(()=>ie(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/user.js","assets/trash-2.js","assets/log-in.js"])),xj=Q.lazy(()=>ie(()=>import("./About.js"),["assets/About.js","assets/graduation-cap.js","assets/sparkles.js","assets/award.js","assets/send.js","assets/book-open.js","assets/users.js","assets/calculator.js"])),Nj=Q.lazy(()=>ie(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/send.js","assets/help-circle.js","assets/chevron-down.js"])),Oj=Q.lazy(()=>ie(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js","assets/file-text.js","assets/book-open.js","assets/arrow-right.js"])),EE=Q.lazy(()=>ie(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js","assets/BeuResult.js","assets/globe.js"])),TE=Q.lazy(()=>ie(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/book-open.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/link-2.js","assets/globe.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/file-text.js"])),IE=Q.lazy(()=>ie(()=>import("./CollegePage.js"),["assets/CollegePage.js","assets/UgeacData.js","assets/building-2.js","assets/chevron-right.js","assets/wifi.js","assets/globe.js","assets/arrow-right.js","assets/award.js","assets/library.js","assets/book-open.js","assets/graduation-cap.js","assets/bar-chart-3.js","assets/help-circle.js"])),SE=Q.lazy(()=>ie(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/graduation-cap.js","assets/cpu.js","assets/book-open.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),Dj=Q.lazy(()=>ie(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/award.js","assets/check-circle-2.js"])),AE=Q.lazy(()=>ie(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),Lj=Q.lazy(()=>ie(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/calendar2.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/award.js","assets/check-circle-2.js","assets/users.js"])),Vj=Q.lazy(()=>ie(()=>import("./SitemapDirectory.js"),["assets/SitemapDirectory.js","assets/UgeacData.js","assets/building-2.js","assets/cpu.js","assets/book-open.js","assets/link-2.js","assets/arrow-right.js"])),RE=Q.lazy(()=>ie(()=>import("./CompareColleges.js"),["assets/CompareColleges.js","assets/UgeacData.js","assets/layers.js","assets/arrow-right.js"])),Mj=Q.lazy(()=>ie(()=>import("./PercentilePredictor.js"),["assets/PercentilePredictor.js","assets/calculator.js"]));function Uj(){return A.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[A.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),A.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function Fj(){var c;const{user:t,updateProfileData:e,logout:n}=vo(),[r,i]=O.useState(""),[s,o]=O.useState(!1);if(!(t&&(!(t!=null&&t.phone)||((c=t==null?void 0:t.phone)==null?void 0:c.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED")))return null;const u=async d=>{if(d.preventDefault(),r.length<10)return be.error("Enter a valid 10-digit number!");o(!0);try{await e({phone:r}),be.success("Mobile number linked securely!")}catch{be.error("Failed to save. Try again.")}finally{o(!1)}};return A.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:A.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[A.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),A.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[A.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:A.jsx(tI,{className:"text-blue-500 w-10 h-10"})}),A.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),A.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),A.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[A.jsxs("div",{className:"relative group",children:[A.jsx(Zf,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),A.jsx("input",{type:"tel",value:r,onChange:d=>i(d.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),A.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:s?"Updating...":"Save & Continue"})]}),A.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function jj(){const{user:t,loading:e}=vo(),[n,r]=O.useState(!0),[i,s]=O.useState(window.innerWidth<768),o=dn.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const u=o||sessionStorage.getItem("standalone")==="true";if(O.useEffect(()=>{const c=()=>s(window.innerWidth<768);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),O.useEffect(()=>{const c=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(c)),()=>clearTimeout(c)},[e]),n)return A.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[A.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),A.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return A.jsxs(A.Fragment,{children:[A.jsx(Lb,{position:"top-right"}),A.jsx(Fj,{}),A.jsx(Q.Suspense,{fallback:A.jsx(Uj,{}),children:A.jsxs(MC,{children:[A.jsx(Y,{path:"/",element:u?A.jsx(vE,{}):A.jsx(hj,{})}),A.jsx(Y,{path:"/hub",element:A.jsx(vE,{})}),A.jsx(Y,{path:"/login",element:A.jsx(dj,{})}),A.jsx(Y,{path:"/signup",element:A.jsx(fj,{})}),A.jsx(Y,{path:"/privacy-policy",element:A.jsx(Pj,{})}),A.jsx(Y,{path:"/terms",element:A.jsx(Cj,{})}),A.jsx(Y,{path:"/delete-account",element:A.jsx(bj,{})}),A.jsx(Y,{path:"/about",element:A.jsx(xj,{})}),A.jsx(Y,{path:"/contact",element:A.jsx(Nj,{})}),A.jsx(Y,{path:"/directory",element:u?A.jsx(ma,{to:"/",replace:!0}):A.jsx(Vj,{})}),A.jsxs(Y,{element:A.jsx(_E,{}),children:[A.jsx(Y,{path:"/search/:keyword",element:A.jsx(Oj,{})}),A.jsx(Y,{path:"/notes",element:A.jsx(Jd,{})}),A.jsx(Y,{path:"/notes/:branchId/:semesterId",element:A.jsx(Jd,{})}),A.jsx(Y,{path:"/notes/:branchId",element:A.jsx(Jd,{})}),A.jsx(Y,{path:"/pyq",element:A.jsx(Xd,{})}),A.jsx(Y,{path:"/pyq/:branchId/:semesterId",element:A.jsx(Xd,{})}),A.jsx(Y,{path:"/pyq/:branchId",element:A.jsx(Xd,{})}),A.jsx(Y,{path:"/attendance",element:A.jsx(Sj,{})}),A.jsx(Y,{path:"/timetable",element:A.jsx(Ij,{})}),A.jsx(Y,{path:"/study",element:A.jsx(gj,{})}),A.jsx(Y,{path:"/study-resources",element:A.jsx(yj,{})}),A.jsx(Y,{path:"/calculator",element:A.jsx(_j,{})}),A.jsx(Y,{path:"/groups",element:A.jsx(Ej,{})}),A.jsx(Y,{path:"/groups/:groupId",element:A.jsx(Tj,{})}),A.jsx(Y,{path:"/achievements",element:A.jsx(wj,{})}),A.jsx(Y,{path:"/extras",element:A.jsx(Rj,{})}),A.jsx(Y,{path:"/calendar",element:A.jsx(kj,{})}),A.jsx(Y,{path:"/cgpa",element:A.jsx(mj,{})}),A.jsx(Y,{path:"/ugeac-predictor",element:A.jsx(pj,{})}),A.jsx(Y,{path:"/beu-result",element:A.jsx(Aj,{})}),A.jsx(Y,{path:"/syllabus",element:A.jsx(wE,{})}),A.jsx(Y,{path:"/syllabus/:branchId",element:A.jsx(wE,{})}),A.jsx(Y,{path:"/college/:collegeSlug",element:A.jsx(IE,{})}),A.jsx(Y,{path:"/college/:collegeSlug/:section",element:A.jsx(IE,{})}),A.jsx(Y,{path:"/branch/:branchId",element:A.jsx(SE,{})}),A.jsx(Y,{path:"/branch/:branchId/:section",element:A.jsx(SE,{})}),A.jsx(Y,{path:"/ugeac/:page",element:A.jsx(Dj,{})}),A.jsx(Y,{path:"/subject/:subjectSlug",element:A.jsx(AE,{})}),A.jsx(Y,{path:"/subject/:subjectSlug/:section",element:A.jsx(AE,{})}),A.jsx(Y,{path:"/hackathons",element:A.jsx(Lj,{})}),A.jsx(Y,{path:"/compare",element:A.jsx(RE,{})}),A.jsx(Y,{path:"/compare/:college1VsCollege2",element:A.jsx(RE,{})}),A.jsx(Y,{path:"/percentile-predictor",element:A.jsx(Mj,{})}),A.jsx(Y,{path:"/beu/:tool",element:A.jsx(EE,{})}),A.jsx(Y,{path:"/beu/:tool/:keyword",element:A.jsx(EE,{})}),A.jsx(Y,{path:"/feature/:feature",element:A.jsx(TE,{})}),A.jsx(Y,{path:"/feature/:feature/:keyword",element:A.jsx(TE,{})})]}),A.jsx(Y,{element:A.jsx(uj,{}),children:A.jsxs(Y,{element:A.jsx(_E,{}),children:[A.jsx(Y,{path:"/",element:A.jsx(ma,{to:"/",replace:!0})}),A.jsx(Y,{element:A.jsx(cj,{}),children:A.jsx(Y,{path:"/dashboard/admin",element:A.jsx(vj,{})})})]})}),A.jsx(Y,{path:"*",element:A.jsx(ma,{to:"/",replace:!0})})]})})]})}catch(c){return console.error("App Crash:",c),A.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[A.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:A.jsx(Ub,{size:32})}),A.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),A.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),A.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const kE=document.getElementById("root");if(!kE)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=ef.createRoot(kE);console.log("[DEBUG] Rendering app to root..."),t.render(A.jsx(Q.StrictMode,{children:A.jsx(U1,{children:A.jsx(bF,{children:A.jsx(xF,{children:A.jsx(HC,{children:A.jsx(jj,{})})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{Xj as $,T6 as A,I6 as B,FA as C,v6 as D,cE as E,hv as F,Ub as G,lL as H,l6 as I,Id as J,dn as K,Hj as L,di as M,f6 as N,p6 as O,Yj as P,bO as Q,Q as R,lj as S,jb as T,Qj as U,e6 as V,kh as W,$b as X,ID as Y,vu as Z,ie as _,tI as a,uE as a0,ns as a1,Rr as a2,kr as a3,kn as a4,uD as a5,u6 as a6,Pr as a7,DN as a8,a6 as a9,KI as aA,R6 as aB,t6 as aa,Gj as ab,Jj as ac,lE as ad,FO as ae,Wj as af,Kj as ag,xO as ah,Zj as ai,hD as aj,qj as ak,i6 as al,s6 as am,r6 as an,oO as ao,n6 as ap,wD as aq,Vv as ar,h6 as as,c6 as at,PO as au,sr as av,o6 as aw,Rv as ax,rD as ay,QI as az,Fb as b,gM as c,Lr as d,Nm as e,Ji as f,zj as g,ao as h,Bj as i,A as j,Sc as k,_6 as l,y6 as m,be as n,E6 as o,Fs as p,m6 as q,O as r,Qr as s,w6 as t,vo as u,bM as v,g6 as w,Fw as x,S6 as y,A6 as z};
