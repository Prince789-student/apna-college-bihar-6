var yk=Object.defineProperty;var _k=(t,e,n)=>e in t?yk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Hn=(t,e,n)=>(_k(t,typeof e!="symbol"?e+"":e,n),n);function vk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var qj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N0={exports:{}},Cc={},D0={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),wk=Symbol.for("react.portal"),Ek=Symbol.for("react.fragment"),Tk=Symbol.for("react.strict_mode"),Ik=Symbol.for("react.profiler"),Sk=Symbol.for("react.provider"),Ak=Symbol.for("react.context"),kk=Symbol.for("react.forward_ref"),Rk=Symbol.for("react.suspense"),Pk=Symbol.for("react.memo"),Ck=Symbol.for("react.lazy"),Ky=Symbol.iterator;function bk(t){return t===null||typeof t!="object"?null:(t=Ky&&t[Ky]||t["@@iterator"],typeof t=="function"?t:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L0=Object.assign,V0={};function io(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M0(){}M0.prototype=io.prototype;function Vp(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||O0}var Mp=Vp.prototype=new M0;Mp.constructor=Vp;L0(Mp,io.prototype);Mp.isPureReactComponent=!0;var Gy=Array.isArray,U0=Object.prototype.hasOwnProperty,Up={current:null},F0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)U0.call(e,r)&&!F0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:al,type:t,key:s,ref:o,props:i,_owner:Up.current}}function xk(t,e){return{$$typeof:al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===al}function Nk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qy=/\/+/g;function ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nk(""+t.key):e.toString(36)}function lu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case al:case wk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ed(o,0):r,Gy(i)?(n="",t!=null&&(n=t.replace(Qy,"$&/")+"/"),lu(i,e,n,"",function(c){return c})):i!=null&&(Fp(i)&&(i=xk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Gy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ed(s,l);o+=lu(s,e,n,u,i)}else if(u=bk(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ed(s,l++),o+=lu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ol(t,e,n){if(t==null)return t;var r=[],i=0;return lu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Dk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},uu={transition:null},Ok={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Up};function $0(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ol,forEach:function(t,e,n){Ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ol(t,function(){e++}),e},toArray:function(t){return Ol(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=io;ae.Fragment=Ek;ae.Profiler=Ik;ae.PureComponent=Vp;ae.StrictMode=Tk;ae.Suspense=Rk;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ok;ae.act=$0;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=L0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)U0.call(e,u)&&!F0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:al,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Ak,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sk,_context:t},t.Consumer=t};ae.createElement=j0;ae.createFactory=function(t){var e=j0.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:kk,render:t}};ae.isValidElement=Fp;ae.lazy=function(t){return{$$typeof:Ck,_payload:{_status:-1,_result:t},_init:Dk}};ae.memo=function(t,e){return{$$typeof:Pk,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ae.unstable_act=$0;ae.useCallback=function(t,e){return kt.current.useCallback(t,e)};ae.useContext=function(t){return kt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return kt.current.useEffect(t,e)};ae.useId=function(){return kt.current.useId()};ae.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return kt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ae.useRef=function(t){return kt.current.useRef(t)};ae.useState=function(t){return kt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return kt.current.useTransition()};ae.version="18.3.1";D0.exports=ae;var D=D0.exports;const Q=Pc(D),Lk=vk({__proto__:null,default:Q},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vk=D,Mk=Symbol.for("react.element"),Uk=Symbol.for("react.fragment"),Fk=Object.prototype.hasOwnProperty,jk=Vk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$k={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fk.call(e,r)&&!$k.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mk,type:t,key:s,ref:o,props:i,_owner:jk.current}}Cc.Fragment=Uk;Cc.jsx=B0;Cc.jsxs=B0;N0.exports=Cc;var A=N0.exports,sf={},z0={exports:{}},Kt={},H0={exports:{}},W0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,F){var j=W.length;W.push(F);e:for(;0<j;){var Y=j-1>>>1,se=W[Y];if(0<i(se,F))W[Y]=F,W[j]=se,j=Y;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var F=W[0],j=W.pop();if(j!==F){W[0]=j;e:for(var Y=0,se=W.length,Ee=se>>>1;Y<Ee;){var Te=2*(Y+1)-1,An=W[Te],je=Te+1,Yt=W[je];if(0>i(An,j))je<se&&0>i(Yt,An)?(W[Y]=Yt,W[je]=j,Y=je):(W[Y]=An,W[Te]=j,Y=Te);else if(je<se&&0>i(Yt,j))W[Y]=Yt,W[je]=j,Y=je;else break e}}return F}function i(W,F){var j=W.sortIndex-F.sortIndex;return j!==0?j:W.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,C=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=W)r(c),F.sortIndex=F.expirationTime,e(u,F);else break;F=n(c)}}function O(W){if(P=!1,T(W),!C)if(n(u)!==null)C=!0,Pt(U);else{var F=n(c);F!==null&&Qt(O,F.startTime-W)}}function U(W,F){C=!1,P&&(P=!1,v(y),y=-1),E=!0;var j=m;try{for(T(F),f=n(u);f!==null&&(!(f.expirationTime>F)||W&&!R());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var se=Y(f.expirationTime<=F);F=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(u)&&r(u),T(F)}else r(u);f=n(u)}if(f!==null)var Ee=!0;else{var Te=n(c);Te!==null&&Qt(O,Te.startTime-F),Ee=!1}return Ee}finally{f=null,m=j,E=!1}}var B=!1,I=null,y=-1,w=5,k=-1;function R(){return!(t.unstable_now()-k<w)}function x(){if(I!==null){var W=t.unstable_now();k=W;var F=!0;try{F=I(!0,W)}finally{F?S():(B=!1,I=null)}}else B=!1}var S;if(typeof _=="function")S=function(){_(x)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,me=re.port2;re.port1.onmessage=x,S=function(){me.postMessage(null)}}else S=function(){b(x,0)};function Pt(W){I=W,B||(B=!0,S())}function Qt(W,F){y=b(function(){W(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||E||(C=!0,Pt(U))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var j=m;m=F;try{return W()}finally{m=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,F){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=m;m=W;try{return F()}finally{m=j}},t.unstable_scheduleCallback=function(W,F,j){var Y=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Y+j:Y):j=Y,W){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=j+se,W={id:d++,callback:F,priorityLevel:W,startTime:j,expirationTime:se,sortIndex:-1},j>Y?(W.sortIndex=j,e(c,W),n(u)===null&&W===n(c)&&(P?(v(y),y=-1):P=!0,Qt(O,j-Y))):(W.sortIndex=se,e(u,W),C||E||(C=!0,Pt(U))),W},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(W){var F=m;return function(){var j=m;m=F;try{return W.apply(this,arguments)}finally{m=j}}}})(W0);H0.exports=W0;var Bk=H0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zk=D,qt=Bk;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q0=new Set,Pa={};function Yi(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(Pa[t]=e,t=0;t<e.length;t++)q0.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),of=Object.prototype.hasOwnProperty,Hk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yy={},Jy={};function Wk(t){return of.call(Jy,t)?!0:of.call(Yy,t)?!1:Hk.test(t)?Jy[t]=!0:(Yy[t]=!0,!1)}function qk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kk(t,e,n,r){if(e===null||typeof e>"u"||qk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function $p(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jp,$p);lt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jp,$p);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jp,$p);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Kk(e,n,i,r)&&(n=null),r||i===null?Wk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=zk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ll=Symbol.for("react.element"),ys=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),af=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),lf=Symbol.for("react.suspense"),uf=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),Q0=Symbol.for("react.offscreen"),Xy=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,td;function Xo(t){if(td===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);td=e&&e[1]||""}return`
`+td+t}var nd=!1;function rd(t,e){if(!t||nd)return"";nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function Gk(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=rd(t.type,!1),t;case 11:return t=rd(t.type.render,!1),t;case 1:return t=rd(t.type,!0),t;default:return""}}function cf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case ys:return"Portal";case af:return"Profiler";case zp:return"StrictMode";case lf:return"Suspense";case uf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case Hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wp:return e=t.displayName||null,e!==null?e:cf(t.type)||"Memo";case Ar:e=t._payload,t=t._init;try{return cf(t(e))}catch{}}return null}function Qk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yk(t){var e=Y0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vl(t){t._valueTracker||(t._valueTracker=Yk(t))}function J0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hf(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X0(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function df(t,e){X0(t,e);var n=Zr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ff(t,e.type,n):e.hasOwnProperty("defaultValue")&&ff(t,e.type,Zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function e_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ff(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zo=Array.isArray;function Cs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function t_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Zo(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zr(n)}}function Z0(t,e){var n=Zr(e.value),r=Zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function n_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,tE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ca(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jk=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){Jk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function nE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function rE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xk=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gf(t,e){if(e){if(Xk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vf=null,bs=null,xs=null;function r_(t){if(t=cl(t)){if(typeof vf!="function")throw Error($(280));var e=t.stateNode;e&&(e=Oc(e),vf(t.stateNode,t.type,e))}}function iE(t){bs?xs?xs.push(t):xs=[t]:bs=t}function sE(){if(bs){var t=bs,e=xs;if(xs=bs=null,r_(t),e)for(t=0;t<e.length;t++)r_(e[t])}}function oE(t,e){return t(e)}function aE(){}var id=!1;function lE(t,e,n){if(id)return t(e,n);id=!0;try{return oE(t,e,n)}finally{id=!1,(bs!==null||xs!==null)&&(aE(),sE())}}function ba(t,e){var n=t.stateNode;if(n===null)return null;var r=Oc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var wf=!1;if(rr)try{var Fo={};Object.defineProperty(Fo,"passive",{get:function(){wf=!0}}),window.addEventListener("test",Fo,Fo),window.removeEventListener("test",Fo,Fo)}catch{wf=!1}function Zk(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ca=!1,Mu=null,Uu=!1,Ef=null,eR={onError:function(t){ca=!0,Mu=t}};function tR(t,e,n,r,i,s,o,l,u){ca=!1,Mu=null,Zk.apply(eR,arguments)}function nR(t,e,n,r,i,s,o,l,u){if(tR.apply(this,arguments),ca){if(ca){var c=Mu;ca=!1,Mu=null}else throw Error($(198));Uu||(Uu=!0,Ef=c)}}function Ji(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function i_(t){if(Ji(t)!==t)throw Error($(188))}function rR(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return i_(i),t;if(s===r)return i_(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function cE(t){return t=rR(t),t!==null?hE(t):null}function hE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hE(t);if(e!==null)return e;t=t.sibling}return null}var dE=qt.unstable_scheduleCallback,s_=qt.unstable_cancelCallback,iR=qt.unstable_shouldYield,sR=qt.unstable_requestPaint,Ue=qt.unstable_now,oR=qt.unstable_getCurrentPriorityLevel,Kp=qt.unstable_ImmediatePriority,fE=qt.unstable_UserBlockingPriority,Fu=qt.unstable_NormalPriority,aR=qt.unstable_LowPriority,pE=qt.unstable_IdlePriority,bc=null,Ln=null;function lR(t){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:hR,uR=Math.log,cR=Math.LN2;function hR(t){return t>>>=0,t===0?32:31-(uR(t)/cR|0)|0}var Ul=64,Fl=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ju(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ea(l):(s&=o,s!==0&&(r=ea(s)))}else o=n&~i,o!==0?r=ea(o):s!==0&&(r=ea(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),i=1<<n,r|=t[n],e&=~i;return r}function dR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_n(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=dR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mE(){var t=Ul;return Ul<<=1,!(Ul&4194240)&&(Ul=64),t}function sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function pR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_n(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function gE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yE,Qp,_E,vE,wE,If=!1,jl=[],Fr=null,jr=null,$r=null,xa=new Map,Na=new Map,Rr=[],mR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function o_(t,e){switch(t){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function gR(t,e,n,r,i){switch(e){case"focusin":return Fr=jo(Fr,t,e,n,r,i),!0;case"dragenter":return jr=jo(jr,t,e,n,r,i),!0;case"mouseover":return $r=jo($r,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return xa.set(s,jo(xa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Na.set(s,jo(Na.get(s)||null,t,e,n,r,i)),!0}return!1}function EE(t){var e=ki(t.target);if(e!==null){var n=Ji(e);if(n!==null){if(e=n.tag,e===13){if(e=uE(n),e!==null){t.blockedOn=e,wE(t.priority,function(){_E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_f=r,n.target.dispatchEvent(r),_f=null}else return e=cl(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function a_(t,e,n){cu(t)&&n.delete(e)}function yR(){If=!1,Fr!==null&&cu(Fr)&&(Fr=null),jr!==null&&cu(jr)&&(jr=null),$r!==null&&cu($r)&&($r=null),xa.forEach(a_),Na.forEach(a_)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,If||(If=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,yR)))}function Da(t){function e(i){return $o(i,t)}if(0<jl.length){$o(jl[0],t);for(var n=1;n<jl.length;n++){var r=jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Fr!==null&&$o(Fr,t),jr!==null&&$o(jr,t),$r!==null&&$o($r,t),xa.forEach(e),Na.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)EE(n),n.blockedOn===null&&Rr.shift()}var Ns=pr.ReactCurrentBatchConfig,$u=!0;function _R(t,e,n,r){var i=ge,s=Ns.transition;Ns.transition=null;try{ge=1,Yp(t,e,n,r)}finally{ge=i,Ns.transition=s}}function vR(t,e,n,r){var i=ge,s=Ns.transition;Ns.transition=null;try{ge=4,Yp(t,e,n,r)}finally{ge=i,Ns.transition=s}}function Yp(t,e,n,r){if($u){var i=Sf(t,e,n,r);if(i===null)md(t,e,r,Bu,n),o_(t,r);else if(gR(i,t,e,n,r))r.stopPropagation();else if(o_(t,r),e&4&&-1<mR.indexOf(t)){for(;i!==null;){var s=cl(i);if(s!==null&&yE(s),s=Sf(t,e,n,r),s===null&&md(t,e,r,Bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else md(t,e,r,null,n)}}var Bu=null;function Sf(t,e,n,r){if(Bu=null,t=qp(r),t=ki(t),t!==null)if(e=Ji(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bu=t,null}function TE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oR()){case Kp:return 1;case fE:return 4;case Fu:case aR:return 16;case pE:return 536870912;default:return 16}default:return 16}}var Or=null,Jp=null,hu=null;function IE(){if(hu)return hu;var t,e=Jp,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $l(){return!0}function l_(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$l:l_,this.isPropagationStopped=l_,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Gt(so),ul=be({},so,{view:0,detail:0}),wR=Gt(ul),od,ad,Bo,xc=be({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(od=t.screenX-Bo.screenX,ad=t.screenY-Bo.screenY):ad=od=0,Bo=t),od)},movementY:function(t){return"movementY"in t?t.movementY:ad}}),u_=Gt(xc),ER=be({},xc,{dataTransfer:0}),TR=Gt(ER),IR=be({},ul,{relatedTarget:0}),ld=Gt(IR),SR=be({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),AR=Gt(SR),kR=be({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),RR=Gt(kR),PR=be({},so,{data:0}),c_=Gt(PR),CR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xR[t])?!!e[t]:!1}function Zp(){return NR}var DR=be({},ul,{key:function(t){if(t.key){var e=CR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OR=Gt(DR),LR=be({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h_=Gt(LR),VR=be({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),MR=Gt(VR),UR=be({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),FR=Gt(UR),jR=be({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$R=Gt(jR),BR=[9,13,27,32],em=rr&&"CompositionEvent"in window,ha=null;rr&&"documentMode"in document&&(ha=document.documentMode);var zR=rr&&"TextEvent"in window&&!ha,SE=rr&&(!em||ha&&8<ha&&11>=ha),d_=String.fromCharCode(32),f_=!1;function AE(t,e){switch(t){case"keyup":return BR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function HR(t,e){switch(t){case"compositionend":return kE(e);case"keypress":return e.which!==32?null:(f_=!0,d_);case"textInput":return t=e.data,t===d_&&f_?null:t;default:return null}}function WR(t,e){if(vs)return t==="compositionend"||!em&&AE(t,e)?(t=IE(),hu=Jp=Or=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return SE&&e.locale!=="ko"?null:e.data;default:return null}}var qR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qR[t.type]:e==="textarea"}function RE(t,e,n,r){iE(r),e=zu(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,Oa=null;function KR(t){UE(t,0)}function Nc(t){var e=Ts(t);if(J0(e))return t}function GR(t,e){if(t==="change")return e}var PE=!1;if(rr){var ud;if(rr){var cd="oninput"in document;if(!cd){var m_=document.createElement("div");m_.setAttribute("oninput","return;"),cd=typeof m_.oninput=="function"}ud=cd}else ud=!1;PE=ud&&(!document.documentMode||9<document.documentMode)}function g_(){da&&(da.detachEvent("onpropertychange",CE),Oa=da=null)}function CE(t){if(t.propertyName==="value"&&Nc(Oa)){var e=[];RE(e,Oa,t,qp(t)),lE(KR,e)}}function QR(t,e,n){t==="focusin"?(g_(),da=e,Oa=n,da.attachEvent("onpropertychange",CE)):t==="focusout"&&g_()}function YR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(Oa)}function JR(t,e){if(t==="click")return Nc(e)}function XR(t,e){if(t==="input"||t==="change")return Nc(e)}function ZR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:ZR;function La(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!of.call(e,i)||!En(t[i],e[i]))return!1}return!0}function y_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function __(t,e){var n=y_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=y_(n)}}function bE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xE(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function eP(t){var e=xE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bE(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=__(n,s);var o=__(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var tP=rr&&"documentMode"in document&&11>=document.documentMode,ws=null,Af=null,fa=null,kf=!1;function v_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kf||ws==null||ws!==Vu(r)||(r=ws,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&La(fa,r)||(fa=r,r=zu(Af,"onSelect"),0<r.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ws)))}function Bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},hd={},NE={};rr&&(NE=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Dc(t){if(hd[t])return hd[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in NE)return hd[t]=e[n];return t}var DE=Dc("animationend"),OE=Dc("animationiteration"),LE=Dc("animationstart"),VE=Dc("transitionend"),ME=new Map,w_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(t,e){ME.set(t,e),Yi(e,[t])}for(var dd=0;dd<w_.length;dd++){var fd=w_[dd],nP=fd.toLowerCase(),rP=fd[0].toUpperCase()+fd.slice(1);li(nP,"on"+rP)}li(DE,"onAnimationEnd");li(OE,"onAnimationIteration");li(LE,"onAnimationStart");li("dblclick","onDoubleClick");li("focusin","onFocus");li("focusout","onBlur");li(VE,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iP=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function E_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,nR(r,e,void 0,t),t.currentTarget=null}function UE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;E_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;E_(i,l,c),s=u}}}if(Uu)throw t=Ef,Uu=!1,Ef=null,t}function Se(t,e){var n=e[xf];n===void 0&&(n=e[xf]=new Set);var r=t+"__bubble";n.has(r)||(FE(e,t,2,!1),n.add(r))}function pd(t,e,n){var r=0;e&&(r|=4),FE(n,t,r,e)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[zl]){t[zl]=!0,q0.forEach(function(n){n!=="selectionchange"&&(iP.has(n)||pd(n,!1,t),pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zl]||(e[zl]=!0,pd("selectionchange",!1,e))}}function FE(t,e,n,r){switch(TE(e)){case 1:var i=_R;break;case 4:i=vR;break;default:i=Yp}n=i.bind(null,e,n,t),i=void 0,!wf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function md(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ki(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lE(function(){var c=s,d=qp(n),f=[];e:{var m=ME.get(t);if(m!==void 0){var E=Xp,C=t;switch(t){case"keypress":if(du(n)===0)break e;case"keydown":case"keyup":E=OR;break;case"focusin":C="focus",E=ld;break;case"focusout":C="blur",E=ld;break;case"beforeblur":case"afterblur":E=ld;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=u_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=TR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=MR;break;case DE:case OE:case LE:E=AR;break;case VE:E=FR;break;case"scroll":E=wR;break;case"wheel":E=$R;break;case"copy":case"cut":case"paste":E=RR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=h_}var P=(e&4)!==0,b=!P&&t==="scroll",v=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,T;_!==null;){T=_;var O=T.stateNode;if(T.tag===5&&O!==null&&(T=O,v!==null&&(O=ba(_,v),O!=null&&P.push(Ma(_,O,T)))),b)break;_=_.return}0<P.length&&(m=new E(m,C,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==_f&&(C=n.relatedTarget||n.fromElement)&&(ki(C)||C[ir]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(C=n.relatedTarget||n.toElement,E=c,C=C?ki(C):null,C!==null&&(b=Ji(C),C!==b||C.tag!==5&&C.tag!==6)&&(C=null)):(E=null,C=c),E!==C)){if(P=u_,O="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=h_,O="onPointerLeave",v="onPointerEnter",_="pointer"),b=E==null?m:Ts(E),T=C==null?m:Ts(C),m=new P(O,_+"leave",E,n,d),m.target=b,m.relatedTarget=T,O=null,ki(d)===c&&(P=new P(v,_+"enter",C,n,d),P.target=T,P.relatedTarget=b,O=P),b=O,E&&C)t:{for(P=E,v=C,_=0,T=P;T;T=cs(T))_++;for(T=0,O=v;O;O=cs(O))T++;for(;0<_-T;)P=cs(P),_--;for(;0<T-_;)v=cs(v),T--;for(;_--;){if(P===v||v!==null&&P===v.alternate)break t;P=cs(P),v=cs(v)}P=null}else P=null;E!==null&&T_(f,m,E,P,!1),C!==null&&b!==null&&T_(f,b,C,P,!0)}}e:{if(m=c?Ts(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var U=GR;else if(p_(m))if(PE)U=XR;else{U=YR;var B=QR}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(U=JR);if(U&&(U=U(t,c))){RE(f,U,n,d);break e}B&&B(t,m,c),t==="focusout"&&(B=m._wrapperState)&&B.controlled&&m.type==="number"&&ff(m,"number",m.value)}switch(B=c?Ts(c):window,t){case"focusin":(p_(B)||B.contentEditable==="true")&&(ws=B,Af=c,fa=null);break;case"focusout":fa=Af=ws=null;break;case"mousedown":kf=!0;break;case"contextmenu":case"mouseup":case"dragend":kf=!1,v_(f,n,d);break;case"selectionchange":if(tP)break;case"keydown":case"keyup":v_(f,n,d)}var I;if(em)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else vs?AE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(SE&&n.locale!=="ko"&&(vs||y!=="onCompositionStart"?y==="onCompositionEnd"&&vs&&(I=IE()):(Or=d,Jp="value"in Or?Or.value:Or.textContent,vs=!0)),B=zu(c,y),0<B.length&&(y=new c_(y,t,null,n,d),f.push({event:y,listeners:B}),I?y.data=I:(I=kE(n),I!==null&&(y.data=I)))),(I=zR?HR(t,n):WR(t,n))&&(c=zu(c,"onBeforeInput"),0<c.length&&(d=new c_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=I))}UE(f,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ba(t,n),s!=null&&r.unshift(Ma(t,s,i)),s=ba(t,e),s!=null&&r.push(Ma(t,s,i))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function T_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=ba(n,s),u!=null&&o.unshift(Ma(n,u,l))):i||(u=ba(n,s),u!=null&&o.push(Ma(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var sP=/\r\n?/g,oP=/\u0000|\uFFFD/g;function I_(t){return(typeof t=="string"?t:""+t).replace(sP,`
`).replace(oP,"")}function Hl(t,e,n){if(e=I_(e),I_(t)!==e&&n)throw Error($(425))}function Hu(){}var Rf=null,Pf=null;function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,aP=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,lP=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(t){return S_.resolve(null).then(t).catch(uP)}:bf;function uP(t){setTimeout(function(){throw t})}function gd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Da(e)}function Br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function A_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),xn="__reactFiber$"+oo,Ua="__reactProps$"+oo,ir="__reactContainer$"+oo,xf="__reactEvents$"+oo,cP="__reactListeners$"+oo,hP="__reactHandles$"+oo;function ki(t){var e=t[xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=A_(t);t!==null;){if(n=t[xn])return n;t=A_(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[xn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Oc(t){return t[Ua]||null}var Nf=[],Is=-1;function ui(t){return{current:t}}function ke(t){0>Is||(t.current=Nf[Is],Nf[Is]=null,Is--)}function we(t,e){Is++,Nf[Is]=t.current,t.current=e}var ei={},yt=ui(ei),Dt=ui(!1),Vi=ei;function qs(t,e){var n=t.type.contextTypes;if(!n)return ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function Wu(){ke(Dt),ke(yt)}function k_(t,e,n){if(yt.current!==ei)throw Error($(168));we(yt,e),we(Dt,n)}function jE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,Qk(t)||"Unknown",i));return be({},n,r)}function qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ei,Vi=yt.current,we(yt,t),we(Dt,Dt.current),!0}function R_(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=jE(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,ke(Dt),ke(yt),we(yt,t)):ke(Dt),we(Dt,n)}var Qn=null,Lc=!1,yd=!1;function $E(t){Qn===null?Qn=[t]:Qn.push(t)}function dP(t){Lc=!0,$E(t)}function ci(){if(!yd&&Qn!==null){yd=!0;var t=0,e=ge;try{var n=Qn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qn=null,Lc=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(t+1)),dE(Kp,ci),i}finally{ge=e,yd=!1}}return null}var Ss=[],As=0,Ku=null,Gu=0,Zt=[],en=0,Mi=null,Yn=1,Jn="";function Ii(t,e){Ss[As++]=Gu,Ss[As++]=Ku,Ku=t,Gu=e}function BE(t,e,n){Zt[en++]=Yn,Zt[en++]=Jn,Zt[en++]=Mi,Mi=t;var r=Yn;t=Jn;var i=32-_n(r)-1;r&=~(1<<i),n+=1;var s=32-_n(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yn=1<<32-_n(e)+i|n<<i|r,Jn=s+t}else Yn=1<<s|n<<i|r,Jn=t}function nm(t){t.return!==null&&(Ii(t,1),BE(t,1,0))}function rm(t){for(;t===Ku;)Ku=Ss[--As],Ss[As]=null,Gu=Ss[--As],Ss[As]=null;for(;t===Mi;)Mi=Zt[--en],Zt[en]=null,Jn=Zt[--en],Zt[en]=null,Yn=Zt[--en],Zt[en]=null}var Wt=null,Bt=null,Re=!1,pn=null;function zE(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function P_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=Br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mi!==null?{id:Yn,overflow:Jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,Bt=null,!0):!1;default:return!1}}function Df(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Of(t){if(Re){var e=Bt;if(e){var n=e;if(!P_(t,e)){if(Df(t))throw Error($(418));e=Br(n.nextSibling);var r=Wt;e&&P_(t,e)?zE(r,n):(t.flags=t.flags&-4097|2,Re=!1,Wt=t)}}else{if(Df(t))throw Error($(418));t.flags=t.flags&-4097|2,Re=!1,Wt=t}}}function C_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function Wl(t){if(t!==Wt)return!1;if(!Re)return C_(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cf(t.type,t.memoizedProps)),e&&(e=Bt)){if(Df(t))throw HE(),Error($(418));for(;e;)zE(t,e),e=Br(e.nextSibling)}if(C_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=Wt?Br(t.stateNode.nextSibling):null;return!0}function HE(){for(var t=Bt;t;)t=Br(t.nextSibling)}function Ks(){Bt=Wt=null,Re=!1}function im(t){pn===null?pn=[t]:pn.push(t)}var fP=pr.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function ql(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function b_(t){var e=t._init;return e(t._payload)}function WE(t){function e(v,_){if(t){var T=v.deletions;T===null?(v.deletions=[_],v.flags|=16):T.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=qr(v,_),v.index=0,v.sibling=null,v}function s(v,_,T){return v.index=T,t?(T=v.alternate,T!==null?(T=T.index,T<_?(v.flags|=2,_):T):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,_,T,O){return _===null||_.tag!==6?(_=Sd(T,v.mode,O),_.return=v,_):(_=i(_,T),_.return=v,_)}function u(v,_,T,O){var U=T.type;return U===_s?d(v,_,T.props.children,O,T.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ar&&b_(U)===_.type)?(O=i(_,T.props),O.ref=zo(v,_,T),O.return=v,O):(O=vu(T.type,T.key,T.props,null,v.mode,O),O.ref=zo(v,_,T),O.return=v,O)}function c(v,_,T,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==T.containerInfo||_.stateNode.implementation!==T.implementation?(_=Ad(T,v.mode,O),_.return=v,_):(_=i(_,T.children||[]),_.return=v,_)}function d(v,_,T,O,U){return _===null||_.tag!==7?(_=Ni(T,v.mode,O,U),_.return=v,_):(_=i(_,T),_.return=v,_)}function f(v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Sd(""+_,v.mode,T),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ll:return T=vu(_.type,_.key,_.props,null,v.mode,T),T.ref=zo(v,null,_),T.return=v,T;case ys:return _=Ad(_,v.mode,T),_.return=v,_;case Ar:var O=_._init;return f(v,O(_._payload),T)}if(Zo(_)||Uo(_))return _=Ni(_,v.mode,T,null),_.return=v,_;ql(v,_)}return null}function m(v,_,T,O){var U=_!==null?_.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return U!==null?null:l(v,_,""+T,O);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ll:return T.key===U?u(v,_,T,O):null;case ys:return T.key===U?c(v,_,T,O):null;case Ar:return U=T._init,m(v,_,U(T._payload),O)}if(Zo(T)||Uo(T))return U!==null?null:d(v,_,T,O,null);ql(v,T)}return null}function E(v,_,T,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return v=v.get(T)||null,l(_,v,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ll:return v=v.get(O.key===null?T:O.key)||null,u(_,v,O,U);case ys:return v=v.get(O.key===null?T:O.key)||null,c(_,v,O,U);case Ar:var B=O._init;return E(v,_,T,B(O._payload),U)}if(Zo(O)||Uo(O))return v=v.get(T)||null,d(_,v,O,U,null);ql(_,O)}return null}function C(v,_,T,O){for(var U=null,B=null,I=_,y=_=0,w=null;I!==null&&y<T.length;y++){I.index>y?(w=I,I=null):w=I.sibling;var k=m(v,I,T[y],O);if(k===null){I===null&&(I=w);break}t&&I&&k.alternate===null&&e(v,I),_=s(k,_,y),B===null?U=k:B.sibling=k,B=k,I=w}if(y===T.length)return n(v,I),Re&&Ii(v,y),U;if(I===null){for(;y<T.length;y++)I=f(v,T[y],O),I!==null&&(_=s(I,_,y),B===null?U=I:B.sibling=I,B=I);return Re&&Ii(v,y),U}for(I=r(v,I);y<T.length;y++)w=E(I,v,y,T[y],O),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?y:w.key),_=s(w,_,y),B===null?U=w:B.sibling=w,B=w);return t&&I.forEach(function(R){return e(v,R)}),Re&&Ii(v,y),U}function P(v,_,T,O){var U=Uo(T);if(typeof U!="function")throw Error($(150));if(T=U.call(T),T==null)throw Error($(151));for(var B=U=null,I=_,y=_=0,w=null,k=T.next();I!==null&&!k.done;y++,k=T.next()){I.index>y?(w=I,I=null):w=I.sibling;var R=m(v,I,k.value,O);if(R===null){I===null&&(I=w);break}t&&I&&R.alternate===null&&e(v,I),_=s(R,_,y),B===null?U=R:B.sibling=R,B=R,I=w}if(k.done)return n(v,I),Re&&Ii(v,y),U;if(I===null){for(;!k.done;y++,k=T.next())k=f(v,k.value,O),k!==null&&(_=s(k,_,y),B===null?U=k:B.sibling=k,B=k);return Re&&Ii(v,y),U}for(I=r(v,I);!k.done;y++,k=T.next())k=E(I,v,y,k.value,O),k!==null&&(t&&k.alternate!==null&&I.delete(k.key===null?y:k.key),_=s(k,_,y),B===null?U=k:B.sibling=k,B=k);return t&&I.forEach(function(x){return e(v,x)}),Re&&Ii(v,y),U}function b(v,_,T,O){if(typeof T=="object"&&T!==null&&T.type===_s&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Ll:e:{for(var U=T.key,B=_;B!==null;){if(B.key===U){if(U=T.type,U===_s){if(B.tag===7){n(v,B.sibling),_=i(B,T.props.children),_.return=v,v=_;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ar&&b_(U)===B.type){n(v,B.sibling),_=i(B,T.props),_.ref=zo(v,B,T),_.return=v,v=_;break e}n(v,B);break}else e(v,B);B=B.sibling}T.type===_s?(_=Ni(T.props.children,v.mode,O,T.key),_.return=v,v=_):(O=vu(T.type,T.key,T.props,null,v.mode,O),O.ref=zo(v,_,T),O.return=v,v=O)}return o(v);case ys:e:{for(B=T.key;_!==null;){if(_.key===B)if(_.tag===4&&_.stateNode.containerInfo===T.containerInfo&&_.stateNode.implementation===T.implementation){n(v,_.sibling),_=i(_,T.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=Ad(T,v.mode,O),_.return=v,v=_}return o(v);case Ar:return B=T._init,b(v,_,B(T._payload),O)}if(Zo(T))return C(v,_,T,O);if(Uo(T))return P(v,_,T,O);ql(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,T),_.return=v,v=_):(n(v,_),_=Sd(T,v.mode,O),_.return=v,v=_),o(v)):n(v,_)}return b}var Gs=WE(!0),qE=WE(!1),Qu=ui(null),Yu=null,ks=null,sm=null;function om(){sm=ks=Yu=null}function am(t){var e=Qu.current;ke(Qu),t._currentValue=e}function Lf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Yu=t,sm=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(Yu===null)throw Error($(308));ks=t,Yu.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Ri=null;function lm(t){Ri===null?Ri=[t]:Ri.push(t)}function KE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kr=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function GE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sr(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,sr(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}function x_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;kr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,E=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){f=C.call(E,f,m);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(E,f,m):C,m==null)break e;f=be({},f,m);break e;case 2:kr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fi|=o,t.lanes=o,t.memoizedState=f}}function N_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var hl={},Vn=ui(hl),Fa=ui(hl),ja=ui(hl);function Pi(t){if(t===hl)throw Error($(174));return t}function cm(t,e){switch(we(ja,e),we(Fa,t),we(Vn,hl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mf(e,t)}ke(Vn),we(Vn,e)}function Qs(){ke(Vn),ke(Fa),ke(ja)}function QE(t){Pi(ja.current);var e=Pi(Vn.current),n=mf(e,t.type);e!==n&&(we(Fa,t),we(Vn,n))}function hm(t){Fa.current===t&&(ke(Vn),ke(Fa))}var Pe=ui(0);function Xu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _d=[];function dm(){for(var t=0;t<_d.length;t++)_d[t]._workInProgressVersionPrimary=null;_d.length=0}var pu=pr.ReactCurrentDispatcher,vd=pr.ReactCurrentBatchConfig,Ui=0,Ce=null,Ge=null,tt=null,Zu=!1,pa=!1,$a=0,pP=0;function ht(){throw Error($(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(Ui=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?_P:vP,t=n(r,i),pa){s=0;do{if(pa=!1,$a=0,25<=s)throw Error($(301));s+=1,tt=Ge=null,e.updateQueue=null,pu.current=wP,t=n(r,i)}while(pa)}if(pu.current=ec,e=Ge!==null&&Ge.next!==null,Ui=0,tt=Ge=Ce=null,Zu=!1,e)throw Error($(300));return t}function mm(){var t=$a!==0;return $a=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ce.memoizedState=tt=t:tt=tt.next=t,tt}function an(){if(Ge===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=tt===null?Ce.memoizedState:tt.next;if(e!==null)tt=e,Ge=t;else{if(t===null)throw Error($(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},tt===null?Ce.memoizedState=tt=t:tt=tt.next=t}return tt}function Ba(t,e){return typeof e=="function"?e(t):e}function wd(t){var e=an(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=Ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Ui&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,Ce.lanes|=d,Fi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,En(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ce.lanes|=s,Fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ed(t){var e=an(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);En(s,e.memoizedState)||(Nt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YE(){}function JE(t,e){var n=Ce,r=an(),i=e(),s=!En(r.memoizedState,i);if(s&&(r.memoizedState=i,Nt=!0),r=r.queue,gm(eT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,za(9,ZE.bind(null,n,r,i,e),void 0,null),nt===null)throw Error($(349));Ui&30||XE(n,e,i)}return i}function XE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ZE(t,e,n,r){e.value=n,e.getSnapshot=r,tT(e)&&nT(t)}function eT(t,e,n){return n(function(){tT(e)&&nT(t)})}function tT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function nT(t){var e=sr(t,1);e!==null&&vn(e,t,1,-1)}function D_(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=yP.bind(null,Ce,t),[e.memoizedState,t]}function za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rT(){return an().memoizedState}function mu(t,e,n,r){var i=Cn();Ce.flags|=t,i.memoizedState=za(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=an();r=r===void 0?null:r;var s=void 0;if(Ge!==null){var o=Ge.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=za(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=za(1|e,n,s,r)}function O_(t,e){return mu(8390656,8,t,e)}function gm(t,e){return Vc(2048,8,t,e)}function iT(t,e){return Vc(4,2,t,e)}function sT(t,e){return Vc(4,4,t,e)}function oT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aT(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,oT.bind(null,e,t),n)}function ym(){}function lT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cT(t,e,n){return Ui&21?(En(n,e)||(n=mE(),Ce.lanes|=n,Fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function mP(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=vd.transition;vd.transition={};try{t(!1),e()}finally{ge=n,vd.transition=r}}function hT(){return an().memoizedState}function gP(t,e,n){var r=Wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dT(t))fT(e,n);else if(n=KE(t,e,n,r),n!==null){var i=It();vn(n,t,r,i),pT(n,e,r)}}function yP(t,e,n){var r=Wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dT(t))fT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,En(l,o)){var u=e.interleaved;u===null?(i.next=i,lm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=KE(t,e,i,r),n!==null&&(i=It(),vn(n,t,r,i),pT(n,e,r))}}function dT(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function fT(t,e){pa=Zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}var ec={readContext:on,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},_P={readContext:on,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:O_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,oT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=gP.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:D_,useDebugValue:ym,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=D_(!1),e=t[0];return t=mP.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,i=Cn();if(Re){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),nt===null)throw Error($(349));Ui&30||XE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,O_(eT.bind(null,r,s,t),[t]),r.flags|=2048,za(9,ZE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Cn(),e=nt.identifierPrefix;if(Re){var n=Jn,r=Yn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=pP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vP={readContext:on,useCallback:lT,useContext:on,useEffect:gm,useImperativeHandle:aT,useInsertionEffect:iT,useLayoutEffect:sT,useMemo:uT,useReducer:wd,useRef:rT,useState:function(){return wd(Ba)},useDebugValue:ym,useDeferredValue:function(t){var e=an();return cT(e,Ge.memoizedState,t)},useTransition:function(){var t=wd(Ba)[0],e=an().memoizedState;return[t,e]},useMutableSource:YE,useSyncExternalStore:JE,useId:hT,unstable_isNewReconciler:!1},wP={readContext:on,useCallback:lT,useContext:on,useEffect:gm,useImperativeHandle:aT,useInsertionEffect:iT,useLayoutEffect:sT,useMemo:uT,useReducer:Ed,useRef:rT,useState:function(){return Ed(Ba)},useDebugValue:ym,useDeferredValue:function(t){var e=an();return Ge===null?e.memoizedState=t:cT(e,Ge.memoizedState,t)},useTransition:function(){var t=Ed(Ba)[0],e=an().memoizedState;return[t,e]},useMutableSource:YE,useSyncExternalStore:JE,useId:hT,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),i=Wr(t),s=er(r,i);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(vn(e,t,i,r),fu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),i=Wr(t),s=er(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,i),e!==null&&(vn(e,t,i,r),fu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Wr(t),i=er(n,r);i.tag=2,e!=null&&(i.callback=e),e=zr(t,i,r),e!==null&&(vn(e,t,r,n),fu(e,t,r))}};function L_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,r)||!La(i,s):!0}function mT(t,e,n){var r=!1,i=ei,s=e.contextType;return typeof s=="object"&&s!==null?s=on(s):(i=Ot(e)?Vi:yt.current,r=e.contextTypes,s=(r=r!=null)?qs(t,i):ei),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function V_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=on(s):(s=Ot(e)?Vi:yt.current,i.context=qs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Mc.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",r=e;do n+=Gk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Td(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EP=typeof WeakMap=="function"?WeakMap:Map;function gT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nc||(nc=!0,Gf=r),Uf(t,e)},n}function yT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function M_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LP.bind(null,t,e,n),e.then(t,t))}function U_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function F_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var TP=pr.ReactCurrentOwner,Nt=!1;function Tt(t,e,n,r){e.child=t===null?qE(e,null,n,r):Gs(e,t.child,n,r)}function j_(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Re&&n&&nm(e),e.flags|=1,Tt(t,e,r,i),e.child)}function $_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_T(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,r)&&t.ref===e.ref)return or(t,e,i)}return e.flags|=1,t=qr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _T(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(La(s,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,or(t,e,i)}return Ff(t,e,n,r,i)}function vT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ps,jt),jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ps,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Ps,jt),jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Ps,jt),jt|=r;return Tt(t,e,i,n),e.child}function wT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ff(t,e,n,r,i){var s=Ot(n)?Vi:yt.current;return s=qs(e,s),Ds(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,or(t,e,i)):(Re&&r&&nm(e),e.flags|=1,Tt(t,e,n,i),e.child)}function B_(t,e,n,r,i){if(Ot(n)){var s=!0;qu(e)}else s=!1;if(Ds(e,i),e.stateNode===null)gu(t,e),mT(e,n,r),Mf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=on(c):(c=Ot(n)?Vi:yt.current,c=qs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&V_(e,o,r,c),kr=!1;var m=e.memoizedState;o.state=m,Ju(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Dt.current||kr?(typeof d=="function"&&(Vf(e,n,d,r),u=e.memoizedState),(l=kr||L_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,GE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:dn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=on(u):(u=Ot(n)?Vi:yt.current,u=qs(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&V_(e,o,r,u),kr=!1,m=e.memoizedState,o.state=m,Ju(e,r,o,i);var C=e.memoizedState;l!==f||m!==C||Dt.current||kr?(typeof E=="function"&&(Vf(e,n,E,r),C=e.memoizedState),(c=kr||L_(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return jf(t,e,n,r,s,i)}function jf(t,e,n,r,i,s){wT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&R_(e,n,!1),or(t,e,s);r=e.stateNode,TP.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,l,s)):Tt(t,e,l,s),e.memoizedState=r.state,i&&R_(e,n,!0),e.child}function ET(t){var e=t.stateNode;e.pendingContext?k_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&k_(t,e.context,!1),cm(t,e.containerInfo)}function z_(t,e,n,r,i){return Ks(),im(i),e.flags|=256,Tt(t,e,n,r),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function TT(t,e,n){var r=e.pendingProps,i=Pe.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Pe,i&1),t===null)return Of(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jc(o,r,0,null),t=Ni(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=$f,t):_m(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return IP(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=qr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=qr(l,s):(s=Ni(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$f,r}return s=t.child,t=s.sibling,r=qr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _m(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Kl(t,e,n,r){return r!==null&&im(r),Gs(e,t.child,null,n),t=_m(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Td(Error($(422))),Kl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=jc({mode:"visible",children:r.children},i,0,null),s=Ni(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=$f,s);if(!(e.mode&1))return Kl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=Td(s,r,void 0),Kl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Nt||l){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sr(t,i),vn(r,t,i,-1))}return Sm(),r=Td(Error($(421))),Kl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Bt=Br(i.nextSibling),Wt=e,Re=!0,pn=null,t!==null&&(Zt[en++]=Yn,Zt[en++]=Jn,Zt[en++]=Mi,Yn=t.id,Jn=t.overflow,Mi=e),e=_m(e,r.children),e.flags|=4096,e)}function H_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lf(t.return,e,n)}function Id(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function IT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Tt(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&H_(t,n,e);else if(t.tag===19)H_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Xu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Id(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Xu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Id(e,!0,n,null,s);break;case"together":Id(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=qr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function SP(t,e,n){switch(e.tag){case 3:ET(e),Ks();break;case 5:QE(e);break;case 1:Ot(e.type)&&qu(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(Qu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?TT(t,e,n):(we(Pe,Pe.current&1),t=or(t,e,n),t!==null?t.sibling:null);we(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return IT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,vT(t,e,n)}return or(t,e,n)}var ST,zf,AT,kT;ST=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zf=function(){};AT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(Vn.current);var s=null;switch(n){case"input":i=hf(t,i),r=hf(t,r),s=[];break;case"select":i=be({},i,{value:void 0}),r=be({},r,{value:void 0}),s=[];break;case"textarea":i=pf(t,i),r=pf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hu)}gf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};kT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ho(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AP(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Ot(e.type)&&Wu(),dt(e),null;case 3:return r=e.stateNode,Qs(),ke(Dt),ke(yt),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pn!==null&&(Jf(pn),pn=null))),zf(t,e),dt(e),null;case 5:hm(e);var i=Pi(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)AT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return dt(e),null}if(t=Pi(Vn.current),Wl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xn]=e,r[Ua]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<ta.length;i++)Se(ta[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Zy(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":t_(r,s),Se("invalid",r)}gf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hl(r.textContent,l,t),i=["children",""+l]):Pa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Vl(r),e_(r,s,!0);break;case"textarea":Vl(r),n_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xn]=e,t[Ua]=r,ST(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<ta.length;i++)Se(ta[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":Zy(t,r),i=hf(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=be({},r,{value:void 0}),Se("invalid",t);break;case"textarea":t_(t,r),i=pf(t,r),Se("invalid",t);break;default:i=r}gf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ca(t,u):typeof u=="number"&&Ca(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Bp(t,s,u,o))}switch(n){case"input":Vl(t),e_(t,r,!1);break;case"textarea":Vl(t),n_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)kT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=Pi(ja.current),Pi(Vn.current),Wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[xn]=e,(s=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:Hl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=e,e.stateNode=r}return dt(e),null;case 13:if(ke(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Bt!==null&&e.mode&1&&!(e.flags&128))HE(),Ks(),e.flags|=98560,s=!1;else if(s=Wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[xn]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),s=!1}else pn!==null&&(Jf(pn),pn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Qe===0&&(Qe=3):Sm())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return Qs(),zf(t,e),t===null&&Va(e.stateNode.containerInfo),dt(e),null;case 10:return am(e.type._context),dt(e),null;case 17:return Ot(e.type)&&Wu(),dt(e),null;case 19:if(ke(Pe),s=e.memoizedState,s===null)return dt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ho(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xu(t),o!==null){for(e.flags|=128,Ho(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Pe,Pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>Js&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304)}else{if(!r)if(t=Xu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return dt(e),null}else 2*Ue()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=Pe.current,we(Pe,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return Im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function kP(t,e){switch(rm(e),e.tag){case 1:return Ot(e.type)&&Wu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),ke(Dt),ke(yt),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return Qs(),null;case 10:return am(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var Gl=!1,mt=!1,RP=typeof WeakSet=="function"?WeakSet:Set,G=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Hf(t,e,n){try{n()}catch(r){De(t,e,r)}}var W_=!1;function PP(t,e){if(Rf=$u,t=xE(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},$u=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,b=C.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?P:dn(e.type,P),b);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(O){De(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return C=W_,W_=!1,C}function ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hf(e,n,s)}i=i.next}while(i!==r)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function RT(t){var e=t.alternate;e!==null&&(t.alternate=null,RT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xn],delete e[Ua],delete e[xf],delete e[cP],delete e[hP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function PT(t){return t.tag===5||t.tag===3||t.tag===4}function q_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||PT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hu));else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}function Kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var it=null,fn=!1;function Ir(t,e,n){for(n=n.child;n!==null;)CT(t,e,n),n=n.sibling}function CT(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:mt||Rs(n,e);case 6:var r=it,i=fn;it=null,Ir(t,e,n),it=r,fn=i,it!==null&&(fn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(fn?(t=it,n=n.stateNode,t.nodeType===8?gd(t.parentNode,n):t.nodeType===1&&gd(t,n),Da(t)):gd(it,n.stateNode));break;case 4:r=it,i=fn,it=n.stateNode.containerInfo,fn=!0,Ir(t,e,n),it=r,fn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),i=i.next}while(i!==r)}Ir(t,e,n);break;case 1:if(!mt&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Ir(t,e,n);break;case 21:Ir(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,Ir(t,e,n),mt=r):Ir(t,e,n);break;default:Ir(t,e,n)}}function K_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RP),e.forEach(function(r){var i=MP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,fn=!1;break e;case 3:it=l.stateNode.containerInfo,fn=!0;break e;case 4:it=l.stateNode.containerInfo,fn=!0;break e}l=l.return}if(it===null)throw Error($(160));CT(s,o,i),it=null,fn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){De(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bT(e,t),e=e.sibling}function bT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),Pn(t),r&4){try{ma(3,t,t.return),Uc(3,t)}catch(P){De(t,t.return,P)}try{ma(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:cn(e,t),Pn(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(cn(e,t),Pn(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var i=t.stateNode;try{Ca(i,"")}catch(P){De(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&X0(i,s),yf(l,o);var c=yf(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?rE(i,f):d==="dangerouslySetInnerHTML"?tE(i,f):d==="children"?Ca(i,f):Bp(i,d,f,c)}switch(l){case"input":df(i,s);break;case"textarea":Z0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Cs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Cs(i,!!s.multiple,s.defaultValue,!0):Cs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ua]=s}catch(P){De(t,t.return,P)}}break;case 6:if(cn(e,t),Pn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){De(t,t.return,P)}}break;case 3:if(cn(e,t),Pn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:cn(e,t),Pn(t);break;case 13:cn(e,t),Pn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Em=Ue())),r&4&&K_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(c=mt)||d,cn(e,t),mt=c):cn(e,t),Pn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(G=t,d=t.child;d!==null;){for(f=G=d;G!==null;){switch(m=G,E=m.child,m.tag){case 0:case 11:case 14:case 15:ma(4,m,m.return);break;case 1:Rs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:Rs(m,m.return);break;case 22:if(m.memoizedState!==null){Q_(f);continue}}E!==null?(E.return=m,G=E):Q_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nE("display",o))}catch(P){De(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){De(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(e,t),Pn(t),r&4&&K_(t);break;case 21:break;default:cn(e,t),Pn(t)}}function Pn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(PT(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ca(i,""),r.flags&=-33);var s=q_(t);Kf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=q_(t);qf(t,l,o);break;default:throw Error($(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CP(t,e,n){G=t,xT(t)}function xT(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||mt;l=Gl;var c=mt;if(Gl=o,(mt=u)&&!c)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Y_(i):u!==null?(u.return=o,G=u):Y_(i);for(;s!==null;)G=s,xT(s),s=s.sibling;G=i,Gl=l,mt=c}G_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):G_(t)}}function G_(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Uc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&N_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}N_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}mt||e.flags&512&&Wf(e)}catch(m){De(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Q_(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Y_(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){De(e,i,u)}}var s=e.return;try{Wf(e)}catch(u){De(e,s,u)}break;case 5:var o=e.return;try{Wf(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var bP=Math.ceil,tc=pr.ReactCurrentDispatcher,vm=pr.ReactCurrentOwner,rn=pr.ReactCurrentBatchConfig,de=0,nt=null,ze=null,at=0,jt=0,Ps=ui(0),Qe=0,Ha=null,Fi=0,Fc=0,wm=0,ga=null,bt=null,Em=0,Js=1/0,Kn=null,nc=!1,Gf=null,Hr=null,Ql=!1,Lr=null,rc=0,ya=0,Qf=null,yu=-1,_u=0;function It(){return de&6?Ue():yu!==-1?yu:yu=Ue()}function Wr(t){return t.mode&1?de&2&&at!==0?at&-at:fP.transition!==null?(_u===0&&(_u=mE()),_u):(t=ge,t!==0||(t=window.event,t=t===void 0?16:TE(t.type)),t):1}function vn(t,e,n,r){if(50<ya)throw ya=0,Qf=null,Error($(185));ll(t,n,r),(!(de&2)||t!==nt)&&(t===nt&&(!(de&2)&&(Fc|=n),Qe===4&&Pr(t,at)),Lt(t,r),n===1&&de===0&&!(e.mode&1)&&(Js=Ue()+500,Lc&&ci()))}function Lt(t,e){var n=t.callbackNode;fR(t,e);var r=ju(t,t===nt?at:0);if(r===0)n!==null&&s_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&s_(n),e===1)t.tag===0?dP(J_.bind(null,t)):$E(J_.bind(null,t)),lP(function(){!(de&6)&&ci()}),n=null;else{switch(gE(r)){case 1:n=Kp;break;case 4:n=fE;break;case 16:n=Fu;break;case 536870912:n=pE;break;default:n=Fu}n=FT(n,NT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function NT(t,e){if(yu=-1,_u=0,de&6)throw Error($(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=ju(t,t===nt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ic(t,r);else{e=r;var i=de;de|=2;var s=OT();(nt!==t||at!==e)&&(Kn=null,Js=Ue()+500,xi(t,e));do try{DP();break}catch(l){DT(t,l)}while(1);om(),tc.current=s,de=i,ze!==null?e=0:(nt=null,at=0,e=Qe)}if(e!==0){if(e===2&&(i=Tf(t),i!==0&&(r=i,e=Yf(t,i))),e===1)throw n=Ha,xi(t,0),Pr(t,r),Lt(t,Ue()),n;if(e===6)Pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!xP(i)&&(e=ic(t,r),e===2&&(s=Tf(t),s!==0&&(r=s,e=Yf(t,s))),e===1))throw n=Ha,xi(t,0),Pr(t,r),Lt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:Si(t,bt,Kn);break;case 3:if(Pr(t,r),(r&130023424)===r&&(e=Em+500-Ue(),10<e)){if(ju(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bf(Si.bind(null,t,bt,Kn),e);break}Si(t,bt,Kn);break;case 4:if(Pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_n(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bP(r/1960))-r,10<r){t.timeoutHandle=bf(Si.bind(null,t,bt,Kn),r);break}Si(t,bt,Kn);break;case 5:Si(t,bt,Kn);break;default:throw Error($(329))}}}return Lt(t,Ue()),t.callbackNode===n?NT.bind(null,t):null}function Yf(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(xi(t,e).flags|=256),t=ic(t,e),t!==2&&(e=bt,bt=n,e!==null&&Jf(e)),t}function Jf(t){bt===null?bt=t:bt.push.apply(bt,t)}function xP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!En(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pr(t,e){for(e&=~wm,e&=~Fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function J_(t){if(de&6)throw Error($(327));Os();var e=ju(t,0);if(!(e&1))return Lt(t,Ue()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var r=Tf(t);r!==0&&(e=r,n=Yf(t,r))}if(n===1)throw n=Ha,xi(t,0),Pr(t,e),Lt(t,Ue()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Si(t,bt,Kn),Lt(t,Ue()),null}function Tm(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Js=Ue()+500,Lc&&ci())}}function ji(t){Lr!==null&&Lr.tag===0&&!(de&6)&&Os();var e=de;de|=1;var n=rn.transition,r=ge;try{if(rn.transition=null,ge=1,t)return t()}finally{ge=r,rn.transition=n,de=e,!(de&6)&&ci()}}function Im(){jt=Ps.current,ke(Ps)}function xi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,aP(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wu();break;case 3:Qs(),ke(Dt),ke(yt),dm();break;case 5:hm(r);break;case 4:Qs();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:am(r.type._context);break;case 22:case 23:Im()}n=n.return}if(nt=t,ze=t=qr(t.current,null),at=jt=e,Qe=0,Ha=null,wm=Fc=Fi=0,bt=ga=null,Ri!==null){for(e=0;e<Ri.length;e++)if(n=Ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return t}function DT(t,e){do{var n=ze;try{if(om(),pu.current=ec,Zu){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zu=!1}if(Ui=0,tt=Ge=Ce=null,pa=!1,$a=0,vm.current=null,n===null||n.return===null){Qe=1,Ha=e,ze=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=at,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=U_(o);if(E!==null){E.flags&=-257,F_(E,o,l,s,e),E.mode&1&&M_(s,c,e),e=E,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){M_(s,c,e),Sm();break e}u=Error($(426))}}else if(Re&&l.mode&1){var b=U_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),F_(b,o,l,s,e),im(Ys(u,l));break e}}s=u=Ys(u,l),Qe!==4&&(Qe=2),ga===null?ga=[s]:ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=gT(s,u,e);x_(s,v);break e;case 1:l=u;var _=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Hr===null||!Hr.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=yT(s,l,e);x_(s,O);break e}}s=s.return}while(s!==null)}VT(n)}catch(U){e=U,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(1)}function OT(){var t=tc.current;return tc.current=ec,t===null?ec:t}function Sm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),nt===null||!(Fi&268435455)&&!(Fc&268435455)||Pr(nt,at)}function ic(t,e){var n=de;de|=2;var r=OT();(nt!==t||at!==e)&&(Kn=null,xi(t,e));do try{NP();break}catch(i){DT(t,i)}while(1);if(om(),de=n,tc.current=r,ze!==null)throw Error($(261));return nt=null,at=0,Qe}function NP(){for(;ze!==null;)LT(ze)}function DP(){for(;ze!==null&&!iR();)LT(ze)}function LT(t){var e=UT(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?VT(t):ze=e,vm.current=null}function VT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kP(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,ze=null;return}}else if(n=AP(n,e,jt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Qe===0&&(Qe=5)}function Si(t,e,n){var r=ge,i=rn.transition;try{rn.transition=null,ge=1,OP(t,e,n,r)}finally{rn.transition=i,ge=r}return null}function OP(t,e,n,r){do Os();while(Lr!==null);if(de&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(pR(t,s),t===nt&&(ze=nt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ql||(Ql=!0,FT(Fu,function(){return Os(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rn.transition,rn.transition=null;var o=ge;ge=1;var l=de;de|=4,vm.current=null,PP(t,n),bT(n,t),eP(Pf),$u=!!Rf,Pf=Rf=null,t.current=n,CP(n),sR(),de=l,ge=o,rn.transition=s}else t.current=n;if(Ql&&(Ql=!1,Lr=t,rc=i),s=t.pendingLanes,s===0&&(Hr=null),lR(n.stateNode),Lt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nc)throw nc=!1,t=Gf,Gf=null,t;return rc&1&&t.tag!==0&&Os(),s=t.pendingLanes,s&1?t===Qf?ya++:(ya=0,Qf=t):ya=0,ci(),null}function Os(){if(Lr!==null){var t=gE(rc),e=rn.transition,n=ge;try{if(rn.transition=null,ge=16>t?16:t,Lr===null)var r=!1;else{if(t=Lr,Lr=null,rc=0,de&6)throw Error($(331));var i=de;for(de|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:ma(8,d,s)}var f=d.child;if(f!==null)f.return=d,G=f;else for(;G!==null;){d=G;var m=d.sibling,E=d.return;if(RT(d),d===c){G=null;break}if(m!==null){m.return=E,G=m;break}G=E}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,G=v;break e}G=s.return}}var _=t.current;for(G=_;G!==null;){o=G;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,G=T;else e:for(o=_;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Uc(9,l)}}catch(U){De(l,l.return,U)}if(l===o){G=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,G=O;break e}G=l.return}}if(de=i,ci(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(bc,t)}catch{}r=!0}return r}finally{ge=n,rn.transition=e}}return!1}function X_(t,e,n){e=Ys(n,e),e=gT(t,e,1),t=zr(t,e,1),e=It(),t!==null&&(ll(t,1,e),Lt(t,e))}function De(t,e,n){if(t.tag===3)X_(t,t,n);else for(;e!==null;){if(e.tag===3){X_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=Ys(n,t),t=yT(e,t,1),e=zr(e,t,1),t=It(),e!==null&&(ll(e,1,t),Lt(e,t));break}}e=e.return}}function LP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(at&n)===n&&(Qe===4||Qe===3&&(at&130023424)===at&&500>Ue()-Em?xi(t,0):wm|=n),Lt(t,e)}function MT(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=It();t=sr(t,e),t!==null&&(ll(t,e,n),Lt(t,n))}function VP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MT(t,n)}function MP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),MT(t,n)}var UT;UT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,SP(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Re&&e.flags&1048576&&BE(e,Gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var i=qs(e,yt.current);Ds(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,qu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Mc,e.stateNode=i,i._reactInternals=e,Mf(e,r,t,n),e=jf(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&nm(e),Tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FP(r),t=dn(r,t),i){case 0:e=Ff(null,e,r,t,n);break e;case 1:e=B_(null,e,r,t,n);break e;case 11:e=j_(null,e,r,t,n);break e;case 14:e=$_(null,e,r,dn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),Ff(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),B_(t,e,r,i,n);case 3:e:{if(ET(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,GE(t,e),Ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ys(Error($(423)),e),e=z_(t,e,r,n,i);break e}else if(r!==i){i=Ys(Error($(424)),e),e=z_(t,e,r,n,i);break e}else for(Bt=Br(e.stateNode.containerInfo.firstChild),Wt=e,Re=!0,pn=null,n=qE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===i){e=or(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return QE(e),t===null&&Of(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cf(r,i)?o=null:s!==null&&Cf(r,s)&&(e.flags|=32),wT(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Of(e),null;case 13:return TT(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),j_(t,e,r,i,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(Qu,r._currentValue),r._currentValue=o,s!==null)if(En(s.value,o)){if(s.children===i.children&&!Dt.current){e=or(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=er(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Lf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=on(i),r=r(i),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,i=dn(r,e.pendingProps),i=dn(r.type,i),$_(t,e,r,i,n);case 15:return _T(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dn(r,i),gu(t,e),e.tag=1,Ot(r)?(t=!0,qu(e)):t=!1,Ds(e,n),mT(e,r,i),Mf(e,r,i,n),jf(null,e,r,!0,t,n);case 19:return IT(t,e,n);case 22:return vT(t,e,n)}throw Error($(156,e.tag))};function FT(t,e){return dE(t,e)}function UP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new UP(t,e,n,r)}function Am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FP(t){if(typeof t=="function")return Am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hp)return 11;if(t===Wp)return 14}return 2}function qr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case _s:return Ni(n.children,i,s,e);case zp:o=8,i|=8;break;case af:return t=nn(12,n,e,i|2),t.elementType=af,t.lanes=s,t;case lf:return t=nn(13,n,e,i),t.elementType=lf,t.lanes=s,t;case uf:return t=nn(19,n,e,i),t.elementType=uf,t.lanes=s,t;case Q0:return jc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:o=10;break e;case G0:o=9;break e;case Hp:o=11;break e;case Wp:o=14;break e;case Ar:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=nn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ni(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function jc(t,e,n,r){return t=nn(22,t,r,e),t.elementType=Q0,t.lanes=n,t.stateNode={isHidden:!1},t}function Sd(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Ad(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,i,s,o,l,u){return t=new jP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function $P(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jT(t){if(!t)return ei;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(Ot(n))return jE(t,n,e)}return e}function $T(t,e,n,r,i,s,o,l,u){return t=km(n,r,!0,t,i,s,o,l,u),t.context=jT(null),n=t.current,r=It(),i=Wr(n),s=er(r,i),s.callback=e??null,zr(n,s,i),t.current.lanes=i,ll(t,i,r),Lt(t,r),t}function $c(t,e,n,r){var i=e.current,s=It(),o=Wr(i);return n=jT(n),e.context===null?e.context=n:e.pendingContext=n,e=er(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zr(i,e,o),t!==null&&(vn(t,i,o,s),fu(t,i,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Z_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rm(t,e){Z_(t,e),(t=t.alternate)&&Z_(t,e)}function BP(){return null}var BT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pm(t){this._internalRoot=t}Bc.prototype.render=Pm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));$c(t,e,null,null)};Bc.prototype.unmount=Pm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ji(function(){$c(null,t,null,null)}),e[ir]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=vE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&EE(t)}};function Cm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ev(){}function zP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=sc(o);s.call(c)}}var o=$T(e,r,t,0,null,!1,!1,"",ev);return t._reactRootContainer=o,t[ir]=o.current,Va(t.nodeType===8?t.parentNode:t),ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=sc(u);l.call(c)}}var u=km(t,0,!1,null,null,!1,!1,"",ev);return t._reactRootContainer=u,t[ir]=u.current,Va(t.nodeType===8?t.parentNode:t),ji(function(){$c(e,u,n,r)}),u}function Hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=sc(o);l.call(u)}}$c(e,o,t,i)}else o=zP(n,e,t,i,r);return sc(o)}yE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(Gp(e,n|1),Lt(e,Ue()),!(de&6)&&(Js=Ue()+500,ci()))}break;case 13:ji(function(){var r=sr(t,1);if(r!==null){var i=It();vn(r,t,1,i)}}),Rm(t,1)}};Qp=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=It();vn(e,t,134217728,n)}Rm(t,134217728)}};_E=function(t){if(t.tag===13){var e=Wr(t),n=sr(t,e);if(n!==null){var r=It();vn(n,t,e,r)}Rm(t,e)}};vE=function(){return ge};wE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};vf=function(t,e,n){switch(e){case"input":if(df(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oc(r);if(!i)throw Error($(90));J0(r),df(r,i)}}}break;case"textarea":Z0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};oE=Tm;aE=ji;var HP={usingClientEntryPoint:!1,Events:[cl,Ts,Oc,iE,sE,Tm]},Wo={findFiberByHostInstance:ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WP={bundleType:Wo.bundleType,version:Wo.version,rendererPackageName:Wo.rendererPackageName,rendererConfig:Wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cE(t),t===null?null:t.stateNode},findFiberByHostInstance:Wo.findFiberByHostInstance||BP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{bc=Yl.inject(WP),Ln=Yl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HP;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cm(e))throw Error($(200));return $P(t,e,null,n)};Kt.createRoot=function(t,e){if(!Cm(t))throw Error($(299));var n=!1,r="",i=BT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,i),t[ir]=e.current,Va(t.nodeType===8?t.parentNode:t),new Pm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=cE(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return ji(t)};Kt.hydrate=function(t,e,n){if(!zc(e))throw Error($(200));return Hc(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!Cm(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=BT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$T(e,null,t,1,n??null,i,!1,s,o),t[ir]=e.current,Va(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bc(e)};Kt.render=function(t,e,n){if(!zc(e))throw Error($(200));return Hc(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!zc(t))throw Error($(40));return t._reactRootContainer?(ji(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Kt.unstable_batchedUpdates=Tm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!zc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Hc(t,e,n,!1,r)};Kt.version="18.3.1-next-f1338f8080-20240426";function zT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zT)}catch(t){console.error(t)}}zT(),z0.exports=Kt;var qP=z0.exports,tv=qP;sf.createRoot=tv.createRoot,sf.hydrateRoot=tv.hydrateRoot;const KP="modulepreload",GP=function(t){return"/"+t},nv={},oe=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=GP(s),s in nv)return;nv[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":KP,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wa.apply(this,arguments)}var Vr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vr||(Vr={}));const rv="popstate";function QP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Xf("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:oc(i)}return JP(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function bm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YP(){return Math.random().toString(36).substr(2,8)}function iv(t,e){return{usr:t.state,key:t.key,idx:e}}function Xf(t,e,n,r){return n===void 0&&(n=null),Wa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ao(e):e,{state:n,key:e&&e.key||r||YP()})}function oc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function JP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Vr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Wa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Vr.Pop;let b=d(),v=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:v})}function m(b,v){l=Vr.Push;let _=Xf(P.location,b,v);n&&n(_,b),c=d()+1;let T=iv(_,c),O=P.createHref(_);try{o.pushState(T,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:l,location:P.location,delta:1})}function E(b,v){l=Vr.Replace;let _=Xf(P.location,b,v);n&&n(_,b),c=d();let T=iv(_,c),O=P.createHref(_);o.replaceState(T,"",O),s&&u&&u({action:l,location:P.location,delta:0})}function C(b){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof b=="string"?b:oc(b);return _=_.replace(/ $/,"%20"),Fe(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(rv,f),u=b,()=>{i.removeEventListener(rv,f),u=null}},createHref(b){return e(i,b)},createURL:C,encodeLocation(b){let v=C(b);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:E,go(b){return o.go(b)}};return P}var sv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sv||(sv={}));function XP(t,e,n){return n===void 0&&(n="/"),ZP(t,e,n,!1)}function ZP(t,e,n,r){let i=typeof e=="string"?ao(e):e,s=xm(i.pathname||"/",n);if(s==null)return null;let o=HT(t);eC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=hC(s);l=uC(o[u],c,r)}return l}function HT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Kr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),HT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:aC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of WT(s.path))i(s,o,u)}),e}function WT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=WT(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function eC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:lC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const tC=/^:[\w-]+$/,nC=3,rC=2,iC=1,sC=10,oC=-2,ov=t=>t==="*";function aC(t,e){let n=t.split("/"),r=n.length;return n.some(ov)&&(r+=oC),e&&(r+=rC),n.filter(i=>!ov(i)).reduce((i,s)=>i+(tC.test(s)?nC:s===""?iC:sC),r)}function lC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function uC(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=av({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=av({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Kr([s,f.pathname]),pathnameBase:gC(Kr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Kr([s,f.pathnameBase]))}return o}function av(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[f];return E&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function cC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),bm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function hC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const dC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fC=t=>dC.test(t);function pC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ao(t):t,s;if(n)if(fC(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),bm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=lv(n.substring(1),"/"):s=lv(n,e)}else s=e;return{pathname:s,search:yC(r),hash:_C(i)}}function lv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Nm(t,e){let n=mC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ao(t):(i=Wa({},t),Fe(!i.pathname||!i.pathname.includes("?"),kd("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),kd("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=pC(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Kr=t=>t.join("/").replace(/\/\/+/g,"/"),gC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_C=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const qT=["post","put","patch","delete"];new Set(qT);const wC=["get",...qT];new Set(wC);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}const Om=D.createContext(null),EC=D.createContext(null),hi=D.createContext(null),Wc=D.createContext(null),Bn=D.createContext({outlet:null,matches:[],isDataRoute:!1}),KT=D.createContext(null);function TC(t,e){let{relative:n}=e===void 0?{}:e;lo()||Fe(!1);let{basename:r,navigator:i}=D.useContext(hi),{hash:s,pathname:o,search:l}=QT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Kr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function lo(){return D.useContext(Wc)!=null}function uo(){return lo()||Fe(!1),D.useContext(Wc).location}function GT(t){D.useContext(hi).static||D.useLayoutEffect(t)}function Lm(){let{isDataRoute:t}=D.useContext(Bn);return t?MC():IC()}function IC(){lo()||Fe(!1);let t=D.useContext(Om),{basename:e,future:n,navigator:r}=D.useContext(hi),{matches:i}=D.useContext(Bn),{pathname:s}=uo(),o=JSON.stringify(Nm(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return GT(()=>{l.current=!0}),D.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Dm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Kr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const SC=D.createContext(null);function AC(t){let e=D.useContext(Bn).outlet;return e&&D.createElement(SC.Provider,{value:t},e)}function Kj(){let{matches:t}=D.useContext(Bn),e=t[t.length-1];return e?e.params:{}}function QT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(hi),{matches:i}=D.useContext(Bn),{pathname:s}=uo(),o=JSON.stringify(Nm(i,r.v7_relativeSplatPath));return D.useMemo(()=>Dm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function kC(t,e){return RC(t,e)}function RC(t,e,n,r){lo()||Fe(!1);let{navigator:i}=D.useContext(hi),{matches:s}=D.useContext(Bn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=uo(),d;if(e){var f;let b=typeof e=="string"?ao(e):e;u==="/"||(f=b.pathname)!=null&&f.startsWith(u)||Fe(!1),d=b}else d=c;let m=d.pathname||"/",E=m;if(u!=="/"){let b=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let C=XP(t,{pathname:E}),P=NC(C&&C.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Kr([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Kr([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&P?D.createElement(Wc.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vr.Pop}},P):P}function PC(){let t=VC(),e=vC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const CC=D.createElement(PC,null);class bC extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Bn.Provider,{value:this.props.routeContext},D.createElement(KT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xC(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Om);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Bn.Provider,{value:e},r)}function NC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Fe(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,C=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,C=!1,P=null,b=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||CC,u&&(c<0&&m===0?(UC("route-fallback",!1),C=!0,b=null):c===m&&(C=!0,b=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),_=()=>{let T;return E?T=P:C?T=b:f.route.Component?T=D.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=d,D.createElement(xC,{match:f,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(bC,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var YT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(YT||{}),ac=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ac||{});function DC(t){let e=D.useContext(Om);return e||Fe(!1),e}function OC(t){let e=D.useContext(EC);return e||Fe(!1),e}function LC(t){let e=D.useContext(Bn);return e||Fe(!1),e}function JT(t){let e=LC(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function VC(){var t;let e=D.useContext(KT),n=OC(ac.UseRouteError),r=JT(ac.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function MC(){let{router:t}=DC(YT.UseNavigateStable),e=JT(ac.UseNavigateStable),n=D.useRef(!1);return GT(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qa({fromRouteId:e},s)))},[t,e])}const uv={};function UC(t,e,n){!e&&!uv[t]&&(uv[t]=!0)}function FC(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function _a(t){let{to:e,replace:n,state:r,relative:i}=t;lo()||Fe(!1);let{future:s,static:o}=D.useContext(hi),{matches:l}=D.useContext(Bn),{pathname:u}=uo(),c=Lm(),d=Dm(e,Nm(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return D.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Vm(t){return AC(t.context)}function J(t){Fe(!1)}function jC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vr.Pop,navigator:s,static:o=!1,future:l}=t;lo()&&Fe(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:qa({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ao(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:C="default"}=r,P=D.useMemo(()=>{let b=xm(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:E,key:C},navigationType:i}},[u,d,f,m,E,C,i]);return P==null?null:D.createElement(hi.Provider,{value:c},D.createElement(Wc.Provider,{children:n,value:P}))}function $C(t){let{children:e,location:n}=t;return kC(Zf(e),n)}new Promise(()=>{});function Zf(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,Zf(r.props.children,s));return}r.type!==J&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Zf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ep(){return ep=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ep.apply(this,arguments)}function BC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function HC(t,e){return t.button===0&&(!e||e==="_self")&&!zC(t)}const WC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qC="6";try{window.__reactRouterVersion=qC}catch{}const KC="startTransition",cv=Lk[KC];function GC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=QP({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=D.useCallback(f=>{c&&cv?cv(()=>u(f)):u(f)},[u,c]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>FC(r),[r]),D.createElement(jC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const QC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",YC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gj=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=BC(e,WC),{basename:E}=D.useContext(hi),C,P=!1;if(typeof c=="string"&&YC.test(c)&&(C=c,QC))try{let T=new URL(window.location.href),O=c.startsWith("//")?new URL(T.protocol+c):new URL(c),U=xm(O.pathname,E);O.origin===T.origin&&U!=null?c=U+O.search+O.hash:P=!0}catch{}let b=TC(c,{relative:i}),v=JC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function _(T){r&&r(T),T.defaultPrevented||v(T)}return D.createElement("a",ep({},m,{href:C||b,onClick:P||s?r:_,ref:n,target:u}))});var hv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hv||(hv={}));var dv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(dv||(dv={}));function JC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Lm(),c=uo(),d=QT(t,{relative:o});return D.useCallback(f=>{if(HC(f,n)){f.preventDefault();let m=r!==void 0?r:oc(c)===oc(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let XC={data:""},ZC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||XC},eb=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,tb=/\/\*[^]*?\*\/|  +/g,fv=/\n+/g,Cr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Cr(o,s):s+"{"+Cr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Cr(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Cr.p?Cr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Wn={},XT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+XT(t[n]);return e}return t},nb=(t,e,n,r,i)=>{let s=XT(t),o=Wn[s]||(Wn[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Wn[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=eb.exec(c.replace(tb,""));)d[4]?m.shift():d[3]?(f=d[3].replace(fv," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(fv," ").trim();return m[0]})(t);Wn[o]=Cr(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&Wn.g?Wn.g:null;return n&&(Wn.g=Wn[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(Wn[o],e,r,l),o},rb=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Cr(l,""):l===!1?"":l}return r+i+(o??"")},"");function qc(t){let e=this||{},n=t.call?t(e.p):t;return nb(n.unshift?n.raw?rb(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,ZC(e.target),e.g,e.o,e.k)}let ZT,tp,np;qc.bind({g:1});let ar=qc.bind({k:1});function ib(t,e,n,r){Cr.p=e,ZT=t,tp=n,np=r}function di(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:tp&&tp()},l),n.o=/ *go\d+/.test(u),l.className=qc.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),np&&c[0]&&np(l),ZT(c,l)}return e?e(i):i}}var sb=t=>typeof t=="function",lc=(t,e)=>sb(t)?t(e):t,ob=(()=>{let t=0;return()=>(++t).toString()})(),eI=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ab=20,Mm="default",tI=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return tI(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},wu=[],nI={toasts:[],pausedAt:void 0,settings:{toastLimit:ab}},Dn={},rI=(t,e=Mm)=>{Dn[e]=tI(Dn[e]||nI,t),wu.forEach(([n,r])=>{n===e&&r(Dn[e])})},iI=t=>Object.keys(Dn).forEach(e=>rI(t,e)),lb=t=>Object.keys(Dn).find(e=>Dn[e].toasts.some(n=>n.id===t)),Kc=(t=Mm)=>e=>{rI(e,t)},ub={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},cb=(t={},e=Mm)=>{let[n,r]=D.useState(Dn[e]||nI),i=D.useRef(Dn[e]);D.useEffect(()=>(i.current!==Dn[e]&&r(Dn[e]),wu.push([e,r]),()=>{let o=wu.findIndex(([l])=>l===e);o>-1&&wu.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||ub[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},hb=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||ob()}),dl=t=>(e,n)=>{let r=hb(e,t,n);return Kc(r.toasterId||lb(r.id))({type:2,toast:r}),r.id},fe=(t,e)=>dl("blank")(t,e);fe.error=dl("error");fe.success=dl("success");fe.loading=dl("loading");fe.custom=dl("custom");fe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Kc(e)(n):iI(n)};fe.dismissAll=t=>fe.dismiss(void 0,t);fe.remove=(t,e)=>{let n={type:4,toastId:t};e?Kc(e)(n):iI(n)};fe.removeAll=t=>fe.remove(void 0,t);fe.promise=(t,e,n)=>{let r=fe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?lc(e.success,i):void 0;return s?fe.success(s,{id:r,...n,...n==null?void 0:n.success}):fe.dismiss(r),i}).catch(i=>{let s=e.error?lc(e.error,i):void 0;s?fe.error(s,{id:r,...n,...n==null?void 0:n.error}):fe.dismiss(r)}),t};var db=1e3,fb=(t,e="default")=>{let{toasts:n,pausedAt:r}=cb(t,e),i=D.useRef(new Map).current,s=D.useCallback((f,m=db)=>{if(i.has(f))return;let E=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,E)},[]);D.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(E=>{if(E.duration===1/0)return;let C=(E.duration||0)+E.pauseDuration-(f-E.createdAt);if(C<0){E.visible&&fe.dismiss(E.id);return}return setTimeout(()=>fe.dismiss(E.id,e),C)});return()=>{m.forEach(E=>E&&clearTimeout(E))}},[n,r,e]);let o=D.useCallback(Kc(e),[e]),l=D.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=D.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=D.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=D.useCallback((f,m)=>{let{reverseOrder:E=!1,gutter:C=8,defaultPosition:P}=m||{},b=n.filter(T=>(T.position||P)===(f.position||P)&&T.height),v=b.findIndex(T=>T.id===f.id),_=b.filter((T,O)=>O<v&&T.visible).length;return b.filter(T=>T.visible).slice(...E?[_+1]:[0,_]).reduce((T,O)=>T+(O.height||0)+C,0)},[n]);return D.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},pb=ar`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,mb=ar`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,gb=ar`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,yb=di("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${mb} 0.15s ease-out forwards;
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
    animation: ${gb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,_b=ar`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,vb=di("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${_b} 1s linear infinite;
`,wb=ar`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Eb=ar`
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
}`,Tb=di("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${wb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Eb} 0.2s ease-out forwards;
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
`,Ib=di("div")`
  position: absolute;
`,Sb=di("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ab=ar`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kb=di("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ab} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Rb=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(kb,null,e):e:n==="blank"?null:D.createElement(Sb,null,D.createElement(vb,{...r}),n!=="loading"&&D.createElement(Ib,null,n==="error"?D.createElement(yb,{...r}):D.createElement(Tb,{...r})))},Pb=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Cb=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,bb="0%{opacity:0;} 100%{opacity:1;}",xb="0%{opacity:1;} 100%{opacity:0;}",Nb=di("div")`
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
`,Db=di("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ob=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=eI()?[bb,xb]:[Pb(n),Cb(n)];return{animation:e?`${ar(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${ar(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Lb=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?Ob(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(Rb,{toast:t}),o=D.createElement(Db,{...t.ariaProps},lc(t.message,t));return D.createElement(Nb,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});ib(D.createElement);var Vb=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},Mb=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:eI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},Ub=qc`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Jl=16,Fb=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=fb(n,s);return D.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Jl,left:Jl,right:Jl,bottom:Jl,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),E=Mb(f,m);return D.createElement(Vb,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Ub:"",style:E},d.type==="custom"?lc(d.message,d):i?i(d):D.createElement(Lb,{toast:d,position:f}))}))},Rd=fe,jb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $b=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xi=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>D.createElement("svg",{ref:c,...jb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${$b(t)}`,...u},[...e.map(([d,f])=>D.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},Bb=Xi("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),pv=Xi("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),mv=Xi("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),sI=Xi("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),zb=Xi("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Hb=Xi("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),Wb=Xi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qb=()=>{};/**
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
 */const oI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new Gb;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const C=c<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qb=function(t){const e=oI(t);return aI.encodeByteArray(e,!0)},uc=function(t){return Qb(t).replace(/\./g,"")},lI=function(t){try{return aI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jb=()=>Yb().__FIREBASE_DEFAULTS__,Xb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lI(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return qb()||Jb()||Xb()||Zb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uI=t=>{var e,n;return(n=(e=Gc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},cI=t=>{const e=uI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hI=()=>{var t;return(t=Gc())==null?void 0:t.config},dI=t=>{var e;return(e=Gc())==null?void 0:e[`_${t}`]};/**
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
 */class ex{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function fI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[uc(JSON.stringify(n)),uc(JSON.stringify(o)),l].join(".")}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function nx(){var e;const t=(e=Gc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ix(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ox(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ax(){return!nx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function lx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ux="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ux,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,l,r)}}function cx(t,e){return t.replace(hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hx=/\{\$([^}]+)}/g;function dx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(gv(s)&&gv(o)){if(!ti(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gv(t){return t!==null&&typeof t=="object"}/**
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
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function na(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ra(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fx(t,e){const n=new px(t,e);return n.subscribe.bind(n)}class px{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pd),i.error===void 0&&(i.error=Pd),i.complete===void 0&&(i.complete=Pd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pd(){}/**
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
 */function es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Um(t){return(await fetch(t,{credentials:"include"})).ok}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ai="[DEFAULT]";/**
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
 */class gx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ex;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_x(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yx(t){return t===Ai?void 0:t}function _x(t){return t.instantiationMode==="EAGER"}/**
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
 */class vx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const wx={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Ex=le.INFO,Tx={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Ix=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Tx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fm{constructor(e){this.name=e,this._logLevel=Ex,this._logHandler=Ix,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Sx=(t,e)=>e.some(n=>t instanceof n);let yv,_v;function Ax(){return yv||(yv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kx(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gI=new WeakMap,rp=new WeakMap,yI=new WeakMap,Cd=new WeakMap,jm=new WeakMap;function Rx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(tr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gI.set(n,t)}).catch(()=>{}),jm.set(e,t),e}function Px(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cx(t){ip=t(ip)}function bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bd(this),e,...n);return yI.set(r,e.sort?e.sort():[e]),tr(r)}:kx().includes(t)?function(...e){return t.apply(bd(this),e),tr(gI.get(this))}:function(...e){return tr(t.apply(bd(this),e))}}function xx(t){return typeof t=="function"?bx(t):(t instanceof IDBTransaction&&Px(t),Sx(t,Ax())?new Proxy(t,ip):t)}function tr(t){if(t instanceof IDBRequest)return Rx(t);if(Cd.has(t))return Cd.get(t);const e=xx(t);return e!==t&&(Cd.set(t,e),jm.set(e,t)),e}const bd=t=>jm.get(t);function Qc(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=tr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(tr(o.result),u.oldVersion,u.newVersion,tr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function xd(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),tr(n).then(()=>{})}const Nx=["get","getKey","getAll","getAllKeys","count"],Dx=["put","add","delete","clear"],Nd=new Map;function vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nd.get(e))return Nd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Dx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Nx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Nd.set(e,s),s}Cx(t=>({...t,get:(e,n,r)=>vv(e,n)||t.get(e,n,r),has:(e,n)=>!!vv(e,n)||t.has(e,n)}));/**
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
 */class Ox{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Lx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sp="@firebase/app",wv="0.14.10";/**
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
 */const lr=new Fm("@firebase/app"),Vx="@firebase/app-compat",Mx="@firebase/analytics-compat",Ux="@firebase/analytics",Fx="@firebase/app-check-compat",jx="@firebase/app-check",$x="@firebase/auth",Bx="@firebase/auth-compat",zx="@firebase/database",Hx="@firebase/data-connect",Wx="@firebase/database-compat",qx="@firebase/functions",Kx="@firebase/functions-compat",Gx="@firebase/installations",Qx="@firebase/installations-compat",Yx="@firebase/messaging",Jx="@firebase/messaging-compat",Xx="@firebase/performance",Zx="@firebase/performance-compat",eN="@firebase/remote-config",tN="@firebase/remote-config-compat",nN="@firebase/storage",rN="@firebase/storage-compat",iN="@firebase/firestore",sN="@firebase/ai",oN="@firebase/firestore-compat",aN="firebase",lN="12.11.0";/**
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
 */const op="[DEFAULT]",uN={[sp]:"fire-core",[Vx]:"fire-core-compat",[Ux]:"fire-analytics",[Mx]:"fire-analytics-compat",[jx]:"fire-app-check",[Fx]:"fire-app-check-compat",[$x]:"fire-auth",[Bx]:"fire-auth-compat",[zx]:"fire-rtdb",[Hx]:"fire-data-connect",[Wx]:"fire-rtdb-compat",[qx]:"fire-fn",[Kx]:"fire-fn-compat",[Gx]:"fire-iid",[Qx]:"fire-iid-compat",[Yx]:"fire-fcm",[Jx]:"fire-fcm-compat",[Xx]:"fire-perf",[Zx]:"fire-perf-compat",[eN]:"fire-rc",[tN]:"fire-rc-compat",[nN]:"fire-gcs",[rN]:"fire-gcs-compat",[iN]:"fire-fst",[oN]:"fire-fst-compat",[sN]:"fire-vertex","fire-js":"fire-js",[aN]:"fire-js-all"};/**
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
 */const cc=new Map,cN=new Map,ap=new Map;function Ev(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(ap.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,t);for(const n of cc.values())Ev(n,t);for(const n of cN.values())Ev(n,t);return!0}function ts(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function He(t){return t==null?!1:t.settings!==void 0}/**
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
 */const hN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Zi("app","Firebase",hN);/**
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
 */class dN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=lN;function _I(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:op,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Gr.create("bad-app-name",{appName:String(i)});if(n||(n=hI()),!n)throw Gr.create("no-options");const s=cc.get(i);if(s){if(ti(n,s.options)&&ti(r,s.config))return s;throw Gr.create("duplicate-app",{appName:i})}const o=new vx(i);for(const u of ap.values())o.addComponent(u);const l=new dN(n,r,o);return cc.set(i,l),l}function Yc(t=op){const e=cc.get(t);if(!e&&t===op&&hI())return _I();if(!e)throw Gr.create("no-app",{appName:t});return e}function Vt(t,e,n){let r=uN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(o.join(" "));return}Tn(new ln(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fN="firebase-heartbeat-database",pN=1,Ka="firebase-heartbeat-store";let Dd=null;function vI(){return Dd||(Dd=Qc(fN,pN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ka)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Dd}async function mN(t){try{const n=(await vI()).transaction(Ka),r=await n.objectStore(Ka).get(wI(t));return await n.done,r}catch(e){if(e instanceof Sn)lr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function Tv(t,e){try{const r=(await vI()).transaction(Ka,"readwrite");await r.objectStore(Ka).put(e,wI(t)),await r.done}catch(n){if(n instanceof Sn)lr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function wI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gN=1024,yN=30;class _N{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>yN){const o=EN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iv(),{heartbeatsToSend:r,unsentEntries:i}=vN(this._heartbeatsCache.heartbeats),s=uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return lr.warn(n),""}}}function Iv(){return new Date().toISOString().substring(0,10)}function vN(t,e=gN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Tv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Tv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sv(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}function EN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function TN(t){Tn(new ln("platform-logger",e=>new Ox(e),"PRIVATE")),Tn(new ln("heartbeat",e=>new _N(e),"PRIVATE")),Vt(sp,wv,t),Vt(sp,wv,"esm2020"),Vt("fire-js","")}TN("");function EI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IN=EI,TI=new Zi("auth","Firebase",EI());/**
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
 */const hc=new Fm("@firebase/auth");function SN(t,...e){hc.logLevel<=le.WARN&&hc.warn(`Auth (${ns}): ${t}`,...e)}function Eu(t,...e){hc.logLevel<=le.ERROR&&hc.error(`Auth (${ns}): ${t}`,...e)}/**
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
 */function un(t,...e){throw Bm(t,...e)}function Mt(t,...e){return Bm(t,...e)}function $m(t,e,n){const r={...IN(),[e]:n};return new Zi("auth","Firebase",r).create(e,{appName:t.name})}function St(t){return $m(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jc(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),$m(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return TI.create(t,...e)}function H(t,e,...n){if(!t)throw Bm(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eu(e),new Error(e)}function ur(t,e){t||Xn(e)}/**
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
 */function Ga(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function zm(){return Av()==="http:"||Av()==="https:"}function Av(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function AN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zm()||ix()||"connection"in navigator)?navigator.onLine:!0}function kN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=tx()||sx()}get(){return AN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hm(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class II{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const PN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CN=new fl(3e4,6e4);function Je(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xe(t,e,n,r,i={}){return SI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=co({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return rx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&es(t.emulatorConfig.host)&&(c.credentials="include"),II.fetch()(await AI(t,t.config.apiHost,n,l),c)})}async function SI(t,e,n){t._canInitEmulator=!1;const r={...RN,...e};try{const i=new xN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ia(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ia(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ia(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $m(t,d,c);un(t,d)}}catch(i){if(i instanceof Sn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function mr(t,e,n,r,i={}){const s=await Xe(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function AI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Hm(t.config,i):`${t.config.apiScheme}://${i}`;return PN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function bN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),CN.get())})}}function ia(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function kv(t){return t!==void 0&&t.getResponse!==void 0}function Rv(t){return t!==void 0&&t.enterprise!==void 0}class kI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function NN(t){return(await Xe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function RI(t,e){return Xe(t,"GET","/v2/recaptchaConfig",Je(t,e))}/**
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
 */async function DN(t,e){return Xe(t,"POST","/v1/accounts:delete",e)}async function ON(t,e){return Xe(t,"POST","/v1/accounts:update",e)}async function dc(t,e){return Xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function va(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LN(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=Xc(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:va(Od(i.auth_time)),issuedAtTime:va(Od(i.iat)),expirationTime:va(Od(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Od(t){return Number(t)*1e3}function Xc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const i=lI(n);return i?JSON.parse(i):(Eu("Failed to decode base64 JWT payload"),null)}catch(i){return Eu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pv(t){const e=Xc(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&VN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=va(this.lastLoginAt),this.creationTime=va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qa(t){var f;const e=t.auth,n=await t.getIdToken(),r=await $i(t,dc(e,{idToken:n}));H(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?PI(i.providerUserInfo):[],o=FN(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new lp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function UN(t){const e=ne(t);await Qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function PI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jN(t,e){const n=await SI(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await AI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&es(t.emulatorConfig.host)&&(u.credentials="include"),II.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $N(t,e){return Xe(t,"POST","/v2/accounts:revokeToken",Je(t,e))}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Pv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Sr(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new MN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LN(this,e)}reload(){return UN(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(St(this.auth));const e=await this.getIdToken();return await $i(this,DN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:C,stsTokenManager:P}=n;H(f&&P,e,"internal-error");const b=Ls.fromJSON(this.name,P);H(typeof f=="string",e,"internal-error"),Sr(r,e.name),Sr(i,e.name),H(typeof m=="boolean",e,"internal-error"),H(typeof E=="boolean",e,"internal-error"),Sr(s,e.name),Sr(o,e.name),Sr(l,e.name),Sr(u,e.name),Sr(c,e.name),Sr(d,e.name);const v=new mn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(v.providerData=C.map(_=>({..._}))),u&&(v._redirectEventId=u),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?PI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ls;l.updateFromIdToken(r);const u=new mn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Cv=new Map;function Zn(t){ur(t instanceof Function,"Expected a class definition");let e=Cv.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cv.set(t,e),e)}/**
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
 */class CI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}CI.type="NONE";const bv=CI;/**
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
 */function Tu(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dc(this.auth,{idToken:e}).catch(()=>{});return n?mn._fromGetAccountInfoResponse(this.auth,n,e):null}return mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Zn(bv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Zn(bv);const o=Tu(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await dc(e,{idToken:d}).catch(()=>{});if(!m)break;f=await mn._fromGetAccountInfoResponse(e,m,d)}else f=mn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Vs(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Vs(s,e,r))}}/**
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
 */function xv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LI(e))return"Blackberry";if(VI(e))return"Webos";if(xI(e))return"Safari";if((e.includes("chrome/")||NI(e))&&!e.includes("edge/"))return"Chrome";if(OI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bI(t=_t()){return/firefox\//i.test(t)}function xI(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NI(t=_t()){return/crios\//i.test(t)}function DI(t=_t()){return/iemobile/i.test(t)}function OI(t=_t()){return/android/i.test(t)}function LI(t=_t()){return/blackberry/i.test(t)}function VI(t=_t()){return/webos/i.test(t)}function Wm(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BN(t=_t()){var e;return Wm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function zN(){return ox()&&document.documentMode===10}function MI(t=_t()){return Wm(t)||OI(t)||VI(t)||LI(t)||/windows phone/i.test(t)||DI(t)}/**
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
 */function UI(t,e=[]){let n;switch(t){case"Browser":n=xv(_t());break;case"Worker":n=`${xv(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
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
 */class HN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WN(t,e={}){return Xe(t,"GET","/v2/passwordPolicy",Je(t,e))}/**
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
 */const qN=6;class KN{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class GN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new HN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=TI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dc(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(He(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(St(this));const n=e?ne(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(St(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(St(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WN(this),n=new KN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $N(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&SN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function rt(t){return ne(t)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=fx(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QN(t){pl=t}function qm(t){return pl.loadJS(t)}function YN(){return pl.recaptchaV2Script}function JN(){return pl.recaptchaEnterpriseScript}function XN(){return pl.gapiScript}function FI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const ZN=500,eD=6e4,Xl=1e12;class tD{constructor(e){this.auth=e,this.counter=Xl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new iD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||Xl;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||Xl;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||Xl;return(r=this._widgets.get(n))==null||r.execute(),""}}class nD{constructor(){this.enterprise=new rD}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class rD{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;H(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=sD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},eD)},ZN))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function sD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const oD="recaptcha-enterprise",wa="NO_RECAPTCHA";class jI{constructor(e){this.type=oD,this.auth=rt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{RI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new kI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Rv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(wa)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nD().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Rv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=JN();u.length!==0&&(u+=l),qm(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function qo(t,e,n,r=!1,i=!1){const s=new jI(t);let o;if(i)o=wa;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Qr(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await qo(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await qo(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await qo(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await qo(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await qo(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function aD(t){const e=rt(t),n=await RI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new kI(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new jI(e).verify()}/**
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
 */function lD(t,e){const n=ts(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ti(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function uD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cD(t,e,n){const r=rt(t);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$I(e),{host:o,port:l}=hD(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(ti(c,r.config.emulator)&&ti(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,es(o)?Um(`${s}//${o}${u}`):i||dD()}function $I(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hD(t){const e=$I(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Dv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Dv(o)}}}function Dv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function fD(t,e){return Xe(t,"POST","/v1/accounts:resetPassword",Je(t,e))}async function pD(t,e){return Xe(t,"POST","/v1/accounts:update",e)}async function mD(t,e){return Xe(t,"POST","/v1/accounts:signUp",e)}async function gD(t,e){return Xe(t,"POST","/v1/accounts:update",Je(t,e))}/**
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
 */async function yD(t,e){return mr(t,"POST","/v1/accounts:signInWithPassword",Je(t,e))}async function eh(t,e){return Xe(t,"POST","/v1/accounts:sendOobCode",Je(t,e))}async function _D(t,e){return eh(t,e)}async function vD(t,e){return eh(t,e)}async function wD(t,e){return eh(t,e)}async function ED(t,e){return eh(t,e)}/**
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
 */async function TD(t,e){return mr(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}async function ID(t,e){return mr(t,"POST","/v1/accounts:signInWithEmailLink",Je(t,e))}/**
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
 */class Ya extends Zc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ya(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ya(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qr(e,n,"signInWithPassword",yD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return TD(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qr(e,r,"signUpPassword",mD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ID(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return mr(t,"POST","/v1/accounts:signInWithIdp",Je(t,e))}/**
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
 */const SD="http://localhost";class cr extends Zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:SD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
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
 */async function Ov(t,e){return Xe(t,"POST","/v1/accounts:sendVerificationCode",Je(t,e))}async function AD(t,e){return mr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e))}async function kD(t,e){const n=await mr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,e));if(n.temporaryProof)throw ia(t,"account-exists-with-different-credential",n);return n}const RD={USER_NOT_FOUND:"user-not-found"};async function PD(t,e){const n={...e,operation:"REAUTH"};return mr(t,"POST","/v1/accounts:signInWithPhoneNumber",Je(t,n),RD)}/**
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
 */class Ea extends Zc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ea({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ea({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return AD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return kD(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return PD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ea({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function CD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bD(t){const e=na(ra(t)).link,n=e?na(ra(e)).deep_link_id:null,r=na(ra(t)).deep_link_id;return(r?na(ra(r)).link:null)||r||n||e||t}class th{constructor(e){const n=na(ra(e)),r=n.apiKey??null,i=n.oobCode??null,s=CD(n.mode??null);H(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=bD(e);try{return new th(n)}catch{return null}}}/**
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
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(e,n){return Ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=th.parseLink(n);return H(r,"argument-error"),Ya._fromEmailAndCode(e,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fo extends ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Iu extends fo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return H("providerId"in n&&"signInMethod"in n,"argument-error"),cr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return H(e.idToken||e.accessToken,"argument-error"),cr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Iu.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Iu.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Iu(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class br extends fo{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.FACEBOOK_SIGN_IN_METHOD="facebook.com";br.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class xr extends fo{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
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
 */class Nr extends fo{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
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
 */async function BI(t,e){return mr(t,"POST","/v1/accounts:signUp",Je(t,e))}/**
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
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mn._fromIdTokenResponse(e,r,i),o=Lv(r);return new jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lv(r);return new jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Qj(t){var i;if(He(t.app))return Promise.reject(St(t));const e=rt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new jn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await BI(e,{returnSecureToken:!0}),r=await jn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class fc extends Sn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fc(e,n,r,i)}}function zI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function HI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Yj(t,e){const n=ne(t);await nh(!0,n,e);const{providerUserInfo:r}=await ON(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=HI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function WI(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}async function nh(t,e,n){await Qa(e);const r=HI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";H(r.has(n)===t,e.auth,i)}/**
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
 */async function xD(t,e,n=!1){const{auth:r}=t;if(He(r.app))return Promise.reject(St(r));const i="reauthenticate";try{const s=await $i(t,zI(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Xc(s.idToken);H(o,r,"internal-error");const{sub:l}=o;return H(t.uid===l,r,"user-mismatch"),jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
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
 */async function qI(t,e,n=!1){if(He(t.app))return Promise.reject(St(t));const r="signIn",i=await zI(t,r,e),s=await jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function rh(t,e){return qI(rt(t),e)}async function ND(t,e){const n=ne(t);return await nh(!1,n,e.providerId),WI(n,e)}/**
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
 */async function DD(t,e){return mr(t,"POST","/v1/accounts:signInWithCustomToken",Je(t,e))}/**
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
 */async function Jj(t,e){if(He(t.app))return Promise.reject(St(t));const n=rt(t),r=await DD(n,{token:e,returnSecureToken:!0}),i=await jn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */function ih(t,e,n){var r;H(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),H(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),H(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(H(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(H(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Km(t){const e=rt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xj(t,e,n){const r=rt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&ih(r,i,n),await Qr(r,i,"getOobCode",vD,"EMAIL_PASSWORD_PROVIDER")}async function Zj(t,e,n){await fD(ne(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Km(t),r})}async function e9(t,e){await gD(ne(t),{oobCode:e})}async function OD(t,e,n){if(He(t.app))return Promise.reject(St(t));const r=rt(t),o=await Qr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BI,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Km(t),u}),l=await jn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function LD(t,e,n){return He(t.app)?Promise.reject(St(t)):rh(ne(t),rs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Km(t),r})}/**
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
 */async function t9(t,e,n){const r=rt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){H(l.handleCodeInApp,r,"argument-error"),l&&ih(r,o,l)}s(i,n),await Qr(r,i,"getOobCode",wD,"EMAIL_PASSWORD_PROVIDER")}function n9(t,e){const n=th.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function r9(t,e,n){if(He(t.app))return Promise.reject(St(t));const r=ne(t),i=rs.credentialWithLink(e,n||Ga());return H(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),rh(r,i)}/**
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
 */async function VD(t,e){return Xe(t,"POST","/v1/accounts:createAuthUri",Je(t,e))}/**
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
 */async function i9(t,e){const n=zm()?Ga():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await VD(ne(t),r);return i||[]}async function s9(t,e){const n=ne(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&ih(n.auth,i,e);const{email:s}=await _D(n.auth,i);s!==t.email&&await t.reload()}async function o9(t,e,n){const r=ne(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&ih(r.auth,s,n);const{email:o}=await ED(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function MD(t,e){return Xe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function a9(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ne(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $i(r,MD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function l9(t,e){const n=ne(t);return He(n.auth.app)?Promise.reject(St(n.auth)):KI(n,e,null)}function u9(t,e){return KI(ne(t),null,e)}async function KI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await $i(t,pD(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function UD(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=Xc(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Us(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new FD(r,n);case"github.com":return new jD(r,n);case"google.com":return new $D(r,n);case"twitter.com":return new BD(r,n,t.screenName||null);case"custom":case"anonymous":return new Us(r,null);default:return new Us(r,e,n)}}class Us{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class GI extends Us{constructor(e,n,r,i){super(e,n,r),this.username=i}}class FD extends Us{constructor(e,n){super(e,"facebook.com",n)}}class jD extends GI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class $D extends Us{constructor(e,n){super(e,"google.com",n)}}class BD extends GI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function c9(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:UD(n)}/**
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
 */function zD(t,e){return ne(t).setPersistence(e)}function HD(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function WD(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function qD(t,e,n,r){return ne(t).onAuthStateChanged(e,n,r)}function KD(t){return ne(t).signOut()}function h9(t,e){return rt(t).revokeAccessToken(e)}async function d9(t){return ne(t).delete()}/**
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
 */function Vv(t,e){return Xe(t,"POST","/v2/accounts/mfaEnrollment:start",Je(t,e))}const pc="__sak";/**
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
 */class QI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const GD=1e3,QD=10;class YI extends QI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}YI.type="LOCAL";const JI=YI;/**
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
 */class XI extends QI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}XI.type="SESSION";const ZI=XI;/**
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
 */function YD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await YD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sh.receivers=[];/**
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
 */function oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class JD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=oh("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Be(){return window}function XD(t){Be().location.href=t}/**
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
 */function Gm(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function ZD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function tO(){return Gm()?self:null}/**
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
 */const eS="firebaseLocalStorageDb",nO=1,mc="firebaseLocalStorage",tS="fbase_key";class ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ah(t,e){return t.transaction([mc],e?"readwrite":"readonly").objectStore(mc)}function rO(){const t=indexedDB.deleteDatabase(eS);return new ml(t).toPromise()}function up(){const t=indexedDB.open(eS,nO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mc,{keyPath:tS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mc)?e(r):(r.close(),await rO(),e(await up()))})})}async function Mv(t,e,n){const r=ah(t,!0).put({[tS]:e,value:n});return new ml(r).toPromise()}async function iO(t,e){const n=ah(t,!1).get(e),r=await new ml(n).toPromise();return r===void 0?null:r.value}function Uv(t,e){const n=ah(t,!0).delete(e);return new ml(n).toPromise()}const sO=800,oO=3;class nS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(tO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ZD(),!this.activeServiceWorker)return;this.sender=new JD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await up();return await Mv(e,pc,"1"),await Uv(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ah(i,!1).getAll();return new ml(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nS.type="LOCAL";const aO=nS;/**
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
 */function Fv(t,e){return Xe(t,"POST","/v2/accounts/mfaSignIn:start",Je(t,e))}/**
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
 */const Ld=FI("rcb"),lO=new fl(3e4,6e4);class uO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Be().grecaptcha)!=null&&e.render)}load(e,n=""){return H(cO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&kv(Be().grecaptcha)?Promise.resolve(Be().grecaptcha):new Promise((r,i)=>{const s=Be().setTimeout(()=>{i(Mt(e,"network-request-failed"))},lO.get());Be()[Ld]=()=>{Be().clearTimeout(s),delete Be()[Ld];const l=Be().grecaptcha;if(!l||!kv(l)){i(Mt(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${YN()}?${co({onload:Ld,render:"explicit",hl:n})}`;qm(o).catch(()=>{clearTimeout(s),i(Mt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Be().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function cO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class hO{async load(e){return new tD(e)}clearedOneInstance(){}}/**
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
 */const Ta="recaptcha",dO={theme:"light",type:"image"};class fO{constructor(e,n,r={...dO}){this.parameters=r,this.type=Ta,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=rt(e),this.isInvisible=this.parameters.size==="invisible",H(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;H(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new hO:new uO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){H(!this.parameters.sitekey,this.auth,"argument-error"),H(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),H(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Be()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){H(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){H(zm()&&!Gm(),this.auth,"internal-error"),await pO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await NN(this.auth);H(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return H(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function pO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class rS{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ea._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function mO(t,e,n){if(He(t.app))return Promise.reject(St(t));const r=rt(t),i=await iS(r,e,ne(n));return new rS(i,s=>rh(r,s))}async function f9(t,e,n){const r=ne(t);await nh(!1,r,"phone");const i=await iS(r.auth,e,ne(n));return new rS(i,s=>ND(r,s))}async function iS(t,e,n){var r;if(!t._getRecaptchaConfig())try{await aD(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){H(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Qr(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===wa){H((n==null?void 0:n.type)===Ta,d,"argument-error");const m=await Vd(d,f,n);return Vv(d,m)}return Vv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{H(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;H(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Qr(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===wa){H((n==null?void 0:n.type)===Ta,f,"argument-error");const E=await Vd(f,m,n);return Fv(f,E)}return Fv(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Qr(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===wa){H((n==null?void 0:n.type)===Ta,c,"argument-error");const f=await Vd(c,d,n);return Ov(c,f)}return Ov(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function Vd(t,e,n){H(n.type===Ta,t,"argument-error");const r=await n.verify();H(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function gl(t,e){return e?Zn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qm extends Zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gO(t){return qI(t.auth,new Qm(t),t.bypassAuthState)}function yO(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),xD(n,new Qm(t),t.bypassAuthState)}async function _O(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),WI(n,new Qm(t),t.bypassAuthState)}/**
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
 */class sS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gO;case"linkViaPopup":case"linkViaRedirect":return _O;case"reauthViaPopup":case"reauthViaRedirect":return yO;default:un(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vO=new fl(2e3,1e4);async function jv(t,e,n){if(He(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=rt(t);Jc(t,e,ho);const i=gl(r,n);return new Mr(r,"signInViaPopup",e,i).executeNotNull()}async function p9(t,e,n){const r=ne(t);Jc(r.auth,e,ho);const i=gl(r.auth,n);return new Mr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Mr extends sS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vO.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const wO="pendingRedirect",Su=new Map;class EO extends sS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const r=await TO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TO(t,e){const n=lS(e),r=aS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function oS(t,e){return aS(t)._set(lS(e),"true")}function IO(t,e){Su.set(t._key(),e)}function aS(t){return Zn(t._redirectPersistence)}function lS(t){return Tu(wO,t.config.apiKey,t.name)}/**
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
 */function SO(t,e,n){return AO(t,e,n)}async function AO(t,e,n){if(He(t.app))return Promise.reject(St(t));const r=rt(t);Jc(t,e,ho),await r._initializationPromise;const i=gl(r,n);return await oS(i,r),i._openRedirect(r,e,"signInViaRedirect")}function m9(t,e,n){return kO(t,e,n)}async function kO(t,e,n){const r=ne(t);Jc(r.auth,e,ho),await r.auth._initializationPromise;const i=gl(r.auth,n);await nh(!1,r,e.providerId),await oS(i,r.auth);const s=await PO(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function RO(t,e){return await rt(t)._initializationPromise,uS(t,e,!1)}async function uS(t,e,n=!1){if(He(t.app))return Promise.reject(St(t));const r=rt(t),i=gl(r,e),o=await new EO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function PO(t){const e=oh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const CO=10*60*1e3;class bO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cS(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CO&&this.cachedEventUids.clear(),this.cachedEventUids.has($v(e))}saveEventToCache(e){this.cachedEventUids.add($v(e)),this.lastProcessedEventTime=Date.now()}}function $v(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cS(t);default:return!1}}/**
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
 */async function NO(t,e={}){return Xe(t,"GET","/v1/projects",e)}/**
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
 */const DO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OO=/^https?/;async function LO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NO(t);for(const n of e)try{if(VO(n))return}catch{}un(t,"unauthorized-domain")}function VO(t){const e=Ga(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!OO.test(n))return!1;if(DO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const MO=new fl(3e4,6e4);function Bv(){const t=Be().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UO(t){return new Promise((e,n)=>{var i,s,o;function r(){Bv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bv(),n(Mt(t,"network-request-failed"))},timeout:MO.get()})}if((s=(i=Be().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Be().gapi)!=null&&o.load)r();else{const l=FI("iframefcb");return Be()[l]=()=>{gapi.load?r():n(Mt(t,"network-request-failed"))},qm(`${XN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Au=null,e})}let Au=null;function FO(t){return Au=Au||UO(t),Au}/**
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
 */const jO=new fl(5e3,15e3),$O="__/auth/iframe",BO="emulator/auth/iframe",zO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WO(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hm(e,BO):`https://${t.config.authDomain}/${$O}`,r={apiKey:e.apiKey,appName:t.name,v:ns},i=HO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${co(r).slice(1)}`}async function qO(t){const e=await FO(t),n=Be().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:WO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),l=Be().setTimeout(()=>{s(o)},jO.get());function u(){Be().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const KO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GO=500,QO=600,YO="_blank",JO="http://localhost";class zv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XO(t,e,n,r=GO,i=QO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...KO,width:r.toString(),height:i.toString(),top:s,left:o},c=_t().toLowerCase();n&&(l=NI(c)?YO:n),bI(c)&&(e=e||JO,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,C])=>`${m}${E}=${C},`,"");if(BN(c)&&l!=="_self")return ZO(e||"",l),new zv(null);const f=window.open(e||"",l,d);H(f,t,"popup-blocked");try{f.focus()}catch{}return new zv(f)}function ZO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eL="__/auth/handler",tL="emulator/auth/handler",nL=encodeURIComponent("fac");async function Hv(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:i};if(e instanceof ho){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof fo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${nL}=${encodeURIComponent(u)}`:"";return`${rL(t)}?${co(l).slice(1)}${c}`}function rL({config:t}){return t.emulator?Hm(t,tL):`https://${t.authDomain}/${eL}`}/**
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
 */const Md="webStorageSupport";class iL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZI,this._completeRedirectFn=uS,this._overrideRedirectResult=IO}async _openPopup(e,n,r,i){var o;ur((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Hv(e,n,r,Ga(),i);return XO(e,s,oh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hv(e,n,r,Ga(),i);return XD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ur(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qO(e),r=new bO(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Md];s!==void 0&&n(!!s),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MI()||xI()||Wm()}}const sL=iL;var Wv="@firebase/auth",qv="1.12.2";/**
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
 */class oL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lL(t){Tn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UI(t)},c=new GN(r,i,s,u);return uD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new ln("auth-internal",e=>{const n=rt(e.getProvider("auth").getImmediate());return(r=>new oL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Wv,qv,aL(t)),Vt(Wv,qv,"esm2020")}/**
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
 */const uL=5*60,cL=dI("authIdTokenMaxAge")||uL;let Kv=null;const hL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cL)return;const i=n==null?void 0:n.token;Kv!==i&&(Kv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dL(t=Yc()){const e=ts(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lD(t,{popupRedirectResolver:sL,persistence:[aO,JI,ZI]}),r=dI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hL(s.toString());WD(n,o,()=>o(n.currentUser)),HD(n,l=>o(l))}}const i=uI("auth");return i&&cD(n,`http://${i}`),n}function fL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}QN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",fL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lL("Browser");var pL="firebase",mL="12.11.0";/**
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
 */Vt(pL,mL,"app");var Gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,hS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.F=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(k,R,x){for(var S=Array(arguments.length-2),re=2;re<arguments.length;re++)S[re-2]=arguments[re];return y.prototype[R].apply(k,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,w){w||(w=0);const k=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)k[R]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(R=0;R<16;++R)k[R]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],R=I.g[2];let x=I.g[3],S;S=y+(x^w&(R^x))+k[0]+3614090360&4294967295,y=w+(S<<7&4294967295|S>>>25),S=x+(R^y&(w^R))+k[1]+3905402710&4294967295,x=y+(S<<12&4294967295|S>>>20),S=R+(w^x&(y^w))+k[2]+606105819&4294967295,R=x+(S<<17&4294967295|S>>>15),S=w+(y^R&(x^y))+k[3]+3250441966&4294967295,w=R+(S<<22&4294967295|S>>>10),S=y+(x^w&(R^x))+k[4]+4118548399&4294967295,y=w+(S<<7&4294967295|S>>>25),S=x+(R^y&(w^R))+k[5]+1200080426&4294967295,x=y+(S<<12&4294967295|S>>>20),S=R+(w^x&(y^w))+k[6]+2821735955&4294967295,R=x+(S<<17&4294967295|S>>>15),S=w+(y^R&(x^y))+k[7]+4249261313&4294967295,w=R+(S<<22&4294967295|S>>>10),S=y+(x^w&(R^x))+k[8]+1770035416&4294967295,y=w+(S<<7&4294967295|S>>>25),S=x+(R^y&(w^R))+k[9]+2336552879&4294967295,x=y+(S<<12&4294967295|S>>>20),S=R+(w^x&(y^w))+k[10]+4294925233&4294967295,R=x+(S<<17&4294967295|S>>>15),S=w+(y^R&(x^y))+k[11]+2304563134&4294967295,w=R+(S<<22&4294967295|S>>>10),S=y+(x^w&(R^x))+k[12]+1804603682&4294967295,y=w+(S<<7&4294967295|S>>>25),S=x+(R^y&(w^R))+k[13]+4254626195&4294967295,x=y+(S<<12&4294967295|S>>>20),S=R+(w^x&(y^w))+k[14]+2792965006&4294967295,R=x+(S<<17&4294967295|S>>>15),S=w+(y^R&(x^y))+k[15]+1236535329&4294967295,w=R+(S<<22&4294967295|S>>>10),S=y+(R^x&(w^R))+k[1]+4129170786&4294967295,y=w+(S<<5&4294967295|S>>>27),S=x+(w^R&(y^w))+k[6]+3225465664&4294967295,x=y+(S<<9&4294967295|S>>>23),S=R+(y^w&(x^y))+k[11]+643717713&4294967295,R=x+(S<<14&4294967295|S>>>18),S=w+(x^y&(R^x))+k[0]+3921069994&4294967295,w=R+(S<<20&4294967295|S>>>12),S=y+(R^x&(w^R))+k[5]+3593408605&4294967295,y=w+(S<<5&4294967295|S>>>27),S=x+(w^R&(y^w))+k[10]+38016083&4294967295,x=y+(S<<9&4294967295|S>>>23),S=R+(y^w&(x^y))+k[15]+3634488961&4294967295,R=x+(S<<14&4294967295|S>>>18),S=w+(x^y&(R^x))+k[4]+3889429448&4294967295,w=R+(S<<20&4294967295|S>>>12),S=y+(R^x&(w^R))+k[9]+568446438&4294967295,y=w+(S<<5&4294967295|S>>>27),S=x+(w^R&(y^w))+k[14]+3275163606&4294967295,x=y+(S<<9&4294967295|S>>>23),S=R+(y^w&(x^y))+k[3]+4107603335&4294967295,R=x+(S<<14&4294967295|S>>>18),S=w+(x^y&(R^x))+k[8]+1163531501&4294967295,w=R+(S<<20&4294967295|S>>>12),S=y+(R^x&(w^R))+k[13]+2850285829&4294967295,y=w+(S<<5&4294967295|S>>>27),S=x+(w^R&(y^w))+k[2]+4243563512&4294967295,x=y+(S<<9&4294967295|S>>>23),S=R+(y^w&(x^y))+k[7]+1735328473&4294967295,R=x+(S<<14&4294967295|S>>>18),S=w+(x^y&(R^x))+k[12]+2368359562&4294967295,w=R+(S<<20&4294967295|S>>>12),S=y+(w^R^x)+k[5]+4294588738&4294967295,y=w+(S<<4&4294967295|S>>>28),S=x+(y^w^R)+k[8]+2272392833&4294967295,x=y+(S<<11&4294967295|S>>>21),S=R+(x^y^w)+k[11]+1839030562&4294967295,R=x+(S<<16&4294967295|S>>>16),S=w+(R^x^y)+k[14]+4259657740&4294967295,w=R+(S<<23&4294967295|S>>>9),S=y+(w^R^x)+k[1]+2763975236&4294967295,y=w+(S<<4&4294967295|S>>>28),S=x+(y^w^R)+k[4]+1272893353&4294967295,x=y+(S<<11&4294967295|S>>>21),S=R+(x^y^w)+k[7]+4139469664&4294967295,R=x+(S<<16&4294967295|S>>>16),S=w+(R^x^y)+k[10]+3200236656&4294967295,w=R+(S<<23&4294967295|S>>>9),S=y+(w^R^x)+k[13]+681279174&4294967295,y=w+(S<<4&4294967295|S>>>28),S=x+(y^w^R)+k[0]+3936430074&4294967295,x=y+(S<<11&4294967295|S>>>21),S=R+(x^y^w)+k[3]+3572445317&4294967295,R=x+(S<<16&4294967295|S>>>16),S=w+(R^x^y)+k[6]+76029189&4294967295,w=R+(S<<23&4294967295|S>>>9),S=y+(w^R^x)+k[9]+3654602809&4294967295,y=w+(S<<4&4294967295|S>>>28),S=x+(y^w^R)+k[12]+3873151461&4294967295,x=y+(S<<11&4294967295|S>>>21),S=R+(x^y^w)+k[15]+530742520&4294967295,R=x+(S<<16&4294967295|S>>>16),S=w+(R^x^y)+k[2]+3299628645&4294967295,w=R+(S<<23&4294967295|S>>>9),S=y+(R^(w|~x))+k[0]+4096336452&4294967295,y=w+(S<<6&4294967295|S>>>26),S=x+(w^(y|~R))+k[7]+1126891415&4294967295,x=y+(S<<10&4294967295|S>>>22),S=R+(y^(x|~w))+k[14]+2878612391&4294967295,R=x+(S<<15&4294967295|S>>>17),S=w+(x^(R|~y))+k[5]+4237533241&4294967295,w=R+(S<<21&4294967295|S>>>11),S=y+(R^(w|~x))+k[12]+1700485571&4294967295,y=w+(S<<6&4294967295|S>>>26),S=x+(w^(y|~R))+k[3]+2399980690&4294967295,x=y+(S<<10&4294967295|S>>>22),S=R+(y^(x|~w))+k[10]+4293915773&4294967295,R=x+(S<<15&4294967295|S>>>17),S=w+(x^(R|~y))+k[1]+2240044497&4294967295,w=R+(S<<21&4294967295|S>>>11),S=y+(R^(w|~x))+k[8]+1873313359&4294967295,y=w+(S<<6&4294967295|S>>>26),S=x+(w^(y|~R))+k[15]+4264355552&4294967295,x=y+(S<<10&4294967295|S>>>22),S=R+(y^(x|~w))+k[6]+2734768916&4294967295,R=x+(S<<15&4294967295|S>>>17),S=w+(x^(R|~y))+k[13]+1309151649&4294967295,w=R+(S<<21&4294967295|S>>>11),S=y+(R^(w|~x))+k[4]+4149444226&4294967295,y=w+(S<<6&4294967295|S>>>26),S=x+(w^(y|~R))+k[11]+3174756917&4294967295,x=y+(S<<10&4294967295|S>>>22),S=R+(y^(x|~w))+k[2]+718787259&4294967295,R=x+(S<<15&4294967295|S>>>17),S=w+(x^(R|~y))+k[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(R+(S<<21&4294967295|S>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const w=y-this.blockSize,k=this.C;let R=this.h,x=0;for(;x<y;){if(R==0)for(;x<=w;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(k[R++]=I.charCodeAt(x++),R==this.blockSize){i(this,k),R=0;break}}else for(;x<y;)if(k[R++]=I[x++],R==this.blockSize){i(this,k),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,w=0;w<4;++w)for(let k=0;k<32;k+=8)I[y++]=this.g[w]>>>k&255;return I};function s(I,y){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;const w=[];let k=!0;for(let R=I.length-1;R>=0;R--){const x=I[R]|0;k&&x==y||(w[R]=x,k=!1)}this.g=w}var l={};function u(I){return-128<=I&&I<128?s(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(I<0)return b(c(-I));const y=[];let w=1;for(let k=0;I>=w;k++)y[k]=I/w|0,w*=4294967296;return new o(y,0)}function d(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return b(d(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(y,8));let k=f;for(let x=0;x<I.length;x+=8){var R=Math.min(8,I.length-x);const S=parseInt(I.substring(x,x+R),y);R<8?(R=c(Math.pow(y,R)),k=k.j(R).add(c(S))):(k=k.j(w),k=k.add(c(S)))}return k}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();let I=0,y=1;for(let w=0;w<this.g.length;w++){const k=this.i(w);I+=(k>=0?k:4294967296+k)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(P(this))return"-"+b(this).toString(I);const y=c(Math.pow(I,6));var w=this;let k="";for(;;){const R=O(w,y).g;w=v(w,R.j(y));let x=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=R,C(w))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=v(this,I),P(I)?-1:C(I)?0:1};function b(I){const y=I.g.length,w=[];for(let k=0;k<y;k++)w[k]=~I.g[k];return new o(w,~I.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),w=[];let k=0;for(let R=0;R<=y;R++){let x=k+(this.i(R)&65535)+(I.i(R)&65535),S=(x>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);k=S>>>16,x&=65535,S&=65535,w[R]=S<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function v(I,y){return I.add(b(y))}t.j=function(I){if(C(this)||C(I))return f;if(P(this))return P(I)?b(this).j(b(I)):b(b(this).j(I));if(P(I))return b(this.j(b(I)));if(this.l(E)<0&&I.l(E)<0)return c(this.m()*I.m());const y=this.g.length+I.g.length,w=[];for(var k=0;k<2*y;k++)w[k]=0;for(k=0;k<this.g.length;k++)for(let R=0;R<I.g.length;R++){const x=this.i(k)>>>16,S=this.i(k)&65535,re=I.i(R)>>>16,me=I.i(R)&65535;w[2*k+2*R]+=S*me,_(w,2*k+2*R),w[2*k+2*R+1]+=x*me,_(w,2*k+2*R+1),w[2*k+2*R+1]+=S*re,_(w,2*k+2*R+1),w[2*k+2*R+2]+=x*re,_(w,2*k+2*R+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function T(I,y){this.g=I,this.h=y}function O(I,y){if(C(y))throw Error("division by zero");if(C(I))return new T(f,f);if(P(I))return y=O(b(I),y),new T(b(y.g),b(y.h));if(P(y))return y=O(I,b(y)),new T(b(y.g),y.h);if(I.g.length>30){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,k=y;k.l(I)<=0;)w=U(w),k=U(k);var R=B(w,1),x=B(k,1);for(k=B(k,2),w=B(w,2);!C(k);){var S=x.add(k);S.l(I)<=0&&(R=R.add(w),x=S),k=B(k,1),w=B(w,1)}return y=v(I,R.j(y)),new T(R,y)}for(R=f;I.l(y)>=0;){for(w=Math.max(1,Math.floor(I.m()/y.m())),k=Math.ceil(Math.log(w)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=c(w),S=x.j(y);P(S)||S.l(I)>0;)w-=k,x=c(w),S=x.j(y);C(x)&&(x=m),R=R.add(x),I=v(I,S)}return new T(R,I)}t.B=function(I){return O(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let k=0;k<y;k++)w[k]=this.i(k)&I.i(k);return new o(w,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let k=0;k<y;k++)w[k]=this.i(k)|I.i(k);return new o(w,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let k=0;k<y;k++)w[k]=this.i(k)^I.i(k);return new o(w,this.h^I.h)};function U(I){const y=I.g.length+1,w=[];for(let k=0;k<y;k++)w[k]=I.i(k)<<1|I.i(k-1)>>>31;return new o(w,I.h)}function B(I,y){const w=y>>5;y%=32;const k=I.g.length-w,R=[];for(let x=0;x<k;x++)R[x]=y>0?I.i(x+w)>>>y|I.i(x+w+1)<<32-y:I.i(x+w);return new o(R,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,hS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Yr=o}).apply(typeof Gv<"u"?Gv:typeof self<"u"?self:typeof window<"u"?window:{});var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dS,sa,fS,ku,cp,pS,mS,gS;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zl=="object"&&Zl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var N=a[g];if(!(N in p))break e;p=p[N]}a=a[a.length-1],g=p[a],h=h(g),h!=g&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&p.push([g,h[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,N,L){for(var z=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)z[ie-2]=arguments[ie];return h.prototype[N].apply(g,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const h=a.length;if(h>0){const p=Array(h);for(let g=0;g<h;g++)p[g]=a[g];return p}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const N=arguments[g];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const L=N.length||0;a.length=p+L;for(let z=0;z<L;z++)a[p+z]=N[z]}else a.push(N)}}class P{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function b(a){o.setTimeout(()=>{throw a},0)}function v(){var a=I;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,p){const g=T.get();g.set(h,p),this.h?this.h.next=g:this.g=g,this.h=g}}var T=new P(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let U,B=!1,I=new _,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=v();){try{a.h.call(a.g)}catch(p){b(p)}var h=T;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}B=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function re(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(re,R),re.prototype.init=function(a,h){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&re.Z.h.call(this)},re.prototype.h=function(){re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var me="closure_listenable_"+(Math.random()*1e6|0),Pt=0;function Qt(a,h,p,g,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!g,this.ha=N,this.key=++Pt,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function F(a,h,p){for(const g in a)h.call(p,a[g],g,a)}function j(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function Y(a){const h={};for(const p in a)h[p]=a[p];return h}const se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ee(a,h){let p,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(p in g)a[p]=g[p];for(let L=0;L<se.length;L++)p=se[L],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function Te(a){this.src=a,this.g={},this.h=0}Te.prototype.add=function(a,h,p,g,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const z=je(a,h,g,N);return z>-1?(h=a[z],p||(h.fa=!1)):(h=new Qt(h,this.src,L,!!g,N),h.fa=p,a.push(h)),h};function An(a,h){const p=h.type;if(p in a.g){var g=a.g[p],N=Array.prototype.indexOf.call(g,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(g,N,1),L&&(W(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function je(a,h,p,g){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==g)return N}return-1}var Yt="closure_lm_"+(Math.random()*1e6|0),os={};function gi(a,h,p,g,N){if(g&&g.once)return Yg(a,h,p,g,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)gi(a,h[L],p,g,N);return null}return p=Vh(p),a&&a[me]?a.J(h,p,l(g)?!!g.capture:!!g,N):zn(a,h,p,!1,g,N)}function zn(a,h,p,g,N,L){if(!h)throw Error("Invalid event type");const z=l(N)?!!N.capture:!!N;let ie=Oh(a);if(ie||(a[Yt]=ie=new Te(a)),p=ie.add(h,p,g,z,L),p.proxy)return p;if(g=z1(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)x||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),g,N);else if(a.attachEvent)a.attachEvent(Xg(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function z1(){function a(p){return h.call(a.src,a.listener,p)}const h=H1;return a}function Yg(a,h,p,g,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Yg(a,h[L],p,g,N);return null}return p=Vh(p),a&&a[me]?a.K(h,p,l(g)?!!g.capture:!!g,N):zn(a,h,p,!0,g,N)}function Jg(a,h,p,g,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)Jg(a,h[L],p,g,N);else g=l(g)?!!g.capture:!!g,p=Vh(p),a&&a[me]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=je(h,p,g,N),p>-1&&(W(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=Oh(a))&&(h=a.g[h.toString()],a=-1,h&&(a=je(h,p,g,N)),(p=a>-1?h[a]:null)&&Dh(p))}function Dh(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[me])An(h.i,a);else{var p=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(p,g,a.capture):h.detachEvent?h.detachEvent(Xg(p),g):h.addListener&&h.removeListener&&h.removeListener(g),(p=Oh(h))?(An(p,a),p.h==0&&(p.src=null,h[Yt]=null)):W(a)}}}function Xg(a){return a in os?os[a]:os[a]="on"+a}function H1(a,h){if(a.da)a=!0;else{h=new re(h,this);const p=a.listener,g=a.ha||a.src;a.fa&&Dh(a),a=p.call(g,h)}return a}function Oh(a){return a=a[Yt],a instanceof Te?a:null}var Lh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Vh(a){return typeof a=="function"?a:(a[Lh]||(a[Lh]=function(h){return a.handleEvent(h)}),a[Lh])}function ct(){k.call(this),this.i=new Te(this),this.M=this,this.G=null}f(ct,k),ct.prototype[me]=!0,ct.prototype.removeEventListener=function(a,h,p,g){Jg(this,a,h,p,g)};function vt(a,h){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var N=h;h=new R(g,a),Ee(h,N)}N=!0;let L,z;if(p)for(z=p.length-1;z>=0;z--)L=h.g=p[z],N=Tl(L,g,!0,h)&&N;if(L=h.g=a,N=Tl(L,g,!0,h)&&N,N=Tl(L,g,!1,h)&&N,p)for(z=0;z<p.length;z++)L=h.g=p[z],N=Tl(L,g,!1,h)&&N}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let g=0;g<p.length;g++)W(p[g]);delete a.g[h],a.h--}}this.G=null},ct.prototype.J=function(a,h,p,g){return this.i.add(String(a),h,!1,p,g)},ct.prototype.K=function(a,h,p,g){return this.i.add(String(a),h,!0,p,g)};function Tl(a,h,p,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const z=h[L];if(z&&!z.da&&z.capture==p){const ie=z.listener,Ke=z.ha||z.src;z.fa&&An(a.i,z),N=ie.call(Ke,g)!==!1&&N}}return N&&!g.defaultPrevented}function W1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Zg(a){a.g=W1(()=>{a.g=null,a.i&&(a.i=!1,Zg(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class q1 extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Zg(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(a){k.call(this),this.h=a,this.g={}}f(To,k);var ey=[];function ty(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&Dh(h)},a),a.g={}}To.prototype.N=function(){To.Z.N.call(this),ty(this)},To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mh=o.JSON.stringify,K1=o.JSON.parse,G1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ny(){}function ry(){}var Io={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Uh(){R.call(this,"d")}f(Uh,R);function Fh(){R.call(this,"c")}f(Fh,R);var yi={},iy=null;function Il(){return iy=iy||new ct}yi.Ia="serverreachability";function sy(a){R.call(this,yi.Ia,a)}f(sy,R);function So(a){const h=Il();vt(h,new sy(h))}yi.STAT_EVENT="statevent";function oy(a,h){R.call(this,yi.STAT_EVENT,a),this.stat=h}f(oy,R);function wt(a){const h=Il();vt(h,new oy(h,a))}yi.Ja="timingevent";function ay(a,h){R.call(this,yi.Ja,a),this.size=h}f(ay,R);function Ao(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ko(){this.g=!0}ko.prototype.ua=function(){this.g=!1};function Q1(a,h,p,g,N,L){a.info(function(){if(a.g)if(L){var z="",ie=L.split("&");for(let ye=0;ye<ie.length;ye++){var Ke=ie[ye].split("=");if(Ke.length>1){const Ze=Ke[0];Ke=Ke[1];const Rn=Ze.split("_");z=Rn.length>=2&&Rn[1]=="type"?z+(Ze+"="+Ke+"&"):z+(Ze+"=redacted&")}}}else z=null;else z=L;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+h+`
`+p+`
`+z})}function Y1(a,h,p,g,N,L,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+z})}function as(a,h,p,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+X1(a,p)+(g?" "+g:"")})}function J1(a,h){a.info(function(){return"TIMEOUT: "+h})}ko.prototype.info=function(){};function X1(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let z=1;z<g.length;z++)g[z]=""}}}}return Mh(L)}catch{return h}}var Sl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ly={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},uy;function jh(){}f(jh,ny),jh.prototype.g=function(){return new XMLHttpRequest},uy=new jh;function Ro(a){return encodeURIComponent(String(a))}function Z1(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function yr(a,h,p,g){this.j=a,this.i=h,this.l=p,this.S=g||1,this.V=new To(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new cy}function cy(){this.i=null,this.g="",this.h=!1}var hy={},$h={};function Bh(a,h,p){a.M=1,a.A=kl(kn(h)),a.u=p,a.R=!0,dy(a,null)}function dy(a,h){a.F=Date.now(),Al(a),a.B=kn(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Ay(p.i,"t",g),a.C=0,p=a.j.L,a.h=new cy,a.g=zy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new q1(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,g=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(ey[0]=N.toString()),N=ey);for(let L=0;L<N.length;L++){const z=gi(p,N[L],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?Y(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),So(),Q1(a.i,a.v,a.B,a.l,a.S,a.u)}yr.prototype.ba=function(a){a=a.target;const h=this.O;h&&wr(a)==3?h.j():this.Y(a)},yr.prototype.Y=function(a){try{if(a==this.g)e:{const ie=wr(this.g),Ke=this.g.ya(),ye=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Ny(this.g)))){this.K||ie!=4||Ke==7||(Ke==8||ye<=0?So(3):So(2)),zh(this);var h=this.g.ca();this.X=h;var p=ek(this);if(this.o=h==200,Y1(this.i,this.v,this.B,this.l,this.S,ie,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(g)){var L=g;break t}}L=null}if(a=L)as(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hh(this,a);else{this.o=!1,this.m=3,wt(12),_i(this),Po(this);break e}}if(this.R){a=!0;let Ze;for(;!this.K&&this.C<p.length;)if(Ze=tk(this,p),Ze==$h){ie==4&&(this.m=4,wt(14),a=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==hy){this.m=4,wt(15),as(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else as(this.i,this.l,Ze,null),Hh(this,Ze);if(fy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||p.length!=0||this.h.h||(this.m=1,wt(16),a=!1),this.o=this.o&&a,!a)as(this.i,this.l,p,"[Invalid Chunked Response]"),_i(this),Po(this);else if(p.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Xh(z),z.P=!0,wt(11))}}else as(this.i,this.l,p,null),Hh(this,p);ie==4&&_i(this),this.o&&!this.K&&(ie==4?Fy(this.j,this):(this.o=!1,Al(this)))}else mk(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,wt(12)):(this.m=0,wt(13)),_i(this),Po(this)}}}catch{}finally{}};function ek(a){if(!fy(a))return a.g.la();const h=Ny(a.g);if(h==="")return"";let p="";const g=h.length,N=wr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return _i(a),Po(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<g;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(N&&L==g-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function fy(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function tk(a,h){var p=a.C,g=h.indexOf(`
`,p);return g==-1?$h:(p=Number(h.substring(p,g)),isNaN(p)?hy:(g+=1,g+p>h.length?$h:(h=h.slice(g,g+p),a.C=g+p,h)))}yr.prototype.cancel=function(){this.K=!0,_i(this)};function Al(a){a.T=Date.now()+a.H,py(a,a.H)}function py(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ao(c(a.aa,a),h)}function zh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}yr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(J1(this.i,this.B),this.M!=2&&(So(),wt(17)),_i(this),this.m=2,Po(this)):py(this,this.T-a)};function Po(a){a.j.I==0||a.K||Fy(a.j,a)}function _i(a){zh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ty(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Hh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Wh(p.h,a))){if(!a.L&&Wh(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)xl(p),Cl(p);else break e;Jh(p),wt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ao(c(p.Va,p),6e3));yy(p.h)<=1&&p.ta&&(p.ta=void 0)}else wi(p,11)}else if((a.L||p.g==a)&&xl(p),!S(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let ye=N[h];const Ze=ye[0];if(!(Ze<=p.K))if(p.K=Ze,ye=ye[1],p.I==2)if(ye[0]=="c"){p.M=ye[1],p.ba=ye[2];const Rn=ye[3];Rn!=null&&(p.ka=Rn,p.j.info("VER="+p.ka));const Ei=ye[4];Ei!=null&&(p.za=Ei,p.j.info("SVER="+p.za));const Er=ye[5];Er!=null&&typeof Er=="number"&&Er>0&&(g=1.5*Er,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Tr=a.g;if(Tr){const Dl=Tr.g?Tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dl){var L=g.h;L.g||Dl.indexOf("spdy")==-1&&Dl.indexOf("quic")==-1&&Dl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(qh(L,L.h),L.h=null))}if(g.G){const Zh=Tr.g?Tr.g.getResponseHeader("X-HTTP-Session-Id"):null;Zh&&(g.wa=Zh,Ie(g.J,g.G,Zh))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var z=a;if(g.na=By(g,g.L?g.ba:null,g.W),z.L){_y(g.h,z);var ie=z,Ke=g.O;Ke&&(ie.H=Ke),ie.D&&(zh(ie),Al(ie)),g.g=z}else My(g);p.i.length>0&&bl(p)}else ye[0]!="stop"&&ye[0]!="close"||wi(p,7);else p.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?wi(p,7):Yh(p):ye[0]!="noop"&&p.l&&p.l.qa(ye),p.A=0)}}So(4)}catch{}}var nk=class{constructor(a,h){this.g=a,this.map=h}};function my(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gy(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yy(a){return a.h?1:a.g?a.g.size:0}function Wh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function qh(a,h){a.g?a.g.add(h):a.h=h}function _y(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}my.prototype.cancel=function(){if(this.i=vy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vy(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return E(a.i)}var wy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rk(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let N,L=null;g>=0?(N=a[p].substring(0,g),L=a[p].substring(g+1)):N=a[p],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function _r(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof _r?(this.l=a.l,Co(this,a.j),this.o=a.o,this.g=a.g,bo(this,a.u),this.h=a.h,Kh(this,ky(a.i)),this.m=a.m):a&&(h=String(a).match(wy))?(this.l=!1,Co(this,h[1]||"",!0),this.o=xo(h[2]||""),this.g=xo(h[3]||"",!0),bo(this,h[4]),this.h=xo(h[5]||"",!0),Kh(this,h[6]||"",!0),this.m=xo(h[7]||"")):(this.l=!1,this.i=new Do(null,this.l))}_r.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(No(h,Ey,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(No(h,Ey,!0),"@"),a.push(Ro(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(No(p,p.charAt(0)=="/"?ok:sk,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",No(p,lk)),a.join("")},_r.prototype.resolve=function(a){const h=kn(this);let p=!!a.j;p?Co(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var g=a.h;if(p)bo(h,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=h.h.lastIndexOf("/");N!=-1&&(g=h.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let z=0;z<N.length;){const ie=N[z++];ie=="."?g&&z==N.length&&L.push(""):ie==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),g&&z==N.length&&L.push("")):(L.push(ie),g=!0)}g=L.join("/")}else g=N}return p?h.h=g:p=a.i.toString()!=="",p?Kh(h,ky(a.i)):p=!!a.m,p&&(h.m=a.m),h};function kn(a){return new _r(a)}function Co(a,h,p){a.j=p?xo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function bo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Kh(a,h,p){h instanceof Do?(a.i=h,uk(a.i,a.l)):(p||(h=No(h,ak)),a.i=new Do(h,a.l))}function Ie(a,h,p){a.i.set(h,p)}function kl(a){return Ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function xo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function No(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,ik),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ik(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ey=/[#\/\?@]/g,sk=/[#\?:]/g,ok=/[#\?]/g,ak=/[#\?@]/g,lk=/#/g;function Do(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function vi(a){a.g||(a.g=new Map,a.h=0,a.i&&rk(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Do.prototype,t.add=function(a,h){vi(this),this.i=null,a=ls(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Ty(a,h){vi(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Iy(a,h){return vi(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){vi(this),this.g.forEach(function(p,g){p.forEach(function(N){a.call(h,N,g,this)},this)},this)};function Sy(a,h){vi(a);let p=[];if(typeof h=="string")Iy(a,h)&&(p=p.concat(a.g.get(ls(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return vi(this),this.i=null,a=ls(this,a),Iy(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Sy(this,a),a.length>0?String(a[0]):h):h};function Ay(a,h,p){Ty(a,h),p.length>0&&(a.i=null,a.g.set(ls(a,h),E(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var p=h[g];const N=Ro(p);p=Sy(this,p);for(let L=0;L<p.length;L++){let z=N;p[L]!==""&&(z+="="+Ro(p[L])),a.push(z)}}return this.i=a.join("&")};function ky(a){const h=new Do;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uk(a,h){h&&!a.j&&(vi(a),a.i=null,a.g.forEach(function(p,g){const N=g.toLowerCase();g!=N&&(Ty(this,g),Ay(this,N,p))},a)),a.j=h}function ck(a,h){const p=new ko;if(o.Image){const g=new Image;g.onload=d(vr,p,"TestLoadImage: loaded",!0,h,g),g.onerror=d(vr,p,"TestLoadImage: error",!1,h,g),g.onabort=d(vr,p,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(vr,p,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function hk(a,h){const p=new ko,g=new AbortController,N=setTimeout(()=>{g.abort(),vr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(L=>{clearTimeout(N),L.ok?vr(p,"TestPingServer: ok",!0,h):vr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),vr(p,"TestPingServer: error",!1,h)})}function vr(a,h,p,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(p)}catch{}}function dk(){this.g=new G1}function Gh(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Gh,ny),Gh.prototype.g=function(){return new Rl(this.i,this.h)};function Rl(a,h){ct.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Rl,ct),t=Rl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Lo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oo(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Lo(this)),this.g&&(this.readyState=3,Lo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ry(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ry(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Oo(this):Lo(this),this.readyState==3&&Ry(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Oo(this))},t.Na=function(a){this.g&&(this.response=a,Oo(this))},t.ga=function(){this.g&&Oo(this)};function Oo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Lo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Lo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Py(a){let h="";return F(a,function(p,g){h+=g,h+=":",h+=p,h+=`\r
`}),h}function Qh(a,h,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=Py(p),typeof a=="string"?p!=null&&Ro(p):Ie(a,h,p))}function Ne(a){ct.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ne,ct);var fk=/^https?$/i,pk=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():uy.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Cy(this,L);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)p.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const L of g.keys())p.set(L,g.get(L));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(pk,h,void 0)>=0)||g||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of p)this.g.setRequestHeader(L,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Cy(this,L)}};function Cy(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,by(a),Pl(a)}function by(a){a.A||(a.A=!0,vt(a,"complete"),vt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,vt(this,"complete"),vt(this,"abort"),Pl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pl(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?xy(this):this.Xa())},t.Xa=function(){xy(this)};function xy(a){if(a.h&&typeof s<"u"){if(a.v&&wr(a)==4)setTimeout(a.Ca.bind(a),0);else if(vt(a,"readystatechange"),wr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var g;if(g=L===0){let z=String(a.D).match(wy)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),g=!fk.test(z?z.toLowerCase():"")}p=g}if(p)vt(a,"complete"),vt(a,"success");else{a.o=6;try{var N=wr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",by(a)}}finally{Pl(a)}}}}function Pl(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||vt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function wr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return wr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),K1(h)}};function Ny(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mk(a){const h={};a=(a.g&&wr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(S(a[g]))continue;var p=Z1(a[g]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}j(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Dy(a){this.za=0,this.i=[],this.j=new ko,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vo("baseRetryDelayMs",5e3,a),this.Za=Vo("retryDelaySeedMs",1e4,a),this.Ta=Vo("forwardChannelMaxRetries",2,a),this.va=Vo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new my(a&&a.concurrentRequestLimit),this.Ba=new dk,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Dy.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,g){wt(0),this.W=a,this.H=h||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=By(this,null,this.W),bl(this)};function Yh(a){if(Oy(a),a.I==3){var h=a.V++,p=kn(a.J);if(Ie(p,"SID",a.M),Ie(p,"RID",h),Ie(p,"TYPE","terminate"),Mo(a,p),h=new yr(a,a.j,h),h.M=2,h.A=kl(kn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=zy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Al(h)}$y(a)}function Cl(a){a.g&&(Xh(a),a.g.cancel(),a.g=null)}function Oy(a){Cl(a),a.v&&(o.clearTimeout(a.v),a.v=null),xl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function bl(a){if(!gy(a.h)&&!a.m){a.m=!0;var h=a.Ea;U||y(),B||(U(),B=!0),I.add(h,a),a.D=0}}function gk(a,h){return yy(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ao(c(a.Ea,a,h),jy(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new yr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=Y(L),Ee(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Vy(this,N,h),p=kn(this.J),Ie(p,"RID",a),Ie(p,"CVER",22),this.G&&Ie(p,"X-HTTP-Session-Id",this.G),Mo(this,p),L&&(this.R?h="headers="+Ro(Py(L))+"&"+h:this.u&&Qh(p,this.u,L)),qh(this.h,N),this.Ra&&Ie(p,"TYPE","init"),this.S?(Ie(p,"$req",h),Ie(p,"SID","null"),N.U=!0,Bh(N,p,null)):Bh(N,p,h),this.I=2}}else this.I==3&&(a?Ly(this,a):this.i.length==0||gy(this.h)||Ly(this))};function Ly(a,h){var p;h?p=h.l:p=a.V++;const g=kn(a.J);Ie(g,"SID",a.M),Ie(g,"RID",p),Ie(g,"AID",a.K),Mo(a,g),a.u&&a.o&&Qh(g,a.u,a.o),p=new yr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Vy(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),qh(a.h,p),Bh(p,g,h)}function Mo(a,h){a.H&&F(a.H,function(p,g){Ie(h,g,p)}),a.l&&F({},function(p,g){Ie(h,g,p)})}function Vy(a,h,p){p=Math.min(a.i.length,p);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let ie=-1;for(;;){const Ke=["count="+p];ie==-1?p>0?(ie=N[0].g,Ke.push("ofs="+ie)):ie=0:Ke.push("ofs="+ie);let ye=!0;for(let Ze=0;Ze<p;Ze++){var L=N[Ze].g;const Rn=N[Ze].map;if(L-=ie,L<0)ie=Math.max(0,N[Ze].g-100),ye=!1;else try{L="req"+L+"_"||"";try{var z=Rn instanceof Map?Rn:Object.entries(Rn);for(const[Ei,Er]of z){let Tr=Er;l(Er)&&(Tr=Mh(Er)),Ke.push(L+Ei+"="+encodeURIComponent(Tr))}}catch(Ei){throw Ke.push(L+"type="+encodeURIComponent("_badmap")),Ei}}catch{g&&g(Rn)}}if(ye){z=Ke.join("&");break e}}z=void 0}return a=a.i.splice(0,p),h.G=a,z}function My(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;U||y(),B||(U(),B=!0),I.add(h,a),a.A=0}}function Jh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ao(c(a.Da,a),jy(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Uy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ao(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,wt(10),Cl(this),Uy(this))};function Xh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Uy(a){a.g=new yr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=kn(a.na);Ie(h,"RID","rpc"),Ie(h,"SID",a.M),Ie(h,"AID",a.K),Ie(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ie(h,"TO",a.ia),Ie(h,"TYPE","xmlhttp"),Mo(a,h),a.u&&a.o&&Qh(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=kl(kn(h)),p.u=null,p.R=!0,dy(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Cl(this),Jh(this),wt(19))};function xl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Fy(a,h){var p=null;if(a.g==h){xl(a),Xh(a),a.g=null;var g=2}else if(Wh(a.h,h))p=h.G,_y(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;g=Il(),vt(g,new ay(g,p)),bl(a)}else My(a);else if(N=h.m,N==3||N==0&&h.X>0||!(g==1&&gk(a,h)||g==2&&Jh(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:wi(a,5);break;case 4:wi(a,10);break;case 3:wi(a,6);break;default:wi(a,2)}}}function jy(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function wi(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),g=a.Ua;const N=!g;g=new _r(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Co(g,"https"),kl(g),N?ck(g.toString(),p):hk(g.toString(),p)}else wt(2);a.I=0,a.l&&a.l.pa(h),$y(a),Oy(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function $y(a){if(a.I=0,a.ja=[],a.l){const h=vy(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function By(a,h,p){var g=p instanceof _r?kn(p):new _r(p);if(g.g!="")h&&(g.g=h+"."+g.g),bo(g,g.u);else{var N=o.location;g=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new _r(null);g&&Co(L,g),h&&(L.g=h),N&&bo(L,N),p&&(L.h=p),g=L}return p=a.G,h=a.wa,p&&h&&Ie(g,p,h),Ie(g,"VER",a.ka),Mo(a,g),g}function zy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ne(new Gh({ab:p})):new Ne(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hy(){}t=Hy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Nl(){}Nl.prototype.g=function(a,h){return new Ft(a,h)};function Ft(a,h){ct.call(this),this.g=new Dy(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}f(Ft,ct),Ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ft.prototype.close=function(){Yh(this.g)},Ft.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Mh(a),a=p);h.i.push(new nk(h.Ya++,a)),h.I==3&&bl(h)},Ft.prototype.N=function(){this.g.l=null,delete this.j,Yh(this.g),delete this.g,Ft.Z.N.call(this)};function Wy(a){Uh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Wy,Uh);function qy(){Fh.call(this),this.status=1}f(qy,Fh);function us(a){this.g=a}f(us,Hy),us.prototype.ra=function(){vt(this.g,"a")},us.prototype.qa=function(a){vt(this.g,new Wy(a))},us.prototype.pa=function(a){vt(this.g,new qy)},us.prototype.oa=function(){vt(this.g,"b")},Nl.prototype.createWebChannel=Nl.prototype.g,Ft.prototype.send=Ft.prototype.o,Ft.prototype.open=Ft.prototype.m,Ft.prototype.close=Ft.prototype.close,gS=function(){return new Nl},mS=function(){return Il()},pS=yi,cp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Sl.NO_ERROR=0,Sl.TIMEOUT=8,Sl.HTTP_ERROR=6,ku=Sl,ly.COMPLETE="complete",fS=ly,ry.EventType=Io,Io.OPEN="a",Io.CLOSE="b",Io.ERROR="c",Io.MESSAGE="d",ct.prototype.listen=ct.prototype.J,sa=ry,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,dS=Ne}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let po="12.11.0";function gL(t){po=t}/**
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
 */const Bi=new Fm("@firebase/firestore");function ds(){return Bi.logLevel}function K(t,...e){if(Bi.logLevel<=le.DEBUG){const n=e.map(Ym);Bi.debug(`Firestore (${po}): ${t}`,...n)}}function hr(t,...e){if(Bi.logLevel<=le.ERROR){const n=e.map(Ym);Bi.error(`Firestore (${po}): ${t}`,...n)}}function zi(t,...e){if(Bi.logLevel<=le.WARN){const n=e.map(Ym);Bi.warn(`Firestore (${po}): ${t}`,...n)}}function Ym(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yS(t,r,n)}function yS(t,e,n){let r=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw hr(r),new Error(r)}function pe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||yS(e,i,r)}function te(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _S{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class _L{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vL{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new _S(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class wL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class EL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new wL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Qv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,He(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Qv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Qv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function IL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=IL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function hp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Ud(i)===Ud(s)?ue(i,s):Ud(i)?1:-1}return ue(t.length,e.length)}const SL=55296,AL=57343;function Ud(t){const e=t.charCodeAt(0);return e>=SL&&e<=AL}function Xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Yv="__name__";class bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=bn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ue(e.length,n.length)}static compareSegments(e,n){const r=bn.isNumericId(e),i=bn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?bn.extractNumericId(e).compare(bn.extractNumericId(n)):hp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class ve extends bn{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const kL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends bn{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return kL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yv}static keyField(){return new ot([Yv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(ve.fromString(e))}static fromName(e){return new X(ve.fromString(e).popFirst(5))}static empty(){return new X(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new ve(e.slice()))}}/**
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
 */function vS(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RL(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jv(t){if(!X.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xv(t){if(X.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function lh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lh(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function PL(t,e){if(e<=0)throw new q(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function yl(t,e){if(!wS(t))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const Zv=-62135596800,ew=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ew);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zv)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ew}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yl(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:qe("string",Ae._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ae(0,0))}static max(){return new ee(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ja=-1;function CL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new ni(i,X.empty(),e)}function bL(t){return new ni(t.readTime,t.key,Ja)}class ni{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ni(ee.min(),X.empty(),Ja)}static max(){return new ni(ee.max(),X.empty(),Ja)}}function xL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const NL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==NL)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function OL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function go(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}uh.ce=-1;/**
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
 */const Xm=-1;function ch(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function LL(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ES="";function VL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tw(e)),e=ML(t.get(n),e);return tw(e)}function ML(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case ES:n+="";break;default:n+=s}}return n}function tw(t){return t+ES+""}/**
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
 */function nw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eu(this.root,e,this.comparator,!0)}}class eu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rw(this.data.getIterator())}getIteratorFrom(e){return new rw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class rw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new zt([])}unionWith(e){let n=new Ye(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class IS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new IS("Invalid base64 string: "+s):s}}(e);return new ut(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const UL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ri(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=UL.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const SS="server_timestamp",AS="__type__",kS="__previous_value__",RS="__local_write_time__";function Zm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[AS])==null?void 0:r.stringValue)===SS}function hh(t){const e=t.mapValue.fields[kS];return Zm(e)?hh(e):e}function Xa(t){const e=ri(t.mapValue.fields[RS].timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class FL{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const yc="(default)";class Za{constructor(e,n){this.projectId=e,this.database=n||yc}static empty(){return new Za("","")}get isDefaultDatabase(){return this.database===yc}isEqual(e){return e instanceof Za&&e.projectId===this.projectId&&e.database===this.database}}function jL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Za(t.options.projectId,e)}/**
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
 */const PS="__type__",CS="__max__",tu={mapValue:{fields:{__type__:{stringValue:CS}}}},bS="__vector__",_c="value";function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zm(t)?4:BL(t)?9007199254740991:$L(t)?10:11:Z(28295,{value:t})}function $n(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ri(i.timestampValue),l=ri(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ii(i.bytesValue).isEqual(ii(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),l=Me(s.doubleValue);return o===l?gc(o)===gc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(nw(o)!==nw(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!$n(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function el(t,e){return(t.values||[]).find(n=>$n(n,e))!==void 0}function Zs(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Me(s.integerValue||s.doubleValue),u=Me(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return iw(t.timestampValue,e.timestampValue);case 4:return iw(Xa(t),Xa(e));case 5:return hp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ii(s),u=ii(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Me(s.latitude),Me(o.latitude));return l!==0?l:ue(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return sw(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,C,P;const l=s.fields||{},u=o.fields||{},c=(m=l[_c])==null?void 0:m.arrayValue,d=(E=u[_c])==null?void 0:E.arrayValue,f=ue(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return f!==0?f:sw(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===tu.mapValue&&o===tu.mapValue)return 0;if(s===tu.mapValue)return 1;if(o===tu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=hp(u[f],d[f]);if(m!==0)return m;const E=Zs(l[u[f]],c[d[f]]);if(E!==0)return E}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function iw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=ri(t),r=ri(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function sw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Zs(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function eo(t){return dp(t)}function dp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dp(n.fields[o])}`;return i+"}"}(t.mapValue):Z(61005,{value:t})}function Ru(t){switch(si(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hh(t);return e?16+Ru(e):16;case 5:return 2*t.stringValue.length;case 6:return ii(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ru(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return fi(r.fields,(s,o)=>{i+=s.length+Ru(o)}),i}(t.mapValue);default:throw Z(13486,{value:t})}}function ow(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fp(t){return!!t&&"integerValue"in t}function eg(t){return!!t&&"arrayValue"in t}function aw(t){return!!t&&"nullValue"in t}function lw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pu(t){return!!t&&"mapValue"in t}function $L(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[PS])==null?void 0:r.stringValue)===bS}function Ia(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ia(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ia(t.arrayValue.values[n]);return e}return{...t}}function BL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===CS}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ia(n)}setAll(e){let n=ot.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ia(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new xt(Ia(this.value))}}function xS(t){const e=[];return fi(t.fields,(n,r)=>{const i=new ot([n]);if(Pu(r)){const s=xS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new zt(e)}/**
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
 */class gt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,ee.min(),ee.min(),ee.min(),xt.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,ee.min(),ee.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ee.min(),ee.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vc{constructor(e,n){this.position=e,this.inclusive=n}}function uw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=Zs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function cw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function zL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class NS{}class We extends NS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WL(e,n,r):n==="array-contains"?new GL(e,r):n==="in"?new QL(e,r):n==="not-in"?new YL(e,r):n==="array-contains-any"?new JL(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qL(e,r):new KL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Zs(n,this.value)):n!==null&&si(this.value)===si(n)&&this.matchesComparison(Zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class In extends NS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new In(e,n)}matches(e){return DS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function DS(t){return t.op==="and"}function OS(t){return HL(t)&&DS(t)}function HL(t){for(const e of t.filters)if(e instanceof In)return!1;return!0}function pp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+eo(t.value);if(OS(t))return t.filters.map(e=>pp(e)).join(",");{const e=t.filters.map(n=>pp(n)).join(",");return`${t.op}(${e})`}}function LS(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&$n(r.value,i.value)}(t,e):t instanceof In?function(r,i){return i instanceof In&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&LS(o,i.filters[l]),!0):!1}(t,e):void Z(19439)}function VS(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${eo(n.value)}`}(t):t instanceof In?function(n){return n.op.toString()+" {"+n.getFilters().map(VS).join(" ,")+"}"}(t):"Filter"}class WL extends We{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class qL extends We{constructor(e,n){super(e,"in",n),this.keys=MS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KL extends We{constructor(e,n){super(e,"not-in",n),this.keys=MS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class GL extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return eg(n)&&el(n.arrayValue,this.value)}}class QL extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&el(this.value.arrayValue,n)}}class YL extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!el(this.value.arrayValue,n)}}class JL extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!eg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>el(this.value.arrayValue,r))}}/**
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
 */class XL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function hw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new XL(t,e,n,r,i,s,o)}function tg(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ch(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>eo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>eo(r)).join(",")),e.Te=n}return e.Te}function ng(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cw(t.startAt,e.startAt)&&cw(t.endAt,e.endAt)}function mp(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function ZL(t,e,n,r,i,s,o,l){return new yo(t,e,n,r,i,s,o,l)}function dh(t){return new yo(t)}function dw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function e2(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function US(t){return t.collectionGroup!==null}function Sa(t){const e=te(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new tl(s,r))}),n.has(ot.keyField().canonicalString())||e.Ee.push(new tl(ot.keyField(),r))}return e.Ee}function Mn(t){const e=te(t);return e.Ie||(e.Ie=t2(e,Sa(t))),e.Ie}function t2(t,e){if(t.limitType==="F")return hw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tl(i.field,s)});const n=t.endAt?new vc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vc(t.startAt.position,t.startAt.inclusive):null;return hw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gp(t,e){const n=t.filters.concat([e]);return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function n2(t,e){const n=t.explicitOrderBy.concat([e]);return new yo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function wc(t,e,n){return new yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fh(t,e){return ng(Mn(t),Mn(e))&&t.limitType===e.limitType}function FS(t){return`${tg(Mn(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>VS(i)).join(", ")}]`),ch(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>eo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>eo(i)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function ph(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Sa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=uw(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Sa(r),i)||r.endAt&&!function(o,l,u){const c=uw(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Sa(r),i))}(t,e)}function r2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jS(t){return(e,n)=>{let r=!1;for(const i of Sa(t)){const s=i2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function i2(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Zs(u,c):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
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
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TS(this.inner)}size(){return this.innerSize}}/**
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
 */const s2=new xe(X.comparator);function dr(){return s2}const $S=new xe(X.comparator);function oa(...t){let e=$S;for(const n of t)e=e.insert(n.key,n);return e}function BS(t){let e=$S;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ci(){return Aa()}function zS(){return Aa()}function Aa(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const o2=new xe(X.comparator),a2=new Ye(X.comparator);function ce(...t){let e=a2;for(const n of t)e=e.add(n);return e}const l2=new Ye(ue);function u2(){return l2}/**
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
 */function rg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function HS(t){return{integerValue:""+t}}function WS(t,e){return LL(e)?HS(e):rg(t,e)}/**
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
 */class mh{constructor(){this._=void 0}}function c2(t,e,n){return t instanceof nl?function(i,s){const o={fields:{[AS]:{stringValue:SS},[RS]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zm(s)&&(s=hh(s)),s&&(o.fields[kS]=s),{mapValue:o}}(n,e):t instanceof to?KS(t,e):t instanceof rl?GS(t,e):function(i,s){const o=qS(i,s),l=fw(o)+fw(i.Ae);return fp(o)&&fp(i.Ae)?HS(l):rg(i.serializer,l)}(t,e)}function h2(t,e,n){return t instanceof to?KS(t,e):t instanceof rl?GS(t,e):n}function qS(t,e){return t instanceof il?function(r){return fp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class nl extends mh{}class to extends mh{constructor(e){super(),this.elements=e}}function KS(t,e){const n=QS(e);for(const r of t.elements)n.some(i=>$n(i,r))||n.push(r);return{arrayValue:{values:n}}}class rl extends mh{constructor(e){super(),this.elements=e}}function GS(t,e){let n=QS(e);for(const r of t.elements)n=n.filter(i=>!$n(i,r));return{arrayValue:{values:n}}}class il extends mh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function fw(t){return Me(t.integerValue||t.doubleValue)}function QS(t){return eg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ig{constructor(e,n){this.field=e,this.transform=n}}function d2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof to&&i instanceof to||r instanceof rl&&i instanceof rl?Xs(r.elements,i.elements,$n):r instanceof il&&i instanceof il?$n(r.Ae,i.Ae):r instanceof nl&&i instanceof nl}(t.transform,e.transform)}class f2{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gh{}function YS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sg(t.key,sn.none()):new _l(t.key,t.data,sn.none());{const n=t.data,r=xt.empty();let i=new Ye(ot.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pi(t.key,r,new zt(i.toArray()),sn.none())}}function p2(t,e,n){t instanceof _l?function(i,s,o){const l=i.value.clone(),u=mw(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof pi?function(i,s,o){if(!Cu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=mw(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(JS(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ka(t,e,n,r){return t instanceof _l?function(s,o,l,u){if(!Cu(s.precondition,o))return l;const c=s.value.clone(),d=gw(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof pi?function(s,o,l,u){if(!Cu(s.precondition,o))return l;const c=gw(s.fieldTransforms,u,o),d=o.data;return d.setAll(JS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Cu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function m2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qS(r.transform,i||null);s!=null&&(n===null&&(n=xt.empty()),n.set(r.field,s))}return n||null}function pw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xs(r,i,(s,o)=>d2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _l extends gh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pi extends gh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function JS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mw(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,h2(o,l,n[i]))}return r}function gw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,c2(s,o,e))}return r}class sg extends gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g2 extends gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class y2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&p2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=YS(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>pw(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>pw(n,r))}}class og{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return o2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new og(e,n,r,i)}}/**
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
 */class _2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class v2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var $e,he;function w2(t){switch(t){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function XS(t){if(t===void 0)return hr("GRPC error has no .code"),V.UNKNOWN;switch(t){case $e.OK:return V.OK;case $e.CANCELLED:return V.CANCELLED;case $e.UNKNOWN:return V.UNKNOWN;case $e.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case $e.INTERNAL:return V.INTERNAL;case $e.UNAVAILABLE:return V.UNAVAILABLE;case $e.UNAUTHENTICATED:return V.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case $e.NOT_FOUND:return V.NOT_FOUND;case $e.ALREADY_EXISTS:return V.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return V.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case $e.ABORTED:return V.ABORTED;case $e.OUT_OF_RANGE:return V.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return V.UNIMPLEMENTED;case $e.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:t})}}(he=$e||($e={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function E2(){return new TextEncoder}/**
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
 */const T2=new Yr([4294967295,4294967295],0);function yw(t){const e=E2().encode(t),n=new hS;return n.update(e),new Uint8Array(n.digest())}function _w(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class ag{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new aa(`Invalid padding: ${n}`);if(r<0)throw new aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new aa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Yr.fromNumber(r)));return i.compare(T2)===1&&(i=new Yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=yw(e),[r,i]=_w(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ag(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=yw(e),[r,i]=_w(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,vl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yh(ee.min(),i,new xe(ue),dr(),ce())}}class vl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vl(r,n,ce(),ce(),ce())}}/**
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
 */class bu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class ZS{constructor(e,n){this.targetId=e,this.Ce=n}}class eA{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vw{constructor(){this.ve=0,this.Fe=ww(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new vl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ww()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class I2{constructor(e){this.Ge=e,this.ze=new Map,this.je=dr(),this.Je=nu(),this.He=nu(),this.Ze=new xe(ue)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(mp(s))if(r===0){const o=new X(s.path);this.et(n,o,gt.newNoDocument(o,ee.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ii(r).toUint8Array()}catch(u){if(u instanceof IS)return zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ag(o,i,s)}catch(u){return zi(u instanceof aa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&mp(l.target)){const u=new X(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,gt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ce();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new yh(e,n,this.Ze,this.je,r);return this.je=dr(),this.Je=nu(),this.He=nu(),this.Ze=new xe(ue),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new vw,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ye(ue),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ye(ue),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function nu(){return new xe(X.comparator)}function ww(){return new xe(X.comparator)}const S2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),A2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),k2=(()=>({and:"AND",or:"OR"}))();class R2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yp(t,e){return t.useProto3Json||ch(e)?e:{value:e}}function Ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function P2(t,e){return Ec(t,e.toTimestamp())}function Un(t){return pe(!!t,49232),ee.fromTimestamp(function(n){const r=ri(n);return new Ae(r.seconds,r.nanos)}(t))}function lg(t,e){return _p(t,e).canonicalString()}function _p(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nA(t){const e=ve.fromString(t);return pe(aA(e),10190,{key:e.toString()}),e}function vp(t,e){return lg(t.databaseId,e.path)}function Fd(t,e){const n=nA(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(iA(n))}function rA(t,e){return lg(t.databaseId,e)}function C2(t){const e=nA(t);return e.length===4?ve.emptyPath():iA(e)}function wp(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iA(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ew(t,e,n){return{name:vp(t,e),fields:n.value.mapValue.fields}}function b2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(pe(d===void 0||typeof d=="string",58123),ut.fromBase64String(d||"")):(pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:XS(c.code);return new q(d,c.message||"")}(o);n=new eA(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Fd(t,r.document.name),s=Un(r.document.updateTime),o=r.document.createTime?Un(r.document.createTime):ee.min(),l=new xt({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new bu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Fd(t,r.document),s=r.readTime?Un(r.readTime):ee.min(),o=gt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new bu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Fd(t,r.document),s=r.removedTargetIds||[];n=new bu([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new v2(i,s),l=r.targetId;n=new ZS(l,o)}}return n}function x2(t,e){let n;if(e instanceof _l)n={update:Ew(t,e.key,e.value)};else if(e instanceof sg)n={delete:vp(t,e.key)};else if(e instanceof pi)n={update:Ew(t,e.key,e.data),updateMask:j2(e.fieldMask)};else{if(!(e instanceof g2))return Z(16599,{dt:e.type});n={verify:vp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof rl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof il)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:P2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(t,e.precondition)),n}function N2(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Un(i.updateTime):Un(s);return o.isEqual(ee.min())&&(o=Un(s)),new f2(o,i.transformResults||[])}(n,e))):[]}function D2(t,e){return{documents:[rA(t,e.path)]}}function O2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rA(t,i);const s=function(c){if(c.length!==0)return oA(In.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:ps(m.field),direction:M2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function L2(t){let e=C2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=sA(f);return m instanceof In&&OS(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(C){return new tl(ms(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,ch(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new vc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new vc(E,m)}(n.endAt)),ZL(e,i,o,s,l,"F",u,c)}function V2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ms(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ms(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ms(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ms(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return We.create(ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return In.create(n.compositeFilter.filters.map(r=>sA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function M2(t){return S2[t]}function U2(t){return A2[t]}function F2(t){return k2[t]}function ps(t){return{fieldPath:t.canonicalString()}}function ms(t){return ot.fromServerFormat(t.fieldPath)}function oA(t){return t instanceof We?function(n){if(n.op==="=="){if(lw(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(aw(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lw(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(aw(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:U2(n.op),value:n.value}}}(t):t instanceof In?function(n){const r=n.getFilters().map(i=>oA(i));return r.length===1?r[0]:{compositeFilter:{op:F2(n.op),filters:r}}}(t):Z(54877,{filter:t})}function j2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function lA(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Ur{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $2{constructor(e){this.yt=e}}function B2(t){const e=L2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wc(e,e.limit,"L"):e}/**
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
 */class z2{constructor(){this.bn=new H2}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ni.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ni.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class H2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ye(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ye(ve.comparator)).toArray()}}/**
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
 */const Tw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uA=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(uA,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class no{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new no(0)}static ar(){return new no(-1)}}/**
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
 */const Iw="LruGarbageCollector",W2=1048576;function Sw([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class q2{constructor(e){this.Pr=e,this.buffer=new Ye(Sw),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class K2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(Iw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){go(n)?K(Iw,"Ignoring IndexedDB error during garbage collection: ",n):await mo(n)}await this.Ar(3e5)})}}class G2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(uh.ce);const r=new q2(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Tw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ds()<=le.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function Q2(t,e){return new G2(t,e)}/**
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
 */class Y2{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class J2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class X2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ka(r.mutation,i,zt.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=Ci();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ci();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=dr();const o=Aa(),l=function(){return Aa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof pi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ka(d.mutation,c,d.mutation.getFieldMask(),Ae.now())):o.set(c.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new J2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Aa();let i=new xe((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||zt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=zS();d.forEach(m=>{if(!s.has(m)){const E=YS(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return e2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):US(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Ci());let l=Ja,u=s;return o.next(c=>M.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ce())).next(d=>({batchId:l,changes:BS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oa();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(f,m){return new yo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let l=oa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ka(d.mutation,c,zt.empty(),Ae.now()),ph(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Z2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Un(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:B2(i.bundledQuery),readTime:Un(i.readTime)}}(n)),M.resolve()}}/**
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
 */class eV{constructor(){this.overlays=new xe(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ci();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Ci(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Ci(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Ci(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _2(n,r));let s=this.Lr.get(n);s===void 0&&(s=ce(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class tV{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class ug{constructor(){this.kr=new Ye(et.qr),this.Kr=new Ye(et.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new et(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new et(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new ve([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new ve([])),r=new et(n,e),i=new et(n,e+1);let s=ce();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||ue(e.Jr,n.Jr)}static Ur(e,n){return ue(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
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
 */class nV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ye(et.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new y2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new et(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Xm:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new et(new X(s),0);let l=new Ye(ue);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new et(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rV{constructor(e){this.ti=e,this.docs=function(){return new xe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=dr();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||xL(bL(d),r)<=0||(i.has(d.key)||ph(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iV(this)}getSize(e){return M.resolve(this.size)}}class iV extends Y2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class sV{constructor(e){this.persistence=e,this.ri=new is(n=>tg(n),ng),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new ug,this.targetCount=0,this.oi=no._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new no(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class cA{constructor(e,n){this._i={},this.overlays={},this.ai=new uh(0),this.ui=!1,this.ui=!0,this.ci=new tV,this.referenceDelegate=e(this),this.li=new sV(this),this.indexManager=new z2,this.remoteDocumentCache=function(i){return new rV(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new $2(n),this.Pi=new Z2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new nV(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new oV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class oV extends DL{constructor(e){super(),this.currentSequenceNumber=e}}class cg{constructor(e){this.persistence=e,this.Ri=new ug,this.Ai=null}static Vi(e){return new cg(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=X.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Tc{constructor(e,n){this.persistence=e,this.fi=new is(r=>VL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Q2(this,n)}static Vi(e,n){return new Tc(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ru(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hg(e,n.fromCache,r,i)}}/**
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
 */class aV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ax()?8:OL(_t())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ds()<=le.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(ds()<=le.DEBUG&&K("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ds()<=le.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):M.resolve())}gs(e,n){if(dw(n))return M.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wc(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,wc(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return dw(n)||i.isEqual(ee.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(ds()<=le.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),fs(n)),this.Ds(e,o,n,CL(i,Ja)).next(l=>l))})}Ss(e,n){let r=new Ye(jS(e));return n.forEach((i,s)=>{ph(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ds()<=le.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",fs(n)),this.fs.getDocumentsMatchingQuery(e,n,ni.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const dg="LocalStore",uV=3e8;class cV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new xe(ue),this.Fs=new is(s=>tg(s),ng),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new X2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function hV(t,e,n,r){return new cV(t,e,n,r)}async function hA(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function dV(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=M.resolve();return m.forEach(C=>{E=E.next(()=>d.getEntry(u,C)).next(P=>{const b=c.docVersions.get(C);pe(b!==null,48541),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dA(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function fV(t,e){const n=te(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(ut.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(P,b,v){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=uV?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,E,d)&&l.push(n.li.updateTargetData(s,E))});let u=dr(),c=ce();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(pV(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(ee.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function pV(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=dr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(dg,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function mV(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gV(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ep(t,e,n){const r=te(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!go(o))throw o;K(dg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Aw(t,e,n){const r=te(t);let i=ee.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=te(u),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,Mn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ce())).next(l=>(yV(r,r2(e),l),{documents:l,ks:s})))}function yV(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class kw{constructor(){this.activeTargetIds=u2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _V{constructor(){this.vo=new kw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new kw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class vV{Mo(e){}shutdown(){}}/**
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
 */const Rw="ConnectivityMonitor";class Pw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(Rw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(Rw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ru=null;function Tp(){return ru===null?ru=function(){return 268435456+Math.round(2147483648*Math.random())}():ru++,"0x"+ru.toString(16)}/**
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
 */const jd="RestConnection",wV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class EV{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===yc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Tp(),l=this.Qo(e,n.toUriEncodedString());K(jd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=es(c);return this.zo(e,l,u,r,d).then(f=>(K(jd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw zi(jd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=wV[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class TV{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const ft="WebChannelConnection",Ko=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Fs extends EV{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fs.c_){const e=mS();Ko(e,pS.STAT_EVENT,n=>{n.stat===cp.PROXY?K(ft,"STAT_EVENT: detected buffering proxy"):n.stat===cp.NOPROXY&&K(ft,"STAT_EVENT: detected no buffering proxy")}),Fs.c_=!0}}zo(e,n,r,i,s){const o=Tp();return new Promise((l,u)=>{const c=new dS;c.setWithCredentials(!0),c.listenOnce(fS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ku.NO_ERROR:const f=c.getResponseJson();K(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case ku.TIMEOUT:K(ft,`RPC '${e}' ${o} timed out`),u(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const m=c.getStatus();if(K(ft,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const C=E==null?void 0:E.error;if(C&&C.status&&C.message){const P=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(_)>=0?_:V.UNKNOWN}(C.status);u(new q(P,C.message))}else u(new q(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(ft,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);K(ft,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Tp(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");K(ft,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let f=!1,m=!1;const E=new TV({Jo:C=>{m?K(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(f||(K(ft,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),K(ft,`RPC '${e}' stream ${i} sending:`,C),d.send(C))},Ho:()=>d.close()});return Ko(d,sa.EventType.OPEN,()=>{m||(K(ft,`RPC '${e}' stream ${i} transport opened.`),E.i_())}),Ko(d,sa.EventType.CLOSE,()=>{m||(m=!0,K(ft,`RPC '${e}' stream ${i} transport closed`),E.o_(),this.I_(d))}),Ko(d,sa.EventType.ERROR,C=>{m||(m=!0,zi(ft,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),E.o_(new q(V.UNAVAILABLE,"The operation could not be completed")))}),Ko(d,sa.EventType.MESSAGE,C=>{var P;if(!m){const b=C.data[0];pe(!!b,16349);const v=b,_=(v==null?void 0:v.error)||((P=v[0])==null?void 0:P.error);if(_){K(ft,`RPC '${e}' stream ${i} received error:`,_);const T=_.status;let O=function(I){const y=$e[I];if(y!==void 0)return XS(y)}(T),U=_.message;T==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&zi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,U="Unknown error status: "+T+" with message "+_.message),m=!0,E.o_(new q(O,U)),d.close()}else K(ft,`RPC '${e}' stream ${i} received:`,b),E.__(b)}}),Fs.u_(),setTimeout(()=>{E.s_()},0),E}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gS()}}/**
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
 */function IV(t){return new Fs(t)}function $d(){return typeof document<"u"?document:null}/**
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
 */function _h(t){return new R2(t,!0)}/**
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
 */Fs.c_=!1;class fA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Cw="PersistentStream";class pA{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fA(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(Cw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(Cw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SV extends pA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=b2(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Un(o.readTime):ee.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=wp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=mp(u)?{documents:D2(s,u)}:{query:O2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=tA(s,o.resumeToken);const c=yp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=Ec(s,o.snapshotVersion.toTimestamp());const c=yp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=V2(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=wp(this.serializer),n.removeTarget=e,this.q_(n)}}class AV extends pA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=N2(e.writeResults,e.commitTime),r=Un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=wp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>x2(this.serializer,r))};this.q_(n)}}/**
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
 */class kV{}class RV extends kV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,_p(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,_p(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function PV(t,e,n,r){return new RV(t,e,n,r)}class CV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Hi="RemoteStore";class bV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(K(Hi,"Restarting streams for network reachability change."),await async function(u){const c=te(u);c.Ia.add(4),await wl(c),c.Va.set("Unknown"),c.Ia.delete(4),await vh(c)}(this))})}),this.Va=new CV(r,i)}}async function vh(t){if(ss(t))for(const e of t.Ra)await e(!0)}async function wl(t){for(const e of t.Ra)await e(!1)}function mA(t,e){const n=te(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),gg(n)?mg(n):_o(n).O_()&&pg(n,e))}function fg(t,e){const n=te(t),r=_o(n);n.Ea.delete(e),r.O_()&&gA(n,e),n.Ea.size===0&&(r.O_()?r.L_():ss(n)&&n.Va.set("Unknown"))}function pg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}_o(t).Z_(e)}function gA(t,e){t.da.$e(e),_o(t).X_(e)}function mg(t){t.da=new I2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),_o(t).start(),t.Va.ua()}function gg(t){return ss(t)&&!_o(t).x_()&&t.Ea.size>0}function ss(t){return te(t).Ia.size===0}function yA(t){t.da=void 0}async function xV(t){t.Va.set("Online")}async function NV(t){t.Ea.forEach((e,n)=>{pg(t,e)})}async function DV(t,e){yA(t),gg(t)?(t.Va.ha(e),mg(t)):t.Va.set("Unknown")}async function OV(t,e,n){if(t.Va.set("Online"),e instanceof eA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){K(Hi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ic(t,r)}else if(e instanceof bu?t.da.Xe(e):e instanceof ZS?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await dA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),gA(s,u);const f=new Ur(d.target,u,c,d.sequenceNumber);pg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K(Hi,"Failed to raise snapshot:",r),await Ic(t,r)}}async function Ic(t,e,n){if(!go(e))throw e;t.Ia.add(1),await wl(t),t.Va.set("Offline"),n||(n=()=>dA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(Hi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await vh(t)})}function _A(t,e){return e().catch(n=>Ic(t,n,e))}async function wh(t){const e=te(t),n=oi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xm;for(;LV(e);)try{const i=await mV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,VV(e,i)}catch(i){await Ic(e,i)}vA(e)&&wA(e)}function LV(t){return ss(t)&&t.Ta.length<10}function VV(t,e){t.Ta.push(e);const n=oi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function vA(t){return ss(t)&&!oi(t).x_()&&t.Ta.length>0}function wA(t){oi(t).start()}async function MV(t){oi(t).ra()}async function UV(t){const e=oi(t);for(const n of t.Ta)e.ea(n.mutations)}async function FV(t,e,n){const r=t.Ta.shift(),i=og.from(r,e,n);await _A(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wh(t)}async function jV(t,e){e&&oi(t).Y_&&await async function(r,i){if(function(o){return w2(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();oi(r).B_(),await _A(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wh(r)}}(t,e),vA(t)&&wA(t)}async function bw(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),K(Hi,"RemoteStore received new credentials");const r=ss(n);n.Ia.add(3),await wl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await vh(n)}async function $V(t,e){const n=te(t);e?(n.Ia.delete(2),await vh(n)):e||(n.Ia.add(2),await wl(n),n.Va.set("Unknown"))}function _o(t){return t.ma||(t.ma=function(n,r,i){const s=te(n);return s.sa(),new SV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:xV.bind(null,t),Yo:NV.bind(null,t),t_:DV.bind(null,t),H_:OV.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),gg(t)?mg(t):t.Va.set("Unknown")):(await t.ma.stop(),yA(t))})),t.ma}function oi(t){return t.fa||(t.fa=function(n,r,i){const s=te(n);return s.sa(),new AV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:MV.bind(null,t),t_:jV.bind(null,t),ta:UV.bind(null,t),na:FV.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await wh(t)):(await t.fa.stop(),t.Ta.length>0&&(K(Hi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class yg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new yg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _g(t,e){if(hr("AsyncQueue",`${e}: ${t}`),go(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class js{static emptySet(e){return new js(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class xw{constructor(){this.ga=new xe(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ro{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ro(e,n,js.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class BV{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class zV{constructor(){this.queries=Nw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Nw(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function Nw(){return new is(t=>FS(t),fh)}async function vg(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new BV,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=_g(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Eg(n)}async function wg(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HV(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Eg(n)}function WV(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Eg(t){t.Ca.forEach(e=>{e.next()})}var Ip,Dw;(Dw=Ip||(Ip={})).Ma="default",Dw.Cache="cache";class Tg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ip.Cache}}/**
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
 */class EA{constructor(e){this.key=e}}class TA{constructor(e){this.key=e}}class qV{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ce(),this.mutatedKeys=ce(),this.eu=jS(e),this.tu=new js(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new xw,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=ph(this.query,f)?f:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;m&&E?m.data.isEqual(E.data)?C!==P&&(r.track({type:3,doc:E}),b=!0):this.su(m,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.eu(E,u)>0||c&&this.eu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),b=!0):m&&!E&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(E,C){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:b})}};return P(E)-P(C)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new ro(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xw,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new TA(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new EA(r))}),n}cu(e){this.Za=e.ks,this.Ya=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ro.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ig="SyncEngine";class KV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GV{constructor(e){this.key=e,this.hu=!1}}class QV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new is(l=>FS(l),fh),this.Eu=new Map,this.Iu=new Set,this.Ru=new xe(X.comparator),this.Au=new Map,this.Vu=new ug,this.du={},this.mu=new Map,this.fu=no.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YV(t,e,n=!0){const r=PA(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await IA(r,e,n,!0),i}async function JV(t,e){const n=PA(t);await IA(n,e,!0,!1)}async function IA(t,e,n,r){const i=await gV(t.localStore,Mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await XV(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&mA(t.remoteStore,i),l}async function XV(t,e,n,r,i){t.pu=(f,m,E)=>async function(P,b,v,_){let T=b.view.ru(v);T.bs&&(T=await Aw(P.localStore,b.query,!1).then(({documents:I})=>b.view.ru(I,T)));const O=_&&_.targetChanges.get(b.targetId),U=_&&_.targetMismatches.get(b.targetId)!=null,B=b.view.applyChanges(T,P.isPrimaryClient,O,U);return Lw(P,b.targetId,B.au),B.snapshot}(t,f,m,E);const s=await Aw(t.localStore,e,!0),o=new qV(e,s.ks),l=o.ru(s.documents),u=vl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Lw(t,n,c.au);const d=new KV(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function ZV(t,e,n){const r=te(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!fh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ep(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&fg(r.remoteStore,i.targetId),Sp(r,i.targetId)}).catch(mo)):(Sp(r,i.targetId),await Ep(r.localStore,i.targetId,!0))}async function eM(t,e){const n=te(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fg(n.remoteStore,r.targetId))}async function tM(t,e,n){const r=lM(t);try{const i=await function(o,l){const u=te(o),c=Ae.now(),d=l.reduce((E,C)=>E.add(C.key),ce());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=dr(),P=ce();return u.xs.getEntries(E,d).next(b=>{C=b,C.forEach((v,_)=>{_.isValidDocument()||(P=P.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,C)).next(b=>{f=b;const v=[];for(const _ of l){const T=m2(_,f.get(_.key).overlayedDocument);T!=null&&v.push(new pi(_.key,T,xS(T.value.mapValue),sn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,v,l)}).next(b=>{m=b;const v=b.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(E,b.batchId,v)})}).then(()=>({batchId:m.batchId,changes:BS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new xe(ue)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await El(r,i.changes),await wh(r.remoteStore)}catch(i){const s=_g(i,"Failed to persist write");n.reject(s)}}async function SA(t,e){const n=te(t);try{const r=await fV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?pe(o.hu,14607):i.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))}),await El(n,r,e)}catch(r){await mo(r)}}function Ow(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&Eg(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nM(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new xe(X.comparator);o=o.insert(s,gt.newNoDocument(s,ee.min()));const l=ce().add(s),u=new yh(ee.min(),new Map,new xe(ue),o,l);await SA(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Sg(r)}else await Ep(r.localStore,e,!1).then(()=>Sp(r,e,n)).catch(mo)}async function rM(t,e){const n=te(t),r=e.batch.batchId;try{const i=await dV(n.localStore,e);kA(n,r,null),AA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await El(n,i)}catch(i){await mo(i)}}async function iM(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(pe(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);kA(r,e,n),AA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await El(r,i)}catch(i){await mo(i)}}function AA(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function kA(t,e,n){const r=te(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Sp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||RA(t,r)})}function RA(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(fg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Sg(t))}function Lw(t,e,n){for(const r of n)r instanceof EA?(t.Vu.addReference(r.key,e),sM(t,r)):r instanceof TA?(K(Ig,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||RA(t,r.key)):Z(19791,{wu:r})}function sM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(Ig,"New document in limbo: "+n),t.Iu.add(r),Sg(t))}function Sg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(ve.fromString(e)),r=t.fu.next();t.Au.set(r,new GV(n)),t.Ru=t.Ru.insert(n,r),mA(t.remoteStore,new Ur(Mn(dh(n.path)),r,"TargetPurposeLimboResolution",uh.ce))}}async function El(t,e,n){const r=te(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=hg.Is(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=te(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Ts,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>M.forEach(m.Es,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!go(f))throw f;K(dg,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.vs.get(m),C=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(C);d.vs=d.vs.insert(m,P)}}}(r.localStore,s))}async function oM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){K(Ig,"User change. New user:",e.toKey());const r=await hA(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await El(n,r.Ns)}}function aM(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let i=ce();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function PA(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=SA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nM.bind(null,e),e.Pu.H_=HV.bind(null,e.eventManager),e.Pu.yu=WV.bind(null,e.eventManager),e}function lM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class Sc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_h(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return hV(this.persistence,new lV,e.initialUser,this.serializer)}Cu(e){return new cA(cg.Vi,this.serializer)}Du(e){return new _V}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sc.provider={build:()=>new Sc};class uM extends Sc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pe(this.persistence.referenceDelegate instanceof Tc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new K2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new cA(r=>Tc.Vi(r,n),this.serializer)}}class Ap{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ow(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await $V(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zV}()}createDatastore(e){const n=_h(e.databaseInfo.databaseId),r=IV(e.databaseInfo);return PV(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new bV(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ow(this.syncEngine,n,0),function(){return Pw.v()?new Pw:new vV}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new QV(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);K(Hi,"RemoteStore shutting down."),s.Ia.add(5),await wl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ap.provider={build:()=>new Ap};/**
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
 */class Ag{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ai="FirestoreClient";class cM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Jm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(ai,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(ai,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_g(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bd(t,e){t.asyncQueue.verifyOperationInProgress(),K(ai,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hM(t);K(ai,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bw(e.remoteStore,i)),t._onlineComponents=e}async function hM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(ai,"Using user provided OfflineComponentProvider");try{await Bd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;zi("Error using user provided cache. Falling back to memory cache: "+n),await Bd(t,new Sc)}}else K(ai,"Using default OfflineComponentProvider"),await Bd(t,new uM(void 0));return t._offlineComponents}async function CA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(ai,"Using user provided OnlineComponentProvider"),await Vw(t,t._uninitializedComponentsProvider._online)):(K(ai,"Using default OnlineComponentProvider"),await Vw(t,new Ap))),t._onlineComponents}function dM(t){return CA(t).then(e=>e.syncEngine)}async function Ac(t){const e=await CA(t),n=e.eventManager;return n.onListen=YV.bind(null,e.syncEngine),n.onUnlisten=ZV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=JV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=eM.bind(null,e.syncEngine),n}function fM(t,e,n,r){const i=new Ag(r),s=new Tg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>vg(await Ac(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>wg(await Ac(t),s))}}function pM(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Ag({next:m=>{d.Nu(),o.enqueueAndForget(()=>wg(s,f));const E=m.docs.has(l);!E&&m.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Tg(dh(l.path),d,{includeMetadataChanges:!0,qa:!0});return vg(s,f)}(await Ac(t),t.asyncQueue,e,n,r)),r.promise}function mM(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Ag({next:m=>{d.Nu(),o.enqueueAndForget(()=>wg(s,f)),m.fromCache&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Tg(l,d,{includeMetadataChanges:!0,qa:!0});return vg(s,f)}(await Ac(t),t.asyncQueue,e,n,r)),r.promise}function gM(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget(async()=>tM(await dM(t),e,n)),n.promise}/**
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
 */function bA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yM="ComponentProvider",Mw=new Map;function _M(t,e,n,r,i){return new FL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,bA(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const xA="firestore.googleapis.com",Uw=!0;class Fw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xA,this.ssl=Uw}else this.host=e.host,this.ssl=e.ssl??Uw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<W2)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bA(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yL;switch(r.type){case"firstParty":return new EL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mw.get(n);r&&(K(yM,"Removing Datastore"),Mw.delete(n),r.terminate())}(this),Promise.resolve()}}function vM(t,e,n,r={}){var c;t=Ut(t,Eh);const i=es(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Um(`https://${l}`),s.host!==xA&&s.host!==l&&zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ti(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=pt.MOCK_USER;else{d=fI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new pt(m)}t._authCredentials=new _L(new _S(d,f))}}/**
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
 */class gr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gr(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(yl(n,Oe._jsonSchema))return new Oe(e,r||null,new X(ve.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:qe("string",Oe._jsonSchemaVersion),referencePath:qe("string")};class Jr extends gr{constructor(e,n,r){super(e,n,dh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new X(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function gs(t,e,...n){if(t=ne(t),vS("collection","path",e),t instanceof Eh){const r=ve.fromString(e,...n);return Xv(r),new Jr(t,null,r)}{if(!(t instanceof Oe||t instanceof Jr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Xv(r),new Jr(t.firestore,null,r)}}function Xr(t,e,...n){if(t=ne(t),arguments.length===1&&(e=Jm.newId()),vS("doc","path",e),t instanceof Eh){const r=ve.fromString(e,...n);return Jv(r),new Oe(t,null,new X(r))}{if(!(t instanceof Oe||t instanceof Jr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Jv(r),new Oe(t.firestore,t instanceof Jr?t.converter:null,new X(r))}}/**
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
 */const jw="AsyncQueue";class $w{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fA(this,"async_queue_retry"),this._c=()=>{const r=$d();r&&K(jw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=$d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new nr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!go(e))throw e;K(jw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",Bw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=yg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Z(47125,{Pc:Bw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Bw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fr extends Eh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new $w,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $w(e),this._firestoreClient=void 0,await e}}}function wM(t,e){const n=typeof t=="object"?t:Yc(),r=typeof t=="string"?t:e||yc,i=ts(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cI("firestore");s&&vM(i,...s)}return i}function Th(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||EM(t),t._firestoreClient}function EM(t){var r,i,s,o;const e=t._freezeSettings(),n=_M(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new cM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ut.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yl(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:qe("string",tn._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class kg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vo{constructor(e){this._methodName=e}}/**
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
 */class Fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(yl(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:qe("string",Fn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
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
 */class wn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:wn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yl(e,wn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new wn(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wn._jsonSchemaVersion="firestore/vectorValue/1.0",wn._jsonSchema={type:qe("string",wn._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const TM=/^__.*__$/;class IM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new _l(e,this.data,n,this.fieldTransforms)}}class NA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function DA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class Ih{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ih({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return kc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(DA(this.dataSource)&&TM.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class SM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_h(e)}A(e,n,r,i=!1){return new Ih({dataSource:e,methodName:n,targetDoc:r,path:ot.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sh(t){const e=t._freezeSettings(),n=_h(t._databaseId);return new SM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OA(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);bg("Data must be an object, but it was:",o,r);const l=LA(r,o);let u,c;if(s.merge)u=new zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Wi(e,f,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);UA(d,m)||d.push(m)}u=new zt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new IM(new xt(l),u,c)}class Ah extends vo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ah}}function AM(t,e,n){return new Ih({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Rg extends vo{_toFieldTransform(e){return new ig(e.path,new nl)}isEqual(e){return e instanceof Rg}}class Pg extends vo{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=AM(this,e,!0),r=this.Sc.map(s=>wo(s,n)),i=new to(r);return new ig(e.path,i)}isEqual(e){return e instanceof Pg&&ti(this.Sc,e.Sc)}}class Cg extends vo{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new il(e.serializer,WS(e.serializer,this.bc));return new ig(e.path,n)}isEqual(e){return e instanceof Cg&&this.bc===e.bc}}function kM(t,e,n,r){const i=t.A(1,e,n);bg("Data must be an object, but it was:",i,r);const s=[],o=xt.empty();fi(r,(u,c)=>{const d=MA(e,u,n);c=ne(c);const f=i.fc(d);if(c instanceof Ah)s.push(d);else{const m=wo(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new zt(s);return new NA(o,l,i.fieldTransforms)}function RM(t,e,n,r,i,s){const o=t.A(1,e,n),l=[Wi(e,r,n)],u=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Wi(e,s[m])),u.push(s[m+1]);const c=[],d=xt.empty();for(let m=l.length-1;m>=0;--m)if(!UA(c,l[m])){const E=l[m];let C=u[m];C=ne(C);const P=o.fc(E);if(C instanceof Ah)c.push(E);else{const b=wo(C,P);b!=null&&(c.push(E),d.set(E,b))}}const f=new zt(c);return new NA(d,f,o.fieldTransforms)}function PM(t,e,n,r=!1){return wo(n,t.A(r?4:3,e))}function wo(t,e){if(VA(t=ne(t)))return bg("Unsupported field value:",e,t),LA(t,e);if(t instanceof vo)return function(r,i){if(!DA(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=wo(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:tA(i.serializer,r._byteString)};if(r instanceof Oe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof wn)return function(o,l){const u=o instanceof wn?o.toArray():o;return{mapValue:{fields:{[PS]:{stringValue:bS},[_c]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return rg(l.serializer,d)})}}}}}}(r,i);if(lA(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${lh(r)}`)}(t,e)}function LA(t,e){const n={};return TS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(r,i)=>{const s=wo(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function VA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Fn||t instanceof tn||t instanceof Oe||t instanceof vo||t instanceof wn||lA(t))}function bg(t,e,n){if(!VA(n)||!wS(n)){const r=lh(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Wi(t,e,n){if((e=ne(e))instanceof kg)return e._internalPath;if(typeof e=="string")return MA(t,e);throw kc("Field path arguments must be of type string or ",t,!1,void 0,n)}const CM=new RegExp("[~\\*/\\[\\]]");function MA(t,e,n){if(e.search(CM)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kg(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function UA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bM{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[_c].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Me(o.doubleValue));return new wn(n)}convertGeoPoint(e){return new Fn(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=ri(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);pe(aA(r),9688,{name:e});const i=new Za(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class xg extends bM{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function zw(){return new Rg("serverTimestamp")}function y9(...t){return new Pg("arrayUnion",t)}function _9(t){return new Cg("increment",t)}const Hw="@firebase/firestore",Ww="4.13.0";/**
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
 */function qw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class FA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Wi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xM extends FA{data(){return super.data()}}/**
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
 */function jA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ng{}class Dg extends Ng{}function Go(t,e,...n){let r=[];e instanceof Ng&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Og).length,l=s.filter(u=>u instanceof kh).length;if(o>1||o>0&&l>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class kh extends Dg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kh(e,n,r)}_apply(e){const n=this._parse(e);return $A(e._query,n),new gr(e.firestore,e.converter,gp(e._query,n))}_parse(e){const n=Sh(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gw(f,d);const C=[];for(const P of f)C.push(Kw(u,s,P));m={arrayValue:{values:C}}}else m=Kw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gw(f,d),m=PM(l,o,f,d==="in"||d==="not-in");return We.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hn(t,e,n){const r=e,i=Wi("where",t);return kh._create(i,r,n)}class Og extends Ng{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Og(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:In.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)$A(o,u),o=gp(o,u)}(e._query,n),new gr(e.firestore,e.converter,gp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lg extends Dg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tl(s,o)}(e._query,this._field,this._direction);return new gr(e.firestore,e.converter,n2(e._query,n))}}function v9(t,e="asc"){const n=e,r=Wi("orderBy",t);return Lg._create(r,n)}class Vg extends Dg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vg(e,n,r)}_apply(e){return new gr(e.firestore,e.converter,wc(e._query,this._limit,this._limitType))}}function w9(t){return PL("limit",t),Vg._create("limit",t,"F")}function Kw(t,e,n){if(typeof(n=ne(n))=="string"){if(n==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!US(e)&&n.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!X.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ow(t,new X(r))}if(n instanceof Oe)return ow(t,n._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lh(n)}.`)}function Gw(t,e){if(!Array.isArray(t)||t.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $A(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class la{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Di extends FA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Di._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Di._jsonSchemaVersion="firestore/documentSnapshot/1.0",Di._jsonSchema={type:qe("string",Di._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class xu extends Di{data(e={}){return super.data(e)}}class Oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new la(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xu(this._firestore,this._userDataWriter,r.key,r,new la(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new xu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new la(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new xu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new la(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:NM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function NM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */Oi._jsonSchemaVersion="firestore/querySnapshot/1.0",Oi._jsonSchema={type:qe("string",Oi._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};/**
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
 */function zA(t){t=Ut(t,Oe);const e=Ut(t.firestore,fr),n=Th(e);return pM(n,t._key).then(r=>HA(e,t,r))}function iu(t){t=Ut(t,gr);const e=Ut(t.firestore,fr),n=Th(e),r=new xg(e);return jA(t._query),mM(n,t._query).then(i=>new Oi(e,r,t,i))}function Qw(t,e,n){t=Ut(t,Oe);const r=Ut(t.firestore,fr),i=BA(t.converter,e,n),s=Sh(r);return Rh(r,[OA(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function $s(t,e,n,...r){t=Ut(t,Oe);const i=Ut(t.firestore,fr),s=Sh(i);let o;return o=typeof(e=ne(e))=="string"||e instanceof kg?RM(s,"updateDoc",t._key,e,n,r):kM(s,"updateDoc",t._key,e),Rh(i,[o.toMutation(t._key,sn.exists(!0))])}function E9(t){return Rh(Ut(t.firestore,fr),[new sg(t._key,sn.none())])}function DM(t,e){const n=Ut(t.firestore,fr),r=Xr(t),i=BA(t.converter,e),s=Sh(t.firestore);return Rh(n,[OA(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function OM(t,...e){var c,d,f;t=ne(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||qw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(qw(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof Oe)o=Ut(t.firestore,fr),l=dh(t._key.path),s={next:m=>{e[r]&&e[r](HA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Ut(t,gr);o=Ut(m.firestore,fr),l=m._query;const E=new xg(o);s={next:C=>{e[r]&&e[r](new Oi(o,E,m,C))},error:e[r+1],complete:e[r+2]},jA(t._query)}const u=Th(o);return fM(u,l,i,s)}function Rh(t,e){const n=Th(t);return gM(n,e)}function HA(t,e,n){const r=n.docs.get(e._key),i=new xg(t);return new Di(t,i,e._key,r,new la(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){gL(ns),Tn(new ln("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new fr(new vL(r.getProvider("auth-internal")),new TL(o,r.getProvider("app-check-internal")),jL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Vt(Hw,Ww,e),Vt(Hw,Ww,"esm2020")})();/**
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
 */const WA="firebasestorage.googleapis.com",qA="storageBucket",LM=2*60*1e3,VM=10*60*1e3;/**
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
 */class Ve extends Sn{constructor(e,n,r=0){super(zd(e),`Firebase Storage: ${n} (${zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function zd(t){return"storage/"+t}function Mg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ve(Le.UNKNOWN,t)}function MM(t){return new Ve(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UM(t){return new Ve(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ve(Le.UNAUTHENTICATED,t)}function jM(){return new Ve(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $M(t){return new Ve(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function BM(){return new Ve(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zM(){return new Ve(Le.CANCELED,"User canceled the upload/download.")}function HM(t){return new Ve(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function WM(t){return new Ve(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qM(){return new Ve(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qA+"' property when initializing the app?")}function KM(){return new Ve(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GM(){return new Ve(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QM(t){return new Ve(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kp(t){return new Ve(Le.INVALID_ARGUMENT,t)}function KA(){return new Ve(Le.APP_DELETED,"The Firebase app was deleted.")}function YM(t){return new Ve(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ra(t,e){return new Ve(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Qo(t){throw new Ve(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ht{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ht.makeFromUrl(e,n)}catch{return new Ht(e,"")}if(r.path==="")return r;throw WM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},P=n===WA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${P}/${i}/${b}`,"i"),T=[{regex:l,indices:u,postModify:s},{regex:E,indices:C,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<T.length;O++){const U=T[O],B=U.regex.exec(e);if(B){const I=B[U.indices.bucket];let y=B[U.indices.path];y||(y=""),r=new Ht(I,y),U.postModify(r);break}}if(r==null)throw HM(e);return r}}class JM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function XM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(E,u())},b)}function m(){s&&clearTimeout(s)}function E(b,...v){if(c){m();return}if(b){m(),d.call(null,b,...v);return}if(u()||o){m(),d.call(null,b,...v);return}r<64&&(r*=2);let T;l===1?(l=2,T=0):T=(r+Math.random())*1e3,f(T)}let C=!1;function P(b){C||(C=!0,m(),!c&&(i!==null?(b||(l=2),clearTimeout(i),f(0)):b||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function ZM(t){t(!1)}/**
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
 */function eU(t){return t!==void 0}function tU(t){return typeof t=="object"&&!Array.isArray(t)}function Ug(t){return typeof t=="string"||t instanceof String}function Yw(t){return Fg()&&t instanceof Blob}function Fg(){return typeof Blob<"u"}function Jw(t,e,n,r){if(r<e)throw kp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw kp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function jg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function GA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Li;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Li||(Li={}));/**
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
 */function nU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class rU{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,E=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new su(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Li.NO_ERROR,u=s.getStatus();if(!l||nU(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Li.ABORT;r(!1,new su(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new su(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());eU(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Mg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?KA():zM();o(u)}else{const u=BM();o(u)}};this.canceled_?n(!1,new su(!1,null,!0)):this.backoffId_=XM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class su{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lU(t,e,n,r,i,s,o=!0,l=!1){const u=GA(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return oU(d,e),iU(d,n),sU(d,s),aU(d,r),new rU(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function uU(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function cU(...t){const e=uU();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fg())return new Blob(t);throw new Ve(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hU(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function dU(t){if(typeof atob>"u")throw QM("base-64");return atob(t)}/**
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
 */const On={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hd{constructor(e,n){this.data=e,this.contentType=n||null}}function fU(t,e){switch(t){case On.RAW:return new Hd(QA(e));case On.BASE64:case On.BASE64URL:return new Hd(YA(t,e));case On.DATA_URL:return new Hd(mU(e),gU(e))}throw Mg()}function QA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pU(t){let e;try{e=decodeURIComponent(t)}catch{throw Ra(On.DATA_URL,"Malformed data URL.")}return QA(e)}function YA(t,e){switch(t){case On.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ra(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case On.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ra(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=dU(e)}catch(i){throw i.message.includes("polyfill")?i:Ra(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class JA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ra(On.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yU(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mU(t){const e=new JA(t);return e.base64?YA(On.BASE64,e.rest):pU(e.rest)}function gU(t){return new JA(t).contentType}function yU(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dr{constructor(e,n){let r=0,i="";Yw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Yw(this.data_)){const r=this.data_,i=hU(r,e,n);return i===null?null:new Dr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dr(r,!0)}}static getBlob(...e){if(Fg()){const n=e.map(r=>r instanceof Dr?r.data_:r);return new Dr(cU.apply(null,n))}else{const n=e.map(o=>Ug(o)?fU(On.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Dr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function XA(t){let e;try{e=JSON.parse(t)}catch{return null}return tU(e)?e:null}/**
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
 */function _U(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vU(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ZA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function wU(t,e){return e}class Et{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||wU}}let ou=null;function EU(t){return!Ug(t)||t.length<2?t:ZA(t)}function e1(){if(ou)return ou;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(s,o){return EU(o)}const n=new Et("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Et("size");return i.xform=r,t.push(i),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),ou=t,ou}function TU(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ht(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function IU(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return TU(r,t),r}function t1(t,e,n){const r=XA(e);return r===null?null:IU(t,r,n)}function SU(t,e,n,r){const i=XA(e);if(i===null||!Ug(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),E=jg(m,n,r),C=GA({alt:"media",token:c});return E+C})[0]}function AU(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class n1{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function r1(t){if(!t)throw Mg()}function kU(t,e){function n(r,i){const s=t1(t,i,e);return r1(s!==null),s}return n}function RU(t,e){function n(r,i){const s=t1(t,i,e);return r1(s!==null),SU(s,i,t.host,t._protocol)}return n}function i1(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=jM():i=FM():n.getStatus()===402?i=UM(t.bucket):n.getStatus()===403?i=$M(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function PU(t){const e=i1(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=MM(t.path)),s.serverResponse=i.serverResponse,s}return n}function CU(t,e,n){const r=e.fullServerUrl(),i=jg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new n1(i,s,RU(t,n),o);return l.errorHandler=PU(e),l}function bU(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xU(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bU(null,e)),r}function NU(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let O=0;O<2;O++)T=T+Math.random().toString().slice(2);return T}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=xU(e,r,i),d=AU(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=Dr.getBlob(f,r,m);if(E===null)throw KM();const C={name:c.fullPath},P=jg(s,t.host,t._protocol),b="POST",v=t.maxUploadRetryTime,_=new n1(P,b,kU(t,n),v);return _.urlParams=C,_.headers=o,_.body=E.uploadData(),_.errorHandler=i1(e),_}class DU{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Li.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Li.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Li.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw Qo("cannot .send() more than once");if(es(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OU extends DU{initXhr(){this.xhr_.responseType="text"}}function s1(){return new OU}/**
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
 */class qi{constructor(e,n){this._service=e,n instanceof Ht?this._location=n:this._location=Ht.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qi(e,n)}get root(){const e=new Ht(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ZA(this._location.path)}get storage(){return this._service}get parent(){const e=_U(this._location.path);if(e===null)return null;const n=new Ht(this._location.bucket,e);return new qi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YM(e)}}function LU(t,e,n){t._throwIfRoot("uploadBytes");const r=NU(t.storage,t._location,e1(),new Dr(e,!0),n);return t.storage.makeRequestWithTokens(r,s1).then(i=>({metadata:i,ref:t}))}function VU(t){t._throwIfRoot("getDownloadURL");const e=CU(t.storage,t._location,e1());return t.storage.makeRequestWithTokens(e,s1).then(n=>{if(n===null)throw GM();return n})}function MU(t,e){const n=vU(t._location.path,e),r=new Ht(t._location.bucket,n);return new qi(t.storage,r)}/**
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
 */function UU(t){return/^[A-Za-z]+:\/\//.test(t)}function FU(t,e){return new qi(t,e)}function o1(t,e){if(t instanceof $g){const n=t;if(n._bucket==null)throw qM();const r=new qi(n,n._bucket);return e!=null?o1(r,e):r}else return e!==void 0?MU(t,e):t}function jU(t,e){if(e&&UU(e)){if(t instanceof $g)return FU(t,e);throw kp("To use ref(service, url), the first argument must be a Storage instance.")}else return o1(t,e)}function Xw(t,e){const n=e==null?void 0:e[qA];return n==null?null:Ht.makeFromBucketSpec(n,t)}function $U(t,e,n,r={}){t.host=`${e}:${n}`;const i=es(e);i&&Um(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:fI(s,t.app.options.projectId))}class $g{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=WA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LM,this._maxUploadRetryTime=VM,this._requests=new Set,i!=null?this._bucket=Ht.makeFromBucketSpec(i,this._host):this._bucket=Xw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ht.makeFromBucketSpec(this._url,e):this._bucket=Xw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new JM(KA());{const o=lU(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Zw="@firebase/storage",e0="0.14.2";/**
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
 */const a1="storage";function T9(t,e,n){return t=ne(t),LU(t,e,n)}function I9(t){return t=ne(t),VU(t)}function S9(t,e){return t=ne(t),jU(t,e)}function BU(t=Yc(),e){t=ne(t);const r=ts(t,a1).getImmediate({identifier:e}),i=cI("storage");return i&&zU(r,...i),r}function zU(t,e,n,r={}){$U(t,e,n,r)}function HU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $g(n,r,i,e,ns)}function WU(){Tn(new ln(a1,HU,"PUBLIC").setMultipleInstances(!0)),Vt(Zw,e0,""),Vt(Zw,e0,"esm2020")}WU();const l1="@firebase/installations",Bg="0.6.21";/**
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
 */const u1=1e4,c1=`w:${Bg}`,h1="FIS_v2",qU="https://firebaseinstallations.googleapis.com/v1",KU=60*60*1e3,GU="installations",QU="Installations";/**
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
 */const YU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ki=new Zi(GU,QU,YU);function d1(t){return t instanceof Sn&&t.code.includes("request-failed")}/**
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
 */function f1({projectId:t}){return`${qU}/projects/${t}/installations`}function p1(t){return{token:t.token,requestStatus:2,expiresIn:XU(t.expiresIn),creationTime:Date.now()}}async function m1(t,e){const r=(await e.json()).error;return Ki.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function g1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function JU(t,{refreshToken:e}){const n=g1(t);return n.append("Authorization",ZU(e)),n}async function y1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function XU(t){return Number(t.replace("s","000"))}function ZU(t){return`${h1} ${t}`}/**
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
 */async function e4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=f1(t),i=g1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:h1,appId:t.appId,sdkVersion:c1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await y1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:p1(c.authToken)}}else throw await m1("Create Installation",u)}/**
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
 */function _1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function t4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const n4=/^[cdef][\w-]{21}$/,Rp="";function r4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=i4(t);return n4.test(n)?n:Rp}catch{return Rp}}function i4(t){return t4(t).substr(0,22)}/**
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
 */function Ph(t){return`${t.appName}!${t.appId}`}/**
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
 */const v1=new Map;function w1(t,e){const n=Ph(t);E1(n,e),s4(n,e)}function E1(t,e){const n=v1.get(t);if(n)for(const r of n)r(e)}function s4(t,e){const n=o4();n&&n.postMessage({key:t,fid:e}),a4()}let bi=null;function o4(){return!bi&&"BroadcastChannel"in self&&(bi=new BroadcastChannel("[Firebase] FID Change"),bi.onmessage=t=>{E1(t.data.key,t.data.fid)}),bi}function a4(){v1.size===0&&bi&&(bi.close(),bi=null)}/**
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
 */const l4="firebase-installations-database",u4=1,Gi="firebase-installations-store";let Wd=null;function zg(){return Wd||(Wd=Qc(l4,u4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gi)}}})),Wd}async function Rc(t,e){const n=Ph(t),i=(await zg()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&w1(t,e.fid),e}async function T1(t){const e=Ph(t),r=(await zg()).transaction(Gi,"readwrite");await r.objectStore(Gi).delete(e),await r.done}async function Ch(t,e){const n=Ph(t),i=(await zg()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&w1(t,l.fid),l}/**
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
 */async function Hg(t){let e;const n=await Ch(t.appConfig,r=>{const i=c4(r),s=h4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function c4(t){const e=t||{fid:r4(),registrationStatus:0};return I1(e)}function h4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ki.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=d4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:f4(t)}:{installationEntry:e}}async function d4(t,e){try{const n=await e4(t,e);return Rc(t.appConfig,n)}catch(n){throw d1(n)&&n.customData.serverCode===409?await T1(t.appConfig):await Rc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function f4(t){let e=await t0(t.appConfig);for(;e.registrationStatus===1;)await _1(100),e=await t0(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hg(t);return r||n}return e}function t0(t){return Ch(t,e=>{if(!e)throw Ki.create("installation-not-found");return I1(e)})}function I1(t){return p4(t)?{fid:t.fid,registrationStatus:0}:t}function p4(t){return t.registrationStatus===1&&t.registrationTime+u1<Date.now()}/**
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
 */async function m4({appConfig:t,heartbeatServiceProvider:e},n){const r=g4(t,n),i=JU(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:c1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await y1(()=>fetch(r,l));if(u.ok){const c=await u.json();return p1(c)}else throw await m1("Generate Auth Token",u)}function g4(t,{fid:e}){return`${f1(t)}/${e}/authTokens:generate`}/**
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
 */async function Wg(t,e=!1){let n;const r=await Ch(t.appConfig,s=>{if(!S1(s))throw Ki.create("not-registered");const o=s.authToken;if(!e&&v4(o))return s;if(o.requestStatus===1)return n=y4(t,e),s;{if(!navigator.onLine)throw Ki.create("app-offline");const l=E4(s);return n=_4(t,l),l}});return n?await n:r.authToken}async function y4(t,e){let n=await n0(t.appConfig);for(;n.authToken.requestStatus===1;)await _1(100),n=await n0(t.appConfig);const r=n.authToken;return r.requestStatus===0?Wg(t,e):r}function n0(t){return Ch(t,e=>{if(!S1(e))throw Ki.create("not-registered");const n=e.authToken;return T4(n)?{...e,authToken:{requestStatus:0}}:e})}async function _4(t,e){try{const n=await m4(t,e),r={...e,authToken:n};return await Rc(t.appConfig,r),n}catch(n){if(d1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await T1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Rc(t.appConfig,r)}throw n}}function S1(t){return t!==void 0&&t.registrationStatus===2}function v4(t){return t.requestStatus===2&&!w4(t)}function w4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+KU}function E4(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function T4(t){return t.requestStatus===1&&t.requestTime+u1<Date.now()}/**
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
 */async function I4(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hg(e);return r?r.catch(console.error):Wg(e).catch(console.error),n.fid}/**
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
 */async function S4(t,e=!1){const n=t;return await A4(n),(await Wg(n,e)).token}async function A4(t){const{registrationPromise:e}=await Hg(t);e&&await e}/**
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
 */function k4(t){if(!t||!t.options)throw qd("App Configuration");if(!t.name)throw qd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qd(t){return Ki.create("missing-app-config-values",{valueName:t})}/**
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
 */const A1="installations",R4="installations-internal",P4=t=>{const e=t.getProvider("app").getImmediate(),n=k4(e),r=ts(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},C4=t=>{const e=t.getProvider("app").getImmediate(),n=ts(e,A1).getImmediate();return{getId:()=>I4(n),getToken:i=>S4(n,i)}};function b4(){Tn(new ln(A1,P4,"PUBLIC")),Tn(new ln(R4,C4,"PRIVATE"))}b4();Vt(l1,Bg);Vt(l1,Bg,"esm2020");/**
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
 */const x4="/firebase-messaging-sw.js",N4="/firebase-cloud-messaging-push-scope",k1="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",D4="https://fcmregistrations.googleapis.com/v1",R1="google.c.a.c_id",O4="google.c.a.c_l",L4="google.c.a.ts",V4="google.c.a.e",r0=1e4;var i0;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(i0||(i0={}));/**
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
 */var sl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(sl||(sl={}));/**
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
 */function Gn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function M4(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Kd="fcm_token_details_db",U4=5,s0="fcm_token_object_Store";async function F4(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Kd))return null;let e=null;return(await Qc(Kd,U4,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(s0))return;const l=o.objectStore(s0),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:Gn(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Gn(c.auth),p256dh:Gn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Gn(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:Gn(c.auth),p256dh:Gn(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:Gn(c.vapidKey)}}}}}})).close(),await xd(Kd),await xd("fcm_vapid_details_db"),await xd("undefined"),j4(e)?e:null}function j4(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const $4="firebase-messaging-database",B4=1,ol="firebase-messaging-store";let Gd=null;function P1(){return Gd||(Gd=Qc($4,B4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ol)}}})),Gd}async function z4(t){const e=C1(t),r=await(await P1()).transaction(ol).objectStore(ol).get(e);if(r)return r;{const i=await F4(t.appConfig.senderId);if(i)return await qg(t,i),i}}async function qg(t,e){const n=C1(t),i=(await P1()).transaction(ol,"readwrite");return await i.objectStore(ol).put(e,n),await i.done,e}function C1({appConfig:t}){return t.appId}/**
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
 */const H4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},At=new Zi("messaging","Messaging",H4);/**
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
 */async function W4(t,e){const n=await Gg(t),r=b1(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Kg(t.appConfig),i)).json()}catch(o){throw At.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw At.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw At.create("token-subscribe-no-token");return s.token}async function q4(t,e){const n=await Gg(t),r=b1(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Kg(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw At.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw At.create("token-update-failed",{errorInfo:o})}if(!s.token)throw At.create("token-update-no-token");return s.token}async function K4(t,e){const r={method:"DELETE",headers:await Gg(t)};try{const s=await(await fetch(`${Kg(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw At.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw At.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Kg({projectId:t}){return`${D4}/projects/${t}/registrations`}async function Gg({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function b1({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==k1&&(i.web.applicationPubKey=r),i}/**
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
 */const G4=7*24*60*60*1e3;async function Q4(t){const e=await J4(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Gn(e.getKey("auth")),p256dh:Gn(e.getKey("p256dh"))},r=await z4(t.firebaseDependencies);if(r){if(X4(r.subscriptionOptions,n))return Date.now()>=r.createTime+G4?Y4(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await K4(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return o0(t.firebaseDependencies,n)}else return o0(t.firebaseDependencies,n)}async function Y4(t,e){try{const n=await q4(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await qg(t.firebaseDependencies,r),n}catch(n){throw n}}async function o0(t,e){const r={token:await W4(t,e),createTime:Date.now(),subscriptionOptions:e};return await qg(t,r),r.token}async function J4(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:M4(e)})}function X4(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function a0(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Z4(e,t),eF(e,t),tF(e,t),e}function Z4(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function eF(t,e){e.data&&(t.data=e.data)}function tF(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function nF(t){return typeof t=="object"&&!!t&&R1 in t}/**
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
 */rF("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function rF(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function iF(t){if(!t||!t.options)throw Qd("App Configuration Object");if(!t.name)throw Qd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Qd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Qd(t){return At.create("missing-app-config-values",{valueName:t})}/**
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
 */class sF{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=iF(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function oF(t){try{t.swRegistration=await navigator.serviceWorker.register(x4,{scope:N4}),t.swRegistration.update().catch(()=>{}),await aF(t.swRegistration)}catch(e){throw At.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function aF(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${r0} ms`)),r0),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
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
 */async function lF(t,e){if(!e&&!t.swRegistration&&await oF(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw At.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function uF(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=k1)}/**
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
 */async function x1(t,e){if(!navigator)throw At.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw At.create("permission-blocked");return await uF(t,e==null?void 0:e.vapidKey),await lF(t,e==null?void 0:e.serviceWorkerRegistration),Q4(t)}/**
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
 */async function cF(t,e,n){const r=hF(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[R1],message_name:n[O4],message_time:n[L4],message_device_time:Math.floor(Date.now()/1e3)})}function hF(t){switch(t){case sl.NOTIFICATION_CLICKED:return"notification_open";case sl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function dF(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===sl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(a0(n)):t.onMessageHandler.next(a0(n)));const r=n.data;nF(r)&&r[V4]==="1"&&await cF(t,n.messageType,r)}const l0="@firebase/messaging",u0="0.12.25";/**
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
 */const fF=t=>{const e=new sF(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>dF(e,n)),e},pF=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>x1(e,r)}};function mF(){Tn(new ln("messaging",fF,"PUBLIC")),Tn(new ln("messaging-internal",pF,"PRIVATE")),Vt(l0,u0),Vt(l0,u0,"esm2020")}/**
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
 */async function N1(){try{await mI()}catch{return!1}return typeof window<"u"&&pI()&&lx()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function gF(t=Yc()){return N1().then(e=>{if(!e)throw At.create("unsupported-browser")},e=>{throw At.create("indexed-db-unsupported")}),ts(ne(t),"messaging").getImmediate()}async function yF(t,e){return t=ne(t),x1(t,e)}mF();const _F={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},bh=_I(_F),Jt=dL(bh);zD(Jt,JI);const $t=wM(bh),A9=BU(bh),Yd=new Nn;let Pp=null;const vF="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";N1().then(t=>{t&&(Pp=gF(bh))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var Qi;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Qi||(Qi={}));class Nu extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const wF=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},EF=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:wF(t),s=()=>i()!=="web",o=f=>{const m=c.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(E=>E.name===f)},u=f=>t.console.error(f),c=new Map,d=(f,m={})=>{const E=c.get(f);if(E)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),E.proxy;const C=i(),P=l(f);let b;const v=async()=>(!b&&C in m?b=typeof m[C]=="function"?b=await m[C]():b=m[C]:e!==null&&!b&&"web"in m&&(b=typeof m.web=="function"?b=await m.web():b=m.web),b),_=(y,w)=>{var k,R;if(P){const x=P==null?void 0:P.methods.find(S=>w===S.name);if(x)return x.rtype==="promise"?S=>n.nativePromise(f,w.toString(),S):(S,re)=>n.nativeCallback(f,w.toString(),S,re);if(y)return(k=y[w])===null||k===void 0?void 0:k.bind(y)}else{if(y)return(R=y[w])===null||R===void 0?void 0:R.bind(y);throw new Nu(`"${f}" plugin is not implemented on ${C}`,Qi.Unimplemented)}},T=y=>{let w;const k=(...R)=>{const x=v().then(S=>{const re=_(S,y);if(re){const me=re(...R);return w=me==null?void 0:me.remove,me}else throw new Nu(`"${f}.${y}()" is not implemented on ${C}`,Qi.Unimplemented)});return y==="addListener"&&(x.remove=async()=>w()),x};return k.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:y,writable:!1,configurable:!1}),k},O=T("addListener"),U=T("removeListener"),B=(y,w)=>{const k=O({eventName:y},w),R=async()=>{const S=await k;U({eventName:y,callbackId:S},w)},x=new Promise(S=>k.then(()=>S({remove:R})));return x.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await R()},x},I=new Proxy({},{get(y,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return P?B:O;case"removeListener":return U;default:return T(w)}}});return r[f]=I,c.set(f,{name:f,proxy:I,platforms:new Set([...Object.keys(m),...P?[C]:[]])}),I};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=u,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Nu,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},TF=t=>t.Capacitor=EF(t),gn=TF(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),mi=gn.registerPlugin;class xh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new gn.Exception(e,Qi.Unimplemented)}unavailable(e="not available"){return new gn.Exception(e,Qi.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const IF=mi("WebView"),c0=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),h0=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class SF extends xh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=h0(i).trim(),s=h0(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=c0(e.key),r=c0(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const AF=mi("CapacitorCookies",{web:()=>new SF}),kF=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),RF=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},PF=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,u;return Array.isArray(o)?(u="",o.forEach(c=>{l=e?encodeURIComponent(c):c,u+=`${s}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${s}=${l}`),`${r}&${u}`},"").substr(1):null,D1=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=RF(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{s.append(u,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class CF extends xh{async request(e){const n=D1(e,e.webFetchExtra),r=PF(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let u,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),u=await kF(c);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:u,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const bF=mi("CapacitorHttp",{web:()=>new CF});var Cp;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Cp||(Cp={}));var bp;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(bp||(bp={}));class xF extends xh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const NF=mi("SystemBars",{web:()=>new xF}),k9=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:gn,CapacitorCookies:AF,CapacitorException:Nu,CapacitorHttp:bF,get ExceptionCode(){return Qi},get SystemBarType(){return bp},SystemBars:NF,get SystemBarsStyle(){return Cp},WebPlugin:xh,WebView:IF,buildRequestInit:D1,registerPlugin:mi},Symbol.toStringTag,{value:"Module"}));var d0;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(d0||(d0={}));var f0;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(f0||(f0={}));const DF=mi("FirebaseAuthentication",{web:()=>oe(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),O1=D.createContext();function Eo(){return D.useContext(O1)}function OF({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(!0),s=D.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async P=>{if(!P){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",P.email);try{const b=Xr($t,"users",P.uid),v=await zA(b),_=P.email==="prince86944@gmail.com";if(v.exists()){const T=v.data();console.log("[AUTH] Existing user data found:",T.role),_&&T.role!==o.SUPER_ADMIN?(await $s(b,{role:o.SUPER_ADMIN}),n({...P,...T,role:o.SUPER_ADMIN})):n({...P,...T})}else{console.log("[AUTH] No existing profile. Creating new entry...");const T={uid:P.uid,name:P.displayName||"Scholar",email:P.email,phone:P.phoneNumber||"",createdAt:zw(),role:_?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await Qw(b,T),n({...P,...T})}}catch(b){console.error("[AUTH] Profile sync critical failure:",b),n({uid:P.uid,email:P.email,name:P.displayName||"Scholar",role:P.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function u(P,b,v,_){const T=await OD(Jt,P,b),O={uid:T.user.uid,name:v,email:P,phone:_,createdAt:zw(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await Qw(Xr($t,"users",T.user.uid),O),T.user}async function c(P,b){return LD(Jt,P,b)}async function d(){var b;if(gn.isNativePlatform())try{const v=await DF.signInWithGoogle();if((b=v==null?void 0:v.credential)!=null&&b.idToken){const _=Nn.credential(v.credential.idToken),T=await rh(Jt,_);return await l(T.user),T.user}throw new Error("Native Google Login failed")}catch(v){console.error("Native Google Login Error:",v);const _=await jv(Jt,Yd);return await l(_.user),_.user}else try{const v=await jv(Jt,Yd);return await l(v.user),v.user}catch(v){return console.warn("Popup failed or blocked, falling back to Redirect...",v),await SO(Jt,Yd)}}function f(P){return window.recaptchaVerifier||(window.recaptchaVerifier=new fO(Jt,"recaptcha-container",{size:"invisible"})),mO(Jt,P,window.recaptchaVerifier)}async function m(P){e&&(await $s(Xr($t,"users",e.uid),P),n(b=>({...b,...P})))}function E(){return KD(Jt)}D.useEffect(()=>qD(Jt,async b=>{e||i(!0);try{b?await l(b):n(null)}catch(v){console.error("Auth sync error:",v)}finally{i(!1)}}),[]),D.useEffect(()=>{RO(Jt).then(async P=>{P!=null&&P.user&&(console.log("[AUTH] Redirect result success:",P.user.email),await l(P.user))}).catch(P=>{console.error("[AUTH] Redirect result error:",P)})},[]);const C={user:e,ROLES:o,login:c,signup:u,logout:E,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return A.jsx(O1.Provider,{value:C,children:t})}const qn=mi("Preferences",{web:()=>oe(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),_e=mi("AppBlocker"),L1=D.createContext(null);function p0(){return D.useContext(L1)}function LF({children:t}){const{user:e}=Eo(),n=(F,j)=>{try{const Y=localStorage.getItem(F);return Y!==null?JSON.parse(Y):j}catch{return j}},[r,i]=D.useState(!1),[s,o]=D.useState(0),[l,u]=D.useState("OTHERS"),[c,d]=D.useState(0),[f,m]=D.useState(0),[E,C]=D.useState(0),[P,b]=D.useState("COUNTDOWN"),[v,_]=D.useState(!1),[T,O]=D.useState(!1),[U,B]=D.useState(()=>n("allowedPackages","")),[I,y]=D.useState([]),[w,k]=D.useState(""),R=D.useRef(null),x=()=>{var F,j,Y,se,Ee;return gn.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((j=(F=window.Capacitor).isNativePlatform)==null?void 0:j.call(F))||((se=(Y=window.Capacitor).isPluginAvailable)==null?void 0:se.call(Y,"AppBlocker")))||((Ee=gn.isPluginAvailable)==null?void 0:Ee.call(gn,"AppBlocker"))},S=async()=>{if(x())try{if(_e&&_e.getInstalledApps){const{apps:F}=await _e.getInstalledApps();y(F.sort((j,Y)=>j.name.localeCompare(Y.name)))}}catch(F){console.error("Fetch Apps Error:",F)}};D.useEffect(()=>{(async()=>{if(x()){await S();try{const j=await qn.get({key:"countdownEndTime"}),Y=Number(j.value||0);if(Y>Date.now()){const se=Math.ceil((Y-Date.now())/1e3);o(se),i(!0),b("COUNTDOWN");const Ee=await qn.get({key:"allowedPackages"});Ee.value&&B(Ee.value),console.log("Restored active focus session on initialization:",se,"seconds remaining")}else _e&&_e.stopBlocker&&await _e.stopBlocker(),await qn.set({key:"isBlockerActive",value:"false"}),await qn.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(j){console.error("Error restoring blocker state:",j)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const re=F=>{if(B(F),localStorage.setItem("allowedPackages",JSON.stringify(F)),x()){qn.set({key:"allowedPackages",value:F});try{const j=(F||"").split(",").filter(Boolean);j.includes("com.apnacollegebihar.online")||j.push("com.apnacollegebihar.online"),_e&&_e.setAllowedPackages&&_e.setAllowedPackages({packages:j})}catch{}}},me=F=>{if(F||_(!1),i(F),localStorage.setItem("timerActive",JSON.stringify(F)),x())try{if(F){if(_e&&_e.setBlockerActive&&_e.setBlockerActive({active:!0}),P==="COUNTDOWN"){_e&&_e.startCountdown&&_e.startCountdown({minutes:Math.ceil(s/60)});const Y=Date.now()+s*1e3;qn.set({key:"countdownEndTime",value:String(Y)})}const j=(U||"").split(",").filter(Boolean);j.includes("com.apnacollegebihar.online")||j.push("com.apnacollegebihar.online"),_e&&_e.setAllowedPackages&&_e.setAllowedPackages({packages:j}),qn.set({key:"isBlockerActive",value:"true"})}else _e&&_e.stopBlocker&&_e.stopBlocker(),qn.set({key:"isBlockerActive",value:"false"}),qn.set({key:"countdownEndTime",value:"0"})}catch(j){console.error("Native Blocker Error:",j)}},Pt=F=>{O(F),localStorage.setItem("focusBroken",JSON.stringify(F))};D.useEffect(()=>{const F=j=>{j.key==="timerActive"&&i(JSON.parse(j.newValue)),j.key==="focusBroken"&&O(JSON.parse(j.newValue))};return window.addEventListener("storage",F),()=>window.removeEventListener("storage",F)},[]),D.useEffect(()=>{r||o(P==="COUNTDOWN"?c*3600+f*60+E:0)},[P,c,f,E,r]);const Qt=async(F=null)=>{if(!e)return;const j=F||(v?c*3600+f*60+E+s:P==="STOPWATCH"?s:c*3600+f*60-s);if(j<5){_(!1),me(!1);return}try{const Y=new Date().toLocaleDateString("en-CA");await DM(gs($t,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:j,date:Y,createdAt:new Date().toISOString()});const se=Xr($t,"users",e.uid),Ee=await zA(se);if(Ee.exists()){const Te=Ee.data(),je=Te.lastStudyDate!==Y?j:(Te.todayStudyTime||0)+j,Yt=new Date;Yt.setDate(Yt.getDate()-1);const os=Yt.toLocaleDateString("en-CA");let gi=Te.streak||0,zn=Te.streakDate||"";zn!==Y&&zn!==os&&(gi=0),je>=7200&&zn!==Y&&(zn===os?gi+=1:gi=1,zn=Y),await $s(se,{totalStudyTime:(Te.totalStudyTime||0)+j,todayStudyTime:je,lastStudyDate:Y,streak:gi,streakDate:zn,isStudying:!1})}w&&(await $s(Xr($t,"Tasks",w),{done:!0}),k("")),_(!1),me(!1)}catch(Y){_(!1),console.error("Global Save Error:",Y)}};D.useEffect(()=>{e&&$s(Xr($t,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),D.useEffect(()=>{const F=j=>{r&&(j.preventDefault(),j.returnValue="")};return window.addEventListener("beforeunload",F),()=>{window.removeEventListener("beforeunload",F)}},[r]),D.useEffect(()=>(r?R.current=setInterval(()=>{o(P==="COUNTDOWN"?F=>F<=1?(b("STOPWATCH"),_(!0),0):F-1:F=>F+1)},1e3):clearInterval(R.current),()=>clearInterval(R.current)),[r,P,e,c,f,E,w]);const W={timerActive:r,setTimerActive:me,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:u,customHours:c,setCustomHours:d,customMinutes:f,setCustomMinutes:m,customSeconds:E,setCustomSeconds:C,timerMode:P,setTimerMode:b,overtimeActive:v,setOvertimeActive:_,saveGlobalSession:Qt,focusBroken:T,setFocusBroken:Pt,allowedPackages:U,setAllowedPackages:re,installedApps:I,fetchApps:S,selectedTaskId:w,setSelectedTaskId:k,launchApp:async F=>{if(x())try{_e&&_e.launchApp&&await _e.launchApp({packageName:F})}catch(j){console.error(j)}},openAccessibilitySettings:async()=>{if(x())try{_e&&_e.openAccessibilitySettings&&await _e.openAccessibilitySettings()}catch(F){console.error(F)}}};return A.jsx(L1.Provider,{value:W,children:t})}var VF=typeof Element<"u",MF=typeof Map=="function",UF=typeof Set=="function",FF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Du(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Du(t[r],e[r]))return!1;return!0}var s;if(MF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Du(r.value[1],e.get(r.value[0])))return!1;return!0}if(UF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(FF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(VF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Du(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var jF=function(e,n){try{return Du(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const $F=Pc(jF);var BF=function(t,e,n,r,i,s,o,l){if(!t){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,l],d=0;u=new Error(e.replace(/%s/g,function(){return c[d++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},zF=BF;const m0=Pc(zF);var HF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var d=o[c];if(!u(d))return!1;var f=e[d],m=n[d];if(s=r?r.call(i,f,m,d):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const WF=Pc(HF);var V1=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(V1||{}),Jd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},g0=Object.values(V1),Nh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M1=Object.entries(Nh).reduce((t,[e,n])=>(t[n]=e,t),{}),yn="data-rh",Bs={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},zs=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},qF=t=>{let e=zs(t,"title");const n=zs(t,Bs.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=zs(t,Bs.DEFAULT_TITLE);return e||r||void 0},KF=t=>zs(t,Bs.ON_CHANGE_CLIENT_STATE)||(()=>{}),Xd=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),GF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),QF=t=>console&&typeof console.warn=="function"&&console.warn(t),Yo=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&QF(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(u=>{let c;const d=Object.keys(u);for(let m=0;m<d.length;m+=1){const E=d[m],C=E.toLowerCase();e.indexOf(C)!==-1&&!(c==="rel"&&u[c].toLowerCase()==="canonical")&&!(C==="rel"&&u[C].toLowerCase()==="stylesheet")&&(c=C),e.indexOf(E)!==-1&&(E==="innerHTML"||E==="cssText"||E==="itemprop")&&(c=E)}if(!c||!u[c])return!1;const f=u[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][f]?!1:(o[c][f]=!0,!0)}).reverse().forEach(u=>i.push(u));const l=Object.keys(o);for(let u=0;u<l.length;u+=1){const c=l[u],d={...r[c],...o[c]};r[c]=d}return i},[]).reverse()},YF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},JF=t=>({baseTag:GF(["href"],t),bodyAttributes:Xd("bodyAttributes",t),defer:zs(t,Bs.DEFER),encode:zs(t,Bs.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Xd("htmlAttributes",t),linkTags:Yo("link",["rel","href"],t),metaTags:Yo("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Yo("noscript",["innerHTML"],t),onChangeClientState:KF(t),scriptTags:Yo("script",["src","innerHTML"],t),styleTags:Yo("style",["cssText"],t),title:qF(t),titleAttributes:Xd("titleAttributes",t),prioritizeSeoTags:YF(t,Bs.PRIORITIZE_SEO_TAGS)}),U1=t=>Array.isArray(t)?t.join(""):t,XF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},Zd=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(XF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},y0=(t,e)=>({...t,[e]:void 0}),ZF=["noscript","script","style"],xp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),F1=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),ej=(t,e,n,r)=>{const i=F1(n),s=U1(e);return i?`<${t} ${yn}="true" ${i}>${xp(s,r)}</${t}>`:`<${t} ${yn}="true">${xp(s,r)}</${t}>`},tj=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const f=typeof s[d]>"u"?d:`${d}="${xp(s[d],n)}"`;return c?`${c} ${f}`:f},""),l=s.innerHTML||s.cssText||"",u=ZF.indexOf(t)===-1;return`${r}<${t} ${yn}="true" ${o}${u?"/>":`>${l}</${t}>`}`},""),j1=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Nh[r];return n[i||r]=t[r],n},e),nj=(t,e,n)=>{const r={key:e,[yn]:!0},i=j1(n,r);return[Q.createElement("title",i,e)]},Ou=(t,e)=>e.map((n,r)=>{const i={key:r,[yn]:!0};return Object.keys(n).forEach(s=>{const l=Nh[s]||s;if(l==="innerHTML"||l==="cssText"){const u=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:u}}else i[l]=n[s]}),Q.createElement(t,i)}),Xt=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>nj(t,e.title,e.titleAttributes),toString:()=>ej(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>j1(e),toString:()=>F1(e)};default:return{toComponent:()=>Ou(t,e),toString:()=>tj(t,e,n)}}},rj=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=Zd(t,Jd.meta),s=Zd(e,Jd.link),o=Zd(n,Jd.script);return{priorityMethods:{toComponent:()=>[...Ou("meta",i.priority),...Ou("link",s.priority),...Ou("script",o.priority)],toString:()=>`${Xt("meta",i.priority,r)} ${Xt("link",s.priority,r)} ${Xt("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},ij=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:u,prioritizeSeoTags:c}=t;let{linkTags:d,metaTags:f,scriptTags:m}=t,E={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:E,linkTags:d,metaTags:f,scriptTags:m}=rj(t)),{priority:E,base:Xt("base",e,r),bodyAttributes:Xt("bodyAttributes",n,r),htmlAttributes:Xt("htmlAttributes",i,r),link:Xt("link",d,r),meta:Xt("meta",f,r),noscript:Xt("noscript",s,r),script:Xt("script",m,r),style:Xt("style",o,r),title:Xt("title",{title:l,titleAttributes:u},r)}},Np=ij,au=[],Qg=!!(typeof window<"u"&&window.document&&window.document.createElement),Dp=class{constructor(t,e){Hn(this,"instances",[]);Hn(this,"canUseDOM",Qg);Hn(this,"context");Hn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?au:this.instances,add:t=>{(this.canUseDOM?au:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?au:this.instances).indexOf(t);(this.canUseDOM?au:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Np({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},sj=parseInt(Q.version.split(".")[0],10),Op=sj>=19,oj={},$1=Q.createContext(oj),Hs,B1=(Hs=class extends D.Component{constructor(n){super(n);Hn(this,"helmetData");Op?this.helmetData=null:this.helmetData=new Dp(this.props.context||{},Hs.canUseDOM)}render(){return Op?Q.createElement(Q.Fragment,null,this.props.children):Q.createElement($1.Provider,{value:this.helmetData.value},this.props.children)}},Hn(Hs,"canUseDOM",Qg),Hs),hs=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${yn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const u=document.createElement(t);for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c))if(c==="innerHTML")u.innerHTML=l.innerHTML;else if(c==="cssText"){const d=l.cssText;u.appendChild(document.createTextNode(d))}else{const d=c,f=typeof l[d]>"u"?"":l[d];u.setAttribute(c,f)}u.setAttribute(yn,"true"),i.some((c,d)=>(o=d,u.isEqualNode(c)))?i.splice(o,1):s.push(u)}),i.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},Lp=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(yn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);const c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(yn):n.getAttribute(yn)!==o.join(",")&&n.setAttribute(yn,o.join(","))},aj=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=U1(t)),Lp("title",e)},_0=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:u,scriptTags:c,styleTags:d,title:f,titleAttributes:m}=t;Lp("body",r),Lp("html",i),aj(f,m);const E={baseTag:hs("base",n),linkTags:hs("link",s),metaTags:hs("meta",o),noscriptTags:hs("noscript",l),scriptTags:hs("script",c),styleTags:hs("style",d)},C={},P={};Object.keys(E).forEach(b=>{const{newTags:v,oldTags:_}=E[b];v.length&&(C[b]=v),_.length&&(P[b]=E[b].oldTags)}),e&&e(),u(t,C,P)},Jo=null,lj=t=>{Jo&&cancelAnimationFrame(Jo),t.defer?Jo=requestAnimationFrame(()=>{_0(t,()=>{Jo=null})}):(_0(t),Jo=null)},uj=lj,v0=class extends D.Component{constructor(){super(...arguments);Hn(this,"rendered",!1)}shouldComponentUpdate(e){return!WF(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=JF(e.get().map(s=>{const{context:o,...l}=s.props;return l}));B1.canUseDOM?uj(i):Np&&(r=Np(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Lu=[],w0=t=>{const e={};for(const n of Object.keys(t))e[M1[n]||n]=t[n];return e},Ti=t=>{const e={};for(const n of Object.keys(t)){const r=Nh[n];e[r||n]=t[n]}return e},E0=(t,e)=>{if(!Qg)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const u=e[l];u==null||u===!1?n.removeAttribute(l):u===!0?n.setAttribute(l,""):n.setAttribute(l,String(u))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},ef=()=>{const t={},e={};for(const n of Lu){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,w0(r)),i&&Object.assign(e,w0(i))}E0("html",t),E0("body",e)},cj=class extends D.Component{componentDidMount(){Lu.push(this),ef()}componentDidUpdate(){ef()}componentWillUnmount(){const t=Lu.indexOf(this);t!==-1&&Lu.splice(t,1),ef()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return Q.createElement("title",Ti(e),t)}renderBase(){const{base:t}=this.props;return t?Q.createElement("base",Ti(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Q.createElement("meta",{key:n,...Ti(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Q.createElement("link",{key:n,...Ti(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Ti(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Ti(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Ti(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Q.createElement("noscript",{key:n,...s})})}render(){return Q.createElement(Q.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},rf,hj=(rf=class extends D.Component{shouldComponentUpdate(t){return!$F(y0(this.props,"helmetData"),y0(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return m0(g0.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${g0.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),m0(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return Q.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((u,c)=>(u[M1[c]||c]=s[c],u),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Dp)){const i=r;r=new Dp(i.context,!0),delete n.helmetData}return Op?Q.createElement(cj,{...n}):r?Q.createElement(v0,{...n,context:r.value}):Q.createElement($1.Consumer,null,i=>Q.createElement(v0,{...n,context:i}))}},Hn(rf,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),rf);function dj({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return Q.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const u=document.querySelector('meta[property="og:title"]');u&&u.setAttribute("content",o);const c=document.querySelector('meta[property="og:description"]');c&&c.setAttribute("content",e)},[o,e]),A.jsxs(hj,{children:[A.jsx("title",{children:o}),A.jsx("meta",{name:"description",content:e}),A.jsx("meta",{name:"keywords",content:n}),A.jsx("link",{rel:"canonical",href:r}),A.jsx("meta",{property:"og:type",content:"website"}),A.jsx("meta",{property:"og:url",content:r}),A.jsx("meta",{property:"og:title",content:o}),A.jsx("meta",{property:"og:description",content:e}),A.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),A.jsx("meta",{property:"og:image",content:i}),A.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),A.jsx("meta",{name:"twitter:title",content:o}),A.jsx("meta",{name:"twitter:description",content:e}),A.jsx("meta",{name:"twitter:image",content:i}),s&&A.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}function T0(){gn.isNativePlatform();const t=uo(),e=Lm(),{user:n,updateProfileData:r}=Eo(),[i,s]=D.useState(""),[o,l]=D.useState(!1),[u,c]=D.useState(!1),[d,f]=D.useState(navigator.onLine),{timerActive:m}=p0();D.useEffect(()=>{const v=()=>f(!0),_=()=>f(!1);return window.addEventListener("online",v),window.addEventListener("offline",_),()=>{window.removeEventListener("online",v),window.removeEventListener("offline",_)}},[]),D.useEffect(()=>{l(!1),(async()=>{if(!(!n||!Pp||!d))try{if(await Notification.requestPermission()==="granted"){const T=await yF(Pp,{vapidKey:vF});T&&await $s(Xr($t,"users",n.uid),{fcmToken:T})}}catch(_){console.error("Push notification setup failed:",_)}})()},[n,d]),D.useEffect(()=>{if(!n||!n.uid||!d)return;const v=new Date,_=Go(gs($t,"nudges"),hn("toUserId","==",n.uid),hn("timestamp",">=",v)),T=OM(_,y=>{y.docChanges().forEach(w=>{if(w.type==="added"){const R=`📚 ${w.doc.data().fromUserName||"Scholar"} says: padh lo padh lo kam dega!`;fe(R,{duration:6e3,icon:"💡",style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Study Nudge 📚",{body:R,icon:"/logo-acb.png"})}})});(async()=>{var S;const y=new Date().toLocaleDateString("en-CA"),w=new Date().getHours();if(w>=5){const re=`morning_greeting_${y}`;if(!localStorage.getItem(re)){const me=Go(gs($t,"StudySessions"),hn("userId","==",n.uid),hn("date","==",y)),Qt=!(await iu(me)).empty||m||w>=8,W=n.name||"Bihari Babu";let F="",j="";Qt?(F="Good Morning Biru 🌞",j=`Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄

Aaj ka mission simple hai:

Bakchodi limited 😜
Mehnat unlimited 💪
Tension zero 😌

Aur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅

Din mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`):(F=`Good Morning Bhai ${W} ☀️`,j=`Uth ja bidu 😄, kitna soyega?

Naya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.

Chai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.

Aur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏

Chal bhai, aaj ka din phod dete hain. 💪🔥
Good Morning, have a great day! 🌞✨`),fe.custom(Y=>A.jsxs("div",{className:`${Y.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`,children:[A.jsxs("div",{className:"flex justify-between items-start",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"text-xl",children:"🌅"}),A.jsx("h4",{className:"text-xs font-black uppercase tracking-wider text-amber-400",children:F})]}),A.jsx("button",{onClick:()=>fe.dismiss(Y.id),className:"text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg",children:"Close"})]}),A.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300",children:j})]}),{duration:15e3}),"Notification"in window&&Notification.permission==="granted"&&new Notification(F,{body:j.replace(/\n\n/g," "),icon:"/logo-acb.png"}),localStorage.setItem(re,"true")}}let k=!1;if(w>=8){const re=`timetable_alert_${y}`;if(!localStorage.getItem(re)){const Pt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],W=(((S=n.timetableV3)==null?void 0:S[Pt])||[]).filter(F=>F.subject&&F.subject.trim()!=="");if(W.length>0){const j=`🗓️ Aaj ki Classes:
${W.map(Y=>`• ${Y.startTime||""}: ${Y.subject}`).join(`
`)}
Time par pahunch jana biru, padhai shuru karo! 😉`;fe(j,{duration:8e3,icon:"🗓️",style:{background:"#f8fafc",color:"#0f172a",fontWeight:"800",fontSize:"11px",border:"1px solid #e2e8f0"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Timetable Classes Alert",{body:j,icon:"/logo-acb.png"})}localStorage.setItem(re,"true"),k=!0}}const R=()=>{var re;if(w>=6){const me=`attendance_alert_${y}`;if(!localStorage.getItem(me)){const Qt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],F=(((re=n.timetableV3)==null?void 0:re[Qt])||[]).filter(j=>j.subject&&j.subject.trim()!=="").map(j=>j.subject.trim().toLowerCase());if(F.length>0){const j=n.attendance||[],Y=[];F.forEach(se=>{const Ee=j.find(Te=>Te.name.trim().toLowerCase()===se);if(Ee){const Te=Ee.total>0?Number((Ee.present/Ee.total*100).toFixed(1)):0,An=je=>je<75?0:je<=80?1:je<=85?2:je<=90?3:je<=95?4:5;Te<75?Y.push({type:"danger",text:`🚨 Critical Attendance Alert: ${Ee.name} me attendance sirf ${Te}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`}):Y.push({type:"success",text:`🔥 Gazab Bhai! ${Ee.name} me attendance ${Te}% hai. Sessional me +${An(Te)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`})}}),Y.forEach((se,Ee)=>{setTimeout(()=>{fe(se.text,{duration:8e3,icon:se.type==="danger"?"🚨":"🔥",style:{background:se.type==="danger"?"#fecaca":"#d1fae5",color:se.type==="danger"?"#991b1b":"#065f46",fontWeight:"800",fontSize:"11px",border:`1px solid ${se.type==="danger"?"#fca5a5":"#6ee7b7"}`}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Attendance Alert",{body:se.text,icon:"/logo-acb.png"})},Ee*1e3)})}localStorage.setItem(me,"true")}}};k?setTimeout(R,2e3):R();const x=async()=>{const re=`target_check_${y}`;if(!localStorage.getItem(re)){const me=Go(gs($t,"Tasks"),hn("userId","==",n.uid),hn("date","==",y)),Pt=await iu(me);Pt.empty?fe("🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥",{duration:8e3,icon:"🎯",style:{background:"#fffbeb",color:"#b45309",fontWeight:"800",fontSize:"11px",border:"1px solid #fde68a"}}):fe(`🎯 Targets Setup: Aaj ke ${Pt.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`,{duration:8e3,icon:"✅",style:{background:"#f0fdf4",color:"#166534",fontWeight:"800",fontSize:"11px",border:"1px solid #bbf7d0"}}),localStorage.setItem(re,"true")}};k?setTimeout(x,4e3):setTimeout(x,1500)})();const U=async()=>{if(m)return;const y=new Date().toLocaleDateString("en-CA"),w=Go(gs($t,"StudySessions"),hn("userId","==",n.uid),hn("date","==",y));if((await iu(w)).docs.reduce((re,me)=>re+(Number(me.data().duration)||0),0)>=10800)return;const x=Go(gs($t,"Tasks"),hn("userId","==",n.uid),hn("date","==",y),hn("done","==",!1));if(!(await iu(x)).empty){const re="📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";fe(re,{duration:9e3,icon:"✍️",style:{background:"#fff1f2",color:"#be123c",fontWeight:"900",fontSize:"11px",border:"1px solid #fecdd3"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Padhai Remainder! 📚",{body:re,icon:"/logo-acb.png"})}},B=setTimeout(U,12e4),I=setInterval(U,9e5);return()=>{T(),clearTimeout(B),clearInterval(I)}},[n,m,d]);const E=async v=>{if(v.preventDefault(),!(i.length<10)){c(!0);try{await r({phone:i}),l(!1)}catch(_){console.error(_)}finally{c(!1)}}},C=()=>{const{timerActive:v,timerTime:_}=p0(),[T,O]=D.useState(!1);if(!v||t.pathname==="/study")return null;const U=Math.floor(_%3600/60),B=_%60;return A.jsx("div",{className:`fixed bottom-24 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-500 transform ${T?"translate-x-[70%]":""}`,children:A.jsxs("div",{className:"bg-slate-900 border border-slate-700 p-1.5 rounded-[2rem] shadow-2xl flex items-center gap-4 group",children:[A.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center animate-pulse",children:A.jsx(Hb,{size:20,className:"text-white"})}),A.jsxs("div",{className:`flex items-center gap-4 pr-6 ${T?"opacity-0 w-0 overflow-hidden":"opacity-100"}`,children:[A.jsxs("div",{children:[A.jsx("p",{className:"text-[8px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1",children:"Live Focus"}),A.jsxs("p",{className:"text-xl font-black text-white tabular-nums tracking-tighter",children:[U.toString().padStart(2,"0"),":",B.toString().padStart(2,"0")]})]}),A.jsx("button",{onClick:()=>e("/study"),className:"px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-[9px] font-black uppercase tracking-widest",children:"Resume"})]}),A.jsx("button",{onClick:()=>O(!T),className:"p-2 text-slate-500 hover:text-white",children:T?A.jsx(pv,{size:16}):A.jsx(Wb,{size:16})})]})})},b=(v=>v.includes("/study-resources")?"Study Resources":v.includes("/study")?"Study Zone":v.includes("/notes")?"B.Tech Notes":v.includes("/pyq")?"PYQ Papers":v.includes("/syllabus")?"BEU Syllabus":v.includes("/cgpa")?"CGPA Calculator":v.includes("/ugeac-predictor")?"UGEAC Predictor":v.includes("/calculator")?"Calculator":v.includes("/achievements")?"Achievements":v.includes("/groups")?"Study Groups":v.includes("/timetable")?"BEU Timetable":v.includes("/attendance")?"BEU Attendance Tracker":v.includes("/extras")?"Personal Manager":v.includes("/calendar")?"Calendar":v.includes("/beu-result")?"BEU Result":v.includes("/admin")?"Admin Panel":"ACB Hub")(t.pathname);return A.jsxs("div",{className:"flex flex-col h-screen bg-white overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30",children:[A.jsx(dj,{title:b}),A.jsxs("div",{className:"flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-[100]",children:[A.jsxs("button",{onClick:()=>{var v;((v=t.state)==null?void 0:v.from)==="study-network"?e("/study?standalone=true",{state:{tab:"network"}}):e(-1)},className:"flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group",children:[A.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-blue-600/10 rounded-xl transition-all",children:A.jsx(pv,{size:20})}),A.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Back"})]}),A.jsxs("div",{className:"flex items-center gap-3",children:[A.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 rounded-lg object-cover shadow-sm"}),A.jsx("span",{className:"text-[10px] font-[1000] tracking-tighter uppercase text-slate-900",children:b})]})]}),A.jsx("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 p-4 md:p-6 lg:p-8 pb-32",children:A.jsx("div",{className:"max-w-7xl mx-auto min-h-[80vh]",children:A.jsx(Vm,{})})}),o&&d&&A.jsx("div",{className:"fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:A.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[A.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:A.jsx(zb,{size:32})}),A.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),A.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),A.jsxs("form",{onSubmit:E,className:"space-y-6",children:[A.jsxs("div",{className:"flex gap-2",children:[A.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),A.jsx("input",{type:"tel",maxLength:10,value:i,onChange:v=>s(v.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),A.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})}),A.jsx(C,{})]})}const fj=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Eo(),[i,s]=D.useState(""),[o,l]=D.useState(!1);if(e)return A.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:A.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),A.jsx(_a,{to:"/login",replace:!0});const u=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",c=async f=>{if(f.preventDefault(),i.length<10)return Rd.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Rd.success("Mobile number linked securely!")}catch{Rd.error("Failed to save. Try again.")}finally{l(!1)}};return u?A.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:A.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[A.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),A.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[A.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:A.jsx(sI,{className:"text-blue-500 w-10 h-10"})}),A.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),A.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),A.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[A.jsxs("div",{className:"relative group",children:[A.jsx(mv,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),A.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),A.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),A.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[A.jsx(mv,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),A.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):A.jsx(Vm,{})},pj=()=>{const{user:t,loading:e,ROLES:n}=Eo();return e?A.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:A.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?A.jsx(Vm,{}):A.jsx(_a,{to:"/",replace:!0})},mj=Q.lazy(()=>oe(()=>import("./Home.js"),["assets/Home.js","assets/chevron-down.js","assets/calendar2.js","assets/log-out.js","assets/zap.js","assets/arrow-right.js","assets/download.js","assets/graduation-cap.js","assets/check-circle.js","assets/sparkles.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/library.js","assets/users.js","assets/calculator.js","assets/link-2.js","assets/send.js","assets/briefcase.js","assets/award.js","assets/external-link.js","assets/message-circle.js","assets/youtube.js"])),I0=Q.lazy(()=>oe(()=>import("./AppHub.js"),["assets/AppHub.js","assets/log-in.js","assets/user.js","assets/calendar2.js","assets/trash-2.js","assets/log-out.js","assets/message-circle.js","assets/youtube.js","assets/globe.js","assets/user-check.js","assets/book-open.js","assets/file-text.js","assets/graduation-cap.js","assets/library.js","assets/users.js","assets/calculator.js","assets/link-2.js","assets/send.js","assets/award.js","assets/briefcase.js","assets/external-link.js"])),gj=Q.lazy(()=>oe(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),yj=Q.lazy(()=>oe(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js","assets/arrow-right.js","assets/book-open.js"])),_j=Q.lazy(()=>oe(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/graduation-cap.js","assets/check-circle-2.js","assets/zap.js","assets/layers.js","assets/send.js","assets/calculator.js","assets/download.js","assets/building-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/trash-2.js","assets/plus.js","assets/wifi.js","assets/search.js","assets/info.js","assets/external-link.js","assets/UgeacPredictor.css"])),tf=Q.lazy(()=>oe(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),nf=Q.lazy(()=>oe(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/book-open.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-right.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),S0=Q.lazy(()=>oe(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/book-open.js","assets/chevron-down.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),vj=Q.lazy(()=>oe(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/award.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js"])),wj=Q.lazy(()=>oe(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/chevron-right.js","assets/book-open.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js"])),Ej=Q.lazy(()=>oe(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/link-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/book-open.js","assets/globe.js","assets/external-link.js"])),Tj=Q.lazy(()=>oe(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),Ij=Q.lazy(()=>oe(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/book-open.js","assets/file-text.js","assets/bar-chart-3.js","assets/search.js","assets/user-check.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),Sj=Q.lazy(()=>oe(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js","assets/award.js"])),Aj=Q.lazy(()=>oe(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),kj=Q.lazy(()=>oe(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/calendar2.js","assets/link-2.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/chevron-right.js"])),Rj=Q.lazy(()=>oe(()=>import("./Timetable.js"),["assets/Timetable.js","assets/user-check.js","assets/arrow-right.js","assets/save.js","assets/info.js","assets/plus.js"])),Pj=Q.lazy(()=>oe(()=>import("./Attendance.js"),["assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),Cj=Q.lazy(()=>oe(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/globe.js","assets/external-link.js","assets/info.js"])),bj=Q.lazy(()=>oe(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js","assets/file-text.js"])),xj=Q.lazy(()=>oe(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),Nj=Q.lazy(()=>oe(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/eye.js","assets/file-text.js"])),Dj=Q.lazy(()=>oe(()=>import("./Terms.js"),["assets/Terms.js","assets/file-text.js","assets/check-circle-2.js"])),Oj=Q.lazy(()=>oe(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/user.js","assets/trash-2.js","assets/log-in.js"])),Lj=Q.lazy(()=>oe(()=>import("./About.js"),["assets/About.js","assets/graduation-cap.js","assets/sparkles.js","assets/award.js","assets/send.js","assets/book-open.js","assets/users.js","assets/calculator.js"])),Vj=Q.lazy(()=>oe(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/send.js","assets/help-circle.js","assets/chevron-down.js"])),Mj=Q.lazy(()=>oe(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js","assets/file-text.js","assets/book-open.js","assets/arrow-right.js"])),A0=Q.lazy(()=>oe(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/user-check.js","assets/calendar2.js","assets/award.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/arrow-right.js","assets/save.js","assets/BeuCgpa.js","assets/book-open.js","assets/check-circle.js","assets/chevron-up.js","assets/chevron-down.js","assets/bar-chart-3.js","assets/BeuResult.js","assets/globe.js"])),k0=Q.lazy(()=>oe(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/arrow-right.js","assets/flame.js","assets/chevron-right.js","assets/book-open.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/link-2.js","assets/globe.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/arrow-left.js","assets/save.js","assets/file-text.js"])),R0=Q.lazy(()=>oe(()=>import("./CollegePage.js"),["assets/CollegePage.js","assets/UgeacData.js","assets/building-2.js","assets/chevron-right.js","assets/wifi.js","assets/globe.js","assets/arrow-right.js","assets/award.js","assets/library.js","assets/book-open.js","assets/graduation-cap.js","assets/bar-chart-3.js","assets/help-circle.js"])),P0=Q.lazy(()=>oe(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/graduation-cap.js","assets/cpu.js","assets/book-open.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),Uj=Q.lazy(()=>oe(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/award.js","assets/check-circle-2.js"])),C0=Q.lazy(()=>oe(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),Fj=Q.lazy(()=>oe(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/calendar2.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/award.js","assets/check-circle-2.js","assets/users.js"])),jj=Q.lazy(()=>oe(()=>import("./SitemapDirectory.js"),["assets/SitemapDirectory.js","assets/UgeacData.js","assets/building-2.js","assets/cpu.js","assets/book-open.js","assets/link-2.js","assets/arrow-right.js"])),b0=Q.lazy(()=>oe(()=>import("./CompareColleges.js"),["assets/CompareColleges.js","assets/UgeacData.js","assets/layers.js","assets/arrow-right.js"])),$j=Q.lazy(()=>oe(()=>import("./PercentilePredictor.js"),["assets/PercentilePredictor.js","assets/calculator.js"]));function Bj(){return A.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[A.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),A.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function zj(){var E,C,P;const{user:t,updateProfileData:e,logout:n}=Eo(),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,u]=D.useState(""),[c,d]=D.useState(!1);if(D.useEffect(()=>{t&&(i(t.name&&t.name!=="Scholar"?t.name:""),o(t.collegeName||""),u(t.phone&&t.phone!=="NOT LINKED"?t.phone:""))},[t]),!(t&&(!(t!=null&&t.phone)||((E=t==null?void 0:t.phone)==null?void 0:E.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED"||!(t!=null&&t.name)||((C=t==null?void 0:t.name)==null?void 0:C.trim())===""||(t==null?void 0:t.name)==="Scholar"||!(t!=null&&t.collegeName)||((P=t==null?void 0:t.collegeName)==null?void 0:P.trim())==="")))return null;const m=async b=>{if(b.preventDefault(),!r.trim())return fe.error("Please enter your name!");if(!s.trim())return fe.error("Please enter your college name!");if(l.length<10)return fe.error("Enter a valid 10-digit mobile number!");d(!0);try{await e({name:r.trim(),collegeName:s.trim(),phone:l}),fe.success("Profile setup completed successfully!")}catch{fe.error("Failed to save. Try again.")}finally{d(!1)}};return A.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:A.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[A.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),A.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[A.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:A.jsx(sI,{className:"text-blue-500 w-10 h-10"})}),A.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Profile Setup"}),A.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-6",children:"Please complete your details to unlock and secure your college portal access."}),A.jsxs("form",{onSubmit:m,className:"w-full space-y-4",children:[A.jsxs("div",{children:[A.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Full Name"}),A.jsx("input",{type:"text",value:r,onChange:b=>i(b.target.value),placeholder:"YOUR FULL NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"College Name"}),A.jsx("input",{type:"text",value:s,onChange:b=>o(b.target.value),placeholder:"YOUR COLLEGE NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),A.jsxs("div",{children:[A.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Mobile Number"}),A.jsx("input",{type:"tel",value:l,onChange:b=>u(b.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),A.jsx("button",{type:"submit",disabled:c,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:c?"Saving details...":"Save & Continue"})]}),A.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function Hj(){const{user:t,loading:e}=Eo(),[n,r]=D.useState(!0),[i,s]=D.useState(window.innerWidth<768),o=gn.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const u=o||sessionStorage.getItem("standalone")==="true";if(D.useEffect(()=>{const c=()=>s(window.innerWidth<768);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),D.useEffect(()=>{const c=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(c)),()=>clearTimeout(c)},[e]),n)return A.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[A.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),A.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return A.jsxs(A.Fragment,{children:[A.jsx(Fb,{position:"top-right"}),A.jsx(zj,{}),A.jsx(Q.Suspense,{fallback:A.jsx(Bj,{}),children:A.jsxs($C,{children:[A.jsx(J,{path:"/",element:u?A.jsx(I0,{}):A.jsx(mj,{})}),A.jsx(J,{path:"/hub",element:A.jsx(I0,{})}),A.jsx(J,{path:"/login",element:A.jsx(gj,{})}),A.jsx(J,{path:"/signup",element:A.jsx(yj,{})}),A.jsx(J,{path:"/privacy-policy",element:A.jsx(Nj,{})}),A.jsx(J,{path:"/terms",element:A.jsx(Dj,{})}),A.jsx(J,{path:"/delete-account",element:A.jsx(Oj,{})}),A.jsx(J,{path:"/about",element:A.jsx(Lj,{})}),A.jsx(J,{path:"/contact",element:A.jsx(Vj,{})}),A.jsx(J,{path:"/directory",element:u?A.jsx(_a,{to:"/",replace:!0}):A.jsx(jj,{})}),A.jsxs(J,{element:A.jsx(T0,{}),children:[A.jsx(J,{path:"/search/:keyword",element:A.jsx(Mj,{})}),A.jsx(J,{path:"/notes",element:A.jsx(tf,{})}),A.jsx(J,{path:"/notes/:branchId/:semesterId",element:A.jsx(tf,{})}),A.jsx(J,{path:"/notes/:branchId",element:A.jsx(tf,{})}),A.jsx(J,{path:"/pyq",element:A.jsx(nf,{})}),A.jsx(J,{path:"/pyq/:branchId/:semesterId",element:A.jsx(nf,{})}),A.jsx(J,{path:"/pyq/:branchId",element:A.jsx(nf,{})}),A.jsx(J,{path:"/attendance",element:A.jsx(Pj,{})}),A.jsx(J,{path:"/timetable",element:A.jsx(Rj,{})}),A.jsx(J,{path:"/study",element:A.jsx(wj,{})}),A.jsx(J,{path:"/study-resources",element:A.jsx(Ej,{})}),A.jsx(J,{path:"/calculator",element:A.jsx(Tj,{})}),A.jsx(J,{path:"/groups",element:A.jsx(Aj,{})}),A.jsx(J,{path:"/groups/:groupId",element:A.jsx(kj,{})}),A.jsx(J,{path:"/achievements",element:A.jsx(Sj,{})}),A.jsx(J,{path:"/extras",element:A.jsx(bj,{})}),A.jsx(J,{path:"/calendar",element:A.jsx(xj,{})}),A.jsx(J,{path:"/cgpa",element:A.jsx(vj,{})}),A.jsx(J,{path:"/ugeac-predictor",element:A.jsx(_j,{})}),A.jsx(J,{path:"/beu-result",element:A.jsx(Cj,{})}),A.jsx(J,{path:"/syllabus",element:A.jsx(S0,{})}),A.jsx(J,{path:"/syllabus/:branchId",element:A.jsx(S0,{})}),A.jsx(J,{path:"/college/:collegeSlug",element:A.jsx(R0,{})}),A.jsx(J,{path:"/college/:collegeSlug/:section",element:A.jsx(R0,{})}),A.jsx(J,{path:"/branch/:branchId",element:A.jsx(P0,{})}),A.jsx(J,{path:"/branch/:branchId/:section",element:A.jsx(P0,{})}),A.jsx(J,{path:"/ugeac/:page",element:A.jsx(Uj,{})}),A.jsx(J,{path:"/subject/:subjectSlug",element:A.jsx(C0,{})}),A.jsx(J,{path:"/subject/:subjectSlug/:section",element:A.jsx(C0,{})}),A.jsx(J,{path:"/hackathons",element:A.jsx(Fj,{})}),A.jsx(J,{path:"/compare",element:A.jsx(b0,{})}),A.jsx(J,{path:"/compare/:college1VsCollege2",element:A.jsx(b0,{})}),A.jsx(J,{path:"/percentile-predictor",element:A.jsx($j,{})}),A.jsx(J,{path:"/beu/:tool",element:A.jsx(A0,{})}),A.jsx(J,{path:"/beu/:tool/:keyword",element:A.jsx(A0,{})}),A.jsx(J,{path:"/feature/:feature",element:A.jsx(k0,{})}),A.jsx(J,{path:"/feature/:feature/:keyword",element:A.jsx(k0,{})})]}),A.jsx(J,{element:A.jsx(fj,{}),children:A.jsxs(J,{element:A.jsx(T0,{}),children:[A.jsx(J,{path:"/",element:A.jsx(_a,{to:"/",replace:!0})}),A.jsx(J,{element:A.jsx(pj,{}),children:A.jsx(J,{path:"/dashboard/admin",element:A.jsx(Ij,{})})})]})}),A.jsx(J,{path:"*",element:A.jsx(_a,{to:"/",replace:!0})})]})})]})}catch(c){return console.error("App Crash:",c),A.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[A.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:A.jsx(Bb,{size:32})}),A.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),A.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),A.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const x0=document.getElementById("root");if(!x0)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=sf.createRoot(x0);console.log("[DEBUG] Rendering app to root..."),t.render(A.jsx(Q.StrictMode,{children:A.jsx(B1,{children:A.jsx(OF,{children:A.jsx(LF,{children:A.jsx(GC,{children:A.jsx(Hj,{})})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{n9 as $,T9 as A,I9 as B,zA as C,iu as D,p0 as E,pv as F,Bb as G,dL as H,d9 as I,Rd as J,gn as K,Gj as L,mi as M,y9 as N,_9 as O,e9 as P,OD as Q,Q as R,dj as S,Hb as T,Zj as U,i9 as V,xh as W,Wb as X,RO as Y,Iu as Z,oe as _,sI as a,f0 as a0,rs as a1,br as a2,xr as a3,Nn as a4,fO as a5,f9 as a6,Nr as a7,UN as a8,h9 as a9,JI as aA,k9 as aB,s9 as aa,Xj as ab,t9 as ac,d0 as ad,zD as ae,Qj as af,Jj as ag,LD as ah,r9 as ai,mO as aj,Yj as ak,l9 as al,u9 as am,a9 as an,cD as ao,o9 as ap,SO as aq,jv as ar,m9 as as,p9 as at,ND as au,cr as av,c9 as aw,bv as ax,aO as ay,ZI as az,zb as b,gs as c,$t as d,Lm as e,Xi as f,Kj as g,uo as h,qj as i,A as j,Pc as k,w9 as l,v9 as m,fe as n,OM as o,$s as p,Go as q,D as r,Xr as s,E9 as t,Eo as u,DM as v,hn as w,zw as x,S9 as y,A9 as z};
