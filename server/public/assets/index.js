var bk=Object.defineProperty;var Nk=(t,e,n)=>e in t?bk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ir=(t,e,n)=>(Nk(t,typeof e!="symbol"?e+"":e,n),n);function Dk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var f6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gw={exports:{}},Bu={},Qw={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _l=Symbol.for("react.element"),Ok=Symbol.for("react.portal"),Lk=Symbol.for("react.fragment"),Vk=Symbol.for("react.strict_mode"),Mk=Symbol.for("react.profiler"),jk=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),Fk=Symbol.for("react.forward_ref"),Bk=Symbol.for("react.suspense"),$k=Symbol.for("react.memo"),zk=Symbol.for("react.lazy"),Zy=Symbol.iterator;function Hk(t){return t===null||typeof t!="object"?null:(t=Zy&&t[Zy]||t["@@iterator"],typeof t=="function"?t:null)}var Yw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jw=Object.assign,Xw={};function po(t,e,n){this.props=t,this.context=e,this.refs=Xw,this.updater=n||Yw}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zw(){}Zw.prototype=po.prototype;function Wp(t,e,n){this.props=t,this.context=e,this.refs=Xw,this.updater=n||Yw}var qp=Wp.prototype=new Zw;qp.constructor=Wp;Jw(qp,po.prototype);qp.isPureReactComponent=!0;var e_=Array.isArray,eE=Object.prototype.hasOwnProperty,Kp={current:null},tE={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eE.call(e,r)&&!tE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_l,type:t,key:s,ref:o,props:i,_owner:Kp.current}}function Wk(t,e){return{$$typeof:_l,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===_l}function qk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var t_=/\/+/g;function ld(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qk(""+t.key):e.toString(36)}function wc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _l:case Ok:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ld(o,0):r,e_(i)?(n="",t!=null&&(n=t.replace(t_,"$&/")+"/"),wc(i,e,n,"",function(u){return u})):i!=null&&(Gp(i)&&(i=Wk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(t_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",e_(t))for(var l=0;l<t.length;l++){s=t[l];var c=r+ld(s,l);o+=wc(s,e,n,c,i)}else if(c=Hk(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=r+ld(s,l++),o+=wc(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Wl(t,e,n){if(t==null)return t;var r=[],i=0;return wc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Kk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Ec={transition:null},Gk={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ec,ReactCurrentOwner:Kp};function rE(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Wl,forEach:function(t,e,n){Wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wl(t,function(){e++}),e},toArray:function(t){return Wl(t,function(e){return e})||[]},only:function(t){if(!Gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=po;ce.Fragment=Lk;ce.Profiler=Mk;ce.PureComponent=Wp;ce.StrictMode=Vk;ce.Suspense=Bk;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gk;ce.act=rE;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)eE.call(e,c)&&!tE.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_l,type:t.type,key:i,ref:s,props:r,_owner:o}};ce.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jk,_context:t},t.Consumer=t};ce.createElement=nE;ce.createFactory=function(t){var e=nE.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:Fk,render:t}};ce.isValidElement=Gp;ce.lazy=function(t){return{$$typeof:zk,_payload:{_status:-1,_result:t},_init:Kk}};ce.memo=function(t,e){return{$$typeof:$k,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Ec.transition;Ec.transition={};try{t()}finally{Ec.transition=e}};ce.unstable_act=rE;ce.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ce.useContext=function(t){return Vt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ce.useId=function(){return Vt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ce.useRef=function(t){return Vt.current.useRef(t)};ce.useState=function(t){return Vt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Vt.current.useTransition()};ce.version="18.3.1";Qw.exports=ce;var D=Qw.exports;const G=Fu(D),Qk=Dk({__proto__:null,default:G},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yk=D,Jk=Symbol.for("react.element"),Xk=Symbol.for("react.fragment"),Zk=Object.prototype.hasOwnProperty,eR=Yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tR={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zk.call(e,r)&&!tR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Jk,type:t,key:s,ref:o,props:i,_owner:eR.current}}Bu.Fragment=Xk;Bu.jsx=iE;Bu.jsxs=iE;Gw.exports=Bu;var g=Gw.exports,pf={},sE={exports:{}},an={},oE={exports:{}},aE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Z){var ne=$.length;$.push(Z);e:for(;0<ne;){var we=ne-1>>>1,H=$[we];if(0<i(H,Z))$[we]=Z,$[ne]=H,ne=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Z=$[0],ne=$.pop();if(ne!==Z){$[0]=ne;e:for(var we=0,H=$.length,Y=H>>>1;we<Y;){var oe=2*(we+1)-1,Ce=$[oe],Se=oe+1,ot=$[Se];if(0>i(Ce,ne))Se<H&&0>i(ot,Ce)?($[we]=ot,$[Se]=ne,we=Se):($[we]=Ce,$[oe]=ne,we=oe);else if(Se<H&&0>i(ot,ne))$[we]=ot,$[Se]=ne,we=Se;else break e}}return Z}function i($,Z){var ne=$.sortIndex-Z.sortIndex;return ne!==0?ne:$.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],d=1,f=null,m=3,w=!1,x=!1,R=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S($){for(var Z=n(u);Z!==null;){if(Z.callback===null)r(u);else if(Z.startTime<=$)r(u),Z.sortIndex=Z.expirationTime,e(c,Z);else break;Z=n(u)}}function O($){if(R=!1,S($),!x)if(n(c)!==null)x=!0,le(j);else{var Z=n(u);Z!==null&&Le(O,Z.startTime-$)}}function j($,Z){x=!1,R&&(R=!1,E(_),_=-1),w=!0;var ne=m;try{for(S(Z),f=n(c);f!==null&&(!(f.expirationTime>Z)||$&&!P());){var we=f.callback;if(typeof we=="function"){f.callback=null,m=f.priorityLevel;var H=we(f.expirationTime<=Z);Z=t.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),S(Z)}else r(c);f=n(c)}if(f!==null)var Y=!0;else{var oe=n(u);oe!==null&&Le(O,oe.startTime-Z),Y=!1}return Y}finally{f=null,m=ne,w=!1}}var F=!1,T=null,_=-1,I=5,k=-1;function P(){return!(t.unstable_now()-k<I)}function b(){if(T!==null){var $=t.unstable_now();k=$;var Z=!0;try{Z=T(!0,$)}finally{Z?A():(F=!1,T=null)}}else F=!1}var A;if(typeof v=="function")A=function(){v(b)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Q=pe.port2;pe.port1.onmessage=b,A=function(){Q.postMessage(null)}}else A=function(){C(b,0)};function le($){T=$,F||(F=!0,A())}function Le($,Z){_=C(function(){$(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||w||(x=!0,le(j))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ne=m;m=Z;try{return $()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Z){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ne=m;m=$;try{return Z()}finally{m=ne}},t.unstable_scheduleCallback=function($,Z,ne){var we=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?we+ne:we):ne=we,$){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,$={id:d++,callback:Z,priorityLevel:$,startTime:ne,expirationTime:H,sortIndex:-1},ne>we?($.sortIndex=ne,e(u,$),n(c)===null&&$===n(u)&&(R?(E(_),_=-1):R=!0,Le(O,ne-we))):($.sortIndex=H,e(c,$),x||w||(x=!0,le(j))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var Z=m;return function(){var ne=m;m=Z;try{return $.apply(this,arguments)}finally{m=ne}}}})(aE);oE.exports=aE;var nR=oE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rR=D,on=nR;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lE=new Set,Ua={};function as(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(Ua[t]=e,t=0;t<e.length;t++)lE.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mf=Object.prototype.hasOwnProperty,iR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,n_={},r_={};function sR(t){return mf.call(r_,t)?!0:mf.call(n_,t)?!1:iR.test(t)?r_[t]=!0:(n_[t]=!0,!1)}function oR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aR(t,e,n,r){if(e===null||typeof e>"u"||oR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qp=/[\-:]([a-z])/g;function Yp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);yt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qp,Yp);yt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qp,Yp);yt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jp(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aR(e,n,i,r)&&(n=null),r||i===null?sR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=rR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ql=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),gf=Symbol.for("react.profiler"),cE=Symbol.for("react.provider"),uE=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),em=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),hE=Symbol.for("react.offscreen"),i_=Symbol.iterator;function Go(t){return t===null||typeof t!="object"?null:(t=i_&&t[i_]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,cd;function ca(t){if(cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+t}var ud=!1;function hd(t,e){if(!t||ud)return"";ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{ud=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function lR(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=hd(t.type,!1),t;case 11:return t=hd(t.type.render,!1),t;case 1:return t=hd(t.type,!0),t;default:return""}}function vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case ks:return"Portal";case gf:return"Profiler";case Xp:return"StrictMode";case yf:return"Suspense";case _f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uE:return(t.displayName||"Context")+".Consumer";case cE:return(t._context.displayName||"Context")+".Provider";case Zp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case em:return e=t.displayName||null,e!==null?e:vf(t.type)||"Memo";case jr:e=t._payload,t=t._init;try{return vf(t(e))}catch{}}return null}function cR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vf(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uR(t){var e=dE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kl(t){t._valueTracker||(t._valueTracker=uR(t))}function fE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function s_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pE(t,e){e=e.checked,e!=null&&Jp(t,"checked",e,!1)}function Ef(t,e){pE(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tf(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function o_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tf(t,e,n){(e!=="number"||Gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ua(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function mE(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function l_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gl,yE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gl=Gl||document.createElement("div"),Gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hR=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){hR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function _E(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function vE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_E(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dR=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Af(t,e){if(e){if(dR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rf=null;function tm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pf=null,Us=null,Fs=null;function c_(t){if(t=El(t)){if(typeof Pf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=qu(e),Pf(t.stateNode,t.type,e))}}function wE(t){Us?Fs?Fs.push(t):Fs=[t]:Us=t}function EE(){if(Us){var t=Us,e=Fs;if(Fs=Us=null,c_(t),e)for(t=0;t<e.length;t++)c_(e[t])}}function TE(t,e){return t(e)}function IE(){}var dd=!1;function SE(t,e,n){if(dd)return t(e,n);dd=!0;try{return TE(t,e,n)}finally{dd=!1,(Us!==null||Fs!==null)&&(IE(),EE())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var xf=!1;if(gr)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){xf=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{xf=!1}function fR(t,e,n,r,i,s,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ea=!1,Qc=null,Yc=!1,Cf=null,pR={onError:function(t){Ea=!0,Qc=t}};function mR(t,e,n,r,i,s,o,l,c){Ea=!1,Qc=null,fR.apply(pR,arguments)}function gR(t,e,n,r,i,s,o,l,c){if(mR.apply(this,arguments),Ea){if(Ea){var u=Qc;Ea=!1,Qc=null}else throw Error(U(198));Yc||(Yc=!0,Cf=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function AE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function u_(t){if(ls(t)!==t)throw Error(U(188))}function yR(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return u_(i),t;if(s===r)return u_(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function kE(t){return t=yR(t),t!==null?RE(t):null}function RE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=RE(t);if(e!==null)return e;t=t.sibling}return null}var PE=on.unstable_scheduleCallback,h_=on.unstable_cancelCallback,_R=on.unstable_shouldYield,vR=on.unstable_requestPaint,qe=on.unstable_now,wR=on.unstable_getCurrentPriorityLevel,nm=on.unstable_ImmediatePriority,xE=on.unstable_UserBlockingPriority,Jc=on.unstable_NormalPriority,ER=on.unstable_LowPriority,CE=on.unstable_IdlePriority,$u=null,Yn=null;function TR(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:AR,IR=Math.log,SR=Math.LN2;function AR(t){return t>>>=0,t===0?32:31-(IR(t)/SR|0)|0}var Ql=64,Yl=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ha(l):(s&=o,s!==0&&(r=ha(s)))}else o=n&~i,o!==0?r=ha(o):s!==0&&(r=ha(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function kR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),l=1<<o,c=i[o];c===-1?(!(l&n)||l&r)&&(i[o]=kR(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bE(){var t=Ql;return Ql<<=1,!(Ql&4194240)&&(Ql=64),t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function PR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function NE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var DE,im,OE,LE,VE,Nf=!1,Jl=[],Xr=null,Zr=null,ei=null,$a=new Map,za=new Map,Fr=[],xR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d_(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Yo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&im(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function CR(t,e,n,r,i){switch(e){case"focusin":return Xr=Yo(Xr,t,e,n,r,i),!0;case"dragenter":return Zr=Yo(Zr,t,e,n,r,i),!0;case"mouseover":return ei=Yo(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $a.set(s,Yo($a.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,za.set(s,Yo(za.get(s)||null,t,e,n,r,i)),!0}return!1}function ME(t){var e=Mi(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=AE(n),e!==null){t.blockedOn=e,VE(t.priority,function(){OE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rf=r,n.target.dispatchEvent(r),Rf=null}else return e=El(n),e!==null&&im(e),t.blockedOn=n,!1;e.shift()}return!0}function f_(t,e,n){Tc(t)&&n.delete(e)}function bR(){Nf=!1,Xr!==null&&Tc(Xr)&&(Xr=null),Zr!==null&&Tc(Zr)&&(Zr=null),ei!==null&&Tc(ei)&&(ei=null),$a.forEach(f_),za.forEach(f_)}function Jo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,bR)))}function Ha(t){function e(i){return Jo(i,t)}if(0<Jl.length){Jo(Jl[0],t);for(var n=1;n<Jl.length;n++){var r=Jl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&Jo(Xr,t),Zr!==null&&Jo(Zr,t),ei!==null&&Jo(ei,t),$a.forEach(e),za.forEach(e),n=0;n<Fr.length;n++)r=Fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fr.length&&(n=Fr[0],n.blockedOn===null);)ME(n),n.blockedOn===null&&Fr.shift()}var Bs=Rr.ReactCurrentBatchConfig,Zc=!0;function NR(t,e,n,r){var i=ve,s=Bs.transition;Bs.transition=null;try{ve=1,sm(t,e,n,r)}finally{ve=i,Bs.transition=s}}function DR(t,e,n,r){var i=ve,s=Bs.transition;Bs.transition=null;try{ve=4,sm(t,e,n,r)}finally{ve=i,Bs.transition=s}}function sm(t,e,n,r){if(Zc){var i=Df(t,e,n,r);if(i===null)Id(t,e,r,eu,n),d_(t,r);else if(CR(i,t,e,n,r))r.stopPropagation();else if(d_(t,r),e&4&&-1<xR.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&DE(s),s=Df(t,e,n,r),s===null&&Id(t,e,r,eu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Id(t,e,r,null,n)}}var eu=null;function Df(t,e,n,r){if(eu=null,t=tm(r),t=Mi(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=AE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function jE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wR()){case nm:return 1;case xE:return 4;case Jc:case ER:return 16;case CE:return 536870912;default:return 16}default:return 16}}var Kr=null,om=null,Ic=null;function UE(){if(Ic)return Ic;var t,e=om,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ic=i.slice(t,1<r?1-r:void 0)}function Sc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xl(){return!0}function p_(){return!1}function ln(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xl:p_,this.isPropagationStopped=p_,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xl)},persist:function(){},isPersistent:Xl}),e}var mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},am=ln(mo),wl=De({},mo,{view:0,detail:0}),OR=ln(wl),pd,md,Xo,zu=De({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(pd=t.screenX-Xo.screenX,md=t.screenY-Xo.screenY):md=pd=0,Xo=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),m_=ln(zu),LR=De({},zu,{dataTransfer:0}),VR=ln(LR),MR=De({},wl,{relatedTarget:0}),gd=ln(MR),jR=De({},mo,{animationName:0,elapsedTime:0,pseudoElement:0}),UR=ln(jR),FR=De({},mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BR=ln(FR),$R=De({},mo,{data:0}),g_=ln($R),zR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WR[t])?!!e[t]:!1}function lm(){return qR}var KR=De({},wl,{key:function(t){if(t.key){var e=zR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lm,charCode:function(t){return t.type==="keypress"?Sc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GR=ln(KR),QR=De({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y_=ln(QR),YR=De({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lm}),JR=ln(YR),XR=De({},mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZR=ln(XR),eP=De({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tP=ln(eP),nP=[9,13,27,32],cm=gr&&"CompositionEvent"in window,Ta=null;gr&&"documentMode"in document&&(Ta=document.documentMode);var rP=gr&&"TextEvent"in window&&!Ta,FE=gr&&(!cm||Ta&&8<Ta&&11>=Ta),__=String.fromCharCode(32),v_=!1;function BE(t,e){switch(t){case"keyup":return nP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $E(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function iP(t,e){switch(t){case"compositionend":return $E(e);case"keypress":return e.which!==32?null:(v_=!0,__);case"textInput":return t=e.data,t===__&&v_?null:t;default:return null}}function sP(t,e){if(Ps)return t==="compositionend"||!cm&&BE(t,e)?(t=UE(),Ic=om=Kr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return FE&&e.locale!=="ko"?null:e.data;default:return null}}var oP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oP[t.type]:e==="textarea"}function zE(t,e,n,r){wE(r),e=tu(e,"onChange"),0<e.length&&(n=new am("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ia=null,Wa=null;function aP(t){eT(t,0)}function Hu(t){var e=bs(t);if(fE(e))return t}function lP(t,e){if(t==="change")return e}var HE=!1;if(gr){var yd;if(gr){var _d="oninput"in document;if(!_d){var E_=document.createElement("div");E_.setAttribute("oninput","return;"),_d=typeof E_.oninput=="function"}yd=_d}else yd=!1;HE=yd&&(!document.documentMode||9<document.documentMode)}function T_(){Ia&&(Ia.detachEvent("onpropertychange",WE),Wa=Ia=null)}function WE(t){if(t.propertyName==="value"&&Hu(Wa)){var e=[];zE(e,Wa,t,tm(t)),SE(aP,e)}}function cP(t,e,n){t==="focusin"?(T_(),Ia=e,Wa=n,Ia.attachEvent("onpropertychange",WE)):t==="focusout"&&T_()}function uP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Wa)}function hP(t,e){if(t==="click")return Hu(e)}function dP(t,e){if(t==="input"||t==="change")return Hu(e)}function fP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:fP;function qa(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mf.call(e,i)||!On(t[i],e[i]))return!1}return!0}function I_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function S_(t,e){var n=I_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=I_(n)}}function qE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function KE(){for(var t=window,e=Gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gc(t.document)}return e}function um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pP(t){var e=KE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qE(n.ownerDocument.documentElement,n)){if(r!==null&&um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=S_(n,s);var o=S_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mP=gr&&"documentMode"in document&&11>=document.documentMode,xs=null,Of=null,Sa=null,Lf=!1;function A_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lf||xs==null||xs!==Gc(r)||(r=xs,"selectionStart"in r&&um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&qa(Sa,r)||(Sa=r,r=tu(Of,"onSelect"),0<r.length&&(e=new am("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function Zl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},vd={},GE={};gr&&(GE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Wu(t){if(vd[t])return vd[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in GE)return vd[t]=e[n];return t}var QE=Wu("animationend"),YE=Wu("animationiteration"),JE=Wu("animationstart"),XE=Wu("transitionend"),ZE=new Map,k_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){ZE.set(t,e),as(e,[t])}for(var wd=0;wd<k_.length;wd++){var Ed=k_[wd],gP=Ed.toLowerCase(),yP=Ed[0].toUpperCase()+Ed.slice(1);Ei(gP,"on"+yP)}Ei(QE,"onAnimationEnd");Ei(YE,"onAnimationIteration");Ei(JE,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(XE,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_P=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function R_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gR(r,e,void 0,t),t.currentTarget=null}function eT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;R_(i,l,u),s=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;R_(i,l,u),s=c}}}if(Yc)throw t=Cf,Yc=!1,Cf=null,t}function ke(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(tT(e,t,2,!1),n.add(r))}function Td(t,e,n){var r=0;e&&(r|=4),tT(n,t,r,e)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[ec]){t[ec]=!0,lE.forEach(function(n){n!=="selectionchange"&&(_P.has(n)||Td(n,!1,t),Td(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ec]||(e[ec]=!0,Td("selectionchange",!1,e))}}function tT(t,e,n,r){switch(jE(e)){case 1:var i=NR;break;case 4:i=DR;break;default:i=sm}n=i.bind(null,e,n,t),i=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Id(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mi(l),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}l=l.parentNode}}r=r.return}SE(function(){var u=s,d=tm(n),f=[];e:{var m=ZE.get(t);if(m!==void 0){var w=am,x=t;switch(t){case"keypress":if(Sc(n)===0)break e;case"keydown":case"keyup":w=GR;break;case"focusin":x="focus",w=gd;break;case"focusout":x="blur",w=gd;break;case"beforeblur":case"afterblur":w=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=m_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=VR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=JR;break;case QE:case YE:case JE:w=UR;break;case XE:w=ZR;break;case"scroll":w=OR;break;case"wheel":w=tP;break;case"copy":case"cut":case"paste":w=BR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=y_}var R=(e&4)!==0,C=!R&&t==="scroll",E=R?m!==null?m+"Capture":null:m;R=[];for(var v=u,S;v!==null;){S=v;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,E!==null&&(O=Ba(v,E),O!=null&&R.push(Ga(v,O,S)))),C)break;v=v.return}0<R.length&&(m=new w(m,x,null,n,d),f.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Rf&&(x=n.relatedTarget||n.fromElement)&&(Mi(x)||x[yr]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=u,x=x?Mi(x):null,x!==null&&(C=ls(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=u),w!==x)){if(R=m_,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=y_,O="onPointerLeave",E="onPointerEnter",v="pointer"),C=w==null?m:bs(w),S=x==null?m:bs(x),m=new R(O,v+"leave",w,n,d),m.target=C,m.relatedTarget=S,O=null,Mi(d)===u&&(R=new R(E,v+"enter",x,n,d),R.target=S,R.relatedTarget=C,O=R),C=O,w&&x)t:{for(R=w,E=x,v=0,S=R;S;S=vs(S))v++;for(S=0,O=E;O;O=vs(O))S++;for(;0<v-S;)R=vs(R),v--;for(;0<S-v;)E=vs(E),S--;for(;v--;){if(R===E||E!==null&&R===E.alternate)break t;R=vs(R),E=vs(E)}R=null}else R=null;w!==null&&P_(f,m,w,R,!1),x!==null&&C!==null&&P_(f,C,x,R,!0)}}e:{if(m=u?bs(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var j=lP;else if(w_(m))if(HE)j=dP;else{j=uP;var F=cP}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=hP);if(j&&(j=j(t,u))){zE(f,j,n,d);break e}F&&F(t,m,u),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Tf(m,"number",m.value)}switch(F=u?bs(u):window,t){case"focusin":(w_(F)||F.contentEditable==="true")&&(xs=F,Of=u,Sa=null);break;case"focusout":Sa=Of=xs=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,A_(f,n,d);break;case"selectionchange":if(mP)break;case"keydown":case"keyup":A_(f,n,d)}var T;if(cm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ps?BE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(FE&&n.locale!=="ko"&&(Ps||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ps&&(T=UE()):(Kr=d,om="value"in Kr?Kr.value:Kr.textContent,Ps=!0)),F=tu(u,_),0<F.length&&(_=new g_(_,t,null,n,d),f.push({event:_,listeners:F}),T?_.data=T:(T=$E(n),T!==null&&(_.data=T)))),(T=rP?iP(t,n):sP(t,n))&&(u=tu(u,"onBeforeInput"),0<u.length&&(d=new g_("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}eT(f,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ba(t,n),s!=null&&r.unshift(Ga(t,s,i)),s=Ba(t,e),s!=null&&r.push(Ga(t,s,i))),t=t.return}return r}function vs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function P_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ba(n,s),c!=null&&o.unshift(Ga(n,c,l))):i||(c=Ba(n,s),c!=null&&o.push(Ga(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vP=/\r\n?/g,wP=/\u0000|\uFFFD/g;function x_(t){return(typeof t=="string"?t:""+t).replace(vP,`
`).replace(wP,"")}function tc(t,e,n){if(e=x_(e),x_(t)!==e&&n)throw Error(U(425))}function nu(){}var Vf=null,Mf=null;function jf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,EP=typeof clearTimeout=="function"?clearTimeout:void 0,C_=typeof Promise=="function"?Promise:void 0,TP=typeof queueMicrotask=="function"?queueMicrotask:typeof C_<"u"?function(t){return C_.resolve(null).then(t).catch(IP)}:Uf;function IP(t){setTimeout(function(){throw t})}function Sd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ha(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ha(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function b_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),qn="__reactFiber$"+go,Qa="__reactProps$"+go,yr="__reactContainer$"+go,Ff="__reactEvents$"+go,SP="__reactListeners$"+go,AP="__reactHandles$"+go;function Mi(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=b_(t);t!==null;){if(n=t[qn])return n;t=b_(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[qn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function qu(t){return t[Qa]||null}var Bf=[],Ns=-1;function Ti(t){return{current:t}}function Pe(t){0>Ns||(t.current=Bf[Ns],Bf[Ns]=null,Ns--)}function Ie(t,e){Ns++,Bf[Ns]=t.current,t.current=e}var fi={},At=Ti(fi),$t=Ti(!1),Ki=fi;function to(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function ru(){Pe($t),Pe(At)}function N_(t,e,n){if(At.current!==fi)throw Error(U(168));Ie(At,e),Ie($t,n)}function nT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,cR(t)||"Unknown",i));return De({},n,r)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Ki=At.current,Ie(At,t),Ie($t,$t.current),!0}function D_(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=nT(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,Pe($t),Pe(At),Ie(At,t)):Pe($t),Ie($t,n)}var lr=null,Ku=!1,Ad=!1;function rT(t){lr===null?lr=[t]:lr.push(t)}function kP(t){Ku=!0,rT(t)}function Ii(){if(!Ad&&lr!==null){Ad=!0;var t=0,e=ve;try{var n=lr;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,Ku=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),PE(nm,Ii),i}finally{ve=e,Ad=!1}}return null}var Ds=[],Os=0,su=null,ou=0,dn=[],fn=0,Gi=null,cr=1,ur="";function Oi(t,e){Ds[Os++]=ou,Ds[Os++]=su,su=t,ou=e}function iT(t,e,n){dn[fn++]=cr,dn[fn++]=ur,dn[fn++]=Gi,Gi=t;var r=cr;t=ur;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-bn(e)+i|n<<i|r,ur=s+t}else cr=1<<s|n<<i|r,ur=t}function hm(t){t.return!==null&&(Oi(t,1),iT(t,1,0))}function dm(t){for(;t===su;)su=Ds[--Os],Ds[Os]=null,ou=Ds[--Os],Ds[Os]=null;for(;t===Gi;)Gi=dn[--fn],dn[fn]=null,ur=dn[--fn],dn[fn]=null,cr=dn[--fn],dn[fn]=null}var sn=null,tn=null,xe=!1,Rn=null;function sT(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function O_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,sn=t,tn=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,sn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gi!==null?{id:cr,overflow:ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,sn=t,tn=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zf(t){if(xe){var e=tn;if(e){var n=e;if(!O_(t,e)){if($f(t))throw Error(U(418));e=ti(n.nextSibling);var r=sn;e&&O_(t,e)?sT(r,n):(t.flags=t.flags&-4097|2,xe=!1,sn=t)}}else{if($f(t))throw Error(U(418));t.flags=t.flags&-4097|2,xe=!1,sn=t}}}function L_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function nc(t){if(t!==sn)return!1;if(!xe)return L_(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jf(t.type,t.memoizedProps)),e&&(e=tn)){if($f(t))throw oT(),Error(U(418));for(;e;)sT(t,e),e=ti(e.nextSibling)}if(L_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=sn?ti(t.stateNode.nextSibling):null;return!0}function oT(){for(var t=tn;t;)t=ti(t.nextSibling)}function no(){tn=sn=null,xe=!1}function fm(t){Rn===null?Rn=[t]:Rn.push(t)}var RP=Rr.ReactCurrentBatchConfig;function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function rc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function V_(t){var e=t._init;return e(t._payload)}function aT(t){function e(E,v){if(t){var S=E.deletions;S===null?(E.deletions=[v],E.flags|=16):S.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=si(E,v),E.index=0,E.sibling=null,E}function s(E,v,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<v?(E.flags|=2,v):S):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,S,O){return v===null||v.tag!==6?(v=Nd(S,E.mode,O),v.return=E,v):(v=i(v,S),v.return=E,v)}function c(E,v,S,O){var j=S.type;return j===Rs?d(E,v,S.props.children,O,S.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&V_(j)===v.type)?(O=i(v,S.props),O.ref=Zo(E,v,S),O.return=E,O):(O=bc(S.type,S.key,S.props,null,E.mode,O),O.ref=Zo(E,v,S),O.return=E,O)}function u(E,v,S,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Dd(S,E.mode,O),v.return=E,v):(v=i(v,S.children||[]),v.return=E,v)}function d(E,v,S,O,j){return v===null||v.tag!==7?(v=zi(S,E.mode,O,j),v.return=E,v):(v=i(v,S),v.return=E,v)}function f(E,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nd(""+v,E.mode,S),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ql:return S=bc(v.type,v.key,v.props,null,E.mode,S),S.ref=Zo(E,null,v),S.return=E,S;case ks:return v=Dd(v,E.mode,S),v.return=E,v;case jr:var O=v._init;return f(E,O(v._payload),S)}if(ua(v)||Go(v))return v=zi(v,E.mode,S,null),v.return=E,v;rc(E,v)}return null}function m(E,v,S,O){var j=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(E,v,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ql:return S.key===j?c(E,v,S,O):null;case ks:return S.key===j?u(E,v,S,O):null;case jr:return j=S._init,m(E,v,j(S._payload),O)}if(ua(S)||Go(S))return j!==null?null:d(E,v,S,O,null);rc(E,S)}return null}function w(E,v,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(S)||null,l(v,E,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ql:return E=E.get(O.key===null?S:O.key)||null,c(v,E,O,j);case ks:return E=E.get(O.key===null?S:O.key)||null,u(v,E,O,j);case jr:var F=O._init;return w(E,v,S,F(O._payload),j)}if(ua(O)||Go(O))return E=E.get(S)||null,d(v,E,O,j,null);rc(v,O)}return null}function x(E,v,S,O){for(var j=null,F=null,T=v,_=v=0,I=null;T!==null&&_<S.length;_++){T.index>_?(I=T,T=null):I=T.sibling;var k=m(E,T,S[_],O);if(k===null){T===null&&(T=I);break}t&&T&&k.alternate===null&&e(E,T),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k,T=I}if(_===S.length)return n(E,T),xe&&Oi(E,_),j;if(T===null){for(;_<S.length;_++)T=f(E,S[_],O),T!==null&&(v=s(T,v,_),F===null?j=T:F.sibling=T,F=T);return xe&&Oi(E,_),j}for(T=r(E,T);_<S.length;_++)I=w(T,E,_,S[_],O),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?_:I.key),v=s(I,v,_),F===null?j=I:F.sibling=I,F=I);return t&&T.forEach(function(P){return e(E,P)}),xe&&Oi(E,_),j}function R(E,v,S,O){var j=Go(S);if(typeof j!="function")throw Error(U(150));if(S=j.call(S),S==null)throw Error(U(151));for(var F=j=null,T=v,_=v=0,I=null,k=S.next();T!==null&&!k.done;_++,k=S.next()){T.index>_?(I=T,T=null):I=T.sibling;var P=m(E,T,k.value,O);if(P===null){T===null&&(T=I);break}t&&T&&P.alternate===null&&e(E,T),v=s(P,v,_),F===null?j=P:F.sibling=P,F=P,T=I}if(k.done)return n(E,T),xe&&Oi(E,_),j;if(T===null){for(;!k.done;_++,k=S.next())k=f(E,k.value,O),k!==null&&(v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return xe&&Oi(E,_),j}for(T=r(E,T);!k.done;_++,k=S.next())k=w(T,E,_,k.value,O),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?_:k.key),v=s(k,v,_),F===null?j=k:F.sibling=k,F=k);return t&&T.forEach(function(b){return e(E,b)}),xe&&Oi(E,_),j}function C(E,v,S,O){if(typeof S=="object"&&S!==null&&S.type===Rs&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ql:e:{for(var j=S.key,F=v;F!==null;){if(F.key===j){if(j=S.type,j===Rs){if(F.tag===7){n(E,F.sibling),v=i(F,S.props.children),v.return=E,E=v;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&V_(j)===F.type){n(E,F.sibling),v=i(F,S.props),v.ref=Zo(E,F,S),v.return=E,E=v;break e}n(E,F);break}else e(E,F);F=F.sibling}S.type===Rs?(v=zi(S.props.children,E.mode,O,S.key),v.return=E,E=v):(O=bc(S.type,S.key,S.props,null,E.mode,O),O.ref=Zo(E,v,S),O.return=E,E=O)}return o(E);case ks:e:{for(F=S.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(E,v.sibling),v=i(v,S.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Dd(S,E.mode,O),v.return=E,E=v}return o(E);case jr:return F=S._init,C(E,v,F(S._payload),O)}if(ua(S))return x(E,v,S,O);if(Go(S))return R(E,v,S,O);rc(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,S),v.return=E,E=v):(n(E,v),v=Nd(S,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return C}var ro=aT(!0),lT=aT(!1),au=Ti(null),lu=null,Ls=null,pm=null;function mm(){pm=Ls=lu=null}function gm(t){var e=au.current;Pe(au),t._currentValue=e}function Hf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){lu=t,pm=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function _n(t){var e=t._currentValue;if(pm!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(lu===null)throw Error(U(308));Ls=t,lu.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var ji=null;function ym(t){ji===null?ji=[t]:ji.push(t)}function cT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ym(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function _m(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,ym(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function Ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}function M_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cu(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;o=0,d=u=c=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,R=l;switch(m=e,w=n,R.tag){case 1:if(x=R.payload,typeof x=="function"){f=x.call(w,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=R.payload,m=typeof x=="function"?x.call(w,f,m):x,m==null)break e;f=De({},f,m);break e;case 2:Ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=f):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Yi|=o,t.lanes=o,t.memoizedState=f}}function j_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Tl={},Jn=Ti(Tl),Ya=Ti(Tl),Ja=Ti(Tl);function Ui(t){if(t===Tl)throw Error(U(174));return t}function vm(t,e){switch(Ie(Ja,e),Ie(Ya,t),Ie(Jn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sf(e,t)}Pe(Jn),Ie(Jn,e)}function io(){Pe(Jn),Pe(Ya),Pe(Ja)}function hT(t){Ui(Ja.current);var e=Ui(Jn.current),n=Sf(e,t.type);e!==n&&(Ie(Ya,t),Ie(Jn,n))}function wm(t){Ya.current===t&&(Pe(Jn),Pe(Ya))}var be=Ti(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kd=[];function Em(){for(var t=0;t<kd.length;t++)kd[t]._workInProgressVersionPrimary=null;kd.length=0}var kc=Rr.ReactCurrentDispatcher,Rd=Rr.ReactCurrentBatchConfig,Qi=0,Ne=null,tt=null,ut=null,hu=!1,Aa=!1,Xa=0,PP=0;function vt(){throw Error(U(321))}function Tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Im(t,e,n,r,i,s){if(Qi=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?NP:DP,t=n(r,i),Aa){s=0;do{if(Aa=!1,Xa=0,25<=s)throw Error(U(301));s+=1,ut=tt=null,e.updateQueue=null,kc.current=OP,t=n(r,i)}while(Aa)}if(kc.current=du,e=tt!==null&&tt.next!==null,Qi=0,ut=tt=Ne=null,hu=!1,e)throw Error(U(300));return t}function Sm(){var t=Xa!==0;return Xa=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ne.memoizedState=ut=t:ut=ut.next=t,ut}function vn(){if(tt===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ut===null?Ne.memoizedState:ut.next;if(e!==null)ut=e,tt=t;else{if(t===null)throw Error(U(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ut===null?Ne.memoizedState=ut=t:ut=ut.next=t}return ut}function Za(t,e){return typeof e=="function"?e(t):e}function Pd(t){var e=vn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,c=null,u=s;do{var d=u.lane;if((Qi&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,o=r):c=c.next=f,Ne.lanes|=d,Yi|=d}u=u.next}while(u!==null&&u!==s);c===null?o=r:c.next=l,On(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Yi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xd(t){var e=vn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);On(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dT(){}function fT(t,e){var n=Ne,r=vn(),i=e(),s=!On(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,Am(gT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,el(9,mT.bind(null,n,r,i,e),void 0,null),ht===null)throw Error(U(349));Qi&30||pT(n,e,i)}return i}function pT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mT(t,e,n,r){e.value=n,e.getSnapshot=r,yT(e)&&_T(t)}function gT(t,e,n){return n(function(){yT(e)&&_T(t)})}function yT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function _T(t){var e=_r(t,1);e!==null&&Nn(e,t,1,-1)}function U_(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=bP.bind(null,Ne,t),[e.memoizedState,t]}function el(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vT(){return vn().memoizedState}function Rc(t,e,n,r){var i=Hn();Ne.flags|=t,i.memoizedState=el(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var i=vn();r=r===void 0?null:r;var s=void 0;if(tt!==null){var o=tt.memoizedState;if(s=o.destroy,r!==null&&Tm(r,o.deps)){i.memoizedState=el(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=el(1|e,n,s,r)}function F_(t,e){return Rc(8390656,8,t,e)}function Am(t,e){return Gu(2048,8,t,e)}function wT(t,e){return Gu(4,2,t,e)}function ET(t,e){return Gu(4,4,t,e)}function TT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function IT(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,TT.bind(null,e,t),n)}function km(){}function ST(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function AT(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function kT(t,e,n){return Qi&21?(On(n,e)||(n=bE(),Ne.lanes|=n,Yi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function xP(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Rd.transition;Rd.transition={};try{t(!1),e()}finally{ve=n,Rd.transition=r}}function RT(){return vn().memoizedState}function CP(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},PT(t))xT(e,n);else if(n=cT(t,e,n,r),n!==null){var i=Dt();Nn(n,t,r,i),CT(n,e,r)}}function bP(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(PT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,On(l,o)){var c=e.interleaved;c===null?(i.next=i,ym(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=cT(t,e,i,r),n!==null&&(i=Dt(),Nn(n,t,r,i),CT(n,e,r))}}function PT(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function xT(t,e){Aa=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function CT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rm(t,n)}}var du={readContext:_n,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},NP={readContext:_n,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:_n,useEffect:F_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4194308,4,TT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rc(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=CP.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:U_,useDebugValue:km,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=U_(!1),e=t[0];return t=xP.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=Hn();if(xe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ht===null)throw Error(U(349));Qi&30||pT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,F_(gT.bind(null,r,s,t),[t]),r.flags|=2048,el(9,mT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=ht.identifierPrefix;if(xe){var n=ur,r=cr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},DP={readContext:_n,useCallback:ST,useContext:_n,useEffect:Am,useImperativeHandle:IT,useInsertionEffect:wT,useLayoutEffect:ET,useMemo:AT,useReducer:Pd,useRef:vT,useState:function(){return Pd(Za)},useDebugValue:km,useDeferredValue:function(t){var e=vn();return kT(e,tt.memoizedState,t)},useTransition:function(){var t=Pd(Za)[0],e=vn().memoizedState;return[t,e]},useMutableSource:dT,useSyncExternalStore:fT,useId:RT,unstable_isNewReconciler:!1},OP={readContext:_n,useCallback:ST,useContext:_n,useEffect:Am,useImperativeHandle:IT,useInsertionEffect:wT,useLayoutEffect:ET,useMemo:AT,useReducer:xd,useRef:vT,useState:function(){return xd(Za)},useDebugValue:km,useDeferredValue:function(t){var e=vn();return tt===null?e.memoizedState=t:kT(e,tt.memoizedState,t)},useTransition:function(){var t=xd(Za)[0],e=vn().memoizedState;return[t,e]},useMutableSource:dT,useSyncExternalStore:fT,useId:RT,unstable_isNewReconciler:!1};function An(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qu={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=ii(t),s=fr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Nn(e,t,i,r),Ac(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=ii(t),s=fr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(Nn(e,t,i,r),Ac(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=ii(t),i=fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(Nn(e,t,r,n),Ac(e,t,r))}};function B_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qa(n,r)||!qa(i,s):!0}function bT(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=_n(s):(i=zt(e)?Ki:At.current,r=e.contextTypes,s=(r=r!=null)?to(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qu.enqueueReplaceState(e,e.state,null)}function qf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},_m(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=_n(s):(s=zt(e)?Ki:At.current,i.context=to(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qu.enqueueReplaceState(i,i.state,null),cu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",r=e;do n+=lR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LP=typeof WeakMap=="function"?WeakMap:Map;function NT(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,rp=r),Kf(t,e)},n}function DT(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function z_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QP.bind(null,t,e,n),e.then(t,t))}function H_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function W_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var VP=Rr.ReactCurrentOwner,Bt=!1;function Nt(t,e,n,r){e.child=t===null?lT(e,null,n,r):ro(e,t.child,n,r)}function q_(t,e,n,r,i){n=n.render;var s=e.ref;return $s(e,i),r=Im(t,e,n,r,s,i),n=Sm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(xe&&n&&hm(e),e.flags|=1,Nt(t,e,r,i),e.child)}function K_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Om(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,OT(t,e,s,r,i)):(t=bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(o,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function OT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qa(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,vr(t,e,i)}return Gf(t,e,n,r,i)}function LT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ms,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Ms,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Ms,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Ms,Zt),Zt|=r;return Nt(t,e,i,n),e.child}function VT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=zt(n)?Ki:At.current;return s=to(e,s),$s(e,i),n=Im(t,e,n,r,s,i),r=Sm(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(xe&&r&&hm(e),e.flags|=1,Nt(t,e,n,i),e.child)}function G_(t,e,n,r,i){if(zt(n)){var s=!0;iu(e)}else s=!1;if($s(e,i),e.stateNode===null)Pc(t,e),bT(e,n,r),qf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_n(u):(u=zt(n)?Ki:At.current,u=to(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&$_(e,o,r,u),Ur=!1;var m=e.memoizedState;o.state=m,cu(e,r,o,i),c=e.memoizedState,l!==r||m!==c||$t.current||Ur?(typeof d=="function"&&(Wf(e,n,d,r),c=e.memoizedState),(l=Ur||B_(e,n,l,r,m,c,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,uT(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:An(e.type,l),o.props=u,f=e.pendingProps,m=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=_n(c):(c=zt(n)?Ki:At.current,c=to(e,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==c)&&$_(e,o,r,c),Ur=!1,m=e.memoizedState,o.state=m,cu(e,r,o,i);var x=e.memoizedState;l!==f||m!==x||$t.current||Ur?(typeof w=="function"&&(Wf(e,n,w,r),x=e.memoizedState),(u=Ur||B_(e,n,u,r,m,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Qf(t,e,n,r,s,i)}function Qf(t,e,n,r,i,s){VT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&D_(e,n,!1),vr(t,e,s);r=e.stateNode,VP.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,l,s)):Nt(t,e,l,s),e.memoizedState=r.state,i&&D_(e,n,!0),e.child}function MT(t){var e=t.stateNode;e.pendingContext?N_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&N_(t,e.context,!1),vm(t,e.containerInfo)}function Q_(t,e,n,r,i){return no(),fm(i),e.flags|=256,Nt(t,e,n,r),e.child}var Yf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function jT(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(be,i&1),t===null)return zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xu(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Yf,t):Rm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return MP(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=si(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=si(l,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Yf,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rm(t,e){return e=Xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ic(t,e,n,r){return r!==null&&fm(r),ro(e,t.child,null,n),t=Rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cd(Error(U(422))),ic(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xu({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Yf,s);if(!(e.mode&1))return ic(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Cd(s,r,void 0),ic(t,e,o,r)}if(l=(o&t.childLanes)!==0,Bt||l){if(r=ht,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),Nn(r,t,i,-1))}return Dm(),r=Cd(Error(U(421))),ic(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=ti(i.nextSibling),sn=e,xe=!0,Rn=null,t!==null&&(dn[fn++]=cr,dn[fn++]=ur,dn[fn++]=Gi,cr=t.id,ur=t.overflow,Gi=e),e=Rm(e,r.children),e.flags|=4096,e)}function Y_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hf(t.return,e,n)}function bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function UT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Nt(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y_(t,n,e);else if(t.tag===19)Y_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jP(t,e,n){switch(e.tag){case 3:MT(e),no();break;case 5:hT(e);break;case 1:zt(e.type)&&iu(e);break;case 4:vm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(au,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?jT(t,e,n):(Ie(be,be.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Ie(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return UT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,LT(t,e,n)}return vr(t,e,n)}var FT,Xf,BT,$T;FT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};BT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(Jn.current);var s=null;switch(n){case"input":i=wf(t,i),r=wf(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=If(t,i),r=If(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}Af(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ke("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$T=function(t,e,n,r){n!==r&&(e.flags|=4)};function ea(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UP(t,e,n){var r=e.pendingProps;switch(dm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(e),null;case 1:return zt(e.type)&&ru(),wt(e),null;case 3:return r=e.stateNode,io(),Pe($t),Pe(At),Em(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(op(Rn),Rn=null))),Xf(t,e),wt(e),null;case 5:wm(e);var i=Ui(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)BT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return wt(e),null}if(t=Ui(Jn.current),nc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qn]=e,r[Qa]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<da.length;i++)ke(da[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":s_(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":a_(r,s),ke("invalid",r)}Af(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tc(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tc(r.textContent,l,t),i=["children",""+l]):Ua.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Kl(r),o_(r,s,!0);break;case"textarea":Kl(r),l_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[Qa]=r,FT(t,e,!1,!1),e.stateNode=t;e:{switch(o=kf(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<da.length;i++)ke(da[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":s_(t,r),i=wf(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),ke("invalid",t);break;case"textarea":a_(t,r),i=If(t,r),ke("invalid",t);break;default:i=r}Af(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?vE(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&yE(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fa(t,c):typeof c=="number"&&Fa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ke("scroll",t):c!=null&&Jp(t,s,c,o))}switch(n){case"input":Kl(t),o_(t,r,!1);break;case"textarea":Kl(t),l_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?js(t,!!r.multiple,s,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return wt(e),null;case 6:if(t&&e.stateNode!=null)$T(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Ui(Ja.current),Ui(Jn.current),nc(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(s=r.nodeValue!==n)&&(t=sn,t!==null))switch(t.tag){case 3:tc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return wt(e),null;case 13:if(Pe(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&tn!==null&&e.mode&1&&!(e.flags&128))oT(),no(),e.flags|=98560,s=!1;else if(s=nc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[qn]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;wt(e),s=!1}else Rn!==null&&(op(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?nt===0&&(nt=3):Dm())),e.updateQueue!==null&&(e.flags|=4),wt(e),null);case 4:return io(),Xf(t,e),t===null&&Ka(e.stateNode.containerInfo),wt(e),null;case 10:return gm(e.type._context),wt(e),null;case 17:return zt(e.type)&&ru(),wt(e),null;case 19:if(Pe(be),s=e.memoizedState,s===null)return wt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ea(s,!1);else{if(nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,ea(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>oo&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return wt(e),null}else 2*qe()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=be.current,Ie(be,r?n&1|2:n&1),e):(wt(e),null);case 22:case 23:return Nm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(wt(e),e.subtreeFlags&6&&(e.flags|=8192)):wt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function FP(t,e){switch(dm(e),e.tag){case 1:return zt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Pe($t),Pe(At),Em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wm(e),null;case 13:if(Pe(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(be),null;case 4:return io(),null;case 10:return gm(e.type._context),null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var sc=!1,It=!1,BP=typeof WeakSet=="function"?WeakSet:Set,K=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function Zf(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var J_=!1;function $P(t,e){if(Vf=Zc,t=KE(),um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(c=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===t)break t;if(m===n&&++u===i&&(l=o),m===s&&++d===r&&(c=o),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},Zc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var R=x.memoizedProps,C=x.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?R:An(e.type,R),C);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ue(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return x=J_,J_=!1,x}function ka(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Zf(e,n,s)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zT(t){var e=t.alternate;e!==null&&(t.alternate=null,zT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Qa],delete e[Ff],delete e[SP],delete e[AP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HT(t){return t.tag===5||t.tag===3||t.tag===4}function X_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}function np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}var ft=null,kn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)WT(t,e,n),n=n.sibling}function WT(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:It||Vs(n,e);case 6:var r=ft,i=kn;ft=null,Vr(t,e,n),ft=r,kn=i,ft!==null&&(kn?(t=ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ft.removeChild(n.stateNode));break;case 18:ft!==null&&(kn?(t=ft,n=n.stateNode,t.nodeType===8?Sd(t.parentNode,n):t.nodeType===1&&Sd(t,n),Ha(t)):Sd(ft,n.stateNode));break;case 4:r=ft,i=kn,ft=n.stateNode.containerInfo,kn=!0,Vr(t,e,n),ft=r,kn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Zf(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!It&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ue(n,e,l)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Vr(t,e,n),It=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function Z_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BP),e.forEach(function(r){var i=JP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ft=l.stateNode,kn=!1;break e;case 3:ft=l.stateNode.containerInfo,kn=!0;break e;case 4:ft=l.stateNode.containerInfo,kn=!0;break e}l=l.return}if(ft===null)throw Error(U(160));WT(s,o,i),ft=null,kn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qT(e,t),e=e.sibling}function qT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),$n(t),r&4){try{ka(3,t,t.return),Yu(3,t)}catch(R){Ue(t,t.return,R)}try{ka(5,t,t.return)}catch(R){Ue(t,t.return,R)}}break;case 1:In(e,t),$n(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(In(e,t),$n(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Fa(i,"")}catch(R){Ue(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pE(i,s),kf(l,o);var u=kf(l,s);for(o=0;o<c.length;o+=2){var d=c[o],f=c[o+1];d==="style"?vE(i,f):d==="dangerouslySetInnerHTML"?yE(i,f):d==="children"?Fa(i,f):Jp(i,d,f,u)}switch(l){case"input":Ef(i,s);break;case"textarea":mE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?js(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?js(i,!!s.multiple,s.defaultValue,!0):js(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qa]=s}catch(R){Ue(t,t.return,R)}}break;case 6:if(In(e,t),$n(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Ue(t,t.return,R)}}break;case 3:if(In(e,t),$n(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(R){Ue(t,t.return,R)}break;case 4:In(e,t),$n(t);break;case 13:In(e,t),$n(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cm=qe())),r&4&&Z_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(It=(u=It)||d,In(e,t),It=u):In(e,t),$n(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(K=t,d=t.child;d!==null;){for(f=K=d;K!==null;){switch(m=K,w=m.child,m.tag){case 0:case 11:case 14:case 15:ka(4,m,m.return);break;case 1:Vs(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(R){Ue(r,n,R)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){tv(f);continue}}w!==null?(w.return=m,K=w):tv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=_E("display",o))}catch(R){Ue(t,t.return,R)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(R){Ue(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),$n(t),r&4&&Z_(t);break;case 21:break;default:In(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fa(i,""),r.flags&=-33);var s=X_(t);np(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=X_(t);tp(t,l,o);break;default:throw Error(U(161))}}catch(c){Ue(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zP(t,e,n){K=t,KT(t)}function KT(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sc;if(!o){var l=i.alternate,c=l!==null&&l.memoizedState!==null||It;l=sc;var u=It;if(sc=o,(It=c)&&!u)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null?nv(i):c!==null?(c.return=o,K=c):nv(i);for(;s!==null;)K=s,KT(s),s=s.sibling;K=i,sc=l,It=u}ev(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):ev(t)}}function ev(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&j_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}j_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}It||e.flags&512&&ep(e)}catch(m){Ue(e,e.return,m)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function tv(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function nv(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(c){Ue(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ue(e,i,c)}}var s=e.return;try{ep(e)}catch(c){Ue(e,s,c)}break;case 5:var o=e.return;try{ep(e)}catch(c){Ue(e,o,c)}}}catch(c){Ue(e,e.return,c)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var HP=Math.ceil,fu=Rr.ReactCurrentDispatcher,Pm=Rr.ReactCurrentOwner,gn=Rr.ReactCurrentBatchConfig,me=0,ht=null,Ye=null,gt=0,Zt=0,Ms=Ti(0),nt=0,tl=null,Yi=0,Ju=0,xm=0,Ra=null,Ut=null,Cm=0,oo=1/0,or=null,pu=!1,rp=null,ri=null,oc=!1,Gr=null,mu=0,Pa=0,ip=null,xc=-1,Cc=0;function Dt(){return me&6?qe():xc!==-1?xc:xc=qe()}function ii(t){return t.mode&1?me&2&&gt!==0?gt&-gt:RP.transition!==null?(Cc===0&&(Cc=bE()),Cc):(t=ve,t!==0||(t=window.event,t=t===void 0?16:jE(t.type)),t):1}function Nn(t,e,n,r){if(50<Pa)throw Pa=0,ip=null,Error(U(185));vl(t,n,r),(!(me&2)||t!==ht)&&(t===ht&&(!(me&2)&&(Ju|=n),nt===4&&Br(t,gt)),Ht(t,r),n===1&&me===0&&!(e.mode&1)&&(oo=qe()+500,Ku&&Ii()))}function Ht(t,e){var n=t.callbackNode;RR(t,e);var r=Xc(t,t===ht?gt:0);if(r===0)n!==null&&h_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&h_(n),e===1)t.tag===0?kP(rv.bind(null,t)):rT(rv.bind(null,t)),TP(function(){!(me&6)&&Ii()}),n=null;else{switch(NE(r)){case 1:n=nm;break;case 4:n=xE;break;case 16:n=Jc;break;case 536870912:n=CE;break;default:n=Jc}n=tI(n,GT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function GT(t,e){if(xc=-1,Cc=0,me&6)throw Error(U(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=Xc(t,t===ht?gt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var i=me;me|=2;var s=YT();(ht!==t||gt!==e)&&(or=null,oo=qe()+500,$i(t,e));do try{KP();break}catch(l){QT(t,l)}while(1);mm(),fu.current=s,me=i,Ye!==null?e=0:(ht=null,gt=0,e=nt)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=sp(t,i))),e===1)throw n=tl,$i(t,0),Br(t,r),Ht(t,qe()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!WP(i)&&(e=gu(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=sp(t,s))),e===1))throw n=tl,$i(t,0),Br(t,r),Ht(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Li(t,Ut,or);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Cm+500-qe(),10<e)){if(Xc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(Li.bind(null,t,Ut,or),e);break}Li(t,Ut,or);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HP(r/1960))-r,10<r){t.timeoutHandle=Uf(Li.bind(null,t,Ut,or),r);break}Li(t,Ut,or);break;case 5:Li(t,Ut,or);break;default:throw Error(U(329))}}}return Ht(t,qe()),t.callbackNode===n?GT.bind(null,t):null}function sp(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&($i(t,e).flags|=256),t=gu(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&op(e)),t}function op(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function WP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!On(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~xm,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function rv(t){if(me&6)throw Error(U(327));zs();var e=Xc(t,0);if(!(e&1))return Ht(t,qe()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=sp(t,r))}if(n===1)throw n=tl,$i(t,0),Br(t,e),Ht(t,qe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Li(t,Ut,or),Ht(t,qe()),null}function bm(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(oo=qe()+500,Ku&&Ii())}}function Ji(t){Gr!==null&&Gr.tag===0&&!(me&6)&&zs();var e=me;me|=1;var n=gn.transition,r=ve;try{if(gn.transition=null,ve=1,t)return t()}finally{ve=r,gn.transition=n,me=e,!(me&6)&&Ii()}}function Nm(){Zt=Ms.current,Pe(Ms)}function $i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,EP(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(dm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:io(),Pe($t),Pe(At),Em();break;case 5:wm(r);break;case 4:io();break;case 13:Pe(be);break;case 19:Pe(be);break;case 10:gm(r.type._context);break;case 22:case 23:Nm()}n=n.return}if(ht=t,Ye=t=si(t.current,null),gt=Zt=e,nt=0,tl=null,xm=Ju=Yi=0,Ut=Ra=null,ji!==null){for(e=0;e<ji.length;e++)if(n=ji[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ji=null}return t}function QT(t,e){do{var n=Ye;try{if(mm(),kc.current=du,hu){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hu=!1}if(Qi=0,ut=tt=Ne=null,Aa=!1,Xa=0,Pm.current=null,n===null||n.return===null){nt=1,tl=e,Ye=null;break}e:{var s=t,o=n.return,l=n,c=e;if(e=gt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=H_(o);if(w!==null){w.flags&=-257,W_(w,o,l,s,e),w.mode&1&&z_(s,u,e),e=w,c=u;var x=e.updateQueue;if(x===null){var R=new Set;R.add(c),e.updateQueue=R}else x.add(c);break e}else{if(!(e&1)){z_(s,u,e),Dm();break e}c=Error(U(426))}}else if(xe&&l.mode&1){var C=H_(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),W_(C,o,l,s,e),fm(so(c,l));break e}}s=c=so(c,l),nt!==4&&(nt=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=NT(s,c,e);M_(s,E);break e;case 1:l=c;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(ri===null||!ri.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=DT(s,l,e);M_(s,O);break e}}s=s.return}while(s!==null)}XT(n)}catch(j){e=j,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(1)}function YT(){var t=fu.current;return fu.current=du,t===null?du:t}function Dm(){(nt===0||nt===3||nt===2)&&(nt=4),ht===null||!(Yi&268435455)&&!(Ju&268435455)||Br(ht,gt)}function gu(t,e){var n=me;me|=2;var r=YT();(ht!==t||gt!==e)&&(or=null,$i(t,e));do try{qP();break}catch(i){QT(t,i)}while(1);if(mm(),me=n,fu.current=r,Ye!==null)throw Error(U(261));return ht=null,gt=0,nt}function qP(){for(;Ye!==null;)JT(Ye)}function KP(){for(;Ye!==null&&!_R();)JT(Ye)}function JT(t){var e=eI(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?XT(t):Ye=e,Pm.current=null}function XT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FP(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ye=null;return}}else if(n=UP(n,e,Zt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);nt===0&&(nt=5)}function Li(t,e,n){var r=ve,i=gn.transition;try{gn.transition=null,ve=1,GP(t,e,n,r)}finally{gn.transition=i,ve=r}return null}function GP(t,e,n,r){do zs();while(Gr!==null);if(me&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PR(t,s),t===ht&&(Ye=ht=null,gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oc||(oc=!0,tI(Jc,function(){return zs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=ve;ve=1;var l=me;me|=4,Pm.current=null,$P(t,n),qT(n,t),pP(Mf),Zc=!!Vf,Mf=Vf=null,t.current=n,zP(n),vR(),me=l,ve=o,gn.transition=s}else t.current=n;if(oc&&(oc=!1,Gr=t,mu=i),s=t.pendingLanes,s===0&&(ri=null),TR(n.stateNode),Ht(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pu)throw pu=!1,t=rp,rp=null,t;return mu&1&&t.tag!==0&&zs(),s=t.pendingLanes,s&1?t===ip?Pa++:(Pa=0,ip=t):Pa=0,Ii(),null}function zs(){if(Gr!==null){var t=NE(mu),e=gn.transition,n=ve;try{if(gn.transition=null,ve=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,mu=0,me&6)throw Error(U(331));var i=me;for(me|=4,K=t.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:ka(8,d,s)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var m=d.sibling,w=d.return;if(zT(d),d===u){K=null;break}if(m!==null){m.return=w,K=m;break}K=w}}}var x=s.alternate;if(x!==null){var R=x.child;if(R!==null){x.child=null;do{var C=R.sibling;R.sibling=null,R=C}while(R!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,K=E;break e}K=s.return}}var v=t.current;for(K=v;K!==null;){o=K;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,K=S;else e:for(o=v;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yu(9,l)}}catch(j){Ue(l,l.return,j)}if(l===o){K=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,K=O;break e}K=l.return}}if(me=i,Ii(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{ve=n,gn.transition=e}}return!1}function iv(t,e,n){e=so(n,e),e=NT(t,e,1),t=ni(t,e,1),e=Dt(),t!==null&&(vl(t,1,e),Ht(t,e))}function Ue(t,e,n){if(t.tag===3)iv(t,t,n);else for(;e!==null;){if(e.tag===3){iv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=so(n,t),t=DT(e,t,1),e=ni(e,t,1),t=Dt(),e!==null&&(vl(e,1,t),Ht(e,t));break}}e=e.return}}function QP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(gt&n)===n&&(nt===4||nt===3&&(gt&130023424)===gt&&500>qe()-Cm?$i(t,0):xm|=n),Ht(t,e)}function ZT(t,e){e===0&&(t.mode&1?(e=Yl,Yl<<=1,!(Yl&130023424)&&(Yl=4194304)):e=1);var n=Dt();t=_r(t,e),t!==null&&(vl(t,e,n),Ht(t,n))}function YP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ZT(t,n)}function JP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),ZT(t,n)}var eI;eI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,jP(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,xe&&e.flags&1048576&&iT(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pc(t,e),t=e.pendingProps;var i=to(e,At.current);$s(e,n),i=Im(null,e,r,t,i,n);var s=Sm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(s=!0,iu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_m(e),i.updater=Qu,e.stateNode=i,i._reactInternals=e,qf(e,r,t,n),e=Qf(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&hm(e),Nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZP(r),t=An(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=G_(null,e,r,t,n);break e;case 11:e=q_(null,e,r,t,n);break e;case 14:e=K_(null,e,r,An(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),G_(t,e,r,i,n);case 3:e:{if(MT(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,uT(t,e),cu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(U(423)),e),e=Q_(t,e,r,n,i);break e}else if(r!==i){i=so(Error(U(424)),e),e=Q_(t,e,r,n,i);break e}else for(tn=ti(e.stateNode.containerInfo.firstChild),sn=e,xe=!0,Rn=null,n=lT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=vr(t,e,n);break e}Nt(t,e,r,n)}e=e.child}return e;case 5:return hT(e),t===null&&zf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jf(r,i)?o=null:s!==null&&jf(r,s)&&(e.flags|=32),VT(t,e),Nt(t,e,o,n),e.child;case 6:return t===null&&zf(e),null;case 13:return jT(t,e,n);case 4:return vm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):Nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),q_(t,e,r,i,n);case 7:return Nt(t,e,e.pendingProps,n),e.child;case 8:return Nt(t,e,e.pendingProps.children,n),e.child;case 12:return Nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(au,r._currentValue),r._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===i.children&&!$t.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=fr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Hf(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Hf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=_n(i),r=r(i),e.flags|=1,Nt(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),K_(t,e,r,i,n);case 15:return OT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Pc(t,e),e.tag=1,zt(r)?(t=!0,iu(e)):t=!1,$s(e,n),bT(e,r,i),qf(e,r,i,n),Qf(null,e,r,!0,t,n);case 19:return UT(t,e,n);case 22:return LT(t,e,n)}throw Error(U(156,e.tag))};function tI(t,e){return PE(t,e)}function XP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new XP(t,e,n,r)}function Om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZP(t){if(typeof t=="function")return Om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zp)return 11;if(t===em)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Om(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return zi(n.children,i,s,e);case Xp:o=8,i|=8;break;case gf:return t=mn(12,n,e,i|2),t.elementType=gf,t.lanes=s,t;case yf:return t=mn(13,n,e,i),t.elementType=yf,t.lanes=s,t;case _f:return t=mn(19,n,e,i),t.elementType=_f,t.lanes=s,t;case hE:return Xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cE:o=10;break e;case uE:o=9;break e;case Zp:o=11;break e;case em:o=14;break e;case jr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Xu(t,e,n,r){return t=mn(22,t,r,e),t.elementType=hE,t.lanes=n,t.stateNode={isHidden:!1},t}function Nd(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Dd(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ex(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lm(t,e,n,r,i,s,o,l,c){return t=new ex(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_m(s),t}function tx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nI(t){if(!t)return fi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(zt(n))return nT(t,n,e)}return e}function rI(t,e,n,r,i,s,o,l,c){return t=Lm(n,r,!0,t,i,s,o,l,c),t.context=nI(null),n=t.current,r=Dt(),i=ii(n),s=fr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,vl(t,i,r),Ht(t,r),t}function Zu(t,e,n,r){var i=e.current,s=Dt(),o=ii(i);return n=nI(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(Nn(t,i,o,s),Ac(t,i,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vm(t,e){sv(t,e),(t=t.alternate)&&sv(t,e)}function nx(){return null}var iI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mm(t){this._internalRoot=t}eh.prototype.render=Mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Zu(t,e,null,null)};eh.prototype.unmount=Mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){Zu(null,t,null,null)}),e[yr]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=LE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fr.length&&e!==0&&e<Fr[n].priority;n++);Fr.splice(n,0,t),n===0&&ME(t)}};function jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ov(){}function rx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=yu(o);s.call(u)}}var o=rI(e,r,t,0,null,!1,!1,"",ov);return t._reactRootContainer=o,t[yr]=o.current,Ka(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=yu(c);l.call(u)}}var c=Lm(t,0,!1,null,null,!1,!1,"",ov);return t._reactRootContainer=c,t[yr]=c.current,Ka(t.nodeType===8?t.parentNode:t),Ji(function(){Zu(e,c,n,r)}),c}function nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var c=yu(o);l.call(c)}}Zu(e,o,t,i)}else o=rx(n,e,t,i,r);return yu(o)}DE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(rm(e,n|1),Ht(e,qe()),!(me&6)&&(oo=qe()+500,Ii()))}break;case 13:Ji(function(){var r=_r(t,1);if(r!==null){var i=Dt();Nn(r,t,1,i)}}),Vm(t,1)}};im=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Dt();Nn(e,t,134217728,n)}Vm(t,134217728)}};OE=function(t){if(t.tag===13){var e=ii(t),n=_r(t,e);if(n!==null){var r=Dt();Nn(n,t,e,r)}Vm(t,e)}};LE=function(){return ve};VE=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Pf=function(t,e,n){switch(e){case"input":if(Ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qu(r);if(!i)throw Error(U(90));fE(r),Ef(r,i)}}}break;case"textarea":mE(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};TE=bm;IE=Ji;var ix={usingClientEntryPoint:!1,Events:[El,bs,qu,wE,EE,bm]},ta={findFiberByHostInstance:Mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sx={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=kE(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{$u=ac.inject(sx),Yn=ac}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jm(e))throw Error(U(200));return tx(t,e,null,n)};an.createRoot=function(t,e){if(!jm(t))throw Error(U(299));var n=!1,r="",i=iI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lm(t,1,!1,null,null,n,!1,r,i),t[yr]=e.current,Ka(t.nodeType===8?t.parentNode:t),new Mm(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=kE(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return Ji(t)};an.hydrate=function(t,e,n){if(!th(e))throw Error(U(200));return nh(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!jm(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rI(e,null,t,1,n??null,i,!1,s,o),t[yr]=e.current,Ka(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eh(e)};an.render=function(t,e,n){if(!th(e))throw Error(U(200));return nh(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!th(t))throw Error(U(40));return t._reactRootContainer?(Ji(function(){nh(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};an.unstable_batchedUpdates=bm;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!th(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return nh(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function sI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sI)}catch(t){console.error(t)}}sI(),sE.exports=an;var ox=sE.exports,av=ox;pf.createRoot=av.createRoot,pf.hydrateRoot=av.hydrateRoot;const ax="modulepreload",lx=function(t){return"/"+t},lv={},se=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=lx(s),s in lv)return;lv[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const f=i[d];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":ax,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nl(){return nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nl.apply(this,arguments)}var Qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qr||(Qr={}));const cv="popstate";function cx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ap("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_u(i)}return hx(e,n,null,t)}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Um(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ux(){return Math.random().toString(36).substr(2,8)}function uv(t,e){return{usr:t.state,key:t.key,idx:e}}function ap(t,e,n,r){return n===void 0&&(n=null),nl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:n,key:e&&e.key||r||ux()})}function _u(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qr.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(nl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=Qr.Pop;let C=d(),E=C==null?null:C-u;u=C,c&&c({action:l,location:R.location,delta:E})}function m(C,E){l=Qr.Push;let v=ap(R.location,C,E);n&&n(v,C),u=d()+1;let S=uv(v,u),O=R.createHref(v);try{o.pushState(S,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&c&&c({action:l,location:R.location,delta:1})}function w(C,E){l=Qr.Replace;let v=ap(R.location,C,E);n&&n(v,C),u=d();let S=uv(v,u),O=R.createHref(v);o.replaceState(S,"",O),s&&c&&c({action:l,location:R.location,delta:0})}function x(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:_u(C);return v=v.replace(/ $/,"%20"),Ke(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let R={get action(){return l},get location(){return t(i,o)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(cv,f),c=C,()=>{i.removeEventListener(cv,f),c=null}},createHref(C){return e(i,C)},createURL:x,encodeLocation(C){let E=x(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:w,go(C){return o.go(C)}};return R}var hv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hv||(hv={}));function dx(t,e,n){return n===void 0&&(n="/"),fx(t,e,n,!1)}function fx(t,e,n,r){let i=typeof e=="string"?yo(e):e,s=Fm(i.pathname||"/",n);if(s==null)return null;let o=oI(t);px(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let u=Ax(s);l=Ix(o[c],u,r)}return l}function oI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(Ke(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=oi([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),oI(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Ex(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let c of aI(s.path))i(s,o,c)}),e}function aI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=aI(r.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function px(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Tx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mx=/^:[\w-]+$/,gx=3,yx=2,_x=1,vx=10,wx=-2,dv=t=>t==="*";function Ex(t,e){let n=t.split("/"),r=n.length;return n.some(dv)&&(r+=wx),e&&(r+=yx),n.filter(i=>!dv(i)).reduce((i,s)=>i+(mx.test(s)?gx:s===""?_x:vx),r)}function Tx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ix(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=fv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),m=c.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=fv({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:oi([s,f.pathname]),pathnameBase:Cx(oi([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=oi([s,f.pathnameBase]))}return o}function fv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Sx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let R=l[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const x=l[f];return w&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Sx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Um(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Ax(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Um(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Fm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const kx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rx=t=>kx.test(t);function Px(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yo(t):t,s;if(n)if(Rx(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Um(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=pv(n.substring(1),"/"):s=pv(n,e)}else s=e;return{pathname:s,search:bx(r),hash:Nx(i)}}function pv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Od(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Bm(t,e){let n=xx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $m(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yo(t):(i=nl({},t),Ke(!i.pathname||!i.pathname.includes("?"),Od("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),Od("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),Od("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let c=Px(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),Cx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Nx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Dx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lI=["post","put","patch","delete"];new Set(lI);const Ox=["get",...lI];new Set(Ox);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rl.apply(this,arguments)}const zm=D.createContext(null),Lx=D.createContext(null),Si=D.createContext(null),rh=D.createContext(null),rr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),cI=D.createContext(null);function Vx(t,e){let{relative:n}=e===void 0?{}:e;_o()||Ke(!1);let{basename:r,navigator:i}=D.useContext(Si),{hash:s,pathname:o,search:l}=hI(t,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:oi([r,o])),i.createHref({pathname:c,search:l,hash:s})}function _o(){return D.useContext(rh)!=null}function vo(){return _o()||Ke(!1),D.useContext(rh).location}function uI(t){D.useContext(Si).static||D.useLayoutEffect(t)}function Hm(){let{isDataRoute:t}=D.useContext(rr);return t?Jx():Mx()}function Mx(){_o()||Ke(!1);let t=D.useContext(zm),{basename:e,future:n,navigator:r}=D.useContext(Si),{matches:i}=D.useContext(rr),{pathname:s}=vo(),o=JSON.stringify(Bm(i,n.v7_relativeSplatPath)),l=D.useRef(!1);return uI(()=>{l.current=!0}),D.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=$m(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:oi([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const jx=D.createContext(null);function Ux(t){let e=D.useContext(rr).outlet;return e&&D.createElement(jx.Provider,{value:t},e)}function p6(){let{matches:t}=D.useContext(rr),e=t[t.length-1];return e?e.params:{}}function hI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(Si),{matches:i}=D.useContext(rr),{pathname:s}=vo(),o=JSON.stringify(Bm(i,r.v7_relativeSplatPath));return D.useMemo(()=>$m(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Fx(t,e){return Bx(t,e)}function Bx(t,e,n,r){_o()||Ke(!1);let{navigator:i}=D.useContext(Si),{matches:s}=D.useContext(rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=vo(),d;if(e){var f;let C=typeof e=="string"?yo(e):e;c==="/"||(f=C.pathname)!=null&&f.startsWith(c)||Ke(!1),d=C}else d=u;let m=d.pathname||"/",w=m;if(c!=="/"){let C=c.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=dx(t,{pathname:w}),R=qx(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:oi([c,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?c:oi([c,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&R?D.createElement(rh.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Qr.Pop}},R):R}function $x(){let t=Yx(),e=Dx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,s)}const zx=D.createElement($x,null);class Hx extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(rr.Provider,{value:this.props.routeContext},D.createElement(cI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Wx(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(zm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(rr.Provider,{value:e},r)}function qx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||Ke(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:w}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let w,x=!1,R=null,C=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,R=f.route.errorElement||zx,c&&(u<0&&m===0?(Xx("route-fallback",!1),x=!0,C=null):u===m&&(x=!0,C=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let S;return w?S=R:x?S=C:f.route.Component?S=D.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,D.createElement(Wx,{match:f,routeContext:{outlet:d,matches:E,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?D.createElement(Hx,{location:n.location,revalidation:n.revalidation,component:R,error:w,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var dI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dI||{}),vu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vu||{});function Kx(t){let e=D.useContext(zm);return e||Ke(!1),e}function Gx(t){let e=D.useContext(Lx);return e||Ke(!1),e}function Qx(t){let e=D.useContext(rr);return e||Ke(!1),e}function fI(t){let e=Qx(),n=e.matches[e.matches.length-1];return n.route.id||Ke(!1),n.route.id}function Yx(){var t;let e=D.useContext(cI),n=Gx(vu.UseRouteError),r=fI(vu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Jx(){let{router:t}=Kx(dI.UseNavigateStable),e=fI(vu.UseNavigateStable),n=D.useRef(!1);return uI(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,rl({fromRouteId:e},s)))},[t,e])}const mv={};function Xx(t,e,n){!e&&!mv[t]&&(mv[t]=!0)}function Zx(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function xa(t){let{to:e,replace:n,state:r,relative:i}=t;_o()||Ke(!1);let{future:s,static:o}=D.useContext(Si),{matches:l}=D.useContext(rr),{pathname:c}=vo(),u=Hm(),d=$m(e,Bm(l,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return D.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Wm(t){return Ux(t.context)}function J(t){Ke(!1)}function eC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qr.Pop,navigator:s,static:o=!1,future:l}=t;_o()&&Ke(!1);let c=e.replace(/^\/*/,"/"),u=D.useMemo(()=>({basename:c,navigator:s,static:o,future:rl({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof r=="string"&&(r=yo(r));let{pathname:d="/",search:f="",hash:m="",state:w=null,key:x="default"}=r,R=D.useMemo(()=>{let C=Fm(d,c);return C==null?null:{location:{pathname:C,search:f,hash:m,state:w,key:x},navigationType:i}},[c,d,f,m,w,x,i]);return R==null?null:D.createElement(Si.Provider,{value:u},D.createElement(rh.Provider,{children:n,value:R}))}function tC(t){let{children:e,location:n}=t;return Fx(lp(e),n)}new Promise(()=>{});function lp(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,lp(r.props.children,s));return}r.type!==J&&Ke(!1),!r.props.index||!r.props.children||Ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cp(){return cp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},cp.apply(this,arguments)}function nC(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function iC(t,e){return t.button===0&&(!e||e==="_self")&&!rC(t)}const sC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oC="6";try{window.__reactRouterVersion=oC}catch{}const aC="startTransition",gv=Qk[aC];function lC(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=cx({window:i,v5Compat:!0}));let o=s.current,[l,c]=D.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=D.useCallback(f=>{u&&gv?gv(()=>c(f)):c(f)},[c,u]);return D.useLayoutEffect(()=>o.listen(d),[o,d]),D.useEffect(()=>Zx(r),[r]),D.createElement(eC,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const cC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xt=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=e,m=nC(e,sC),{basename:w}=D.useContext(Si),x,R=!1;if(typeof u=="string"&&uC.test(u)&&(x=u,cC))try{let S=new URL(window.location.href),O=u.startsWith("//")?new URL(S.protocol+u):new URL(u),j=Fm(O.pathname,w);O.origin===S.origin&&j!=null?u=j+O.search+O.hash:R=!0}catch{}let C=Vx(u,{relative:i}),E=hC(u,{replace:o,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:f});function v(S){r&&r(S),S.defaultPrevented||E(S)}return D.createElement("a",cp({},m,{href:x||C,onClick:R||s?r:v,ref:n,target:c}))});var yv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yv||(yv={}));var _v;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_v||(_v={}));function hC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=Hm(),u=vo(),d=hI(t,{relative:o});return D.useCallback(f=>{if(iC(f,n)){f.preventDefault();let m=r!==void 0?r:_u(u)===_u(d);c(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[u,c,d,r,i,n,t,s,o,l])}let dC={data:""},fC=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||dC},pC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,mC=/\/\*[^]*?\*\/|  +/g,vv=/\n+/g,$r=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?$r(o,s):s+"{"+$r(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=$r(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=$r.p?$r.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},sr={},pI=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+pI(t[n]);return e}return t},gC=(t,e,n,r,i)=>{let s=pI(t),o=sr[s]||(sr[s]=(c=>{let u=0,d=11;for(;u<c.length;)d=101*d+c.charCodeAt(u++)>>>0;return"go"+d})(s));if(!sr[o]){let c=s!==t?t:(u=>{let d,f,m=[{}];for(;d=pC.exec(u.replace(mC,""));)d[4]?m.shift():d[3]?(f=d[3].replace(vv," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(vv," ").trim();return m[0]})(t);sr[o]=$r(i?{["@keyframes "+o]:c}:c,n?"":"."+o)}let l=n&&sr.g?sr.g:null;return n&&(sr.g=sr[o]),((c,u,d,f)=>{f?u.data=u.data.replace(f,c):u.data.indexOf(c)===-1&&(u.data=d?c+u.data:u.data+c)})(sr[o],e,r,l),o},yC=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":$r(l,""):l===!1?"":l}return r+i+(o??"")},"");function ih(t){let e=this||{},n=t.call?t(e.p):t;return gC(n.unshift?n.raw?yC(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,fC(e.target),e.g,e.o,e.k)}let mI,up,hp;ih.bind({g:1});let wr=ih.bind({k:1});function _C(t,e,n,r){$r.p=e,mI=t,up=n,hp=r}function Ai(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),c=l.className||i.className;n.p=Object.assign({theme:up&&up()},l),n.o=/ *go\d+/.test(c),l.className=ih.apply(n,r)+(c?" "+c:""),e&&(l.ref=o);let u=t;return t[0]&&(u=l.as||t,delete l.as),hp&&u[0]&&hp(l),mI(u,l)}return e?e(i):i}}var vC=t=>typeof t=="function",wu=(t,e)=>vC(t)?t(e):t,wC=(()=>{let t=0;return()=>(++t).toString()})(),gI=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),EC=20,qm="default",yI=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return yI(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Nc=[],_I={toasts:[],pausedAt:void 0,settings:{toastLimit:EC}},Gn={},vI=(t,e=qm)=>{Gn[e]=yI(Gn[e]||_I,t),Nc.forEach(([n,r])=>{n===e&&r(Gn[e])})},wI=t=>Object.keys(Gn).forEach(e=>vI(t,e)),TC=t=>Object.keys(Gn).find(e=>Gn[e].toasts.some(n=>n.id===t)),sh=(t=qm)=>e=>{vI(e,t)},IC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},SC=(t={},e=qm)=>{let[n,r]=D.useState(Gn[e]||_I),i=D.useRef(Gn[e]);D.useEffect(()=>(i.current!==Gn[e]&&r(Gn[e]),Nc.push([e,r]),()=>{let o=Nc.findIndex(([l])=>l===e);o>-1&&Nc.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var l,c,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((c=t[o.type])==null?void 0:c.duration)||(t==null?void 0:t.duration)||IC[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:s}},AC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||wC()}),Il=t=>(e,n)=>{let r=AC(e,t,n);return sh(r.toasterId||TC(r.id))({type:2,toast:r}),r.id},ge=(t,e)=>Il("blank")(t,e);ge.error=Il("error");ge.success=Il("success");ge.loading=Il("loading");ge.custom=Il("custom");ge.dismiss=(t,e)=>{let n={type:3,toastId:t};e?sh(e)(n):wI(n)};ge.dismissAll=t=>ge.dismiss(void 0,t);ge.remove=(t,e)=>{let n={type:4,toastId:t};e?sh(e)(n):wI(n)};ge.removeAll=t=>ge.remove(void 0,t);ge.promise=(t,e,n)=>{let r=ge.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?wu(e.success,i):void 0;return s?ge.success(s,{id:r,...n,...n==null?void 0:n.success}):ge.dismiss(r),i}).catch(i=>{let s=e.error?wu(e.error,i):void 0;s?ge.error(s,{id:r,...n,...n==null?void 0:n.error}):ge.dismiss(r)}),t};var kC=1e3,RC=(t,e="default")=>{let{toasts:n,pausedAt:r}=SC(t,e),i=D.useRef(new Map).current,s=D.useCallback((f,m=kC)=>{if(i.has(f))return;let w=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,w)},[]);D.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(w=>{if(w.duration===1/0)return;let x=(w.duration||0)+w.pauseDuration-(f-w.createdAt);if(x<0){w.visible&&ge.dismiss(w.id);return}return setTimeout(()=>ge.dismiss(w.id,e),x)});return()=>{m.forEach(w=>w&&clearTimeout(w))}},[n,r,e]);let o=D.useCallback(sh(e),[e]),l=D.useCallback(()=>{o({type:5,time:Date.now()})},[o]),c=D.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=D.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=D.useCallback((f,m)=>{let{reverseOrder:w=!1,gutter:x=8,defaultPosition:R}=m||{},C=n.filter(S=>(S.position||R)===(f.position||R)&&S.height),E=C.findIndex(S=>S.id===f.id),v=C.filter((S,O)=>O<E&&S.visible).length;return C.filter(S=>S.visible).slice(...w?[v+1]:[0,v]).reduce((S,O)=>S+(O.height||0)+x,0)},[n]);return D.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},PC=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xC=wr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,CC=wr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,bC=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${PC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xC} 0.15s ease-out forwards;
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
    animation: ${CC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,NC=wr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,DC=Ai("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${NC} 1s linear infinite;
`,OC=wr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,LC=wr`
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
}`,VC=Ai("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${OC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${LC} 0.2s ease-out forwards;
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
`,MC=Ai("div")`
  position: absolute;
`,jC=Ai("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,UC=wr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FC=Ai("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${UC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,BC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?D.createElement(FC,null,e):e:n==="blank"?null:D.createElement(jC,null,D.createElement(DC,{...r}),n!=="loading"&&D.createElement(MC,null,n==="error"?D.createElement(bC,{...r}):D.createElement(VC,{...r})))},$C=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,zC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,HC="0%{opacity:0;} 100%{opacity:1;}",WC="0%{opacity:1;} 100%{opacity:0;}",qC=Ai("div")`
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
`,KC=Ai("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,GC=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=gI()?[HC,WC]:[$C(n),zC(n)];return{animation:e?`${wr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${wr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},QC=D.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?GC(t.position||e||"top-center",t.visible):{opacity:0},s=D.createElement(BC,{toast:t}),o=D.createElement(KC,{...t.ariaProps},wu(t.message,t));return D.createElement(qC,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):D.createElement(D.Fragment,null,s,o))});_C(D.createElement);var YC=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=D.useCallback(o=>{if(o){let l=()=>{let c=o.getBoundingClientRect().height;r(t,c)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return D.createElement("div",{ref:s,className:e,style:n},i)},JC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:gI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},XC=ih`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,lc=16,ZC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:l})=>{let{toasts:c,handlers:u}=RC(n,s);return D.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:lc,left:lc,right:lc,bottom:lc,pointerEvents:"none",...o},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},c.map(d=>{let f=d.position||e,m=u.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),w=JC(f,m);return D.createElement(YC,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?XC:"",style:w},d.type==="custom"?wu(d.message,d):i?i(d):D.createElement(QC,{toast:d,position:f}))}))},Ld=ge,eb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$e=(t,e)=>{const n=D.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,children:l,...c},u)=>D.createElement("svg",{ref:u,...eb,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:`lucide lucide-${tb(t)}`,...c},[...e.map(([d,f])=>D.createElement(d,f)),...(Array.isArray(l)?l:[l])||[]]));return n.displayName=`${t}`,n},nb=$e("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),wv=$e("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),rb=$e("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),Ev=$e("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]),Tv=$e("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),Iv=$e("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]),Sv=$e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),cc=$e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),ib=$e("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),Av=$e("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",key:"nb9nel"}]]),sb=$e("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]),ob=$e("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]),kv=$e("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),Rv=$e("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),Pv=$e("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]),xv=$e("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),EI=$e("ShieldCheck",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),Cv=$e("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]),bv=$e("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),ab=$e("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]),lb=$e("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),cb=$e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ub=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},II={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|u>>6,w=u&63;c||(w=64,o||(m=64)),r.push(n[d],n[f],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(TI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||f==null)throw new db;const m=s<<2|l>>4;if(r.push(m),u!==64){const w=l<<4&240|u>>2;if(r.push(w),f!==64){const x=u<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fb=function(t){const e=TI(t);return II.encodeByteArray(e,!0)},Eu=function(t){return fb(t).replace(/\./g,"")},SI=function(t){try{return II.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mb=()=>pb().__FIREBASE_DEFAULTS__,gb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&SI(t[1]);return e&&JSON.parse(e)},oh=()=>{try{return ub()||mb()||gb()||yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},AI=t=>{var e,n;return(n=(e=oh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},kI=t=>{const e=AI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RI=()=>{var t;return(t=oh())==null?void 0:t.config},PI=t=>{var e;return(e=oh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[Eu(JSON.stringify(n)),Eu(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function wb(){var e;const t=(e=oh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Eb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ib(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sb(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ab(){return!wb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function kb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rb,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Pb(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,l,r)}}function Pb(t,e){return t.replace(xb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xb=/\{\$([^}]+)}/g;function Cb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nv(s)&&Nv(o)){if(!pi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bb(t,e){const n=new Nb(t,e);return n.subscribe.bind(n)}class Nb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Db(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vd),i.error===void 0&&(i.error=Vd),i.complete===void 0&&(i.complete=Vd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Db(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vd(){}/**
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
 */function ie(t){return t&&t._delegate?t._delegate:t}/**
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
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Km(t){return(await fetch(t,{credentials:"include"})).ok}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _b;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vb(e))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vi){return this.instances.has(e)}getOptions(e=Vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vi){return this.component?this.component.multipleInstances?e:Vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lb(t){return t===Vi?void 0:t}function Vb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const jb={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Ub=ue.INFO,Fb={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Bb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gm{constructor(e){this.name=e,this._logLevel=Ub,this._logHandler=Bb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const $b=(t,e)=>e.some(n=>t instanceof n);let Dv,Ov;function zb(){return Dv||(Dv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hb(){return Ov||(Ov=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NI=new WeakMap,dp=new WeakMap,DI=new WeakMap,Md=new WeakMap,Qm=new WeakMap;function Wb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NI.set(n,t)}).catch(()=>{}),Qm.set(e,t),e}function qb(t){if(dp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dp.set(t,e)}let fp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kb(t){fp=t(fp)}function Gb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return DI.set(r,e.sort?e.sort():[e]),pr(r)}:Hb().includes(t)?function(...e){return t.apply(jd(this),e),pr(NI.get(this))}:function(...e){return pr(t.apply(jd(this),e))}}function Qb(t){return typeof t=="function"?Gb(t):(t instanceof IDBTransaction&&qb(t),$b(t,zb())?new Proxy(t,fp):t)}function pr(t){if(t instanceof IDBRequest)return Wb(t);if(Md.has(t))return Md.get(t);const e=Qb(t);return e!==t&&(Md.set(t,e),Qm.set(e,t)),e}const jd=t=>Qm.get(t);function ah(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pr(o.result),c.oldVersion,c.newVersion,pr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}function Ud(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),pr(n).then(()=>{})}const Yb=["get","getKey","getAll","getAllKeys","count"],Jb=["put","add","delete","clear"],Fd=new Map;function Lv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Jb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yb.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Fd.set(e,s),s}Kb(t=>({...t,get:(e,n,r)=>Lv(e,n)||t.get(e,n,r),has:(e,n)=>!!Lv(e,n)||t.has(e,n)}));/**
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
 */class Xb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pp="@firebase/app",Vv="0.14.10";/**
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
 */const Er=new Gm("@firebase/app"),eN="@firebase/app-compat",tN="@firebase/analytics-compat",nN="@firebase/analytics",rN="@firebase/app-check-compat",iN="@firebase/app-check",sN="@firebase/auth",oN="@firebase/auth-compat",aN="@firebase/database",lN="@firebase/data-connect",cN="@firebase/database-compat",uN="@firebase/functions",hN="@firebase/functions-compat",dN="@firebase/installations",fN="@firebase/installations-compat",pN="@firebase/messaging",mN="@firebase/messaging-compat",gN="@firebase/performance",yN="@firebase/performance-compat",_N="@firebase/remote-config",vN="@firebase/remote-config-compat",wN="@firebase/storage",EN="@firebase/storage-compat",TN="@firebase/firestore",IN="@firebase/ai",SN="@firebase/firestore-compat",AN="firebase",kN="12.11.0";/**
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
 */const mp="[DEFAULT]",RN={[pp]:"fire-core",[eN]:"fire-core-compat",[nN]:"fire-analytics",[tN]:"fire-analytics-compat",[iN]:"fire-app-check",[rN]:"fire-app-check-compat",[sN]:"fire-auth",[oN]:"fire-auth-compat",[aN]:"fire-rtdb",[lN]:"fire-data-connect",[cN]:"fire-rtdb-compat",[uN]:"fire-fn",[hN]:"fire-fn-compat",[dN]:"fire-iid",[fN]:"fire-iid-compat",[pN]:"fire-fcm",[mN]:"fire-fcm-compat",[gN]:"fire-perf",[yN]:"fire-perf-compat",[_N]:"fire-rc",[vN]:"fire-rc-compat",[wN]:"fire-gcs",[EN]:"fire-gcs-compat",[TN]:"fire-fst",[SN]:"fire-fst-compat",[IN]:"fire-vertex","fire-js":"fire-js",[AN]:"fire-js-all"};/**
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
 */const Tu=new Map,PN=new Map,gp=new Map;function Mv(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(gp.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;gp.set(e,t);for(const n of Tu.values())Mv(n,t);for(const n of PN.values())Mv(n,t);return!0}function hs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Je(t){return t==null?!1:t.settings!==void 0}/**
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
 */const xN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new cs("app","Firebase",xN);/**
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
 */class CN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=kN;function OI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=RI()),!n)throw ai.create("no-options");const s=Tu.get(i);if(s){if(pi(n,s.options)&&pi(r,s.config))return s;throw ai.create("duplicate-app",{appName:i})}const o=new Mb(i);for(const c of gp.values())o.addComponent(c);const l=new CN(n,r,o);return Tu.set(i,l),l}function lh(t=mp){const e=Tu.get(t);if(!e&&t===mp&&RI())return OI();if(!e)throw ai.create("no-app",{appName:t});return e}function Wt(t,e,n){let r=RN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(o.join(" "));return}Ln(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bN="firebase-heartbeat-database",NN=1,il="firebase-heartbeat-store";let Bd=null;function LI(){return Bd||(Bd=ah(bN,NN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(il)}catch(n){console.warn(n)}}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function DN(t){try{const n=(await LI()).transaction(il),r=await n.objectStore(il).get(VI(t));return await n.done,r}catch(e){if(e instanceof Mn)Er.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function jv(t,e){try{const r=(await LI()).transaction(il,"readwrite");await r.objectStore(il).put(e,VI(t)),await r.done}catch(n){if(n instanceof Mn)Er.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function VI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ON=1024,LN=30;class VN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>LN){const o=UN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uv(),{heartbeatsToSend:r,unsentEntries:i}=MN(this._heartbeatsCache.heartbeats),s=Eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Er.warn(n),""}}}function Uv(){return new Date().toISOString().substring(0,10)}function MN(t,e=ON){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fv(t){return Eu(JSON.stringify({version:2,heartbeats:t})).length}function UN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function FN(t){Ln(new wn("platform-logger",e=>new Xb(e),"PRIVATE")),Ln(new wn("heartbeat",e=>new VN(e),"PRIVATE")),Wt(pp,Vv,t),Wt(pp,Vv,"esm2020"),Wt("fire-js","")}FN("");function MI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BN=MI,jI=new cs("auth","Firebase",MI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new Gm("@firebase/auth");function $N(t,...e){Iu.logLevel<=ue.WARN&&Iu.warn(`Auth (${ds}): ${t}`,...e)}function Dc(t,...e){Iu.logLevel<=ue.ERROR&&Iu.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw Jm(t,...e)}function qt(t,...e){return Jm(t,...e)}function Ym(t,e,n){const r={...BN(),[e]:n};return new cs("auth","Firebase",r).create(e,{appName:t.name})}function Ot(t){return Ym(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ch(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&En(t,"argument-error"),Ym(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jI.create(t,...e)}function z(t,e,...n){if(!t)throw Jm(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Dc(e),new Error(e)}function Tr(t,e){t||hr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Xm(){return Bv()==="http:"||Bv()==="https:"}function Bv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xm()||Tb()||"connection"in navigator)?navigator.onLine:!0}function HN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=vb()||Ib()}get(){return zN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KN=new Sl(3e4,6e4);function it(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function st(t,e,n,r,i={}){return FI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wo({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...s};return Eb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),UI.fetch()(await BI(t,t.config.apiHost,n,l),u)})}async function FI(t,e,n){t._canInitEmulator=!1;const r={...WN,...e};try{const i=new QN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ym(t,d,u);En(t,d)}}catch(i){if(i instanceof Mn)throw i;En(t,"network-request-failed",{message:String(i)})}}async function Pr(t,e,n,r,i={}){const s=await st(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function BI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Zm(t.config,i):`${t.config.apiScheme}://${i}`;return qN.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function GN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),KN.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){return t!==void 0&&t.getResponse!==void 0}function zv(t){return t!==void 0&&t.enterprise!==void 0}class $I{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t){return(await st(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function zI(t,e){return st(t,"GET","/v2/recaptchaConfig",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return st(t,"POST","/v1/accounts:delete",e)}async function XN(t,e){return st(t,"POST","/v1/accounts:update",e)}async function Su(t,e){return st(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZN(t,e=!1){const n=ie(t),r=await n.getIdToken(e),i=uh(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ca($d(i.auth_time)),issuedAtTime:Ca($d(i.iat)),expirationTime:Ca($d(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $d(t){return Number(t)*1e3}function uh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Dc("JWT malformed, contained fewer than 3 sections"),null;try{const i=SI(n);return i?JSON.parse(i):(Dc("Failed to decode base64 JWT payload"),null)}catch(i){return Dc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hv(t){const e=uh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&eD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ca(this.lastLoginAt),this.creationTime=Ca(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ol(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Xi(t,Su(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?HI(i.providerUserInfo):[],o=rD(t.providerData,s),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new yp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function nD(t){const e=ie(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t,e){const n=await FI(t,{},async()=>{const r=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await BI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(c.credentials="include"),UI.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sD(t,e){return st(t,"POST","/v2/accounts:revokeToken",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Hv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hs;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new tD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZN(this,e)}reload(){return nD(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject(Ot(this.auth));const e=await this.getIdToken();return await Xi(this,JN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:w,providerData:x,stsTokenManager:R}=n;z(f&&R,e,"internal-error");const C=Hs.fromJSON(this.name,R);z(typeof f=="string",e,"internal-error"),Mr(r,e.name),Mr(i,e.name),z(typeof m=="boolean",e,"internal-error"),z(typeof w=="boolean",e,"internal-error"),Mr(s,e.name),Mr(o,e.name),Mr(l,e.name),Mr(c,e.name),Mr(u,e.name),Mr(d,e.name);const E=new Pn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:C,createdAt:u,lastLoginAt:d});return x&&Array.isArray(x)&&(E.providerData=x.map(v=>({...v}))),c&&(E._redirectEventId=c),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hs;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ol(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?HI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hs;l.updateFromIdToken(r);const c=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Map;function dr(t){Tr(t instanceof Function,"Expected a class definition");let e=Wv.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wv.set(t,e),e)}/**
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
 */class WI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WI.type="NONE";const qv=WI;/**
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
 */function Oc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Oc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Oc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Su(this.auth,{idToken:e}).catch(()=>{});return n?Pn._fromGetAccountInfoResponse(this.auth,n,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ws(dr(qv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||dr(qv);const o=Oc(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Su(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Pn._fromGetAccountInfoResponse(e,m,d)}else f=Pn._fromJSON(e,d);u!==s&&(l=f),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ws(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JI(e))return"Blackberry";if(XI(e))return"Webos";if(KI(e))return"Safari";if((e.includes("chrome/")||GI(e))&&!e.includes("edge/"))return"Chrome";if(YI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qI(t=kt()){return/firefox\//i.test(t)}function KI(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function GI(t=kt()){return/crios\//i.test(t)}function QI(t=kt()){return/iemobile/i.test(t)}function YI(t=kt()){return/android/i.test(t)}function JI(t=kt()){return/blackberry/i.test(t)}function XI(t=kt()){return/webos/i.test(t)}function eg(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oD(t=kt()){var e;return eg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function aD(){return Sb()&&document.documentMode===10}function ZI(t=kt()){return eg(t)||YI(t)||XI(t)||JI(t)||/windows phone/i.test(t)||QI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e=[]){let n;switch(t){case"Browser":n=Kv(kt());break;case"Worker":n=`${Kv(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class lD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cD(t,e={}){return st(t,"GET","/v2/passwordPolicy",it(t,e))}/**
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
 */const uD=6;class hD{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gv(this),this.idTokenSubscription=new Gv(this),this.beforeStateQueue=new lD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Su(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject(Ot(this));const n=e?ie(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject(Ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject(Ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cD(this),n=new hD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&$N(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dt(t){return ie(t)}class Gv{constructor(e){this.auth=e,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fD(t){Al=t}function tg(t){return Al.loadJS(t)}function pD(){return Al.recaptchaV2Script}function mD(){return Al.recaptchaEnterpriseScript}function gD(){return Al.gapiScript}function t1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=500,_D=6e4,uc=1e12;class vD{constructor(e){this.auth=e,this.counter=uc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new TD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||uc;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||uc;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||uc;return(r=this._widgets.get(n))==null||r.execute(),""}}class wD{constructor(){this.enterprise=new ED}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ED{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;z(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ID(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},_D)},yD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ID(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const SD="recaptcha-enterprise",ba="NO_RECAPTCHA";class n1{constructor(e){this.type=SD,this.auth=dt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{zI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new $I(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;zv(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ba)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wD().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&zv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=mD();c.length!==0&&(c+=l),tg(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function na(t,e,n,r=!1,i=!1){const s=new n1(t);let o;if(i)o=ba;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function li(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await na(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await na(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await na(t,e,n);return r(t,l).catch(async c=>{var u;if(((u=t._getRecaptchaConfig())==null?void 0:u.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const d=await na(t,e,n,!1,!0);return r(t,d)}return Promise.reject(c)})}else{const l=await na(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}async function AD(t){const e=dt(t),n=await zI(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new $I(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new n1(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t,e){const n=hs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pi(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function RD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PD(t,e,n){const r=dt(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=r1(e),{host:o,port:l}=xD(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(pi(u,r.config.emulator)&&pi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,us(o)?Km(`${s}//${o}${c}`):i||CD()}function r1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xD(t){const e=r1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qv(o)}}}function Qv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function CD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e){return st(t,"POST","/v1/accounts:resetPassword",it(t,e))}async function ND(t,e){return st(t,"POST","/v1/accounts:update",e)}async function DD(t,e){return st(t,"POST","/v1/accounts:signUp",e)}async function OD(t,e){return st(t,"POST","/v1/accounts:update",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LD(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",it(t,e))}async function dh(t,e){return st(t,"POST","/v1/accounts:sendOobCode",it(t,e))}async function VD(t,e){return dh(t,e)}async function MD(t,e){return dh(t,e)}async function jD(t,e){return dh(t,e)}async function UD(t,e){return dh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FD(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}async function BD(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends hh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new al(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new al(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,n,"signInWithPassword",LD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return FD(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return li(e,r,"signUpPassword",DD,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return BD(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D="http://localhost";class Ir extends hh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:$D,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(t,e){return st(t,"POST","/v1/accounts:sendVerificationCode",it(t,e))}async function zD(t,e){return Pr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e))}async function HD(t,e){const n=await Pr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,e));if(n.temporaryProof)throw ma(t,"account-exists-with-different-credential",n);return n}const WD={USER_NOT_FOUND:"user-not-found"};async function qD(t,e){const n={...e,operation:"REAUTH"};return Pr(t,"POST","/v1/accounts:signInWithPhoneNumber",it(t,n),WD)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends hh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Na({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Na({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return zD(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return HD(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return qD(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Na({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GD(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class fh{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,i=n.oobCode??null,s=KD(n.mode??null);z(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=GD(e);try{return new fh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return al._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fh.parseLink(n);return z(r,"argument-error"),al._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class To extends Eo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Lc extends To{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),Ir._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Ir._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Lc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Lc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!n&&!s||!l)return null;try{return new Lc(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends To{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends To{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends To{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i1(t,e){return Pr(t,"POST","/v1/accounts:signUp",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=Jv(r);return new tr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jv(r);return new tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m6(t){var i;if(Je(t.app))return Promise.reject(Ot(t));const e=dt(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new tr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await i1(e,{returnSecureToken:!0}),r=await tr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends Mn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Au(e,n,r,i)}}function s1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function g6(t,e){const n=ie(t);await ph(!0,n,e);const{providerUserInfo:r}=await XN(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=o1(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function a1(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",r)}async function ph(t,e,n){await ol(e);const r=o1(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";z(r.has(n)===t,e.auth,i)}/**
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
 */async function QD(t,e,n=!1){const{auth:r}=t;if(Je(r.app))return Promise.reject(Ot(r));const i="reauthenticate";try{const s=await Xi(t,s1(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=uh(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e,n=!1){if(Je(t.app))return Promise.reject(Ot(t));const r="signIn",i=await s1(t,r,e),s=await tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function mh(t,e){return l1(dt(t),e)}async function YD(t,e){const n=ie(t);return await ph(!1,n,e.providerId),a1(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(t,e){return Pr(t,"POST","/v1/accounts:signInWithCustomToken",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y6(t,e){if(Je(t.app))return Promise.reject(Ot(t));const n=dt(t),r=await JD(n,{token:e,returnSecureToken:!0}),i=await tr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e,n){var r;z(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),z(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(t){const e=dt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _6(t,e,n){const r=dt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&gh(r,i,n),await li(r,i,"getOobCode",MD,"EMAIL_PASSWORD_PROVIDER")}async function v6(t,e,n){await bD(ie(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ng(t),r})}async function w6(t,e){await OD(ie(t),{oobCode:e})}async function XD(t,e,n){if(Je(t.app))return Promise.reject(Ot(t));const r=dt(t),o=await li(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i1,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ng(t),c}),l=await tr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ZD(t,e,n){return Je(t.app)?Promise.reject(Ot(t)):mh(ie(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ng(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E6(t,e,n){const r=dt(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){z(l.handleCodeInApp,r,"argument-error"),l&&gh(r,o,l)}s(i,n),await li(r,i,"getOobCode",jD,"EMAIL_PASSWORD_PROVIDER")}function T6(t,e){const n=fh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function I6(t,e,n){if(Je(t.app))return Promise.reject(Ot(t));const r=ie(t),i=fs.credentialWithLink(e,n||sl());return z(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),mh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e){return st(t,"POST","/v1/accounts:createAuthUri",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S6(t,e){const n=Xm()?sl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await eO(ie(t),r);return i||[]}async function A6(t,e){const n=ie(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&gh(n.auth,i,e);const{email:s}=await VD(n.auth,i);s!==t.email&&await t.reload()}async function k6(t,e,n){const r=ie(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&gh(r.auth,s,n);const{email:o}=await UD(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(t,e){return st(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R6(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ie(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,tO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function P6(t,e){const n=ie(t);return Je(n.auth.app)?Promise.reject(Ot(n.auth)):c1(n,e,null)}function x6(t,e){return c1(ie(t),null,e)}async function c1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Xi(t,ND(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function nO(t){var i,s;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(s=(i=uh(t.idToken))==null?void 0:i.firebase)==null?void 0:s.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Ks(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new rO(r,n);case"github.com":return new iO(r,n);case"google.com":return new sO(r,n);case"twitter.com":return new oO(r,n,t.screenName||null);case"custom":case"anonymous":return new Ks(r,null);default:return new Ks(r,e,n)}}class Ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class u1 extends Ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class rO extends Ks{constructor(e,n){super(e,"facebook.com",n)}}class iO extends u1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class sO extends Ks{constructor(e,n){super(e,"google.com",n)}}class oO extends u1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function C6(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:nO(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(t,e){return ie(t).setPersistence(e)}function lO(t,e,n,r){return ie(t).onIdTokenChanged(e,n,r)}function cO(t,e,n){return ie(t).beforeAuthStateChanged(e,n)}function uO(t,e,n,r){return ie(t).onAuthStateChanged(e,n,r)}function hO(t){return ie(t).signOut()}function b6(t,e){return dt(t).revokeAccessToken(e)}async function N6(t){return ie(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){return st(t,"POST","/v2/accounts/mfaEnrollment:start",it(t,e))}const ku="__sak";/**
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
 */class h1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=1e3,fO=10;class d1 extends h1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);aD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d1.type="LOCAL";const f1=d1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1 extends h1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}p1.type="SESSION";const m1=p1;/**
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
 */function pO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await pO(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=_h("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function gO(t){Qe().location.href=t}/**
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
 */function rg(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function yO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _O(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function vO(){return rg()?self:null}/**
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
 */const g1="firebaseLocalStorageDb",wO=1,Ru="firebaseLocalStorage",y1="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function EO(){const t=indexedDB.deleteDatabase(g1);return new kl(t).toPromise()}function _p(){const t=indexedDB.open(g1,wO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:y1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await EO(),e(await _p()))})})}async function Zv(t,e,n){const r=vh(t,!0).put({[y1]:e,value:n});return new kl(r).toPromise()}async function TO(t,e){const n=vh(t,!1).get(e),r=await new kl(n).toPromise();return r===void 0?null:r.value}function e0(t,e){const n=vh(t,!0).delete(e);return new kl(n).toPromise()}const IO=800,SO=3;class _1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(vO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await yO(),!this.activeServiceWorker)return;this.sender=new mO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_O()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _p();return await Zv(e,ku,"1"),await e0(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>TO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>e0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vh(i,!1).getAll();return new kl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_1.type="LOCAL";const AO=_1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e){return st(t,"POST","/v2/accounts/mfaSignIn:start",it(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=t1("rcb"),kO=new Sl(3e4,6e4);class RO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Qe().grecaptcha)!=null&&e.render)}load(e,n=""){return z(PO(n),e,"argument-error"),this.shouldResolveImmediately(n)&&$v(Qe().grecaptcha)?Promise.resolve(Qe().grecaptcha):new Promise((r,i)=>{const s=Qe().setTimeout(()=>{i(qt(e,"network-request-failed"))},kO.get());Qe()[zd]=()=>{Qe().clearTimeout(s),delete Qe()[zd];const l=Qe().grecaptcha;if(!l||!$v(l)){i(qt(e,"internal-error"));return}const c=l.render;l.render=(u,d)=>{const f=c(u,d);return this.counter++,f},this.hostLanguage=n,r(l)};const o=`${pD()}?${wo({onload:zd,render:"explicit",hl:n})}`;tg(o).catch(()=>{clearTimeout(s),i(qt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=Qe().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function PO(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class xO{async load(e){return new vD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="recaptcha",CO={theme:"light",type:"image"};class bO{constructor(e,n,r={...CO}){this.parameters=r,this.type=Da,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dt(e),this.isInvisible=this.parameters.size==="invisible",z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;z(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new xO:new RO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){z(!this.parameters.sitekey,this.auth,"argument-error"),z(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),z(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Qe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){z(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){z(Xm()&&!rg(),this.auth,"internal-error"),await NO(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await YN(this.auth);z(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return z(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function NO(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Na._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function DO(t,e,n){if(Je(t.app))return Promise.reject(Ot(t));const r=dt(t),i=await w1(r,e,ie(n));return new v1(i,s=>mh(r,s))}async function D6(t,e,n){const r=ie(t);await ph(!1,r,"phone");const i=await w1(r.auth,e,ie(n));return new v1(i,s=>YD(r,s))}async function w1(t,e,n){var r;if(!t._getRecaptchaConfig())try{await AD(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const s=i.session;if("phoneNumber"in i){z(s.type==="enroll",t,"internal-error");const o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await li(t,o,"mfaSmsEnrollment",async(d,f)=>{if(f.phoneEnrollmentInfo.captchaResponse===ba){z((n==null?void 0:n.type)===Da,d,"argument-error");const m=await Hd(d,f,n);return Xv(d,m)}return Xv(d,f)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{z(s.type==="signin",t,"internal-error");const o=((r=i.multiFactorHint)==null?void 0:r.uid)||i.multiFactorUid;z(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await li(t,l,"mfaSmsSignIn",async(f,m)=>{if(m.phoneSignInInfo.captchaResponse===ba){z((n==null?void 0:n.type)===Da,f,"argument-error");const w=await Hd(f,m,n);return t0(f,w)}return t0(f,m)},"PHONE_PROVIDER").catch(f=>Promise.reject(f))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:i.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await li(t,s,"sendVerificationCode",async(u,d)=>{if(d.captchaResponse===ba){z((n==null?void 0:n.type)===Da,u,"argument-error");const f=await Hd(u,d,n);return Yv(u,f)}return Yv(u,d)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).sessionInfo}}finally{n==null||n._reset()}}async function Hd(t,e,n){z(n.type===Da,t,"argument-error");const r=await n.verify();z(typeof r=="string",t,"argument-error");const i={...e};if("phoneEnrollmentInfo"in i){const s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,l=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){const s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,l=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:l}}),i}else return Object.assign(i,{recaptchaToken:r}),i}/**
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
 */function Rl(t,e){return e?dr(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ig extends hh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OO(t){return l1(t.auth,new ig(t),t.bypassAuthState)}function LO(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),QD(n,new ig(t),t.bypassAuthState)}async function VO(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),a1(n,new ig(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OO;case"linkViaPopup":case"linkViaRedirect":return VO;case"reauthViaPopup":case"reauthViaRedirect":return LO;default:En(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=new Sl(2e3,1e4);async function n0(t,e,n){if(Je(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const r=dt(t);ch(t,e,Eo);const i=Rl(r,n);return new Yr(r,"signInViaPopup",e,i).executeNotNull()}async function O6(t,e,n){const r=ie(t);ch(r.auth,e,Eo);const i=Rl(r.auth,n);return new Yr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yr extends E1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=_h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MO.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="pendingRedirect",Vc=new Map;class UO extends E1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const r=await FO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FO(t,e){const n=S1(e),r=I1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function T1(t,e){return I1(t)._set(S1(e),"true")}function BO(t,e){Vc.set(t._key(),e)}function I1(t){return dr(t._redirectPersistence)}function S1(t){return Oc(jO,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t,e,n){return zO(t,e,n)}async function zO(t,e,n){if(Je(t.app))return Promise.reject(Ot(t));const r=dt(t);ch(t,e,Eo),await r._initializationPromise;const i=Rl(r,n);return await T1(i,r),i._openRedirect(r,e,"signInViaRedirect")}function L6(t,e,n){return HO(t,e,n)}async function HO(t,e,n){const r=ie(t);ch(r.auth,e,Eo),await r.auth._initializationPromise;const i=Rl(r.auth,n);await ph(!1,r,e.providerId),await T1(i,r.auth);const s=await qO(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function WO(t,e){return await dt(t)._initializationPromise,A1(t,e,!1)}async function A1(t,e,n=!1){if(Je(t.app))return Promise.reject(Ot(t));const r=dt(t),i=Rl(r,e),o=await new UO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function qO(t){const e=_h(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=10*60*1e3;class GO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!k1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KO&&this.cachedEventUids.clear(),this.cachedEventUids.has(r0(e))}saveEventToCache(e){this.cachedEventUids.add(r0(e)),this.lastProcessedEventTime=Date.now()}}function r0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function k1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return k1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(t,e={}){return st(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XO=/^https?/;async function ZO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YO(t);for(const n of e)try{if(e2(n))return}catch{}En(t,"unauthorized-domain")}function e2(t){const e=sl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XO.test(n))return!1;if(JO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const t2=new Sl(3e4,6e4);function i0(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n2(t){return new Promise((e,n)=>{var i,s,o;function r(){i0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i0(),n(qt(t,"network-request-failed"))},timeout:t2.get()})}if((s=(i=Qe().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Qe().gapi)!=null&&o.load)r();else{const l=t1("iframefcb");return Qe()[l]=()=>{gapi.load?r():n(qt(t,"network-request-failed"))},tg(`${gD()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function r2(t){return Mc=Mc||n2(t),Mc}/**
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
 */const i2=new Sl(5e3,15e3),s2="__/auth/iframe",o2="emulator/auth/iframe",a2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c2(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zm(e,o2):`https://${t.config.authDomain}/${s2}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=l2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function u2(t){const e=await r2(t),n=Qe().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:c2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),l=Qe().setTimeout(()=>{s(o)},i2.get());function c(){Qe().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const h2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d2=500,f2=600,p2="_blank",m2="http://localhost";class s0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g2(t,e,n,r=d2,i=f2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...h2,width:r.toString(),height:i.toString(),top:s,left:o},u=kt().toLowerCase();n&&(l=GI(u)?p2:n),qI(u)&&(e=e||m2,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[w,x])=>`${m}${w}=${x},`,"");if(oD(u)&&l!=="_self")return y2(e||"",l),new s0(null);const f=window.open(e||"",l,d);z(f,t,"popup-blocked");try{f.focus()}catch{}return new s0(f)}function y2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const _2="__/auth/handler",v2="emulator/auth/handler",w2=encodeURIComponent("fac");async function o0(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof Eo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))o[d]=f}if(e instanceof To){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${w2}=${encodeURIComponent(c)}`:"";return`${E2(t)}?${wo(l).slice(1)}${u}`}function E2({config:t}){return t.emulator?Zm(t,v2):`https://${t.authDomain}/${_2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=m1,this._completeRedirectFn=A1,this._overrideRedirectResult=BO}async _openPopup(e,n,r,i){var o;Tr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await o0(e,n,r,sl(),i);return g2(e,s,_h())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await o0(e,n,r,sl(),i);return gO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await u2(e),r=new GO(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wd];s!==void 0&&n(!!s),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZI()||KI()||eg()}}const I2=T2;var a0="@firebase/auth",l0="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k2(t){Ln(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(t)},u=new dD(r,i,s,c);return RD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new wn("auth-internal",e=>{const n=dt(e.getProvider("auth").getImmediate());return(r=>new S2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(a0,l0,A2(t)),Wt(a0,l0,"esm2020")}/**
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
 */const R2=5*60,P2=PI("authIdTokenMaxAge")||R2;let c0=null;const x2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P2)return;const i=n==null?void 0:n.token;c0!==i&&(c0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function C2(t=lh()){const e=hs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kD(t,{popupRedirectResolver:I2,persistence:[AO,f1,m1]}),r=PI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=x2(s.toString());cO(n,o,()=>o(n.currentUser)),lO(n,l=>o(l))}}const i=AI("auth");return i&&PD(n,`http://${i}`),n}function b2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",b2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k2("Browser");var N2="firebase",D2="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(N2,D2,"app");var u0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ci,R1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(k,P,b){for(var A=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)A[pe-2]=arguments[pe];return _.prototype[P].apply(k,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,_,I){I||(I=0);const k=Array(16);if(typeof _=="string")for(var P=0;P<16;++P)k[P]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(P=0;P<16;++P)k[P]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],P=T.g[2];let b=T.g[3],A;A=_+(b^I&(P^b))+k[0]+3614090360&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+k[1]+3905402710&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+k[2]+606105819&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+k[3]+3250441966&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(b^I&(P^b))+k[4]+4118548399&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+k[5]+1200080426&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+k[6]+2821735955&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+k[7]+4249261313&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(b^I&(P^b))+k[8]+1770035416&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+k[9]+2336552879&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+k[10]+4294925233&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+k[11]+2304563134&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(b^I&(P^b))+k[12]+1804603682&4294967295,_=I+(A<<7&4294967295|A>>>25),A=b+(P^_&(I^P))+k[13]+4254626195&4294967295,b=_+(A<<12&4294967295|A>>>20),A=P+(I^b&(_^I))+k[14]+2792965006&4294967295,P=b+(A<<17&4294967295|A>>>15),A=I+(_^P&(b^_))+k[15]+1236535329&4294967295,I=P+(A<<22&4294967295|A>>>10),A=_+(P^b&(I^P))+k[1]+4129170786&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+k[6]+3225465664&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+k[11]+643717713&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+k[0]+3921069994&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(P^b&(I^P))+k[5]+3593408605&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+k[10]+38016083&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+k[15]+3634488961&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+k[4]+3889429448&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(P^b&(I^P))+k[9]+568446438&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+k[14]+3275163606&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+k[3]+4107603335&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+k[8]+1163531501&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(P^b&(I^P))+k[13]+2850285829&4294967295,_=I+(A<<5&4294967295|A>>>27),A=b+(I^P&(_^I))+k[2]+4243563512&4294967295,b=_+(A<<9&4294967295|A>>>23),A=P+(_^I&(b^_))+k[7]+1735328473&4294967295,P=b+(A<<14&4294967295|A>>>18),A=I+(b^_&(P^b))+k[12]+2368359562&4294967295,I=P+(A<<20&4294967295|A>>>12),A=_+(I^P^b)+k[5]+4294588738&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+k[8]+2272392833&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+k[11]+1839030562&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+k[14]+4259657740&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(I^P^b)+k[1]+2763975236&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+k[4]+1272893353&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+k[7]+4139469664&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+k[10]+3200236656&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(I^P^b)+k[13]+681279174&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+k[0]+3936430074&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+k[3]+3572445317&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+k[6]+76029189&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(I^P^b)+k[9]+3654602809&4294967295,_=I+(A<<4&4294967295|A>>>28),A=b+(_^I^P)+k[12]+3873151461&4294967295,b=_+(A<<11&4294967295|A>>>21),A=P+(b^_^I)+k[15]+530742520&4294967295,P=b+(A<<16&4294967295|A>>>16),A=I+(P^b^_)+k[2]+3299628645&4294967295,I=P+(A<<23&4294967295|A>>>9),A=_+(P^(I|~b))+k[0]+4096336452&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+k[7]+1126891415&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+k[14]+2878612391&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+k[5]+4237533241&4294967295,I=P+(A<<21&4294967295|A>>>11),A=_+(P^(I|~b))+k[12]+1700485571&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+k[3]+2399980690&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+k[10]+4293915773&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+k[1]+2240044497&4294967295,I=P+(A<<21&4294967295|A>>>11),A=_+(P^(I|~b))+k[8]+1873313359&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+k[15]+4264355552&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+k[6]+2734768916&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+k[13]+1309151649&4294967295,I=P+(A<<21&4294967295|A>>>11),A=_+(P^(I|~b))+k[4]+4149444226&4294967295,_=I+(A<<6&4294967295|A>>>26),A=b+(I^(_|~P))+k[11]+3174756917&4294967295,b=_+(A<<10&4294967295|A>>>22),A=P+(_^(b|~I))+k[2]+718787259&4294967295,P=b+(A<<15&4294967295|A>>>17),A=I+(b^(P|~_))+k[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+b&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,k=this.C;let P=this.h,b=0;for(;b<_;){if(P==0)for(;b<=I;)i(this,T,b),b+=this.blockSize;if(typeof T=="string"){for(;b<_;)if(k[P++]=T.charCodeAt(b++),P==this.blockSize){i(this,k),P=0;break}}else for(;b<_;)if(k[P++]=T[b++],P==this.blockSize){i(this,k),P=0;break}}this.h=P,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let k=0;k<32;k+=8)T[_++]=this.g[I]>>>k&255;return T};function s(T,_){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let k=!0;for(let P=T.length-1;P>=0;P--){const b=T[P]|0;k&&b==_||(I[P]=b,k=!1)}this.g=I}var l={};function c(T){return-128<=T&&T<128?s(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return C(u(-T));const _=[];let I=1;for(let k=0;T>=I;k++)_[k]=T/I|0,I*=4294967296;return new o(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return C(d(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(_,8));let k=f;for(let b=0;b<T.length;b+=8){var P=Math.min(8,T.length-b);const A=parseInt(T.substring(b,b+P),_);P<8?(P=u(Math.pow(_,P)),k=k.j(P).add(u(A))):(k=k.j(I),k=k.add(u(A)))}return k}var f=c(0),m=c(1),w=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-C(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const k=this.i(I);T+=(k>=0?k:4294967296+k)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(R(this))return"-"+C(this).toString(T);const _=u(Math.pow(T,6));var I=this;let k="";for(;;){const P=O(I,_).g;I=E(I,P.j(_));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=P,x(I))return b+k;for(;b.length<6;)b="0"+b;k=b+k}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function R(T){return T.h==-1}t.l=function(T){return T=E(this,T),R(T)?-1:x(T)?0:1};function C(T){const _=T.g.length,I=[];for(let k=0;k<_;k++)I[k]=~T.g[k];return new o(I,~T.h).add(m)}t.abs=function(){return R(this)?C(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let k=0;for(let P=0;P<=_;P++){let b=k+(this.i(P)&65535)+(T.i(P)&65535),A=(b>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);k=A>>>16,b&=65535,A&=65535,I[P]=A<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(T,_){return T.add(C(_))}t.j=function(T){if(x(this)||x(T))return f;if(R(this))return R(T)?C(this).j(C(T)):C(C(this).j(T));if(R(T))return C(this.j(C(T)));if(this.l(w)<0&&T.l(w)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var k=0;k<2*_;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(let P=0;P<T.g.length;P++){const b=this.i(k)>>>16,A=this.i(k)&65535,pe=T.i(P)>>>16,Q=T.i(P)&65535;I[2*k+2*P]+=A*Q,v(I,2*k+2*P),I[2*k+2*P+1]+=b*Q,v(I,2*k+2*P+1),I[2*k+2*P+1]+=A*pe,v(I,2*k+2*P+1),I[2*k+2*P+2]+=b*pe,v(I,2*k+2*P+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function v(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function S(T,_){this.g=T,this.h=_}function O(T,_){if(x(_))throw Error("division by zero");if(x(T))return new S(f,f);if(R(T))return _=O(C(T),_),new S(C(_.g),C(_.h));if(R(_))return _=O(T,C(_)),new S(C(_.g),_.h);if(T.g.length>30){if(R(T)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var I=m,k=_;k.l(T)<=0;)I=j(I),k=j(k);var P=F(I,1),b=F(k,1);for(k=F(k,2),I=F(I,2);!x(k);){var A=b.add(k);A.l(T)<=0&&(P=P.add(I),b=A),k=F(k,1),I=F(I,1)}return _=E(T,P.j(_)),new S(P,_)}for(P=f;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),b=u(I),A=b.j(_);R(A)||A.l(T)>0;)I-=k,b=u(I),A=b.j(_);x(b)&&(b=m),P=P.add(b),T=E(T,A)}return new S(P,T)}t.B=function(T){return O(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let k=0;k<_;k++)I[k]=this.i(k)&T.i(k);return new o(I,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let k=0;k<_;k++)I[k]=this.i(k)|T.i(k);return new o(I,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let k=0;k<_;k++)I[k]=this.i(k)^T.i(k);return new o(I,this.h^T.h)};function j(T){const _=T.g.length+1,I=[];for(let k=0;k<_;k++)I[k]=T.i(k)<<1|T.i(k-1)>>>31;return new o(I,T.h)}function F(T,_){const I=_>>5;_%=32;const k=T.g.length-I,P=[];for(let b=0;b<k;b++)P[b]=_>0?T.i(b+I)>>>_|T.i(b+I+1)<<32-_:T.i(b+I);return new o(P,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,R1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,ci=o}).apply(typeof u0<"u"?u0:typeof self<"u"?self:typeof window<"u"?window:{});var hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var P1,ga,x1,jc,vp,C1,b1,N1;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hc=="object"&&hc];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in p))break e;p=p[N]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var p=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&p.push([y,h[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,p){return a.call.apply(a.bind,arguments)}function u(a,h,p){return u=c,u.apply(null,arguments)}function d(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,h){function p(){}p.prototype=h.prototype,a.Z=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,N,L){for(var B=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)B[ae-2]=arguments[ae];return h.prototype[N].apply(y,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const h=a.length;if(h>0){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function x(a,h){for(let y=1;y<arguments.length;y++){const N=arguments[y];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=a.length||0;const L=N.length||0;a.length=p+L;for(let B=0;B<L;B++)a[p+B]=N[B]}else a.push(N)}}class R{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function C(a){o.setTimeout(()=>{throw a},0)}function E(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const y=S.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var S=new R(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,T=new v,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(I)}};function I(){for(var a;a=E();){try{a.h.call(a.g)}catch(p){C(p)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return a}();function A(a){return/^[\s\xa0]*$/.test(a)}function pe(a,h){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}f(pe,P),pe.prototype.init=function(a,h){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Q="closure_listenable_"+(Math.random()*1e6|0),le=0;function Le(a,h,p,y,N){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=N,this.key=++le,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Z(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function ne(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function we(a){const h={};for(const p in a)h[p]=a[p];return h}const H="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y(a,h){let p,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(p in y)a[p]=y[p];for(let L=0;L<H.length;L++)p=H[L],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function oe(a){this.src=a,this.g={},this.h=0}oe.prototype.add=function(a,h,p,y,N){const L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);const B=Se(a,h,y,N);return B>-1?(h=a[B],p||(h.fa=!1)):(h=new Le(h,this.src,L,!!y,N),h.fa=p,a.push(h)),h};function Ce(a,h){const p=h.type;if(p in a.g){var y=a.g[p],N=Array.prototype.indexOf.call(y,h,void 0),L;(L=N>=0)&&Array.prototype.splice.call(y,N,1),L&&($(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Se(a,h,p,y){for(let N=0;N<a.length;++N){const L=a[N];if(!L.da&&L.listener==h&&L.capture==!!p&&L.ha==y)return N}return-1}var ot="closure_lm_"+(Math.random()*1e6|0),Ve={};function Rt(a,h,p,y,N){if(y&&y.once)return Qt(a,h,p,y,N);if(Array.isArray(h)){for(let L=0;L<h.length;L++)Rt(a,h[L],p,y,N);return null}return p=bo(p),a&&a[Q]?a.J(h,p,l(y)?!!y.capture:!!y,N):Gt(a,h,p,!1,y,N)}function Gt(a,h,p,y,N,L){if(!h)throw Error("Invalid event type");const B=l(N)?!!N.capture:!!N;let ae=Yt(a);if(ae||(a[ot]=ae=new oe(a)),p=ae.add(h,p,y,B,L),p.proxy)return p;if(y=Pt(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)b||(N=B),N===void 0&&(N=!1),a.addEventListener(h.toString(),y,N);else if(a.attachEvent)a.attachEvent(cn(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Pt(){function a(p){return h.call(a.src,a.listener,p)}const h=Tn;return a}function Qt(a,h,p,y,N){if(Array.isArray(h)){for(let L=0;L<h.length;L++)Qt(a,h[L],p,y,N);return null}return p=bo(p),a&&a[Q]?a.K(h,p,l(y)?!!y.capture:!!y,N):Gt(a,h,p,!0,y,N)}function He(a,h,p,y,N){if(Array.isArray(h))for(var L=0;L<h.length;L++)He(a,h[L],p,y,N);else y=l(y)?!!y.capture:!!y,p=bo(p),a&&a[Q]?(a=a.i,L=String(h).toString(),L in a.g&&(h=a.g[L],p=Se(h,p,y,N),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete a.g[L],a.h--)))):a&&(a=Yt(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Se(h,p,y,N)),(p=a>-1?h[a]:null)&&at(p))}function at(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Q])Ce(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(cn(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=Yt(h))?(Ce(p,a),p.h==0&&(p.src=null,h[ot]=null)):$(a)}}}function cn(a){return a in Ve?Ve[a]:Ve[a]="on"+a}function Tn(a,h){if(a.da)a=!0;else{h=new pe(h,this);const p=a.listener,y=a.ha||a.src;a.fa&&at(a),a=p.call(y,h)}return a}function Yt(a){return a=a[ot],a instanceof oe?a:null}var Un="__closure_events_fn_"+(Math.random()*1e9>>>0);function bo(a){return typeof a=="function"?a:(a[Un]||(a[Un]=function(h){return a.handleEvent(h)}),a[Un])}function Me(){k.call(this),this.i=new oe(this),this.M=this,this.G=null}f(Me,k),Me.prototype[Q]=!0,Me.prototype.removeEventListener=function(a,h,p,y){He(this,a,h,p,y)};function xt(a,h){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new P(h,a);else if(h instanceof P)h.target=h.target||a;else{var N=h;h=new P(y,a),Y(h,N)}N=!0;let L,B;if(p)for(B=p.length-1;B>=0;B--)L=h.g=p[B],N=Dl(L,y,!0,h)&&N;if(L=h.g=a,N=Dl(L,y,!0,h)&&N,N=Dl(L,y,!1,h)&&N,p)for(B=0;B<p.length;B++)L=h.g=p[B],N=Dl(L,y,!1,h)&&N}Me.prototype.N=function(){if(Me.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const p=a.g[h];for(let y=0;y<p.length;y++)$(p[y]);delete a.g[h],a.h--}}this.G=null},Me.prototype.J=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Me.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Dl(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let L=0;L<h.length;++L){const B=h[L];if(B&&!B.da&&B.capture==p){const ae=B.listener,et=B.ha||B.src;B.fa&&Ce(a.i,B),N=ae.call(et,y)!==!1&&N}}return N&&!y.defaultPrevented}function sk(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function sy(a){a.g=sk(()=>{a.g=null,a.i&&(a.i=!1,sy(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ok extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:sy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function No(a){k.call(this),this.h=a,this.g={}}f(No,k);var oy=[];function ay(a){Z(a.g,function(h,p){this.g.hasOwnProperty(p)&&at(h)},a),a.g={}}No.prototype.N=function(){No.Z.N.call(this),ay(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wh=o.JSON.stringify,ak=o.JSON.parse,lk=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ly(){}function cy(){}var Do={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qh(){P.call(this,"d")}f(qh,P);function Kh(){P.call(this,"c")}f(Kh,P);var Pi={},uy=null;function Ol(){return uy=uy||new Me}Pi.Ia="serverreachability";function hy(a){P.call(this,Pi.Ia,a)}f(hy,P);function Oo(a){const h=Ol();xt(h,new hy(h))}Pi.STAT_EVENT="statevent";function dy(a,h){P.call(this,Pi.STAT_EVENT,a),this.stat=h}f(dy,P);function Ct(a){const h=Ol();xt(h,new dy(h,a))}Pi.Ja="timingevent";function fy(a,h){P.call(this,Pi.Ja,a),this.size=h}f(fy,P);function Lo(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vo(){this.g=!0}Vo.prototype.ua=function(){this.g=!1};function ck(a,h,p,y,N,L){a.info(function(){if(a.g)if(L){var B="",ae=L.split("&");for(let Ee=0;Ee<ae.length;Ee++){var et=ae[Ee].split("=");if(et.length>1){const lt=et[0];et=et[1];const Bn=lt.split("_");B=Bn.length>=2&&Bn[1]=="type"?B+(lt+"="+et+"&"):B+(lt+"=redacted&")}}}else B=null;else B=L;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+h+`
`+p+`
`+B})}function uk(a,h,p,y,N,L,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+h+`
`+p+`
`+L+" "+B})}function gs(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+dk(a,p)+(y?" "+y:"")})}function hk(a,h){a.info(function(){return"TIMEOUT: "+h})}Vo.prototype.info=function(){};function dk(a,h){if(!a.g)return h;if(!h)return null;try{const L=JSON.parse(h);if(L){for(a=0;a<L.length;a++)if(Array.isArray(L[a])){var p=L[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var N=y[0];if(N!="noop"&&N!="stop"&&N!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return Wh(L)}catch{return h}}var Ll={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},py={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},my;function Gh(){}f(Gh,ly),Gh.prototype.g=function(){return new XMLHttpRequest},my=new Gh;function Mo(a){return encodeURIComponent(String(a))}function fk(a){var h=1;a=a.split(":");const p=[];for(;h>0&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function Cr(a,h,p,y){this.j=a,this.i=h,this.l=p,this.S=y||1,this.V=new No(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gy}function gy(){this.i=null,this.g="",this.h=!1}var yy={},Qh={};function Yh(a,h,p){a.M=1,a.A=Ml(Fn(h)),a.u=p,a.R=!0,_y(a,null)}function _y(a,h){a.F=Date.now(),Vl(a),a.B=Fn(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),by(p.i,"t",y),a.C=0,p=a.j.L,a.h=new gy,a.g=Qy(a.j,p?h:null,!a.u),a.P>0&&(a.O=new ok(u(a.Y,a,a.g),a.P)),h=a.V,p=a.g,y=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(oy[0]=N.toString()),N=oy);for(let L=0;L<N.length;L++){const B=Rt(p,N[L],y||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?we(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Oo(),ck(a.i,a.v,a.B,a.l,a.S,a.u)}Cr.prototype.ba=function(a){a=a.target;const h=this.O;h&&Dr(a)==3?h.j():this.Y(a)},Cr.prototype.Y=function(a){try{if(a==this.g)e:{const ae=Dr(this.g),et=this.g.ya(),Ee=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||jy(this.g)))){this.K||ae!=4||et==7||(et==8||Ee<=0?Oo(3):Oo(2)),Jh(this);var h=this.g.ca();this.X=h;var p=pk(this);if(this.o=h==200,uk(this.i,this.v,this.B,this.l,this.S,ae,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,N=this.g;if((y=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(y)){var L=y;break t}}L=null}if(a=L)gs(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xh(this,a);else{this.o=!1,this.m=3,Ct(12),xi(this),jo(this);break e}}if(this.R){a=!0;let lt;for(;!this.K&&this.C<p.length;)if(lt=mk(this,p),lt==Qh){ae==4&&(this.m=4,Ct(14),a=!1),gs(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==yy){this.m=4,Ct(15),gs(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else gs(this.i,this.l,lt,null),Xh(this,lt);if(vy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||p.length!=0||this.h.h||(this.m=1,Ct(16),a=!1),this.o=this.o&&a,!a)gs(this.i,this.l,p,"[Invalid Chunked Response]"),xi(this),jo(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),od(B),B.P=!0,Ct(11))}}else gs(this.i,this.l,p,null),Xh(this,p);ae==4&&xi(this),this.o&&!this.K&&(ae==4?Wy(this.j,this):(this.o=!1,Vl(this)))}else xk(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ct(12)):(this.m=0,Ct(13)),xi(this),jo(this)}}}catch{}finally{}};function pk(a){if(!vy(a))return a.g.la();const h=jy(a.g);if(h==="")return"";let p="";const y=h.length,N=Dr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return xi(a),jo(a),"";a.h.i=new o.TextDecoder}for(let L=0;L<y;L++)a.h.h=!0,p+=a.h.i.decode(h[L],{stream:!(N&&L==y-1)});return h.length=0,a.h.g+=p,a.C=0,a.h.g}function vy(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function mk(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?Qh:(p=Number(h.substring(p,y)),isNaN(p)?yy:(y+=1,y+p>h.length?Qh:(h=h.slice(y,y+p),a.C=y+p,h)))}Cr.prototype.cancel=function(){this.K=!0,xi(this)};function Vl(a){a.T=Date.now()+a.H,wy(a,a.H)}function wy(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Lo(u(a.aa,a),h)}function Jh(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Cr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(hk(this.i,this.B),this.M!=2&&(Oo(),Ct(17)),xi(this),this.m=2,jo(this)):wy(this,this.T-a)};function jo(a){a.j.I==0||a.K||Wy(a.j,a)}function xi(a){Jh(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,ay(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Xh(a,h){try{var p=a.j;if(p.I!=0&&(p.g==a||Zh(p.h,a))){if(!a.L&&Zh(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)$l(p),Fl(p);else break e;sd(p),Ct(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Lo(u(p.Va,p),6e3));Iy(p.h)<=1&&p.ta&&(p.ta=void 0)}else bi(p,11)}else if((a.L||p.g==a)&&$l(p),!A(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let Ee=N[h];const lt=Ee[0];if(!(lt<=p.K))if(p.K=lt,Ee=Ee[1],p.I==2)if(Ee[0]=="c"){p.M=Ee[1],p.ba=Ee[2];const Bn=Ee[3];Bn!=null&&(p.ka=Bn,p.j.info("VER="+p.ka));const Ni=Ee[4];Ni!=null&&(p.za=Ni,p.j.info("SVER="+p.za));const Or=Ee[5];Or!=null&&typeof Or=="number"&&Or>0&&(y=1.5*Or,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Lr=a.g;if(Lr){const Hl=Lr.g?Lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hl){var L=y.h;L.g||Hl.indexOf("spdy")==-1&&Hl.indexOf("quic")==-1&&Hl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(ed(L,L.h),L.h=null))}if(y.G){const ad=Lr.g?Lr.g.getResponseHeader("X-HTTP-Session-Id"):null;ad&&(y.wa=ad,Ae(y.J,y.G,ad))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var B=a;if(y.na=Gy(y,y.L?y.ba:null,y.W),B.L){Sy(y.h,B);var ae=B,et=y.O;et&&(ae.H=et),ae.D&&(Jh(ae),Vl(ae)),y.g=B}else zy(y);p.i.length>0&&Bl(p)}else Ee[0]!="stop"&&Ee[0]!="close"||bi(p,7);else p.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?bi(p,7):id(p):Ee[0]!="noop"&&p.l&&p.l.qa(Ee),p.A=0)}}Oo(4)}catch{}}var gk=class{constructor(a,h){this.g=a,this.map=h}};function Ey(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ty(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Iy(a){return a.h?1:a.g?a.g.size:0}function Zh(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ed(a,h){a.g?a.g.add(h):a.h=h}function Sy(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ey.prototype.cancel=function(){if(this.i=Ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ay(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.G);return h}return w(a.i)}var ky=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yk(a,h){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let N,L=null;y>=0?(N=a[p].substring(0,y),L=a[p].substring(y+1)):N=a[p],h(N,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function br(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof br?(this.l=a.l,Uo(this,a.j),this.o=a.o,this.g=a.g,Fo(this,a.u),this.h=a.h,td(this,Ny(a.i)),this.m=a.m):a&&(h=String(a).match(ky))?(this.l=!1,Uo(this,h[1]||"",!0),this.o=Bo(h[2]||""),this.g=Bo(h[3]||"",!0),Fo(this,h[4]),this.h=Bo(h[5]||"",!0),td(this,h[6]||"",!0),this.m=Bo(h[7]||"")):(this.l=!1,this.i=new zo(null,this.l))}br.prototype.toString=function(){const a=[];var h=this.j;h&&a.push($o(h,Ry,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push($o(h,Ry,!0),"@"),a.push(Mo(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push($o(p,p.charAt(0)=="/"?wk:vk,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",$o(p,Tk)),a.join("")},br.prototype.resolve=function(a){const h=Fn(this);let p=!!a.j;p?Uo(h,a.j):p=!!a.o,p?h.o=a.o:p=!!a.g,p?h.g=a.g:p=a.u!=null;var y=a.h;if(p)Fo(h,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var N=h.h.lastIndexOf("/");N!=-1&&(y=h.h.slice(0,N+1)+y)}if(N=y,N==".."||N==".")y="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){y=N.lastIndexOf("/",0)==0,N=N.split("/");const L=[];for(let B=0;B<N.length;){const ae=N[B++];ae=="."?y&&B==N.length&&L.push(""):ae==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),y&&B==N.length&&L.push("")):(L.push(ae),y=!0)}y=L.join("/")}else y=N}return p?h.h=y:p=a.i.toString()!=="",p?td(h,Ny(a.i)):p=!!a.m,p&&(h.m=a.m),h};function Fn(a){return new br(a)}function Uo(a,h,p){a.j=p?Bo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fo(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function td(a,h,p){h instanceof zo?(a.i=h,Ik(a.i,a.l)):(p||(h=$o(h,Ek)),a.i=new zo(h,a.l))}function Ae(a,h,p){a.i.set(h,p)}function Ml(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Bo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $o(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,_k),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _k(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ry=/[#\/\?@]/g,vk=/[#\?:]/g,wk=/[#\?]/g,Ek=/[#\?@]/g,Tk=/#/g;function zo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Ci(a){a.g||(a.g=new Map,a.h=0,a.i&&yk(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=zo.prototype,t.add=function(a,h){Ci(this),this.i=null,a=ys(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Py(a,h){Ci(a),h=ys(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function xy(a,h){return Ci(a),h=ys(a,h),a.g.has(h)}t.forEach=function(a,h){Ci(this),this.g.forEach(function(p,y){p.forEach(function(N){a.call(h,N,y,this)},this)},this)};function Cy(a,h){Ci(a);let p=[];if(typeof h=="string")xy(a,h)&&(p=p.concat(a.g.get(ys(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)p=p.concat(a[h]);return p}t.set=function(a,h){return Ci(this),this.i=null,a=ys(this,a),xy(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Cy(this,a),a.length>0?String(a[0]):h):h};function by(a,h,p){Py(a,h),p.length>0&&(a.i=null,a.g.set(ys(a,h),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var p=h[y];const N=Mo(p);p=Cy(this,p);for(let L=0;L<p.length;L++){let B=N;p[L]!==""&&(B+="="+Mo(p[L])),a.push(B)}}return this.i=a.join("&")};function Ny(a){const h=new zo;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function ys(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Ik(a,h){h&&!a.j&&(Ci(a),a.i=null,a.g.forEach(function(p,y){const N=y.toLowerCase();y!=N&&(Py(this,y),by(this,N,p))},a)),a.j=h}function Sk(a,h){const p=new Vo;if(o.Image){const y=new Image;y.onload=d(Nr,p,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Nr,p,"TestLoadImage: error",!1,h,y),y.onabort=d(Nr,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Nr,p,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Ak(a,h){const p=new Vo,y=new AbortController,N=setTimeout(()=>{y.abort(),Nr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(N),L.ok?Nr(p,"TestPingServer: ok",!0,h):Nr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Nr(p,"TestPingServer: error",!1,h)})}function Nr(a,h,p,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(p)}catch{}}function kk(){this.g=new lk}function nd(a){this.i=a.Sb||null,this.h=a.ab||!1}f(nd,ly),nd.prototype.g=function(){return new jl(this.i,this.h)};function jl(a,h){Me.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(jl,Me),t=jl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Wo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Dy(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Dy(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ho(this):Wo(this),this.readyState==3&&Dy(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ho(this))},t.Na=function(a){this.g&&(this.response=a,Ho(this))},t.ga=function(){this.g&&Ho(this)};function Ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Wo(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Wo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(jl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Oy(a){let h="";return Z(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function rd(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Oy(p),typeof a=="string"?p!=null&&Mo(p):Ae(a,h,p))}function je(a){Me.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(je,Me);var Rk=/^https?$/i,Pk=["POST","PUT"];t=je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():my.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Ly(this,L);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)p.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Pk,h,void 0)>=0)||y||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of p)this.g.setRequestHeader(L,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(L){Ly(this,L)}};function Ly(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Vy(a),Ul(a)}function Vy(a){a.A||(a.A=!0,xt(a,"complete"),xt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,xt(this,"complete"),xt(this,"abort"),Ul(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ul(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?My(this):this.Xa())},t.Xa=function(){My(this)};function My(a){if(a.h&&typeof s<"u"){if(a.v&&Dr(a)==4)setTimeout(a.Ca.bind(a),0);else if(xt(a,"readystatechange"),Dr(a)==4){a.h=!1;try{const L=a.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=L===0){let B=String(a.D).match(ky)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!Rk.test(B?B.toLowerCase():"")}p=y}if(p)xt(a,"complete"),xt(a,"success");else{a.o=6;try{var N=Dr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Vy(a)}}finally{Ul(a)}}}}function Ul(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,h||xt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ak(h)}};function jy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xk(a){const h={};a=(a.g&&Dr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(A(a[y]))continue;var p=fk(a[y]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=h[N]||[];h[N]=L,L.push(p)}ne(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function qo(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Uy(a){this.za=0,this.i=[],this.j=new Vo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=qo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=qo("baseRetryDelayMs",5e3,a),this.Za=qo("retryDelaySeedMs",1e4,a),this.Ta=qo("forwardChannelMaxRetries",2,a),this.va=qo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ey(a&&a.concurrentRequestLimit),this.Ba=new kk,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Uy.prototype,t.ka=8,t.I=1,t.connect=function(a,h,p,y){Ct(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Gy(this,null,this.W),Bl(this)};function id(a){if(Fy(a),a.I==3){var h=a.V++,p=Fn(a.J);if(Ae(p,"SID",a.M),Ae(p,"RID",h),Ae(p,"TYPE","terminate"),Ko(a,p),h=new Cr(a,a.j,h),h.M=2,h.A=Ml(Fn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=Qy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Vl(h)}Ky(a)}function Fl(a){a.g&&(od(a),a.g.cancel(),a.g=null)}function Fy(a){Fl(a),a.v&&(o.clearTimeout(a.v),a.v=null),$l(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Bl(a){if(!Ty(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),T.add(h,a),a.D=0}}function Ck(a,h){return Iy(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Lo(u(a.Ea,a,h),qy(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new Cr(this,this.j,a);let L=this.o;if(this.U&&(L?(L=we(L),Y(L,this.U)):L=this.U),this.u!==null||this.R||(N.J=L,L=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=$y(this,N,h),p=Fn(this.J),Ae(p,"RID",a),Ae(p,"CVER",22),this.G&&Ae(p,"X-HTTP-Session-Id",this.G),Ko(this,p),L&&(this.R?h="headers="+Mo(Oy(L))+"&"+h:this.u&&rd(p,this.u,L)),ed(this.h,N),this.Ra&&Ae(p,"TYPE","init"),this.S?(Ae(p,"$req",h),Ae(p,"SID","null"),N.U=!0,Yh(N,p,null)):Yh(N,p,h),this.I=2}}else this.I==3&&(a?By(this,a):this.i.length==0||Ty(this.h)||By(this))};function By(a,h){var p;h?p=h.l:p=a.V++;const y=Fn(a.J);Ae(y,"SID",a.M),Ae(y,"RID",p),Ae(y,"AID",a.K),Ko(a,y),a.u&&a.o&&rd(y,a.u,a.o),p=new Cr(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),h&&(a.i=h.G.concat(a.i)),h=$y(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ed(a.h,p),Yh(p,y,h)}function Ko(a,h){a.H&&Z(a.H,function(p,y){Ae(h,y,p)}),a.l&&Z({},function(p,y){Ae(h,y,p)})}function $y(a,h,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var N=a.i;let ae=-1;for(;;){const et=["count="+p];ae==-1?p>0?(ae=N[0].g,et.push("ofs="+ae)):ae=0:et.push("ofs="+ae);let Ee=!0;for(let lt=0;lt<p;lt++){var L=N[lt].g;const Bn=N[lt].map;if(L-=ae,L<0)ae=Math.max(0,N[lt].g-100),Ee=!1;else try{L="req"+L+"_"||"";try{var B=Bn instanceof Map?Bn:Object.entries(Bn);for(const[Ni,Or]of B){let Lr=Or;l(Or)&&(Lr=Wh(Or)),et.push(L+Ni+"="+encodeURIComponent(Lr))}}catch(Ni){throw et.push(L+"type="+encodeURIComponent("_badmap")),Ni}}catch{y&&y(Bn)}}if(Ee){B=et.join("&");break e}}B=void 0}return a=a.i.splice(0,p),h.G=a,B}function zy(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),T.add(h,a),a.A=0}}function sd(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Lo(u(a.Da,a),qy(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Hy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Lo(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ct(10),Fl(this),Hy(this))};function od(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Hy(a){a.g=new Cr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Fn(a.na);Ae(h,"RID","rpc"),Ae(h,"SID",a.M),Ae(h,"AID",a.K),Ae(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(h,"TO",a.ia),Ae(h,"TYPE","xmlhttp"),Ko(a,h),a.u&&a.o&&rd(h,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ml(Fn(h)),p.u=null,p.R=!0,_y(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Fl(this),sd(this),Ct(19))};function $l(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Wy(a,h){var p=null;if(a.g==h){$l(a),od(a),a.g=null;var y=2}else if(Zh(a.h,h))p=h.G,Sy(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;y=Ol(),xt(y,new fy(y,p)),Bl(a)}else zy(a);else if(N=h.m,N==3||N==0&&h.X>0||!(y==1&&Ck(a,h)||y==2&&sd(a)))switch(p&&p.length>0&&(h=a.h,h.i=h.i.concat(p)),N){case 1:bi(a,5);break;case 4:bi(a,10);break;case 3:bi(a,6);break;default:bi(a,2)}}}function qy(a,h){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*h}function bi(a,h){if(a.j.info("Error code "+h),h==2){var p=u(a.bb,a),y=a.Ua;const N=!y;y=new br(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Uo(y,"https"),Ml(y),N?Sk(y.toString(),p):Ak(y.toString(),p)}else Ct(2);a.I=0,a.l&&a.l.pa(h),Ky(a),Fy(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Ky(a){if(a.I=0,a.ja=[],a.l){const h=Ay(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ja,h),x(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function Gy(a,h,p){var y=p instanceof br?Fn(p):new br(p);if(y.g!="")h&&(y.g=h+"."+y.g),Fo(y,y.u);else{var N=o.location;y=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const L=new br(null);y&&Uo(L,y),h&&(L.g=h),N&&Fo(L,N),p&&(L.h=p),y=L}return p=a.G,h=a.wa,p&&h&&Ae(y,p,h),Ae(y,"VER",a.ka),Ko(a,y),y}function Qy(a,h,p){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new je(new nd({ab:p})):new je(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yy(){}t=Yy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function zl(){}zl.prototype.g=function(a,h){return new Jt(a,h)};function Jt(a,h){Me.call(this),this.g=new Uy(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!A(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}f(Jt,Me),Jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){id(this.g)},Jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Wh(a),a=p);h.i.push(new gk(h.Ya++,a)),h.I==3&&Bl(h)},Jt.prototype.N=function(){this.g.l=null,delete this.j,id(this.g),delete this.g,Jt.Z.N.call(this)};function Jy(a){qh.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}f(Jy,qh);function Xy(){Kh.call(this),this.status=1}f(Xy,Kh);function _s(a){this.g=a}f(_s,Yy),_s.prototype.ra=function(){xt(this.g,"a")},_s.prototype.qa=function(a){xt(this.g,new Jy(a))},_s.prototype.pa=function(a){xt(this.g,new Xy)},_s.prototype.oa=function(){xt(this.g,"b")},zl.prototype.createWebChannel=zl.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,N1=function(){return new zl},b1=function(){return Ol()},C1=Pi,vp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ll.NO_ERROR=0,Ll.TIMEOUT=8,Ll.HTTP_ERROR=6,jc=Ll,py.COMPLETE="complete",x1=py,cy.EventType=Do,Do.OPEN="a",Do.CLOSE="b",Do.ERROR="c",Do.MESSAGE="d",Me.prototype.listen=Me.prototype.J,ga=cy,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,P1=je}).apply(typeof hc<"u"?hc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Io="12.11.0";function O2(t){Io=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Zi=new Gm("@firebase/firestore");function Es(){return Zi.logLevel}function q(t,...e){if(Zi.logLevel<=ue.DEBUG){const n=e.map(sg);Zi.debug(`Firestore (${Io}): ${t}`,...n)}}function Sr(t,...e){if(Zi.logLevel<=ue.ERROR){const n=e.map(sg);Zi.error(`Firestore (${Io}): ${t}`,...n)}}function es(t,...e){if(Zi.logLevel<=ue.WARN){const n=e.map(sg);Zi.warn(`Firestore (${Io}): ${t}`,...n)}}function sg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,D1(t,r,n)}function D1(t,e,n){let r=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||D1(e,i,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class V2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class M2{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new O1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new Tt(e)}}class j2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class U2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new j2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new h0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new h0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=B2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function wp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return qd(i)===qd(s)?he(i,s):qd(i)?1:-1}return he(t.length,e.length)}const $2=55296,z2=57343;function qd(t){const e=t.charCodeAt(0);return e>=$2&&e<=z2}function ao(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="__name__";class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return he(e.length,n.length)}static compareSegments(e,n){const r=Wn.isNumericId(e),i=Wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):wp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ci.fromString(e.substring(4,e.length-2))}}class Te extends Wn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const H2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Wn{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return H2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===d0}static keyField(){return new mt([d0])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function W2(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f0(t){if(!X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p0(t){if(X.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function V1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function wh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wh(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function q2(t,e){if(e<=0)throw new W(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function Pl(t,e){if(!V1(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=-62135596800,g0=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*g0);return new Re(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<m0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/g0}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pl(e,Re._jsonSchema))return new Re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-m0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:Ze("string",Re._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Re(0,0))}static max(){return new te(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ll=-1;function K2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new mi(i,X.empty(),e)}function G2(t){return new mi(t.readTime,t.key,ll)}class mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mi(te.min(),X.empty(),ll)}static max(){return new mi(te.max(),X.empty(),ll)}}function Q2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class J2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Y2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function X2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const ag=-1;function Th(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function Z2(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="";function eL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=y0(e)),e=tL(t.get(n),e);return y0(e)}function tL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case M1:n+="";break;default:n+=s}}return n}function y0(t){return t+M1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dc(this.root,e,this.comparator,!0)}}class dc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new v0(this.data.getIterator())}getIteratorFrom(e){return new v0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class v0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new nn([])}unionWith(e){let n=new rt(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class U1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new U1("Invalid base64 string: "+s):s}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const nL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=nL.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yi(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="server_timestamp",B1="__type__",$1="__previous_value__",z1="__local_write_time__";function lg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[B1])==null?void 0:r.stringValue)===F1}function Ih(t){const e=t.mapValue.fields[$1];return lg(e)?Ih(e):e}function cl(t){const e=gi(t.mapValue.fields[z1].timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,n,r,i,s,o,l,c,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const xu="(default)";class ul{constructor(e,n){this.projectId=e,this.database=n||xu}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database===xu}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}function iL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="__type__",W1="__max__",fc={mapValue:{fields:{__type__:{stringValue:W1}}}},q1="__vector__",Cu="value";function _i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lg(t)?4:oL(t)?9007199254740991:sL(t)?10:11:ee(28295,{value:t})}function nr(t,e){if(t===e)return!0;const n=_i(t);if(n!==_i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cl(t).isEqual(cl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=gi(i.timestampValue),l=gi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return yi(i.bytesValue).isEqual(yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return We(i.geoPointValue.latitude)===We(s.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return We(i.integerValue)===We(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=We(i.doubleValue),l=We(s.doubleValue);return o===l?Pu(o)===Pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(_0(o)!==_0(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!nr(o[c],l[c])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function hl(t,e){return(t.values||[]).find(n=>nr(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=_i(t),r=_i(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=We(s.integerValue||s.doubleValue),c=We(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return w0(t.timestampValue,e.timestampValue);case 4:return w0(cl(t),cl(e));case 5:return wp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=yi(s),c=yi(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=he(l[u],c[u]);if(d!==0)return d}return he(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=he(We(s.latitude),We(o.latitude));return l!==0?l:he(We(s.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return E0(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,w,x,R;const l=s.fields||{},c=o.fields||{},u=(m=l[Cu])==null?void 0:m.arrayValue,d=(w=c[Cu])==null?void 0:w.arrayValue,f=he(((x=u==null?void 0:u.values)==null?void 0:x.length)||0,((R=d==null?void 0:d.values)==null?void 0:R.length)||0);return f!==0?f:E0(u,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fc.mapValue&&o===fc.mapValue)return 0;if(s===fc.mapValue)return 1;if(o===fc.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const m=wp(c[f],d[f]);if(m!==0)return m;const w=lo(l[c[f]],u[d[f]]);if(w!==0)return w}return he(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function w0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=gi(t),r=gi(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function E0(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=lo(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function co(t){return Ep(t)}function Ep(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ep(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ep(n.fields[o])}`;return i+"}"}(t.mapValue):ee(61005,{value:t})}function Uc(t){switch(_i(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ih(t);return e?16+Uc(e):16;case 5:return 2*t.stringValue.length;case 6:return yi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Uc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+Uc(o)}),i}(t.mapValue);default:throw ee(13486,{value:t})}}function T0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tp(t){return!!t&&"integerValue"in t}function cg(t){return!!t&&"arrayValue"in t}function I0(t){return!!t&&"nullValue"in t}function S0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fc(t){return!!t&&"mapValue"in t}function sL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[H1])==null?void 0:r.stringValue)===q1}function Oa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Oa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oa(t.arrayValue.values[n]);return e}return{...t}}function oL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===W1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oa(n)}setAll(e){let n=mt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Oa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Oa(this.value))}}function K1(t){const e=[];return ki(t.fields,(n,r)=>{const i=new mt([n]);if(Fc(r)){const s=K1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bu{constructor(e,n){this.position=e,this.inclusive=n}}function A0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function k0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function aL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class G1{}class Xe extends G1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new cL(e,n,r):n==="array-contains"?new dL(e,r):n==="in"?new fL(e,r):n==="not-in"?new pL(e,r):n==="array-contains-any"?new mL(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uL(e,r):new hL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(lo(n,this.value)):n!==null&&_i(this.value)===_i(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends G1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Vn(e,n)}matches(e){return Q1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Q1(t){return t.op==="and"}function Y1(t){return lL(t)&&Q1(t)}function lL(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function Ip(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+co(t.value);if(Y1(t))return t.filters.map(e=>Ip(e)).join(",");{const e=t.filters.map(n=>Ip(n)).join(",");return`${t.op}(${e})`}}function J1(t,e){return t instanceof Xe?function(r,i){return i instanceof Xe&&r.op===i.op&&r.field.isEqual(i.field)&&nr(r.value,i.value)}(t,e):t instanceof Vn?function(r,i){return i instanceof Vn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&J1(o,i.filters[l]),!0):!1}(t,e):void ee(19439)}function X1(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof Vn?function(n){return n.op.toString()+" {"+n.getFilters().map(X1).join(" ,")+"}"}(t):"Filter"}class cL extends Xe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class uL extends Xe{constructor(e,n){super(e,"in",n),this.keys=Z1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hL extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Z1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Z1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class dL extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return cg(n)&&hl(n.arrayValue,this.value)}}class fL extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class pL extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hl(this.value.arrayValue,n)}}class mL extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!cg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
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
 */class gL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function R0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new gL(t,e,n,r,i,s,o)}function ug(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ip(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Th(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.Te=n}return e.Te}function hg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!aL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!J1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!k0(t.startAt,e.startAt)&&k0(t.endAt,e.endAt)}function Sp(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function yL(t,e,n,r,i,s,o,l){return new ko(t,e,n,r,i,s,o,l)}function Sh(t){return new ko(t)}function P0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _L(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function eS(t){return t.collectionGroup!==null}function La(t){const e=re(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new rt(mt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new dl(s,r))}),n.has(mt.keyField().canonicalString())||e.Ee.push(new dl(mt.keyField(),r))}return e.Ee}function Xn(t){const e=re(t);return e.Ie||(e.Ie=vL(e,La(t))),e.Ie}function vL(t,e){if(t.limitType==="F")return R0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new dl(i.field,s)});const n=t.endAt?new bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bu(t.startAt.position,t.startAt.inclusive):null;return R0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ap(t,e){const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wL(t,e){const n=t.explicitOrderBy.concat([e]);return new ko(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Nu(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ah(t,e){return hg(Xn(t),Xn(e))&&t.limitType===e.limitType}function tS(t){return`${ug(Xn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>X1(i)).join(", ")}]`),Th(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>co(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>co(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of La(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=A0(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,La(r),i)||r.endAt&&!function(o,l,c){const u=A0(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,La(r),i))}(t,e)}function EL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function nS(t){return(e,n)=>{let r=!1;for(const i of La(t)){const s=TL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TL(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?lo(c,u):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return j1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=new Oe(X.comparator);function Ar(){return IL}const rS=new Oe(X.comparator);function ya(...t){let e=rS;for(const n of t)e=e.insert(n.key,n);return e}function iS(t){let e=rS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fi(){return Va()}function sS(){return Va()}function Va(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const SL=new Oe(X.comparator),AL=new rt(X.comparator);function de(...t){let e=AL;for(const n of t)e=e.add(n);return e}const kL=new rt(he);function RL(){return kL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function oS(t){return{integerValue:""+t}}function aS(t,e){return Z2(e)?oS(e):dg(t,e)}/**
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
 */class Rh{constructor(){this._=void 0}}function PL(t,e,n){return t instanceof fl?function(i,s){const o={fields:{[B1]:{stringValue:F1},[z1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lg(s)&&(s=Ih(s)),s&&(o.fields[$1]=s),{mapValue:o}}(n,e):t instanceof uo?cS(t,e):t instanceof pl?uS(t,e):function(i,s){const o=lS(i,s),l=x0(o)+x0(i.Ae);return Tp(o)&&Tp(i.Ae)?oS(l):dg(i.serializer,l)}(t,e)}function xL(t,e,n){return t instanceof uo?cS(t,e):t instanceof pl?uS(t,e):n}function lS(t,e){return t instanceof ml?function(r){return Tp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class fl extends Rh{}class uo extends Rh{constructor(e){super(),this.elements=e}}function cS(t,e){const n=hS(e);for(const r of t.elements)n.some(i=>nr(i,r))||n.push(r);return{arrayValue:{values:n}}}class pl extends Rh{constructor(e){super(),this.elements=e}}function uS(t,e){let n=hS(e);for(const r of t.elements)n=n.filter(i=>!nr(i,r));return{arrayValue:{values:n}}}class ml extends Rh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function x0(t){return We(t.integerValue||t.doubleValue)}function hS(t){return cg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n){this.field=e,this.transform=n}}function CL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof uo&&i instanceof uo||r instanceof pl&&i instanceof pl?ao(r.elements,i.elements,nr):r instanceof ml&&i instanceof ml?nr(r.Ae,i.Ae):r instanceof fl&&i instanceof fl}(t.transform,e.transform)}class bL{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ph{}function dS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pg(t.key,yn.none()):new xl(t.key,t.data,yn.none());{const n=t.data,r=Ft.empty();let i=new rt(mt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ri(t.key,r,new nn(i.toArray()),yn.none())}}function NL(t,e,n){t instanceof xl?function(i,s,o){const l=i.value.clone(),c=b0(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ri?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=b0(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(fS(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ma(t,e,n,r){return t instanceof xl?function(s,o,l,c){if(!Bc(s.precondition,o))return l;const u=s.value.clone(),d=N0(s.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ri?function(s,o,l,c){if(!Bc(s.precondition,o))return l;const u=N0(s.fieldTransforms,c,o),d=o.data;return d.setAll(fS(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function DL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=lS(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function C0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ao(r,i,(s,o)=>CL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xl extends Ph{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ri extends Ph{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function b0(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,xL(o,l,n[i]))}return r}function N0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,PL(s,o,e))}return r}class pg extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OL extends Ph{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ma(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=dS(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>C0(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>C0(n,r))}}class mg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return SL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mg(e,n,r,i)}}/**
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
 */class VL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ML{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,fe;function jL(t){switch(t){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function pS(t){if(t===void 0)return Sr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ge.OK:return V.OK;case Ge.CANCELLED:return V.CANCELLED;case Ge.UNKNOWN:return V.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return V.INTERNAL;case Ge.UNAVAILABLE:return V.UNAVAILABLE;case Ge.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ge.NOT_FOUND:return V.NOT_FOUND;case Ge.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ge.ABORTED:return V.ABORTED;case Ge.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ge.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:t})}}(fe=Ge||(Ge={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function UL(){return new TextEncoder}/**
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
 */const FL=new ci([4294967295,4294967295],0);function D0(t){const e=UL().encode(t),n=new R1;return n.update(e),new Uint8Array(n.digest())}function O0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ci([n,r],0),new ci([i,s],0)]}class gg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ci.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(ci.fromNumber(r)));return i.compare(FL)===1&&(i=new ci([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=D0(e),[r,i]=O0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=D0(e),[r,i]=O0(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xh(te.min(),i,new Oe(he),Ar(),de())}}class Cl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cl(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class mS{constructor(e,n){this.targetId=e,this.Ce=n}}class gS{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class L0{constructor(){this.ve=0,this.Fe=V0(),this.Me=_t.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}}),new Cl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=V0()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class BL{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ar(),this.Je=pc(),this.He=pc(),this.Ze=new Oe(he)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Sp(s))if(r===0){const o=new X(s.path);this.et(n,o,St.newNoDocument(o,te.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=yi(r).toUint8Array()}catch(c){if(c instanceof U1)return es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new gg(o,i,s)}catch(c){return es(c instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Sp(l.target)){const c=new X(l.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,St.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=de();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new xh(e,n,this.Ze,this.je,r);return this.je=Ar(),this.Je=pc(),this.He=pc(),this.Ze=new Oe(he),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new L0,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new rt(he),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new rt(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new L0),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function pc(){return new Oe(X.comparator)}function V0(){return new Oe(X.comparator)}const $L=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),zL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),HL=(()=>({and:"AND",or:"OR"}))();class WL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kp(t,e){return t.useProto3Json||Th(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qL(t,e){return Du(t,e.toTimestamp())}function Zn(t){return _e(!!t,49232),te.fromTimestamp(function(n){const r=gi(n);return new Re(r.seconds,r.nanos)}(t))}function yg(t,e){return Rp(t,e).canonicalString()}function Rp(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _S(t){const e=Te.fromString(t);return _e(IS(e),10190,{key:e.toString()}),e}function Pp(t,e){return yg(t.databaseId,e.path)}function Kd(t,e){const n=_S(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(wS(n))}function vS(t,e){return yg(t.databaseId,e)}function KL(t){const e=_S(t);return e.length===4?Te.emptyPath():wS(e)}function xp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wS(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function M0(t,e,n){return{name:Pp(t,e),fields:n.value.mapValue.fields}}function GL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ee(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(_e(d===void 0||typeof d=="string",58123),_t.fromBase64String(d||"")):(_e(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?V.UNKNOWN:pS(u.code);return new W(d,u.message||"")}(o);n=new gS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kd(t,r.document.name),s=Zn(r.document.updateTime),o=r.document.createTime?Zn(r.document.createTime):te.min(),l=new Ft({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(i,s,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new $c(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kd(t,r.document),s=r.readTime?Zn(r.readTime):te.min(),o=St.newNoDocument(i,s),l=r.removedTargetIds||[];n=new $c([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kd(t,r.document),s=r.removedTargetIds||[];n=new $c([],s,i,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ML(i,s),l=r.targetId;n=new mS(l,o)}}return n}function QL(t,e){let n;if(e instanceof xl)n={update:M0(t,e.key,e.value)};else if(e instanceof pg)n={delete:Pp(t,e.key)};else if(e instanceof Ri)n={update:M0(t,e.key,e.data),updateMask:iV(e.fieldMask)};else{if(!(e instanceof OL))return ee(16599,{dt:e.type});n={verify:Pp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof uo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:qL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)}(t,e.precondition)),n}function YL(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Zn(i.updateTime):Zn(s);return o.isEqual(te.min())&&(o=Zn(s)),new bL(o,i.transformResults||[])}(n,e))):[]}function JL(t,e){return{documents:[vS(t,e.path)]}}function XL(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vS(t,i);const s=function(u){if(u.length!==0)return TS(Vn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Is(m.field),direction:tV(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function ZL(t){let e=KL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=ES(f);return m instanceof Vn&&Y1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(x){return new dl(Ss(x.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Th(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,w=f.values||[];return new bu(w,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,w=f.values||[];return new bu(w,m)}(n.endAt)),yL(e,i,o,s,l,"F",c,u)}function eV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ES(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ss(n.unaryFilter.field);return Xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ss(n.unaryFilter.field);return Xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ss(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vn.create(n.compositeFilter.filters.map(r=>ES(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function tV(t){return $L[t]}function nV(t){return zL[t]}function rV(t){return HL[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ss(t){return mt.fromServerFormat(t.fieldPath)}function TS(t){return t instanceof Xe?function(n){if(n.op==="=="){if(S0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(I0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(S0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(I0(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:nV(n.op),value:n.value}}}(t):t instanceof Vn?function(n){const r=n.getFilters().map(i=>TS(i));return r.length===1?r[0]:{compositeFilter:{op:rV(n.op),filters:r}}}(t):ee(54877,{filter:t})}function iV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function IS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function SS(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,s=te.min(),o=te.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(e){this.yt=e}}function oV(t){const e=ZL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nu(e,e.limit,"L"):e}/**
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
 */class aV{constructor(){this.bn=new lV}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(mi.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class lV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new rt(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new rt(Te.comparator)).toArray()}}/**
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
 */const j0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AS=41943040;class jt{static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(AS,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const U0="LruGarbageCollector",cV=1048576;function F0([t,e],[n,r]){const i=he(t,n);return i===0?he(e,r):i}class uV{constructor(e){this.Pr=e,this.buffer=new rt(F0),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();F0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hV{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(U0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?q(U0,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)})}}class dV{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Eh.ce);const r=new uV(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(j0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),j0):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Es()<=ue.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function fV(t,e){return new dV(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ma(r.mutation,i,nn.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const i=Fi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ya();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Ar();const o=Va(),l=function(){return Va()}();return n.forEach((c,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof Ri)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ma(d.mutation,u,d.mutation.getFieldMask(),Re.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>l.set(u,new mV(d,o.get(u)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Va();let i=new Oe((o,l)=>o-l),s=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||nn.empty();d=l.applyToLocalView(u,d),r.set(c,d);const f=(i.get(l.batchId)||de()).add(c);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,f=sS();d.forEach(m=>{if(!s.has(m)){const w=dS(n.get(m),r.get(m));w!==null&&f.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return _L(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Fi());let l=ll,c=s;return o.next(u=>M.forEach(u,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,de())).next(d=>({batchId:l,changes:iS(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let i=ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ya();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,c=>{const u=function(f,m){return new ko(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=ya();return o.forEach((c,u)=>{const d=s.get(c);d!==void 0&&Ma(d.mutation,u,nn.empty(),Re.now()),kh(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Zn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:oV(i.bundledQuery),readTime:Zn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class _V{constructor(){this.overlays=new Oe(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fi();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Fi(),s=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=Fi(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Fi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VL(n,r));let s=this.Lr.get(n);s===void 0&&(s=de(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class vV{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.kr=new rt(ct.qr),this.Kr=new rt(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ct(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new Te([])),r=new ct(n,e),i=new ct(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new Te([])),r=new ct(n,e),i=new ct(n,e+1);let s=de();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||he(e.Jr,n.Jr)}static Ur(e,n){return he(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new rt(ct.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LL(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new ct(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ag:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),i=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(he);return n.forEach(i=>{const s=new ct(i,0),o=new ct(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new ct(new X(s),0);let l=new rt(he);return this.Hr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new ct(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new ct(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e){this.ti=e,this.docs=function(){return new Oe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():St.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ar();const o=n.path,l=new X(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Q2(G2(d),r)<=0||(i.has(d.key)||kh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TV(this)}getSize(e){return M.resolve(this.size)}}class TV extends pV{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{constructor(e){this.persistence=e,this.ri=new ps(n=>ug(n),hg),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new _g,this.targetCount=0,this.oi=ho._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ho(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n){this._i={},this.overlays={},this.ai=new Eh(0),this.ui=!1,this.ui=!0,this.ci=new vV,this.referenceDelegate=e(this),this.li=new IV(this),this.indexManager=new aV,this.remoteDocumentCache=function(i){return new EV(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new sV(n),this.Pi=new yV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _V,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new wV(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new SV(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class SV extends J2{constructor(e){super(),this.currentSequenceNumber=e}}class vg{constructor(e){this.persistence=e,this.Ri=new _g,this.Ai=null}static Vi(e){return new vg(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=X.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ou{constructor(e,n){this.persistence=e,this.fi=new ps(r=>eL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=fV(this,n)}static Vi(e,n){return new Ou(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,te.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uc(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=de(),i=de();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wg(e,n.fromCache,r,i)}}/**
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
 */class AV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kV{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Ab()?8:X2(kt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new AV;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Es()<=ue.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Es()<=ue.DEBUG&&q("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Es()<=ue.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):M.resolve())}gs(e,n){if(P0(n))return M.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nu(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=de(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Ss(n,l);return this.bs(n,u,o,c.readTime)?this.gs(e,Nu(n,null,"F")):this.Ds(e,u,n,c)}))})))}ps(e,n,r,i){return P0(n)||i.isEqual(te.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Es()<=ue.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.Ds(e,o,n,K2(i,ll)).next(l=>l))})}Ss(e,n){let r=new rt(nS(e));return n.forEach((i,s)=>{kh(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Es()<=ue.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.fs.getDocumentsMatchingQuery(e,n,mi.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="LocalStore",RV=3e8;class PV{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Oe(he),this.Fs=new ps(s=>ug(s),hg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gV(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function xV(t,e,n,r){return new PV(t,e,n,r)}async function RS(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=de();for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of s){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:l}))})})}function CV(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const f=u.batch,m=f.keys();let w=M.resolve();return m.forEach(x=>{w=w.next(()=>d.getEntry(c,x)).next(R=>{const C=u.docVersions.get(x);_e(C!==null,48541),R.version.compareTo(C)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),d.addEntry(R)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=de();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function PS(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function bV(t,e){const n=re(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,f)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(_t.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(f,w),function(R,C,E){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=RV?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,w,d)&&l.push(n.li.updateTargetData(s,w))});let c=Ar(),u=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(NV(s,o,e.documentUpdates).next(d=>{c=d.Bs,u=d.Ls})),!r.isEqual(te.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(f=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.vs=i,s))}function NV(t,e,n){let r=de(),i=de();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ar();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):q(Eg,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Bs:o,Ls:i}})}function DV(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ag),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OV(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Cp(t,e,n){const r=re(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;q(Eg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function B0(t,e,n){const r=re(t);let i=te.min(),s=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=re(c),m=f.Fs.get(d);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(u,d)}(r,o,Xn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:de())).next(l=>(LV(r,EL(e),l),{documents:l,ks:s})))}function LV(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class $0{constructor(){this.activeTargetIds=RL()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VV{constructor(){this.vo=new $0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new $0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MV{Mo(e){}shutdown(){}}/**
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
 */const z0="ConnectivityMonitor";class H0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(z0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(z0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mc=null;function bp(){return mc===null?mc=function(){return 268435456+Math.round(2147483648*Math.random())}():mc++,"0x"+mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="RestConnection",jV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class UV{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===xu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=bp(),l=this.Qo(e,n.toUriEncodedString());q(Gd,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,i,s);const{host:u}=new URL(l),d=us(u);return this.zo(e,l,c,r,d).then(f=>(q(Gd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw es(Gd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=jV[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection",ra=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Gs extends UV{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Gs.c_){const e=b1();ra(e,C1.STAT_EVENT,n=>{n.stat===vp.PROXY?q(Et,"STAT_EVENT: detected buffering proxy"):n.stat===vp.NOPROXY&&q(Et,"STAT_EVENT: detected no buffering proxy")}),Gs.c_=!0}}zo(e,n,r,i,s){const o=bp();return new Promise((l,c)=>{const u=new P1;u.setWithCredentials(!0),u.listenOnce(x1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case jc.NO_ERROR:const f=u.getResponseJson();q(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case jc.TIMEOUT:q(Et,`RPC '${e}' ${o} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const m=u.getStatus();if(q(Et,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w==null?void 0:w.error;if(x&&x.status&&x.message){const R=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(x.status);c(new W(R,x.message))}else c(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(Et,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);q(Et,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}T_(e,n,r){const i=bp(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");q(Et,`Creating RPC '${e}' stream ${i}: ${u}`,l);const d=o.createWebChannel(u,l);this.E_(d);let f=!1,m=!1;const w=new FV({Jo:x=>{m?q(Et,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(f||(q(Et,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),q(Et,`RPC '${e}' stream ${i} sending:`,x),d.send(x))},Ho:()=>d.close()});return ra(d,ga.EventType.OPEN,()=>{m||(q(Et,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),ra(d,ga.EventType.CLOSE,()=>{m||(m=!0,q(Et,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.I_(d))}),ra(d,ga.EventType.ERROR,x=>{m||(m=!0,es(Et,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),w.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),ra(d,ga.EventType.MESSAGE,x=>{var R;if(!m){const C=x.data[0];_e(!!C,16349);const E=C,v=(E==null?void 0:E.error)||((R=E[0])==null?void 0:R.error);if(v){q(Et,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let O=function(T){const _=Ge[T];if(_!==void 0)return pS(_)}(S),j=v.message;S==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&es(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=V.INTERNAL,j="Unknown error status: "+S+" with message "+v.message),m=!0,w.o_(new W(O,j)),d.close()}else q(Et,`RPC '${e}' stream ${i} received:`,C),w.__(C)}}),Gs.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return N1()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(t){return new Gs(t)}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){return new WL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gs.c_=!1;class xS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="PersistentStream";class CS{constructor(e,n,r,i,s,o,l,c){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new xS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(W0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(W0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $V extends CS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=GL(this.serializer,e),r=function(s){if(!("targetChange"in s))return te.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Zn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=xp(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=Sp(c)?{documents:JL(s,c)}:{query:XL(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=yS(s,o.resumeToken);const u=kp(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Du(s,o.snapshotVersion.toTimestamp());const u=kp(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=eV(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=xp(this.serializer),n.removeTarget=e,this.q_(n)}}class zV extends CS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=YL(e.writeResults,e.commitTime),r=Zn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=xp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QL(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{}class WV extends HV{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Rp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function qV(t,e,n,r){return new WV(t,e,n,r)}class KV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sr(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="RemoteStore";class GV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{ms(this)&&(q(ts,"Restarting streams for network reachability change."),await async function(c){const u=re(c);u.Ia.add(4),await bl(u),u.Va.set("Unknown"),u.Ia.delete(4),await bh(u)}(this))})}),this.Va=new KV(r,i)}}async function bh(t){if(ms(t))for(const e of t.Ra)await e(!0)}async function bl(t){for(const e of t.Ra)await e(!1)}function bS(t,e){const n=re(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Ag(n)?Sg(n):Ro(n).O_()&&Ig(n,e))}function Tg(t,e){const n=re(t),r=Ro(n);n.Ea.delete(e),r.O_()&&NS(n,e),n.Ea.size===0&&(r.O_()?r.L_():ms(n)&&n.Va.set("Unknown"))}function Ig(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ro(t).Z_(e)}function NS(t,e){t.da.$e(e),Ro(t).X_(e)}function Sg(t){t.da=new BL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ro(t).start(),t.Va.ua()}function Ag(t){return ms(t)&&!Ro(t).x_()&&t.Ea.size>0}function ms(t){return re(t).Ia.size===0}function DS(t){t.da=void 0}async function QV(t){t.Va.set("Online")}async function YV(t){t.Ea.forEach((e,n)=>{Ig(t,e)})}async function JV(t,e){DS(t),Ag(t)?(t.Va.ha(e),Sg(t)):t.Va.set("Unknown")}async function XV(t,e,n){if(t.Va.set("Online"),e instanceof gS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){q(ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lu(t,r)}else if(e instanceof $c?t.da.Xe(e):e instanceof mS?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await PS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=s.Ea.get(u);d&&s.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=s.Ea.get(c);if(!d)return;s.Ea.set(c,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),NS(s,c);const f=new Jr(d.target,c,u,d.sequenceNumber);Ig(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q(ts,"Failed to raise snapshot:",r),await Lu(t,r)}}async function Lu(t,e,n){if(!Ao(e))throw e;t.Ia.add(1),await bl(t),t.Va.set("Offline"),n||(n=()=>PS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(ts,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await bh(t)})}function OS(t,e){return e().catch(n=>Lu(t,n,e))}async function Nh(t){const e=re(t),n=vi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ag;for(;ZV(e);)try{const i=await DV(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,eM(e,i)}catch(i){await Lu(e,i)}LS(e)&&VS(e)}function ZV(t){return ms(t)&&t.Ta.length<10}function eM(t,e){t.Ta.push(e);const n=vi(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function LS(t){return ms(t)&&!vi(t).x_()&&t.Ta.length>0}function VS(t){vi(t).start()}async function tM(t){vi(t).ra()}async function nM(t){const e=vi(t);for(const n of t.Ta)e.ea(n.mutations)}async function rM(t,e,n){const r=t.Ta.shift(),i=mg.from(r,e,n);await OS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Nh(t)}async function iM(t,e){e&&vi(t).Y_&&await async function(r,i){if(function(o){return jL(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();vi(r).B_(),await OS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Nh(r)}}(t,e),LS(t)&&VS(t)}async function q0(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),q(ts,"RemoteStore received new credentials");const r=ms(n);n.Ia.add(3),await bl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await bh(n)}async function sM(t,e){const n=re(t);e?(n.Ia.delete(2),await bh(n)):e||(n.Ia.add(2),await bl(n),n.Va.set("Unknown"))}function Ro(t){return t.ma||(t.ma=function(n,r,i){const s=re(n);return s.sa(),new $V(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:QV.bind(null,t),Yo:YV.bind(null,t),t_:JV.bind(null,t),H_:XV.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Ag(t)?Sg(t):t.Va.set("Unknown")):(await t.ma.stop(),DS(t))})),t.ma}function vi(t){return t.fa||(t.fa=function(n,r,i){const s=re(n);return s.sa(),new zV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:tM.bind(null,t),t_:iM.bind(null,t),ta:nM.bind(null,t),na:rM.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Nh(t)):(await t.fa.stop(),t.Ta.length>0&&(q(ts,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new kg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rg(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Ao(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{static emptySet(e){return new Qs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ya(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class K0{constructor(){this.ga=new Oe(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class fo{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new fo(e,n,Qs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oM{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class aM{constructor(){this.queries=G0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=G0(),s.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function G0(){return new ps(t=>tS(t),Ah)}async function Pg(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new oM,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Rg(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Cg(n)}async function xg(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lM(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Cg(n)}function cM(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Cg(t){t.Ca.forEach(e=>{e.next()})}var Np,Q0;(Q0=Np||(Np={})).Ma="default",Q0.Cache="cache";class bg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Np.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.key=e}}class jS{constructor(e){this.key=e}}class uM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.eu=nS(e),this.tu=new Qs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new K0,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),w=kh(this.query,f)?f:null,x=!!m&&this.mutatedKeys.has(m.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let C=!1;m&&w?m.data.isEqual(w.data)?x!==R&&(r.track({type:3,doc:w}),C=!0):this.su(m,w)||(r.track({type:2,doc:w}),C=!0,(c&&this.eu(w,c)>0||u&&this.eu(w,u)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),C=!0):m&&!w&&(r.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(w?(o=o.add(w),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(w,x){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:C})}};return R(w)-R(x)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],c=this.Ya.size===0&&this.current&&!i?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new fo(this.query,e.tu,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new K0,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new jS(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new MS(r))}),n}cu(e){this.Za=e.ks,this.Ya=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return fo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ng="SyncEngine";class hM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class dM{constructor(e){this.key=e,this.hu=!1}}class fM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ps(l=>tS(l),Ah),this.Eu=new Map,this.Iu=new Set,this.Ru=new Oe(X.comparator),this.Au=new Map,this.Vu=new _g,this.du={},this.mu=new Map,this.fu=ho.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function pM(t,e,n=!0){const r=HS(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await US(r,e,n,!0),i}async function mM(t,e){const n=HS(t);await US(n,e,!0,!1)}async function US(t,e,n,r){const i=await OV(t.localStore,Xn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await gM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&bS(t.remoteStore,i),l}async function gM(t,e,n,r,i){t.pu=(f,m,w)=>async function(R,C,E,v){let S=C.view.ru(E);S.bs&&(S=await B0(R.localStore,C.query,!1).then(({documents:T})=>C.view.ru(T,S)));const O=v&&v.targetChanges.get(C.targetId),j=v&&v.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(S,R.isPrimaryClient,O,j);return J0(R,C.targetId,F.au),F.snapshot}(t,f,m,w);const s=await B0(t.localStore,e,!0),o=new uM(e,s.ks),l=o.ru(s.documents),c=Cl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);J0(t,n,u.au);const d=new hM(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),u.snapshot}async function yM(t,e,n){const r=re(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!Ah(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tg(r.remoteStore,i.targetId),Dp(r,i.targetId)}).catch(So)):(Dp(r,i.targetId),await Cp(r.localStore,i.targetId,!0))}async function _M(t,e){const n=re(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tg(n.remoteStore,r.targetId))}async function vM(t,e,n){const r=kM(t);try{const i=await function(o,l){const c=re(o),u=Re.now(),d=l.reduce((w,x)=>w.add(x.key),de());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let x=Ar(),R=de();return c.xs.getEntries(w,d).next(C=>{x=C,x.forEach((E,v)=>{v.isValidDocument()||(R=R.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,x)).next(C=>{f=C;const E=[];for(const v of l){const S=DL(v,f.get(v.key).overlayedDocument);S!=null&&E.push(new Ri(v.key,S,K1(S.value.mapValue),yn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,E,l)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(w,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:iS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Oe(he)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u}(r,i.batchId,n),await Nl(r,i.changes),await Nh(r.remoteStore)}catch(i){const s=Rg(i,"Failed to persist write");n.reject(s)}}async function FS(t,e){const n=re(t);try{const r=await bV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?_e(o.hu,14607):i.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await Nl(n,r,e)}catch(r){await So(r)}}function Y0(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=re(o);c.onlineState=l;let u=!1;c.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(u=!0)}),u&&Cg(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wM(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Oe(X.comparator);o=o.insert(s,St.newNoDocument(s,te.min()));const l=de().add(s),c=new xh(te.min(),new Map,new Oe(he),o,l);await FS(r,c),r.Ru=r.Ru.remove(s),r.Au.delete(e),Dg(r)}else await Cp(r.localStore,e,!1).then(()=>Dp(r,e,n)).catch(So)}async function EM(t,e){const n=re(t),r=e.batch.batchId;try{const i=await CV(n.localStore,e);$S(n,r,null),BS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await So(i)}}async function TM(t,e,n){const r=re(t);try{const i=await function(o,l){const c=re(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(f=>(_e(f!==null,37113),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);$S(r,e,n),BS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await So(i)}}function BS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function $S(t,e,n){const r=re(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Dp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||zS(t,r)})}function zS(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Tg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Dg(t))}function J0(t,e,n){for(const r of n)r instanceof MS?(t.Vu.addReference(r.key,e),IM(t,r)):r instanceof jS?(q(Ng,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||zS(t,r.key)):ee(19791,{wu:r})}function IM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(q(Ng,"New document in limbo: "+n),t.Iu.add(r),Dg(t))}function Dg(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(Te.fromString(e)),r=t.fu.next();t.Au.set(r,new dM(n)),t.Ru=t.Ru.insert(n,r),bS(t.remoteStore,new Jr(Xn(Sh(n.path)),r,"TargetPurposeLimboResolution",Eh.ce))}}async function Nl(t,e,n){const r=re(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,c)=>{o.push(r.pu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=wg.Is(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,u){const d=re(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(u,m=>M.forEach(m.Ts,w=>d.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>M.forEach(m.Es,w=>d.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!Ao(f))throw f;q(Eg,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const w=d.vs.get(m),x=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(x);d.vs=d.vs.insert(m,R)}}}(r.localStore,s))}async function SM(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){q(Ng,"User change. New user:",e.toKey());const r=await RS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(c=>{c.reject(new W(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.Ns)}}function AM(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let i=de();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function HS(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=FS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wM.bind(null,e),e.Pu.H_=lM.bind(null,e.eventManager),e.Pu.yu=cM.bind(null,e.eventManager),e}function kM(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TM.bind(null,e),e}class Vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ch(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return xV(this.persistence,new kV,e.initialUser,this.serializer)}Cu(e){return new kS(vg.Vi,this.serializer)}Du(e){return new VV}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vu.provider={build:()=>new Vu};class RM extends Vu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof Ou,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hV(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new kS(r=>Ou.Vi(r,n),this.serializer)}}class Op{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=SM.bind(null,this.syncEngine),await sM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aM}()}createDatastore(e){const n=Ch(e.databaseInfo.databaseId),r=BV(e.databaseInfo);return qV(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new GV(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Y0(this.syncEngine,n,0),function(){return H0.v()?new H0:new MV}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,d){const f=new fM(i,s,o,l,c,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);q(ts,"RemoteStore shutting down."),s.Ia.add(5),await bl(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Op.provider={build:()=>new Op};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Og{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="FirestoreClient";class PM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Tt.UNAUTHENTICATED,this.clientId=og.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q(wi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(wi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yd(t,e){t.asyncQueue.verifyOperationInProgress(),q(wi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function X0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xM(t);q(wi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>q0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>q0(e.remoteStore,i)),t._onlineComponents=e}async function xM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(wi,"Using user provided OfflineComponentProvider");try{await Yd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;es("Error using user provided cache. Falling back to memory cache: "+n),await Yd(t,new Vu)}}else q(wi,"Using default OfflineComponentProvider"),await Yd(t,new RM(void 0));return t._offlineComponents}async function WS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(wi,"Using user provided OnlineComponentProvider"),await X0(t,t._uninitializedComponentsProvider._online)):(q(wi,"Using default OnlineComponentProvider"),await X0(t,new Op))),t._onlineComponents}function CM(t){return WS(t).then(e=>e.syncEngine)}async function Mu(t){const e=await WS(t),n=e.eventManager;return n.onListen=pM.bind(null,e.syncEngine),n.onUnlisten=yM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_M.bind(null,e.syncEngine),n}function bM(t,e,n,r){const i=new Og(r),s=new bg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Pg(await Mu(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>xg(await Mu(t),s))}}function NM(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Og({next:m=>{d.Nu(),o.enqueueAndForget(()=>xg(s,f));const w=m.docs.has(l);!w&&m.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&c&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new bg(Sh(l.path),d,{includeMetadataChanges:!0,qa:!0});return Pg(s,f)}(await Mu(t),t.asyncQueue,e,n,r)),r.promise}function DM(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const d=new Og({next:m=>{d.Nu(),o.enqueueAndForget(()=>xg(s,f)),m.fromCache&&c.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new bg(l,d,{includeMetadataChanges:!0,qa:!0});return Pg(s,f)}(await Mu(t),t.asyncQueue,e,n,r)),r.promise}function OM(t,e){const n=new mr;return t.asyncQueue.enqueueAndForget(async()=>vM(await CM(t),e,n)),n.promise}/**
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
 */function qS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="ComponentProvider",Z0=new Map;function VM(t,e,n,r,i){return new rL(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,qS(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firestore.googleapis.com",ew=!0;class tw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KS,this.ssl=ew}else this.host=e.host,this.ssl=e.ssl??ew;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cV)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}W2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new L2;switch(r.type){case"firstParty":return new U2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Z0.get(n);r&&(q(LM,"Removing Datastore"),Z0.delete(n),r.terminate())}(this),Promise.resolve()}}function MM(t,e,n,r={}){var u;t=Kt(t,Dh);const i=us(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Km(`https://${l}`),s.host!==KS&&s.host!==l&&es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:i,emulatorOptions:r};if(!pi(c,o)&&(t._setSettings(c),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Tt.MOCK_USER;else{d=xI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Tt(m)}t._authCredentials=new V2(new O1(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xr(this.firestore,e,this._query)}}class Fe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fe(this.firestore,e,this._key)}toJSON(){return{type:Fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pl(n,Fe._jsonSchema))return new Fe(e,r||null,new X(Te.fromString(n.referencePath)))}}Fe._jsonSchemaVersion="firestore/documentReference/1.0",Fe._jsonSchema={type:Ze("string",Fe._jsonSchemaVersion),referencePath:Ze("string")};class ui extends xr{constructor(e,n,r){super(e,n,Sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fe(this.firestore,null,new X(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function As(t,e,...n){if(t=ie(t),L1("collection","path",e),t instanceof Dh){const r=Te.fromString(e,...n);return p0(r),new ui(t,null,r)}{if(!(t instanceof Fe||t instanceof ui))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return p0(r),new ui(t.firestore,null,r)}}function hi(t,e,...n){if(t=ie(t),arguments.length===1&&(e=og.newId()),L1("doc","path",e),t instanceof Dh){const r=Te.fromString(e,...n);return f0(r),new Fe(t,null,new X(r))}{if(!(t instanceof Fe||t instanceof ui))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return f0(r),new Fe(t.firestore,t instanceof ui?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="AsyncQueue";class rw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new xS(this,"async_queue_retry"),this._c=()=>{const r=Qd();r&&q(nw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new mr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ao(e))throw e;q(nw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sr("INTERNAL UNHANDLED ERROR: ",iw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=kg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&ee(47125,{Pc:iw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function iw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class kr extends Dh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rw(e),this._firestoreClient=void 0,await e}}}function jM(t,e){const n=typeof t=="object"?t:lh(),r=typeof t=="string"?t:e||xu,i=hs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kI("firestore");s&&MM(i,...s)}return i}function Oh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||UM(t),t._firestoreClient}function UM(t){var r,i,s,o;const e=t._freezeSettings(),n=VM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new PM(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(_t.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pn(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pl(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:Ze("string",pn._jsonSchemaVersion),bytes:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Pl(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:Ze("string",er._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
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
 */class Dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pl(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Dn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:Ze("string",Dn._jsonSchemaVersion),vectorValues:Ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=/^__.*__$/;class BM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms):new xl(e,this.data,n,this.fieldTransforms)}}class GS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ri(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function QS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:t})}}class Lh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Lh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(QS(this.dataSource)&&FM.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class $M{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ch(e)}A(e,n,r,i=!1){return new Lh({dataSource:e,methodName:n,targetDoc:r,path:mt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vh(t){const e=t._freezeSettings(),n=Ch(t._databaseId);return new $M(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YS(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);Ug("Data must be an object, but it was:",o,r);const l=JS(r,o);let c,u;if(s.merge)c=new nn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=ns(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);eA(d,m)||d.push(m)}c=new nn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new BM(new Ft(l),c,u)}class Mh extends Po{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mh}}function zM(t,e,n){return new Lh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vg extends Po{_toFieldTransform(e){return new fg(e.path,new fl)}isEqual(e){return e instanceof Vg}}class Mg extends Po{constructor(e,n){super(e),this.Sc=n}_toFieldTransform(e){const n=zM(this,e,!0),r=this.Sc.map(s=>xo(s,n)),i=new uo(r);return new fg(e.path,i)}isEqual(e){return e instanceof Mg&&pi(this.Sc,e.Sc)}}class jg extends Po{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new ml(e.serializer,aS(e.serializer,this.bc));return new fg(e.path,n)}isEqual(e){return e instanceof jg&&this.bc===e.bc}}function HM(t,e,n,r){const i=t.A(1,e,n);Ug("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();ki(r,(c,u)=>{const d=ZS(e,c,n);u=ie(u);const f=i.fc(d);if(u instanceof Mh)s.push(d);else{const m=xo(u,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new nn(s);return new GS(o,l,i.fieldTransforms)}function WM(t,e,n,r,i,s){const o=t.A(1,e,n),l=[ns(e,r,n)],c=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(ns(e,s[m])),c.push(s[m+1]);const u=[],d=Ft.empty();for(let m=l.length-1;m>=0;--m)if(!eA(u,l[m])){const w=l[m];let x=c[m];x=ie(x);const R=o.fc(w);if(x instanceof Mh)u.push(w);else{const C=xo(x,R);C!=null&&(u.push(w),d.set(w,C))}}const f=new nn(u);return new GS(d,f,o.fieldTransforms)}function qM(t,e,n,r=!1){return xo(n,t.A(r?4:3,e))}function xo(t,e){if(XS(t=ie(t)))return Ug("Unsupported field value:",e,t),JS(t,e);if(t instanceof Po)return function(r,i){if(!QS(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=xo(l,i.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return aS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Du(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(i.serializer,s)}}if(r instanceof er)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:yS(i.serializer,r._byteString)};if(r instanceof Fe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){const c=o instanceof Dn?o.toArray():o;return{mapValue:{fields:{[H1]:{stringValue:q1},[Cu]:{arrayValue:{values:c.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return dg(l.serializer,d)})}}}}}}(r,i);if(SS(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${wh(r)}`)}(t,e)}function JS(t,e){const n={};return j1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=xo(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function XS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof er||t instanceof pn||t instanceof Fe||t instanceof Po||t instanceof Dn||SS(t))}function Ug(t,e,n){if(!XS(n)||!V1(n)){const r=wh(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ns(t,e,n){if((e=ie(e))instanceof Lg)return e._internalPath;if(typeof e=="string")return ZS(t,e);throw ju("Field path arguments must be of type string or ",t,!1,void 0,n)}const KM=new RegExp("[~\\*/\\[\\]]");function ZS(t,e,n){if(e.search(KM)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lg(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ju(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(V.INVALID_ARGUMENT,l+t+c)}function eA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{convertValue(e,n="none"){switch(_i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Cu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>We(o.doubleValue));return new Dn(n)}convertGeoPoint(e){return new er(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ih(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cl(e));default:return null}}convertTimestamp(e){const n=gi(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);_e(IS(r),9688,{name:e});const i=new ul(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||Sr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Fg extends GM{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fe(this.firestore,null,n)}}function sw(){return new Vg("serverTimestamp")}function M6(...t){return new Mg("arrayUnion",t)}function j6(t){return new jg("increment",t)}const ow="@firebase/firestore",aw="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QM extends tA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bg{}class $g extends Bg{}function ia(t,e,...n){let r=[];e instanceof Bg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof zg).length,l=s.filter(c=>c instanceof jh).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class jh extends $g{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new jh(e,n,r)}_apply(e){const n=this._parse(e);return rA(e._query,n),new xr(e.firestore,e.converter,Ap(e._query,n))}_parse(e){const n=Vh(e.firestore);return function(s,o,l,c,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){uw(f,d);const x=[];for(const R of f)x.push(cw(c,s,R));m={arrayValue:{values:x}}}else m=cw(c,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||uw(f,d),m=qM(l,o,f,d==="in"||d==="not-in");return Xe.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Sn(t,e,n){const r=e,i=ns("where",t);return jh._create(i,r,n)}class zg extends Bg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)rA(o,c),o=Ap(o,c)}(e._query,n),new xr(e.firestore,e.converter,Ap(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hg extends $g{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dl(s,o)}(e._query,this._field,this._direction);return new xr(e.firestore,e.converter,wL(e._query,n))}}function U6(t,e="asc"){const n=e,r=ns("orderBy",t);return Hg._create(r,n)}class Wg extends $g{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wg(e,n,r)}_apply(e){return new xr(e.firestore,e.converter,Nu(e._query,this._limit,this._limitType))}}function F6(t){return q2("limit",t),Wg._create("limit",t,"F")}function cw(t,e,n){if(typeof(n=ie(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eS(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!X.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return T0(t,new X(r))}if(n instanceof Fe)return T0(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wh(n)}.`)}function uw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function rA(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function iA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hi extends tA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hi._jsonSchema={type:Ze("string",Hi._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class zc extends Hi{data(e={}){return super.data(e)}}class Wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zc(this._firestore,this._userDataWriter,r.key,r,new va(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new zc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new zc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new va(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:YM(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=og.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function YM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:Ze("string",Wi._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){t=Kt(t,Fe);const e=Kt(t.firestore,kr),n=Oh(e);return NM(n,t._key).then(r=>oA(e,t,r))}function gc(t){t=Kt(t,xr);const e=Kt(t.firestore,kr),n=Oh(e),r=new Fg(e);return nA(t._query),DM(n,t._query).then(i=>new Wi(e,r,t,i))}function hw(t,e,n){t=Kt(t,Fe);const r=Kt(t.firestore,kr),i=iA(t.converter,e,n),s=Vh(r);return Uh(r,[YS(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,yn.none())])}function Ys(t,e,n,...r){t=Kt(t,Fe);const i=Kt(t.firestore,kr),s=Vh(i);let o;return o=typeof(e=ie(e))=="string"||e instanceof Lg?WM(s,"updateDoc",t._key,e,n,r):HM(s,"updateDoc",t._key,e),Uh(i,[o.toMutation(t._key,yn.exists(!0))])}function B6(t){return Uh(Kt(t.firestore,kr),[new pg(t._key,yn.none())])}function JM(t,e){const n=Kt(t.firestore,kr),r=hi(t),i=iA(t.converter,e),s=Vh(t.firestore);return Uh(n,[YS(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function XM(t,...e){var u,d,f;t=ie(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||lw(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(lw(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let s,o,l;if(t instanceof Fe)o=Kt(t.firestore,kr),l=Sh(t._key.path),s={next:m=>{e[r]&&e[r](oA(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Kt(t,xr);o=Kt(m.firestore,kr),l=m._query;const w=new Fg(o);s={next:x=>{e[r]&&e[r](new Wi(o,w,m,x))},error:e[r+1],complete:e[r+2]},nA(t._query)}const c=Oh(o);return bM(c,l,i,s)}function Uh(t,e){const n=Oh(t);return OM(n,e)}function oA(t,e,n){const r=n.docs.get(e._key),i=new Fg(t);return new Hi(t,i,e._key,r,new va(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){O2(ds),Ln(new wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new kr(new M2(r.getProvider("auth-internal")),new F2(o,r.getProvider("app-check-internal")),iL(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Wt(ow,aw,e),Wt(ow,aw,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="firebasestorage.googleapis.com",lA="storageBucket",ZM=2*60*1e3,e4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Mn{constructor(e,n,r=0){super(Jd(e),`Firebase Storage: ${n} (${Jd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function Jd(t){return"storage/"+t}function qg(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Be.UNKNOWN,t)}function t4(t){return new ze(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function n4(t){return new ze(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function r4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Be.UNAUTHENTICATED,t)}function i4(){return new ze(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function s4(t){return new ze(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function o4(){return new ze(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function a4(){return new ze(Be.CANCELED,"User canceled the upload/download.")}function l4(t){return new ze(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function c4(t){return new ze(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function u4(){return new ze(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lA+"' property when initializing the app?")}function h4(){return new ze(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function d4(){return new ze(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function f4(t){return new ze(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Lp(t){return new ze(Be.INVALID_ARGUMENT,t)}function cA(){return new ze(Be.APP_DELETED,"The Firebase app was deleted.")}function p4(t){return new ze(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ja(t,e){return new ze(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sa(t){throw new ze(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw c4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",w=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),x={bucket:1,path:3},R=n===aA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${R}/${i}/${C}`,"i"),S=[{regex:l,indices:c,postModify:s},{regex:w,indices:x,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<S.length;O++){const j=S[O],F=j.regex.exec(e);if(F){const T=F[j.indices.bucket];let _=F[j.indices.path];_||(_=""),r=new rn(T,_),j.postModify(r);break}}if(r==null)throw l4(e);return r}}class m4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g4(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(w,c())},C)}function m(){s&&clearTimeout(s)}function w(C,...E){if(u){m();return}if(C){m(),d.call(null,C,...E);return}if(c()||o){m(),d.call(null,C,...E);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,f(S)}let x=!1;function R(C){x||(x=!0,m(),!u&&(i!==null?(C||(l=2),clearTimeout(i),f(0)):C||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function y4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){return t!==void 0}function v4(t){return typeof t=="object"&&!Array.isArray(t)}function Kg(t){return typeof t=="string"||t instanceof String}function dw(t){return Gg()&&t instanceof Blob}function Gg(){return typeof Blob<"u"}function fw(t,e,n,r){if(r<e)throw Lp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Lp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function uA(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qi||(qi={}));/**
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
 */function w4(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n,r,i,s,o,l,c,u,d,f,m=!0,w=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,R)=>{this.resolve_=x,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===qi.NO_ERROR,c=s.getStatus();if(!l||w4(c,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===qi.ABORT;r(!1,new yc(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new yc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());_4(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=qg();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?cA():a4();o(c)}else{const c=o4();o(c)}};this.canceled_?n(!1,new yc(!1,null,!0)):this.backoffId_=g4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function T4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function I4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function S4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function A4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function k4(t,e,n,r,i,s,o=!0,l=!1){const c=uA(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return S4(d,e),T4(d,n),I4(d,s),A4(d,r),new E4(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function P4(...t){const e=R4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gg())return new Blob(t);throw new ze(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function x4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function C4(t){if(typeof atob>"u")throw f4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xd{constructor(e,n){this.data=e,this.contentType=n||null}}function b4(t,e){switch(t){case Qn.RAW:return new Xd(hA(e));case Qn.BASE64:case Qn.BASE64URL:return new Xd(dA(t,e));case Qn.DATA_URL:return new Xd(D4(e),O4(e))}throw qg()}function hA(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function N4(t){let e;try{e=decodeURIComponent(t)}catch{throw ja(Qn.DATA_URL,"Malformed data URL.")}return hA(e)}function dA(t,e){switch(t){case Qn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Qn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ja(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=C4(e)}catch(i){throw i.message.includes("polyfill")?i:ja(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fA{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ja(Qn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=L4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function D4(t){const e=new fA(t);return e.base64?dA(Qn.BASE64,e.rest):N4(e.rest)}function O4(t){return new fA(t).contentType}function L4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){let r=0,i="";dw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(dw(this.data_)){const r=this.data_,i=x4(r,e,n);return i===null?null:new qr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qr(r,!0)}}static getBlob(...e){if(Gg()){const n=e.map(r=>r instanceof qr?r.data_:r);return new qr(P4.apply(null,n))}else{const n=e.map(o=>Kg(o)?b4(Qn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new qr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){let e;try{e=JSON.parse(t)}catch{return null}return v4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function M4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mA(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j4(t,e){return e}class bt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||j4}}let _c=null;function U4(t){return!Kg(t)||t.length<2?t:mA(t)}function gA(){if(_c)return _c;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(s,o){return U4(o)}const n=new bt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),_c=t,_c}function F4(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function B4(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return F4(r,t),r}function yA(t,e,n){const r=pA(e);return r===null?null:B4(t,r,n)}function $4(t,e,n,r){const i=pA(e);if(i===null||!Kg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),w=Qg(m,n,r),x=uA({alt:"media",token:u});return w+x})[0]}function z4(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class _A{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t){if(!t)throw qg()}function H4(t,e){function n(r,i){const s=yA(t,i,e);return vA(s!==null),s}return n}function W4(t,e){function n(r,i){const s=yA(t,i,e);return vA(s!==null),$4(s,i,t.host,t._protocol)}return n}function wA(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=i4():i=r4():n.getStatus()===402?i=n4(t.bucket):n.getStatus()===403?i=s4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function q4(t){const e=wA(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=t4(t.path)),s.serverResponse=i.serverResponse,s}return n}function K4(t,e,n){const r=e.fullServerUrl(),i=Qg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new _A(i,s,W4(t,n),o);return l.errorHandler=q4(e),l}function G4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Q4(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=G4(null,e)),r}function Y4(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let O=0;O<2;O++)S=S+Math.random().toString().slice(2);return S}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=Q4(e,r,i),d=z4(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",w=qr.getBlob(f,r,m);if(w===null)throw h4();const x={name:u.fullPath},R=Qg(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,v=new _A(R,C,H4(t,n),E);return v.urlParams=x,v.headers=o,v.body=w.uploadData(),v.errorHandler=wA(e),v}class J4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i,s){if(this.sent_)throw sa("cannot .send() more than once");if(us(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class X4 extends J4{initXhr(){this.xhr_.responseType="text"}}function EA(){return new X4}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mA(this._location.path)}get storage(){return this._service}get parent(){const e=V4(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw p4(e)}}function Z4(t,e,n){t._throwIfRoot("uploadBytes");const r=Y4(t.storage,t._location,gA(),new qr(e,!0),n);return t.storage.makeRequestWithTokens(r,EA).then(i=>({metadata:i,ref:t}))}function ej(t){t._throwIfRoot("getDownloadURL");const e=K4(t.storage,t._location,gA());return t.storage.makeRequestWithTokens(e,EA).then(n=>{if(n===null)throw d4();return n})}function tj(t,e){const n=M4(t._location.path,e),r=new rn(t._location.bucket,n);return new rs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nj(t){return/^[A-Za-z]+:\/\//.test(t)}function rj(t,e){return new rs(t,e)}function TA(t,e){if(t instanceof Yg){const n=t;if(n._bucket==null)throw u4();const r=new rs(n,n._bucket);return e!=null?TA(r,e):r}else return e!==void 0?tj(t,e):t}function ij(t,e){if(e&&nj(e)){if(t instanceof Yg)return rj(t,e);throw Lp("To use ref(service, url), the first argument must be a Storage instance.")}else return TA(t,e)}function pw(t,e){const n=e==null?void 0:e[lA];return n==null?null:rn.makeFromBucketSpec(n,t)}function sj(t,e,n,r={}){t.host=`${e}:${n}`;const i=us(e);i&&Km(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:xI(s,t.app.options.projectId))}class Yg{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=aA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ZM,this._maxUploadRetryTime=e4,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=pw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=pw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new m4(cA());{const o=k4(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const mw="@firebase/storage",gw="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="storage";function $6(t,e,n){return t=ie(t),Z4(t,e,n)}function z6(t){return t=ie(t),ej(t)}function H6(t,e){return t=ie(t),ij(t,e)}function oj(t=lh(),e){t=ie(t);const r=hs(t,IA).getImmediate({identifier:e}),i=kI("storage");return i&&aj(r,...i),r}function aj(t,e,n,r={}){sj(t,e,n,r)}function lj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Yg(n,r,i,e,ds)}function cj(){Ln(new wn(IA,lj,"PUBLIC").setMultipleInstances(!0)),Wt(mw,gw,""),Wt(mw,gw,"esm2020")}cj();const SA="@firebase/installations",Jg="0.6.21";/**
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
 */const AA=1e4,kA=`w:${Jg}`,RA="FIS_v2",uj="https://firebaseinstallations.googleapis.com/v1",hj=60*60*1e3,dj="installations",fj="Installations";/**
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
 */const pj={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},is=new cs(dj,fj,pj);function PA(t){return t instanceof Mn&&t.code.includes("request-failed")}/**
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
 */function xA({projectId:t}){return`${uj}/projects/${t}/installations`}function CA(t){return{token:t.token,requestStatus:2,expiresIn:gj(t.expiresIn),creationTime:Date.now()}}async function bA(t,e){const r=(await e.json()).error;return is.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function NA({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mj(t,{refreshToken:e}){const n=NA(t);return n.append("Authorization",yj(e)),n}async function DA(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gj(t){return Number(t.replace("s","000"))}function yj(t){return`${RA} ${t}`}/**
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
 */async function _j({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xA(t),i=NA(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:RA,appId:t.appId,sdkVersion:kA},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await DA(()=>fetch(r,l));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:CA(u.authToken)}}else throw await bA("Create Installation",c)}/**
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
 */function OA(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function vj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wj=/^[cdef][\w-]{21}$/,Vp="";function Ej(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Tj(t);return wj.test(n)?n:Vp}catch{return Vp}}function Tj(t){return vj(t).substr(0,22)}/**
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
 */const LA=new Map;function VA(t,e){const n=Fh(t);MA(n,e),Ij(n,e)}function MA(t,e){const n=LA.get(t);if(n)for(const r of n)r(e)}function Ij(t,e){const n=Sj();n&&n.postMessage({key:t,fid:e}),Aj()}let Bi=null;function Sj(){return!Bi&&"BroadcastChannel"in self&&(Bi=new BroadcastChannel("[Firebase] FID Change"),Bi.onmessage=t=>{MA(t.data.key,t.data.fid)}),Bi}function Aj(){LA.size===0&&Bi&&(Bi.close(),Bi=null)}/**
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
 */const kj="firebase-installations-database",Rj=1,ss="firebase-installations-store";let Zd=null;function Xg(){return Zd||(Zd=ah(kj,Rj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ss)}}})),Zd}async function Uu(t,e){const n=Fh(t),i=(await Xg()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&VA(t,e.fid),e}async function jA(t){const e=Fh(t),r=(await Xg()).transaction(ss,"readwrite");await r.objectStore(ss).delete(e),await r.done}async function Bh(t,e){const n=Fh(t),i=(await Xg()).transaction(ss,"readwrite"),s=i.objectStore(ss),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&VA(t,l.fid),l}/**
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
 */async function Zg(t){let e;const n=await Bh(t.appConfig,r=>{const i=Pj(r),s=xj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Vp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Pj(t){const e=t||{fid:Ej(),registrationStatus:0};return UA(e)}function xj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(is.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Cj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bj(t)}:{installationEntry:e}}async function Cj(t,e){try{const n=await _j(t,e);return Uu(t.appConfig,n)}catch(n){throw PA(n)&&n.customData.serverCode===409?await jA(t.appConfig):await Uu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bj(t){let e=await yw(t.appConfig);for(;e.registrationStatus===1;)await OA(100),e=await yw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Zg(t);return r||n}return e}function yw(t){return Bh(t,e=>{if(!e)throw is.create("installation-not-found");return UA(e)})}function UA(t){return Nj(t)?{fid:t.fid,registrationStatus:0}:t}function Nj(t){return t.registrationStatus===1&&t.registrationTime+AA<Date.now()}/**
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
 */async function Dj({appConfig:t,heartbeatServiceProvider:e},n){const r=Oj(t,n),i=mj(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:kA,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},c=await DA(()=>fetch(r,l));if(c.ok){const u=await c.json();return CA(u)}else throw await bA("Generate Auth Token",c)}function Oj(t,{fid:e}){return`${xA(t)}/${e}/authTokens:generate`}/**
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
 */async function ey(t,e=!1){let n;const r=await Bh(t.appConfig,s=>{if(!FA(s))throw is.create("not-registered");const o=s.authToken;if(!e&&Mj(o))return s;if(o.requestStatus===1)return n=Lj(t,e),s;{if(!navigator.onLine)throw is.create("app-offline");const l=Uj(s);return n=Vj(t,l),l}});return n?await n:r.authToken}async function Lj(t,e){let n=await _w(t.appConfig);for(;n.authToken.requestStatus===1;)await OA(100),n=await _w(t.appConfig);const r=n.authToken;return r.requestStatus===0?ey(t,e):r}function _w(t){return Bh(t,e=>{if(!FA(e))throw is.create("not-registered");const n=e.authToken;return Fj(n)?{...e,authToken:{requestStatus:0}}:e})}async function Vj(t,e){try{const n=await Dj(t,e),r={...e,authToken:n};return await Uu(t.appConfig,r),n}catch(n){if(PA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jA(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Uu(t.appConfig,r)}throw n}}function FA(t){return t!==void 0&&t.registrationStatus===2}function Mj(t){return t.requestStatus===2&&!jj(t)}function jj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hj}function Uj(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Fj(t){return t.requestStatus===1&&t.requestTime+AA<Date.now()}/**
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
 */async function Bj(t){const e=t,{installationEntry:n,registrationPromise:r}=await Zg(e);return r?r.catch(console.error):ey(e).catch(console.error),n.fid}/**
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
 */async function $j(t,e=!1){const n=t;return await zj(n),(await ey(n,e)).token}async function zj(t){const{registrationPromise:e}=await Zg(t);e&&await e}/**
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
 */function Hj(t){if(!t||!t.options)throw ef("App Configuration");if(!t.name)throw ef("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ef(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ef(t){return is.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="installations",Wj="installations-internal",qj=t=>{const e=t.getProvider("app").getImmediate(),n=Hj(e),r=hs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kj=t=>{const e=t.getProvider("app").getImmediate(),n=hs(e,BA).getImmediate();return{getId:()=>Bj(n),getToken:i=>$j(n,i)}};function Gj(){Ln(new wn(BA,qj,"PUBLIC")),Ln(new wn(Wj,Kj,"PRIVATE"))}Gj();Wt(SA,Jg);Wt(SA,Jg,"esm2020");/**
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
 */const Qj="/firebase-messaging-sw.js",Yj="/firebase-cloud-messaging-push-scope",$A="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Jj="https://fcmregistrations.googleapis.com/v1",zA="google.c.a.c_id",Xj="google.c.a.c_l",Zj="google.c.a.ts",eU="google.c.a.e",vw=1e4;var ww;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ww||(ww={}));/**
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
 */function ar(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function tU(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const tf="fcm_token_details_db",nU=5,Ew="fcm_token_object_Store";async function rU(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(tf))return null;let e=null;return(await ah(tf,nU,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(Ew))return;const l=o.objectStore(Ew),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:u.createTime??Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:ar(u.vapidKey)}}}else if(i===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ar(u.auth),p256dh:ar(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ar(u.vapidKey)}}}else if(i===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ar(u.auth),p256dh:ar(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ar(u.vapidKey)}}}}}})).close(),await Ud(tf),await Ud("fcm_vapid_details_db"),await Ud("undefined"),iU(e)?e:null}function iU(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const sU="firebase-messaging-database",oU=1,yl="firebase-messaging-store";let nf=null;function HA(){return nf||(nf=ah(sU,oU,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yl)}}})),nf}async function aU(t){const e=WA(t),r=await(await HA()).transaction(yl).objectStore(yl).get(e);if(r)return r;{const i=await rU(t.appConfig.senderId);if(i)return await ty(t,i),i}}async function ty(t,e){const n=WA(t),i=(await HA()).transaction(yl,"readwrite");return await i.objectStore(yl).put(e,n),await i.done,e}function WA({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Lt=new cs("messaging","Messaging",lU);/**
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
 */async function cU(t,e){const n=await ry(t),r=qA(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(ny(t.appConfig),i)).json()}catch(o){throw Lt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Lt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Lt.create("token-subscribe-no-token");return s.token}async function uU(t,e){const n=await ry(t),r=qA(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${ny(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Lt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Lt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Lt.create("token-update-no-token");return s.token}async function hU(t,e){const r={method:"DELETE",headers:await ry(t)};try{const s=await(await fetch(`${ny(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Lt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Lt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function ny({projectId:t}){return`${Jj}/projects/${t}/registrations`}async function ry({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function qA({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==$A&&(i.web.applicationPubKey=r),i}/**
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
 */const dU=7*24*60*60*1e3;async function fU(t){const e=await mU(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ar(e.getKey("auth")),p256dh:ar(e.getKey("p256dh"))},r=await aU(t.firebaseDependencies);if(r){if(gU(r.subscriptionOptions,n))return Date.now()>=r.createTime+dU?pU(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await hU(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Tw(t.firebaseDependencies,n)}else return Tw(t.firebaseDependencies,n)}async function pU(t,e){try{const n=await uU(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await ty(t.firebaseDependencies,r),n}catch(n){throw n}}async function Tw(t,e){const r={token:await cU(t,e),createTime:Date.now(),subscriptionOptions:e};return await ty(t,r),r.token}async function mU(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:tU(e)})}function gU(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return yU(e,t),_U(e,t),vU(e,t),e}function yU(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function _U(t,e){e.data&&(t.data=e.data)}function vU(t,e){var i,s,o,l;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(l=e.fcmOptions)==null?void 0:l.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
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
 */function wU(t){return typeof t=="object"&&!!t&&zA in t}/**
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
 */EU("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function EU(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function TU(t){if(!t||!t.options)throw rf("App Configuration Object");if(!t.name)throw rf("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw rf(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function rf(t){return Lt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IU{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=TU(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SU(t){try{t.swRegistration=await navigator.serviceWorker.register(Qj,{scope:Yj}),t.swRegistration.update().catch(()=>{}),await AU(t.swRegistration)}catch(e){throw Lt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function AU(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${vw} ms`)),vw),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kU(t,e){if(!e&&!t.swRegistration&&await SU(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Lt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RU(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=$A)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KA(t,e){if(!navigator)throw Lt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Lt.create("permission-blocked");return await RU(t,e==null?void 0:e.vapidKey),await kU(t,e==null?void 0:e.serviceWorkerRegistration),fU(t)}/**
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
 */async function PU(t,e,n){const r=xU(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[zA],message_name:n[Xj],message_time:n[Zj],message_device_time:Math.floor(Date.now()/1e3)})}function xU(t){switch(t){case gl.NOTIFICATION_CLICKED:return"notification_open";case gl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CU(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===gl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Iw(n)):t.onMessageHandler.next(Iw(n)));const r=n.data;wU(r)&&r[eU]==="1"&&await PU(t,n.messageType,r)}const Sw="@firebase/messaging",Aw="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=t=>{const e=new IU(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>CU(e,n)),e},NU=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>KA(e,r)}};function DU(){Ln(new wn("messaging",bU,"PUBLIC")),Ln(new wn("messaging-internal",NU,"PRIVATE")),Wt(Sw,Aw),Wt(Sw,Aw,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GA(){try{await bI()}catch{return!1}return typeof window<"u"&&CI()&&kb()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OU(t=lh()){return GA().then(e=>{if(!e)throw Lt.create("unsupported-browser")},e=>{throw Lt.create("indexed-db-unsupported")}),hs(ie(t),"messaging").getImmediate()}async function LU(t,e){return t=ie(t),KA(t,e)}DU();const VU={apiKey:"AIzaSyBIvnhJLz_ucsxuFEnZeYSAq2L6vJ4DcKo",authDomain:"apna-college-bihar.firebaseapp.com",projectId:"apna-college-bihar",storageBucket:"apna-college-bihar.firebasestorage.app",messagingSenderId:"818059891079",appId:"1:818059891079:web:395df6af749da04ae80322",measurementId:"G-BXF7KW1XQS"},$h=OI(VU),un=C2($h);aO(un,f1);const en=jM($h),W6=oj($h),sf=new Kn;let Mp=null;const MU="BH6y12rFJXEQn3t8FqmAbbpueil73WUVRBhbrsG6ETst3G4gQAwAmonzB6-ybjIMH55L91LYSw4XEBKM7jnt8Pw";GA().then(t=>{t&&(Mp=OU($h))}).catch(t=>console.log("Firebase messaging not supported:",t));/*! Capacitor: https://capacitorjs.com/ - MIT License */var os;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(os||(os={}));class Hc extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const jU=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},UU=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},i=()=>e!==null?e.name:jU(t),s=()=>i()!=="web",o=f=>{const m=u.get(f);return!!(m!=null&&m.platforms.has(i())||l(f))},l=f=>{var m;return(m=n.PluginHeaders)===null||m===void 0?void 0:m.find(w=>w.name===f)},c=f=>t.console.error(f),u=new Map,d=(f,m={})=>{const w=u.get(f);if(w)return console.warn(`Capacitor plugin "${f}" already registered. Cannot register plugins twice.`),w.proxy;const x=i(),R=l(f);let C;const E=async()=>(!C&&x in m?C=typeof m[x]=="function"?C=await m[x]():C=m[x]:e!==null&&!C&&"web"in m&&(C=typeof m.web=="function"?C=await m.web():C=m.web),C),v=(_,I)=>{var k,P;if(R){const b=R==null?void 0:R.methods.find(A=>I===A.name);if(b)return b.rtype==="promise"?A=>n.nativePromise(f,I.toString(),A):(A,pe)=>n.nativeCallback(f,I.toString(),A,pe);if(_)return(k=_[I])===null||k===void 0?void 0:k.bind(_)}else{if(_)return(P=_[I])===null||P===void 0?void 0:P.bind(_);throw new Hc(`"${f}" plugin is not implemented on ${x}`,os.Unimplemented)}},S=_=>{let I;const k=(...P)=>{const b=E().then(A=>{const pe=v(A,_);if(pe){const Q=pe(...P);return I=Q==null?void 0:Q.remove,Q}else throw new Hc(`"${f}.${_}()" is not implemented on ${x}`,os.Unimplemented)});return _==="addListener"&&(b.remove=async()=>I()),b};return k.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:_,writable:!1,configurable:!1}),k},O=S("addListener"),j=S("removeListener"),F=(_,I)=>{const k=O({eventName:_},I),P=async()=>{const A=await k;j({eventName:_,callbackId:A},I)},b=new Promise(A=>k.then(()=>A({remove:P})));return b.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await P()},b},T=new Proxy({},{get(_,I){switch(I){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return R?F:O;case"removeListener":return j;default:return S(I)}}});return r[f]=T,u.set(f,{name:f,proxy:T,platforms:new Set([...Object.keys(m),...R?[x]:[]])}),T};return n.convertFileSrc||(n.convertFileSrc=f=>f),n.getPlatform=i,n.handleError=c,n.isNativePlatform=s,n.isPluginAvailable=o,n.registerPlugin=d,n.Exception=Hc,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},FU=t=>t.Capacitor=UU(t),xn=FU(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),jn=xn.registerPlugin;class zh{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(n),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new xn.Exception(e,os.Unimplemented)}unavailable(e="not available"){return new xn.Exception(e,os.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const i=r.indexOf(n);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const BU=jn("WebView"),kw=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Rw=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class $U extends zh{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Rw(i).trim(),s=Rw(s).trim(),n[i]=s}),n}async setCookie(e){try{const n=kw(e.key),r=kw(e.value),i=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",s=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${i}; path=${s}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}const zU=jn("CapacitorCookies",{web:()=>new $U}),HU=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>n(i),r.readAsDataURL(t)}),WU=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(i=>i.toLocaleLowerCase()).reduce((i,s,o)=>(i[s]=t[e[o]],i),{})},qU=(t,e=!0)=>t?Object.entries(t).reduce((r,i)=>{const[s,o]=i;let l,c;return Array.isArray(o)?(c="",o.forEach(u=>{l=e?encodeURIComponent(u):u,c+=`${s}=${l}&`}),c.slice(0,-1)):(l=e?encodeURIComponent(o):o,c=`${s}=${l}`),`${r}&${c}`},"").substr(1):null,QA=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),i=WU(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))s.set(o,l);n.body=s.toString()}else if(i.includes("multipart/form-data")||t.data instanceof FormData){const s=new FormData;if(t.data instanceof FormData)t.data.forEach((l,c)=>{s.append(c,l)});else for(const l of Object.keys(t.data))s.append(l,t.data[l]);n.body=s;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(i.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class KU extends zh{async request(e){const n=QA(e,e.webFetchExtra),r=qU(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,n),o=s.headers.get("content-type")||"";let{responseType:l="text"}=s.ok?e:{};o.includes("application/json")&&(l="json");let c,u;switch(l){case"arraybuffer":case"blob":u=await s.blob(),c=await HU(u);break;case"json":c=await s.json();break;case"document":case"text":default:c=await s.text()}const d={};return s.headers.forEach((f,m)=>{d[m]=f}),{data:c,headers:d,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}const GU=jn("CapacitorHttp",{web:()=>new KU});var jp;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(jp||(jp={}));var Up;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(Up||(Up={}));class QU extends zh{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}const YU=jn("SystemBars",{web:()=>new QU}),q6=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:xn,CapacitorCookies:zU,CapacitorException:Hc,CapacitorHttp:GU,get ExceptionCode(){return os},get SystemBarType(){return Up},SystemBars:YU,get SystemBarsStyle(){return jp},WebPlugin:zh,WebView:BU,buildRequestInit:QA,registerPlugin:jn},Symbol.toStringTag,{value:"Module"}));var Pw;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(Pw||(Pw={}));var xw;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(xw||(xw={}));const JU=jn("FirebaseAuthentication",{web:()=>se(()=>import("./web.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),YA=D.createContext();function Co(){return D.useContext(YA)}function XU({children:t}){const[e,n]=D.useState(null),[r,i]=D.useState(!0),s=D.useRef(!1),o={STUDENT:"STUDENT",ADMIN:"ADMIN",SUPER_ADMIN:"SUPER_ADMIN"},l=async R=>{if(!R){console.log("[AUTH] No user to sync."),n(null);return}if(!s.current){s.current=!0,console.log("[AUTH] Syncing profile for:",R.email);try{const C=hi(en,"users",R.uid),E=await sA(C),v=R.email==="prince86944@gmail.com";if(E.exists()){const S=E.data();console.log("[AUTH] Existing user data found:",S.role),v&&S.role!==o.SUPER_ADMIN?(await Ys(C,{role:o.SUPER_ADMIN}),n({...R,...S,role:o.SUPER_ADMIN})):n({...R,...S})}else{console.log("[AUTH] No existing profile. Creating new entry...");const S={uid:R.uid,name:R.displayName||"Scholar",email:R.email,phone:R.phoneNumber||"",createdAt:sw(),role:v?o.SUPER_ADMIN:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};await hw(C,S),n({...R,...S})}}catch(C){console.error("[AUTH] Profile sync critical failure:",C),n({uid:R.uid,email:R.email,name:R.displayName||"Scholar",role:R.email==="prince86944@gmail.com"?o.SUPER_ADMIN:o.STUDENT})}finally{s.current=!1}}};async function c(R,C,E,v){const S=await XD(un,R,C),O={uid:S.user.uid,name:E,email:R,phone:v,createdAt:sw(),role:o.STUDENT,groupsCreatedToday:0,lastGroupCreateDate:null};return await hw(hi(en,"users",S.user.uid),O),S.user}async function u(R,C){return ZD(un,R,C)}async function d(){var C;if(xn.isNativePlatform())try{const E=await JU.signInWithGoogle();if((C=E==null?void 0:E.credential)!=null&&C.idToken){const v=Kn.credential(E.credential.idToken),S=await mh(un,v);return await l(S.user),S.user}throw new Error("Native Google Login failed")}catch(E){console.error("Native Google Login Error:",E);const v=await n0(un,sf);return await l(v.user),v.user}else try{const E=await n0(un,sf);return await l(E.user),E.user}catch(E){return console.warn("Popup failed or blocked, falling back to Redirect...",E),await $O(un,sf)}}function f(R){return window.recaptchaVerifier||(window.recaptchaVerifier=new bO(un,"recaptcha-container",{size:"invisible"})),DO(un,R,window.recaptchaVerifier)}async function m(R){e&&(await Ys(hi(en,"users",e.uid),R),n(C=>({...C,...R})))}function w(){return hO(un)}D.useEffect(()=>uO(un,async C=>{e||i(!0);try{C?await l(C):n(null)}catch(E){console.error("Auth sync error:",E)}finally{i(!1)}}),[]),D.useEffect(()=>{WO(un).then(async R=>{R!=null&&R.user&&(console.log("[AUTH] Redirect result success:",R.user.email),await l(R.user))}).catch(R=>{console.error("[AUTH] Redirect result error:",R)})},[]);const x={user:e,ROLES:o,login:u,signup:c,logout:w,googleLogin:d,setupRecaptcha:f,updateProfileData:m,loading:r};return g.jsx(YA.Provider,{value:x,children:t})}const zn=jn("Preferences",{web:()=>se(()=>import("./web2.js"),[]).then(t=>new t.PreferencesWeb)}),ye=jn("AppBlocker"),JA=D.createContext(null);function Cw(){return D.useContext(JA)}function ZU({children:t}){const{user:e}=Co(),n=(H,Y)=>{try{const oe=localStorage.getItem(H);return oe!==null?JSON.parse(oe):Y}catch{return Y}},[r,i]=D.useState(!1),[s,o]=D.useState(0),[l,c]=D.useState("OTHERS"),[u,d]=D.useState(0),[f,m]=D.useState(0),[w,x]=D.useState(0),[R,C]=D.useState("COUNTDOWN"),[E,v]=D.useState(!1),[S,O]=D.useState(!1),[j,F]=D.useState(()=>n("allowedPackages","")),[T,_]=D.useState(()=>n("lockMode","NORMAL")),[I,k]=D.useState([]),[P,b]=D.useState(""),A=D.useRef(null),pe=()=>{var H,Y,oe,Ce,Se;return xn.isNativePlatform()||typeof window<"u"&&window.Capacitor&&(((Y=(H=window.Capacitor).isNativePlatform)==null?void 0:Y.call(H))||((Ce=(oe=window.Capacitor).isPluginAvailable)==null?void 0:Ce.call(oe,"AppBlocker")))||((Se=xn.isPluginAvailable)==null?void 0:Se.call(xn,"AppBlocker"))},Q=async()=>{if(pe())try{if(ye&&ye.getInstalledApps){const{apps:H}=await ye.getInstalledApps();k(H.sort((Y,oe)=>Y.name.localeCompare(oe.name)))}}catch(H){console.error("Fetch Apps Error:",H)}};D.useEffect(()=>{(async()=>{if(pe()){await Q();try{const Y=await zn.get({key:"countdownEndTime"}),oe=Number(Y.value||0);if(oe>Date.now()){const Ce=Math.ceil((oe-Date.now())/1e3);o(Ce),i(!0),C("COUNTDOWN");const Se=await zn.get({key:"allowedPackages"});Se.value&&F(Se.value),console.log("Restored active focus session on initialization:",Ce,"seconds remaining")}else ye&&ye.stopBlocker&&await ye.stopBlocker(),await zn.set({key:"isBlockerActive",value:"false"}),await zn.set({key:"countdownEndTime",value:"0"}),localStorage.setItem("timerActive","false")}catch(Y){console.error("Error restoring blocker state:",Y)}}else localStorage.setItem("timerActive","false");localStorage.setItem("focusBroken","false")})()},[]);const le=H=>{if(F(H),localStorage.setItem("allowedPackages",JSON.stringify(H)),pe()){zn.set({key:"allowedPackages",value:H});try{const Y=(H||"").split(",").filter(Boolean);Y.includes("com.apnacollegebihar.online")||Y.push("com.apnacollegebihar.online"),ye&&ye.setAllowedPackages&&ye.setAllowedPackages({packages:Y})}catch{}}},Le=H=>{_(H),localStorage.setItem("lockMode",JSON.stringify(H)),pe()&&zn.set({key:"lockMode",value:H})},$=H=>{if(H||v(!1),i(H),localStorage.setItem("timerActive",JSON.stringify(H)),pe())try{if(H){if(ye&&ye.setBlockerActive&&ye.setBlockerActive({active:!0}),R==="COUNTDOWN"){ye&&ye.startCountdown&&ye.startCountdown({minutes:Math.ceil(s/60)});const oe=Date.now()+s*1e3;zn.set({key:"countdownEndTime",value:String(oe)})}const Y=(j||"").split(",").filter(Boolean);Y.includes("com.apnacollegebihar.online")||Y.push("com.apnacollegebihar.online"),ye&&ye.setAllowedPackages&&ye.setAllowedPackages({packages:Y}),zn.set({key:"isBlockerActive",value:"true"})}else ye&&ye.stopBlocker&&ye.stopBlocker(),zn.set({key:"isBlockerActive",value:"false"}),zn.set({key:"countdownEndTime",value:"0"})}catch(Y){console.error("Native Blocker Error:",Y)}},Z=H=>{O(H),localStorage.setItem("focusBroken",JSON.stringify(H))};D.useEffect(()=>{const H=Y=>{Y.key==="timerActive"&&i(JSON.parse(Y.newValue)),Y.key==="focusBroken"&&O(JSON.parse(Y.newValue)),Y.key==="lockMode"&&_(JSON.parse(Y.newValue))};return window.addEventListener("storage",H),()=>window.removeEventListener("storage",H)},[]),D.useEffect(()=>{r||o(R==="COUNTDOWN"?u*3600+f*60+w:0)},[R,u,f,w,r]);const ne=async(H=null)=>{if(!e)return;const Y=H||(E?u*3600+f*60+w+s:R==="STOPWATCH"?s:u*3600+f*60-s);if(Y<5){v(!1),$(!1);return}try{const oe=new Date().toLocaleDateString("en-CA");await JM(As(en,"StudySessions"),{userId:e.uid,userName:e.name||"Scholar",subject:l,duration:Y,date:oe,createdAt:new Date().toISOString()});const Ce=hi(en,"users",e.uid),Se=await sA(Ce);if(Se.exists()){const ot=Se.data(),Rt=ot.lastStudyDate!==oe?Y:(ot.todayStudyTime||0)+Y,Gt=new Date;Gt.setDate(Gt.getDate()-1);const Pt=Gt.toLocaleDateString("en-CA");let Qt=ot.streak||0,He=ot.streakDate||"";He!==oe&&He!==Pt&&(Qt=0),Rt>=7200&&He!==oe&&(He===Pt?Qt+=1:Qt=1,He=oe),await Ys(Ce,{totalStudyTime:(ot.totalStudyTime||0)+Y,todayStudyTime:Rt,lastStudyDate:oe,streak:Qt,streakDate:He,isStudying:!1})}P&&(await Ys(hi(en,"Tasks",P),{done:!0}),b("")),v(!1),$(!1)}catch(oe){v(!1),console.error("Global Save Error:",oe)}};D.useEffect(()=>{e&&Ys(hi(en,"users",e.uid),{isStudying:r}).catch(()=>{})},[r,e]),D.useEffect(()=>{const H=Y=>{r&&(Y.preventDefault(),Y.returnValue="")};return window.addEventListener("beforeunload",H),()=>{window.removeEventListener("beforeunload",H)}},[r]),D.useEffect(()=>(r?A.current=setInterval(()=>{o(R==="COUNTDOWN"?H=>H<=1?(C("STOPWATCH"),v(!0),0):H-1:H=>H+1)},1e3):clearInterval(A.current),()=>clearInterval(A.current)),[r,R,e,u,f,w,P]);const we={timerActive:r,setTimerActive:$,timerTime:s,setTimerTime:o,timerSubject:l,setTimerSubject:c,customHours:u,setCustomHours:d,customMinutes:f,setCustomMinutes:m,customSeconds:w,setCustomSeconds:x,timerMode:R,setTimerMode:C,overtimeActive:E,setOvertimeActive:v,saveGlobalSession:ne,focusBroken:S,setFocusBroken:Z,allowedPackages:j,setAllowedPackages:le,lockMode:T,setLockMode:Le,installedApps:I,fetchApps:Q,selectedTaskId:P,setSelectedTaskId:b,launchApp:async H=>{if(pe())try{ye&&ye.unlockApp&&await ye.unlockApp(),ye&&ye.launchApp&&await ye.launchApp({packageName:H})}catch(Y){console.error(Y)}},openUsageAccessSettings:async()=>{if(pe())try{ye&&ye.requestUsageStatsPermission&&await ye.requestUsageStatsPermission()}catch(H){console.error(H)}}};return g.jsx(JA.Provider,{value:we,children:t})}const eF=jn("App",{web:()=>se(()=>import("./web3.js"),[]).then(t=>new t.AppWeb)});var bw;(function(t){t[t.Sunday=1]="Sunday",t[t.Monday=2]="Monday",t[t.Tuesday=3]="Tuesday",t[t.Wednesday=4]="Wednesday",t[t.Thursday=5]="Thursday",t[t.Friday=6]="Friday",t[t.Saturday=7]="Saturday"})(bw||(bw={}));const oa=jn("LocalNotifications",{web:()=>se(()=>import("./web4.js"),[]).then(t=>new t.LocalNotificationsWeb)});var tF=typeof Element<"u",nF=typeof Map=="function",rF=typeof Set=="function",iF=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Wc(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Wc(t[r],e[r]))return!1;return!0}var s;if(nF&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Wc(r.value[1],e.get(r.value[0])))return!1;return!0}if(rF&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(iF&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(tF&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Wc(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var sF=function(e,n){try{return Wc(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const oF=Fu(sF);var aF=function(t,e,n,r,i,s,o,l){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,l],d=0;c=new Error(e.replace(/%s/g,function(){return u[d++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},lF=aF;const Nw=Fu(lF);var cF=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var d=o[u];if(!c(d))return!1;var f=e[d],m=n[d];if(s=r?r.call(i,f,m,d):void 0,s===!1||s===void 0&&f!==m)return!1}return!0};const uF=Fu(cF);var XA=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(XA||{}),of={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Dw=Object.values(XA),Hh={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},ZA=Object.entries(Hh).reduce((t,[e,n])=>(t[n]=e,t),{}),Cn="data-rh",Js={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Xs=(t,e)=>{for(let n=t.length-1;n>=0;n-=1){const r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},hF=t=>{let e=Xs(t,"title");const n=Xs(t,Js.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,()=>e);const r=Xs(t,Js.DEFAULT_TITLE);return e||r||void 0},dF=t=>Xs(t,Js.ON_CHANGE_CLIENT_STATE)||(()=>{}),af=(t,e)=>e.filter(n=>typeof n[t]<"u").map(n=>n[t]).reduce((n,r)=>({...n,...r}),{}),fF=(t,e)=>e.filter(n=>typeof n.base<"u").map(n=>n.base).reverse().reduce((n,r)=>{if(!n.length){const i=Object.keys(r);for(let s=0;s<i.length;s+=1){const l=i[s].toLowerCase();if(t.indexOf(l)!==-1&&r[l])return n.concat(r)}}return n},[]),pF=t=>console&&typeof console.warn=="function"&&console.warn(t),aa=(t,e,n)=>{const r={};return n.filter(i=>Array.isArray(i[t])?!0:(typeof i[t]<"u"&&pF(`Helmet: ${t} should be of type "Array". Instead found type "${typeof i[t]}"`),!1)).map(i=>i[t]).reverse().reduce((i,s)=>{const o={};s.filter(c=>{let u;const d=Object.keys(c);for(let m=0;m<d.length;m+=1){const w=d[m],x=w.toLowerCase();e.indexOf(x)!==-1&&!(u==="rel"&&c[u].toLowerCase()==="canonical")&&!(x==="rel"&&c[x].toLowerCase()==="stylesheet")&&(u=x),e.indexOf(w)!==-1&&(w==="innerHTML"||w==="cssText"||w==="itemprop")&&(u=w)}if(!u||!c[u])return!1;const f=c[u].toLowerCase();return r[u]||(r[u]={}),o[u]||(o[u]={}),r[u][f]?!1:(o[u][f]=!0,!0)}).reverse().forEach(c=>i.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const u=l[c],d={...r[u],...o[u]};r[u]=d}return i},[]).reverse()},mF=(t,e)=>{if(Array.isArray(t)&&t.length){for(let n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},gF=t=>({baseTag:fF(["href"],t),bodyAttributes:af("bodyAttributes",t),defer:Xs(t,Js.DEFER),encode:Xs(t,Js.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:af("htmlAttributes",t),linkTags:aa("link",["rel","href"],t),metaTags:aa("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:aa("noscript",["innerHTML"],t),onChangeClientState:dF(t),scriptTags:aa("script",["src","innerHTML"],t),styleTags:aa("style",["cssText"],t),title:hF(t),titleAttributes:af("titleAttributes",t),prioritizeSeoTags:mF(t,Js.PRIORITIZE_SEO_TAGS)}),ek=t=>Array.isArray(t)?t.join(""):t,yF=(t,e)=>{const n=Object.keys(t);for(let r=0;r<n.length;r+=1)if(e[n[r]]&&e[n[r]].includes(t[n[r]]))return!0;return!1},lf=(t,e)=>Array.isArray(t)?t.reduce((n,r)=>(yF(r,e)?n.priority.push(r):n.default.push(r),n),{priority:[],default:[]}):{default:t,priority:[]},Ow=(t,e)=>({...t,[e]:void 0}),_F=["noscript","script","style"],Fp=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),tk=t=>Object.keys(t).reduce((e,n)=>{const r=typeof t[n]<"u"?`${n}="${t[n]}"`:`${n}`;return e?`${e} ${r}`:r},""),vF=(t,e,n,r)=>{const i=tk(n),s=ek(e);return i?`<${t} ${Cn}="true" ${i}>${Fp(s,r)}</${t}>`:`<${t} ${Cn}="true">${Fp(s,r)}</${t}>`},wF=(t,e,n=!0)=>e.reduce((r,i)=>{const s=i,o=Object.keys(s).filter(u=>!(u==="innerHTML"||u==="cssText")).reduce((u,d)=>{const f=typeof s[d]>"u"?d:`${d}="${Fp(s[d],n)}"`;return u?`${u} ${f}`:f},""),l=s.innerHTML||s.cssText||"",c=_F.indexOf(t)===-1;return`${r}<${t} ${Cn}="true" ${o}${c?"/>":`>${l}</${t}>`}`},""),nk=(t,e={})=>Object.keys(t).reduce((n,r)=>{const i=Hh[r];return n[i||r]=t[r],n},e),EF=(t,e,n)=>{const r={key:e,[Cn]:!0},i=nk(n,r);return[G.createElement("title",i,e)]},qc=(t,e)=>e.map((n,r)=>{const i={key:r,[Cn]:!0};return Object.keys(n).forEach(s=>{const l=Hh[s]||s;if(l==="innerHTML"||l==="cssText"){const c=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:c}}else i[l]=n[s]}),G.createElement(t,i)}),hn=(t,e,n=!0)=>{switch(t){case"title":return{toComponent:()=>EF(t,e.title,e.titleAttributes),toString:()=>vF(t,e.title,e.titleAttributes,n)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>nk(e),toString:()=>tk(e)};default:return{toComponent:()=>qc(t,e),toString:()=>wF(t,e,n)}}},TF=({metaTags:t,linkTags:e,scriptTags:n,encode:r})=>{const i=lf(t,of.meta),s=lf(e,of.link),o=lf(n,of.script);return{priorityMethods:{toComponent:()=>[...qc("meta",i.priority),...qc("link",s.priority),...qc("script",o.priority)],toString:()=>`${hn("meta",i.priority,r)} ${hn("link",s.priority,r)} ${hn("script",o.priority,r)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},IF=t=>{const{baseTag:e,bodyAttributes:n,encode:r=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:u}=t;let{linkTags:d,metaTags:f,scriptTags:m}=t,w={toComponent:()=>[],toString:()=>""};return u&&({priorityMethods:w,linkTags:d,metaTags:f,scriptTags:m}=TF(t)),{priority:w,base:hn("base",e,r),bodyAttributes:hn("bodyAttributes",n,r),htmlAttributes:hn("htmlAttributes",i,r),link:hn("link",d,r),meta:hn("meta",f,r),noscript:hn("noscript",s,r),script:hn("script",m,r),style:hn("style",o,r),title:hn("title",{title:l,titleAttributes:c},r)}},Bp=IF,vc=[],iy=!!(typeof window<"u"&&window.document&&window.document.createElement),$p=class{constructor(t,e){ir(this,"instances",[]);ir(this,"canUseDOM",iy);ir(this,"context");ir(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?vc:this.instances,add:t=>{(this.canUseDOM?vc:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?vc:this.instances).indexOf(t);(this.canUseDOM?vc:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Bp({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},SF=parseInt(G.version.split(".")[0],10),zp=SF>=19,AF={},rk=G.createContext(AF),Zs,ik=(Zs=class extends D.Component{constructor(n){super(n);ir(this,"helmetData");zp?this.helmetData=null:this.helmetData=new $p(this.props.context||{},Zs.canUseDOM)}render(){return zp?G.createElement(G.Fragment,null,this.props.children):G.createElement(rk.Provider,{value:this.helmetData.value},this.props.children)}},ir(Zs,"canUseDOM",iy),Zs),ws=(t,e)=>{const n=document.head||document.querySelector("head"),r=n.querySelectorAll(`${t}[${Cn}]`),i=[].slice.call(r),s=[];let o;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const u in l)if(Object.prototype.hasOwnProperty.call(l,u))if(u==="innerHTML")c.innerHTML=l.innerHTML;else if(u==="cssText"){const d=l.cssText;c.appendChild(document.createTextNode(d))}else{const d=u,f=typeof l[d]>"u"?"":l[d];c.setAttribute(u,f)}c.setAttribute(Cn,"true"),i.some((u,d)=>(o=d,c.isEqualNode(u)))?i.splice(o,1):s.push(c)}),i.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),s.forEach(l=>n.appendChild(l)),{oldTags:i,newTags:s}},Hp=(t,e)=>{const n=document.getElementsByTagName(t)[0];if(!n)return;const r=n.getAttribute(Cn),i=r?r.split(","):[],s=[...i],o=Object.keys(e);for(const l of o){const c=e[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),i.indexOf(l)===-1&&i.push(l);const u=s.indexOf(l);u!==-1&&s.splice(u,1)}for(let l=s.length-1;l>=0;l-=1)n.removeAttribute(s[l]);i.length===s.length?n.removeAttribute(Cn):n.getAttribute(Cn)!==o.join(",")&&n.setAttribute(Cn,o.join(","))},kF=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=ek(t)),Hp("title",e)},Lw=(t,e)=>{const{baseTag:n,bodyAttributes:r,htmlAttributes:i,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:u,styleTags:d,title:f,titleAttributes:m}=t;Hp("body",r),Hp("html",i),kF(f,m);const w={baseTag:ws("base",n),linkTags:ws("link",s),metaTags:ws("meta",o),noscriptTags:ws("noscript",l),scriptTags:ws("script",u),styleTags:ws("style",d)},x={},R={};Object.keys(w).forEach(C=>{const{newTags:E,oldTags:v}=w[C];E.length&&(x[C]=E),v.length&&(R[C]=w[C].oldTags)}),e&&e(),c(t,x,R)},la=null,RF=t=>{la&&cancelAnimationFrame(la),t.defer?la=requestAnimationFrame(()=>{Lw(t,()=>{la=null})}):(Lw(t),la=null)},PF=RF,Vw=class extends D.Component{constructor(){super(...arguments);ir(this,"rendered",!1)}shouldComponentUpdate(e){return!uF(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:n}=this.props.context;let r=null;const i=gF(e.get().map(s=>{const{context:o,...l}=s.props;return l}));ik.canUseDOM?PF(i):Bp&&(r=Bp(i)),n(r)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Kc=[],Mw=t=>{const e={};for(const n of Object.keys(t))e[ZA[n]||n]=t[n];return e},Di=t=>{const e={};for(const n of Object.keys(t)){const r=Hh[n];e[r||n]=t[n]}return e},jw=(t,e)=>{if(!iy)return;const n=document.getElementsByTagName(t)[0];if(!n)return;const r="data-rh-managed",i=n.getAttribute(r),s=i?i.split(","):[],o=Object.keys(e);for(const l of s)o.includes(l)||n.removeAttribute(l);for(const l of o){const c=e[l];c==null||c===!1?n.removeAttribute(l):c===!0?n.setAttribute(l,""):n.setAttribute(l,String(c))}o.length>0?n.setAttribute(r,o.join(",")):n.removeAttribute(r)},cf=()=>{const t={},e={};for(const n of Kc){const{htmlAttributes:r,bodyAttributes:i}=n.props;r&&Object.assign(t,Mw(r)),i&&Object.assign(e,Mw(i))}jw("html",t),jw("body",e)},xF=class extends D.Component{componentDidMount(){Kc.push(this),cf()}componentDidUpdate(){cf()}componentWillUnmount(){const t=Kc.indexOf(this);t!==-1&&Kc.splice(t,1),cf()}resolveTitle(){const{title:t,titleTemplate:e,defaultTitle:n}=this.props;return t&&e?e.replace(/%s/g,()=>Array.isArray(t)?t.join(""):t):t||n||void 0}renderTitle(){const t=this.resolveTitle();if(t===void 0)return null;const e=this.props.titleAttributes||{};return G.createElement("title",Di(e),t)}renderBase(){const{base:t}=this.props;return t?G.createElement("base",Di(t)):null}renderMeta(){const{meta:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("meta",{key:n,...Di(e)}))}renderLink(){const{link:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>G.createElement("link",{key:n,...Di(e)}))}renderScript(){const{script:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("script",{key:n,...s})})}renderStyle(){const{style:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{cssText:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("style",{key:n,...s})})}renderNoscript(){const{noscript:t}=this.props;return!t||!Array.isArray(t)?null:t.map((e,n)=>{const{innerHTML:r,...i}=e,s=Di(i);return r&&(s.dangerouslySetInnerHTML={__html:r}),G.createElement("noscript",{key:n,...s})})}render(){return G.createElement(G.Fragment,null,this.renderTitle(),this.renderBase(),this.renderMeta(),this.renderLink(),this.renderScript(),this.renderStyle(),this.renderNoscript())}},ff,CF=(ff=class extends D.Component{shouldComponentUpdate(t){return!oF(Ow(this.props,"helmetData"),Ow(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,n,r){return{...e,[t.type]:[...e[t.type]||[],{...n,...this.mapNestedChildrenToProps(t,r)}]}}mapObjectTypeChildren(t,e,n,r){switch(t.type){case"title":return{...e,[t.type]:r,titleAttributes:{...n}};case"body":return{...e,bodyAttributes:{...n}};case"html":return{...e,htmlAttributes:{...n}};default:return{...e,[t.type]:{...n}}}}mapArrayTypeChildrenToProps(t,e){let n={...e};return Object.keys(t).forEach(r=>{n={...n,[r]:t[r]}}),n}warnOnInvalidChildren(t,e){return Nw(Dw.some(n=>t.type===n),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Dw.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Nw(!e||typeof e=="string"||Array.isArray(e)&&!e.some(n=>typeof n!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let n={};return G.Children.forEach(t,r=>{if(!r||!r.props)return;const{children:i,...s}=r.props,o=Object.keys(s).reduce((c,u)=>(c[ZA[u]||u]=s[u],c),{});let{type:l}=r;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(r,i),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(i,e);break;case"link":case"meta":case"noscript":case"script":case"style":n=this.flattenArrayTypeChildren(r,n,o,i);break;default:e=this.mapObjectTypeChildren(r,e,o,i);break}}),this.mapArrayTypeChildrenToProps(n,e)}render(){const{children:t,...e}=this.props;let n={...e},{helmetData:r}=e;if(t&&(n=this.mapChildrenToProps(t,n)),r&&!(r instanceof $p)){const i=r;r=new $p(i.context,!0),delete n.helmetData}return zp?G.createElement(xF,{...n}):r?G.createElement(Vw,{...n,context:r.value}):G.createElement(rk.Consumer,null,i=>G.createElement(Vw,{...n,context:i}))}},ir(ff,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),ff);function bF({title:t="Apna College Bihar | UGEAC Counselling, B.Tech Notes, PYQ & College Predictor",description:e="Bihar Engineering Counselling 2025 - UGEAC College Predictor, Cutoff Ranks, B.Tech Notes, PYQ Papers & CGPA Calculator. Official resource for Bihar Engineering students.",keywords:n="UGEAC 2025, Bihar Engineering Counselling, BCECE counselling, Bihar college predictor, B.Tech Notes PDF, Engineering Study Material Bihar",url:r="https://www.apnacollegebihar.online/",image:i="https://www.apnacollegebihar.online/acb_brand_final.png",schema:s=null}){const o=t.includes("Apna College Bihar")?t:`${t} | Apna College Bihar`;return G.useEffect(()=>{document.title=o;const l=document.querySelector('meta[name="description"]');l&&l.setAttribute("content",e);const c=document.querySelector('meta[property="og:title"]');c&&c.setAttribute("content",o);const u=document.querySelector('meta[property="og:description"]');u&&u.setAttribute("content",e)},[o,e]),g.jsxs(CF,{children:[g.jsx("title",{children:o}),g.jsx("meta",{name:"description",content:e}),g.jsx("meta",{name:"keywords",content:n}),g.jsx("link",{rel:"canonical",href:r}),g.jsx("meta",{property:"og:type",content:"website"}),g.jsx("meta",{property:"og:url",content:r}),g.jsx("meta",{property:"og:title",content:o}),g.jsx("meta",{property:"og:description",content:e}),g.jsx("meta",{property:"og:site_name",content:"Apna College Bihar"}),g.jsx("meta",{property:"og:image",content:i}),g.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),g.jsx("meta",{name:"twitter:title",content:o}),g.jsx("meta",{name:"twitter:description",content:e}),g.jsx("meta",{name:"twitter:image",content:i}),s&&g.jsx("script",{type:"application/ld+json",children:JSON.stringify(s)})]})}const uf=jn("AppBlocker");function Uw(){var pe;const t=xn.isNativePlatform(),e=vo(),n=Hm(),{user:r,updateProfileData:i,logout:s,loading:o}=Co(),[l,c]=D.useState(""),[u,d]=D.useState(!1),[f,m]=D.useState(!1),[w,x]=D.useState(navigator.onLine),{timerActive:R,lockMode:C}=Cw(),[E,v]=D.useState(!1),[S,O]=D.useState(null),[j,F]=D.useState(!1),T=[{title:"BEU Tools",items:[{name:"BEU Result",path:"/beu-result",icon:g.jsx(Av,{size:16})},{name:"Attendance",path:"/attendance",icon:g.jsx(ab,{size:16})},{name:"Timetable",path:"/timetable",icon:g.jsx(Iv,{size:16})},{name:"Notes",path:"/notes",icon:g.jsx(Ev,{size:16})},{name:"PYQ Papers",path:"/pyq",icon:g.jsx(ib,{size:16})},{name:"SGPA / CGPA",path:"/cgpa",icon:g.jsx(sb,{size:16})},{name:"Syllabus",path:"/syllabus",icon:g.jsx(ob,{size:16})}]},{title:"Study Tools",items:[{name:"Study Timer",path:"/study",icon:g.jsx(bv,{size:16})},{name:"Scientific Calc",path:"/calculator",icon:g.jsx(Tv,{size:16})},{name:"Study Resources",path:"/study-resources",icon:g.jsx(kv,{size:16})},{name:"Personal Manager",path:"/extras",icon:g.jsx(lb,{size:16})},{name:"Achievements",path:"/achievements",icon:g.jsx(rb,{size:16})}]},{title:"Counselling",items:[{name:"College Predictor",path:"/ugeac-predictor?tab=finder",icon:g.jsx(xv,{size:16})},{name:"Rank Predictor",path:"/ugeac-predictor?tab=predictor",icon:g.jsx(Tv,{size:16})},{name:"Counselling Guide",path:"/ugeac-predictor?tab=guide",icon:g.jsx(Ev,{size:16})}]}];D.useEffect(()=>{const Q=()=>x(!0),le=()=>x(!1);return window.addEventListener("online",Q),window.addEventListener("offline",le),()=>{window.removeEventListener("online",Q),window.removeEventListener("offline",le)}},[]),D.useEffect(()=>{d(!1),(async()=>{if(!(!r||!w)&&!t&&Mp)try{if(await Notification.requestPermission()==="granted"){const Le=await LU(Mp,{vapidKey:MU});Le&&await Ys(hi(en,"users",r.uid),{fcmToken:Le})}}catch(le){console.error("Push notification setup failed:",le)}})()},[r,w,t]),D.useEffect(()=>{if(!r||!r.uid||!w)return;const Q=new Date,le=ia(As(en,"nudges"),Sn("toUserId","==",r.uid),Sn("timestamp",">=",Q)),Le=XM(le,H=>{H.docChanges().forEach(Y=>{if(Y.type==="added"){const Ce=`📚 ${Y.doc.data().fromUserName||"Scholar"} says: padh lo padh lo kam dega!`;ge(Ce,{duration:6e3,icon:"💡",style:{background:"#1e293b",color:"#f8fafc",fontWeight:"800",fontSize:"12px"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Study Nudge 📚",{body:Ce,icon:"/logo-acb.png"})}})});if(!t)return()=>Le();(async()=>{var ot;const H=new Date().toLocaleDateString("en-CA"),Y=new Date().getHours();if(Y>=5){const Ve=`morning_greeting_${H}`;if(!localStorage.getItem(Ve)){const Rt=ia(As(en,"StudySessions"),Sn("userId","==",r.uid),Sn("date","==",H)),Pt=!(await gc(Rt)).empty||R||Y>=8,Qt=r.name||"Bihari Babu";let He="",at="";Pt?(He="Good Morning Biru 🌞",at=`Subah-subah yaad aa gaya ki duniya mein ek banda aur hai jo bade-bade sapne dekhta hai aur phir unhe pura karne ki koshish bhi karta hai. 😄

Aaj ka mission simple hai:

Bakchodi limited 😜
Mehnat unlimited 💪
Tension zero 😌

Aur haan, agar aaj motivation na mile to yaad rakhna — sapne free hain, lekin unki EMI roz ki mehnat se bharni padti hai. 😅

Din mast jaye bhai, kuch aisa karna ki raat ko lage ki aaj ka din waste nahi gaya. ❤️✨`):(He=`Good Morning Bhai ${Qt} ☀️`,at=`Uth ja bidu 😄, kitna soyega?

Naya din hai, naya chance hai. Kal jo nahi hua uska tension chhod, aaj jo kar sakta hai uspar focus kar.

Chai ☕ pi, fresh ho, aur lag ja apne kaam par. Thoda-thoda karke hi bade sapne pure hote hain.

Aur haan, mobile scroll karne se pehle apna target yaad kar lena. 😏

Chal bhai, aaj ka din phod dete hain. 💪🔥
Good Morning, have a great day! 🌞✨`),ge.custom(cn=>g.jsxs("div",{className:`${cn.visible?"animate-enter":"animate-leave"} max-w-md w-full bg-slate-900 text-white shadow-2xl rounded-[2rem] border border-slate-700/60 p-6 pointer-events-auto flex flex-col gap-3 font-['Inter'] z-[9999]`,children:[g.jsxs("div",{className:"flex justify-between items-start",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-xl",children:"🌅"}),g.jsx("h4",{className:"text-xs font-black uppercase tracking-wider text-amber-400",children:He})]}),g.jsx("button",{onClick:()=>ge.dismiss(cn.id),className:"text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-lg",children:"Close"})]}),g.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider leading-relaxed whitespace-pre-line text-slate-300",children:at})]}),{duration:15e3}),"Notification"in window&&Notification.permission==="granted"&&new Notification(He,{body:at.replace(/\n\n/g," "),icon:"/logo-acb.png"}),localStorage.setItem(Ve,"true")}}let oe=!1;if(Y>=8){const Ve=`timetable_alert_${H}`;if(!localStorage.getItem(Ve)){const Gt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],Qt=(((ot=r.timetableV3)==null?void 0:ot[Gt])||[]).filter(He=>He.subject&&He.subject.trim()!=="");if(Qt.length>0){const at=`🗓️ Aaj ki Classes:
${Qt.map(cn=>`• ${cn.startTime||""}: ${cn.subject}`).join(`
`)}
Time par pahunch jana biru, padhai shuru karo! 😉`;ge(at,{duration:8e3,icon:"🗓️",style:{background:"#f8fafc",color:"#0f172a",fontWeight:"800",fontSize:"11px",border:"1px solid #e2e8f0"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Timetable Classes Alert",{body:at,icon:"/logo-acb.png"})}localStorage.setItem(Ve,"true"),oe=!0}}const Ce=()=>{var Ve;if(Y>=6){const Rt=`attendance_alert_${H}`;if(!localStorage.getItem(Rt)){const Pt=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"][new Date().getDay()],He=(((Ve=r.timetableV3)==null?void 0:Ve[Pt])||[]).filter(at=>at.subject&&at.subject.trim()!=="").map(at=>at.subject.trim().toLowerCase());if(He.length>0){const at=r.attendance||[],cn=[];He.forEach(Tn=>{const Yt=at.find(Un=>Un.name.trim().toLowerCase()===Tn);if(Yt){const Un=Yt.total>0?Number((Yt.present/Yt.total*100).toFixed(1)):0,bo=Me=>Me<75?0:Me<=80?1:Me<=85?2:Me<=90?3:Me<=95?4:5;Un<75?cn.push({type:"danger",text:`🚨 Critical Attendance Alert: ${Yt.name} me attendance sirf ${Un}% hai (75% se niche)! College me back lag jayega biru, fatfat class lagao! 😤🔥`}):cn.push({type:"success",text:`🔥 Gazab Bhai! ${Yt.name} me attendance ${Un}% hai. Sessional me +${bo(Un)} number pakke hain tere! aise hi lagatar class karte raho! 💪✨`})}}),cn.forEach((Tn,Yt)=>{setTimeout(()=>{t?oa.schedule({notifications:[{title:"Attendance Alert",body:Tn.text,id:new Date().getTime()%1e5+Yt}]}):(ge(Tn.text,{duration:8e3,icon:Tn.type==="danger"?"🚨":"🔥",style:{background:Tn.type==="danger"?"#fecaca":"#d1fae5",color:Tn.type==="danger"?"#991b1b":"#065f46",fontWeight:"800",fontSize:"11px",border:`1px solid ${Tn.type==="danger"?"#fca5a5":"#6ee7b7"}`}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Attendance Alert",{body:Tn.text,icon:"/logo-acb.png"}))},Yt*1e3)})}localStorage.setItem(Rt,"true")}}};oe?setTimeout(Ce,2e3):Ce();const Se=async()=>{const Ve=`target_check_${H}`;if(!localStorage.getItem(Ve)){const Rt=ia(As(en,"Tasks"),Sn("userId","==",r.uid),Sn("date","==",H)),Gt=await gc(Rt);if(Gt.empty){const Pt="🎯 Target Alert: Bhai, aaj ka study target set nahi kiya tune! Plan tab me ja aur subject targets set kar jaldi! 😤🔥";t?oa.schedule({notifications:[{title:"Target Alert",body:Pt,id:new Date().getTime()%1e5}]}):ge(Pt,{duration:8e3,icon:"🎯",style:{background:"#fffbeb",color:"#b45309",fontWeight:"800",fontSize:"11px",border:"1px solid #fde68a"}})}else{const Pt=`🎯 Targets Setup: Aaj ke ${Gt.docs.length} targets scheduled hain tere! Chal birus, unhe complete karke dikha de aaj! 💪🔥`;t?oa.schedule({notifications:[{title:"Targets Setup",body:Pt,id:new Date().getTime()%1e5}]}):ge(Pt,{duration:8e3,icon:"✅",style:{background:"#f0fdf4",color:"#166534",fontWeight:"800",fontSize:"11px",border:"1px solid #bbf7d0"}})}localStorage.setItem(Ve,"true")}};oe?setTimeout(Se,4e3):setTimeout(Se,1500)})();const Z=async()=>{if(R)return;const H=new Date().toLocaleDateString("en-CA"),Y=ia(As(en,"StudySessions"),Sn("userId","==",r.uid),Sn("date","==",H));if((await gc(Y)).docs.reduce((Ve,Rt)=>Ve+(Number(Rt.data().duration)||0),0)>=10800)return;const Se=ia(As(en,"Tasks"),Sn("userId","==",r.uid),Sn("date","==",H),Sn("done","==",!1));if(!(await gc(Se)).empty){const Ve="📚 Bhai padh le, target complete karna hai, time waste mat kar! Sapne free hain biru, par unki EMI roz ki mehnat se bharni padti hai! 😉🔥";t?oa.schedule({notifications:[{title:"Padhai Remainder! 📚",body:Ve,id:new Date().getTime()%1e5}]}):(ge(Ve,{duration:9e3,icon:"✍️",style:{background:"#fff1f2",color:"#be123c",fontWeight:"900",fontSize:"11px",border:"1px solid #fecdd3"}}),"Notification"in window&&Notification.permission==="granted"&&new Notification("Padhai Remainder! 📚",{body:Ve,icon:"/logo-acb.png"}))}},ne=setTimeout(Z,12e4),we=setInterval(Z,9e5);return()=>{Le(),clearTimeout(ne),clearInterval(we)}},[r,R,w,C]);const _=async Q=>{if(Q.preventDefault(),!(l.length<10)){m(!0);try{await i({phone:l}),d(!1)}catch(le){console.error(le)}finally{m(!1)}}};D.useEffect(()=>{if(t){R?uf.lockApp().catch(console.error):uf.unlockApp().catch(console.error);const Q=eF.addListener("appStateChange",({isActive:le})=>{le&&R&&uf.lockApp().catch(console.error)});return()=>{Q.then(le=>le.remove())}}},[R,C,t]),D.useEffect(()=>{t&&oa.requestPermissions().catch(console.error)},[t]);const I=(pe=r==null?void 0:r.metadata)!=null&&pe.creationTime?new Date(r.metadata.creationTime).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"Recently",k=()=>{const{timerActive:Q,timerTime:le}=Cw();if(!Q||e.pathname==="/study")return null;const Le=Math.floor(le%3600/60),$=le%60;return g.jsxs("div",{onClick:()=>n("/study"),className:"flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-xl md:rounded-2xl cursor-pointer hover:bg-slate-800 transition-all shadow-lg active:scale-95 group animate-pulse",children:[g.jsx(bv,{size:14,className:"text-blue-500 group-hover:text-white transition-colors"}),g.jsxs("span",{className:"text-[10px] md:text-xs font-black text-white tabular-nums tracking-tighter",children:[Le.toString().padStart(2,"0"),":",$.toString().padStart(2,"0")]})]})},b=(Q=>Q==="/"?"Home":Q.includes("/study-resources")?"Study Resources":Q.includes("/study")?"Study Zone":Q.includes("/notes")?"B.Tech Notes":Q.includes("/pyq")?"PYQ Papers":Q.includes("/syllabus")?"BEU Syllabus":Q.includes("/cgpa")?"CGPA Calculator":Q.includes("/ugeac-predictor")?"UGEAC Predictor":Q.includes("/calculator")?"Calculator":Q.includes("/achievements")?"Achievements":Q.includes("/groups")?"Study Groups":Q.includes("/timetable")?"BEU Timetable":Q.includes("/attendance")?"BEU Attendance Tracker":Q.includes("/extras")?"Personal Manager":Q.includes("/calendar")?"Calendar":Q.includes("/beu-result")?"BEU Result":Q.includes("/admin")?"Admin Panel":"ACB Hub")(e.pathname),A=({to:Q,icon:le,label:Le})=>{const $=e.pathname===Q||Q!=="/"&&e.pathname.startsWith(Q);return g.jsxs(Xt,{to:Q,onClick:()=>v(!1),className:`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-bold ${$?"bg-blue-600 text-white shadow-md shadow-blue-600/20":"text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`,children:[g.jsx("div",{className:`${$?"text-white":"text-slate-400"}`,children:typeof le=="function"?g.jsx(le,{size:18}):le}),g.jsx("span",{className:"text-[12px] uppercase tracking-wider font-black",children:Le})]})};return g.jsxs("div",{className:"flex flex-col h-screen bg-[#f8fafc] overflow-hidden text-slate-900 font-['Inter'] selection:bg-blue-500/30 relative",children:[g.jsx(bF,{title:b}),g.jsx("header",{className:"bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[200] shrink-0 sticky top-0",children:g.jsxs("div",{className:"max-w-[1400px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 md:gap-3 group cursor-pointer",onClick:()=>n("/"),children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"}),g.jsxs("div",{className:"block",children:[g.jsx("span",{className:"text-sm md:text-xl font-[1000] tracking-tighter uppercase text-slate-900 block leading-none",children:"Apna College Bihar"}),g.jsx("span",{className:"text-[6px] md:text-[7px] text-blue-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] mt-0.5 md:mt-1 block",children:"Official App"})]})]}),g.jsxs("nav",{className:"hidden lg:flex items-center gap-6",children:[g.jsx(Xt,{to:"/",className:"text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:"Home"}),T.map((Q,le)=>g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>O(S===le?null:le),className:"flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors",children:[Q.title,g.jsx(Sv,{size:12,className:`transition-transform duration-200 ${S===le?"rotate-180":""}`})]}),S===le&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>O(null)}),g.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-2 z-[2000] animate-in fade-in duration-150 origin-top",children:Q.items.map(Le=>g.jsxs(Xt,{to:Le.path,className:"flex items-center gap-3 w-full p-3 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl transition-all font-bold",onClick:()=>O(null),children:[g.jsx("span",{className:"w-4 h-4 text-slate-500",children:Le.icon}),g.jsx("span",{className:"text-[11px] font-black uppercase tracking-widest",children:Le.name})]},Le.name))})]})]},Q.title))]}),g.jsx("div",{className:"flex items-center gap-3",children:o?g.jsx("div",{className:"w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}):r?g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(k,{}),g.jsxs("div",{className:`relative ${t?"hidden":"block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:"ApnaCollegeBihar_Stable.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>F(!j),className:"flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-slate-50 border border-slate-200 hover:border-blue-500/50 text-slate-900 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-sm active:scale-95 group",children:[g.jsx("div",{className:"w-5 h-5 rounded-lg overflow-hidden bg-slate-100",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Profile",className:"w-full h-full object-cover"})}),g.jsx("span",{className:"hidden md:inline",children:"My Profile"}),g.jsx(Sv,{size:12,className:`transition-transform duration-300 ${j?"rotate-180":""}`})]}),j&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"fixed inset-0 z-[1900]",onClick:()=>F(!1)}),g.jsxs("div",{className:"absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[2rem] shadow-2xl p-2 z-[2000] animate-in fade-in zoom-in-95 duration-200 origin-top-right",children:[g.jsxs("div",{className:"px-5 py-5 border-b border-slate-100 mb-2 text-center",children:[g.jsx("div",{className:"w-16 h-16 rounded-2xl overflow-hidden mb-3 mx-auto border border-slate-100 shadow-lg",children:g.jsx("img",{src:"/logo-acb.png?v=99",alt:"ACB",className:"w-full h-full object-cover"})}),g.jsx("p",{className:"text-[8px] font-black text-blue-600 uppercase tracking-widest leading-none mb-1",children:"ACB Official Account"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-900 truncate",children:r.email}),g.jsxs("div",{className:"flex items-center justify-center gap-1 text-[8px] text-slate-500 mt-1.5 font-bold",children:[g.jsx(Iv,{size:10,className:"text-blue-500"}),g.jsxs("span",{children:["Joined: ",g.jsx("strong",{className:"text-slate-900",children:I})]})]})]}),g.jsx("div",{className:"space-y-1",children:g.jsxs("button",{onClick:()=>s(),className:"flex items-center gap-3 w-full p-3 hover:bg-red-50 text-slate-500 hover:text-red-600 rounded-2xl transition-all group",children:[g.jsx("div",{className:"p-2 bg-slate-100 group-hover:bg-red-600/10 rounded-xl transition-colors",children:g.jsx(Rv,{size:14})}),g.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest",children:"Logout Session"})]})})]})]})]})]}):g.jsxs("div",{className:"flex items-center gap-2 md:gap-4",children:[g.jsx(k,{}),g.jsxs("div",{className:`relative ${t?"hidden":"block"}`,children:[g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:"ApnaCollegeBihar_Stable.apk",className:"flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-500/20 rounded-xl text-[8px] md:text-[9px] font-black uppercase tracking-widest transition-all shadow-sm active:scale-95",children:[g.jsx("span",{className:"hidden md:inline",children:"Download"})," APK"]}),g.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-[6px] md:text-[7px] font-black uppercase px-1.5 py-0.5 rounded-full shadow-md animate-pulse",children:"New"})]}),g.jsx(Xt,{to:"/login",className:"hidden md:block px-4 py-2.5 md:px-5 md:py-3 text-slate-600 hover:text-slate-900 font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-colors",children:"Login"}),g.jsx(Xt,{to:"/signup",className:"px-4 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/30 active:scale-95",children:"Sign Up"})]})})]})}),g.jsxs("main",{className:"flex-1 overflow-y-auto custom-scrollbar relative z-10 bg-[#f8fafc] flex flex-col",children:[g.jsx("div",{className:"w-full grow shrink-0 pb-24 lg:pb-8 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto min-h-[80vh]",children:g.jsx(Wm,{})}),t?g.jsxs("footer",{className:"shrink-0 bg-transparent text-slate-500 py-8 px-6 mt-4 w-full",children:[g.jsxs("div",{className:"flex justify-center gap-6 mb-6",children:[g.jsx(Xt,{to:"/about",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"About"}),g.jsx(Xt,{to:"/contact",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Contact"}),g.jsx(Xt,{to:"/privacy-policy",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Privacy"}),g.jsx(Xt,{to:"/terms",className:"text-[10px] font-black uppercase tracking-widest hover:text-blue-600 transition-colors",children:"Terms"})]}),g.jsxs("div",{className:"text-center flex flex-col items-center justify-center gap-2",children:[g.jsxs("p",{className:"text-[9px] font-black uppercase tracking-widest text-slate-400",children:["© ",new Date().getFullYear()," Apna College Bihar."]}),g.jsxs("p",{className:"text-[10px] font-bold text-slate-500 tracking-wider",children:["Made with ",g.jsx("span",{className:"text-red-500",children:"❤️"})," for BEU STUDENTS"]})]})]}):g.jsxs("footer",{className:"shrink-0 bg-slate-900 text-slate-400 py-12 px-6 lg:px-12 rounded-t-[2rem] md:rounded-t-[3rem] mt-12 w-full border-t-[8px] border-blue-600",children:[g.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[g.jsx("img",{src:"/logo-acb.png?v=99",alt:"Logo",className:"w-10 h-10 rounded-xl object-cover shadow-sm bg-white p-0.5"}),g.jsx("span",{className:"text-xl font-[1000] tracking-tighter uppercase text-white leading-none",children:"Apna College Bihar"})]}),g.jsx("p",{className:"text-xs font-medium max-w-xs mb-4 leading-relaxed",children:"The ultimate study engine and counselling companion for Bihar Engineering students. Building the future of BEU together."}),g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("a",{href:"#",className:"p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all",children:g.jsx(Av,{size:18})}),g.jsx("a",{href:"#",className:"p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all",children:g.jsx(Cv,{size:18})}),g.jsx("a",{href:"#",className:"p-2.5 bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white rounded-xl transition-all",children:g.jsx(xv,{size:18})})]})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2",children:[g.jsx(kv,{size:16,className:"text-blue-500"})," Quick Links"]}),g.jsxs("ul",{className:"space-y-3 text-xs font-bold uppercase tracking-wider",children:[g.jsx("li",{children:g.jsxs(Xt,{to:"/about",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(cc,{size:12,className:"text-slate-600"})," About Us"]})}),g.jsx("li",{children:g.jsxs(Xt,{to:"/contact",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(cc,{size:12,className:"text-slate-600"})," Contact Support"]})}),g.jsx("li",{children:g.jsxs(Xt,{to:"/privacy-policy",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(cc,{size:12,className:"text-slate-600"})," Privacy Policy"]})}),g.jsx("li",{children:g.jsxs(Xt,{to:"/terms",className:"hover:text-blue-400 transition-colors flex items-center gap-2",children:[g.jsx(cc,{size:12,className:"text-slate-600"})," Terms of Service"]})})]})]}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-white font-black uppercase tracking-widest text-xs mb-6 flex items-center gap-2",children:[g.jsx(wv,{size:16,className:"text-blue-500"})," Get the App"]}),g.jsx("p",{className:"text-xs font-medium leading-relaxed mb-6",children:"Download the official Android app for push notifications and a native experience."}),g.jsxs("a",{href:"/ApnaCollegeBihar_Stable.apk",download:!0,className:"inline-flex items-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/20 active:scale-95",children:["Download APK ",g.jsx(wv,{size:16})]})]})]}),g.jsxs("div",{className:"max-w-7xl mx-auto pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center gap-2",children:[g.jsxs("p",{className:"text-[10px] font-black uppercase tracking-widest text-slate-500",children:["© ",new Date().getFullYear()," Apna College Bihar. All rights reserved."]}),g.jsxs("p",{className:"text-[8px] font-bold text-slate-600 tracking-wider",children:["Made with ",g.jsx("span",{className:"text-red-500",children:"❤️"})," for BEU STUDENTS"]})]})]})]}),E&&g.jsx("div",{className:"fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[250] lg:hidden",onClick:()=>v(!1)}),g.jsxs("aside",{className:`fixed inset-y-0 right-0 w-72 bg-white border-l border-slate-200 shadow-2xl z-[300] transform transition-transform duration-300 ease-in-out flex flex-col lg:hidden ${E?"translate-x-0":"translate-x-full"}`,children:[g.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50",children:[g.jsx("span",{className:"text-[10px] font-black tracking-widest uppercase text-slate-400 block leading-none",children:"Navigation Menu"}),g.jsx("button",{onClick:()=>v(!1),className:"text-slate-400 hover:text-slate-900 bg-white p-2 rounded-xl shadow-sm border border-slate-200",children:g.jsx(cb,{size:16,strokeWidth:3})})]}),g.jsx("div",{className:"flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar",children:T.map(Q=>g.jsxs("div",{children:[g.jsxs("p",{className:"px-4 text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2",children:[g.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-blue-500"})," ",Q.title]}),g.jsx("div",{className:"space-y-1",children:Q.items.map(le=>g.jsx(A,{to:le.path,icon:()=>le.icon,label:le.name},le.name))})]},Q.title))}),g.jsx("div",{className:"p-4 border-t border-slate-100 bg-slate-50",children:g.jsxs("button",{onClick:()=>s(),className:"w-full flex items-center justify-center gap-2 px-4 py-4 bg-white hover:bg-red-50 text-slate-600 hover:text-red-600 rounded-2xl transition-all font-black uppercase text-[10px] tracking-widest shadow-sm border border-slate-200",children:[g.jsx(Rv,{size:16,strokeWidth:2.5})," Logout Session"]})})]}),u&&w&&g.jsx("div",{className:"fixed inset-0 z-[400] flex items-center justify-center p-6 bg-slate-50/80 backdrop-blur-xl",children:g.jsxs("div",{className:"w-full max-w-md bg-white border border-slate-200 rounded-[3rem] p-10 text-center space-y-8 shadow-2xl relative overflow-hidden",children:[g.jsx("div",{className:"inline-flex p-5 bg-blue-600/20 text-blue-500 rounded-3xl",children:g.jsx(Cv,{size:32})}),g.jsx("h2",{className:"text-2xl font-[1000] text-slate-900 uppercase tracking-tighter",children:"Security Update"}),g.jsx("p",{className:"text-slate-500 text-sm",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:_,className:"space-y-6",children:[g.jsxs("div",{className:"flex gap-2",children:[g.jsx("div",{className:"bg-slate-100 px-4 py-4 rounded-2xl text-xs font-black",children:"+91"}),g.jsx("input",{type:"tel",maxLength:10,value:l,onChange:Q=>c(Q.target.value.replace(/\D/g,"")),placeholder:"10-DIGIT MOBILE NO.",className:"flex-1 bg-slate-100 rounded-2xl p-4 text-sm font-black outline-none"})]}),g.jsx("button",{type:"submit",className:"w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all",children:"Save & Continue"})]})]})})]})}const NF=()=>{var d;const{user:t,loading:e,updateProfileData:n,logout:r}=Co(),[i,s]=D.useState(""),[o,l]=D.useState(!1);if(e)return g.jsx("div",{className:"min-h-screen bg-[#f8fafc] flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"})});if(!t)return localStorage.setItem("lastPath",window.location.pathname+window.location.search),g.jsx(xa,{to:"/login",replace:!0});const c=!(t!=null&&t.phone)||((d=t==null?void 0:t.phone)==null?void 0:d.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED",u=async f=>{if(f.preventDefault(),i.length<10)return Ld.error("Enter a valid 10-digit number!");l(!0);try{await n({phone:i}),Ld.success("Mobile number linked securely!")}catch{Ld.error("Failed to save. Try again.")}finally{l(!1)}};return c?g.jsx("div",{className:"fixed inset-0 z-[9999] bg-[#f8fafc]/90 backdrop-blur-md flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(EI,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Security Check"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-8",children:"Please link your active mobile number to secure your college portal access."}),g.jsxs("form",{onSubmit:u,className:"w-full space-y-4",children:[g.jsxs("div",{className:"relative group",children:[g.jsx(Pv,{className:"absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400",size:18}),g.jsx("input",{type:"tel",value:i,onChange:f=>s(f.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.5rem] p-5 pl-16 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-500",required:!0})]}),g.jsx("button",{type:"submit",disabled:o,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-5 rounded-[1.8rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:o?"Updating...":"Save & Continue"})]}),g.jsxs("button",{onClick:()=>window.history.back(),className:"mt-6 text-slate-400 hover:text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors",children:[g.jsx(Pv,{size:12,className:"rotate-180"})," Cancel & Go Back"]}),g.jsx("button",{onClick:()=>r(),className:"mt-4 text-red-400 hover:text-red-500 text-[8px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})}):g.jsx(Wm,{})},DF=()=>{const{user:t,loading:e,ROLES:n}=Co();return e?g.jsx("div",{className:"min-h-screen bg-slate-950 flex items-center justify-center",children:g.jsx("div",{className:"w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"})}):(t==null?void 0:t.email)==="prince86944@gmail.com"||(t==null?void 0:t.role)===n.SUPER_ADMIN?g.jsx(Wm,{}):g.jsx(xa,{to:"/",replace:!0})},OF=G.lazy(()=>se(()=>import("./Home.js"),["assets/Home.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/check-circle.js","assets/download.js","assets/chevron-right.js","assets/target.js","assets/users.js","assets/external-link.js"]));G.lazy(()=>se(()=>import("./HomeOverview.js"),["assets/HomeOverview.js","assets/sparkles.js","assets/users.js","assets/flame.js","assets/check-circle.js","assets/zap.js"]));const LF=G.lazy(()=>se(()=>import("./AppHub.js"),["assets/AppHub.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/log-in.js","assets/trash-2.js","assets/message-circle.js","assets/users.js","assets/briefcase.js","assets/external-link.js"])),VF=G.lazy(()=>se(()=>import("./Login.js"),["assets/Login.js","assets/sparkles.js","assets/chrome.js"])),MF=G.lazy(()=>se(()=>import("./Signup.js"),["assets/Signup.js","assets/sparkles.js","assets/chrome.js"])),jF=G.lazy(()=>se(()=>import("./UgeacPredictor.js"),["assets/UgeacPredictor.js","assets/jspdf.es.min.js","assets/UgeacData.js","assets/pdfHelper.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/check-circle-2.js","assets/zap.js","assets/layers.js","assets/download.js","assets/info.js","assets/building-2.js","assets/chevron-up.js","assets/trash-2.js","assets/plus.js","assets/wifi.js","assets/search.js","assets/map-pin.js","assets/external-link.js","assets/UgeacPredictor.css"])),hf=G.lazy(()=>se(()=>import("./Notes.js"),["assets/Notes.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),df=G.lazy(()=>se(()=>import("./PYQ.js"),["assets/PYQ.js","assets/PremiumAds.js","assets/bell.js","assets/external-link.js","assets/info.js","assets/youtube.js","assets/chevron-right.js","assets/search.js","assets/arrow-left.js","assets/eye.js","assets/download.js"])),Fw=G.lazy(()=>se(()=>import("./BeuSyllabus.js"),["assets/BeuSyllabus.js","assets/jspdf.es.min.js","assets/loader-2.js","assets/download.js","assets/search.js","assets/chevron-up.js"])),UF=G.lazy(()=>se(()=>import("./BeuCgpa.js"),["assets/BeuCgpa.js","assets/check-circle.js","assets/plus.js","assets/trash-2.js","assets/chevron-up.js","assets/bar-chart-3.js"])),FF=G.lazy(()=>se(()=>import("./StudyDashboard.js"),["assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js"])),BF=G.lazy(()=>se(()=>import("./StudyResources.js"),["assets/StudyResources.js","assets/loader-2.js","assets/plus.js","assets/alert-circle.js","assets/search.js","assets/external-link.js"])),$F=G.lazy(()=>se(()=>import("./ScientificCalc.js"),["assets/ScientificCalc.js","assets/clock.js"])),zF=G.lazy(()=>se(()=>import("./AdminPanel.js"),["assets/AdminPanel.js","assets/loader-2.js","assets/alert-circle.js","assets/users.js","assets/bar-chart-3.js","assets/search.js","assets/trash-2.js","assets/eye.js","assets/bell.js"])),HF=G.lazy(()=>se(()=>import("./Achievements.js"),["assets/Achievements.js","assets/trophy.js","assets/flame.js","assets/clock.js","assets/zap.js"])),WF=G.lazy(()=>se(()=>import("./Group.js"),["assets/Group.js","assets/users.js","assets/search.js","assets/plus.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js"])),qF=G.lazy(()=>se(()=>import("./GroupDetail.js"),["assets/GroupDetail.js","assets/arrow-left.js","assets/trash-2.js","assets/external-link.js","assets/trophy.js","assets/chevron-right.js"])),KF=G.lazy(()=>se(()=>import("./Timetable.js"),["assets/Timetable.js","assets/save.js","assets/info.js","assets/plus.js"])),GF=G.lazy(()=>se(()=>import("./Attendance.js"),["assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js"])),QF=G.lazy(()=>se(()=>import("./BeuResult.js"),["assets/BeuResult.js","assets/external-link.js","assets/info.js"])),YF=G.lazy(()=>se(()=>import("./PersonalManager.js"),["assets/PersonalManager.js","assets/search.js","assets/trash-2.js","assets/chevron-right.js","assets/arrow-left.js","assets/save.js","assets/clock.js"])),JF=G.lazy(()=>se(()=>import("./Calendar.js"),["assets/Calendar.js","assets/chevron-right.js","assets/bell.js"])),XF=G.lazy(()=>se(()=>import("./PrivacyPolicy.js"),["assets/PrivacyPolicy.js","assets/eye.js"])),ZF=G.lazy(()=>se(()=>import("./Terms.js"),["assets/Terms.js","assets/check-circle-2.js"])),e6=G.lazy(()=>se(()=>import("./DeleteAccount.js"),["assets/DeleteAccount.js","assets/check-circle-2.js","assets/trash-2.js","assets/log-in.js"])),t6=G.lazy(()=>se(()=>import("./About.js"),["assets/About.js","assets/sparkles.js","assets/heart.js","assets/users.js"])),n6=G.lazy(()=>se(()=>import("./Contact.js"),["assets/Contact.js","assets/message-circle.js","assets/youtube.js","assets/check-circle-2.js","assets/help-circle.js"])),r6=G.lazy(()=>se(()=>import("./SearchSEO.js"),["assets/SearchSEO.js","assets/search.js","assets/loader-2.js"])),Bw=G.lazy(()=>se(()=>import("./BeuToolSEO.js"),["assets/BeuToolSEO.js","assets/Attendance.js","assets/bell.js","assets/external-link.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/info.js","assets/chevron-right.js","assets/Timetable.js","assets/save.js","assets/BeuCgpa.js","assets/check-circle.js","assets/chevron-up.js","assets/bar-chart-3.js","assets/BeuResult.js"])),$w=G.lazy(()=>se(()=>import("./FeatureSEO.js"),["assets/FeatureSEO.js","assets/StudyDashboard.js","assets/clock.js","assets/users.js","assets/flame.js","assets/chevron-right.js","assets/plus.js","assets/trash-2.js","assets/check-circle-2.js","assets/search.js","assets/Group.js","assets/check-circle.js","assets/alert-circle.js","assets/log-in.js","assets/StudyResources.js","assets/loader-2.js","assets/external-link.js","assets/ScientificCalc.js","assets/PersonalManager.js","assets/arrow-left.js","assets/save.js"])),zw=G.lazy(()=>se(()=>import("./CollegeProfile.js"),["assets/CollegeProfile.js","assets/collegeData.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/building-2.js","assets/chevron-right.js","assets/check-circle.js","assets/map-pin.js","assets/download.js","assets/layers.js","assets/users.js","assets/target.js","assets/wifi.js","assets/clock.js"])),Hw=G.lazy(()=>se(()=>import("./BranchHub.js"),["assets/BranchHub.js","assets/chevron-right.js","assets/cpu.js","assets/briefcase.js","assets/bar-chart-3.js","assets/users.js","assets/help-circle.js"])),i6=G.lazy(()=>se(()=>import("./UgeacInfo.js"),["assets/UgeacInfo.js","assets/chevron-right.js","assets/help-circle.js","assets/check-circle-2.js"])),Ww=G.lazy(()=>se(()=>import("./SubjectPage.js"),["assets/SubjectPage.js","assets/chevron-right.js","assets/loader-2.js","assets/download.js"])),s6=G.lazy(()=>se(()=>import("./HackathonHub.js"),["assets/HackathonHub.js","assets/chevron-right.js","assets/plus.js","assets/search.js","assets/loader-2.js","assets/external-link.js","assets/building-2.js","assets/check-circle-2.js","assets/users.js"])),o6=G.lazy(()=>se(()=>import("./SitemapDirectory.js"),["assets/SitemapDirectory.js","assets/UgeacData.js","assets/building-2.js","assets/cpu.js"])),a6=G.lazy(()=>se(()=>import("./CollegeDirectory.js"),["assets/CollegeDirectory.js","assets/collegeData.js","assets/Footer.js","assets/youtube.js","assets/heart.js","assets/building-2.js","assets/search.js","assets/target.js","assets/map-pin.js","assets/layers.js","assets/check-circle.js","assets/chevron-right.js"])),qw=G.lazy(()=>se(()=>import("./CompareColleges.js"),["assets/CompareColleges.js","assets/UgeacData.js","assets/layers.js"])),l6=G.lazy(()=>se(()=>import("./PercentilePredictor.js"),[]));function c6(){return g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Loading Interface..."})]})}function u6(){var w,x,R;const{user:t,updateProfileData:e,logout:n}=Co(),[r,i]=D.useState(""),[s,o]=D.useState(""),[l,c]=D.useState(""),[u,d]=D.useState(!1);if(D.useEffect(()=>{t&&(i(t.name&&t.name!=="Scholar"?t.name:""),o(t.collegeName||""),c(t.phone&&t.phone!=="NOT LINKED"?t.phone:""))},[t]),!(t&&(!(t!=null&&t.phone)||((w=t==null?void 0:t.phone)==null?void 0:w.trim())===""||(t==null?void 0:t.phone)==="NOT LINKED"||!(t!=null&&t.name)||((x=t==null?void 0:t.name)==null?void 0:x.trim())===""||(t==null?void 0:t.name)==="Scholar"||!(t!=null&&t.collegeName)||((R=t==null?void 0:t.collegeName)==null?void 0:R.trim())==="")))return null;const m=async C=>{if(C.preventDefault(),!r.trim())return ge.error("Please enter your name!");if(!s.trim())return ge.error("Please enter your college name!");if(l.length<10)return ge.error("Enter a valid 10-digit mobile number!");d(!0);try{await e({name:r.trim(),collegeName:s.trim(),phone:l}),ge.success("Profile setup completed successfully!")}catch{ge.error("Failed to save. Try again.")}finally{d(!1)}};return g.jsx("div",{className:"fixed inset-0 z-[99999] bg-[#0a0f1d]/95 backdrop-blur-md flex items-center justify-center p-4 font-['Inter'] animate-in fade-in duration-300",children:g.jsxs("div",{className:"bg-white border border-slate-200/50 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-[450px] w-full relative overflow-hidden group",children:[g.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full"}),g.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[g.jsx("div",{className:"p-4 bg-blue-600/10 rounded-full border border-blue-500/20 mb-6",children:g.jsx(EI,{className:"text-blue-500 w-10 h-10"})}),g.jsx("h2",{className:"text-2xl md:text-3xl font-[900] text-center text-slate-900 uppercase tracking-tighter mb-2",children:"Profile Setup"}),g.jsx("p",{className:"text-slate-500 text-xs font-bold text-center mb-6",children:"Please complete your details to unlock and secure your college portal access."}),g.jsxs("form",{onSubmit:m,className:"w-full space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Full Name"}),g.jsx("input",{type:"text",value:r,onChange:C=>i(C.target.value),placeholder:"YOUR FULL NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"College Name"}),g.jsx("input",{type:"text",value:s,onChange:C=>o(C.target.value),placeholder:"YOUR COLLEGE NAME",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5",children:"Mobile Number"}),g.jsx("input",{type:"tel",value:l,onChange:C=>c(C.target.value.replace(/\D/g,"").slice(0,10)),placeholder:"10-DIGIT MOBILE NO.",className:"w-full bg-slate-100 border border-slate-200 focus:border-blue-500/50 rounded-[1.2rem] p-4 text-slate-900 text-xs font-bold outline-none transition-all placeholder:text-slate-400",required:!0})]}),g.jsx("button",{type:"submit",disabled:u,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-[1000] py-4.5 rounded-[1.5rem] shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all active:scale-95 text-xs tracking-widest uppercase mt-4",children:u?"Saving details...":"Save & Continue"})]}),g.jsx("button",{onClick:()=>n(),className:"mt-6 text-red-400 hover:text-red-500 text-[9px] font-black uppercase tracking-widest transition-colors",children:"Sign out from this account"})]})]})})}function h6(){const{user:t,loading:e}=Co(),[n,r]=D.useState(!0),[i,s]=D.useState(window.innerWidth<768),o=xn.isNativePlatform();new URLSearchParams(window.location.search).get("standalone")==="true"&&sessionStorage.setItem("standalone","true");const c=o||sessionStorage.getItem("standalone")==="true";if(D.useEffect(()=>{const u=()=>s(window.innerWidth<768);return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),D.useEffect(()=>{const u=setTimeout(()=>{r(!1)},5e3);return e||(r(!1),clearTimeout(u)),()=>clearTimeout(u)},[e]),n)return g.jsxs("div",{className:"min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center",children:[g.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),g.jsx("p",{className:"text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse",children:"Initializing Hub..."})]});try{return g.jsxs(g.Fragment,{children:[g.jsx(ZC,{position:"top-right"}),g.jsx(u6,{}),g.jsx(G.Suspense,{fallback:g.jsx(c6,{}),children:g.jsxs(tC,{children:[g.jsx(J,{path:"/hub",element:g.jsx(LF,{})}),g.jsx(J,{path:"/login",element:g.jsx(VF,{})}),g.jsx(J,{path:"/signup",element:g.jsx(MF,{})}),g.jsx(J,{path:"/privacy-policy",element:g.jsx(XF,{})}),g.jsx(J,{path:"/terms",element:g.jsx(ZF,{})}),g.jsx(J,{path:"/delete-account",element:g.jsx(e6,{})}),g.jsx(J,{path:"/about",element:g.jsx(t6,{})}),g.jsx(J,{path:"/contact",element:g.jsx(n6,{})}),g.jsx(J,{path:"/directory",element:c?g.jsx(xa,{to:"/",replace:!0}):g.jsx(o6,{})}),g.jsx(J,{path:"/",element:o?g.jsx(xa,{to:"/hub",replace:!0}):g.jsx(OF,{})}),g.jsxs(J,{element:g.jsx(Uw,{}),children:[g.jsx(J,{path:"/search/:keyword",element:g.jsx(r6,{})}),g.jsx(J,{path:"/notes",element:g.jsx(hf,{})}),g.jsx(J,{path:"/notes/:branchId/:semesterId",element:g.jsx(hf,{})}),g.jsx(J,{path:"/notes/:branchId",element:g.jsx(hf,{})}),g.jsx(J,{path:"/pyq",element:g.jsx(df,{})}),g.jsx(J,{path:"/pyq/:branchId/:semesterId",element:g.jsx(df,{})}),g.jsx(J,{path:"/pyq/:branchId",element:g.jsx(df,{})}),g.jsx(J,{path:"/attendance",element:g.jsx(GF,{})}),g.jsx(J,{path:"/timetable",element:g.jsx(KF,{})}),g.jsx(J,{path:"/study",element:g.jsx(FF,{})}),g.jsx(J,{path:"/study-resources",element:g.jsx(BF,{})}),g.jsx(J,{path:"/calculator",element:g.jsx($F,{})}),g.jsx(J,{path:"/groups",element:g.jsx(WF,{})}),g.jsx(J,{path:"/groups/:groupId",element:g.jsx(qF,{})}),g.jsx(J,{path:"/achievements",element:g.jsx(HF,{})}),g.jsx(J,{path:"/extras",element:g.jsx(YF,{})}),g.jsx(J,{path:"/calendar",element:g.jsx(JF,{})}),g.jsx(J,{path:"/cgpa",element:g.jsx(UF,{})}),g.jsx(J,{path:"/ugeac-predictor",element:g.jsx(jF,{})}),g.jsx(J,{path:"/beu-result",element:g.jsx(QF,{})}),g.jsx(J,{path:"/syllabus",element:g.jsx(Fw,{})}),g.jsx(J,{path:"/syllabus/:branchId",element:g.jsx(Fw,{})}),g.jsx(J,{path:"/colleges",element:g.jsx(a6,{})}),g.jsx(J,{path:"/college/:collegeSlug",element:g.jsx(zw,{})}),g.jsx(J,{path:"/college/:collegeSlug/:section",element:g.jsx(zw,{})}),g.jsx(J,{path:"/branch/:branchId",element:g.jsx(Hw,{})}),g.jsx(J,{path:"/branch/:branchId/:section",element:g.jsx(Hw,{})}),g.jsx(J,{path:"/ugeac/:page",element:g.jsx(i6,{})}),g.jsx(J,{path:"/subject/:subjectSlug",element:g.jsx(Ww,{})}),g.jsx(J,{path:"/subject/:subjectSlug/:section",element:g.jsx(Ww,{})}),g.jsx(J,{path:"/hackathons",element:g.jsx(s6,{})}),g.jsx(J,{path:"/compare",element:g.jsx(qw,{})}),g.jsx(J,{path:"/compare/:college1VsCollege2",element:g.jsx(qw,{})}),g.jsx(J,{path:"/percentile-predictor",element:g.jsx(l6,{})}),g.jsx(J,{path:"/beu/:tool",element:g.jsx(Bw,{})}),g.jsx(J,{path:"/beu/:tool/:keyword",element:g.jsx(Bw,{})}),g.jsx(J,{path:"/feature/:feature",element:g.jsx($w,{})}),g.jsx(J,{path:"/feature/:feature/:keyword",element:g.jsx($w,{})})]}),g.jsx(J,{element:g.jsx(NF,{}),children:g.jsx(J,{element:g.jsx(Uw,{}),children:g.jsx(J,{element:g.jsx(DF,{}),children:g.jsx(J,{path:"/dashboard/admin",element:g.jsx(zF,{})})})})}),g.jsx(J,{path:"*",element:g.jsx(xa,{to:"/",replace:!0})})]})})]})}catch(u){return console.error("App Crash:",u),g.jsxs("div",{className:"min-h-screen bg-[#0a0f1d] flex flex-col items-center justify-center p-10 text-center",children:[g.jsx("div",{className:"w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mb-6",children:g.jsx(nb,{size:32})}),g.jsx("h2",{className:"text-xl font-black text-white uppercase tracking-tighter mb-2",children:"Interface Error"}),g.jsx("p",{className:"text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed mb-8",children:"Something went wrong while initializing the hub. Please try restarting the app."}),g.jsx("button",{onClick:()=>r(!0),className:"px-8 py-4 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all",children:"Retry Hub"})]})}}console.log("[DEBUG] main.jsx starting...");console.log("[DEBUG] Imports done. Ready to mount...");const Kw=document.getElementById("root");if(!Kw)console.error("[CRITICAL] Could not find #root element!");else try{console.log("[DEBUG] Creating root...");const t=pf.createRoot(Kw);console.log("[DEBUG] Rendering app to root..."),t.render(g.jsx(G.StrictMode,{children:g.jsx(ik,{children:g.jsx(XU,{children:g.jsx(ZU,{children:g.jsx(lC,{children:g.jsx(h6,{})})})})})})),console.log("[DEBUG] Render call reached.")}catch(t){console.error("[CRITICAL] React Render Error:",t)}export{nb as $,wv as A,Ev as B,Sv as C,U6 as D,Cv as E,ib as F,sb as G,Ys as H,hi as I,B6 as J,JM as K,Xt as L,sw as M,H6 as N,W6 as O,$6 as P,z6 as Q,G as R,bF as S,bv as T,lb as U,sA as V,gc as W,cb as X,Cw as Y,cc as Z,se as _,Hm as a,C2 as a0,N6 as a1,Ld as a2,xn as a3,jn as a4,M6 as a5,j6 as a6,zh as a7,w6 as a8,XD as a9,P6 as aA,x6 as aB,R6 as aC,PD as aD,k6 as aE,$O as aF,n0 as aG,L6 as aH,O6 as aI,YD as aJ,Ir as aK,C6 as aL,qv as aM,AO as aN,m1 as aO,f1 as aP,q6 as aQ,v6 as aa,S6 as ab,WO as ac,Lc as ad,T6 as ae,xw as af,fs as ag,zr as ah,Hr as ai,Kn as aj,bO as ak,D6 as al,Wr as am,nD as an,b6 as ao,A6 as ap,_6 as aq,E6 as ar,Pw as as,aO as at,m6 as au,y6 as av,ZD as aw,I6 as ax,DO as ay,g6 as az,Rv as b,As as c,ob as d,Tv as e,Iv as f,Av as g,EI as h,xv as i,g as j,en as k,$e as l,ab as m,kv as n,XM as o,rb as p,ge as q,D as r,p6 as s,vo as t,Co as u,ia as v,F6 as w,Sn as x,f6 as y,Fu as z};
