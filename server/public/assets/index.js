var Dk=Object.defineProperty;var Ok=(t,e,n)=>e in t?Dk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nr=(t,e,n)=>(Ok(t,typeof e!="symbol"?e+"":e,n),n);function Lk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var m6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yw={exports:{}},$c={},Jw={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),Vk=Symbol.for("react.portal"),Mk=Symbol.for("react.fragment"),jk=Symbol.for("react.strict_mode"),Uk=Symbol.for("react.profiler"),Fk=Symbol.for("react.provider"),$k=Symbol.for("react.context"),Bk=Symbol.for("react.forward_ref"),zk=Symbol.for("react.suspense"),Hk=Symbol.for("react.memo"),Wk=Symbol.for("react.lazy"),t_=Symbol.iterator;function qk(t){return t===null||typeof t!="object"?null:(t=t_&&t[t_]||t["@@iterator"],typeof t=="function"?t:null)}var Xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zw=Object.assign,eE={};function po(t,e,n){this.props=t,this.context=e,this.refs=eE,this.updater=n||Xw}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tE(){}tE.prototype=po.prototype;function Kp(t,e,n){this.props=t,this.context=e,this.refs=eE,this.updater=n||Xw}var Gp=Kp.prototype=new tE;Gp.constructor=Kp;Zw(Gp,po.prototype);Gp.isPureReactComponent=!0;var n_=Array.isArray,nE=Object.prototype.hasOwnProperty,Qp={current:null},rE={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nE.call(e,r)&&!rE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_l,type:t,key:s,ref:o,props:i,_owner:Qp.current}}function Kk(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function Gk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var r_=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gk(""+t.key):e.toString(36)}function wu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case Vk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,n_(i)?(n="",t!=null&&(n=t.replace(r_,"$&/")+"/"),wu(i,e,n,"",function(c){return c})):i!=null&&(Yp(i)&&(i=Kk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(r_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",n_(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ld(s,l);o+=wu(s,e,n,u,i)}else if(u=qk(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ld(s,l++),o+=wu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],i=0;return wu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Qk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},Eu={transition:null},Yk={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Eu,ReactCurrentOwner:Qp};function sE(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!Yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=po;ae.Fragment=Mk;ae.Profiler=Uk;ae.PureComponent=Kp;ae.StrictMode=jk;ae.Suspense=zk;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yk;ae.act=sE;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)nE.call(e,u)&&!rE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_l,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:$k,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fk,_context:t},t.Consumer=t};ae.createElement=iE;ae.createFactory=function(t){var e=iE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Bk,render:t}};ae.isValidElement=Yp;ae.lazy=function(t){return{$$typeof:Wk,_payload:{_status:-1,_result:t},_init:Qk}};ae.memo=function(t,e){return{$$typeof:Hk,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Eu.transition;Eu.transition={};try{t()}finally{Eu.transition=e}};ae.unstable_act=sE;ae.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ae.useContext=function(t){return Lt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ae.useId=function(){return Lt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ae.useRef=function(t){return Lt.current.useRef(t)};ae.useState=function(t){return Lt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Lt.current.useTransition()};ae.version="18.3.1";Jw.exports=ae;var D=Jw.exports;const Y=Fc(D),Jk=Lk({__proto__:null,default:Y},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xk=D,Zk=Symbol.for("react.element"),eR=Symbol.for("react.fragment"),tR=Object.prototype.hasOwnProperty,nR=Xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rR={key:!0,ref:!0,__self:!0,__source:!0};function oE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tR.call(e,r)&&!rR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Zk,type:t,key:s,ref:o,props:i,_owner:nR.current}}$c.Fragment=eR;$c.jsx=oE;$c.jsxs=oE;Yw.exports=$c;var g=Yw.exports,gf={},aE={exports:{}},rn={},lE={exports:{}},uE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,F){var z=B.length;B.push(F);e:for(;0<z;){var ee=z-1>>>1,ie=B[ee];if(0<i(ie,F))B[ee]=F,B[z]=ie,z=ee;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var F=B[0],z=B.pop();if(z!==F){B[0]=z;e:for(var ee=0,ie=B.length,we=ie>>>1;ee<we;){var xe=2*(ee+1)-1,Rt=B[xe],Je=xe+1,yt=B[Je];if(0>i(Rt,z))Je<ie&&0>i(yt,Rt)?(B[ee]=yt,B[Je]=z,ee=Je):(B[ee]=Rt,B[xe]=z,ee=xe);else if(Je<ie&&0>i(yt,z))B[ee]=yt,B[Je]=z,ee=Je;else break e}}return F}function i(B,F){var z=B.sortIndex-F.sortIndex;return z!==0?z:B.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,w=!1,P=!1,R=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=B)r(c),F.sortIndex=F.expirationTime,e(u,F);else break;F=n(c)}}function O(B){if(R=!1,I(B),!P)if(n(u)!==null)P=!0,le(j);else{var F=n(c);F!==null&&Re(O,F.startTime-B)}}function j(B,F){P=!1,R&&(R=!1,E(_),_=-1),w=!0;var z=m;try{for(I(F),f=n(u);f!==null&&(!(f.expirationTime>F)||B&&!x());){var ee=f.callback;if(typeof ee=="function"){f.callback=null,m=f.priorityLevel;var ie=ee(f.expirationTime<=F);F=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(u)&&r(u),I(F)}else r(u);f=n(u)}if(f!==null)var we=!0;else{var xe=n(c);xe!==null&&Re(O,xe.startTime-F),we=!1}return we}finally{f=null,m=z,w=!1}}var $=!1,S=null,_=-1,T=5,k=-1;function x(){return!(t.unstable_now()-k<T)}function b(){if(S!==null){var B=t.unstable_now();k=B;var F=!0;try{F=S(!0,B)}finally{F?A():($=!1,S=null)}}else $=!1}var A;if(typeof v=="function")A=function(){v(b)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,G=ye.port2;ye.port1.onmessage=b,A=function(){G.postMessage(null)}}else A=function(){C(b,0)};function le(B){S=B,$||($=!0,A())}function Re(B,F){_=C(function(){B(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){P||w||(P=!0,le(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var z=m;m=F;try{return B()}finally{m=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var z=m;m=B;try{return F()}finally{m=z}},t.unstable_scheduleCallback=function(B,F,z){var ee=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ee+z:ee):z=ee,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=z+ie,B={id:d++,callback:F,priorityLevel:B,startTime:z,expirationTime:ie,sortIndex:-1},z>ee?(B.sortIndex=z,e(c,B),n(u)===null&&B===n(c)&&(R?(E(_),_=-1):R=!0,Re(O,z-ee))):(B.sortIndex=ie,e(u,B),P||w||(P=!0,le(j))),B},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(B){var F=m;return function(){var z=m;m=F;try{return B.apply(this,arguments)}finally{m=z}}}})(uE);lE.exports=uE;var iR=lE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sR=D,nn=iR;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cE=new Set,Ua={};function as(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(Ua[t]=e,t=0;t<e.length;t++)cE.add(e[t])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yf=Object.prototype.hasOwnProperty,oR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i_={},s_={};function aR(t){return yf.call(s_,t)?!0:yf.call(i_,t)?!1:oR.test(t)?s_[t]=!0:(i_[t]=!0,!1)}function lR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uR(t,e,n,r){if(e===null||typeof e>"u"||lR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jp=/[\-:]([a-z])/g;function Xp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jp,Xp);mt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jp,Xp);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jp,Xp);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zp(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uR(e,n,i,r)&&(n=null),r||i===null?aR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kr=sR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),em=Symbol.for("react.strict_mode"),_f=Symbol.for("react.profiler"),hE=Symbol.for("react.provider"),dE=Symbol.for("react.context"),tm=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),fE=Symbol.for("react.offscreen"),o_=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=o_&&t[o_]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,ud;function ua(t){if(ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ud=e&&e[1]||""}return`
`+ud+t}var cd=!1;function hd(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function cR(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function Ef(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case ks:return"Portal";case _f:return"Profiler";case em:return"StrictMode";case vf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dE:return(t.displayName||"Context")+".Consumer";case hE:return(t._context.displayName||"Context")+".Provider";case tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nm:return e=t.displayName||null,e!==null?e:Ef(t.type)||"Memo";case jr:e=t._payload,t=t._init;try{return Ef(t(e))}catch{}}return null}function hR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ef(e);case 8:return e===em?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dR(t){var e=pE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kl(t){t._valueTracker||(t._valueTracker=dR(t))}function mE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tf(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function a_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gE(t,e){e=e.checked,e!=null&&Zp(t,"checked",e,!1)}function If(t,e){gE(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sf(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function l_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sf(t,e,n){(e!=="number"||Gu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function u_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ca(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function yE(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function c_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _E(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_E(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gl,vE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gl=Gl||document.createElement("div"),Gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fR=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){fR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function wE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function EE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pR=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rf(t,e){if(e){if(pR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pf=null;function rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cf=null,Us=null,Fs=null;function h_(t){if(t=El(t)){if(typeof Cf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=qc(e),Cf(t.stateNode,t.type,e))}}function TE(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function IE(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,h_(t),e)for(t=0;t<e.length;t++)h_(e[t])}}function SE(t,e){return t(e)}function AE(){}var dd=!1;function kE(t,e,n){if(dd)return t(e,n);dd=!0;try{return SE(t,e,n)}finally{dd=!1,(Us!==null||Fs!==null)&&(AE(),IE())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var r=qc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var bf=!1;if(mr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{bf=!1}function mR(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ea=!1,Qu=null,Yu=!1,Nf=null,gR={onError:function(t){Ea=!0,Qu=t}};function yR(t,e,n,r,i,s,o,l,u){Ea=!1,Qu=null,mR.apply(gR,arguments)}function _R(t,e,n,r,i,s,o,l,u){if(yR.apply(this,arguments),Ea){if(Ea){var c=Qu;Ea=!1,Qu=null}else throw Error(U(198));Yu||(Yu=!0,Nf=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function RE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function d_(t){if(ls(t)!==t)throw Error(U(188))}function vR(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return d_(i),t;if(s===r)return d_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function xE(t){return t=vR(t),t!==null?PE(t):null}function PE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=PE(t);if(e!==null)return e;t=t.sibling}return null}var CE=nn.unstable_scheduleCallback,f_=nn.unstable_cancelCallback,wR=nn.unstable_shouldYield,ER=nn.unstable_requestPaint,ze=nn.unstable_now,TR=nn.unstable_getCurrentPriorityLevel,im=nn.unstable_ImmediatePriority,bE=nn.unstable_UserBlockingPriority,Ju=nn.unstable_NormalPriority,IR=nn.unstable_LowPriority,NE=nn.unstable_IdlePriority,Bc=null,Kn=null;function SR(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:RR,AR=Math.log,kR=Math.LN2;function RR(t){return t>>>=0,t===0?32:31-(AR(t)/kR|0)|0}var Ql=64,Yl=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ha(l):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function xR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=xR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function DE(){var t=Ql;return Ql<<=1,!(Ql&4194240)&&(Ql=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function CR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function OE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var LE,om,VE,ME,jE,Of=!1,Jl=[],Xr=null,Zr=null,ei=null,Ba=new Map,za=new Map,Fr=[],bR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function p_(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&om(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NR(t,e,n,r,i){switch(e){case"focusin":return Xr=Yo(Xr,t,e,n,r,i),!0;case"dragenter":return Zr=Yo(Zr,t,e,n,r,i),!0;case"mouseover":return ei=Yo(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ba.set(s,Yo(Ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,za.set(s,Yo(za.get(s)||null,t,e,n,r,i)),!0}return!1}function UE(t){var e=Mi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=RE(n),e!==null){t.blockedOn=e,jE(t.priority,function(){VE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pf=r,n.target.dispatchEvent(r),Pf=null}else return e=El(n),e!==null&&om(e),t.blockedOn=n,!1;e.shift()}return!0}function m_(t,e,n){Tu(t)&&n.delete(e)}function DR(){Of=!1,Xr!==null&&Tu(Xr)&&(Xr=null),Zr!==null&&Tu(Zr)&&(Zr=null),ei!==null&&Tu(ei)&&(ei=null),Ba.forEach(m_),za.forEach(m_)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,DR)))}function Ha(t){function e(i){return Jo(i,t)}if(0<Jl.length){Jo(Jl[0],t);for(var n=1;n<Jl.length;n++){var r=Jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&Jo(Xr,t),Zr!==null&&Jo(Zr,t),ei!==null&&Jo(ei,t),Ba.forEach(e),za.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)UE(n),n.blockedOn===null&&Fr.shift()}var $s=kr.ReactCurrentBatchConfig,Zu=!0;function OR(t,e,n,r){var i=ge,s=$s.transition;$s.transition=null;try{ge=1,am(t,e,n,r)}finally{ge=i,$s.transition=s}}function LR(t,e,n,r){var i=ge,s=$s.transition;$s.transition=null;try{ge=4,am(t,e,n,r)}finally{ge=i,$s.transition=s}}function am(t,e,n,r){if(Zu){var i=Lf(t,e,n,r);if(i===null)Id(t,e,r,ec,n),p_(t,r);else if(NR(i,t,e,n,r))r.stopPropagation();else if(p_(t,r),e&4&&-1<bR.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&LE(s),s=Lf(t,e,n,r),s===null&&Id(t,e,r,ec,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Id(t,e,r,null,n)}}var ec=null;function Lf(t,e,n,r){if(ec=null,t=rm(r),t=Mi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=RE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ec=t,null}function FE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TR()){case im:return 1;case bE:return 4;case Ju:case IR:return 16;case NE:return 536870912;default:return 16}default:return 16}}var Kr=null,lm=null,Iu=null;function $E(){if(Iu)return Iu;var t,e=lm,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Iu=i.slice(t,1<r?1-r:void 0)}function Su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function g_(){return!1}function sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:g_,this.isPropagationStopped=g_,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},um=sn(mo),wl=Oe({},mo,{view:0,detail:0}),VR=sn(wl),pd,md,Xo,zc=Oe({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(pd=t.screenX-Xo.screenX,md=t.screenY-Xo.screenY):md=pd=0,Xo=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),y_=sn(zc),MR=Oe({},zc,{dataTransfer:0}),jR=sn(MR),UR=Oe({},wl,{relatedTarget:0}),gd=sn(UR),FR=Oe({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),$R=sn(FR),BR=Oe({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zR=sn(BR),HR=Oe({},mo,{data:0}),__=sn(HR),WR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KR[t])?!!e[t]:!1}function cm(){return GR}var QR=Oe({},wl,{key:function(t){if(t.key){var e=WR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cm,charCode:function(t){return t.type==="keypress"?Su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YR=sn(QR),JR=Oe({},zc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v_=sn(JR),XR=Oe({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cm}),ZR=sn(XR),ex=Oe({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=sn(ex),nx=Oe({},zc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=sn(nx),ix=[9,13,27,32],hm=mr&&"CompositionEvent"in window,Ta=null;mr&&"documentMode"in document&&(Ta=document.documentMode);var sx=mr&&"TextEvent"in window&&!Ta,BE=mr&&(!hm||Ta&&8<Ta&&11>=Ta),w_=String.fromCharCode(32),E_=!1;function zE(t,e){switch(t){case"keyup":return ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function ox(t,e){switch(t){case"compositionend":return HE(e);case"keypress":return e.which!==32?null:(E_=!0,w_);case"textInput":return t=e.data,t===w_&&E_?null:t;default:return null}}function ax(t,e){if(xs)return t==="compositionend"||!hm&&zE(t,e)?(t=$E(),Iu=lm=Kr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return BE&&e.locale!=="ko"?null:e.data;default:return null}}var lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lx[t.type]:e==="textarea"}function WE(t,e,n,r){TE(r),e=tc(e,"onChange"),0<e.length&&(n=new um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,Wa=null;function ux(t){nT(t,0)}function Hc(t){var e=bs(t);if(mE(e))return t}function cx(t,e){if(t==="change")return e}var qE=!1;if(mr){var yd;if(mr){var _d="oninput"in document;if(!_d){var I_=document.createElement("div");I_.setAttribute("oninput","return;"),_d=typeof I_.oninput=="function"}yd=_d}else yd=!1;qE=yd&&(!document.documentMode||9<document.documentMode)}function S_(){Ia&&(Ia.detachEvent("onpropertychange",KE),Wa=Ia=null)}function KE(t){if(t.propertyName==="value"&&Hc(Wa)){var e=[];WE(e,Wa,t,rm(t)),kE(ux,e)}}function hx(t,e,n){t==="focusin"?(S_(),Ia=e,Wa=n,Ia.attachEvent("onpropertychange",KE)):t==="focusout"&&S_()}function dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(Wa)}function fx(t,e){if(t==="click")return Hc(e)}function px(t,e){if(t==="input"||t==="change")return Hc(e)}function mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:mx;function qa(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yf.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function A_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k_(t,e){var n=A_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=A_(n)}}function GE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?GE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function QE(){for(var t=window,e=Gu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gu(t.document)}return e}function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gx(t){var e=QE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&GE(n.ownerDocument.documentElement,n)){if(r!==null&&dm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=k_(n,s);var o=k_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=mr&&"documentMode"in document&&11>=document.documentMode,Ps=null,Vf=null,Sa=null,Mf=!1;function R_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||Ps==null||Ps!==Gu(r)||(r=Ps,"selectionStart"in r&&dm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&qa(Sa,r)||(Sa=r,r=tc(Vf,"onSelect"),0<r.length&&(e=new um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ps)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},vd={},YE={};mr&&(YE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Wc(t){if(vd[t])return vd[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in YE)return vd[t]=e[n];return t}var JE=Wc("animationend"),XE=Wc("animationiteration"),ZE=Wc("animationstart"),eT=Wc("transitionend"),tT=new Map,x_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){tT.set(t,e),as(e,[t])}for(var wd=0;wd<x_.length;wd++){var Ed=x_[wd],_x=Ed.toLowerCase(),vx=Ed[0].toUpperCase()+Ed.slice(1);Ei(_x,"on"+vx)}Ei(JE,"onAnimationEnd");Ei(XE,"onAnimationIteration");Ei(ZE,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(eT,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function P_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_R(r,e,void 0,t),t.currentTarget=null}function nT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;P_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;P_(i,l,c),s=u}}}if(Yu)throw t=Nf,Yu=!1,Nf=null,t}function Se(t,e){var n=e[Bf];n===void 0&&(n=e[Bf]=new Set);var r=t+"__bubble";n.has(r)||(rT(e,t,2,!1),n.add(r))}function Td(t,e,n){var r=0;e&&(r|=4),rT(n,t,r,e)}var eu="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[eu]){t[eu]=!0,cE.forEach(function(n){n!=="selectionchange"&&(wx.has(n)||Td(n,!1,t),Td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eu]||(e[eu]=!0,Td("selectionchange",!1,e))}}function rT(t,e,n,r){switch(FE(e)){case 1:var i=OR;break;case 4:i=LR;break;default:i=am}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}kE(function(){var c=s,d=rm(n),f=[];e:{var m=tT.get(t);if(m!==void 0){var w=um,P=t;switch(t){case"keypress":if(Su(n)===0)break e;case"keydown":case"keyup":w=YR;break;case"focusin":P="focus",w=gd;break;case"focusout":P="blur",w=gd;break;case"beforeblur":case"afterblur":w=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=y_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ZR;break;case JE:case XE:case ZE:w=$R;break;case eT:w=tx;break;case"scroll":w=VR;break;case"wheel":w=rx;break;case"copy":case"cut":case"paste":w=zR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=v_}var R=(e&4)!==0,C=!R&&t==="scroll",E=R?m!==null?m+"Capture":null:m;R=[];for(var v=c,I;v!==null;){I=v;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,E!==null&&(O=$a(v,E),O!=null&&R.push(Ga(v,O,I)))),C)break;v=v.return}0<R.length&&(m=new w(m,P,null,n,d),f.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Pf&&(P=n.relatedTarget||n.fromElement)&&(Mi(P)||P[gr]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(P=n.relatedTarget||n.toElement,w=c,P=P?Mi(P):null,P!==null&&(C=ls(P),P!==C||P.tag!==5&&P.tag!==6)&&(P=null)):(w=null,P=c),w!==P)){if(R=y_,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=v_,O="onPointerLeave",E="onPointerEnter",v="pointer"),C=w==null?m:bs(w),I=P==null?m:bs(P),m=new R(O,v+"leave",w,n,d),m.target=C,m.relatedTarget=I,O=null,Mi(d)===c&&(R=new R(E,v+"enter",P,n,d),R.target=I,R.relatedTarget=C,O=R),C=O,w&&P)t:{for(R=w,E=P,v=0,I=R;I;I=vs(I))v++;for(I=0,O=E;O;O=vs(O))I++;for(;0<v-I;)R=vs(R),v--;for(;0<I-v;)E=vs(E),I--;for(;v--;){if(R===E||E!==null&&R===E.alternate)break t;R=vs(R),E=vs(E)}R=null}else R=null;w!==null&&C_(f,m,w,R,!1),P!==null&&C!==null&&C_(f,C,P,R,!0)}}e:{if(m=c?bs(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=cx;else if(T_(m))if(qE)j=px;else{j=dx;var $=hx}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=fx);if(j&&(j=j(t,c))){WE(f,j,n,d);break e}$&&$(t,m,c),t==="focusout"&&($=m._wrapperState)&&$.controlled&&m.type==="number"&&Sf(m,"number",m.value)}switch($=c?bs(c):window,t){case"focusin":(T_($)||$.contentEditable==="true")&&(Ps=$,Vf=c,Sa=null);break;case"focusout":Sa=Vf=Ps=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,R_(f,n,d);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":R_(f,n,d)}var S;if(hm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else xs?zE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(BE&&n.locale!=="ko"&&(xs||_!=="onCompositionStart"?_==="onCompositionEnd"&&xs&&(S=$E()):(Kr=d,lm="value"in Kr?Kr.value:Kr.textContent,xs=!0)),$=tc(c,_),0<$.length&&(_=new __(_,t,null,n,d),f.push({event:_,listeners:$}),S?_.data=S:(S=HE(n),S!==null&&(_.data=S)))),(S=sx?ox(t,n):ax(t,n))&&(c=tc(c,"onBeforeInput"),0<c.length&&(d=new __("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=S))}nT(f,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=$a(t,n),s!=null&&r.unshift(Ga(t,s,i)),s=$a(t,e),s!=null&&r.push(Ga(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function C_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=$a(n,s),u!=null&&o.unshift(Ga(n,u,l))):i||(u=$a(n,s),u!=null&&o.push(Ga(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ex=/\r\n?/g,Tx=/\u0000|\uFFFD/g;function b_(t){return(typeof t=="string"?t:""+t).replace(Ex,`
`).replace(Tx,"")}function tu(t,e,n){if(e=b_(e),b_(t)!==e&&n)throw Error(U(425))}function nc(){}var jf=null,Uf=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,Ix=typeof clearTimeout=="function"?clearTimeout:void 0,N_=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof N_<"u"?function(t){return N_.resolve(null).then(t).catch(Ax)}:$f;function Ax(t){setTimeout(function(){throw t})}function Sd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ha(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function D_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),zn="__reactFiber$"+go,Qa="__reactProps$"+go,gr="__reactContainer$"+go,Bf="__reactEvents$"+go,kx="__reactListeners$"+go,Rx="__reactHandles$"+go;function Mi(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gr]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=D_(t);t!==null;){if(n=t[zn])return n;t=D_(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[zn]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function qc(t){return t[Qa]||null}var zf=[],Ns=-1;function Ti(t){return{current:t}}function ke(t){0>Ns||(t.current=zf[Ns],zf[Ns]=null,Ns--)}function Te(t,e){Ns++,zf[Ns]=t.current,t.current=e}var fi={},At=Ti(fi),Bt=Ti(!1),Ki=fi;function to(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function rc(){ke(Bt),ke(At)}function O_(t,e,n){if(At.current!==fi)throw Error(U(168));Te(At,e),Te(Bt,n)}function iT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,hR(t)||"Unknown",i));return Oe({},n,r)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Ki=At.current,Te(At,t),Te(Bt,Bt.current),!0}function L_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=iT(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,ke(Bt),ke(At),Te(At,t)):ke(Bt),Te(Bt,n)}var ar=null,Kc=!1,Ad=!1;function sT(t){ar===null?ar=[t]:ar.push(t)}function xx(t){Kc=!0,sT(t)}function Ii(){if(!Ad&&ar!==null){Ad=!0;var t=0,e=ge;try{var n=ar;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ar=null,Kc=!1}catch(i){throw ar!==null&&(ar=ar.slice(t+1)),CE(im,Ii),i}finally{ge=e,Ad=!1}}return null}var Ds=[],Os=0,sc=null,oc=0,cn=[],hn=0,Gi=null,lr=1,ur="";function Oi(t,e){Ds[Os++]=oc,Ds[Os++]=sc,sc=t,oc=e}function oT(t,e,n){cn[hn++]=lr,cn[hn++]=ur,cn[hn++]=Gi,Gi=t;var r=lr;t=ur;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,lr=1<<32-Pn(e)+i|n<<i|r,ur=s+t}else lr=1<<s|n<<i|r,ur=t}function fm(t){t.return!==null&&(Oi(t,1),oT(t,1,0))}function pm(t){for(;t===sc;)sc=Ds[--Os],Ds[Os]=null,oc=Ds[--Os],Ds[Os]=null;for(;t===Gi;)Gi=cn[--hn],cn[hn]=null,ur=cn[--hn],cn[hn]=null,lr=cn[--hn],cn[hn]=null}var tn=null,Xt=null,Ce=!1,An=null;function aT(t,e){var n=fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function V_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Xt=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:lr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Xt=null,!0):!1;default:return!1}}function Hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wf(t){if(Ce){var e=Xt;if(e){var n=e;if(!V_(t,e)){if(Hf(t))throw Error(U(418));e=ti(n.nextSibling);var r=tn;e&&V_(t,e)?aT(r,n):(t.flags=t.flags&-4097|2,Ce=!1,tn=t)}}else{if(Hf(t))throw Error(U(418));t.flags=t.flags&-4097|2,Ce=!1,tn=t}}}function M_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function nu(t){if(t!==tn)return!1;if(!Ce)return M_(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=Xt)){if(Hf(t))throw lT(),Error(U(418));for(;e;)aT(t,e),e=ti(e.nextSibling)}if(M_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=tn?ti(t.stateNode.nextSibling):null;return!0}function lT(){for(var t=Xt;t;)t=ti(t.nextSibling)}function no(){Xt=tn=null,Ce=!1}function mm(t){An===null?An=[t]:An.push(t)}var Px=kr.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function ru(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function j_(t){var e=t._init;return e(t._payload)}function uT(t){function e(E,v){if(t){var I=E.deletions;I===null?(E.deletions=[v],E.flags|=16):I.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=si(E,v),E.index=0,E.sibling=null,E}function s(E,v,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<v?(E.flags|=2,v):I):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,I,O){return v===null||v.tag!==6?(v=Nd(I,E.mode,O),v.return=E,v):(v=i(v,I),v.return=E,v)}function u(E,v,I,O){var j=I.type;return j===Rs?d(E,v,I.props.children,O,I.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&j_(j)===v.type)?(O=i(v,I.props),O.ref=Zo(E,v,I),O.return=E,O):(O=bu(I.type,I.key,I.props,null,E.mode,O),O.ref=Zo(E,v,I),O.return=E,O)}function c(E,v,I,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Dd(I,E.mode,O),v.return=E,v):(v=i(v,I.children||[]),v.return=E,v)}function d(E,v,I,O,j){return v===null||v.tag!==7?(v=zi(I,E.mode,O,j),v.return=E,v):(v=i(v,I),v.return=E,v)}function f(E,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nd(""+v,E.mode,I),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:return I=bu(v.type,v.key,v.props,null,E.mode,I),I.ref=Zo(E,null,v),I.return=E,I;case ks:return v=Dd(v,E.mode,I),v.return=E,v;case jr:var O=v._init;return f(E,O(v._payload),I)}if(ca(v)||Go(v))return v=zi(v,E.mode,I,null),v.return=E,v;ru(E,v)}return null}function m(E,v,I,O){var j=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:l(E,v,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ql:return I.key===j?u(E,v,I,O):null;case ks:return I.key===j?c(E,v,I,O):null;case jr:return j=I._init,m(E,v,j(I._payload),O)}if(ca(I)||Go(I))return j!==null?null:d(E,v,I,O,null);ru(E,I)}return null}function w(E,v,I,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(I)||null,l(v,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ql:return E=E.get(O.key===null?I:O.key)||null,u(v,E,O,j);case ks:return E=E.get(O.key===null?I:O.key)||null,c(v,E,O,j);case jr:var $=O._init;return w(E,v,I,$(O._payload),j)}if(ca(O)||Go(O))return E=E.get(I)||null,d(v,E,O,j,null);ru(v,O)}return null}function P(E,v,I,O){for(var j=null,$=null,S=v,_=v=0,T=null;S!==null&&_<I.length;_++){S.index>_?(T=S,S=null):T=S.sibling;var k=m(E,S,I[_],O);if(k===null){S===null&&(S=T);break}t&&S&&k.alternate===null&&e(E,S),v=s(k,v,_),$===null?j=k:$.sibling=k,$=k,S=T}if(_===I.length)return n(E,S),Ce&&Oi(E,_),j;if(S===null){for(;_<I.length;_++)S=f(E,I[_],O),S!==null&&(v=s(S,v,_),$===null?j=S:$.sibling=S,$=S);return Ce&&Oi(E,_),j}for(S=r(E,S);_<I.length;_++)T=w(S,E,_,I[_],O),T!==null&&(t&&T.alternate!==null&&S.delete(T.key===null?_:T.key),v=s(T,v,_),$===null?j=T:$.sibling=T,$=T);return t&&S.forEach(function(x){return e(E,x)}),Ce&&Oi(E,_),j}function R(E,v,I,O){var j=Go(I);if(typeof j!="function")throw Error(U(150));if(I=j.call(I),I==null)throw Error(U(151));for(var $=j=null,S=v,_=v=0,T=null,k=I.next();S!==null&&!k.done;_++,k=I.next()){S.index>_?(T=S,S=null):T=S.sibling;var x=m(E,S,k.value,O);if(x===null){S===null&&(S=T);break}t&&S&&x.alternate===null&&e(E,S),v=s(x,v,_),$===null?j=x:$.sibling=x,$=x,S=T}if(k.done)return n(E,S),Ce&&Oi(E,_),j;if(S===null){for(;!k.done;_++,k=I.next())k=f(E,k.value,O),k!==null&&(v=s(k,v,_),$===null?j=k:$.sibling=k,$=k);return Ce&&Oi(E,_),j}for(S=r(E,S);!k.done;_++,k=I.next())k=w(S,E,_,k.value,O),k!==null&&(t&&k.alternate!==null&&S.delete(k.key===null?_:k.key),v=s(k,v,_),$===null?j=k:$.sibling=k,$=k);return t&&S.forEach(function(b){return e(E,b)}),Ce&&Oi(E,_),j}function C(E,v,I,O){if(typeof I=="object"&&I!==null&&I.type===Rs&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ql:e:{for(var j=I.key,$=v;$!==null;){if($.key===j){if(j=I.type,j===Rs){if($.tag===7){n(E,$.sibling),v=i($,I.props.children),v.return=E,E=v;break e}}else if($.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&j_(j)===$.type){n(E,$.sibling),v=i($,I.props),v.ref=Zo(E,$,I),v.return=E,E=v;break e}n(E,$);break}else e(E,$);$=$.sibling}I.type===Rs?(v=zi(I.props.children,E.mode,O,I.key),v.return=E,E=v):(O=bu(I.type,I.key,I.props,null,E.mode,O),O.ref=Zo(E,v,I),O.return=E,E=O)}return o(E);case ks:e:{for($=I.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(E,v.sibling),v=i(v,I.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Dd(I,E.mode,O),v.return=E,E=v}return o(E);case jr:return $=I._init,C(E,v,$(I._payload),O)}if(ca(I))return P(E,v,I,O);if(Go(I))return R(E,v,I,O);ru(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,I),v.return=E,E=v):(n(E,v),v=Nd(I,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return C}var ro=uT(!0),cT=uT(!1),ac=Ti(null),lc=null,Ls=null,gm=null;function ym(){gm=Ls=lc=null}function _m(t){var e=ac.current;ke(ac),t._currentValue=e}function qf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bs(t,e){lc=t,gm=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(gm!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(lc===null)throw Error(U(308));Ls=t,lc.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var ji=null;function vm(t){ji===null?ji=[t]:ji.push(t)}function hT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vm(e)):(n.next=i.next,i.next=n),e.interleaved=n,yr(t,r)}function yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,fe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yr(t,n)}return i=r.interleaved,i===null?(e.next=e,vm(r)):(e.next=i.next,i.next=e),r.interleaved=e,yr(t,n)}function Au(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}function U_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uc(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,R=l;switch(m=e,w=n,R.tag){case 1:if(P=R.payload,typeof P=="function"){f=P.call(w,f,m);break e}f=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=R.payload,m=typeof P=="function"?P.call(w,f,m):P,m==null)break e;f=Oe({},f,m);break e;case 2:Ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=f):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=f}}function F_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Tl={},Gn=Ti(Tl),Ya=Ti(Tl),Ja=Ti(Tl);function Ui(t){if(t===Tl)throw Error(U(174));return t}function Em(t,e){switch(Te(Ja,e),Te(Ya,t),Te(Gn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}ke(Gn),Te(Gn,e)}function io(){ke(Gn),ke(Ya),ke(Ja)}function fT(t){Ui(Ja.current);var e=Ui(Gn.current),n=kf(e,t.type);e!==n&&(Te(Ya,t),Te(Gn,n))}function Tm(t){Ya.current===t&&(ke(Gn),ke(Ya))}var Ne=Ti(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Im(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var ku=kr.ReactCurrentDispatcher,Rd=kr.ReactCurrentBatchConfig,Qi=0,De=null,Ze=null,at=null,hc=!1,Aa=!1,Xa=0,Cx=0;function vt(){throw Error(U(321))}function Sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function Am(t,e,n,r,i,s){if(Qi=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ku.current=t===null||t.memoizedState===null?Ox:Lx,t=n(r,i),Aa){s=0;do{if(Aa=!1,Xa=0,25<=s)throw Error(U(301));s+=1,at=Ze=null,e.updateQueue=null,ku.current=Vx,t=n(r,i)}while(Aa)}if(ku.current=dc,e=Ze!==null&&Ze.next!==null,Qi=0,at=Ze=De=null,hc=!1,e)throw Error(U(300));return t}function km(){var t=Xa!==0;return Xa=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?De.memoizedState=at=t:at=at.next=t,at}function yn(){if(Ze===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=at===null?De.memoizedState:at.next;if(e!==null)at=e,Ze=t;else{if(t===null)throw Error(U(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},at===null?De.memoizedState=at=t:at=at.next=t}return at}function Za(t,e){return typeof e=="function"?e(t):e}function xd(t){var e=yn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Qi&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,De.lanes|=d,Yi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Nn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pd(t){var e=yn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||($t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pT(){}function mT(t,e){var n=De,r=yn(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,$t=!0),r=r.queue,Rm(_T.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,el(9,yT.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(U(349));Qi&30||gT(n,e,i)}return i}function gT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yT(t,e,n,r){e.value=n,e.getSnapshot=r,vT(e)&&wT(t)}function _T(t,e,n){return n(function(){vT(e)&&wT(t)})}function vT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function wT(t){var e=yr(t,1);e!==null&&Cn(e,t,1,-1)}function $_(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=Dx.bind(null,De,t),[e.memoizedState,t]}function el(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ET(){return yn().memoizedState}function Ru(t,e,n,r){var i=$n();De.flags|=t,i.memoizedState=el(1|e,n,void 0,r===void 0?null:r)}function Gc(t,e,n,r){var i=yn();r=r===void 0?null:r;var s=void 0;if(Ze!==null){var o=Ze.memoizedState;if(s=o.destroy,r!==null&&Sm(r,o.deps)){i.memoizedState=el(e,n,s,r);return}}De.flags|=t,i.memoizedState=el(1|e,n,s,r)}function B_(t,e){return Ru(8390656,8,t,e)}function Rm(t,e){return Gc(2048,8,t,e)}function TT(t,e){return Gc(4,2,t,e)}function IT(t,e){return Gc(4,4,t,e)}function ST(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function AT(t,e,n){return n=n!=null?n.concat([t]):null,Gc(4,4,ST.bind(null,e,t),n)}function xm(){}function kT(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function RT(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xT(t,e,n){return Qi&21?(Nn(n,e)||(n=DE(),De.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function bx(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ge=n,Rd.transition=r}}function PT(){return yn().memoizedState}function Nx(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},CT(t))bT(e,n);else if(n=hT(t,e,n,r),n!==null){var i=Nt();Cn(n,t,r,i),NT(n,e,r)}}function Dx(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(CT(t))bT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Nn(l,o)){var u=e.interleaved;u===null?(i.next=i,vm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=hT(t,e,i,r),n!==null&&(i=Nt(),Cn(n,t,r,i),NT(n,e,r))}}function CT(t){var e=t.alternate;return t===De||e!==null&&e===De}function bT(t,e){Aa=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function NT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sm(t,n)}}var dc={readContext:gn,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Ox={readContext:gn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:B_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4194308,4,ST.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ru(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nx.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:$_,useDebugValue:xm,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=$_(!1),e=t[0];return t=bx.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=$n();if(Ce){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),lt===null)throw Error(U(349));Qi&30||gT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,B_(_T.bind(null,r,s,t),[t]),r.flags|=2048,el(9,yT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=lt.identifierPrefix;if(Ce){var n=ur,r=lr;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lx={readContext:gn,useCallback:kT,useContext:gn,useEffect:Rm,useImperativeHandle:AT,useInsertionEffect:TT,useLayoutEffect:IT,useMemo:RT,useReducer:xd,useRef:ET,useState:function(){return xd(Za)},useDebugValue:xm,useDeferredValue:function(t){var e=yn();return xT(e,Ze.memoizedState,t)},useTransition:function(){var t=xd(Za)[0],e=yn().memoizedState;return[t,e]},useMutableSource:pT,useSyncExternalStore:mT,useId:PT,unstable_isNewReconciler:!1},Vx={readContext:gn,useCallback:kT,useContext:gn,useEffect:Rm,useImperativeHandle:AT,useInsertionEffect:TT,useLayoutEffect:IT,useMemo:RT,useReducer:Pd,useRef:ET,useState:function(){return Pd(Za)},useDebugValue:xm,useDeferredValue:function(t){var e=yn();return Ze===null?e.memoizedState=t:xT(e,Ze.memoizedState,t)},useTransition:function(){var t=Pd(Za)[0],e=yn().memoizedState;return[t,e]},useMutableSource:pT,useSyncExternalStore:mT,useId:PT,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ii(t),s=dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Cn(e,t,i,r),Au(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ii(t),s=dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Cn(e,t,i,r),Au(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ii(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(Cn(e,t,r,n),Au(e,t,r))}};function z_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function DT(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(i=zt(e)?Ki:At.current,r=e.contextTypes,s=(r=r!=null)?to(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function H_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qc.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gn(s):(s=zt(e)?Ki:At.current,i.context=to(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qc.enqueueReplaceState(i,i.state,null),uc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",r=e;do n+=cR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mx=typeof WeakMap=="function"?WeakMap:Map;function OT(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pc||(pc=!0,sp=r),Qf(t,e)},n}function LT(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function W_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Jx.bind(null,t,e,n),e.then(t,t))}function q_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function K_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var jx=kr.ReactCurrentOwner,$t=!1;function bt(t,e,n,r){e.child=t===null?cT(e,null,n,r):ro(e,t.child,n,r)}function G_(t,e,n,r,i){n=n.render;var s=e.ref;return Bs(e,i),r=Am(t,e,n,r,s,i),n=km(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(Ce&&n&&fm(e),e.flags|=1,bt(t,e,r,i),e.child)}function Q_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,VT(t,e,s,r,i)):(t=bu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return _r(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function VT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,_r(t,e,i)}return Yf(t,e,n,r,i)}function MT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Ms,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Ms,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(Ms,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(Ms,Yt),Yt|=r;return bt(t,e,i,n),e.child}function jT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yf(t,e,n,r,i){var s=zt(n)?Ki:At.current;return s=to(e,s),Bs(e,i),n=Am(t,e,n,r,s,i),r=km(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(Ce&&r&&fm(e),e.flags|=1,bt(t,e,n,i),e.child)}function Y_(t,e,n,r,i){if(zt(n)){var s=!0;ic(e)}else s=!1;if(Bs(e,i),e.stateNode===null)xu(t,e),DT(e,n,r),Gf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=gn(c):(c=zt(n)?Ki:At.current,c=to(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&H_(e,o,r,c),Ur=!1;var m=e.memoizedState;o.state=m,uc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Bt.current||Ur?(typeof d=="function"&&(Kf(e,n,d,r),u=e.memoizedState),(l=Ur||z_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dT(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:In(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=zt(n)?Ki:At.current,u=to(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&H_(e,o,r,u),Ur=!1,m=e.memoizedState,o.state=m,uc(e,r,o,i);var P=e.memoizedState;l!==f||m!==P||Bt.current||Ur?(typeof w=="function"&&(Kf(e,n,w,r),P=e.memoizedState),(c=Ur||z_(e,n,c,r,m,P,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Jf(t,e,n,r,s,i)}function Jf(t,e,n,r,i,s){jT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&L_(e,n,!1),_r(t,e,s);r=e.stateNode,jx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,l,s)):bt(t,e,l,s),e.memoizedState=r.state,i&&L_(e,n,!0),e.child}function UT(t){var e=t.stateNode;e.pendingContext?O_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&O_(t,e.context,!1),Em(t,e.containerInfo)}function J_(t,e,n,r,i){return no(),mm(i),e.flags|=256,bt(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function FT(t,e,n){var r=e.pendingProps,i=Ne.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(Ne,i&1),t===null)return Wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zf(n),e.memoizedState=Xf,t):Pm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Ux(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=si(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=si(l,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pm(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function iu(t,e,n,r){return r!==null&&mm(r),ro(e,t.child,null,n),t=Pm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ux(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cd(Error(U(422))),iu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xc({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return iu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Cd(s,r,void 0),iu(t,e,o,r)}if(l=(o&t.childLanes)!==0,$t||l){if(r=lt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yr(t,i),Cn(r,t,i,-1))}return Lm(),r=Cd(Error(U(421))),iu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=ti(i.nextSibling),tn=e,Ce=!0,An=null,t!==null&&(cn[hn++]=lr,cn[hn++]=ur,cn[hn++]=Gi,lr=t.id,ur=t.overflow,Gi=e),e=Pm(e,r.children),e.flags|=4096,e)}function X_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qf(t.return,e,n)}function bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $T(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&X_(t,n,e);else if(t.tag===19)X_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fx(t,e,n){switch(e.tag){case 3:UT(e),no();break;case 5:fT(e);break;case 1:zt(e.type)&&ic(e);break;case 4:Em(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?FT(t,e,n):(Te(Ne,Ne.current&1),t=_r(t,e,n),t!==null?t.sibling:null);Te(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $T(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,MT(t,e,n)}return _r(t,e,n)}var BT,ep,zT,HT;BT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};zT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(Gn.current);var s=null;switch(n){case"input":i=Tf(t,i),r=Tf(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nc)}Rf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Se("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};HT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $x(t,e,n){var r=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return zt(e.type)&&rc(),wt(e),null;case 3:return r=e.stateNode,io(),ke(Bt),ke(At),Im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,An!==null&&(lp(An),An=null))),ep(t,e),wt(e),null;case 5:Tm(e);var i=Ui(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)zT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return wt(e),null}if(t=Ui(Gn.current),nu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[zn]=e,r[Qa]=s,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)Se(da[i],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":a_(r,s),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Se("invalid",r);break;case"textarea":u_(r,s),Se("invalid",r)}Rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tu(r.textContent,l,t),i=["children",""+l]):Ua.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":Kl(r),l_(r,s,!0);break;case"textarea":Kl(r),c_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_E(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[zn]=e,t[Qa]=r,BT(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":Se("cancel",t),Se("close",t),i=r;break;case"iframe":case"object":case"embed":Se("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)Se(da[i],t);i=r;break;case"source":Se("error",t),i=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=r;break;case"details":Se("toggle",t),i=r;break;case"input":a_(t,r),i=Tf(t,r),Se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Se("invalid",t);break;case"textarea":u_(t,r),i=Af(t,r),Se("invalid",t);break;default:i=r}Rf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?EE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fa(t,u):typeof u=="number"&&Fa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Se("scroll",t):u!=null&&Zp(t,s,u,o))}switch(n){case"input":Kl(t),l_(t,r,!1);break;case"textarea":Kl(t),c_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?js(t,!!r.multiple,s,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)HT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ui(Ja.current),Ui(Gn.current),nu(e)){if(r=e.stateNode,n=e.memoizedProps,r[zn]=e,(s=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:tu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=e,e.stateNode=r}return wt(e),null;case 13:if(ke(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Xt!==null&&e.mode&1&&!(e.flags&128))lT(),no(),e.flags|=98560,s=!1;else if(s=nu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[zn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else An!==null&&(lp(An),An=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?et===0&&(et=3):Lm())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return io(),ep(t,e),t===null&&Ka(e.stateNode.containerInfo),wt(e),null;case 10:return _m(e.type._context),wt(e),null;case 17:return zt(e.type)&&rc(),wt(e),null;case 19:if(ke(Ne),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ea(s,!1);else{if(et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Ne,Ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&ze()>oo&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return wt(e),null}else 2*ze()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ze(),e.sibling=null,n=Ne.current,Te(Ne,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return Om(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Bx(t,e){switch(pm(e),e.tag){case 1:return zt(e.type)&&rc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),ke(Bt),ke(At),Im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tm(e),null;case 13:if(ke(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ne),null;case 4:return io(),null;case 10:return _m(e.type._context),null;case 22:case 23:return Om(),null;case 24:return null;default:return null}}var su=!1,It=!1,zx=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){je(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){je(t,e,r)}}var Z_=!1;function Hx(t,e){if(jf=Zu,t=QE(),dm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},Zu=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var R=P.memoizedProps,C=P.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:In(e.type,R),C);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){je(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return P=Z_,Z_=!1,P}function ka(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tp(e,n,s)}i=i.next}while(i!==r)}}function Yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function WT(t){var e=t.alternate;e!==null&&(t.alternate=null,WT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[Qa],delete e[Bf],delete e[kx],delete e[Rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qT(t){return t.tag===5||t.tag===3||t.tag===4}function ev(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nc));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var ht=null,Sn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)KT(t,e,n),n=n.sibling}function KT(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:It||Vs(n,e);case 6:var r=ht,i=Sn;ht=null,Vr(t,e,n),ht=r,Sn=i,ht!==null&&(Sn?(t=ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(Sn?(t=ht,n=n.stateNode,t.nodeType===8?Sd(t.parentNode,n):t.nodeType===1&&Sd(t,n),Ha(t)):Sd(ht,n.stateNode));break;case 4:r=ht,i=Sn,ht=n.stateNode.containerInfo,Sn=!0,Vr(t,e,n),ht=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tp(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!It&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){je(n,e,l)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Vr(t,e,n),It=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zx),e.forEach(function(r){var i=Zx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function En(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ht=l.stateNode,Sn=!1;break e;case 3:ht=l.stateNode.containerInfo,Sn=!0;break e;case 4:ht=l.stateNode.containerInfo,Sn=!0;break e}l=l.return}if(ht===null)throw Error(U(160));KT(s,o,i),ht=null,Sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){je(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)GT(e,t),e=e.sibling}function GT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(En(e,t),Un(t),r&4){try{ka(3,t,t.return),Yc(3,t)}catch(R){je(t,t.return,R)}try{ka(5,t,t.return)}catch(R){je(t,t.return,R)}}break;case 1:En(e,t),Un(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(En(e,t),Un(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Fa(i,"")}catch(R){je(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gE(i,s),xf(l,o);var c=xf(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?EE(i,f):d==="dangerouslySetInnerHTML"?vE(i,f):d==="children"?Fa(i,f):Zp(i,d,f,c)}switch(l){case"input":If(i,s);break;case"textarea":yE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?js(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qa]=s}catch(R){je(t,t.return,R)}}break;case 6:if(En(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){je(t,t.return,R)}}break;case 3:if(En(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(R){je(t,t.return,R)}break;case 4:En(e,t),Un(t);break;case 13:En(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nm=ze())),r&4&&tv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||d,En(e,t),It=c):En(e,t),Un(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Q=t,d=t.child;d!==null;){for(f=Q=d;Q!==null;){switch(m=Q,w=m.child,m.tag){case 0:case 11:case 14:case 15:ka(4,m,m.return);break;case 1:Vs(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(R){je(r,n,R)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){rv(f);continue}}w!==null?(w.return=m,Q=w):rv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=wE("display",o))}catch(R){je(t,t.return,R)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){je(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:En(e,t),Un(t),r&4&&tv(t);break;case 21:break;default:En(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fa(i,""),r.flags&=-33);var s=ev(t);ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ev(t);rp(t,l,o);break;default:throw Error(U(161))}}catch(u){je(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Wx(t,e,n){Q=t,QT(t)}function QT(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||su;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||It;l=su;var c=It;if(su=o,(It=u)&&!c)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?iv(i):u!==null?(u.return=o,Q=u):iv(i);for(;s!==null;)Q=s,QT(s),s=s.sibling;Q=i,su=l,It=c}nv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):nv(t)}}function nv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Yc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&F_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}F_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}It||e.flags&512&&np(e)}catch(m){je(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function rv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function iv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yc(4,e)}catch(u){je(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){je(e,i,u)}}var s=e.return;try{np(e)}catch(u){je(e,s,u)}break;case 5:var o=e.return;try{np(e)}catch(u){je(e,o,u)}}}catch(u){je(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var qx=Math.ceil,fc=kr.ReactCurrentDispatcher,Cm=kr.ReactCurrentOwner,pn=kr.ReactCurrentBatchConfig,fe=0,lt=null,Ke=null,pt=0,Yt=0,Ms=Ti(0),et=0,tl=null,Yi=0,Jc=0,bm=0,Ra=null,Ut=null,Nm=0,oo=1/0,sr=null,pc=!1,sp=null,ri=null,ou=!1,Gr=null,mc=0,xa=0,op=null,Pu=-1,Cu=0;function Nt(){return fe&6?ze():Pu!==-1?Pu:Pu=ze()}function ii(t){return t.mode&1?fe&2&&pt!==0?pt&-pt:Px.transition!==null?(Cu===0&&(Cu=DE()),Cu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:FE(t.type)),t):1}function Cn(t,e,n,r){if(50<xa)throw xa=0,op=null,Error(U(185));vl(t,n,r),(!(fe&2)||t!==lt)&&(t===lt&&(!(fe&2)&&(Jc|=n),et===4&&$r(t,pt)),Ht(t,r),n===1&&fe===0&&!(e.mode&1)&&(oo=ze()+500,Kc&&Ii()))}function Ht(t,e){var n=t.callbackNode;PR(t,e);var r=Xu(t,t===lt?pt:0);if(r===0)n!==null&&f_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&f_(n),e===1)t.tag===0?xx(sv.bind(null,t)):sT(sv.bind(null,t)),Sx(function(){!(fe&6)&&Ii()}),n=null;else{switch(OE(r)){case 1:n=im;break;case 4:n=bE;break;case 16:n=Ju;break;case 536870912:n=NE;break;default:n=Ju}n=rI(n,YT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function YT(t,e){if(Pu=-1,Cu=0,fe&6)throw Error(U(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=Xu(t,t===lt?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gc(t,r);else{e=r;var i=fe;fe|=2;var s=XT();(lt!==t||pt!==e)&&(sr=null,oo=ze()+500,Bi(t,e));do try{Qx();break}catch(l){JT(t,l)}while(1);ym(),fc.current=s,fe=i,Ke!==null?e=0:(lt=null,pt=0,e=et)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=tl,Bi(t,0),$r(t,r),Ht(t,ze()),n;if(e===6)$r(t,r);else{if(i=t.current.alternate,!(r&30)&&!Kx(i)&&(e=gc(t,r),e===2&&(s=Df(t),s!==0&&(r=s,e=ap(t,s))),e===1))throw n=tl,Bi(t,0),$r(t,r),Ht(t,ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Li(t,Ut,sr);break;case 3:if($r(t,r),(r&130023424)===r&&(e=Nm+500-ze(),10<e)){if(Xu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$f(Li.bind(null,t,Ut,sr),e);break}Li(t,Ut,sr);break;case 4:if($r(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qx(r/1960))-r,10<r){t.timeoutHandle=$f(Li.bind(null,t,Ut,sr),r);break}Li(t,Ut,sr);break;case 5:Li(t,Ut,sr);break;default:throw Error(U(329))}}}return Ht(t,ze()),t.callbackNode===n?YT.bind(null,t):null}function ap(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=gc(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&lp(e)),t}function lp(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function Kx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $r(t,e){for(e&=~bm,e&=~Jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function sv(t){if(fe&6)throw Error(U(327));zs();var e=Xu(t,0);if(!(e&1))return Ht(t,ze()),null;var n=gc(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=tl,Bi(t,0),$r(t,e),Ht(t,ze()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,Ut,sr),Ht(t,ze()),null}function Dm(t,e){var n=fe;fe|=1;try{return t(e)}finally{fe=n,fe===0&&(oo=ze()+500,Kc&&Ii())}}function Ji(t){Gr!==null&&Gr.tag===0&&!(fe&6)&&zs();var e=fe;fe|=1;var n=pn.transition,r=ge;try{if(pn.transition=null,ge=1,t)return t()}finally{ge=r,pn.transition=n,fe=e,!(fe&6)&&Ii()}}function Om(){Yt=Ms.current,ke(Ms)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ix(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(pm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rc();break;case 3:io(),ke(Bt),ke(At),Im();break;case 5:Tm(r);break;case 4:io();break;case 13:ke(Ne);break;case 19:ke(Ne);break;case 10:_m(r.type._context);break;case 22:case 23:Om()}n=n.return}if(lt=t,Ke=t=si(t.current,null),pt=Yt=e,et=0,tl=null,bm=Jc=Yi=0,Ut=Ra=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function JT(t,e){do{var n=Ke;try{if(ym(),ku.current=dc,hc){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hc=!1}if(Qi=0,at=Ze=De=null,Aa=!1,Xa=0,Cm.current=null,n===null||n.return===null){et=1,tl=e,Ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=pt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=q_(o);if(w!==null){w.flags&=-257,K_(w,o,l,s,e),w.mode&1&&W_(s,c,e),e=w,u=c;var P=e.updateQueue;if(P===null){var R=new Set;R.add(u),e.updateQueue=R}else P.add(u);break e}else{if(!(e&1)){W_(s,c,e),Lm();break e}u=Error(U(426))}}else if(Ce&&l.mode&1){var C=q_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),K_(C,o,l,s,e),mm(so(u,l));break e}}s=u=so(u,l),et!==4&&(et=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=OT(s,u,e);U_(s,E);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(ri===null||!ri.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=LT(s,l,e);U_(s,O);break e}}s=s.return}while(s!==null)}eI(n)}catch(j){e=j,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(1)}function XT(){var t=fc.current;return fc.current=dc,t===null?dc:t}function Lm(){(et===0||et===3||et===2)&&(et=4),lt===null||!(Yi&268435455)&&!(Jc&268435455)||$r(lt,pt)}function gc(t,e){var n=fe;fe|=2;var r=XT();(lt!==t||pt!==e)&&(sr=null,Bi(t,e));do try{Gx();break}catch(i){JT(t,i)}while(1);if(ym(),fe=n,fc.current=r,Ke!==null)throw Error(U(261));return lt=null,pt=0,et}function Gx(){for(;Ke!==null;)ZT(Ke)}function Qx(){for(;Ke!==null&&!wR();)ZT(Ke)}function ZT(t){var e=nI(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?eI(t):Ke=e,Cm.current=null}function eI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bx(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{et=6,Ke=null;return}}else if(n=$x(n,e,Yt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);et===0&&(et=5)}function Li(t,e,n){var r=ge,i=pn.transition;try{pn.transition=null,ge=1,Yx(t,e,n,r)}finally{pn.transition=i,ge=r}return null}function Yx(t,e,n,r){do zs();while(Gr!==null);if(fe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CR(t,s),t===lt&&(Ke=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ou||(ou=!0,rI(Ju,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var o=ge;ge=1;var l=fe;fe|=4,Cm.current=null,Hx(t,n),GT(n,t),gx(Uf),Zu=!!jf,Uf=jf=null,t.current=n,Wx(n),ER(),fe=l,ge=o,pn.transition=s}else t.current=n;if(ou&&(ou=!1,Gr=t,mc=i),s=t.pendingLanes,s===0&&(ri=null),SR(n.stateNode),Ht(t,ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pc)throw pc=!1,t=sp,sp=null,t;return mc&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===op?xa++:(xa=0,op=t):xa=0,Ii(),null}function zs(){if(Gr!==null){var t=OE(mc),e=pn.transition,n=ge;try{if(pn.transition=null,ge=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,mc=0,fe&6)throw Error(U(331));var i=fe;for(fe|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(Q=c;Q!==null;){var d=Q;switch(d.tag){case 0:case 11:case 15:ka(8,d,s)}var f=d.child;if(f!==null)f.return=d,Q=f;else for(;Q!==null;){d=Q;var m=d.sibling,w=d.return;if(WT(d),d===c){Q=null;break}if(m!==null){m.return=w,Q=m;break}Q=w}}}var P=s.alternate;if(P!==null){var R=P.child;if(R!==null){P.child=null;do{var C=R.sibling;R.sibling=null,R=C}while(R!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var v=t.current;for(Q=v;Q!==null;){o=Q;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,Q=I;else e:for(o=v;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yc(9,l)}}catch(j){je(l,l.return,j)}if(l===o){Q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,Q=O;break e}Q=l.return}}if(fe=i,Ii(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Bc,t)}catch{}r=!0}return r}finally{ge=n,pn.transition=e}}return!1}function ov(t,e,n){e=so(n,e),e=OT(t,e,1),t=ni(t,e,1),e=Nt(),t!==null&&(vl(t,1,e),Ht(t,e))}function je(t,e,n){if(t.tag===3)ov(t,t,n);else for(;e!==null;){if(e.tag===3){ov(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=so(n,t),t=LT(e,t,1),e=ni(e,t,1),t=Nt(),e!==null&&(vl(e,1,t),Ht(e,t));break}}e=e.return}}function Jx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(pt&n)===n&&(et===4||et===3&&(pt&130023424)===pt&&500>ze()-Nm?Bi(t,0):bm|=n),Ht(t,e)}function tI(t,e){e===0&&(t.mode&1?(e=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):e=1);var n=Nt();t=yr(t,e),t!==null&&(vl(t,e,n),Ht(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tI(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),tI(t,n)}var nI;nI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,Fx(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Ce&&e.flags&1048576&&oT(e,oc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;xu(t,e),t=e.pendingProps;var i=to(e,At.current);Bs(e,n),i=Am(null,e,r,t,i,n);var s=km();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(s=!0,ic(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wm(e),i.updater=Qc,e.stateNode=i,i._reactInternals=e,Gf(e,r,t,n),e=Jf(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&fm(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(xu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tP(r),t=In(r,t),i){case 0:e=Yf(null,e,r,t,n);break e;case 1:e=Y_(null,e,r,t,n);break e;case 11:e=G_(null,e,r,t,n);break e;case 14:e=Q_(null,e,r,In(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Y_(t,e,r,i,n);case 3:e:{if(UT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dT(t,e),uc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(U(423)),e),e=J_(t,e,r,n,i);break e}else if(r!==i){i=so(Error(U(424)),e),e=J_(t,e,r,n,i);break e}else for(Xt=ti(e.stateNode.containerInfo.firstChild),tn=e,Ce=!0,An=null,n=cT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=_r(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return fT(e),t===null&&Wf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ff(r,i)?o=null:s!==null&&Ff(r,s)&&(e.flags|=32),jT(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&Wf(e),null;case 13:return FT(t,e,n);case 4:return Em(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),G_(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(ac,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Bt.current){e=_r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=dr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bs(e,n),i=gn(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=In(r,e.pendingProps),i=In(r.type,i),Q_(t,e,r,i,n);case 15:return VT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),xu(t,e),e.tag=1,zt(r)?(t=!0,ic(e)):t=!1,Bs(e,n),DT(e,r,i),Gf(e,r,i,n),Jf(null,e,r,!0,t,n);case 19:return $T(t,e,n);case 22:return MT(t,e,n)}throw Error(U(156,e.tag))};function rI(t,e){return CE(t,e)}function eP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,e,n,r){return new eP(t,e,n,r)}function Vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tP(t){if(typeof t=="function")return Vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tm)return 11;if(t===nm)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return zi(n.children,i,s,e);case em:o=8,i|=8;break;case _f:return t=fn(12,n,e,i|2),t.elementType=_f,t.lanes=s,t;case vf:return t=fn(13,n,e,i),t.elementType=vf,t.lanes=s,t;case wf:return t=fn(19,n,e,i),t.elementType=wf,t.lanes=s,t;case fE:return Xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hE:o=10;break e;case dE:o=9;break e;case tm:o=11;break e;case nm:o=14;break e;case jr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=fn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=fn(7,t,r,e),t.lanes=n,t}function Xc(t,e,n,r){return t=fn(22,t,r,e),t.elementType=fE,t.lanes=n,t.stateNode={isHidden:!1},t}function Nd(t,e,n){return t=fn(6,t,null,e),t.lanes=n,t}function Dd(t,e,n){return e=fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,r,i,s,o,l,u){return t=new nP(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wm(s),t}function rP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iI(t){if(!t)return fi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(zt(n))return iT(t,n,e)}return e}function sI(t,e,n,r,i,s,o,l,u){return t=Mm(n,r,!0,t,i,s,o,l,u),t.context=iI(null),n=t.current,r=Nt(),i=ii(n),s=dr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,vl(t,i,r),Ht(t,r),t}function Zc(t,e,n,r){var i=e.current,s=Nt(),o=ii(i);return n=iI(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(Cn(t,i,o,s),Au(t,i,o)),o}function yc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jm(t,e){av(t,e),(t=t.alternate)&&av(t,e)}function iP(){return null}var oI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Um(t){this._internalRoot=t}eh.prototype.render=Um.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Zc(t,e,null,null)};eh.prototype.unmount=Um.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){Zc(null,t,null,null)}),e[gr]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=ME();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&UE(t)}};function Fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lv(){}function sP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=yc(o);s.call(c)}}var o=sI(e,r,t,0,null,!1,!1,"",lv);return t._reactRootContainer=o,t[gr]=o.current,Ka(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=yc(u);l.call(c)}}var u=Mm(t,0,!1,null,null,!1,!1,"",lv);return t._reactRootContainer=u,t[gr]=u.current,Ka(t.nodeType===8?t.parentNode:t),Ji(function(){Zc(e,u,n,r)}),u}function nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=yc(o);l.call(u)}}Zc(e,o,t,i)}else o=sP(n,e,t,i,r);return yc(o)}LE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(sm(e,n|1),Ht(e,ze()),!(fe&6)&&(oo=ze()+500,Ii()))}break;case 13:Ji(function(){var r=yr(t,1);if(r!==null){var i=Nt();Cn(r,t,1,i)}}),jm(t,1)}};om=function(t){if(t.tag===13){var e=yr(t,134217728);if(e!==null){var n=Nt();Cn(e,t,134217728,n)}jm(t,134217728)}};VE=function(t){if(t.tag===13){var e=ii(t),n=yr(t,e);if(n!==null){var r=Nt();Cn(n,t,e,r)}jm(t,e)}};ME=function(){return ge};jE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Cf=function(t,e,n){switch(e){case"input":if(If(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qc(r);if(!i)throw Error(U(90));mE(r),If(r,i)}}}break;case"textarea":yE(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};SE=Dm;AE=Ji;var oP={usingClientEntryPoint:!1,Events:[El,bs,qc,TE,IE,Dm]},ta={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aP={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xE(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||iP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{Bc=au.inject(aP),Kn=au}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oP;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fm(e))throw Error(U(200));return rP(t,e,null,n)};rn.createRoot=function(t,e){if(!Fm(t))throw Error(U(299));var n=!1,r="",i=oI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,r,i),t[gr]=e.current,Ka(t.nodeType===8?t.parentNode:t),new Um(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=xE(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return Ji(t)};rn.hydrate=function(t,e,n){if(!th(e))throw Error(U(200));return nh(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Fm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sI(e,null,t,1,n??null,i,!1,s,o),t[gr]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eh(e)};rn.render=function(t,e,n){if(!th(e))throw Error(U(200));return nh(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!th(t))throw Error(U(40));return t._reactRootContainer?(Ji(function(){nh(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1};rn.unstable_batchedUpdates=Dm;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!th(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return nh(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function aI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aI)}catch(t){console.error(t)}}aI(),aE.exports=rn;var lP=aE.exports,uv=lP;gf.createRoot=uv.createRoot,gf.hydrateRoot=uv.hydrateRoot;const uP="modulepreload",cP=function(t){return"/"+t},cv={},se=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=cP(s),s in cv)return;cv[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":uP,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((d,f)=>{c.addEventListener("load",d),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const hv="popstate";function hP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return up("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_c(i)}return fP(e,n,null,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $m(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dP(){return Math.random().toString(36).substr(2,8)}function dv(t,e){return{usr:t.state,key:t.key,idx:e}}function up(t,e,n,r){return n===void 0&&(n=null),nl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:n,key:e&&e.key||r||dP()})}function _c(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(nl({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Qr.Pop;let C=d(),E=C==null?null:C-c;c=C,u&&u({action:l,location:R.location,delta:E})}function m(C,E){l=Qr.Push;let v=up(R.location,C,E);n&&n(v,C),c=d()+1;let I=dv(v,c),O=R.createHref(v);try{o.pushState(I,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&u&&u({action:l,location:R.location,delta:1})}function w(C,E){l=Qr.Replace;let v=up(R.location,C,E);n&&n(v,C),c=d();let I=dv(v,c),O=R.createHref(v);o.replaceState(I,"",O),s&&u&&u({action:l,location:R.location,delta:0})}function P(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:_c(C);return v=v.replace(/ $/,"%20"),He(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let R={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hv,f),u=C,()=>{i.removeEventListener(hv,f),u=null}},createHref(C){return e(i,C)},createURL:P,encodeLocation(C){let E=P(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:w,go(C){return o.go(C)}};return R}var fv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fv||(fv={}));function pP(t,e,n){return n===void 0&&(n="/"),mP(t,e,n,!1)}function mP(t,e,n,r){let i=typeof e=="string"?yo(e):e,s=Bm(i.pathname||"/",n);if(s==null)return null;let o=lI(t);gP(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=RP(s);l=AP(o[u],c,r)}return l}function lI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(He(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=oi([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(He(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:IP(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of uI(s.path))i(s,o,u)}),e}function uI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function gP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:SP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yP=/^:[\w-]+$/,_P=3,vP=2,wP=1,EP=10,TP=-2,pv=t=>t==="*";function IP(t,e){let n=t.split("/"),r=n.length;return n.some(pv)&&(r+=TP),e&&(r+=vP),n.filter(i=>!pv(i)).reduce((i,s)=>i+(yP.test(s)?_P:s===""?wP:EP),r)}function SP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=mv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=mv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:oi([s,f.pathname]),pathnameBase:NP(oi([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=oi([s,f.pathnameBase]))}return o}function mv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let R=l[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const P=l[f];return w&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function kP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$m(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return $m(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Bm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const xP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PP=t=>xP.test(t);function CP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yo(t):t,s;if(n)if(PP(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),$m(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=gv(n.substring(1),"/"):s=gv(n,e)}else s=e;return{pathname:s,search:DP(r),hash:OP(i)}}function gv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Od(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zm(t,e){let n=bP(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yo(t):(i=nl({},t),He(!i.pathname||!i.pathname.includes("?"),Od("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),Od("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),Od("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=CP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),NP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cI=["post","put","patch","delete"];new Set(cI);const VP=["get",...cI];new Set(VP);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rl.apply(this,arguments)}const Wm=D.createContext(null),MP=D.createContext(null),Si=D.createContext(null),rh=D.createContext(null),er=D.createContext({outlet:null,matches:[],isDataRoute:!1}),hI=D.createContext(null);function jP(t,e){let{relative:n}=e===void 0?{}:e;_o()||He(!1);let{basename:r,navigator:i}=D.useContext(Si),{hash:s,pathname:o,search:l}=fI(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:oi([r,o])),i.createHref({pathname:u,search:l,hash:s})}function _o(){return D.useContext(rh)!=null}function vo(){return _o()||He(!1),D.useContext(rh).location}function dI(t){D.useContext(Si).static||D.useLayoutEffect(t)}function qm(){let{isDataRoute:t}=D.useContext(er);return t?ZP():UP()}function UP(){_o()||He(!1);let t=D.useContext(Wm),{basename:e,future:n,navigator:r}=D.useContext(Si),{matches:i}=D.useContext(er),{pathname:s}=vo(),o=JSON.stringify(zm(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return dI(()=>{l.current=!0}),D.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Hm(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const FP=D.createContext(null);function $P(t){let e=D.useContext(er).outlet;return e&&D.createElement(FP.Provider,{value:t},e)}function g6(){let{matches:t}=D.useContext(er),e=t[t.length-1];return e?e.params:{}}function fI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Si),{matches:i}=D.useContext(er),{pathname:s}=vo(),o=JSON.stringify(zm(i,r.v7_relativeSplatPath));return D.useMemo(()=>Hm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function BP(t,e){return zP(t,e)}function zP(t,e,n,r){_o()||He(!1);let{navigator:i}=D.useContext(Si),{matches:s}=D.useContext(er),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=vo(),d;if(e){var f;let C=typeof e=="string"?yo(e):e;u==="/"||(f=C.pathname)!=null&&f.startsWith(u)||He(!1),d=C}else d=c;let m=d.pathname||"/",w=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=pP(t,{pathname:w}),R=GP(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:oi([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:oi([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&R?D.createElement(rh.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},R):R}function HP(){let t=XP(),e=LP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const WP=D.createElement(HP,null);class qP extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(er.Provider,{value:this.props.routeContext},D.createElement(hI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KP(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(Wm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(er.Provider,{value:e},r)}function GP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||He(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:w}=n,P=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let w,P=!1,R=null,C=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,R=f.route.errorElement||WP,u&&(c<0&&m===0?(eC("route-fallback",!1),P=!0,C=null):c===m&&(P=!0,C=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let I;return w?I=R:P?I=C:f.route.Component?I=D.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=d,D.createElement(KP,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(qP,{location:n.location,revalidation:n.revalidation,component:R,error:w,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var pI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pI||{}),vc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vc||{});function QP(t){let e=D.useContext(Wm);return e||He(!1),e}function YP(t){let e=D.useContext(MP);return e||He(!1),e}function JP(t){let e=D.useContext(er);return e||He(!1),e}function mI(t){let e=JP(),n=e.matches[e.matches.length-1];return n.route.id||He(!1),n.route.id}function XP(){var t;let e=D.useContext(hI),n=YP(vc.UseRouteError),r=mI(vc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ZP(){let{router:t}=QP(pI.UseNavigateStable),e=mI(vc.UseNavigateStable),n=D.useRef(!1);return dI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,rl({fromRouteId:e},s)))},[t,e])}const yv={};function eC(t,e,n){!e&&!yv[t]&&(yv[t]=!0)}function tC(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Pa(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||He(!1);let{future:s,static:o}=D.useContext(Si),{matches:l}=D.useContext(er),{pathname:u}=vo(),c=qm(),d=Hm(e,zm(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return D.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function Km(t){return $P(t.context)}function J(t){He(!1)}function nC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&He(!1);let u=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:u,navigator:s,static:o,future:rl({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=yo(r));let{pathname:d="/",search:f="",hash:m="",state:w=null,key:P="default"}=r,R=D.useMemo(()=>{let C=Bm(d,u);return C==null?null:{location:{pathname:C,search:f,hash:m,state:w,key:P},navigationType:i}},[u,d,f,m,w,P,i]);return R==null?null:D.createElement(Si.Provider,{value:c},D.createElement(rh.Provider,{children:n,value:R}))}function rC(t){let{children:e,location:n}=t;return BP(cp(e),n)}new Promise(()=>{});function cp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,cp(r.props.children,s));return}r.type!==J&&He(!1),!r.props.index||!r.props.children||He(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hp(){return hp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hp.apply(this,arguments)}function iC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oC(t,e){return t.button===0&&(!e||e==="_self")&&!sC(t)}const aC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lC="6";try{window.__reactRouterVersion=lC}catch{}const uC="startTransition",_v=Jk[uC];function cC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=hP({window:i,v5Compat:!0}));let o=s.current,[l,u]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=D.useCallback(f=>{c&&_v?_v(()=>u(f)):u(f)},[u,c]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>tC(r),[r]),D.createElement(nC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const hC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fn=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=iC(e,aC),{basename:w}=D.useContext(Si),P,R=!1;if(typeof c=="string"&&dC.test(c)&&(P=c,hC))try{let I=new URL(window.location.href),O=c.startsWith("//")?new URL(I.protocol+c):new URL(c),j=Bm(O.pathname,w);O.origin===I.origin&&j!=null?c=j+O.search+O.hash:R=!0}catch{}let C=jP(c,{relative:i}),E=fC(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(I){r&&r(I),I.defaultPrevented||E(I)}return D.createElement("a",hp({},m,{href:P||C,onClick:R||s?r:v,ref:n,target:u}))});var vv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(vv||(vv={}));var wv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wv||(wv={}));function fC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=qm(),c=vo(),d=fI(t,{relative:o});return D.useCallback(f=>{if(oC(f,n)){f.preventDefault();let m=r!==void 0?r:_c(c)===_c(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}let pC={data:""},mC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||pC},gC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,yC=/\/\*[^]*?\*\/|  +/g,Ev=/\n+/g,Br=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Br(o,s):s+"{"+Br(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Br(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Br.p?Br.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},rr={},gI=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+gI(t[n]);return e}return t},_C=(t,e,n,r,i)=>{let s=gI(t),o=rr[s]||(rr[s]=(u=>{let c=0,d=11;for(;c<u.length;)d=101*d+u.charCodeAt(c++)>>>0;return"go"+d})(s));if(!rr[o]){let u=s!==t?t:(c=>{let d,f,m=[{}];for(;d=gC.exec(c.replace(yC,""));)d[4]?m.shift():d[3]?(f=d[3].replace(Ev," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(Ev," ").trim();return m[0]})(t);rr[o]=Br(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&rr.g?rr.g:null;return n&&(rr.g=rr[o]),((u,c,d,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=d?u+c.data:c.data+u)})(rr[o],e,r,l),o},vC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Br(l,""):l===!1?"":l}return r+i+(o??"")},"");function ih(t){let e=this||{},n=t.call?t(e.p):t;return _C(n.unshift?n.raw?vC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,mC(e.target),e.g,e.o,e.k)}let yI,dp,fp;ih.bind({g:1});let vr=ih.bind({k:1});function wC(t,e,n,r){Br.p=e,yI=t,dp=n,fp=r}function Ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:dp&&dp()},l),n.o=/ *go\d+/.test(u),l.className=ih.apply(n,r)+(u?" "+u:""),e&&(l.ref=o);let c=t;return t[0]&&(c=l.as||t,delete l.as),fp&&c[0]&&fp(l),yI(c,l)}return e?e(i):i}}var EC=t=>typeof t=="function",wc=(t,e)=>EC(t)?t(e):t,TC=(()=>{let t=0;return()=>(++t).toString()})(),_I=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),IC=20,Gm="default",vI=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return vI(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Nu=[],wI={toasts:[],pausedAt:void 0,settings:{toastLimit:IC}},Wn={},EI=(t,e=Gm)=>{Wn[e]=vI(Wn[e]||wI,t),Nu.forEach(([n,r])=>{n===e&&r(Wn[e])})},TI=t=>Object.keys(Wn).forEach(e=>EI(t,e)),SC=t=>Object.keys(Wn).find(e=>Wn[e].toasts.some(n=>n.id===t)),sh=(t=Gm)=>e=>{EI(e,t)},AC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},kC=(t={},e=Gm)=>{let[n,r]=D.useState(Wn[e]||wI),i=D.useRef(Wn[e]);D.useEffect(()=>(i.current!==Wn[e]&&r(Wn[e]),Nu.push([e,r]),()=>{let o=Nu.findIndex(([l])=>l===e);o>-1&&Nu.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||AC[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},RC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||TC()}),Il=t=>(e,n)=>{let r=RC(e,t,n);return sh(r.toasterId||SC(r.id))({type:2,toast:r}),r.id},pe=(t,e)=>Il("blank")(t,e);pe.error=Il("error");pe.success=Il("success");pe.loading=Il("loading");pe.custom=Il("custom");pe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?sh(e)(n):TI(n)};pe.dismissAll=t=>pe.dismiss(void 0,t);pe.remove=(t,e)=>{let n={type:4,toastId:t};e?sh(e)(n):TI(n)};pe.removeAll=t=>pe.remove(void 0,t);pe.promise=(t,e,n)=>{let r=pe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?wc(e.success,i):void 0;return s?pe.success(s,{id:r,...n,...n==null?void 0:n.success}):pe.dismiss(r),i}).catch(i=>{let s=e.error?wc(e.error,i):void 0;s?pe.error(s,{id:r,...n,...n==null?void 0:n.error}):pe.dismiss(r)}),t};var xC=1e3,PC=(t,e="default")=>{let{toasts:n,pausedAt:r}=kC(t,e),i=D.useRef(new Map).current,s=D.useCallback((f,m=xC)=>{if(i.has(f))return;let w=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,w)},[]);D.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(w=>{if(w.duration===1/0)return;let P=(w.duration||0)+w.pauseDuration-(f-w.createdAt);if(P<0){w.visible&&pe.dismiss(w.id);return}return setTimeout(()=>pe.dismiss(w.id,e),P)});return()=>{m.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=D.useCallback(sh(e),[e]),l=D.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=D.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=D.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=D.useCallback((f,m)=>{let{reverseOrder:w=!1,gutter:P=8,defaultPosition:R}=m||{},C=n.filter(I=>(I.position||R)===(f.position||R)&&I.height),E=C.findIndex(I=>I.id===f.id),v=C.filter((I,O)=>O<E&&I.visible).length;return C.filter(I=>I.visible).slice(...w?[v+1]:[0,v]).reduce((I,O)=>I+(O.height||0)+P,0)},[n]);return D.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:c,calculateOffset:d}}},CC=vr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,bC=vr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,NC=vr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,DC=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${CC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${bC} 0.15s ease-out forwards;
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
    animation: ${NC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,OC=vr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,LC=Ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${OC} 1s linear infinite;
`,VC=vr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,MC=vr`
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
}`,jC=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${VC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${MC} 0.2s ease-out forwards;
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
`,UC=Ai("div")`
  position: absolute;
`,FC=Ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$C=vr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,BC=Ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$C} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,zC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(BC,null,e):e:n==="blank"?null:D.createElement(FC,null,D.createElement(LC,{...r}),n!=="loading"&&D.createElement(UC,null,n==="error"?D.createElement(DC,{...r}):D.createElement(jC,{...r})))},HC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,WC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,qC="0%{opacity:0;} 100%{opacity:1;}",KC="0%{opacity:1;} 100%{opacity:0;}",GC=Ai("div")`
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
`,QC=Ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,YC=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=_I()?[qC,KC]:[HC(n),WC(n)];return{animation:e?`${vr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${vr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},JC=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?YC(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(zC,{toast:t}),o=D.createElement(QC,{...t.ariaProps},wc(t.message,t));return D.createElement(GC,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});wC(D.createElement);var XC=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},ZC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_I()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},eb=ih`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,lu=16,tb=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:c}=PC(n,s);return D.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:lu,left:lu,right:lu,bottom:lu,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(d=>{let f=d.position||e,m=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=ZC(f,m);return D.createElement(XC,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?eb:"",style:w},d.type==="custom"?wc(d.message,d):i?i(d):D.createElement(JC,{toast:d,position:f}))}))},Ld=pe,nb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const rb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),be=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...u},c)=>D.createElement("svg",{ref:c,...nb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${rb(t)}`,...u},[...e.map(([d,f])=>D.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},ib=be("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Tv=be("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),sb=be("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Vd=be("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Iv=be("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Md=be("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Sv=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),uu=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ob=be("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Av=be("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),ab=be("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),lb=be("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]),kv=be("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]),Rv=be("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),xv=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),ub=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),Pv=be("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),Cv=be("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),II=be("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),bv=be("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),Nv=be("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),cb=be("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),hb=be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),db=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fb=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},AI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new mb;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),f!==64){const P=c<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gb=function(t){const e=SI(t);return AI.encodeByteArray(e,!0)},Ec=function(t){return gb(t).replace(/\./g,"")},kI=function(t){try{return AI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _b=()=>yb().__FIREBASE_DEFAULTS__,vb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kI(t[1]);return e&&JSON.parse(e)},oh=()=>{try{return fb()||_b()||vb()||wb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RI=t=>{var e,n;return(n=(e=oh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},xI=t=>{const e=RI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},PI=()=>{var t;return(t=oh())==null?void 0:t.config},CI=t=>{var e;return(e=oh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[Ec(JSON.stringify(n)),Ec(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function Ib(){var e;const t=(e=oh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ab(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rb(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xb(){return!Ib()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NI(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function Pb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cb,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function bb(t,e){return t.replace(Nb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Nb=/\{\$([^}]+)}/g;function Db(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Dv(s)&&Dv(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Dv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ob(t,e){const n=new Lb(t,e);return n.subscribe.bind(n)}class Lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jd),i.error===void 0&&(i.error=jd),i.complete===void 0&&(i.complete=jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jd(){}/**
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
 */function re(t){return t&&t._delegate?t._delegate:t}/**
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
 */function cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qm(t){return(await fetch(t,{credentials:"include"})).ok}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vi="[DEFAULT]";/**
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
 */class Mb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ub(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jb(t){return t===Vi?void 0:t}function Ub(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const $b={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Bb=ue.INFO,zb={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Hb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ym{constructor(e){this.name=e,this._logLevel=Bb,this._logHandler=Hb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$b[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Wb=(t,e)=>e.some(n=>t instanceof n);let Ov,Lv;function qb(){return Ov||(Ov=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kb(){return Lv||(Lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OI=new WeakMap,pp=new WeakMap,LI=new WeakMap,Ud=new WeakMap,Jm=new WeakMap;function Gb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&OI.set(n,t)}).catch(()=>{}),Jm.set(e,t),e}function Qb(t){if(pp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yb(t){mp=t(mp)}function Jb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fd(this),e,...n);return LI.set(r,e.sort?e.sort():[e]),fr(r)}:Kb().includes(t)?function(...e){return t.apply(Fd(this),e),fr(OI.get(this))}:function(...e){return fr(t.apply(Fd(this),e))}}function Xb(t){return typeof t=="function"?Jb(t):(t instanceof IDBTransaction&&Qb(t),Wb(t,qb())?new Proxy(t,mp):t)}function fr(t){if(t instanceof IDBRequest)return Gb(t);if(Ud.has(t))return Ud.get(t);const e=Xb(t);return e!==t&&(Ud.set(t,e),Jm.set(e,t)),e}const Fd=t=>Jm.get(t);function ah(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(fr(o.result),u.oldVersion,u.newVersion,fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}function $d(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),fr(n).then(()=>{})}const Zb=["get","getKey","getAll","getAllKeys","count"],eN=["put","add","delete","clear"],Bd=new Map;function Vv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bd.get(e))return Bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zb.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Bd.set(e,s),s}Yb(t=>({...t,get:(e,n,r)=>Vv(e,n)||t.get(e,n,r),has:(e,n)=>!!Vv(e,n)||t.has(e,n)}));/**
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
 */class tN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gp="@firebase/app",Mv="0.14.10";/**
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
 */const wr=new Ym("@firebase/app"),rN="@firebase/app-compat",iN="@firebase/analytics-compat",sN="@firebase/analytics",oN="@firebase/app-check-compat",aN="@firebase/app-check",lN="@firebase/auth",uN="@firebase/auth-compat",cN="@firebase/database",hN="@firebase/data-connect",dN="@firebase/database-compat",fN="@firebase/functions",pN="@firebase/functions-compat",mN="@firebase/installations",gN="@firebase/installations-compat",yN="@firebase/messaging",_N="@firebase/messaging-compat",vN="@firebase/performance",wN="@firebase/performance-compat",EN="@firebase/remote-config",TN="@firebase/remote-config-compat",IN="@firebase/storage",SN="@firebase/storage-compat",AN="@firebase/firestore",kN="@firebase/ai",RN="@firebase/firestore-compat",xN="firebase",PN="12.11.0";/**
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
 */const yp="[DEFAULT]",CN={[gp]:"fire-core",[rN]:"fire-core-compat",[sN]:"fire-analytics",[iN]:"fire-analytics-compat",[aN]:"fire-app-check",[oN]:"fire-app-check-compat",[lN]:"fire-auth",[uN]:"fire-auth-compat",[cN]:"fire-rtdb",[hN]:"fire-data-connect",[dN]:"fire-rtdb-compat",[fN]:"fire-fn",[pN]:"fire-fn-compat",[mN]:"fire-iid",[gN]:"fire-iid-compat",[yN]:"fire-fcm",[_N]:"fire-fcm-compat",[vN]:"fire-perf",[wN]:"fire-perf-compat",[EN]:"fire-rc",[TN]:"fire-rc-compat",[IN]:"fire-gcs",[SN]:"fire-gcs-compat",[AN]:"fire-fst",[RN]:"fire-fst-compat",[kN]:"fire-vertex","fire-js":"fire-js",[xN]:"fire-js-all"};/**
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
 */const Tc=new Map,bN=new Map,_p=new Map;function jv(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(_p.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;_p.set(e,t);for(const n of Tc.values())jv(n,t);for(const n of bN.values())jv(n,t);return!0}function hs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ge(t){return t==null?!1:t.settings!==void 0}/**
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
 */const NN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new us("app","Firebase",NN);/**
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
 */class DN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=PN;function VI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=PI()),!n)throw ai.create("no-options");const s=Tc.get(i);if(s){if(pi(n,s.options)&&pi(r,s.config))return s;throw ai.create("duplicate-app",{appName:i})}const o=new Fb(i);for(const u of _p.values())o.addComponent(u);const l=new DN(n,r,o);return Tc.set(i,l),l}function lh(t=yp){const e=Tc.get(t);if(!e&&t===yp&&PI())return VI();if(!e)throw ai.create("no-app",{appName:t});return e}function Wt(t,e,n){let r=CN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(o.join(" "));return}Dn(new _n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const ON="firebase-heartbeat-database",LN=1,il="firebase-heartbeat-store";let zd=null;function MI(){return zd||(zd=ah(ON,LN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(il)}catch(n){console.warn(n)}}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),zd}async function VN(t){try{const n=(await MI()).transaction(il),r=await n.objectStore(il).get(jI(t));return await n.done,r}catch(e){if(e instanceof Ln)wr.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function Uv(t,e){try{const r=(await MI()).transaction(il,"readwrite");await r.objectStore(il).put(e,jI(t)),await r.done}catch(n){if(n instanceof Ln)wr.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function jI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MN=1024,jN=30;class UN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $N(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>jN){const o=BN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fv(),{heartbeatsToSend:r,unsentEntries:i}=FN(this._heartbeatsCache.heartbeats),s=Ec(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wr.warn(n),""}}}function Fv(){return new Date().toISOString().substring(0,10)}function FN(t,e=MN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$v(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$v(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $N{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NI()?DI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $v(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}function BN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zN(t){Dn(new _n("platform-logger",e=>new tN(e),"PRIVATE")),Dn(new _n("heartbeat",e=>new UN(e),"PRIVATE")),Wt(gp,Mv,t),Wt(gp,Mv,"esm2020"),Wt("fire-js","")}zN("");function UI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HN=UI,FI=new us("auth","Firebase",UI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new Ym("@firebase/auth");function WN(t,...e){Ic.logLevel<=ue.WARN&&Ic.warn(`Auth (${ds}): ${t}`,...e)}function Du(t,...e){Ic.logLevel<=ue.ERROR&&Ic.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...e){throw Zm(t,...e)}function qt(t,...e){return Zm(t,...e)}function Xm(t,e,n){const r={...HN(),[e]:n};return new us("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return Xm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),Xm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return FI.create(t,...e)}function W(t,e,...n){if(!t)throw Zm(e,...n)}function cr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Du(e),new Error(e)}function Er(t,e){t||cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function eg(){return Bv()==="http:"||Bv()==="https:"}function Bv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eg()||Ab()||"connection"in navigator)?navigator.onLine:!0}function KN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=Tb()||kb()}get(){return qN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e){Er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YN=new Sl(3e4,6e4);function nt(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function rt(t,e,n,r,i={}){return BI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return Sb()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&cs(t.emulatorConfig.host)&&(c.credentials="include"),$I.fetch()(await zI(t,t.config.apiHost,n,l),c)})}async function BI(t,e,n){t._canInitEmulator=!1;const r={...GN,...e};try{const i=new XN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xm(t,d,c);vn(t,d)}}catch(i){if(i instanceof Ln)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function Rr(t,e,n,r,i={}){const s=await rt(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function zI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?tg(t.config,i):`${t.config.apiScheme}://${i}`;return QN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function JN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),YN.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t){return t!==void 0&&t.getResponse!==void 0}function Hv(t){return t!==void 0&&t.enterprise!==void 0}class HI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(t){return(await rt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function WI(t,e){return rt(t,"GET","/v2/recaptchaConfig",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e){return rt(t,"POST","/v1/accounts:delete",e)}async function tD(t,e){return rt(t,"POST","/v1/accounts:update",e)}async function Sc(t,e){return rt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nD(t,e=!1){const n=re(t),r=await n.getIdToken(e),i=ch(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ca(Hd(i.auth_time)),issuedAtTime:Ca(Hd(i.iat)),expirationTime:Ca(Hd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hd(t){return Number(t)*1e3}function ch(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Du("JWT malformed, contained fewer than 3 sections"),null;try{const i=kI(n);return i?JSON.parse(i):(Du("Failed to decode base64 JWT payload"),null)}catch(i){return Du("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wv(t){const e=ch(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&rD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ol(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Xi(t,Sc(e,{idToken:n}));W(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?qI(i.providerUserInfo):[],o=oD(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function sD(t){const e=re(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aD(t,e){const n=await BI(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await zI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&cs(t.emulatorConfig.host)&&(u.credentials="include"),$I.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lD(t,e){return rt(t,"POST","/v2/accounts:revokeToken",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Wv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await aD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new iD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nD(this,e)}reload(){return sD(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Xi(this,eD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:w,providerData:P,stsTokenManager:R}=n;W(f&&R,e,"internal-error");const C=Hs.fromJSON(this.name,R);W(typeof f=="string",e,"internal-error"),Mr(r,e.name),Mr(i,e.name),W(typeof m=="boolean",e,"internal-error"),W(typeof w=="boolean",e,"internal-error"),Mr(s,e.name),Mr(o,e.name),Mr(l,e.name),Mr(u,e.name),Mr(c,e.name),Mr(d,e.name);const E=new kn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:C,createdAt:c,lastLoginAt:d});return P&&Array.isArray(P)&&(E.providerData=P.map(v=>({...v}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hs;l.updateFromIdToken(r);const u=new kn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=new Map;function hr(t){Er(t instanceof Function,"Expected a class definition");let e=qv.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qv.set(t,e),e)}/**
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
 */class KI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}KI.type="NONE";const Kv=KI;/**
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
 */function Ou(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ou(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ou("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Sc(this.auth,{idToken:e}).catch(()=>{});return n?kn._fromGetAccountInfoResponse(this.auth,n,e):null}return kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(hr(Kv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||hr(Kv);const o=Ou(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Sc(e,{idToken:d}).catch(()=>{});if(!m)break;f=await kn._fromGetAccountInfoResponse(e,m,d)}else f=kn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ws(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(JI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(GI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZI(e))return"Blackberry";if(e1(e))return"Webos";if(QI(e))return"Safari";if((e.includes("chrome/")||YI(e))&&!e.includes("edge/"))return"Chrome";if(XI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function GI(t=kt()){return/firefox\//i.test(t)}function QI(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YI(t=kt()){return/crios\//i.test(t)}function JI(t=kt()){return/iemobile/i.test(t)}function XI(t=kt()){return/android/i.test(t)}function ZI(t=kt()){return/blackberry/i.test(t)}function e1(t=kt()){return/webos/i.test(t)}function ng(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uD(t=kt()){var e;return ng(t)&&!!((e=window.navigator)!=null&&e.standalone)}function cD(){return Rb()&&document.documentMode===10}function t1(t=kt()){return ng(t)||XI(t)||e1(t)||ZI(t)||/windows phone/i.test(t)||JI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e=[]){let n;switch(t){case"Browser":n=Gv(kt());break;case"Worker":n=`${Gv(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class hD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dD(t,e={}){return rt(t,"GET","/v2/passwordPolicy",nt(t,e))}/**
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
 */const fD=6;class pD{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new hD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=FI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sc(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Dt(this));const n=e?re(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dD(this),n=new pD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&WN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ut(t){return re(t)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ob(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gD(t){Al=t}function rg(t){return Al.loadJS(t)}function yD(){return Al.recaptchaV2Script}function _D(){return Al.recaptchaEnterpriseScript}function vD(){return Al.gapiScript}function r1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wD=500,ED=6e4,cu=1e12;class TD{constructor(e){this.auth=e,this.counter=cu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||cu;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||cu;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||cu;return(r=this._widgets.get(n))==null||r.execute(),""}}class ID{constructor(){this.enterprise=new SD}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SD{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class AD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;W(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=kD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},ED)},wD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function kD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const RD="recaptcha-enterprise",ba="NO_RECAPTCHA";class i1{constructor(e){this.type=RD,this.auth=ut(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{WI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new HI(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Hv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ba)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ID().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_D();u.length!==0&&(u+=l),rg(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function na(t,e,n,r=!1,i=!1){const s=new i1(t);let o;if(i)o=ba;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function li(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await na(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await na(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await na(t,e,n);return r(t,l).catch(async u=>{var c;if(((c=t._getRecaptchaConfig())==null?void 0:c.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await na(t,e,n,!1,!0);return r(t,d)}return Promise.reject(u)})}else{const l=await na(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function xD(t){const e=ut(t),n=await WI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new HI(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new i1(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t,e){const n=hs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pi(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function CD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bD(t,e,n){const r=ut(t);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=s1(e),{host:o,port:l}=ND(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(pi(c,r.config.emulator)&&pi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,cs(o)?Qm(`${s}//${o}${u}`):i||DD()}function s1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ND(t){const e=s1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yv(o)}}}function Yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,n){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OD(t,e){return rt(t,"POST","/v1/accounts:resetPassword",nt(t,e))}async function LD(t,e){return rt(t,"POST","/v1/accounts:update",e)}async function VD(t,e){return rt(t,"POST","/v1/accounts:signUp",e)}async function MD(t,e){return rt(t,"POST","/v1/accounts:update",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e){return Rr(t,"POST","/v1/accounts:signInWithPassword",nt(t,e))}async function dh(t,e){return rt(t,"POST","/v1/accounts:sendOobCode",nt(t,e))}async function UD(t,e){return dh(t,e)}async function FD(t,e){return dh(t,e)}async function $D(t,e){return dh(t,e)}async function BD(t,e){return dh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}async function HD(t,e){return Rr(t,"POST","/v1/accounts:signInWithEmailLink",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends hh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,n,"signInWithPassword",jD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return zD(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,r,"signUpPassword",VD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return HD(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Rr(t,"POST","/v1/accounts:signInWithIdp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="http://localhost";class Tr extends hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:WD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t,e){return rt(t,"POST","/v1/accounts:sendVerificationCode",nt(t,e))}async function qD(t,e){return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e))}async function KD(t,e){const n=await Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,e));if(n.temporaryProof)throw ma(t,"account-exists-with-different-credential",n);return n}const GD={USER_NOT_FOUND:"user-not-found"};async function QD(t,e){const n={...e,operation:"REAUTH"};return Rr(t,"POST","/v1/accounts:signInWithPhoneNumber",nt(t,n),GD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends hh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Na({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Na({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return qD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return KD(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return QD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Na({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JD(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class fh{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,i=n.oobCode??null,s=YD(n.mode??null);W(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=JD(e);try{return new fh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fh.parseLink(n);return W(r,"argument-error"),al._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class To extends Eo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Lu extends To{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),Tr._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),Tr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Lu.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Lu.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Lu(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends To{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends To{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends To{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e){return Rr(t,"POST","/v1/accounts:signUp",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kn._fromIdTokenResponse(e,r,i),o=Xv(r);return new Xn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xv(r);return new Xn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y6(t){var i;if(Ge(t.app))return Promise.reject(Dt(t));const e=ut(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new Xn({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await o1(e,{returnSecureToken:!0}),r=await Xn._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Ln{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ac(e,n,r,i)}}function a1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function _6(t,e){const n=re(t);await ph(!0,n,e);const{providerUserInfo:r}=await tD(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=l1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function u1(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",r)}async function ph(t,e,n){await ol(e);const r=l1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";W(r.has(n)===t,e.auth,i)}/**
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
 */async function XD(t,e,n=!1){const{auth:r}=t;if(Ge(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await Xi(t,a1(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=ch(s.idToken);W(o,r,"internal-error");const{sub:l}=o;return W(t.uid===l,r,"user-mismatch"),Xn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c1(t,e,n=!1){if(Ge(t.app))return Promise.reject(Dt(t));const r="signIn",i=await a1(t,r,e),s=await Xn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mh(t,e){return c1(ut(t),e)}async function ZD(t,e){const n=re(t);return await ph(!1,n,e.providerId),u1(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t,e){return Rr(t,"POST","/v1/accounts:signInWithCustomToken",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v6(t,e){if(Ge(t.app))return Promise.reject(Dt(t));const n=ut(t),r=await e2(n,{token:e,returnSecureToken:!0}),i=await Xn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e,n){var r;W(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),W(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),W(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(W(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(W(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t){const e=ut(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w6(t,e,n){const r=ut(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&gh(r,i,n),await li(r,i,"getOobCode",FD,"EMAIL_PASSWORD_PROVIDER")}async function E6(t,e,n){await OD(re(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ig(t),r})}async function T6(t,e){await MD(re(t),{oobCode:e})}async function t2(t,e,n){if(Ge(t.app))return Promise.reject(Dt(t));const r=ut(t),o=await li(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o1,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&ig(t),u}),l=await Xn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function n2(t,e,n){return Ge(t.app)?Promise.reject(Dt(t)):mh(re(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ig(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I6(t,e,n){const r=ut(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){W(l.handleCodeInApp,r,"argument-error"),l&&gh(r,o,l)}s(i,n),await li(r,i,"getOobCode",$D,"EMAIL_PASSWORD_PROVIDER")}function S6(t,e){const n=fh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function A6(t,e,n){if(Ge(t.app))return Promise.reject(Dt(t));const r=re(t),i=fs.credentialWithLink(e,n||sl());return W(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t,e){return rt(t,"POST","/v1/accounts:createAuthUri",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k6(t,e){const n=eg()?sl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await r2(re(t),r);return i||[]}async function R6(t,e){const n=re(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&gh(n.auth,i,e);const{email:s}=await UD(n.auth,i);s!==t.email&&await t.reload()}async function x6(t,e,n){const r=re(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&gh(r.auth,s,n);const{email:o}=await BD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e){return rt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=re(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,i2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function C6(t,e){const n=re(t);return Ge(n.auth.app)?Promise.reject(Dt(n.auth)):h1(n,e,null)}function b6(t,e){return h1(re(t),null,e)}async function h1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Xi(t,LD(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function s2(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=ch(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Ks(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new o2(r,n);case"github.com":return new a2(r,n);case"google.com":return new l2(r,n);case"twitter.com":return new u2(r,n,t.screenName||null);case"custom":case"anonymous":return new Ks(r,null);default:return new Ks(r,e,n)}}class Ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class d1 extends Ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class o2 extends Ks{constructor(e,n){super(e,"facebook.com",n)}}class a2 extends d1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class l2 extends Ks{constructor(e,n){super(e,"google.com",n)}}class u2 extends d1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function N6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:s2(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t,e){return re(t).setPersistence(e)}function h2(t,e,n,r){return re(t).onIdTokenChanged(e,n,r)}function d2(t,e,n){return re(t).beforeAuthStateChanged(e,n)}function f2(t,e,n,r){return re(t).onAuthStateChanged(e,n,r)}function p2(t){return re(t).signOut()}function D6(t,e){return ut(t).revokeAccessToken(e)}async function O6(t){return re(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e){return rt(t,"POST","/v2/accounts/mfaEnrollment:start",nt(t,e))}const kc="__sak";/**
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
 */class f1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=1e3,g2=10;class p1 extends f1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=t1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);cD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,g2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},m2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p1.type="LOCAL";const m1=p1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1 extends f1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g1.type="SESSION";const y1=g1;/**
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
 */function y2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await y2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=_h("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function v2(t){qe().location.href=t}/**
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
 */function sg(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function w2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function T2(){return sg()?self:null}/**
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
 */const _1="firebaseLocalStorageDb",I2=1,Rc="firebaseLocalStorage",v1="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(t,e){return t.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function S2(){const t=indexedDB.deleteDatabase(_1);return new kl(t).toPromise()}function wp(){const t=indexedDB.open(_1,I2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rc,{keyPath:v1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rc)?e(r):(r.close(),await S2(),e(await wp()))})})}async function e0(t,e,n){const r=vh(t,!0).put({[v1]:e,value:n});return new kl(r).toPromise()}async function A2(t,e){const n=vh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function t0(t,e){const n=vh(t,!0).delete(e);return new kl(n).toPromise()}const k2=800,R2=3;class w1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>R2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(T2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await w2(),!this.activeServiceWorker)return;this.sender=new _2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wp();return await e0(e,kc,"1"),await t0(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>e0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>A2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>t0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w1.type="LOCAL";const x2=w1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t,e){return rt(t,"POST","/v2/accounts/mfaSignIn:start",nt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=r1("rcb"),P2=new Sl(3e4,6e4);class C2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=qe().grecaptcha)!=null&&e.render)}load(e,n=""){return W(b2(n),e,"argument-error"),this.shouldResolveImmediately(n)&&zv(qe().grecaptcha)?Promise.resolve(qe().grecaptcha):new Promise((r,i)=>{const s=qe().setTimeout(()=>{i(qt(e,"network-request-failed"))},P2.get());qe()[Wd]=()=>{qe().clearTimeout(s),delete qe()[Wd];const l=qe().grecaptcha;if(!l||!zv(l)){i(qt(e,"internal-error"));return}const u=l.render;l.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${yD()}?${wo({onload:Wd,render:"explicit",hl:n})}`;rg(o).catch(()=>{clearTimeout(s),i(qt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=qe().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function b2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class N2{async load(e){return new TD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="recaptcha",D2={theme:"light",type:"image"};class O2{constructor(e,n,r={...D2}){this.parameters=r,this.type=Da,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ut(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;W(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new N2:new C2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=qe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(eg()&&!sg(),this.auth,"internal-error"),await L2(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ZN(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function L2(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Na._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function V2(t,e,n){if(Ge(t.app))return Promise.reject(Dt(t));const r=ut(t),i=await T1(r,e,re(n));return new E1(i,s=>mh(r,s))}async function L6(t,e,n){const r=re(t);await ph(!1,r,"phone");const i=await T1(r.auth,e,re(n));return new E1(i,s=>ZD(r,s))}async function T1(t,e,n){var r;if(!t._getRecaptchaConfig())try{await xD(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){W(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await li(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===ba){W((n==null?void 0:n.type)===Da,d,"argument-error");const m=await qd(d,f,n);return Zv(d,m)}return Zv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{W(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;W(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await li(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===ba){W((n==null?void 0:n.type)===Da,f,"argument-error");const w=await qd(f,m,n);return n0(f,w)}return n0(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await li(t,s,"sendVerificationCode",async(c,d)=>{if(d.captchaResponse===ba){W((n==null?void 0:n.type)===Da,c,"argument-error");const f=await qd(c,d,n);return Jv(c,f)}return Jv(c,d)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n==null||n._reset()}}async function qd(t,e,n){W(n.type===Da,t,"argument-error");const r=await n.verify();W(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,u=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Rl(t,e){return e?hr(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class og extends hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M2(t){return c1(t.auth,new og(t),t.bypassAuthState)}function j2(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),XD(n,new og(t),t.bypassAuthState)}async function U2(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),u1(n,new og(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M2;case"linkViaPopup":case"linkViaRedirect":return U2;case"reauthViaPopup":case"reauthViaRedirect":return j2;default:vn(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new Sl(2e3,1e4);async function r0(t,e,n){if(Ge(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const r=ut(t);uh(t,e,Eo);const i=Rl(r,n);return new Yr(r,"signInViaPopup",e,i).executeNotNull()}async function V6(t,e,n){const r=re(t);uh(r.auth,e,Eo);const i=Rl(r.auth,n);return new Yr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yr extends I1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F2.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2="pendingRedirect",Vu=new Map;class B2 extends I1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vu.get(this.auth._key());if(!e){try{const r=await z2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vu.set(this.auth._key(),e)}return this.bypassAuthState||Vu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z2(t,e){const n=k1(e),r=A1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function S1(t,e){return A1(t)._set(k1(e),"true")}function H2(t,e){Vu.set(t._key(),e)}function A1(t){return hr(t._redirectPersistence)}function k1(t){return Ou($2,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t,e,n){return q2(t,e,n)}async function q2(t,e,n){if(Ge(t.app))return Promise.reject(Dt(t));const r=ut(t);uh(t,e,Eo),await r._initializationPromise;const i=Rl(r,n);return await S1(i,r),i._openRedirect(r,e,"signInViaRedirect")}function M6(t,e,n){return K2(t,e,n)}async function K2(t,e,n){const r=re(t);uh(r.auth,e,Eo),await r.auth._initializationPromise;const i=Rl(r.auth,n);await ph(!1,r,e.providerId),await S1(i,r.auth);const s=await Q2(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function G2(t,e){return await ut(t)._initializationPromise,R1(t,e,!1)}async function R1(t,e,n=!1){if(Ge(t.app))return Promise.reject(Dt(t));const r=ut(t),i=Rl(r,e),o=await new B2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Q2(t){const e=_h(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=10*60*1e3;class J2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y2&&this.cachedEventUids.clear(),this.cachedEventUids.has(i0(e))}saveEventToCache(e){this.cachedEventUids.add(i0(e)),this.lastProcessedEventTime=Date.now()}}function i0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z2(t,e={}){return rt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tO=/^https?/;async function nO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z2(t);for(const n of e)try{if(rO(n))return}catch{}vn(t,"unauthorized-domain")}function rO(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tO.test(n))return!1;if(eO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iO=new Sl(3e4,6e4);function s0(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sO(t){return new Promise((e,n)=>{var i,s,o;function r(){s0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{s0(),n(qt(t,"network-request-failed"))},timeout:iO.get()})}if((s=(i=qe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=qe().gapi)!=null&&o.load)r();else{const l=r1("iframefcb");return qe()[l]=()=>{gapi.load?r():n(qt(t,"network-request-failed"))},rg(`${vD()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Mu=null,e})}let Mu=null;function oO(t){return Mu=Mu||sO(t),Mu}/**
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
 */const aO=new Sl(5e3,15e3),lO="__/auth/iframe",uO="emulator/auth/iframe",cO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dO(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tg(e,uO):`https://${t.config.authDomain}/${lO}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=hO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function fO(t){const e=await oO(t),n=qe().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:dO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),l=qe().setTimeout(()=>{s(o)},aO.get());function u(){qe().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const pO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mO=500,gO=600,yO="_blank",_O="http://localhost";class o0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vO(t,e,n,r=mO,i=gO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...pO,width:r.toString(),height:i.toString(),top:s,left:o},c=kt().toLowerCase();n&&(l=YI(c)?yO:n),GI(c)&&(e=e||_O,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[w,P])=>`${m}${w}=${P},`,"");if(uD(c)&&l!=="_self")return wO(e||"",l),new o0(null);const f=window.open(e||"",l,d);W(f,t,"popup-blocked");try{f.focus()}catch{}return new o0(f)}function wO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EO="__/auth/handler",TO="emulator/auth/handler",IO=encodeURIComponent("fac");async function a0(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof Eo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Db(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof To){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${IO}=${encodeURIComponent(u)}`:"";return`${SO(t)}?${wo(l).slice(1)}${c}`}function SO({config:t}){return t.emulator?tg(t,TO):`https://${t.authDomain}/${EO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="webStorageSupport";class AO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y1,this._completeRedirectFn=R1,this._overrideRedirectResult=H2}async _openPopup(e,n,r,i){var o;Er((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await a0(e,n,r,sl(),i);return vO(e,s,_h())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await a0(e,n,r,sl(),i);return v2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fO(e),r=new J2(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kd,{type:Kd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Kd];s!==void 0&&n(!!s),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return t1()||QI()||ng()}}const kO=AO;var l0="@firebase/auth",u0="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PO(t){Dn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n1(t)},c=new mD(r,i,s,u);return CD(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new _n("auth-internal",e=>{const n=ut(e.getProvider("auth").getImmediate());return(r=>new RO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(l0,u0,xO(t)),Wt(l0,u0,"esm2020")}/**
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
 */const CO=5*60,bO=CI("authIdTokenMaxAge")||CO;let c0=null;const NO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bO)return;const i=n==null?void 0:n.token;c0!==i&&(c0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DO(t=lh()){const e=hs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PD(t,{popupRedirectResolver:kO,persistence:[x2,m1,y1]}),r=CI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=NO(s.toString());d2(n,o,()=>o(n.currentUser)),h2(n,l=>o(l))}}const i=RI("auth");return i&&bD(n,`http://${i}`),n}function OO(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}gD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PO("Browser");var LO="firebase",VO="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(LO,VO,"app");var h0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,P1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function T(){}T.prototype=_.prototype,S.F=_.prototype,S.prototype=new T,S.prototype.constructor=S,S.D=function(k,x,b){for(var A=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)A[ye-2]=arguments[ye];return _.prototype[x].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,T){T||(T=0);const k=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)k[x]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(x=0;x<16;++x)k[x]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=S.g[0],T=S.g[1],x=S.g[2];let b=S.g[3],A;A=_+(b^T&(x^b))+k[0]+3614090360&4294967295,_=T+(A<<7&4294967295|A>>>25),A=b+(x^_&(T^x))+k[1]+3905402710&4294967295,b=_+(A<<12&4294967295|A>>>20),A=x+(T^b&(_^T))+k[2]+606105819&4294967295,x=b+(A<<17&4294967295|A>>>15),A=T+(_^x&(b^_))+k[3]+3250441966&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(b^T&(x^b))+k[4]+4118548399&4294967295,_=T+(A<<7&4294967295|A>>>25),A=b+(x^_&(T^x))+k[5]+1200080426&4294967295,b=_+(A<<12&4294967295|A>>>20),A=x+(T^b&(_^T))+k[6]+2821735955&4294967295,x=b+(A<<17&4294967295|A>>>15),A=T+(_^x&(b^_))+k[7]+4249261313&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(b^T&(x^b))+k[8]+1770035416&4294967295,_=T+(A<<7&4294967295|A>>>25),A=b+(x^_&(T^x))+k[9]+2336552879&4294967295,b=_+(A<<12&4294967295|A>>>20),A=x+(T^b&(_^T))+k[10]+4294925233&4294967295,x=b+(A<<17&4294967295|A>>>15),A=T+(_^x&(b^_))+k[11]+2304563134&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(b^T&(x^b))+k[12]+1804603682&4294967295,_=T+(A<<7&4294967295|A>>>25),A=b+(x^_&(T^x))+k[13]+4254626195&4294967295,b=_+(A<<12&4294967295|A>>>20),A=x+(T^b&(_^T))+k[14]+2792965006&4294967295,x=b+(A<<17&4294967295|A>>>15),A=T+(_^x&(b^_))+k[15]+1236535329&4294967295,T=x+(A<<22&4294967295|A>>>10),A=_+(x^b&(T^x))+k[1]+4129170786&4294967295,_=T+(A<<5&4294967295|A>>>27),A=b+(T^x&(_^T))+k[6]+3225465664&4294967295,b=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(b^_))+k[11]+643717713&4294967295,x=b+(A<<14&4294967295|A>>>18),A=T+(b^_&(x^b))+k[0]+3921069994&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(x^b&(T^x))+k[5]+3593408605&4294967295,_=T+(A<<5&4294967295|A>>>27),A=b+(T^x&(_^T))+k[10]+38016083&4294967295,b=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(b^_))+k[15]+3634488961&4294967295,x=b+(A<<14&4294967295|A>>>18),A=T+(b^_&(x^b))+k[4]+3889429448&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(x^b&(T^x))+k[9]+568446438&4294967295,_=T+(A<<5&4294967295|A>>>27),A=b+(T^x&(_^T))+k[14]+3275163606&4294967295,b=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(b^_))+k[3]+4107603335&4294967295,x=b+(A<<14&4294967295|A>>>18),A=T+(b^_&(x^b))+k[8]+1163531501&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(x^b&(T^x))+k[13]+2850285829&4294967295,_=T+(A<<5&4294967295|A>>>27),A=b+(T^x&(_^T))+k[2]+4243563512&4294967295,b=_+(A<<9&4294967295|A>>>23),A=x+(_^T&(b^_))+k[7]+1735328473&4294967295,x=b+(A<<14&4294967295|A>>>18),A=T+(b^_&(x^b))+k[12]+2368359562&4294967295,T=x+(A<<20&4294967295|A>>>12),A=_+(T^x^b)+k[5]+4294588738&4294967295,_=T+(A<<4&4294967295|A>>>28),A=b+(_^T^x)+k[8]+2272392833&4294967295,b=_+(A<<11&4294967295|A>>>21),A=x+(b^_^T)+k[11]+1839030562&4294967295,x=b+(A<<16&4294967295|A>>>16),A=T+(x^b^_)+k[14]+4259657740&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(T^x^b)+k[1]+2763975236&4294967295,_=T+(A<<4&4294967295|A>>>28),A=b+(_^T^x)+k[4]+1272893353&4294967295,b=_+(A<<11&4294967295|A>>>21),A=x+(b^_^T)+k[7]+4139469664&4294967295,x=b+(A<<16&4294967295|A>>>16),A=T+(x^b^_)+k[10]+3200236656&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(T^x^b)+k[13]+681279174&4294967295,_=T+(A<<4&4294967295|A>>>28),A=b+(_^T^x)+k[0]+3936430074&4294967295,b=_+(A<<11&4294967295|A>>>21),A=x+(b^_^T)+k[3]+3572445317&4294967295,x=b+(A<<16&4294967295|A>>>16),A=T+(x^b^_)+k[6]+76029189&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(T^x^b)+k[9]+3654602809&4294967295,_=T+(A<<4&4294967295|A>>>28),A=b+(_^T^x)+k[12]+3873151461&4294967295,b=_+(A<<11&4294967295|A>>>21),A=x+(b^_^T)+k[15]+530742520&4294967295,x=b+(A<<16&4294967295|A>>>16),A=T+(x^b^_)+k[2]+3299628645&4294967295,T=x+(A<<23&4294967295|A>>>9),A=_+(x^(T|~b))+k[0]+4096336452&4294967295,_=T+(A<<6&4294967295|A>>>26),A=b+(T^(_|~x))+k[7]+1126891415&4294967295,b=_+(A<<10&4294967295|A>>>22),A=x+(_^(b|~T))+k[14]+2878612391&4294967295,x=b+(A<<15&4294967295|A>>>17),A=T+(b^(x|~_))+k[5]+4237533241&4294967295,T=x+(A<<21&4294967295|A>>>11),A=_+(x^(T|~b))+k[12]+1700485571&4294967295,_=T+(A<<6&4294967295|A>>>26),A=b+(T^(_|~x))+k[3]+2399980690&4294967295,b=_+(A<<10&4294967295|A>>>22),A=x+(_^(b|~T))+k[10]+4293915773&4294967295,x=b+(A<<15&4294967295|A>>>17),A=T+(b^(x|~_))+k[1]+2240044497&4294967295,T=x+(A<<21&4294967295|A>>>11),A=_+(x^(T|~b))+k[8]+1873313359&4294967295,_=T+(A<<6&4294967295|A>>>26),A=b+(T^(_|~x))+k[15]+4264355552&4294967295,b=_+(A<<10&4294967295|A>>>22),A=x+(_^(b|~T))+k[6]+2734768916&4294967295,x=b+(A<<15&4294967295|A>>>17),A=T+(b^(x|~_))+k[13]+1309151649&4294967295,T=x+(A<<21&4294967295|A>>>11),A=_+(x^(T|~b))+k[4]+4149444226&4294967295,_=T+(A<<6&4294967295|A>>>26),A=b+(T^(_|~x))+k[11]+3174756917&4294967295,b=_+(A<<10&4294967295|A>>>22),A=x+(_^(b|~T))+k[2]+718787259&4294967295,x=b+(A<<15&4294967295|A>>>17),A=T+(b^(x|~_))+k[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(x+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+x&4294967295,S.g[3]=S.g[3]+b&4294967295}r.prototype.v=function(S,_){_===void 0&&(_=S.length);const T=_-this.blockSize,k=this.C;let x=this.h,b=0;for(;b<_;){if(x==0)for(;b<=T;)i(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<_;)if(k[x++]=S.charCodeAt(b++),x==this.blockSize){i(this,k),x=0;break}}else for(;b<_;)if(k[x++]=S[b++],x==this.blockSize){i(this,k),x=0;break}}this.h=x,this.o+=_},r.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;_=this.o*8;for(var T=S.length-8;T<S.length;++T)S[T]=_&255,_/=256;for(this.v(S),S=Array(16),_=0,T=0;T<4;++T)for(let k=0;k<32;k+=8)S[_++]=this.g[T]>>>k&255;return S};function s(S,_){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=_(S)}function o(S,_){this.h=_;const T=[];let k=!0;for(let x=S.length-1;x>=0;x--){const b=S[x]|0;k&&b==_||(T[x]=b,k=!1)}this.g=T}var l={};function u(S){return-128<=S&&S<128?s(S,function(_){return new o([_|0],_<0?-1:0)}):new o([S|0],S<0?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return f;if(S<0)return C(c(-S));const _=[];let T=1;for(let k=0;S>=T;k++)_[k]=S/T|0,T*=4294967296;return new o(_,0)}function d(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return C(d(S.substring(1),_));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(_,8));let k=f;for(let b=0;b<S.length;b+=8){var x=Math.min(8,S.length-b);const A=parseInt(S.substring(b,b+x),_);x<8?(x=c(Math.pow(_,x)),k=k.j(x).add(c(A))):(k=k.j(T),k=k.add(c(A)))}return k}var f=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-C(this).m();let S=0,_=1;for(let T=0;T<this.g.length;T++){const k=this.i(T);S+=(k>=0?k:4294967296+k)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(P(this))return"0";if(R(this))return"-"+C(this).toString(S);const _=c(Math.pow(S,6));var T=this;let k="";for(;;){const x=O(T,_).g;T=E(T,x.j(_));let b=((T.g.length>0?T.g[0]:T.h)>>>0).toString(S);if(T=x,P(T))return b+k;for(;b.length<6;)b="0"+b;k=b+k}},t.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function P(S){if(S.h!=0)return!1;for(let _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function R(S){return S.h==-1}t.l=function(S){return S=E(this,S),R(S)?-1:P(S)?0:1};function C(S){const _=S.g.length,T=[];for(let k=0;k<_;k++)T[k]=~S.g[k];return new o(T,~S.h).add(m)}t.abs=function(){return R(this)?C(this):this},t.add=function(S){const _=Math.max(this.g.length,S.g.length),T=[];let k=0;for(let x=0;x<=_;x++){let b=k+(this.i(x)&65535)+(S.i(x)&65535),A=(b>>>16)+(this.i(x)>>>16)+(S.i(x)>>>16);k=A>>>16,b&=65535,A&=65535,T[x]=A<<16|b}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(S,_){return S.add(C(_))}t.j=function(S){if(P(this)||P(S))return f;if(R(this))return R(S)?C(this).j(C(S)):C(C(this).j(S));if(R(S))return C(this.j(C(S)));if(this.l(w)<0&&S.l(w)<0)return c(this.m()*S.m());const _=this.g.length+S.g.length,T=[];for(var k=0;k<2*_;k++)T[k]=0;for(k=0;k<this.g.length;k++)for(let x=0;x<S.g.length;x++){const b=this.i(k)>>>16,A=this.i(k)&65535,ye=S.i(x)>>>16,G=S.i(x)&65535;T[2*k+2*x]+=A*G,v(T,2*k+2*x),T[2*k+2*x+1]+=b*G,v(T,2*k+2*x+1),T[2*k+2*x+1]+=A*ye,v(T,2*k+2*x+1),T[2*k+2*x+2]+=b*ye,v(T,2*k+2*x+2)}for(S=0;S<_;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=_;S<2*_;S++)T[S]=0;return new o(T,0)};function v(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function I(S,_){this.g=S,this.h=_}function O(S,_){if(P(_))throw Error("division by zero");if(P(S))return new I(f,f);if(R(S))return _=O(C(S),_),new I(C(_.g),C(_.h));if(R(_))return _=O(S,C(_)),new I(C(_.g),_.h);if(S.g.length>30){if(R(S)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,k=_;k.l(S)<=0;)T=j(T),k=j(k);var x=$(T,1),b=$(k,1);for(k=$(k,2),T=$(T,2);!P(k);){var A=b.add(k);A.l(S)<=0&&(x=x.add(T),b=A),k=$(k,1),T=$(T,1)}return _=E(S,x.j(_)),new I(x,_)}for(x=f;S.l(_)>=0;){for(T=Math.max(1,Math.floor(S.m()/_.m())),k=Math.ceil(Math.log(T)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),b=c(T),A=b.j(_);R(A)||A.l(S)>0;)T-=k,b=c(T),A=b.j(_);P(b)&&(b=m),x=x.add(b),S=E(S,A)}return new I(x,S)}t.B=function(S){return O(this,S).h},t.and=function(S){const _=Math.max(this.g.length,S.g.length),T=[];for(let k=0;k<_;k++)T[k]=this.i(k)&S.i(k);return new o(T,this.h&S.h)},t.or=function(S){const _=Math.max(this.g.length,S.g.length),T=[];for(let k=0;k<_;k++)T[k]=this.i(k)|S.i(k);return new o(T,this.h|S.h)},t.xor=function(S){const _=Math.max(this.g.length,S.g.length),T=[];for(let k=0;k<_;k++)T[k]=this.i(k)^S.i(k);return new o(T,this.h^S.h)};function j(S){const _=S.g.length+1,T=[];for(let k=0;k<_;k++)T[k]=S.i(k)<<1|S.i(k-1)>>>31;return new o(T,S.h)}function $(S,_){const T=_>>5;_%=32;const k=S.g.length-T,x=[];for(let b=0;b<k;b++)x[b]=_>0?S.i(b+T)>>>_|S.i(b+T+1)<<32-_:S.i(b+T);return new o(x,S.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,P1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ui=o}).apply(typeof h0<"u"?h0:typeof self<"u"?self:typeof window<"u"?window:{});var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var C1,ga,b1,ju,Ep,N1,D1,O1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hu=="object"&&hu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in p))break e;p=p[N]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,p){return a.call.apply(a.bind,arguments)}function c(a,h,p){return c=u,c.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,N,L){for(var H=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)H[oe-2]=arguments[oe];return h.prototype[N].apply(y,H)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function P(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const L=N.length||0;a.length=p+L;for(let H=0;H<L;H++)a[p+H]=N[H]}else a.push(N)}}class R{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function E(){var a=S;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const y=I.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var I=new R(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,$=!1,S=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=E();){try{a.h.call(a.g)}catch(p){C(p)}var h=I;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}$=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function ye(a,h){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(ye,x),ye.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var G="closure_listenable_"+(Math.random()*1e6|0),le=0;function Re(a,h,p,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++le,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function F(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function z(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function ee(a){const h={};for(const p in a)h[p]=a[p];return h}const ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(a,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)a[p]=y[p];for(let L=0;L<ie.length;L++)p=ie[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function xe(a){this.src=a,this.g={},this.h=0}xe.prototype.add=function(a,h,p,y,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const H=Je(a,h,y,N);return H>-1?(h=a[H],p||(h.fa=!1)):(h=new Re(h,this.src,L,!!y,N),h.fa=p,a.push(h)),h};function Rt(a,h){const p=h.type;if(p in a.g){var y=a.g[p],N=Array.prototype.indexOf.call(y,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(y,N,1),L&&(B(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Je(a,h,p,y){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==y)return N}return-1}var yt="closure_lm_"+(Math.random()*1e6|0),Pe={};function ct(a,h,p,y,N){if(y&&y.once)return Pr(a,h,p,y,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)ct(a,h[L],p,y,N);return null}return p=bo(p),a&&a[G]?a.J(h,p,l(y)?!!y.capture:!!y,N):_t(a,h,p,!1,y,N)}function _t(a,h,p,y,N,L){if(!h)throw Error("Invalid event type");const H=l(N)?!!N.capture:!!N;let oe=Gt(a);if(oe||(a[yt]=oe=new xe(a)),p=oe.add(h,p,y,H,L),p.proxy)return p;if(y=on(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)b||(N=H),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(an(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function on(){function a(p){return h.call(a.src,a.listener,p)}const h=wn;return a}function Pr(a,h,p,y,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Pr(a,h[L],p,y,N);return null}return p=bo(p),a&&a[G]?a.K(h,p,l(y)?!!y.capture:!!y,N):_t(a,h,p,!0,y,N)}function Mt(a,h,p,y,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)Mt(a,h[L],p,y,N);else y=l(y)?!!y.capture:!!y,p=bo(p),a&&a[G]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=Je(h,p,y,N),p>-1&&(B(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=Gt(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Je(h,p,y,N)),(p=a>-1?h[a]:null)&&it(p))}function it(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[G])Rt(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(an(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Gt(h))?(Rt(p,a),p.h==0&&(p.src=null,h[yt]=null)):B(a)}}}function an(a){return a in Pe?Pe[a]:Pe[a]="on"+a}function wn(a,h){if(a.da)a=!0;else{h=new ye(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&it(a),a=p.call(y,h)}return a}function Gt(a){return a=a[yt],a instanceof xe?a:null}var Vn="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(a){return typeof a=="function"?a:(a[Vn]||(a[Vn]=function(h){return a.handleEvent(h)}),a[Vn])}function Ve(){k.call(this),this.i=new xe(this),this.M=this,this.G=null}f(Ve,k),Ve.prototype[G]=!0,Ve.prototype.removeEventListener=function(a,h,p,y){Mt(this,a,h,p,y)};function xt(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new x(h,a);else if(h instanceof x)h.target=h.target||a;else{var N=h;h=new x(y,a),we(h,N)}N=!0;let L,H;if(p)for(H=p.length-1;H>=0;H--)L=h.g=p[H],N=Dl(L,y,!0,h)&&N;if(L=h.g=a,N=Dl(L,y,!0,h)&&N,N=Dl(L,y,!1,h)&&N,p)for(H=0;H<p.length;H++)L=h.g=p[H],N=Dl(L,y,!1,h)&&N}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)B(p[y]);delete a.g[h],a.h--}}this.G=null},Ve.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Ve.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Dl(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const H=h[L];if(H&&!H.da&&H.capture==p){const oe=H.listener,Xe=H.ha||H.src;H.fa&&Rt(a.i,H),N=oe.call(Xe,y)!==!1&&N}}return N&&!y.defaultPrevented}function ak(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function ay(a){a.g=ak(()=>{a.g=null,a.i&&(a.i=!1,ay(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lk extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:ay(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(a){k.call(this),this.h=a,this.g={}}f(No,k);var ly=[];function uy(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&it(h)},a),a.g={}}No.prototype.N=function(){No.Z.N.call(this),uy(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wh=o.JSON.stringify,uk=o.JSON.parse,ck=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function cy(){}function hy(){}var Do={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qh(){x.call(this,"d")}f(qh,x);function Kh(){x.call(this,"c")}f(Kh,x);var xi={},dy=null;function Ol(){return dy=dy||new Ve}xi.Ia="serverreachability";function fy(a){x.call(this,xi.Ia,a)}f(fy,x);function Oo(a){const h=Ol();xt(h,new fy(h))}xi.STAT_EVENT="statevent";function py(a,h){x.call(this,xi.STAT_EVENT,a),this.stat=h}f(py,x);function Pt(a){const h=Ol();xt(h,new py(h,a))}xi.Ja="timingevent";function my(a,h){x.call(this,xi.Ja,a),this.size=h}f(my,x);function Lo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vo(){this.g=!0}Vo.prototype.ua=function(){this.g=!1};function hk(a,h,p,y,N,L){a.info(function(){if(a.g)if(L){var H="",oe=L.split("&");for(let _e=0;_e<oe.length;_e++){var Xe=oe[_e].split("=");if(Xe.length>1){const st=Xe[0];Xe=Xe[1];const jn=st.split("_");H=jn.length>=2&&jn[1]=="type"?H+(st+"="+Xe+"&"):H+(st+"=redacted&")}}}else H=null;else H=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+H})}function dk(a,h,p,y,N,L,H){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+H})}function gs(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+pk(a,p)+(y?" "+y:"")})}function fk(a,h){a.info(function(){return"TIMEOUT: "+h})}Vo.prototype.info=function(){};function pk(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let H=1;H<y.length;H++)y[H]=""}}}}return Wh(L)}catch{return h}}var Ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},gy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},yy;function Gh(){}f(Gh,cy),Gh.prototype.g=function(){return new XMLHttpRequest},yy=new Gh;function Mo(a){return encodeURIComponent(String(a))}function mk(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Cr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new No(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new _y}function _y(){this.i=null,this.g="",this.h=!1}var vy={},Qh={};function Yh(a,h,p){a.M=1,a.A=Ml(Mn(h)),a.u=p,a.R=!0,wy(a,null)}function wy(a,h){a.F=Date.now(),Vl(a),a.B=Mn(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Dy(p.i,"t",y),a.C=0,p=a.j.L,a.h=new _y,a.g=Jy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new lk(c(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(ly[0]=N.toString()),N=ly);for(let L=0;L<N.length;L++){const H=ct(p,N[L],y||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.J?ee(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Oo(),hk(a.i,a.v,a.B,a.l,a.S,a.u)}Cr.prototype.ba=function(a){a=a.target;const h=this.O;h&&Dr(a)==3?h.j():this.Y(a)},Cr.prototype.Y=function(a){try{if(a==this.g)e:{const oe=Dr(this.g),Xe=this.g.ya(),_e=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Fy(this.g)))){this.K||oe!=4||Xe==7||(Xe==8||_e<=0?Oo(3):Oo(2)),Jh(this);var h=this.g.ca();this.X=h;var p=gk(this);if(this.o=h==200,dk(this.i,this.v,this.B,this.l,this.S,oe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var L=y;break t}}L=null}if(a=L)gs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xh(this,a);else{this.o=!1,this.m=3,Pt(12),Pi(this),jo(this);break e}}if(this.R){a=!0;let st;for(;!this.K&&this.C<p.length;)if(st=yk(this,p),st==Qh){oe==4&&(this.m=4,Pt(14),a=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(st==vy){this.m=4,Pt(15),gs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else gs(this.i,this.l,st,null),Xh(this,st);if(Ey(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||p.length!=0||this.h.h||(this.m=1,Pt(16),a=!1),this.o=this.o&&a,!a)gs(this.i,this.l,p,"[Invalid Chunked Response]"),Pi(this),jo(this);else if(p.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),od(H),H.P=!0,Pt(11))}}else gs(this.i,this.l,p,null),Xh(this,p);oe==4&&Pi(this),this.o&&!this.K&&(oe==4?Ky(this.j,this):(this.o=!1,Vl(this)))}else bk(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Pt(12)):(this.m=0,Pt(13)),Pi(this),jo(this)}}}catch{}finally{}};function gk(a){if(!Ey(a))return a.g.la();const h=Fy(a.g);if(h==="")return"";let p="";const y=h.length,N=Dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pi(a),jo(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(N&&L==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function Ey(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function yk(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Qh:(p=Number(h.substring(p,y)),isNaN(p)?vy:(y+=1,y+p>h.length?Qh:(h=h.slice(y,y+p),a.C=y+p,h)))}Cr.prototype.cancel=function(){this.K=!0,Pi(this)};function Vl(a){a.T=Date.now()+a.H,Ty(a,a.H)}function Ty(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Lo(c(a.aa,a),h)}function Jh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Cr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(fk(this.i,this.B),this.M!=2&&(Oo(),Pt(17)),Pi(this),this.m=2,jo(this)):Ty(this,this.T-a)};function jo(a){a.j.I==0||a.K||Ky(a.j,a)}function Pi(a){Jh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,uy(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Xh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Zh(p.h,a))){if(!a.L&&Zh(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Bl(p),Fl(p);else break e;sd(p),Pt(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Lo(c(p.Va,p),6e3));Ay(p.h)<=1&&p.ta&&(p.ta=void 0)}else bi(p,11)}else if((a.L||p.g==a)&&Bl(p),!A(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let _e=N[h];const st=_e[0];if(!(st<=p.K))if(p.K=st,_e=_e[1],p.I==2)if(_e[0]=="c"){p.M=_e[1],p.ba=_e[2];const jn=_e[3];jn!=null&&(p.ka=jn,p.j.info("VER="+p.ka));const Ni=_e[4];Ni!=null&&(p.za=Ni,p.j.info("SVER="+p.za));const Or=_e[5];Or!=null&&typeof Or=="number"&&Or>0&&(y=1.5*Or,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Lr=a.g;if(Lr){const Hl=Lr.g?Lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hl){var L=y.h;L.g||Hl.indexOf("spdy")==-1&&Hl.indexOf("quic")==-1&&Hl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ed(L,L.h),L.h=null))}if(y.G){const ad=Lr.g?Lr.g.getResponseHeader("X-HTTP-Session-Id"):null;ad&&(y.wa=ad,Ie(y.J,y.G,ad))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var H=a;if(y.na=Yy(y,y.L?y.ba:null,y.W),H.L){ky(y.h,H);var oe=H,Xe=y.O;Xe&&(oe.H=Xe),oe.D&&(Jh(oe),Vl(oe)),y.g=H}else Wy(y);p.i.length>0&&$l(p)}else _e[0]!="stop"&&_e[0]!="close"||bi(p,7);else p.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?bi(p,7):id(p):_e[0]!="noop"&&p.l&&p.l.qa(_e),p.A=0)}}Oo(4)}catch{}}var _k=class{constructor(a,h){this.g=a,this.map=h}};function Iy(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sy(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ay(a){return a.h?1:a.g?a.g.size:0}function Zh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ed(a,h){a.g?a.g.add(h):a.h=h}function ky(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Iy.prototype.cancel=function(){if(this.i=Ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ry(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return w(a.i)}var xy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vk(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let N,L=null;y>=0?(N=a[p].substring(0,y),L=a[p].substring(y+1)):N=a[p],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function br(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof br?(this.l=a.l,Uo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.u),this.h=a.h,td(this,Oy(a.i)),this.m=a.m):a&&(h=String(a).match(xy))?(this.l=!1,Uo(this,h[1]||"",!0),this.o=$o(h[2]||""),this.g=$o(h[3]||"",!0),Fo(this,h[4]),this.h=$o(h[5]||"",!0),td(this,h[6]||"",!0),this.m=$o(h[7]||"")):(this.l=!1,this.i=new zo(null,this.l))}br.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Bo(h,Py,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Bo(h,Py,!0),"@"),a.push(Mo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Bo(p,p.charAt(0)=="/"?Tk:Ek,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Bo(p,Sk)),a.join("")},br.prototype.resolve=function(a){const h=Mn(this);let p=!!a.j;p?Uo(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)Fo(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let H=0;H<N.length;){const oe=N[H++];oe=="."?y&&H==N.length&&L.push(""):oe==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&H==N.length&&L.push("")):(L.push(oe),y=!0)}y=L.join("/")}else y=N}return p?h.h=y:p=a.i.toString()!=="",p?td(h,Oy(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Mn(a){return new br(a)}function Uo(a,h,p){a.j=p?$o(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function td(a,h,p){h instanceof zo?(a.i=h,Ak(a.i,a.l)):(p||(h=Bo(h,Ik)),a.i=new zo(h,a.l))}function Ie(a,h,p){a.i.set(h,p)}function Ml(a){return Ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function $o(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,wk),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wk(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Py=/[#\/\?@]/g,Ek=/[#\?:]/g,Tk=/[#\?]/g,Ik=/[#\?@]/g,Sk=/#/g;function zo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ci(a){a.g||(a.g=new Map,a.h=0,a.i&&vk(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=zo.prototype,t.add=function(a,h){Ci(this),this.i=null,a=ys(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Cy(a,h){Ci(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function by(a,h){return Ci(a),h=ys(a,h),a.g.has(h)}t.forEach=function(a,h){Ci(this),this.g.forEach(function(p,y){p.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Ny(a,h){Ci(a);let p=[];if(typeof h=="string")by(a,h)&&(p=p.concat(a.g.get(ys(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ci(this),this.i=null,a=ys(this,a),by(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Ny(this,a),a.length>0?String(a[0]):h):h};function Dy(a,h,p){Cy(a,h),p.length>0&&(a.i=null,a.g.set(ys(a,h),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const N=Mo(p);p=Ny(this,p);for(let L=0;L<p.length;L++){let H=N;p[L]!==""&&(H+="="+Mo(p[L])),a.push(H)}}return this.i=a.join("&")};function Oy(a){const h=new zo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ak(a,h){h&&!a.j&&(Ci(a),a.i=null,a.g.forEach(function(p,y){const N=y.toLowerCase();y!=N&&(Cy(this,y),Dy(this,N,p))},a)),a.j=h}function kk(a,h){const p=new Vo;if(o.Image){const y=new Image;y.onload=d(Nr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Nr,p,"TestLoadImage: error",!1,h,y),y.onabort=d(Nr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Nr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Rk(a,h){const p=new Vo,y=new AbortController,N=setTimeout(()=>{y.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Nr(p,"TestPingServer: error",!1,h)})}function Nr(a,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function xk(){this.g=new ck}function nd(a){this.i=a.Sb||null,this.h=a.ab||!1}f(nd,cy),nd.prototype.g=function(){return new jl(this.i,this.h)};function jl(a,h){Ve.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(jl,Ve),t=jl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ly(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ly(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ho(this):Wo(this),this.readyState==3&&Ly(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ho(this))},t.Na=function(a){this.g&&(this.response=a,Ho(this))},t.ga=function(){this.g&&Ho(this)};function Ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vy(a){let h="";return F(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function rd(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Vy(p),typeof a=="string"?p!=null&&Mo(p):Ie(a,h,p))}function Me(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Me,Ve);var Pk=/^https?$/i,Ck=["POST","PUT"];t=Me.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():yy.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){My(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Ck,h,void 0)>=0)||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,H]of p)this.g.setRequestHeader(L,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){My(this,L)}};function My(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,jy(a),Ul(a)}function jy(a){a.A||(a.A=!0,xt(a,"complete"),xt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,xt(this,"complete"),xt(this,"abort"),Ul(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ul(this,!0)),Me.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Uy(this):this.Xa())},t.Xa=function(){Uy(this)};function Uy(a){if(a.h&&typeof s<"u"){if(a.v&&Dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(xt(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=L===0){let H=String(a.D).match(xy)[1]||null;!H&&o.self&&o.self.location&&(H=o.self.location.protocol.slice(0,-1)),y=!Pk.test(H?H.toLowerCase():"")}p=y}if(p)xt(a,"complete"),xt(a,"success");else{a.o=6;try{var N=Dr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",jy(a)}}finally{Ul(a)}}}}function Ul(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||xt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),uk(h)}};function Fy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bk(a){const h={};a=(a.g&&Dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(A(a[y]))continue;var p=mk(a[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}z(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function $y(a){this.za=0,this.i=[],this.j=new Vo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qo("baseRetryDelayMs",5e3,a),this.Za=qo("retryDelaySeedMs",1e4,a),this.Ta=qo("forwardChannelMaxRetries",2,a),this.va=qo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Iy(a&&a.concurrentRequestLimit),this.Ba=new xk,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=$y.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,y){Pt(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Yy(this,null,this.W),$l(this)};function id(a){if(By(a),a.I==3){var h=a.V++,p=Mn(a.J);if(Ie(p,"SID",a.M),Ie(p,"RID",h),Ie(p,"TYPE","terminate"),Ko(a,p),h=new Cr(a,a.j,h),h.M=2,h.A=Ml(Mn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Jy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Vl(h)}Qy(a)}function Fl(a){a.g&&(od(a),a.g.cancel(),a.g=null)}function By(a){Fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),Bl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function $l(a){if(!Sy(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),$||(j(),$=!0),S.add(h,a),a.D=0}}function Nk(a,h){return Ay(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Lo(c(a.Ea,a,h),Gy(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Cr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=ee(L),we(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hy(this,N,h),p=Mn(this.J),Ie(p,"RID",a),Ie(p,"CVER",22),this.G&&Ie(p,"X-HTTP-Session-Id",this.G),Ko(this,p),L&&(this.R?h="headers="+Mo(Vy(L))+"&"+h:this.u&&rd(p,this.u,L)),ed(this.h,N),this.Ra&&Ie(p,"TYPE","init"),this.S?(Ie(p,"$req",h),Ie(p,"SID","null"),N.U=!0,Yh(N,p,null)):Yh(N,p,h),this.I=2}}else this.I==3&&(a?zy(this,a):this.i.length==0||Sy(this.h)||zy(this))};function zy(a,h){var p;h?p=h.l:p=a.V++;const y=Mn(a.J);Ie(y,"SID",a.M),Ie(y,"RID",p),Ie(y,"AID",a.K),Ko(a,y),a.u&&a.o&&rd(y,a.u,a.o),p=new Cr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Hy(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ed(a.h,p),Yh(p,y,h)}function Ko(a,h){a.H&&F(a.H,function(p,y){Ie(h,y,p)}),a.l&&F({},function(p,y){Ie(h,y,p)})}function Hy(a,h,p){p=Math.min(a.i.length,p);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var N=a.i;let oe=-1;for(;;){const Xe=["count="+p];oe==-1?p>0?(oe=N[0].g,Xe.push("ofs="+oe)):oe=0:Xe.push("ofs="+oe);let _e=!0;for(let st=0;st<p;st++){var L=N[st].g;const jn=N[st].map;if(L-=oe,L<0)oe=Math.max(0,N[st].g-100),_e=!1;else try{L="req"+L+"_"||"";try{var H=jn instanceof Map?jn:Object.entries(jn);for(const[Ni,Or]of H){let Lr=Or;l(Or)&&(Lr=Wh(Or)),Xe.push(L+Ni+"="+encodeURIComponent(Lr))}}catch(Ni){throw Xe.push(L+"type="+encodeURIComponent("_badmap")),Ni}}catch{y&&y(jn)}}if(_e){H=Xe.join("&");break e}}H=void 0}return a=a.i.splice(0,p),h.G=a,H}function Wy(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),$||(j(),$=!0),S.add(h,a),a.A=0}}function sd(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Lo(c(a.Da,a),Gy(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,qy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Lo(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pt(10),Fl(this),qy(this))};function od(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function qy(a){a.g=new Cr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Mn(a.na);Ie(h,"RID","rpc"),Ie(h,"SID",a.M),Ie(h,"AID",a.K),Ie(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ie(h,"TO",a.ia),Ie(h,"TYPE","xmlhttp"),Ko(a,h),a.u&&a.o&&rd(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ml(Mn(h)),p.u=null,p.R=!0,wy(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Fl(this),sd(this),Pt(19))};function Bl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ky(a,h){var p=null;if(a.g==h){Bl(a),od(a),a.g=null;var y=2}else if(Zh(a.h,h))p=h.G,ky(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=Ol(),xt(y,new my(y,p)),$l(a)}else Wy(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&Nk(a,h)||y==2&&sd(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:bi(a,5);break;case 4:bi(a,10);break;case 3:bi(a,6);break;default:bi(a,2)}}}function Gy(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function bi(a,h){if(a.j.info("Error code "+h),h==2){var p=c(a.bb,a),y=a.Ua;const N=!y;y=new br(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Uo(y,"https"),Ml(y),N?kk(y.toString(),p):Rk(y.toString(),p)}else Pt(2);a.I=0,a.l&&a.l.pa(h),Qy(a),By(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Qy(a){if(a.I=0,a.ja=[],a.l){const h=Ry(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Yy(a,h,p){var y=p instanceof br?Mn(p):new br(p);if(y.g!="")h&&(y.g=h+"."+y.g),Fo(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new br(null);y&&Uo(L,y),h&&(L.g=h),N&&Fo(L,N),p&&(L.h=p),y=L}return p=a.G,h=a.wa,p&&h&&Ie(y,p,h),Ie(y,"VER",a.ka),Ko(a,y),y}function Jy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Me(new nd({ab:p})):new Me(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xy(){}t=Xy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function zl(){}zl.prototype.g=function(a,h){return new Qt(a,h)};function Qt(a,h){Ve.call(this),this.g=new $y(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}f(Qt,Ve),Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){id(this.g)},Qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Wh(a),a=p);h.i.push(new _k(h.Ya++,a)),h.I==3&&$l(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,id(this.g),delete this.g,Qt.Z.N.call(this)};function Zy(a){qh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Zy,qh);function e_(){Kh.call(this),this.status=1}f(e_,Kh);function _s(a){this.g=a}f(_s,Xy),_s.prototype.ra=function(){xt(this.g,"a")},_s.prototype.qa=function(a){xt(this.g,new Zy(a))},_s.prototype.pa=function(a){xt(this.g,new e_)},_s.prototype.oa=function(){xt(this.g,"b")},zl.prototype.createWebChannel=zl.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,O1=function(){return new zl},D1=function(){return Ol()},N1=xi,Ep={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ll.NO_ERROR=0,Ll.TIMEOUT=8,Ll.HTTP_ERROR=6,ju=Ll,gy.COMPLETE="complete",b1=gy,hy.EventType=Do,Do.OPEN="a",Do.CLOSE="b",Do.ERROR="c",Do.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,ga=hy,Me.prototype.listenOnce=Me.prototype.K,Me.prototype.getLastError=Me.prototype.Ha,Me.prototype.getLastErrorCode=Me.prototype.ya,Me.prototype.getStatus=Me.prototype.ca,Me.prototype.getResponseJson=Me.prototype.La,Me.prototype.getResponseText=Me.prototype.la,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Fa,C1=Me}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Io="12.11.0";function MO(t){Io=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zi=new Ym("@firebase/firestore");function Es(){return Zi.logLevel}function K(t,...e){if(Zi.logLevel<=ue.DEBUG){const n=e.map(ag);Zi.debug(`Firestore (${Io}): ${t}`,...n)}}function Ir(t,...e){if(Zi.logLevel<=ue.ERROR){const n=e.map(ag);Zi.error(`Firestore (${Io}): ${t}`,...n)}}function es(t,...e){if(Zi.logLevel<=ue.WARN){const n=e.map(ag);Zi.warn(`Firestore (${Io}): ${t}`,...n)}}function ag(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,L1(t,r,n)}function L1(t,e,n){let r=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ir(r),new Error(r)}function me(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||L1(e,i,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class UO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class FO{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new V1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class $O{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class BO{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $O(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zO{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new d0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new d0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=HO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Tp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Gd(i)===Gd(s)?ce(i,s):Gd(i)?1:-1}return ce(t.length,e.length)}const WO=55296,qO=57343;function Gd(t){const e=t.charCodeAt(0);return e>=WO&&e<=qO}function ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="__name__";class Bn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Bn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ce(e.length,n.length)}static compareSegments(e,n){const r=Bn.isNumericId(e),i=Bn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Bn.extractNumericId(e).compare(Bn.extractNumericId(n)):Tp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Ee extends Bn{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const KO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Bn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return KO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===f0}static keyField(){return new ft([f0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ee.fromString(e))}static fromName(e){return new X(Ee.fromString(e).popFirst(5))}static empty(){return new X(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p0(t){if(!X.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m0(t){if(X.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function j1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wh(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function QO(t,e){if(e<=0)throw new q(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function xl(t,e){if(!j1(t))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=-62135596800,y0=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*y0);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<g0)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/y0}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xl(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-g0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Ye("string",Ae._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Ae(0,0))}static max(){return new te(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ll=-1;function YO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new mi(i,X.empty(),e)}function JO(t){return new mi(t.readTime,t.key,ll)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(te.min(),X.empty(),ll)}static max(){return new mi(te.max(),X.empty(),ll)}}function XO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ZO)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Eh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Eh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=-1;function Th(t){return t==null}function xc(t){return t===0&&1/t==-1/0}function nL(t){return typeof t=="number"&&Number.isInteger(t)&&!xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="";function rL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_0(e)),e=iL(t.get(n),e);return _0(e)}function iL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case U1:n+="";break;default:n+=s}}return n}function _0(t){return t+U1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function F1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}}class du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=s??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new w0(this.data.getIterator())}getIteratorFrom(e){return new w0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class w0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new tt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $1("Invalid base64 string: "+s):s}}(e);return new gt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const sL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=sL.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="server_timestamp",z1="__type__",H1="__previous_value__",W1="__local_write_time__";function cg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[z1])==null?void 0:r.stringValue)===B1}function Ih(t){const e=t.mapValue.fields[H1];return cg(e)?Ih(e):e}function ul(t){const e=gi(t.mapValue.fields[W1].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n,r,i,s,o,l,u,c,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=f}}const Pc="(default)";class cl{constructor(e,n){this.projectId=e,this.database=n||Pc}static empty(){return new cl("","")}get isDefaultDatabase(){return this.database===Pc}isEqual(e){return e instanceof cl&&e.projectId===this.projectId&&e.database===this.database}}function aL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="__type__",K1="__max__",fu={mapValue:{fields:{__type__:{stringValue:K1}}}},G1="__vector__",Cc="value";function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cg(t)?4:uL(t)?9007199254740991:lL(t)?10:11:Z(28295,{value:t})}function Zn(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ul(t).isEqual(ul(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),l=gi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yi(i.bytesValue).isEqual(yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),l=Be(s.doubleValue);return o===l?xc(o)===xc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(v0(o)!==v0(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Zn(o[u],l[u])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function hl(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Be(s.integerValue||s.doubleValue),u=Be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return E0(t.timestampValue,e.timestampValue);case 4:return E0(ul(t),ul(e));case 5:return Tp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=yi(s),u=yi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ce(l[c],u[c]);if(d!==0)return d}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(Be(s.latitude),Be(o.latitude));return l!==0?l:ce(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return T0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,w,P,R;const l=s.fields||{},u=o.fields||{},c=(m=l[Cc])==null?void 0:m.arrayValue,d=(w=u[Cc])==null?void 0:w.arrayValue,f=ce(((P=c==null?void 0:c.values)==null?void 0:P.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return f!==0?f:T0(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fu.mapValue&&o===fu.mapValue)return 0;if(s===fu.mapValue)return 1;if(o===fu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Tp(u[f],d[f]);if(m!==0)return m;const w=lo(l[u[f]],c[d[f]]);if(w!==0)return w}return ce(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function E0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=gi(t),r=gi(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function T0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=lo(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function uo(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ip(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ip(n.fields[o])}`;return i+"}"}(t.mapValue):Z(61005,{value:t})}function Uu(t){switch(_i(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ih(t);return e?16+Uu(e):16;case 5:return 2*t.stringValue.length;case 6:return yi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Uu(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+Uu(o)}),i}(t.mapValue);default:throw Z(13486,{value:t})}}function I0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sp(t){return!!t&&"integerValue"in t}function hg(t){return!!t&&"arrayValue"in t}function S0(t){return!!t&&"nullValue"in t}function A0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fu(t){return!!t&&"mapValue"in t}function lL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[q1])==null?void 0:r.stringValue)===G1}function Oa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oa(t.arrayValue.values[n]);return e}return{...t}}function uL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===K1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oa(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Oa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Oa(this.value))}}function Q1(t){const e=[];return ki(t.fields,(n,r)=>{const i=new ft([n]);if(Fu(r)){const s=Q1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,te.min(),te.min(),te.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new St(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new St(e,2,n,te.min(),te.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,te.min(),te.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bc{constructor(e,n){this.position=e,this.inclusive=n}}function k0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function R0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function cL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Y1{}class Qe extends Y1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dL(e,n,r):n==="array-contains"?new mL(e,r):n==="in"?new gL(e,r):n==="not-in"?new yL(e,r):n==="array-contains-any"?new _L(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fL(e,r):new pL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(lo(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends Y1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new On(e,n)}matches(e){return J1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function J1(t){return t.op==="and"}function X1(t){return hL(t)&&J1(t)}function hL(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Ap(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+uo(t.value);if(X1(t))return t.filters.map(e=>Ap(e)).join(",");{const e=t.filters.map(n=>Ap(n)).join(",");return`${t.op}(${e})`}}function Z1(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Z1(o,i.filters[l]),!0):!1}(t,e):void Z(19439)}function eS(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${uo(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(eS).join(" ,")+"}"}(t):"Filter"}class dL extends Qe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class fL extends Qe{constructor(e,n){super(e,"in",n),this.keys=tS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pL extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=tS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tS(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class mL extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hg(n)&&hl(n.arrayValue,this.value)}}class gL extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class yL extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hl(this.value.arrayValue,n)}}class _L extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
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
 */class vL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function x0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new vL(t,e,n,r,i,s,o)}function dg(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ap(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>uo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>uo(r)).join(",")),e.Te=n}return e.Te}function fg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R0(t.startAt,e.startAt)&&R0(t.endAt,e.endAt)}function kp(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function wL(t,e,n,r,i,s,o,l){return new ko(t,e,n,r,i,s,o,l)}function Sh(t){return new ko(t)}function P0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function EL(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function nS(t){return t.collectionGroup!==null}function La(t){const e=ne(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(ft.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new dl(s,r))}),n.has(ft.keyField().canonicalString())||e.Ee.push(new dl(ft.keyField(),r))}return e.Ee}function Qn(t){const e=ne(t);return e.Ie||(e.Ie=TL(e,La(t))),e.Ie}function TL(t,e){if(t.limitType==="F")return x0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dl(i.field,s)});const n=t.endAt?new bc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bc(t.startAt.position,t.startAt.inclusive):null;return x0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rp(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function IL(t,e){const n=t.explicitOrderBy.concat([e]);return new ko(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Nc(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ah(t,e){return fg(Qn(t),Qn(e))&&t.limitType===e.limitType}function rS(t){return`${dg(Qn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>eS(i)).join(", ")}]`),Th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>uo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>uo(i)).join(",")),`Target(${r})`}(Qn(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of La(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=k0(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,La(r),i)||r.endAt&&!function(o,l,u){const c=k0(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,La(r),i))}(t,e)}function SL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iS(t){return(e,n)=>{let r=!1;for(const i of La(t)){const s=AL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AL(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?lo(u,c):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return F1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=new Le(X.comparator);function Sr(){return kL}const sS=new Le(X.comparator);function ya(...t){let e=sS;for(const n of t)e=e.insert(n.key,n);return e}function oS(t){let e=sS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fi(){return Va()}function aS(){return Va()}function Va(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const RL=new Le(X.comparator),xL=new tt(X.comparator);function he(...t){let e=xL;for(const n of t)e=e.add(n);return e}const PL=new tt(ce);function CL(){return PL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xc(e)?"-0":e}}function lS(t){return{integerValue:""+t}}function uS(t,e){return nL(e)?lS(e):pg(t,e)}/**
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
 */class Rh{constructor(){this._=void 0}}function bL(t,e,n){return t instanceof fl?function(i,s){const o={fields:{[z1]:{stringValue:B1},[W1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cg(s)&&(s=Ih(s)),s&&(o.fields[H1]=s),{mapValue:o}}(n,e):t instanceof co?hS(t,e):t instanceof pl?dS(t,e):function(i,s){const o=cS(i,s),l=C0(o)+C0(i.Ae);return Sp(o)&&Sp(i.Ae)?lS(l):pg(i.serializer,l)}(t,e)}function NL(t,e,n){return t instanceof co?hS(t,e):t instanceof pl?dS(t,e):n}function cS(t,e){return t instanceof ml?function(r){return Sp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fl extends Rh{}class co extends Rh{constructor(e){super(),this.elements=e}}function hS(t,e){const n=fS(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class pl extends Rh{constructor(e){super(),this.elements=e}}function dS(t,e){let n=fS(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class ml extends Rh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function C0(t){return Be(t.integerValue||t.doubleValue)}function fS(t){return hg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.field=e,this.transform=n}}function DL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof co&&i instanceof co||r instanceof pl&&i instanceof pl?ao(r.elements,i.elements,Zn):r instanceof ml&&i instanceof ml?Zn(r.Ae,i.Ae):r instanceof fl&&i instanceof fl}(t.transform,e.transform)}class OL{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $u(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xh{}function pS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gg(t.key,mn.none()):new Pl(t.key,t.data,mn.none());{const n=t.data,r=Ft.empty();let i=new tt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ri(t.key,r,new Zt(i.toArray()),mn.none())}}function LL(t,e,n){t instanceof Pl?function(i,s,o){const l=i.value.clone(),u=N0(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,s,o){if(!$u(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=N0(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mS(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n,r){return t instanceof Pl?function(s,o,l,u){if(!$u(s.precondition,o))return l;const c=s.value.clone(),d=D0(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(s,o,l,u){if(!$u(s.precondition,o))return l;const c=D0(s.fieldTransforms,u,o),d=o.data;return d.setAll(mS(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return $u(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function b0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ao(r,i,(s,o)=>DL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pl extends xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function N0(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,NL(o,l,n[i]))}return r}function D0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bL(s,o,e))}return r}class gg extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ML extends xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&LL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=pS(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>b0(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>b0(n,r))}}class yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return RL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yg(e,n,r,i)}}/**
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
 */class UL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,de;function $L(t){switch(t){case V.OK:return Z(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function gS(t){if(t===void 0)return Ir("GRPC error has no .code"),V.UNKNOWN;switch(t){case We.OK:return V.OK;case We.CANCELLED:return V.CANCELLED;case We.UNKNOWN:return V.UNKNOWN;case We.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case We.INTERNAL:return V.INTERNAL;case We.UNAVAILABLE:return V.UNAVAILABLE;case We.UNAUTHENTICATED:return V.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case We.NOT_FOUND:return V.NOT_FOUND;case We.ALREADY_EXISTS:return V.ALREADY_EXISTS;case We.PERMISSION_DENIED:return V.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case We.ABORTED:return V.ABORTED;case We.OUT_OF_RANGE:return V.OUT_OF_RANGE;case We.UNIMPLEMENTED:return V.UNIMPLEMENTED;case We.DATA_LOSS:return V.DATA_LOSS;default:return Z(39323,{code:t})}}(de=We||(We={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BL(){return new TextEncoder}/**
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
 */const zL=new ui([4294967295,4294967295],0);function O0(t){const e=BL().encode(t),n=new P1;return n.update(e),new Uint8Array(n.digest())}function L0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ui([n,r],0),new ui([i,s],0)]}class _g{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ui.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ui.fromNumber(r)));return i.compare(zL)===1&&(i=new ui([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=O0(e),[r,i]=L0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _g(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=O0(e),[r,i]=L0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ph(te.min(),i,new Le(ce),Sr(),he())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class yS{constructor(e,n){this.targetId=e,this.Ce=n}}class _S{constructor(e,n,r=gt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class V0{constructor(){this.ve=0,this.Fe=M0(),this.Me=gt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z(38017,{changeType:s})}}),new Cl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=M0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class HL{constructor(e){this.Ge=e,this.ze=new Map,this.je=Sr(),this.Je=pu(),this.He=pu(),this.Ze=new Le(ce)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(kp(s))if(r===0){const o=new X(s.path);this.et(n,o,St.newNoDocument(o,te.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=yi(r).toUint8Array()}catch(u){if(u instanceof $1)return es("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new _g(o,i,s)}catch(u){return es(u instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&kp(l.target)){const u=new X(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,St.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=he();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ph(e,n,this.Ze,this.je,r);return this.je=Sr(),this.Je=pu(),this.He=pu(),this.Ze=new Le(ce),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new V0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new tt(ce),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new tt(ce),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new V0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function pu(){return new Le(X.comparator)}function M0(){return new Le(X.comparator)}const WL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),KL=(()=>({and:"AND",or:"OR"}))();class GL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xp(t,e){return t.useProto3Json||Th(e)?e:{value:e}}function Dc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QL(t,e){return Dc(t,e.toTimestamp())}function Yn(t){return me(!!t,49232),te.fromTimestamp(function(n){const r=gi(n);return new Ae(r.seconds,r.nanos)}(t))}function vg(t,e){return Pp(t,e).canonicalString()}function Pp(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function wS(t){const e=Ee.fromString(t);return me(AS(e),10190,{key:e.toString()}),e}function Cp(t,e){return vg(t.databaseId,e.path)}function Qd(t,e){const n=wS(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(TS(n))}function ES(t,e){return vg(t.databaseId,e)}function YL(t){const e=wS(t);return e.length===4?Ee.emptyPath():TS(e)}function bp(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function TS(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function j0(t,e,n){return{name:Cp(t,e),fields:n.value.mapValue.fields}}function JL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(me(d===void 0||typeof d=="string",58123),gt.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:gS(c.code);return new q(d,c.message||"")}(o);n=new _S(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qd(t,r.document.name),s=Yn(r.document.updateTime),o=r.document.createTime?Yn(r.document.createTime):te.min(),l=new Ft({mapValue:{fields:r.document.fields}}),u=St.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Bu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qd(t,r.document),s=r.readTime?Yn(r.readTime):te.min(),o=St.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Bu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qd(t,r.document),s=r.removedTargetIds||[];n=new Bu([],s,i,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FL(i,s),l=r.targetId;n=new yS(l,o)}}return n}function XL(t,e){let n;if(e instanceof Pl)n={update:j0(t,e.key,e.value)};else if(e instanceof gg)n={delete:Cp(t,e.key)};else if(e instanceof Ri)n={update:j0(t,e.key,e.data),updateMask:aV(e.fieldMask)};else{if(!(e instanceof ML))return Z(16599,{dt:e.type});n={verify:Cp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof co)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:QL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z(27497)}(t,e.precondition)),n}function ZL(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Yn(i.updateTime):Yn(s);return o.isEqual(te.min())&&(o=Yn(s)),new OL(o,i.transformResults||[])}(n,e))):[]}function eV(t,e){return{documents:[ES(t,e.path)]}}function tV(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ES(t,i);const s=function(c){if(c.length!==0)return SS(On.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Is(m.field),direction:iV(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function nV(t){let e=YL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=IS(f);return m instanceof On&&X1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(P){return new dl(Ss(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Th(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new bc(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,w=f.values||[];return new bc(w,m)}(n.endAt)),wL(e,i,o,s,l,"F",u,c)}function rV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function IS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ss(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(n.unaryFilter.field);return Qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>IS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function iV(t){return WL[t]}function sV(t){return qL[t]}function oV(t){return KL[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ss(t){return ft.fromServerFormat(t.fieldPath)}function SS(t){return t instanceof Qe?function(n){if(n.op==="=="){if(A0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(S0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(A0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(S0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:sV(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>SS(i));return r.length===1?r[0]:{compositeFilter:{op:oV(n.op),filters:r}}}(t):Z(54877,{filter:t})}function aV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function AS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function kS(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=gt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.yt=e}}function uV(t){const e=nV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nc(e,e.limit,"L"):e}/**
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
 */class cV{constructor(){this.bn=new hV}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(mi.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class hV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(Ee.comparator)).toArray()}}/**
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
 */const U0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},RS=41943040;class jt{static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(RS,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ho(0)}static ar(){return new ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="LruGarbageCollector",dV=1048576;function $0([t,e],[n,r]){const i=ce(t,n);return i===0?ce(e,r):i}class fV{constructor(e){this.Pr=e,this.buffer=new tt($0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class pV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(F0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?K(F0,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)})}}class mV{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Eh.ce);const r=new fV(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(U0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),U0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Es()<=ue.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function gV(t,e){return new mV(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _V{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ma(r.mutation,i,Zt.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Sr();const o=Va(),l=function(){return Va()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ri)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Ma(d.mutation,c,d.mutation.getFieldMask(),Ae.now())):o.set(c.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new _V(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Va();let i=new Le((o,l)=>o-l),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Zt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||he()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=aS();d.forEach(m=>{if(!s.has(m)){const w=pS(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return EL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Fi());let l=ll,u=s;return o.next(c=>M.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,he())).next(d=>({batchId:l,changes:oS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(f,m){return new ko(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=ya();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ma(d.mutation,c,Zt.empty(),Ae.now()),kh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:uV(i.bundledQuery),readTime:Yn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class EV{constructor(){this.overlays=new Le(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Fi(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Le((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Fi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Fi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UL(n,r));let s=this.Lr.get(n);s===void 0&&(s=he(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class TV{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.kr=new tt(ot.qr),this.Kr=new tt(ot.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ot(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new Ee([])),r=new ot(n,e),i=new ot(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new Ee([])),r=new ot(n,e),i=new ot(n,e+1);let s=he();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ot(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||ce(e.Jr,n.Jr)}static Ur(e,n){return ce(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new tt(ot.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jL(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new ot(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ug:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ce);return n.forEach(i=>{const s=new ot(i,0),o=new ot(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new ot(new X(s),0);let l=new tt(ce);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ot(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e){this.ti=e,this.docs=function(){return new Le(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sr();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||XO(JO(d),r)<=0||(i.has(d.key)||kh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AV(this)}getSize(e){return M.resolve(this.size)}}class AV extends yV{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.persistence=e,this.ri=new ps(n=>dg(n),fg),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new wg,this.targetCount=0,this.oi=ho._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ho(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n){this._i={},this.overlays={},this.ai=new Eh(0),this.ui=!1,this.ui=!0,this.ci=new TV,this.referenceDelegate=e(this),this.li=new kV(this),this.indexManager=new cV,this.remoteDocumentCache=function(i){return new SV(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new lV(n),this.Pi=new wV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new IV(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new RV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class RV extends eL{constructor(e){super(),this.currentSequenceNumber=e}}class Eg{constructor(e){this.persistence=e,this.Ri=new wg,this.Ai=null}static Vi(e){return new Eg(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=X.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Oc{constructor(e,n){this.persistence=e,this.fi=new ps(r=>rL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=gV(this,n)}static Vi(e,n){return new Oc(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uu(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=he(),i=he();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tg(e,n.fromCache,r,i)}}/**
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
 */class xV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return xb()?8:tL(kt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new xV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Es()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Es()<=ue.DEBUG&&K("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Es()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):M.resolve())}gs(e,n){if(P0(n))return M.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nc(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,Nc(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return P0(n)||i.isEqual(te.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Es()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.Ds(e,o,n,YO(i,ll)).next(l=>l))})}Ss(e,n){let r=new tt(iS(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Es()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.fs.getDocumentsMatchingQuery(e,n,mi.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="LocalStore",CV=3e8;class bV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Le(ce),this.Fs=new ps(s=>dg(s),fg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vV(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function NV(t,e,n,r){return new bV(t,e,n,r)}async function PS(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=he();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function DV(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let w=M.resolve();return m.forEach(P=>{w=w.next(()=>d.getEntry(u,P)).next(R=>{const C=c.docVersions.get(P);me(C!==null,48541),R.version.compareTo(C)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=he();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function CS(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function OV(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(gt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(R,C,E){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=CV?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,w,d)&&l.push(n.li.updateTargetData(s,w))});let u=Sr(),c=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(LV(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(te.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function LV(t,e,n){let r=he(),i=he();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(Ig,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function VV(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ug),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function MV(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Np(t,e,n){const r=ne(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;K(Ig,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function B0(t,e,n){const r=ne(t);let i=te.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ne(u),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(c,d)}(r,o,Qn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:he())).next(l=>(jV(r,SL(e),l),{documents:l,ks:s})))}function jV(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class z0{constructor(){this.activeTargetIds=CL()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UV{constructor(){this.vo=new z0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new z0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FV{Mo(e){}shutdown(){}}/**
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
 */const H0="ConnectivityMonitor";class W0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(H0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(H0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mu=null;function Dp(){return mu===null?mu=function(){return 268435456+Math.round(2147483648*Math.random())}():mu++,"0x"+mu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="RestConnection",$V={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class BV{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Pc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Dp(),l=this.Qo(e,n.toUriEncodedString());K(Yd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=cs(c);return this.zo(e,l,u,r,d).then(f=>(K(Yd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw es(Yd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=$V[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection",ra=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Gs extends BV{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gs.c_){const e=D1();ra(e,N1.STAT_EVENT,n=>{n.stat===Ep.PROXY?K(Et,"STAT_EVENT: detected buffering proxy"):n.stat===Ep.NOPROXY&&K(Et,"STAT_EVENT: detected no buffering proxy")}),Gs.c_=!0}}zo(e,n,r,i,s){const o=Dp();return new Promise((l,u)=>{const c=new C1;c.setWithCredentials(!0),c.listenOnce(b1.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ju.NO_ERROR:const f=c.getResponseJson();K(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case ju.TIMEOUT:K(Et,`RPC '${e}' ${o} timed out`),u(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case ju.HTTP_ERROR:const m=c.getStatus();if(K(Et,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const R=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(P.status);u(new q(R,P.message))}else u(new q(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(V.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{K(Et,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);K(Et,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Dp(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");K(Et,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let f=!1,m=!1;const w=new zV({Jo:P=>{m?K(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(f||(K(Et,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),K(Et,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},Ho:()=>d.close()});return ra(d,ga.EventType.OPEN,()=>{m||(K(Et,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),ra(d,ga.EventType.CLOSE,()=>{m||(m=!0,K(Et,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(d))}),ra(d,ga.EventType.ERROR,P=>{m||(m=!0,es(Et,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),w.o_(new q(V.UNAVAILABLE,"The operation could not be completed")))}),ra(d,ga.EventType.MESSAGE,P=>{var R;if(!m){const C=P.data[0];me(!!C,16349);const E=C,v=(E==null?void 0:E.error)||((R=E[0])==null?void 0:R.error);if(v){K(Et,`RPC '${e}' stream ${i} received error:`,v);const I=v.status;let O=function(S){const _=We[S];if(_!==void 0)return gS(_)}(I),j=v.message;I==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,j="Unknown error status: "+I+" with message "+v.message),m=!0,w.o_(new q(O,j)),d.close()}else K(Et,`RPC '${e}' stream ${i} received:`,C),w.__(C)}}),Gs.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return O1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t){return new Gs(t)}function Jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){return new GL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.c_=!1;class bS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="PersistentStream";class NS{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(q0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(q0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WV extends NS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=JL(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Yn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=bp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=kp(u)?{documents:eV(s,u)}:{query:tV(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vS(s,o.resumeToken);const c=xp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Dc(s,o.snapshotVersion.toTimestamp());const c=xp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=rV(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=bp(this.serializer),n.removeTarget=e,this.q_(n)}}class qV extends NS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=ZL(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XL(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KV{}class GV extends KV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Pp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Pp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function QV(t,e,n,r){return new GV(t,e,n,r)}class YV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ir(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class JV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ms(this)&&(K(ts,"Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.Ia.add(4),await bl(c),c.Va.set("Unknown"),c.Ia.delete(4),await bh(c)}(this))})}),this.Va=new YV(r,i)}}async function bh(t){if(ms(t))for(const e of t.Ra)await e(!0)}async function bl(t){for(const e of t.Ra)await e(!1)}function DS(t,e){const n=ne(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Rg(n)?kg(n):Ro(n).O_()&&Ag(n,e))}function Sg(t,e){const n=ne(t),r=Ro(n);n.Ea.delete(e),r.O_()&&OS(n,e),n.Ea.size===0&&(r.O_()?r.L_():ms(n)&&n.Va.set("Unknown"))}function Ag(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).Z_(e)}function OS(t,e){t.da.$e(e),Ro(t).X_(e)}function kg(t){t.da=new HL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.Va.ua()}function Rg(t){return ms(t)&&!Ro(t).x_()&&t.Ea.size>0}function ms(t){return ne(t).Ia.size===0}function LS(t){t.da=void 0}async function XV(t){t.Va.set("Online")}async function ZV(t){t.Ea.forEach((e,n)=>{Ag(t,e)})}async function eM(t,e){LS(t),Rg(t)?(t.Va.ha(e),kg(t)):t.Va.set("Unknown")}async function tM(t,e,n){if(t.Va.set("Online"),e instanceof _S&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){K(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lc(t,r)}else if(e instanceof Bu?t.da.Xe(e):e instanceof yS?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await CS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),OS(s,u);const f=new Jr(d.target,u,c,d.sequenceNumber);Ag(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K(ts,"Failed to raise snapshot:",r),await Lc(t,r)}}async function Lc(t,e,n){if(!Ao(e))throw e;t.Ia.add(1),await bl(t),t.Va.set("Offline"),n||(n=()=>CS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(ts,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await bh(t)})}function VS(t,e){return e().catch(n=>Lc(t,n,e))}async function Nh(t){const e=ne(t),n=vi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ug;for(;nM(e);)try{const i=await VV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,rM(e,i)}catch(i){await Lc(e,i)}MS(e)&&jS(e)}function nM(t){return ms(t)&&t.Ta.length<10}function rM(t,e){t.Ta.push(e);const n=vi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function MS(t){return ms(t)&&!vi(t).x_()&&t.Ta.length>0}function jS(t){vi(t).start()}async function iM(t){vi(t).ra()}async function sM(t){const e=vi(t);for(const n of t.Ta)e.ea(n.mutations)}async function oM(t,e,n){const r=t.Ta.shift(),i=yg.from(r,e,n);await VS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nh(t)}async function aM(t,e){e&&vi(t).Y_&&await async function(r,i){if(function(o){return $L(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();vi(r).B_(),await VS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nh(r)}}(t,e),MS(t)&&jS(t)}async function K0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K(ts,"RemoteStore received new credentials");const r=ms(n);n.Ia.add(3),await bl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await bh(n)}async function lM(t,e){const n=ne(t);e?(n.Ia.delete(2),await bh(n)):e||(n.Ia.add(2),await bl(n),n.Va.set("Unknown"))}function Ro(t){return t.ma||(t.ma=function(n,r,i){const s=ne(n);return s.sa(),new WV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:XV.bind(null,t),Yo:ZV.bind(null,t),t_:eM.bind(null,t),H_:tM.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Rg(t)?kg(t):t.Va.set("Unknown")):(await t.ma.stop(),LS(t))})),t.ma}function vi(t){return t.fa||(t.fa=function(n,r,i){const s=ne(n);return s.sa(),new qV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:iM.bind(null,t),t_:aM.bind(null,t),ta:sM.bind(null,t),na:oM.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Nh(t)):(await t.fa.stop(),t.Ta.length>0&&(K(ts,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new xg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pg(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),Ao(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{static emptySet(e){return new Qs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new Le(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.ga=new Le(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fo(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class cM{constructor(){this.queries=Q0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=Q0(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function Q0(){return new ps(t=>rS(t),Ah)}async function Cg(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new uM,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Pg(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Ng(n)}async function bg(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hM(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Ng(n)}function dM(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Ng(t){t.Ca.forEach(e=>{e.next()})}var Op,Y0;(Y0=Op||(Op={})).Ma="default",Y0.Cache="cache";class Dg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.key=e}}class FS{constructor(e){this.key=e}}class fM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=iS(e),this.tu=new Qs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new G0,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),w=kh(this.query,f)?f:null,P=!!m&&this.mutatedKeys.has(m.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;m&&w?m.data.isEqual(w.data)?P!==R&&(r.track({type:3,doc:w}),C=!0):this.su(m,w)||(r.track({type:2,doc:w}),C=!0,(u&&this.eu(w,u)>0||c&&this.eu(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),C=!0):m&&!w&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(w?(o=o.add(w),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(w,P){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:C})}};return R(w)-R(P)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new fo(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new G0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new FS(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new US(r))}),n}cu(e){this.Za=e.ks,this.Ya=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Og="SyncEngine";class pM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mM{constructor(e){this.key=e,this.hu=!1}}class gM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ps(l=>rS(l),Ah),this.Eu=new Map,this.Iu=new Set,this.Ru=new Le(X.comparator),this.Au=new Map,this.Vu=new wg,this.du={},this.mu=new Map,this.fu=ho.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yM(t,e,n=!0){const r=qS(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await $S(r,e,n,!0),i}async function _M(t,e){const n=qS(t);await $S(n,e,!0,!1)}async function $S(t,e,n,r){const i=await MV(t.localStore,Qn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await vM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&DS(t.remoteStore,i),l}async function vM(t,e,n,r,i){t.pu=(f,m,w)=>async function(R,C,E,v){let I=C.view.ru(E);I.bs&&(I=await B0(R.localStore,C.query,!1).then(({documents:S})=>C.view.ru(S,I)));const O=v&&v.targetChanges.get(C.targetId),j=v&&v.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(I,R.isPrimaryClient,O,j);return X0(R,C.targetId,$.au),$.snapshot}(t,f,m,w);const s=await B0(t.localStore,e,!0),o=new fM(e,s.ks),l=o.ru(s.documents),u=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);X0(t,n,c.au);const d=new pM(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function wM(t,e,n){const r=ne(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Ah(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Np(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sg(r.remoteStore,i.targetId),Lp(r,i.targetId)}).catch(So)):(Lp(r,i.targetId),await Np(r.localStore,i.targetId,!0))}async function EM(t,e){const n=ne(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sg(n.remoteStore,r.targetId))}async function TM(t,e,n){const r=PM(t);try{const i=await function(o,l){const u=ne(o),c=Ae.now(),d=l.reduce((w,P)=>w.add(P.key),he());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Sr(),R=he();return u.xs.getEntries(w,d).next(C=>{P=C,P.forEach((E,v)=>{v.isValidDocument()||(R=R.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,P)).next(C=>{f=C;const E=[];for(const v of l){const I=VL(v,f.get(v.key).overlayedDocument);I!=null&&E.push(new Ri(v.key,I,Q1(I.value.mapValue),mn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,E,l)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(f,R);return u.documentOverlayCache.saveOverlays(w,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:oS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Le(ce)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await Nl(r,i.changes),await Nh(r.remoteStore)}catch(i){const s=Pg(i,"Failed to persist write");n.reject(s)}}async function BS(t,e){const n=ne(t);try{const r=await OV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?me(o.hu,14607):i.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await Nl(n,r,e)}catch(r){await So(r)}}function J0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&Ng(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IM(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Le(X.comparator);o=o.insert(s,St.newNoDocument(s,te.min()));const l=he().add(s),u=new Ph(te.min(),new Map,new Le(ce),o,l);await BS(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),Lg(r)}else await Np(r.localStore,e,!1).then(()=>Lp(r,e,n)).catch(So)}async function SM(t,e){const n=ne(t),r=e.batch.batchId;try{const i=await DV(n.localStore,e);HS(n,r,null),zS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await So(i)}}async function AM(t,e,n){const r=ne(t);try{const i=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(me(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);HS(r,e,n),zS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await So(i)}}function zS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function HS(t,e,n){const r=ne(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Lp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||WS(t,r)})}function WS(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Sg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Lg(t))}function X0(t,e,n){for(const r of n)r instanceof US?(t.Vu.addReference(r.key,e),kM(t,r)):r instanceof FS?(K(Og,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||WS(t,r.key)):Z(19791,{wu:r})}function kM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(Og,"New document in limbo: "+n),t.Iu.add(r),Lg(t))}function Lg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Ee.fromString(e)),r=t.fu.next();t.Au.set(r,new mM(n)),t.Ru=t.Ru.insert(n,r),DS(t.remoteStore,new Jr(Qn(Sh(n.path)),r,"TargetPurposeLimboResolution",Eh.ce))}}async function Nl(t,e,n){const r=ne(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Tg.Is(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ne(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(c,m=>M.forEach(m.Ts,w=>d.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>M.forEach(m.Es,w=>d.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!Ao(f))throw f;K(Ig,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const w=d.vs.get(m),P=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(P);d.vs=d.vs.insert(m,R)}}}(r.localStore,s))}async function RM(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K(Og,"User change. New user:",e.toKey());const r=await PS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.Ns)}}function xM(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let i=he();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function qS(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IM.bind(null,e),e.Pu.H_=hM.bind(null,e.eventManager),e.Pu.yu=dM.bind(null,e.eventManager),e}function PM(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AM.bind(null,e),e}class Vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ch(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return NV(this.persistence,new PV,e.initialUser,this.serializer)}Cu(e){return new xS(Eg.Vi,this.serializer)}Du(e){return new UV}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vc.provider={build:()=>new Vc};class CM extends Vc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof Oc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new pV(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new xS(r=>Oc.Vi(r,n),this.serializer)}}class Vp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>J0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RM.bind(null,this.syncEngine),await lM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cM}()}createDatastore(e){const n=Ch(e.databaseInfo.databaseId),r=HV(e.databaseInfo);return QV(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new JV(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>J0(this.syncEngine,n,0),function(){return W0.v()?new W0:new FV}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new gM(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);K(ts,"RemoteStore shutting down."),s.Ia.add(5),await bl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vp.provider={build:()=>new Vp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="FirestoreClient";class bM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=lg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(wi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(wi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xd(t,e){t.asyncQueue.verifyOperationInProgress(),K(wi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await PS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Z0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NM(t);K(wi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>K0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>K0(e.remoteStore,i)),t._onlineComponents=e}async function NM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(wi,"Using user provided OfflineComponentProvider");try{await Xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await Xd(t,new Vc)}}else K(wi,"Using default OfflineComponentProvider"),await Xd(t,new CM(void 0));return t._offlineComponents}async function KS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(wi,"Using user provided OnlineComponentProvider"),await Z0(t,t._uninitializedComponentsProvider._online)):(K(wi,"Using default OnlineComponentProvider"),await Z0(t,new Vp))),t._onlineComponents}function DM(t){return KS(t).then(e=>e.syncEngine)}async function Mc(t){const e=await KS(t),n=e.eventManager;return n.onListen=yM.bind(null,e.syncEngine),n.onUnlisten=wM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_M.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EM.bind(null,e.syncEngine),n}function OM(t,e,n,r){const i=new Vg(r),s=new Dg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Cg(await Mc(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>bg(await Mc(t),s))}}function LM(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Vg({next:m=>{d.Nu(),o.enqueueAndForget(()=>bg(s,f));const w=m.docs.has(l);!w&&m.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&u&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Dg(Sh(l.path),d,{includeMetadataChanges:!0,qa:!0});return Cg(s,f)}(await Mc(t),t.asyncQueue,e,n,r)),r.promise}function VM(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Vg({next:m=>{d.Nu(),o.enqueueAndForget(()=>bg(s,f)),m.fromCache&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Dg(l,d,{includeMetadataChanges:!0,qa:!0});return Cg(s,f)}(await Mc(t),t.asyncQueue,e,n,r)),r.promise}function MM(t,e){const n=new pr;return t.asyncQueue.enqueueAndForget(async()=>TM(await DM(t),e,n)),n.promise}/**
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
 */function GS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jM="ComponentProvider",ew=new Map;function UM(t,e,n,r,i){return new oL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,GS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firestore.googleapis.com",tw=!0;class nw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=QS,this.ssl=tw}else this.host=e.host,this.ssl=e.ssl??tw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=RS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<dV)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jO;switch(r.type){case"firstParty":return new BO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ew.get(n);r&&(K(jM,"Removing Datastore"),ew.delete(n),r.terminate())}(this),Promise.resolve()}}function FM(t,e,n,r={}){var c;t=Kt(t,Dh);const i=cs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Qm(`https://${l}`),s.host!==QS&&s.host!==l&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!pi(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Tt.MOCK_USER;else{d=bI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Tt(m)}t._authCredentials=new UO(new V1(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xr(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xl(n,Ue._jsonSchema))return new Ue(e,r||null,new X(Ee.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Ye("string",Ue._jsonSchemaVersion),referencePath:Ye("string")};class ci extends xr{constructor(e,n,r){super(e,n,Sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new X(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function As(t,e,...n){if(t=re(t),M1("collection","path",e),t instanceof Dh){const r=Ee.fromString(e,...n);return m0(r),new ci(t,null,r)}{if(!(t instanceof Ue||t instanceof ci))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return m0(r),new ci(t.firestore,null,r)}}function hi(t,e,...n){if(t=re(t),arguments.length===1&&(e=lg.newId()),M1("doc","path",e),t instanceof Dh){const r=Ee.fromString(e,...n);return p0(r),new Ue(t,null,new X(r))}{if(!(t instanceof Ue||t instanceof ci))throw new q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return p0(r),new Ue(t.firestore,t instanceof ci?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="AsyncQueue";class iw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bS(this,"async_queue_retry"),this._c=()=>{const r=Jd();r&&K(rw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Jd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Jd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new pr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;K(rw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ir("INTERNAL UNHANDLED ERROR: ",sw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=xg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&Z(47125,{Pc:sw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function sw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ar extends Dh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new iw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new iw(e),this._firestoreClient=void 0,await e}}}function $M(t,e){const n=typeof t=="object"?t:lh(),r=typeof t=="string"?t:e||Pc,i=hs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xI("firestore");s&&FM(i,...s)}return i}function Oh(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BM(t),t._firestoreClient}function BM(t){var r,i,s,o;const e=t._freezeSettings(),n=UM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new bM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(gt.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new dn(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xl(e,dn._jsonSchema))return dn.fromBase64String(e.bytes)}}dn._jsonSchemaVersion="firestore/bytes/1.0",dn._jsonSchema={type:Ye("string",dn._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jn._jsonSchemaVersion}}static fromJSON(e){if(xl(e,Jn._jsonSchema))return new Jn(e.latitude,e.longitude)}}Jn._jsonSchemaVersion="firestore/geoPoint/1.0",Jn._jsonSchema={type:Ye("string",Jn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class bn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:bn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xl(e,bn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new bn(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bn._jsonSchemaVersion="firestore/vectorValue/1.0",bn._jsonSchema={type:Ye("string",bn._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zM=/^__.*__$/;class HM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pl(e,this.data,n,this.fieldTransforms)}}class YS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function JS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class Lh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Lh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return jc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(JS(this.dataSource)&&zM.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class WM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ch(e)}A(e,n,r,i=!1){return new Lh({dataSource:e,methodName:n,targetDoc:r,path:ft.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vh(t){const e=t._freezeSettings(),n=Ch(t._databaseId);return new WM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XS(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);$g("Data must be an object, but it was:",o,r);const l=ZS(r,o);let u,c;if(s.merge)u=new Zt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=ns(e,f,n);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nA(d,m)||d.push(m)}u=new Zt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new HM(new Ft(l),u,c)}class Mh extends xo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mh}}function qM(t,e,n){return new Lh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class jg extends xo{_toFieldTransform(e){return new mg(e.path,new fl)}isEqual(e){return e instanceof jg}}class Ug extends xo{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=qM(this,e,!0),r=this.Sc.map(s=>Po(s,n)),i=new co(r);return new mg(e.path,i)}isEqual(e){return e instanceof Ug&&pi(this.Sc,e.Sc)}}class Fg extends xo{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new ml(e.serializer,uS(e.serializer,this.bc));return new mg(e.path,n)}isEqual(e){return e instanceof Fg&&this.bc===e.bc}}function KM(t,e,n,r){const i=t.A(1,e,n);$g("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();ki(r,(u,c)=>{const d=tA(e,u,n);c=re(c);const f=i.fc(d);if(c instanceof Mh)s.push(d);else{const m=Po(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new Zt(s);return new YS(o,l,i.fieldTransforms)}function GM(t,e,n,r,i,s){const o=t.A(1,e,n),l=[ns(e,r,n)],u=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(ns(e,s[m])),u.push(s[m+1]);const c=[],d=Ft.empty();for(let m=l.length-1;m>=0;--m)if(!nA(c,l[m])){const w=l[m];let P=u[m];P=re(P);const R=o.fc(w);if(P instanceof Mh)c.push(w);else{const C=Po(P,R);C!=null&&(c.push(w),d.set(w,C))}}const f=new Zt(c);return new YS(d,f,o.fieldTransforms)}function QM(t,e,n,r=!1){return Po(n,t.A(r?4:3,e))}function Po(t,e){if(eA(t=re(t)))return $g("Unsupported field value:",e,t),ZS(t,e);if(t instanceof xo)return function(r,i){if(!JS(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Po(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:Dc(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dc(i.serializer,s)}}if(r instanceof Jn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dn)return{bytesValue:vS(i.serializer,r._byteString)};if(r instanceof Ue){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof bn)return function(o,l){const u=o instanceof bn?o.toArray():o;return{mapValue:{fields:{[q1]:{stringValue:G1},[Cc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return pg(l.serializer,d)})}}}}}}(r,i);if(kS(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${wh(r)}`)}(t,e)}function ZS(t,e){const n={};return F1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Po(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Jn||t instanceof dn||t instanceof Ue||t instanceof xo||t instanceof bn||kS(t))}function $g(t,e,n){if(!eA(n)||!j1(n)){const r=wh(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ns(t,e,n){if((e=re(e))instanceof Mg)return e._internalPath;if(typeof e=="string")return tA(t,e);throw jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const YM=new RegExp("[~\\*/\\[\\]]");function tA(t,e,n){if(e.search(YM)>=0)throw jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mg(...e.split("."))._internalPath}catch{throw jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function nA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Cc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Be(o.doubleValue));return new bn(n)}convertGeoPoint(e){return new Jn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ih(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const n=gi(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);me(AS(r),9688,{name:e});const i=new cl(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Bg extends JM{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function ow(){return new jg("serverTimestamp")}function U6(...t){return new Ug("arrayUnion",t)}function F6(t){return new Fg("increment",t)}const aw="@firebase/firestore",lw="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XM extends rA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zg{}class Hg extends zg{}function ia(t,e,...n){let r=[];e instanceof zg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Wg).length,l=s.filter(u=>u instanceof jh).length;if(o>1||o>0&&l>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jh extends Hg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jh(e,n,r)}_apply(e){const n=this._parse(e);return sA(e._query,n),new xr(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=Vh(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){hw(f,d);const P=[];for(const R of f)P.push(cw(u,s,R));m={arrayValue:{values:P}}}else m=cw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||hw(f,d),m=QM(l,o,f,d==="in"||d==="not-in");return Qe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Tn(t,e,n){const r=e,i=ns("where",t);return jh._create(i,r,n)}class Wg extends zg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Wg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)sA(o,u),o=Rp(o,u)}(e._query,n),new xr(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qg extends Hg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dl(s,o)}(e._query,this._field,this._direction);return new xr(e.firestore,e.converter,IL(e._query,n))}}function $6(t,e="asc"){const n=e,r=ns("orderBy",t);return qg._create(r,n)}class Kg extends Hg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kg(e,n,r)}_apply(e){return new xr(e.firestore,e.converter,Nc(e._query,this._limit,this._limitType))}}function B6(t){return QO("limit",t),Kg._create("limit",t,"F")}function cw(t,e,n){if(typeof(n=re(n))=="string"){if(n==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nS(e)&&n.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!X.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return I0(t,new X(r))}if(n instanceof Ue)return I0(t,n._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wh(n)}.`)}function hw(t,e){if(!Array.isArray(t)||t.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sA(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function oA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hi extends rA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hi._jsonSchema={type:Ye("string",Hi._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class zu extends Hi{data(e={}){return super.data(e)}}class Wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zu(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new zu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new zu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ZM(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:Ye("string",Wi._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){t=Kt(t,Ue);const e=Kt(t.firestore,Ar),n=Oh(e);return LM(n,t._key).then(r=>lA(e,t,r))}function gu(t){t=Kt(t,xr);const e=Kt(t.firestore,Ar),n=Oh(e),r=new Bg(e);return iA(t._query),VM(n,t._query).then(i=>new Wi(e,r,t,i))}function dw(t,e,n){t=Kt(t,Ue);const r=Kt(t.firestore,Ar),i=oA(t.converter,e,n),s=Vh(r);return Uh(r,[XS(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function Ys(t,e,n,...r){t=Kt(t,Ue);const i=Kt(t.firestore,Ar),s=Vh(i);let o;return o=typeof(e=re(e))=="string"||e instanceof Mg?GM(s,"updateDoc",t._key,e,n,r):KM(s,"updateDoc",t._key,e),Uh(i,[o.toMutation(t._key,mn.exists(!0))])}function z6(t){return Uh(Kt(t.firestore,Ar),[new gg(t._key,mn.none())])}function e4(t,e){const n=Kt(t.firestore,Ar),r=hi(t),i=oA(t.converter,e),s=Vh(t.firestore);return Uh(n,[XS(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function t4(t,...e){var c,d,f;t=re(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||uw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(uw(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof Ue)o=Kt(t.firestore,Ar),l=Sh(t._key.path),s={next:m=>{e[r]&&e[r](lA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Kt(t,xr);o=Kt(m.firestore,Ar),l=m._query;const w=new Bg(o);s={next:P=>{e[r]&&e[r](new Wi(o,w,m,P))},error:e[r+1],complete:e[r+2]},iA(t._query)}const u=Oh(o);return OM(u,l,i,s)}function Uh(t,e){const n=Oh(t);return MM(n,e)}function lA(t,e,n){const r=n.docs.get(e._key),i=new Bg(t);return new Hi(t,i,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){MO(ds),Dn(new _n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ar(new FO(r.getProvider("auth-internal")),new zO(o,r.getProvider("app-check-internal")),aL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wt(aw,lw,e),Wt(aw,lw,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="firebasestorage.googleapis.com",cA="storageBucket",n4=2*60*1e3,r4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ln{constructor(e,n,r=0){super(Zd(e),`Firebase Storage: ${n} (${Zd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function Zd(t){return"storage/"+t}function Gg(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Fe.UNKNOWN,t)}function i4(t){return new $e(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function s4(t){return new $e(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function o4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Fe.UNAUTHENTICATED,t)}function a4(){return new $e(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function l4(t){return new $e(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function u4(){return new $e(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function c4(){return new $e(Fe.CANCELED,"User canceled the upload/download.")}function h4(t){return new $e(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function d4(t){return new $e(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f4(){return new $e(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cA+"' property when initializing the app?")}function p4(){return new $e(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function m4(){return new $e(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function g4(t){return new $e(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mp(t){return new $e(Fe.INVALID_ARGUMENT,t)}function hA(){return new $e(Fe.APP_DELETED,"The Firebase app was deleted.")}function y4(t){return new $e(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ja(t,e){return new $e(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sa(t){throw new $e(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw d4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},R=n===uA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${C}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:w,indices:P,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<I.length;O++){const j=I[O],$=j.regex.exec(e);if($){const S=$[j.indices.bucket];let _=$[j.indices.path];_||(_=""),r=new en(S,_),j.postModify(r);break}}if(r==null)throw h4(e);return r}}class _4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...C){c||(c=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(w,u())},C)}function m(){s&&clearTimeout(s)}function w(C,...E){if(c){m();return}if(C){m(),d.call(null,C,...E);return}if(u()||o){m(),d.call(null,C,...E);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,f(I)}let P=!1;function R(C){P||(P=!0,m(),!c&&(i!==null?(C||(l=2),clearTimeout(i),f(0)):C||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function w4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E4(t){return t!==void 0}function T4(t){return typeof t=="object"&&!Array.isArray(t)}function Qg(t){return typeof t=="string"||t instanceof String}function fw(t){return Yg()&&t instanceof Blob}function Yg(){return typeof Blob<"u"}function pw(t,e,n,r){if(r<e)throw Mp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Mp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function dA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qi||(qi={}));/**
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
 */function I4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,R)=>{this.resolve_=P,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===qi.NO_ERROR,u=s.getStatus();if(!l||I4(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qi.ABORT;r(!1,new yu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new yu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());E4(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Gg();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?hA():c4();o(u)}else{const u=u4();o(u)}};this.canceled_?n(!1,new yu(!1,null,!0)):this.backoffId_=v4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&w4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function A4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function k4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function R4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function x4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function P4(t,e,n,r,i,s,o=!0,l=!1){const u=dA(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return R4(d,e),A4(d,n),k4(d,s),x4(d,r),new S4(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function b4(...t){const e=C4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yg())return new Blob(t);throw new $e(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function N4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function D4(t){if(typeof atob>"u")throw g4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ef{constructor(e,n){this.data=e,this.contentType=n||null}}function O4(t,e){switch(t){case qn.RAW:return new ef(fA(e));case qn.BASE64:case qn.BASE64URL:return new ef(pA(t,e));case qn.DATA_URL:return new ef(V4(e),M4(e))}throw Gg()}function fA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function L4(t){let e;try{e=decodeURIComponent(t)}catch{throw ja(qn.DATA_URL,"Malformed data URL.")}return fA(e)}function pA(t,e){switch(t){case qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=D4(e)}catch(i){throw i.message.includes("polyfill")?i:ja(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class mA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ja(qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=j4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function V4(t){const e=new mA(t);return e.base64?pA(qn.BASE64,e.rest):L4(e.rest)}function M4(t){return new mA(t).contentType}function j4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){let r=0,i="";fw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(fw(this.data_)){const r=this.data_,i=N4(r,e,n);return i===null?null:new qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qr(r,!0)}}static getBlob(...e){if(Yg()){const n=e.map(r=>r instanceof qr?r.data_:r);return new qr(b4.apply(null,n))}else{const n=e.map(o=>Qg(o)?O4(qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t){let e;try{e=JSON.parse(t)}catch{return null}return T4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function F4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function yA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||$4}}let _u=null;function B4(t){return!Qg(t)||t.length<2?t:yA(t)}function _A(){if(_u)return _u;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return B4(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),_u=t,_u}function z4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new en(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function H4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return z4(r,t),r}function vA(t,e,n){const r=gA(e);return r===null?null:H4(t,r,n)}function W4(t,e,n,r){const i=gA(e);if(i===null||!Qg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),w=Jg(m,n,r),P=dA({alt:"media",token:c});return w+P})[0]}function q4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class wA{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){if(!t)throw Gg()}function K4(t,e){function n(r,i){const s=vA(t,i,e);return EA(s!==null),s}return n}function G4(t,e){function n(r,i){const s=vA(t,i,e);return EA(s!==null),W4(s,i,t.host,t._protocol)}return n}function TA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=a4():i=o4():n.getStatus()===402?i=s4(t.bucket):n.getStatus()===403?i=l4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Q4(t){const e=TA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=i4(t.path)),s.serverResponse=i.serverResponse,s}return n}function Y4(t,e,n){const r=e.fullServerUrl(),i=Jg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new wA(i,s,G4(t,n),o);return l.errorHandler=Q4(e),l}function J4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function X4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=J4(null,e)),r}function Z4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let I="";for(let O=0;O<2;O++)I=I+Math.random().toString().slice(2);return I}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=X4(e,r,i),d=q4(c,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",w=qr.getBlob(f,r,m);if(w===null)throw p4();const P={name:c.fullPath},R=Jg(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,v=new wA(R,C,K4(t,n),E);return v.urlParams=P,v.headers=o,v.body=w.uploadData(),v.errorHandler=TA(e),v}class ej{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw sa("cannot .send() more than once");if(cs(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class tj extends ej{initXhr(){this.xhr_.responseType="text"}}function IA(){return new tj}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yA(this._location.path)}get storage(){return this._service}get parent(){const e=U4(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw y4(e)}}function nj(t,e,n){t._throwIfRoot("uploadBytes");const r=Z4(t.storage,t._location,_A(),new qr(e,!0),n);return t.storage.makeRequestWithTokens(r,IA).then(i=>({metadata:i,ref:t}))}function rj(t){t._throwIfRoot("getDownloadURL");const e=Y4(t.storage,t._location,_A());return t.storage.makeRequestWithTokens(e,IA).then(n=>{if(n===null)throw m4();return n})}function ij(t,e){const n=F4(t._location.path,e),r=new en(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sj(t){return/^[A-Za-z]+:\/\//.test(t)}function oj(t,e){return new rs(t,e)}function SA(t,e){if(t instanceof Xg){const n=t;if(n._bucket==null)throw f4();const r=new rs(n,n._bucket);return e!=null?SA(r,e):r}else return e!==void 0?ij(t,e):t}function aj(t,e){if(e&&sj(e)){if(t instanceof Xg)return oj(t,e);throw Mp("To use ref(service, url), the first argument must be a Storage instance.")}else return SA(t,e)}function mw(t,e){const n=e==null?void 0:e[cA];return n==null?null:en.makeFromBucketSpec(n,t)}function lj(t,e,n,r={}){t.host=`${e}:${n}`;const i=cs(e);i&&Qm(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:bI(s,t.app.options.projectId))}class Xg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=uA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=n4,this._maxUploadRetryTime=r4,this._requests=new Set,i!=null?this._bucket=en.makeFromBucketSpec(i,this._host):this._bucket=mw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=mw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new _4(hA());{const o=P4(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const gw="@firebase/storage",yw="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="storage";function H6(t,e,n){return t=re(t),nj(t,e,n)}function W6(t){return t=re(t),rj(t)}function q6(t,e){return t=re(t),aj(t,e)}function uj(t=lh(),e){t=re(t);const r=hs(t,AA).getImmediate({identifier:e}),i=xI("storage");return i&&cj(r,...i),r}function cj(t,e,n,r={}){lj(t,e,n,r)}function hj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xg(n,r,i,e,ds)}function dj(){Dn(new _n(AA,hj,"PUBLIC").setMultipleInstances(!0)),Wt(gw,yw,""),Wt(gw,yw,"esm2020")}dj();const kA="@firebase/installations",Zg="0.6.21";/**
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
 */const RA=1e4,xA=`w:${Zg}`,PA="FIS_v2",fj="https://firebaseinstallations.googleapis.com/v1",pj=60*60*1e3,mj="installations",gj="Installations";/**
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
 */const yj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},is=new us(mj,gj,yj);function CA(t){return t instanceof Ln&&t.code.includes("request-failed")}/**
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
 */function bA({projectId:t}){return`${fj}/projects/${t}/installations`}function NA(t){return{token:t.token,requestStatus:2,expiresIn:vj(t.expiresIn),creationTime:Date.now()}}async function DA(t,e){const r=(await e.json()).error;return is.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function OA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _j(t,{refreshToken:e}){const n=OA(t);return n.append("Authorization",wj(e)),n}async function LA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vj(t){return Number(t.replace("s","000"))}function wj(t){return`${PA} ${t}`}/**
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
 */async function Ej({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bA(t),i=OA(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:PA,appId:t.appId,sdkVersion:xA},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await LA(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:NA(c.authToken)}}else throw await DA("Create Installation",u)}/**
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
 */function VA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Tj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ij=/^[cdef][\w-]{21}$/,jp="";function Sj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Aj(t);return Ij.test(n)?n:jp}catch{return jp}}function Aj(t){return Tj(t).substr(0,22)}/**
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
 */function Fh(t){return`${t.appName}!${t.appId}`}/**
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
 */const MA=new Map;function jA(t,e){const n=Fh(t);UA(n,e),kj(n,e)}function UA(t,e){const n=MA.get(t);if(n)for(const r of n)r(e)}function kj(t,e){const n=Rj();n&&n.postMessage({key:t,fid:e}),xj()}let $i=null;function Rj(){return!$i&&"BroadcastChannel"in self&&($i=new BroadcastChannel("[Firebase] FID Change"),$i.onmessage=t=>{UA(t.data.key,t.data.fid)}),$i}function xj(){MA.size===0&&$i&&($i.close(),$i=null)}/**
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
 */const Pj="firebase-installations-database",Cj=1,ss="firebase-installations-store";let tf=null;function ey(){return tf||(tf=ah(Pj,Cj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}})),tf}async function Uc(t,e){const n=Fh(t),i=(await ey()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jA(t,e.fid),e}async function FA(t){const e=Fh(t),r=(await ey()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}async function $h(t,e){const n=Fh(t),i=(await ey()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&jA(t,l.fid),l}/**
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
 */async function ty(t){let e;const n=await $h(t.appConfig,r=>{const i=bj(r),s=Nj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===jp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bj(t){const e=t||{fid:Sj(),registrationStatus:0};return $A(e)}function Nj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(is.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Dj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Oj(t)}:{installationEntry:e}}async function Dj(t,e){try{const n=await Ej(t,e);return Uc(t.appConfig,n)}catch(n){throw CA(n)&&n.customData.serverCode===409?await FA(t.appConfig):await Uc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Oj(t){let e=await _w(t.appConfig);for(;e.registrationStatus===1;)await VA(100),e=await _w(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ty(t);return r||n}return e}function _w(t){return $h(t,e=>{if(!e)throw is.create("installation-not-found");return $A(e)})}function $A(t){return Lj(t)?{fid:t.fid,registrationStatus:0}:t}function Lj(t){return t.registrationStatus===1&&t.registrationTime+RA<Date.now()}/**
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
 */async function Vj({appConfig:t,heartbeatServiceProvider:e},n){const r=Mj(t,n),i=_j(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:xA,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await LA(()=>fetch(r,l));if(u.ok){const c=await u.json();return NA(c)}else throw await DA("Generate Auth Token",u)}function Mj(t,{fid:e}){return`${bA(t)}/${e}/authTokens:generate`}/**
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
 */async function ny(t,e=!1){let n;const r=await $h(t.appConfig,s=>{if(!BA(s))throw is.create("not-registered");const o=s.authToken;if(!e&&Fj(o))return s;if(o.requestStatus===1)return n=jj(t,e),s;{if(!navigator.onLine)throw is.create("app-offline");const l=Bj(s);return n=Uj(t,l),l}});return n?await n:r.authToken}async function jj(t,e){let n=await vw(t.appConfig);for(;n.authToken.requestStatus===1;)await VA(100),n=await vw(t.appConfig);const r=n.authToken;return r.requestStatus===0?ny(t,e):r}function vw(t){return $h(t,e=>{if(!BA(e))throw is.create("not-registered");const n=e.authToken;return zj(n)?{...e,authToken:{requestStatus:0}}:e})}async function Uj(t,e){try{const n=await Vj(t,e),r={...e,authToken:n};return await Uc(t.appConfig,r),n}catch(n){if(CA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await FA(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Uc(t.appConfig,r)}throw n}}function BA(t){return t!==void 0&&t.registrationStatus===2}function Fj(t){return t.requestStatus===2&&!$j(t)}function $j(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+pj}function Bj(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function zj(t){return t.requestStatus===1&&t.requestTime+RA<Date.now()}/**
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
 */async function Hj(t){const e=t,{installationEntry:n,registrationPromise:r}=await ty(e);return r?r.catch(console.error):ny(e).catch(console.error),n.fid}/**
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
 */async function Wj(t,e=!1){const n=t;return await qj(n),(await ny(n,e)).token}async function qj(t){const{registrationPromise:e}=await ty(t);e&&await e}/**
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
 */function Kj(t){if(!t||!t.options)throw nf("App Configuration");if(!t.name)throw nf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw nf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function nf(t){return is.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="installations",Gj="installations-internal",Qj=t=>{const e=t.getProvider("app").getImmediate(),n=Kj(e),r=hs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Yj=t=>{const e=t.getProvider("app").getImmediate(),n=hs(e,zA).getImmediate();return{getId:()=>Hj(n),getToken:i=>Wj(n,i)}};function Jj(){Dn(new _n(zA,Qj,"PUBLIC")),Dn(new _n(Gj,Yj,"PRIVATE"))}Jj();Wt(kA,Zg);Wt(kA,Zg,"esm2020");/**
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
 */const Xj="/firebase-messaging-sw.js",Zj="/firebase-cloud-messaging-push-scope",HA="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",eU="https://fcmregistrations.googleapis.com/v1",WA="google.c.a.c_id",tU="google.c.a.c_l",nU="google.c.a.ts",rU="google.c.a.e",ww=1e4;var Ew;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ew||(Ew={}));/**
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
 */var gl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(gl||(gl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function iU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const rf="fcm_token_details_db",sU=5,Tw="fcm_token_object_Store";async function oU(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(rf))return null;let e=null;return(await ah(rf,sU,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(Tw))return;const l=o.objectStore(Tw),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:c.createTime??Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:or(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:or(c.auth),p256dh:or(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:or(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:or(c.auth),p256dh:or(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:or(c.vapidKey)}}}}}})).close(),await $d(rf),await $d("fcm_vapid_details_db"),await $d("undefined"),aU(e)?e:null}function aU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const lU="firebase-messaging-database",uU=1,yl="firebase-messaging-store";let sf=null;function qA(){return sf||(sf=ah(lU,uU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yl)}}})),sf}async function cU(t){const e=KA(t),r=await(await qA()).transaction(yl).objectStore(yl).get(e);if(r)return r;{const i=await oU(t.appConfig.senderId);if(i)return await ry(t,i),i}}async function ry(t,e){const n=KA(t),i=(await qA()).transaction(yl,"readwrite");return await i.objectStore(yl).put(e,n),await i.done,e}function KA({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ot=new us("messaging","Messaging",hU);/**
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
 */async function dU(t,e){const n=await sy(t),r=GA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(iy(t.appConfig),i)).json()}catch(o){throw Ot.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ot.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ot.create("token-subscribe-no-token");return s.token}async function fU(t,e){const n=await sy(t),r=GA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${iy(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ot.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ot.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ot.create("token-update-no-token");return s.token}async function pU(t,e){const r={method:"DELETE",headers:await sy(t)};try{const s=await(await fetch(`${iy(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ot.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ot.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function iy({projectId:t}){return`${eU}/projects/${t}/registrations`}async function sy({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function GA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==HA&&(i.web.applicationPubKey=r),i}/**
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
 */const mU=7*24*60*60*1e3;async function gU(t){const e=await _U(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:or(e.getKey("auth")),p256dh:or(e.getKey("p256dh"))},r=await cU(t.firebaseDependencies);if(r){if(vU(r.subscriptionOptions,n))return Date.now()>=r.createTime+mU?yU(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await pU(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Iw(t.firebaseDependencies,n)}else return Iw(t.firebaseDependencies,n)}async function yU(t,e){try{const n=await fU(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await ry(t.firebaseDependencies,r),n}catch(n){throw n}}async function Iw(t,e){const r={token:await dU(t,e),createTime:Date.now(),subscriptionOptions:e};return await ry(t,r),r.token}async function _U(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:iU(e)})}function vU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return wU(e,t),EU(e,t),TU(e,t),e}function wU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function EU(t,e){e.data&&(t.data=e.data)}function TU(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function IU(t){return typeof t=="object"&&!!t&&WA in t}/**
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
 */SU("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function SU(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function AU(t){if(!t||!t.options)throw of("App Configuration Object");if(!t.name)throw of("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw of(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function of(t){return Ot.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=AU(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RU(t){try{t.swRegistration=await navigator.serviceWorker.register(Xj,{scope:Zj}),t.swRegistration.update().catch(()=>{}),await xU(t.swRegistration)}catch(e){throw Ot.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function xU(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${ww} ms`)),ww),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PU(t,e){if(!e&&!t.swRegistration&&await RU(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ot.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CU(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=HA)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QA(t,e){if(!navigator)throw Ot.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ot.create("permission-blocked");return await CU(t,e==null?void 0:e.vapidKey),await PU(t,e==null?void 0:e.serviceWorkerRegistration),gU(t)}/**
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
 */async function bU(t,e,n){const r=NU(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[WA],message_name:n[tU],message_time:n[nU],message_device_time:Math.floor(Date.now()/1e3)})}function NU(t){switch(t){case gl.NOTIFICATION_CLICKED:return"notification_open";case gl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DU(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===gl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Sw(n)):t.onMessageHandler.next(Sw(n)));const r=n.data;IU(r)&&r[rU]==="1"&&await bU(t,n.messageType,r)}const Aw="@firebase/messaging",kw="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OU=t=>{const e=new kU(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>DU(e,n)),e},LU=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>QA(e,r)}};function VU(){Dn(new _n("messaging",OU,"PUBLIC")),Dn(new _n("messaging-internal",LU,"PRIVATE")),Wt(Aw,kw),Wt(Aw,kw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(){try{await DI()}catch{return!1}return typeof window<"u"&&NI()&&Pb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MU(t=lh()){return YA().then(e=>{if(!e)throw Ot.create("unsupported-browser")},e=>{throw Ot.create("indexed-db-unsupported")}),hs(re(t),"messaging").getImmediate()}async function jU(t,e){return t=re(t),QA(t,e)}VU();const UU={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},Bh=VI(UU),ln=DO(Bh);c2(ln,m1);const Jt=$M(Bh),K6=uj(Bh),af=new Hn;let Up=null;const FU="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";YA().then(t=>{t&&(Up=MU(Bh))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var os;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(os||(os={}));class Hu extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const $U=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},BU=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:$U(t),s=()=>i()!=="web",o=f=>{const m=c.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(w=>w.name===f)},u=f=>t.console.error(f),c=new Map,d=(f,m={})=>{const w=c.get(f);if(w)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),w.proxy;const P=i(),R=l(f);let C;const E=async()=>(!C&&P in m?C=typeof m[P]=="function"?C=await m[P]():C=m[P]:e!==null&&!C&&"web"in m&&(C=typeof m.web=="function"?C=await m.web():C=m.web),C),v=(_,T)=>{var k,x;if(R){const b=R==null?void 0:R.methods.find(A=>T===A.name);if(b)return b.rtype==="promise"?A=>n.nativePromise(f,T.toString(),A):(A,ye)=>n.nativeCallback(f,T.toString(),A,ye);if(_)return(k=_[T])===null||k===void 0?void 0:k.bind(_)}else{if(_)return(x=_[T])===null||x===void 0?void 0:x.bind(_);throw new Hu(`"${f}" plugin is not implemented on ${P}`,os.Unimplemented)}},I=_=>{let T;const k=(...x)=>{const b=E().then(A=>{const ye=v(A,_);if(ye){const G=ye(...x);return T=G==null?void 0:G.remove,G}else throw new Hu(`"${f}.${_}()" is not implemented on ${P}`,os.Unimplemented)});return _==="addListener"&&(b.remove=async()=>T()),b};return k.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:_,writable:!1,configurable:!1}),k},O=I("addListener"),j=I("removeListener"),$=(_,T)=>{const k=O({eventName:_},T),x=async()=>{const A=await k;j({eventName:_,callbackId:A},T)},b=new Promise(A=>k.then(()=>A({remove:x})));return b.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await x()},b},S=new Proxy({},{get(_,T){switch(T){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return R?$:O;case"removeListener":return j;default:return I(T)}}});return r[f]=S,c.set(f,{name:f,proxy:S,platforms:new Set([...Object.keys(m),...R?[P]:[]])}),S};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=u,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Hu,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},zU=t=>t.Capacitor=BU(t),Rn=zU(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),tr=Rn.registerPlugin;class zh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new Rn.Exception(e,os.Unimplemented)}unavailable(e="not available"){return new Rn.Exception(e,os.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const HU=tr("WebView"),Rw=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),xw=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class WU extends zh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=xw(i).trim(),s=xw(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=Rw(e.key),r=Rw(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const qU=tr("CapacitorCookies",{web:()=>new WU}),KU=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),GU=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},QU=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,u;return Array.isArray(o)?(u="",o.forEach(c=>{l=e?encodeURIComponent(c):c,u+=`${s}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${s}=${l}`),`${r}&${u}`},"").substr(1):null,JA=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=GU(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{s.append(u,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class YU extends zh{async request(e){const n=JA(e,e.webFetchExtra),r=QU(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let u,c;switch(l){case"arraybuffer":case"blob":c=await s.blob(),u=await KU(c);break;case"json":u=await s.json();break;case"document":case"text":default:u=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:u,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const JU=tr("CapacitorHttp",{web:()=>new YU});var Fp;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(Fp||(Fp={}));var $p;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})($p||($p={}));class XU extends zh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const ZU=tr("SystemBars",{web:()=>new XU}),G6=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:Rn,CapacitorCookies:qU,CapacitorException:Hu,CapacitorHttp:JU,get ExceptionCode(){return os},get SystemBarType(){return $p},SystemBars:ZU,get SystemBarsStyle(){return Fp},WebPlugin:zh,WebView:HU,buildRequestInit:JA,registerPlugin:tr},Symbol.toStringTag,{value:"Module"}));var Pw;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(Pw||(Pw={}));var Cw;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(Cw||(Cw={}));const eF=tr("FirebaseAuthentication",{web:()=>se(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),XA=D.createContext();function Co(){return D.useContext(XA)}function tF({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(!0),s=D.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async R=>{if(!R){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",R.email);try{const C=hi(Jt,"users",R.uid),E=await aA(C),v=R.email==="prince86944@gmail.com";if(E.exists()){const I=E.data();console.log("[AUTH] Existing user data found:",I.role),v&&I.role!==o.SUPER_ADMIN?(await Ys(C,{role:o.SUPER_ADMIN}),n({...R,...I,role:o.SUPER_ADMIN})):n({...R,...I})}else{console.log("[AUTH] No existing profile. Creating new entry...");const I={uid:R.uid,name:R.displayName||"Scholar",email:R.email,phone:R.phoneNumber||"",createdAt:ow(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await dw(C,I),n({...R,...I})}}catch(C){console.error("[AUTH] Profile sync critical failure:",C),n({uid:R.uid,email:R.email,name:R.displayName||"Scholar",role:R.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function u(R,C,E,v){const I=await t2(ln,R,C),O={uid:I.user.uid,name:E,email:R,phone:v,createdAt:ow(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await dw(hi(Jt,"users",I.user.uid),O),I.user}async function c(R,C){return n2(ln,R,C)}async function d(){var C;if(Rn.isNativePlatform())try{const E=await eF.signInWithGoogle();if((C=E==null?void 0:E.credential)!=null&&C.idToken){const v=Hn.credential(E.credential.idToken),I=await mh(ln,v);return await l(I.user),I.user}throw new Error("Native Google Login failed")}catch(E){console.error("Native Google Login Error:",E);const v=await r0(ln,af);return await l(v.user),v.user}else try{const E=await r0(ln,af);return await l(E.user),E.user}catch(E){return console.warn("Popup failed or blocked, falling back to Redirect...",E),await W2(ln,af)}}function f(R){return window.recaptchaVerifier||(window.recaptchaVerifier=new O2(ln,"recaptcha-container",{size:"invisible"})),V2(ln,R,window.recaptchaVerifier)}async function m(R){e&&(await Ys(hi(Jt,"users",e.uid),R),n(C=>({...C,...R})))}function w(){return p2(ln)}D.useEffect(()=>f2(ln,async C=>{e||i(!0);try{C?await l(C):n(null)}catch(E){console.error("Auth sync error:",E)}finally{i(!1)}}),[]),D.useEffect(()=>{G2(ln).then(async R=>{R!=null&&R.user&&(console.log("[AUTH] Redirect result success:",R.user.email),await l(R.user))}).catch(R=>{console.error("[AUTH] Redirect result error:",R)})},[]);const P={user:e,ROLES:o,login:c,signup:u,logout:w,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return g.jsx(XA.Provider,{value:P,children:t})}const ir=tr("Preferences",{web:()=>se(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),ve=tr("AppBlocker"),ZA=D.createContext(null);function bw(){return D.useContext(ZA)}function nF({children:t}){const{user:e}=Co(),n=(F,z)=>{try{const ee=localStorage.getItem(F);return ee!==null?JSON.parse(ee):z}catch{return z}},[r,i]=D.useState(!1),[s,o]=D.useState(0),[l,u]=D.useState("OTHERS"),[c,d]=D.useState(0),[f,m]=D.useState(0),[w,P]=D.useState(0),[R,C]=D.useState("COUNTDOWN"),[E,v]=D.useState(!1),[I,O]=D.useState(!1),[j,$]=D.useState(()=>n("allowedPackages","")),[S,_]=D.useState([]),[T,k]=D.useState(""),x=D.useRef(null),b=()=>{var F,z,ee,ie,we;return Rn.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((z=(F=window.Capacitor).isNativePlatform)==null?void 0:z.call(F))||((ie=(ee=window.Capacitor).isPluginAvailable)==null?void 0:ie.call(ee,"AppBlocker")))||((we=Rn.isPluginAvailable)==null?void 0:we.call(Rn,"AppBlocker"))},A=async()=>{if(b())try{if(ve&&ve.getInstalledApps){const{apps:F}=await ve.getInstalledApps();_(F.sort((z,ee)=>z.name.localeCompare(ee.name)))}}catch(F){console.error("Fetch Apps Error:",F)}};D.useEffect(()=>{(async()=>{if(b()){await A();try{const z=await ir.get({key:"countdownEndTime"}),ee=Number(z.value||0);if(ee>Date.now()){const ie=Math.ceil((ee-Date.now())/1e3);o(ie),i(!0),C("COUNTDOWN");const we=await ir.get({key:"allowedPackages"});we.value&&$(we.value),console.log("Restored active focus session on initialization:",ie,"seconds remaining")}else ve&&ve.stopBlocker&&await ve.stopBlocker(),await ir.set({key:"isBlockerActive",value:"false"}),await ir.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(z){console.error("Error restoring blocker state:",z)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const ye=F=>{if($(F),localStorage.setItem("allowedPackages",JSON.stringify(F)),b()){ir.set({key:"allowedPackages",value:F});try{const z=(F||"").split(",").filter(Boolean);z.includes("com.apnacollegebihar.online")||z.push("com.apnacollegebihar.online"),ve&&ve.setAllowedPackages&&ve.setAllowedPackages({packages:z})}catch{}}},G=F=>{if(F||v(!1),i(F),localStorage.setItem("timerActive",JSON.stringify(F)),b())try{if(F){if(ve&&ve.setBlockerActive&&ve.setBlockerActive({active:!0}),R==="COUNTDOWN"){ve&&ve.startCountdown&&ve.startCountdown({minutes:Math.ceil(s/60)});const ee=Date.now()+s*1e3;ir.set({key:"countdownEndTime",value:String(ee)})}const z=(j||"").split(",").filter(Boolean);z.includes("com.apnacollegebihar.online")||z.push("com.apnacollegebihar.online"),ve&&ve.setAllowedPackages&&ve.setAllowedPackages({packages:z}),ir.set({key:"isBlockerActive",value:"true"})}else ve&&ve.stopBlocker&&ve.stopBlocker(),ir.set({key:"isBlockerActive",value:"false"}),ir.set({key:"countdownEndTime",value:"0"})}catch(z){console.error("Native Blocker Error:",z)}},le=F=>{O(F),localStorage.setItem("focusBroken",JSON.stringify(F))};D.useEffect(()=>{const F=z=>{z.key==="timerActive"&&i(JSON.parse(z.newValue)),z.key==="focusBroken"&&O(JSON.parse(z.newValue))};return window.addEventListener("storage",F),()=>window.removeEventListener("storage",F)},[]),D.useEffect(()=>{r||o(R==="COUNTDOWN"?c*3600+f*60+w:0)},[R,c,f,w,r]);const Re=async(F=null)=>{if(!e)return;const z=F||(E?c*3600+f*60+w+s:R==="STOPWATCH"?s:c*3600+f*60-s);if(z<5){v(!1),G(!1);return}try{const ee=new Date().toLocaleDateString("en-CA");await e4(As(Jt,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:z,date:ee,createdAt:new Date().toISOString()});const ie=hi(Jt,"users",e.uid),we=await aA(ie);if(we.exists()){const xe=we.data(),Je=xe.lastStudyDate!==ee?z:(xe.todayStudyTime||0)+z,yt=new Date;yt.setDate(yt.getDate()-1);const Pe=yt.toLocaleDateString("en-CA");let ct=xe.streak||0,_t=xe.streakDate||"";_t!==ee&&_t!==Pe&&(ct=0),Je>=7200&&_t!==ee&&(_t===Pe?ct+=1:ct=1,_t=ee),await Ys(ie,{totalStudyTime:(xe.totalStudyTime||0)+z,todayStudyTime:Je,lastStudyDate:ee,streak:ct,streakDate:_t,isStudying:!1})}T&&(await Ys(hi(Jt,"Tasks",T),{done:!0}),k("")),v(!1),G(!1)}catch(ee){v(!1),console.error("Global Save Error:",ee)}};D.useEffect(()=>{e&&Ys(hi(Jt,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),D.useEffect(()=>{const F=z=>{r&&(z.preventDefault(),z.returnValue="")};return window.addEventListener("beforeunload",F),()=>{window.removeEventListener("beforeunload",F)}},[r]),D.useEffect(()=>(r?x.current=setInterval(()=>{o(R==="COUNTDOWN"?F=>F<=1?(C("STOPWATCH"),v(!0),0):F-1:F=>F+1)},1e3):clearInterval(x.current),()=>clearInterval(x.current)),[r,R,e,c,f,w,T]);const B={timerActive:r,setTimerActive:G,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:u,customHours:c,setCustomHours:d,customMinutes:f,setCustomMinutes:m,customSeconds:w,setCustomSeconds:P,timerMode:R,setTimerMode:C,overtimeActive:E,setOvertimeActive:v,saveGlobalSession:Re,focusBroken:I,setFocusBroken:le,allowedPackages:j,setAllowedPackages:ye,installedApps:S,fetchApps:A,selectedTaskId:T,setSelectedTaskId:k,launchApp:async F=>{if(b())try{ve&&ve.launchApp&&await ve.launchApp({packageName:F})}catch(z){console.error(z)}},openAccessibilitySettings:async()=>{if(b())try{ve&&ve.openAccessibilitySettings&&await ve.openAccessibilitySettings()}catch(F){console.error(F)}}};return g.jsx(ZA.Provider,{value:B,children:t})}var Nw;(function(t){t[t.Sunday=1]="Sunday",t[t.Monday=2]="Monday",t[t.Tuesday=3]="Tuesday",t[t.Wednesday=4]="Wednesday",t[t.Thursday=5]="Thursday",t[t.Friday=6]="Friday",t[t.Saturday=7]="Saturday"})(Nw||(Nw={}));const oa=tr("LocalNotifications",{web:()=>se(()=>import("./web3.js"),[]).then(t=>new t.LocalNotificationsWeb)});var rF=typeof Element<"u",iF=typeof Map=="function",sF=typeof Set=="function",oF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Wu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Wu(t[r],e[r]))return!1;return!0}var s;if(iF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Wu(r.value[1],e.get(r.value[0])))return!1;return!0}if(sF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(oF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(rF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Wu(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var aF=function(e,n){try{return Wu(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const lF=Fc(aF);var uF=function(t,e,n,r,i,s,o,l){if(!t){var u;if(e===void 0)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,l],d=0;u=new Error(e.replace(/%s/g,function(){return c[d++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}},cF=uF;const Dw=Fc(cF);var hF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<o.length;c++){var d=o[c];if(!u(d))return!1;var f=e[d],m=n[d];if(s=r?r.call(i,f,m,d):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const dF=Fc(hF);var ek=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(ek||{}),lf={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Ow=Object.values(ek),Hh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},tk=Object.entries(Hh).reduce((t,[e,n])=>(t[n]=e,t),{}),xn="data-rh",Js={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Xs=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},fF=t=>{let e=Xs(t,"title");const n=Xs(t,Js.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Xs(t,Js.DEFAULT_TITLE);return e||r||void 0},pF=t=>Xs(t,Js.ON_CHANGE_CLIENT_STATE)||(()=>{}),uf=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),mF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),gF=t=>console&&typeof console.warn=="function"&&console.warn(t),aa=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&gF(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(u=>{let c;const d=Object.keys(u);for(let m=0;m<d.length;m+=1){const w=d[m],P=w.toLowerCase();e.indexOf(P)!==-1&&!(c==="rel"&&u[c].toLowerCase()==="canonical")&&!(P==="rel"&&u[P].toLowerCase()==="stylesheet")&&(c=P),e.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(c=w)}if(!c||!u[c])return!1;const f=u[c].toLowerCase();return r[c]||(r[c]={}),o[c]||(o[c]={}),r[c][f]?!1:(o[c][f]=!0,!0)}).reverse().forEach(u=>i.push(u));const l=Object.keys(o);for(let u=0;u<l.length;u+=1){const c=l[u],d={...r[c],...o[c]};r[c]=d}return i},[]).reverse()},yF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},_F=t=>({baseTag:mF(["href"],t),bodyAttributes:uf("bodyAttributes",t),defer:Xs(t,Js.DEFER),encode:Xs(t,Js.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:uf("htmlAttributes",t),linkTags:aa("link",["rel","href"],t),metaTags:aa("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:aa("noscript",["innerHTML"],t),onChangeClientState:pF(t),scriptTags:aa("script",["src","innerHTML"],t),styleTags:aa("style",["cssText"],t),title:fF(t),titleAttributes:uf("titleAttributes",t),prioritizeSeoTags:yF(t,Js.PRIORITIZE_SEO_TAGS)}),nk=t=>Array.isArray(t)?t.join(""):t,vF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},cf=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(vF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Lw=(t,e)=>({...t,[e]:void 0}),wF=["noscript","script","style"],Bp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),rk=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),EF=(t,e,n,r)=>{const i=rk(n),s=nk(e);return i?`<${t} ${xn}="true" ${i}>${Bp(s,r)}</${t}>`:`<${t} ${xn}="true">${Bp(s,r)}</${t}>`},TF=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(c=>!(c==="innerHTML"||c==="cssText")).reduce((c,d)=>{const f=typeof s[d]>"u"?d:`${d}="${Bp(s[d],n)}"`;return c?`${c} ${f}`:f},""),l=s.innerHTML||s.cssText||"",u=wF.indexOf(t)===-1;return`${r}<${t} ${xn}="true" ${o}${u?"/>":`>${l}</${t}>`}`},""),ik=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Hh[r];return n[i||r]=t[r],n},e),IF=(t,e,n)=>{const r={key:e,[xn]:!0},i=ik(n,r);return[Y.createElement("title",i,e)]},qu=(t,e)=>e.map((n,r)=>{const i={key:r,[xn]:!0};return Object.keys(n).forEach(s=>{const l=Hh[s]||s;if(l==="innerHTML"||l==="cssText"){const u=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:u}}else i[l]=n[s]}),Y.createElement(t,i)}),un=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>IF(t,e.title,e.titleAttributes),toString:()=>EF(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>ik(e),toString:()=>rk(e)};default:return{toComponent:()=>qu(t,e),toString:()=>TF(t,e,n)}}},SF=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=cf(t,lf.meta),s=cf(e,lf.link),o=cf(n,lf.script);return{priorityMethods:{toComponent:()=>[...qu("meta",i.priority),...qu("link",s.priority),...qu("script",o.priority)],toString:()=>`${un("meta",i.priority,r)} ${un("link",s.priority,r)} ${un("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},AF=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:u,prioritizeSeoTags:c}=t;let{linkTags:d,metaTags:f,scriptTags:m}=t,w={toComponent:()=>[],toString:()=>""};return c&&({priorityMethods:w,linkTags:d,metaTags:f,scriptTags:m}=SF(t)),{priority:w,base:un("base",e,r),bodyAttributes:un("bodyAttributes",n,r),htmlAttributes:un("htmlAttributes",i,r),link:un("link",d,r),meta:un("meta",f,r),noscript:un("noscript",s,r),script:un("script",m,r),style:un("style",o,r),title:un("title",{title:l,titleAttributes:u},r)}},zp=AF,vu=[],oy=!!(typeof window<"u"&&window.document&&window.document.createElement),Hp=class{constructor(t,e){nr(this,"instances",[]);nr(this,"canUseDOM",oy);nr(this,"context");nr(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?vu:this.instances,add:t=>{(this.canUseDOM?vu:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?vu:this.instances).indexOf(t);(this.canUseDOM?vu:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=zp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},kF=parseInt(Y.version.split(".")[0],10),Wp=kF>=19,RF={},sk=Y.createContext(RF),Zs,ok=(Zs=class extends D.Component{constructor(n){super(n);nr(this,"helmetData");Wp?this.helmetData=null:this.helmetData=new Hp(this.props.context||{},Zs.canUseDOM)}render(){return Wp?Y.createElement(Y.Fragment,null,this.props.children):Y.createElement(sk.Provider,{value:this.helmetData.value},this.props.children)}},nr(Zs,"canUseDOM",oy),Zs),ws=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${xn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const u=document.createElement(t);for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c))if(c==="innerHTML")u.innerHTML=l.innerHTML;else if(c==="cssText"){const d=l.cssText;u.appendChild(document.createTextNode(d))}else{const d=c,f=typeof l[d]>"u"?"":l[d];u.setAttribute(c,f)}u.setAttribute(xn,"true"),i.some((c,d)=>(o=d,u.isEqualNode(c)))?i.splice(o,1):s.push(u)}),i.forEach(l=>{var u;return(u=l.parentNode)==null?void 0:u.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},qp=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(xn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);const c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(xn):n.getAttribute(xn)!==o.join(",")&&n.setAttribute(xn,o.join(","))},xF=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=nk(t)),qp("title",e)},Vw=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:u,scriptTags:c,styleTags:d,title:f,titleAttributes:m}=t;qp("body",r),qp("html",i),xF(f,m);const w={baseTag:ws("base",n),linkTags:ws("link",s),metaTags:ws("meta",o),noscriptTags:ws("noscript",l),scriptTags:ws("script",c),styleTags:ws("style",d)},P={},R={};Object.keys(w).forEach(C=>{const{newTags:E,oldTags:v}=w[C];E.length&&(P[C]=E),v.length&&(R[C]=w[C].oldTags)}),e&&e(),u(t,P,R)},la=null,PF=t=>{la&&cancelAnimationFrame(la),t.defer?la=requestAnimationFrame(()=>{Vw(t,()=>{la=null})}):(Vw(t),la=null)},CF=PF,Mw=class extends D.Component{constructor(){super(...arguments);nr(this,"rendered",!1)}shouldComponentUpdate(e){return!dF(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=_F(e.get().map(s=>{const{context:o,...l}=s.props;return l}));ok.canUseDOM?CF(i):zp&&(r=zp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Ku=[],jw=t=>{const e={};for(const n of Object.keys(t))e[tk[n]||n]=t[n];return e},Di=t=>{const e={};for(const n of Object.keys(t)){const r=Hh[n];e[r||n]=t[n]}return e},Uw=(t,e)=>{if(!oy)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const u=e[l];u==null||u===!1?n.removeAttribute(l):u===!0?n.setAttribute(l,""):n.setAttribute(l,String(u))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},hf=()=>{const t={},e={};for(const n of Ku){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,jw(r)),i&&Object.assign(e,jw(i))}Uw("html",t),Uw("body",e)},bF=class extends D.Component{componentDidMount(){Ku.push(this),hf()}componentDidUpdate(){hf()}componentWillUnmount(){const t=Ku.indexOf(this);t!==-1&&Ku.splice(t,1),hf()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return Y.createElement("title",Di(e),t)}renderBase(){const{base:t}=this.props;return t?Y.createElement("base",Di(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Y.createElement("meta",{key:n,...Di(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>Y.createElement("link",{key:n,...Di(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Y.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Y.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),Y.createElement("noscript",{key:n,...s})})}render(){return Y.createElement(Y.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},mf,NF=(mf=class extends D.Component{shouldComponentUpdate(t){return!lF(Lw(this.props,"helmetData"),Lw(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Dw(Ow.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Ow.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Dw(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return Y.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((u,c)=>(u[tk[c]||c]=s[c],u),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof Hp)){const i=r;r=new Hp(i.context,!0),delete n.helmetData}return Wp?Y.createElement(bF,{...n}):r?Y.createElement(Mw,{...n,context:r.value}):Y.createElement(sk.Consumer,null,i=>Y.createElement(Mw,{...n,context:i}))}},nr(mf,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),mf);function DF({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return Y.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const u=document.querySelector('meta[property="og:title"]');u&&u.setAttribute("content",o);const c=document.querySelector('meta[property="og:description"]');c&&c.setAttribute("content",e)},[o,e]),g.jsxs(NF,{children:[g.jsx("title",{children:o}),g.jsx("meta",{name:"description",content:e}),g.jsx("meta",{name:"keywords",content:n}),g.jsx("link",{rel:"canonical",href:r}),g.jsx("meta",{property:"og:type",content:"website"}),g.jsx("meta",{property:"og:url",content:r}),g.jsx("meta",{property:"og:title",content:o}),g.jsx("meta",{property:"og:description",content:e}),g.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),g.jsx("meta",{property:"og:image",content:i}),g.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),g.jsx("meta",{name:"twitter:title",content:o}),g.jsx("meta",{name:"twitter:description",content:e}),g.jsx("meta",{name:"twitter:image",content:i}),s&&g.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}const df=tr("AppBlocker");function Fw(){var ye;const t=Rn.isNativePlatform(),e=vo(),n=qm(),{user:r,updateProfileData:i,logout:s,loading:o}=Co(),[l,u]=D.useState(""),[c,d]=D.useState(!1),[f,m]=D.useState(!1),[w,P]=D.useState(navigator.onLine),{timerActive:R}=bw(),[C,E]=D.useState(!1),[v,I]=D.useState(null),[O,j]=D.useState(!1),$=[{title:"BEU Tools",items:[{name:"BEU Result",path:"/beu-result",icon:g.jsx(Av,{size:16})},{name:"Attendance",path:"/attendance",icon:g.jsx(cb,{size:16})},{name:"Timetable",path:"/timetable",icon:g.jsx(Md,{size:16})},{name:"Notes",path:"/notes",icon:g.jsx(Vd,{size:16})},{name:"PYQ Papers",path:"/pyq",icon:g.jsx(ob,{size:16})},{name:"SGPA / CGPA",path:"/cgpa",icon:g.jsx(ab,{size:16})},{name:"Syllabus",path:"/syllabus",icon:g.jsx(kv,{size:16})}]},{title:"Study Tools",items:[{name:"Study Timer",path:"/study",icon:g.jsx(Nv,{size:16})},{name:"Scientific Calc",path:"/calculator",icon:g.jsx(Iv,{size:16})},{name:"Study Resources",path:"/study-resources",icon:g.jsx(Rv,{size:16})},{name:"Personal Manager",path:"/extras",icon:g.jsx(hb,{size:16})},{name:"Achievements",path:"/achievements",icon:g.jsx(sb,{size:16})}]},{title:"Counselling",items:[{name:"College Predictor",path:"/ugeac-predictor?tab=finder",icon:g.jsx(Cv,{size:16})},{name:"Rank Predictor",path:"/ugeac-predictor?tab=predictor",icon:g.jsx(Iv,{size:16})},{name:"Counselling Guide",path:"/ugeac-predictor?tab=guide",icon:g.jsx(Vd,{size:16})}]}];D.useEffect(()=>{const G=()=>P(!0),le=()=>P(!1);return window.addEventListener("online",G),window.addEventListener("offline",le),()=>{window.removeEventListener("online",G),window.removeEventListener("offline",le)}},[]),D.useEffect(()=>{d(!1),(async()=>{if(!(!r||!w)&&!t&&Up)try{if(await Notification.requestPermission()==="granted"){const Re=await jU(Up,{vapidKey:FU});Re&&await Ys(hi(Jt,"users",r.uid),{fcmToken:Re})}}catch(le){console.error("Push notification setup failed:",le)}})()},[r,w,t]),D.useEffect(()=>{if(!r||!r.uid||!w)return;const G=new Date,le=ia(As(Jt,"nudges"),Tn("toUserId","==",r.uid),Tn("timestamp",">=",G)),Re=t4(le,ie=>{ie.docChanges().forEach(we=>{if(we.type==="added"){const Rt=`📚 ${we.doc.data().fromUserName||"Scholar"} says: padh lo padh lo kam dega!`;pe(Rt,{duration:6e3,icon:"💡",style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Study Nudge 📚",{body:Rt,icon:"/logo-acb.png"})}})});if(!t)return()=>Re();(async()=>{var yt;const ie=new Date().toLocaleDateString("en-CA"),we=new Date().getHours();if(we>=5){const Pe=`morning_greeting_${ie}`;if(!localStorage.getItem(Pe)){const ct=ia(As(Jt,"StudySessions"),Tn("userId","==",r.uid),Tn("date","==",ie)),on=!(await gu(ct)).empty||R||we>=8,Pr=r.name||"Bihari Babu";let Mt="",it="";on?(Mt="Good Morning Biru 🌞",it=`Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄

Aaj ka mission simple hai:

Bakchodi limited 😜
Mehnat unlimited 💪
Tension zero 😌

Aur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅

Din mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`):(Mt=`Good Morning Bhai ${Pr} ☀️`,it=`Uth ja bidu 😄, kitna soyega?

Naya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.

Chai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.

Aur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏

Chal bhai, aaj ka din phod dete hain. 💪🔥
Good Morning, have a great day! 🌞✨`),pe.custom(an=>g.jsxs("div",{className:`${an.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`,children:[g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-xl",children:"🌅"}),g.jsx("h4",{className:"text-xs font-black uppercase tracking-wider text-amber-400",children:Mt})]}),g.jsx("button",{onClick:()=>pe.dismiss(an.id),className:"text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg",children:"Close"})]}),g.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300",children:it})]}),{duration:15e3}),"Notification"in window&&Notification.permission==="granted"&&new Notification(Mt,{body:it.replace(/\n\n/g," "),icon:"/logo-acb.png"}),localStorage.setItem(Pe,"true")}}let xe=!1;if(we>=8){const Pe=`timetable_alert_${ie}`;if(!localStorage.getItem(Pe)){const _t=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],Pr=(((yt=r.timetableV3)==null?void 0:yt[_t])||[]).filter(Mt=>Mt.subject&&Mt.subject.trim()!=="");if(Pr.length>0){const it=`🗓️ Aaj ki Classes:
${Pr.map(an=>`• ${an.startTime||""}: ${an.subject}`).join(`
`)}
Time par pahunch jana biru, padhai shuru karo! 😉`;pe(it,{duration:8e3,icon:"🗓️",style:{background:"#f8fafc",color:"#0f172a",fontWeight:"800",fontSize:"11px",border:"1px solid #e2e8f0"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Timetable Classes Alert",{body:it,icon:"/logo-acb.png"})}localStorage.setItem(Pe,"true"),xe=!0}}const Rt=()=>{var Pe;if(we>=6){const ct=`attendance_alert_${ie}`;if(!localStorage.getItem(ct)){const on=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],Mt=(((Pe=r.timetableV3)==null?void 0:Pe[on])||[]).filter(it=>it.subject&&it.subject.trim()!=="").map(it=>it.subject.trim().toLowerCase());if(Mt.length>0){const it=r.attendance||[],an=[];Mt.forEach(wn=>{const Gt=it.find(Vn=>Vn.name.trim().toLowerCase()===wn);if(Gt){const Vn=Gt.total>0?Number((Gt.present/Gt.total*100).toFixed(1)):0,bo=Ve=>Ve<75?0:Ve<=80?1:Ve<=85?2:Ve<=90?3:Ve<=95?4:5;Vn<75?an.push({type:"danger",text:`🚨 Critical Attendance Alert: ${Gt.name} me attendance sirf ${Vn}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`}):an.push({type:"success",text:`🔥 Gazab Bhai! ${Gt.name} me attendance ${Vn}% hai. Sessional me +${bo(Vn)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`})}}),an.forEach((wn,Gt)=>{setTimeout(()=>{t?oa.schedule({notifications:[{title:"Attendance Alert",body:wn.text,id:new Date().getTime()%1e5+Gt}]}):(pe(wn.text,{duration:8e3,icon:wn.type==="danger"?"🚨":"🔥",style:{background:wn.type==="danger"?"#fecaca":"#d1fae5",color:wn.type==="danger"?"#991b1b":"#065f46",fontWeight:"800",fontSize:"11px",border:`1px solid ${wn.type==="danger"?"#fca5a5":"#6ee7b7"}`}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Attendance Alert",{body:wn.text,icon:"/logo-acb.png"}))},Gt*1e3)})}localStorage.setItem(ct,"true")}}};xe?setTimeout(Rt,2e3):Rt();const Je=async()=>{const Pe=`target_check_${ie}`;if(!localStorage.getItem(Pe)){const ct=ia(As(Jt,"Tasks"),Tn("userId","==",r.uid),Tn("date","==",ie)),_t=await gu(ct);if(_t.empty){const on="🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥";t?oa.schedule({notifications:[{title:"Target Alert",body:on,id:new Date().getTime()%1e5}]}):pe(on,{duration:8e3,icon:"🎯",style:{background:"#fffbeb",color:"#b45309",fontWeight:"800",fontSize:"11px",border:"1px solid #fde68a"}})}else{const on=`🎯 Targets Setup: Aaj ke ${_t.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`;t?oa.schedule({notifications:[{title:"Targets Setup",body:on,id:new Date().getTime()%1e5}]}):pe(on,{duration:8e3,icon:"✅",style:{background:"#f0fdf4",color:"#166534",fontWeight:"800",fontSize:"11px",border:"1px solid #bbf7d0"}})}localStorage.setItem(Pe,"true")}};xe?setTimeout(Je,4e3):setTimeout(Je,1500)})();const F=async()=>{if(R)return;const ie=new Date().toLocaleDateString("en-CA"),we=ia(As(Jt,"StudySessions"),Tn("userId","==",r.uid),Tn("date","==",ie));if((await gu(we)).docs.reduce((Pe,ct)=>Pe+(Number(ct.data().duration)||0),0)>=10800)return;const Je=ia(As(Jt,"Tasks"),Tn("userId","==",r.uid),Tn("date","==",ie),Tn("done","==",!1));if(!(await gu(Je)).empty){const Pe="📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";t?oa.schedule({notifications:[{title:"Padhai Remainder! 📚",body:Pe,id:new Date().getTime()%1e5}]}):(pe(Pe,{duration:9e3,icon:"✍️",style:{background:"#fff1f2",color:"#be123c",fontWeight:"900",fontSize:"11px",border:"1px solid #fecdd3"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Padhai Remainder! 📚",{body:Pe,icon:"/logo-acb.png"}))}},z=setTimeout(F,12e4),ee=setInterval(F,9e5);return()=>{Re(),clearTimeout(z),clearInterval(ee)}},[r,R,w]);const S=async G=>{if(G.preventDefault(),!(l.length<10)){m(!0);try{await i({phone:l}),d(!1)}catch(le){console.error(le)}finally{m(!1)}}};D.useEffect(()=>{t&&(df.setBlockerActive({active:R}).catch(console.error),R?df.lockApp().catch(console.error):df.unlockApp().catch(console.error))},[R,t]),D.useEffect(()=>{t&&oa.requestPermissions().catch(console.error)},[t]);const _=(ye=r==null?void 0:r.metadata)!=null&&ye.creationTime?new Date(r.metadata.creationTime).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recently",T=()=>{const{timerActive:G,timerTime:le}=bw();if(!G||e.pathname==="/study")return null;const Re=Math.floor(le%3600/60),B=le%60;return g.jsxs("div",{onClick:()=>n("/study"),className:"flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse",children:[g.jsx(Nv,{size:14,className:"text-blue-500 group-hover:text-white transition-colors"}),g.jsxs("span",{className:"text-[10px] md:text-xs font-black text-white tabular-nums tracking-tighter",children:[Re.toString().padStart(2,"0"),":",B.toString().padStart(2,"0")]})]})},x=(G=>G==="/"?"Home":G.includes("/study-resources")?"Study Resources":G.includes("/study")?"Study Zone":G.includes("/notes")?"B.Tech Notes":G.includes("/pyq")?"PYQ Papers":G.includes("/syllabus")?"BEU Syllabus":G.includes("/cgpa")?"CGPA Calculator":G.includes("/ugeac-predictor")?"UGEAC Predictor":G.includes("/calculator")?"Calculator":G.includes("/achievements")?"Achievements":G.includes("/groups")?"Study Groups":G.includes("/timetable")?"BEU Timetable":G.includes("/attendance")?"BEU Attendance Tracker":G.includes("/extras")?"Personal Manager":G.includes("/calendar")?"Calendar":G.includes("/beu-result")?"BEU Result":G.includes("/admin")?"Admin Panel":"ACB Hub")(e.pathname),b=({to:G,icon:le,label:Re})=>{const B=e.pathname===G||G!=="/"&&e.pathname.startsWith(G);return g.jsxs(Fn,{to:G,className:"flex flex-col items-center justify-center gap-1 flex-1 py-2",children:[g.jsx("div",{className:`p-1.5 rounded-xl transition-all ${B?"bg-blue-100 text-blue-600":"text-slate-400"}`,children:g.jsx(le,{size:20,strokeWidth:B?2.5:2})}),g.jsx("span",{className:`text-[8px] font-black uppercase tracking-widest ${B?"text-blue-600":"text-slate-400"}`,children:Re})]})},A=({to:G,icon:le,label:Re})=>{const B=e.pathname===G||G!=="/"&&e.pathname.startsWith(G);return g.jsxs(Fn,{to:G,onClick:()=>E(!1),className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${B?"bg-blue-600 text-white shadow-md shadow-blue-600/20":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[g.jsx("div",{className:`${B?"text-white":"text-slate-400"}`,children:typeof le=="function"?g.jsx(le,{size:18}):le}),g.jsx("span",{className:"text-[12px] uppercase tracking-wider font-black",children:Re})]})};return g.jsxs("div",{className:"flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative",children:[g.jsx(DF,{title:x}),g.jsx("header",{className:"bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0",children:g.jsxs("div",{className:"max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3 group cursor-pointer",onClick:()=>n("/"),children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"}),g.jsxs("div",{className:"block",children:[g.jsx("span",{className:"text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none",children:"Apna College Bihar"}),g.jsx("span",{className:"text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block",children:"Official App"})]})]}),g.jsxs("nav",{className:"hidden lg:flex items-center gap-6",children:[g.jsx(Fn,{to:"/",className:"text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:"Home"}),$.map((G,le)=>g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>I(v===le?null:le),className:"flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:[G.title,g.jsx(Sv,{size:12,className:`transition-transform duration-200 ${v===le?"rotate-180":""}`})]}),v===le&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>I(null)}),g.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top",children:G.items.map(Re=>g.jsxs(Fn,{to:Re.path,className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold",onClick:()=>I(null),children:[g.jsx("span",{className:"w-4 h-4 text-slate-500",children:Re.icon}),g.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest",children:Re.name})]},Re.name))})]})]},G.title))]}),g.jsx("div",{className:"flex items-center gap-3",children:o?g.jsx("div",{className:"w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}):r?g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(T,{}),g.jsxs("div",{className:`relative ${t?"hidden":"block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:"ApnaCollegeBihar_Stable.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>j(!O),className:"flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group",children:[g.jsx("div",{className:"w-5 h-5 rounded-lg overflow-hidden bg-slate-100",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Profile",className:"w-full h-full object-cover"})}),g.jsx("span",{className:"hidden md:inline",children:"My Profile"}),g.jsx(Sv,{size:12,className:`transition-transform duration-300 ${O?"rotate-180":""}`})]}),O&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>j(!1)}),g.jsxs("div",{className:"absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right",children:[g.jsxs("div",{className:"px-5 py-5 border-b border-slate-100 mb-2 text-center",children:[g.jsx("div",{className:"w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"ACB",className:"w-full h-full object-cover"})}),g.jsx("p",{className:"text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1",children:"ACB Official Account"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-900 truncate",children:r.email}),g.jsxs("div",{className:"flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold",children:[g.jsx(Md,{size:10,className:"text-blue-500"}),g.jsxs("span",{children:["Joined: ",g.jsx("strong",{className:"text-slate-900",children:_})]})]})]}),g.jsx("div",{className:"space-y-1",children:g.jsxs("button",{onClick:()=>s(),className:"flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group",children:[g.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors",children:g.jsx(xv,{size:14})}),g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Logout Session"})]})})]})]})]})]}):g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(T,{}),g.jsxs("div",{className:`relative ${t?"hidden":"block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:"ApnaCollegeBihar_Stable.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsx(Fn,{to:"/login",className:"hidden md:block px-4 py-2.5 md:px-5 md:py-3 text-slate-600 hover:text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-colors",children:"Login"}),g.jsx(Fn,{to:"/signup",className:"px-4 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 active:scale-95",children:"Sign Up"})]})})]})}),g.jsxs("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col",children:[g.jsx("div",{className:"w-full grow shrink-0 pb-24 lg:pb-8 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-[80vh]",children:g.jsx(Km,{})}),!t&&g.jsxs("footer",{className:"shrink-0 bg-slate-900 text-slate-400 py-12 px-6 lg:px-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-12 w-full pb-32 lg:pb-12 border-t-[8px] border-blue-600",children:[g.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-10 h-10 rounded-xl object-cover shadow-sm bg-white p-0.5"}),g.jsx("span",{className:"text-xl font-[1000] tracking-tighter uppercase text-white leading-none",children:"Apna College Bihar"})]}),g.jsx("p",{className:"text-xs font-medium max-w-xs mb-4 leading-relaxed",children:"The ultimate study engine and counselling companion for Bihar Engineering students. Building the future of BEU together."}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("a",{href:"#",className:"p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all",children:g.jsx(Av,{size:18})}),g.jsx("a",{href:"#",className:"p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all",children:g.jsx(bv,{size:18})}),g.jsx("a",{href:"#",className:"p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all",children:g.jsx(Cv,{size:18})})]})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2",children:[g.jsx(Rv,{size:16,className:"text-blue-500"})," Quick Links"]}),g.jsxs("ul",{className:"space-y-3 text-xs font-bold uppercase tracking-wider",children:[g.jsx("li",{children:g.jsxs(Fn,{to:"/about",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(uu,{size:12,className:"text-slate-600"})," About Us"]})}),g.jsx("li",{children:g.jsxs(Fn,{to:"/contact",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(uu,{size:12,className:"text-slate-600"})," Contact Support"]})}),g.jsx("li",{children:g.jsxs(Fn,{to:"/privacy-policy",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(uu,{size:12,className:"text-slate-600"})," Privacy Policy"]})}),g.jsx("li",{children:g.jsxs(Fn,{to:"/terms",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(uu,{size:12,className:"text-slate-600"})," Terms of Service"]})})]})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2",children:[g.jsx(Tv,{size:16,className:"text-blue-500"})," Get the App"]}),g.jsx("p",{className:"text-xs font-medium leading-relaxed mb-6",children:"Download the official Android app for push notifications and a native experience."}),g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:!0,className:"inline-flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95",children:["Download APK ",g.jsx(Tv,{size:16})]})]})]}),g.jsxs("div",{className:"max-w-7xl mx-auto pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center gap-2",children:[g.jsxs("p",{className:"text-[10px] font-black uppercase tracking-widest text-slate-500",children:["© ",new Date().getFullYear()," Apna College Bihar. All rights reserved."]}),g.jsxs("p",{className:"text-[8px] font-bold text-slate-600 tracking-wider",children:["Made with ",g.jsx("span",{className:"text-red-500",children:"❤️"})," for Bihar Engineering Students"]})]})]})]}),C&&g.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden",onClick:()=>E(!1)}),g.jsxs("aside",{className:`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${C?"translate-x-0":"translate-x-full"}`,children:[g.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50",children:[g.jsx("span",{className:"text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none",children:"Navigation Menu"}),g.jsx("button",{onClick:()=>E(!1),className:"text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200",children:g.jsx(db,{size:16,strokeWidth:3})})]}),g.jsx("div",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar",children:$.map(G=>g.jsxs("div",{children:[g.jsxs("p",{className:"px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[g.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," ",G.title]}),g.jsx("div",{className:"space-y-1",children:G.items.map(le=>g.jsx(A,{to:le.path,icon:()=>le.icon,label:le.name},le.name))})]},G.title))}),g.jsx("div",{className:"p-4 border-t border-slate-100 bg-slate-50",children:g.jsxs("button",{onClick:()=>s(),className:"w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200",children:[g.jsx(xv,{size:16,strokeWidth:2.5})," Logout Session"]})})]}),c&&w&&g.jsx("div",{className:"fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:g.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:g.jsx(bv,{size:32})}),g.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),g.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:S,className:"space-y-6",children:[g.jsxs("div",{className:"flex gap-2",children:[g.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),g.jsx("input",{type:"tel",maxLength:10,value:l,onChange:G=>u(G.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),g.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})}),t&&g.jsxs("nav",{className:"lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200 pb-safe z-[150] flex items-center justify-around px-2 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]",children:[g.jsx(b,{to:"/",icon:lb,label:"Home"}),g.jsx(b,{to:"/timetable",icon:Md,label:"Time"}),g.jsx(b,{to:"/syllabus",icon:kv,label:"Syllabus"}),g.jsx(b,{to:"/notes",icon:Vd,label:"Notes"}),g.jsxs("button",{onClick:()=>E(!0),className:"flex flex-col items-center justify-center gap-1 flex-1 py-2 text-slate-400 hover:text-slate-900 group",children:[g.jsx("div",{className:"p-1.5 rounded-xl transition-all group-hover:bg-slate-100",children:g.jsx(ub,{size:20,strokeWidth:2.5})}),g.jsx("span",{className:"text-[8px] font-black uppercase tracking-widest group-hover:text-slate-900",children:"Menu"})]})]})]})}const OF=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Co(),[i,s]=D.useState(""),[o,l]=D.useState(!1);if(e)return g.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),g.jsx(Pa,{to:"/login",replace:!0});const u=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",c=async f=>{if(f.preventDefault(),i.length<10)return Ld.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Ld.success("Mobile number linked securely!")}catch{Ld.error("Failed to save. Try again.")}finally{l(!1)}};return u?g.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(II,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:c,className:"w-full space-y-4",children:[g.jsxs("div",{className:"relative group",children:[g.jsx(Pv,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),g.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),g.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),g.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[g.jsx(Pv,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),g.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):g.jsx(Km,{})},LF=()=>{const{user:t,loading:e,ROLES:n}=Co();return e?g.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?g.jsx(Km,{}):g.jsx(Pa,{to:"/",replace:!0})},VF=Y.lazy(()=>se(()=>import("./Home.js"),["assets/Home.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/map-pin.js","assets/briefcase.js","assets/check-circle.js","assets/download.js","assets/chevron-right.js","assets/layers.js","assets/database.js","assets/target.js","assets/zap.js","assets/plus.js","assets/minus.js","assets/users.js"])),MF=Y.lazy(()=>se(()=>import("./HomeOverview.js"),["assets/HomeOverview.js","assets/sparkles.js","assets/users.js","assets/flame.js","assets/check-circle.js","assets/zap.js"])),$w=Y.lazy(()=>se(()=>import("./AppHub.js"),["assets/AppHub.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/log-in.js","assets/trash-2.js","assets/message-circle.js","assets/users.js","assets/briefcase.js","assets/external-link.js"])),jF=Y.lazy(()=>se(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js"])),UF=Y.lazy(()=>se(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js"])),FF=Y.lazy(()=>se(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/pdfHelper.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/check-circle-2.js","assets/zap.js","assets/layers.js","assets/download.js","assets/info.js","assets/building-2.js","assets/chevron-up.js","assets/trash-2.js","assets/plus.js","assets/wifi.js","assets/search.js","assets/map-pin.js","assets/external-link.js","assets/UgeacPredictor.css"])),ff=Y.lazy(()=>se(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),pf=Y.lazy(()=>se(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),Bw=Y.lazy(()=>se(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),$F=Y.lazy(()=>se(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/check-circle.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/bar-chart-3.js"])),BF=Y.lazy(()=>se(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js"])),zF=Y.lazy(()=>se(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/external-link.js"])),HF=Y.lazy(()=>se(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),WF=Y.lazy(()=>se(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/bar-chart-3.js","assets/search.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),qF=Y.lazy(()=>se(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js"])),KF=Y.lazy(()=>se(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),GF=Y.lazy(()=>se(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/chevron-right.js"])),QF=Y.lazy(()=>se(()=>import("./Timetable.js"),["assets/Timetable.js","assets/save.js","assets/info.js","assets/plus.js"])),YF=Y.lazy(()=>se(()=>import("./Attendance.js"),["assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/minus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),JF=Y.lazy(()=>se(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/external-link.js","assets/info.js"])),XF=Y.lazy(()=>se(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js"])),ZF=Y.lazy(()=>se(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),e6=Y.lazy(()=>se(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/database.js","assets/eye.js"])),t6=Y.lazy(()=>se(()=>import("./Terms.js"),["assets/Terms.js","assets/check-circle-2.js"])),n6=Y.lazy(()=>se(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/trash-2.js","assets/log-in.js"])),r6=Y.lazy(()=>se(()=>import("./About.js"),["assets/About.js","assets/sparkles.js","assets/heart.js","assets/users.js"])),i6=Y.lazy(()=>se(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/check-circle-2.js","assets/help-circle.js"])),s6=Y.lazy(()=>se(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js"])),zw=Y.lazy(()=>se(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/minus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/save.js","assets/BeuCgpa.js","assets/check-circle.js","assets/chevron-up.js","assets/bar-chart-3.js","assets/BeuResult.js"])),Hw=Y.lazy(()=>se(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/arrow-left.js","assets/save.js"])),Ww=Y.lazy(()=>se(()=>import("./CollegeProfile.js"),["assets/CollegeProfile.js","assets/collegeData.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/building-2.js","assets/chevron-right.js","assets/check-circle.js","assets/map-pin.js","assets/download.js","assets/layers.js","assets/users.js","assets/target.js","assets/wifi.js","assets/clock.js"])),qw=Y.lazy(()=>se(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/cpu.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),o6=Y.lazy(()=>se(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/check-circle-2.js"])),Kw=Y.lazy(()=>se(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),a6=Y.lazy(()=>se(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/check-circle-2.js","assets/users.js"])),l6=Y.lazy(()=>se(()=>import("./SitemapDirectory.js"),["assets/SitemapDirectory.js","assets/UgeacData.js","assets/building-2.js","assets/cpu.js"])),u6=Y.lazy(()=>se(()=>import("./CollegeDirectory.js"),["assets/CollegeDirectory.js","assets/collegeData.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/building-2.js","assets/search.js","assets/target.js","assets/map-pin.js","assets/layers.js","assets/check-circle.js","assets/chevron-right.js"])),Gw=Y.lazy(()=>se(()=>import("./CompareColleges.js"),["assets/CompareColleges.js","assets/UgeacData.js","assets/layers.js"])),c6=Y.lazy(()=>se(()=>import("./PercentilePredictor.js"),[]));function h6(){return g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function d6(){var w,P,R;const{user:t,updateProfileData:e,logout:n}=Co(),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,u]=D.useState(""),[c,d]=D.useState(!1);if(D.useEffect(()=>{t&&(i(t.name&&t.name!=="Scholar"?t.name:""),o(t.collegeName||""),u(t.phone&&t.phone!=="NOT LINKED"?t.phone:""))},[t]),!(t&&(!(t!=null&&t.phone)||((w=t==null?void 0:t.phone)==null?void 0:w.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED"||!(t!=null&&t.name)||((P=t==null?void 0:t.name)==null?void 0:P.trim())===""||(t==null?void 0:t.name)==="Scholar"||!(t!=null&&t.collegeName)||((R=t==null?void 0:t.collegeName)==null?void 0:R.trim())==="")))return null;const m=async C=>{if(C.preventDefault(),!r.trim())return pe.error("Please enter your name!");if(!s.trim())return pe.error("Please enter your college name!");if(l.length<10)return pe.error("Enter a valid 10-digit mobile number!");d(!0);try{await e({name:r.trim(),collegeName:s.trim(),phone:l}),pe.success("Profile setup completed successfully!")}catch{pe.error("Failed to save. Try again.")}finally{d(!1)}};return g.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(II,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Profile Setup"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-6",children:"Please complete your details to unlock and secure your college portal access."}),g.jsxs("form",{onSubmit:m,className:"w-full space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Full Name"}),g.jsx("input",{type:"text",value:r,onChange:C=>i(C.target.value),placeholder:"YOUR FULL NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"College Name"}),g.jsx("input",{type:"text",value:s,onChange:C=>o(C.target.value),placeholder:"YOUR COLLEGE NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Mobile Number"}),g.jsx("input",{type:"tel",value:l,onChange:C=>u(C.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsx("button",{type:"submit",disabled:c,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:c?"Saving details...":"Save & Continue"})]}),g.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function f6(){const{user:t,loading:e}=Co(),[n,r]=D.useState(!1),[i,s]=D.useState(window.innerWidth<768),o=Rn.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const u=o||sessionStorage.getItem("standalone")==="true";if(D.useEffect(()=>{const c=()=>s(window.innerWidth<768);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),D.useEffect(()=>{const c=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(c)),()=>clearTimeout(c)},[e]),n)return g.jsxs("div",{className:"min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return g.jsxs(g.Fragment,{children:[g.jsx(tb,{position:"top-right"}),g.jsx(d6,{}),g.jsx(Y.Suspense,{fallback:g.jsx(h6,{}),children:g.jsxs(rC,{children:[g.jsx(J,{path:"/hub",element:g.jsx($w,{})}),g.jsx(J,{path:"/login",element:g.jsx(jF,{})}),g.jsx(J,{path:"/signup",element:g.jsx(UF,{})}),g.jsx(J,{path:"/privacy-policy",element:g.jsx(e6,{})}),g.jsx(J,{path:"/terms",element:g.jsx(t6,{})}),g.jsx(J,{path:"/delete-account",element:g.jsx(n6,{})}),g.jsx(J,{path:"/about",element:g.jsx(r6,{})}),g.jsx(J,{path:"/contact",element:g.jsx(i6,{})}),g.jsx(J,{path:"/directory",element:u?g.jsx(Pa,{to:"/",replace:!0}):g.jsx(l6,{})}),!t&&!o&&g.jsx(J,{path:"/",element:g.jsx(VF,{})}),g.jsxs(J,{element:g.jsx(Fw,{}),children:[g.jsx(J,{path:"/",element:o?g.jsx($w,{}):g.jsx(MF,{})}),g.jsx(J,{path:"/search/:keyword",element:g.jsx(s6,{})}),g.jsx(J,{path:"/notes",element:g.jsx(ff,{})}),g.jsx(J,{path:"/notes/:branchId/:semesterId",element:g.jsx(ff,{})}),g.jsx(J,{path:"/notes/:branchId",element:g.jsx(ff,{})}),g.jsx(J,{path:"/pyq",element:g.jsx(pf,{})}),g.jsx(J,{path:"/pyq/:branchId/:semesterId",element:g.jsx(pf,{})}),g.jsx(J,{path:"/pyq/:branchId",element:g.jsx(pf,{})}),g.jsx(J,{path:"/attendance",element:g.jsx(YF,{})}),g.jsx(J,{path:"/timetable",element:g.jsx(QF,{})}),g.jsx(J,{path:"/study",element:g.jsx(BF,{})}),g.jsx(J,{path:"/study-resources",element:g.jsx(zF,{})}),g.jsx(J,{path:"/calculator",element:g.jsx(HF,{})}),g.jsx(J,{path:"/groups",element:g.jsx(KF,{})}),g.jsx(J,{path:"/groups/:groupId",element:g.jsx(GF,{})}),g.jsx(J,{path:"/achievements",element:g.jsx(qF,{})}),g.jsx(J,{path:"/extras",element:g.jsx(XF,{})}),g.jsx(J,{path:"/calendar",element:g.jsx(ZF,{})}),g.jsx(J,{path:"/cgpa",element:g.jsx($F,{})}),g.jsx(J,{path:"/ugeac-predictor",element:g.jsx(FF,{})}),g.jsx(J,{path:"/beu-result",element:g.jsx(JF,{})}),g.jsx(J,{path:"/syllabus",element:g.jsx(Bw,{})}),g.jsx(J,{path:"/syllabus/:branchId",element:g.jsx(Bw,{})}),g.jsx(J,{path:"/colleges",element:g.jsx(u6,{})}),g.jsx(J,{path:"/college/:collegeSlug",element:g.jsx(Ww,{})}),g.jsx(J,{path:"/college/:collegeSlug/:section",element:g.jsx(Ww,{})}),g.jsx(J,{path:"/branch/:branchId",element:g.jsx(qw,{})}),g.jsx(J,{path:"/branch/:branchId/:section",element:g.jsx(qw,{})}),g.jsx(J,{path:"/ugeac/:page",element:g.jsx(o6,{})}),g.jsx(J,{path:"/subject/:subjectSlug",element:g.jsx(Kw,{})}),g.jsx(J,{path:"/subject/:subjectSlug/:section",element:g.jsx(Kw,{})}),g.jsx(J,{path:"/hackathons",element:g.jsx(a6,{})}),g.jsx(J,{path:"/compare",element:g.jsx(Gw,{})}),g.jsx(J,{path:"/compare/:college1VsCollege2",element:g.jsx(Gw,{})}),g.jsx(J,{path:"/percentile-predictor",element:g.jsx(c6,{})}),g.jsx(J,{path:"/beu/:tool",element:g.jsx(zw,{})}),g.jsx(J,{path:"/beu/:tool/:keyword",element:g.jsx(zw,{})}),g.jsx(J,{path:"/feature/:feature",element:g.jsx(Hw,{})}),g.jsx(J,{path:"/feature/:feature/:keyword",element:g.jsx(Hw,{})})]}),g.jsx(J,{element:g.jsx(OF,{}),children:g.jsxs(J,{element:g.jsx(Fw,{}),children:[g.jsx(J,{path:"/",element:g.jsx(Pa,{to:"/",replace:!0})}),g.jsx(J,{element:g.jsx(LF,{}),children:g.jsx(J,{path:"/dashboard/admin",element:g.jsx(WF,{})})})]})}),g.jsx(J,{path:"*",element:g.jsx(Pa,{to:"/",replace:!0})})]})})]})}catch(c){return console.error("App Crash:",c),g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:g.jsx(ib,{size:32})}),g.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),g.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const Qw=document.getElementById("root");if(!Qw)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=gf.createRoot(Qw);console.log("[DEBUG] Rendering app to root..."),t.render(g.jsx(Y.StrictMode,{children:g.jsx(ok,{children:g.jsx(tF,{children:g.jsx(nF,{children:g.jsx(cC,{children:g.jsx(f6,{})})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{ib as $,Tv as A,Vd as B,Sv as C,Fc as D,$6 as E,ob as F,ab as G,bv as H,Ys as I,hi as J,z6 as K,Fn as L,e4 as M,ow as N,q6 as O,K6 as P,H6 as Q,Y as R,DF as S,Nv as T,hb as U,W6 as V,aA as W,db as X,bw as Y,uu as Z,se as _,Co as a,DO as a0,O6 as a1,Ld as a2,Rn as a3,lb as a4,tr as a5,U6 as a6,F6 as a7,zh as a8,T6 as a9,_6 as aA,C6 as aB,b6 as aC,P6 as aD,bD as aE,x6 as aF,W2 as aG,r0 as aH,M6 as aI,V6 as aJ,ZD as aK,Tr as aL,N6 as aM,Kv as aN,x2 as aO,y1 as aP,m1 as aQ,G6 as aR,t2 as aa,E6 as ab,k6 as ac,G2 as ad,Lu as ae,S6 as af,Cw as ag,fs as ah,zr as ai,Hr as aj,Hn as ak,O2 as al,L6 as am,Wr as an,sD as ao,D6 as ap,R6 as aq,w6 as ar,I6 as as,Pw as at,c2 as au,y6 as av,v6 as aw,n2 as ax,A6 as ay,V2 as az,xv as b,As as c,Jt as d,kv as e,Iv as f,gu as g,Md as h,Av as i,g as j,II as k,Cv as l,be as m,cb as n,t4 as o,Rv as p,sb as q,D as r,pe as s,g6 as t,qm as u,vo as v,ia as w,B6 as x,Tn as y,m6 as z};
